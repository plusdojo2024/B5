<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page import="model.Historys" %>
<% Historys historys = (Historys) request.getAttribute("historys"); %>

<!DOCTYPE HTML>
<html>
<head>
  <meta charset="UTF-8">
<link rel="stylesheet" href="/B5/css/History.css">
<link rel="stylesheet" type="text/css" href="/B5/css/common.css">
</head>
<body>

    <header class="header">
      <!-- ヘッダーロゴ -->
      <div class="logo"></div>

      <!-- ハンバーガーメニュー部分 -->
      <div class="nav">

        <!-- ハンバーガーメニューの表示・非表示を切り替えるチェックボックス -->
        <input id="drawer_input" class="drawer_hidden" type="checkbox">

        <!-- ハンバーガーアイコン -->
        <label for="drawer_input" class="drawer_open"><span></span></label>

        <!-- メニュー -->
        <nav class="nav_content">
          <ul class="nav_list">
            <li class="nav_item"><a href="">メニュー1</a></li>
            <li class="nav_item"><a href="">メニュー2</a></li>
            <li class="nav_item"><a href="">メニュー3</a></li>
          </ul>
        </nav>

      </div>
    </header>
    <main>
    <h1 class="his">対戦履歴一覧</h1>

	<div class="container">
	<c:forEach var="e" items="${hisList}">
      	<p class="date">対戦日時 ${e.matchDay}</p><br>
 		<div class="user">
  			<table>
    		<tr>
      			<td><h2 class="rank">${e.rank }位</h2></td>
      			<td><h2 class="point">${e.point }点</h2></td>
     		</tr>
  			</table>
		</div>
		<div class="ranking">
		<table style="margin-left:700px;">
			<tr>
			<th>順位${e.rank }位</th>
			<th>名前${e.userId }</th>
			</tr>

		<c:forEach var="o" items="${oppList}">

			<tr>
			<th>２${o.rank}位</th>
			<th>名前${o.name}</th>
			</tr>

			<tr>
			<th>３${o.rank}位</th>
			<th>名前${o.name}</th>
			</tr>

			<tr>
			<th>4${o.rank}位</th>
			<th>名前${o.name}</th>
			</tr>

		</c:forEach>

		</table>
		</div>


	</c:forEach>

	<input type="submit" name="submit" value="詳細">

	</div>

</main>


</body>
</html>

