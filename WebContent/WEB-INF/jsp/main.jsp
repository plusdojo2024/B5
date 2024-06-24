<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link rel="stylesheet" href="/B5/css/battle.css">
<script src="/B5/js/main.js"></script>
<title>メイン</title>

</head>
<body>
<input type="checkbox" id="pop-up">
<div class="overlay">
	<div class="window">
		<h4>人数と自分の方角を選んでください</h4>
		人数：<select name="numbers">
			<option value="4">4人</option>
			<option value="3">3人</option>
		</select>
		方角：<select name="direction">
			<option value="0">東</option>
			<option value="1">南</option>
			<option value="2">西</option>
			<option value="3">北</option>
		</select>
		<label class="close" for="pop-up">決定</label>
	</div>
</div>
<div class = "tiles" id = "tiles">
	<button type="button" style="height: 50px;" id = "1man" onclick = "tilesClick(this)">
	  <img src="/B5/img/ma-jan_1man.png" alt="1man" style="height: 100%;">
	</button>
	<button type="button" style="height: 50px;" id = "2man" onclick = "tilesClick(this)">
	  <img src="/B5/img/ma-jan_2man.png" alt="2man" style="height: 100%;">
	</button>
	<button type="button" style="height: 50px;" id = "3man" onclick = "tilesClick(this)">
	  <img src="/B5/img/ma-jan_3man.png" alt="3man" style="height: 100%;">
	</button>
	<button type="button" style="height: 50px;" id = "4man" onclick = "tilesClick(this)">
	  <img src="/B5/img/ma-jan_4man.png" alt="4man" style="height: 100%;">
	</button>
	<button type="button" style="height: 50px;" id = "5man" onclick = "tilesClick(this)">
	  <img src="/B5/img/ma-jan_5man.png" alt="5man" style="height: 100%;">
	</button>
	<button type="button" style="height: 50px;" id = "6man" onclick = "tilesClick(this)">
	  <img src="/B5/img/ma-jan_6man.png" alt="6man" style="height: 100%;">
	</button>
	<button type="button" style="height: 50px;" id = "7man" onclick = "tilesClick(this)">
	  <img src="/B5/img/ma-jan_7man.png" alt="7man" style="height: 100%;">
	</button>
	<button type="button" style="height: 50px;" id = "8man" onclick = "tilesClick(this)">
	  <img src="/B5/img/ma-jan_8man.png" alt="8man" style="height: 100%;">
	</button>
	<button type="button" style="height: 50px;" id = "9man" onclick = "tilesClick(this)">
	  <img src="/B5/img/ma-jan_9man.png" alt="9man" style="height: 100%;">
	</button><br>
	<button type="button" style="height: 50px;" id = "1pin" onclick = "tilesClick(this)">
	  <img src="/B5/img/ma-jan_1pin.png" alt="1pin" style="height: 100%;">
	</button>
	<button type="button" style="height: 50px;" id = "2pin" onclick = "tilesClick(this)">
	  <img src="/B5/img/ma-jan_2pin.png" alt="2pin" style="height: 100%;">
	</button>
	<button type="button" style="height: 50px;" id = "3pin" onclick = "tilesClick(this)">
	  <img src="/B5/img/ma-jan_3pin.png" alt="3pin" style="height: 100%;">
	</button>
	<button type="button" style="height: 50px;" id = "4pin" onclick = "tilesClick(this)">
	  <img src="/B5/img/ma-jan_4pin.png" alt="4pin" style="height: 100%;">
	</button>
	<button type="button" style="height: 50px;" id = "5pin" onclick = "tilesClick(this)">
	  <img src="/B5/img/ma-jan_5pin.png" alt="5pin" style="height: 100%;">
	</button>
	<button type="button" style="height: 50px;" id = "6pin" onclick = "tilesClick(this)">
	  <img src="/B5/img/ma-jan_6pin.png" alt="6pin" style="height: 100%;">
	</button>
	<button type="button" style="height: 50px;" id = "7pin" onclick = "tilesClick(this)">
	  <img src="/B5/img/ma-jan_7pin.png" alt="7pin" style="height: 100%;">
	</button>
	<button type="button" style="height: 50px;" id = "8pin" onclick = "tilesClick(this)">
	  <img src="/B5/img/ma-jan_8pin.png" alt="8pin" style="height: 100%;">
	</button>
	<button type="button" style="height: 50px;" id = "9pin" onclick = "tilesClick(this)">
	  <img src="/B5/img/ma-jan_9pin.png" alt="9pin" style="height: 100%;">
	</button><br>
	<button type="button" style="height: 50px;" id = "1sou" onclick = "tilesClick(this)">
	  <img src="/B5/img/ma-jan_1sou.png" alt="1sou" style="height: 100%;">
	</button>
	<button type="button" style="height: 50px;" id = "2sou" onclick = "tilesClick(this)">
	  <img src="/B5/img/ma-jan_2sou.png" alt="2sou" style="height: 100%;">
	</button>
	<button type="button" style="height: 50px;" id = "3sou" onclick = "tilesClick(this)">
	  <img src="/B5/img/ma-jan_3sou.png" alt="3sou" style="height: 100%;">
	</button>
	<button type="button" style="height: 50px;" id = "4sou" onclick = "tilesClick(this)">
	  <img src="/B5/img/ma-jan_4sou.png" alt="4sou" style="height: 100%;">
	</button>
	<button type="button" style="height: 50px;" id = "5sou" onclick = "tilesClick(this)">
	  <img src="/B5/img/ma-jan_5sou.png" alt="5sou" style="height: 100%;">
	</button>
	<button type="button" style="height: 50px;" id = "6sou" onclick = "tilesClick(this)">
	  <img src="/B5/img/ma-jan_6sou.png" alt="6sou" style="height: 100%;">
	</button>
	<button type="button" style="height: 50px;" id = "7sou" onclick = "tilesClick(this)">
	  <img src="/B5/img/ma-jan_7sou.png" alt="7sou" style="height: 100%;">
	</button>
	<button type="button" style="height: 50px;" id = "8sou" onclick = "tilesClick(this)">
	  <img src="/B5/img/ma-jan_8sou.png" alt="8sou" style="height: 100%;">
	</button>
	<button type="button" style="height: 50px;" id = "9sou" onclick = "tilesClick(this)">
	  <img src="/B5/img/ma-jan_9sou.png" alt="9sou" style="height: 100%;">
	</button><br>
	<button type="button" style="height: 50px;" id = "tonfon" onclick = "tilesClick(this)">
	  <img src="/B5/img/ma-jan_tonfon.png" alt="ton" style="height: 100%;">
	</button>
	<button type="button" style="height: 50px;" id = "nanfon" onclick = "tilesClick(this)">
	  <img src="/B5/img/ma-jan_nanfon.png" alt="nan" style="height: 100%;">
	</button>
	<button type="button" style="height: 50px;" id = "syafon" onclick = "tilesClick(this)">
	  <img src="/B5/img/ma-jan_syafon.png" alt="sya" style="height: 100%;">
	</button>
	<button type="button" style="height: 50px;" id = "pefon" onclick = "tilesClick(this)">
	  <img src="/B5/img/ma-jan_pefon.png" alt="pe" style="height: 100%;">
	</button>
	<button type="button" style="height: 50px;" id = "haku" onclick = "tilesClick(this)">
	  <img src="/B5/img/ma-jan_haku.png" alt="haku" style="height: 100%;">
	</button>
	<button type="button" style="height: 50px;" id = "hatu" onclick = "tilesClick(this)">
	  <img src="/B5/img/ma-jan_hatu.png" alt="hatu" style="height: 100%;">
	</button>
	<button type="button" style="height: 50px;" id = "tyun" onclick = "tilesClick(this)">
	  <img src="/B5/img/ma-jan_tyun.png" alt="tyun" style="height: 100%;">
	</button><br>
	<button type="button" style="height: 50px;" id = "akaman" onclick = "tilesClick(this)">
	  <img src="/B5/img/ma-jan_akaman.png" alt="akaman" style="height: 100%;">
	</button>
	<button type="button" style="height: 50px;" id = "akapin" onclick = "tilesClick(this)">
	  <img src="/B5/img/ma-jan_akapin.png" alt="akapin" style="height: 100%;">
	</button>
	<button type="button" style="height: 50px;" id = "akasou" onclick = "tilesClick(this)">
	  <img src="/B5/img/ma-jan_akasou.png" alt="akasou" style="height: 100%;">
	</button>
