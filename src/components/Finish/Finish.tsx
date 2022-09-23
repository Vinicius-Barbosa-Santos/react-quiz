import styles from './Finish.module.css'
import prize from '../../assets/prize.png'
import { questions } from '../../helpers/questions'

type Props = {
    click: () => void,
    button : string,
    correctAnswer : number,
}

export const Finish = ({ click, button, correctAnswer }: Props) => {

    let texto = ''
    let points = (correctAnswer / (questions.length - 1)) * 100

    if(points < 30) {
        texto = 'Está muito ruim!'
    }

    if(points >= 30 && points <= 70) {
        texto = 'Está melhorando!'
    }

    if(points > 70) {
        texto = 'Parabéns'
    }

    return (
        <div className={styles.main}>
            <div className={styles.border}>
                <div className={styles.showAnswer}>
                    <div className={styles.prize}>
                        <img src={prize} alt="" width={100} />
                    </div>

                    <div className={styles.text}>
                        <p>{texto}</p>
                    </div>

                    <div className={styles.correctAnswer}>
                        <p>Acertou {points}%</p>
                    </div>

                    <div className={styles.total}>
                        <p>Você respondeu {questions.length - 1} questões e acertou {correctAnswer}.</p>
                    </div>

                    <button onClick={click} className={styles.button}>{button}</button>
                </div>
            </div>

            <div className={styles.footer}>
                <footer>
                    Criado pela B7Web
                </footer>
            </div>
        </div>
    )
}