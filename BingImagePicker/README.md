# Bing image picker
The Bing image picker allows to search images on Bing and use them in your website.

![Bing image picker](BingImagePicker.gif)

# Usage

If you want to use the Bing image picker in your project in Kentico Kontent, follow these steps:

* In Kentico Kontent open the Content types tab
* Create or edit a content model to which you want to add the Bing image picker
* Add the **Custom element** content element
* Configure the content element
* Use the following URL as Hosted code URL (HTTPS): https://kentico.github.io/kontent-custom-element-samples/BingImagePicker/bingimage-input-component.html
* Get API key for MS Cognitive Services "Bing Search APIs v7": https://azure.microsoft.com/en-us/try/cognitive-services/
* Provide JSON parameters for the custom element to configure the API Key:

```json
{
    "apikey": "[YOUR API KEY]"
}
```
* You can add more parameters

count (optional) number
The number of image results to return in the response. The actual number delivered may be less than requested.

offset (optional) number
The zero-based offset that indicates the number of image results to skip before returning results.

mkt (optional) string
The market where the results come from. Typically, this is the country where the user is making the request from; however, it could be a different country if the user is not located in a country where Bing delivers results. The market must be in the form -. For example, en-US.

Full list of supported markets:
es-AR,en-AU,de-AT,nl-BE,fr-BE,pt-BR,en-CA,fr-CA,es-CL,da-DK,fi-FI,fr-FR,de-DE,zh-HK,en-IN,en-ID,en-IE,it-IT,ja-JP,ko-KR,en-MY,es-MX,nl-NL,en-NZ,no-NO,zh-CN,pl-PL,pt-PT,en-PH,ru-RU,ar-SA,en-ZA,es-ES,sv-SE,fr-CH,de-CH,zh-TW,tr-TR,en-GB,en-US,es-US

safeSearch (optional) string
A filter used to filter results for adult content. Options are "Off", "Moderate" or "Strict".

## Example output

The element will save a value [contentUrl] containing the URL of the image to Kentico Kontent.

