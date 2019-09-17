# Examples of Custom Element Extensions for Kentico Kontent

[![Gallery](https://img.shields.io/badge/-Gallery-brightgreen.svg)](https://kentico.github.io/kontent-custom-element-samples/gallery/)
[![Stack Overflow](https://img.shields.io/badge/Stack%20Overflow-ASK%20NOW-FE7A16.svg?logo=stackoverflow&logoColor=white)](https://stackoverflow.com/tags/kentico-kontent)

This repository contains samples of the HTML web pages that can be used as Custom Element Extensions in Kentico Kontent.

[Custom elements](https://docs.kontent.ai/tutorials/develop-apps/integrate/integrating-your-own-content-editing-features) help you with extending the basic functionality of Kentico Kontent UI and thus improving the content editing experience. Custom element is essentially a small HTML application that exists in a sandboxed `<iframe>` and interacts with the [Kentico Kontent](https://kontent.ai/) app via the [Custom Elements API](https://developer.kenticocloud.com/reference#custom-elements-api).

Note that Custom elements are only supported in the latest versions of our SDKs.

## Custom elements' samples overview

All of the samples are listed in the [Custom Element Gallery](https://kentico.github.io/kontent-custom-element-samples/gallery/index.html). The source code it stored in the [/gallery-src](/gallery-src) folder.

## How to create a custom element

You can find a detailed tutorial on how to create a Custom element in our [documentation](https://docs.kontent.ai/tutorials/develop-apps/integrate/integrating-your-own-content-editing-features).

### Custom element DevKit

To make development of custom elements as easy as possible, we created a [custom element devkit](https://github.com/Kentico/custom-element-devkit). The devkit includes Kentico Kontent alike wireframe and mocked API to enable seamless debugging experience. It is also capable of minimizing all assets and preparing custom element for production use.

### Styling your custom elements

By including Kentico Kontent default styles, you can make your Custom element look consistent with the rest of the UI.

The [/shared](https://github.com/Kentico/kontent-custom-element-samples/tree/master/shared) folder in this GitHub repository contains:

* [custom-element.css](https://github.com/Kentico/kontent-custom-element-samples/blob/master/shared/custom-element.css) – a CSS stylesheet
* [kentico-icons-v1.6.0.woff](https://github.com/Kentico/kontent-custom-element-samples/blob/master/shared/kentico-icons-v1.6.0.woff) – a font file
* [examples.html](https://github.com/Kentico/kontent-custom-element-samples/blob/master/shared/examples.html) – An HTML page containing the implementation details and an HTML markup of some of the basic elements. See also the link in Demo section.
  * showcase: [https://kentico.github.io/kontent-custom-element-samples/shared/examples.html](https://kentico.github.io/kontent-custom-element-samples/shared/examples.html)

We recommend you clone the files and host them locally yourself. The `kentico-icons-v1.6.0.woff` file needs to be hosted in the same directory as the CSS stylesheet to be properly linked.

## Feedback & Contributing

You can contribute by implementing a Custom Element Extension of your choice or pick one from the [ideas](https://github.com/Kentico/kontent-custom-element-samples/issues). Create an HTML web page, include the Custom Elements API in the code, describe what your element does in the Readme file, and send us a pull request.

### Pull request

The pull request should include:

* HTML web page with the custom element
* Additional files required for the custom element (js, css, ...) if needed
* [Styling code files](#styling-your-custom-elements) if needed
* `README.md` file containing
  * Description of the custom element functionality
  * Screenshot/gif showcasing the custom element
  * Step by step instructions how to add custom element to the Kentico Kontent UI
  * Configuration description example
  * Example of the output in the Delivery Response

If you want to list a custom element to the [Gallery](https://kentico.github.io/kontent-custom-element-samples/gallery/index.html), include a JSON file named by the custom element (preferably in Pascal Case) placed to [/gallery-src/content/elements](https://github.com/Kentico/kontent-custom-element-samples/tree/master/gallery-src/content/elements) folder in the following format:

```json
{
  "title": "NAME OF THE CUSTOM ELEMENT",
  "description": "CUSTOM ELEMENT DESCRIPTION",
  "thumbnailUrl": "URL FOT THE SHOWCASE (SCREENSHOT/GIF)",
  "readmeUrl": "URL FOR THE CUSTOM ELEMENT README"
}
```

### Ideas

We'll also appreciate if you [submit your ideas](https://github.com/Kentico/kontent-custom-element-samples/issues) for custom elements or vote for [the existing ones](https://github.com/Kentico/kontent-custom-element-samples/issues).

Check out the [Contributing](https://github.com/Kentico/kontent-custom-element-samples/blob/master/CONTRIBUTING.md) page to see the best places to file issues, start discussions, and begin contributing.

## Disclaimer

> Custom elements in this repository should be used for showcasing the Custom Element Extensions capabilities. If you wish to use them in production project, perform a code review before any usage.

The custom elements in this repository are subject to change. If you wish to use them on a live project, please fork this repository and reference your repository URL in Kentico Kontent custom element configuration.

Some of the custom elements may require further configuration such as custom API keys or be subject to CORS limitation. In those cases please fork the source code repository and adjust the configuration in your repository according to instructions in the element's README file.

![Analytics](https://kentico-ga-beacon.azurewebsites.net/api/UA-69014260-4/Kentico/custom-element-samples?pixel)
