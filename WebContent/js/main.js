/**
 *
 */
let dora_flag = true;	//ドラ選択モードの管理
let dora_num = 0;		//何番目のドラが選ばれているか
let regist_flag = true; //初期登録が終わっているかの管理
let tehaiNum = 0;		//初期登録がどこまで終わっているか
let tumo_flag = false;	//ツモ牌を選んでいるかの管理
let tumo_name = null;   //ツモ牌が何かを登録するところ
const hands = [];       //現在の手牌のリスト
let lastTile = 0;       //持ってきた待ち牌
let ronFlag = false;		//ロンしたときのフラグ
let nakiFlag = false;   //鳴きが入るとtrueになる
const nakiTiles = [];   //鳴き牌のリスト
let ponFlag = false;    //ポンの選択状態でtrue;
let ponTileNum = 0;		//ポンした牌のID
let chiFlag = false;    //チーの選択状態でtrue;
let chiTileNum = [];	//チーした牌のID
const wait_tile = [];   //待ち牌のリスト
const doras = [];       //ドラのリスト
let wait_tile_num = 0;  //待ち牌が表示されている数
let wind = 0;			//場風
let game = 0;			//局数
let number = 0;			//本場
let seatWind = 0;		//自風
const yakus = [];		//役一覧
let han = [];			//翻数
let hu = [];			//符数
let point = [];			//点数
let title = [];			//役名;
let firstDepositFlag = true;//初切りフラグ
let reachFlag = false;  //リーチフラグ
let ippatuFlag = false; //一発フラグ
let tsumoFlag = false;  //ツモフラグ
let rinnsyanFlag = false;//嶺上開花フラグ
let tyankanFlag = false;//槍槓フラグ
let haiteiFlag = false; //ハイテイフラグ
let houteiFlag = false; //ホウテイフラグ
let dReachFlag = false; //ダブルリーチフラグ
let tenhouFlag = true; //天和フラグ
let chihouFlag = true; //地和フラグ

//スタートのポップアップの決定ボタンを押すと動くメソッド
function startClick(id){
	let element = document.getElementById('start');
	element.style.display = "none";
	if(id.id =="start0"){
		element = document.getElementById('numbers');
		element = document.getElementById('wind');
		seatWind = parseInt(element.value);
	}
	if(id.id =="start1"){

	}
}

//牌を選択すると動くメソッド
function tilesClick(tile){

	let tile_name = tile.id;//選択した牌のID

	if(ponFlag){
		return;
	}

	if(nakiFlag){
		return;
	}

	//ドラ表示牌変更部分
	if(dora_flag === true){//ドラを選択する状態か
		element = document.getElementById('doraText');
		element.style.display=("none");

		doras.push(exchangeTileName(tile_name));
		let input_data = document.createElement("img");						//挿入するHTMLタグを決める
  		input_data.src = "/B5/img/ma-jan_"+tile_name+".png";				//属性と属性値を決める
		input_data.alt = "tile_name";
		input_data.className = "tile";
      	input_data.id = "doraimg"+dora_num;

      	let parent = document.getElementById("dora"+dora_num);				//親を決める

		parent.removeChild(document.getElementById("doraimg"+dora_num));	//もともと入っていたものを削除
      	parent.appendChild(input_data);										//選択した牌を挿入

		if(regist_flag === true){
	      	let element = document.getElementById('registText');
			element.style.display=("block");
		}

		dora_flag = false;	//ドラ選択モードを解除
		dora_num++;			//次のドラが選ばれる
	}//初期手牌登録部分
	else if(regist_flag === true){//初期登録が終わっているか
		hands.push(exchangeTileName(tile_name));
		sort_hands();


		tehaiNum++;//次の手牌を選択
		if(tehaiNum >12){//手牌が13個選ばれれば初期登録モードを終了
			regist_flag = false;
			hantei13();
			let element = document.getElementById('registText');
			element.style.display=("none");
			if(wait_tile_num>0){
				element = document.getElementById('ronButton');
				element.style.display = "block";
			}
		}
	}//ロンポップアップが出ているときの処理
	else if(ronFlag){
		let tileName = tile.id;
		let tileNum = exchangeTileName(tileName);
		for(let tmp of wait_tile){
			if(tmp===tileNum){
				let element = document.getElementById("ronTile");
				element.src="/B5/img/ma-jan_"+tileName+".png";
				if(element.alt != "back"){
					hands.pop();
				}
				element.alt = tileName;
				hands.push(tileNum);
				lastTile = tileNum;
				agari();
				let parent = document.getElementById("ronForm");
				for(let i =0;i<hands.length-1;i++){
					let input_data = document.createElement("input");						//挿入するHTMLタグを決める
	  				input_data.type = "text";				//属性と属性値を決める
					input_data.name = "hands["+i+"]";
					input_data.value = hands[i];
					input_data.style.display="none";
					parent.appendChild(input_data);
				}
				let input_data = document.createElement("input");						//挿入するHTMLタグを決める
  				input_data.type = "text";				//属性と属性値を決める
				input_data.name = "lastHands";
				input_data.value = tileNum;
				input_data.style.display="none";
				parent.appendChild(input_data);

				input_data = document.createElement("input");						//挿入するHTMLタグを決める
  				input_data.type = "text";				//属性と属性値を決める
				input_data.name = "result";
				input_data.value = 1;
				input_data.style.display="none";
				parent.appendChild(input_data);

				for(let i = 0;i<5;i++){
					input_data = document.createElement("input");						//挿入するHTMLタグを決める
	  				input_data.type = "text";				//属性と属性値を決める
					input_data.name = "doras["+i+"]";
					if(i<doras.length){
						input_data.value = doras[i];
					}
					else{
						input_data.value = -1;
					}
					input_data.style.display="none";
					parent.appendChild(input_data);
				}
				for(let i = 0;i<5;i++){
					input_data = document.createElement("input");						//挿入するHTMLタグを決める
	  				input_data.type = "text";				//属性と属性値を決める
					input_data.name = "uraDoras["+i+"]";
					if(i<doras.length){
						input_data.value = doras[i];
					}
					else{
						input_data.value = -1;
					}
					input_data.style.display="none";
					parent.appendChild(input_data);
				}
				let i = 0;
				for(let tmp of yakus[0]){
					input_data = document.createElement("input");						//挿入するHTMLタグを決める
	  				input_data.type = "text";				//属性と属性値を決める
					input_data.name = "yakus["+i+"]";
					input_data.value = tmp;
					input_data.style.display="none";
					parent.appendChild(input_data);
					i++
				}

				input_data = document.createElement("input");						//挿入するHTMLタグを決める
  				input_data.type = "text";				//属性と属性値を決める
				input_data.name = "yakusNum";
				input_data.value = yakus[0].length;
				input_data.style.display="none";
				parent.appendChild(input_data);

				input_data = document.createElement("input");						//挿入するHTMLタグを決める
  				input_data.type = "text";				//属性と属性値を決める
				input_data.name = "han";
				input_data.value = han[0];
				input_data.style.display="none";
				parent.appendChild(input_data);

				input_data = document.createElement("input");						//挿入するHTMLタグを決める
  				input_data.type = "text";				//属性と属性値を決める
				input_data.name = "fu";
				input_data.value = hu[0];
				input_data.style.display="none";
				parent.appendChild(input_data);

				input_data = document.createElement("input");						//挿入するHTMLタグを決める
  				input_data.type = "text";				//属性と属性値を決める
				input_data.name = "point";
				input_data.value = point[0];
				input_data.style.display="none";
				parent.appendChild(input_data);

				input_data = document.createElement("input");						//挿入するHTMLタグを決める
  				input_data.type = "text";				//属性と属性値を決める
				input_data.name = "title";
				input_data.value = title[0];
				input_data.style.display="none";
				parent.appendChild(input_data);
			}
		}
	}

	//ツモ牌を選択する部分
	else{
		chihouFlag = false;
		let input_data = document.createElement("img");					//挿入するHTMLタグを決める
  		input_data.src = "/B5/img/ma-jan_"+tile_name+".png";			//属性と属性値を決める
		input_data.alt = "tile_name"
		input_data.className = "tile";
      	input_data.id = "tumotileimg";

      	let parent = document.getElementById("tumotile");				//親を決める

		parent.removeChild(document.getElementById("tumotileimg"));		//もともと入っていたものを削除
      	parent.appendChild(input_data);									//選択した牌を挿入

		if(tumo_flag){
			hands.pop();
		}
		hands.push(exchangeTileName(tile_name));

		let element = document.getElementById('tumotile');
		element.style.backgroundColor = "#F0F0F0;";

		for(let i = 0;i<hands.length-1;i++){
			element = document.getElementById('tehai'+i);
			element.style.backgroundColor = "#F0F0F0";
		}

		hantei14();
		agari();
		tumo_flag = true;		//ツモ牌を選んでいる状態
		tumo_name = tile_name   //ツモ牌を記録

		element = document.getElementById('ronButton');
		element.style.display = "none";
	}


}

