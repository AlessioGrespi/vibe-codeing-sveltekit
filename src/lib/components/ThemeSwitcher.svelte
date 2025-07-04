<script lang="ts">
	import { Switch } from '$lib/components/ui/switch';
	import { Label } from '$lib/components/ui/label';
	import { Sun, Moon } from 'lucide-svelte';
	import { theme, toggleTheme } from '$lib/stores/theme';
</script>

<div class="flex items-center space-x-2">
	<Sun class="h-4 w-4 transition-colors {$theme === 'light' ? 'text-yellow-500' : 'text-muted-foreground'}" />
	<Switch 
		id="theme-mode" 
		checked={$theme === 'dark'}
		onCheckedChange={toggleTheme}
		aria-label="Toggle theme"
		class="data-[state=checked]:bg-primary"
	/>
	<Moon class="h-4 w-4 transition-colors {$theme === 'dark' ? 'text-blue-500' : 'text-muted-foreground'}" />
	<Label for="theme-mode" class="sr-only">
		Toggle theme
	</Label>
</div>

<style>
	/* Custom styles for better visual feedback */
	:global(.switch-root[data-state="checked"]) {
		background-color: hsl(var(--primary));
	}
	
	:global(.switch-root[data-state="unchecked"]) {
		background-color: hsl(var(--muted));
	}
</style> 