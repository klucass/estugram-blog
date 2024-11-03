<template>
  <div class="md:w-[768px] mx-auto">
    <header>
      <div class="hero">
        <div class="hero-content text-center mt-5 mb-10">
          <div class="max-w-md">
            <NuxtLink
              :to="{ name: 'index' }"
              class="text-5xl font-poppinsbold text-white"
            >
              Estugram
              <span class="text-green">/</span>
              <span class="font-poppinsextra text-red">Blog</span>
            </NuxtLink>
            <span class="py-6 text-sm block">
              Novidades do estugram e dicas de estudo e produtividade
            </span>
            <a class="btn btn-success" href="https://estugram.com">
              Estudar agora com o estugram
            </a>
          </div>
        </div>
      </div>
    </header>
    <main id="content" class="min-h-[calc(100vh-450px)]">
      <slot />
    </main>
    <footer class="border-t-2 mt-10 text-center">
      <div class="text-center font-poppinsbold text-xl my-5">Estugram/Blog</div>
      <div class="text-center py-5">
        <a class="link" href="https://estugram.com">Estugram</a> é uma
        plataforma que te ajuda a organizar o estudo de uma forma simples e
        produtiva.
      </div>
    </footer>
  </div>
</template>

<style>
article p,
article li {
  @apply mb-5 text-lg leading-8;
}

article p a {
  @apply text-primary;
}
article p a:hover,
article p a:focus {
  @apply underline underline-offset-4;
}

article h3 {
  @apply font-poppinsbold text-xl text-green mb-5;
}
article h2 {
  @apply font-poppinsbold text-2xl text-green mb-5;
}

article ul {
  @apply list-disc list-inside;
}

article ol {
  @apply list-decimal list-inside;
}

article blockquote {
  @apply border-l-4 border-green pl-5 italic;
}
</style>
