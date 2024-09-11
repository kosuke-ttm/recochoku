import {onMounted} from "vue"
import {createRouter,createWebHistory} from "vue-router"
import HelloWorld from "./component/HelloWorld.vue" //ルーティングに用いたいファイル
import Loading from "./component/Loading.vue" //ルーティングに用いたいファイル
import Start from "./component/Start.vue" //ルーティングに用いたいファイル

const routes = [
	{
		path: "/",
		name: "HelloWorld",
		component: HelloWorld,
	},
	{
		path:"/Loading",
		name: "Loading",
		component: Loading,
	},
	{
		path:"/Start",
		name:"Start",
		component: Start,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes: routes,
})
export default router
