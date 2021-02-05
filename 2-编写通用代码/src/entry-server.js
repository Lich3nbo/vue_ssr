import { createApp } from './app'

export default (context) => {
  return new Promise((resolve,reject)=>{
    const { app, router } = createApp();

    // 设置服务端路由位置
    router.push(context.url)

    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents();
      // 匹配不到路由， 执行 reject 函数, 并返回 404
      if(!matchedComponents){
        return reject({code: 404})
      }
      resolve(app)
    })
  })
  
}