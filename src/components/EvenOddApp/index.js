// Write your code here
import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({
      count: prevState.count + Math.ceil(Math.random() * 100),
    }))
  }

  render() {
    const {count} = this.state

    const text = count % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="container">
        <div className="app-container">
          <h1 className="heading">Count {count}</h1>
          <p className="description">Count is {text} </p>
          <button type="button" className="btn" onClick={this.onIncrement}>
            Increment
          </button>
          <p className="para">Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
