
'use strict'

export const only = {
    //生成动态不重复的一个16位的唯一标识
    uuid: () => {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
            .replace(/[xy]/g, function (c) {
                var r = (Math.random() * 16) | 0,
                    v = c == 'x' ? r : (r & 0x3) | 0x8
                return v.toString(16)
            })
            .toUpperCase()
    },

    //生成一个指定位数的随机字符串
    alpha: (len) => {
        var rdmString = ''
        for (; rdmString.length < len; rdmString += Math.random().toString(36).substr(2));
        return rdmString.substr(0, len).toUpperCase()
    }
}
