$(function() {

   $( ".global tbody" ).sortable({
     deactivate: function( event, ui ) {
       data.quickFind(ui.item[0], ui.item[0].rowIndex);

       backTable.addData(filterData(data.currentList, 'B'));
       centerTable.addData(filterData(data.currentList, 'C'));
       forwardsTable.addData(filterData(data.currentList, 'F'));
       rucsTable.addData(filterData(data.currentList, 'R'));

       var spanNumber = rounds.getElementsByTagName('span')[0].innerHTML;
       display.whatToDisplay(spanNumber, data.whoToShow);
     }
   });
   $( ".global tbody" ).disableSelection();
 });
