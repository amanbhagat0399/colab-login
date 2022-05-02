$(document).ready(function () {
    //   step 1 
    $('#ageCheck').hide();

    // step 2
    var ageCheck_err = true;


    // step 3
    $('#age').keyup(function () {
        age_check();
    })
    function age_check() {
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





    $('#sexCheck').hide();

    var sexCheck_err = true;

    $('#sex').keyup(function () {
        sex_check();
    })
    function sex_check() {
        var sex_val = $('#sex').val();

        if (sex_val == '') {
            $('#sexCheck').show();
            $('#sexCheck').html("* required");
            $('#sexCheck').focus();
            $('#sexCheck').css("color", "red");
            sexCheck_err = false;
            return false;


        }
        else if (sex_val > 1 || sex_val < 0) {
            $('#sexCheck').show();
            $('#sexCheck').html("* Value Can be 1 or 0");
            $('#sexCheck').focus();
            $('#sexCheck').css("color", "red");
            sexCheck_err = false;
            return false;


        }
        else {
            $('#sexCheck').hide();

        }
    }




    $('#cpCheck').hide();

    var cpCheck_err = true;

    $('#cp').keyup(function () {
        cp_check();
    })
    function cp_check() {
        var cp_val = $('#cp').val();

        if (cp_val == '') {
            $('#cpCheck').show();
            $('#cpCheck').html("* required");
            $('#cpCheck').focus();
            $('#cpCheck').css("color", "red");
            cpCheck_err = false;
            return false;


        }
        else if (cp_val > 3 || cp_val < 0) {
            $('#cpCheck').show();
            $('#cpCheck').html("* Value Can be 1, 2, 3 or 0");
            $('#cpCheck').focus();
            $('#cpCheck').css("color", "red");
            cpCheck_err = false;
            return false;


        }
        else {
            $('#cpCheck').hide();

        }
    }



    $('#trestbpsCheck').hide();

    var trestbpsCheck_err = true;

    $('#trestbps').keyup(function () {
        trestbps_check();
    })
    function trestbps_check() {
        var trestbps_val = $('#trestbps').val();

        if (trestbps_val == '') {
            $('#trestbpsCheck').show();
            $('#trestbpsCheck').html("* required");
            $('#trestbpsCheck').focus();
            $('#trestbpsCheck').css("color", "red");
            trestbpsCheck_err = false;
            return false;


        }
        else if (trestbps_val > 500 || trestbps_val < 80) {
            $('#trestbpsCheck').show();
            $('#trestbpsCheck').html("* Value error!");
            $('#trestbpsCheck').focus();
            $('#trestbpsCheck').css("color", "red");
            trestbpsCheck_err = false;
            return false;


        }
        else {
            $('#trestbpsCheck').hide();

        }
    }










    $('#cholCheck').hide();

    var cholCheck_err = true;

    $('#chol').keyup(function () {
        chol_check();
    })
    function chol_check() {
        var chol_val = $('#chol').val();

        if (chol_val == '') {
            $('#cholCheck').show();
            $('#cholCheck').html("* required");
            $('#cholCheck').focus();
            $('#cholCheck').css("color", "red");
            cholCheck_err = false;
            return false;


        }
        else if (chol_val < 80) {
            $('#cholCheck').show();
            $('#cholCheck').html("* Value error!");
            $('#cholCheck').focus();
            $('#cholCheck').css("color", "red");
            cholCheck_err = false;
            return false;


        }
        else {
            $('#cholCheck').hide();

        }
    }






    $('#fbsCheck').hide();

    var fbsCheck_err = true;

    $('#fbs').keyup(function () {
        fbs_check();
    })
    function fbs_check() {
        var fbs_val = $('#fbs').val();

        if (fbs_val == '') {
            $('#fbsCheck').show();
            $('#fbsCheck').html("* required");
            $('#fbsCheck').focus();
            $('#fbsCheck').css("color", "red");
            fbsCheck_err = false;
            return false;


        }
        else if (fbs_val > 1 || fbs_val < 0) {
            $('#fbsCheck').show();
            $('#fbsCheck').html("* Value can be 0 or 1");
            $('#fbsCheck').focus();
            $('#fbsCheck').css("color", "red");
            fbsCheck_err = false;
            return false;


        }
        else {
            $('#fbsCheck').hide();

        }
    }




    $('#restecgCheck').hide();

    var restecgCheck_err = true;

    $('#restecg').keyup(function () {
        restecg_check();
    })
    function restecg_check() {
        var restecg_val = $('#restecg').val();

        if (restecg_val == '') {
            $('#restecgCheck').show();
            $('#restecgCheck').html("* required");
            $('#restecgCheck').focus();
            $('#restecgCheck').css("color", "red");
            restecgCheck_err = false;
            return false;


        }
        else if (restecg_val > 2 || restecg_val < 0) {
            $('#restecgCheck').show();
            $('#restecgCheck').html("* Value can be 0, 1 or 2");
            $('#restecgCheck').focus();
            $('#restecgCheck').css("color", "red");
            restecgCheck_err = false;
            return false;


        }
        else {
            $('#restecgCheck').hide();

        }
    }











    $('#thalachCheck').hide();

    var thalachCheck_err = true;

    $('#thalach').keyup(function () {
        thalach_check();
    })
    function thalach_check() {
        var thalach_val = $('#thalach').val();

        if (thalach_val == '') {
            $('#thalachCheck').show();
            $('#thalachCheck').html("* required");
            $('#thalachCheck').focus();
            $('#thalachCheck').css("color", "red");
            thalachCheck_err = false;
            return false;


        }
        else if (thalach_val > 3000 || thalach_val < 10) {
            $('#thalachCheck').show();
            $('#thalachCheck').html("* Value error!");
            $('#thalachCheck').focus();
            $('#thalachCheck').css("color", "red");
            thalachCheck_err = false;
            return false;


        }
        else {
            $('#thalachCheck').hide();

        }
    }





    $('#exangCheck').hide();

    var exangCheck_err = true;

    $('#exang').keyup(function () {
        exang_check();
    })
    function exang_check() {
        var exang_val = $('#exang').val();

        if (exang_val == '') {
            $('#exangCheck').show();
            $('#exangCheck').html("* required");
            $('#exangCheck').focus();
            $('#exangCheck').css("color", "red");
            exangCheck_err = false;
            return false;


        }
        else if (exang_val > 1 || exang_val < 0) {
            $('#exangCheck').show();
            $('#exangCheck').html("* Value error!");
            $('#exangCheck').focus();
            $('#exangCheck').css("color", "red");
            exangCheck_err = false;
            return false;


        }
        else {
            $('#exangCheck').hide();

        }
    }



    $('#oldpeakCheck').hide();

    var oldpeakCheck_err = true;

    $('#oldpeak').keyup(function () {
        oldpeak_check();
    })
    function oldpeak_check() {
        var oldpeak_val = $('#oldpeak').val();

        if (oldpeak_val == '') {
            $('#oldpeakCheck').show();
            $('#oldpeakCheck').html("* required");
            $('#oldpeakCheck').focus();
            $('#oldpeakCheck').css("color", "red");
            oldpeakCheck_err = false;
            return false;


        }
        else if (oldpeak_val > 10 || oldpeak_val < 0) {
            $('#oldpeakCheck').show();
            $('#oldpeakCheck').html("* Value error!");
            $('#oldpeakCheck').focus();
            $('#oldpeakCheck').css("color", "red");
            oldpeakCheck_err = false;
            return false;


        }
        else {
            $('#oldpeakCheck').hide();

        }
    }




    $('#slopeCheck').hide();

    var slopeCheck_err = true;

    $('#slope').keyup(function () {
        slope_check();
    })
    function slope_check() {
        var slope_val = $('#slope').val();

        if (slope_val == '') {
            $('#slopeCheck').show();
            $('#slopeCheck').html("* required");
            $('#slopeCheck').focus();
            $('#slopeCheck').css("color", "red");
            slopeCheck_err = false;
            return false;


        }
        else if (slope_val > 3 || slope_val < 0) {
            $('#slopeCheck').show();
            $('#slopeCheck').html("* Value error!");
            $('#slopeCheck').focus();
            $('#slopeCheck').css("color", "red");
            slopeCheck_err = false;
            return false;


        }
        else {
            $('#slopeCheck').hide();

        }
    }






    $('#caCheck').hide();

    var caCheck_err = true;

    $('#ca').keyup(function () {
        ca_check();
    })
    function ca_check() {
        var ca_val = $('#ca').val();

        if (ca_val == '') {
            $('#caCheck').show();
            $('#caCheck').html("* required");
            $('#caCheck').focus();
            $('#caCheck').css("color", "red");
            caCheck_err = false;
            return false;


        }
        else if (ca_val > 3 || ca_val < 0) {
            $('#caCheck').show();
            $('#caCheck').html("* Value error!");
            $('#caCheck').focus();
            $('#caCheck').css("color", "red");
            caCheck_err = false;
            return false;


        }
        else {
            $('#caCheck').hide();

        }
    }





    $('#thalCheck').hide();

    var thalCheck_err = true;

    $('#thal').keyup(function () {
        thal_check();
    })
    function thal_check() {
        var thal_val = $('#thal').val();

        if (thal_val == '') {
            $('#thalCheck').show();
            $('#thalCheck').html("* required");
            $('#thalCheck').focus();
            $('#thalCheck').css("color", "red");
            thalCheck_err = false;
            return false;


        }
        else if (thal_val > 10 || thal_val < 0) {
            $('#thalCheck').show();
            $('#thalCheck').html("* Value error!");
            $('#thalCheck').focus();
            $('#thalCheck').css("color", "red");
            thalCheck_err = false;
            return false;


        }
        else {
            $('#thalCheck').hide();

        }
    }
















    // Submit or predict button

    $('#submitHeart').click(function () {

        ageCheck_err = true;
        sexCheck_err = true;
        cpCheck_err = true;
        trestbpsCheck_err = true;
        cholCheck_err = true;
        fbsCheck_err = true;
        restecgCheck_err = true;
        thalachCheck_err = true;
        exangCheck_err = true;
        oldpeakCheck_err = true;
        slopeCheck_err = true;
        caCheck_err = true;
        thalCheck_err = true;




        age_check();
        sex_check();
        cp_check();
        trestbps_check();
        chol_check();
        fbs_check();
        restecg_check();
        thalach_check();
        exang_check();
        oldpeak_check();
        slope_check();
        ca_check();
        thal_check();

        if (ageCheck_err == true &&
            sexCheck_err == true &&
            cpCheck_err == true &&
            trestbpsCheck_err == true &&
            cholCheck_err == true &&
            fbsCheck_err == true &&
            restecgCheck_err == true &&
            thalachCheck_err == true &&
            exangCheck_err == true &&
            oldpeakCheck_err == true &&
            slopeCheck_err == true &&
            caCheck_err == true &&
            thalCheck_err == true) {
            return true;
        }
        else {
            event.preventDefault();
        }
    })

});