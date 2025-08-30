function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const rainbowColors = [
  // Red
  ["rgb(60, 0, 0)", "rgb(255, 0, 0)"],
  // Orange
  ["rgb(70, 30, 0)", "rgb(255, 165, 0)"],
  // Yellow
  ["rgb(70, 70, 0)", "rgb(255, 255, 0)"],
  // Green
  ["rgb(0, 60, 0)", "rgb(0, 255, 0)"],
  // Blue
  ["rgb(0, 0, 70)", "rgb(0, 0, 255)"],
  // Indigo
  ["rgb(20, 0, 60)", "rgb(75, 0, 130)"],
  // Violet
  ["rgb(50, 0, 70)", "rgb(148, 0, 211)"]
];
for(var i = 5; i < 100; i += 7){
    for(var j = 2; j < 100; j += 10){
        //if(i < 19 || i > 82 || j < 22 || j > 85){
            var star = document.createElement("div");
        star.classList.add("star");
        star.innerHTML = "✦";
        star.style.left = i + "%";
        star.style.top = j + "%";
        var color = getRandomInt(0, 6);
        star.style.color = rainbowColors[color][0];
        star.style.textShadow = "0px 0px 5px " + rainbowColors[color][1];
        star.style.animationDelay = getRandomInt(-20, 0) + "s";
        //document.body.appendChild(star);
        //}
        
    }
}

const header = document.querySelector("#header");

/*
window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
*/
/*
const header = document.querySelector('#header');
const fadeStart = 0;    // scrollY at which fade starts (px)
const fadeEndVW = 50;               // for example, 50vw
const fadeEnd = (window.innerWidth * fadeEndVW) / 100;   // scrollY at which fade is full opacity (px)

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  let opacity = 0;

  if(scrollY <= fadeStart) {
    opacity = 0;
  } else if(scrollY >= fadeEnd) {
    opacity = 1;
  } else {
    opacity = (scrollY - fadeStart) / (fadeEnd - fadeStart);
  }

  header.style.backgroundColor = `rgba(255, 255, 255, ${opacity})`;
});
*/
/*
Work Icons Homepage:
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
var workIcons = document.getElementsByClassName("workIcon");
for(var i = 0; i < workIcons.length; i++){
    workIcons[i].style.transform = "rotateZ(" + (30 * (Math.random() - 0.5)) + "deg)";
}
    <img src = "doorlist.png" class = "workIcon bigWorkIcon" style = "left:8vw;top:28vw;">
    <img src = "dcyhc.png" class = "workIcon bigWorkIcon" style = "left:18vw;top:17vw;">
    <img src = "converse.png" class = "workIcon midWorkIcon" style = "left:6vw;top:19vw;">
    <img src = "amazonmusic.png" class = "workIcon midWorkIcon" style = "left:20vw;top:9vw;">
    <img src = "brio.png" class = "workIcon midWorkIcon" style = "left:23vw;top:29vw;">
    <img src = "lucidide.png" class = "workIcon midWorkIcon" style = "left:8vw;top:9vw;">
    <img src = "rescan.png" class = "workIcon bigWorkIcon" style = "left:70vw;top:27vw;">
    <img src = "oceanai.png" class = "workIcon midWorkIcon" style = "left:85vw;top:21vw;">
    <img src = "tou.png" class = "workIcon bigWorkIcon" style = "left:72vw;top:14vw;">
    <img src = "transitai.png" class = "workIcon midWorkIcon" style = "left:86vw;top:11vw;">
    <img src = "youphoria.png" class = "workIcon midWorkIcon" style = "left:83vw;top:31vw;">

    .workIcon{
    border-radius:1vw;
    transition:0.1s all;
}
.bigWorkIcon{
    width:10vw;
}
.midWorkIcon{
    width:6.5vw;
}
*/