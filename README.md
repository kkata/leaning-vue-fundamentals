# learning-vue-fundamentals

Learning Vue 3 in [Learn Vue 3 in this Introduction to Vue\.js Course by Core Vue Team Member, Sarah Drasner](https://frontendmasters.com/courses/vue-3/).

## Setup

- [Vue3\.0 で Chrome Vue\.js devtools を有効にする \- Qiita](https://qiita.com/yosaprog/items/b1305b3e607272e70958)
- [Codopen \- Chrome ウェブストア](https://chrome.google.com/webstore/detail/codopen/agnkphdgffianchpipdbkeaclfbobaak)
- [Vetur \- Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=octref.vetur)

## CodePen

- [v-model](https://codepen.io/kkata/pen/Exyrwry)
- [v-pre and v-once](https://codepen.io/kkata/pen/XWKOeeW)
- [computed/methods](https://codepen.io/kkata/pen/zYBePyp)
- [Directives Exercise](https://codepen.io/kkata/pen/zYBePYo)
- [Methods and Computed Exercise](https://codepen.io/kkata/pen/XWKOzOz)
- [filter at Vue2](https://codepen.io/kkata/pen/KKMJJGY)
- [filter at Vue3: use computed](https://codepen.io/kkata/pen/PozVVxe)
- [Watcher Exercise Problem](https://codepen.io/kkata/pen/qBNvRPP)
- [components exercise problem](https://codepen.io/kkata/pen/eYzXvPK)
- [Ball Bouncing Exercise, v3](https://codepen.io/kkata/pen/YzWgbzP)

---

## Vue's Reactivity System & Proxies

Reactive programming is programming with asynchronous data streams.

### References

- [The introduction to Reactive Programming you've been missing](https://gist.github.com/staltz/868e7e9bc2a7b8c1f754)
- [Proxy \- JavaScript \| MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy)
- [メタプログラミング \- JavaScript \| MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Meta_programming)
- [Reflect \- JavaScript \| MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Reflect)
- [vue\-next/packages/reactivity at master · vuejs/vue\-next](https://github.com/vuejs/vue-next/tree/master/packages/reactivity)
- [Vue 3 Reactivity \- Vue 3 Reactivity \| Vue Mastery](https://www.vuemastery.com/courses/vue-3-reactivity/vue3-reactivity/)
- [きたるべき vue\-next のコアを理解する \- Qiita](https://qiita.com/neutron63zf/items/506c7493a53cea44860e)

---

## Watchers

### References

- [Akryum/vue\-virtual\-scroller: ⚡️ Blazing fast scrolling for any amount of data](https://github.com/Akryum/vue-virtual-scroller)

---

## App development

### References

- [What does the 'h' stand for in Vue's render method? \| CSS\-Tricks](https://css-tricks.com/what-does-the-h-stand-for-in-vues-render-method/)

### Lifecycle Hooks

- [beforeUnmount](https://v3.vuejs.org/api/options-lifecycle-hooks.html#beforeunmount) was beforeDestroy v2
- [unmounted](https://v3.vuejs.org/api/options-lifecycle-hooks.html#unmounted) was destroyed v2
- [errorCaptured](https://v3.vuejs.org/api/options-lifecycle-hooks.html#errorcaptured) new! v3
- [renderTracked](https://v3.vuejs.org/api/options-lifecycle-hooks.html#rendertracked) new! v3
- [renderTriggered](https://v3.vuejs.org/api/options-lifecycle-hooks.html#rendertriggered) new! v3

Vue CLI をグローバルインストールせずにプロジェクトを作るコマンド

```
npx @vue/cli create vue-cli-exercise
```

---

## Animating with JavaScript

```
<transition
  ...
  :css="false">
</transtion>
```

- [netlify/million\-devs: Microsite for the 1 Million Developers announcement\.](https://github.com/netlify/million-devs) - Scroll SVG animations with Vuex

- [sdras/page\-transitions\-travelapp: Travel App, Native\-like Page Transitions](https://github.com/sdras/page-transitions-travelapp) - Nuxt.js page transitions
