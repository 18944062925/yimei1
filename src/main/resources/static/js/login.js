layui.use('form', function () {
    var form = layui.form;
    //监听提交
    form.on('submit(login)', function (data) {
        console.log(data.elem)
        console.log(data.form)
        console.log(data.field)
        $.ajax({
            url: "/login",
            type: "post",
            dataType: "json",
            data: data.field,
            success: function (res) {
                if (res.code === 1) {
                    layer.msg(res.msg);
                } else {
                    window.localStorage.setItem("SYS_USER",JSON.stringify(res.data));
                    window.location.href = '/X-admin/index.html';
                }
            }
        })
        return false;
    });
});
