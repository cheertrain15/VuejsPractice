/*
*  I. Introduction
*  II. The Vue Instance
*  III. Template Syntax
*/
//====================
/*
*  I. Introduction
*/
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


/*
*  II. The Vue Instance
*/


var data = {a : 1}

var vm = new Vue({
   data : data
})

// console.log(vm.a === data.a);

// vm.a = 2
// console.log(data.a);

// data.a =3
// console.log(vm.a);

var obj = {
   foo : 'bar'
}

Object.freeze(obj)

var vm2 = new Vue({
   el : '#app8',
   data : obj
})


var dataDollor = {a : 1}
var vmDollor = new Vue({
   el : '#app8',
   data: dataDollor
})

// console.log(vmDollor.$data === dataDollor);
// console.log(vmDollor.$el === document.getElementById('app8'));
vmDollor.$watch('a', function(newValue, oldValue){
     // This callback will be called when `vm.a` changes
})


var createdHook = new Vue({
   data : {
      a : 6
   },
   created : function(){
       // `this` points to the vm instance
       console.log('a is: ' + this.a)
   }
})


/*
* III.Template Syntax
*/
var example9 = new Vue({
   el: '#app9',
   data: {
      msg: 'v-once Test'
   }
})

var example10 = new Vue({
   el : '#app10',
   data : {
      rawHTML: '<span style="color:red">This Is Red</span>'
   }
})

var example11 = new Vue({
   el : '#app11',
   data : {
      hiddenMsg : 'ihihhihihihihihihi',
      onProhibit : function(){
         console.log('this is onProhibit')
      }
   }
})

var example12 = new Vue({
   el : '#app12',
   data : {
      message : 'lanif ysatnaf'
   },
   methods : {
      changedMessage : function(){
         return this.message.split('').reverse().join('')
      }
   },
   computed: {
      //a computed getter
      reversedMessage : function(){
         //'this' points to the example12 instance
         return this.message.split('').reverse().join('')
      }
   }
})

console.log(example12.reversedMessage);
example12.message = "Kaeritai"
console.log(example12.reversedMessage);

var example13 = new Vue({
   el : '#app13',
   data : {
      classObject : {
         active : true,
         'text-danger' : true
      }
   }
})

var example14 = new Vue({
   el : '#app14',
   data : {
      isActive : true,
      error : null
   },
   computed : {
      classObject : function(){
         return{
            active: this.isActive && !this.error,
            'text-danger': this.error && this.error.type === 'fatal'
         }
      }
   }
})

var example15 = new Vue({
   el : '#app15',
   data : {
      // awesome : false
      awesome : true
   }
})

var example16 = new Vue({
   el : '#app16',
   data : {
      ok : false
      // ok : true
   }
})

var example17 = new  Vue({
   el : '#app17',
   data : {
      // type : 'A'
      // type : 'B'
      // type : 'C'
      type : 'X'
   }
})

var example18 = new Vue({
   el : '#app18',
   data : {
      loginType : 'username'
      
   },
   methods : {
      change : function(){
         if(this.loginType === 'username'){
            this.loginType = 'useremail'
         } else {
            this.loginType = 'username'
         }
      }
   }
})