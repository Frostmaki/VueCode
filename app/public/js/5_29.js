var app=new Vue({
    el:'#vm',
    data: {
        visitCount: 0,
        error: null,
        msg: '<p style="background: red">hello</p>',
        isButtonDisabled:false,
        isButtonId:'btn1',


        isAble:false,
        pMessage:'what this is?'
    },
    //生命周期
    created:function () {
        console.log('create');
    },

    //计算
    computed:{
        Cdft:function () {
            console.log('c defferent');
            return Date.now();
        }
    },

    //方法
    methods:{
        changeText:function () {
            this.msg="shabi";
        },
        changeIsAble:function () {
            if(this.isAble==true){
                this.isAble=false;
            }else{
                this.isAble=true;
            }
        },

        Mdft:function () {
            console.log('M defferent'+Date.now());

        }

    }


});
