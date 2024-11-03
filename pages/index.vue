<template>
  <NuxtLayout>
    <ContentList path="/posts" v-slot="{ list }">
      <div v-for="article in list" :key="article._path" class="mb-10">
        <NuxtLink
          :to="article._path"
          class="font-poppinsbold text-2xl text-green"
          >{{ article.title }}
        </NuxtLink>
        <p>{{ article.description }}</p>
      </div>
    </ContentList>
  </NuxtLayout>
</template>
