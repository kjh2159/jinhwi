let sections = ['lecture1', 'lecture2', 'lecture3', 'lecture4', 
'lecture5', 'lecture6', 'lecture7', 'lecture8', 'lecture9', 
'lecture10', 'lecture11', 'lecture12', 'lecture13', 'lecture14',
'lecture15', 'lecture16'];

function viewCppLectureProblem(section_id){
	let clicked_section = document.getElementById(section_id);

	sections.forEach(displayNone)

	clicked_section.style.display = "block"; // show a clicked section
	//alert(section_id);
	//alert(clicked_section.style.display)
}

function displayNone(item){
	var section = document.getElementById(item);
	
	if (section === null) {return;}
	console.log(item)
	section.style.display = "none";
}

function changeAnswerDisplay(item_id) {
	let answer_sheet  = document.getElementById(item_id);
	
	if (answer_sheet !== null){
		console.log(answer_sheet.style.display);
		var disp = answer_sheet.style.display;

		if(disp === "none" || disp === "")
			answer_sheet.style.display = "block";
		else 
			answer_sheet.style.display = "none";
	}
	
	let langBtn = document.getElementById("l-switch");
	if (langBtn.textContent === "한글") item_id += "_k";
	else item_id += "_e";

	changeAnsExLang(item_id);
}

function changeAnsExLang(ans_class){
	var classes = document.getElementsByClassName(ans_class);
	for(let i=0; i<classes.length; i++){
		if (classes[i].style.display === "none"){
			classes[i].style.display = "inline-block";
		} else {
			classes[i].style.display = "none";
		}
	}
}