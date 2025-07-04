<script lang="ts">
  import { Sun, Moon } from 'lucide-svelte';
  import { theme, toggleTheme } from '$lib/stores/theme';
  
  export let data: { user: { id: number; email: string } | null };
</script>

<nav class="w-full border-gray-200 dark:border-gray-700">
  <div class="flex justify-between items-center  container mx-auto">
    <div class="flex items-center gap-4">
      <a href="/">Home</a>
    </div>
    <div class="flex items-center gap-4">
      <a href="/protected">Protected</a>
      <a href="/protected/settings">Settings</a>
    </div>
    <div class="flex items-center gap-4">
      {#if data.user}
        <a href="/logout">Logout</a>
      {:else}
        <a href="/login">Login</a>
        <a href="/register">Register</a>
      {/if}
      <button 
        on:click={toggleTheme}
        class="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        aria-label="Toggle theme"
      >
        {#if $theme === 'dark'}
          <Sun size={20} />
        {:else}
          <Moon size={20} />
        {/if}
      </button>
    </div>
    <!-- <div class="flex items-center">
    </div> -->
  </div>
</nav>