/*
 * @Description:   
 * @Author: YangJianFei
 * @Date: 2023-04-04 16:22:05
 * @LastEditTime: 2023-04-04 16:24:40
 * @LastEditors: YangJianFei
 * @FilePath: \@mozhou-tech/vue3-baidumap\components\hooks\usePoint.ts
 */
import { getBMap } from '../utils';

export const useMap = (): Promise<IBMap> => {
    return new Promise((resolve) => {
        getBMap().then(BMap => {
            resolve(BMap);
        });
    });
};