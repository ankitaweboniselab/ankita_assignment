
$(document).ready(function() {

	
    
    $("a").click(function(event) 
    { 
    	$("li").removeClass("active");
    	$("a").removeClass("activeText");
    	$(this).parent().addClass("active");
    	$(this).addClass("activeText")
    	var tabId = $(this).attr("href");
    	$(".contentClass").css("display","none");
    	$(tabId).show();

    });

    $("a").click(function(event) 
    { 
        $("li").removeClass("active");
        $("a").removeClass("activeText");
        $(this).parent().addClass("active");
        $(this).addClass("activeText")
        var tabId = $(this).attr("href");
        $(".tabContentClass").css("display","none");
        $(tabId).show();
    });

});