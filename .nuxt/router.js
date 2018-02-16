import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _9bb3002a = () => import('..\\pages\\sport\\index.vue' /* webpackChunkName: "pages_sport_index" */).then(m => m.default || m)
const _3bf206a2 = () => import('..\\pages\\news\\index.vue' /* webpackChunkName: "pages_news_index" */).then(m => m.default || m)
const _559783d6 = () => import('..\\pages\\business\\index.vue' /* webpackChunkName: "pages_business_index" */).then(m => m.default || m)
const _728a4e57 = () => import('..\\pages\\entertainment\\index.vue' /* webpackChunkName: "pages_entertainment_index" */).then(m => m.default || m)
const _61ab1db4 = () => import('..\\pages\\metro\\index.vue' /* webpackChunkName: "pages_metro_index" */).then(m => m.default || m)
const _023f1858 = () => import('..\\pages\\politics\\index.vue' /* webpackChunkName: "pages_politics_index" */).then(m => m.default || m)
const _6037e9d6 = () => import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */).then(m => m.default || m)
const _6898e725 = () => import('..\\pages\\_id\\index.vue' /* webpackChunkName: "pages__id_index" */).then(m => m.default || m)
const _68571088 = () => import('..\\pages\\_ids\\index.vue' /* webpackChunkName: "pages__ids_index" */).then(m => m.default || m)



if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash && document.querySelector(to.hash)) {
        // scroll to anchor by returning the selector
        position = { selector: to.hash }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/sport",
			component: _9bb3002a,
			name: "sport"
		},
		{
			path: "/news",
			component: _3bf206a2,
			name: "news"
		},
		{
			path: "/business",
			component: _559783d6,
			name: "business"
		},
		{
			path: "/entertainment",
			component: _728a4e57,
			name: "entertainment"
		},
		{
			path: "/metro",
			component: _61ab1db4,
			name: "metro"
		},
		{
			path: "/politics",
			component: _023f1858,
			name: "politics"
		},
		{
			path: "/",
			component: _6037e9d6,
			name: "index"
		},
		{
			path: "/:id",
			component: _6898e725,
			name: "id"
		},
		{
			path: "/:ids",
			component: _68571088,
			name: "ids"
		}
    ],
    
    
    fallback: false
  })
}
