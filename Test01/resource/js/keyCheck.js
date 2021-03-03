
var submit = document.getElementById('check-key');
var textbox = document.getElementById('access-key');
var key = "562862";

submit.addEventListener('click', function(){
    if (textbox.value == key){
    document.getElementById("aform").style.visibility = "hidden";
    document.getElementById("uform").style.visibility = "visible";
    }
    else{
        // Alert for wrong key input
    }
}   
);