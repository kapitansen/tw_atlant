## Vue.js + NUXT test project. Warranty void if deployed :)

Example - https://tw-atlant.vercel.app

Since a hypothetical project can develop further, it is necessary to immediately provide for the possibility of scaling. So I used the Nuxt framework.js - it allowed you to quickly outline the structure of the application, configure the development environment, integrate the necessary functions out of the box.

Vuetify.js - for rapid prototyping of the interface. The library is based on the Bootstrap grid, therefore, the work will be familiar to the designer. Since the application is in the initial stage of development, I used the entire UI library. In the future, it will be possible to import only those modules that are used in the application, reducing its size. vuex-persistedstate - to save the application settings in localStorage. vue-draggable-resizable - to implement a desktop with dragging blocks.

Data is stored in Vuex, changes are called via actions, even though they are synchronous. In the future, this will avoid confusion and easily expand the application. In state there are general application settings, as well as the dashboard block with the cards object - settings for the position and visibility of desktop blocks. This is not a completely flat data structure, but other objects with settings can be added to the dashboard in the future, and I think it will be clearer this way. On the News and Projects test pages, data is stored directly in the page component. Since these pages were added only to demonstrate no-prefetch, there was no point in fooling around with Vuex for a long time.

On the Blockchain page, the parsing of JSON data from Websocket could be beautifully reduced, but I did not sacrifice the readability of the code.

All other cosmetic and usability changes were made by me voluntarily, on my own initiative and due to the desire to create beautiful things.

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
