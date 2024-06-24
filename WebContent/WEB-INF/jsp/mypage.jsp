<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<link rel="stylesheet" href="/B5/css/mypage.css">
<link rel="stylesheet" href="/B5/css/common.css">

<head>
<meta charset="UTF-8">
<title>マイページ</title>
</head>
<body>


  <form method="post" action="/B5/MypageServlet">
      <div class="user">
	<img id="preview" accept="image/*"  src="/B5/img/profile.jpg" ><br>

	<div class="button">
		<input type="file" name="image" id="form"
		accept=".jpg, .jpeg, .png, .gif" onchange="previewFile(this);" >
	</div><br>


	<h4>USERID:</h4>
	<p>${mypage.userid}</p><br>
	</div>
		<h4>ニックネーム:</h4>
		<input type="text" class="name" name="name" value="${mypage.name}"><br>
		<h4>ひとこと:</h4>
		<input type="text" class="userid" name="word" value="${mypage.word}"><br>
		<%-- <textarea rows="5" cols="15">${mypage.word}</textarea> --%>
		<h4>好きな役:</h4>
		<select name="likeyaku">
			<option value="empty" ></option>
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
			<option value="doujun">三色同順(サンショクドウジュン)</option>
			<option value="honroutou">混老頭(ホンロウトウ)</option>
			<option value="ikki">一気通貫(イッキツウカン)</option>
			<option value="chanta">チャンタ</option>
			<option value="syousangen">小三元(ショウサンゲン)</option>
			<option value="sankantu">三槓子(サンカンツ)</option>
			<option value="honiso">混一色(ホンイーソー)</option>
			<option value="jun">純チャン(ジュンチャン)</option>
			<option value="ryan">二盃口(リャンペイコー)</option>
			<option value="nagasi">流し満貫(ナガシマンガン)</option>
			<option value="tiniso">清一色(チンイーソー)</option>
			<option value="tenho">天和(テンホー)</option>
			<option value="tiho">地和(チーホー)</option>
			<option value="renho">人和(レンホー)</option>
			<option value="ryuiso">緑一色(リューイーソー)</option>
			<option value="daisangen">大三元(ダイサンゲン)</option>
			<option value="syoususi">小四喜(ショウスーシー)</option>
			<option value="tuiso">字一色(ツーイーソー)</option>
			<option value="kokusi">国士無双(コクシムソウ)</option>
			<option value="churen">九連宝燈(チューレンポートウ)</option>
			<option value="suankou">四暗刻(スーアンコウ)</option>
			<option value="tinroutou">清老頭(チンロウトウ)</option>
			<option value="sukantu">四槓子(スーカンツ)</option>
			<option value="tanki">四暗刻単騎(スーアンコウタンキ)</option>
			<option value="daisusi">大四喜(ダイスーシー)</option>
			<option value="junsei">純正九蓮宝燈(ジュンセイチューレンポートウ)</option>
			<option value="sanmen">国士無双十三面待ち(コクシムソウジュウサンメンマチ)</option>
		</select><br> <input type="submit" class="regist" value="更新"><br>

	    <input type="hidden" name ="image_data" value="${mypage.image}">
		<input type="hidden" name="id" value="${mypage.id}">
		<input type="hidden" id="photo" name="photo" value="">

		<h4>戦績</h4><br>
		<p>総対局数：${mypage.record}</p><br>
		<p>勝利数：</p><br>
		<p>勝率：</p><br>

	</form>



<a href="/B5/HomeServlet"><button class="home" type="button">ホーム</button></a>
  <script>
 'use strict';
  function previewFile(hoge){
    var fileData = new FileReader();
    fileData.onload = (function() {
      //id属性が付与されているimgタグのsrc属性に、fileReaderで取得した値の結果を入力することで
      //プレビュー表示している
      document.getElementById('preview').src = fileData.result;
      document.getElementById('photo').value = fileData.result;
    });
    fileData.readAsDataURL(hoge.files[0]);
  }


  </script>

</body>
</html>
