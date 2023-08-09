layui.use('table', function () {
    var table = layui.table;

    var userTable=table.render({
        elem: '#test'
        , url: '/user'
        , toolbar: '#toolbarDemo' //开启头部工具栏，并为其绑定左侧模板
        , height: 'full-320'
        , defaultToolbar: ['filter', 'exports', 'print', { //自定义头部工具栏右侧图标。如无需自定义，去除该参数即可
            title: '提示'
            , layEvent: 'LAYTABLE_TIPS'
            , icon: 'layui-icon-tips'
        }]
        ,done: function (res, curr, count){
            if (res.code===1){
                layer.msg('权限不足!',{
                    time: 2000,//两秒后关闭
                });
            }else {
                layer.msg('数据加载完毕!',{
                    time: 2000,//两秒后关闭
                });
            }
        }
        ,error: function (res, curr){
            console.log(res)
            layer.msg(res,{
                time: 2000,//两秒后关闭
            });
        }
        , method: 'get'
        , title: '用户数据表'
        , cols: [[
            {type: 'checkbox', fixed: 'left'}
            , {field: 'id', title: 'ID', width: 80, fixed: 'left', unresize: true, sort: true}
            , {field: 'username', title: '用户名', width: 120, edit: 'text'}
            , {
                field: 'email', title: '邮箱', width: 270, edit: 'text', templet: function (res) {
                    return '<em>' + res.email + '</em>'
                }
            }
            , {field: 'sex', title: '性别', width: 80, edit: 'text', sort: true}
            , {field: 'phone', title: '手机号', width: 150}
            , {field: 'address', title: '地址', width: 200, sort: true}
            , {field: 'workDateTime', title: '就业时间', width: 130}
            , {field: 'birthday', title: '出生日期', width: 130, sort: true}
            , {field: 'grade', title: '职位', width: 130}
            , {fixed: 'right', title: '操作', toolbar: '#barDemo', width: 150}
        ]]
        , page: true
    });

    //头工具栏事件
    table.on('toolbar(test)', function (obj) {
        var checkStatus = table.checkStatus(obj.config.id);
        switch (obj.event) {
            case 'getCheckData':
                var data = checkStatus.data;
                layer.alert(JSON.stringify(data));
                break;
            case 'getCheckLength':
                var data = checkStatus.data;
                layer.msg('选中了：' + data.length + ' 个');
                break;
            case 'isAll':
                layer.msg(checkStatus.isAll ? '全选' : '未全选');
                break;
            case 'add':
                layer.open({
                    type: 2,
                    area: ['650px','700px'],
                    content: './user-add.html'
                })
                break;
            //自定义头工具栏右侧图标 - 提示
            case 'LAYTABLE_TIPS':
                layer.alert('这是工具栏右侧自定义的一个图标按钮');
                break;
        }
        ;
    });

    //监听行工具事件
    table.on('tool(test)', function (obj) {
        var data = obj.data;
        //console.log(obj)
        if (obj.event === 'del') {
            layer.confirm('真的删除行么', function (index) {
                // obj.del();
                layer.close(index);
                $.ajax({
                    url: "/user/" + data.id,
                    type: "delete",
                    dataType: "json",
                    success: function (res) {
                        console.log(res);
                        userTable.reload();
                    },
                    complete: function (xhr) {
                        layer.close(index);
                    }
                })
            });
        } else if (obj.event === 'edit') {
            window.localStorage.setItem("USER",JSON.stringify(data));
            layer.open({
                type: 2,
                area: ['650px','700px'],
                content: './user-edit.html'
            })
        }
    });
});