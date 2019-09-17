# Giphy picker
The Giphy picker allows to search images on Giphy and use them in your website.

![Giphy picker](GiphyPicker.gif)

# Usage

If you want to use the Giphy image picker in your project in Kentico Kontent, follow these steps:

* In Kentico Kontent open the Content types tab
* Create or edit a content model to which you want to add the Giphy picker
* Add the **Custom element** content element
* Configure the content element
* Use the following URL as Hosted code URL (HTTPS): https://kentico.github.io/kontent-custom-element-samples/GiphyPicker/giphypicker-input-component.html
* Get API key from Giphy: https://developers.giphy.com/
* Provide JSON parameters for the custom element to configure the API Key:

```json
{
    "apikey": "[YOUR API KEY]"
}
```
* The following parameters are supported:

limit (optional) number
The number of image results to return in the response. The actual number delivered may be less than requested.

offset (optional) number
The zero-based offset that indicates the number of image results to skip before returning results.

rating (optional) string
Filter result by rating, possible options are : Y, G, PG, PG-13, R

lang(optional) string
Specify default language for regional content; use a 2-letter ISO 639-1 language code. See list of supported languages : https://developers.giphy.com/docs/#language-support

For example:

```json
{
    "apikey": "[YOUR API KEY]",
    "limit": "30",
    "offset": "5",
    "rating": "R",
    "lang": "es"
}
```

See for documentation about the parameters on Giphy : https://developers.giphy.com/docs/#operation--gifs-search-get

## Example output

The element will save a value [images.fixed_height.url] containing the URL of the image to Kentico Kontent.

