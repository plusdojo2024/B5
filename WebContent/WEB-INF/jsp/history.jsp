<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE HTML>
<html>
<head>
  <meta charset="UTF-8">
<link rel="stylesheet" href="/B5/css/History.css">
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
    <h2 class="his">対戦履歴一覧</h2 size="20px">
    <h1>点数</h1>

<div class="container">
    <c:forEach var="e" items="${history}">
      <form method="post" action="/B5/HistoryServlet">

      <p class="date">対戦日時<name="macth_day" value="${e.macth_day}" readonly="readonly"></p><br>
      <table class="user">
      <tr>
      <th><h2 class="rank"><input type="text" name="rank" value="${e.rank}" readonly="readonly"></h2></th>
      <th><h2 class="point"><input type="text" name="point" value="${e.point}" readonly="readonly"></h2></th>
      </tr>
      </table>
      </form>
<div class="ranking">
      <table style="margin-left:700px;">
      <tr>
      <form method="post" action="/B5/HistoryServlet" >
      <th>順位<input type="text" name="rank" value="${e.rank}" readonly="readonly"></th>
      <th>名前<input type="text" name="name" value="${e.name}" readonly="readonly"></th>
      </tr>
      </form>
      <form method="post" action="/B5/OpponentServlet">
      <tr>
      <th>順位<input type="text" name="rank" value="${e.rank}" readonly="readonly"></th>
      <th>名前<input type="text" name="name" value="${e.name}" readonly="readonly"></th>
      </tr>
      <tr>
      <th>順位<input type="text" name="rank" value="${e.rank}" readonly="readonly"></th>
      <th>名前<input type="text" name="name" value="${e.name}" readonly="readonly"></th>
      </tr>
      <tr>
      <th>順位<input type="text" name="rank" value="${e.rank}" readonly="readonly"></th>
      <th>名前<input type="text" name="name" value="${e.name}" readonly="readonly"></th>
      </tr>
      </table>
</div>
      <input type="submit" name="submit" value="詳細">
      </form>
    </c:forEach>
</div>
    </main>


</body>
<fotter>
</fotter>
<style>
</style>
</html>

