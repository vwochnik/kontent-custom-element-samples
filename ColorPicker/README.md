# Color Picker

[ColorPicker](https://github.com/Kentico/kontent-custom-element-samples/blob/master/ColorPicker/color-picker.html) is a simple Custom element based on a [color-picker](https://github.com/tovic/color-picker) JavaScript library. It allows user to choose a color from palette and sets it as a HEX string, e.g. '#ff0000' for red color, '#00ff00' for green, and so on. Selected color is then seen as the Custom element's background. When the element is disabled, its color palette is still visible in a content item but does not react when clicked on.

![screenshot](https://files.readme.io/4f023b9-custom.gif)

This outputs to:
```json
{
    "color_picker": {
        "type": "custom",
        "name": "Colo Picker",
        "value": "#b93131"
    }
}

```

## Usage

If you want to use the Color Picker selector in your project in Kentico Kontent, follow these steps:

* In Kentico Kontent open Content types tab
* Open / create a content model to which you want to add the Color Picker selector
* Add **Custom element** content element
* Open configuration of the content element
* Use following URL as Hosted code URL (HTTPS): https://kentico.github.io/kontent-custom-element-samples/ColorPicker/color-picker.html

![Analytics](https://kentico-ga-beacon.azurewebsites.net/api/UA-69014260-4/Kentico/kontent-custom-element-samples/ColorPicker?pixel)

