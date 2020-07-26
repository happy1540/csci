// Function of addition button
add = function(){
result = parseInt(jQuery('#op1').val()) + parseInt(jQuery('#op2').val());
text = jQuery('#op1').val() + " + "+ jQuery('#op2').val() + " = ";
jQuery('#result').text(result);
}
styled_result="<span id='addStyle'>"+result +"</span>"

old_div_content=jQuery('#history').html();
new_div_conent=old_div_content+ styled_result+ '<br>';
JQuery('#history').html(new_div_content);
}




// Function of Subtraction button
Subtraction= function(){
result = parseInt(jQuery('#op1').val()) - parseInt(jQuery('#op2').val());
text = jQuery('#op1').val() + " - "+ jQuery('#op2').val() + " = ";
jQuery('#result').html(result);

result="<span id=divStyle'>" +result + "</span>"
old_div_content=jQuery('#history').html();
new_div_conent=old_div_content+ styled_result+ '<br>';
JQuery('#history').html(new_div_content);

}
setup = function(){
   // alert("hi");
   jQuery('#subbutton').click(Subtraction);
}
 
jQuery(document).ready(setup);


//Function of multiplication button
multiplication = function(){
result = parseInt(jQuery('#op1').html()) * parseInt(jQuery('#op2').html());
text = jQuery('#op1').html() + " * "+ jQuery('#op2').html() + " = ";
jQuery('#result').html(text + result);
}

setup = function(){
   // alert("hi");
   jQuery('#mulbutton').click(multiplication);
  
}
 
jQuery(document).ready(setup);


// Function of a division button
division = function(){
result = parseInt(jQuery('#op1').html()) / parseInt(jQuery('#op2').html());
text = jQuery('#op1').html() + " / "+ jQuery('#op2').html() + " = ";
jQuery('#result').html(text + result);
}

setup = function(){
   // alert("hi");
   jQuery('#divbutton').click(division);
  
}
 
jQuery(document).ready(setup);