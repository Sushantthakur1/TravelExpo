
$(document).ready(function(){
    $('#bt').click(function(){
        var txt=document.getElementById("b").value;
        $('#gc').attr("src", function(){
            return  "https://maps.google.com/maps?q=hotels%20near%20"+txt+"&t=&z=13&ie=UTF8&iwloc=&output=embed";
        });
    });
});