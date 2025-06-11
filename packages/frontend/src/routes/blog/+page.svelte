<script lang="ts">
  import '../../app.css';
  import type { Category, Post } from '$lib/types/blog';
  import { stripMarkdown } from '$lib/utils/markdown';

  let categories: Category[] = [];
  let posts: Post[] = [];
  let errorMessage: string = '';

  const STRAPI_API_URL = 'http://localhost:1337/api';

  async function fetchData() {
    try {
      // 카테고리 목록 가져오기
      const categoriesResponse = await fetch(`${STRAPI_API_URL}/categories`);
      if (!categoriesResponse.ok) {
        throw new Error(`HTTP error! status: ${categoriesResponse.status}`);
      }
      const categoriesData = await categoriesResponse.json();
      categories = categoriesData.data;

      // 게시글 목록 가져오기
      const postsResponse = await fetch(`${STRAPI_API_URL}/posts?populate=category`);
      if (!postsResponse.ok) {
        throw new Error(`HTTP error! status: ${postsResponse.status}`);
      }
      const postsData = await postsResponse.json();
      posts = postsData.data;
    } catch (error: any) {
      errorMessage = `데이터를 가져오는 데 실패했습니다: ${error.message}`;
      console.error('Error fetching data:', error);
    }
  }

  fetchData();
</script>

<div class="min-h-screen bg-gray-900 text-white flex flex-col items-center p-4 pt-16">
  {#if errorMessage}
    <p class="text-red-500">{errorMessage}</p>
  {:else}
    <div class="max-w-4xl w-full">
      <div class="mb-8 flex flex-col items-center">
        <h1 class="text-4xl font-bold text-blue-400 mb-4">블로그</h1>
        {#if categories.length > 0}
          <div class="flex flex-wrap gap-2 mb-6">
            {#each categories as category}
              <a href="/blog/category/{category.slug}" class="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-full text-sm font-medium transition duration-300 ease-in-out transform hover:scale-105">
                {category.name}
              </a>
            {/each}
          </div>
        {/if}
      </div>

      <div class="grid gap-6">
        {#each posts as post}
          <a href="/blog/{post.slug}" class="block bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-700 hover:border-blue-500 transition duration-300">
            <div class="flex items-center justify-between mb-2">
              <h2 class="text-2xl font-bold text-blue-400">{post.title}</h2>
              {#if post.category}
                <a href="/blog/category/{post.category.slug}" class="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm font-medium transition duration-300 ease-in-out transform hover:scale-105">
                  {post.category.name}
                </a>
              {/if}
            </div>
            <p class="text-gray-400 text-sm mb-4">{new Date(post.publishedAt).toLocaleDateString('ko-KR')}</p>
            <p class="text-gray-300 line-clamp-3">{stripMarkdown(post.content)}</p>
          </a>
        {/each}
      </div>
    </div>
  {/if}
</div>
