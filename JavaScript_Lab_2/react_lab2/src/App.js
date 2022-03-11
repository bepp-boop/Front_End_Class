import Header from './components/Header';
import User from './components/User'
import React from 'react'

export class App extends React.Component {
  constructor(props) {
    super(props)
    this.pageTitle = "Event handlers";

    this.state = {
      quiz: {
        php: false,
        java: false,
        python: false,
      }
    }
  }

  handleCheckbox = data => {
    let state = this.state;
    state.quiz[data.target.value] = data.target.checked;
    this.setState(state);

    console.log(this.state.quiz)
  }

  handleScore = () => {
    let state = this.state;
    let score = 0;
    {...this.state.quiz }
  }
    console.log(score)

}

render() {
  return (
    < div className="container" >
      <Header title="Quize"></Header>
      <User></User>
      <div className="quiz">
        php<input onChange={this.handleCheckbox} type="checkbox" name="quiz" value="php" checked={this.state.quiz.php} />
        java<input onChange={this.handleCheckbox} type="checkbox" name="quiz" value="java" checked={this.state.quiz.jaba} />
        python<input onChange={this.handleCheckbox} type="checkbox" name="quiz" value="python" checked={this.state.quiz.python} />
      </div>
      <input onClick={this.handleScore} type="button" value="Score" />
    </div>
  )
}
}

export default App