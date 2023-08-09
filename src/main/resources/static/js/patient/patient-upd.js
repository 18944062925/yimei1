layui.use(['form', 'laydate'], function () {
    var form = layui.form;
    var laydate = layui.laydate;
    var $=layui.$;

    laydate.render({
        elem: '#date5'
    });
    let item = window.localStorage.getItem("PATIENT");
    let patient = JSON.parse(item);
    console.log(patient)
    form.val("formPatientTest", { //formTest 即 class="layui-form" 所在元素属性 lay-filter="" 对应的值
        "name": patient.name // "name": "value"
        , "sex": patient.sex
        , "age": patient.age
        , "address": patient.address
        , "birthday": patient.birthday
        , "telphone": patient.telphone
        , "cardId": patient.cardId
        , "idCard": patient.idCard
        , "nationality": patient.nationality
        , "career": patient.career
        , "familyHistory": patient.familyHistory
        , "maritalStatus": patient.maritalStatus
        , "pastHistory": patient.pastHistory
        , "personalHistory": patient.personalHistory
    });
    form.on('submit(demo4)', function (data) {
        console.log(data.elem)
        console.log(data.form)
        console.log(data.field)
        $.ajax({
            url: "/patient/" + patient.id,
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