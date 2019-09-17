# Image transformer

## What this is
This custom element functions similarly to the **Asset** element, but allows an editor to apply the Image Transformation API to any selected image.

Confused?
- What is Kentico Kontent: [Get started with Kentico Kontent](https://docs.kontent.ai/tutorials/develop-apps/get-started/hello-world-in-5-minutes)
- What is a custom element: [Integrating your own content editing features](https://docs.kontent.ai/tutorials/develop-apps/integrate/integrating-your-own-content-editing-features)

In action:
![ElementInAction](https://user-images.githubusercontent.com/34716163/55026851-35778180-4fda-11e9-878f-f790ed4bedb3.gif)

## How to set it up

1. Use a project on the Professional plan or higher.
1. Create or use an existing content type.
1. Drag in **Custom element** from the tray on the right.
1. In the element configuration, provide these values:
   - **Hosted code URL (HTTPS)**: `https://kentico.github.io/kontent-custom-element-samples/ImageTransformer/element.html`
   - **Parameters {JSON}**:
     ```
     {
        "listAssetsEndpoint": <Endpoint URL providing an asset listing response for the project>,
        "editorDefaultToPreview": <Optional: "true" or "false" (without quotes) to preview transformations in the editor by default>,
        "editorDefaultCropType": <Optional: One of the following default crop modes: "box", "zoom", "frame">,
        "editorDefaultResizeType": <Optional: One of the following default resize modes: "scale", "fit">,
        "colorPickerDefaultColors": <Optional: Array of default colors like ["#RRGGBBAA", "#4caf50", ...]>
     }
     ```
   * To set up `listAssetsEndpoint` above, please follow [Working with sensitive data in custom elements](https://docs.kontent.ai/tutorials/develop-apps/integrate/working-with-sensitive-data-in-custom-elements).
     - In **Step 2: Configuring your Lambda function**, use the following keys and values in the **Environment variables** section:
       - `BEARER_TOKEN`: `<Content Management API key from your project (Project settings > API keys)>`
       - `HOST`: `manage.kontent.ai`
       - `PATH`: `/v2/projects/<Project ID from your project (Project settings > API keys)>/assets`
1. Make sure to have some image assets.
1. Create a new item using this content type.
1. Start transforming some images!

## Example of the output in the Delivery Response

The response is a string like this:
```
[{\"name\":\"pexels-photo-2006745.jpeg\",\"type\":\"image/jpeg\",\"size\":30912,\"description\":\"\",\"url\":\"https://assets-us-01.kc-usercontent.com/6c23b870-1246-4b4e-97d0-5b03935ab613/484ddb39-1c23-4083-9e99-e83b549ec6c3/pexels-photo-2006745.jpeg?rect=89,173,330,377&fit=clip&w=0.616&h=0.816&fm=webp&q=1\",\"id\":\"8bb98a41-d97f-48c8-b4d6-a071df9f6963\",\"transforms\":{\"crop\":{\"type\":\"box\",\"frame\":{\"wFloat\":0.701,\"hFloat\":0.7228},\"box\":{\"xFloat\":0.178,\"yFloat\":0.231,\"wFloat\":0.6604,\"hFloat\":0.5027},\"zoom\":{\"xFloat\":-1,\"yFloat\":-1,\"zFloat\":-1}},\"resize\":{\"type\":\"fit\",\"scale\":{\"wFloat\":null,\"hFloat\":null},\"fit\":{\"wFloat\":0.616,\"hFloat\":0.816},\"devicePixelRatio\":-1},\"background\":{\"color\":{\"internalRgba\":{\"a\":0,\"r\":0,\"g\":0,\"b\":0}}},\"format\":{\"format\":\"WEBP\",\"autoWebp\":false,\"lossless\":null,\"quality\":1}}}]
```

That can be parsed into this JSON:
```json
[
  {
    "name": "pexels-photo-2006745.jpeg",
    "type": "image/jpeg",
    "size": 30912,
    "description": "",
    "url": "https://assets-us-01.kc-usercontent.com/6c23b870-1246-4b4e-97d0-5b03935ab613/484ddb39-1c23-4083-9e99-e83b549ec6c3/pexels-photo-2006745.jpeg?rect=89,173,330,377&fit=clip&w=0.616&h=0.816&fm=webp&q=1",
    "id": "8bb98a41-d97f-48c8-b4d6-a071df9f6963",
    "transforms": {
      "crop": {
        "type": "box",
        "frame": {
          "wFloat": 0.701,
          "hFloat": 0.7228
        },
        "box": {
          "xFloat": 0.178,
          "yFloat": 0.231,
          "wFloat": 0.6604,
          "hFloat": 0.5027
        },
        "zoom": {
          "xFloat": -1,
          "yFloat": -1,
          "zFloat": -1
        }
      },
      "resize": {
        "type": "fit",
        "scale": {
          "wFloat": null,
          "hFloat": null
        },
        "fit": {
          "wFloat": 0.616,
          "hFloat": 0.816
        },
        "devicePixelRatio": -1
      },
      "background": {
        "color": {
          "internalRgba": {
            "a": 0,
            "r": 0,
            "g": 0,
            "b": 0
          }
        }
      },
      "format": {
        "format": "WEBP",
        "autoWebp": false,
        "lossless": null,
        "quality": 1
      }
    }
  }
]
```

## Want to see the source?
Here it is: [TransformedImagesElement](https://github.com/yuriys-kentico/TransformedImagesElement)

![Analytics](https://kentico-ga-beacon.azurewebsites.net/api/UA-69014260-4/Kentico/kontent-custom-element-samples/ImageTransformer?pixel)
