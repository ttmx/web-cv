<script>
  import {
    SewingPin,
    EnvelopeClosed,
    Mobile,
    GithubLogo,
  } from "radix-icons-svelte";
  //   import { CommandMenu } from "./components";

  import { Button } from "$lib/components/ui/button";
  import {
    Avatar,
    AvatarImage,
    AvatarFallback,
  } from "$lib/components/ui/avatar";
  import {
    Card,
    CardHeader,
    CardContent,
    CardProject,
  } from "$lib/components/ui/card";
  import { Badge } from "$lib/components/ui/badge";
  import { Section } from "$lib/components/ui/section";
  import { RESUME_DATA } from "$lib/data";
  //   import { CommandMenu } from "$lib/components/ui/command";
</script>

<main
  class="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16"
>
  <section class="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-6">
    <div class="flex items-center justify-between">
      <div class="flex-1 space-y-1.5">
        <h1 class="text-2xl font-bold">{RESUME_DATA.name}</h1>
        <p class="max-w-md text-pretty font-mono text-sm text-muted-foreground">
          {RESUME_DATA.about}
        </p>
        <p
          class="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground"
        >
          <a
            class="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
            href={RESUME_DATA.locationLink}
            target="_blank"
          >
            <SewingPin class="size-3" />
            {RESUME_DATA.location}
          </a>
        </p>
        <div
          class="flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground print:hidden"
        >
          {#if RESUME_DATA.contact.email}
            <Button class="size-8" variant="outline" size="icon">
              <a href={`mailto:${RESUME_DATA.contact.email}`}>
                <EnvelopeClosed class="size-4" />
              </a>
            </Button>
          {/if}
          {#if RESUME_DATA.contact.tel}
            <Button class="size-8" variant="outline" size="icon">
              <a href={`tel:${RESUME_DATA.contact.tel}`}>
                <Mobile class="size-4" />
              </a>
            </Button>
          {/if}
          {#each RESUME_DATA.contact.social as social}
            <Button class="size-8" variant="outline" size="icon">
              <a href={social.url}>
                <svelte:component this={social.icon} class="size-4" />
              </a>
            </Button>
          {/each}
        </div>
        <div
          class="hidden flex-col gap-x-1 font-mono text-sm text-muted-foreground print:flex"
        >
          {#if RESUME_DATA.contact.email}
            <a href={`mailto:${RESUME_DATA.contact.email}`}>
              <span class="underline">{RESUME_DATA.contact.email}</span>
            </a>
          {/if}
          {#if RESUME_DATA.contact.tel}
            <a href={`tel:${RESUME_DATA.contact.tel}`}>
              <span class="underline">{RESUME_DATA.contact.tel}</span>
            </a>
          {/if}
        </div>
      </div>

      <Avatar class="size-28">
        <AvatarImage alt={RESUME_DATA.name} src={RESUME_DATA.avatarUrl} />
        <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
      </Avatar>
    </div>
    <Section>
      <h2 class="text-xl font-bold">About</h2>
      <p class="text-pretty font-mono text-sm text-muted-foreground">
        {RESUME_DATA.summary}
      </p>
    </Section>
    <Section class="print-force-new-page scroll-mb-16">
      <h2 class="text-xl font-bold">Projects</h2>
      <div
        class="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3"
      >
        {#each RESUME_DATA.projects as project}
          <CardProject
            logo={project.logo}
            title={project.title}
            description={project.description}
            tags={[...project.techStack]}
            link={"link" in project ? project.link.href : undefined}
          />
        {/each}
      </div>
    </Section>
    <Section>
      <h2 class="text-xl font-bold">Work Experience</h2>
      {#each RESUME_DATA.work as work}
        <Card>
          <CardHeader>
            <div class="flex items-center justify-between gap-x-2 text-base">
              <h3
                class="inline-flex items-center justify-center gap-x-1 font-semibold leading-none"
              >
                <a class="hover:underline" href={work.link}>
                  {work.company}
                </a>

                <span class="inline-flex gap-x-1">
                  {#each work.badges as badge}
                    <Badge
                      variant="secondary"
                      class="align-middle text-xs"
                      key={badge}
                    >
                      {badge}
                    </Badge>
                  {/each}
                </span>
              </h3>
              <div class="text-sm tabular-nums text-gray-500">
                {work.start} - {work.end}
              </div>
            </div>

            <h4 class="font-mono text-sm leading-none">
              {work.title}
            </h4>
          </CardHeader>
          <CardContent class="mt-2 text-xs">
            {work.description}
          </CardContent>
        </Card>
      {/each}
    </Section>
    <Section>
      <h2 class="text-xl font-bold">Education</h2>
      {#each RESUME_DATA.education as education}
        <Card>
          <CardHeader>
            <div class="flex items-center justify-between gap-x-2 text-base">
              <h3 class="font-semibold leading-none">
                {education.school}
              </h3>
              <div class="text-sm tabular-nums text-gray-500">
                {education.start} - {education.end}
              </div>
            </div>
          </CardHeader>
          <CardContent class="mt-2">{education.degree}</CardContent>
        </Card>
      {/each}
    </Section>
    <Section class="break-before-page print:pt-10">
      <h2 class="text-xl font-bold">Skills</h2>
      <div class="flex flex-wrap gap-1">
        {#each RESUME_DATA.skills as skill}
          <Badge key={skill}>{skill}</Badge>
        {/each}
      </div>
    </Section>
  </section>

  <!-- <CommandMenu
    links={[
      { url: RESUME_DATA.personalWebsiteUrl, title: "Personal Website" },
      ...RESUME_DATA.contact.social.map((socialMediaLink) => ({
        url: socialMediaLink.url,
        title: socialMediaLink.name,
      })),
    ]}
  /> -->
</main>
