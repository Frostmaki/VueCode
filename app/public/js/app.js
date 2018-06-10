var app=new Vue({
    el: '#app',
    data: {
        name: null,
        age: null,

        foodList:[
            {
                name:'葱',
                price:'10',
                discount:0.5,
            },
            {
                name:'蒜',
                price:'4',
                discount:1,
            },
            {
                name:'姜',
                price:'2.5',

            }
        ],
        url:'http://www.baidu.com',
        img:'https://dummyimage.com/300.png/09f/fff',

        isActive: true,
    },
    methods:{
        onclick:function () {
            console.log('click');
        },
        onEnter:function () {
            console.log('mouse Enter');
        },
        onOut:function () {
            console.log('mouse Leave');
        },
        onSubmit:function (e) {
            e.preventDefault();
            console.log('submited');
        }

    }
});
