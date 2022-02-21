/*
***************************************** Click Funtion **********************************************************
$('#btn1').click(function(){
    alert('Momina kamina');
})
***************************************** END Click Funtion **********************************************************
*/

/*
***************************************** ON Click Funtion **********************************************************
$('#btn3').on('click',function(){
    alert('Execution Successful :)');
})
***************************************** ON Click Funtion ENDS **********************************************************
*/






/*

***************************************** ON Mouse move Funtion **********************************************************
$('#btn1').on('mousemove',function(e){
    console.log('Cords: Y:' +e.clientY +' X:' +e.clientX);
})
***************************************** ON Mouse move Funtion Ends **********************************************************

*/

// *****************************************  Document Thingyyy **********************************************************
$(document).on('mousemove',function(e){
    $('#cords').html('Cords: Y:' +e.clientY +' X:' +e.clientX);
})
// ***************************************** Document Thingyyy Ends **********************************************************


$(document).ready(function(){
/*
// *****************************************  Focus Function **********************************************************
    $('input#name').focus(function (){
        alert('You clicked Shit');
        alert('Now Reload your Browser JackAss');
    })


// *****************************************  Blur Function **********************************************************
//*********************************** Active when when we remove focus ***********************************************
    $('input#name').blur(function(){
        $(this).css('background-color','#000');
    })



// ********************************  Using Both Blur & Focus Together ***************************************

$('input#name').focus(function (){
    $(this).css('background-color','#000');
})


$('input#name').blur(function(){
    $(this).css('background-color','#fff');
})


// *****************************************  KeyUp Function **********************************************************

$('input#name').keyup(function(e){
    console.log(e.target.value);
})
*/

$('#gender').change(function(e){
    alert('You Changed to ' + e.target.value);
})

$('#form').submit(function(e){
    // e.preventDefault();
    e.preventDefault();
    var shit = $('input#name').val();
    console.log(shit);
})






})

