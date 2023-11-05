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

function pesan() {
	var pesanan = document.querySelectorAll('input[name="order"]:checked');
	pesanan.forEach((checkbox) => {
		console.log(checkbox.value)
	});
}

function showfield(checkbox) {
	var box = checkbox.id;
	var field = 'txt' + box;
	if (document.getElementById(field).style.display == 'none') {
		document.getElementById(field).style.display = 'block'
	} else {
		document.getElementById(field).style.display = 'none'
	}

}