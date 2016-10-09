
		var indexL = 1;
		var indexR = 1;
		var counterL = 1;
		var counterR = 1;
		var state = 1;

		showDivs(indexL, indexR);

		function interactL(){
		  indexL++;
			counterL = indexL;
		  if(indexL > 5){
		    indexL = 1;
				counterL  = 1;
		  }
		  if(state == 3){
		    indexR++;
				if(indexR == 8){
					indexR = 3;
				}
		  }
		  else if(state == 4){
		    indexR++;
				if(indexR == 13){
					indexR = 8;
				}
		  }
		  else if(state == 5){
		    indexR++;
				if(indexR == 18){
					indexR = 13;
				}
		  }
		  else if(state == 6){
		    indexR++;
				if(indexR == 23){
					indexR = 18;
				}
		  }
		  showDivs(indexL, indexR);
		}

		function interactR(){
			counterR++;
		  indexR++;
		  state++;
		  if(indexR > 22){
		    indexR = 1;
		  }
		  if(state == 3){
		    indexR += indexL - 1;
		  }
		  else if(state == 4){
				indexR = 7;
		    indexR += indexL;
		  }
		  else if(state == 5){
				indexR = 12;
		    indexR += indexL;
		  }
		  else if(state == 6){
				indexR = 17;
		    indexR += indexL ;
		  }
		  else if(state > 6){
		    state = 1;
				indexR = 1;
				counterR = 1;
		  }
		  showDivs(indexL, indexR);
		}

		function showDivs(n, m){
			var i;
			var x = document.getElementsByClassName("mySlidesL");
			var y = document.getElementsByClassName("mySlidesR");

			if (n > x.length) {indexL = 1}
			if (n < 1) {indexL = x.length}
			for (i = 0; i < x.length; i++) {
				 x[i].style.display = "none";
			}
			x[indexL-1].style.display = "block";

			if (m > y.length) {indexR = 1}
			if (m < 1) {indexR = y.length}
			for (j = 0; j < y.length; j++) {
				y[j].style.display = "none";
			}
			y[indexR-1].style.display = "block";

			document.getElementById("c1").innerHTML = counterL;
			document.getElementById("c2").innerHTML = counterR;
		}
