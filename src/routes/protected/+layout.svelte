<script>
    export let data;
    import NavBar from '$lib/components/NavBar.svelte';
</script>

<NavBar {data} />
<slot />
  