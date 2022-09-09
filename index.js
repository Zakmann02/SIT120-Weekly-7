Vue.component('button-counter', {
    template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>',
    components: {
    test, TestComponent
    },
    data: function () {
      return {
        count: 0
      }
    }
  })

  let TestComponent =('local-test', {
    template: '<h1> This is a general local components test</h1>'
})


new Vue({
    el: '#app',
})