

$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    event.preventDefault();

    const color = $("#fav-color").val();
    const number = $("#math-problem").val();
    const pbj = $("#pbj option:selected").val();
    const programmer = $("#type-programmer option:selected").val();
    const walk = $("#walk").is(":checked");
    const run = $("#run:checked").is(":checked");
    const sleep = $("#sleep:checked").is(":checked");


    console.log({
      color, number, pbj, programmer, walk, run, sleep
    });
  })
});