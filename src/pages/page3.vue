<template>
    <div>
        <h3 class="el-icon-loading">page3</h3>
        <div id="jQ-tabs">
            <ul>
                <li>
                    <a href="#fragment-1">One</a>
                </li>
                <li>
                    <a href="#fragment-2">Two</a>
                </li>
                <li>
                    <a href="#fragment-3">Three</a>
                </li>
            </ul>
            <div id='fragment-1'>Lorem ipsum dolor sit amet,</div>
            <div id="fragment-2">
                consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat.
            </div>
            <div id="fragment-3">aliquam erat volutpat.</div>
            <div id="page3-map">
                
            </div>
        </div>
    </div>
</template>


<script>
import $ from 'jquery';
export default {
    name: 'page3',
    data() {
        return {};
    },
    pops: [],
    components: {},
    created() {},
    methods: {
        aa() {
            return () => {
                console.log(2222);
            };
        }
    },
    mounted() {
    }
};
</script>

<style lang="scss" scoped>
#jQ-tabs {
    ul li a {
        float: left;
        font-size: 30px;
        color: red;
    }
}
</style>