'use strict'

export const commons = {
    /**
     * @description 函数防抖，将多次高频操作优化为只在最后一次执行，通常使用的场景是：用户输入，只需再输入完成后做一次输入校验即可。
     * @param fn
     * @param wait
     * @param immediate
     * @returns {Function}
     */
    debounce: (fn, wait, immediate) => {
        let timer = null

        return function () {
            let args = arguments
            let context = this

            if (immediate && !timer) {
                fn.apply(context, args)
            }

            if (timer) clearTimeout(timer)
            timer = setTimeout(() => {
                fn.apply(context, args)
            }, wait)
        }
    },

    /**
     * 定时器版本节流函数
     * @param {Function} func
     * @param {number} wait
     * 
     * 调用示例
        const better_scroll = throttle(() => console.log('触发了滚动事件'), 1000)
        document.addEventListener('scroll', better_scroll)
    */
    tthrottle: (func, wait) => {
        let timerId
        return function foo(...args) {
            if (!timerId) {
                timerId = setTimeout(() => {
                    timerId = null
                    func.apply(this, args)
                }, wait)
            }
        }
    },

    /**
     * 发送验证码倒计时
        把定时器的逻辑与状态存储的逻辑分离开

        定时器只执行倒计时操作，把状态传递给回调函数

        组件传递的回调函数内部存储改变状态
    * @param {int} ms 
    * @param {function} cb 
    */
    countDown: (ms, cb) => {
        // ms millisecond  cb callback
        const timer = setInterval(() => {
            ms--
            if (ms < 1) {
                clearInterval(timer) // 当倒计时为0时，清理定时器
                cb(true, ms) // 执行回调函数
                return
            }
            cb(false, ms)
        }, 1000)
        return timer // 返回timerID
    }
}
