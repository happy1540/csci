 setup = function(){
	 t= 0;
	 jQuery("#outteroverout").mouseover(function(){
		 // alert('#outerTextoverout-> over');
		 // console. log('#outerTextoverout-> over');
		 jQuery("#outterTextoverout").text("mouse over");
		 t= t +1;
		 jQuery("outterCounterOver"). text(t+ " overs");
	 });
	 
	  z= 0;
	 jQuery("#outteroverout").mouseover(function(){
		 // console. log('#outerTextoverout-> out');
		 jQuery("#outterTextoverout").text("mouse out");
		 z= z +1;
		 jQuery("outerCounterOver"). text(z+ " outs");
	 });
	 
	   a= 0;
	 jQuery("#outteroverout").mouseover(function(){
		 // console. log('#outerTextoverout-> over');
		 jQuery("#outterTextoverout").text("mouse over");
		 za a +1;
		 jQuery("outerCounterOver"). text(a+ " overs");
	 });
	 
	 i= 0;
	 jQuery("#outteroverout").mouseover(function(){
		 // console. log('#outerTextoverout-> out');
		 jQuery("#outterTextoverout").text("mouse out");
		 i= i +1;
		 jQuery("outerCounterOver"). text(i+ " outs");
	 });
	 
	 d= 0;
	 jQuery("#outterenterleave").mouseenter(function(){
		 // console. log('div.enterleave-> enter');
		 jQuery("#outterTextenterleave").text("mouse enter");
		 d= d +1;
		 jQuery("outerCounterEnter"). text(d+ " enters");
	 });
	 
	 
	 	 n= 0;
	 jQuery("#outterenterleave").mouseleave(function(){
		 // console. log('outerTextenterleave-> exit');
		 jQuery("#outterTextenterleave").text("mouse leave");
		 n= n +1;
		 jQuery("outerCounterLeave"). text(n+ " leaves");
	 });
	 
	 c= 0;
	 jQuery("#innerenterleave").mouseenter(function(){
		 // console. log('div.enterleave-> enter');
		 jQuery("#innerTextenterleave").text("mouse enter");
		 c= c +1;
		 jQuery("innerCounterEnter"). text(c+ " enters");
	 });
	 
	 
	 y= 0;
	 jQuery("#innerenterleave").mouseleave(function(){
		 // console. log('#innerTextenterleave-> enter');
		 jQuery("#innerTextenterleave").text("mouse leave");
		 y= y +1;
		 jQuery("innerCounterleave"). text(y+ " leaves");
	 });
 }
 jQuery(document). ready(setup)
	 