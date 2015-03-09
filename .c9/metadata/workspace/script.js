{"filter":false,"title":"script.js","tooltip":"/script.js","undoManager":{"mark":4,"position":4,"stack":[[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":28,"column":1},"action":"insert","lines":["/*When the document loads.*/","logStatus(\"You're in a dark alley.\");","$('#buttonAreaDiv')","  .append(\"<button type=\\\"button\\\" class=\\\"actionButton\\\" id=\\\"btn_begForSpice\\\"> Beg for Spice </button>\");","","/**"," * Event to handle when the button for begging"," * for spice is clicked."," */","$('#btn_begForSpice').on('click', function(){","  var cur_salt = parseInt($('#val_salt').text()); ","  if(Math.floor(Math.random() * 101) < 20) ","  {","    logStatus(\"You beg for spice. Some kind stranger gave you some.\");","    cur_salt = cur_salt + 5;","    $('#val_salt').text(cur_salt);","  }","  else","    logStatus(\"You beg for spice. You were ignored.\");","});","","/**"," * A function to display the user's current status in"," * the game's log."," */","function logStatus(string)","{","  $('#log').text(string);","}"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":28,"column":1},"action":"remove","lines":["/*When the document loads.*/","logStatus(\"You're in a dark alley.\");","$('#buttonAreaDiv')","  .append(\"<button type=\\\"button\\\" class=\\\"actionButton\\\" id=\\\"btn_begForSpice\\\"> Beg for Spice </button>\");","","/**"," * Event to handle when the button for begging"," * for spice is clicked."," */","$('#btn_begForSpice').on('click', function(){","  var cur_salt = parseInt($('#val_salt').text()); ","  if(Math.floor(Math.random() * 101) < 20) ","  {","    logStatus(\"You beg for spice. Some kind stranger gave you some.\");","    cur_salt = cur_salt + 5;","    $('#val_salt').text(cur_salt);","  }","  else","    logStatus(\"You beg for spice. You were ignored.\");","});","","/**"," * A function to display the user's current status in"," * the game's log."," */","function logStatus(string)","{","  $('#log').text(string);","}"]},{"start":{"row":0,"column":0},"end":{"row":30,"column":1},"action":"insert","lines":["/*When the document loads.*/","logStatus(\"You're in a dark alley.\");","$('#buttonAreaDiv')","  .append(\"<button type=\\\"button\\\" class=\\\"actionButton\\\" id=\\\"btn_begForSpice\\\"> Beg for Spice </button>\");","$('#buttonAreaDiv')","  .append(\"</br><br><button type=\\\"button\\\" class=\\\"actionButton\\\" id=\\\"btn_store\\\"> Store </button>\");","","/**"," * Event to handle when the button for begging"," * for spice is clicked."," */","$('#btn_begForSpice').on('click', function(){","  var cur_salt = parseInt($('#val_salt').text()); ","  if(Math.floor(Math.random() * 101) < 20) ","  {","    logStatus(\"You beg for spice. Some kind stranger gave you some.\");","    cur_salt = cur_salt + 5;","    $('#val_salt').text(cur_salt);","  }","  else","    logStatus(\"You beg for spice. You were ignored.\");","});","","/**"," * A function to display the user's current status in"," * the game's log."," */","function logStatus(string)","{","  $('#log').text(string);","}"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":30,"column":1},"action":"remove","lines":["/*When the document loads.*/","logStatus(\"You're in a dark alley.\");","$('#buttonAreaDiv')","  .append(\"<button type=\\\"button\\\" class=\\\"actionButton\\\" id=\\\"btn_begForSpice\\\"> Beg for Spice </button>\");","$('#buttonAreaDiv')","  .append(\"</br><br><button type=\\\"button\\\" class=\\\"actionButton\\\" id=\\\"btn_store\\\"> Store </button>\");","","/**"," * Event to handle when the button for begging"," * for spice is clicked."," */","$('#btn_begForSpice').on('click', function(){","  var cur_salt = parseInt($('#val_salt').text()); ","  if(Math.floor(Math.random() * 101) < 20) ","  {","    logStatus(\"You beg for spice. Some kind stranger gave you some.\");","    cur_salt = cur_salt + 5;","    $('#val_salt').text(cur_salt);","  }","  else","    logStatus(\"You beg for spice. You were ignored.\");","});","","/**"," * A function to display the user's current status in"," * the game's log."," */","function logStatus(string)","{","  $('#log').text(string);","}"]},{"start":{"row":0,"column":0},"end":{"row":31,"column":1},"action":"insert","lines":["/*When the document loads.*/","logStatus(\"You're in a dark alley.\");","$('#buttonAreaDiv')","  .append(\"<button type=\\\"button\\\" class=\\\"actionButton\\\" id=\\\"btn_begForSpice\\\"> Beg for Spice </button>\");","$('#buttonAreaDiv')","  .append(\"</br><br><button type=\\\"button\\\" class=\\\"actionButton\\\" id=\\\"btn_store\\\"> Store </button>\");","","/**"," * Event to handle when the button for begging"," * for spice is clicked."," */","$('#btn_begForSpice').on('click', function(){","  var cur_salt = parseInt($('#val_salt').text()); ","  if(Math.floor(Math.random() * 101) < 20) ","  {","    logStatus(\"You beg for spice. Some kind stranger gave you some.\");","    cur_salt = cur_salt + 5;","    $('#val_salt').text(cur_salt);","  }","  else","    logStatus(\"You beg for spice. You were ignored.\");","});","","/**"," * A function to display the user's current status in"," * the game's log."," */","function logStatus(string)","{","  $('#log').append(\"<span class=\\\"log_text\\\">\" + string + \"<br></span>\");","  \t\t\t$(\"#log\").animate({ scrollTop: $('#log')[0].scrollHeight}, 100);","}"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":31,"column":1},"action":"remove","lines":["/*When the document loads.*/","logStatus(\"You're in a dark alley.\");","$('#buttonAreaDiv')","  .append(\"<button type=\\\"button\\\" class=\\\"actionButton\\\" id=\\\"btn_begForSpice\\\"> Beg for Spice </button>\");","$('#buttonAreaDiv')","  .append(\"</br><br><button type=\\\"button\\\" class=\\\"actionButton\\\" id=\\\"btn_store\\\"> Store </button>\");","","/**"," * Event to handle when the button for begging"," * for spice is clicked."," */","$('#btn_begForSpice').on('click', function(){","  var cur_salt = parseInt($('#val_salt').text()); ","  if(Math.floor(Math.random() * 101) < 20) ","  {","    logStatus(\"You beg for spice. Some kind stranger gave you some.\");","    cur_salt = cur_salt + 5;","    $('#val_salt').text(cur_salt);","  }","  else","    logStatus(\"You beg for spice. You were ignored.\");","});","","/**"," * A function to display the user's current status in"," * the game's log."," */","function logStatus(string)","{","  $('#log').append(\"<span class=\\\"log_text\\\">\" + string + \"<br></span>\");","  \t\t\t$(\"#log\").animate({ scrollTop: $('#log')[0].scrollHeight}, 100);","}"]},{"start":{"row":0,"column":0},"end":{"row":47,"column":3},"action":"insert","lines":["/*When the document loads.*/","$(function(){","","  $('body').append(\"<div id=\\\"buttonAreaDiv\\\"></div>\");","  $('body').append(\"<div id=\\\"log\\\"></div>\");","  $('body').append(\"<div id=\\\"log-overlay\\\"></div>\");","  $('body').append(\"<header><ul id=\\\"resourceList\\\"> <li> Salt: <span id=\\\"val_salt\\\">0</span>g </li> <li> Pepper: <span id=\\\"val_pepper\\\">0</span>g </li> <li> Cumin: <span id=\\\"val_cumin\\\">0</span>g </li> </ul> </header>\");","","  $('#buttonAreaDiv')","    .append(\"<button type=\\\"button\\\" class=\\\"actionButton\\\" id=\\\"btn_begForSpice\\\"> Beg for Spice </button>\");","","  $('#resourceList li').eq(1).hide();","  $('#resourceList li').eq(2).hide();","","  logStatus(\"You're in a dark alley.\");","  ","  var begSuccess = [\"A pinch of salt dropped from the sky.\", \"Someone dropped 2g of salt. You picked it up.\", \"You picked off the salt from leftover french fries.\", \"You performed on the sidewalk. An ammused bypasser dropped off some salt as a tip.\", \"A kind stranger gave you a pack of salt.\"];","  var begFail = [\"People pass by you. You were ignored.\", \"A child spat on you.\", \"You cried out but no one gave you their attention.\", \"\\\"Notice me, senpai!\\\", you yelled. You were ignored.\", \"You beg for spice. You were ignored.\"];","","  /**","   * Event to handle when the button for begging","   * for spice is clicked.","   */","  $('#btn_begForSpice').on('click', function(){","    var cur_salt = parseInt($('#val_salt').text()); ","    var val_rand = Math.floor(Math.random() * 5) + 1;","    ","    if(Math.floor(Math.random() * 101) < 80) ","    {","      logStatus(begSuccess[val_rand-1]);","      cur_salt = cur_salt + val_rand;","      $('#val_salt').text(cur_salt);","    }","    else","      logStatus(begFail[val_rand-1]);","  });","","  /**","   * A function to display the user's current status in","   * the game's log.","   */","  function logStatus(string)","  {","    $('#log').append(\"<span class=\\\"log_text\\\">\" + string + \"<br></span>\");","    $(\"#log\").animate({ scrollTop: $('#log')[0].scrollHeight}, 100);","  }","","});"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":31,"column":1},"action":"insert","lines":["/*When the document loads.*/","logStatus(\"You're in a dark alley.\");","$('#buttonAreaDiv')","  .append(\"<button type=\\\"button\\\" class=\\\"actionButton\\\" id=\\\"btn_begForSpice\\\"> Beg for Spice </button>\");","$('#buttonAreaDiv')","  .append(\"</br><br><button type=\\\"button\\\" class=\\\"actionButton\\\" id=\\\"btn_store\\\"> Store </button>\");","","/**"," * Event to handle when the button for begging"," * for spice is clicked."," */","$('#btn_begForSpice').on('click', function(){","  var cur_salt = parseInt($('#val_salt').text()); ","  if(Math.floor(Math.random() * 101) < 20) ","  {","    logStatus(\"You beg for spice. Some kind stranger gave you some.\");","    cur_salt = cur_salt + 5;","    $('#val_salt').text(cur_salt);","  }","  else","    logStatus(\"You beg for spice. You were ignored.\");","});","","/**"," * A function to display the user's current status in"," * the game's log."," */","function logStatus(string)","{","  $('#log').append(\"<span class=\\\"log_text\\\">\" + string + \"<br></span>\");","  \t\t\t$(\"#log\").animate({ scrollTop: $('#log')[0].scrollHeight}, 100);","}"]},{"start":{"row":31,"column":1},"end":{"row":78,"column":3},"action":"remove","lines":["/*When the document loads.*/","$(function(){","","  $('body').append(\"<div id=\\\"buttonAreaDiv\\\"></div>\");","  $('body').append(\"<div id=\\\"log\\\"></div>\");","  $('body').append(\"<div id=\\\"log-overlay\\\"></div>\");","  $('body').append(\"<header><ul id=\\\"resourceList\\\"> <li> Salt: <span id=\\\"val_salt\\\">0</span>g </li> <li> Pepper: <span id=\\\"val_pepper\\\">0</span>g </li> <li> Cumin: <span id=\\\"val_cumin\\\">0</span>g </li> </ul> </header>\");","","  $('#buttonAreaDiv')","    .append(\"<button type=\\\"button\\\" class=\\\"actionButton\\\" id=\\\"btn_begForSpice\\\"> Beg for Spice </button>\");","","  $('#resourceList li').eq(1).hide();","  $('#resourceList li').eq(2).hide();","","  logStatus(\"You're in a dark alley.\");","  ","  var begSuccess = [\"A pinch of salt dropped from the sky.\", \"Someone dropped 2g of salt. You picked it up.\", \"You picked off the salt from leftover french fries.\", \"You performed on the sidewalk. An ammused bypasser dropped off some salt as a tip.\", \"A kind stranger gave you a pack of salt.\"];","  var begFail = [\"People pass by you. You were ignored.\", \"A child spat on you.\", \"You cried out but no one gave you their attention.\", \"\\\"Notice me, senpai!\\\", you yelled. You were ignored.\", \"You beg for spice. You were ignored.\"];","","  /**","   * Event to handle when the button for begging","   * for spice is clicked.","   */","  $('#btn_begForSpice').on('click', function(){","    var cur_salt = parseInt($('#val_salt').text()); ","    var val_rand = Math.floor(Math.random() * 5) + 1;","    ","    if(Math.floor(Math.random() * 101) < 80) ","    {","      logStatus(begSuccess[val_rand-1]);","      cur_salt = cur_salt + val_rand;","      $('#val_salt').text(cur_salt);","    }","    else","      logStatus(begFail[val_rand-1]);","  });","","  /**","   * A function to display the user's current status in","   * the game's log.","   */","  function logStatus(string)","  {","    $('#log').append(\"<span class=\\\"log_text\\\">\" + string + \"<br></span>\");","    $(\"#log\").animate({ scrollTop: $('#log')[0].scrollHeight}, 100);","  }","","});"]},{"start":{"row":1,"column":0},"end":{"row":1,"column":34},"action":"remove","lines":["logStatus(\"You're in a dark alley."]},{"start":{"row":1,"column":0},"end":{"row":6,"column":221},"action":"insert","lines":["$(function(){","","  $('body').append(\"<div id=\\\"buttonAreaDiv\\\"></div>\");","  $('body').append(\"<div id=\\\"log\\\"></div>\");","  $('body').append(\"<div id=\\\"log-overlay\\\"></div>\");","  $('body').append(\"<header><ul id=\\\"resourceList\\\"> <li> Salt: <span id=\\\"val_salt\\\">0</span>g </li> <li> Pepper: <span id=\\\"val_pepper\\\">0</span>g </li> <li> Cumin: <span id=\\\"val_cumin\\\">0</span>g </li> </ul> </header>"]},{"start":{"row":7,"column":0},"end":{"row":8,"column":2},"action":"insert","lines":["","  "]},{"start":{"row":9,"column":0},"end":{"row":9,"column":2},"action":"insert","lines":["  "]},{"start":{"row":10,"column":0},"end":{"row":11,"column":2},"action":"insert","lines":["","  "]},{"start":{"row":11,"column":6},"end":{"row":12,"column":102},"action":"remove","lines":["buttonAreaDiv')","  .append(\"</br><br><button type=\\\"button\\\" class=\\\"actionButton\\\" id=\\\"btn_store\\\"> Store </button>\")"]},{"start":{"row":11,"column":6},"end":{"row":17,"column":232},"action":"insert","lines":["resourceList li').eq(1).hide();","  $('#resourceList li').eq(2).hide();","","  logStatus(\"You're in a dark alley.\");","  ","  var begSuccess = [\"A pinch of salt dropped from the sky.\", \"Someone dropped 2g of salt. You picked it up.\", \"You picked off the salt from leftover french fries.\", \"You performed on the sidewalk. An ammused bypasser dropped off some salt as a tip.\", \"A kind stranger gave you a pack of salt.\"];","  var begFail = [\"People pass by you. You were ignored.\", \"A child spat on you.\", \"You cried out but no one gave you their attention.\", \"\\\"Notice me, senpai!\\\", you yelled. You were ignored.\", \"You beg for spice. You were ignored.\"]"]},{"start":{"row":19,"column":0},"end":{"row":19,"column":2},"action":"insert","lines":["  "]},{"start":{"row":20,"column":0},"end":{"row":20,"column":2},"action":"insert","lines":["  "]},{"start":{"row":21,"column":0},"end":{"row":21,"column":2},"action":"insert","lines":["  "]},{"start":{"row":22,"column":0},"end":{"row":22,"column":2},"action":"insert","lines":["  "]},{"start":{"row":23,"column":0},"end":{"row":23,"column":2},"action":"insert","lines":["  "]},{"start":{"row":24,"column":0},"end":{"row":24,"column":2},"action":"insert","lines":["  "]},{"start":{"row":25,"column":0},"end":{"row":27,"column":2},"action":"insert","lines":["    var val_rand = Math.floor(Math.random() * 5) + 1;","    ","  "]},{"start":{"row":27,"column":41},"end":{"row":27,"column":42},"action":"remove","lines":["2"]},{"start":{"row":27,"column":41},"end":{"row":27,"column":42},"action":"insert","lines":["8"]},{"start":{"row":28,"column":2},"end":{"row":29,"column":0},"action":"remove","lines":["{",""]},{"start":{"row":28,"column":2},"end":{"row":29,"column":2},"action":"insert","lines":["  {","  "]},{"start":{"row":29,"column":16},"end":{"row":29,"column":70},"action":"remove","lines":["\"You beg for spice. Some kind stranger gave you some.\""]},{"start":{"row":29,"column":16},"end":{"row":29,"column":38},"action":"insert","lines":["begSuccess[val_rand-1]"]},{"start":{"row":30,"column":0},"end":{"row":30,"column":2},"action":"insert","lines":["  "]},{"start":{"row":30,"column":28},"end":{"row":31,"column":0},"action":"remove","lines":["5;",""]},{"start":{"row":30,"column":28},"end":{"row":31,"column":2},"action":"insert","lines":["val_rand;","  "]},{"start":{"row":32,"column":2},"end":{"row":32,"column":3},"action":"insert","lines":[" "]},{"start":{"row":32,"column":3},"end":{"row":32,"column":4},"action":"insert","lines":[" "]},{"start":{"row":33,"column":0},"end":{"row":33,"column":2},"action":"insert","lines":["  "]},{"start":{"row":34,"column":0},"end":{"row":34,"column":2},"action":"insert","lines":["  "]},{"start":{"row":34,"column":16},"end":{"row":34,"column":54},"action":"remove","lines":["\"You beg for spice. You were ignored.\""]},{"start":{"row":34,"column":16},"end":{"row":34,"column":35},"action":"insert","lines":["begFail[val_rand-1]"]},{"start":{"row":35,"column":0},"end":{"row":35,"column":2},"action":"insert","lines":["  "]},{"start":{"row":37,"column":0},"end":{"row":37,"column":2},"action":"insert","lines":["  "]},{"start":{"row":38,"column":0},"end":{"row":38,"column":2},"action":"insert","lines":["  "]},{"start":{"row":39,"column":0},"end":{"row":39,"column":2},"action":"insert","lines":["  "]},{"start":{"row":40,"column":0},"end":{"row":40,"column":2},"action":"insert","lines":["  "]},{"start":{"row":41,"column":0},"end":{"row":41,"column":2},"action":"insert","lines":["  "]},{"start":{"row":42,"column":0},"end":{"row":43,"column":0},"action":"remove","lines":["{",""]},{"start":{"row":42,"column":0},"end":{"row":43,"column":2},"action":"insert","lines":["  {","  "]},{"start":{"row":44,"column":2},"end":{"row":44,"column":5},"action":"remove","lines":["\t\t\t"]},{"start":{"row":44,"column":2},"end":{"row":44,"column":4},"action":"insert","lines":["  "]},{"start":{"row":45,"column":0},"end":{"row":45,"column":1},"action":"remove","lines":["}"]},{"start":{"row":45,"column":0},"end":{"row":47,"column":3},"action":"insert","lines":["  }","","});"]}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":45,"column":0},"end":{"row":45,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1424247426000,"hash":"fd535fa274a9eef2277021138348537a24d0c0fd"}