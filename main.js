$(function(){
    $('#gallery .container .img-list > li > img').click(function(){
        var src = $(this).attr('src');
        $('#gallery .container >img').attr('src',src);
    })
})