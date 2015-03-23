
//layout overides
$('body').prepend("<div class='container'></div>");
$('#master').appendTo(".container");
$('#master').prepend( "<div class='row row5'></div>" );
$('#master').prepend( "<div class='row row4'></div>" );
$('#master').prepend( "<div class='row row3'></div>" );
$('#master').prepend( "<div class='row row2'></div>" );
$('#master').prepend( "<div class='row row1'></div>" );


$('.rounds').appendTo('.row1');
$('.display').appendTo('.row1');
$('.counter').appendTo('.row1');
$('.filter').appendTo('.row1');

$('.rounds').wrap( "<div class='col-sm-4 clearfix'></div>" );
$('.display').wrap( "<div class='col-sm-4 '></div>" );

$('.counter').wrap( "<div class='col-sm-4 filterContainer clearfix'></div>" );
$('.filter').appendTo('.filterContainer');

$('.global').appendTo('.row2');
$('.global').wrap( "<div class='col-sm-12'></div>" );

$('.backs').appendTo('.row3');
$('.centers').appendTo('.row3');
$('.forwards').appendTo('.row3');
$('.rucs').appendTo('.row3');

$('.backs').wrap( "<div class='col-sm-3'></div>" );
$('.centers').wrap( "<div class='col-sm-3'></div>" );
$('.forwards').wrap( "<div class='col-sm-3'></div>" );
$('.rucs').wrap( "<div class='col-sm-3'></div>" );

$('.myTeam').appendTo('.row4');
$('.myTeam').wrap( "<div class='col-sm-12'></div>" );

$('.backsMyTeam').appendTo('.row5');
$('.centersMyTeam').appendTo('.row5');
$('.forwardsMyTeam').appendTo('.row5');
$('.rucsMyTeam').appendTo('.row5');

$('.backsMyTeam').wrap( "<div class='col-sm-3'></div>" );
$('.centersMyTeam').wrap( "<div class='col-sm-3'></div>" );
$('.forwardsMyTeam').wrap( "<div class='col-sm-3'></div>" );
$('.rucsMyTeam').wrap( "<div class='col-sm-3'></div>" );

$('table').addClass('table table-striped').wrap( "<div class='table-responsive'></div>" );

(function newCaption(){
  var captionList = $('.module').find('caption');
  captionList.each(function(){
    var t = $(this).text();
    $(this).parents('.module').parent().prepend('<h4>'+t+'</h4>');
    $(this).remove();
  });
})();

$('button').addClass('btn btn-default');