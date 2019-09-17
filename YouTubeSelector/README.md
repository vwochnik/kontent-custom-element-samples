# YouTube video selector

YouTube video selector allows users to search and select videos from YouTube.

![YouTube video selector](YouTubeVideoSelector.gif)

## Usage

To use the YouTube video selector in your Kentico Kontent project:

* In Kentico Kontent open Content types tab
* Open / create a content model to which you want to add the YouTube video selector
* Add **Custom element** content element
* Open configuration of the content element
* Use following URL as Hosted code URL (HTTPS): https://kentico.github.io/kontent-custom-element-samples/YouTubeSelector/index.html
* Provide the following JSON parameters for the custom element,
 to get an API key for the YouTube API visit https://developers.google.com/youtube/v3/getting-started

```json
{
  "apiKey": "<YOUR API KEY>"
}
```

## Installation

YouTube video selector source code is in following repository: https://github.com/Bassetts/kc-youtube

If you want to customize the element please follow the instructions in [source code repository `README.md`](https://github.com/Bassetts/kc-youtube/Readme.md).

## Example output

The element will save a value containing the video title and id to Kentico Kontent.

```
{
  "item": {
    ...
    "elements": {
      ...
      "youtube": {
        "type": "custom",
        "name": "Youtube",
        "value": {"title":"What Is Headless CMS?","videoId":"U5_H9cD17gA"} // or null
      }
      ...
    }
  }
  ...
}
```

![Analytics](https://kentico-ga-beacon.azurewebsites.net/api/UA-69014260-4/Kentico/kontent-custom-element-samples/Youtube?pixel)
