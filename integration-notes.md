chanage notes:

change HEADER.AC_Header to DIV.AC_Header 

add DIV#AC_Page.ROW to contain all of current ASLConnect Markup

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
		 	<div id="AC_Page" class="row"><!-- added wrapper -->
			 	<nav></nav>
			 	<main></main>
			 	<section></section>
		 	</div>						<!--end of wrapper -->
		 	<!-- /AC content-->
		 	<!-- /your content-->
		 	<footer></footer>
		</div>

