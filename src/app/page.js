import Image from 'next/image'
import styles from './page.module.css'
import './index.css'

export default function Home() {
  return (
    <>
      <aside>
        <div id="mySidenav" className="sidenav">
            <a href="../about/about.html" id="about">Sobre Mim 
              <Image
                className={styles.logo}
                src="/icons/outline_person_black_24dp.png"
                alt="Next.js Logo"
                width={180}
                height={37}
                priority
              />
            </a>
            <a href="../projects/projects.html" id="projects">Projetos &nbsp; &nbsp; 
            <Image
                className={styles.logo}
                src="/icons/outline_work_black_24dp.png"
                alt="Next.js Logo"
                width={180}
                height={37}
                priority
              /></a>
            <a href="../contact/contact.html" id="contact">Contatos &nbsp; &nbsp;
            <Image
                className={styles.logo}
                src="/icons/baseline_alternate_email_black_18dp.png"
                alt="Next.js Logo"
                width={180}
                height={37}
                priority
              /></a>
          </div>
      </aside>
      <main>
          <span id="marcellobox"></span>
          <span id="cavazzabox"></span>
          <p id="marcello">Marcello</p>
          <p id="cavaza">Cavazza</p>
      </main>
      <footer>
          A simplicidade é mostrar que com pouco fazemos muito..
      </footer>
    </>
  )
}
