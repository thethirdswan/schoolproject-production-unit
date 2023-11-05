var radiotanya = document.getElementsByName('tanya');
var bertanya = document.getElementById('bertanya');

function tanya() {
	var tanda = document.querySelector('input[name="tanya"]:checked').value;
	if (tanda == "Menu") {
		window.location.href = "https://wa.me/6281770219886?text=Menu%20hari%20ini%20apa%20aja,%20kak?"
	} else {
		window.location.href = "https://wa.me/6281770219886?text=Bisa%20ngeprint%20ngga,%20kak?"
	}
}