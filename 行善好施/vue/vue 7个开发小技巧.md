### 1. 状态共享
`Vuex`当然可以解决这类问题,今天我们使用vue.js 2.6 新增加的 Observable API

```js
// store.js
import Vue from "vue";
export const store = Vue.observable({ count:0 });
export const mutations = {
  setCount(count) {
    store.count = count;
    }
};
```

```html
<!--  app.vue  -->
<template>
	<div id="app">
		<img width="25%" src="./assets/logo.png">
		<p>
			count:{{count}}
		</p>
		<button @click="setCount(count+1)">
			+1
		</button>
		<button @click="setCount(count-1)">
			-1
		</button>
	</div>
</template>
<script>
	import {
		store,
		mutations
	}
	from "./store";
	export
default {
		name:
		"App",
		computed: {
			count() {
				return store.count
			}
		},
		methods: {
			setCount: mutations.setCount
		}
	};
</script>
<style>
```

### 2. 长列表性能优化

我们应该知道`vue`会通过 `object.defineProperty`对数据进行劫持，来实现视图响应数据的变化，然而有些时候我们的组件就是纯粹的数据展示，不会有任何改变，我们就不需要 `vue`来劫持我们的数据，在大量数据展示的情况下，这能够很明显的减少组件初始化的时间，那如何禁止 vue劫持我们的数据呢？可以通过 `object.freeze`方法来冻结一个对象，一旦被冻结的对象就再也不能被修改了。

```js
export default {
  data: () = >({
    users: {}
  }),
  async created() {
    const users = await axios.get("/api/users");
    this.users = Object.freeze(users)
  }
};
```
另外需要说明的是，这里只是冻结了 `users`的值，引用不会被冻结，当我们需要`reactive`数据的时候，我们可以重新给 `users`赋值。
```js
export default {
  data: () => ({
    users: {}
  }),
  async created() {
    const users = await axios.get("/api/users");
    this.users = Object.freeze(users);
  },
  methods:{
    // 改变值不会触发视图响应
    this.data.users[0] = newValue
    // 改变引用依然会触发视图响应
    this.data.users = newArray
  }
};
```

### 3. 去除多余的样式

随着项目越来越大，书写的不注意，不自然的就会产生一些多余的 css，小项目还好，一旦项目大了以后，多余的 css 会越来越多，导致包越来越大，从而影响项目运行性能，所以有必要在正式环境去除掉这些多余的css，这里推荐一个库[`purgecss`](https://www.purgecss.com/)，支持 CLI、JavascriptApi、Webpack 等多种方式使用，通过这个库，我们可以很容易的去除掉多余的 css。


**install**
```bash

npm i -g purgecss

purgecss --css <css> --content <content> [option]

Options:
  --con, --content  glob of content files                                [array]
  -c, --config      configuration file                                  [string]
  -o, --out         Filepath directory to write purified css files to   [string]
  -w, --whitelist   List of classes that should not be removed
                                                           [array] [default: []]
  -h, --help        Show help                                          [boolean]
  -v, --version     Show version number                                [boolean]

```

**usage**
```js
// purgecss.config.css 
module.exports = {
  content: ['index.html'],
  css: ['css/tailwind.css', 'css/app.css'],
  extractors: [
    {
      extractor: class {
        static extract(content) {
          return content.match(/[A-z0-9-:\/]+/g) || []
        }
      },
      extensions: ['html', 'js']
    }
  ]
}
```

### 4. 作用域插槽

` vue 2.6.0` before

```html
<!-- current-user 组件 -->
<span>
  <slot>{{ user.lastName }}</slot>
</span>
```

```html
<!-- uses -->
<current-user>
  {{ user.firstName }}
</current-user>
```
` vue 2.6.0` after

```html
<span>
	<slot v-bind:user="user">
		{{user.lastName}}
	</slot>
</span>
```

```html
<current-user>
	<template v-slot:default="slotProps">
		{{ slotProps.user.firstName }}
	</template>
</current-user>

<!-- 另外一种写法 -->
<current-user v-slot="slotProps">
  {{ slotProps.user.firstName }}
</current-user>
```

### 5. 属性事件传递

写过高阶组件的童鞋可能都会碰到过将加工过的属性向下传递的情况，如果碰到属性较多时，需要一个个去传递，非常不友好并且费时，有没有一次性传递的呢（比如react里面的 {...this.props}）？
答案就是 v-bind 和 v-on。

```html
<!--SortList-->
<template>
	<BaseList v-bind="$props" v-on="$listeners">
		<!--...-->
	</BaseList>
</template>
<script>
	import BaseList from "./BaseList";
	import BaseListMixin from "./BaseListMixin";
	import sort from "./sort.js";
	export
default {
		props:
		BaseListMixin.props,
		components: {
			BaseList
		}
	};
</script>
```

### 6. 函数式组件

函数式组件，即无状态，无法实例化，内部没有任何生命周期处理方法，非常轻量，因而渲染性能高，特别适合用来只依赖外部数据传递而变化的组件。

写法如下：

1. 在 `template` 标签里面标明 `functional`
2. 只接受 `props` 值
3. 不需要 `script` 标签

```html
<!--App.vue-->
<template>
  <div id="app">
    <List
      :items="['Wonderwoman', 'Ironman']" 
      :item-click="item => (clicked = item)"
    />
    <p>
      Clicked hero:{{clicked}}
    </p>
	</div>
</template>
<script>
  import List from "./List";
  export default {
    name:
    "App",
    data: () = >({
      clicked: ""
    }),
    components: {
      List
    }
	};
</script>
```

```html
<!-- List .vue 函数式组件 -->
<template functional>
    <div>
        <p v-for="item in props.items" @click="props.itemClick(item);">
            {{ item }}
        </p>
    </div>
</template>
```

### 7. 监听组件的生命周期

比如有父组件 `Parent`和子组件 `Child`，如果父组件监听到子组件挂载 mounted 就做一些逻辑处理，常规的写法可能如下：

```html
// Parent.vue
< Child @A="doSomething" / >
methods: {
  doSomething(){
    <!-- xxxx -->
  }
}

// Child.vue
mounted() {
    this.$emit("A");
}
```
这里提供一种特别简单的方式，子组件不需要任何处理，只需要在父组件引用的时候通过 `@hook`来监听即可，代码重写如下：

```html
<Child @hook:mounted="doSomething"/>
```
当然这里不仅仅是可以监听 `mounted`，其它的生命周期事件，例如： `created`， `updated`等都可以，是不是特别方便~



@Author:  Lance yi  
@Blog:  [www.lanceyi.com](http://www.lanceyi.com)  
@motto: STAY HUNGRY. STAY FOOLISH.  
@LastTime:  2019年5月29日15:00:52  
