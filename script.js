
const img = document.querySelector(".content .kado")
const kata = document.querySelector(".content .kata")
const button = document.querySelectorAll(".content button")
const ctn = document.querySelector(".content")

function clik (btn){
  btn.textContent == "Iya 🤗" ? img.src = "img/dino2.jpg" : img.src = "img/dino3.jpg" 
  button[0].style.display = "none"
  button[1].style.display = "none"
  ctn.style.height = "250px"
  ctn.style.width = "270px"
  return btn.textContent == "Iya 🤗" ? kata.textContent = "you are so cool anann😍 " : kata.textContent = "semangat dum😭😭😭😭😭😭"
  
}
function content(){
  ctn.style.width = "300px"
  ctn.style.height = "400px"
  ctn.style.borderRadius = "5px"
  kata.textContent = "Hay, cuma mau ucapin, semangat ya anann😊"
}
function pesanHilang(){
  const divpesan = document.querySelector("div.pesan")
  divpesan.style.display = "none"
  content()
  fullLayar()
  musik()
}

function fullLayar() {
			var elem = document.documentElement;

			if (elem.requestFullscreen) {
				elem.requestFullscreen();
			} else if (elem.webkitRequestFullscreen) {
				/* Safari */
				elem.webkitRequestFullscreen();
			} else if (elem.msRequestFullscreen) {
				/* IE11 */
				elem.msRequestFullscreen();
			}

		}

setTimeout(()=>{
  const span = document.querySelector("div.pesan span")
  span.style.opacity = ".2"
  musik()
}, 1000)

function musik(){
  const msk = document.getElementById("lagu")
  msk.play()
  msk.loop = true
}
setInterval(musik, 147000)


