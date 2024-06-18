<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>対局終了、順位</title>
<link rel ="style">
</head>
<body>
<div id ="box1">あなたの順位</div>
<div id ="box2">の順位</div>
<div id ="box3">の順位</div>
<div id ="box4">の順位</div>

<form method="post" action="/B5/TotalServlet">
<input type="submit" name="login" value="終了">
</body>
</html>