let questionCount = 0;
let questionsBank = [
  {
    question: "(10 x 7 / 5) + 3)",
    answer: {
      type: "input number",
      id: "math",
      answers: 17
    }
  },
  {
    question: "Select the applicable answer to you:",
    answer: {
      type: "radio",
      id: "time",
      answers: ["Early Bird", "Late Nighter", "Love Sleeping In"]
    }
  },
  {
    question: "Enter in your first name:",
    answer: {
      type: "input text",
      id: "first-name",
      answers: ""
    }
  },
  {
    question: "Select your birthdate:",
    answer: {
      type: "date",
      id: "dob",
      answers: 0
    }
  },
  {
    question: "What color do you like the most out of the choice's below?",
    answer: {
      type: "dropdown",
      id: "color",
      answers: ["Blue", "Orange", "Purple", "Yellow", "Red"] // Python, Java, C#, JS, Ruby
    }
  }
];


$(document).ready(function() {
  $("#start-btn").click(function() {
    $("h4").hide();
    $("#start-btn").hide();
    $("form#quiz").show();

    /*
    for(let i = 0; i < questionsBank.length; i++) {
      console.log(questionsBank[i])
      $("#placeholder-label").text(questionsBank[i].question);
      $("#placeholder-label").attr("for", questionsBank[i].answer.id);
      if(questionsBank[i].answer.type.includes("input")) {
        $("#placeHolder").attr("type", questionsBank[i].answer.type.split(" ")[1]);
        $("#placeHolder").attr("name", questionsBank[i].answer.type.split(" ")[1]);
      }
    }

    */
    while(questionCount <= questionsBank.length) {
      let currentQuestionSet = questionsBank[questionCount];
      console.log(currentQuestionSet)
      console.log(`${questionCount} === ${questionsBank.length}`)
      // questionCount++; Only use when they click NEXT button.
    }
  });
});