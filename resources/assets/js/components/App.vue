<template>
    <div id="root">
        <header class="Header">
            <h1  v-link="{ name: 'home' }" class="Header__logo">
                SPA-FORUM <small>with vue.js</small>
            </h1>
        </header>
        <main>
            <!-- router outlet -->
            <router-view
                class="view"
                keep-alive
                transition
                transition-mode="out-in">
            </router-view>
        </main>
    </div>
</template>

<style lang="stylus">
    *
        box-sizing: border-box

    .view
        margin-top: 12px
        transition: opacity .2s ease
        padding-left: 15px
        padding-right: 15px
        &.v-enter, &.v-leave
            opacity: 0

    .Header
        display: flex
        justify-content: space-between
        width: 100%
        border-bottom: 1px #f0f0f0 solid
        padding-left: 20px

    .Header__logo
        font-family: "Lato"
        font-weight: 300
        color: #333
        cursor: pointer

        small
            font-size: 18px

    .Header__links
        display: flex
        list-style: none
        padding: 0
        margin: 0
        justify-content: center
        align-items: center

    .Header__link
        margin-right: 20px

        & > a
            color: deepskyblue
            text-decoration: none
            padding-bottom: 8px

        &:hover
            border-bottom: 1px solid deepskyblue

</style>