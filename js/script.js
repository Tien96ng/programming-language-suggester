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
      type: "input date",
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
    $("h4").fadeOut("slow");
    $("#start-btn").fadeOut("slow");
    $("form#quiz").slideDown("slow");

    let currentQuestionSet = questionsBank[questionCount];
    $("#questionsNum").text(`${questionCount + 1} / ${questionsBank.length} questions`);

    function renderNextQuestion(question, id, type, answers) {
      if(type === "radio") {
        $("#placeholder-label").remove();
        $("#dropdown-placeholder").remove();
        $("#next-btn").hide();
        $("#finish-btn").animate({
          opacity: 100,
          left: "+=50",
          height: "toggle"
        }, 1000);

        let radioNum = 1;
        for(let i = 0; i < answers.length; i++) {
          let createLabel = `<label for="${id + radioNum}"> ${answers[i]} </label>`;
          let createInput = `<input type="radio" id="${id + radioNum}" name="radio">`;
          $("#quiz").prepend(createLabel);
          $("#quiz").prepend(createInput);
          $("#quiz").prepend("<br>");
          radioNum++;
        }
        $("#quiz").prepend(`<p>${questionCount + 1}. ${question}</p>`)

      } else {
        $("#placeholder-label").text(`${questionCount + 1}. ${question}`);
        $("#placeholder-label").attr("for", id);
        $("#placeHolder").attr("for", id);

        if(type.includes("input")) {
          $("#placeHolder").attr("name", id);
          $("#placeHolder").attr("type", type.split(" ")[1]);
        } else{
          $("#placeHolder").remove();
          $("#dropdown-placeholder").prepend(`<select name="${id}" id="${id}"> </select>`)
          
          for(let i = 0; i < answers.length; i++) {
            let createOption = `<option value="${answers[i]}">${answers[i]}</option>`;
            $("#color").append(createOption);
          }
        }
      }
    }

    renderNextQuestion(
      currentQuestionSet.question, 
      currentQuestionSet.answer.id, 
      currentQuestionSet.answer.type, 
      currentQuestionSet.answer.answers
    );

    $("#next-btn").click(function() {
      let currentVal = $("#placeHolder").val();
      if(questionCount === 3) {
        currentVal = $("#color :selected").text();
      }
      questionCount++;
      currentQuestionSet = questionsBank[questionCount]
      renderNextQuestion(
        currentQuestionSet.question, 
        currentQuestionSet.answer.id, 
        currentQuestionSet.answer.type, 
        currentQuestionSet.answer.answers
      );
      
      userAnswers.push(currentVal);
      $("#questionsNum").text(`${questionCount + 1} / ${questionsBank.length} questions`);
      $("form#quiz")[0].reset();
    });

    $("#finish-btn").click(function(event) {
      let result = "";
      event.preventDefault();
      $("div.container").hide();
      $("div#result").show();
      console.log(userAnswers);
    });
  });
});