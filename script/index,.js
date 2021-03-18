let clicked = false;
document.querySelector(".xmenu").addEventListener("click", () => {
  clicked = !clicked;
  console.log(clicked);
  if (clicked) {
    document.querySelector("nav").style.cssText = "display:flex;";
  } else {
    document.querySelector("nav").style.cssText = "display:none ;";
    document.querySelector(".topnav").style.cssText = "justify-content: left;";
    
  }
});
