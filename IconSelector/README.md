# Icon Selector

In Kentico Kontent, an icon selector can be specified by using the `Multiple Choice` content element. But this lacks in usablity as the content author has to guess what icon will be displayed when a particular choice is made. The icon selector hopes to make the life of the content editor easier with an easy to use dropdown of icons.

The icon selector allows the developer to specify in the configuration what labels are displays for particular icons and what values are to saved in the content element.

You can test it by configuring https://kentico.github.io/kontent-custom-element-samples/IconSelector/index.html url for your custom element.

You can provide an array of options to be displayed with their icon (source file location)), label and value. The value returned is of type `string` with the value of a single option.

![screenshot](demo/icon-selector-ui.jpg)

This outputs to:

```plain
projectManager
```

## Configuration

The main `controlLabel` parameter is used to show the text on the dropdown.

You have to configure `controlLabel` and `options` parameters. There should be at least more than one option for this to work.

Following {JSON} parameters show five options specified:

```json
{
  "controlLabel": "Please select an OSA icon",
  "options": [
    {
      "label": "Firewall",
      "value": "firewall",
      "icon": "https://kentico.github.io/kontent-custom-element-samples/IconSelector/samples/osa_firewall.svg"
    },
    {
      "label": "Home",
      "value": "home",
      "icon": "https://kentico.github.io/kontent-custom-element-samples/IconSelector/samples/osa_home.svg"
    },
    {
      "label": "Architect",
      "value": "architect",
      "icon": "https://kentico.github.io/kontent-custom-element-samples/IconSelector/samples/osa_user_green_architect.svg"
    },
    {
      "label": "Project Manager",
      "value": "projectManager",
      "icon": "https://kentico.github.io/kontent-custom-element-samples/IconSelector/samples/osa_user_green_project_manager.svg"
    },
    {
      "label": "Security Specialist",
      "value": "security-specialist",
      "icon": "https://kentico.github.io/kontent-custom-element-samples/IconSelector/samples/osa_user_blue_security_specialist.svg"
    }
  ]
}
```

![screenshot](demo/icon-selector-config.jpg)

![Analytics](https://kentico-ga-beacon.azurewebsites.net/api/UA-69014260-4/Kentico/kontent-custom-element-samples/IconSelector?pixel)
