# Video preview
Video is a custom element which allows users to display preview of a video configured in other elements.
This custom element is built specifically for the Hosted video content type in [Kentico Kontent](https://kontent.ai) DancingGoat sample site.

![Video preview](VideoPreview.png)

# Usage

If you want to use the Video preview in your project in Kentico Kontent, follow these steps:

* In Kentico Kontent open Content types tab
* Open / create a content model to which you want to add the Shopify product selector
* Add **Custom element** content element
* Open configuration of the content element
* Use following URL as Hosted code URL (HTTPS): https://kentico.github.io/kontent-custom-element-samples/VideoPreview/video-preview.html
* Provide the following JSON parameters for the custom element to connect it to the appropriate elements

```
{
    "hostElement": "video_host",
    "idElement": "video_id"
}
```

Host element expects multiple choice element with single choice, returning either 'youtube' or 'vimeo'. If not provided, YouTube is used.

ID element expects simple text element with ID of the video for the respective platform. If not provided, defaults to "video_id".

![Analytics](https://kentico-ga-beacon.azurewebsites.net/api/UA-69014260-4/Kentico/kontent-custom-element-samples/Shopify?pixel)
