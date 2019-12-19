import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor() { }
  ngOnInit() {
  }
  // for bootstrape slider array Start
  	imagesBoot = [
			'assets/img/img_slide1.jpg', 
			'assets/img/img_slide2.jpg', 
			'assets/img/img_slide1.jpg'
			];
  // for bootstrape slider array End

      // ng-simple-slideshow start
          imageSources = [
           {
                url: 'assets/img/img_slide1.jpg',
                id: "call1"
            }, 
            {
                url: 'assets/img/img_slide2.jpg',
                id: "call2"
            }, 
            {
                url: 'assets/img/img_slide1.jpg',
                id: "call3"
            }
          ];
      // ng-simple-slideshow end
    
      // Single Owl Carousel Start
          mySlideImages = [1,2,3,4,5].map((i)=> `https://picsum.photos/640/480?image=${i}`);
          // mySlideImages = [
          //     {
          //       text: "Everfresh Flowers",
          //       image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/1.jpg"
          //     },
          //     {
          //       text: "Everfresh Flowers",
          //       image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/2.jpg"
          //     },
          //     {
          //       text: "Everfresh Flowers",
          //       image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/3.jpg"
          //     }
          //   ]

          mySlideOptions={items: 1, dots: true, nav: true};
          // myCarouselImages =[1,2,3,4,5,6].map((i)=>`https://picsum.photos/640/480?image=${i}`);
          // myCarouselOptions={items: 3, dots: true, nav: true}; 
      // Single Owl Carousel End

      // Multiple Owl Carousel Start
          title = 'OwlCarousel2 in Angular7 with Custom Navigation Arrows';
          carouselOptions = {
            margin: 25,
            nav: true,
            dots:true,
            navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
            responsiveClass: true,
            responsive: {
              0: {
                items: 1,
                nav: true
              },
              600: {
                items: 1,
                nav: true
              },
              1000: {
                items: 2,
                nav: true,
                loop: false
              },
              1500: {
                items: 3,
                nav: true,
                loop: false
              }
            }
          }
         
          images = [
            {
              text: "Everfresh Flowers",
              image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/1.jpg"
            },
            {
              text: "Festive Deer",
              image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/2.jpg"
            },
            {
              text: "Morning Greens",
              image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/3.jpg"
            },
            {
              text: "Bunch of Love",
              image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/4.jpg"
            },
            {
              text: "Blue Clear",
              image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/5.jpg"
            },
            {
              text: "Evening Clouds",
              image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/7.jpg"
            },
            {
              text: "Fontains in Shadows",
              image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/8.jpg"
            },
            {
              text: "Kites in the Sky",
              image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/9.jpg"
            },
            {
              text: "Sun Streak",
              image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/10.jpg"
            }
          ]
        // Multiple Owl Carousel End
}
