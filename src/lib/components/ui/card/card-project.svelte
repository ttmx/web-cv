<script lang="ts">
  import {
    Card,
    CardHeader,
    CardContent,
    CardDescription,
    CardTitle,
  } from "$lib/components/ui/card";
  import { Badge } from "$lib/components/ui/badge";

  export let title = "";
  export let description = "";
  export let tags: string[] = [];
  export let link = "";
</script>

<Card class="flex flex-col overflow-hidden border border-muted p-3">
  <CardHeader class="">
    <div class="space-y-1">
      <CardTitle class="text-base">
        {#if link}
          <a
            href={link}
            target="_blank"
            class="inline-flex items-center gap-1 hover:underline"
          >
            {title}
            <span class="size-1 rounded-full bg-green-500"></span>
          </a>
        {:else}
          {title}
        {/if}
      </CardTitle>
      <div class="hidden font-mono text-xs underline print:visible">
        {link?.replace("https://", "").replace("www.", "").replace("/", "")}
      </div>
      <CardDescription class="font-mono text-xs">
        {description}
      </CardDescription>
    </div>
  </CardHeader>
  <CardContent class="mt-auto flex">
    <div class="mt-2 flex flex-wrap gap-1">
      {#each tags as tag (tag)}
        <Badge class="px-1 py-0 text-[10px]" variant="secondary">
          {tag}
        </Badge>
      {/each}
    </div>
  </CardContent>
</Card>
