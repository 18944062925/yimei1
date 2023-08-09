$(window).preloader();
let registID;
let patientId;
Split(['#outpatient-one', '#outpatient-two', '#outpatient-three'], {
    sizes: [25, 48, 27],
    minSize: [380, 760, 410]
});

window.onload = function () {

    refreshQueue();

    getAllDrug();
};

<!--控制队列-->
$(".showbar").on('click', function () {
    $('.widget-bar').toggleClass('on1');
    $('.showbar').toggleClass('on2');
});

function getCardIdInfor(command) {
    var GetCardIdInforReqVO = {
        command: 1, //0:表示读卡器输入卡号 1:表示手动输入卡号
        cardId: $("#cardId").val()
    };
    $.ajax({
        url: "/patient/" + GetCardIdInforReqVO.cardId + "/" + registID,
        type: "get",
        success: function (da) {
            console.log(da);
            let data = da.data;
            if (da !== null && da.code == 0) {
                $("#name").val(data.patientName);
                $("#sex").val(data.sex);
                $("#nationality").val(data.nationality);
                $("#age").val(data.age);
                $("#prescriptionNum").val(data.prescription_num);
                $("#date").val(data.create_datetime[0]);
                $("#department").val(data.departName);
                $("#diagnosisResult").val(data.diagnosis_result);
                if (data.marital_status == null || data.career == null || data.personal_history == null || data.past_history == null || data.family_history == null) {
                    $("#new-img").css("visibility", "visible");
                }
                $("#maritalStatus").val(data.marital_status);
                $("#career").val(data.career);
                $("#personalHistory").val(data.personal_history);
                $("#pastHistory").val(data.past_history);
                $("#familyHistory").val(data.family_history);
                $("#conditionDescr").val(data.condition_description);
                $("#queueId").val(data.queueId);
            } else {
                swal(da.message, "", "error")
            }
        }
    })
}

function changePatientInfor() {

    var cardId = $("#cardId").val();

    if (cardId == null || cardId === '') {
        swal("请先读取就诊卡！", "", "error");
        return false;
    }
    var OtherPatientInforReqVO = {
        cardId: cardId,
        maritalStatus: $("#maritalStatus").val(),
        career: $("#career").val(),
        personalHistory: $("#personalHistory").val(),
        pastHistory: $("#pastHistory").val(),
        familyHistory: $("#familyHistory").val()
    };
    $.ajax({
        url: "/patientOne/"+patientId,
        type: "post",
        data: {
            "maritalStatus": $("#maritalStatus").val(),
            "career": $("#career").val(),
            "personalHistory": $("#personalHistory").val(),
            "pastHistory": $("#pastHistory").val(),
            "familyHistory": $("#familyHistory").val()
        },
        success: function (da) {
            let data = da.data;
            if (da !== null && da.code == 0) {
                swal("信息提交成功！", "", "success")
            } else {
                swal(da.message, "", "error")
            }
        }
    })
}

var drug = '';
var drugId = '';
var drugIds = '';

//获取所有药品
function getAllDrug() {

    $.ajax({
        url: "/drug",
        type: "get",
        data: {
            "page": 1,
            "limit": 100000
        },
        dataType: "json",
        success: function (data) {
            var optionHtml = '<option value=""></option>';
            $.each(data.data, function (i, obj) {
                optionHtml += '<option value="' + obj.id + '" price="' + obj.price + '" specification="' + obj.specification + "*1 " + obj.unit + '" >' + obj.name + '</option>';
            });
            $('.drugSelect').html(optionHtml).trigger("chosen:updated").chosen({
                no_results_text: "没有找到结果！",
                search_contains: true,
                allow_single_deselect: true,
                disable_search: false,
                disable_search_threshold: 0, //当选项少等于于指定个数时禁用搜索。
                inherit_select_classes: true, //是否继承原下拉框的样式类，此处设为继承
                /*placeholder_text_single: '',*/ //单选选择框的默认提示信息，当选项为空时会显示。如果原下拉框设置了data-placeholder，会覆盖这里的值。
                max_shown_results: 100, //下拉框最大显示选项数量
                display_disabled_options: false,
                single_backstroke_delete: false, //false表示按两次删除键才能删除选项，true表示按一次删除键即可删除
                case_sensitive_search: false, //搜索大小写敏感。此处设为不敏感
                group_search: false, //选项组是否可搜。此处搜索不可搜
                include_group_label_in_selected: true //选中选项是否显示选项分组。false不显示，true显示。默认false。
            }).change(function () {
                drug = $(".drugSelect option:selected").text();
                drugId = $(".drugSelect option:selected").val();
                $("#specification").val($(".drugSelect option:selected").attr("specification"));
                $("#price").val($(".drugSelect option:selected").attr("price"));
            });
        }
    })
}


