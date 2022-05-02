$(document).ready(function () {
    //step 1 
    $('#pregnanciesCheck').hide();






    // step 2
    var pregnanciesCheck_err = true;


    // step 3
    $('#pregnancies').keyup(function () {
        pregnancies_check();
    })
    function pregnancies_check() {
        var pregnancies_val = $('#pregnancies').val();
        if (pregnancies_val == '') {
            $('#pregnanciesCheck').show();
            $('#pregnanciesCheck').html("* required");
            $('#pregnanciesCheck').focus();
            $('#pregnanciesCheck').css("color", "red");
            pregnanciesCheck_err = false;
            return false;
        }
        else if (pregnancies_val > 50 || pregnancies_val < 0) {
            $('#pregnanciesCheck').show();
            $('#pregnanciesCheck').html("* Value error!");
            $('#pregnanciesCheck').focus();
            $('#pregnanciesCheck').css("color", "red");
            pregnanciesCheck_err = false;
            return false;
        }
        else {
            $('#pregnanciesCheck').hide();

        }
    }




    $('#glucoseCheck').hide();

    var glucoseCheck_err = true;



    $('#glucose').keyup(function () {
        glucose_Check();
    })
    function glucose_Check() {
        var glucose_val = $('#glucose').val();
        if (glucose_val == '') {
            $('#glucoseCheck').show();
            $('#glucoseCheck').html("* required");
            $('#glucoseCheck').focus();
            $('#glucoseCheck').css("color", "red");
            glucoseCheck_err = false;
            return false;
        }
        else if (glucoseCheck_err > 1000 || glucoseCheck_err < 0) {
            $('#glucoseCheck').show();
            $('#glucoseCheck').html("* Value error!");
            $('#glucoseCheck').focus();
            $('#glucoseCheck').css("color", "red");
            glucoseCheck_err = false;
            return false;
        }
        else {
            $('#glucoseCheck').hide();

        }
    }












    $('bloodpressureCheck').hide();

    var bloodpressureCheck_err = true;



    $('#bloodpressure').keyup(function () {
        bloodpressure_check();
    })
    function bloodpressure_check() {
        var bloodpressure_val = $('#bloodpressure').val();
        if (bloodpressure_val == '') {
            $('#bloodpressureCheck').show();
            $('#bloodpressureCheck').html("* required");
            $('#bloodpressureCheck').focus();
            $('#bloodpressureCheck').css("color", "red");
            bloodpressureCheck_err = false;
            return false;
        }
        else if (bloodpressure_val > 500 || bloodpressure_val < 0) {
            $('#bloodpressureCheck').show();
            $('#bloodpressureCheck').html("* Value error!");
            $('#bloodpressureCheck').focus();
            $('#bloodpressureCheck').css("color", "red");
            bloodpressureCheck_err = false;
            return false;
        }
        else {
            $('#bloodpressureCheck').hide();

        }
    }













    $('skinthicknessCheck').hide();

    var skinthicknessCheck_err = true;



    $('#skinthickness').keyup(function () {
        skinthickness_Check();
    })
    function skinthickness_Check() {
        var skinthickness_val = $('#skinthickness').val();
        if (skinthickness_val == '') {
            $('#skinthicknessCheck').show();
            $('#skinthicknessCheck').html("* required");
            $('#skinthicknessCheck').focus();
            $('#skinthicknessCheck').css("color", "red");
            skinthicknessCheck_err = false;
            return false;
        }
        else if (skinthickness_val > 200 || skinthickness_val < 0) {
            $('#skinthicknessCheck').show();
            $('#skinthicknessCheck').html("* Value error!");
            $('#skinthicknessCheck').focus();
            $('#skinthicknessCheck').css("color", "red");
            skinthicknessCheck_err = false;
            return false;
        }
        else {
            $('#skinthicknessCheck').hide();

        }
    }









    $('insulinCheck').hide();

    var insulinCheck_err = true;



    $('#insulin').keyup(function () {
        insulin_Check();
    })
    function insulin_Check() {
        var insulin_val = $('#insulin').val();
        if (insulin_val == '') {
            $('#insulinCheck').show();
            $('#insulinCheck').html("* required");
            $('#insulinCheck').focus();
            $('#insulinCheck').css("color", "red");
            insulinCheck_err = false;
            return false;
        }
        else {
            $('#insulinCheck').hide();

        }
    }


















    $('#bmiCheck').hide();

    var bmiCheck_err = true;



    $('#bmi').keyup(function () {
        bmi_Check();
    })
    function bmi_Check() {
        var bmi_val = $('#bmi').val();
        if (bmi_val == '') {
            $('#bmiCheck').show();
            $('#bmiCheck').html("* required");
            $('#bmiCheck').focus();
            $('#bmiCheck').css("color", "red");
            bmiCheck_err = false;
            return false;
        }
        else if (bmi_val > 200 || bmi_val < 0) {
            $('#bmiCheck').show();
            $('#bmiCheck').html("* Value error!");
            $('#bmiCheck').focus();
            $('#bmiCheck').css("color", "red");
            bmiCheck_err = false;
            return false;
        }
        else {
            $('#bmiCheck').hide();

        }
    }



















    $('#dpfCheck').hide();

    var dpfCheck_err = true;


    $('#dpf').keyup(function () {
        dpf_Check();
    })
    function dpf_Check() {
        var dpf_val = $('#dpf').val();
        if (dpf_val == '') {
            $('#dpfCheck').show();
            $('#dpfCheck').html("* required");
            $('#dpfCheck').focus();
            $('#dpfCheck').css("color", "red");
            dpfCheck_err = false;
            return false;
        }
        else if (dpf_val > 3 || dpf_val < 0) {
            $('#dpfCheck').show();
            $('#dpfCheck').html("* Value error!");
            $('#dpfCheck').focus();
            $('#dpfCheck').css("color", "red");
            dpfCheck_err = false;
            return false;
        }
        else {
            $('#dpfCheck').hide();

        }
    }






    $('#ageCheck').hide();

    var ageCheck_err = true;



    $('#age').keyup(function () {
        age_Check();
    })
    function age_Check() {
        var age_val = $('#age').val();
        if (age_val == '' || age_val <= 0) {
            $('#ageCheck').show();
            $('#ageCheck').html("* required");
            $('#ageCheck').focus();
            $('#ageCheck').css("color", "red");
            ageCheck_err = false;
            return false;


        }
        else {
            $('#ageCheck').hide();

        }
    }





    $('#submitDiabetes').click(function () {
        ageCheck_err = true;
        dpfCheck_err = true;
        bmiCheck_err = true;
        insulinCheck_err = true;
        skinthicknessCheck_err = true;
        bloodpressureCheck_err = true;
        glucoseCheck_err = true;
        pregnanciesCheck_err = true;



        insulin_Check();
        bmi_Check();
        skinthickness_Check();
        dpf_Check();
        pregnancies_check();
        glucose_Check();
        bloodpressure_check();
        age_Check();

        if (ageCheck_err == true &&
            dpfCheck_err == true &&
            bmiCheck_err == true &&
            insulinCheck_err == true &&
            skinthicknessCheck_err == true &&
            bloodpressureCheck_err == true &&
            glucoseCheck_err == true &&
            pregnanciesCheck_err == true) {
            return true;
        }
        else {
            event.preventDefault();
        }
    })
});
