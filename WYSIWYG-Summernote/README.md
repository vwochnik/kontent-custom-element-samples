# WYSIWYG Summernote

This KC custom element is based on the https://summernote.org/ rich text editor.
It allows you to switch to the Source code mode to edit or see the HTML markup!

You can test it by configuring https://kentico.github.io/kontent-custom-element-samples/WYSIWYG-Summernote/Summernote.html url for your custom element.

![screenshot](https://amend.cz/wysiwyg/summernote2.gif)

Example of an output:
```json
"summernote": {
        "type": "custom",
        "name": "summernote",
        "value": "<h1>Some heading</h1><p><b>lorem ipsum</b></p><pre>code sample</pre><ul><li>item 1</li><li>item 2</li><li>item 3</li></ul><p><br></p><table class=\"table table-bordered\"><tbody><tr><td>cell 1</td><td>cell 2<br></td></tr><tr><td>cell 3<br></td><td>cell 4<br></td></tr></tbody></table><p><br></p>"
      }
```
![Analytics](https://kentico-ga-beacon.azurewebsites.net/api/UA-69014260-4/Kentico/kontent-custom-element-samples/WYSIWYG-Summernote?pixel)