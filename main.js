canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
greencar_width=100;
greencar_height=200;
greencarx=90;
greencary=300;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";



function add() {
	background_image_tag=new Image();
    background_image_tag.onload=uploadbackground;
    background_image_tag.src=background_image;
   greencar_image_tag=new Image();
   greencar_image_tag.onload=uploadgreencar;
   greencar_image_tag.src=greencar_image;
}

function uploadbackground() {
	ctx.drawImage(background_image_tag,0,0,canvas.width,canvas.height);

}

function uploadgreencar() {
	ctx.drawImage(greencar_image_tag,greencarx,greencary,greencar_width,greencar_height);

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up(){
    if (greencary>=0) {
        greencary=greencary-10;
        uploadbackground();
        uploadgreencar();

        
    }
}
function down(){
    if (greencary<=500) {
        greencary=greencary+10;
        uploadbackground();
        uploadgreencar();
        
        
    }
}
function left(){
    if (greencarx>=0) {
        greencarx=greencarx-10;
        uploadbackground();
        uploadgreencar();
        
        
    }
}
function right(){
    if (greencarx<=700) {
        greencarx=greencarx+10;
        uploadbackground();
        uploadgreencar();
        
        
    }
}