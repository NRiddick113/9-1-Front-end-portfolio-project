const form = document.querySelector("form");
const ol = document.querySelector("ol");
const ready = document.querySelector("button");
const main = document.querySelector("main");
const p = document.querySelector("#description");
const getScore = document.querySelector("#getScore");
const err = document.querySelector('#err')

form.addEventListener("submit", (event) => {
  event.preventDefault();
  ready.remove();
  quotes();
});

function quotes() {
  fetch('https://www.officeapi.dev/api/quotes/')
    .then((res) => res.json())
    .then((res) => {
      const data = res.data;
      console.log(data);

      let indexNumArr = [];
      let answerKey = [];

      while (indexNumArr.length < 10) {
        let randomNum = Math.floor(Math.random() * data.length);

        if (!indexNumArr.includes(randomNum)) {
          indexNumArr.push(randomNum);
          answerKey.push(
            data[randomNum].character.firstname +
              " " +
              data[randomNum].character.lastname
          );
        } else {
          let newRandomNum = Math.floor(Math.random() * data.length);
          indexNumArr.push(newRandomNum);
          answerKey.push(
            data[newRandomNum].character.firstname +
              " " +
              data[newRandomNum].character.lastname
          );
        }
      }

      console.log(indexNumArr, answerKey);

      indexNumArr.forEach((index) => {
        const quote = document.createElement("li");
        quote.innerText = `${data[index].content}`;
        const input = document.createElement("input");
        input.setAttribute("id", "answer");
        input.setAttribute("type", "text");
        input.setAttribute("placeholder", "Name of Character");
        ol.append(quote, input);
      });

      const submit = document.createElement("button");
      submit.innerText = "Get My Score";
      submit.setAttribute("id", "getScore");
      submit.setAttribute("type", "submit");
      main.append(submit);
      const getScore = document.querySelector("button");
      console.log(getScore)
      const user = document.querySelectorAll("#answer");

      getScore.addEventListener("click", (event) => {
        event.preventDefault();

        
        let correct = 0;
        answerKey.forEach((userAnswer, i) => {
          if (user[i].value === '') {
              getScore.disabled = true
                err.style.display = 'block'

            }
            console.log(user[i].value)
          if (userAnswer === user[i].value) {
            correct += 1;
          }
         
        });

        const score = Math.floor((correct / 10) * 100);
        const scores = document.createElement("p");
        scores.setAttribute("id", "score");
        scores.innerText = `${score}%`;
        p.append(scores);
        form.remove();
      });

      form.reset();
    })
    .catch((err) => {
      console.log(err);
    });
}

