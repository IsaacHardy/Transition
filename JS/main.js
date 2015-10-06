(function (){

// // Define variabels for each header
// var one = $('#first-p');
// var two = $('#second-p');
// var three = $('#third-p');

// // Start page refesh with closed with top open.
// one.toggleClass('open');
// two.toggleClass('hidden');
// three.toggleClass('hidden');


// On Click, adds class to ID first p
$('.lone').on('click', 'h2', function(event) {
    // Define a variable equal to each paragraph class
    // var clicker = $('#first-p');

    $('#first-p').toggleClass('hidden');

  //   // If the paragraph has already changed class, remove class.
  //   if (clicker.hasClass('open')) {
  //     clicker.toggleClass('hidden');

  //     // Remove class from other paras
  //     $('#second-p').toggleClass('open');
  //     $('#third-p').toggleClass('hidden');

  //   // If the class hasn't been changed, add new class and remove classes from other paragraphs.
  // } else {

  //   $('#first-p').toggleClass('open');
  //   $('#second-p').toggleClass('hidden');
  //   $('#third-p').toggleClass('hidden');
  // }
});

// On Click, adds class to ID second p
$('.ltwo').on('click', 'h2', function(event) {

  $('#second-p').toggleClass('hidden');

  //   // Define a variable equal to each paragraph class
  //   var clicker = $('#second-p');
    
  //   // If the paragraph has already changed class, remove class.
  //   if (clicker.hasClass('open')) {
  //     clicker.toggleClass('hidden');

  //     //
  //     $('#first-p').toggleClass('open');
  //     $('#third-p').toggleClass('hidden');

  //   // If the class hasn't been changed, add new class and remove classes from other paragraphs.
  // } else {

  //   $('#second-p').toggleClass('open');
  //   $('#first-p').toggleClass('hidden');
  //   $('#third-p').toggleClass('hidden');
  // }
});

// On Click, adds class to ID third p
$('.lthree').on('click', 'h2', function(event) {

  $('#third-p').toggleClass('hidden');
  //   // Define a variable equal to each paragraph class
  //   var clicker = $('#third-p');
    
  //   // If the paragraph has already changed class, remove class.
  //   if (clicker.hasClass('open')) {
  //     clicker.toggleClass('hidden');

  //     $('#second-p').toggleClass('open');
  //     $('#first-p').toggleClass('hidden');

  //   // If the class hasn't been changed, add new class and remove classes from other paragraphs.
  // } else {

  //   $('#third-p').toggleClass('open');
  //   $('#second-p').toggleClass('hidden');
  //   $('#first-p').toggleClass('hidden');
  // }
});
}());