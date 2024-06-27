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
<h2>手牌</h2>
<div class="tehai">
<c:if test="${empty hand}">
	<p>一致するデータはありません。</p>
</c:if>
<c:forEach var="e" items="${hand}">
	<img src ="/B5/img/ma-jan_${e}.png">
</c:forEach>
<!-- ツモ、ロン -->
<img src ="/B5/img/${result}.PNG" width="200" height="140">
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

	<div class="grid__item"><strong>役：</strong></div>
	<div class="grid__item2"><strong>${e}</strong></div>

	</c:forEach>
</div>


<!-- 飜の表示 -->
<div class ="han-fu">
<h2>${han}飜 ${fu}付</h2>
</div>
<c:if test="${title!=''}">
<img src ="/B5/img/${title}.PNG" width="290" height="170">
</c:if>
<div class ="point">
<h2><span class="under_line">点数：${point}点</span></h2>
</div>
<form method="post" action="/B5/GameServlet">
<input type="submit" name="login" value="次へ">
</form>
</body>
</html>