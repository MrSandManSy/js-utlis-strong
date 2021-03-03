
'use strict'

import NetInfo from '@react-native-community/netinfo'

export const netWork = {
    /***
     * 检查网络链接状态
     * @param callback
     */
    checkNetworkState: (callback) => {
        return NetInfo.fetch().done(({isConnected}) => {
            return callback(isConnected)
        })
    },

    /***
     * 移除网络状态变化监听
     */
    removeEventListener: (callback) => {
        return NetInfo.addEventListener('change', (networkType) => {
            return callback(networkType)
        })
    },

    /***
     * 添加网络状态变化监听
     * @param tag
     * @param handler
     */
    addEventListener: (callback) => {
        return NetInfo.addEventListener('change', (networkType) => {
            return callback(networkType)
        })
    }
}
