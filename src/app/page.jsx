// import Image from "next/image";
import Link from 'next/link'


export default function Home() {
  return (

   <>
    <h1 style={{color:"red", backgroundColor:"green"}}>My first next project</h1>

    <Link href="/about"> go to about page</Link>
   </>
  )
}
