var vm=new Vue({
    el:'#app',
    data:{
        message:'hello,welcome to vue!!! ',
        
        object:[
           {
               'uId':0,
               'email':'11@11.com',
               'password':111111
           },
           {
               'uId':1,
               'email':'22@22.com',
               'password':222222,
           },
       ],
		count:0,
		name:'vue.js',

    },
    methods:{
		greet:function(event){
			alert('hello,'+this.name+'!');
				if(event){
				//event是原生DOM事件
				alert(event.target.tagName);
			}
			console.log(event);
		},
		greet2:function(event){
			alert('hello,'+this.name+'!');
			console.log('操一次');
			console.log(event);
		},
		parameterPassing:function(message){
			console.log(message);
		}
    }
});


Vue.component('button-counter',{
	data:function(){
		return {
			count:0,
		}
	},
	template:'<button v-on:click="count++">button click count:{{count}} times</button>',
});

/*
Vue.component('button-counter', {
	data:function(){
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})
*/


new Vue({
	el:'#component-demo',
});
