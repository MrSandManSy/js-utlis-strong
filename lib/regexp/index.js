
'use strict'

export const regexp = {

    /**
     * @description 判断是否国内手机号
     * @param phone
     * @returns {boolean}
     */
    isPhone: (phone) => {
        var reg = /^((13[0-9])|(14[579])|(15[^4])|(18[0-9])|(17[0135678]))\d{8}$/
        return reg.test(phone)
    },
    
    /**
     * @description 判断是否Email
     * @param email
     * @returns {boolean}
     */
    isEmail: (email) => {
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
        return reg.test(email)
    },
    
    /**
     * 校验用户名：1-20位字符，首字符为字母
     * @param str
     * @returns {RegExp}
     */
    checkUserName: (str) => {
        return /^[a-zA-Z]{1,20}$/.test(str)
    },
    
    /**
     * 校验密码：6-20位，数字、字母、下划线
     * @param str
     * @returns {boolean}
     */
    checkPwd: (str) => {
        return /^(\\w){6,20}$/.test(str)
    },

}
