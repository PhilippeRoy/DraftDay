$(function() {

   $( ".global tbody" ).sortable({
     deactivate: function( event, ui ) {
      //  console.log('moved');
       //console.log(data);

       data.quickFind(ui.item[0], ui.item[0].rowIndex);
     }
   });
   $( ".global tbody" ).disableSelection();
 });
