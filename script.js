// reset menu, mengambil identitas
window.addEventListener("load", checkbox);
window.addEventListener("load", identity);

if (localStorage.getItem("Nama") == null) {
	localStorage.setItem("Nama", "")
}

if (localStorage.getItem("Lokasi") == null) {
	localStorage.setItem("Lokasi", "")
}

var jam = document.getElementById("jam");
var sekarang = document.getElementById("sekarang");
var radiomenu = document.getElementById("radiomenu");
var radioprint = document.getElementById("radioprint");
var cekliscatatan = document.getElementById("note")

//untuk bertanya
function tanya() {
	var message;
	var tanda = document.querySelector('input[name="tanya"]:checked').value;
	if (tanda == "Menu") {
		message = "https://wa.me/6281770219886?text=Menu%20hari%20ini%20apa%20aja,%20kak?"
		window.open(message);
	} else {
		var kertas = document.querySelector('input[name="kertas"]:checked').value;
		var tipe = document.querySelector('input[name="tipe"]:checked').value;
		var jumlahlembar = document.getElementById("jumlahlembar").value;
		message = "https://wa.me/6281770219886?text=Saya%20mau%20ngeprint%20dengan%20keterangan%20seperti%20berikut:%20%0AKertas%20:%20" + kertas + "%0ATipe%20print%20:%20" + tipe + "%0APerkiraan%20lembar%20dokumen%20:%20" + jumlahlembar + "%0AKira-kira%20biayanya%20berapa%20kak?";
		checkbox()
		window.open(message);
		location.reload();
	}
}

// memuat identitas
function identity() {
	var nama = document.getElementById("nama")
	var lokasi = document.getElementById("lokasi")
	var storagenama = localStorage.getItem("Nama")
	var storagelokasi = localStorage.getItem("Lokasi")
	nama.value = storagenama
	lokasi.value = storagelokasi
}

// order
function pesan() {
	var nama = document.getElementById("nama").value;
	var lokasi = document.getElementById("lokasi").value;
	var waktu = document.querySelector("input[name='waktu']:checked").value
	var rememberidentity = document.getElementById("rememberidentity");
	if (waktu == "Sekarang") {
		waktu = "Sekarang"
	} else if (waktu == "Jam") {
		waktu = "Jam%20" + document.getElementById("txtjam").value;
	}
	var pesanan = document.querySelectorAll('input[name="order"]:checked');
	if (nama == '' || lokasi == '') {
		window.alert("Anda belum mengisi identitas!")
	} else if (pesanan.length == 0) {
		window.alert("Anda belum memilih menu untuk dipesan!")
	} else {
		var message = "https://wa.me/6281770219886?text=Nama%20:%20" + nama + "%0ADikirim%20ke%20:%20" + lokasi + "%0AKapan%20dikirim%20:%20" + waktu + "%0AOrder%20:%20"
		if (rememberidentity.checked == true) {
			localStorage.setItem("Nama", nama)
			localStorage.setItem("Lokasi", lokasi)
		}
		pesanan.forEach((checkbox) => {
			var jumlah = "txt" + checkbox.id;
			message = message + "%0A" + checkbox.value + "%20" + document.getElementById(jumlah).value + "x"
		});
		if (cekliscatatan.checked == true) {
			message = message + "%0A" + "Catatan:%20" + document.getElementById("txtnote").value
		}
		message = message + "%0AKira-kira%20berapa%20totalnya%20kak?";
		checkbox();
		window.open(message);
		location.reload();
	}
}

// menunjukkan kolom jumlah menu
function showfield(checkbox) {
	var box = checkbox.id;
	var field = 'txt' + box;
	if (document.getElementById(field).style.display == 'none') {
		document.getElementById(field).style.display = 'block'
	} else {
		document.getElementById(field).style.display = 'none'
	}

}

//reset ceklis
function checkbox() {
	var pesanan = document.querySelectorAll('input[name="order"]:checked');
	pesanan.forEach((box) => {
		box.checked = false;
	})
	cekliscatatan.checked = false;
	radiomenu.checked = true;
}

// cek jika jam dipilih, jika dipilih menampilkan kolom untuk waktu antar
jam.addEventListener("click", function check() {
	document.getElementById("txtjam").style.display = 'block'
})
// selain itu akan dihilangkan
sekarang.addEventListener("click", function check() {
	document.getElementById("txtjam").style.display = 'none'
	document.getElementById("txtjam").value = ''
})

//menampilkan kolom catatan
cekliscatatan.addEventListener("click", function check() {
	if (cekliscatatan.checked == true) {
		document.getElementById("txtnote").style.display = 'block'
	} else {
		document.getElementById("txtnote").style.display = 'none'
	}
})

// tampil menu print
radiomenu.addEventListener("click", function check() {
	document.getElementById("containerprint").style.display = 'none';
})
radioprint.addEventListener("click", function check() {
	document.getElementById("containerprint").style.display = 'block';
})
