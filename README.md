# Url shortener API
`url-shortener-api` is a simple tool to shorten the long url hard to understand url to simple and short url for you to share across the network :yum:.
<br>
The functionality of the shortener is simple. It first get the `url` from the client and shorten it using `base62` algorithm based on `uuid`. Not that cool :zzz:

## API ENDPOINT
### Create short url
`POST` `/api/v1/shorten`
<br>
`body`
```json
{
    "url": "https://example.com"
}
```
### retrieve original url
`GET` `/api/v1/original/{shortUrl}`

