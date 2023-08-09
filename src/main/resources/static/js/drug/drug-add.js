layui.use(['form', 'laydate'], function () {
    var form = layui.form;
    var laydate = layui.laydate;
    var $=layui.$;

    laydate.render({
        elem: '#date1'
    });
    laydate.render({
        elem: '#date2'
    });
    //监听提交
    form.on('submit(demo1)', function (data) {
        console.log(data.field)
        $.ajax({
            url: "/drug",
            type: "post",
            data: data.field,
            dataType: "json",
            success: function (res) {
                var index = parent.layer.getFrameIndex(window.name);
                parent.layer.close(index);
                // 刷新父元素页面
                parent.location.reload();
            }
        })
        return false;
    });
});