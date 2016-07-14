<template>
    <div class="category-view">
        <topic
            v-for="topic in topics"
        :topic="topic"
         track-by="id">
    </topic>
</div>
</template>
<script>
import Topic from './Topic.vue';

export default {

    components: { Topic },

    data () {
        return {
            topics: [],
        }
    },

    route: {
        data (transition) {
            const categoryId = transition.to.params.categoryId;

            return this.$http.get(`/api/categories/${categoryId}/topics`)
                .then((data) => ({ topics: data.data }));
        }
    }
}
</script>


<style lang="stylus">
    .Button
        border: none
        background: deepskyblue
        color: white
        font-wight: light
        font-family: 'Roboto'
        padding: 10px
        border-radius: 1px
        margin-bottom: 20px
        margin-top: 5px
        &:hover
            background: darken(deepskyblue, 10%)

    .Pagination
        display: flex;
        justify-content: center;
        margin-top: 20px;
        margin-bottom: 20px;

    .Page-link
        text-decoration: none
        color: deepskyblue
        padding: 11px
        display: flex
        justify-content: center
        align-items: center
        width: 80px
        height: 30px


        &:hover
            background: deepskyblue
            color: white
            border-radius: 1px
            border: none

    .Page-link--prev:before
        content: '◀'
        font-size: 14px
        padding: 1px
        position: relative
        top: 1px
        left: -4px

    .Page-link+.Page-link
        border-left: 1px solid deepskyblue

    .Page-link:hover+.Page-link
        border: white

    .Page-link--next:after
        content: '▶'
        padding: 1px
        font-size: 14px
        position: relative
        top: 1px
        left: 4px

</style>