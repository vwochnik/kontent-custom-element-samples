# Unique textbox

This custom element check whether your entered value is unique across all items in your project in specified element:

![screenshot](https://amend.cz/unique_element.gif)

## Configuration

```json
{
    "codename": "unique_element",
    "request_repeater": "https://x2jp66x1y92.execute-api.eu-central-1.amazonaws.com/default/requestRepeater"
}
```

You need to specify both `codename` parameter for the element code name you want to check for unique values and you need to link your repeater in the `request_repeater` parameter.

To set up `request_repeater` above, please follow [Working with sensitive data in custom elements](https://docs.kontent.ai/tutorials/develop-apps/integrate/working-with-sensitive-data-in-custom-elements).
In **Step 2: Configuring your Lambda function**, use the following keys and values in the **Environment variables** section:
  - `BEARER_TOKEN`: `<Preview Delivery API key>`
  - `HOST`: `preview-delivery.kontent.ai`
  - `PATH`: `/<Project ID>/items`

You can test it by configuring https://kentico.github.io/kontent-custom-element-samples/UniqueTextbox/unique_text.html url for your custom element.

## Output

The JSON output of such an element would look like this:

```json
 "unique_element": {
        "type": "custom",
        "name": "Unique element",
        "value": "abcd"
      }
```
