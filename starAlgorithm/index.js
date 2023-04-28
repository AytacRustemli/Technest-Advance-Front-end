function squareStar() {
  let star = "*****"

  for (let i = 0; i < 5; i++) {
    console.log(star);
  }
}

squareStar();




function emptysquareStar(){
  let star = "*****"

  for (let i = 0; i < 5; i++) {
    if(i== 0 || i==4){
      console.log(star);
    }
    else{
      console.log('*   *');
    }
  }
}

emptysquareStar();




function lefttriangleStar(){
  for (let i = 0; i < 6; i++) {
    let star = "";
    for (let j = 0; j < i; j++) {
      star += "*";
    }
    console.log(star)
  }
  
}

lefttriangleStar();



function righttriangleStar(){
  let star = "";
  for (let i = 0; i <= 5; i++) {
    star += " ".repeat(5-i)+ "*".repeat(i) + "\n"
  }
  console.log(star);
}

righttriangleStar();




function downWardStar() {
  let star = "";
  for (let i = 5; i >= 1; i--) {
    star += "*".repeat(i) + "\n";
  }
  console.log(star);
}

downWardStar();



function pyramidTriangleStar(height) {
  let star = "";
  let space = " ";
  let base = height * 2 - 1; 
  
  for (let i = 1; i <= height; i++) {
    let numStars = i * 2 - 1;
    let numSpaces = (base - numStars) / 2; 
    star += space.repeat(numSpaces) + "*".repeat(numStars) + space.repeat(numSpaces) + "\n";
  }
  
  console.log(star);
}

pyramidTriangleStar(5);




function reversedpyramidTriangleStar(height) {
  let star = "";
  let space = " ";
  let base = height * 2 - 1; 
  
  for (let i = 5; i >= 1; i--) {
    let numStars = i * 2 - 1;
    let numSpaces = (base - numStars) / 2; 
    star += space.repeat(numSpaces) + "*".repeat(numStars) + space.repeat(numSpaces) + "\n";
  }
  
  console.log(star);
}

reversedpyramidTriangleStar(5);


function diamondtriangleStar(height){
  let star = "";
  let space = " ";
  let base = height * 2 - 1; 
  
  for (let i = 1; i <= height; i++) {
    let numStars = i * 2 - 1;
    let numSpaces = (base - numStars) / 2; 
    star += space.repeat(numSpaces) + "*".repeat(numStars) + space.repeat(numSpaces) + "\n";
  }
  for (let i = 5; i >= 1; i--) {
    let numStars = i * 2 - 1;
    let numSpaces = (base - numStars) / 2; 
    star += space.repeat(numSpaces) + "*".repeat(numStars) + space.repeat(numSpaces) + "\n";
  }
  
  console.log(star);
}

diamondtriangleStar(5);