//ドラ追加ボタンを選択すると動くメソッド
function doraClick(){
	if(regist_flag === false && dora_num < 5){//初期登録が終わっており、ドラが五つ選択されていなければドラ選択状態に移行
		dora_flag = true;
		element = document.getElementById('doraText');
		element.style.display=("block");
	}
}

//手牌を選択すると動くメソッド
function tehaiClick(num){
	if(regist_flag === true){							//登録中か否か
		let tehai_name = num.id;						//選択されている手牌のIDを取得
		hands.splice(exchangeHandsName(tehai_name),1);	//手牌から削除
		sort_hands();									//手牌からソート
		tehaiNum--;									//手牌の登録数を減らす
	}
	else if(nakiFlag){
		let tehai_name = num.id;						//選択されている手牌のIDを取得
		hands.splice(exchangeHandsName(tehai_name),1);	//手牌から削除
		sort_hands();									//手牌からソート
		nakiFlag = false;
		ponFlag = false;
	}
	else if(tumo_flag){//ツモ牌が登録されていれば手牌に登録
		firstDepositFlag = false;
		tenhouFlag = false;
		let tehai_name = num.id;													//選択されている手牌のIDを取得
		hands.splice(exchangeHandsName(tehai_name),1);  //選択された牌を削除して、ツモ牌に登録されている牌を追加する。
		//console.log("ツモ牌"+exchangeTileName(tumo_name));
		//console.log("捨て牌"+exchangeHandsName(tehai_name));
		sort_hands();

		//ツモ牌を選択していない状態に
		input_data = document.createElement("img");						//挿入するHTMLタグを決める
  		input_data.src = "/B5/img/ma-jan_back.png";						//属性と属性値を決める
		input_data.alt = "back";
		input_data.className = "tile";
      	input_data.id = "tumotileimg";

      	parent = document.getElementById("tumotile");					//親を決める

		parent.removeChild(document.getElementById("tumotileimg"));		//もともと入っていたものを削除
      	parent.appendChild(input_data);									//選択した牌を挿入

		hantei13();
		tumo_flag = false;


		let element = document.getElementById('tumotile');
		element.style.backgroundColor = "#F0F0F0;";

		for(let i = 0;i<hands.length;i++){
			element = document.getElementById('tehai'+i);
			element.style.backgroundColor = "#F0F0F0";
		}
		element = document.getElementById('reachButton');
		element.style.display = "none";

		element = document.getElementById('tsumoButton');
		element.style.display = "none";

		if(wait_tile_num>0){
			element = document.getElementById('ronButton');
			element.style.display = "block";
		}
	}
	else if(ponFlag){//ポンポップアップが出ているときの処理
		let element = document.getElementById(num.id+"img");
		let tileName = element.alt;
		let tileNum = exchangeTileName(tileName);
		if(hands.indexOf(tileNum)+1 ===hands.indexOf(tileNum,hands.indexOf(tileNum)+1)){
			element = document.getElementById("ponTile");
			element.src="/B5/img/ma-jan_"+tileName+".png";
			element.alt = tileName;
			ponTileNum=tileNum;
		}
		else if(tileNum ===4 || tileNum ===14 || tileNum ===24)
			if(hands.indexOf(tileNum)>0 && hands.indexOf(tileNum+1)>0){
				elememt = document.getElementById("ponTile");
				element.src="/B5/img/ma-jan_"+tileName+".png";
				element.alt = tileName;
				ponTileNum=tileNum+1;
			}
		}
		else if(tileNum ===5 || tileNum ===15 || tileNum ===25){
			if(hands.indexOf(tileNum-1)+1 ===hands.indexOf(tileNum-1,hands.indexOf(tileNum)+1)){
				elememt = document.getElementById("ponTile");
				element.src="/B5/img/ma-jan_"+tileName+".png";
				element.alt = tileName;
				ponTileNum=tileNum;
		}
	}
}

//ツモ牌を選択すると動くメソッド
function tumoTileClick(){
	if(!tumo_flag){
		return;
	}
	else{
		//ツモ牌を選択していない状態に
		input_data = document.createElement("img");						//挿入するHTMLタグを決める
	  	input_data.src = "/B5/img/ma-jan_back.png";						//属性と属性値を決める
		input_data.alt = "back"
		input_data.className = "tile";
	    input_data.id = "tumotileimg";

	    parent = document.getElementById("tumotile");					//親を決める

		parent.removeChild(document.getElementById("tumotileimg"));		//もともと入っていたものを削除
	    parent.appendChild(input_data);									//選択した牌を挿入

		hands.pop();
		tumo_flag = false;

		let element = document.getElementById('tumotile');
		element.style.backgroundColor = "#F0F0F0;";

		for(let i = 0;i<hands.length;i++){
			element = document.getElementById('tehai'+i);
			element.style.backgroundColor = "#F0F0F0";
		}
		element = document.getElementById('reachButton');
		element.style.display = "none";

		element = document.getElementById('tsumoButton');
		element.style.display = "none";

		if(wait_tile_num>0){
			element = document.getElementById('ronButton');
			element.style.display = "block";
		}
	}
}

//ツモかロンボタンを押すと動くメソッド
function resultClick(result){
	if(result.id=="finish"){
		window.location.href = "/B5/Result2Servlet";
	}
	else if(result.id=="ronButton"){
		let element = document.getElementById('ron');
		element.style.display = ("inline");
		ronFlag = true;
	}
	else if(result.id=="tsumoButton"){
		window.location.href = "/B5/ResultServlet";
	}
}

//リーチボタンを押すと動くメソッド
function reachClick(){
	let element = document.getElementById('reachButton');
	if(reachFlag||dReachFlag){
		reachFlag = false;
		dReachFlag = false;
		element.style.backgroundColor = "#FFFFFF";
	}
	else{
		if(firstDepositFlag){
			dReachFlag = ture;
		}
		else{
			reachFlag = true;
		}
		element.style.backgroundColor = "#FFFF00";
	}
}

//ポンボタンを押すと動くメソッド
function ponClick(){
	let element = document.getElementById('pon');
	element.style.display = ("inline");
	ponFlag = true;
}

//ポンポップアップの決定ボタンを押すと動くメソッド
function ponDecision(){
	if(ponTileNum === 5 || ponTileNum === 15 || ponTileNum === 25){
		nakiTiles.push(ponTileNum-1);
		hands.splice(hands.indexOf(ponTileNum),1);
		hands.splice(hands.indexOf(ponTileNum-1),1);
		nakiFlag = true;
	}
	else{
		nakiTiles.push(ponTileNum);
		for(let i = 0;i<2;i++){
			hands.splice(hands.indexOf(ponTileNum),1);
		}
		sort_hands()
		nakiFlag = true;
	}
}

/*
//ロンポップアップの決定ボタンを押すと動くメソッド
function ronDecision(){
	let element = document.getElementById("ronTile");
	if(element.alt != "back"){
		agari();
	}
}
*/

//整牌するメソッド
function sort_hands(){
	hands.sort(compareNumbers);
	for(let i=0;i<hands.length;i++){
		let input_data = document.createElement("img");			//挿入するHTMLタグを決める
		if(hands.length>i){
			input_data.src = "/B5/img/ma-jan_"+exchangeTileId(hands[i])+".png";			//属性と属性値を決める
		}
		else{
			input_data.src = "/B5/img/ma-jan_back.png";
		}
		input_data.alt = exchangeTileId(hands[i]);
		input_data.className = "tile";
	  	input_data.id = "tehai"+ i +"img";

	  	let parent = document.getElementById("tehai"+i);				//親を決める

		parent.removeChild(document.getElementById("tehai"+ i +"img"));	//もともと入っていたものを削除
	  	parent.appendChild(input_data);									//選択した牌を挿入
	}
	if(!regist_flag){
		for(let i = hands.length;i<tehaiNum;i++){
			let parent = document.getElementById("tehai"+i);				//親を決める
			parent.removeChild(document.getElementById("tehai"+ i +"img"));	//もともと入っていたものを削除
		}
		tehaiNum = hands.length;
	}
}

