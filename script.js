const resize_ob = new ResizeObserver(function(entries) {
	// since we are observing only a single element, so we access the first element in entries array
	let rect = entries[0].contentRect;

	// current width & height
	let width = rect.width;
	let height = rect.height;

	console.log('Current Width : ' + width);
	console.log('Current Height : ' + height);
});

// start observing for resize
resize_ob.observe(document.querySelector("#minuman"));