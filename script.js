/*When the document loads.*/
logStatus("You're in a dark alley.");
$('#buttonAreaDiv')
  .append("<button type=\"button\" class=\"actionButton\" id=\"btn_begForSpice\"> Beg for Spice </button>");

/**
 * Event to handle when the button for begging
 * for spice is clicked.
 */
$('#btn_begForSpice').on('click', function(){
  var cur_salt = parseInt($('#val_salt').text()); 
  if(Math.floor(Math.random() * 101) < 20) 
  {
    logStatus("You beg for spice. Some kind stranger gave you some.");
    cur_salt = cur_salt + 5;
    $('#val_salt').text(cur_salt);
  }
  else
    logStatus("You beg for spice. You were ignored.");
});

/**
 * A function to display the user's current status in
 * the game's log.
 */
function logStatus(string)
{
  $('#log').text(string);
}