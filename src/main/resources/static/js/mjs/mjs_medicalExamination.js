$(window).preloader();
let registID;
window.onload = function () {

    refreshQueue();
};

function getCardIdInfor(command) {
    var GetCardIdInforReqVO = {
        command: 1, //0:表示读卡器输入卡号 1:表示手动输入卡号
        cardId: $("#cardId").val()
    };
    $.ajax({
        url: "/patient/" + GetCardIdInforReqVO.cardId,
        type: "get",
        success: function (da) {
            registID=da.data.register_id;
            console.log(da);
            let data = da.data;
            if (da !== null && da.code == 0) {
                $("#name").val(data.name);
                $("#sex").val(data.sex);
                $("#nationality").val(data.nationality);
                $("#age").val(data.age);
                $("#prescriptionNum").val(data.prescription_num);
            } else {
                swal(da.message, "", "error")
            }
        }
    })
}

function savemedicalExaminationInfo() {

    var medicalExaminationInfoReqVO = {
        cardId: $("#cardId").val(),
        bodyTemperature: $("#bodyTemperature").val(),
        pulse: $("#pulse").val(),
        heartRate: $("#heartRate").val(),
        bloodPressure: $("#bloodPressure").val(),
        examinationCost: $("#examinationCost").val(),
        prescriptionNum:$("#prescriptionNum").val(),
    };

    $.ajax({
        url: "/medicalExamination",
        type: "post",
        data: {
            "registerId": registID,
            "bodyTemperature": $("#bodyTemperature").val(),
            "pulse": $("#pulse").val(),
            "heartRate": $("#heartRate").val(),
            "bloodPressure": $("#bloodPressure").val(),
            "examinationCost": $("#examinationCost").val(),
            "prescriptionNum":$("#prescriptionNum").val(),
        },
        success: function (data) {

            if (data !== null && data.code === 0) {
                swal({
                    title: "保存成功！",
                    type: "success",
                }, function () {
                    setTimeout(function () {
                        window.location.reload()
                    }, 500)
                })
            } else {
                swal(data.message, "", "error")
            }
        }
    })

}

<!--控制队列侧边栏-->
$(".showbar").on('click', function () {
    $('.widget-bar').toggleClass('on1');
    $('.showbar').toggleClass('on2');
});

//获取当前医生下所有门诊队列患者
function refreshQueue() {

    $.ajax({
        url: "/medicalExamination",
        type: "get",
        dataType: "json",
        success: function (data) {
            console.log(data);
            var html = '';
            $.each(data.data, function (i, value) {
                html += '<tr class="alloutpatientqueue">';
                html += '<th>' + (i + 1) + '</th>';
                html += '<td>' + value.registeredNum + '</td>';
                html += '<td>' + value.name + '</td>';
                html += "<td>" + "<button class='btn btn-info mybutton' onclick='patientInfor(" +
                    "\"" + value.registeredNum + "\")'>叫号</button>";
            });
            $('#alloutpatientqueue').html(html)
        }
    });
}
function patientInfor(registeredNum) {
    console.log(registeredNum);
    $("#cardId").val(registeredNum);
}