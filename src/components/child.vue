<template>
    <div>
        <h3>vue子组件模块</h3>
        <br>
        <div>
            <el-button type="primary">主要按钮</el-button>
            <el-radio v-model="radio" label="1">备选项</el-radio>
        </div>
        <div>
            <my-tabs :tabs="items" @clickId="requireApps">

            </my-tabs>
            <ul v-for="item in items" :key="item.id">
                <li>{{item.id}}</li>
            </ul>
        </div>
    </div>
</template>


<script>

    import myTabs from './tabs.vue';
    export default {
        name: 'page2',
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
        
    }

</script>

<style lang="scss" scoped>
    h3 {
        color: hotpink;
        &:hover {
            color: red;
        }
    }
</style>