
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
  <head>
  <meta charset="UTF-8">
  <title>麻雀ガイド画面</title>
  <link rel="stylesheet" type="text/css" href="/B5/css/guide.css">
  <link rel="stylesheet" type="text/css" href="/B5/css/common.css">
</head>

<body>
<header>
        <ul class="g-menu">
          <li class="g-menu__item">
         <input type="radio" name="tabset" id="start" ><label for="start"  class="g-menu__link">ルール</label>
            <ul class="g-menu__dropdown-menu">
            <li class="g-menu__dropdown-menu-item">
                <button id="mahajan" class="g-menu__dropdown-menu-link">麻雀とは？</button>
                </li>
              <li class="g-menu__dropdown-menu-item">
                <button id="kanseikei" class="g-menu__dropdown-menu-link">完成形</button>
              </li>
              <li class="g-menu__dropdown-menu-item">
                <button id="rontotsumo" class="g-menu__dropdown-menu-link">ロンとツモ</button>
              </li>
              <li class="g-menu__dropdown-menu-item">
                 <button id="reach" class="g-menu__dropdown-menu-link">リーチ</button>
              </li>
              <li class="g-menu__dropdown-menu-item">
                 <button id="naki" class="g-menu__dropdown-menu-link">鳴き</button>
                </li>
                <li class="g-menu__dropdown-menu-item">
                <button id="huriten"  class="g-menu__dropdown-menu-link" >フリテン</button>
                </li>
              <li class="g-menu__dropdown-menu-item">
                 <button id="dora" class="g-menu__dropdown-menu-link">ドラ</button>
                 </li>
              <li class="g-menu__dropdown-menu-item">
                 <button id="uradora" class="g-menu__dropdown-menu-link">裏ドラ</button>
              </li>
             <li class="g-menu__dropdown-menu-item">
                <button id="tensuu"class="g-menu__dropdown-menu-link">点数</button>
              </li>
              <li class="g-menu__dropdown-menu-item">
                 <button id="siaisuu" class="g-menu__dropdown-menu-link">試合数</button>
              </li>
              <li class="g-menu__dropdown-menu-item">
                 <button id="yaku"  class="g-menu__dropdown-menu-link">役</button>
              </li>
            </ul>
          </li>
            <li class="g-menu__item">
            <input type="radio" name="tabset" id="start" ><label for="start"  class="g-menu__link">始め方</label>

            <ul class="g-menu__dropdown-menu">
              <li class="g-menu__dropdown-menu-item">
               <button id="basho" class="g-menu__dropdown-menu-link">場所の決め方</button>
              </li>
              <li class="g-menu__dropdown-menu-item">
                <button id="oya" class="g-menu__dropdown-menu-link">親の決め方</button>
              </li>
              <li class="g-menu__dropdown-menu-item">
                <button id="painookikata" class="g-menu__dropdown-menu-link">牌の置き方/取り方</button>
              </li>
              <li class="g-menu__dropdown-menu-item">
                <button id="dorahyoujihai" class="g-menu__dropdown-menu-link">ドラ表示牌/終了時</button>
              </li>
            </ul>
          </li>
          <li class="g-menu__item">
            <input type="radio" name="tabset" id="pai"><label for="pai"  class="g-menu__link">牌の種類</label>
            <ul class="g-menu__dropdown-menu">
              <li class="g-menu__dropdown-menu-item">
                <button id="manzu" class="g-menu__dropdown-menu-link">萬子</button>
              </li>
              <li class="g-menu__dropdown-menu-item">
                <button id="pinzu" class="g-menu__dropdown-menu-link">筒子</button>
              </li>
              <li class="g-menu__dropdown-menu-item">
                <button id="souzu" class="g-menu__dropdown-menu-link">索子</button>
              </li>
              <li class="g-menu__dropdown-menu-item">
                <button id="kazehai" class="g-menu__dropdown-menu-link">風牌</button>
              </li>
              <li class="g-menu__dropdown-menu-item">
                <button id="sangenpai" class="g-menu__dropdown-menu-link">三元牌</button>
              </li>
              <li class="g-menu__dropdown-menu-item">
                <button id="akadora" class="g-menu__dropdown-menu-link">赤ドラ</button>
              </li>
            </ul>
          </li>
          <li class="g-menu__item">
            <input type="radio" name="tabset" id="han"><label for="han"  class="g-menu__link">役の種類</label>
            <ul class="g-menu__dropdown-menu">
              <li class="g-menu__dropdown-menu-item">
                <button id="1han" class="g-menu__dropdown-menu-link">1翻役</button>
               </li>
              <li class="g-menu__dropdown-menu-item">
                <button id="2han" class="g-menu__dropdown-menu-link">2翻役</button>
              </li>
              <li class="g-menu__dropdown-menu-item">
                <button id="356han" class="g-menu__dropdown-menu-link">3/5/6翻役</button>
              </li>
              <li class="g-menu__dropdown-menu-item">
                <button id="yakuman" class="g-menu__dropdown-menu-link">役満/ダブル役満</button>
              </li>
            </ul>
          </li>
        </ul>
</header>

<img  id="main_content" src="img/mahajantoha.png">

<script type="text/javascript" src="js/guide.js" defer> </script>
 </body>


</html>
