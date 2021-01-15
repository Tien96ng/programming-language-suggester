let questionsBank = {
  questionOne: {
    question: "What color do you like the most out of the choice's below?",
    answer: {
      type: "dropdown",
      answers: ["Blue", "Orange", "Purple", "Yellow", "Red"] // Python, Java, C#, JS, Ruby
    }
  }
}











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

    if(sleep) {
      console.log("You're a Python Programmer.")
    } else {
      if(walk) {
        console.log("You're a JavaScript Programmer")
      } else {
        console.log("You're a Java Programmer")
      }
    }
  })
});