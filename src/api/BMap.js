/**百度地图API**/

function getBaiDuMap() {
  return new Promise(function (resolve, reject) {
    let now = new Date().getTime();
    window.BMap_loadScriptTime = now;
    let script = document.createElement('script');
    script.onload = () => {
      console.log('get BMap done');
      resolve();
    };
    script.onerror = () => {
      console.log('get baidu map error');
      reject();
    };
    script.src = 'https://api.map.baidu.com/getscript?v=2.0&ak=2xQ9IWOjMZEULTUtbdA8O147SXFGBvNo';
    document.body.appendChild(script);
  });
}

export const getLocation = async () => {
  if (typeof window.BMap !== 'object') {
    await getBaiDuMap();
  }
  let geolocation = new BMap.Geolocation();
  return new Promise(function (resolve, reject) {
    geolocation.getCurrentPosition(function (r) {
      if (this.getStatus() === BMAP_STATUS_SUCCESS) {
        resolve({lat: r.point.lat, lng: r.point.lng, address: r.address});
      } else {
        reject();
      }
    }, {enableHighAccuracy: true});
  });
};
