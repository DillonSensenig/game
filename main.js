
// This function grabs the ID "move" and applies styles -- left / top / position -- to it.
			function init(){
				objImage=document.getElementById("move");
				objImage.style.position='relative';
				objImage.style.left='0px';
				objImage.style.top='0px';
			}
// The switch conditional selects the 4 blocks of code below it and activates them when called upon.
// The case statements are each assigned the key code for W, A, S & D. This entire function is what recognizes what key is being pressed 
			function getKeyAndMove(e){				
				var key_code=e.which||e.keyCode;
				switch(key_code){
					case 65: // 65 A key -- Left
						moveLeft();
						break;
					case 87: // 87 W key -- Up
						moveUp();
						break;
					case 68: // 68 D key -- Right 
						moveRight();
						break;
					case 83: // 83 S key -- Down 
            moveDown();
						break;						
				}
			}
// Each of these functions apply styles.top/left to each up/down/left/right. The parseInt translates the value and returns and integer. " -5 + 'px'; " is the amount of pixels 
// that the sprite is moving back or forth (+).
			function moveLeft(){
				objImage.style.left=parseInt(objImage.style.left)-5 +'px';
			}
			function moveUp(){
				objImage.style.top=parseInt(objImage.style.top)-5 +'px';
			}
			function moveRight(){
				objImage.style.left=parseInt(objImage.style.left)+5 +'px';
			}
			function moveDown(){
				objImage.style.top=parseInt(objImage.style.top)+5 +'px';
			}
			window.onload=init;
      
