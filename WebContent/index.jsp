<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		<link rel="shortcut icon" href="favicon.ico" />
		<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
		<!--Fonts-->
	    <link href='https://fonts.googleapis.com/css?family=Raleway:400,700,100' rel='stylesheet' type='text/css'>
	    <link href='style/main.css' rel='stylesheet' type='text/css'>
		<title>Spice Universe Login</title>
	</head>
	<body>
		<h1 id = "loginTitle">Spice Universe</h1>
		
		<form action="LoginController" method="POST" class = "formFormat">
			Login:<br />
			Username: <input name="username" class = "textInput"><br />
			Password: <input name="password" type="password" class = "textInput"><br />
			<input type="submit" value="Login" class = "actionButton"><br />
			<c:if test = "${loginErr == true}">
				Wrong username/password!<br />
			</c:if>
		</form>
		
		<form action="RegisterController" method="POST" class = "formFormat">
			Register:<br />
			Username: <input name="username" class = "textInput"><br />
			Password: <input name="password" type="password" class = "textInput"><br />
			<input type="submit" value="Register" class = "actionButton">
		</form>
	</body>
</html>