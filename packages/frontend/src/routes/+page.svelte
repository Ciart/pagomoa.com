<div class="flex min-h-screen flex-col items-center justify-center bg-gray-900 p-4 text-white">
	<div class="mb-8 flex flex-col items-center">
		<img
			bind:this={logoElement}
			src="/logo.png"
			alt="Pagomoa Logo"
			class="mb-4 h-32 object-contain"
			style="image-rendering: pixelated;"
		/>
		<!-- <h1 class="text-5xl font-bold text-blue-400">PAGOMOA</h1> -->
	</div>

	<!-- <section class="text-center mb-12 max-w-2xl">
    <h2 class="text-3xl font-semibold mb-4 text-blue-300">게임 소개</h2>
    <p class="text-lg text-gray-300 leading-relaxed">
    </p>
  </section> -->

	<div class="flex flex-col items-center">
		<a
			href="/downloads/pagomoa-game.zip"
			class="transform rounded-full bg-blue-600 px-8 py-4 text-xl font-bold text-white transition duration-300 ease-in-out hover:scale-105 hover:bg-blue-700"
			download
		>
			Windows 다운로드
		</a>
		<p class="mt-4 text-sm text-gray-400">
			버전: v0.1.0-alpha <a href="/downloads" class="ml-2 text-blue-300 hover:underline"
				>모든 버전 보기</a
			>
		</p>
	</div>
</div>
