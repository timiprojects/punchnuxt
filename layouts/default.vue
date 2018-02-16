<template>
  <div>
    <Header />
    <nuxt/>
  </div>
</template>


<script>
  import Header from '@/components/Header'
  import VueTimeago from 'vue-timeago'
  import Vue from 'vue'

  Vue.use(VueTimeago, {
    name: 'timeago', // component name, `timeago` by default
    locale: 'en-US',
    locales: {
      // you will need json-loader in webpack 1
      'en-US': require('vue-timeago/locales/en-US.json')
    }
  })

  export default {
    components: {
      Header
    }
  }
</script>


<style>
html
{
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
*, *:before, *:after
{
  box-sizing: border-box;
  margin: 0;
}

body, html {
  width: 100% !important;
  height: 100% !important;
}

.nuxt-progress {
  background: linear-gradient(to left, #000 , #000) !important;
}

iframe, figure, figcaption {
  width: 100% !important;
}

img {
  width: 100% !important;
  height: 50% !important;
}

a h6 {
  color: #000 !important;
}

</style>
