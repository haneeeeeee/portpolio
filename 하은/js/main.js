
// skrollr.js 호출 함수
skrollr.init({
    mobileCheck: function(){
            if((/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)){
            // mobile device
            }
        }
    });
    

// $(function () {
//     $("#fullpage").fullpage({
//         navigation: true,
//         navigationTooltips: ['1','2','3','4','5'],
//         showActiveTooltips: true,
//         lockAnchors: false,
//         autoScrolling: true,
//         anchors: ["firstSection", "secondSection", "thirdSection", "fourthSection", "fifthSection", "sixthSection"],
//         // responsiveWidth: 769,
//         // normalScrollElements: '#pri_popUp',

//         onLeave: function (anchorLink, index) {

//             if (index == 1) {
//             } else {
//             }
//             if (index == 2) {
//             } else {
//             }
//             if (index == 3) {
//             } else {
//             }
//             if (index == 4) {
//             } else {
//             }
//             if (index == 5) {
//             } else {
//             }
//         },
//         afterLoad: function (anchorLink, index) {

//             if (index == 1) {
//             } else {
//             }
//             if (index == 2) {
//             } else {
//             }
//             if (index == 3) {
//             } else {
//             }
//             if (index == 4) {
//             } else {
//             }
//         },
//     });
// });