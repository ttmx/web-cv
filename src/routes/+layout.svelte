<script lang="ts">
  import "../app.pcss";
  import "@fontsource/inter";
  import "@fontsource/inter/600.css";
  import "@fontsource/inter/700.css";
  interface Props {
    children?: import('svelte').Snippet;
  }

  let { children }: Props = $props();
</script>

<svelte:head>
  <title>Tiago Teles | Software Dev</title>
</svelte:head>
{@render children?.()}
