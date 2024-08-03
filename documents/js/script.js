var colorModeLight = true;
const scrollUpBtn = document.getElementById("scorll-up");
console.log(scrollUpBtn);
// scroll up smoothly
scrollUpBtn.addEventListener("click", () => {
	window.scrollTo({
		top: 0,
		behavior: "smooth"
	});
});

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

function switchColorMode(){
	if (colorModeLight) switchLight2Dark();
	else switchDark2Light();
}

function switchLight2Dark(){
	// (home-heading) background color
	let home_head = document.getElementsByClassName("home-heading")
	home_head[0].style.backgroundColor = "#000000"
	home_head[0].style.color = "#000000"

	// (main) background color
	let mainContent = document.getElementsByClassName("main-content")
	mainContent[0].style.backgroundColor = "#19162B"
	// text color
	mainContent[0].style.color = "#FFFFFF"

	// (code title)
	let code_titles = document.querySelectorAll('[id=code-title]')
	code_titles.forEach(element => {
		element.style.color = "#000000"
	});

	// (code word)
	let code_words = document.querySelectorAll('[id=code-word]')
	code_words.forEach(element => {
		element.style.backgroundColor = "#cccccc" // dark gray
		element.style.color = "#000000"
	});

	// answer button text
	let answers = document.getElementsByClassName("answer")
	for(var i=0; i<answers.length; ++i){
		answers[i].style.color = "#FFFFFF";
	}

	// color mode icon
	let mode_light = document.getElementById("mode-light")
	let mode_dark = document.getElementById("mode-dark")

	mode_light.style.display = "none"
	mode_dark.style.display = "inline-block"

	document.body.style.backgroundColor = "#19162B"
	colorModeLight = false
}


function switchDark2Light(){
	// (home-heading) background color
	let home_head = document.getElementsByClassName("home-heading")
	home_head[0].style.backgroundColor = "#000000"
	home_head[0].style.color = "#FFFFFF"

	// (main) background color
	let mainContent = document.getElementsByClassName("main-content")
	mainContent[0].style.backgroundColor = "#FFFFFF"
	// text color
	mainContent[0].style.color = "#000000"

	// (code word)
	let code_words = document.querySelectorAll('[id=code-word]')
	code_words.forEach(element => {
		element.style.backgroundColor = "#E3E6E8" // dark gray
		element.style.color = "#000000"
	});

	// answer button text
	let answers = document.getElementsByClassName("answer")
	for(var i=0; i<answers.length; ++i){
		answers[i].style.color = "#000000";
	}

	// color mode icon
	let mode_light = document.getElementById("mode-light")
	let mode_dark = document.getElementById("mode-dark")

	mode_light.style.display = "inline-block"
	mode_dark.style.display = "none"

	// Post-Processing
	document.body.style.backgroundColor = "#FFFFFF"
	colorModeLight = true
}


// This function is used for only light->dark mode in doc list file.
function switchColorMode4DocList(){
	// siwtch color mode once.
	switchColorMode();

	// fix wrong coloration in the process of light -> dark
	let docTitleElements = document.getElementsByClassName('doc-title');
	console.log(docTitleElements);

	Array.from(docTitleElements).forEach(docTitle => {
		docTitle.style.color = "#000000";
	});
}
