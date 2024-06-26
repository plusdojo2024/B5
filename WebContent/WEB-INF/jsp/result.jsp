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
<header>
<h1 id="logo">
<a href=""><img src="/B5/img/kekka-logo.png" width="198" height="147"></a>
</h1>
</header>
<!-- 項目を表示 -->
<div class ="tehai-kekka">
<h2>手牌</h2>
<c:if test="${empty hand}">
	<p>一致するデータはありません。</p>
</c:if>
<c:forEach var="e" items="${hand}">
	<img src ="/B5/img/ma-jan_${e}.png">
</c:forEach>
<!-- ツモ、ロン -->
<img src ="/B5/img/${result}.PNG" width="290" height="170">
<br>
<p>&nbsp;</p>
</div>
<!-- ドラの表示 -->
<div class ="dora">
<img src="/B5/img/dora.PNG" width="85" height="70">
<c:if test ="${empty Doras}">
	<p>なし</p>
</c:if>
<c:forEach var="d" items="${Doras}">
	<img src ="/B5/img/ma-jan_${d}.png">
</c:forEach>

<!-- 裏ドラの表示 -->
<img src="/B5/img/uradora.PNG" width="85" height="70">
<c:if test ="${empty uraDoras}">
	<p>なし</p>
</c:if>
<c:forEach var="u" items="${uraDoras}">
	<img src ="/B5/img/ma-jan_${u}.png">
</c:forEach>
</div>
<p>&nbsp;</p>
<!-- 役表示 -->

<div class="grid">
	<c:forEach var = "e" items="${yakus}">

	<div class="grid__item">役：</div>
	<div class="grid__item">${e}</div>

	</c:forEach>
</div>


<!-- 飜の表示 -->
<div class ="han-fu">
<h2>${han}飜 ${fu}付</h2>
</div>
<img src ="/B5/img/${title}.PNG" width="290" height="170">
<div class ="point">
<h2>点数：${point}点</h2>
</div>
<form method="post" action="/B5/GameServlet">
<input type="submit" name="login" value="次へ">
</form>
</body>
</html>