import { createRouter, createWebHistory } from "vue-router"

import Home from "../pages/Home.vue";
import Youtube from "../pages/Youtube.vue";

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/youtube',
		name: 'Youtube',
		component: Youtube
	}
];

const router = createRouter({
	routes,
	history: createWebHistory()
});

export default router;