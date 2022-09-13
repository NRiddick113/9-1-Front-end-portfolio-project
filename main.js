const baseUrl = 'https://www.officeapi.dev/api/quotes/'

const form = document.querySelector('form')
const ol = document.querySelector('ol')
const ready = document.querySelector('button')
const main = document.querySelector('main')
const p = document.querySelector('#description')
const getScore = document.querySelector('#getScore')

const MS = ['5e9664cff87ac15464c55f1b','5e96651df87ac15464c55f1c','5e9665856a66e65486e24491','5e9665956a66e65486e24492','5e96659e6a66e65486e24493','5e9665a76a66e65486e24494','5e9665af6a66e65486e24495','5e9665cd6a66e65486e24496','5e9665d66a66e65486e24497','5e9665e06a66e65486e24498','5e9665f76a66e65486e24499']
const DS = ['5e9668c76a66e65486e244ab','5e9668d16a66e65486e244ac','5e9668dd6a66e65486e244ad','5e9668f46a66e65486e244ae']
const AB = ['5e96685a6a66e65486e244a7','5e96687c6a66e65486e244a8','5e96688d6a66e65486e244a9','5e96689a6a66e65486e244aa']
const PS = ['5e96661b6a66e65486e2449a','5e9666296a66e65486e2449b', '5e9666336a66e65486e2449c']
const JH = ['5e9668086a66e65486e244a4','5e9668186a66e65486e244a5','5e96682a6a66e65486e244a6']
const SH = ['5e96672e6a66e65486e2449f','5e96673d6a66e65486e244a0']
const KK = ['5e9667cd6a66e65486e244a2', '5e9667db6a66e65486e244a3']
const AM = ['5e9669396a66e65486e244b0','5e9669256a66e65486e244af']
const CB = '5e96667c6a66e65486e2449d'
const KM = '5e9666d76a66e65486e2449e'
const RH = '5e93b5183af44260882e33b4'
const DP = '5e966a676a66e65486e244b6'
const GL = '5e966a526a66e65486e244b5'
const EH = '5e966a376a66e65486e244b4'
const TF = '5e966a166a66e65486e244b3'
const PL = '5e9669d06a66e65486e244b2'
const OM = '5e9669a26a66e65486e244b1'


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
        console.log(data)
        const michael = data[0].character.firstname + ' ' + data[0].character.lastname
        const dwight = data[31].character.firstname + ' ' + data[31].character.lastname
        const andy = data[24].character.firstname + ' ' + data[24].character.lastname
        const pam = data[11].character.firstname + ' ' + data[11].character.lastname
        const jim = data[23].character.firstname + ' ' + data[23].character.lastname
        const stanley = data[16].character.firstname + ' ' + data[16].character.lastname
        const kelly = data[19].character.firstname + ' ' + data[19].character.lastname
        const angela = data[33].character.firstname + ' ' + data[33].character.lastname
        const creed = data[14].character.firstname + ' ' + data[14].character.lastname
        const kevin = data[15].character.firstname + ' ' + data[15].character.lastname
        const ryan = data[18].character.firstname + ' ' + data[18].character.lastname
        const oscar = data[34].character.firstname + ' ' + data[34].character.lastname
        const phyllis = data[35].character.firstname + ' ' + data[35].character.lastname
        const toby = data[36].character.firstname + ' ' + data[36].character.lastname
        const erin = data[37].character.firstname + ' ' + data[37].character.lastname
        const gabe = data[38].character.firstname + ' ' + data[38].character.lastname
        const darryl = data[39].character.firstname + ' ' + data[39].character.lastname
        let useQues = []
        let id = []
        let num = []
        let answer = ''
        
        while (useQues.length < 10) {
            let randomNum = Math.floor(Math.random() * data.length)
            // console.log(data[randomNum],randomNum)
            if(!id.includes(data[randomNum]._id)){
                id.push(data[randomNum]._id)
                num.push(randomNum)
            }else{
                let randomNum = Math.floor(Math.random() * data.length)
                // console.log(data[randomNum1],randomNum1)
                id.push(data[randomNum]._id)
                num.push(randomNum)
            }
            useQues.push(data[randomNum]._id)
            
            
            if (MS.includes(data[randomNum]._id)) {
                answer =  michael
            }  if (DS.includes(data[randomNum]._id)) {
                answer =  dwight
            }  if (AB.includes(data[randomNum]._id)) {
                answer =  andy
            }  if (PS.includes(data[randomNum]._id)) {
                answer = pam
            }  if (JH.includes(data[randomNum]._id)) {
                answer =  jim
            }  if (SH.includes(data[randomNum]._id)) {
                answer =  stanley
            }  if (KK.includes(data[randomNum]._id)) {
                answer =  kelly
            }  if (AM.includes(data[randomNum]._id)) {
                answer =  angela
            }  if (KM === data[randomNum]._id) {
                answer =  kevin
            }  if (RH === data[randomNum]._id) {
                answer =  ryan
            }  if (DP === data[randomNum]._id) {
                answer =  darryl
            }  if (EH === data[randomNum]._id) {
                answer =  erin
            }  if (GL === data[randomNum]._id) {
                answer =  gabe
            }  if (TF === data[randomNum]._id) {
                answer =  toby
            }  if (PL === data[randomNum]._id) {
                answer =  phyllis
            }  if (OM === data[randomNum]._id) {
                answer =  oscar
            }  if (CB === data[randomNum]._id) {
                answer =  creed
            }  
            
            
        }
        console.log(id,num)
        
        num.forEach((index) => {
            const quote = document.createElement('li')
            quote.innerText = `${data[index].content}`
            const input = document.createElement('input')
            input.setAttribute('id','answer')
            input.setAttribute('type','text')
            input.setAttribute('placeholder','Name of Character')
            ol.append(quote,input)
        })
        
        // if (!input){
            //     console.log('please add a character name')
            // }
            
            
            const submit = document.createElement('button')
            submit.innerText = 'Get My Score'
            submit.setAttribute('id','getScore')
            submit.setAttribute('type','submit')
            main.append(submit)
            const button = document.querySelector('button')        
            button.addEventListener('click', (event) => {
                event.preventDefault
                const user = document.querySelectorAll('input')
                
                console.log(user)
                
                let correct = 0
                user.forEach((userAnswer, i) => {
                    console.log(answer)
                    if (userAnswer.value === answer) {
                        correct += 1
                        
                        console.log(correct)
                    }
                    if (userAnswer.value === undefined) {
                        window.confirm('Try your best. you missed a question!')
                    }
                })

                    const score = Math.floor((correct/10) * 100)
                    const scores = document.createElement('p')
                    scores.setAttribute('id','score')
                    scores.innerText = `${score}%`
                    p.append(scores)
                    form.remove()
                    getScore.remove()

            }) 

            form.reset()
        })
        .catch((err) => {
            console.log(err)
        })
    }
    


    // IF ID === (ID){
     //   ANSWER === FIRSTNAME + LASTNAME
    // }


   

