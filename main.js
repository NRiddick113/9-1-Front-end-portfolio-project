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
    
    let indexNumArr = [];
    let answerKey = [];
    
    while (indexNumArr.length < 10) {
      let randomNum = Math.floor(Math.random() * data.length);
      if (!indexNumArr.includes(randomNum)) {
        indexNumArr.push(randomNum);
        answerKey.push(
          data[randomNum].character.firstname 
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
      
      getScore.addEventListener("click", (event) => {
        event.preventDefault();
        
        for (const answer of user.values()) {
         console.log(answer)
          if (answer.value === '') {
            alert('You missed a question')
           return getScore.disable = true
          }
        }
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
            const showScores = document.createElement("h2");
            const meetCast = document.createElement("button");
            const tryAgain = document.createElement("button");
            scores.setAttribute("id", "score");
            showScores.innerText ='Your Score!'
            scores.innerText = `${score}%`;
            meetCast.innerText = 'Meet Cast'
            tryAgain.innerText = 'Try Again'
            p.append(showScores, scores,meetCast,tryAgain);
            form.remove();
            tryAgain.addEventListener('click', () => {
              window.location.reload()
            })
            meetCast.addEventListener('click', ()=> {
              location.href = './cast.html'
            })
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

