<script setup>

const links = [
        {
          title: "index",
          href: "/"
        },
        {
          title: "about",
          href: "/about"
        },
      ]

</script>

<template>
    <header class="header">
        <div class="header__info-wrapper">
            <NuxtLink class="logo" href="/">David Lehmann</NuxtLink>
            <span>Web Designer & Creative Developer</span>
        </div>
        <nav>
            <ul>
                <li v-for="link in links" :key="link.title">
                    <NuxtLink :to="link.href">{{link.title}}</NuxtLink>    
                </li>
            </ul>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
.header {
    width: 100%;
    padding: 2rem;
    position: fixed;
    z-index: $z-header;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .header__info-wrapper {
        display: flex;
        flex-direction: column;

        .logo {
            margin-bottom: .25rem;
        }
    }
}
</style>