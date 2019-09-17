# Shopify product selector
Shopify product selector is a selector connected to Shopify Storefront which allows users to search and select a product from Shopify product catalog. When the element is disabled, it only displays the selected product.

![Shopify product selector](ShopifyProductSelector.gif)

# Usage

If you want to use the Shopify product selector in your project in Kentico Kontent, follow these steps:

* In Kentico Kontent open Content types tab
* Open / create a content model to which you want to add the Shopify product selector
* Add **Custom element** content element
* Open configuration of the content element
* Use following URL as Hosted code URL (HTTPS): https://kentico.github.io/kontent-custom-element-samples/Shopify/product-selector.html
* Provide the following JSON parameters for the custom element to connect it to your store, replace the macros with the actual values from Shopify admin UI

```json
{
  "storeFrontAccessToken": "<YOUR ACCESS TOKEN>",
  "apiEndpoint": "https://<YOUR STORE NAME>.myshopify.com/api/graphql"
}
```

## Example output

The element will save a value containing the selected product together with its metadata.

```json
{
  "id": "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzE3MzQ0NjA2MzcyMTg=",
  "handle": "aeropress",
  "title": "AeroPress",
  "previewUrl": "https://cdn.shopify.com/s/files/1/0048/8679/0178/products/aeropress.jpg?v=1551277741",
  "sku": "BR-01"
}
```

# Installation

Shopify product selector source code is in following repository: https://github.com/Kentico/cloud-custom-element-sample-shopify

If you want to adjust the implementation, first download [Kentico Kontent Custom Elements Devkit](https://github.com/kentico/custom-element-devkit). Source code of this selector needs be positioned within `/client/custom-elements` folder. For further instructions on devkit implementation, please refer to [Custom Element Devkit README](https://github.com/Kentico/custom-element-devkit/blob/master/readme.md).

![Analytics](https://kentico-ga-beacon.azurewebsites.net/api/UA-69014260-4/Kentico/kontent-custom-element-samples/Shopify?pixel)
