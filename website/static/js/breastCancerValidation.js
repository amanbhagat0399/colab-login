$(document).ready(function () {

    //step 1 
    $('#radius_meanCheck').hide();

    // step 2
    var radius_meanCheck_err = true;


    // step 3
    $('#radius_mean').keyup(function () {
        radius_mean_check();
    })
    function radius_mean_check() {
        var radius_mean_val = $('#radius_mean').val();
        if (radius_mean_val == '') {
            $('#radius_meanCheck').show();
            $('#radius_meanCheck').html("* required");
            $('#radius_meanCheck').focus();
            $('#radius_meanCheck').css("color", "red");
            radius_meanCheck_err = false;
            return false;
        }
        else if (radius_mean_val > 80 || radius_mean_val < 1) {
            $('#radius_meanCheck').show();
            $('#radius_meanCheck').html("* Value error!");
            $('#radius_meanCheck').focus();
            $('#radius_meanCheck').css("color", "red");
            radius_meanCheck_err = false;
            return false;
        }
        else {
            $('#radius_meanCheck').hide();

        }
    }








    $('#texture_meanCheck').hide();

    // step 2
    var texture_meanCheck_err = true;


    // step 3
    $('#texture_mean').keyup(function () {
        texture_mean_check();
    })
    function texture_mean_check() {
        var texture_mean_val = $('#texture_mean').val();
        if (texture_mean_val == '') {
            $('#texture_meanCheck').show();
            $('#texture_meanCheck').html("* required");
            $('#texture_meanCheck').focus();
            $('#texture_meanCheck').css("color", "red");
            texture_meanCheck_err = false;
            return false;
        }
        else if (texture_mean_val < 1) {
            $('#texture_meanCheck').show();
            $('#texture_meanCheck').html("* Value error!");
            $('#texture_meanCheck').focus();
            $('#texture_meanCheck').css("color", "red");
            texture_meanCheck_err = false;
            return false;
        }
        else {
            $('#texture_meanCheck').hide();
        }
    }













    $('#perimeter_meanCheck').hide();

    // step 2
    var perimeter_meanCheck_err = true;


    // step 3
    $('#perimeter_mean').keyup(function () {
        perimeter_mean_check();
    })
    function perimeter_mean_check() {
        var perimeter_mean_val = $('#perimeter_mean').val();
        if (perimeter_mean_val == '') {
            $('#perimeter_meanCheck').show();
            $('#perimeter_meanCheck').html("* required");
            $('#perimeter_meanCheck').focus();
            $('#perimeter_meanCheck').css("color", "red");
            perimeter_meanCheck_err = false;
            return false;
        }
        else if (perimeter_mean_val < 1) {
            $('#perimeter_meanCheck').show();
            $('#perimeter_meanCheck').html("* Value error!");
            $('#perimeter_meanCheck').focus();
            $('#perimeter_meanCheck').css("color", "red");
            perimeter_meanCheck_err = false;
            return false;
        }
        else {
            $('#perimeter_meanCheck').hide();

        }
    }














    $('#area_meanCheck').hide();

    // step 2
    var area_meanCheck_err = true;


    // step 3
    $('#area_mean').keyup(function () {
        area_mean_check();
    })
    function area_mean_check() {
        var area_mean_val = $('#area_mean').val();
        if (area_mean_val == '') {
            $('#area_meanCheck').show();
            $('#area_meanCheck').html("* required");
            $('#area_meanCheck').focus();
            $('#area_meanCheck').css("color", "red");
            area_meanCheck_err = false;
            return false;
        }
        else if (area_mean_val < 1) {
            $('#area_meanCheck').show();
            $('#area_meanCheck').html("* Value error!");
            $('#area_meanCheck').focus();
            $('#area_meanCheck').css("color", "red");
            area_meanCheck_err = false;
            return false;
        }
        else {
            $('#area_meanCheck').hide();

        }
    }














    $('#smoothness_meanCheck').hide();

    // step 2
    var smoothness_meanCheck_err = true;


    // step 3
    $('#smoothness_mean').keyup(function () {
        smoothness_mean_check();
    })
    function smoothness_mean_check() {
        var smoothness_mean_val = $('#smoothness_mean').val();
        if (smoothness_mean_val == '') {
            $('#smoothness_meanCheck').show();
            $('#smoothness_meanCheck').html("* required");
            $('#smoothness_meanCheck').focus();
            $('#smoothness_meanCheck').css("color", "red");
            smoothness_meanCheck_err = false;
            return false;
        }
        else if (smoothness_mean_val < 1) {
            $('#smoothness_meanCheck').show();
            $('#smoothness_meanCheck').html("* Value error!");
            $('#smoothness_meanCheck').focus();
            $('#smoothness_meanCheck').css("color", "red");
            smoothness_meanCheck_err = false;
            return false;
        }
        else {
            $('#smoothness_meanCheck').hide();

        }
    }





















    $('#compactness_meanCheck').hide();

    // step 2
    var compactness_meanCheck_err = true;


    // step 3
    $('#compactness_mean').keyup(function () {
        compactness_mean_check();
    })
    function compactness_mean_check() {
        var compactness_mean_val = $('#compactness_mean').val();
        if (compactness_mean_val == '') {
            $('#compactness_meanCheck').show();
            $('#compactness_meanCheck').html("* required");
            $('#compactness_meanCheck').focus();
            $('#compactness_meanCheck').css("color", "red");
            compactness_meanCheck_err = false;
            return false;
        }
        else if (compactness_mean_val < 1) {
            $('#compactness_meanCheck').show();
            $('#compactness_meanCheck').html("* Value error!");
            $('#compactness_meanCheck').focus();
            $('#compactness_meanCheck').css("color", "red");
            compactness_meanCheck_err = false;
            return false;
        }
        else {
            $('#compactness_meanCheck').hide();

        }
    }















    $('#concavity_meanCheck').hide();

    // step 2
    var concavity_meanCheck_err = true;


    // step 3
    $('#concavity_mean').keyup(function () {
        concavity_mean_check();
    })
    function concavity_mean_check() {
        var concavity_mean_val = $('#concavity_mean').val();
        if (concavity_mean_val == '') {
            $('#concavity_meanCheck').show();
            $('#concavity_meanCheck').html("* required");
            $('#concavity_meanCheck').focus();
            $('#concavity_meanCheck').css("color", "red");
            concavity_meanCheck_err = false;
            return false;
        }
        else if (concavity_mean_val < 1) {
            $('#concavity_meanCheck').show();
            $('#concavity_meanCheck').html("* Value error!");
            $('#concavity_meanCheck').focus();
            $('#concavity_meanCheck').css("color", "red");
            concavity_meanCheck_err = false;
            return false;
        }
        else {
            $('#concavity_meanCheck').hide();

        }
    }












    $('#concave_points_meanCheck').hide();

    // step 2
    var concave_points_meanCheck_err = true;


    // step 3
    $('#concave_points_mean').keyup(function () {
        concave_points_mean_check();
    })
    function concave_points_mean_check() {
        var concave_points_mean_val = $('#concave_points_mean').val();
        if (concave_points_mean_val == '') {
            $('#concave_points_meanCheck').show();
            $('#concave_points_meanCheck').html("* required");
            $('#concave_points_meanCheck').focus();
            $('#concave_points_meanCheck').css("color", "red");
            concave_points_meanCheck_err = false;
            return false;
        }
        else if (concave_points_mean_val < 1) {
            $('#concave_points_meanCheck').show();
            $('#concave_points_meanCheck').html("* Value error!");
            $('#concave_points_meanCheck').focus();
            $('#concave_points_meanCheck').css("color", "red");
            concave_points_meanCheck_err = false;
            return false;
        }
        else {
            $('#concave_points_meanCheck').hide();

        }
    }
















    $('#symmetry_meanCheck').hide();

    // step 2
    var symmetry_meanCheck_err = true;


    // step 3
    $('#symmetry_mean').keyup(function () {
        symmetry_mean_check();
    })
    function symmetry_mean_check() {
        var symmetry_mean_val = $('#symmetry_mean').val();
        if (symmetry_mean_val == '') {
            $('#symmetry_meanCheck').show();
            $('#symmetry_meanCheck').html("* required");
            $('#symmetry_meanCheck').focus();
            $('#symmetry_meanCheck').css("color", "red");
            symmetry_meanCheck_err = false;
            return false;
        }
        else if (symmetry_mean_val < 1) {
            $('#symmetry_meanCheck').show();
            $('#symmetry_meanCheck').html("* Value error!");
            $('#symmetry_meanCheck').focus();
            $('#symmetry_meanCheck').css("color", "red");
            symmetry_meanCheck_err = false;
            return false;
        }
        else {
            $('#symmetry_meanCheck').hide();

        }
    }















    $('#mean_fractal_dimensionCheck').hide();

    // step 2
    var mean_fractal_dimensionCheck_err = true;


    // step 3
    $('#mean_fractal_dimension').keyup(function () {
        mean_fractal_dimension_check();
    })
    function mean_fractal_dimension_check() {
        var mean_fractal_dimension_val = $('#mean_fractal_dimension').val();
        if (mean_fractal_dimension_val == '') {
            $('#mean_fractal_dimensionCheck').show();
            $('#mean_fractal_dimensionCheck').html("* required");
            $('#mean_fractal_dimensionCheck').focus();
            $('#mean_fractal_dimensionCheck').css("color", "red");
            mean_fractal_dimensionCheck_err = false;
            return false;
        }
        else if (mean_fractal_dimension_val < 1) {
            $('#mean_fractal_dimensionCheck').show();
            $('#mean_fractal_dimensionCheck').html("* Value error!");
            $('#mean_fractal_dimensionCheck').focus();
            $('#mean_fractal_dimensionCheck').css("color", "red");
            mean_fractal_dimensionCheck_err = false;
            return false;
        }
        else {
            $('#mean_fractal_dimensionCheck').hide();

        }
    }

















    $('#radius_errorCheck').hide();

    // step 2
    var radius_errorCheck_err = true;


    // step 3
    $('#radius_error').keyup(function () {
        radius_error_check();
    })
    function radius_error_check() {
        var radius_error_val = $('#radius_error').val();
        if (radius_error_val == '') {
            $('#radius_errorCheck').show();
            $('#radius_errorCheck').html("* required");
            $('#radius_errorCheck').focus();
            $('#radius_errorCheck').css("color", "red");
            radius_errorCheck_err = false;
            return false;
        }
        else if (radius_error_val < 1) {
            $('#radius_errorCheck').show();
            $('#radius_errorCheck').html("* Value error!");
            $('#radius_errorCheck').focus();
            $('#radius_errorCheck').css("color", "red");
            radius_errorCheck_err = false;
            return false;
        }
        else {
            $('#radius_errorCheck').hide();

        }
    }






















    $('#texture_errorCheck').hide();

    // step 2
    var texture_errorCheck_err = true;


    // step 3
    $('#texture_error').keyup(function () {
        texture_error_check();
    })
    function texture_error_check() {
        var texture_error_val = $('#texture_error').val();
        if (texture_error_val == '') {
            $('#texture_errorCheck').show();
            $('#texture_errorCheck').html("* required");
            $('#texture_errorCheck').focus();
            $('#texture_errorCheck').css("color", "red");
            texture_errorCheck_err = false;
            return false;
        }
        else if (texture_error_val < 1) {
            $('#texture_errorCheck').show();
            $('#texture_errorCheck').html("* Value error!");
            $('#texture_errorCheck').focus();
            $('#texture_errorCheck').css("color", "red");
            texture_errorCheck_err = false;
            return false;
        }
        else {
            $('#texture_errorCheck').hide();

        }
    }














    $('#perimeter_errorCheck').hide();

    // step 2
    var perimeter_errorCheck_err = true;


    // step 3
    $('#perimeter_error').keyup(function () {
        perimeter_error_check();
    })
    function perimeter_error_check() {
        var perimeter_error_val = $('#perimeter_error').val();
        if (perimeter_error_val == '') {
            $('#perimeter_errorCheck').show();
            $('#perimeter_errorCheck').html("* required");
            $('#perimeter_errorCheck').focus();
            $('#perimeter_errorCheck').css("color", "red");
            perimeter_errorCheck_err = false;
            return false;
        }
        else if (perimeter_error_val < 1) {
            $('#perimeter_errorCheck').show();
            $('#perimeter_errorCheck').html("* Value error!");
            $('#perimeter_errorCheck').focus();
            $('#perimeter_errorCheck').css("color", "red");
            perimeter_errorCheck_err = false;
            return false;
        }
        else {
            $('#perimeter_errorCheck').hide();

        }
    }
















    $('#area_errorCheck').hide();

    // step 2
    var area_errorCheck_err = true;


    // step 3
    $('#area_error').keyup(function () {
        area_error_check();
    })
    function area_error_check() {
        var area_error_val = $('#area_error').val();
        if (area_error_val == '') {
            $('#area_errorCheck').show();
            $('#area_errorCheck').html("* required");
            $('#area_errorCheck').focus();
            $('#area_errorCheck').css("color", "red");
            area_errorCheck_err = false;
            return false;
        }
        else if (area_error_val < 1) {
            $('#area_errorCheck').show();
            $('#area_errorCheck').html("* Value error!");
            $('#area_errorCheck').focus();
            $('#area_errorCheck').css("color", "red");
            area_errorCheck_err = false;
            return false;
        }
        else {
            $('#area_errorCheck').hide();

        }
    }
















    $('#smoothness_errorCheck').hide();

    // step 2
    var smoothness_errorCheck_err = true;


    // step 3
    $('#smoothness_error').keyup(function () {
        smoothness_error_check();
    })
    function smoothness_error_check() {
        var smoothness_error_val = $('#smoothness_error').val();
        if (smoothness_error_val == '') {
            $('#smoothness_errorCheck').show();
            $('#smoothness_errorCheck').html("* required");
            $('#smoothness_errorCheck').focus();
            $('#smoothness_errorCheck').css("color", "red");
            smoothness_errorCheck_err = false;
            return false;
        }
        else if (smoothness_error_val < 1) {
            $('#smoothness_errorCheck').show();
            $('#smoothness_errorCheck').html("* Value error!");
            $('#smoothness_errorCheck').focus();
            $('#smoothness_errorCheck').css("color", "red");
            smoothness_errorCheck_err = false;
            return false;
        }
        else {
            $('#smoothness_errorCheck').hide();

        }
    }
















    $('#compactness_errorCheck').hide();

    // step 2
    var compactness_errorCheck_err = true;


    // step 3
    $('#compactness_error').keyup(function () {
        compactness_error_check();
    })
    function compactness_error_check() {
        var compactness_error_val = $('#compactness_error').val();
        if (compactness_error_val == '') {
            $('#compactness_errorCheck').show();
            $('#compactness_errorCheck').html("* required");
            $('#compactness_errorCheck').focus();
            $('#compactness_errorCheck').css("color", "red");
            compactness_errorCheck_err = false;
            return false;
        }
        else if (compactness_error_val < 1) {
            $('#compactness_errorCheck').show();
            $('#compactness_errorCheck').html("* Value error!");
            $('#compactness_errorCheck').focus();
            $('#compactness_errorCheck').css("color", "red");
            compactness_errorCheck_err = false;
            return false;
        }
        else {
            $('#compactness_errorCheck').hide();

        }
    }

























    $('#concavity_errorCheck').hide();

    // step 2
    var concavity_errorCheck_err = true;


    // step 3
    $('#concavity_error').keyup(function () {
        concavity_error_check();
    })
    function concavity_error_check() {
        var concavity_error_val = $('#concavity_error').val();
        if (concavity_error_val == '') {
            $('#concavity_errorCheck').show();
            $('#concavity_errorCheck').html("* required");
            $('#concavity_errorCheck').focus();
            $('#concavity_errorCheck').css("color", "red");
            concavity_errorCheck_err = false;
            return false;
        }
        else if (concavity_error_val < 1) {
            $('#concavity_errorCheck').show();
            $('#concavity_errorCheck').html("* Value error!");
            $('#concavity_errorCheck').focus();
            $('#concavity_errorCheck').css("color", "red");
            concavity_errorCheck_err = false;
            return false;
        }
        else {
            $('#concavity_errorCheck').hide();

        }
    }
















    $('#concave_point_errorCheck').hide();

    // step 2
    var concave_point_errorCheck_err = true;


    // step 3
    $('#concave_point_error').keyup(function () {
        concave_point_error_check();
    })
    function concave_point_error_check() {
        var concave_point_error_val = $('#concave_point_error').val();
        if (concave_point_error_val == '') {
            $('#concave_point_errorCheck').show();
            $('#concave_point_errorCheck').html("* required");
            $('#concave_point_errorCheck').focus();
            $('#concave_point_errorCheck').css("color", "red");
            concave_point_errorCheck_err = false;
            return false;
        }
        else if (concave_point_error_val < 1) {
            $('#concave_point_errorCheck').show();
            $('#concave_point_errorCheck').html("* Value error!");
            $('#concave_point_errorCheck').focus();
            $('#concave_point_errorCheck').css("color", "red");
            concave_point_errorCheck_err = false;
            return false;
        }
        else {
            $('#concave_point_errorCheck').hide();

        }

    }












    $('#symmetry_errorCheck').hide();

    // step 2
    var symmetry_errorCheck_err = true;


    // step 3
    $('#symmetry_error').keyup(function () {
        symmetry_error_check();
    })
    function symmetry_error_check() {
        var symmetry_error_val = $('#symmetry_error').val();
        if (symmetry_error_val == '') {
            $('#symmetry_errorCheck').show();
            $('#symmetry_errorCheck').html("* required");
            $('#symmetry_errorCheck').focus();
            $('#symmetry_errorCheck').css("color", "red");
            symmetry_errorCheck_err = false;
            return false;
        }
        else if (symmetry_error_val < 1) {
            $('#symmetry_errorCheck').show();
            $('#symmetry_errorCheck').html("* Value error!");
            $('#symmetry_errorCheck').focus();
            $('#symmetry_errorCheck').css("color", "red");
            symmetry_errorCheck_err = false;
            return false;
        }
        else {
            $('#symmetry_errorCheck').hide();

        }
    }











    $('#fractal_dimension_errorCheck').hide();

    // step 2
    var fractal_dimension_errorCheck_err = true;


    // step 3
    $('#fractal_dimension_error').keyup(function () {
        fractal_dimension_error_check();
    })
    function fractal_dimension_error_check() {
        var fractal_dimension_error_val = $('#fractal_dimension_error').val();
        if (fractal_dimension_error_val == '') {
            $('#fractal_dimension_errorCheck').show();
            $('#fractal_dimension_errorCheck').html("* required");
            $('#fractal_dimension_errorCheck').focus();
            $('#fractal_dimension_errorCheck').css("color", "red");
            fractal_dimension_errorCheck_err = false;
            return false;
        }
        else if (fractal_dimension_error_val < 1) {
            $('#fractal_dimension_errorCheck').show();
            $('#fractal_dimension_errorCheck').html("* Value error!");
            $('#fractal_dimension_errorCheck').focus();
            $('#fractal_dimension_errorCheck').css("color", "red");
            fractal_dimension_errorCheck_err = false;
            return false;
        }
        else {
            $('#fractal_dimension_errorCheck').hide();

        }
    }















    $('#worst_radiusCheck').hide();

    // step 2
    var worst_radiusCheck_err = true;


    // step 3
    $('#worst_radius').keyup(function () {
        worst_radius_check();
    })
    function worst_radius_check() {
        var worst_radius_val = $('#worst_radius').val();
        if (worst_radius_val == '') {
            $('#worst_radiusCheck').show();
            $('#worst_radiusCheck').html("* required");
            $('#worst_radiusCheck').focus();
            $('#worst_radiusCheck').css("color", "red");
            worst_radiusCheck_err = false;
            return false;
        }
        else if (worst_radius_val < 1) {
            $('#worst_radiusCheck').show();
            $('#worst_radiusCheck').html("* Value error!");
            $('#worst_radiusCheck').focus();
            $('#worst_radiusCheck').css("color", "red");
            worst_radiusCheck_err = false;
            return false;
        }
        else {
            $('#worst_radiusCheck').hide();

        }
    }

























    $('#worst_textureCheck').hide();

    // step 2
    var worst_textureCheck_err = true;


    // step 3
    $('#worst_texture').keyup(function () {
        worst_texture_check();
    })
    function worst_texture_check() {
        var worst_texture_val = $('#worst_texture').val();
        if (worst_texture_val == '') {
            $('#worst_textureCheck').show();
            $('#worst_textureCheck').html("* required");
            $('#worst_textureCheck').focus();
            $('#worst_textureCheck').css("color", "red");
            worst_textureCheck_err = false;
            return false;
        }
        else if (worst_texture_val < 1) {
            $('#worst_textureCheck').show();
            $('#worst_textureCheck').html("* Value error!");
            $('#worst_textureCheck').focus();
            $('#worst_textureCheck').css("color", "red");
            worst_textureCheck_err = false;
            return false;
        }
        else {
            $('#worst_textureCheck').hide();

        }
    }










    $('#worst_perimeterCheck').hide();

    // step 2
    var worst_perimeterCheck_err = true;


    // step 3
    $('#worst_perimeter').keyup(function () {
        worst_perimeter_check();
    })
    function worst_perimeter_check() {
        var worst_perimeter_val = $('#worst_perimeter').val();
        if (worst_perimeter_val == '') {
            $('#worst_perimeterCheck').show();
            $('#worst_perimeterCheck').html("* required");
            $('#worst_perimeterCheck').focus();
            $('#worst_perimeterCheck').css("color", "red");
            worst_perimeterCheck_err = false;
            return false;
        }
        else if (worst_perimeter_val < 1) {
            $('#worst_perimeterCheck').show();
            $('#worst_perimeterCheck').html("* Value error!");
            $('#worst_perimeterCheck').focus();
            $('#worst_perimeterCheck').css("color", "red");
            worst_perimeterCheck_err = false;
            return false;
        }
        else {
            $('#worst_perimeterCheck').hide();

        }
    }

















    $('#worst_areaCheck').hide();

    // step 2
    var worst_areaCheck_err = true;


    // step 3
    $('#worst_area').keyup(function () {
        worst_area_check();
    })
    function worst_area_check() {
        var worst_area_val = $('#worst_area').val();
        if (worst_area_val == '') {
            $('#worst_areaCheck').show();
            $('#worst_areaCheck').html("* required");
            $('#worst_areaCheck').focus();
            $('#worst_areaCheck').css("color", "red");
            worst_areaCheck_err = false;
            return false;
        }
        else if (worst_area_val < 1) {
            $('#worst_areaCheck').show();
            $('#worst_areaCheck').html("* Value error!");
            $('#worst_areaCheck').focus();
            $('#worst_areaCheck').css("color", "red");
            worst_areaCheck_err = false;
            return false;
        }
        else {
            $('#worst_areaCheck').hide();

        }
    }













    $('#worst_smoothnessCheck').hide();

    // step 2
    var worst_smoothnessCheck_err = true;


    // step 3
    $('#worst_smoothness').keyup(function () {
        worst_smoothness_check();
    })
    function worst_smoothness_check() {
        var worst_smoothness_val = $('#worst_smoothness').val();
        if (worst_smoothness_val == '') {
            $('#worst_smoothnessCheck').show();
            $('#worst_smoothnessCheck').html("* required");
            $('#worst_smoothnessCheck').focus();
            $('#worst_smoothnessCheck').css("color", "red");
            worst_smoothnessCheck_err = false;
            return false;
        }
        else if (worst_smoothness_val < 1) {
            $('#worst_smoothnessCheck').show();
            $('#worst_smoothnessCheck').html("* Value error!");
            $('#worst_smoothnessCheck').focus();
            $('#worst_smoothnessCheck').css("color", "red");
            worst_smoothnessCheck_err = false;
            return false;
        }
        else {
            $('#worst_smoothnessCheck').hide();

        }
    }















    $('#worst_compactnessCheck').hide();

    // step 2
    var worst_compactnessCheck_err = true;


    // step 3
    $('#worst_compactness').keyup(function () {
        worst_compactness_check();
    })
    function worst_compactness_check() {
        var worst_compactness_val = $('#worst_compactness').val();
        if (worst_compactness_val == '') {
            $('#worst_compactnessCheck').show();
            $('#worst_compactnessCheck').html("* required");
            $('#worst_compactnessCheck').focus();
            $('#worst_compactnessCheck').css("color", "red");
            worst_compactnessCheck_err = false;
            return false;
        }
        else if (worst_compactness_val < 1) {
            $('#worst_compactnessCheck').show();
            $('#worst_compactnessCheck').html("* Value error!");
            $('#worst_compactnessCheck').focus();
            $('#worst_compactnessCheck').css("color", "red");
            worst_compactnessCheck_err = false;
            return false;
        }
        else {
            $('#worst_compactnessCheck').hide();

        }
    }













    $('#worst_concavityCheck').hide();

    // step 2
    var worst_concavityCheck_err = true;


    // step 3
    $('#worst_concavity').keyup(function () {
        worst_concavity_check();
    })
    function worst_concavity_check() {
        var worst_concavity_val = $('#worst_concavity').val();
        if (worst_concavity_val == '') {
            $('#worst_concavityCheck').show();
            $('#worst_concavityCheck').html("* required");
            $('#worst_concavityCheck').focus();
            $('#worst_concavityCheck').css("color", "red");
            worst_concavityCheck_err = false;
            return false;
        }
        else if (worst_concavity_val < 1) {
            $('#worst_concavityCheck').show();
            $('#worst_concavityCheck').html("* Value error!");
            $('#worst_concavityCheck').focus();
            $('#worst_concavityCheck').css("color", "red");
            worst_concavityCheck_err = false;
            return false;
        }
        else {
            $('#worst_concavityCheck').hide();

        }
    }






















    $('#worst_concave_pointsCheck').hide();

    // step 2
    var worst_concave_pointsCheck_err = true;


    // step 3
    $('#worst_concave_points').keyup(function () {
        worst_concave_points_check();
    })
    function worst_concave_points_check() {
        var worst_concave_points_val = $('#worst_concave_points').val();
        if (worst_concave_points_val == '') {
            $('#worst_concave_pointsCheck').show();
            $('#worst_concave_pointsCheck').html("* required");
            $('#worst_concave_pointsCheck').focus();
            $('#worst_concave_pointsCheck').css("color", "red");
            worst_concave_pointsCheck_err = false;
            return false;
        }
        else if (worst_concave_points_val < 1) {
            $('#worst_concave_pointsCheck').show();
            $('#worst_concave_pointsCheck').html("* Value error!");
            $('#worst_concave_pointsCheck').focus();
            $('#worst_concave_pointsCheck').css("color", "red");
            worst_concave_pointsCheck_err = false;
            return false;
        }
        else {
            $('#worst_concave_pointsCheck').hide();

        }
    }





















    $('#worst_symmetryCheck').hide();

    // step 2
    var worst_symmetryCheck_err = true;


    // step 3
    $('#worst_symmetry').keyup(function () {
        worst_symmetry_check();
    })
    function worst_symmetry_check() {
        var worst_symmetry_val = $('#worst_symmetry').val();
        if (worst_symmetry_val == '') {
            $('#worst_symmetryCheck').show();
            $('#worst_symmetryCheck').html("* required");
            $('#worst_symmetryCheck').focus();
            $('#worst_symmetryCheck').css("color", "red");
            worst_symmetryCheck_err = false;
            return false;
        }
        else if (worst_symmetry_val < 1) {
            $('#worst_symmetryCheck').show();
            $('#worst_symmetryCheck').html("* Value error!");
            $('#worst_symmetryCheck').focus();
            $('#worst_symmetryCheck').css("color", "red");
            worst_symmetryCheck_err = false;
            return false;
        }
        else {
            $('#worst_symmetryCheck').hide();

        }
    }























    $('#worst_fractal_dimensionCheck').hide();

    // step 2
    var worst_fractal_dimensionCheck_err = true;


    // step 3
    $('#worst_fractal_dimension').keyup(function () {
        worst_fractal_dimension_check();
    })
    function worst_fractal_dimension_check() {
        var worst_fractal_dimension_val = $('#worst_fractal_dimension').val();
        if (worst_fractal_dimension_val == '') {
            $('#worst_fractal_dimensionCheck').show();
            $('#worst_fractal_dimensionCheck').html("* required");
            $('#worst_fractal_dimensionCheck').focus();
            $('#worst_fractal_dimensionCheck').css("color", "red");
            worst_fractal_dimensionCheck_err = false;
            return false;
        }
        else if (worst_fractal_dimension_val < 1) {
            $('#worst_fractal_dimensionCheck').show();
            $('#worst_fractal_dimensionCheck').html("* Value error!");
            $('#worst_fractal_dimensionCheck').focus();
            $('#worst_fractal_dimensionCheck').css("color", "red");
            worst_fractal_dimensionCheck_err = false;
            return false;
        }
        else {
            $('#worst_fractal_dimensionCheck').hide();

        }
    }



























    $('#submitBreastCancer').click(function () {
        radius_meanCheck_err = true;
        texture_meanCheck_err = true;
        perimeter_meanCheck_err = true;
        area_meanCheck_err = true;
        smoothness_meanCheck_err = true;
        compactness_meanCheck_err = true;
        concavity_meanCheck_err = true;
        concave_points_meanCheck_err = true;
        symmetry_meanCheck_err = true;
        mean_fractal_dimensionCheck_err = true;
        radius_errorCheck_err = true;
        texture_errorCheck_err = true;
        perimeter_errorCheck_err = true;
        area_errorCheck_err = true;
        smoothness_errorCheck_err = true;
        compactness_errorCheck_err = true;
        concavity_errorCheck_err = true;
        concave_point_errorCheck_err = true;
        symmetry_errorCheck_err = true;
        fractal_dimension_errorCheck_err = true;
        worst_radiusCheck_err = true;
        worst_textureCheck_err = true;
        worst_perimeterCheck_err = true;
        worst_areaCheck_err = true;
        worst_smoothnessCheck_err = true;
        worst_compactnessCheck_err = true;
        worst_concavityCheck_err = true;
        worst_concave_pointsCheck_err = true;
        worst_symmetryCheck_err = true;
        worst_fractal_dimensionCheck_err = true;









        radius_mean_check();
        texture_mean_check();
        perimeter_mean_check();
        area_mean_check();
        smoothness_mean_check();
        compactness_mean_check();
        concavity_mean_check();
        concave_points_mean_check();
        symmetry_mean_check();
        mean_fractal_dimension_check();
        radius_error_check();
        texture_error_check();
        perimeter_error_check();
        area_error_check();
        smoothness_error_check();
        compactness_error_check();
        concavity_error_check();
        concave_point_error_check();
        symmetry_error_check();
        fractal_dimension_error_check();
        worst_radius_check();
        worst_texture_check();
        worst_perimeter_check();
        worst_area_check();
        worst_smoothness_check();
        worst_compactness_check();
        worst_concavity_check();
        worst_concave_points_check();
        worst_symmetry_check();
        worst_fractal_dimension_check();







        if (radius_meanCheck_err == true &&
            texture_meanCheck_err == true &&
            perimeter_meanCheck_err == true &&
            area_meanCheck_err == true &&
            smoothness_meanCheck_err == true &&
            compactness_meanCheck_err == true &&
            concavity_meanCheck_err == true &&
            concave_points_meanCheck_err == true &&
            symmetry_meanCheck_err == true &&
            mean_fractal_dimensionCheck_err == true &&
            radius_errorCheck_err == true &&
            texture_errorCheck_err == true &&
            perimeter_errorCheck_err == true &&
            area_errorCheck_err == true &&
            smoothness_errorCheck_err == true &&
            compactness_errorCheck_err == true &&
            concavity_errorCheck_err == true &&
            concave_point_errorCheck_err == true &&
            symmetry_errorCheck_err == true &&
            fractal_dimension_errorCheck_err == true &&
            worst_radiusCheck_err == true &&
            worst_textureCheck_err == true &&
            worst_perimeterCheck_err == true &&
            worst_areaCheck_err == true &&
            worst_smoothnessCheck_err == true &&
            worst_compactnessCheck_err == true &&
            worst_concavityCheck_err == true &&
            worst_concave_pointsCheck_err == true &&
            worst_symmetryCheck_err == true &&
            worst_fractal_dimensionCheck_err == true
        ) {
            return true;
        }
        else {
            event.preventDefault();
        }
    })



});