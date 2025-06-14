<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<nav class="bg-gray-800 p-4 text-white">
	<ul class="flex justify-center space-x-8">
		<li><a href="/" class="hover:text-blue-400">홈</a></li>
		<li><a href="/blog" class="hover:text-blue-400">블로그</a></li>
		<!-- <li><a href="/downloads" class="hover:text-blue-400">다운로드</a></li> -->
	</ul>
</nav>

{@render children()}
