// 1. 创建vue实例
const Vue = require('vue')
const app = new Vue({
  template: `<div>hello world</div>`
})

// 2.创建renderer
const renderer = require('vue-server-renderer').createRenderer()


// 将vue渲染为html
renderer.renderToStream(app,(err,html)=>{
  if(err) throw err
  console.log(html);
})

