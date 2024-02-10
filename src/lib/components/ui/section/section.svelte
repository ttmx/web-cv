<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { cn } from "$lib/utils";
  type $$Props = HTMLAttributes<HTMLDivElement>;
  let className: $$Props["class"] = undefined;
  export { className as class };
</script>

<section
  class={cn("flex min-h-0 flex-col gap-y-3 break-inside-avoid", className)}
  {...$$restProps}
>
  <slot />
</section>
