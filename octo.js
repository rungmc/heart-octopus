const url = (document.URL).substr((document.URL).indexOf("?")+1);
const display = document.querySelector("#heart");

for (let i = 0; i < url.length && i <= 120; i++){
  if(url.substr(i,1) == 'h')
    display.innerHTML += "<img src=\"img/octopus.png\">";
  else if(url.substr(i,1) == 'o')
    display.innerHTML += "<img src=\"img/heart.png\">";
  else if(url.substr(i,1) == 'b')
    display.innerHTML += "<br>";
  else{
    alert("URL Syntax error!");
    break;
  }
}
