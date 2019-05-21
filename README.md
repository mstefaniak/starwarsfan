# starwarsfan

> Star Wars Fan App

Simple App which let you search Star Wars movies, check their details and
write reviews. Have fun!

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
## Architecture

> store.js

Simple APP store based on Vue.observable. Stores movies and reviews.

> services/movies.js

Data collecting service. Communicating with backend API. Uses localStorage to
cache data.

> router

Vue router

> components

APP components
