
# Content Insights

Content Insights custom element lets you analyze content from your content item. It computes basic statistics like reading time, readability and sentiment. It also generates top keywords from your written content.
On top of that, the element offers suggestions from various categories to improve your content.

![Content Insights](Insights.gif)

## How does it work
- Custom Insights element analyzes **Rich text** elements, thus requires your *Preview API key* to access the latest version of your content
- Currently, there is no output for the element since it analyzes the text on demand and does not sync automatically with the current version of written content
- Element is hosted by Kentico Kontent, there is currently no other way to host it so there is no source code provided; you can use it as is by accessing it on the address provided below
- After clicking on active suggestions, small navigation window will appear on the right side of the application  and suggested content will be marked in the rich text window (if this does not work, your *elementCaption* setting does not match the display name of the element you are trying to access). Your rich text editor will be disabled for the time being - you'll enable it simply by clicking inside of the editor, or closing the Content Insights navigation panel.

## Usage

To use the Content Insights element in your Kentico Kontent project:

* In Kentico Kontent open Content types tab
* Open / create a content model to which you want to add the Content Insights element
* Add **Custom element** content element
* Open configuration of the content element
* Use following URL as Hosted code URL (HTTPS): https://content-insights.app.kontent.ai/
* Provide the following JSON parameters for the custom element
```json
{
  "previewApiKey": "<YOUR PREVIEW API KEY>",
  "elementCodename" : "<RICH TEXT ELEMENT CODENAME>",
  "elementCaption" : "<RICH TEXT ELEMENT NAME>",
  "suggestions" : [
        "repeated",
        "acronyms",
        "passive",
        "profanities",
        "insensitive",
        "weak"
    ]
}
```
- *Suggestions* - you can pick whatever combination you'd like from the provided list. If you omit the suggestion property entirely, you'll automatically access all available suggestions.
	- *NOTE: there are more suggestion categories  coming soon*