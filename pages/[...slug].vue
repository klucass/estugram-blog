<template>
  <NuxtLayout>
    <article>
      <ContentDoc v-slot="{ doc }">
        <figure class="mb-10 w-full">
          <img :src="'/img/' + doc.cover" :alt="doc.title" />
        </figure>
        <h2 class="font-poppinsbold text-4xl mb-5 text-green">
          {{ doc.title }}
        </h2>
        <ContentRenderer :value="doc" />
      </ContentDoc>
    </article>
  </NuxtLayout>
</template>
