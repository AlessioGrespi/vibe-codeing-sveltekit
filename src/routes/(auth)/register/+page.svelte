<script lang="ts">
  import { enhance } from '$app/forms';
  export let form: any;
</script>

<form method="POST" use:enhance>
  <label for="email">Email</label>
  <input id="email" name="email" type="email" required autocomplete="email" />

  <label for="password">Password</label>
  <input id="password" name="password" type="password" required autocomplete="new-password" />

  <button type="submit">Register</button>

  {#if form?.error}
    <p>{form.error}</p>
  {/if}
</form>

<hr />
<p>Or register with:</p>
<a href="/oauth/google">Google</a>
<a href="/oauth/github">GitHub</a>
