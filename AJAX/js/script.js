
/****************************** Data From Another File *************************/

// $('.ready').load('test.html');

/********************** Data From Another File Using GET Method ***********/

// $.get('test.html',function(data){
//     $('.ready').html(data);
// })


// $.getJSON('js/info.json',function(data){
//     $.each(data,function(i,user){
//         $('#info').append('<li>'+user.firstName+'</li>');
//         console.log(i);
//     })
// })


/************************************ AJAX *********************************/


$.ajax({
    method:'GET',
    url:'https://jsonplaceholder.typicode.com/posts',
    datatype:'json',
}).done(function(data){
    $.map(data,function(post,i){
        $('.ready').append('<h3>'+post.title+'</h3><p>'+post.body+'</p>')
        console.log(post);
    })

})