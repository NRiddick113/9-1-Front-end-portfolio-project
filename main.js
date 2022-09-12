const baseUrl = 'https://www.officeapi.dev/api/quotes/'

const form = document.querySelector('form')
const ol = document.querySelector('ol')
const ready = document.querySelector('button')
const main = document.querySelector('main')
// console.log(ready)

form.addEventListener('submit', (event) => {
event.preventDefault()
ready.remove()
quotes()


})


function quotes(){
    
    fetch(`${baseUrl}`)
    .then(res => res.json())
    .then(res => {
        const data = res.data
        let useQues = []
        for (let i = 1; i < 10; i++) {
            let randomNum = Math.floor(Math.random() * data.length-1)
            useQues.push(randomNum)
            // console.log(randomNum)
            console.log(data.length-1)
            const quote = document.createElement('li')
            if (randomNum > 1) {
                quote.innerText = `${data[randomNum].content}`
            }
            const input = document.createElement('input')
            input.setAttribute('type','text')
            input.setAttribute('placeholder','Name of Character')
            ol.append(quote,input)
            
            if (!input){
                console.log('please add a character name')
            }
        }
        
        const submit = document.createElement('button')
                    submit.innerText = 'Get My Score'
                    submit.setAttribute('type','submit')
                    main.append(submit)
                    form.reset()
                })
    .catch((err) => {
        console.log(err)
   })
 }
    const button = document.querySelector('button')        
            button.addEventListener('click', (event) => {
                event.preventDefault
                countAnswer()
            })
            
            function countAnswer() {
                fetch(`${baseUrl}`)
                .then(res => res.json())
                .then(res => {
                    const data = res.data
                    
                    console.log(data)
                    let correct = 0
                    const name = data.character.firstname + data.character.lastname
                    input.forEach((answer) => {
                         if (answer === name) {
                             correct += 1
                        }
                            
                     })
                    
                   
                    })
                    .catch((err) => {
                        console.log(err)
                    })
                }

