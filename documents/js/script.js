function switchLang(){
	let langBtn = document.getElementById("l-switch");
	let btnStyle = document.getElementById("lang-canvas");
	let btnBackground = document.getElementsByClassName("lang-switch");

	let korText = document.getElementsByClassName("kor-text");
	let engText = document.getElementsByClassName("eng-text");

	var img = new Image();
   	img.src = '../img/korea.png';
   	if (img.height != 0){
		url_kor = "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), \
					url('../img/korea.png')";
		url_usa = "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), \
					url('../img/usa.png')";
	} else {
		url_kor = "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), \
					url('img/korea.png')";
		url_usa = "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), \
					url('img/usa.png')";
	}


	if (langBtn.textContent === "한글"){
		btnStyle.style.textAlign = "right";
		langBtn.textContent = "ENG";
		btnBackground[0].style.backgroundImage = url_usa;
		// right: Eng
		for(var i=0; i<korText.length; i++){
			korText[i].style.display = "none";
		}
		for(var i=0; i<engText.length; i++){
			engText[i].style.display = "inline-block";
		}
	} else {
		btnStyle.style.textAlign = "left";
		langBtn.textContent = "한글";
		btnBackground[0].style.backgroundImage = url_kor;
		// left: Kor
		for(var i=0; i<engText.length; i++){
			engText[i].style.display = "none";
		}
		for(var i=0; i<korText.length; i++){
			korText[i].style.display = "inline-block";
		}
	}
}
