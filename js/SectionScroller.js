$('nav ul li').on('click', function(){

    const sectionId = '#' + $(this).attr('class');
    $('body, html').animate({
        scrollTop: $(sectionId).offset().top
       }, 1000)
       
})