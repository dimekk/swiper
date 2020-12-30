document.addEventListener("DOMContentLoaded", function () {

  console.log("Loaded");
  var swiperH = new Swiper('.swiper-container-h', {
    //mode: 'horizontal',
    spaceBetween: 0,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    hashNavigation: true
  });
  $('#bs').click(function (e) {
    mySwiper.swipeTo($('#slidebs').index(), 1000, false);
  });
  $('#return-cross').click(function (e) {
    mySwiper.slideTo($('#team').index(), 1000, false);
  });
  // var returnCross = document.querySelectorAll("return-cross");
  // var swiper = new Swiper('.swiper-container', {})
  // $('.return-cross').click(swiper,function(){
  //     swiper.swipeTo(1);
  // })
  const data = {
    members: [{
        name: 'Basia Sołtysińska',
        job: 'Founder',
        location: 'Warsaw',
        slide: 0,
      },
      {
        name: 'Włas Chorowiec',
        job: 'Founder',
        location: 'Warsaw',
        slide: 1,
      },
      {
        name: 'Edyta Leśniewska',
        job: 'Head of Human ,Resources',
        location: 'Warsaw',
        slide: 2,
      },
      {
        name: 'Joanna Pawluk',
        job: 'Chief Growth Officer, (CGO)',
        location: 'London',
        slide: 3,
      },
      {
        name: 'Davis Saunders',
        job: 'Business Development',
        location: 'London',
        slide: 4,
      },
      {
        name: 'Adam Eldridge',
        job: 'Business Develpoment Director US',
        location: 'Los Angeles',
        slide: 5,
      },
      {
        name: 'Maha Mahda',
        job: 'Chief Business Development Officer (CBDO)',
        location: 'Warsaw',
        slide: 6,
      },
      {
        name: 'Elżbieta Kamińska',
        job: 'International Client Service Manager',
        location: 'Warsaw',
        slide: 7,
      },
      {
        name: 'Karolina Makuch',
        job: 'Creation Manager',
        location: 'Warsaw',
        slide: 8,
      },
      {
        name: 'Kamil Bolek',
        job: 'Head of Communication',
        location: 'Warsaw',
        slide: 9,
      },
    ],
  };

  console.log(data.members[3].name);

  // fetch('./members.json')
  //         .then(function (response) {
  //             return response.json();
  //         })
  //         .then(function (data) {
  //             appendData(data);
  //         })
  //         .catch(function (err) {
  //             console.log('error: ' + err);
  //         });
  // function appendData(data) {
  //     var mainContainer = document.getElementById("myData");
  //     for (var i = 0; i < data.length; i++) {
  //         var div = document.createElement("div");
  //         div.innerHTML = 'Name: ' + data.members[i].name + ' ' + data[i].job;
  //         mainContainer.appendChild(div);
  //     }
  // }

});