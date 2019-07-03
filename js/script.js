const emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

// Placing focus on "name".
$('#name').focus();
$("#other-title").hide();


/////// JOB ROLE SECTION //////

// If "other" is selected from job role, then show the text input.  Otherwise hide the text input.
$('#title').on('change', function(){
    let option = $('#title').val();
    if(option=='other'){
        $("#other-title").show();
    }else{$("#other-title").hide();}
});


/////// T-SHIRT SECTION ///////

// Exceeds expectation: Hide colors section.  Only show it when a design theme is selected.
$("#colors-js-puns").hide();

// Hide the select theme option in design menu.
$("#design option:first-child").hide();

// Update the color field to read "please select a T-shirt theme".
$("#color").prepend('<option selected>Please select a T-shirt theme</option>');

// Hide the colors in the "color" drop down menu.
$('#color option').hide();

// When JS Puns is selected in design section, then only show the options that has the word "JS puns".
// Otherwise show options that contain "I" and hide options that contain "JS Puns".
// When JS puns is selected in design section, automatically select "Cornflower Blue" in color section. Otherwise automatically select "Tomato".

$("#design").on("change", function(){
    let design = $(this).val();
    $("#colors-js-puns").show();

    if (design === "js puns"){
        $("#color option:contains('JS Puns')").show();
        $("#color option:contains('I')").hide();
        $("#color option[value='cornflowerblue']").prop("selected",true);
    } else {
        $("#color option:contains('I')").show();
        $("#color option:contains('JS Puns')").hide();
        $("#color option[value='tomato']").prop("selected",true);
    }
});

///////////////////// ACTIVITY SECTION /////////////////////

    // Each time a checkbox is clicked, this function will activate.

    $('.activities :checkbox').click(function(){
       let totalActivityCost = 0;
       const $jsFrameWorks = $('input[name="js-frameworks"]');
       const $jslibs = $('input[name="js-libs"]');
       const $express = $('input[name="express"]');
       const $node = $('input[name="node"]');
       const $tools = $('input[name="building-tools"]');
       const $npm = $('input[name="npm"]');

       // This loop iterates through all the checked checkboxes and adds up the total cost.

        $(".activities :checkbox:checked").each(function(index, element){
            switch(element.name){
                case "all": totalActivityCost +=200;
                break;
                case "js-frameworks": totalActivityCost +=100;
                break;
                case "js-libs": totalActivityCost +=100;
                break;
                case "express": totalActivityCost +=100;
                break;
                case "node": totalActivityCost +=100;
                break;
                case "build-tools": totalActivityCost +=100;
                break;
                case "npm": totalActivityCost +=100;
                break;
            }
        });

        // A <p> tag is added with a string stating the total cost.

        $(".activities").append('<p id="total-cost"></p>');
        $('#total-cost').html('Total Cost: $'+totalActivityCost);

    
        /*  
            Disabling conflicting options:
            When an option is checked, any other option with conflicting time is disabled, and turned grey.
            When it is unchecked, the conflicting options are no longer disabled, and color turns black.  
        */
        

        $jsFrameWorks.change(function() {
        if ($(this).is (":checked")){
            $express.prop("disabled", true);
            $express.parent().css({color: "grey"});
        } else{
            $express.prop("disabled", false);
            $express.parent().css({color: "black"});
        }
        });
        $express.change(function() {
        if ($(this).is (":checked")){
            $jsFrameWorks.prop("disabled", true);
            $jsFrameWorks.parent().css({color: "grey"});
        } else{
            $jsFrameWorks.prop("disabled", false);
            $jsFrameWorks.parent().css({color: "black"});
        }
        });
        $jslibs.change(function() {
        if ($(this).is (":checked")){
            $node.prop("disabled", true);
            $node.parent().css({color: "grey"});
        } else{
            $node.prop("disabled", false);
            $node.parent().css({color: "black"});
        }
        });
        $node.change(function() {
        if ($(this).is (":checked")){
            $jslibs.prop("disabled", true);
            $jslibs.parent().css({color: "grey"});
        } else{
            $jslibs.prop("disabled", false);
            $jslibs.parent().css({color: "black"});
        }
        });
    });
    


 ///////////////////// PAYMENT SECTION /////////////////////

// "Select payment method" is hidden.
   $('#payment [value="select_method"]').hide();

// Messages for paypal and bitcoin are hidden.
   $('div p').hide();

// Credit card is selected by default.
   $('select option[value="credit card"]').attr("selected",true);


   let payment = "credit card";

   $("#payment").on("change", function(){
        payment = $(this).val();
        console.log("payment is " + payment);
    
        // Show only bitcoin message when bitcoin message is selected.
       if (payment === "bitcoin"){
            $('div p').eq(0).hide();
            $('.credit-card').hide();
            $('div p').eq(1).show();
       } 
       
       // Show only paypal message when paypal is selected.
       if (payment === "paypal"){
            $('div p').eq(1).hide();
            $('.credit-card').hide();
            $('div p').eq(0).show();
       } 
       
       // Show the appropriate boxes when credit card is selected.
       if (payment === "credit card"){
            console.log('credit card selected');
            $('div p').hide();
            $('.credit-card').show();
       }
    });



///////////////////// VALIDATION SECTION /////////////////////


function checkName(){
    const nameReg = /^[A-Za-z]+$/;
    const name = $('#name').val();

    // Global variable to check whether error in name exists.  
    // If false = no error, if true = error exists.

    nameError = false;

    // If the name user enters does not match regular expression, the border of the textbox and the label turns red.
    // If the name matches the regex, then the border and title stays the color it was.

    if (!nameReg.test(name)){
        console.log("name should turn red");
        $('input[name="user_name"]').css("border-color", "#FF0000");
        $('#name').prev().css("color", "#FF0000");
        nameError = true;
    } else {
        $('input[name="user_name"]').css("border-color", "#b0d3e2");
        $('#name').prev().css("color", "#184f68");
    }
}

    // If the email user enters does not match regular expression, the border of the textbox and the label turns red.
    // If the name matches the regex, then the border and title stays the color it was.

