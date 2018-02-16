<template>
  <div>
    <section>
      <div class="punch-header">Entertainment</div>
      <article class="item-container" v-for="post in posts" :key="post.id">
        <nuxt-link :to="{
            name: 'id',
            params: {id: post.slug, tag: post.tags}
            }"><h6 v-html="post.title.rendered"/></nuxt-link>
        <span><timeago :since="post.date"/></span>
      </article>
    </section>
  </div>
</template>

<script>
import fetch from 'isomorphic-fetch'

export default {
  data () {
    return {
      posts: []
    }
  },
  async asyncData({ req, res }) {
    // We can use async/await ES6 feature
    const  data  = await fetch(`https://punchng.com/wp-json/wp/v2/posts/?categories=46&per_page=50`)
    const posts = await data.json()

    return { posts }
  },
  head() {
    return {
      title: 'punchng - Entertainment'
    }
  }
}
</script>

<style scoped>
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
  color: #000 !important;
}
.item-container span {
  font-size: 12px;
  color: rgb(128, 126, 126)
}
</style>


