$(document).ready(function(){

  $("#name,#password").keydown(function(){
    var name = $("#name").val();
    var pass = $("#password").val();

    for (var i = 0; i < 1; i++){
      if (name.length != "" && pass.length >= 6){
        $("#login").removeAttr("disabled")
        $("#login").removeAttr("class");
        $("#login").addClass("active");
      }else{
        $("#login").attr("disabled","disabled")
        $("#login").removeAttr("class");
        $("#login").addClass("inactive");
      };
    };
  });

});//ready
