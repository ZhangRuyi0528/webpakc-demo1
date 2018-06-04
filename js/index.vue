<template>
    <div>
        <h3>vue模块</h3
        <ul>
            <li v-for="item in items">{{item.id}}</li>
        </ul>
        <new-component>

        </new-component>
    </div>
</template>


<script>
    import newComponent from './components/child.vue';

    export default {
        data() {
            return {
                items: [
                    {id: 'a'},
                    {id: 'b'},
                    {id: 'c'},
                    {id: 'd'},
                ]
            }
        },
        components: {
            newComponent
        },
        created() {

        }
    }
</script>

<style>

</style>