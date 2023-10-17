var toggleStatus = 1;
		function toggleMenu() {
			if (toggleStatus == 1) {
				document.getElementsByClass("leftNav").style.display  = "none";
               toggleStatus = 0;
			} else if (toggleStatus == 0) {
				document.getElementsByClass("leftNav").style.display = "block"; 
				toggleStatus = 1;

			}
		}