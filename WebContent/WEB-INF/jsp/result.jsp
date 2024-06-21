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
<h1>手牌</h1>
<c:if test="${empty hand}">
	<p>一致するデータはありません。</p>
</c:if>
<c:forEach var="e" items="${hand}">
<img src ="/B5/img/ma-jan_${e}.png">
</c:forEach>
<h2>${result}</h2>
<h3>ドラ</h3>
<p>${dora}</p>
<h4>裏ドラ</h4>
<p>${tiles}</p>
<h5>役</h5>
<p>${yakus}</p>
<h6>飜</h6>
<p>${han}</p>
<h7>付</h7>
<p>${fu}</p>
<h8>点数</h8>
<p>${point}点</p>
<h9>点数の名前</h9>
<p>${title}</p>
<form method="post" action="/B5/GameServlet">
<input type="submit" name="login" value="次へ">
</form>
</body>
</html>