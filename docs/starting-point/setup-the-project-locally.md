<div align="center">
<img src="https://user-images.githubusercontent.com/1626923/137092657-fb398d20-b592-4661-a1f9-4135db0b61d5.png" height="80px"/>  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Magento_Logo.svg/2560px-Magento_Logo.svg.png" height="80px"/>
</div>


If you don't have `git` -the most important tool of the
programming-, needs to go to the previous page

If you don't have `webstorm editor` -the second most important
tool of the programming-, needs to go even 2 previous page.

If you have the above


## Setup the project

open a terminal (Ctrl+Alt+T)
and go to the folder WebstormProjects and type

```bash

git clone https://github.com/vaggelisk/vsf2.git

cd vsf2

# choose the version of node

nvm use 16

```
 if you don't have nvm, it's very easy to install via googleSearch
or looking [here](https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/) and type again



> nvm use 16

#### make the file `.env`

this is an important file that make the app to commute
with the back-end part of the platform. So on `<project_folder>`
you have to make a file with the name  `.env` and
into the file to write the below

```dotenv
VSF_NUXT_APP_ENV=development
VSF_NUXT_APP_PORT=3050
VSF_NUXT_APP_HOST=localhost

VSF_STORE_URL=http://localhost:3050/
VSF_MIDDLEWARE_URL=http://localhost:3050/api/
VSF_SSR_MIDDLEWARE_URL=http://localhost:3050/api/

VSF_MAGENTO_BASE_URL=https://evia.pyconero.gr
VSF_MAGENTO_GRAPHQL_URL=https://evia.pyconero.gr/graphql

VSF_MAGENTO_EXTERNAL_CHECKOUT_ENABLED=false
VSF_MAGENTO_EXTERNAL_CHECKOUT_URL=https://yourdomain.gr
VSF_MAGENTO_EXTERNAL_CHECKOUT_SYNC_PATH=/vue/cart/sync

VSF_IMAGE_PROVIDER=static
VSF_IMAGE_PROVIDER_BASE_URL=https://evia.pyconero.gr/image/upload/
VSF_IMAGE_PROVIDER_DOMAIN=https://evia.pyconero.gr


VSF_REDIS_ENABLED=false
VSF_REDIS_HOST=127.0.0.1
VSF_REDIS_PORT=6379
VSF_REDIS_KEY_PREFIX=
VSF_REDIS_CACHE_INVALIDATE_URL=/cache-invalidate

VSF_RECAPTCHA_ENABLED=false
VSF_RECAPTCHA_SITE_KEY=
VSF_RECAPTCHA_SECRET_KEY=
VSF_RECAPTCHA_HIDE_BADGE=
VSF_RECAPTCHA_SIZE=invisible
VSF_RECAPTCHA_MIN_SCORE=0.5
VSF_RECAPTCHA_VERSION=3

VSF_COOKIE_HTTP_ONLY=
VSF_COOKIE_SECURE=
VSF_COOKIE_SAME_SITE=
VSF_COOKIE_PATH=

NODE_TLS_REJECT_UNAUTHORIZED=0
```

#### install dependencies

> npx yarn install

> npx yarn build

#### serve with hot reload at localhost:3050
> npx yarn dev

open a browser(chrome, firefox etc) at [http://localhost:3050/](https://www.jetbrains.com/webstorm/)

## starting development

go to the file pages/Home.vue and at line 3 write this:

    <h2>Death to Society of Repression and Spectacle</h2>

and then go again to the browser and look youn can see your first code line...!

Go again to the above specific file and change Spectacle to Sexism and go
to the browser to see your change, to see your development...




## build and serve for production
#### (not interesting for new developers)
> npx yarn build

> npx yarn start

#### generate static project
> npx yarn generate

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