</div>
<div id="waiting_tiles">
	待ち牌
</div>
<div class="doras">
	ドラ表示牌
	<button type = "button" onclick = "doraClick()">ドラを追加する</button><br>
		<button type="button" style="height: 50px;" id = "dora0">
	  	<img src="/B5/img/ma-jan_back.png" alt="back" style="height: 100%;" id = "doraimg0">
		</button>
		<button type="button" style="height: 50px;" id = "dora1">
	  	<img src="/B5/img/ma-jan_back.png" alt="back" style="height: 100%;" id = "doraimg1">
		</button>
		<button type="button" style="height: 50px;" id = "dora2">
	  	<img src="/B5/img/ma-jan_back.png" alt="back" style="height: 100%;" id = "doraimg2">
		</button>
		<button type="button" style="height: 50px;" id = "dora3">
	  	<img src="/B5/img/ma-jan_back.png" alt="back" style="height: 100%;" id = "doraimg3">
		</button>
		<button type="button" style="height: 50px;" id = "dora4">
	  	<img src="/B5/img/ma-jan_back.png" alt="back" style="height: 100%;" id = "doraimg4">
		</button>

</div>
<div class = "buttons">
	<button type = "button" >1つ戻る</button>
	<button type = "button" style = "display: none" id = "tsumo">ツモ</button>
	<button type = "button" style = "display: none" id = "ron">ロン</button>
	<button type = "button" style = "display: none" id = "reach">リーチ</button>
	<button type = "button">カン</button>
	<button type = "button">ポン</button>
	<button type = "button">チー</button>
	<button type = "button">局終了</button>
