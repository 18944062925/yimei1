layui.use(['form', 'laydate'], function () {
    var form = layui.form;
    var laydate = layui.laydate;
    var $ = layui.$;

    laydate.render({
        elem: '#date1'
    });
    laydate.render({
        elem: '#date2'
    });
    let item = window.localStorage.getItem("DRUG");
    let drug = JSON.parse(item);
    console.log(drug)
    form.val("formTest", { //formTest 即 class="layui-form" 所在元素属性 lay-filter="" 对应的值
        "name": drug.name // "name": "value"
        , "unit": drug.unit
        , "drugType": drug.drugType
        , "specification": drug.specification
        , "efficacyClassification": drug.efficacyClassification
        , "price": drug.price
        , "productionDate": drug.productionDate
        , "qualityDate": drug.qualityDate
        , "drugCount": drug.drugCount
        , "manufacturer": drug.manufacturer
        , "wholesalePrice": drug.wholesalePrice
        , "phone": drug.phone
        , "limitStatus": drug.limitStatus
    });
    form.on('submit(demo1)', function (data) {
        console.log(data.elem)
        console.log(data.form)
        console.log(data.field)
        $.ajax({
            url: "/drug/" + drug.id,
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
})