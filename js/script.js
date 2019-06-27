// Placing focus on "name"
$('#name').focus();
$("#other-title").hide();

// if other is selected from job role, then show the text input.

$('#title').on('change', function(){
    let option = $('#title').val();
    if(option=='other'){
        $("#other-title").show();
    }else{$("#other-title").hide();}
});

// hide the select theme option in design menu
$("#design option:first-child").hide();

// update the color field to read "please select a T-shirt theme"

$("#color").prepend('<option selected>Please select a T-shirt theme</option>');

// Hide the colors in the "color" drop down menu
$('#color option').hide();


$("#design").on("change", function(){
    let design = $(this).val();
    // let jspuns = 
    if (design === "js puns"){
        $("#color option:contains('JS Puns')").show();
        $("#color option:contains('I')").hide();

    } else {
        $("#color option:contains('I')").show();
        $("#color option:contains('JS Puns')").hide();
    }
});

// activity section

$(".activities label").on("change", function(e){
    let clickedInput = $('.activities input:checked').text();
    // let clickedInput = $('this').text();
    // let textContentOfAbove = 'clickedInput.prev';

alert(clickedInput);
});