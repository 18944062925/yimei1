layui.use('table', function () {
    var table = layui.table;
    var $ = layui.$;
    var patientTable = table.render({
        elem: '#patient'
        , url: '/patient'
        , method: 'get'
        , toolbar: '#toolbarDemo' //开启头部工具栏，并为其绑定左侧模板
        , height: 'full-300' //高度最大化减去差值
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
            layer.msg(res,{
                time: 2000,//两秒后关闭
            });
        }
        , title: '病人信息表'
        , cols: [[
            {type: 'checkbox', fixed: 'left'}
            , {field: 'id', title: '病人序号', width: 80, fixed: 'left', unresize: true, sort: true}
            , {field: 'name', title: '姓名', width: 120, edit: 'text'}
            , {field: 'sex', title: '性别', width: 100, edit: 'text'}
            , {field: 'age', title: '年龄', width: 80, edit: 'text', sort: true}
            , {field: 'address', title: '地址', width: 100}
            , {field: 'birthday', title: '出生日期'}
            , {field: 'telphone', title: '手机号', width: 80, sort: true}
            , {field: 'cardId', title: '卡号', width: 120}
            , {field: 'idCard', title: '身份证号', width: 100, sort: true}
            , {field: 'nationality', title: '民族', width: 120}
            , {field: 'career', title: '职业', width: 120,}
            , {field: 'familyHistory', title: '家族历史', width: 120}
            , {field: 'maritalStatus', title: '婚姻状况', width: 120}
            , {field: 'pastHistory', title: '过去病史', width: 120}
            , {field: 'personalHistory', title: '个人生活史', width: 120}
            , {field: 'createDatetime', title: '创建时间', width: 120}
            , {fixed: 'right', title: '操作', toolbar: '#barDemo', width: 150}
        ]]
        , page: true//开启分页
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
            case 'isAdd':
                layer.open({
                    type: 2,
                    title: false,
                    area: ['600px', '770px'],
                    content: './patient-add.html'
                });
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
                    url: "/patient/" + data.id,
                    type: "delete",
                    dataType: "json",
                    success: function (res) {
                        console.log(res);
                        patientTable.reload();
                    },
                    complete: function (xhr) {
                        layer.close(index);
                    }
                })
            });
        } else if (obj.event === 'edit') {
            window.localStorage.setItem("PATIENT",JSON.stringify(data));
            layer.open({
                type: 2,
                title: false,
                area: ['600px', '770px'],
                content: './patient-upd.html',
            });
        }
    });
});