</div>
<div class="tehai">
	<button type="button" style="height: 50px;" id = "tehai0" onclick = "tehaiClick(this)">
	  <img src="/B5/img/ma-jan_back.png" alt="back" style="height: 100%;" id = "tehai0img">
	</button>
	<button type="button" style="height: 50px;" id = "tehai1" onclick = "tehaiClick(this)">
	  <img src="/B5/img/ma-jan_back.png" alt="back" style="height: 100%;" id = "tehai1img">
	</button>
	<button type="button" style="height: 50px;" id = "tehai2" onclick = "tehaiClick(this)">
	  <img src="/B5/img/ma-jan_back.png" alt="back" style="height: 100%;" id = "tehai2img">
	</button>
	<button type="button" style="height: 50px;" id = "tehai3" onclick = "tehaiClick(this)">
	  <img src="/B5/img/ma-jan_back.png" alt="back" style="height: 100%;" id = "tehai3img">
	</button>
	<button type="button" style="height: 50px;" id = "tehai4" onclick = "tehaiClick(this)">
	  <img src="/B5/img/ma-jan_back.png" alt="back" style="height: 100%;" id = "tehai4img">
	</button>
	<button type="button" style="height: 50px;" id = "tehai5" onclick = "tehaiClick(this)">
	  <img src="/B5/img/ma-jan_back.png" alt="back" style="height: 100%;" id = "tehai5img">
	</button>
	<button type="button" style="height: 50px;" id = "tehai6" onclick = "tehaiClick(this)">
	  <img src="/B5/img/ma-jan_back.png" alt="back" style="height: 100%;" id = "tehai6img">
	</button>
	<button type="button" style="height: 50px;" id = "tehai7" onclick = "tehaiClick(this)">
	  <img src="/B5/img/ma-jan_back.png" alt="back" style="height: 100%;" id = "tehai7img">
	</button>
	<button type="button" style="height: 50px;" id = "tehai8" onclick = "tehaiClick(this)">
	  <img src="/B5/img/ma-jan_back.png" alt="back" style="height: 100%;" id = "tehai8img">
	</button>
	<button type="button" style="height: 50px;" id = "tehai9" onclick = "tehaiClick(this)">
	  <img src="/B5/img/ma-jan_back.png" alt="back" style="height: 100%;" id = "tehai9img">
	</button>
	<button type="button" style="height: 50px;" id = "tehai10" onclick = "tehaiClick(this)">
	  <img src="/B5/img/ma-jan_back.png" alt="back" style="height: 100%;" id = "tehai10img">
	</button>
	<button type="button" style="height: 50px;" id = "tehai11" onclick = "tehaiClick(this)">
	  <img src="/B5/img/ma-jan_back.png" alt="back" style="height: 100%;" id = "tehai11img">
	</button>
	<button type="button" style="height: 50px;" id = "tehai12" onclick = "tehaiClick(this)">
	  <img src="/B5/img/ma-jan_back.png" alt="back" style="height: 100%;" id = "tehai12img">
	</button>
</div>
<div class="tumotile">
	ツモ牌<br>
	<button type="button" style="height: 50px;" id = "tumotile" onclick = "tumoTileClick()">
	  <img src="/B5/img/ma-jan_back.png" alt="back" style="height: 100%;"id="tumotileimg">
	</button>
</div>
</body>
</html>