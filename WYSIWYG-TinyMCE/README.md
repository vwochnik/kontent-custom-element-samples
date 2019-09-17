# WYSIWYG TinyMCE

This Kentico Kontent custom element is based on the [TinyMCE](https://www.tiny.cloud/) WYSIWYG text editor.

You can test it by configuring https://kentico.github.io/kontent-custom-element-samples/WYSIWYG-TinyMCE/tiny-source.html url for your custom element.

![Tiny preview](tiny-preview.png)

Example output (html):
```json
 "elements": {
      "tiny": {
        "type": "custom",
        "name": "Tiny",
        "value": "<h2 style=\"text-align: center;\">TinyMCE provides a <span style=\"text-decoration: underline;\">full-featured</span> rich text editing experience, and a featherweight download.</h2>\n<p style=\"text-align: center;\"><strong> <span style=\"font-size: 14pt;\"> <span style=\"color: #7e8c8d; font-weight: 600;\">No matter what you're building, TinyMCE has got you covered.</span> </span> </strong></p>\n<p style=\"text-align: center;\">&nbsp;</p>\n<table style=\"border-collapse: collapse; width: 85%; margin-left: auto; margin-right: auto; border: 0;\">\n<tbody>\n<tr>\n<td style=\"width: 25%; text-align: center; padding: 7px;\"><span style=\"color: #95a5a6;\">🛠 50+ Plugins</span></td>\n<td style=\"width: 25%; text-align: center; padding: 7px;\"><span style=\"color: #95a5a6;\">💡 Premium Support</span></td>\n<td style=\"width: 25%; text-align: center; padding: 7px;\"><span style=\"color: #95a5a6;\">🖍 Custom Skins</span></td>\n<td style=\"width: 25%; text-align: center; padding: 7px;\"><span style=\"color: #95a5a6;\">⚙ Full API Access</span></td>\n</tr>\n</tbody>\n</table>"
      }
    }
```

## Configuration

For production use, Tiny requires you to create an account and allow specific domains. You can create free account at [https://www.tiny.cloud/](https://www.tiny.cloud/)

Once you have the account, generate your own script and use it instead of

```html
<script src="https://cdn.tiny.cloud/1/no-api-key/tinymce/5/tinymce.min.js" referrerpolicy="origin"></script>
```

You can adjust the tiny's configuration function as you see fit inside `initializeEditor` function. For a list of configuration options refer to [https://www.tiny.cloud/docs/configure/integration-and-setup/](https://www.tiny.cloud/docs/configure/integration-and-setup/)

![Analytics](https://kentico-ga-beacon.azurewebsites.net/api/UA-69014260-4/Kentico/kontent-custom-element-samples/WYSIWYG-TinyMCE?pixel)
