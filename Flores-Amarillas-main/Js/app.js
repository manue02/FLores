let Titulo = document.title;

window.addEventListener("blur", () => {
	Titulo = document.title;
	document.title = "No te vallas, regresa :(";
});

window.addEventListener("focus", () => {
	document.title = Titulo;
});

document.getElementById("B12").addEventListener("click", () => {
	//redirigir a la pagina de index.html
	window.location.href = "../Flores-Amarillas-main/HTML/index.html";
});

document.getElementById("B1").addEventListener("click", () => {
	//redirigir a la pagina de index.html
	window.location.href = "../Flores-Amarillas-main/HTML/unaFlor.html";
});
