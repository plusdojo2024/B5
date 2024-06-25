<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link rel="stylesheet" href="/B5/css/battle.css">
<script src="/B5/js/main.js"></script>
<title>メイン</title>

</head>
<body>
<c:choose>
<c:when test="${mainCount == 0}">
		<div class="overlay" id = "start">
			<div class="window">
				<h4>人数と自分の方角を選んでください</h4>
				人数：<select id="numbers">
					<option value="4">4人</option>
					<option value="3">3人</option>
				</select>
				方角：<select id="wind">
					<option value="0">東</option>
					<option value="1">南</option>
					<option value="2">西</option>
					<option value="3">北</option>
				</select>
				<button class="close" id = "start0" onclick = "startClick(this)">決定</button>
			</div>
		</div>
	</c:when>
	<c:otherwise>
		<div class="overlay" id = "start">
			<div class="window">
				<h4>親について選択してください</h4>
				<select name="numbers">
					<option value="0">親流れ</option>
					<option value="1">親継続</option>
				</select>

				<button class="close" id = "start0" onclick = "startClick(this)">決定</button>
			</div>
		</div>
	</c:otherwise>
</c:choose>
<div class = "tiles" id = "tiles">
	<button type="button" class="tileButton" id = "1man" onclick = "tilesClick(this)">
	  <img src="/B5/img/ma-jan_1man.png" alt="1man" class="tile">
	</button>
	<button type="button" class="tileButton" id = "2man" onclick = "tilesClick(this)">
	  <img src="/B5/img/ma-jan_2man.png" alt="2man" class="tile">
	</button>
	<button type="button" class="tileButton" id = "3man" onclick = "tilesClick(this)">
	  <img src="/B5/img/ma-jan_3man.png" alt="3man" class="tile">
	</button>
	<button type="button" class="tileButton" id = "4man" onclick = "tilesClick(this)">
	  <img src="/B5/img/ma-jan_4man.png" alt="4man" class="tile">
	</button>
	<button type="button" class="tileButton" id = "5man" onclick = "tilesClick(this)">
	  <img src="/B5/img/ma-jan_5man.png" alt="5man" class="tile">
	</button>
	<button type="button" class="tileButton" id = "6man" onclick = "tilesClick(this)">
	  <img src="/B5/img/ma-jan_6man.png" alt="6man" class="tile">
	</button>
	<button type="button" class="tileButton" id = "7man" onclick = "tilesClick(this)">
	  <img src="/B5/img/ma-jan_7man.png" alt="7man" class="tile">
	</button>
	<button type="button" class="tileButton" id = "8man" onclick = "tilesClick(this)">
	  <img src="/B5/img/ma-jan_8man.png" alt="8man" class="tile">
	</button>
	<button type="button" class="tileButton" id = "9man" onclick = "tilesClick(this)">
	  <img src="/B5/img/ma-jan_9man.png" alt="9man" class="tile">
	</button><br>
	<button type="button" class="tileButton" id = "1pin" onclick = "tilesClick(this)">
	  <img src="/B5/img/ma-jan_1pin.png" alt="1pin" class="tile">
	</button>
	<button type="button" class="tileButton" id = "2pin" onclick = "tilesClick(this)">
	  <img src="/B5/img/ma-jan_2pin.png" alt="2pin" class="tile">
	</button>
	<button type="button" class="tileButton" id = "3pin" onclick = "tilesClick(this)">
	  <img src="/B5/img/ma-jan_3pin.png" alt="3pin" class="tile">
	</button>
	<button type="button" class="tileButton" id = "4pin" onclick = "tilesClick(this)">
	  <img src="/B5/img/ma-jan_4pin.png" alt="4pin" class="tile">
	</button>
	<button type="button" class="tileButton" id = "5pin" onclick = "tilesClick(this)">
	  <img src="/B5/img/ma-jan_5pin.png" alt="5pin" class="tile">
	</button>
	<button type="button" class="tileButton" id = "6pin" onclick = "tilesClick(this)">
	  <img src="/B5/img/ma-jan_6pin.png" alt="6pin" class="tile">
	</button>
	<button type="button" class="tileButton" id = "7pin" onclick = "tilesClick(this)">
	  <img src="/B5/img/ma-jan_7pin.png" alt="7pin" class="tile">
	</button>
	<button type="button" class="tileButton" id = "8pin" onclick = "tilesClick(this)">
	  <img src="/B5/img/ma-jan_8pin.png" alt="8pin" class="tile">
	</button>
	<button type="button" class="tileButton" id = "9pin" onclick = "tilesClick(this)">
	  <img src="/B5/img/ma-jan_9pin.png" alt="9pin" class="tile">
	</button><br>
	<button type="button" class="tileButton" id = "1sou" onclick = "tilesClick(this)">
	  <img src="/B5/img/ma-jan_1sou.png" alt="1sou" class="tile">
	</button>
	<button type="button" class="tileButton" id = "2sou" onclick = "tilesClick(this)">
	  <img src="/B5/img/ma-jan_2sou.png" alt="2sou" class="tile">
	</button>
	<button type="button" class="tileButton" id = "3sou" onclick = "tilesClick(this)">
	  <img src="/B5/img/ma-jan_3sou.png" alt="3sou" class="tile">
	</button>
	<button type="button" class="tileButton" id = "4sou" onclick = "tilesClick(this)">
	  <img src="/B5/img/ma-jan_4sou.png" alt="4sou" class="tile">
	</button>
	<button type="button" class="tileButton" id = "5sou" onclick = "tilesClick(this)">
	  <img src="/B5/img/ma-jan_5sou.png" alt="5sou" class="tile">
	</button>
	<button type="button" class="tileButton" id = "6sou" onclick = "tilesClick(this)">
	  <img src="/B5/img/ma-jan_6sou.png" alt="6sou" class="tile">
	</button>
	<button type="button" class="tileButton" id = "7sou" onclick = "tilesClick(this)">
	  <img src="/B5/img/ma-jan_7sou.png" alt="7sou" class="tile">
	</button>
	<button type="button" class="tileButton" id = "8sou" onclick = "tilesClick(this)">
	  <img src="/B5/img/ma-jan_8sou.png" alt="8sou" class="tile">
	</button>
	<button type="button" class="tileButton" id = "9sou" onclick = "tilesClick(this)">
	  <img src="/B5/img/ma-jan_9sou.png" alt="9sou" class="tile">
	</button><br>
	<button type="button" class="tileButton" id = "tonfon" onclick = "tilesClick(this)">
	  <img src="/B5/img/ma-jan_tonfon.png" alt="ton" class="tile">
	</button>
	<button type="button" class="tileButton" id = "nanfon" onclick = "tilesClick(this)">
	  <img src="/B5/img/ma-jan_nanfon.png" alt="nan" class="tile">
	</button>
	<button type="button" class="tileButton" id = "syafon" onclick = "tilesClick(this)">
	  <img src="/B5/img/ma-jan_syafon.png" alt="sya" class="tile">
	</button>
	<button type="button" class="tileButton" id = "pefon" onclick = "tilesClick(this)">
	  <img src="/B5/img/ma-jan_pefon.png" alt="pe" class="tile">
	</button>
	<button type="button" class="tileButton" id = "haku" onclick = "tilesClick(this)">
	  <img src="/B5/img/ma-jan_haku.png" alt="haku" class="tile">
	</button>
	<button type="button" class="tileButton" id = "hatu" onclick = "tilesClick(this)">
	  <img src="/B5/img/ma-jan_hatu.png" alt="hatu" class="tile">
	</button>
	<button type="button" class="tileButton" id = "tyun" onclick = "tilesClick(this)">
	  <img src="/B5/img/ma-jan_tyun.png" alt="tyun" class="tile">
	</button><br>
	<button type="button" class="tileButton" id = "akaman" onclick = "tilesClick(this)">
	  <img src="/B5/img/ma-jan_akaman.png" alt="akaman" class="tile">
	</button>
	<button type="button" class="tileButton" id = "akapin" onclick = "tilesClick(this)">
	  <img src="/B5/img/ma-jan_akapin.png" alt="akapin" class="tile">
	</button>
	<button type="button" class="tileButton" id = "akasou" onclick = "tilesClick(this)">
	  <img src="/B5/img/ma-jan_akasou.png" alt="akasou" class="tile">
	</button>
