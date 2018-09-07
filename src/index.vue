<template>
    <div>
        <h3>vue模块</h3>
        <ul>
            <li v-for="item in items"><router-link :to="item.link">{{item.id}}</router-link></li>
        </ul>
        <div id="wrap-router">
            <router-view>

            </router-view>
        </div>
    </div>
</template>


<script>
    export default {
        name: 'page1',
        data() {
            return {
                items: [
                    {id: 'a', link: '/page1'},
                    {id: 'b', link: '/page2'},
                    {id: 'c', link: '/page3'},
                    {id: 'd', link: '/page4'},
                ]
            }
        },
        components: {

        },
        created() {

        }
    }
</script>

<style>

</style>