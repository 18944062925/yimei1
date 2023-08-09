layui.use(['form', 'laydate'], function () {
    var form = layui.form;
    var laydate = layui.laydate;
    var $ = layui.$;

    laydate.render({
        elem: '#date3'
    });
    laydate.render({
        elem: '#date4'
    });
    let item = window.localStorage.getItem("USER");
    let user = JSON.parse(item);
    console.log(user)
    form.val("formUserTest", { //formTest 即 class="layui-form" 所在元素属性 lay-filter="" 对应的值
        "username": user.username // "name": "value"
        , "password": user.password
        , "sex": user.sex
        , "phone": user.phone
        , "email": user.email
        , "address": user.address
        , "workDateTime": user.workDateTime
        , "birthday": user.birthday
        , "grade": user.grade
    });
    form.on('submit(demo2)', function (data) {
        console.log(data.elem)
        console.log(data.form)
        console.log(data.field)
        $.ajax({
            url: "/user/" + user.id,
            type: "post",
            dataType: "json",
            data: data.field,
            success: function (res) {
                // 刷新父元素页面
                parent.location.reload();
            },
            complete: function (xhr) {
                var index = parent.layer.getFrameIndex(window.name);
                parent.layer.close(index);
            }
        })
        return false;
    })
});