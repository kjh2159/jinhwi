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
		for(var i=0; i<engText.length; i++){
			// handling a bug for Documents List
			if ( (engText[i].classList.contains("answer-sheet") || engText[i].classList.contains("doc-content")) 
				&& engText[i].style.display === "none" ){
				// handling a bug for answer-sheet class 
				if (korText[i].style.display === "none"){ continue; }
				else{ engText[i].style.display = "inline-block"; }
			}
			engText[i].style.display = "inline-block";
		}
		for(var i=0; i<korText.length; i++){
			
			korText[i].style.display = "none";
		}
	} else {
		btnStyle.style.textAlign = "left";
		langBtn.textContent = "한글";
		btnBackground[0].style.backgroundImage = url_kor;
		// left: Kor
		for(var i=0; i<korText.length; i++){
			// handling a bug for Documents List
			if ((korText[i].classList.contains("answer-sheet") || korText[i].classList.contains("doc-content")) 
				&& korText[i].style.display === "none"){
				// handling a bug for answer-sheet class 
				if (engText[i].style.display === "none"){ continue; }
				else{ korText[i].style.display = "inline-block"; }
			}
			korText[i].style.display = "inline-block";
		}
		for(var i=0; i<engText.length; i++){
			engText[i].style.display = "none";
		}
	}
}
