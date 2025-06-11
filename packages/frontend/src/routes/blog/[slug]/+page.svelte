<script lang="ts">
  import '../../../app.css';
  import { page } from '$app/stores';
  import { marked } from 'marked';
  import type { Category, Post } from '$lib/types/blog';

  let post: Post | null = null;
  let errorMessage: string = '';

  const STRAPI_API_URL = 'http://localhost:1337/api';

  async function fetchPost() {
    const slug = $page.params.slug;
    if (!slug) {
      errorMessage = '게시물 슬러그를 찾을 수 없습니다.';
      return;
    }

    try {
      const response = await fetch(`${STRAPI_API_URL}/posts?filters[slug][$eq]=${slug}&populate=category`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      if (data.data && data.data.length > 0) {
        post = data.data[0];
      } else {
        errorMessage = '게시물을 찾을 수 없습니다.';
      }
    } catch (error: any) {
      errorMessage = `게시물을 가져오는 데 실패했습니다: ${error.message}`;
      console.error('Error fetching post:', error);
    }
  }

  fetchPost();
</script>

<div class="min-h-screen bg-gray-900 text-white flex flex-col items-center p-4 pt-16">
  {#if errorMessage}
    <p class="text-red-500">{errorMessage}</p>
  {:else if post}
    <div class="max-w-3xl w-full bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-700">
      <div class="flex items-center justify-between mb-4">
        <h1 class="text-4xl font-bold text-blue-400">{post.title}</h1>
        {#if post.category}
          <a href="/blog/category/{post.category.slug}" class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm font-medium transition duration-300 ease-in-out transform hover:scale-105">
            {post.category.name}
          </a>
        {/if}
      </div>
      <p class="text-gray-400 text-sm mb-4">{new Date(post.publishedAt).toLocaleDateString('ko-KR')}</p>
      <div class="prose prose-invert max-w-none text-gray-200 leading-relaxed">
        {@html marked(post.content)}
      </div>
    </div>
  {:else}
    <p class="text-gray-400">게시물을 로드 중입니다...</p>
  {/if}
</div>

<style>
  :global(.prose) {
    --tw-prose-body: #e5e7eb;
    --tw-prose-headings: #93c5fd;
    --tw-prose-links: #60a5fa;
    --tw-prose-bold: #f3f4f6;
    --tw-prose-counters: #9ca3af;
    --tw-prose-bullets: #4b5563;
    --tw-prose-hr: #374151;
    --tw-prose-quotes: #f3f4f6;
    --tw-prose-quote-borders: #4b5563;
    --tw-prose-captions: #9ca3af;
    --tw-prose-code: #f3f4f6;
    --tw-prose-pre-code: #e5e7eb;
    --tw-prose-pre-bg: #1f2937;
    --tw-prose-th-borders: #4b5563;
    --tw-prose-td-borders: #374151;
  }
</style> 