//ツモ牌なしでテンパイの判定を行うメソッド
function hantei13(){
	const tile_count = [...Array(34)].map(()=>0);//牌を数える用の配列
	const wait_tile_count = [...Array(34)].map(()=>0);//待ち牌をカウントする配列
	const zeros = [...Array(34)].map(()=>0);
	const hands_tmp = hands.concat();
	wait_tile.length = 0;

	//赤ドラ分のずれを補正
	for(let i = 0;i < hands.length;i++){
		if(hands_tmp[i] > 4 && hands_tmp[i] <15){
			hands_tmp.splice(i,1,hands_tmp[i]-1);
		}
		else if(hands_tmp[i] >14 && hands_tmp[i] <25){
			hands_tmp.splice(i,1,hands_tmp[i]-2);
		}
		else if(hands_tmp[i] >24){
			hands_tmp.splice(i,1,hands_tmp[i]-3);
		}

	}

	//種類ごとに牌をカウント
	for(const tmp of hands_tmp){
		tile_count[tmp]++;
	}
	for(const tmp of tile_count){
	    //console.log(tmp);
	}

	//ひとつづつ牌を加えて判定する
	for(let i = 0;i<34;i++){
		let tile_tmp = tile_count.concat();					//手牌カウントをコピー
		const head_count = [...Array(34)].map(()=>0);	//頭になる牌をカウント
		let head_num = 0;									//頭の数を数える

		tile_tmp[i]++;//牌を追加

		//五枚目はありえないのでコンティニュー
		if(tile_tmp[i]===5){
			continue;
		}

		//トイツを探す
		for(let j = 0;j < 34;j++){
			if(tile_tmp[j]>=2){
				head_count[j]++;
				head_num++;
			}
		}

		//国士無双のパターンを列挙
		tile_kokusi0 = [2,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1];
        tile_kokusi1 = [1,0,0,0,0,0,0,0,2,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1];
        tile_kokusi2 = [1,0,0,0,0,0,0,0,1,2,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1];
        tile_kokusi3 = [1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,2,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1];
        tile_kokusi4 = [1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,2,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1];
        tile_kokusi5 = [1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,2,1,1,1,1,1,1,1];
        tile_kokusi6 = [1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,2,1,1,1,1,1,1];
        tile_kokusi7 = [1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,2,1,1,1,1,1];
        tile_kokusi8 = [1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,2,1,1,1,1];
        tile_kokusi9 = [1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,2,1,1,1];
        tile_kokusi10 = [1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,2,1,1];
        tile_kokusi11 = [1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,2,1];
        tile_kokusi12 = [1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,2];

		if(head_num===7){//トイツ7つでチートイツ成立
		wait_tile_count[i]++;
		break;
		}
		else if(//国士無双の判定
		arraysAreEqual(tile_tmp,tile_kokusi0)||
        arraysAreEqual(tile_tmp,tile_kokusi1)||
        arraysAreEqual(tile_tmp,tile_kokusi2)||
        arraysAreEqual(tile_tmp,tile_kokusi3)||
        arraysAreEqual(tile_tmp,tile_kokusi4)||
        arraysAreEqual(tile_tmp,tile_kokusi5)||
        arraysAreEqual(tile_tmp,tile_kokusi6)||
        arraysAreEqual(tile_tmp,tile_kokusi7)||
        arraysAreEqual(tile_tmp,tile_kokusi8)||
        arraysAreEqual(tile_tmp,tile_kokusi9)||
        arraysAreEqual(tile_tmp,tile_kokusi10)||
        arraysAreEqual(tile_tmp,tile_kokusi11)||
        arraysAreEqual(tile_tmp,tile_kokusi12)){
        wait_tile_count[i]++;
        }
        else{
	        for(let j = 0;j < 34;j++){//雀頭ごとに探索
		        if(head_count[j]==1){
			        let tile_tmp_head = tile_tmp.concat();//雀頭ごとにコピー
			        tile_tmp_head[j]-=2;

			        let tile_tmp2_head = tile_tmp_head.concat();
	        		for(let k = 0;k < (34-9);k++){//索子の8以降の牌は除外して順子の探索
	        			if(k==7 || k==8||k==16||k==17){//萬子と筒子と索子をまたがないように
	        				continue;
	        			}
	        			if(tile_tmp2_head[k]>=1&&tile_tmp2_head[k+1]>=tile_tmp2_head[k]&&tile_tmp2_head[k+2]>=tile_tmp2_head[k]){
	        				if(tile_tmp2_head[k]!==0){
	        					tile_tmp2_head[k+2]-=tile_tmp2_head[k];
	        					tile_tmp2_head[k+1]-=tile_tmp2_head[k];
	        					tile_tmp2_head[k]=0;
	        				}
	        			}
	        		}
	        		if (arraysAreEqual(tile_tmp2_head,zeros)){
	        			wait_tile_count[i]++;
	        		}
	        		//刻子の探索
	        		const kotsu = [];
	        		for(let k = 0;k < 34; k++){
	        			if(tile_tmp_head[k]>=3){
	        				kotsu.push(k);
	        			}
	        		}
	        		//刻子の組み合わせを列挙
	        		for(let k =0;k<kotsu.length;k++){
	        			kotsuArray = combination(kotsu,k+1);
	        			tile_tmp2_head = tile_tmp_head.concat();
	        			kotsu_tmp = kotsuArray.concat();
	        			if(kotsu_tmp.length > 0){
		        			for(let m = 0;m < kotsu_tmp.length;m++){
		        				for(let n = 0;n<k+1;n++){
		        					tile_tmp2_head[kotsu_tmp[m][n]] -= 3;
		        				}
		        			}
		        			for(let m = 0;m < (34-9);m++){//索子の8以降の牌は除外して順子の探索
		        				if(m==7 || m==8||m==16||m==17){//萬子と筒子と索子をまたがないように
		        					continue;
		        				}
		        				if(tile_tmp2_head[m]>=1&&tile_tmp2_head[m+1]>=tile_tmp2_head[m]&&tile_tmp2_head[m+2]>=tile_tmp2_head[m]){
		        					if(tile_tmp2_head[m]!==0){
			        					tile_tmp2_head[m+2]-=tile_tmp2_head[m];
			        					tile_tmp2_head[m+1]-=tile_tmp2_head[m];
			        					tile_tmp2_head[m]=0;
			        				}
		        				}
		        			}
		        		}
		        		if (arraysAreEqual(tile_tmp2_head,zeros)){
	        			wait_tile_count[i]++;
	        			}
	        		}
	        	}
	        }
        }
	}
	//待ち牌を消す
	parent = document.getElementById("waiting_tiles");					//親を決める
	parent.style.display = "none";
	for(let i = 0;i < wait_tile_num;i++){
		parent.removeChild(document.getElementById("waiting_tile"+i));		//もともと入っていたものを削除
	}

	if(arraysAreEqual(wait_tile_count,zeros)){
		console.log("テンパイしていない");
	}
	else{
		console.log("テンパイしている");
		for(let i = 0;i < 34;i++){
			let j = 0;
			//赤ドラ分を逆補正
			if(wait_tile_count[i]>0){
				if(i > 4 && i <14){
					j = i+1;
				}
				else if(i >13 && i <23){
					j = i+2;
				}
				else if(i >22){
					j = i+3;
				}
				else{
					j=i;
				}
				wait_tile.push(j);
			}
		}
		//待ち牌を表示する
		let i = 0;
		parent = document.getElementById("waiting_tiles");					//親を決める
		parent.style.display="block";
		for(let tmp of wait_tile){
			input_data = document.createElement("img");						//挿入するHTMLタグを決める
	  		input_data.src = "/B5/img/ma-jan_"+exchangeTileId(tmp)+".png";						//属性と属性値を決める
			input_data.alt = "exchangeTileId(tmp)"
			input_data.style = "height: 44px;"
	      	input_data.id = "waiting_tile"+i;

	      	parent.appendChild(input_data);									//選択した牌を挿入

			i++;
		}

	}
	/*for(let i = 0;i < 34;i++){
			console.log(wait_tile_count[i]);
	}*/
	/*for(let tmp of wait_tile){
			console.log(tmp);
	}*/
	//console.log("finish");
	wait_tile_num = wait_tile.length;
}

//ツモ牌ありでテンパイの判定を行うメソッド

