<template>
  <div>
      <div class="content-wrapper">
        <h5 v-html="post[0].title.rendered"/>
        <span>published by</span>
        <h6>{{post[0].x_author}}</h6>
      </div>
      <div class="container">
        <div v-html="post[0].content.rendered"/>
      </div>
  </div>
</template>

<script>
import fetch from 'isomorphic-fetch'

export default {
  data () {
    return {
      post: []
    }
  },
  async asyncData({ req, params }) {
    // We can use async/await ES6 feature
    const data = await fetch(`http://punchng.com/wp-json/wp/v2/posts/?slug=${params.ids}`)
    const post = await data.json()

    return { 
      post
    }

    
  },
  head() {
    return {
      title: this.post[0].title.rendered
    }
  }
}
</script>

<style scoped>
.container {
    width: 100%;
    padding: 10px;
}
.content-wrapper {
    background: #eee;
    padding: 10px;
}
.content-wrapper span {
    font-style: italic;
    font-size: 12px;
}
.content-wrapper h6 {
    font-size: 14px;
}

.punch-header {
  background: #000;
  padding: 10px 10px 10px 25px;
  font-size: .78em;
  text-transform: uppercase;
  position: relative;
  font-weight: 600;
  color: #fff;
}
.punch-header:before {
  position: absolute;
    left: 10px;
    margin: auto;
    margin-top: 5px;
    content: "";
    width: 8px;
    height: 8px;
    background: #fff;
}
.item-container {
  padding: 15px;
  background: rgb(243, 243, 243);
  margin-bottom: 1px;
}
.item-container a h6 {
  font-size: 16px;
  font-weight: 400;
}
.item-container span {
  font-size: 12px;
  color: rgb(128, 126, 126)
}
</style>