import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  public plus:boolean
  public minus:boolean
  public divide:boolean
  public multiply:boolean
  public amountOfQuestions:number
  public digits:number
  private operatorListForQuestions:string[]
  private firstNumbers:number[]
  private secondNumbers:number[]
  private questions:string[]
  public results:number[]
  public userResults:number[]
  public resultsShow:boolean

  constructor() {
    this.plus = true
    this.minus = true
    this.divide = true
    this.multiply = true
    this.amountOfQuestions = 10
    this.digits = 1
    this.operatorListForQuestions = []
    this.firstNumbers=[]
    this.secondNumbers=[]
    this.questions=[]
    this.results=[]
    this.userResults=[]
    this.resultsShow = false
    this.createQuestions()

   }
  public getOperatorListForQuestions()
  {
    return this.operatorListForQuestions;
  }
  public getStyle(index:number)
  {
    if(this.results[index] === this.userResults[index])
    {
      return "right-result"
    }
    else
    {
      return "wrong-result"
    }
  }
  public showResults()
  {
    this.resultsShow = true
  }
  public getQuestions()
  {
    return this.questions
  }
  public createQuestions()
  {
    this.clearData()
    this.createOperatorList()
    this.createNumbers()
    this.createQuestionsArray()
    this.userResults = new Array(this.results.length)
  }
  private clearData()
  {
    this.operatorListForQuestions = []
    this.firstNumbers=[]
    this.secondNumbers=[]
    this.questions=[]
    this.results = []
  }
  private createQuestionsArray()
  {
    for (let index = 0; index < this.amountOfQuestions; index++) {
      this.questions.push(`${this.firstNumbers[index]} ${this.operatorListForQuestions[index]} ${this.secondNumbers[index]}`)

    }
  }
  public getOperatorList()
  {
    return this.operatorListForQuestions;
  }

  public checkIfAtLeastOneButtonWasClicked()
  {
    return this.plus||this.minus||this.multiply||this.divide
  }
  private getListOfValidOperatorList()
  {
    let chosenOperators = []
    if(this.plus)
    {
      chosenOperators.push('+')
    }
    if(this.minus)
    {
      chosenOperators.push('-')
    }
    if(this.multiply)
    {
      chosenOperators.push('*')
    }
    if(this.divide)
    {
      chosenOperators.push('/')
    }
    return chosenOperators

  }

  public getFirstNumbers()
  {
    return this.firstNumbers;
  }
  public getSecondNumbers(){
    return this.secondNumbers;
  }

  private createNumbers(){
    this.firstNumbers = []
    this.secondNumbers = []

    for (let index = 0; index < this.amountOfQuestions; index++) {
      let min = 1
      let max
      switch (this.operatorListForQuestions[index]) {
        case '-':
          this.firstNumbers.push(this.randomNumber(1, 1 * Math.pow(10, this.digits)-1))
          max = this.firstNumbers[index]
          this.secondNumbers.push(this.randomNumber(min, max))
          this.results.push(this.firstNumbers[index] - this.secondNumbers[index])
          break;
        case '/':
          let firstNumber
          let secondNumber
          do {
            firstNumber = this.randomNumber(1, 1 * Math.pow(10, this.digits)-1)
            min = 2
            max = Math.floor(firstNumber / 2)
            secondNumber = this.randomNumber(min, max)
            console.log(`${firstNumber} / ${secondNumber}. Welcome.`)
          } while (firstNumber % secondNumber !== 0);


          this.firstNumbers.push(firstNumber)
          this.secondNumbers.push(secondNumber)
          this.results.push(this.firstNumbers[index] / this.secondNumbers[index])
          break;

        default:
          this.firstNumbers.push(this.randomNumber(1, 1 * Math.pow(10, this.digits)-1))
          max = 1 * Math.pow(10, this.digits) - 1
          this.secondNumbers.push(this.randomNumber(min, max))
          if(this.operatorListForQuestions[index] === '+')
          {
            this.results.push(this.firstNumbers[index] + this.secondNumbers[index])
          }
          else{
            this.results.push(this.firstNumbers[index] * this.secondNumbers[index])
          }
          break;
      }




    }
  }


  private randomNumber(min:number,max:number)
  {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  private createOperatorList(){
    let chosenOperators = this.getListOfValidOperatorList()
    this.operatorListForQuestions = []

    for (let index = 0; index < this.amountOfQuestions; index++) {
      let myIndex = Math.floor(Math.random() * chosenOperators.length);
      this.operatorListForQuestions.push(chosenOperators[myIndex]);

    }

  }

}
