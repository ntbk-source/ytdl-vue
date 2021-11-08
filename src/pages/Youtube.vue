<template>
	<div class="bg-white rounded-lg shadow text-dark p-3">
		<div v-if="isData">
			<div class="table-responsive">
				<div class="aspect-w-16 aspect-h-9 mb-3">
					<img :src="data.thumb" class="rounded-lg transition-all duration-300">
				</div>

				<table class="table table-bordered rounded-lg mb-3">
					<thead class="">
						<tr>
							<th>TITLE</th>
							<td>{{ data.title }}</td>
						</tr>
						<tr>
							<th>DURATION</th>
							<td>{{ data.duration }}</td>
						</tr>
						<tr>
							<th>VIEW</th>
							<td>{{ data.view }}</td>
						</tr>
						<tr>
							<th>PUBLISHED</th>
							<td>{{ data.published }}</td>
						</tr>
						<tr>
							<th>LIKES</th>
							<td>{{ data.like }}</td>
						</tr>
						<tr>
							<th>DISLIKES</th>
							<td>{{ data.dislike }}</td>
						</tr>
					</thead>
				</table>

				<div v-if="type === 'mp4'">
					<div class="aspect-w-16 aspect-h-9 mb-3">
						<iframe :src="data.url_video" class="rounded-lg"></iframe>

					</div>
				</div>

				<div v-else>
					<audio :src="data.url_audio" class="w-full" controls=""></audio>
				</div>

				<div class="flex justify-between items-center mt-4 mb-4">
					<button @click="reset()" class="inline-flex items-center px-3 py-2 text-white rounded-lg shadow bg-red-500 hover:bg-red-600 focus:outline-none focus:bg-red-600">Reset</button>
					<button @click="download(type === 'mp3' ? data.url_audio : data.url_video)" class="inline-flex items-center px-3 py-2 text-white rounded-lg shadow bg-blue-500 hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Download</button>
				</div>
			</div>

		</div>
		<div v-else>
			<form @submit.prevent="store()">
				<div class="mb-3">
					<label class="block mb-1 font-bold" for="type">TIPE</label>
					<select v-model="type" class="w-full rounded-lg" id="type">
						<option value="mp4" selected>Pilih format (Default mp4)</option>
						<option value="mp3">MP3</option>
						<option value="mp4">MP4</option>
					</select>
					<small class="text-red-500 font-bold" v-text="error.type"></small>
				</div>
				<div class="mb-3">
					<label class="block mb-1 font-bold" for="url">URL</label>
					<input type="text" id="url" v-model="url" class="w-full rounded-lg" placeholder="Masukkan link" />
					<small class="text-red-500 font-bold" v-text="error.url"></small>
				</div>
				<div class="">
					<button type="submit" class="inline-flex items-center rounded-lg shadow text-white px-3 py-2 bg-blue-500 hover:bg-blue-600 focus:bg-blue-600">Submit</button>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
	import axios from "axios";

	export default {
		data() {
			const url = '';
			let type = 'mp4';
			const isData = false;
			const error = {
				type: "",
				url: ""
			};
			const data = {};
			return {
				url,
				type,
				isData,
				data,
				error
			}
		},
		methods: {
			async store() {
				try {
					if (this.type === '') {
						return this.error.type = "Harap pilih satu tipe!";
					} else {
						this.error.type = "";
					}
					if (this.url === '') {
						return this.error.url = "URL Harus di isi!";
					} else {
						this.error.url = "";
					}

					let format = "mp4";
					if (this.type === "mp3") {
						format = "ytmp3?url=" + this.url;
					} else {
						format = "ytmp4?url=" + this.url;
					}

					const url = "https://leyscoders-api.herokuapp.com/api/" + format;

					let resp = await axios.get(url);

					if (resp.data.status === true) {
						this.isData = true;
						this.data = resp.data.result[0];
					} else {
						throw "Terjadi kesalahan / URL tidak valid";
					}
				} catch(e) {
					this.isData = false;
					this.error.type = e;
				}
			},
			download(url) {
				window.open(
					url, '_blank'
				)
			},
			reset() {
				this.isData = false;
				this.url = "";
				this.type = "mp4";
				this.error = {
					type: "",
					url: ""
				}
				this.data = {};
			}
		},
	}
	</script>