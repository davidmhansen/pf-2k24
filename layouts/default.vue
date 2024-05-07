<script setup>

onMounted(() => {
  useSmoothScroll()
})

</script>

<template>
  <div>
    <Header></Header>
    <div id="viewport">
      <slot />
    </div>
    <Footer></Footer>
  </div>
</template>

<style lang="scss" scoped></style>