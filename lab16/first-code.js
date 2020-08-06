 setup = function(){
	 t= 0;
	 jQuery("#outeroverout").mouseover(function(){
		 // alert('#outerTextoverout-> over');
		 // console. log('#outerTextoverout-> over');
		 jQuery("#outerTextoverout").text("mouse over");
		 t= t +1;
		 jQuery("#outerCounterOver").text(t+ " overs");
	 });
	 
	  z= 0;
	 jQuery("#outeroverout").mouseout(function(){
		 // console. log('#outerTextoverout-> out');
		 jQuery("#outerTextoverout").text("mouse out");
		 z= z +1;
		 jQuery("#outerCounterOver").text(z+ " outs");
	 });
	 
	   a= 0;
	 jQuery("#inneroverout").mouseover(function(){
		 // console. log('#outerTextoverout-> over');
		 jQuery("#innerTextoverout").text("mouse over");
		 a= a +1;
		 jQuery("#innerCounterOver").text(a+ " overs");
	 });
	 
	 i= 0;
	 jQuery("#inneroverout").mouseout(function(){
		 // console. log('#outerTextoverout-> out');
		 jQuery("#innerTextoverout").text("mouse out");
		 i= i +1;
		 jQuery("#innerCounterOut").text(i+ " outs");
	 });
	 
	 d= 0;
	 jQuery("#outerenterleave").mouseenter(function(){
		 // console. log('div.enterleave-> enter');
		 jQuery("#outerTextenterleave").text("mouse enter");
		 d= d +1;
		 jQuery("#outerCounterEnter").text(d+ " enters");
	 });
	 
	 
	 	 n= 0;
	 jQuery("#outerenterleave").mouseleave(function(){
		 // console. log('#outerTextenterleave-> exit');
		 jQuery("#outerTextenterleave").text("mouse leave");
		 n= n +1;
		 jQuery("#outerCounterLeave").text(n+ " leaves");
	 });
	 
	 c= 0;
	 jQuery("#innerenterleave").mouseenter(function(){
		 // console. log('div.enterleave-> enter');
		 jQuery("#innerTextenterleave").text("mouse enter");
		 c= c +1;
		 jQuery("#innerCounterEnter").text(c+ " enters");
	 });
	 
	 
	 y= 0;
	 jQuery("#innerenterleave").mouseleave(function(){
		 // console. log('#innerTextenterleave-> enter');
		 jQuery("#innerTextenterleave").text("mouse leave");
		 y= y +1;
		 jQuery("#innerCounterleave").text(y+ " leaves");
	 });
 }
 jQuery(document). ready(setup)
	 