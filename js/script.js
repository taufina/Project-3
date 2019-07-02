// Placing focus on "name"
$('#name').focus();
$("#other-title").hide();

// If "other" is selected from job role, then show the text input.

$('#title').on('change', function(){
    let option = $('#title').val();
    if(option=='other'){
        $("#other-title").show();
    }else{$("#other-title").hide();}
});

// Hiding the select theme option in design menu
$("#design option:first-child").hide();

// Updating the color field to read "please select a T-shirt theme"
$("#color").prepend('<option selected>Please select a T-shirt theme</option>');

// Hiding the colors in the "color" drop down menu
$('#color option').hide();

// 
$("#design").on("change", function(){
    let design = $(this).val();
    if (design === "js puns"){
        $("#color option:contains('JS Puns')").show();
        $("#color option:contains('I')").hide();

    } else {
        $("#color option:contains('I')").show();
        $("#color option:contains('JS Puns')").hide();
    }
});

// activity section

//let testNumber = parseInt($(".activities input:checked").text());
    $('.activities :checkbox').click(function(){
       let totalActivityCost = 0;
       const $jsFrameWorks = $('input[name="js-frameworks"]');
       const $jslibs = $('input[name="js-libs"]');
       const $express = $('input[name="express"]');
       const $node = $('input[name="node"]');
       const $tools = $('input[name="building-tools"]');
       const $npm = $('input[name="npm"]');

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

        $(".activities").append('<p id="total-cost"></p>');
        $('#total-cost').html('Total Cost: $'+totalActivityCost);

        // Disabling conflicting
      $jsFrameWorks.change(function() {
        if ($(this).val(":checked")){
            $express.prop("disabled", true);
            $express.parent().css({color: "grey"});
        } else{
            $express.prop("disabled", false);
            $express.parent().css({color: "black"});
        }
        });
      $express.change(function() {
        if ($(this).val(":checked")){
            $jsFrameWorks.prop("disabled", true);
            $jsFrameWorks.parent().css({color: "grey"});
        } else{
            $jsFrameWorks.prop("disabled", false);
            $jsFrameWorks.parent().css({color: "black"});

        }
      });
      $jslibs.change(function() {
        if ($(this).val(":checked")){
            $node.prop("disabled", true);
            $node.parent().css({color: "grey"});
        } else{
            $node.prop("disabled", false);
            $node.parent().css({color: "black"});

        }
      });
      $node.change(function() {
        if ($(this).val(":checked")){
            $jslibs.prop("disabled", true);
            $jslibs.parent().css({color: "grey"});
        } else{
            $jslibs.prop("disabled", false);
            $jslibs.parent().css({color: "black"});
        }
      });
   });


   // payment section


   $('#payment [value="select_method"]').hide();
   $('div p').hide();
   let payment = "credit card";

   $('select option[value="credit card"]').attr("selected",true);

   $("#payment").on("change", function(){

    payment = $(this).val();

    console.log("payment is " + payment);

    
       if (payment === "bitcoin"){
        $('div p').eq(0).hide();
        $('.credit-card').hide();
       } else { 
        $('div p').eq(0).show();
        $('.credit-card').show();
       }

       if (payment === "paypal"){
        $('div p').eq(1).hide();
        $('.credit-card').hide();
       } else { 
        $('div p').eq(1).show();
       }

       if (payment === "credit card"){
        console.log('credit card selected');
        $('div p').hide();
       }
    
   });





//validation


function checkName(){
    const nameReg = /^[A-Za-z]+$/;
    const name = $('#name').val();

    if (!nameReg.test(name) || name == ""){
        console.log("name should turn red");
        $('input[name="user_name"]').css("border-color", "#FF0000");
        $('#name').prev().css("color", "#FF0000");
        //nameError = true;
    } else {//nameError = false;
        $('input[name="user_name"]').css("border-color", "#b0d3e2");
        $('#name').prev().css("color", "#184f68");
    }
}

function checkEmail(){
    const emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    const email = $('#mail').val();
    
    if (!emailReg.test(email) || email == ""){
        console.log("email should turn red");
        $('input[name="user_email"]').css("border-color", "#FF0000");
        $('#mail').prev().css("color", "#FF0000");
       // emailError = true;
    } else {
        $('input[name="user_email"]').css("border-color", "#b0d3e2");
        $('#mail').prev().css("color", "#184f68");
       // emailError = false;
    }
}  

function checkActivities(){
    let activityNumber = [];
    $('.activities input:checked').each(() => {
        activityNumber.push($(this).text());
    });

    if (activityNumber.length < 1){
        $('.activities legend').css("color", "red");
       // activityError = true;
    } else {
        $('.activities legend').css("color", "#184f68");
       // activityError = false;
    }
}

function zip (){
    let zipReg = /^[0-9]{5}(?:-[0-9]{4})?$/;
    const zipVal = $("#zip").val();

    if (!zipReg.test(zipVal) || zipVal == ""){
        $('#zip').css('border-color', "red");
        $('#zip').prev().css('color', "red");

        //cardError = true;
} else {
    $('#zip').css('border-color', "black");

}
}

function cvv (){
    let cvvReg = /^[0-9]{3}$/;
    const cvvVal = $("#cvv").val();

    if (!cvvReg.test(cvvVal) || cvvVal == ""){
        console.log("cvv turns red");
        $('#cvv').css('border-color', "red");
        $('#cvv').prev().css('color', "red");

        cardError = true;
    } else{
        $('#cvv').css('border-color', "black");
    }
}

function cardNumber (){
    let cardNumberReg = /^[0-9]{13,16}?$/;
    const cardNumberVal = $("#cc-num").val();

    if (!cardNumberReg.test(cardNumberVal)){
        console.log("cardNumber turns red");
        $('#cc-num').css('border-color', "red");
        $('#cc-num').prev().css('color', "red");

        //cardError = true;
    } else{
        $('#cc-num').css('border-color', "black");
        $('#cc-num').prev().css('color', "black");

    }
}

function checkCard(){
    if (payment === "credit card"){
        console.log("credit card checking");
        cardNumber();
        cvv();
        zip();
        
    } //else {cardError = true;
    //}
}


// const creditCard = () => {
//     let cardNumber = $("#cc-num").val();
//     let cardZip = $("#zip").val();
//     let cardCvv = $("#cvv");
//     creditCardError = false;

//     if (cardNumber.length < 13 || cardNumber.length > 16){
//         $('cc-num').css("color", "red");
//         creditCardError = true;
//     } else if (cardZip.length !== 5){
//         $('cc-num').css("color", "red");
//         return true;
//     } else if (cardCvv.length === 3){
//         $('cvv').css("color", "red");
//         creditCardError = true;
//     } else{
//         $('cvv').css("color", "#black");
//         $('cc-num').css("color", "black");
//         $('cvv').css("color", "black");
//         creditCardError = false;
//     }
// }

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




// $('button [type="submit"]').submit(function(){

// nameError = false;
// emailError = false;

// checkName();

// if (errorName === false){
//     alert("name right");
//     return true;
// } else{
//     alert("name wrong");
//     return false;
// }
// });

//$(document).ready(function(){
    $('button').click(function(){
        console.log("Form submitted");

        let nameError = false;
        let emailError = false;
        let activityError = false;
        let cardError = false;


        
        checkName();
        checkEmail();
        checkActivities();
        checkCard();
        
        if (nameError || emailError || activityError || cardError){
            console.log("error exist");
            return true;
        } 
        else{
            console.log("no error");
            return false;
        }  
    });
//});

