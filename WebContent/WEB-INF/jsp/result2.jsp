<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>終了画面</title>
</head>
<body>
<button type ="button">流局</button>
<button type ="button">上がり</button>
<form action="#" method="post">
<label>自分の点数</label><br>
<input type ="number" name="age" value="">
</form>

<form method="post" action="/B5/GamesetServlet">
<input type="submit" name="" value="試合終了">
</form>
<form method="post" action="/B5/Servlet">
<input type="submit" name="login" value="次へ">
</body>
</html>