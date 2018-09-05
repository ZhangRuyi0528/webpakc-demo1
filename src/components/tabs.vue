/**
* admin-tab
*
* 初始化参数说明：
*   tabs [Array](必须)
*       {
*           id: tab的id值,
*           name: tab的title
*       }
*   value [Number, String] 组件v-model的绑定值
*
*   使用方法：
＊　<component v-model="actived" :tabs="" ></component>
*/
<template>
    <section class="app_list_tab">
        <ul class="item">
            <li v-for="(tab,index) in tabs" :TabId="tab.id" :name="tab.name" class="item-list" :class="{'active': (firstActive && index === 0) || tab.id === focused}" @click="toggleTab(tab.id,tab.children)">
                {{tab.name}}
            </li>
        </ul>
    </section>
</template>

<script>
    export default {
        name: 'page3',
        data() {
           return {
                focused: this.value,
                firstActive: false,
                postData: ''
           }
        },
        props: {
            tabs: {
                type: Array,
                required: true
            },
            value: {
                type: [String, Number]
            }
        },
        created: function() {
            this.firstActive = true;
            // $($('.item-list')[0]).addClass('active');
        },
        methods: {
            toggleTab(tabId, tabChildren) {
                this.focused = tabId;
                this.postData = tabChildren;
                this.$emit('clickId', this.postData, '', 'a');
                this.firstActive = false;
            }
        }
    }
</script>

<style scoped>
    .item {
        overflow: hidden;
        /*border-bottom: 1px solid #ddd;*/

        /*.item-list:first-child {*/
            /*border-top: 1px solid #ddd;*/
        /*}*/

        .item-list {
            padding: 0px 16px;
            line-height: 40px;
            /*border-right: 1px solid #e7e9ed;*/
            /*border-bottom: 1px solid #e7e9ed;*/
            color: #596b89;
            font-size: 12px;
            cursor: pointer;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        .item-list.active {
            margin-top: -1px;
            background: #fff;
            color: #4680ff;
            /*border-top: 1px solid #e7e9ed;*/
            border-left: 2px solid #4680ff;
        }
        .item-list:hover {
            /*margin-top: -1px;*/
            background: #fff;
            color: #4680ff;
        }
    }
</style>