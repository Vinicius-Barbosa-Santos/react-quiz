import { useState } from 'react'
import styles from './App.module.css'
import { questions } from './helpers/questions'
import { Finish } from './components/Finish'

const App = () => {
  const [showAnswer, setShowAnswer] = useState<boolean>(false)
  const [currentQuestion, setCurrentQuestion] = useState<number>(0)
  const [optionSelected, setOptionSelected] = useState<number>(0)

  const handleNextQuestion = (index : number) => {
    if (questions[currentQuestion]) {
      if(currentQuestion <= 9) {
        selectedOption(index)
        setCurrentQuestion(currentQuestion + 1)
      } else {
        finish()
      }
    }
  }

  const selectedOption = (index : number) => {
    if (questions[currentQuestion].answer === index) {
      setOptionSelected(optionSelected + 1)
    }
  }

  const handleRestartQuiz = () => {
    setCurrentQuestion(0)
    setShowAnswer(false)
  }

  const finish = () => {
    setShowAnswer(true)
  }

  return (
    <>
      <div className={styles.main}>
        {!showAnswer &&
          <div className={styles.question}>
            <p>{questions[currentQuestion].question}</p>

            <div className={styles.options}>
              {questions[currentQuestion].options.map((item, index) => (
                <div className={styles.option} onClick={() => handleNextQuestion(index)} key={index}>
                  <div className={styles.flex}>
                    <span className={styles.span}>{index + 1}</span><p>{item}</p>
                  </div>
                </div>
              ))}

              <div className={styles.footer}>
                <footer>
                  Criado pela B7Web
                </footer>
              </div>
            </div>
          </div>
        }

        {showAnswer &&
          <div>
            <Finish click={handleRestartQuiz} button={'Fazer Novamente'} correctAnswer={optionSelected}/>
          </div>
        }
      </div>
    </>
  )
}

export default App