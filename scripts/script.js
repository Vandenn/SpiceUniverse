/*When the document loads.*/
$(function(){

  $('body').append("<div id=\"buttonAreaDiv\"></div>");
  $('body').append("<div id=\"log\"></div>");
  $('body').append("<div id=\"log-overlay\"></div>");
  $('body').append("<header><ul id=\"resourceList\"> <li> Salt: <span id=\"val_salt\">0</span>g </li> <li> Pepper: <span id=\"val_pepper\">0</span>g </li> <li> Cumin: <span id=\"val_cumin\">0</span>g </li> </ul> </header>");

  $('#buttonAreaDiv')
    .append("<button type=\"button\" class=\"actionButton\" id=\"btn_begForSpice\"> Beg for Spice </button>");

  $('#resourceList li').eq(0).css({'opacity':0});
  $('#resourceList li').eq(1).hide();
  $('#resourceList li').eq(2).hide();

  logStatus("You're in a dark alley.");
  
  var begSuccess = ["A pinch of salt dropped from the sky.", "Someone dropped 2g of salt. You picked it up.", "You picked off the salt from leftover french fries.", "You performed on the sidewalk. An ammused bypasser dropped off some salt as a tip.", "A kind stranger gave you a pack of salt."];
  var begFail = ["People pass by you. You were ignored.", "A child spat on you.", "You cried out but no one gave you their attention.", "\"Notice me, senpai!\", you yelled. You were ignored.", "You beg for spice. You were ignored."];

  /**
   * Event to handle when the button for begging
   * for spice is clicked.
   */
  $('#btn_begForSpice').on('click', function(){
    var cur_salt = parseInt($('#val_salt').text()); 
    var val_rand = Math.floor(Math.random() * 5) + 1;
    
    if(Math.floor(Math.random() * 101) < 80) 
    {
      logStatus(begSuccess[val_rand-1]);
      cur_salt = cur_salt + val_rand;
      $('#val_salt').text(cur_salt);
      /*Show salt if transparent*/
      if($('#resourceList li').eq(0).css("opacity") == 0)
      {
        $('#resourceList li').eq(0).css({'opacity':1});
      }
    }
    else
      logStatus(begFail[val_rand-1]);
  });

  /**
   * A function to display the user's current status in
   * the game's log.
   */
  function logStatus(string)
  {
    $('#log').append("<span class=\"log_text\">" + string + "<br></span>");
    $("#log").animate({ scrollTop: $('#log')[0].scrollHeight}, 100);
  }

});