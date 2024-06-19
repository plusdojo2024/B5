<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link rel="stylesheet" href="/B5/css/common.css">
<link rel="stylesheet" href="/B5/css/result.css">
<title>リザルト画面</title>
</head>
<body>
<!-- 項目を表示 -->
<c:if test="${empty hand}">
	<p>一致するデータはありません。</p>
</c:if>
<c:forEach var="e" items="${hand}">
<img src ="/B5/img/ma-jan_${e}.png">
</c:forEach>
<h2>ツモorロンを表示</h2>
<h3>${dora}</h3>
<h4>${tiles}</h4>
<p>役：表示</p>
<p>役の飜</p>
<h5></h5>
<h6>点数 点</h6>
<form method="post" action="/B5/GameServlet">
<input type="submit" name="login" value="次へ">
</form>
</body>
</html>