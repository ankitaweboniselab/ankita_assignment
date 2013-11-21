
$(document).ready(function() {

	
    
    $("a").click(function(event) 
    { 
    	$("li").removeClass("active");
    	$("a").removeClass("activeText");
    	$(this).parent().addClass("active");
    	var tabId = $(this).attr("href");
    	$(".contentClass").css("display","none");
    	$(tabId).show();
    });

});