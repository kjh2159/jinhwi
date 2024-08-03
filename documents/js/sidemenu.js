// with keyword instead of assert keyword
import sidebar from '../data/sidebar.json' with { type: 'json' };

function generateSideMenu(){
	var sidemenu_location = document.getElementById('sidemenu')
	var sidemenu = sidebar['menu']
	for (var category in sidemenu){
		//console.log(category, sidemenu[category])
		sidemenu_location.innerHTML += `
			<button type="button" class="button contents" onclick="location.href='../${sidemenu[category]}/index.html'">${category}</button>
		`;
	}	
}


console.log(sidebar['menu'])
// generate sidemenu
generateSideMenu()