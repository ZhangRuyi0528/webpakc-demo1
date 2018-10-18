<template>
    <div>
        <h3 class="nav-h3"><a href="index.html#/page1" class="el-icon-loading">I Can Fly</a></h3>
        <nav id="proj_nav">
            <ul class="nav-list">
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

    .nav-h3 {
        line-height: 200px;
        padding-left: 40px;
    }

    .nav-list {
        font-size: 24px;
        color: #4680ff;
        display: flex;
        justify-content: space-around;

        li {
            width: 20%;
            background: #ddd;
            text-align: center;
            float: left;
            line-height: 30px;

            &:hover {
                background: #4680ff;
                color: #fff;
            }

            a {
                display: block;
            }
        }
    }
</style>