//获取当前医生下所有门诊队列患者
function refreshQueue() {
    let USER = JSON.parse(window.localStorage.getItem("SYS"));
    $.ajax({
        url: "/doctor/" + USER.id,
        type: "get",
        dataType: "json",
        success: function (data) {
            console.log(data.rows+"-=-");
            var html = '';
            $.each(data.rows, function (i, value) {
                html += '<tr class="alloutpatientqueue">';
                html += '<th>' + (i + 1) + '</th>';
                html += '<td>' + value.registeredNum + '</td>';
                html += '<td>' + value.name + '</td>';
                html += "<td>" + "<button class='btn btn-info mybutton' onclick='patientInfor(" +
                    "\"" + value.registeredNum + "\"," + value.registID + "," + value.patinetId + ")'>叫号</button>";
                if (-1 === value.register_status) {
                    //registerId需要加引号，需要用\"转义
                    html += "<td>" + "<button class='btn btn-info mybutton' onclick='restorePatientInfor(\"" + value.registerId + "\")'>恢复</button>"
                }
                html += ' </tr>'
            });
            $('#alloutpatientqueue').html(html)
        }
    });
}

function patientInfor(registeredNum, registerId, patinetID) {
    console.log(registeredNum);
    console.log(registerId);
    console.log(patinetID);
    registID = registerId;
    patientId = patinetID;
    $("#cardId").val(registeredNum);
}

var drugMethod = '';

$('.drugMethod').chosen({disable_search: true, allow_single_deselect: true,}).change(function () {

    drugMethod = $(".drugMethod option:selected").val();
});


var drugNum = '';

$('.drugNum').chosen({disable_search: true, allow_single_deselect: true,}).change(function () {

    drugNum = $(".drugNum option:selected").val();
});

/**
 * @return {boolean}
 */
function ProcessLater() {
    var name = $("#name").val();
    var cardId = $("#cardId").val();
    var prescriptionNum = $("#prescriptionNum").val();
    var queueId = $("#queueId").val();

    if (cardId == null || cardId === '') {
        swal("请先读取就诊卡！", "", "error");
        return false;
    }
    var MedicalRecordReqVO = {
        cardId: cardId,
        conditionDescription: $("#conditionDescr").val(),
        prescriptionNum: prescriptionNum,
        queueId: queueId
    };
    swal({
            title: "稍后处理只会保存病历主诉信息，门诊体检需患者提供处方号，请确认您的操作！",
            text: "<div id='printId'>姓名:<span style='color: #2C9FAF'>" + name + "</span>&emsp;卡号:<span style='color: #2C9FAF'>" + cardId + "</span>" +
                "<br>处方号:<span style='color: #2C9FAF'>" + prescriptionNum + "</span></div><a class='mybutton-print' href='#' onclick='printPrescriptionNum()'>打印</a>",
            html: true,
            type: "info",
            showCancelButton: true,
            closeOnConfirm: false,
            showLoaderOnConfirm: true

        }, function () {
            $.ajax({
                url: "/api/outpatientQueue/ProcessLaterMedicalRecord",
                type: "post",
                contentType: "application/json",
                data: JSON.stringify(MedicalRecordReqVO),
                success: function (data) {

                    if (data !== null && data.status == 1) {
                        setTimeout(function () {
                            swal({
                                title: "操作成功，如要恢复，请点击右侧栏进行操作",
                                type: "success",
                            }, function () {
                                setTimeout(function () {
                                    window.location.reload()
                                }, 500)
                            });
                        }, 1000)
                    } else {
                        swal(data.message, "", "error")
                    }
                }
            });


        }
    );
}

/**打印**/
function printPrescriptionNum() {

    Print('#printId', {
        onStart: function () {
            console.log('onStart', new Date())
        },
        onEnd: function () {
            console.log('onEnd', new Date())
        }
    })
}

function restorePatientInfor(registerId) {
    $.ajax({
        url: "/api/outpatientQueue/restorePatientInfor",
        type: "post",
        data: {
            "registerId": registerId
        },
        success: function (da) {
            let data = da.data
            if (da !== null && da.status == 1) {
                $("#cardId").val(data.cardId);
                $("#name").val(data.name);
                $("#sex").val(data.sex);
                $("#nationality").val(data.nationality);
                $("#age").val(data.age);
                $("#maritalStatus").val(data.maritalStatus);
                $("#career").val(data.career);
                $("#personalHistory").val(data.personalHistory);
                $("#pastHistory").val(data.pastHistory);
                $("#familyHistory").val(data.familyHistory);

                $("#prescriptionNum").val(data.prescriptionNum);
                $("#date").val(data.date);
                $("#department").val(data.department);

                $("#conditionDescr").val(data.conditionDescription);

                $("#queueId").val(data.queueId);

                refreshQueue();
            } else {
                swal(da.message, "", "error")
            }
        }
    })
}


function selectTemplate() {

    alert(drug)
}

