// on document ready
$(function(){
    // load components
    $( "div[data-component]" ).each(function() {
        var compFileName = $( this ).attr("data-component");
        $( this ).load("components/" + compFileName);
    });




});