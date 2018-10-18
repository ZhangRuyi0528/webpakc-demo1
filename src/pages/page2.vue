<template>
    <div>
        <h3>page2</h3>
        <ul>
            <li v-for="item in items">{{item.id}}</li>
        </ul>
        <!-----Row组件------>
        <el-row>
            <el-col :span="24">
                <el-button type="success" circle></el-button>
            </el-col>
            <el-col :span="12">
                <el-button type="primary"></el-button>
            </el-col>
            <el-col :span="12">
                <el-button type="info" plain></el-button>
            </el-col>
            <el-col :span="16">
                <el-button type="danger" round></el-button>
            </el-col>
        </el-row>
        <!--混合布局-->
        <el-row :gutter='20'>
            <el-col :span="12">
                <div class="Blue-bg">1</div>
            </el-col>    
            <el-col :span="12">
                <div class="Blue-bg">2</div>
            </el-col>    
        </el-row>
        <el-row :gutter="20">
            <el-col :span="6"><div class="Blue-bg">6</div></el-col>
            <el-col :span="6" :offset="6"><div class="Blue-bg">6</div></el-col>
            <el-col :span="6" :offset="6"><div class="Blue-bg">6</div></el-col>
            <el-col :span="6" :offset="6"><div class="Blue-bg">6</div></el-col>
        </el-row>

        <el-container>
            <el-header>Header</el-header>
            <el-container>
                <el-aside width="200px">Aside</el-aside>
                <el-main>Main</el-main>
            </el-container>
        </el-container>



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