import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import AboutView from '../views/AboutView.vue'
import CatalogView from "@/components/CatalogView.vue";
import CatalogEditor from "@/components/Catalog/CatalogEditor.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'about',
    component: AboutView,
  }
  ,
  {
    path: '/:catalogCode/view',
    name: 'catalogView',
    component: CatalogView,
    // props: ['catalogCode']
    props: route => ({ catalogCode: route.params.catalogCode })
  },
  {
    path: '/:catalogCode/edit',
    name: 'catalogEdit',
    component: CatalogEditor,
    props: ['catalogCode']
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
