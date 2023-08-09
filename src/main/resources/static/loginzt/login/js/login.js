layui.use(['layer','form'], function(){
        var $ = layui.jquery;
        var layer = layui.layer;
        var form = layui.form;
        $('#title').click(function (){
            layer.tips('<span style="font-size:15px;color:#801dae;font-family: \'华文行楷\'">梦在远方，勇敢的去追。不论前方的道路有多远，有多困难，别放弃，克服困难。' +
                '<br>纵使披荆斩棘，也要勇往直前。努力实现埋藏在心中的理想，让心中再无遗憾</span>', '#title', {
                tips: [2, '#3595CC'],
                time:5000
            });
        })
        $('#login').click(function (){
            layer.open({
                type: 2,
                title: '登录验证',
                shadeClose: true,
                shade: 0.8,
                area: ['400px', '400px'],
                content: '/redirect/huaCaptcha',
                end: function () {
                   setTimeout( function (){
                       $.ajax({
                           url: "/login",
                           type: "post",
                           dataType: "json",
                           data:{
                               "userName":$('#userName').val(),
                               "password":$('#password').val(),
                           },
                           success: function (res) {
                               console.log(res);
                               if(res.data!==null && res.code===0){
                                   window.localStorage.setItem('SYS_USER',JSON.stringify(res))
                                  window.location.href="/redirect/view/management"
                               }else{
                                   layer.msg(res.msg,{icon:5,time:1000})
                               }
                           }
                       })
                   },1000)
                }
            });
        })
    });