</div>

<div class="doras">
	ドラ表示牌
	<button type = "button"  onclick = "doraClick()">ドラを追加する</button><br>
		<button type="button" class="dorasTileButton" id = "dora0">
	  	<img src="/B5/img/ma-jan_back.png" alt="back" class="tile" id = "doraimg0">
		</button>
		<button type="button" class="dorasTileButton" id = "dora1">
	  	<img src="/B5/img/ma-jan_back.png" alt="back" class="tile" id = "doraimg1">
		</button>
		<button type="button" class="dorasTileButton" id = "dora2">
	  	<img src="/B5/img/ma-jan_back.png" alt="back" class="tile" id = "doraimg2">
		</button>
		<button type="button" class="dorasTileButton" id = "dora3">
	  	<img src="/B5/img/ma-jan_back.png" alt="back" class="tile" id = "doraimg3">
		</button>
		<button type="button" class="dorasTileButton" id = "dora4">
	  	<img src="/B5/img/ma-jan_back.png" alt="back" class="tile" id = "doraimg4">
		</button>

</div>

<div id="waiting_tiles">
	<p>待ち牌</p>
</div>

<div id = "doraText">ドラを選択してください</div>
<div id = "registText">手牌を選択してください</div>

<div id = "pon">
	<p>ポンする牌を選んでください</p>
	<img src="/B5/img/ma-jan_back.png" alt="back" style="height: 44px;" id = "ponTile">
	<button type = "button" onclick = "ponDecision()">決定</button>
