
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

$('.backsForward').appendTo('.row3');
$('.centersForward').appendTo('.row3');
$('.rucsForward').appendTo('.row3');

$('.centerRucs').appendTo('.row3');
$('.backsCenter').appendTo('.row3');


$('.backs').wrap( "<div class='col-sm-3'></div>" );
$('.centers').wrap( "<div class='col-sm-3'></div>" );
$('.forwards').wrap( "<div class='col-sm-3'></div>" );
$('.rucs').wrap( "<div class='col-sm-3'></div>" );

$('.backsForward').wrap( "<div class='col-sm-3'></div>" );
$('.centersForward').wrap( "<div class='col-sm-3'></div>" );
$('.rucsForward').wrap( "<div class='col-sm-3'></div>" );

$('.centerRucs').wrap( "<div class='col-sm-3'></div>" );
$('.backsCenter').wrap( "<div class='col-sm-3'></div>" );


$('.myTeam').appendTo('.row4');
$('.myTeam').wrap( "<div class='col-sm-12'></div>" );

$('.backsMyTeam').appendTo('.row5');
$('.centersMyTeam').appendTo('.row5');
$('.forwardsMyTeam').appendTo('.row5');
$('.rucsMyTeam').appendTo('.row5');

$('.backsForwardMyTeam').appendTo('.row5');
$('.centersForwardMyTeam').appendTo('.row5');
$('.rucsForwardMyTeam').appendTo('.row5');

$('.centerRucsMyTeam').appendTo('.row5');
$('.backsCenterMyTeam').appendTo('.row5');

$('.backsMyTeam').wrap( "<div class='col-sm-3'></div>" );
$('.centersMyTeam').wrap( "<div class='col-sm-3'></div>" );
$('.forwardsMyTeam').wrap( "<div class='col-sm-3'></div>" );
$('.rucsMyTeam').wrap( "<div class='col-sm-3'></div>" );

$('.backsForwardMyTeam').wrap( "<div class='col-sm-3'></div>" );
$('.centersForwardMyTeam').wrap( "<div class='col-sm-3'></div>" );
$('.rucsForwardMyTeam').wrap( "<div class='col-sm-3'></div>" );

$('.centerRucsMyTeam').wrap( "<div class='col-sm-3'></div>" );
$('.backsCenterMyTeam').wrap( "<div class='col-sm-3'></div>" );


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
$('table').parents('.row').find('h4').append('<span></span>');

function tableCounter(){
  $('table').each(function(){
    var a = $(this).find('tr').length;
    $(this).parents('.module').parent().find('h4 span').text(a);

  });
  checkCounter();
};
tableCounter();

function checkCounter(){

  var c = $('.counter').find('.c').text();
  var f = $('.counter').find('.f').text();
  var b = $('.counter').find('.b').text();
  var r = $('.counter').find('.r').text();
  var cf = $('.counter').find('.cf').text();
  var bf = $('.counter').find('.bf').text();
  var rf = $('.counter').find('.rf').text();
  var cr = $('.counter').find('.cr').text();
  var bc = $('.counter').find('.bc').text();


  c = parseInt(c);
  f = parseInt(f);
  b = parseInt(b);
  r = parseInt(r);
  cf = parseInt(cf);
  bf = parseInt(bf);
  rf = parseInt(rf);
  cr = parseInt(cr);
  bc = parseInt(bc);


  if(c == cLimit){
    alert('Hit center limit');
    cLimit++;
  }
  if(f == fLimit){
    alert('Hit forward limit');
    fLimit++
  }
  if(b == bLimit){
    alert('Hit back limit');
    bLimit++;
  }
  if(r == rLimit){
    alert('Hit ruc limit');
    rLimit++
  }

  if(cf == cfLimit){
    alert('Hit center limit');
    cLimit++;
  }
  if(bf == bfLimit){
    alert('Hit forward limit');
    fLimit++
  }
  if(rf == rfLimit){
    alert('Hit back limit');
    bLimit++;
  }
  if(cr == crLimit){
    alert('Hit ruc limit');
    rLimit++
  }
  if(bc == bcLimit){
    alert('Hit ruc limit');
    rLimit++
  }

}
