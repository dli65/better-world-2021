var slideout = new Slideout({
    'panel': document.getElementById('panel'),
    'menu': document.getElementById('menu'),
    'padding': 175,
    'tolerance': 70,
    'side': 'left',
    'touch': false
});

// Toggle button
document.querySelector('.toggle-button').addEventListener('click', function() {
    slideout.toggle();
});

//add a click listener to close the slideout and add right border to content
slideout.on('beforeopen', function() {
    // document.querySelector('.navbarDiv').className += ' navbarDiv-open';
    // document.querySelector('.contentContainer').className += ' contentContainer-open';
    $('.contentContainer').click(function() {
        slideout.close();
    });
    $('.menu').css('display', 'block');
    $('.contentContainer').css('border-left', '2px solid #00B5AD');
	  $('.hamburger').addClass('is-active');
});
slideout.on('beforeclose', function() {
    // document.querySelector('.navbarDiv').className = 'navbarDiv';
    $('.contentContainer').click(function() {});
	  $('.hamburger').removeClass('is-active');
});
slideout.on('close', function() {
    $('.contentContainer').css('border-left', 'none');
    $('.menu').css('display', 'none');
	  layout();
});
