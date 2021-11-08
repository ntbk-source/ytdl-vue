<template >
	<div class="bg-white rounded-lg shadow border-b border-gray-600 px-4 py-4 mb-2">
		<nav class="flex flex-col md:flex-row md:items-center md:justify-between ">
			<div class="flex justify-between items-center">
				<div class="mr-2 text-lg font-extrabold">
					<router-link :to="{name: 'Home'}" class="bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-blue-500 to-green-500" @click="isOpen = false">YTDL</router-link>
				</div>
				<div >
					<button @click="isOpen = !isOpen" class="md:hidden focus:outline-none">
						<i :class="isOpen ? 'fa-times' : 'fa-bars'" class="fas fa-fw"></i>
					</button>
				</div>
			</div>
			
			<div :class="isOpen ? 'block' : 'hidden'" class="md:flex flex-col md:flex-row w-full justify-between mt-1 md:mt-0">
				<div class="flex flex-col md:flex-row ">
					<router-link :to="{name: 'Home'}" class="block text-dark hover:text-gray-700 py-1 md:px-2" @click="isOpen = false">Home</router-link>
					<router-link :to="{name: 'Youtube'}" class="block text-dark hover:text-gray-700 py-1 md:px-2" @click="isOpen = false">YT Download</router-link>
				</div>
				<div class="flex flex-col md:flex-row">
					<router-link :to="{name: 'Home'}" class="hidden md:block text-dark hover:text-gray-700 py-1 md:px-2" @click="isOpen = false">
						<i class="fas fa-fw fa-home"></i>
					</router-link>
				</div>
			</div>
		</nav>
	</div>
</template>

<script >
	export default {
		data() {
			const isOpen = false;
			return {
				isOpen
			}
		}
	}
</script>