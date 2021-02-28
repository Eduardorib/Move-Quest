import { useContext } from 'react';
import {CountdownContext} from '../contexts/CountdownContext'
import styles from '../styles/components/Countdown.module.css'



export function Countdown() {
    const { 
        minutes,
        seconds, 
        hasFinished, 
        isActive,
        startCountdown, 
        resetCountdown,
        } = useContext(CountdownContext)

    const [minuteLeft,minuteRight] = String(minutes).padStart(2, '0').split('') // padStart verifica quando a string nao tiver dois caracteres, ex : 5, ela coloca um 0 na esquerda do 5 = 05, e o split divide a string em 2, ex : '25' = '2' '5'
    const [secondLeft,secondRight] = String(seconds).padStart(2, '0').split('')

    return (
        <div>
        <div className={styles.countdownContainer}>
            <div>
                <span>{minuteLeft}</span>
                <span>{minuteRight}</span>           
            </div>
            <span>:</span>
            <div>
                <span>{secondLeft}</span>
                <span>{secondRight}</span>
            </div>

        </div>

        { hasFinished ? (
            <button 
            disabled
            className={styles.countdownButton} 
            >
            Ciclo encerrado          
            </button>
        ) : (
        <> 
            { isActive ? (
            <button 
            type="button" 
            className={`${styles.countdownButton} ${styles.countdownButtonActive}`} // contatenar duas strings
            onClick={resetCountdown}
            >
            Abandonar ciclo          
            </button> 
        
        ) : (
        
            <button 
            type="button" 
            className={styles.countdownButton}
            onClick={startCountdown}
            >
            Iniciar um ciclo
            </button>
        ) }

        </>

        )}

        </div>
    );
}
/*
 { isActive ? } se isActive = true, mostrar botão 'Abandonar ciclo', senao, mostrar botão 'Iniciar um ciclo'
 
 { x ?} (
    y
) : z       if x then y, else z

 { x &&} (
     y
 )      if x then y


*/