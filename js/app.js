'use strict';

// add text on click--------------------
$('document').ready(function() { 

    $('#btn_more1').click(function() {
       $(".desc").css("margin-bottom", "20px"); 
       $("#desc_more1").fadeToggle();
       $("#desc_more1").css("text-align", "center");
      console.log('hi');
    });

    $('#btn_more2').click(function() {
        $(".desc").css("margin-bottom", "20px"); 
        $("#desc_more2").fadeToggle();
        $("#desc_more2").css("text-align", "center");
    //    console.log('hi');
     });

     $('#gallery__btn').click(function() {
        // $(".desc").css("margin-bottom", "20px"); 
        $("#gallery__items_more").fadeToggle();
        $(".gallery__items_row").css("width", "284px");
       console.log('hi');
     });

  });
  

//  change text on button
let button1 = document.getElementById('btn_more1');
button1.addEventListener('click', function handleClick() {
  const initialText = 'More details';
  if (button1.textContent.toLowerCase().includes(initialText.toLowerCase())) {
    button1.textContent = 'Less Details';
  } else {
     button1.textContent = initialText;
  }
});
let button2 = document.getElementById('btn_more2');
button2.addEventListener('click', function handleClick() {
  const initialText = 'More details';
  if (button2.textContent.toLowerCase().includes(initialText.toLowerCase())) {
    button2.textContent = 'Less Details';
  } else {
     button2.textContent = initialText;
  }
})

let galleryButton = document.getElementById('gallery__btn');
galleryButton.addEventListener('click', function handleClick() {
  const initialText = 'See more';
  if (galleryButton.textContent.toLowerCase().includes(initialText.toLowerCase())) {
    galleryButton.textContent = 'See Less';
  } else {
    galleryButton.textContent = initialText;
  }
})