function hantei14(){
	const zeros = [...Array(34)].map(()=>0);
	const hands_tmp1 = hands.concat();
	wait_tile.length = 0;
	const tenpai_hand = [];
	const tenpai_wait = [];

	for(let o = 0;o < 14;o++){
		const hands_tmp = hands_tmp1.concat();
		hands_tmp.splice(o,1);

		//赤ドラ分のずれを補正
		for(let i = 0;i < 14;i++){
			if(hands_tmp[i] > 4 && hands_tmp[i] <15){
				hands_tmp.splice(i,1,hands_tmp[i]-1);
			}
			else if(hands_tmp[i] >14 && hands_tmp[i] <25){
				hands_tmp.splice(i,1,hands_tmp[i]-2);
			}
			else if(hands_tmp[i] >24){
				hands_tmp.splice(i,1,hands_tmp[i]-3);
			}

		}

		const tile_count = [...Array(34)].map(()=>0);//牌を数える用の配列
		const wait_tile_count = [...Array(34)].map(()=>0);//待ち牌をカウントする配列

		//種類ごとに牌をカウント
		for(const tmp of hands_tmp){
			tile_count[tmp]++;
		}

		//ひとつづつ牌を加えて判定する
		for(let i = 0;i<34;i++){
			let tile_tmp = tile_count.concat();					//手牌カウントをコピー
			const head_count = [...Array(34)].map(()=>0);	//頭になる牌をカウント
			let head_num = 0;									//頭の数を数える

			tile_tmp[i]++;//牌を追加

			//五枚目はありえないのでコンティニュー
			if(tile_tmp[i]===5){
				continue;
			}

			//トイツを探す
			for(let j = 0;j < 34;j++){
				if(tile_tmp[j]>=2){
					head_count[j]++;
					head_num++;
				}
			}

			//国士無双のパターンを列挙
			tile_kokusi0 = [2,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1];
	        tile_kokusi1 = [1,0,0,0,0,0,0,0,2,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1];
	        tile_kokusi2 = [1,0,0,0,0,0,0,0,1,2,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1];
	        tile_kokusi3 = [1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,2,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1];
	        tile_kokusi4 = [1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,2,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1];
	        tile_kokusi5 = [1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,2,1,1,1,1,1,1,1];
	        tile_kokusi6 = [1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,2,1,1,1,1,1,1];
	        tile_kokusi7 = [1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,2,1,1,1,1,1];
	        tile_kokusi8 = [1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,2,1,1,1,1];
	        tile_kokusi9 = [1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,2,1,1,1];
	        tile_kokusi10 = [1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,2,1,1];
	        tile_kokusi11 = [1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,2,1];
	        tile_kokusi12 = [1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,2];

			if(head_num===7){//トイツ7つでチートイツ成立
			wait_tile_count[i]++;
			break;
			}
			else if(//国士無双の判定
			arraysAreEqual(tile_tmp,tile_kokusi0)||
	        arraysAreEqual(tile_tmp,tile_kokusi1)||
	        arraysAreEqual(tile_tmp,tile_kokusi2)||
	        arraysAreEqual(tile_tmp,tile_kokusi3)||
	        arraysAreEqual(tile_tmp,tile_kokusi4)||
	        arraysAreEqual(tile_tmp,tile_kokusi5)||
	        arraysAreEqual(tile_tmp,tile_kokusi6)||
	        arraysAreEqual(tile_tmp,tile_kokusi7)||
	        arraysAreEqual(tile_tmp,tile_kokusi8)||
	        arraysAreEqual(tile_tmp,tile_kokusi9)||
	        arraysAreEqual(tile_tmp,tile_kokusi10)||
	        arraysAreEqual(tile_tmp,tile_kokusi11)||
	        arraysAreEqual(tile_tmp,tile_kokusi12)){
	        wait_tile_count[i]++;
	        }
	        else{
		        for(let j = 0;j < 34;j++){//雀頭ごとに探索
			        if(head_count[j]==1){
				        let tile_tmp_head = tile_tmp.concat();//雀頭ごとにコピー
				        tile_tmp_head[j]-=2;

				        let tile_tmp2_head = tile_tmp_head.concat();
		        		for(let k = 0;k < (34-9);k++){//索子の8以降の牌は除外して順子の探索
		        			if(k==7 || k==8||k==16||k==17){//萬子と筒子と索子をまたがないように
		        				continue;
		        			}
		        			if(tile_tmp2_head[k]>=1&&tile_tmp2_head[k+1]>=tile_tmp2_head[k]&&tile_tmp2_head[k+2]>=tile_tmp2_head[k]){
		        				if(tile_tmp2_head[k]!==0){
		        					tile_tmp2_head[k+2]-=tile_tmp2_head[k];
		        					tile_tmp2_head[k+1]-=tile_tmp2_head[k];
		        					tile_tmp2_head[k]=0;
		        				}
		        			}
		        		}
		        		if (arraysAreEqual(tile_tmp2_head,zeros)){
		        			wait_tile_count[i]++;
		        		}
		        		//刻子の探索
		        		const kotsu = [];
		        		kotsu.length = 0;
		        		for(let k = 0;k < 34; k++){
		        			if(tile_tmp_head[k]>=3){
		        				kotsu.push(k);
		        			}
		        		}
		        		//刻子の組み合わせを列挙
		        		for(let k =0;k<kotsu.length;k++){
		        			kotsuArray = combination(kotsu,k+1);
		        			tile_tmp2_head = tile_tmp_head.concat();
		        			kotsu_tmp = kotsuArray.concat();
		        			if(kotsu_tmp.length > 0){
			        			for(let m = 0;m < kotsu_tmp.length;m++){
			        				for(let n = 0;n<k+1;n++){
			        					tile_tmp2_head[kotsu_tmp[m][n]] -= 3;
			        				}
			        			}
			        			for(let m = 0;m < (34-9);m++){//索子の8以降の牌は除外して順子の探索
			        				if(m==7 || m==8||m==16||m==17){//萬子と筒子と索子をまたがないように
			        					continue;
			        				}
			        				if(tile_tmp2_head[m]>=1&&tile_tmp2_head[m+1]>=tile_tmp2_head[m]&&tile_tmp2_head[m+2]>=tile_tmp2_head[m]){
			        					if(tile_tmp2_head[m]!==0){
				        					tile_tmp2_head[m+2]-=tile_tmp2_head[m];
				        					tile_tmp2_head[m+1]-=tile_tmp2_head[m];
				        					tile_tmp2_head[m]=0;
				        				}
			        				}
			        			}
			        		}
			        		if (arraysAreEqual(tile_tmp2_head,zeros)){
		        			wait_tile_count[i]++;
		        			}
		        		}
		        	}
		        }
	        }
		}
		/*//待ち牌を消す
		parent = document.getElementById("waiting_tiles");					//親を決める
		parent.style.display = "none";
		for(let i = 0;i < wait_tile_num;i++){
					parent.removeChild(document.getElementById("waiting_tile"+i));		//もともと入っていたものを削除

		}
		*/
		if(arraysAreEqual(wait_tile_count,zeros)){
			//console.log("テンパイしていない");
		}
		else{
			//console.log("テンパイしている");
			for(let i = 0;i < 34;i++){
				let j = 0;
				//赤ドラ分を逆補正
				if(wait_tile_count[i]>0){
					if(i > 4 && i <14){
						j = i+1;
					}
					else if(i >13 && i <23){
						j = i+2;
					}
					else if(i >22){
						j = i+3;
					}
					else{
						j=i;
					}
					wait_tile.push(j);
				}
			}
			tenpai_hand.push(o);
			tenpai_wait.push(wait_tile);
			/*
			//待ち牌を表示する
			let i = 0;
			parent = document.getElementById("waiting_tiles");					//親を決める
			parent.style.display = "block";
			for(let tmp of wait_tile){
				input_data = document.createElement("img");						//挿入するHTMLタグを決める
		  		input_data.src = "/B5/img/ma-jan_"+exchangeTileId(tmp)+".png";						//属性と属性値を決める
				input_data.alt = "exchangeTileId(tmp)"
		      	input_data.id = "waiting_tile"+i;

		      	parent.appendChild(input_data);									//選択した牌を挿入

				i++;
			}
			*/

		}
	}
	for(let tmp of tenpai_hand){
		if(tmp===hands.length-1){
			let element = document.getElementById('tumotile');
			element.style.backgroundColor = "#FFFF00;";
		}
		else{
			let element = document.getElementById('tehai'+tmp);
			element.style.backgroundColor = "#FFFF00";
		}
		//console.log(tmp);
	}
	if(tenpai_hand.length > 0){
		if(!reachFlag){
			let element = document.getElementById('reachButton');
			element.style.display = "block";
		}
	}
}

