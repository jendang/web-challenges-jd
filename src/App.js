import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    input1: '',
    input2: ''
  }

  onChange1 = (e) => {
    return this.setState({ input1: e.target.value })
  }

  onChange2 = (e) => {
    return this.setState({ input2: e.target.value })
  }

  onSubmit = (e) => {
    e.preventDefault()
    
  }

  onCalculation1(num) {
    num = Number(this.state.input1)
    let total = 1
    for(let i = 1; i <= num; i++){
      total *= i
    }
    return total
    
  }

  onCalculation2(num) {
    num = Number(this.state.input2)
    let arr = []
    for(let i = 1; i <= num; i++){
      if(i%3 === 0 && i%5 !== 0){
        arr.push(`"SKIM"`)
      } 
      else if (i%5 === 0 && i%3 !== 0){
        arr.push(`"great place to work!!"`)
      } 
      else if (i%5 === 0 && i%3 === 0){
        arr.push(`"SKIM is great place to work!!"`)
      }
      else {
        arr.push(i) 
      }
    }
    return arr.join(',')
  }

  render(){
    return (
      <div className="container">
        <h1>Web Development Challenges</h1>
        
        <form onSubmit={this.onSubmit} className="formLayout" >
            <div className="formStyle">
              <div>
                <div>Challenge #1</div>
                <label>Input</label>
                <input 
                  onChange={this.onChange1}
                />
              </div>
              <div>
                Output: {this.onCalculation1() === 1 ? "" : this.onCalculation1()}
              </div>
            </div>

            <div className="formStyle">
              <div>
                <div>Challenge #2</div>
                <label>Input</label>
                <input 
                  onChange={this.onChange2}
                />
              </div>
              <div>
                Output: {this.onCalculation2()}
              </div>
            </div>
        </form>
      </div>
    )
  }
}

export default App;
