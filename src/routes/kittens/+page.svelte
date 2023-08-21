<script>
	export let data;
	
</script>

<section class=' container mx-auto'>
<h1 class='text-5xl font-black'>Kittens</h1>
<ul class='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 max-w-7xl gap-6 mx-auto'>
	{#each data.kittens as {slug,name, image}}
<li>
	
	<a href='/kittens/{slug}'>
<img class='w-[200px] h-[300px]' src={image} alt='pic' />
	<h2>{name}</h2>
</a>
</li>
{/each}
</ul>
</section>