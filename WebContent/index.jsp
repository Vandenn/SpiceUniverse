<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		<link rel="shortcut icon" href="favicon.ico" />
		<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
		<title>Spice Universe Login</title>
	</head>
	<body>
		<h1>Spice Universe</h1>
		Login:<br />
		<form action="LoginController" method="POST">
			Username: <input name="username"><br />
			Password: <input name="password" type="password"><br />
			<input type="submit" value="Login"><br />
		</form>
		Register:<br />
		<form action="RegisterController" method="POST">
			Username: <input name="username"><br />
			Password: <input name="password" type="password"><br />
			<input type="submit" value="Register">
		</form>
	</body>
</html>