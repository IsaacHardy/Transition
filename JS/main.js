(function (){

// On Click, adds class to ID first p
$('.lone').on('click', 'h2', function(event) {
    // Define a variable equal to each paragraph class
    var clicker = $('#first-p');

    // If the paragraph has already changed class, remove class.
    if (clicker.hasClass('slide-p')) {
      clicker.removeClass('slide-p');

    // If the class hasn't been changed, add new class and remove classes from other paragraphs.
  } else {

    $('#first-p').addClass('slide-p');
    $('#second-p').removeClass('slide-p');
    $('#third-p').removeClass('slide-p');
  }
});

// On Click, adds class to ID second p
$('.ltwo').on('click', 'h2', function(event) {
    // Define a variable equal to each paragraph class
    var clicker = $('#second-p');
    
    // If the paragraph has already changed class, remove class.
    if (clicker.hasClass('slide-p')) {
      clicker.removeClass('slide-p');

    // If the class hasn't been changed, add new class and remove classes from other paragraphs.
  } else {

    $('#second-p').addClass('slide-p');
    $('#first-p').removeClass('slide-p');
    $('#third-p').removeClass('slide-p');
  }
});

// On Click, adds class to ID third p
$('.lthree').on('click', 'h2', function(event) {
    // Define a variable equal to each paragraph class
    var clicker = $('#third-p');
    
    // If the paragraph has already changed class, remove class.
    if (clicker.hasClass('slide-p')) {
      clicker.removeClass('slide-p');

    // If the class hasn't been changed, add new class and remove classes from other paragraphs.
  } else {

    $('#third-p').addClass('slide-p');
    $('#second-p').removeClass('slide-p');
    $('#first-p').removeClass('slide-p');
  }
});
}());