# shop-admin

### 安装创建vue项目和配置

```shell
# 安装
npm install -g @vue/cli
vue create my-app
cd my-app
npm run serve
# 开启图形化界面
vue ui
```

### 配置 vue.config.js （关闭保存代码错误提示）

```javascript
module.exports = {
  lintOnSave: false
}
```

### 安装vue插件和使用

```shell
# 添加 element-ui 插件
vue add element
# 全局安装 
```

### 引入Bootstrap

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.0/dist/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
```

### 安装vue-router和使用

```shell
# 第一步
npm install vue-router --save
# 第二步
src 新建 router.js
```

###router.js

```javascript
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'layout',
      redirect: {name:'index'},
      component: () => import('./views/layout.vue'),
      children: [
      	{
					path: '/index',
          name: 'index',
          component: () => import('./views/index/index.vue')
    		}
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: ()=>import('./views/login/index.vue')
    }
  ]
})
```

### main.js

```javascript
import Vue from 'vue'
import App from './App.vue'
import router from './router.js'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
```

