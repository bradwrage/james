$(function(){

  $('.grid p, .grid .right-module').hide();
  $('.grid h1').addClass('pointer').click(function() {
    var $article  = $(this).closest(".grid"),
    $siblings = $article.find("p"),
        $right = $article.find(".right-module");
    if ($article.hasClass('expanded')) {
        $right.fadeToggle('slow');
        $siblings.slideToggle('slow').promise().done(function() {
        $article.removeClass('expanded');
      });
    } else {
      $right.fadeToggle('slow');
      $article.addClass('expanded');
      $siblings.slideToggle('slow');
    }
  });

});