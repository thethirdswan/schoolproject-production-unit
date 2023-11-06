//to reset selected menu
window.addEventListener("load", checkbox);

var jam = document.getElementById("jam")
var sekarang = document.getElementById("sekarang");

function tanya() {
	var tanda = document.querySelector('input[name="tanya"]:checked').value;
	if (tanda == "Menu") {
		window.location.href = "https://wa.me/6281770219886?text=Menu%20hari%20ini%20apa%20aja,%20kak?"
	} else {
		window.location.href = "https://wa.me/6281770219886?text=Bisa%20ngeprint%20ngga,%20kak?"
	}
}

// order prototype
function pesan() {
	var nama = document.getElementById("nama").value;
	var lokasi = document.getElementById("lokasi").value;
	var waktu = document.querySelector("input[name='waktu']:checked").value
	if (waktu == "Sekarang") {
		waktu = "Sekarang"
	} else if (waktu == "Jam") {
		waktu = "Jam%20" + document.getElementById("txtjam").value;
	}
	var pesanan = document.querySelectorAll('input[name="order"]:checked');
	// var message = "https://wa.me/6281770219886?text=Nama%20:%20" + nama + "\nDikirim%20ke%20:%20" + lokasi + "\nKapan%20dikirim%20:%20" + waktu + "\nOrder%20:%20"
	var message = "https://wa.me/6282158566320?text=Nama%20:%20" + nama + "%0ADikirim%20ke%20:%20" + lokasi + "%0AKapan%20dikirim%20:%20" + waktu + "%0AOrder%20:%20"
	pesanan.forEach((checkbox) => {
		var jumlah = "txt" + checkbox.id;
		message = message + "%0A" + checkbox.value + "%20" + document.getElementById(jumlah).value + "x"
	});
	window.location.href = message;
	checkbox();
}

// showing fields of each menu
function showfield(checkbox) {
	var box = checkbox.id;
	var field = 'txt' + box;
	if (document.getElementById(field).style.display == 'none') {
		document.getElementById(field).style.display = 'block'
	} else {
		document.getElementById(field).style.display = 'none'
	}

}

//reset checked menu
function checkbox() {
	var pesanan = document.querySelectorAll('input[name="order"]:checked');
	pesanan.forEach((box) => {
		box.checked = false;
	})
}

// checks if jam is selected, if selected will show field for when to deliver
jam.addEventListener("click", function check() {
	document.getElementById("txtjam").style.display = 'block'
})
// else it will disappear and reset
sekarang.addEventListener("click", function check() {
	document.getElementById("txtjam").style.display = 'none'
	document.getElementById("txtjam").value = ''
})
