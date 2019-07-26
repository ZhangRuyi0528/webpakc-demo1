<template>
    <div>
        <h3 class="nav-h3">
            <a href="index.html#/page1" class="el-icon-loading">I Can Fly</a>
        </h3>
        <nav id="proj_nav">
            <ul class="nav-list">
                <li v-for="item in items" :key="item.id">
                    <router-link :to="item.link">{{item.id}}</router-link>
                </li>
            </ul>
        </nav>
        <div id="banner">
            <Banner></Banner>
            <!-- <img src="./img/Timber_wolf.jpg"> -->
        </div>
        <div id="wrap-router">
            <router-view></router-view>
        </div>
    </div>
</template>


<script>
import banner from './childPgs/carousel.vue';
export default {
    name: 'page1',
    data() {
        return {
            items: [
                { id: 'a', link: '/page1' },
                { id: 'b', link: '/page2' },
                { id: 'c', link: '/page3' },
                { id: 'd', link: '/page4' }
            ]
        };
    },
    components: {
        Banner: banner
    },
    created() {}
};
</script>

<style lang="scss">
/*色值设置*/
$color-a: #4680ff;

/*引入*/
@mixin border-1($color) {
    border: 1px solid $color;
}
@mixin floatL {
    float: left;
}
@mixin floatR {
    float: left;
}

#proj_nav {
    height: auto;
    margin: 0 auto;
    position: fixed;
    right: 50px;
    top: 200px;

    .nav-list {
        font-size: 24px;
        color: #4680ff;
        @include border-1($color: $color-a);

        & > li {
            padding: 10px 0;
            flex-grow: 1;
            text-align: center;
            // @include floatL;
            @include border-1($color: $color-a);
        }

        li {
            width: 40px;
            background: #ddd;
            text-align: center;
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
}

#banner {
    width: 80%;
    height: auto;
    margin: 0 auto;
    display: block;
}

.nav-h3 {
    line-height: 200px;
    padding-left: 40px;
}
</style>