<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
  <head>
  <meta charset="UTF-8">
  <header id="header">
  </header>
  <title>麻雀ガイド画面</title>
  <link rel="stylesheet" type="text/css" href="/B5/css/majaguide.css">
  <link rel="stylesheet" href="../../WebContent/css/majanguide.css">
  <link rel="stylesheet" href="../../WebContent/css/common.css">
  <form method="post" action="/B5/GuideServlet">
  </form>

  </head>
  <body>
  <div class="tab02">
  <input id="table01_01" type="radio" name="table01" class="tab_active" checked="checked" /><label class="tab_label" for="table01_01">ルール</label>
  <div class="tab_content">
  コンテンツ内容 1
  </div>
  <input id="table01_02" type="radio" name="table01" class="tab_active" /><label class="tab_label" for="table01_02">始め方</label>
  <div class="tab_content">
  コンテンツ内容 2
  </div>
  <input id="table01_03" type="radio" name="table01" class="tab_active" /><label class="tab_label" for="table01_03">牌の説明</label>
  <div class="tab_content">
  コンテンツ内容 3
  </div>
  <input id="table01_04" type="radio" name="table01" class="tab_active" /><label class="tab_label" for="table01_04">役</label>
  <div class="tab_content">
  コンテンツ内容 4
  </div>
  </div>
  </body>

</html>