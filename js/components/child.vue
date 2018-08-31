<template>
    <div>
        <h3>vue子组件模块</h3>
        <ul>
            <li v-for="item in items">{{item.id}}</li>
        </ul>
        <br>
        <div id="jQ-tabs">
            <ul>
                <li><a href="#fragment-1">One</a></li>
                <li><a href="#fragment-2">Two</a></li>
                <li><a href="#fragment-3">Three</a></li>
            </ul>
            <div id="fragment-1">
                Lorem ipsum dolor sit amet,
            </div>
            <div id="fragment-2">
                 consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat.
            </div>
            <div id="fragment-3">
                aliquam erat volutpat.
            </div>
        </div>
        <div>
            <el-button type="primary">主要按钮</el-button>
            <el-radio v-model="radio" label="1">备选项</el-radio>
        </div>
        <div>
            <my-tabs :tabs="items" @clickId="requireApps">

            </my-tabs>
            <ul v-for="item in items">
                <li>{{item.id}}</li>
            </ul>
        </div>
    </div>
</template>


<script>

    import myTabs from './tabs.vue';
    export default {
        data() {
            return {
                radio: '1',
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
            myTabs
        },
        created() {

        },
        methods: {
            requireApps(val) {
                console.log(val);
            }
        },
        mounted() {
            $('#jQ-tabs').tabs({
                 active: 11,
                 heightStyle: 'fill',
                 activate: (event, ui) => {
                    console.log(event, $(ui.newTab))
                 },
                 beforeActivate: () => {
                    alert(1)
                 }
                // actice: (e) => {
                //     console.log(111111, e)
                // }
            })
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
    
    ul {
        list-style: none;
        li {
            font-size: 30px;
        }
    }

    #jQ-tabs {
        ul li a {
            float: left;
            font-size: 30px;
            color: red;
        }
    }
</style>