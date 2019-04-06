// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: red; icon-glyph: globe-americas;
let html = `
<meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0;"/>
<style>
body {
  font-family: -apple-system;
  height: 100%;
}
#container {
  display: table;
  width: 100%;
  height: 100%;
}
#countdown {
  text-align: center;
  font-size: 20pt;
  min-height: 10em;
  display: table-cell;
  vertical-align: middle;
}
</style>
<script src = "https://cdnjs.cloudflare.com/ajax/libs/howler/2.1.1/howler.core.min.js"></script>
<div id="agentman"></div>
<div id="container">
  <div id="countdown"></div>
</div>
<audio id="audioID" src="" type="audio/mpeg" preload="metadata">
<embed src="" ></embed>
<script>

 var trevi_sound = new Howl({
   src: ['https://res.cloudinary.com/kaibacorp/video/upload/v1551461024/HeySiri.mp3'],
   autoplay: true,
   loop: false,
   volume: 1,
   onend: function () {
     //console.log('Finished!');
   }
 });
let agenta= document.getElementById("agentman")
agenta.innerHTML = "Test"
//let myAudio = document.getElementById("audioID");
//myAudio.pause();
//myAudio.src = "https://res.cloudinary.com/kaibacorp/video/upload/v1551461024/HeySiri.mp3";
//myAudio.play();
// console.log(NavigatorID.userAgent)
// Date we want to countdown to
let targetDate = new Date()
targetDate.setHours(24, 0, 0, 0)
let targetTime = targetDate.getTime()
// Create a timer that updates every second
let timer = setInterval(function() {
  var now = new Date().getTime()
  let distance = targetTime - now;
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  let seconds = Math.floor((distance % (1000 * 60)) / 1000)
  // Update the element with id="countdown"
  let e = document.getElementById("countdown")
  e.innerHTML = ""
    + hours + "h "
    + minutes + "m " + seconds + "s "
    + " to midnight"
  if (distance < 0) {
    clearInterval(timer)
  }
}, 1000)
</script>
`

WebView.loadHTML(html, null, new Size(0, 100))
