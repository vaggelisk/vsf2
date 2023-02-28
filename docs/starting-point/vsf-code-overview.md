
# VSF code overview

It helps a lot [this video](https://www.youtube.com/watch?v=bXMXurRkXKE&ab_channel=VueStorefront)
from the core team of VSF.

## 1. Pages

You can see a very characteristic example at


```shell
├── pages
│   ├── About-Us.vue
```

And also you can see this [VSF routing documentation](https://docs.vuestorefront.io/v2/getting-started/layouts-and-routing.html)
and [Nuxt routing documentation](https://nuxtjs.org/docs/get-started/routing/)


&#9745; **Reminder**: With `routing` we name all this procedure changing view/pages
with the change of the URL. For example from https://localhost:3035/el to the
  https://localhost:3035/el/about-us or to whatever else.


## 2. Components

There are parts that consists the pages and the app

## 3. Composables

## 4. Storefront-ui

It's more the styling CSS part, that is at the folder
```shell
├── node_modules
│   ├── @storefront-ui
```
but can override its classes
whenever you want in the project.


 &#x26a0;&#xfe0f; **Never** try to make changes in the node_modules, because after an
`npx yarn install`, it's very possible to lose them.


