# Vue Mergely

## Mergely仓库地址
https://github.com/wickedest/Mergely

## 需要依赖

 - mergely
 - codemirror
 - jquery

## webpack配置
在`vue.config.js'中
```js
const path = require('path')
const webpack = require('webpack')
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'mergely':		path.join(__dirname, 'node_modules', 'mergely'),
        'CodeMirror':	path.join(__dirname, 'node_modules', 'codemirror'),
        'jQuery':		path.join(__dirname, 'node_modules', 'jquery'),
        '$':			path.join(__dirname, 'node_modules', 'jquery')
      }
    },
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        CodeMirror: 'codemirror'
      })
    ]
  }
}
```

## 使用方法
```vue
<template>
  <div id="app"> 
    <div class="mergely-full-screen-8">
      <div class="mergely-resizer">
        <div id="mergely"></div>
      </div>
    </div>
  </div>
</template>

<script>
import 'codemirror/lib/codemirror.css'
import 'mergely/lib/mergely.css'
import 'mergely'

export default {
  name: 'App',
  mounted () {
    jQuery(document).ready(() => {
      jQuery('#mergely').mergely({
        lhs: (setValue) => {
          setValue('the quick red fox\njumped over the hairy dog');
        },
        rhs: (setValue) => {
          setValue('the quick brown fox\njumped over the lazy dog');
        }
      });
    });
  }
}
</script>

<style lang="scss">
</style>

```

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
