import VueRouter from 'vue-router'
import HelloWorld from './components/HelloWorld.vue';
const routes = new VueRouter({
  routes: [{
    path: '',
    name: 'HelloWorld',
    component: HelloWorld
  }]
});
export default routes;