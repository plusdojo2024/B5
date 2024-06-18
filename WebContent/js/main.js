/**
 *
 */
let dora_flag = true;	//ドラ選択モードの管理
let dora_num = 0;		//何番目のドラが選ばれているか
let regist_flag = true; //初期登録が終わっているかの管理
let tehai_num = 0;		//初期登録がどこまで終わっているか
let tumo_flag = false;	//ツモ牌を選んでいるかの管理
let tumo_name = null;   //ツモ牌が何か登録するところ
const hands = [];       //現在の手牌のリスト



//牌を選択すると動くメソッド
function tilesClick(tile){

	let tile_name = tile.id;//選択した牌のID

	//ドラ表示牌変更部分
	if(dora_flag === true){//ドラを選択する状態か
		let input_data = document.createElement("img");						//挿入するHTMLタグを決める
  		input_data.src = "/B5/img/ma-jan_"+tile_name+".png";				//属性と属性値を決める
		input_data.alt = "tile_name";
		input_data.style = "height: 100%;";
      	input_data.id = "doraimg"+dora_num;

      	let parent = document.getElementById("dora"+dora_num);				//親を決める

		parent.removeChild(document.getElementById("doraimg"+dora_num));	//もともと入っていたものを削除
      	parent.appendChild(input_data);										//選択した牌を挿入

		dora_flag = false;	//ドラ選択モードを解除
		dora_num++;			//次のドラが選ばれる
	}//初期手牌登録部分
	else if(regist_flag === true){//初期登録が終わっているか
		hands.push(exchangeTileName(tile_name));
		sort_hands();


		tehai_num++;//次の手牌を選択
		if(tehai_num >12){//手牌が13個選ばれれば初期登録モードを終了
			regist_flag = false;
		}
	}//ツモ牌を選択する部分
	else{
		let input_data = document.createElement("img");					//挿入するHTMLタグを決める
  		input_data.src = "/B5/img/ma-jan_"+tile_name+".png";			//属性と属性値を決める
		input_data.alt = "tile_name"
		input_data.style = "height: 100%;"
      	input_data.id = "tumotileimg";

      	let parent = document.getElementById("tumotile");				//親を決める

		parent.removeChild(document.getElementById("tumotileimg"));		//もともと入っていたものを削除
      	parent.appendChild(input_data);									//選択した牌を挿入

		tumo_flag = true;		//ツモ牌を選んでいる状態
		tumo_name = tile_name   //ツモ牌を記録
	}


}

//ドラ追加ボタンを選択すると動くメソッド
function doraClick(){
	if(regist_flag === false && dora_num < 5){//初期登録が終わっており、ドラが五つ選択されていなければドラ選択状態に移行
		dora_flag = true;
	}
}

//手牌を選択すると動くメソッド
function tehaiClick(num){
	if(regist_flag === true){
		let tehai_name = num.id;
		hands.splice(exchangeHandsName(tehai_name),1);
		sort_hands();
		tehai_num--;
	}
	if(tumo_flag===true){//ツモ牌が登録されていれば手牌に登録
		let tehai_name = num.id;
		hands.splice(exchangeHandsName(tehai_name),1,exchangeTileName(tumo_name));
		sort_hands();

		//ツモ牌を選択していない状態に
		input_data = document.createElement("img");						//挿入するHTMLタグを決める
  		input_data.src = "/B5/img/ma-jan_back.png";						//属性と属性値を決める
		input_data.alt = "back"
		input_data.style = "height: 100%;"
      	input_data.id = "tumotileimg";

      	parent = document.getElementById("tumotile");					//親を決める

		parent.removeChild(document.getElementById("tumotileimg"));		//もともと入っていたものを削除
      	parent.appendChild(input_data);									//選択した牌を挿入

		hantei();
		tumo_flag = false;
	}
}

