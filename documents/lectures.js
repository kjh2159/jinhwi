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
