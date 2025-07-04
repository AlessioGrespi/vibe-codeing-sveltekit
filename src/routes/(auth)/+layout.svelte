<script>
	import { Button } from '$lib/components/ui/button';
	import { ArrowLeft } from 'lucide-svelte';
</script>

<Button variant="ghost" size="icon" asChild class="absolute top-4 left-4">
	<a href="/" aria-label="Go back to home">
		<ArrowLeft class="h-4 w-4" />
	</a>
</Button>

<slot />