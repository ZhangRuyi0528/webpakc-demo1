<template>
    <div>
        <h6>vue模块一</h6>
        <new-component>

        </new-component>
    </div>
</template>


<script>
    import newComponent from '../components/child.vue';

    export default {
        name: 'page1',
        data() {
            return {
                
            }
        },
        components: {
            newComponent
        },
        created() {

        }
    }
</script>

<style>

</style>