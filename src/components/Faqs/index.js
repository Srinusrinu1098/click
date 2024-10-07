import {Component} from 'react'
import './index.css'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props
    return (
      <div className="bg-container">
        <div className="card-container">
          <ul>
            {faqsList.map(each => (
              <li className="li">
                <div className="flex">
                  <h1 className="heading">{each.questionText}</h1>
                  <button type="button" className="button">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
                      alt="plus"
                      className="img"
                    />
                  </button>
                </div>
                <hr />
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
