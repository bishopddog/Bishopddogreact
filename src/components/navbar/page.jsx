import Link from "next/link";
import classes from './page.modules.css'

export default function Navbar(){
    return(
        <>
             <div className={styles.nav}>
                <link href='/'>Home</link>
                <link href='/about'>About</link>
                <link href='/contact'>Contact</link>
             </div>
        </>
    )
}