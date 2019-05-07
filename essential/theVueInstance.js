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