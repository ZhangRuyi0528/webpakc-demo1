<template>
    <div>
        <h3><a href="index.html">pao</a></h3>
        <nav id="proj_nav">
            <ul>
                <li v-for="item in items"><router-link :to="item.link">{{item.id}}</router-link></li>
            </ul>
        </nav>
        <div id="banner">
            <img src="" alt="">
        </div>
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

<style lang="scss">
    /*色值设置*/
    $color-a: #4680ff;

    /*引入*/
    @mixin border-1 ($color) {
        border: 1px solid $color;
    }
    @mixin floatL {
        float: left;
    }
    @mixin floatR {
        float: left;
    }

    #proj_nav {
        width: 61.8%;
        height: auto;
        margin: 0 auto;

        ul {
            display: flex;
            border-right: 0;
            
            @include border-1($color: $color-a);

            &>li {
                padding: 10px 0;
                flex-grow: 1;
                text-align: center;
                @include floatL;
                @include border-1($color: $color-a);
            }
        }
    }

    #banner {
        width: 80%;
        height: 200px;
        margin: 0 auto;
        display: block;
    }
</style>