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

<%
	String filePath = (String)request.getAttribute("filePath");
%>
  <form method="post" action="/B5/MypageServlet" enctype="multipart/form-data" id="form">
   	<div class="button">
	<img id="preview" accept="image/*"  src="${mypage.image}" alt="img"><br>
	<input type="file" id="form" name="imageFile"
	accept=".jpg, .jpeg, .png, .gif" onchange="previewFile(this);" >


	</div><br>

	<div class="user">
	<label>USERID:</label>
	<p>${mypage.userid}</p><br>
	<label>ニックネーム:</label>
	<input type="text" class="name" name="name" value="${mypage.name}"><br>
	<label>ひとこと:</label>
	<input type="text" class="userid" name="word" value="${mypage.word}"><br>
	<%-- <textarea rows="5" cols="15">${mypage.word}</textarea> --%>
	<label>好きな役:</label>
	<select name="likeyaku" id="select">
		<option value="empty"></option>
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
	</select><br> <input type="submit" class="regist" value="更新" id="btn"><br>

	    <input type="hidden" id="yaku" name ="image_data" value="${mypage.image}">
		<input type="hidden" name="id" value="${mypage.id}">
		<input type="hidden" id="photo" name="photo" value="">
		<input type="hidden" name="pinfu" value="${mypage.likeyaku}" id="pinfu">
		<h4>戦績</h4>
		<p>総対局数：10</p><br>
		<p>勝利数：6</p><br>
		<p>勝率：60%</p><br>
	</div>
	</form>

</body>

<footer>
<a href="/B5/HomeServlet"><button class="home" type="button">ホーム</button></a>
</footer>

  <script>
 'use strict';
 let formObj = document.getElementById('form');
 let MessageObj = document.getElementById('message');

 /* [ログイン]ボタンをクリックしたときの処理 */


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

 let LikeYaku = document.getElementById('select');
 let Yaku = document.getElementById('yaku');
 LikeYaku.options[exchange(Yaku.value)].selected = true;
 LikeYaku.addEventListener('change',valueChange);
 console.log(Yaku.value);
 function exchange(yaku){
	 switch(yaku){
	 case "pinfu":
		 return 1;

	 case "ipeco":
		 return 2;

	 case "sangenhai":
		 return 3;

	 case "kazehai":
		 return 4;

	 case "chankan":
		 return 5;

	 case "kaihou":
		 return 6;

	 case "haitei":
		 return 7;

	 case "houtei":
		 return 8;

	 case "tii":
		 return 9;

	 case "renpu":
		 return 10;

	 case "toitoi":
		 return 11;

	 case "sanankou":
		 return 12;

	 case "doukou":
		 return 13;

	 case "doujun":
		 return 14;

	 case "honroutou":
		 return 15;

	 case "ikki":
		 return 16;

	 case "chanta":
		 return 17;

	 case "syousangen":
		 return 18;

	 case "sankantu":
		 return 19;

	 case "honiso":
		 return 20;

	 case "jun":
		 return 21;

	 case "ryan":
		 return 22;

	 case "nagasi":
		 return 23;

	 case "tiniso":
		 return 24;

	 case	"tenho":
		 return 25;

	 case "tiho":
		 return 26;

	 case "renho":
		 return 27;

	 case "ryuiso":
		 return 28;

	 case "daisangen":
		 return 29;

	 case "syoususi":
		 return 30;

	 case "tuiso":
		 return 31;

	 case "kokusi":
		 return 32;

	 case "churen":
		 return 33;

	 case "suankou":
		 return 34;

	 case "tinroutou":
		 return 35;

	 case "sukantu":
		 return 36;

	 case "tinroutou":
		 return 37;

	 case "sukantu":
		 return 38;

	 case  "tanki":
		 return 39;

	 case "daisusi":
		 return 40;

	 case "junsei":
		 return 41;

	 case "sanmen":
	     return 42;
	 }
 }
  </script>


</html>
