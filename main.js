const form = document.querySelector("form");
const ol = document.querySelector("ol");
const ready = document.querySelector("button");
const main = document.querySelector("main");
const p = document.querySelector("#description");
const getScore = document.querySelector("#getScore");
const err = document.querySelector('#err')
// console.log(getScore)

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
        } 
      }
      console.log(indexNumArr, answerKey);
      
      indexNumArr.forEach((index) => {
        const quote = document.createElement("li");
        quote.innerText = `${data[index].content}`;
        const input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("placeholder", "Name of Character");
        ol.append(quote, input);
        
      });
      
      getScore.style.display = 'block'

      const user = document.querySelectorAll("input");
      
      user.forEach(answer => {
        console.log(answer.value)
        if (answer === '') {
          getScore.disabled = true
          err.style.display = 'block'
        }
      });
      getScore.addEventListener("click", (event) => {
        event.preventDefault();
        
          console.log(getScore)
        
          score()
        });
        
        function score() {
          let correct = 0;
          answerKey.forEach((userAnswer, i) => {
            if (userAnswer === user[i].value) {
              correct += 1;
            }
          })
            const score = Math.floor((correct / 10) * 100);
            const scores = document.createElement("p");
            scores.setAttribute("id", "score");
            scores.innerText = `${score}%`;
            p.append(scores);
            form.remove();
      }

      // form.reset();
    })
    .catch((err) => {
      console.log(err);
    });
}

