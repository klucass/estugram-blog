<template>
  <NuxtLayout>
    <ContentList path="/posts" v-slot="{ list }">
      <div v-for="article in list" :key="article._path" class="mb-20">
        <figure class="w-full mb-4">
          <img :src="'/img/' + article.cover" :alt="article.title" />
        </figure>
        <NuxtLink
          :to="article._path"
          class="font-poppinsbold text-4xl text-green"
          >{{ article.title }}
        </NuxtLink>
        <p class="py-5 text-lg">{{ article.description }}</p>
      </div>
    </ContentList>
  </NuxtLayout>
</template>
