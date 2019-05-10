var basicMixin = {
   methods : {
      hello: function(){
         console.log('hello from mixin')
      }
   }
}

var BasicMixined = Vue.extend({
   created : function(){
      // console.log('bye from extended')
   },
   mixins : [basicMixin]
})


var basicMixinComponent = new BasicMixined()
// basicMixinComponent.hello();

//========

// var mixinA = {
//    data : function(){
//       return{
//          message: 'hello',
//          sign : 'A'
//       }
//    },
//    created : function(){
//       console.log('mixin : created hook')
//    }
// }

// new Vue({
//    data : function(){
//       return{
//          message : 'goodbye',
//          bar : 'DEF',
//          sign : 'B'
//       }
//    },
//    mixins : [mixinA],
//    created : function(){
//       console.log('component : created hook')
//       console.log(this.$data)
//    }
// })

//=====

// Vue.directive('focus',{
//    inserted : function($el){
//       $el.focus()
//    }
// })

// var customeDirectivesIntro = new Vue({
//    el : '#custom-directives-intro',
//    directives : {
//       focus : {
//          inserted: function (el) {
//             el.focus()
//          }
//       }
//    }
// })

//==============

Vue.component('anchored-heading', {
   render: function (createElement) {
     return createElement(
       'h' + this.level,   // tag name
       this.$slots.default // array of children
     )
   },
   props: {
     level: {
       type: Number,
       required: true
     }
   }
 })