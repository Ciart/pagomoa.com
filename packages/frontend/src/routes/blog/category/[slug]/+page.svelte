<script lang="ts">
  import { page } from '$app/stores';
	import { PUBLIC_STRAPI_API_URL } from '$env/static/public';
  import type { Category, Author, Post } from '$lib/types/blog';
  import { stripMarkdown } from '$lib/utils/markdown';

  let category: Category | null = null;
  let posts: Post[] = [];
  let errorMessage: string = '';

  async function fetchCategoryAndPosts() {
    const slug = $page.params.slug;
    if (!slug) {
      errorMessage = '카테고리 슬러그를 찾을 수 없습니다.';
      return;
    }

    try {
      // 카테고리 정보 가져오기
      const categoryResponse = await fetch(`${PUBLIC_STRAPI_API_URL}/categories?filters[slug][$eq]=${slug}`);
      if (!categoryResponse.ok) {
        throw new Error(`HTTP error! status: ${categoryResponse.status}`);
      }
      const categoryData = await categoryResponse.json();
      if (categoryData.data && categoryData.data.length > 0) {
        category = categoryData.data[0];
      } else {
        errorMessage = '카테고리를 찾을 수 없습니다.';
        return;
      }

      // 카테고리별 게시글 가져오기
      const postsResponse = await fetch(`${PUBLIC_STRAPI_API_URL}/posts?filters[category][slug][$eq]=${slug}&populate[0]=category&populate[1]=author`);
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

  fetchCategoryAndPosts();
</script>

<div class="min-h-screen bg-gray-900 text-white flex flex-col items-center p-4 pt-16">
  {#if errorMessage}
    <p class="text-red-500">{errorMessage}</p>
  {:else if category}
    <div class="max-w-4xl w-full">
      <div class="mb-8">
        <h1 class="text-4xl font-bold text-blue-400 mb-2">{category.name}</h1>
        <p class="text-gray-400">총 {posts.length}개의 게시물</p>
      </div>

      <div class="grid gap-6">
        {#each posts as post}
          <a href="/blog/{post.slug}" class="block bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-700 hover:border-blue-500 transition duration-300">
            <h2 class="text-2xl font-bold text-blue-400 mb-2">{post.title}</h2>
            <div class="flex items-center justify-between mb-4">
              <p class="text-gray-400 text-sm">{new Date(post.publishedAt).toLocaleDateString('ko-KR')}</p>
              {#if post.author?.data?.attributes?.username}
                <p class="text-gray-400 text-sm">작성자: {post.author.data.attributes.username}</p>
              {/if}
            </div>
            <p class="text-gray-300 line-clamp-3">{stripMarkdown(post.content)}</p>
          </a>
        {/each}
      </div>

      <div class="mt-8">
        <a href="/blog" class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
          전체 게시물 보기
        </a>
      </div>
    </div>
  {:else}
    <p class="text-gray-400">데이터를 로드 중입니다...</p>
  {/if}
</div> 
