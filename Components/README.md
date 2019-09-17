# Components element

In Kentico Kontent there is linked items element as well as linked items as a part of the rich text. Then there are components as a part of the rich text, but there are components missing as a stand-alone element so editors can't create as many components as they need with no related items created.

You can test it by configuring https://kentico.github.io/kontent-custom-element-samples/Components/components.html url for your custom element.

You can combine any number of HTML5 inputs -> text, textarea, color, date, time, number, radio, checkbox, password and range.

![screenshot](https://amend.cz/components/components_item.png)

This outputs to:
```json
[
   {
      "username":"administrator",
      "area":"some text",
      "color":"#ff80c0",
      "date":"2019-06-03",
      "time":"23:04",
      "number":"100",
      "animals":"rex",
      "fish":[
         "dolphin",
         "shark"
      ],
      "pass":"password",
      "range":"7"
   }
]
```

## Configuration

The main `name` parameter is used for identifying the component object. The value of this parameter is also used for buttons like Add or Delete the component.

Your have to configure `name` and `type` parameters for each of your inputs. Other input parameters such as `label` are optional. For radio butons and checkboxes you need to specify a list of `options`.

Following {JSON} parameters show all inputs used just once with all their configuration:

```json
{
    "name": "user",
    "inputs": [
        {
            "name": "username",
            "type": "text",
            "label": "User name:",
            "placeholder": "add some text"
        },
        {
            "name": "area",
            "type": "textarea",
            "label": "Area:",
            "placeholder": "enter some content"
        },
        {
            "name": "color",
            "type": "color",
            "label": "Select color:"
        },
        {
            "name": "date",
            "type": "date",
            "label": "Pick date:"
        },
        {
            "name": "time",
            "type": "time",
            "label": "Select time:"
        },
        {
            "name": "number",
            "type": "number",
            "label": "Select number:",
            "min": 10,
            "max": 100,
            "step": 5,
            "value": 50
        },
        {
            "name": "animals",
            "type": "radio",
            "label": "Choose animal:",
            "options": [
                [
                    "dog",
                    "dog"
                ],
                [
                    "cat",
                    "cat"
                ],
                [
                    "rex",
                    "tyrannosaurus rex"
                ]
            ]
        },
        {
            "name": "fish",
            "type": "checkbox",
            "label": "Choose fish:",
            "options": [
                [
                    "dolphin",
                    "dolphin"
                ],
                [
                    "shark",
                    "shark"
                ],
                [
                    "jellyfish",
                    "jellyfish"
                ]
            ]
        },
        {
            "name": "pass",
            "type": "password",
            "label": "Enter password:",
            "placeholder": "enter some password"
        },
        {
            "name": "range",
            "type": "range",
            "label": "Rating:",
            "min": 1,
            "max": 20,
            "step": 1
        }
    ]
}
```

## Examples of use

### Components for url links:
![screenshot](https://amend.cz/components/components_links.png)

Response:
```json
[
   {
      "url":"http://google.com",
      "text":"Google",
      "target":[
         "_blank"
      ]
   },
   {
      "url":"https://kontent.ai",
      "text":"Kentico Kontent",
      "target":[

      ]
   },
   {
      "url":"https://kentico.com",
      "text":"Kentico EMS",
      "target":[
         "_blank"
      ]
   }
]
```

### Components for code blocks:
![screenshot](https://amend.cz/components/components_codeblock.png)

Response:
```json
[
   {
      "code":"<html>\n <body>\n  <h1>Title</h1>\n </body>\n</html>",
      "type":"html"
   },
   {
      "code":"var a = \"Hello world!\";\nalert(a);",
      "type":"js"
   },
   {
      "code":"h1 {\ncolor: #FFF;\n}",
      "type":"css"
   }
]
```

![Analytics](https://kentico-ga-beacon.azurewebsites.net/api/UA-69014260-4/Kentico/kontent-custom-element-samples/Components?pixel)

