var example1 = new Vue({
   el: '#app',
   data: {
      mog: 'Hello Vue!'
   },

})

var example2 = new Vue({
   el: '#app2',
   data: {
      message: 'This is hidden message!'
   }
})

var example3 = new Vue({
   el: '#app3',
   data: {
      seen: true
   }
})

var example4 = new Vue({
   el: '#app4',
   data: {
      todos: [
         { text: 'Learn Vue.js' },
         { text: 'Learn git command' },
         { text: 'Learn React' }
      ]
   }
})

var example5 = new Vue({
   el: '#app5',
   data: {
      message: 'Hello Vue Vue Vue'
   },
   methods: {
      reverseMessage: function () {
         this.message = this.message.split('').reverse().join('');
      }
   }
})

var example6 = new Vue({
   el: '#app6',
   data: {
      message: 'v-model is two-way binding directive.'
   }
})


Vue.component('todo-item', {
   //name of the prop is 'todo'.
   props: ['todo'],
   template: '<li>{{todo.text}}</li>'
})

var app7 = new Vue({
   el : '#app7',
   data : {
      groceryList : [
         {id : 0 , text : 'Vegies'},
         {id : 1 , text : 'cheese'},
         {id : 2 , text : 'Milk'}
      ]
   }
})