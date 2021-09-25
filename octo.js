let url = '';

if ((document.URL).includes('?'))
  url = (document.URL).substr((document.URL).lastIndexOf("?")+1);
else
  url = 'hhhhbhoohbhhhhbhohobhoohbbhhhhbhoohbhoohbhoohbhhhh';

const display = document.querySelector("#heart");
let imgCount = 0;
let breakCount = 0;
let prevBreak = false;

for (let i = 0; i < url.length && i <= 100; i++){
  if(url.substr(i,1) == 'h'){
    const octopus = document.createElement("img");
    octopus.src = "img/octopus.png";
    display.appendChild(octopus);
    imgCount++;
    prevBreak = false;
  }
  else if(url.substr(i,1) == 'o'){
    const heart = document.createElement("img");
    heart.src = "img/heart.png";
    display.appendChild(heart);
    imgCount++;
    prevBreak = false;
  }
  else if(url.substr(i,1) == 'b'){
    const br = document.createElement("br");
    display.appendChild(br);
    if(prevBreak) breakCount++;
    prevBreak = true;
  }
  else{
    display.innerText = "URL Error!";
    break;
  }
}

const images = document.getElementsByTagName('img');
const breaks = document.getElementsByTagName('br');

function resize(){
  let emojiSize = 50;
  let vertRatio = heart.clientHeight / window.innerHeight;
  let horizRatio = heart.clientWidth / window.innerWidth;

  if (vertRatio > 1 && vertRatio > horizRatio)
    emojiSize = parseInt(emojiSize / vertRatio);
  else if (horizRatio > 1)
    emojiSize = parseInt(emojiSize / horizRatio);

  for(let i = 0; i < images.length; i++)
    images[i].style.height = emojiSize+'px';

  if (vertRatio > 1)
    for(let i = 0; i < breaks.length; i++)
      breaks[i].style.lineHeight = '50%';
}

window.addEventListener('resize', function(event) {
  resize();
}, true);

resize();
