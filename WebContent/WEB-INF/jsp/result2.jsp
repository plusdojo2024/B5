<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link rel="stylesheet" href="/B5/css/common.css">
<link rel="stylesheet" href="/B5/css/result2.css">
<title>終了画面</title>
</head>
<body>
<form method="post" action="/B5/src/Result2Servlet">
<input type ="radio" id ="r" name="kekka" value ="流局">
<input type ="radio" id ="a" name="kekka" value ="上がり">
<label>自分の点数</label><br>
<input type ="text"  name ="point">
<input type="submit" name="next" value="次へ">
</form>
</body>
</html>