</div>

<!--
<div id = "chi">
	<p>ポンする牌を選んでください</p>
	<img src="/B5/img/ma-jan_back.png" alt="back" style="height: 44px;" id = "chiTile0">
	<img src="/B5/img/ma-jan_back.png" alt="back" style="height: 44px;" id = "chiTile1">
	<img src="/B5/img/ma-jan_back.png" alt="back" style="height: 44px;" id = "chiTile2">
	<button type = "button" onclick = "chiDecision()">決定</button>
</div>
-->


<div class = "buttons">
	<button type = "button" >1つ戻る</button>
	<button type = "button" style = "display: none" id = "tsumo" onclick="resultClick(this)">ツモ</button>
	<button type = "button" style = "display: none" id = "ron" onclick="resultClick(this)">ロン</button>
	<button type = "button" style = "display: none" id = "reach" onclick="reachClick()">リーチ</button>
	<button type = "button">カン</button>
	<button type = "button" onclick="ponClick()">ポン</button>
	<button type = "button" onclick="chiClick()">チー</button>
	<button type = "button" id = "finish" onclick="resultClick(this)">局終了</button>
</div>

<div class="tehai">
	<button type="button" class="tehaiTileButton" id = "tehai0" onclick = "tehaiClick(this)">
	  <img src="/B5/img/ma-jan_back.png" alt="back" class="tile" id = "tehai0img">
	</button>
	<button type="button" class="tehaiTileButton" id = "tehai1" onclick = "tehaiClick(this)">
	  <img src="/B5/img/ma-jan_back.png" alt="back" class="tile" id = "tehai1img">
	</button>
	<button type="button" class="tehaiTileButton" id = "tehai2" onclick = "tehaiClick(this)">
	  <img src="/B5/img/ma-jan_back.png" alt="back" class="tile" id = "tehai2img">
	</button>
	<button type="button" class="tehaiTileButton" id = "tehai3" onclick = "tehaiClick(this)">
	  <img src="/B5/img/ma-jan_back.png" alt="back" class="tile" id = "tehai3img">
	</button>
	<button type="button" class="tehaiTileButton" id = "tehai4" onclick = "tehaiClick(this)">
	  <img src="/B5/img/ma-jan_back.png" alt="back" class="tile" id = "tehai4img">
	</button>
	<button type="button" class="tehaiTileButton" id = "tehai5" onclick = "tehaiClick(this)">
	  <img src="/B5/img/ma-jan_back.png" alt="back" class="tile" id = "tehai5img">
	</button>
	<button type="button" class="tehaiTileButton" id = "tehai6" onclick = "tehaiClick(this)">
	  <img src="/B5/img/ma-jan_back.png" alt="back" class="tile" id = "tehai6img">
	</button>
	<button type="button" class="tehaiTileButton" id = "tehai7" onclick = "tehaiClick(this)">
	  <img src="/B5/img/ma-jan_back.png" alt="back" class="tile" id = "tehai7img">
	</button>
	<button type="button" class="tehaiTileButton" id = "tehai8" onclick = "tehaiClick(this)">
	  <img src="/B5/img/ma-jan_back.png" alt="back" class="tile" id = "tehai8img">
	</button>
	<button type="button" class="tehaiTileButton" id = "tehai9" onclick = "tehaiClick(this)">
	  <img src="/B5/img/ma-jan_back.png" alt="back" class="tile" id = "tehai9img">
	</button>
	<button type="button" class="tehaiTileButton" id = "tehai10" onclick = "tehaiClick(this)">
	  <img src="/B5/img/ma-jan_back.png" alt="back" class="tile" id = "tehai10img">
	</button>
	<button type="button" class="tehaiTileButton" id = "tehai11" onclick = "tehaiClick(this)">
	  <img src="/B5/img/ma-jan_back.png" alt="back" class="tile" id = "tehai11img">
	</button>
	<button type="button" class="tehaiTileButton" id = "tehai12" onclick = "tehaiClick(this)">
	  <img src="/B5/img/ma-jan_back.png" alt="back" class="tile" id = "tehai12img">
	</button>
</div>
<div class="tumotile">
	ツモ牌<br>
	<button type="button" class="tumohaiTileButton" id = "tumotile" onclick = "tumoTileClick()">
	  <img src="/B5/img/ma-jan_back.png" alt="back" class="tile"id="tumotileimg">
	</button>
</div>
</body>
</html>