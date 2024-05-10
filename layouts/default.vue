<script setup>

onMounted(() => {
  useSmoothScroll()
})

const route = useRoute()

useHead({
  meta: [{ property: 'og:title', content: `David Lehmann - ${route.meta.title}` }, { property: 'og:description', content: `David Lehmann - ${route.meta.description}` }]
})

</script>

<template>
  <div>
    <Preloader></Preloader>
    <Header></Header>
    <div id="viewport">
      <slot />
    </div>
    <Footer></Footer>
  </div>
</template>

<style lang="scss" scoped></style>