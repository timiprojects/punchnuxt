<template>
  <div>
    <section class="featured">
      <h6>Featured</h6>
      <article class="featured-container" v-for="da in info" :key="da.id">
        <nuxt-link :to="{
            name: 'id',
            params: {id: da.slug, tag: da.tags},
            }"><p v-html="da.title.rendered"/></nuxt-link>
            <span><timeago :since="da.date"/></span>
      </article>
    </section>
    <section>
      <div class="punch-header">Latest News</div>
      <article class="item-container" v-for="lt in latest" :key="lt.id">
        <nuxt-link :to="{
            name: 'id',
            params: {id: lt.slug, tag: lt.tags},
            }"><h6 v-html="lt.title.rendered"/></nuxt-link>
        <span><timeago :since="lt.date"/></span>
      </article>
    </section>
    <section>
      <div class="punch-header">Metro plus</div>
      <article class="item-container" v-for="lt in metro" :key="lt.id">
        <nuxt-link :to="{
            name: 'id',
            params: {id: lt.slug, tag: lt.tags},
            }"><h6 v-html="lt.title.rendered"/></nuxt-link>
        <span><timeago :since="lt.date"/></span>
      </article>
    </section>
    <section>
      <div class="punch-header">Sponsored</div>
      <article class="item-container" v-for="lt in sponsored" :key="lt.id">
        <nuxt-link :to="{
            name: 'ids',
            params: {ids: lt.slug}
            }"><h6 v-html="lt.title.rendered"/></nuxt-link>
        <span><timeago :since="lt.date"/></span>
      </article>
    </section>
  </div>
</template>

<script>
import fetch from 'isomorphic-fetch'

export default {
  data () {
    return {
      info: [],
      latest: [],
      sponsored: [],
      metro: []
    }
  },
  async asyncData ({ req, params }) {
    //fetch featured news
    const feature = await fetch('https://punchng.com//wp-json/wp/v2/posts/?categories=13&per_page=1')
    const info = await feature.json()
    
    //fetch latest news
    const latests = await fetch('https://punchng.com//wp-json/wp/v2/posts/?categories=2&per_page=5')
    const latest = await latests.json()

    //fetch metro news
    const metros = await fetch('https://punchng.com//wp-json/wp/v2/posts/?categories=5&per_page=5')
    const metro = await metros.json()

    //fetch sponsored posts
    const sponsoreds = await fetch('https://punchng.com//wp-json/wp/v2/posts/?categories=135&per_page=5')
    const sponsored = await sponsoreds.json()

    //return all
    return {
      info,latest,metro,sponsored
    }
  }
}
</script>

<style>
.container
{
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  text-align: left;
}
.featured {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  text-align: left;
  background: rgb(228, 226, 226);
  margin-bottom: 1px;
  padding: 10px;
}
.featured h6 {
  color: #900;
  font-weight: 700;
}
.featured-container a p{
  font-weight: 400;
  font-size: 18px;
  line-height: 1.2;

}
.featured-container a, .item-container a{
  color: #000;
}
.featured span {
  font-size: 12px;
  color: rgb(128, 126, 126)
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
.title
{
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 24px;
  color: #35495e;
  letter-spacing: 1px;
}
.subtitle
{
  font-weight: 300;
  font-size: 18px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.links
{
  padding-top: 15px;
}
</style>
