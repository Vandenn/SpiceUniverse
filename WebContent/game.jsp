<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
		<link rel="shortcut icon" href="favicon.ico" />
		<!--
			Engine Design inspired by A Dark Room
			adarkroom.doublespeakgames.com
		-->
	    <!--jQuery-->
	    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
		<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.3/jquery-ui.min.js"></script>
			<script src="scripts/button.js"></script>
			<script src="scripts/chapter.js"></script>
			<script src="scripts/chapter1.js"></script>
			<script src="scripts/chapter2.js"></script>
			<script src="scripts/chapterHandler.js"></script>
			<script src="scripts/constants.js"></script>
			<script src="scripts/eventLog.js"></script>
			<script src="scripts/events.js"></script>
			<script src="scripts/global.js"></script>
			<script src="scripts/items.js"></script>
			<script src="scripts/rooms.js"></script>
			<script src="scripts/save.js"></script>
	    	<script src="scripts/script.js"></script>
			<script src="scripts/uisetup.js"></script>
	    <!--Fonts-->
	    <link href='https://fonts.googleapis.com/css?family=Raleway:400,700,100' rel='stylesheet' type='text/css'>
	    <link href='style/main.css' rel='stylesheet' type='text/css'>
	    <!--Title-->
	    <title>Spice Universe</title>
	</head>
		
	<!--
	  BODY
	-->
	<body>
		<header>
			<form>
				<ul id="manageList"> 
					<span> Hello, 
						<c:if test="${user!=null }">
							${user.username}
						</c:if>
						<c:if test="${user==null }">
							Guest
						</c:if>! 
					</span>
					<li> 
						<button id = "saveGameButton" type = "submit" class="actionButton" onclick="saveGame();"> Save </button> 
					</li> 
					<li> 
						<button type = "submit" class="actionButton" onclick="form.action='LogoutController'; form.method='GET'"> Log-out </button> 
					</li>
				</ul> 
				<ul id="resourceList"> 
					<li> Salt: <span id="val_salt">0</span>g </li> 
					<li> Pepper: <span id="val_pepper">100</span>g </li> 
					<li> Cumin: <span id="val_cumin">0</span>g </li> 
				</ul>
			</form> 
		</header>
		<main>
		</main>
		<div id = "log"></div>
		<div id = "log-overlay"></div>
		<script>
			$("#saveGameButton").submit(function(e)
			{
			    e.preventDefault;
			});
			function initGame()
			{
				if(${user == null} == false)
				{
					loadData({
						username: "${user.username}",
						cur_chapter: "${user.cur_chapter}",
						salt: "${user.salt}",
						pepper: "${user.pepper}", 
						cumin: "${user.cumin}",
						chap2rooms1: "${user.roomA}",
						chap2rooms2: "${user.roomB}",
						chap2rooms3: "${user.roomC}",
						gun: "${user.gun}",
						meds: "${user.meds}",
					    knife: "${user.knife}",
					    bomb: "${user.bomb}",
					    isBoss: "${user.isBoss}",
					    defeatedBosses1: "${user.defeatedBossA}",
					    defeatedBosses2: "${user.defeatedBossB}",
					    defeatedBosses3: "${user.defeatedBossC}",
					});
				}
				else loadGame();
			}
		</script>
	</body>
</html>