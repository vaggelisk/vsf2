<div align="center">
<img src="https://user-images.githubusercontent.com/1626923/137092657-fb398d20-b592-4661-a1f9-4135db0b61d5.png" height="80px"/>  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Magento_Logo.svg/2560px-Magento_Logo.svg.png" height="80px"/>
</div>


This project and the **vsf2ForContributing** are the same. The only difference is
the structure and the existence of the docs in the other.

If you don't want to contribute to VSF git folder, use this one.



### Build Setup

open a terminal (Ctrl+Alt+T)
and go to the folder WebstormProjects and type

```bash

$ git clone https://github.com/vaggelisk/vsf2

$ cd vsf2

# choose the version of node

$ nvm use 16

```
 if you don't have nvm, it's very easy to install via googleSearch
or looking [here](https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/) and type again



> nvm use 16

### install dependencies

> npx yarn install

> npx yarn build

### serve with hot reload at localhost:3050
> npx yarn dev  # or npx yarn run dev

open a browser(chrome, firefox etc) at http://localhost:3050/

### starting development

go to the file pages/Home.vue and at line 3 write this:

    <h2>Death to Society of Repression and Spectacle</h2>

and then go again to the browser and look youn can see your first code line...!

Go again to the above specific file and change Spectacle to Sexism and go
to the browser to see your change, to see your development...




### build for production and launch server. Not interesting for new developers
> npx yarn build
> npx yarn start

### generate static project
> npx yarn generate

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

