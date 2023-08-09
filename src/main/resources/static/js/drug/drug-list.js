layui.use('table', function () {
    var table = layui.table;
    var drugTable = table.render({
        elem: '#drug'
        , url: '/drug'
        , method: 'get'
        , toolbar: '#toolbarDemo' //开启头部工具栏，并为其绑定左侧模板
        , height: 'full-305' //高度最大化减去差值
        , defaultToolbar: ['filter', 'exports', 'print', { //自定义头部工具栏右侧图标。如无需自定义，去除该参数即可
            title: '提示'
            , layEvent: 'LAYTABLE_TIPS'
            , icon: 'layui-icon-tips'
        }]
        , title: '药品信息表'
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
        , cols: [[
            {type: 'checkbox', fixed: 'left'}
            , {field: 'id', title: '药物ID', width: 80, fixed: 'left', unresize: true, sort: true}
            , {field: 'name', title: '药物名称', width: 120, edit: 'text'}
            , {field: 'drugType', title: '药物类型', width: 100, edit: 'text'}
            , {field: 'unit', title: '单位', width: 80, edit: 'text', sort: true}
            , {field: 'specification', title: '药物规范', width: 100}
            , {field: 'efficacyClassification', title: '药物功效'}
            , {field: 'price', title: '单价', width: 80, sort: true}
            , {field: 'drugCount', title: '药物库存', width: 120}
            , {field: 'productionDate', title: '药品生产日期', width: 100, sort: true}
            , {field: 'qualityDate', title: '有效期', width: 120}
            , {
                field: 'limitStatus', title: '否限制药', width: 120, templet: function (res) {
                    if (res.limitStatus === 0) {
                        return '<span style="color: red">是</span>'
                    }
                    return '<span style="color: blue">否</span>'
                }
            }
            , {field: 'manufacturer', title: '制造商', width: 120}
            , {field: 'wholesalePrice', title: '批发价格', width: 120}
            , {field: 'phone', title: '手机号', width: 120}
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
                    area: ['600px','770px'],
                    content: './drug-add.html'
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
                    url: "/drug/"+data.id,
                    type: "delete",
                    dataType: "json",
                    success: function (res) {
                        console.log(res);
                        drugTable.reload();
                    },
                    complete: function (xhr) {
                        layer.close(index);
                    }
                })
            });
        } else if (obj.event === 'edit') {
            window.localStorage.setItem("DRUG",JSON.stringify(data));
            layer.open({
                type: 2,
                title: false,
                area: ['600px', '770px'],
                content: './order-edit.html',
            });
        }
    });
});