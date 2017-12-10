# Vue2 tile panels

## What does it do?

With this little library you can easily create resizable tiled panels in your web application. It should be useful to resemble the behaviour of many desktop applications where you can attach and resize panels containing toolbars, file explorers or something like that.

There is also a small [Demo](https://l0rn.github.io/vue-tile-panels/)

## How do I use it?

For now I just going to add a very basic example:

```html
    <!doctype html>
    <html>
    <head>
        <script src="https://cdn.jsdelivr.net/npm/vue@2.5.9/dist/vue.js" type="text/javascript"></script>
        <script src="vue2-tile-panels.js" type="text/javascript"></script>
        <link href="vue2-tile-panels.css" rel="stylesheet" type="text/css">
        <!-- styles truncated -->
    </head>
    <body>
        <div id="app">
            <tile-frame>
                <vertical-split>
                    <horizontal-split slot="left">
                        <div class="box red-box" slot="top"></div>
                        <div class="box blue-box" slot="bottom">
                            <vertical-split>
    
                            </vertical-split>
                        </div>
                    </horizontal-split>
                    <div class="box green-box" slot="right"></div>
                </vertical-split>
            </tile-frame>
        </div>
        <script>
            Vue.use(VueTilePanels)
            new Vue({
              el: '#app',
            })
        </script>
    </body>
    </html>
```

## How do I run the example

Clone the repository and run

```bash
$ npm i
$ npx webpack-dev-server
```

## I want to contribute, how do i build?

```bash
$ npm i
$ npm run build
```