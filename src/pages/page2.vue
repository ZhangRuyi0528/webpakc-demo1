<template>
    <div>
        <h3>page2</h3>
        <ul>
            <li v-for="item in items">{{item.id}}</li>
        </ul>
    </div>
</template>


<script>

    export default {
        name: 'page2',
        data() {
            return {
               items: [
                    { id: 'aaaaaa', text: '11'},
                    { id: 'bbbbbbbbbbb', text: '22'},
                    { id: 'ccccccccccc', text: '33'},
                    { id: 'dddddddddddd', text: '44'},
                ]
            }
        },
        pops: [],
        components: {
        },
        created() {

        },
        methods: {
            
        },
        mounted() {
           
        }
    }

</script>

<style lang="scss" scoped>
    ul {
        list-style: none;
        li {
            font-size: 30px;
        }
    }
</style>