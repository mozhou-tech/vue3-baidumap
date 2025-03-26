## 支持vue2，vue3，vite|webpack

> vue2：先安装vue2-baidu-map

> vue3: 先安装@mozhou-tech/vue3-baidumap

## 使用
```js
import BaiduMapOffline from 'vue-baidu-map-offline';
import BaiduMap from '@mozhou-tech/vue3-baidumap'

app.use(BaiduMapOffline, {
    offline: true
});
app.use(BaiduMap, {
    ak: 'Yp57V71dkOPiXjiN8VdcFRsVELzlVNKK',
    v: '3.0',
    // type: 'WebGL'
});

```

::: tip 详细使用请扫码查看（前端男海小程序）
![前端男海小程序](../image/fe-sea-mini.jpg)
:::