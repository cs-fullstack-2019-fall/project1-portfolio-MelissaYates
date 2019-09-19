// $(document).ready(function () {
//     var pos = 0,
//         slides = $('.slide'),
//         numOfSlides = slides.length;
//     function nextSlide() {
//         // `[]` returns a vanilla DOM object from a jQuery object/collection
//         slides[pos].video.stopVideo()
//         slides.eq(pos).animate({ left: '-100%' }, 500);
//         pos = (pos >= numOfSlides - 1 ? 0 : ++pos);
//         slides.eq(pos).css({ left: '100%' }).animate({ left: 0 }, 500);
//     }
//     function previousSlide() {
//         slides[pos].video.stopVideo()
//         slides.eq(pos).animate({ left: '100%' }, 500);
//         pos = (pos == 0 ? numOfSlides - 1 : --pos);
//         slides.eq(pos).css({ left: '-100%' }).animate({ left: 0 }, 500);
//     }
//     $('.left').click(previousSlide);
//     $('.right').click(nextSlide);
// })