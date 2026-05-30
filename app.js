let btn = document.querySelector("button");
btn.addEventListener("click", function(){
  let r = Math.floor(Math.random()*256);
  let g = Math.floor(Math.random()*256);
  let b = Math.floor(Math.random()*256);
  
  let col = `rgb(${r},${g},${b})`;
  let div = document.querySelector("#color");
  div.style.backgroundColor = col;

  let h1 = document.querySelector("h1");
  h1.style.color = col;

  let h3 = document.querySelector("h3");
  h3.innerHTML=col;
});
