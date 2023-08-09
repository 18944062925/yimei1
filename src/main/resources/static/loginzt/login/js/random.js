$().ready(function(){
//首页随机图片
    $('body').css('background','url(/loginzt/login/img/imgages/login'+Math.round(Math.random() *95)+'.png) no-repeat');
    $('body').css('height','100%');
    $('body').css('display','flex');
    $('body').css('align-items','center');
    $('body').css('justify-content','center');
    $('body').css('background-size','100% 100%');
});