```
{
   "data":
   [
       {
           "type": "gif",
           "id": "DIYVI7Iz4dmnu",
           "slug": "kawaii-tree-DIYVI7Iz4dmnu",
           "url": "https://giphy.com/gifs/kawaii-tree-DIYVI7Iz4dmnu",
           "bitly_gif_url": "https://gph.is/XIDvAx",
           "bitly_url": "https://gph.is/XIDvAx",
           "embed_url": "https://giphy.com/embed/DIYVI7Iz4dmnu",
           "username": "",
           "source": "https://ilisaae.tumblr.com/post/45558665879",
           "rating": "g",
           "content_url": "",
           "source_tld": "ilisaae.tumblr.com",
           "source_post_url": "https://ilisaae.tumblr.com/post/45558665879",
           "is_sticker": 0,
           "import_datetime": "2013-03-22 09:43:46",
           "trending_datetime": "1970-01-01 00:00:00",
           "images":
           {
               "fixed_height_still":
               {
                   "url": "https://media3.giphy.com/media/DIYVI7Iz4dmnu/200_s.gif",
                   "width": "478",
                   "height": "200"
               },
               "original_still":
               {
                   "url": "https://media0.giphy.com/media/DIYVI7Iz4dmnu/giphy_s.gif",
                   "width": "500",
                   "height": "209"
               },
               "fixed_width":
               {
                   "url": "https://media2.giphy.com/media/DIYVI7Iz4dmnu/200w.gif",
                   "width": "200",
                   "height": "84",
                   "size": "30996",
                   "mp4": "https://media0.giphy.com/media/DIYVI7Iz4dmnu/200w.mp4",
                   "mp4_size": "14023",
                   "webp": "https://media0.giphy.com/media/DIYVI7Iz4dmnu/200w.webp",
                   "webp_size": "46004"
               },
               "fixed_height_small_still":
               {
                   "url": "https://media0.giphy.com/media/DIYVI7Iz4dmnu/100_s.gif",
                   "width": "239",
                   "height": "100"
               },
               "fixed_height_downsampled":
               {
                   "url": "https://media2.giphy.com/media/DIYVI7Iz4dmnu/200_d.gif",
                   "width": "478",
                   "height": "200",
                   "size": "337015",
                   "webp": "https://media0.giphy.com/media/DIYVI7Iz4dmnu/200_d.webp",
                   "webp_size": "141706"
               },
               "preview":
               {
                   "width": "500",
                   "height": "208",
                   "mp4": "https://media0.giphy.com/media/DIYVI7Iz4dmnu/giphy-preview.mp4",
                   "mp4_size": "45409"
               },
               "fixed_height_small":
               {
                   "url": "https://media0.giphy.com/media/DIYVI7Iz4dmnu/100.gif",
                   "width": "239",
                   "height": "100",
                   "size": "154416",
                   "mp4": "https://media0.giphy.com/media/DIYVI7Iz4dmnu/100.mp4",
                   "mp4_size": "102073",
                   "webp": "https://media0.giphy.com/media/DIYVI7Iz4dmnu/100.webp",
                   "webp_size": "61164"
               },
               "downsized_still":
               {
                   "url": "https://media0.giphy.com/media/DIYVI7Iz4dmnu/giphy-downsized_s.gif",
                   "width": "500",
                   "height": "209",
                   "size": "74071"
               },
               "downsized":
               {
                   "url": "https://media0.giphy.com/media/DIYVI7Iz4dmnu/giphy-downsized.gif",
                   "width": "500",
                   "height": "209",
                   "size": "740789"
               },
               "downsized_large":
               {
                   "url": "https://media3.giphy.com/media/DIYVI7Iz4dmnu/giphy.gif",
                   "width": "500",
                   "height": "209",
                   "size": "740789"
               },
               "fixed_width_small_still":
               {
                   "url": "https://media0.giphy.com/media/DIYVI7Iz4dmnu/100w_s.gif",
                   "width": "100",
                   "height": "42"
               },
               "preview_webp":
               {
                   "url": "https://media0.giphy.com/media/DIYVI7Iz4dmnu/giphy-preview.webp",
                   "width": "304",
                   "height": "127",
                   "size": "49712"
               },
               "fixed_width_still":
               {
                   "url": "https://media0.giphy.com/media/DIYVI7Iz4dmnu/200w_s.gif",
                   "width": "200",
                   "height": "84"
               },
               "fixed_width_small":
               {
                   "url": "https://media0.giphy.com/media/DIYVI7Iz4dmnu/100w.gif",
                   "width": "100",
                   "height": "42",
                   "size": "30996",
                   "mp4": "https://media0.giphy.com/media/DIYVI7Iz4dmnu/100w.mp4",
                   "mp4_size": "19769",
                   "webp": "https://media0.giphy.com/media/DIYVI7Iz4dmnu/100w.webp",
                   "webp_size": "14024"
               },
               "downsized_small":
               {
                   "width": "500",
                   "height": "208",
                   "mp4": "https://media0.giphy.com/media/DIYVI7Iz4dmnu/giphy-downsized-small.mp4",
                   "mp4_size": "45409"
               },
               "fixed_width_downsampled":
               {
                   "url": "https://media3.giphy.com/media/DIYVI7Iz4dmnu/200w_d.gif",
                   "width": "200",
                   "height": "84",
                   "size": "66283",
                   "webp": "https://media0.giphy.com/media/DIYVI7Iz4dmnu/200w_d.webp",
                   "webp_size": "27694"
               },
               "downsized_medium":
               {
                   "url": "https://media3.giphy.com/media/DIYVI7Iz4dmnu/giphy.gif",
                   "width": "500",
                   "height": "209",
                   "size": "740789"
               },
               "original":
               {
                   "url": "https://media3.giphy.com/media/DIYVI7Iz4dmnu/giphy.gif",
                   "width": "500",
                   "height": "209",
                   "size": "740789",
                   "frames": "10",
                   "mp4": "https://media0.giphy.com/media/DIYVI7Iz4dmnu/giphy.mp4",
                   "mp4_size": "41587",
                   "webp": "https://media0.giphy.com/media/DIYVI7Iz4dmnu/giphy.webp",
                   "webp_size": "249230"
               },
               "fixed_height":
               {
                   "url": "https://media2.giphy.com/media/DIYVI7Iz4dmnu/200.gif",
                   "width": "478",
                   "height": "200",
                   "size": "154416",
                   "mp4": "https://media0.giphy.com/media/DIYVI7Iz4dmnu/200.mp4",
                   "mp4_size": "9738",
                   "webp": "https://media0.giphy.com/media/DIYVI7Iz4dmnu/200.webp",
                   "webp_size": "235604"
               },
               "looping":
               {
                   "mp4": "https://media0.giphy.com/media/DIYVI7Iz4dmnu/giphy-loop.mp4",
                   "mp4_size": "3829026"
               },
               "original_mp4":
               {
                   "width": "480",
                   "height": "200",
                   "mp4": "https://media0.giphy.com/media/DIYVI7Iz4dmnu/giphy.mp4",
                   "mp4_size": "41587"
               },
               "preview_gif":
               {
                   "url": "https://media0.giphy.com/media/DIYVI7Iz4dmnu/giphy-preview.gif",
                   "width": "208",
                   "height": "87",
                   "size": "48117"
               },
               "480w_still":
               {
                   "url": "https://media4.giphy.com/media/DIYVI7Iz4dmnu/480w_s.jpg",
                   "width": "480",
                   "height": "201"
               }
           },
           "title": "kawaii tree GIF",
           "_score": 2300015.5,
           "analytics":
           {
               "onload":
               {
                   "url": "https://giphy-analytics.giphy.com/simple_analytics?response_id=5cb5f2556549473936f892e7&event_type=GIF_SEARCH&gif_id=DIYVI7Iz4dmnu&action_type=SEEN"
               },
               "onclick":
               {
                   "url": "https://giphy-analytics.giphy.com/simple_analytics?response_id=5cb5f2556549473936f892e7&event_type=GIF_SEARCH&gif_id=DIYVI7Iz4dmnu&action_type=CLICK"
               },
               "onsent":
               {
                   "url": "https://giphy-analytics.giphy.com/simple_analytics?response_id=5cb5f2556549473936f892e7&event_type=GIF_SEARCH&gif_id=DIYVI7Iz4dmnu&action_type=SENT"
               }
           }
       }
   ],
   "pagination":
   {
       "total_count": 28669,
       "count": 1,
       "offset": 0
   },
   "meta":
   {
       "status": 200,
       "msg": "OK",
       "response_id": "5cb5f2556549473936f892e7"
   }
}
```

![Analytics](https://kentico-ga-beacon.azurewebsites.net/api/UA-69014260-4/Kentico/kontent-custom-element-samples/GiphyPicker?pixel)
