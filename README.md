# A-SOUL Digits

一个React练习项目，偷了ASF的几张图，接口偷的叔叔的，目前计划就做粉丝数统计啥的。

## 21-9-28

### 主要工作

弄了个组件化人物卡片，会动的

### 解决问题

React图片url使用，css动画

## 21-9-29

### 主要工作

任务卡片带名字了，优化组件，动画非线性

### 解决问题

b站接口403，原因是referer字段，需要从node环境拉接口

## 21-9-30

昨天忘写了，今天（十月一号）补上。想写的一堆堆，就不分工作和问题了

用了新学的promise在服务器上搞了个拉粉丝数的方法，弄了个接口，这样页面就能拉到东西了（promise真的好好用👍~~绝绝子~~）。目前参数错误会有错误被甩出来，服务就炸了，还没搞catch，我以为promise会吃掉错误的。。。

然后搞了个和上次看相比粉丝数变化的显示，我把拉数据的函数部署在鼠标移入盒子的事件回调上了，所以每次放上去就会拉一下新的，然后姑娘们的粉丝数又是几秒钟涨一次，就顺便搞了个（调试的时候逮到了两个取关晚晚的😡），而且又用上了transition动画，显示一会儿就会消失。

晚上装了个pm2保持服务在线，结果要我更新node。更新完了之后npm炸了：

```sh
NPM ERR cb.apply is not a function
```

主要是我忘了一开始是咋装的node了，卸载重装又搞了好久，耽误我抢晚比装扮了😭（还好买到了）

最后搞好node之后加上了node- schedule，建了个表，定时任务里面写了个没调试的insert就摆了

## 21-10-1

起来之后看了一下sql状态和pm2的log，果然insert语句出了点问题，修好了。

去太古里逛了下iPad mini6（想着能op还能随航看DevTools的），小屏幕低刷真的太难接受了，彻底拔草，寄！

路过那个3D芭芭拉的广告位，A-SOUL什么时候拿下这玩意

晚上解决了个nginx问题，路径的尾巴上要加个/才能代理后面所有的路径（之前都没研究过，靠，我真烂透了）

搞好了查询昨天的接口，接下来就是看今天晚上0点的定时任务能不能正确拉到了。

---




In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

