<script setup>
</script>

<template>
    <div class="preloader">
        <span>David Lehmann</span>
        <span>Web Design & Creative Development</span>
    </div>
</template>


<style lang="scss" scoped>
.preloader {
    position: fixed;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: $color-white;
    z-index: $z-preloader;
}
</style>