/*=========================================================================================
  File Name: vue.config.js
  Description: configuration file of vue
  ----------------------------------------------------------------------------------------
  
  Author: Pixinvent
  
==========================================================================================*/


module.exports = {
  publicPath: '/',
  transpileDependencies: [
    'vue-echarts',
    'resize-detector'
  ],
  configureWebpack: {
    optimization: {
      splitChunks: {
        chunks: 'all'
      }
    }
  }
  // devServer: {
  //   overlay: {
  //     warnings: true,
  //     errors: true
  //   }
  // }
}

