## Redis

The redis cache is responsible for store some Request Data, so serve it instantly
from previous requests and not retrieve again the magento database.

To see the operation of the redis, the only it needs is to go to a server
terminal that redis is working and type

> redis-cli monitor

### Redis configuration

On VSF1 is necessary to configure the redis. This take place at
`vsf/config/local.json`

at the lines

```json lines
{
  "server": {
    ...: ...,
    "useOutputCacheTagging": true,
    "useOutputCache": true,
    "outputCacheDefaultTtl": 60,
    "invalidateCacheForwarding": true,
    "invalidateCacheForwardUrl": "`https://pwa-api.younique.netsteps.net/invalidate?key=aeSu7aip&tag=`"
  }
}
```

and at `vsf-api/config/local.json`

```json lines
{
  "server": {
    "port": "3001",
    "useOutputCacheTagging": true,
    "useOutputCache": true,
    "outputCacheDefaultTtl": 3600,
    "availableCacheTags": [
      "P",
      "C",
      "T",
      "A",
      "product",
      "category",
      "attribute",
      "taxrule"
    ],
    "invalidateCacheKey": "aeSu7aip",
    "invalidateCacheForwarding": true,
    "invalidateCacheForwardUrl": "http://127.0.0.1:3000/invalidate?key=aeSu7aip&tag="
  }
}
```

this is for VSF1, but something similar would be for VSF2

### Redis on changing stock-price

On the other hand, when you change a price or stockStatus of a product
you need to hit this url, for un-caching the values of the product

> https://pwa-api.younique.netsteps.net/invalidate?key=aeSu7aip&tag=

And, of course, this could do programmatically

### Bug on VSF2

For VSF2, see this important issue:

> https://github.com/vuestorefront/vue-storefront/issues/6884
