//CHANGE ABOUT ME IMAGE
		var myImage = document.getElementById("aboutImage");

		var imageArray = ["https://rawgit.com/dmj1209/dmj1209.github.io/master/_assets/_media/reno.png", 
				  "https://rawgit.com/dmj1209/dmj1209.github.io/master/_assets/_media/bunny.png", 
				"https://rawgit.com/dmj1209/dmj1209.github.io/master/_assets/_media/kayak.png",
				  "https://rawgit.com/dmj1209/dmj1209.github.io/master/_assets/_media/mydogs.png", 
				  "https://rawgit.com/dmj1209/dmj1209.github.io/master/_assets/_media/hamburger.png", 
				"https://rawgit.com/dmj1209/dmj1209.github.io/master/_assets/_media/ffdr.png", 
				  "https://rawgit.com/dmj1209/dmj1209.github.io/master/_assets/_media/blue.png", 
				  "https://rawgit.com/dmj1209/dmj1209.github.io/master/_assets/_media/ozzie.png", 
				"https://rawgit.com/dmj1209/dmj1209.github.io/master/_assets/_media/sunflowers.png",
				  "https://rawgit.com/dmj1209/dmj1209.github.io/master/_assets/_media/wicked.png"];
		var imageIndex = 0;

		function changeImage() {
			myImage.setAttribute("src",imageArray[imageIndex]);
			imageIndex++;
			if (imageIndex >= imageArray.length) {
				imageIndex = 0;
			}
		}

		// setInterval is also in milliseconds
		var intervalHandle =setInterval(changeImage,5000);

		myImage.onclick = function(){
			clearInterval(intervalHandle);
		}


//TOGGLE PROJECTS
	//NEWSPAPER
		function showSatNew(id){
			var satNew = document.getElementById("sat-new");
			if (satNew.style.display == "none"){
				satNew.style.display="block";
			}
			else{
				satNew.style.display="none";
			}
		}
	//DANTE'S INFERNO
		function showDante(id){
			var dante = document.getElementById("dante");
			if (dante.style.display == "none"){
				dante.style.display="block";
			}
			else{
				dante.style.display="none";
			}
		}
	//QUIZ
		function showQuiz(id){
			var quiz = document.getElementById("quiz");
			if (quiz.style.display == "none"){
				quiz.style.display="block";
			}
			else{
				quiz.style.display="none";
			}
		}
	//HOUR OF CODE
		function showHoC(id){
			var hoC = document.getElementById("hoc");
			if (hoC.style.display == "none"){
				hoC.style.display="block";
			}
			else{
				hoC.style.display="none";
			}
		}
	//CUE SPS
		function showCueSps(id){
			var cueSps = document.getElementById("cuesps");
			if (cueSps.style.display == "none"){
				cueSps.style.display="block";
			}
			else{
				cueSps.style.display="none";
			}
		}
	//SWCTA SITE
		function showSwcta(id){
			var swcta = document.getElementById("swcta");
			if (swcta.style.display == "none"){
				swcta.style.display="block";
			}
			else{
				swcta.style.display="none";
			}
		}
	//SELF PORTRAIT
		function showPortrait(id){
			var portrait = document.getElementById("portrait");
			if (portrait.style.display == "none"){
				portrait.style.display="block";
			}
			else{
				portrait.style.display="none";
			}
		}
	//INFOGRAPHIC
		function showInfographic(id){
			var infographic = document.getElementById("infographic");
			if (infographic.style.display == "none"){
				infographic.style.display="block";
			}
			else{
				infographic.style.display="none";
			}
		}
	//SKETCHBOOK PRO
		function showSPP(id){
			var spp = document.getElementById("spp");
			if (spp.style.display == "none"){
				spp.style.display="block";
			}
			else{
				spp.style.display="none";
			}
		}
	//NACTE
		function showNacte(id){
			var nacte = document.getElementById("nacte");
			if (nacte.style.display == "none"){
				nacte.style.display="block";
			}
			else{
				nacte.style.display="none";
			}
		}
	//HOLIDAY CARD
		function showHolidayCard(id){
			var card = document.getElementById("card");
			if (card.style.display == "none"){
				card.style.display="block";
			}
			else{
				card.style.display="none";
			}
		}
	//FINE ART
		function showFineArt(id){
			var fineArt = document.getElementById("fineart");
			if (fineArt.style.display == "none"){
				fineArt.style.display="block";
			}
			else{
				fineArt.style.display="none";
			}
		}
	//FABLE
		function showFable(id){
			var fable = document.getElementById("fable");
			if (fable.style.display == "none"){
				fable.style.display="block";
			}
			else{
				fable.style.display="none";
			}
		}
	//BRIAN HEAD
		function showBrianhead(id){
			var brianhead = document.getElementById("brianhead");
			if (brianhead.style.display == "none"){
				brianhead.style.display="block";
			}
			else{
				brianhead.style.display="none";
			}
		}
	//SHOOTER GAME
		function showShooterGame(id){
			var shooterGame = document.getElementById("shootergame");
			if (shooterGame.style.display == "none"){
				shooterGame.style.display="block";
			}
			else{
				shooterGame.style.display="none";
			}
		}
	//THEME  PROJECT
		function showTheme(id){
			var theme = document.getElementById("theme");
			if (theme.style.display == "none"){
				theme.style.display="block";
			}
			else{
				theme.style.display="none";
			}
		}
	//MARKETING EDUCATION
		function showMarketingEducation(id){
			var marketingEducation = document.getElementById("marketingeducation");
			if (marketingEducation.style.display == "none"){
				marketingEducation.style.display="block";
			}
			else{
				marketingEducation.style.display="none";
			}
		}
	//LVGEA
		function showLvgea(id){
			var lvgea = document.getElementById("lvgea");
			if (lvgea.style.display == "none"){
				lvgea.style.display="block";
			}
			else{
				lvgea.style.display="none";
			}
		}
	//WEB OLYMPICS
		function showOlympics(id){
			var olympics = document.getElementById("olympics");
			if (olympics.style.display == "none"){
				olympics.style.display="block";
			}
			else{
				olympics.style.display="none";
			}
		}
	//DESERT DOGGIES
		function showDesertDoggies(id){
			var desertdoggies = document.getElementById("desertdoggies");
			if (desertdoggies.style.display == "none"){
				desertdoggies.style.display="block";
			}
			else{
				desertdoggies.style.display="none";
			}
		}
	//DESERT DOGGIES
		function showSkills(id){
			var skills = document.getElementById("skills");
			if (skills.style.display == "none"){
				skills.style.display="block";
			}
			else{
				skills.style.display="none";
			}
		}
	//PALM OIL PATROL LOGO
		function showEnviro(id){
			var enviro = document.getElementById("enviro");
			if (enviro.style.display == "none"){
				enviro.style.display="block";
			}
			else{
				enviro.style.display="none";
			}
		}
	//TAGON
		function showTagon(id){
			var tagon = document.getElementById("tagon");
			if (tagon.style.display == "none"){
				tagon.style.display="block";
			}
			else{
				tagon.style.display="none";
			}
		}
	//TAGON
		function showInfocus(id){
			var infocus = document.getElementById("infocus");
			if (infocus.style.display == "none"){
				infocus.style.display="block";
			}
			else{
				infocus.style.display="none";
			}
		}
