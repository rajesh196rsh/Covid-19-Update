let update=[];
function getUpdate(){
	let api=`https://api.covidindiatracker.com/state_data.json`;
	fetch(api)
		.then(function(response){
			let data = response.json();
			return data;
		})
		.then(function(data){
			
				document.getElementById("t01").innerHTML = data[0].state;
				document.getElementById("t02").innerHTML = data[0].confirmed;
				document.getElementById("t03").innerHTML = data[0].active;
				document.getElementById("t04").innerHTML = data[0].recovered;
				document.getElementById("t05").innerHTML = data[0].deaths;
				
				document.getElementById("t11").innerHTML = data[1].state;
				document.getElementById("t12").innerHTML = data[1].confirmed;
				document.getElementById("t13").innerHTML = data[1].active;
				document.getElementById("t14").innerHTML = data[1].recovered;
				document.getElementById("t15").innerHTML = data[1].deaths;
				
				document.getElementById("t21").innerHTML = data[2].state;
				document.getElementById("t22").innerHTML = data[2].confirmed;
				document.getElementById("t23").innerHTML = data[2].active;
				document.getElementById("t24").innerHTML = data[2].recovered;
				document.getElementById("t25").innerHTML = data[2].deaths;
				
				document.getElementById("t31").innerHTML = data[3].state;
				document.getElementById("t32").innerHTML = data[3].confirmed;
				document.getElementById("t33").innerHTML = data[3].active;
				document.getElementById("t34").innerHTML = data[3].recovered;
				document.getElementById("t35").innerHTML = data[3].deaths;
				
				document.getElementById("t41").innerHTML = data[4].state;
				document.getElementById("t42").innerHTML = data[4].confirmed;
				document.getElementById("t43").innerHTML = data[4].active;
				document.getElementById("t44").innerHTML = data[4].recovered;
				document.getElementById("t45").innerHTML = data[4].deaths;
				
				document.getElementById("t51").innerHTML = data[5].state;
				document.getElementById("t52").innerHTML = data[5].confirmed;
				document.getElementById("t53").innerHTML = data[5].active;
				document.getElementById("t54").innerHTML = data[5].recovered;
				document.getElementById("t55").innerHTML = data[5].deaths;
				
				document.getElementById("t61").innerHTML = data[6].state;
				document.getElementById("t62").innerHTML = data[6].confirmed;
				document.getElementById("t63").innerHTML = data[6].active;
				document.getElementById("t64").innerHTML = data[6].recovered;
				document.getElementById("t65").innerHTML = data[6].deaths;
				
				document.getElementById("t71").innerHTML = data[7].state;
				document.getElementById("t72").innerHTML = data[7].confirmed;
				document.getElementById("t73").innerHTML = data[7].active;
				document.getElementById("t74").innerHTML = data[7].recovered;
				document.getElementById("t75").innerHTML = data[7].deaths;
				
				document.getElementById("t81").innerHTML = data[8].state;
				document.getElementById("t82").innerHTML = data[8].confirmed;
				document.getElementById("t83").innerHTML = data[8].active;
				document.getElementById("t84").innerHTML = data[8].recovered;
				document.getElementById("t85").innerHTML = data[8].deaths;
				
				document.getElementById("t91").innerHTML = data[9].state;
				document.getElementById("t92").innerHTML = data[9].confirmed;
				document.getElementById("t93").innerHTML = data[9].active;
				document.getElementById("t94").innerHTML = data[9].recovered;
				document.getElementById("t95").innerHTML = data[9].deaths;
				
				document.getElementById("t101").innerHTML = data[10].state;
				document.getElementById("t102").innerHTML = data[10].confirmed;
				document.getElementById("t103").innerHTML = data[10].active;
				document.getElementById("t104").innerHTML = data[10].recovered;
				document.getElementById("t105").innerHTML = data[10].deaths;
				
				document.getElementById("t111").innerHTML = data[11].state;
				document.getElementById("t112").innerHTML = data[11].confirmed;
				document.getElementById("t113").innerHTML = data[11].active;
				document.getElementById("t114").innerHTML = data[11].recovered;
				document.getElementById("t115").innerHTML = data[11].deaths;
				
				document.getElementById("t121").innerHTML = data[12].state;
				document.getElementById("t122").innerHTML = data[12].confirmed;
				document.getElementById("t123").innerHTML = data[12].active;
				document.getElementById("t124").innerHTML = data[12].recovered;
				document.getElementById("t125").innerHTML = data[12].deaths;
				
				document.getElementById("t131").innerHTML = data[13].state;
				document.getElementById("t132").innerHTML = data[13].confirmed;
				document.getElementById("t133").innerHTML = data[13].active;
				document.getElementById("t134").innerHTML = data[13].recovered;
				document.getElementById("t135").innerHTML = data[13].deaths;
				
				document.getElementById("t141").innerHTML = data[14].state;
				document.getElementById("t142").innerHTML = data[14].confirmed;
				document.getElementById("t143").innerHTML = data[14].active;
				document.getElementById("t144").innerHTML = data[14].recovered;
				document.getElementById("t145").innerHTML = data[14].deaths;
				
				document.getElementById("t151").innerHTML = data[15].state;
				document.getElementById("t152").innerHTML = data[15].confirmed;
				document.getElementById("t153").innerHTML = data[15].active;
				document.getElementById("t154").innerHTML = data[15].recovered;
				document.getElementById("t155").innerHTML = data[15].deaths;
				
				document.getElementById("t161").innerHTML = data[16].state;
				document.getElementById("t162").innerHTML = data[16].confirmed;
				document.getElementById("t163").innerHTML = data[16].active;
				document.getElementById("t164").innerHTML = data[16].recovered;
				document.getElementById("t165").innerHTML = data[16].deaths;
				
				document.getElementById("t171").innerHTML = data[17].state;
				document.getElementById("t172").innerHTML = data[17].confirmed;
				document.getElementById("t173").innerHTML = data[17].active;
				document.getElementById("t174").innerHTML = data[17].recovered;
				document.getElementById("t175").innerHTML = data[17].deaths;
				
				document.getElementById("t181").innerHTML = data[18].state;
				document.getElementById("t182").innerHTML = data[18].confirmed;
				document.getElementById("t183").innerHTML = data[18].active;
				document.getElementById("t184").innerHTML = data[18].recovered;
				document.getElementById("t185").innerHTML = data[18].deaths;
				
				document.getElementById("t191").innerHTML = data[19].state;
				document.getElementById("t192").innerHTML = data[19].confirmed;
				document.getElementById("t193").innerHTML = data[19].active;
				document.getElementById("t194").innerHTML = data[19].recovered;
				document.getElementById("t195").innerHTML = data[19].deaths;
				
				document.getElementById("t201").innerHTML = data[20].state;
				document.getElementById("t202").innerHTML = data[20].confirmed;
				document.getElementById("t203").innerHTML = data[20].active;
				document.getElementById("t204").innerHTML = data[20].recovered;
				document.getElementById("t205").innerHTML = data[20].deaths;
				
				document.getElementById("t211").innerHTML = data[21].state;
				document.getElementById("t212").innerHTML = data[21].confirmed;
				document.getElementById("t213").innerHTML = data[21].active;
				document.getElementById("t214").innerHTML = data[21].recovered;
				document.getElementById("t215").innerHTML = data[21].deaths;
				
				document.getElementById("t221").innerHTML = data[22].state;
				document.getElementById("t222").innerHTML = data[22].confirmed;
				document.getElementById("t223").innerHTML = data[22].active;
				document.getElementById("t224").innerHTML = data[22].recovered;
				document.getElementById("t225").innerHTML = data[22].deaths;
				
				document.getElementById("t231").innerHTML = data[23].state;
				document.getElementById("t232").innerHTML = data[23].confirmed;
				document.getElementById("t233").innerHTML = data[23].active;
				document.getElementById("t234").innerHTML = data[23].recovered;
				document.getElementById("t235").innerHTML = data[23].deaths;
				
				document.getElementById("t241").innerHTML = data[24].state;
				document.getElementById("t242").innerHTML = data[24].confirmed;
				document.getElementById("t243").innerHTML = data[24].active;
				document.getElementById("t244").innerHTML = data[24].recovered;
				document.getElementById("t245").innerHTML = data[24].deaths;
				
				document.getElementById("t251").innerHTML = data[25].state;
				document.getElementById("t252").innerHTML = data[25].confirmed;
				document.getElementById("t253").innerHTML = data[25].active;
				document.getElementById("t254").innerHTML = data[25].recovered;
				document.getElementById("t255").innerHTML = data[25].deaths;
				
				document.getElementById("t261").innerHTML = data[26].state;
				document.getElementById("t262").innerHTML = data[26].confirmed;
				document.getElementById("t263").innerHTML = data[26].active;
				document.getElementById("t264").innerHTML = data[26].recovered;
				document.getElementById("t265").innerHTML = data[26].deaths;
				
				document.getElementById("t271").innerHTML = data[27].state;
				document.getElementById("t272").innerHTML = data[27].confirmed;
				document.getElementById("t273").innerHTML = data[27].active;
				document.getElementById("t274").innerHTML = data[27].recovered;
				document.getElementById("t275").innerHTML = data[27].deaths;
				
				document.getElementById("t281").innerHTML = data[28].state;
				document.getElementById("t282").innerHTML = data[28].confirmed;
				document.getElementById("t283").innerHTML = data[28].active;
				document.getElementById("t284").innerHTML = data[28].recovered;
				document.getElementById("t285").innerHTML = data[28].deaths;
				
				document.getElementById("t291").innerHTML = data[29].state;
				document.getElementById("t292").innerHTML = data[29].confirmed;
				document.getElementById("t293").innerHTML = data[29].active;
				document.getElementById("t294").innerHTML = data[29].recovered;
				document.getElementById("t295").innerHTML = data[29].deaths;
				
				document.getElementById("t301").innerHTML = data[30].state;
				document.getElementById("t302").innerHTML = data[30].confirmed;
				document.getElementById("t303").innerHTML = data[30].active;
				document.getElementById("t304").innerHTML = data[30].recovered;
				document.getElementById("t305").innerHTML = data[30].deaths;
				
				document.getElementById("t311").innerHTML = data[31].state;
				document.getElementById("t312").innerHTML = data[31].confirmed;
				document.getElementById("t313").innerHTML = data[31].active;
				document.getElementById("t314").innerHTML = data[31].recovered;
				document.getElementById("t315").innerHTML = data[31].deaths;
				
				document.getElementById("t321").innerHTML = data[32].state;
				document.getElementById("t322").innerHTML = data[32].confirmed;
				document.getElementById("t323").innerHTML = data[32].active;
				document.getElementById("t324").innerHTML = data[32].recovered;
				document.getElementById("t325").innerHTML = data[32].deaths;
				
				document.getElementById("t331").innerHTML = data[33].state;
				document.getElementById("t332").innerHTML = data[33].confirmed;
				document.getElementById("t333").innerHTML = data[33].active;
				document.getElementById("t334").innerHTML = data[33].recovered;
				document.getElementById("t335").innerHTML = data[33].deaths;
				
				document.getElementById("t341").innerHTML = data[34].state;
				document.getElementById("t342").innerHTML = data[34].confirmed;
				document.getElementById("t343").innerHTML = data[34].active;
				document.getElementById("t344").innerHTML = data[34].recovered;
				document.getElementById("t345").innerHTML = data[34].deaths;
				
				document.getElementById("t351").innerHTML = data[35].state;
				document.getElementById("t352").innerHTML = data[35].confirmed;
				document.getElementById("t353").innerHTML = data[35].active;
				document.getElementById("t354").innerHTML = data[35].recovered;
				document.getElementById("t355").innerHTML = data[35].deaths;
				
				document.getElementById("t361").innerHTML = data[36].state;
				document.getElementById("t362").innerHTML = data[36].confirmed;
				document.getElementById("t363").innerHTML = data[36].active;
				document.getElementById("t364").innerHTML = data[36].recovered;
				document.getElementById("t365").innerHTML = data[36].deaths;
				
				document.getElementById("t371").innerHTML = data[37].state;
				document.getElementById("t372").innerHTML = data[37].confirmed;
				document.getElementById("t373").innerHTML = data[37].active;
				document.getElementById("t374").innerHTML = data[37].recovered;
				document.getElementById("t375").innerHTML = data[37].deaths;
				
				
				

		})
}

getUpdate();

