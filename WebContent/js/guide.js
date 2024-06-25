/**
 *
 */
"use strict";
const pushBtn = (btn,src) => {
  document.getElementById(btn).onclick = function(){
    document.getElementById("main_content").src=src;
  }
}
pushBtn("kanseikei","img/rule1.png")
pushBtn("rontotsumo","img/rule2.png")
pushBtn("reach","img/rule3.png")
pushBtn("naki","img/rule4.png")
pushBtn("huriten","img/rule5.png")
pushBtn("dora","img/rule6.png")
pushBtn("uradora","img/rule7.png")
pushBtn("tensuu","img/rule8.png")
pushBtn("siaisuu","img/rule9.png")
pushBtn("yaku","img/rule10.png")
pushBtn("basho","img/haimekata1.png")
pushBtn("oya","img/hajimekata2.png")
pushBtn("painookikata","img/hajimekata3.png")
pushBtn("dorahyoujihai","img/hajimekata4.png")
pushBtn("manzu","img/mannzu.png")
pushBtn("pinzu","img/pinzu.png")
pushBtn("souzu","img/souzu.png")
pushBtn("kazehai","img/kazehai.png")
pushBtn("sangenpai","img/jihai.png")
pushBtn("akadora","img/akadora.png")
pushBtn("1han","img/1.png")
pushBtn("2han","img/2.png")
pushBtn("345han","img/3.png")
pushBtn("yakuman","img/yakuman.png")