/*处方药总价*/
var allPrice = 0;

function addDrugs() {
    var cardId = $("#cardId").val();
    var usage = $("#usage").val();
    var price = parseInt($("#price").val());
    var specification = $("#specification").val();
    // drugIds
    if (drug == null || drug === '') {
        swal("请先选择药品！", "", "error");
        return false;
    }
    if (usage == null || usage === '') {
        swal("请填写药品每次剂量！", "", "error");
        return false;
    }

    if (drugMethod == null || drugMethod === '') {
        swal("请选择药品服用方式！", "", "error");
        return false;
    }

    if (drugNum == null || drugNum === '') {
        swal("请选择药品每日服用次数！", "", "error");
        return false;
    }
    if (cardId == null || cardId === '') {
        swal("请先读取就诊卡！", "", "error");
        return false;
    }

    $("#drugs ol").append('<li>' + drug + '<span style="margin-left:100px">'
        + specification + '</span></li><div style="margin: 10px 0 10px 5px;">用法：<sapn>'
        + usage + '</sapn><sapn  style="margin-left:40px">' + drugMethod
        + '</sapn><sapn  style="margin-left:60px">' + drugNum + '</sapn></div>');
    if (drugId == '') {
        drugId = $(".drugSelect option:selected").val();
    }
    drugIds += drugId + ",";
    allPrice = allPrice + price;

}

function emptyDrugs() {
    drugIds = '';
    drugId = '';
    swal({
        title: "添加的药品将全部清空，请确认操作！",
        type: "info",
        showCancelButton: true,
        closeOnConfirm: true,
    }, function () {
        $("#drugs ol").empty();
        allPrice = 0;
    })

}

function addMedicalRecord() {
    var cardId = $("#cardId").val();
    var diagnosisResult = $("#diagnosisResult").val();
    var medicalOrder = $("#medicalOrder").val();
    var queueId = $("#queueId").val();

    if (cardId == null || cardId === '') {
        swal("请先读取就诊卡！", "", "error");
        return false;
    }
    if (drug == null || drug === '') {
        swal("请选择药品！", "", "error");
        return false;
    }
    if (diagnosisResult == null || diagnosisResult === '') {
        swal("请填写初步诊断！", "", "error");
        return false;
    }
    if (medicalOrder == null || medicalOrder === '') {
        swal("请填写医嘱！", "", "error");
        return false;
    }

    var MedicalRecordReqVO = {
        cardId: cardId,
        conditionDescription: $("#conditionDescr").val(),
        prescriptionNum: $("#prescriptionNum").val(),
        prescription: $("#drugs").html().trim(),
        medicalOrder: medicalOrder,
        money: allPrice,
        drugIds: drugIds,
        career: $("#career").val(),
        familyHistory: $("#familyHistory").val(),
        maritalStatus: $("#maritalStatus").val(),
        pastHistory: $("#pastHistory").val(),
        personalHistory: $("#personalHistory").val(),
        diagnosisResult: diagnosisResult,
    };
    swal({
        title: "请确认患者基本信息是否提交修改",
        type: "info",
        showCancelButton: true,
        closeOnConfirm: false,
        showLoaderOnConfirm: true
    }, function () {
        setTimeout(function () {
            $.ajax({
                url: "/patientOne",
                type: "post",
                data: {
                    cardId: cardId,
                    condition_description: $("#conditionDescr").val(),
                    prescription_num: $("#prescriptionNum").val(),
                    prescription: $("#drugs").html().trim(),
                    medical_order: medicalOrder,
                    money: allPrice,
                    drugIds: drugIds,
                    career: $("#career").val(),
                    familyHistory: $("#familyHistory").val(),
                    maritalStatus: $("#maritalStatus").val(),
                    pastHistory: $("#pastHistory").val(),
                    personalHistory: $("#personalHistory").val(),
                    diagnosis_result: diagnosisResult
                },
                success: function (data) {

                    if (data !== null && data.code === 0) {
                        swal({
                            title: "病历信息提交成功,本次就诊完成！",
                            type: "success",
                        }, function () {

                            window.location.reload()
                        });
                    } else {
                        swal(data.message, "", "error")
                    }
                }
            })

        }, 1000)
    })


}

/**获取体检信息**/
function getMedicalExamination() {

    var prescriptionNum = $("#prescriptionNum").val();

    $.ajax({
        url: "/medicalExamination/" + prescriptionNum,
        type: "get",
        success: function (da) {
            let data = da.data;
            if (da.msg != null) {
                $("#cardId").val(),
                    $("#bodyTemperature").val(data.body_temperature),
                    $("#pulse").val(data.pulse),
                    $("#heartRate").val(data.heart_rate),
                    $("#bloodPressure").val(data.blood_pressure),
                    $("#examinationCost").val(data.examination_cost)
            } else {
                swal(data.msg, "", "error")
            }
        }
    })
}