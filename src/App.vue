<template>
	<div class="container h-screen py-4">
		<Nav />
		<router-view />
	</div>
</template>

<script>
	import Nav from './components/Nav.vue'
	export default {
		name: "App",
		components: {
			Nav
		}
	}
	</script>