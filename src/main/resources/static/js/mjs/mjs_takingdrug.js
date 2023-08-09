$(window).preloader();

Split(['#myprescription', '#takingDrugOperation'], {
    sizes: [65, 35],
    minSize: [800, 400]
});

function getMedicalRecord() {
    var prescription_num = $("#prescriptionNum_input").val();

    if (prescription_num == null || prescription_num === '') {
        swal("请填写处方号！", "", "error");
        return false;
    }

    $.ajax({
        url: "/medicalRecord/"+prescription_num,
        type: "get",
        success: function (da) {
            var data =da.data
            console.log(data);
            if (da !== null && da.code == 0) {
                $("#name").val(data.name);
                $("#sex").val(data.sex);
                $("#nationality").val(data.nationality);
                $("#age").val(data.age);
                $("#prescriptionNum").val(data.prescription_num);
                $("#createDate").val(data.create_datetime);
                $("#department").val(data.department);
                $("#diagnosisResult").val(data.diagnosis_result);
                $("#medicalOrder").html(data.medical_order);
                $("#drugCost").val(data.pay_price);
                $("#doctorName").val(data.doctor);
                $("#prescription").html(data.prescription);
                $("#examinationCost").val(data.price);
                $("#nowDate").html(data.nowDate);
            } else {
                swal(da.message, "", "error")
            }
        }
    })
}

function saveTakingDrugInfo() {

    var prescription_num = $("#prescriptionNum").val();
    var department = $("#department").val();
    if(department == null || department === ''){
        return false;
    }
    if (prescription_num == null || prescription_num === '') {
        swal("请先查询处方信息！", "", "error");
        return false;
    }

    $.ajax({
        url: "/medicalRecord",
        type: "get",
        data: {
            "prescription_num": prescription_num
        },
        success: function (data) {

            if (data !== null && data.code == 0) {
                swal({
                    title: "提交成功！",
                    type: "success",
                    showCancelButton: true,
                    closeOnConfirm: false,
                    showLoaderOnConfirm: true
                }, function () {
                    window.location.reload()
                })
            } else {
                swal(data.message, "", "error")
            }
        }

    })
}