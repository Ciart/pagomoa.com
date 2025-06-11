<script lang="ts">
  import '../app.css';

  let logoElement: HTMLImageElement | undefined;
  let mouseX = 0;
  let mouseY = 0;

  function handleMouseMove(event: MouseEvent) {
    if (logoElement) {
      const rect = logoElement.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      mouseX = (event.clientX - centerX) / 20; // Adjust divisor for sensitivity
      mouseY = (event.clientY - centerY) / 20; // Adjust divisor for sensitivity

      logoElement.style.transform = `translate(${mouseX}px, ${mouseY}px) scale(1.02)`;
    }
  }

  function handleMouseLeave() {
    if (logoElement) {
      logoElement.style.transform = `translate(0px, 0px) scale(1)`;
    }
  }
</script>

<div class="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4"
     on:mousemove={handleMouseMove}
     on:mouseleave={handleMouseLeave}
>
  <div class="flex flex-col items-center mb-8">
    <img bind:this={logoElement} src="/logo.png" alt="Pagomoa Logo" class="h-32 mb-4 object-contain object-center transition-transform duration-75 ease-out" style="image-rendering: pixelated;" />
    <!-- <h1 class="text-5xl font-bold text-blue-400">PAGOMOA</h1> -->
  </div>

  <!-- <section class="text-center mb-12 max-w-2xl">
    <h2 class="text-3xl font-semibold mb-4 text-blue-300">게임 소개</h2>
    <p class="text-lg text-gray-300 leading-relaxed">
      여기에 PAGOMOA 게임에 대한 흥미로운 소개글을 작성해주세요. 게임의 특징, 스토리, 플레이 방법 등을 자유롭게 설명하여 방문자들이 게임에 대한 기대감을 가질 수 있도록 할 수 있습니다. 이 공간은 게임의 매력을 어필하는 중요한 부분입니다.
    </p>
  </section> -->

  <div class="flex flex-col items-center">
    <a
      href="/downloads/pagomoa-game.zip"
      class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full text-xl transition duration-300 ease-in-out transform hover:scale-105"
      download
    >
      Windows 다운로드
    </a>
    <p class="mt-4 text-gray-400 text-sm">버전: v0.1.0-alpha <a href="/downloads" class="text-blue-300 hover:underline ml-2">모든 버전 보기</a></p>
  </div>
</div>
