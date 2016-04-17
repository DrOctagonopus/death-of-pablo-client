var divs = document.getElementsByClassName('alert');
for(var i=0; i<divs.length; i++) {
  divs[i].addEventListener("click", highlightThis);
  /*
  divs[i].addEventListener("click", highlightThis, true);
  divs[i].addEventListener("click", highlightThis, false);*/
}

function highlightThis(event) {
    //event.stopPropagation();
  
    var backgroundColor = this.style.backgroundColor;
    this.style.backgroundColor='yellow';
    alert(this.className);
    this.style.backgroundColor=backgroundColor;
}


$(document).ready(function(){
    console.log("get here");
    //modal();
});

var modal=function(){
    $(".modal1 .close").on('click', function(){
        console.log("modal closed");
         $(".modal1").css("display", "none"); 
    });
    console.log( $(".close").text());
    $("#listIcon").on('click', function(){
        console.log("modal clicked");
        $( ".modal1").slideDown( "slow", function() {
            // Animation complete.
            
        });
    });
    $("#icon2").on('click', function(){
        $( ".modal1").slideDown( "slow", function() {
            // Animation complete.
            
        });
    });
}
