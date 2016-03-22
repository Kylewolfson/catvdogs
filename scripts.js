$(document).ready(function(){
  $("img.dog").click(function(){
    $("img.dog").before("<h3>Bow Wow you filthy animal</h3>");
    $("img.cat").before("<h3>Meow Mother!%?*$#!!</h3>");
    $("h3").click(function(){
        $("h3").remove();
  });
  });

  $("img.cat").click(function(){
    $("img.cat").before("<h3>I'll make you my bitch, butt breath</h3>");
    $("img.dog").before("<h3>I hope you choke on your fur-ba-SQUIRREL</h3>");
    $("#squirrel").toggleClass("squirrel-hide");
    $("h3").click(function(){
        $("h3").remove();
      });
});
  $("#squirrel").click(function(){
    $("#squirrel").toggleClass("squirrel-hide");
    });
});
