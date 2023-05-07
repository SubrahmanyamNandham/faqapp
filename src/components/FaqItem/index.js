// Write your code he
import {useState} from 'react'
import './index.css'

const PLUS_IMAGE =
  'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
const MINUS_IMAGE =
  'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'

const FaqItem = props => {
  const [data, setData] = useState(false)
  const {faqDetails} = props
  const image = data ? MINUS_IMAGE : PLUS_IMAGE
  const altText = data ? 'minus' : 'plus'

  const {questionText, answerText} = faqDetails

  const onToggleIsActive = () => {
    setData(prevState => !prevState)
  }
  return (
    <li className="faq-item">
      <div className="question-container">
        <h1 className="question">{questionText}</h1>
      </div>
      <button className="button" type="button" onClick={onToggleIsActive}>
        <img className="image" src={image} alt={altText} />
      </button>
      {data ? (
        <div>
          <hr className="horizontal-line" />
          <p className="answer">{answerText}</p>
        </div>
      ) : null}
    </li>
  )
}
export default FaqItem