//整牌するメソッド
function sort_hands(){
	hands.sort(compareNumbers);
	for(let i=0;i<13;i++){
		let input_data = document.createElement("img");			//挿入するHTMLタグを決める
		if(hands.length>i){
			input_data.src = "/B5/img/ma-jan_"+exchangeTileId(hands[i])+".png";			//属性と属性値を決める
		}
		else{
			input_data.src = "/B5/img/ma-jan_back.png";
		}
		input_data.alt = "exchangeTilesId(tehai[i])"
		input_data.style = "height: 100%;"
	  	input_data.id = "tehai"+ i +"img";

	  	let parent = document.getElementById("tehai"+i);				//親を決める

		parent.removeChild(document.getElementById("tehai"+ i +"img"));	//もともと入っていたものを削除
	  	parent.appendChild(input_data);									//選択した牌を挿入
	}
}

//テンパイの判定を行うメソッド
function hantei(){
	const tile_count = [...Array(34)].map(()=>0);//牌を数える用の配列
	const wait_tile = [...Array(34)].map(()=>0);//待ち牌をカウントする配列

	//赤ドラ分のずれを補正
	for(let i = 0;i < 13;i++){
		if(hands[i] > 4 && hands[i] <15){
			hands.splice(i,1,hands[i]-1);
		}
		else if(hands[i] >14 && hands[i] <24){
			hands.splice(i,1,hands[i]-2);
		}
		else if(hands[i] >23){
			hands.splice(i,1,hands[i]-3);
		}

	}

	//種類ごとに牌をカウント
	for(const tmp of hands){
		tile_count[tmp]++;
	}
	for(const tmp of tile_count){
	    //console.log(tmp);
	}

	//ひとつづつ牌を加えて判定する
	for(let i = 0;i<34;i++){
		let tile_tmp = tile_count;					//手牌カウントをコピー
		const head_count = [...Array(34)].map(()=>0);	//頭になる牌をカウント
		let head_num;									//頭の数を数える

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

		if(head_num===7){//トイツ7つでチートイツ成立
		wait_tile[i]++;
		break;
		}
		else if(//国士無双の判定
		tile_tmp === [2,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1] ||
        tile_tmp === [1,0,0,0,0,0,0,0,2,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1] ||
        tile_tmp === [1,0,0,0,0,0,0,0,1,2,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1] ||
        tile_tmp === [1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,2,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1] ||
        tile_tmp === [1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,2,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1] ||
        tile_tmp === [1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,2,1,1,1,1,1,1,1] ||
        tile_tmp === [1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,2,1,1,1,1,1,1] ||
        tile_tmp === [1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,2,1,1,1,1,1] ||
        tile_tmp === [1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,2,1,1,1,1] ||
        tile_tmp === [1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,2,1,1,1] ||
        tile_tmp === [1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,2,1,1] ||
        tile_tmp === [1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,2,1] ||
        tile_tmp === [1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,2] ){
        wait_tile[i]++;
        }
        else{
	        for(let j = 0;j < 34;j++){//雀頭ごとに探索
		        if(head_count[j]==1){
			        let tile_tmp_head = tile_tmp;//雀頭ごとにコピー
			        tile_tmp_head[j]-=2;

			        let tile_tmp2_head = tile_tmp_head;
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
	        		if (tile_tmp2_head == [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]){
	        			wait_tile[i]++;
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

	        			tile_tmp2_head = tile_tmp_head;
	        			kotsu_tmp = kotsuArray[k];
	        			for(let m = 0;m > kotsu_tmp.length;m++){
	        				tile_tmp2_head[kotsu_tmp[m]] -= 3;
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
	        		if (tile_tmp2_head == [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]){
	        			wait_tile[i]++;
	        		}
	        	}
	        }
        }
	}
	if(wait_tile === []){
		console.log("テンパイしていない");
	}
	else{
		console.log("テンパイしている");
		for(let i = 0;i < 34;i++){
			if(wait_tile[i]>0){
				console.log(wait_tile[i]);
			}
		}
	}
	for(let i = 0;i < 34;i++){
			console.log(wait_tile[i]);
		}
	console.log("finish");
}

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