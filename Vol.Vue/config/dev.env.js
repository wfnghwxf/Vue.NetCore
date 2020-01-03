/*
 * @Author: your name
 * @Date: 2019-12-30 11:33:42
 * @LastEditTime : 2020-01-03 15:34:39
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Vol.Vue\config\dev.env.js
 */
'use strict'
import merge from 'webpack-merge';
import prodEnv from './prod.env';

export default merge(prodEnv, {
  NODE_ENV: '"development"'
});