//あがり判定を行うメソッド
function agari(){
	const tile_count = [...Array(34)].map(()=>0);//牌を数える用の配列
	const zeros = [...Array(34)].map(()=>0);
	const hands_tmp = hands.concat();
	const agariDatas = [];//agariData配列の配列
	yakus.length = 0;
	han.length = 0;
	hu.length = 0;
	point.length = 0;
	title.length = 0;
	//wait_tile.length = 0;

	//赤ドラ分のずれを補正
	for(let i = 0;i < 14;i++){
		if(hands_tmp[i] > 4 && hands_tmp[i] <15){
			hands_tmp.splice(i,1,hands_tmp[i]-1);
		}
		else if(hands_tmp[i] >14 && hands_tmp[i] <25){
			hands_tmp.splice(i,1,hands_tmp[i]-2);
		}
		else if(hands_tmp[i] >24){
			hands_tmp.splice(i,1,hands_tmp[i]-3);
		}

	}

	//種類ごとに牌をカウント
	for(const tmp of hands_tmp){
		tile_count[tmp]++;
	}
	for(const tmp of tile_count){
	    //console.log(tmp);
	}

	let tile_tmp = tile_count.concat();					//手牌カウントをコピー
	const head_count = [...Array(34)].map(()=>0);	//頭になる牌をカウント
	let head_num = 0;									//頭の数を数える

	//トイツを探す
	for(let j = 0;j < 34;j++){
		if(tile_tmp[j]>=2){
			head_count[j]++;
			head_num++;
		}
	}

	//国士無双のパターンを列挙
	tile_kokusi0 = [2,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1];
    tile_kokusi1 = [1,0,0,0,0,0,0,0,2,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1];
    tile_kokusi2 = [1,0,0,0,0,0,0,0,1,2,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1];
    tile_kokusi3 = [1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,2,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1];
    tile_kokusi4 = [1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,2,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1];
    tile_kokusi5 = [1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,2,1,1,1,1,1,1,1];
    tile_kokusi6 = [1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,2,1,1,1,1,1,1];
    tile_kokusi7 = [1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,2,1,1,1,1,1];
    tile_kokusi8 = [1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,2,1,1,1,1];
    tile_kokusi9 = [1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,2,1,1,1];
    tile_kokusi10 = [1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,2,1,1];
    tile_kokusi11 = [1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,2,1];
    tile_kokusi12 = [1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,2];

	if(head_num===7){//トイツ7つでチートイツ成立
		let agariData = [];
		for(let i = 0;i < head_count.length;i++){
			if(head_count[i] > 0)
			{
				agariData.push([i]);
			}
		}
		agariDatas.push(agariData);
	}
	else if(//国士無双の判定
	arraysAreEqual(tile_tmp,tile_kokusi0)||
    arraysAreEqual(tile_tmp,tile_kokusi1)||
    arraysAreEqual(tile_tmp,tile_kokusi2)||
    arraysAreEqual(tile_tmp,tile_kokusi3)||
    arraysAreEqual(tile_tmp,tile_kokusi4)||
    arraysAreEqual(tile_tmp,tile_kokusi5)||
    arraysAreEqual(tile_tmp,tile_kokusi6)||
    arraysAreEqual(tile_tmp,tile_kokusi7)||
    arraysAreEqual(tile_tmp,tile_kokusi8)||
    arraysAreEqual(tile_tmp,tile_kokusi9)||
    arraysAreEqual(tile_tmp,tile_kokusi10)||
    arraysAreEqual(tile_tmp,tile_kokusi11)||
    arraysAreEqual(tile_tmp,tile_kokusi12)){
    	agariDatas.push(["kokusi"]);
    }
    for(let j = 0;j < 34;j++){//雀頭ごとに探索
        if(head_count[j]==1){
        	let agariData = [];//[[雀頭],[面子],[面子],[面子],[面子]]
        	agariData.langth = 0;
        	agariData.push([j]);
	        let tile_tmp_head = tile_tmp.concat();//雀頭ごとにコピー
	        tile_tmp_head[j]-=2;

	        let tile_tmp2_head = tile_tmp_head.concat();
    		for(let k = 0;k < (34-9);k++){//索子の8以降の牌は除外して順子の探索
    			if(k==7 || k==8||k==16||k==17){//萬子と筒子と索子をまたがないように
    				continue;
    			}
    			if(tile_tmp2_head[k]>=1&&tile_tmp2_head[k+1]>=tile_tmp2_head[k]&&tile_tmp2_head[k+2]>=tile_tmp2_head[k]){
    				if(tile_tmp2_head[k]!==0){
    					agariData.push([k,k+1,k+2]);
    					tile_tmp2_head[k+2]-=tile_tmp2_head[k];
    					tile_tmp2_head[k+1]-=tile_tmp2_head[k];
    					tile_tmp2_head[k]=0;
    				}
    			}
    		}
    		if (arraysAreEqual(tile_tmp2_head,zeros)){
    			agariDatas.push(agariData);
    			if(!ronFlag){
	    			element = document.getElementById('tsumoButton');
					element.style.display = "block";
				}
    		}
    		//刻子の探索
    		const kotsu = [];
    		for(let k = 0;k < 34; k++){
    			if(tile_tmp_head[k]>=3){
    				kotsu.push(k);
    			}
    		}
    		//刻子の組み合わせを列挙
    		for(let k =0;k<kotsu.length;k++){
    			agariData.length = 1;//配列を雀頭のみにする;
    			kotsuArray = combination(kotsu,k+1);
    			tile_tmp2_head = tile_tmp_head.concat();
    			kotsu_tmp = kotsuArray.concat();
    			if(kotsu_tmp.length > 0){
        			for(let m = 0;m < kotsu_tmp.length;m++){
        				for(let n = 0;n<k+1;n++){
        					agariData.push([kotsu_tmp[m][n]]);
        					tile_tmp2_head[kotsu_tmp[m][n]] -= 3;
        				}
        			}
        			for(let m = 0;m < (34-9);m++){//索子の8以降の牌は除外して順子の探索
        				if(m==7 || m==8||m==16||m==17){//萬子と筒子と索子をまたがないように
        					continue;
        				}
        				if(tile_tmp2_head[m]>=1&&tile_tmp2_head[m+1]>=tile_tmp2_head[m]&&tile_tmp2_head[m+2]>=tile_tmp2_head[m]){
        					if(tile_tmp2_head[m]!==0){
        						agariData.push([m,m+1,m+2]);
	        					tile_tmp2_head[m+2]-=tile_tmp2_head[m];
	        					tile_tmp2_head[m+1]-=tile_tmp2_head[m];
	        					tile_tmp2_head[m]=0;
	        				}
        				}
        			}
        		}
        		if (arraysAreEqual(tile_tmp2_head,zeros)){
					agariDatas.push(agariData);
					element = document.getElementById('tsumoButton');
					element.style.display = "block";
    			}
    		}
    	}
    }
    let i = 0;
    for(let tmp of agariDatas){
    	yakus.push([]);
    	han.push(0);
    	hu.push(0);
    	point.push(0);
    	title.push(0);
    	for(let tmp1 of tmp){
    		console.log(tmp1);
    	}
	    //天和
	    if(tenhouFlag){
	    	yakus[i].push(32);
	    	han[i]+=1;
	    }
	    //地和
	    if(chihouFlag){
	    	yakus[i].push(33);
	    	han[i]+=1;
	    }
	    //大三元
	    if(tmp.length===5){
	    	let num = 0;
	    	for(let j = 1;j<tmp.length;j++){
	    		if(tmp[j][0]>=31&&tmp[j][0]<=33){
	    			num ++;
	    		}
	    	}
	    	if(num===3){
	    		yakus[i].push(34);
	    		han[i]+=1;
	    	}
	    }
	    //小喜
	    if(tmp.length===5&&(tmp[0][0]>=27&&tmp[0][0]<=30)){
	    	let num = 0;
	    	for(let tmp1 of tmp){
	    		if(tmp1[0]>=27&&tmp1[0]<=30){
	    			num++;
	    		}
	    	}
	    	if(num===4){
	    		yakus[i].push(35);
	    		han[i]+=1;
	    	}
	    }
	    //清老頭
	    if(tmp.length===5){
	    	let num = 0;
	    	for(let tmp1 of tmp){
	    		if(tmp1.length===1&&(tmp1[0]===0||tmp1[0]===8||tmp1[0]===9||tmp1[0]===17||tmp1[0]===18||tmp1[0]===26)){
	    			num++;
	    		}
	    	}
	    	if(num === 5){
	    		yakus[i].push(36);
	    		han[i]+=1;
	    	}
	    }
	    //四槓子
	    //字一色
	    if(tmp.length===5){
	    	let num = 0;
	    	for(let tmp1 of tmp){
	    		if(tmp1[0]>=27&&tmp1[0]<=33){
	    			num++;
	    		}
	    	}
	    	if(num===5){
	    		yakus[i].push(37);
	    		han[i]+=1;
	    	}
	    }
	    //緑一色
	    if(tmp.length>=2&&tmp.length<=5){
	    	let num = 0;
	    	for(let tmp1 of tmp){
	    		if(tmp1.length===3){
	    			if(tmp1[0]===19){
	    				num++;
	    			}
	    		}
	    		else if((tmp1[0]>=19&&tmp1[0]<=21)||tmp1[0]===23||tmp1[0]===25||tmp1[0]===32){
	    			num++;
	    		}
	    	}
	    	if(num===tmp.length){
	    		yakus[i].push(38);
	    		han[i]+=1;
	    	}
	    }
	    //国士無双
	    if(tmp.length===1){
	    	if(tmp[0][0]=="k"){
	    		yakus[i].push(39);
	    		han[i]+=1;
	    	}
	    }
	    //九連宝燈
	    if(tmp.length===1){
	    	if(tmp[0][0]===1){
	    		yakus[i].push(40);
	    		han[i]+=1;
	    	}
	    }
	    //四暗刻
	    //大喜
	    if(tmp.length===5){
	    	let num = 0;
	    	for(let j = 1;j<tmp.length;j++){
	    		if(tmp[j][0]>=27&&tmp[j][0]<=30){
	    			num ++;
	    		}
	    	}
	    	if(num===4){
	    		yakus[i].push(41);
	    		han[i]+=1;
	    	}
	    }
	    //純正国士無双
	    //純正九連宝燈
	    //四暗刻単騎
	    if(han[i]>0){
	    	han[i] +=12;
	    }
	    else{
		    //リーチ
		    if(reachFlag){
		    	yakus[i].push(1);
		    	han[i]+=1;
		    }
		    //一発
		    if(ippatuFlag){
		    	yakus[i].push(2);
		    	han[i]+=1;
		    }
		    //ツモ
		    if(tsumoFlag){
		    	yakus[i].push(3);
		    	han[i]+=1;
		    }
		    //ピンフ
		    if(tmp.length>=2&&!((wind ===0 && tmp[0][0]===27)||(wind ===1 && tmp[0][0]===28)||(wind ===2 && tmp[0][0]===29)||(wind ===3 && tmp[0][0]===30)||tmp[0][0]===31||tmp[0][0]===32||tmp[0][0]===33)){
		    	let num = 0;
		    	for(let j = 1;j<tmp.length;j++){
		    		if(tmp[j].length===3){
		    			num++;
		    		}
		    	}
		    	if(num===tmp.length-1){
		    		yakus[i].push(4);
		    		han[i]+=1;
		    	}
		    }
		    //タンヤオ
		    if(tmp.length>=2){
		    	let num = 0;
		    	for(let tmp1 of tmp){
		    		if(tmp1.length===3){
		    			if((tmp1[0]>=1&&tmp1[0]<=5)||(tmp1[0]>=10&&tmp1[0]<=14)||(tmp1[0]>=19&&tmp1[0]<=13)){
		    				num++;
		    			}
		    		}
		    		else if((tmp1[0]>=1&&tmp1[0]<=7)||(tmp1[0]>=10&&tmp1[0]<=16)||(tmp1[0]>=19&&tmp1[0]<=25)){
		    			num++;
		    		}
		    	}
		    	if(num === tmp.length){
		    		yakus[i].push(5);
		    		han[i]+=1;
		    	}
		    }
		    //イーペーコー
		    if(tmp.length === 4){
		    	yakus[i].push(6);
		    	han[i]+=1;
		    }
		    //白
		    if(tmp.length>=2&&tmp.length<=5){
		    	for(let j = 1;j < tmp.length;j++){
		    		if(tmp[j][0]===31){
		    			yakus[i].push(7);
		    			han[i]+=1;
		    		}
		    	}
		    }
		    //発
		    if(tmp.length>=2&&tmp.length<=5){
		    	for(let j = 1;j < tmp.length;j++){
		    		if(tmp[j][0]===32){
		    			yakus[i].push(8);
		    			han[i]+=1;
		    		}
		    	}
		    }
		    //中
		    if(tmp.length>=2&&tmp.length<=5){
		    	for(let j = 1;j < tmp.length;j++){
		    		if(tmp[j][0]===33){
		    			yakus[i].push(9);
		    			han[i]+=1;
		    		}
		    	}
		    }
		    //場風牌
		    if(tmp.length>=2&&tmp.length<=5){
		    	for(let j = 1;j < tmp.length;j++){
		    		if(wind ===0 && tmp[j][0]===27){
		    			yakus[i].push(10);
		    			han[i]+=1;
		    		}
		    		if(wind ===1 && tmp[j][0]===28){
		    			yakus[i].push(10);
		    			han[i]+=1;
		    		}
		    		if(wind ===2 && tmp[j][0]===29){
		    			yakus[i].push(10);
		    			han[i]+=1;
		    		}
		    		if(wind ===3 && tmp[j][0]===30){
		    			yakus[i].push(10);
		    			han[i]+=1;
		    		}
		    	}
		    }
		    //自風牌
		    if(tmp.length>=2&&tmp.length<=5){
		    	for(let j = 1;j < tmp.length;j++){
		    		if(seatWind ===0 && tmp[j][0]===27){
		    			yakus[i].push(11);
		    			han[i]+=1;
		    		}
		    		if(seatWind ===1 && tmp[j][0]===28){
		    			yakus[i].push(11);
		    			han[i]+=1;
		    		}
		    		if(seatWind ===2 && tmp[j][0]===29){
		    			yakus[i].push(11);
		    			han[i]+=1;
		    		}
		    		if(seatWind ===3 && tmp[j][0]===30){
		    			yakus[i].push(11);
		    			han[i]+=1;
		    		}
		    	}
		    }
		    //嶺上開花
		    if(rinnsyanFlag){
		    	yakus[i].push(12);
		    	han[i]+=1;
		    }
		    //槍槓
		    if(tyankanFlag){
		    	yakus[i].push(13);
		    	han[i]+=1;
		    }
		    //ハイテイ
		    if(haiteiFlag){
		    	yakus[i].push(14);
		    	han[i]+=1;
		    }
		    //ホウテイ
		    if(houteiFlag){
		    	yakus[i].push(15);
		    	han[i]+=1;
		    }
		    //ダブリー
		    if(dReachFlag){
		    	yakus[i].push(16);
		    	han[i]+=2;
		    }
		    //チャンタ
		    if(tmp.length>=2){
		    	let num = 0;
		    	for(let tmp1 of tmp){
		    		if(tmp1.length===3){
		    			if(tmp1[0]===0||tmp1[0]===6||tmp1[0]===9||tmp1[0]===15||tmp1[0]===18||tmp1[0]===24){
		    				num++;
		    			}
		    		}
		    		else if(tmp1[0]===0||tmp1[0]===8||tmp1[0]===9||tmp1[0]===17||tmp1[0]===18||tmp1[0]===26||(tmp1[0]>=27&&tmp1[0]<=33)){
		    			num++;
		    		}
		    	}
		    	if(num==tmp.length){
		    		yakus[i].push(17);
		    		han[i]+=2;
		    	}
		    }
		    //混老頭
		    if(tmp.length===5){
		    	let num = 0;
		    	for(let tmp1 of tmp){
		    		if(tmp1.length===1&&(tmp1[0]===0||tmp1[0]===8||tmp1[0]===9||tmp1[0]===17||tmp1[0]===18||tmp1[0]===26)||(tmp1[0]>=27&&tmp1[0]<=33)){
		    			num++;
		    		}
		    	}
		    	if(num === 5){
		    		yakus[i].push(18);
		    		han[i]+=2;
		    	}
		    }
		    //同順
		    if(tmp.length===4||tmp.length===5){
		    	let nums = [];
		    	for(let j = 1;j<tmp.length;j++){
		    		if(tmp[j].length===3){
		    			nums.push(tmp[j][0]);
		    		}
		    	}
		    	if(nums.length>3){
		    		if(nums[0]+9===nums[1]&&nums[1]+9===nums[2]){
		    			yakus[i].push(19);
		    			han[i]+=2;
		    		}
		    		else if(nums.length===4){
		    			if((nums[0]+9===nums[1]&&nums[1]+9===nums[3])||nums[0]+9===nums[2]&&nums[2]+9===nums[3]||nums[1]+9===nums[2]&&nums[2]+9===nums[3]){
		    				yakus[i].push(19);
		    				han[i]+=2;
		    			}
		    		}
		    	}
		    }
		    //一気通貫
		    if(tmp.length===4||tmp.length===5){
		    	let nums = [];
		    	for(let j = 1;j<tmp.length;j++){
		    		if(tmp[j].length===3){
		    			if(tmp[j][0]===0||tmp[j][0]===3||tmp[j][0]===6||tmp[j][0]===9||tmp[j][0]===12||tmp[j][0]===15||tmp[j][0]===18||tmp[j][0]===21||tmp[j][0]===24){
							nums.push(tmp[j][0]);
						}
		    		}
		    	}
		    	if(nums.length>=3){
		    		if(nums[0]+3===nums[1]&&nums[1]+3===nums[2]){
		    			yakus[i].push(20);
		    			han[i]+=2;
		    		}
		    		else if(nums.length===4){
		    			if((nums[0]+3===nums[1]&&nums[1]+3===nums[3])||nums[0]+3===nums[2]&&nums[2]+3===nums[3]||nums[1]+3===nums[2]&&nums[2]+3===nums[3]){
		    				yakus[i].push(20);
		    				han[i]+=2;
		    			}
		    		}
		    	}
		    }
		    //トイトイ
		    if(tmp.length===5){
		    	let num = 0;
		    	for(let tmp1 of tmp){
		    		if(tmp1 === 1){
		    			num++;
		    		}
		    	}
		    	if(num === 5){
		    		yakus[i].push(21);
		    		han[i]+=2;
		    	}
		    }
		    //同刻
		    if(tmp.length===5){
		    	let nums = [];
		    	for(let j = 1;j<tmp.length;j++){
		    		if(tmp[j].length===1){
		    			nums.push(tmp[j][0]);
		    		}
		    	}
		    	if(nums>=3){
		    		if(nums[0]+9===nums[1]&&nums[1]+9===nums[2]){
		    			yakus[i].push(22);
		    			han[i]+=2;
		    		}
		    		else if(nums.length===4){
		    			if((nums[0]+9===nums[1]&&nums[1]+9===nums[3])||nums[0]+9===nums[2]&&nums[2]+9===nums[3]||nums[1]+9===nums[2]&&nums[2]+9===nums[3]){
		    				yakus[i].push(22);
		    				han[i]+=2;
		    			}
		    		}
		    	}
		    }
		    //三暗刻
		    //三槓子
		    //チートイツ
		    if(tmp.length===7){
		    	yakus[i].push(25);
		    	han[i]+=2;
		    }
		    //小三元
		    if((tmp.length===4||tmp.length===5)&&(tmp[0][0]>=31&&tmp[0][0]<=33)){
		    	let num = 0;
		    	for(let tmp1 of tmp){
		    		if(tmp1[0]>=31&&tmp1[0]<=33){
		    			num++;
		    		}
		    	}
		    	if(num===3){
		    		yakus[i].push(26);
		    		han[i]+=2;
		    	}
		    }
		    //純チャン
		    if(tmp.length>=2){
		    	let num = 0;
		    	for(let tmp1 of tmp){
		    		if(tmp1.length===3){
		    			if(tmp1[0]===0||tmp1[0]===6||tmp1[0]===9||tmp1[0]===15||tmp1[0]===18||tmp1[0]===24){
		    				num++;
		    			}
		    		}
		    		else if(tmp1[0]===0||tmp1[0]===8||tmp1[0]===9||tmp1[0]===17||tmp1[0]===18||tmp1[0]===26){
		    			num++;
		    		}
		    	}
		    	if(num==tmp.length){
		    		yakus[i].push(27);
		    		han[i]+=3;
		    	}
		    }
		    //ホンイツ
		    if(tmp.length>=2){
		    	let num = 0;
		    	let nums = [0,0,0];
		    	for(let tmp1 of tmp){
		    		if((tmp1[0]>=0&&tmp1[0]<=8)||(tmp1[0]>=27&&tmp1[0]<=33)){
						if(nums[1]===1||nums[2]===1){
							break;
						}
						num++;
						nums[0]=1;
		    		}
		    		if((tmp1[0]>=9&&tmp1[0]<=17)||(tmp1[0]>=27&&tmp1[0]<=33)){
						if(nums[0]===1||nums[2]===1){
							break;
						}
						num++;
						nums[1]=1;
		    		}
		    		if((tmp1[0]>=18&&tmp1[0]<=26)||(tmp1[0]>=27&&tmp1[0]<=33)){
						if(nums[0]===1||nums[1]===1){
							break;
						}
						num++;
						nums[2]=1;
		    		}
		    	}
		    	if(num === num.length){
		    		yakus[i].push(28);
		    		han[i]+=3;
		    	}
		    }
		    //リャンペイコー
		    if(tmp.length===3){
		    	yakus[i].push(29);
		    	han[i]+=3;
		    }
		    //清一色
		    if(tmp.length>=2){
		    	let num = 0;
		    	let nums = [0,0,0];
		    	for(let tmp1 of tmp){
		    		if((tmp1[0]>=0&&tmp1[0]<=8)){
						if(nums[1]===1||nums[2]===1){
							break;
						}
						num++;
						nums[0]=1;
		    		}
		    		if((tmp1[0]>=9&&tmp1[0]<=17)){
						if(nums[0]===1||nums[2]===1){
							break;
						}
						num++;
						nums[1]=1;
		    		}
		    		if((tmp1[0]>=18&&tmp1[0]<=26)){
						if(nums[0]===1||nums[1]===1){
							break;
						}
						num++;
						nums[2]=1;
		    		}
		    	}
		    	if(num === num.length){
		    		yakus[i].push(31);
		    		han[i]+=6;
		    	}
		    }
		}
	    //符計算
	    if(yakus[i].indexOf(25)!=-1){
	    	hu[i] =25;
	    }
	    else if(tsumoFlag&&yakus[i].indexOf(25)!=-1){
	    	hu[i] = 20;
	    }
    	else{
    		if(ronFlag){
    			hu[i] = 30;
    		}
    		else{
    			hu[i] = 22;
    		}

    		for(let j=1;j<tmp.length;j++){
	    		if(tmp[j].length===1){
	    			if((tmp[j][0]>=1&&tmp[j][0]<=7)||(tmp[j][0]>=10&&tmp[j][0]<=16)||(tmp[j][0]>=19&&tmp[j][0]<=25)){
	    				hu[i]+=4;
	    			}
	    			else{
	    				hu[i]+=8;
	    			}
	    		}
	    		if((wind ===0 && tmp[0][0]===27)||(wind ===1 && tmp[0][0]===28)||(wind ===2 && tmp[0][0]===29)||(wind ===3 && tmp[0][0]===30)||(tmp[0][0]>=31&&tmp[0][0]<=32)){
	    			hu[i]+=2;
	    		}
	    		if(tmp[0][0]===lastTile){
	    			hu[i]+=2;
	    		}
	    		else{
	    			for(let tmp1 of tmp){
	    				if(tmp1.length===3){
	    					if(tmp1[1]===lastTile){
	    						hu[i]+=2;
	    					}
	    					else if(lastTile===1||lastTile===2||lastTile===6||lastTile===7||lastTile===10||lastTile===11||lastTile===15||lastTile===16||lastTile===19||lastTile===20||lastTile===24||lastTile===25){
	    						if(tmp1[0]===0||tmp1[0]===6||tmp1[0]===9||tmp1[0]===15||tmp1[0]===18||tmp1[0]===24){
	    							hu[i]+=2;
	    						}
	    					}
	    				}
	    			}
	    		}
    		}

    	}
    	if(seatWind ===0){
    		if(han[i]>=13){
    			point[i] = (han[i]-12)*48000;
    			title[i] = han[i]-8;
    		}
    		else if(han[i]>=11){
    			point[i] = 36000;
    			title[i] = 4;
    		}
    		else if(han[i]>=8){
    			point[i] = 24000;
    			title[i] = 3;
    		}
    		else if(han[i]>=6){
    			point[i] = 16000;
    			title[i] = 2;
    		}
    		else if(han[i]===5||(han[i]===4&&hu[i]>=31)||(han[i]===3&&hu[i]>=61)){
    			point[i] = 12000;
    			title[i] = 1;
    		}
    		else if(han[i]===4&&hu[i]>=21||han[i]===3&&hu[i]>=51){
    			point[i] = 11600;
    		}
    		else if(han[i]===2&&hu[i]>=101){
    			point[i] = 10600;
    		}
    		else if(han[i]===4&&hu[i]===25||han[i]===3&&hu[i]>=41||han[i]===2&&hu[i]>=91){
    			point[i] = 9600;
    		}
    		else if(han[i]===2&&hu[i]===81){
    			point[i] = 8700;
    		}
    		else if(han[i]===4&&hu[i]===20||han[i]===3&&hu[i]>=31||han[i]===2&&hu[i]>=71){
    			point[i] = 7700;
    		}
    		else if(han[i]===2&&hu[i]>=61){
    			point[i] = 6800;
    		}
    		else if(han[i]===3&&hu[i]>=21||han[i]===2&&hu[i]>=51){
    			point[i] = 5800;
    		}
    		else if(han[i]===1&&hu[i]>=101){
    			point[i] = 5300;
    		}
    		else if(han[i]===3&&hu[i]===25||han[i]===2&&hu[i]>=41||han[i]===1&&hu[i]>=91){
    			point[i] = 4800;
    		}
    		else if(han[i]===1&&hu[i]>=81){
    			point[i] = 4400;
    		}
    		else if(han[i]===3&&hu[i]===20||han[i]===2&&hu[i]>=31||han[i]===1&&hu[i]>=71){
    			point[i] = 3900;
    		}
    		else if(han[i]===1&&hu[i]>=61){
    			point[i] = 3400;
    		}
    		else if(han[i]===2&&hu[i]>=21||han[i]===1&&hu[i]>=51){
    			point[i] = 2900;
    		}
    		else if(han[i]===2&&hu[i]===25||han[i]===1&&hu[i]>=41){
    			point[i] = 2400;
    		}
    		else if(han[i]===2&&hu[i]===20||han[i]===1&&hu[i]>=31){
    			point[i] = 2000;
    		}
    	}
    	else{
    		if(han[i]>=13){
	    		point[i] = (han[i]-12)*32000;
	    		title[i] = han[i]-8;
    		}
    		else if(han[i]>=11){
    			point[i] = 24000;
    			title[i] = 4;
    		}
    		else if(han[i]>=8){
    			point[i] = 16000;
    			title[i] = 3;
    		}
    		else if(han[i]>=6){
    			point[i] = 12000;
    			title[i] = 2;
    		}
    		else if(han[i]===5||(han[i]===4&&hu[i]>=31)||(han[i]===3&&hu[i]>=61)){
    			point[i] = 8000;
    			title[i] = 1;
    		}
    		else if(han[i]===4&&hu[i]>=21&&hu[i]!==25||han[i]===3&&hu[i]>=51){
    			point[i] = 7700;
    		}
    		else if(han[i]===2&&hu[i]>=101){
    			point[i] = 7100;
    		}
    		else if(han[i]===4&&hu[i]===25||han[i]===3&&hu[i]>=41||han[i]===2&&hu[i]>=91){
    			point[i] = 6400;
    		}
    		else if(han[i]===2&&hu[i]===81){
    			point[i] = 5800;
    		}
    		else if(han[i]===4&&hu[i]===20||han[i]===3&&hu[i]>=31||han[i]===2&&hu[i]>=71){
    			point[i] = 5200;
    		}
    		else if(han[i]===2&&hu[i]>=61){
    			point[i] = 4500;
    		}
    		else if(han[i]===3&&hu[i]>=21&&hu[i]!==25||han[i]===2&&hu[i]>=51){
    			point[i] = 3900;
    		}
    		else if(han[i]===1&&hu[i]>=101){
    			point[i] = 3600;
    		}
    		else if(han[i]===3&&hu[i]===25||han[i]===2&&hu[i]>=41||han[i]===1&&hu[i]>=91){
    			point[i] = 3200;
    		}
    		else if(han[i]===1&&hu[i]>=81){
    			point[i] = 2900;
    		}
    		else if(han[i]===3&&hu[i]===20||han[i]===2&&hu[i]>=31||han[i]===1&&hu[i]>=71){
    			point[i] = 2600;
    		}
    		else if(han[i]===1&&hu[i]>=61){
    			point[i] = 2300;
    		}
    		else if(han[i]===2&&hu[i]>=21&&hu[i]!==25||han[i]===1&&hu[i]>=51){
    			point[i] = 2000;
    		}
    		else if(han[i]===2&&hu[i]===25||han[i]===1&&hu[i]>=41){
    			point[i] = 1600;
    		}
    		else if(han[i]===2&&hu[i]===20||han[i]===1&&hu[i]>=31){
    			point[i] = 1300;
    		}
    		else if(han[i]===1&&hu[i]>=21&&hu[i]!==25){
    			point[i] = 1000;
    		}
    	}
    	console.log(yakus[i]);
    	console.log(han[i]);
    	console.log(hu[i]);
    	console.log(point[i]);
    	console.log(title[i]);
    	i++;
	}
	for(let tmp of yakus){
		console.log(tmp);
	}
}

