chanage notes:

replace css/main.CSS file
replace js/gallery.js + js/main.js
replace all instances of .embed-container to .AC_video-container

add DIV.AC_Page.ROW to contain all of current ASLConnect Markup

now: 
		<div class="fluid-container">
		<header></header>
		<nav></nav>
		<!--your content-->
		<!--AC content-->
		<main></main>
		<section></section>
		<!-- /AC content-->
		<!-- /your content-->
		<footer></footer>
		</div>

changed: 

		<div class="fluid-container">
			<header></header>
			<nav></nav>
			<!--your content-->
			<!--AC content-->
		 	<div class="row AC_Page"><!-- added wrapper -->
			 	<nav></nav>
			 	<main></main>
			 	<section></section>
		 	</div>						<!--end of wrapper -->
		 	<!-- /AC content-->
		 	<!-- /your content-->
		 	<footer></footer>
		</div>

