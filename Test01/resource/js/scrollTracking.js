
$('#parentContainer').scroll(function() { 
    $('#fixedDiv').css('top', $(this).scrollTop());
});