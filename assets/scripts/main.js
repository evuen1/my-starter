// Vendors
import './vendor/jquery'
import './vendor/bootstrap'
import './vendor/fontawesome'

// image to background
function ibg() {
  $.each($('.ibg'), function () {
    if ($(this).find('img').length > 0) {
      $(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
    }
  });
}
ibg();

// smooth scroll
$("body").on('click', '[href*="#"]', function(e){
  var fixed_offset = 100;
  $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
  e.preventDefault();
});
