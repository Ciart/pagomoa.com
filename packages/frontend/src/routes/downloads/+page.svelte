<script>
  import '../../app.css';
</script>

<div class="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
  <h1 class="text-4xl font-bold text-blue-400 mb-8">다운로드</h1>

  <section class="mb-8 text-center">
    <h2 class="text-2xl font-semibold mb-4 text-blue-300">최신 버전</h2>
    <p class="text-lg text-gray-300 mb-4">현재 최신 버전은 Windows 및 macOS를 지원합니다.</p>
    <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
      <a
        href="/downloads/pagomoa-game-windows-latest.zip"
        class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105"
        download
      >
        Windows 다운로드
      </a>
      <a
        href="/downloads/pagomoa-game-mac-latest.zip"
        class="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105"
        download
      >
        macOS 다운로드
      </a>
    </div>
    <p class="mt-4 text-gray-400 text-sm">버전: v0.1.0-alpha</p>
  </section>

  <section class="text-center max-w-2xl">
    <h2 class="text-2xl font-semibold mb-4 text-blue-300">과거 버전</h2>
    <p class="text-lg text-gray-300 mb-4">아래에서 이전 버전의 게임을 다운로드할 수 있습니다.</p>
    <ul class="list-disc list-inside text-left mx-auto max-w-md">
      <li class="mb-2"><a href="/downloads/pagomoa-game-v0.0.9.zip" class="text-blue-300 hover:underline">v0.0.9 (Windows/macOS)</a></li>
      <li class="mb-2"><a href="/downloads/pagomoa-game-v0.0.8.zip" class="text-blue-300 hover:underline">v0.0.8 (Windows/macOS)</a></li>
      <li class="mb-2"><a href="/downloads/pagomoa-game-v0.0.7.zip" class="text-blue-300 hover:underline">v0.0.7 (Windows)</a></li>
      <!-- Add more past versions here -->
    </ul>
  </section>
</div> 
