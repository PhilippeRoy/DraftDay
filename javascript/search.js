$('.global')
  .parent()
  .find('h4')
  .after('<input id="playerSearch" type="text" name="firstname">');


$('#playerSearch').keyup(function(){

  var patt = new RegExp($('#playerSearch').val());

  if($('#playerSearch').val() === ""){
    $('.global table tr').show();
  } else if($('#playerSearch').val() !== ""){
    $('.global table tr').hide();
    $('.global table tr').each(function(index, el){
      var str = $(this).find('td').text();
      if(patt.test(str)){
        $(this).show();
      };

    });
  }
});
