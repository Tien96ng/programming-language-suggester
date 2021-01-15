let questionCount = 0;
let userAnswers = [];
let questionsBank = [
  { // Condition Done
    question: "(10 x 7 / 5) + 3)",
    answer: {
      type: "input number",
      id: "math",
      answers: 17
    }
  },
  { // Condition Done
    question: "Enter in your first name:",
    answer: {
      type: "input text",
      id: "first-name",
      answers: ""
    }
  },
  { // Condition Done
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
  },
  { // Condition Done
    question: "Select the applicable answer to you:",
    answer: {
      type: "radio",
      id: "time",
      answers: ["Early Bird", "Late Nighter", "Love Sleeping In"]
    }
  }
];


$(document).ready(function() {

  $("#start-btn").click(function() {
    $("h4").hide();
    $("#start-btn").hide();
    $("form#quiz").show();

    let currentQuestionSet = questionsBank[questionCount];
    console.log(currentQuestionSet)

    function renderNextQuestion(question, id, type, answers) {
      if(type === "radio") {
        $("placeholder-label").remove();
        $("placeHolder").remove();
        let radioNum = 1;

        for(let i = 0; i < answer.length; i++) {
          let createLabel = `<label for="${id + radioNum}"> ${question} </label>`;
          let createInput = `<input type="radio" id="${id + radioNum}" name="radio">`;
          $("#quiz").append(createLabel);
          $("#quiz").append(createLabel);
        }

      } else {
        $("#placeholder-label").text(`${questionCount + 1}.${question}`);
        $("#placeholder-label").attr("for", id);

        if(type.includes("input")) {
          $("#placeHolder").attr("input", type.split(" ")[1]);
          $("#placeHolder").attr("input", type.split(" ")[1]);
        } else {
          $("placeHolder").remove();
          $("#quiz").append(`<select name="${id} id="${id}> </select>"`)
          
          for(let i = 0; i < answer.length; i++) {
            let createOption = `<option value="${answer[i]}">${answer[i]}</option>`;
            $("#color").append(createOption);
          }
        }
      }

      

    }
    // console.log(`${questionCount} === ${questionsBank.length}`)
    //$("#placeholder-label").text(currentQuestionSet.question);
    //$("#placeholder-label").attr("for", currentQuestionSet.answer.id);
    // questionCount++; Only use when they click NEXT button.
  });
});