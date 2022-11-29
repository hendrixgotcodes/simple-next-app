import Nav from "./Nav"
import {ReactNode} from "react"
import styles from "../styles/Layout.module.css"
import Header from "./Header"

export default function Layouts({children}:{children: ReactNode}) {
  return (
    <>
      <Nav />
      <div className={styles.container}>
      <main className={styles.main}>
        <Header />
        {children}
      </main>
    </div>
    </>
  )
}
