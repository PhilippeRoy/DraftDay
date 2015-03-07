$(function() {

   $( ".global tbody" ).sortable({
     deactivate: function( event, ui ) {
       data.quickFind(ui.item[0], ui.item[0].rowIndex);
       backTable.addData(filterData(data.currentList, 'B'));
     }
   });
   $( ".global tbody" ).disableSelection();
 });