function checkEmail(){
    const emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    const email = $('#mail').val();
    emailError = false;

    if (!emailReg.test(email) || email == ""){
        console.log("email should turn red");
        $('input[name="user_email"]').css("border-color", "#FF0000");
        $('#mail').prev().css("color", "#FF0000");
        emailError = true;
    } else {
        $('input[name="user_email"]').css("border-color", "#b0d3e2");
        $('#mail').prev().css("color", "#184f68");
    }
}  


    // Enter all the checked activities in an array.  If the array has less than one input, turn the title red.
    // Else it stays the same color.

function checkActivities(){
    let activityNumber = [];
    $('.activities input:checked').each(() => {
        activityNumber.push($(this).text());
    });

    activityError = false;
    if (activityNumber.length < 1){
        $('.activities legend').css("color", "red");
        activityError = true;
    } else {
        $('.activities legend').css("color", "#184f68");
    }
}


    // If the zip code user enters does not match regular expression, the border of the textbox and the label turns red.
    // If the zip code matches the regex, then the border and title stays the color it was.

function zip (){
    let zipReg = /^[0-9]{5}(?:-[0-9]{4})?$/;
    const zipVal = $("#zip").val();

    if (!zipReg.test(zipVal) || zipVal == ""){
        $('#zip').css('border-color', "red");
        $('#zip').prev().css('color', "red");

        cardError = true;
    } else {
        $('#zip').css('border-color', "#b0d3e2");
        $('#zip').prev().css('color', "#184f68");

    }
}

// If the cvv does not match regular expression, the border of the textbox and the label turns red.
// If the cvv matches the regex, then the border and title stays the color it was.

function cvv (){
    let cvvReg = /^[0-9]{3}$/;
    const cvvVal = $("#cvv").val();

    if (!cvvReg.test(cvvVal) || cvvVal == ""){
        console.log("cvv turns red");
        $('#cvv').css('border-color', "red");
        $('#cvv').prev().css('color', "red");

        cardError = true;
    } else{
        $('#cvv').css('border-color', "#b0d3e2");
        $('#cvv').prev().css('color', "#184f68");
    }
}

// If the credit card number does not match regular expression, the border of the textbox and the label turns red.
// If the card number matches the regex, then the border and title stays the color it was.

function cardNumber (){
    let cardNumberReg = /^[0-9]{13,16}?$/;
    const cardNumberVal = $("#cc-num").val();
    cardError = false;

    if (!cardNumberReg.test(cardNumberVal)){
        console.log("cardNumber turns red");
        $('#cc-num').css('border-color', "red");
        $('#cc-num').prev().css('color', "red");

        cardError = true;
    } else{
        $('#cc-num').css('border-color', "#b0d3e2");
        $('#cc-num').prev().css('color', "#184f68");

    }
}

// This function checks validation of card number, zip code and cvv if the selected payment method is paypal.

function checkCard(){
    if (payment === "credit card"){
        console.log("credit card checking");
        cardNumber();
        cvv();
        zip();
    } 
}

// If email field is left empty, a message will appear next to the email label, saying "Your email field is empty".
// if the email value does not match the email format, a message will appear asking the user to enter a valid email address.
$("#mail").on("focusout", function(){

    let email = $('#mail').val();

    $('#mail').prev().append("<span id='emailMessage'></span>");

    if (!emailReg.test(email)){
        $("#emailMessage").text(" Please enter a valid email address").css("color", "red");
    }else if(email === ""){
        $("#emailMessage").text(" Your email field is empty").css("color","red");
    }else{
        $("#emailMessage").text("")
    }
});

//

// const creditCard = () => {
//     let cardNumber = $("#cc-num").val();
//     let cardZip = $("#zip").val();
//     let cardCvv = $("#cvv");

//     if (cardNumber.length < 13 || cardNumber.length > 16){
//         paymentStatus = true;
//         $('cc-num').css("color", "red");
//     } else{
//         paymentStatus = false;
//         $('cc-num').css("color", "#184f68");
//     }

//     if (cardZip.length !== 5){
//         paymentStatus = true;
//         $('#zip').css("color", "red");
//     } else{
//         paymentStatus = false;
//         $('#zip').css("color", "#184f68");
//     }

//     if (cardCvv.length === 3){
//         paymentStatus = false;
//         $('cvv').css("color", "red");
//     } else{
//         paymentStatus = true;
//         $('cvv').css("color", "#184f68");

//     }
// }


// No action will be taken until DOM is ready.
$(document).ready(function(){
    $('button:submit').click(function(){


        // event.preventDefault stops the page from reloading until all required parts are validated. 
        event.preventDefault();
        console.log("Form submitted");

        // all required parts are validated.  If it doesn't meet the required conditions, the boxes and labels appear red.
        checkName();
        checkEmail();
        checkActivities();
        checkCard();
        
        // If error exists in one of more of the required field, an alert pops up saying the "registration was unsuccessful."  
        // Otherwise the page gives an alert that the "registration was successful", and then the page reloads.   
        if (nameError || emailError || activityError || cardError){
            console.log("error exist");
            alert("Registration unsuccessul. Please correct the inputs marked red.")
        } 
        else{
            console.log("no error");
            alert("Registration successful! See you at the conference!")
        }  
    });
});