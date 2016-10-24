var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
c.width = window.innerWidth;
c.height = window.innerHeight - 50;
var hasta = 8;
inicio();
function inicio() {
	var iniciotop,
	inicioder,
	iniciobot,
	inicioizq;

	if (parseFloat(c.width) * (Math.sqrt(3) / 2) > parseFloat(c.height)) {
		iniciotop = 0;
		iniciobot = parseFloat(c.height);
		inicioder = parseFloat(c.width) / 2 - parseFloat(c.height) / (Math.sqrt(3));
		inicioizq = parseFloat(c.width) / 2 + parseFloat(c.height) / (Math.sqrt(3));
	} else {
		console.log(parseFloat(c.width) * Math.sqrt(3) / 4)
		iniciotop = parseFloat(c.height) / 2 - parseFloat(c.width) * (Math.sqrt(3) / 4);
		iniciobot = parseFloat(c.height) / 2 + parseFloat(c.width) * (Math.sqrt(3) / 4);
		inicioder = parseFloat(c.width);
		inicioizq = 0;
	}
	ctx.beginPath();
	ctx.moveTo(inicioizq, iniciobot);
	ctx.lineTo(inicioder, iniciobot);
	ctx.lineTo(inicioizq + (inicioder - inicioizq) / 2, iniciotop);
	ctx.fill();

	ctx.fillStyle = "#FFFFFF";
	var m = (inicioder - inicioizq) / 2;

	draw((iniciotop + iniciobot) / 2, inicioder - m / 2, iniciobot, inicioizq + m / 2, 0);
}

function draw(a, b, c, d, length) {
	if (length > hasta)
		return;
	var mh = (b - d) / 2;
	var mv = (c - a) / 2
	ctx.beginPath();
	ctx.moveTo(d, a);
	ctx.lineTo(b, a);
	ctx.lineTo(d + mh, c);
	ctx.fillStyle = getRandomColor();
	ctx.fill();
	length++;
	setTimeout(function () {
		draw(a + mv, d + mh / 2, c, d - mh / 2, length);
	}, 2000 / length);
	setTimeout(function () {
		draw(a - mv, b - mh / 2, a, d + mh / 2, length);
	}, 3500 / length);
	setTimeout(function () {
		draw(a + mv, b + mh / 2, c, b - mh / 2, length);
	}, 4000 / length);
}

function getRandomColor() {
	return '#'+Math.floor(Math.random()*16777215).toString(16);
}
