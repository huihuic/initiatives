# yctv

> yctv

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

类名方法名严格按照camelCase驼峰写法  例如getUserInfo
类名要具有明显的层级关系表达
方法名要表达出事件处理的主要意图

各组件中重要函数或者类说明
复杂的业务逻辑处理说明
普通方法一般使用单行注释  // 注释内容
注释块必须以 /** 注释内容 **/

vue组件使用PascalCase规则声明，注册以及使用  例如UserInfoDetail
vue文件方法声明顺序
    - name
    - components   
    - props    
    - data     
    - created
    - mounted
    - activited
    - update
    - beforeRouteUpdate
    - metods   
    - filter
    - computed
    - watch
