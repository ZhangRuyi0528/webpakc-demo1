<template>
    <div>
        <h3>vue子组件模块</h3>
        <ul>
            <li v-for="item in items">{{item.id}}</li>
        </ul>
    </div>
</template>


<script>

    export default {
        data() {
            return {
                items: [
                    {id: 'aaaaaa'},
                    {id: 'bbbbbbbbbbb'},
                    {id: 'ccccccccccc'},
                    {id: 'dddddddddddd'},
                ]
            }
        },
        created() {

        }
    }
</script>

<style lang="scss" scoped>
    h3 {
        color: hotpink;
        
        &:hover {
            color: red;
        }
    }
    ul{
        list-style: none;
        li {
            float: left;
        }
    }
</style>