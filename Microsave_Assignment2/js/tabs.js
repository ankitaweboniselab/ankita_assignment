
$(document).ready(function() {

	
    
    $(".menu li a").click(function(event) 
    { 
    	$(".menu li").removeClass("active");
    	$(".menu li a").removeClass("activeText");
    	$(this).parent().addClass("active");
    	$(this).addClass("activeText")
    	var tabId = $(this.hash)/*attr("href");*/
    	$(".contentClass").css("display","none");
    	$(tabId).show();
        event.preventDefault();

    });

     $(".tabMenu li a").click(function(event) 
    { 
        $(".tabMenu li").removeClass("activeTab");
        $(".tabMenu li a").removeClass("activeTabText");
        $(this).parent().addClass("activeTab");
        $(this).addClass("activeTabText")
        var tabId = $(this).attr("href");
        $(".tabContentClass").css("display","none");
        $(tabId).show();
        event.preventDefault();
     });
});