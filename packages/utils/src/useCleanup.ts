/*
 * @Description:   
 * @Author: YangJianFei
 * @Date: 2023-11-24 13:57:13
 * @LastEditTime: 2023-11-24 14:04:11
 * @LastEditors: YangJianFei
 * @FilePath: \vue-baidu-map-3x\packages\utils\src\useCleanup.ts
 */
import { onUnmounted, Ref } from 'vue';
import { MapInstance } from '../typing';

const useCleanup = (instance: Ref<any>, map?: Ref<MapInstance | undefined>) => {

  const removeInstance = () => {
    map?.value?.removeControl?.(instance?.value);
  };

  onUnmounted(removeInstance);

  return { removeInstance };
};

export default useCleanup;