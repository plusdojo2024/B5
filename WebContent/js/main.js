/**
 *
 */
let dora_flag = true;
let dora_num = 0;
let regist_flag = true;
let tehai_num = 0;
let tumo_flag = true;
let tumo_name = null;



function tilesClick(tile){
	let tile_name = tile.id;
	//ドラ表示牌変更部分
	if(dora_flag === true){
		let input_data = document.createElement("img");
  		input_data.src = "/B5/img/ma-jan_"+tile_name+".png";
		input_data.alt = "tile_name"
		input_data.style = "height: 100%;"
      	input_data.id = "doraimg"+dora_num;
      	let parent = document.getElementById("dora"+dora_num);

		parent.removeChild(document.getElementById("doraimg"+dora_num));
      	parent.appendChild(input_data);

		dora_flag = false;
		dora_num++;
	}
	else if(regist_flag === true){
		let input_data = document.createElement("img");
  		input_data.src = "/B5/img/ma-jan_"+tile_name+".png";
		input_data.alt = "tile_name"
		input_data.style = "height: 100%;"
      	input_data.id = "tehai"+tehai_num+"img";
      	let parent = document.getElementById("tehai"+tehai_num);

		parent.removeChild(document.getElementById("tehai"+tehai_num +"img"));
      	parent.appendChild(input_data);

		tehai_num++;
		if(tehai_num >12){
			regist_flag = false;
		}
	}else{
		let input_data = document.createElement("img");
  		input_data.src = "/B5/img/ma-jan_"+tile_name+".png";
		input_data.alt = "tile_name"
		input_data.style = "height: 100%;"
      	input_data.id = "tumotileimg";
      	let parent = document.getElementById("tumotile");

		parent.removeChild(document.getElementById("tumotileimg"));
      	parent.appendChild(input_data);
		tumo_flag = true;
		tumo_name = tile_name
	}


}

function doraClick(){
	if(regist_flag === false && dora_num < 5){
		dora_flag = true;
	}
}

function tehaiClick(num){
	if(tumo_flag===true){
		let tehai_name = num.id;
		let input_data = document.createElement("img");
  		input_data.src = "/B5/img/ma-jan_"+tumo_name+".png";
		input_data.alt = "tumo_name"
		input_data.style = "height: 100%;"
      	input_data.id = tehai_name +"img";
      	let parent = document.getElementById(tehai_name);
		console.log(tehai_name +"img");
		parent.removeChild(document.getElementById(tehai_name +"img"));
      	parent.appendChild(input_data);

		input_data = document.createElement("img");
  		input_data.src = "/B5/img/ma-jan_back.png";
		input_data.alt = "back"
		input_data.style = "height: 100%;"
      	input_data.id = "tumotileimg";
      	parent = document.getElementById("tumotile");

		parent.removeChild(document.getElementById("tumotileimg"));
      	parent.appendChild(input_data);

		tumo_flag = false;
	}
}
