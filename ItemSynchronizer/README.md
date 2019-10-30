# Item synchronizer

This custom element allows you to synchronize an item across multiple projects/environments. 

![screenshot](http://amend.cz/syncItems2.gif)

## Configuration

```json
{
    "serviceURL": "https://co4gdvtnha.execute-api.eu-central-1.amazonaws.com/default/syncFunction",
    "sourceProject": "1f33698f-a270-4b2d-90c5-9658a99c3140"
}
```

You need to specify the `serviceURL` parameter in order to enable the element to synchronize changes (the lamda function shown below). The `sourceProject` parameter needs to be there to tell the element the direction (from source project to target):

Since you can't provide your CM API tokens directly to the custom element, you need to create some server layer to do the CM request for you. You can follow our recommendation for creating a lambda function for this purpose:

[Working with sensitive data in custom elements](https://docs.kontent.ai/tutorials/develop-apps/integrate/working-with-sensitive-data-in-custom-elements).

In **Step 2: Configuring your Lambda function**, use the following keys and values in the **Environment variables** section:
  - `HOST`: `manage.kenticocloud.com`
  - `SOURCE_PROJECT`: `<source project ID>`
  - `TARGET_PROJECT`: `<target project ID>`
  - `SOURCE_BEARER_TOKEN`: `<source Content Management API key>`
  - `TARGET_BEARER_TOKEN`: `<target Content Management API key>`
  - `ACCESS_CONTROL_ALLOW_ORIGIN`: `<main your custom element is hosted on>`
  
![screenshot](http://amend.cz/synchronizer_configuration.png)

Also the code of the function itself has to be updated to this one instead:

```javascript
const https = require("https");

/* ========Config Section======== */
const host = process.env.HOST;
const path = "/v2/projects/";
const sourceProject = process.env.SOURCE_PROJECT;
const targetProject = process.env.TARGET_PROJECT;
const accessControlAllowOriginValue = process.env.ACCESS_CONTROL_ALLOW_ORIGIN;

// Bearer token authentization
const sourceBearerToken = process.env.SOURCE_BEARER_TOKEN;
const targetBearerToken = process.env.TARGET_BEARER_TOKEN;
const sourceAuthorizationHeaderValue = `Bearer ${sourceBearerToken}`;
const targetAuthorizationHeaderValue = `Bearer ${targetBearerToken}`;

    
let endpoint = '';
let method = '';
let body_data = '';
let token = '';

const request = (queryStringParameters, headers, body) => {
    if (queryStringParameters) {
        switch (queryStringParameters.ep) {
            case "workflow":
                endpoint = path+targetProject+'/workflow';
                method = 'GET';
                body_data = '';
                token = targetAuthorizationHeaderValue;
                break;
            case "sourceitem":
                endpoint = path+sourceProject+'/items/'+queryStringParameters.id;
                method = 'GET';
                body_data = '';
                token = sourceAuthorizationHeaderValue;
                break;
            case "targetitem":
                endpoint = path+targetProject+'/items/codename/'+queryStringParameters.codename;
                method = 'GET';
                body_data = '';
                token = targetAuthorizationHeaderValue;
                break;
            case "sourcevariant":
                endpoint = path+sourceProject+'/items/'+queryStringParameters.id+'/variants/codename/'+queryStringParameters.culture;
                method = 'GET';
                body_data = '';
                token = sourceAuthorizationHeaderValue;
                break;
            case "targetvariant":
                endpoint = path+targetProject+'/items/codename/'+queryStringParameters.codename+'/variants/codename/'+queryStringParameters.culture;
                method = 'GET';
                body_data = '';
                token = targetAuthorizationHeaderValue;
                break;
            case "syncitemPOST":
                endpoint = path+targetProject+'/items';
                method = 'POST';
                body_data = body;
                token = targetAuthorizationHeaderValue;
                break;
            case "syncitemPUT":
                endpoint = path+targetProject+'/items/codename/'+queryStringParameters.codename;
                method = 'PUT';
                body_data = body;
                token = targetAuthorizationHeaderValue;
                break;
            case "syncvariant":
                endpoint = path+targetProject+'/items/codename/'+queryStringParameters.codename+'/variants/codename/'+queryStringParameters.culture;
                method = 'PUT';
                body_data = body;
                token = targetAuthorizationHeaderValue;
                break;
            case "movetoworkflow":
                endpoint = path+targetProject+'/items/codename/'+queryStringParameters.codename+'/variants/codename/'+queryStringParameters.culture+'/workflow/'+queryStringParameters.workflow;
                method = 'PUT';
                body_data = '';
                token = targetAuthorizationHeaderValue;
                break;
            case "publish":
                endpoint = path+targetProject+'/items/codename/'+queryStringParameters.codename+'/variants/codename/'+queryStringParameters.culture+'/publish';
                method = 'PUT';
                body_data = '';
                token = targetAuthorizationHeaderValue;
                break;
            case "sourcetypes":
                endpoint = path+sourceProject+'/types';
                method = 'GET';
                body_data = '';
                token = sourceAuthorizationHeaderValue;
                break;
            case "targettypes":
                endpoint = path+targetProject+'/types';
                method = 'GET';
                body_data = '';
                token = targetAuthorizationHeaderValue;
                break;
            case "newversion":
                endpoint = path+targetProject+'/items/codename/'+queryStringParameters.codename+'/variants/codename/'+queryStringParameters.culture+'/new-version';
                method = 'PUT';
                body_data = '';
                token = targetAuthorizationHeaderValue;
                break;
        }
    }
    
    headers["Host"] = host;
    headers["Authorization"] = token;
    headers["Accept"] = "application/json";
    headers["accept-encoding"] = "identity";
    headers["Content-Type"] = "application/json";
    
    
    const requestOptions = {
           host: host,
           path: endpoint,
           port: 443,
           method: method,
           headers: headers
        };
        
     
    return new Promise((resolve, reject) => {
        const req = https.request(requestOptions, response => {
            response.setEncoding('utf8');
            let data = '';
            response.on("data", chunk => {
                data += chunk;
            });
            response.on("end", () => {
                if (data) {
                    const dataObject = JSON.parse(data);
                    response.data = dataObject;
                }
                resolve(response);
            });
        });
        
        
        req.on("error", error => {
                reject(error);
            });
        if (body_data) {
            req.write(body_data);
        }
        req.end();
    }); 
     
};


exports.handler = (event, context, callback) => {
    
    if (event.headers.origin.toLowerCase() == accessControlAllowOriginValue.toLowerCase()) {
        const corsHeaders = {
            "Access-Control-Allow-Origin": accessControlAllowOriginValue
        };
    
        const repeatResponse = (response) => {
            let multiValueHeaders = {};
    
            for (const headerName in response.headers) {
                if (Array.isArray(response.headers[headerName])) {
                    multiValueHeaders[headerName] = response.headers[headerName];
                    delete response.headers[headerName];
                }
            }
    
            callback(null, {
                statusCode: response.statusCode,
                body: JSON.stringify(response.data),
                headers: {'Content-Type': 'application/json',...corsHeaders},
                multiValueHeaders: multiValueHeaders,
            });
        };
    
        const sendError = (error) => {
            callback(null, {
                statusCode: "400",
                body: JSON.stringify(error),
                headers: {'Content-Type': 'application/json',...corsHeaders},
            });
        };
    
       
        request(event.queryStringParameters, event.headers, event.body)
            .then((response) => {
                repeatResponse(response);
            })
            .catch(error => {
                sendError(error);
            });
        
    }
    else {
        callback(null, {
                statusCode: "403"
            });
    }
};
```

The element itself dosnt store anything, it just renders a button for the synchronization.

### Restrictions

TODO: Multiple choice element can be synchronized only if the element was created by cloning
