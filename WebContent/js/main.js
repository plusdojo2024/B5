/**
 *
 */
let dora_flag = true;
let dora_num = 0;
function tilesClick(tile){
	let tile_name = tile.id;
	console.log(tile_name);
	if(dora_flag = true){
		let input_data = document.createElement("img");
  		input_data.src = "/B5/img/ma-jan_"+tile_name+".png";
		input_data.alt = "tile_name"
		input_data.style = "height: 100%;"
      	input_data.id = "dora";
      	let parent = document.getElementById("dora"+dora_num);

		parent.removeChild(document.getElementById("dora"));
      	parent.appendChild(input_data);

		dora_flag = false;
		dora_num++;
	}
}

function doraClick(){
	if(dora_num < 5){
		dora_flag = true;
	}
}