//組み合わせの探索
function combination(nums, k){
    let ans = [];
    if (nums.length < k) {
        return []
    }
    if (k === 1) {
        for (let i = 0; i < nums.length; i++) {
            ans[i] = [nums[i]];
        }
    } else {
        for (let i = 0; i < nums.length - k + 1; i++) {
            let row = combination(nums.slice(i + 1), k - 1);
            for (let j = 0; j < row.length; j++) {
                ans.push([nums[i]].concat(row[j]));
            }
        }
    }
    return ans;
}

//配列の比較
function arraysAreEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}


//牌名をIDに変換
function exchangeTileName(tile){
	switch(tile){
		case '1man':
			return 0;
		case '2man':
			return 1;
		case '3man':
			return 2;
		case '4man':
			return 3;
		case '5man':
			return 4;
		case 'akaman':
			return 5;
		case '6man':
			return 6;
		case '7man':
			return 7;
		case '8man':
			return 8;
		case '9man':
			return 9;
		case '1pin':
			return 10;
		case '2pin':
			return 11;
		case '3pin':
			return 12;
		case '4pin':
			return 13;
		case '5pin':
			return 14;
		case 'akapin':
			return 15;
		case '6pin':
			return 16;
		case '7pin':
			return 17;
		case '8pin':
			return 18;
		case '9pin':
			return 19;
		case '1sou':
			return 20;
		case '2sou':
			return 21;
		case '3sou':
			return 22;
		case '4sou':
			return 23;
		case '5sou':
			return 24;
		case 'akasou':
			return 25;
		case '6sou':
			return 26;
		case '7sou':
			return 27;
		case '8sou':
			return 28;
		case '9sou':
			return 29;
		case 'tonfon':
			return 30;
		case 'nanfon':
			return 31;
		case 'syafon':
			return 32;
		case 'pefon':
			return 33;
		case 'haku':
			return 34;
		case 'hatu':
			return 35;
		case 'tyun':
			return 36;
	}
}

