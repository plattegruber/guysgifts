<script>
      import {PortableText} from '@portabletext/svelte'

    /** @type {import('./$types').PageData} */
	export let data;
</script>

<div class="relative isolate">
    <svg class="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]" aria-hidden="true">
      <defs>
        <pattern id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
          <path d="M100 200V.5M.5 .5H200" fill="none" />
        </pattern>
      </defs>
      <svg x="50%" y="-1" class="overflow-visible fill-gray-50">
        <path d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z" stroke-width="0" />
      </svg>
      <rect width="100%" height="100%" stroke-width="0" fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" />
    </svg>
    <div class="lg:flex lg:items-center lg:gap-x-10">
        <div class="sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
            <img src={data.post.mainImageUrl + '?w=900'} alt="" class="mx-auto w-[30.875rem] max-w-full" />  
      </div>
      <div class="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
        
        <h1 class="mt-6 max-w-lg text-4xl font-bold tracking-tight text-gray-900 sm:text-8xl break-words" style="word-spacing: 1000px">{data.post.title}</h1>
        <div class="mt-6 text-lg leading-8 text-gray-600">
            <img src={data.post.author.imageUrl} alt="" class="h-16 w-16 object-cover rounded-full" />
            <p>by {data.post.author.name}</p>
        </div>
      </div>
    </div>
  </div>
  <article class="prose lg:prose-xl mt-16">
  <PortableText
  value={data.post.body}
  components={{

  }}
/>
</article>