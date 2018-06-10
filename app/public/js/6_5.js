var vm=new Vue({
    el:'#app',
    data:{
        message:'hello,welcome to vue!',
        loginType:'userName',
    },
    methods:{
        translate:function () {

            if(vm.loginType==='userName'){
                return vm.loginType='email';
            }else{
                return vm.loginType='userName';
            }
        }
    }
});