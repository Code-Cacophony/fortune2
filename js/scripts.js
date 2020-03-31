$(document).ready(function(event){
  $("#form").submit(function(event){
    event.preventDefault();

    var luckyArray= [];
    var unluckyArray = [];

    $("input:checkbox[name=lucky-sign]:checked").each(function() {
      var luckySign = $(this).val();
      luckyArray.push(luckySign);
    });

    $("input:checkbox[name=lucky]:checked").each(function() {
      var lucky = $(this).val();
      luckyArray.push(lucky);
    });

    $("input:checkbox[name=lucky-color]:checked").each(function() {
      var luckyColor = $(this).val();
      luckyArray.push(luckyColor);
    });

    $("input:checkbox[name=unlucky-sign]:checked").each(function() {
      var unluckySign = $(this).val();
      unluckyArray.push(unluckySign);
    });

    $("input:checkbox[name=unlucky]:checked").each(function() {
      var unlucky = $(this).val();
      unluckyArray.push(unlucky);
    });

    $("input:checkbox[name=unlucky-color]:checked").each(function() {
      var unluckyColor = $(this).val();
      unluckyArray.push(unluckyColor);
    });

    console.log(luckyArray);
    console.log(unluckyArray);
  });
});