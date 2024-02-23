import styles from './page.module.css'

export default function About(){
    return(
        <>
        <h1 className={styles.text}>This is the about page</h1>
        <p className={`${styles.text} text`}>I am styled in global css</p>
        </>
    )
}

/**
|--------------------------------------------------
| here we are to play and play
|--------------------------------------------------
*/