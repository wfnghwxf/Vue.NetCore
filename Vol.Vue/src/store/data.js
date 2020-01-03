/*
 * @Author: your name
 * @Date: 2019-12-30 11:33:42
 * @LastEditTime : 2020-01-03 16:10:16
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Vol.Vue\src\store\data.js
 */

const data = {
    state: {
        data: {}
    },
    mutations: {
        // setData(state, data) {  //this.$store.commit('setData', data)
        //     state.data = data;
        // },
        clear(state) {
            state.data = {};
        }
    },
    getters: {
        getData: (state) => () => { //调用方式 store.getters.getData()
            return data;
        }
    },
    actions: {
        // setData(context, data) {
        //     context.commit('setData', data); //调用方式 store.dispatch('push')
        // }
    }
};

export default data;
