<template>
	<div class="bg-white text-dark rounded-lg shadow-lg p-4">
		<div class="text-2xl font-extrabold text-center mb-3">
			<span class="bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-blue-500 to-green-500">
				Download video youtube.
			</span>
		</div>

		<div class="leading-snug">
			<p class="text-lg">
				Easy to use.
			</p>

			<ol class="list-decimal p-4 text-sm">
				<li>Salin link Youtube.</li>
				<li>Paste link ke url <router-link :to="{name: 'Youtube'}" class="underline">ini.</router-link></li>
			</ol>

			<p class="flex flex-wrap justify-center gap-1">
				<img alt="GitHub issues" src="https://img.shields.io/github/issues/ntbk-source/ytdl-vue">
				<img alt="GitHub pull requests" src="https://img.shields.io/github/issues-pr/ntbk-source/ytdl-vue">
				<img alt="GitHub" src="https://img.shields.io/github/license/ntbk-source/ytdl-vue">
				<img alt="GitHub stars" src="https://img.shields.io/github/stars/ntbk-source/ytdl-vue">
				<img alt="GitHub forks" src="https://img.shields.io/github/forks/ntbk-source/ytdl-vue">
				<img alt="GitHub watchers" src="https://img.shields.io/github/watchers/ntbk-source/ytdl-vue">
				<img alt="GitHub contributors" src="https://img.shields.io/github/contributors/ntbk-source/ytdl-vue">
				<img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/ntbk-source/ytdl-vue">
			</p>
		</div>
	</div>
</template>