# A-SOUL Digits

一个React练习项目，偷了ASF的几张图，接口偷的叔叔的，目前计划就做粉丝数统计啥的。已经在：http://sakurajimama1.ltd/asouldigits/ 上部署

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

对了，定时任务里面用了promise all，因为要请求五个人的粉丝数捏

## 21-10-1

起来之后看了一下sql状态和pm2的log，果然insert语句出了点问题，修好了。

去太古里逛了下iPad mini6（想着能op还能随航看DevTools的），小屏幕低刷真的太难接受了，彻底拔草，寄！

路过那个3D芭芭拉的广告位，A-SOUL什么时候拿下这玩意

晚上解决了个nginx问题，路径的尾巴上要加个/才能代理后面所有的路径（之前都没研究过，靠，我真烂透了）

搞好了查询昨天的接口，接下来就是看今天晚上0点的定时任务能不能正确拉到了。

顺便把今天的数据手写进了数据库（零头抹了，如果明天正常工作的话，数据会不太准）

噢还有，优化了一下获取昨天粉丝数的接口，本来查表不是一次查出来一行嘛，我就直接全丢给前端了。结果发现这个统一的状态应该让盒子的父组件来管理，但是原本父组件传给子组件的数据都是静态的，动态数据在子组件内部自己请求去了。这个接口一下返回了五个姑娘的数据，我就得在父组件里头给他拆分好塞进每个组件去，成了个动态的数据，太麻烦了实在是，而且这样组件化的意义就莫得了（我反正是这么感觉的）。所以就改了下接口，请求的时候带上名字，只返回对应的数据。

其实改动非常非常小，半分钟就改完了，我还废了半天劲研究父组件怎么搞才能给state里面的对象们添加一个属性（感觉直接覆盖对象很浪费性能而且代码又臭又长了）。所以以后在想到优化点的时候别怕麻烦就懒得改，很可能改动非常小非常简单但是对整体结构的优化是非常明显的。

还优化了一下盒子的显示，在首次挂载的时候就会获取一次粉丝信息（而不是等到鼠标移上去了才去获取，这样会显示一瞬间的NaN）

## 21-10-2

寄！

他奶奶的，我的定时任务出了铸币bug，一个是getMonth忘加括号了，另一个是我忘了我的promise resolve出来的直接是粉丝数，我以为是接口返回的那样儿的对象 ，还做了个遍历来处理。。。

现在改好了，测试过这个getAll的方法了，今天的数据就是现在（两点过）的，又不准了。

下午上线了，然后同学给我提了个建议，就是粉丝数没变化的时候就不要显示+0了。

我一想确实，就在鼠标移入的回调上加了个判断，如果要显示的是+0，那就不显示了。但是测出来发现，虽然有变化的时候能正确显示，但有时候显示了还是+0。然后它+0又不是次次出现了，我就想可能是异步问题，因为我是在鼠标事件回调里面调用了拉取数据的方法（这是一个异步方法）接着判断变化是不是+0，有时候（两次调用间隔比较短的时候）先判断到了变化不是+0，把变化数量显示了出来，紧接着异步方法结束，发现没有变化，又把变化改成了+0，导致+0又给显示出来了。

逻辑有点乱，我其实没想太清楚，只是隐约感觉是这个问题，就把我的get方法改成了promise实现，在then中判断是否显示变化数，然后这个问题应该就是解决了（试了几次没再出现了）

## 21-10-4

目前一切正常，今天加上了参数校验，就算接口被乱用也不会炸（吧）

晚上直播喽，happy！

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

