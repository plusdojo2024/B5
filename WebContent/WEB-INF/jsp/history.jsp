<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page import="model.Historys" %>
<% Historys historys = (Historys) request.getAttribute("historys"); %>

<!DOCTYPE HTML>
<html>
<head>
  <meta charset="UTF-8">
<link rel="stylesheet" href="/B5/css/history.css">
</head>
<body>

    <header>
    </header>
    <main>
    <h1 class="h1">対戦履歴一覧</h1>
<div class="header">

      <div class="logo"></div>

      <div class="nav">

        <input id="drawer_input" class="drawer_hidden" type="checkbox">

        <label for="drawer_input" class="drawer_open"><span></span></label>

        <nav class="nav_content">
          <ul class="nav_list">
            <li class="nav_item"><a href="HomeServlet">ホームへ</a></li>
            <li class="nav_item"><a href="MypageServlet">マイページ</a></li>
            <li class="nav_item"><a href="RuleServlet">ルール</a></li>
            <li class="nav_item"><a href="MainServlet">対局開始画面</a></li>
          </ul>
        </nav>
        </div>
      </div>
           	<c:forEach var="h" items="${hisList}">
      	<div class="container">
      	<p class="date"> <strong>対局日時:${h.matchDay}</strong></p>
 		<div class="user">
  			<table>
    		<tr>
      			<th><h2 class="rank">${h.rank }位</h2></th>
      			<th><h2 class="point">${h.point }点</h2></th>
     		</tr>
  			</table>
		</div>

		<div class="ranking">

		<table style="margin-left:750px;" >
		<tr class="unser">
		<th><strong>順位</strong></th>
		<th><strong>&nbsp;名前&nbsp;</strong></th>
		<th><strong>&nbsp;ポイント</strong></th>
		</tr>

			<tr class="yuser">

			<td><strong>${h.rank }</strong></td>
			<td><strong>${h.userId }</strong></td>
			<td><strong>${h.point }</strong></td>

			</tr>
		<c:forEach var="o" items="${oppList}">

			<tr>
			<td>${o.rank}</td>
			<td>&nbsp;${o.name}&nbsp;</td>
			<td>&nbsp;${o.point }</td>
			</tr>

		</c:forEach>
		</table>
		</div>
<nav class="botan">
<a href="/B5/HistoryDetailsServlet"><button style="margin-bottom:20px;">詳細</button></a>
</nav>
 		</div>
</c:forEach>
</main>


</body>
</html>
