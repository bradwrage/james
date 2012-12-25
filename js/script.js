$('article p, article .font-btns').hide();
$('article h1').addClass('pointer').click(function() {
    var $article  = $(this).parent(),
        $siblings = $(this).siblings();
    if ($article.hasClass('expanded')) {
      $siblings.slideToggle('slow').promise().done(function() {
        $article.removeClass('expanded');
      });
    } else {
      $article.addClass('expanded');
      $siblings.slideToggle('slow');
    }
  });