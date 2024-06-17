<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<link rel="stylesheet" href="/B5/css/mypage.css">

<head>
<meta charset="UTF-8">
<title>マイページ</title>
</head>
<body>
<img id="img" accept="image/*" src="/B5/img/profile.jpg">

<div class="button">
  <input type="file" name="logo" id="form" accept=".jpg, .jpeg, .png, .gif">
  <button type="button" id="delete">削除</button>
</div>

<form>
<h3>ニックネーム:</h3><input type="text" class="name"><input type="button" class="nameChange" value="編集">


<h3>ID:</h3><input type="text" class="id">

<h3>ひとこと</h3>
<textarea name="message" rows="5" cols="15"></textarea>
<h3>好きな役:</h3><select name="yaku" >
  <option value="pinfu">平和(ピンフ)</option>
  <option value="ipeco">一盃口(イーペーコー)</option>
  <option value="sangenhai">三元牌</option>
  <option value="kazehai">風牌</option>
  <option value="chankan">槍槓(チャンカン)</option>
  <option value="kaihou">嶺上開花(リンシャンカイホウ)</option>
  <option value="haitei">海底撈月(ハイテイラオユエ)</option>
  <option value="houtei">河底撈魚(ホウテイラオユイ)</option>
  <option value="tii">七対子(チートイツ)</option>
  <option value="renpu">連風牌(レンプウハイ)</option>
  <option value="toitoi">対々和(トイトイ)</option>
  <option value="sanankou">三暗刻(サンアンコウ)</option>
  <option value="doukou">三色同刻(サンショクドウコウ)</option>
  <option value="doujun"></option>
  <option value=""></option>
  <option value=""></option>
</select>
</form>

</body>
</html>