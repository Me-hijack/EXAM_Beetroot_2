$('.section_articles__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
  // autoplay: true,
  // autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 3
        }
      },  
      {
        breakpoint: 920,
        settings: {
          slidesToShow: 2,
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

  $('.section__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    verticalSwiping: true,
    // rtl: true,
    dtu: true,
    vertical: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    // responsive: [
    //   {
    //     breakpoint: 1280,
    //     settings: {
    //       arrows: false,
    //       dots: true,
    //       slidesToShow: 2
    //     }
    //   },  
    //   {
    //     breakpoint: 920,
    //     settings: {
    //       slidesToShow: 1,
    //       dots: true,
    //       arrows: false,
    //     }
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //     }
    //   }
    // ]
  });


  // const anchors = document.querySelectorAll('a[href*="#"]')

  // for (let anchor of anchors) {
  //   anchor.addEventListener('click', function (e) {
  //     e.preventDefault()
      
  //     const blockID = anchor.getAttribute('href').substr(1)
      
  //     document.getElementById(blockID).scrollIntoView({
  //       behavior: 'smooth',
  //       block: 'start'
  //     })
  //   })
  // }


  

//   $(".nav__link").on("click", function(e){
//     e.preventDefault();
//     var anchor = $(this).attr('href');
//     $('html, body').stop().animate({
//         scrollTop: $(anchor).offset().top - 100
//     }, 2000);
// });

// const anchors = document.querySelectorAll('.nav__link')

// for (let anchor of anchors) {
//   anchor.addEventListener('click', function (e) {
//     e.preventDefault()
    
//     const blockID = anchor.getAttribute('href')
    
//     document.querySelector(blockID).scrollIntoView({
//       behavior: 'smooth',
//       block: 'start'
//     })
//   })
// }


// $("a.nav__link").on("click", function(e){
//   e.preventDefault();
//   var anchor = $(this).attr('href');
//   $('html, body').stop().animate({
//       scrollTop: $(anchor).offset().top - 60
//   }, 60000);
// });


// $(document).ready(function(){
// 	$("#projects").on("click","a", function (event) {
// 		event.preventDefault(); //опустошим стандартную обработку
// 		var id  = $(this).attr('href'), //заберем айдишник блока с параметром URL
// 			top = $(id).offset().top; //определим высоту от начала страницы до якоря
// 	$('body,html').animate({scrollTop: top}, 1000); //сделаем прокрутку за 1 с
// 	});
// });

// jQuery(document).ready(function() {
//   jQuery("a.nav__link").click(function () {
//   elementClick = jQuery(this).attr("href")
//   destination = jQuery(elementClick).offset().top;

//   jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1100);
//   return false;
//   });
//   });


  // $("html, body").animate({scrollTop: scrollingDistance}, 800);


//   var links = document.querySelectorAll('[href^="#"]');

// for (var i = 0; i < links.length; i++) {
//   links[i].addEventListener('click', function(e) {
//     var el = document.querySelector(this.hash);
//     if (el) {
//       window.nav__link(0, el.getBoundingClientRect().top - 20);
//     }
//     e.preventDefault();
//   }, false);
// }

// const textElement = document.getElementById("projects")

// textElement.scrollIntoView({behavior: "smooth"})



// let map;

// function initMap() {
//     map = new google.maps.Map(document.getElementById("map"), {
//         center: { lat: -34.397, lng: 150.644 },
//         zoom: 8,
//     });
// }


// function initMap() {
//   const palaceMarrin = { lat: 50.448370, lng: 30.537731 };
//   const map = new google.maps.Map(document.querySelector("#map"), {
//       zoom: 14,
//       center: palaceMarrin,
//       styles: [
//           { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
//           { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
//           { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
//           {
//               featureType: "administrative.locality",
//               elementType: "labels.text.fill",
//               stylers: [{ color: "#d59563" }],
//           },
//           {
//               featureType: "poi",
//               elementType: "labels.text.fill",
//               stylers: [{ color: "#d59563" }],
//           },
//           {
//               featureType: "poi.park",
//               elementType: "geometry",
//               stylers: [{ color: "#263c3f" }],
//           },
//           {
//               featureType: "poi.park",
//               elementType: "labels.text.fill",
//               stylers: [{ color: "#6b9a76" }],
//           },
//           {
//               featureType: "road",
//               elementType: "geometry",
//               stylers: [{ color: "#38414e" }],
//           },
//           {
//               featureType: "road",
//               elementType: "geometry.stroke",
//               stylers: [{ color: "#212a37" }],
//           },
//           {
//               featureType: "road",
//               elementType: "labels.text.fill",
//               stylers: [{ color: "#9ca5b3" }],
//           },
//           {
//               featureType: "road.highway",
//               elementType: "geometry",
//               stylers: [{ color: "#746855" }],
//           },
//           {
//               featureType: "road.highway",
//               elementType: "geometry.stroke",
//               stylers: [{ color: "#1f2835" }],
//           },
//           {
//               featureType: "road.highway",
//               elementType: "labels.text.fill",
//               stylers: [{ color: "#f3d19c" }],
//           },
//           {
//               featureType: "transit",
//               elementType: "geometry",
//               stylers: [{ color: "#2f3948" }],
//           },
//           {
//               featureType: "transit.station",
//               elementType: "labels.text.fill",
//               stylers: [{ color: "#d59563" }],
//           },
//           {
//               featureType: "water",
//               elementType: "geometry",
//               stylers: [{ color: "#17263c" }],
//           },
//           {
//               featureType: "water",
//               elementType: "labels.text.fill",
//               stylers: [{ color: "#515c6d" }],
//           },
//           {
//               featureType: "water",
//               elementType: "labels.text.stroke",
//               stylers: [{ color: "#17263c" }],
//           },
//       ],

//   });


//   const image =
//       "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";
//   const beachMarker = new google.maps.Marker({
//       position: { lat: 50.448370, lng: 30.537731 },
//       map,
//       icon: image,
//   });
// }



function initMap() {
    const styledMapType = new google.maps.StyledMapType(
      [
        {
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#f5f5f5"
            }
          ]
        },
        {
          "elementType": "labels.icon",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#616161"
            }
          ]
        },
        {
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#f5f5f5"
            }
          ]
        },
        {
          "featureType": "administrative.land_parcel",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#bdbdbd"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#eeeeee"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#757575"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#e5e5e5"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#9e9e9e"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#ffffff"
            }
          ]
        },
        {
          "featureType": "road.arterial",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#757575"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#dadada"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#616161"
            }
          ]
        },
        {
          "featureType": "road.local",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#9e9e9e"
            }
          ]
        },
        {
          "featureType": "transit.line",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#e5e5e5"
            }
          ]
        },
        {
          "featureType": "transit.station",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#eeeeee"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#c9c9c9"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#9e9e9e"
            }
          ]
        }
      ],
        { name: "Styled Map" }
    );

    const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 22.30484743724392, lng:114.16026311683368 },
        zoom: 11,
        mapTypeControlOptions: {
            mapTypeIds: ["roadmap", "satellite", "hybrid", "terrain", "styled_map"],
        },
    });
    map.mapTypes.set("styled_map", styledMapType);
    map.setMapTypeId("styled_map");

    const image =
        "./img/pin.png";
    const marker = new google.maps.Marker({
        position: { lat: 22.30484743724392, lng:114.16026311683368 },
        map,
        icon: image,
    });
}
