# Geolocation Leaflet element

This KC custom element allows you to put a marker on a map and it automatically gets converted to latitude and longitude geo locations.

This element is based on [Leaflet](https://leafletjs.com) service that uses [Open street maps](https://www.openstreetmap.org) together with the [Mapbox](https://www.mapbox.com/) service.

You can test it by configuring https://kentico.github.io/kontent-custom-element-samples/Geolocation-Leaflet/Geolocation-Leaflet.html url for your custom element.\
For testing purposes you can use provided `access_token` otherwise you need to [generate your own MapBox access token](https://docs.mapbox.com/help/how-mapbox-works/access-tokens/).

![screenshot](https://amend.cz/geolocation/geolocation2.png)

## Configuration

Your have to configure `access_token` parameter. Use access token containing [public scopes](https://docs.mapbox.com/help/how-mapbox-works/access-tokens/#access-token-scopes). One is generated automatically after the sign up.

You can specify other {JSON} parameters as a part of the configuration to set the default width/height (pixels) of the map, default latitude and longitude and the zoom (0-18) of the map.You can configure only some or even none of the parameters, default values are defined in following example:

```json
{
    "access_token" : "pk.eyJ1IjoieGhlcm1hbm4iLCJhIjoiY2p0aDB6cHRqMDU5NDRhcDV4YTlmbjh3MiJ9.RS9DeqsnIhaK46H4fQaxVg",
    "width": 800,
    "height": 600,
    "lat": 46.123456789,
    "lng": 16.123456789,
    "zoom": 10
}
```
![Analytics](https://kentico-ga-beacon.azurewebsites.net/api/UA-69014260-4/Kentico/kontent-custom-element-samples/Geolocation-Leaflet?pixel)
