$('.section_articles__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
  autoplay: true,
  autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 2
        }
      },  
      {
        breakpoint: 920,
        settings: {
          slidesToShow: 1,
          dots: true,
          arrows: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  // $('.section__slider').slick({
  //   infinite: true,
  //   slidesToShow: 3,
  //   slidesToScroll: 1
  // });