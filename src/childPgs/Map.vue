<template>
    <div class="map-wrap">
       <div :id="amapID">

       </div>
       <div class="map-tab">
           <el-button
           v-for="(item, key) in btns"
            :key="key"
            @click="toggle(item)"
           >
                {{item.name}}

           </el-button>
       </div>
    </div>
</template>


<script>
import XMap from '../components/source/mapDialog';
import { mapBtns } from '../components/source/mapBtns';
const AMap = window.AMap;
// import BMap from '../components/source/map';
export default {
    name: 'child-map',
    data() {
        return {
            radio: '1',
            amapID: 'my-map-dialog',
            ak: 'cMURp5Iy4EFGdGslu4VofGsVUj6zyZ2j',
            amap: '9503ac1b7b31db3b87621a3151b71671',
            btns: mapBtns,
            xMap: '',
            trafficLayer: '',
            showTrafficLayer: true
        };
    },

    mounted() {
        Promise.resolve(XMap()).then(() => {
            setTimeout(() => {
                if (AMap) {
                    this.xMap = new AMap.Map('my-map-dialog', {
                        resizeEnable: true,
                        zoom: 11,
                        // center: [116.397428, 39.90923],//中心点坐标
                        viewMode:'3D'//使用3D视图
                    });

                    this.trafficLayer = new AMap.TileLayer.Traffic({
                        zIndex: 10
                    });
                    
                    this.xMap.add(this.trafficLayer);
                }
            }, 1000);
        });

    },

    watch: {
        showTrafficLayer(val) {
            val ? this.trafficLayer.show() : this.trafficLayer.hide();
        }
    },

    created() {
    },
    methods: {
        toggle(btn) {
            console.log(btn);
            switch (btn.id) {
            case 'trafficLayer':
                this.showTrafficLayer = !this.showTrafficLayer;
                break;
            default:
                break;
            }
        }
        
    }
};
</script>

<style lang="scss">
    #my-map-dialog {
        width: 100%;
        height: 400px;
        margin-bottom: 30px;
    }

    .map-wrap {
        display: flex;
        flex: 1;

        .map-tab {
            width: 100px;
        }
    }
</style>