//牌IDを名前に変換
function exchangeTileId(tile){
	switch(tile){
		case 0:
			return '1man';
		case 1:
			return '2man';
		case 2:
			return '3man';
		case 3:
			return '4man';
		case 4:
			return '5man';
		case 5:
			return 'akaman';
		case 6:
			return '6man';
		case 7:
			return '7man';
		case 8:
			return '8man';
		case 9:
			return '9man';
		case 10:
			return '1pin';
		case 11:
			return '2pin';
		case 12:
			return '3pin';
		case 13:
			return '4pin';
		case 14:
			return '5pin';
		case 15:
			return 'akapin';
		case 16:
			return '6pin';
		case 17:
			return '7pin';
		case 18:
			return '8pin';
		case 19:
			return '9pin';
		case 20:
			return '1sou';
		case 21:
			return '2sou';
		case 22:
			return '3sou';
		case 23:
			return '4sou';
		case 24:
			return '5sou';
		case 25:
			return 'akasou';
		case 26:
			return '6sou';
		case 27:
			return '7sou';
		case 28:
			return '8sou';
		case 29:
			return '9sou';
		case 30:
			return 'tonfon';
		case 31:
			return 'nanfon';
		case 32:
			return 'syafon';
		case 33:
			return 'pefon';
		case 34:
			return 'haku';
		case 35:
			return 'hatu';
		case 36:
			return 'tyun';
		}
}

//手牌名をIDに変換
function exchangeHandsName(tile){
	switch(tile){
		case 'tehai0':
			return 0;
		case 'tehai1':
			return 1;
		case 'tehai2':
			return 2;
		case 'tehai3':
			return 3;
		case 'tehai4':
			return 4;
		case 'tehai5':
			return 5;
		case 'tehai6':
			return 6;
		case 'tehai7':
			return 7;
		case 'tehai8':
			return 8;
		case 'tehai9':
			return 9;
		case 'tehai10':
			return 10;
		case 'tehai11':
			return 11;
		case 'tehai12':
			return 12;
	}
}

function compareNumbers(a, b) {
  return a - b;
}