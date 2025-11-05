<script lang="ts">
  import "../app.pcss";
  import "@fontsource-variable/inter";

  let { children } = $props();
</script>

<svelte:head>
  <title>Tiago Teles | Software Engineer</title>
</svelte:head>
{@render children?.()}
