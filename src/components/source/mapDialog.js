// class mapDialog {
//     constructor (options) {
//         this.X = options.width;
//         this.Y = options.height;
//         this.ID = options.id;
//     }

//     initMap() {
//         console.log(this);
//         let xmap = new BMap.Map(this.ID);
//     }
// }

// export default new mapDialog();
const XMap = () => {
    let script = document.createElement('script');
    let key = '9503ac1b7b31db3b87621a3151b71671';
    script.src = `https://webapi.amap.com/maps?v=1.4.15&key=${key}`;
    document.body.appendChild(script);
};
export default XMap;