```
{
  "_type": "Images",
  "instrumentation": {
    "_type": "ResponseInstrumentation"
  },
  "readLink": "https:\/\/api.cognitive.microsoft.com\/api\/v7\/images\/search?q=cats",
  "webSearchUrl": "https:\/\/www.bing.com\/images\/search?q=cats&FORM=OIIARP",
  "queryContext": {
    "originalQuery": "cats",
    "alterationDisplayQuery": "cats",
    "alterationOverrideQuery": "+cats",
    "alterationMethod": "AM_JustChangeIt",
    "alterationType": "CombinedAlterationsChained"
  },
  "totalEstimatedMatches": 1000,
  "nextOffset": 2,
  "currentOffset": 1,
  "value": [{
    "webSearchUrl": "https:\/\/www.bing.com\/images\/search?view=detailv2&FORM=OIIRPO&q=cats&id=2AFA8091DF31F47F79CC82B1625CE02FD00D29F5&simid=608044158139764481",
    "name": "The Ultimate \"City of Cats\" (PHOTOS) | HuffPost",
    "thumbnailUrl": "https:\/\/tse1.mm.bing.net\/th?id=OIP.8ufs6ZSuMH0QoMaSyImkKwHaGb&pid=Api",
    "datePublished": "2015-02-06T19:18:00.0000000Z",
    "isFamilyFriendly": true,
    "contentUrl": "http:\/\/images.huffingtonpost.com\/2014-12-08-Cat27.jpg",
    "hostPageUrl": "http:\/\/www.huffingtonpost.com\/kevin-richberg\/the-ultimate-city-of-cats_b_6283220.html",
    "contentSize": "964299 B",
    "encodingFormat": "jpeg",
    "hostPageDisplayUrl": "www.huffingtonpost.com\/kevin-richberg\/the-ultimate-city-of-cats_b...",
    "width": 1440,
    "height": 1251,
    "hostPageFavIconUrl": "https:\/\/www.bing.com\/th?id=AR_0a2a1ea37a7364073d44066ffb6b2663&pid=Api",
    "thumbnail": {
      "width": 474,
      "height": 411
    },
    "imageInsightsToken": "ccid_8ufs6ZSu*mid_2AFA8091DF31F47F79CC82B1625CE02FD00D29F5*simid_608044158139764481*thid_OIP.8ufs6ZSuMH0QoMaSyImkKwHaGb",
    "insightsMetadata": {
      "recipeSourcesCount": 0,
      "bestRepresentativeQuery": {
        "text": "Cats Protecting Each Other",
        "displayText": "Cats Protecting Each Other",
        "webSearchUrl": "https:\/\/www.bing.com\/images\/search?q=Cats+Protecting+Each+Other&id=2AFA8091DF31F47F79CC82B1625CE02FD00D29F5&FORM=IDBQDM"
      },
      "pagesIncludingCount": 4,
      "availableSizesCount": 1
    },
    "imageId": "2AFA8091DF31F47F79CC82B1625CE02FD00D29F5",
    "accentColor": "5D646E"
  }],
  "queryExpansions": [{
    "text": "Crazy Cat",
    "displayText": "Crazy",
    "webSearchUrl": "https:\/\/www.bing.com\/images\/search?q=Crazy+Cat&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Crazy%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d&FORM=IRPATC",
    "searchLink": "https:\/\/api.cognitive.microsoft.com\/api\/v7\/images\/search?q=Crazy+Cat&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Crazy%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d",
    "thumbnail": {
      "thumbnailUrl": "https:\/\/tse2.mm.bing.net\/th?q=Crazy+Cat&pid=Api&mkt=en-US&adlt=moderate&t=1"
    }
  }, {
    "text": "Funny Cats",
    "displayText": "Funny",
    "webSearchUrl": "https:\/\/www.bing.com\/images\/search?q=Funny+Cats&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Funny%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d&FORM=IRPATC",
    "searchLink": "https:\/\/api.cognitive.microsoft.com\/api\/v7\/images\/search?q=Funny+Cats&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Funny%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d",
    "thumbnail": {
      "thumbnailUrl": "https:\/\/tse2.mm.bing.net\/th?q=Funny+Cats&pid=Api&mkt=en-US&adlt=moderate&t=1"
    }
  }, {
    "text": "Grumpy Cat",
    "displayText": "Grumpy",
    "webSearchUrl": "https:\/\/www.bing.com\/images\/search?q=Grumpy+Cat&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Grumpy%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d&FORM=IRPATC",
    "searchLink": "https:\/\/api.cognitive.microsoft.com\/api\/v7\/images\/search?q=Grumpy+Cat&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Grumpy%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d",
    "thumbnail": {
      "thumbnailUrl": "https:\/\/tse3.mm.bing.net\/th?q=Grumpy+Cat&pid=Api&mkt=en-US&adlt=moderate&t=1"
    }
  }, {
    "text": "White Cat",
    "displayText": "White",
    "webSearchUrl": "https:\/\/www.bing.com\/images\/search?q=White+Cat&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22White%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d&FORM=IRPATC",
    "searchLink": "https:\/\/api.cognitive.microsoft.com\/api\/v7\/images\/search?q=White+Cat&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22White%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d",
    "thumbnail": {
      "thumbnailUrl": "https:\/\/tse2.mm.bing.net\/th?q=White+Cat&pid=Api&mkt=en-US&adlt=moderate&t=1"
    }
  }, {
    "text": "Orange Cat",
    "displayText": "Orange",
    "webSearchUrl": "https:\/\/www.bing.com\/images\/search?q=Orange+Cat&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Orange%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d&FORM=IRPATC",
    "searchLink": "https:\/\/api.cognitive.microsoft.com\/api\/v7\/images\/search?q=Orange+Cat&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Orange%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d",
    "thumbnail": {
      "thumbnailUrl": "https:\/\/tse1.mm.bing.net\/th?q=Orange+Cat&pid=Api&mkt=en-US&adlt=moderate&t=1"
    }
  }, {
    "text": "Black Cat",
    "displayText": "Black",
    "webSearchUrl": "https:\/\/www.bing.com\/images\/search?q=Black+Cat&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Black%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d&FORM=IRPATC",
    "searchLink": "https:\/\/api.cognitive.microsoft.com\/api\/v7\/images\/search?q=Black+Cat&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Black%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d",
    "thumbnail": {
      "thumbnailUrl": "https:\/\/tse4.mm.bing.net\/th?q=Black+Cat&pid=Api&mkt=en-US&adlt=moderate&t=1"
    }
  }, {
    "text": "Bengal Cat",
    "displayText": "Bengal",
    "webSearchUrl": "https:\/\/www.bing.com\/images\/search?q=Bengal+Cat&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Bengal%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d&FORM=IRPATC",
    "searchLink": "https:\/\/api.cognitive.microsoft.com\/api\/v7\/images\/search?q=Bengal+Cat&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Bengal%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d",
    "thumbnail": {
      "thumbnailUrl": "https:\/\/tse4.mm.bing.net\/th?q=Bengal+Cat&pid=Api&mkt=en-US&adlt=moderate&t=1"
    }
  }, {
    "text": "Nala Cat",
    "displayText": "Nala",
    "webSearchUrl": "https:\/\/www.bing.com\/images\/search?q=Nala+Cat&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Nala%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d&FORM=IRPATC",
    "searchLink": "https:\/\/api.cognitive.microsoft.com\/api\/v7\/images\/search?q=Nala+Cat&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Nala%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d",
    "thumbnail": {
      "thumbnailUrl": "https:\/\/tse1.mm.bing.net\/th?q=Nala+Cat&pid=Api&mkt=en-US&adlt=moderate&t=1"
    }
  }, {
    "text": "Bombay Cat",
    "displayText": "Bombay",
    "webSearchUrl": "https:\/\/www.bing.com\/images\/search?q=Bombay+Cat&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Bombay%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d&FORM=IRPATC",
    "searchLink": "https:\/\/api.cognitive.microsoft.com\/api\/v7\/images\/search?q=Bombay+Cat&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Bombay%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d",
    "thumbnail": {
      "thumbnailUrl": "https:\/\/tse1.mm.bing.net\/th?q=Bombay+Cat&pid=Api&mkt=en-US&adlt=moderate&t=1"
    }
  }, {
    "text": "Maine Coon Cat",
    "displayText": "Maine Coon",
    "webSearchUrl": "https:\/\/www.bing.com\/images\/search?q=Maine+Coon+Cat&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Maine+Coon%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d&FORM=IRPATC",
    "searchLink": "https:\/\/api.cognitive.microsoft.com\/api\/v7\/images\/search?q=Maine+Coon+Cat&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Maine+Coon%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d",
    "thumbnail": {
      "thumbnailUrl": "https:\/\/tse2.mm.bing.net\/th?q=Maine+Coon+Cat&pid=Api&mkt=en-US&adlt=moderate&t=1"
    }
  }, {
    "text": "Tonkinese Cat",
    "displayText": "Tonkinese",
    "webSearchUrl": "https:\/\/www.bing.com\/images\/search?q=Tonkinese+Cat&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Tonkinese%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d&FORM=IRPATC",
    "searchLink": "https:\/\/api.cognitive.microsoft.com\/api\/v7\/images\/search?q=Tonkinese+Cat&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Tonkinese%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d",
    "thumbnail": {
      "thumbnailUrl": "https:\/\/tse3.mm.bing.net\/th?q=Tonkinese+Cat&pid=Api&mkt=en-US&adlt=moderate&t=1"
    }
  }, {
    "text": "British Shorthair Cats",
    "displayText": "British Shorthair",
    "webSearchUrl": "https:\/\/www.bing.com\/images\/search?q=British+Shorthair+Cats&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22British+Shorthair%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d&FORM=IRPATC",
    "searchLink": "https:\/\/api.cognitive.microsoft.com\/api\/v7\/images\/search?q=British+Shorthair+Cats&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22British+Shorthair%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d",
    "thumbnail": {
      "thumbnailUrl": "https:\/\/tse1.mm.bing.net\/th?q=British+Shorthair+Cats&pid=Api&mkt=en-US&adlt=moderate&t=1"
    }
  }, {
    "text": "Cats Dogs",
    "displayText": "Dogs",
    "webSearchUrl": "https:\/\/www.bing.com\/images\/search?q=Cats+Dogs&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Dogs%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d&FORM=IRPATC",
    "searchLink": "https:\/\/api.cognitive.microsoft.com\/api\/v7\/images\/search?q=Cats+Dogs&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Dogs%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d",
    "thumbnail": {
      "thumbnailUrl": "https:\/\/tse3.mm.bing.net\/th?q=Cats+Dogs&pid=Api&mkt=en-US&adlt=moderate&t=1"
    }
  }, {
    "text": "Sphynx Cat",
    "displayText": "Sphynx",
    "webSearchUrl": "https:\/\/www.bing.com\/images\/search?q=Sphynx+Cat&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Sphynx%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d&FORM=IRPATC",
    "searchLink": "https:\/\/api.cognitive.microsoft.com\/api\/v7\/images\/search?q=Sphynx+Cat&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Sphynx%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d",
    "thumbnail": {
      "thumbnailUrl": "https:\/\/tse1.mm.bing.net\/th?q=Sphynx+Cat&pid=Api&mkt=en-US&adlt=moderate&t=1"
    }
  }, {
    "text": "Siamese Cats",
    "displayText": "Siamese",
    "webSearchUrl": "https:\/\/www.bing.com\/images\/search?q=Siamese+Cats&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Siamese%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d&FORM=IRPATC",
    "searchLink": "https:\/\/api.cognitive.microsoft.com\/api\/v7\/images\/search?q=Siamese+Cats&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Siamese%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d",
    "thumbnail": {
      "thumbnailUrl": "https:\/\/tse1.mm.bing.net\/th?q=Siamese+Cats&pid=Api&mkt=en-US&adlt=moderate&t=1"
    }
  }, {
    "text": "Cat Costume",
    "displayText": "Costume",
    "webSearchUrl": "https:\/\/www.bing.com\/images\/search?q=Cat+Costume&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Costume%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d&FORM=IRPATC",
    "searchLink": "https:\/\/api.cognitive.microsoft.com\/api\/v7\/images\/search?q=Cat+Costume&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Costume%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d",
    "thumbnail": {
      "thumbnailUrl": "https:\/\/tse1.mm.bing.net\/th?q=Cat+Costume&pid=Api&mkt=en-US&adlt=moderate&t=1"
    }
  }, {
    "text": "Cat Hat",
    "displayText": "Hat",
    "webSearchUrl": "https:\/\/www.bing.com\/images\/search?q=Cat+Hat&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Hat%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d&FORM=IRPATC",
    "searchLink": "https:\/\/api.cognitive.microsoft.com\/api\/v7\/images\/search?q=Cat+Hat&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Hat%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d",
    "thumbnail": {
      "thumbnailUrl": "https:\/\/tse2.mm.bing.net\/th?q=Cat+Hat&pid=Api&mkt=en-US&adlt=moderate&t=1"
    }
  }, {
    "text": "Tuxedo Cats",
    "displayText": "Tuxedo",
    "webSearchUrl": "https:\/\/www.bing.com\/images\/search?q=Tuxedo+Cats&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Tuxedo%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d&FORM=IRPATC",
    "searchLink": "https:\/\/api.cognitive.microsoft.com\/api\/v7\/images\/search?q=Tuxedo+Cats&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Tuxedo%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d",
    "thumbnail": {
      "thumbnailUrl": "https:\/\/tse1.mm.bing.net\/th?q=Tuxedo+Cats&pid=Api&mkt=en-US&adlt=moderate&t=1"
    }
  }, {
    "text": "Cheshire Cat",
    "displayText": "Cheshire",
    "webSearchUrl": "https:\/\/www.bing.com\/images\/search?q=Cheshire+Cat&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Cheshire%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d&FORM=IRPATC",
    "searchLink": "https:\/\/api.cognitive.microsoft.com\/api\/v7\/images\/search?q=Cheshire+Cat&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Cheshire%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d",
    "thumbnail": {
      "thumbnailUrl": "https:\/\/tse2.mm.bing.net\/th?q=Cheshire+Cat&pid=Api&mkt=en-US&adlt=moderate&t=1"
    }
  }, {
    "text": "Christmas Cat",
    "displayText": "Christmas",
    "webSearchUrl": "https:\/\/www.bing.com\/images\/search?q=Christmas+Cat&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Christmas%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d&FORM=IRPATC",
    "searchLink": "https:\/\/api.cognitive.microsoft.com\/api\/v7\/images\/search?q=Christmas+Cat&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Christmas%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d",
    "thumbnail": {
      "thumbnailUrl": "https:\/\/tse3.mm.bing.net\/th?q=Christmas+Cat&pid=Api&mkt=en-US&adlt=moderate&t=1"
    }
  }, {
    "text": "Halloween Cat",
    "displayText": "Halloween",
    "webSearchUrl": "https:\/\/www.bing.com\/images\/search?q=Halloween+Cat&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Halloween%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d&FORM=IRPATC",
    "searchLink": "https:\/\/api.cognitive.microsoft.com\/api\/v7\/images\/search?q=Halloween+Cat&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Halloween%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d",
    "thumbnail": {
      "thumbnailUrl": "https:\/\/tse2.mm.bing.net\/th?q=Halloween+Cat&pid=Api&mkt=en-US&adlt=moderate&t=1"
    }
  }, {
    "text": "Fat Cat",
    "displayText": "Fat",
    "webSearchUrl": "https:\/\/www.bing.com\/images\/search?q=Fat+Cat&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Fat%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d&FORM=IRPATC",
    "searchLink": "https:\/\/api.cognitive.microsoft.com\/api\/v7\/images\/search?q=Fat+Cat&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Fat%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d",
    "thumbnail": {
      "thumbnailUrl": "https:\/\/tse4.mm.bing.net\/th?q=Fat+Cat&pid=Api&mkt=en-US&adlt=moderate&t=1"
    }
  }, {
    "text": "Fluffy Cats",
    "displayText": "Fluffy",
    "webSearchUrl": "https:\/\/www.bing.com\/images\/search?q=Fluffy+Cats&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Fluffy%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d&FORM=IRPATC",
    "searchLink": "https:\/\/api.cognitive.microsoft.com\/api\/v7\/images\/search?q=Fluffy+Cats&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Fluffy%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d",
    "thumbnail": {
      "thumbnailUrl": "https:\/\/tse4.mm.bing.net\/th?q=Fluffy+Cats&pid=Api&mkt=en-US&adlt=moderate&t=1"
    }
  }, {
    "text": "Zombie Cat",
    "displayText": "Zombie",
    "webSearchUrl": "https:\/\/www.bing.com\/images\/search?q=Zombie+Cat&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Zombie%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d&FORM=IRPATC",
    "searchLink": "https:\/\/api.cognitive.microsoft.com\/api\/v7\/images\/search?q=Zombie+Cat&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Zombie%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d",
    "thumbnail": {
      "thumbnailUrl": "https:\/\/tse1.mm.bing.net\/th?q=Zombie+Cat&pid=Api&mkt=en-US&adlt=moderate&t=1"
    }
  }, {
    "text": "Ragdoll Cat",
    "displayText": "Ragdoll",
    "webSearchUrl": "https:\/\/www.bing.com\/images\/search?q=Ragdoll+Cat&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Ragdoll%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d&FORM=IRPATC",
    "searchLink": "https:\/\/api.cognitive.microsoft.com\/api\/v7\/images\/search?q=Ragdoll+Cat&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Ragdoll%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d",
    "thumbnail": {
      "thumbnailUrl": "https:\/\/tse4.mm.bing.net\/th?q=Ragdoll+Cat&pid=Api&mkt=en-US&adlt=moderate&t=1"
    }
  }, {
    "text": "Ninja Cat",
    "displayText": "Ninja",
    "webSearchUrl": "https:\/\/www.bing.com\/images\/search?q=Ninja+Cat&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Ninja%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d&FORM=IRPATC",
    "searchLink": "https:\/\/api.cognitive.microsoft.com\/api\/v7\/images\/search?q=Ninja+Cat&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Ninja%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d",
    "thumbnail": {
      "thumbnailUrl": "https:\/\/tse3.mm.bing.net\/th?q=Ninja+Cat&pid=Api&mkt=en-US&adlt=moderate&t=1"
    }
  }, {
    "text": "RagaMuffin Cat",
    "displayText": "RagaMuffin",
    "webSearchUrl": "https:\/\/www.bing.com\/images\/search?q=RagaMuffin+Cat&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22RagaMuffin%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d&FORM=IRPATC",
    "searchLink": "https:\/\/api.cognitive.microsoft.com\/api\/v7\/images\/search?q=RagaMuffin+Cat&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22RagaMuffin%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d",
    "thumbnail": {
      "thumbnailUrl": "https:\/\/tse3.mm.bing.net\/th?q=RagaMuffin+Cat&pid=Api&mkt=en-US&adlt=moderate&t=1"
    }
  }, {
    "text": "Munchkin Cat",
    "displayText": "Munchkin",
    "webSearchUrl": "https:\/\/www.bing.com\/images\/search?q=Munchkin+Cat&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Munchkin%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d&FORM=IRPATC",
    "searchLink": "https:\/\/api.cognitive.microsoft.com\/api\/v7\/images\/search?q=Munchkin+Cat&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Munchkin%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d",
    "thumbnail": {
      "thumbnailUrl": "https:\/\/tse4.mm.bing.net\/th?q=Munchkin+Cat&pid=Api&mkt=en-US&adlt=moderate&t=1"
    }
  }, {
    "text": "Scaredy Cat",
    "displayText": "Scaredy",
    "webSearchUrl": "https:\/\/www.bing.com\/images\/search?q=Scaredy+Cat&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Scaredy%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d&FORM=IRPATC",
    "searchLink": "https:\/\/api.cognitive.microsoft.com\/api\/v7\/images\/search?q=Scaredy+Cat&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Scaredy%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d",
    "thumbnail": {
      "thumbnailUrl": "https:\/\/tse2.mm.bing.net\/th?q=Scaredy+Cat&pid=Api&mkt=en-US&adlt=moderate&t=1"
    }
  }, {
    "text": "Cat Love",
    "displayText": "Love",
    "webSearchUrl": "https:\/\/www.bing.com\/images\/search?q=Cat+Love&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Love%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d&FORM=IRPATC",
    "searchLink": "https:\/\/api.cognitive.microsoft.com\/api\/v7\/images\/search?q=Cat+Love&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Love%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d",
    "thumbnail": {
      "thumbnailUrl": "https:\/\/tse3.mm.bing.net\/th?q=Cat+Love&pid=Api&mkt=en-US&adlt=moderate&t=1"
    }
  }, {
    "text": "Beautiful Cat",
    "displayText": "Beautiful",
    "webSearchUrl": "https:\/\/www.bing.com\/images\/search?q=Beautiful+Cat&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Beautiful%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d&FORM=IRPATC",
    "searchLink": "https:\/\/api.cognitive.microsoft.com\/api\/v7\/images\/search?q=Beautiful+Cat&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Beautiful%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d",
    "thumbnail": {
      "thumbnailUrl": "https:\/\/tse2.mm.bing.net\/th?q=Beautiful+Cat&pid=Api&mkt=en-US&adlt=moderate&t=1"
    }
  }, {
    "text": "Sad Cat",
    "displayText": "Sad",
    "webSearchUrl": "https:\/\/www.bing.com\/images\/search?q=Sad+Cat&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Sad%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d&FORM=IRPATC",
    "searchLink": "https:\/\/api.cognitive.microsoft.com\/api\/v7\/images\/search?q=Sad+Cat&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Sad%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d",
    "thumbnail": {
      "thumbnailUrl": "https:\/\/tse3.mm.bing.net\/th?q=Sad+Cat&pid=Api&mkt=en-US&adlt=moderate&t=1"
    }
  }, {
    "text": "Felix Cat",
    "displayText": "Felix",
    "webSearchUrl": "https:\/\/www.bing.com\/images\/search?q=Felix+Cat&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Felix%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d&FORM=IRPATC",
    "searchLink": "https:\/\/api.cognitive.microsoft.com\/api\/v7\/images\/search?q=Felix+Cat&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Felix%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d",
    "thumbnail": {
      "thumbnailUrl": "https:\/\/tse1.mm.bing.net\/th?q=Felix+Cat&pid=Api&mkt=en-US&adlt=moderate&t=1"
    }
  }, {
    "text": "Pete Cat",
    "displayText": "Pete",
    "webSearchUrl": "https:\/\/www.bing.com\/images\/search?q=Pete+Cat&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Pete%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d&FORM=IRPATC",
    "searchLink": "https:\/\/api.cognitive.microsoft.com\/api\/v7\/images\/search?q=Pete+Cat&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Pete%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d",
    "thumbnail": {
      "thumbnailUrl": "https:\/\/tse3.mm.bing.net\/th?q=Pete+Cat&pid=Api&mkt=en-US&adlt=moderate&t=1"
    }
  }, {
    "text": "Cat Stevens",
    "displayText": "Stevens",
    "webSearchUrl": "https:\/\/www.bing.com\/images\/search?q=Cat+Stevens&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Stevens%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d&FORM=IRPATC",
    "searchLink": "https:\/\/api.cognitive.microsoft.com\/api\/v7\/images\/search?q=Cat+Stevens&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Stevens%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d",
    "thumbnail": {
      "thumbnailUrl": "https:\/\/tse3.mm.bing.net\/th?q=Cat+Stevens&pid=Api&mkt=en-US&adlt=moderate&t=1"
    }
  }, {
    "text": "Norwegian Forest Cat",
    "displayText": "Norwegian Forest",
    "webSearchUrl": "https:\/\/www.bing.com\/images\/search?q=Norwegian+Forest+Cat&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Norwegian+Forest%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d&FORM=IRPATC",
    "searchLink": "https:\/\/api.cognitive.microsoft.com\/api\/v7\/images\/search?q=Norwegian+Forest+Cat&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Norwegian+Forest%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d",
    "thumbnail": {
      "thumbnailUrl": "https:\/\/tse2.mm.bing.net\/th?q=Norwegian+Forest+Cat&pid=Api&mkt=en-US&adlt=moderate&t=1"
    }
  }, {
    "text": "Pusheen Cat",
    "displayText": "Pusheen",
    "webSearchUrl": "https:\/\/www.bing.com\/images\/search?q=Pusheen+Cat&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Pusheen%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d&FORM=IRPATC",
    "searchLink": "https:\/\/api.cognitive.microsoft.com\/api\/v7\/images\/search?q=Pusheen+Cat&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Pusheen%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d",
    "thumbnail": {
      "thumbnailUrl": "https:\/\/tse3.mm.bing.net\/th?q=Pusheen+Cat&pid=Api&mkt=en-US&adlt=moderate&t=1"
    }
  }, {
    "text": "Cat Eyes",
    "displayText": "Eyes",
    "webSearchUrl": "https:\/\/www.bing.com\/images\/search?q=Cat+Eyes&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Eyes%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d&FORM=IRPATC",
    "searchLink": "https:\/\/api.cognitive.microsoft.com\/api\/v7\/images\/search?q=Cat+Eyes&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Eyes%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d",
    "thumbnail": {
      "thumbnailUrl": "https:\/\/tse1.mm.bing.net\/th?q=Cat+Eyes&pid=Api&mkt=en-US&adlt=moderate&t=1"
    }
  }, {
    "text": "Wild Cat",
    "displayText": "Wild",
    "webSearchUrl": "https:\/\/www.bing.com\/images\/search?q=Wild+Cat&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Wild%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d&FORM=IRPATC",
    "searchLink": "https:\/\/api.cognitive.microsoft.com\/api\/v7\/images\/search?q=Wild+Cat&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Wild%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d",
    "thumbnail": {
      "thumbnailUrl": "https:\/\/tse3.mm.bing.net\/th?q=Wild+Cat&pid=Api&mkt=en-US&adlt=moderate&t=1"
    }
  }],
  "pivotSuggestions": [{
    "pivot": "cats",
    "suggestions": [{
      "text": "Felidae",
      "displayText": "Felidae",
      "webSearchUrl": "https:\/\/www.bing.com\/images\/search?q=Felidae&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Felidae%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d&FORM=IRQBPS",
      "searchLink": "https:\/\/api.cognitive.microsoft.com\/api\/v7\/images\/search?q=Felidae&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Felidae%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d",
      "thumbnail": {
        "thumbnailUrl": "https:\/\/tse3.mm.bing.net\/th?q=Felidae&pid=Api&mkt=en-US&adlt=moderate&t=1"
      }
    }, {
      "text": "Wild Cat",
      "displayText": "Wild Cat",
      "webSearchUrl": "https:\/\/www.bing.com\/images\/search?q=Wild+Cat&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Wild+Cat%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d&FORM=IRQBPS",
      "searchLink": "https:\/\/api.cognitive.microsoft.com\/api\/v7\/images\/search?q=Wild+Cat&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Wild+Cat%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d",
      "thumbnail": {
        "thumbnailUrl": "https:\/\/tse3.mm.bing.net\/th?q=Wild+Cat&pid=Api&mkt=en-US&adlt=moderate&t=1"
      }
    }, {
      "text": "African Wildcat",
      "displayText": "African Wildcat",
      "webSearchUrl": "https:\/\/www.bing.com\/images\/search?q=African+Wildcat&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22African+Wildcat%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d&FORM=IRQBPS",
      "searchLink": "https:\/\/api.cognitive.microsoft.com\/api\/v7\/images\/search?q=African+Wildcat&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22African+Wildcat%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d",
      "thumbnail": {
        "thumbnailUrl": "https:\/\/tse3.mm.bing.net\/th?q=African+Wildcat&pid=Api&mkt=en-US&adlt=moderate&t=1"
      }
    }, {
      "text": "Kitten",
      "displayText": "Kitten",
      "webSearchUrl": "https:\/\/www.bing.com\/images\/search?q=Kitten&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Kitten%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d&FORM=IRQBPS",
      "searchLink": "https:\/\/api.cognitive.microsoft.com\/api\/v7\/images\/search?q=Kitten&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Kitten%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d",
      "thumbnail": {
        "thumbnailUrl": "https:\/\/tse4.mm.bing.net\/th?q=Kitten&pid=Api&mkt=en-US&adlt=moderate&t=1"
      }
    }, {
      "text": "Feral Cat",
      "displayText": "Feral Cat",
      "webSearchUrl": "https:\/\/www.bing.com\/images\/search?q=Feral+Cat&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Feral+Cat%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d&FORM=IRQBPS",
      "searchLink": "https:\/\/api.cognitive.microsoft.com\/api\/v7\/images\/search?q=Feral+Cat&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Feral+Cat%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d",
      "thumbnail": {
        "thumbnailUrl": "https:\/\/tse3.mm.bing.net\/th?q=Feral+Cat&pid=Api&mkt=en-US&adlt=moderate&t=1"
      }
    }, {
      "text": "Domestic Goat",
      "displayText": "Domestic Goat",
      "webSearchUrl": "https:\/\/www.bing.com\/images\/search?q=Domestic+Goat&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Domestic+Goat%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d&FORM=IRQBPS",
      "searchLink": "https:\/\/api.cognitive.microsoft.com\/api\/v7\/images\/search?q=Domestic+Goat&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Domestic+Goat%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d",
      "thumbnail": {
        "thumbnailUrl": "https:\/\/tse4.mm.bing.net\/th?q=Domestic+Goat&pid=Api&mkt=en-US&adlt=moderate&t=1"
      }
    }, {
      "text": "Sand Cat",
      "displayText": "Sand Cat",
      "webSearchUrl": "https:\/\/www.bing.com\/images\/search?q=Sand+Cat&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Sand+Cat%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d&FORM=IRQBPS",
      "searchLink": "https:\/\/api.cognitive.microsoft.com\/api\/v7\/images\/search?q=Sand+Cat&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Sand+Cat%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d",
      "thumbnail": {
        "thumbnailUrl": "https:\/\/tse1.mm.bing.net\/th?q=Sand+Cat&pid=Api&mkt=en-US&adlt=moderate&t=1"
      }
    }, {
      "text": "Common Raccoon",
      "displayText": "Common Raccoon",
      "webSearchUrl": "https:\/\/www.bing.com\/images\/search?q=Common+Raccoon&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Common+Raccoon%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d&FORM=IRQBPS",
      "searchLink": "https:\/\/api.cognitive.microsoft.com\/api\/v7\/images\/search?q=Common+Raccoon&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Common+Raccoon%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d",
      "thumbnail": {
        "thumbnailUrl": "https:\/\/tse3.mm.bing.net\/th?q=Common+Raccoon&pid=Api&mkt=en-US&adlt=moderate&t=1"
      }
    }, {
      "text": "Tabby Cat",
      "displayText": "Tabby Cat",
      "webSearchUrl": "https:\/\/www.bing.com\/images\/search?q=Tabby+Cat&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Tabby+Cat%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d&FORM=IRQBPS",
      "searchLink": "https:\/\/api.cognitive.microsoft.com\/api\/v7\/images\/search?q=Tabby+Cat&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Tabby+Cat%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d",
      "thumbnail": {
        "thumbnailUrl": "https:\/\/tse1.mm.bing.net\/th?q=Tabby+Cat&pid=Api&mkt=en-US&adlt=moderate&t=1"
      }
    }, {
      "text": "Maine Coon",
      "displayText": "Maine Coon",
      "webSearchUrl": "https:\/\/www.bing.com\/images\/search?q=Maine+Coon&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Maine+Coon%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d&FORM=IRQBPS",
      "searchLink": "https:\/\/api.cognitive.microsoft.com\/api\/v7\/images\/search?q=Maine+Coon&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Maine+Coon%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d",
      "thumbnail": {
        "thumbnailUrl": "https:\/\/tse4.mm.bing.net\/th?q=Maine+Coon&pid=Api&mkt=en-US&adlt=moderate&t=1"
      }
    }, {
      "text": "Siamese Cat",
      "displayText": "Siamese Cat",
      "webSearchUrl": "https:\/\/www.bing.com\/images\/search?q=Siamese+Cat&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Siamese+Cat%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d&FORM=IRQBPS",
      "searchLink": "https:\/\/api.cognitive.microsoft.com\/api\/v7\/images\/search?q=Siamese+Cat&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Siamese+Cat%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d",
      "thumbnail": {
        "thumbnailUrl": "https:\/\/tse4.mm.bing.net\/th?q=Siamese+Cat&pid=Api&mkt=en-US&adlt=moderate&t=1"
      }
    }, {
      "text": "Bengal Cat",
      "displayText": "Bengal Cat",
      "webSearchUrl": "https:\/\/www.bing.com\/images\/search?q=Bengal+Cat&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Bengal+Cat%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d&FORM=IRQBPS",
      "searchLink": "https:\/\/api.cognitive.microsoft.com\/api\/v7\/images\/search?q=Bengal+Cat&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Bengal+Cat%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d",
      "thumbnail": {
        "thumbnailUrl": "https:\/\/tse4.mm.bing.net\/th?q=Bengal+Cat&pid=Api&mkt=en-US&adlt=moderate&t=1"
      }
    }, {
      "text": "Persian Cat",
      "displayText": "Persian Cat",
      "webSearchUrl": "https:\/\/www.bing.com\/images\/search?q=Persian+Cat&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Persian+Cat%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d&FORM=IRQBPS",
      "searchLink": "https:\/\/api.cognitive.microsoft.com\/api\/v7\/images\/search?q=Persian+Cat&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Persian+Cat%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d",
      "thumbnail": {
        "thumbnailUrl": "https:\/\/tse3.mm.bing.net\/th?q=Persian+Cat&pid=Api&mkt=en-US&adlt=moderate&t=1"
      }
    }, {
      "text": "Savannah Cat",
      "displayText": "Savannah Cat",
      "webSearchUrl": "https:\/\/www.bing.com\/images\/search?q=Savannah+Cat&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Savannah+Cat%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d&FORM=IRQBPS",
      "searchLink": "https:\/\/api.cognitive.microsoft.com\/api\/v7\/images\/search?q=Savannah+Cat&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Savannah+Cat%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d",
      "thumbnail": {
        "thumbnailUrl": "https:\/\/tse3.mm.bing.net\/th?q=Savannah+Cat&pid=Api&mkt=en-US&adlt=moderate&t=1"
      }
    }, {
      "text": "Norwegian Forest Cat",
      "displayText": "Norwegian Forest Cat",
      "webSearchUrl": "https:\/\/www.bing.com\/images\/search?q=Norwegian+Forest+Cat&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Norwegian+Forest+Cat%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d&FORM=IRQBPS",
      "searchLink": "https:\/\/api.cognitive.microsoft.com\/api\/v7\/images\/search?q=Norwegian+Forest+Cat&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Norwegian+Forest+Cat%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d",
      "thumbnail": {
        "thumbnailUrl": "https:\/\/tse2.mm.bing.net\/th?q=Norwegian+Forest+Cat&pid=Api&mkt=en-US&adlt=moderate&t=1"
      }
    }, {
      "text": "Dog",
      "displayText": "Dog",
      "webSearchUrl": "https:\/\/www.bing.com\/images\/search?q=Dog&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Dog%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d&FORM=IRQBPS",
      "searchLink": "https:\/\/api.cognitive.microsoft.com\/api\/v7\/images\/search?q=Dog&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Dog%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d",
      "thumbnail": {
        "thumbnailUrl": "https:\/\/tse1.mm.bing.net\/th?q=Dog&pid=Api&mkt=en-US&adlt=moderate&t=1"
      }
    }, {
      "text": "Black Cat",
      "displayText": "Black Cat",
      "webSearchUrl": "https:\/\/www.bing.com\/images\/search?q=Black+Cat&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Black+Cat%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d&FORM=IRQBPS",
      "searchLink": "https:\/\/api.cognitive.microsoft.com\/api\/v7\/images\/search?q=Black+Cat&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Black+Cat%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d",
      "thumbnail": {
        "thumbnailUrl": "https:\/\/tse4.mm.bing.net\/th?q=Black+Cat&pid=Api&mkt=en-US&adlt=moderate&t=1"
      }
    }]
  }],
  "similarTerms": [{
    "text": "kittens",
    "displayText": "kittens",
    "webSearchUrl": "https:\/\/www.bing.com\/images\/search?q=kittens&FORM=IDINTS",
    "thumbnail": {
      "url": "https:\/\/tse3.mm.bing.net\/th?q=kittens&pid=Api&mkt=en-US&adlt=moderate"
    }
  }, {
    "text": "cute",
    "displayText": "cute",
    "webSearchUrl": "https:\/\/www.bing.com\/images\/search?q=cute&FORM=IDINTS",
    "thumbnail": {
      "url": "https:\/\/tse2.mm.bing.net\/th?q=cute&pid=Api&mkt=en-US&adlt=moderate"
    }
  }, {
    "text": "kit",
    "displayText": "kit",
    "webSearchUrl": "https:\/\/www.bing.com\/images\/search?q=kit&FORM=IDINTS",
    "thumbnail": {
      "url": "https:\/\/tse3.mm.bing.net\/th?q=kit&pid=Api&mkt=en-US&adlt=moderate"
    }
  }, {
    "text": "puppies",
    "displayText": "puppies",
    "webSearchUrl": "https:\/\/www.bing.com\/images\/search?q=puppies&FORM=IDINTS",
    "thumbnail": {
      "url": "https:\/\/tse1.mm.bing.net\/th?q=puppies&pid=Api&mkt=en-US&adlt=moderate"
    }
  }],
  "relatedSearches": [{
    "text": "Kittens",
    "displayText": "Kittens",
    "webSearchUrl": "https:\/\/www.bing.com\/images\/search?q=Kittens&FORM=IRPATC",
    "searchLink": "https:\/\/api.cognitive.microsoft.com\/api\/v7\/images\/search?q=Kittens",
    "thumbnail": {
      "thumbnailUrl": "https:\/\/tse3.mm.bing.net\/th?q=Kittens&pid=Api&mkt=en-US&adlt=moderate&t=1"
    }
  }, {
    "text": "Cat Memes",
    "displayText": "Cat Memes",
    "webSearchUrl": "https:\/\/www.bing.com\/images\/search?q=Cat+Memes&FORM=IRPATC",
    "searchLink": "https:\/\/api.cognitive.microsoft.com\/api\/v7\/images\/search?q=Cat+Memes",
    "thumbnail": {
      "thumbnailUrl": "https:\/\/tse2.mm.bing.net\/th?q=Cat+Memes&pid=Api&mkt=en-US&adlt=moderate&t=1"
    }
  }, {
    "text": "Cute Cats",
    "displayText": "Cute Cats",
    "webSearchUrl": "https:\/\/www.bing.com\/images\/search?q=Cute+Cats&FORM=IRPATC",
    "searchLink": "https:\/\/api.cognitive.microsoft.com\/api\/v7\/images\/search?q=Cute+Cats",
    "thumbnail": {
      "thumbnailUrl": "https:\/\/tse3.mm.bing.net\/th?q=Cute+Cats&pid=Api&mkt=en-US&adlt=moderate&t=1"
    }
  }, {
    "text": "Cartoon Cat",
    "displayText": "Cartoon Cat",
    "webSearchUrl": "https:\/\/www.bing.com\/images\/search?q=Cartoon+Cat&FORM=IRPATC",
    "searchLink": "https:\/\/api.cognitive.microsoft.com\/api\/v7\/images\/search?q=Cartoon+Cat",
    "thumbnail": {
      "thumbnailUrl": "https:\/\/tse1.mm.bing.net\/th?q=Cartoon+Cat&pid=Api&mkt=en-US&adlt=moderate&t=1"
    }
  }, {
    "text": "Funny Cats",
    "displayText": "Funny Cats",
    "webSearchUrl": "https:\/\/www.bing.com\/images\/search?q=Funny+Cats&FORM=IRPATC",
    "searchLink": "https:\/\/api.cognitive.microsoft.com\/api\/v7\/images\/search?q=Funny+Cats",
    "thumbnail": {
      "thumbnailUrl": "https:\/\/tse2.mm.bing.net\/th?q=Funny+Cats&pid=Api&mkt=en-US&adlt=moderate&t=1"
    }
  }, {
    "text": "Cat Drawings",
    "displayText": "Cat Drawings",
    "webSearchUrl": "https:\/\/www.bing.com\/images\/search?q=Cat+Drawings&FORM=IRPATC",
    "searchLink": "https:\/\/api.cognitive.microsoft.com\/api\/v7\/images\/search?q=Cat+Drawings",
    "thumbnail": {
      "thumbnailUrl": "https:\/\/tse2.mm.bing.net\/th?q=Cat+Drawings&pid=Api&mkt=en-US&adlt=moderate&t=1"
    }
  }, {
    "text": "Fat Cat",
    "displayText": "Fat Cat",
    "webSearchUrl": "https:\/\/www.bing.com\/images\/search?q=Fat+Cat&FORM=IRPATC",
    "searchLink": "https:\/\/api.cognitive.microsoft.com\/api\/v7\/images\/search?q=Fat+Cat",
    "thumbnail": {
      "thumbnailUrl": "https:\/\/tse4.mm.bing.net\/th?q=Fat+Cat&pid=Api&mkt=en-US&adlt=moderate&t=1"
    }
  }, {
    "text": "Black Cat",
    "displayText": "Black Cat",
    "webSearchUrl": "https:\/\/www.bing.com\/images\/search?q=Black+Cat&FORM=IRPATC",
    "searchLink": "https:\/\/api.cognitive.microsoft.com\/api\/v7\/images\/search?q=Black+Cat",
    "thumbnail": {
      "thumbnailUrl": "https:\/\/tse4.mm.bing.net\/th?q=Black+Cat&pid=Api&mkt=en-US&adlt=moderate&t=1"
    }
  }, {
    "text": "Birds",
    "displayText": "Birds",
    "webSearchUrl": "https:\/\/www.bing.com\/images\/search?q=Birds&FORM=IRPATC",
    "searchLink": "https:\/\/api.cognitive.microsoft.com\/api\/v7\/images\/search?q=Birds",
    "thumbnail": {
      "thumbnailUrl": "https:\/\/tse3.mm.bing.net\/th?q=Birds&pid=Api&mkt=en-US&adlt=moderate&t=1"
    }
  }, {
    "text": "Munchkin Cat",
    "displayText": "Munchkin Cat",
    "webSearchUrl": "https:\/\/www.bing.com\/images\/search?q=Munchkin+Cat&FORM=IRPATC",
    "searchLink": "https:\/\/api.cognitive.microsoft.com\/api\/v7\/images\/search?q=Munchkin+Cat",
    "thumbnail": {
      "thumbnailUrl": "https:\/\/tse4.mm.bing.net\/th?q=Munchkin+Cat&pid=Api&mkt=en-US&adlt=moderate&t=1"
    }
  }, {
    "text": "Fish",
    "displayText": "Fish",
    "webSearchUrl": "https:\/\/www.bing.com\/images\/search?q=Fish&FORM=IRPATC",
    "searchLink": "https:\/\/api.cognitive.microsoft.com\/api\/v7\/images\/search?q=Fish",
    "thumbnail": {
      "thumbnailUrl": "https:\/\/tse1.mm.bing.net\/th?q=Fish&pid=Api&mkt=en-US&adlt=moderate&t=1"
    }
  }, {
    "text": "Persian Cat",
    "displayText": "Persian Cat",
    "webSearchUrl": "https:\/\/www.bing.com\/images\/search?q=Persian+Cat&FORM=IRPATC",
    "searchLink": "https:\/\/api.cognitive.microsoft.com\/api\/v7\/images\/search?q=Persian+Cat",
    "thumbnail": {
      "thumbnailUrl": "https:\/\/tse3.mm.bing.net\/th?q=Persian+Cat&pid=Api&mkt=en-US&adlt=moderate&t=1"
    }
  }, {
    "text": "Cat Clip Art",
    "displayText": "Cat Clip Art",
    "webSearchUrl": "https:\/\/www.bing.com\/images\/search?q=Cat+Clip+Art&FORM=IRPATC",
    "searchLink": "https:\/\/api.cognitive.microsoft.com\/api\/v7\/images\/search?q=Cat+Clip+Art",
    "thumbnail": {
      "thumbnailUrl": "https:\/\/tse4.mm.bing.net\/th?q=Cat+Clip+Art&pid=Api&mkt=en-US&adlt=moderate&t=1"
    }
  }, {
    "text": "Car",
    "displayText": "Car",
    "webSearchUrl": "https:\/\/www.bing.com\/images\/search?q=Car&FORM=IRPATC",
    "searchLink": "https:\/\/api.cognitive.microsoft.com\/api\/v7\/images\/search?q=Car",
    "thumbnail": {
      "thumbnailUrl": "https:\/\/tse1.mm.bing.net\/th?q=Car&pid=Api&mkt=en-US&adlt=moderate&t=1"
    }
  }, {
    "text": "Cow",
    "displayText": "Cow",
    "webSearchUrl": "https:\/\/www.bing.com\/images\/search?q=Cow&FORM=IRPATC",
    "searchLink": "https:\/\/api.cognitive.microsoft.com\/api\/v7\/images\/search?q=Cow",
    "thumbnail": {
      "thumbnailUrl": "https:\/\/tse4.mm.bing.net\/th?q=Cow&pid=Api&mkt=en-US&adlt=moderate&t=1"
    }
  }, {
    "text": "Siamese Cats",
    "displayText": "Siamese Cats",
    "webSearchUrl": "https:\/\/www.bing.com\/images\/search?q=Siamese+Cats&FORM=IRPATC",
    "searchLink": "https:\/\/api.cognitive.microsoft.com\/api\/v7\/images\/search?q=Siamese+Cats",
    "thumbnail": {
      "thumbnailUrl": "https:\/\/tse1.mm.bing.net\/th?q=Siamese+Cats&pid=Api&mkt=en-US&adlt=moderate&t=1"
    }
  }, {
    "text": "Maine Coon Cat",
    "displayText": "Maine Coon Cat",
    "webSearchUrl": "https:\/\/www.bing.com\/images\/search?q=Maine+Coon+Cat&FORM=IRPATC",
    "searchLink": "https:\/\/api.cognitive.microsoft.com\/api\/v7\/images\/search?q=Maine+Coon+Cat",
    "thumbnail": {
      "thumbnailUrl": "https:\/\/tse2.mm.bing.net\/th?q=Maine+Coon+Cat&pid=Api&mkt=en-US&adlt=moderate&t=1"
    }
  }, {
    "text": "Grumpy Cat",
    "displayText": "Grumpy Cat",
    "webSearchUrl": "https:\/\/www.bing.com\/images\/search?q=Grumpy+Cat&FORM=IRPATC",
    "searchLink": "https:\/\/api.cognitive.microsoft.com\/api\/v7\/images\/search?q=Grumpy+Cat",
    "thumbnail": {
      "thumbnailUrl": "https:\/\/tse3.mm.bing.net\/th?q=Grumpy+Cat&pid=Api&mkt=en-US&adlt=moderate&t=1"
    }
  }, {
    "text": "Wild Cat",
    "displayText": "Wild Cat",
    "webSearchUrl": "https:\/\/www.bing.com\/images\/search?q=Wild+Cat&FORM=IRPATC",
    "searchLink": "https:\/\/api.cognitive.microsoft.com\/api\/v7\/images\/search?q=Wild+Cat",
    "thumbnail": {
      "thumbnailUrl": "https:\/\/tse3.mm.bing.net\/th?q=Wild+Cat&pid=Api&mkt=en-US&adlt=moderate&t=1"
    }
  }, {
    "text": "Cats and Dogs",
    "displayText": "Cats and Dogs",
    "webSearchUrl": "https:\/\/www.bing.com\/images\/search?q=Cats+and+Dogs&FORM=IRPATC",
    "searchLink": "https:\/\/api.cognitive.microsoft.com\/api\/v7\/images\/search?q=Cats+and+Dogs",
    "thumbnail": {
      "thumbnailUrl": "https:\/\/tse4.mm.bing.net\/th?q=Cats+and+Dogs&pid=Api&mkt=en-US&adlt=moderate&t=1"
    }
  }, {
    "text": "Rabbit",
    "displayText": "Rabbit",
    "webSearchUrl": "https:\/\/www.bing.com\/images\/search?q=Rabbit&FORM=IRPATC",
    "searchLink": "https:\/\/api.cognitive.microsoft.com\/api\/v7\/images\/search?q=Rabbit",
    "thumbnail": {
      "thumbnailUrl": "https:\/\/tse3.mm.bing.net\/th?q=Rabbit&pid=Api&mkt=en-US&adlt=moderate&t=1"
    }
  }, {
    "text": "Cat Coloring Pages",
    "displayText": "Cat Coloring Pages",
    "webSearchUrl": "https:\/\/www.bing.com\/images\/search?q=Cat+Coloring+Pages&FORM=IRPATC",
    "searchLink": "https:\/\/api.cognitive.microsoft.com\/api\/v7\/images\/search?q=Cat+Coloring+Pages",
    "thumbnail": {
      "thumbnailUrl": "https:\/\/tse2.mm.bing.net\/th?q=Cat+Coloring+Pages&pid=Api&mkt=en-US&adlt=moderate&t=1"
    }
  }, {
    "text": "Bobcat",
    "displayText": "Bobcat",
    "webSearchUrl": "https:\/\/www.bing.com\/images\/search?q=Bobcat&FORM=IRPATC",
    "searchLink": "https:\/\/api.cognitive.microsoft.com\/api\/v7\/images\/search?q=Bobcat",
    "thumbnail": {
      "thumbnailUrl": "https:\/\/tse4.mm.bing.net\/th?q=Bobcat&pid=Api&mkt=en-US&adlt=moderate&t=1"
    }
  }, {
    "text": "Cat Breeds",
    "displayText": "Cat Breeds",
    "webSearchUrl": "https:\/\/www.bing.com\/images\/search?q=Cat+Breeds&FORM=IRPATC",
    "searchLink": "https:\/\/api.cognitive.microsoft.com\/api\/v7\/images\/search?q=Cat+Breeds",
    "thumbnail": {
      "thumbnailUrl": "https:\/\/tse2.mm.bing.net\/th?q=Cat+Breeds&pid=Api&mkt=en-US&adlt=moderate&t=1"
    }
  }, {
    "text": "Ragdoll Cat",
    "displayText": "Ragdoll Cat",
    "webSearchUrl": "https:\/\/www.bing.com\/images\/search?q=Ragdoll+Cat&FORM=IRPATC",
    "searchLink": "https:\/\/api.cognitive.microsoft.com\/api\/v7\/images\/search?q=Ragdoll+Cat",
    "thumbnail": {
      "thumbnailUrl": "https:\/\/tse4.mm.bing.net\/th?q=Ragdoll+Cat&pid=Api&mkt=en-US&adlt=moderate&t=1"
    }
  }, {
    "text": "Black and White Cat",
    "displayText": "Black and White Cat",
    "webSearchUrl": "https:\/\/www.bing.com\/images\/search?q=Black+and+White+Cat&FORM=IRPATC",
    "searchLink": "https:\/\/api.cognitive.microsoft.com\/api\/v7\/images\/search?q=Black+and+White+Cat",
    "thumbnail": {
      "thumbnailUrl": "https:\/\/tse4.mm.bing.net\/th?q=Black+and+White+Cat&pid=Api&mkt=en-US&adlt=moderate&t=1"
    }
  }, {
    "text": "Cat Animal",
    "displayText": "Cat Animal",
    "webSearchUrl": "https:\/\/www.bing.com\/images\/search?q=Cat+Animal&FORM=IRPATC",
    "searchLink": "https:\/\/api.cognitive.microsoft.com\/api\/v7\/images\/search?q=Cat+Animal",
    "thumbnail": {
      "thumbnailUrl": "https:\/\/tse3.mm.bing.net\/th?q=Cat+Animal&pid=Api&mkt=en-US&adlt=moderate&t=1"
    }
  }, {
    "text": "Savannah Cat",
    "displayText": "Savannah Cat",
    "webSearchUrl": "https:\/\/www.bing.com\/images\/search?q=Savannah+Cat&FORM=IRPATC",
    "searchLink": "https:\/\/api.cognitive.microsoft.com\/api\/v7\/images\/search?q=Savannah+Cat",
    "thumbnail": {
      "thumbnailUrl": "https:\/\/tse3.mm.bing.net\/th?q=Savannah+Cat&pid=Api&mkt=en-US&adlt=moderate&t=1"
    }
  }, {
    "text": "Warrior Cats",
    "displayText": "Warrior Cats",
    "webSearchUrl": "https:\/\/www.bing.com\/images\/search?q=Warrior+Cats&FORM=IRPATC",
    "searchLink": "https:\/\/api.cognitive.microsoft.com\/api\/v7\/images\/search?q=Warrior+Cats",
    "thumbnail": {
      "thumbnailUrl": "https:\/\/tse4.mm.bing.net\/th?q=Warrior+Cats&pid=Api&mkt=en-US&adlt=moderate&t=1"
    }
  }, {
    "text": "Cats and Kittens",
    "displayText": "Cats and Kittens",
    "webSearchUrl": "https:\/\/www.bing.com\/images\/search?q=Cats+and+Kittens&FORM=IRPATC",
    "searchLink": "https:\/\/api.cognitive.microsoft.com\/api\/v7\/images\/search?q=Cats+and+Kittens",
    "thumbnail": {
      "thumbnailUrl": "https:\/\/tse3.mm.bing.net\/th?q=Cats+and+Kittens&pid=Api&mkt=en-US&adlt=moderate&t=1"
    }
  }, {
    "text": "Norwegian Forest Cat",
    "displayText": "Norwegian Forest Cat",
    "webSearchUrl": "https:\/\/www.bing.com\/images\/search?q=Norwegian+Forest+Cat&FORM=IRPATC",
    "searchLink": "https:\/\/api.cognitive.microsoft.com\/api\/v7\/images\/search?q=Norwegian+Forest+Cat",
    "thumbnail": {
      "thumbnailUrl": "https:\/\/tse2.mm.bing.net\/th?q=Norwegian+Forest+Cat&pid=Api&mkt=en-US&adlt=moderate&t=1"
    }
  }, {
    "text": "Cat in the Hat",
    "displayText": "Cat in the Hat",
    "webSearchUrl": "https:\/\/www.bing.com\/images\/search?q=Cat+in+the+Hat&FORM=IRPATC",
    "searchLink": "https:\/\/api.cognitive.microsoft.com\/api\/v7\/images\/search?q=Cat+in+the+Hat",
    "thumbnail": {
      "thumbnailUrl": "https:\/\/tse2.mm.bing.net\/th?q=Cat+in+the+Hat&pid=Api&mkt=en-US&adlt=moderate&t=1"
    }
  }, {
    "text": "Russian Blue Cat",
    "displayText": "Russian Blue Cat",
    "webSearchUrl": "https:\/\/www.bing.com\/images\/search?q=Russian+Blue+Cat&FORM=IRPATC",
    "searchLink": "https:\/\/api.cognitive.microsoft.com\/api\/v7\/images\/search?q=Russian+Blue+Cat",
    "thumbnail": {
      "thumbnailUrl": "https:\/\/tse4.mm.bing.net\/th?q=Russian+Blue+Cat&pid=Api&mkt=en-US&adlt=moderate&t=1"
    }
  }, {
    "text": "Bengal Cat",
    "displayText": "Bengal Cat",
    "webSearchUrl": "https:\/\/www.bing.com\/images\/search?q=Bengal+Cat&FORM=IRPATC",
    "searchLink": "https:\/\/api.cognitive.microsoft.com\/api\/v7\/images\/search?q=Bengal+Cat",
    "thumbnail": {
      "thumbnailUrl": "https:\/\/tse4.mm.bing.net\/th?q=Bengal+Cat&pid=Api&mkt=en-US&adlt=moderate&t=1"
    }
  }, {
    "text": "Cat Face",
    "displayText": "Cat Face",
    "webSearchUrl": "https:\/\/www.bing.com\/images\/search?q=Cat+Face&FORM=IRPATC",
    "searchLink": "https:\/\/api.cognitive.microsoft.com\/api\/v7\/images\/search?q=Cat+Face",
    "thumbnail": {
      "thumbnailUrl": "https:\/\/tse2.mm.bing.net\/th?q=Cat+Face&pid=Api&mkt=en-US&adlt=moderate&t=1"
    }
  }, {
    "text": "Caterpillar",
    "displayText": "Caterpillar",
    "webSearchUrl": "https:\/\/www.bing.com\/images\/search?q=Caterpillar&FORM=IRPATC",
    "searchLink": "https:\/\/api.cognitive.microsoft.com\/api\/v7\/images\/search?q=Caterpillar",
    "thumbnail": {
      "thumbnailUrl": "https:\/\/tse4.mm.bing.net\/th?q=Caterpillar&pid=Api&mkt=en-US&adlt=moderate&t=1"
    }
  }, {
    "text": "Felidae",
    "displayText": "Felidae",
    "webSearchUrl": "https:\/\/www.bing.com\/images\/search?q=Felidae&FORM=IRPATC",
    "searchLink": "https:\/\/api.cognitive.microsoft.com\/api\/v7\/images\/search?q=Felidae",
    "thumbnail": {
      "thumbnailUrl": "https:\/\/tse3.mm.bing.net\/th?q=Felidae&pid=Api&mkt=en-US&adlt=moderate&t=1"
    }
  }, {
    "text": "Tuxedo Cat",
    "displayText": "Tuxedo Cat",
    "webSearchUrl": "https:\/\/www.bing.com\/images\/search?q=Tuxedo+Cat&FORM=IRPATC",
    "searchLink": "https:\/\/api.cognitive.microsoft.com\/api\/v7\/images\/search?q=Tuxedo+Cat",
    "thumbnail": {
      "thumbnailUrl": "https:\/\/tse2.mm.bing.net\/th?q=Tuxedo+Cat&pid=Api&mkt=en-US&adlt=moderate&t=1"
    }
  }, {
    "text": "Cats Musical",
    "displayText": "Cats Musical",
    "webSearchUrl": "https:\/\/www.bing.com\/images\/search?q=Cats+Musical&FORM=IRPATC",
    "searchLink": "https:\/\/api.cognitive.microsoft.com\/api\/v7\/images\/search?q=Cats+Musical",
    "thumbnail": {
      "thumbnailUrl": "https:\/\/tse2.mm.bing.net\/th?q=Cats+Musical&pid=Api&mkt=en-US&adlt=moderate&t=1"
    }
  }, {
    "text": "Gray Cat",
    "displayText": "Gray Cat",
    "webSearchUrl": "https:\/\/www.bing.com\/images\/search?q=Gray+Cat&FORM=IRPATC",
    "searchLink": "https:\/\/api.cognitive.microsoft.com\/api\/v7\/images\/search?q=Gray+Cat",
    "thumbnail": {
      "thumbnailUrl": "https:\/\/tse2.mm.bing.net\/th?q=Gray+Cat&pid=Api&mkt=en-US&adlt=moderate&t=1"
    }
  }, {
    "text": "Snowshoe Cat",
    "displayText": "Snowshoe Cat",
    "webSearchUrl": "https:\/\/www.bing.com\/images\/search?q=Snowshoe+Cat&FORM=IRPATC",
    "searchLink": "https:\/\/api.cognitive.microsoft.com\/api\/v7\/images\/search?q=Snowshoe+Cat",
    "thumbnail": {
      "thumbnailUrl": "https:\/\/tse3.mm.bing.net\/th?q=Snowshoe+Cat&pid=Api&mkt=en-US&adlt=moderate&t=1"
    }
  }, {
    "text": "Lolcats",
    "displayText": "Lolcats",
    "webSearchUrl": "https:\/\/www.bing.com\/images\/search?q=Lolcats&FORM=IRPATC",
    "searchLink": "https:\/\/api.cognitive.microsoft.com\/api\/v7\/images\/search?q=Lolcats",
    "thumbnail": {
      "thumbnailUrl": "https:\/\/tse1.mm.bing.net\/th?q=Lolcats&pid=Api&mkt=en-US&adlt=moderate&t=1"
    }
  }, {
    "text": "Calico Cat",
    "displayText": "Calico Cat",
    "webSearchUrl": "https:\/\/www.bing.com\/images\/search?q=Calico+Cat&FORM=IRPATC",
    "searchLink": "https:\/\/api.cognitive.microsoft.com\/api\/v7\/images\/search?q=Calico+Cat",
    "thumbnail": {
      "thumbnailUrl": "https:\/\/tse2.mm.bing.net\/th?q=Calico+Cat&pid=Api&mkt=en-US&adlt=moderate&t=1"
    }
  }, {
    "text": "Catbug",
    "displayText": "Catbug",
    "webSearchUrl": "https:\/\/www.bing.com\/images\/search?q=Catbug&FORM=IRPATC",
    "searchLink": "https:\/\/api.cognitive.microsoft.com\/api\/v7\/images\/search?q=Catbug",
    "thumbnail": {
      "thumbnailUrl": "https:\/\/tse1.mm.bing.net\/th?q=Catbug&pid=Api&mkt=en-US&adlt=moderate&t=1"
    }
  }, {
    "text": "Cute Cat Drawings",
    "displayText": "Cute Cat Drawings",
    "webSearchUrl": "https:\/\/www.bing.com\/images\/search?q=Cute+Cat+Drawings&FORM=IRPATC",
    "searchLink": "https:\/\/api.cognitive.microsoft.com\/api\/v7\/images\/search?q=Cute+Cat+Drawings",
    "thumbnail": {
      "thumbnailUrl": "https:\/\/tse1.mm.bing.net\/th?q=Cute+Cat+Drawings&pid=Api&mkt=en-US&adlt=moderate&t=1"
    }
  }, {
    "text": "Hellcat",
    "displayText": "Hellcat",
    "webSearchUrl": "https:\/\/www.bing.com\/images\/search?q=Hellcat&FORM=IRPATC",
    "searchLink": "https:\/\/api.cognitive.microsoft.com\/api\/v7\/images\/search?q=Hellcat",
    "thumbnail": {
      "thumbnailUrl": "https:\/\/tse2.mm.bing.net\/th?q=Hellcat&pid=Api&mkt=en-US&adlt=moderate&t=1"
    }
  }, {
    "text": "FisherCat",
    "displayText": "FisherCat",
    "webSearchUrl": "https:\/\/www.bing.com\/images\/search?q=FisherCat&FORM=IRPATC",
    "searchLink": "https:\/\/api.cognitive.microsoft.com\/api\/v7\/images\/search?q=FisherCat",
    "thumbnail": {
      "thumbnailUrl": "https:\/\/tse4.mm.bing.net\/th?q=FisherCat&pid=Api&mkt=en-US&adlt=moderate&t=1"
    }
  }, {
    "text": "Cat Eyes",
    "displayText": "Cat Eyes",
    "webSearchUrl": "https:\/\/www.bing.com\/images\/search?q=Cat+Eyes&FORM=IRPATC",
    "searchLink": "https:\/\/api.cognitive.microsoft.com\/api\/v7\/images\/search?q=Cat+Eyes",
    "thumbnail": {
      "thumbnailUrl": "https:\/\/tse1.mm.bing.net\/th?q=Cat+Eyes&pid=Api&mkt=en-US&adlt=moderate&t=1"
    }
  }, {
    "text": "Grey Cat",
    "displayText": "Grey Cat",
    "webSearchUrl": "https:\/\/www.bing.com\/images\/search?q=Grey+Cat&FORM=IRPATC",
    "searchLink": "https:\/\/api.cognitive.microsoft.com\/api\/v7\/images\/search?q=Grey+Cat",
    "thumbnail": {
      "thumbnailUrl": "https:\/\/tse2.mm.bing.net\/th?q=Grey+Cat&pid=Api&mkt=en-US&adlt=moderate&t=1"
    }
  }, {
    "text": "Baby Cats",
    "displayText": "Baby Cats",
    "webSearchUrl": "https:\/\/www.bing.com\/images\/search?q=Baby+Cats&FORM=IRPATC",
    "searchLink": "https:\/\/api.cognitive.microsoft.com\/api\/v7\/images\/search?q=Baby+Cats",
    "thumbnail": {
      "thumbnailUrl": "https:\/\/tse2.mm.bing.net\/th?q=Baby+Cats&pid=Api&mkt=en-US&adlt=moderate&t=1"
    }
  }]
}
```

![Analytics](https://kentico-ga-beacon.azurewebsites.net/api/UA-69014260-4/Kentico/kontent-custom-element-samples/BingImagePicker?pixel)
