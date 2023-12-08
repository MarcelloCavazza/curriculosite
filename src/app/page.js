import Image from 'next/image'
import styles from './page.module.css'
import './index.css'

export default function Home() {
  return (
    <>
      <aside>
        <div id="mySidenav" class="sidenav">
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
    // <main className={styles.main}>
    //   <div className={styles.description}>
    //     <p>
    //       Get started by editing&nbsp;
    //       <code className={styles.code}>src/app/page.js</code>
    //     </p>
    //     <div>
    //       <a
    //         href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         By{' '}
    //         <Image
    //           src="/vercel.svg"
    //           alt="Vercel Logo"
    //           className={styles.vercelLogo}
    //           width={100}
    //           height={24}
    //           priority
    //         />
    //       </a>
    //     </div>
    //   </div>

    //   <div className={styles.center}>
    //     <Image
    //       className={styles.logo}
    //       src="/next.svg"
    //       alt="Next.js Logo"
    //       width={180}
    //       height={37}
    //       priority
    //     />
    //   </div>

    //   <div className={styles.grid}>
    //     <a
    //       href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className={styles.card}
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2>
    //         Docs <span>-&gt;</span>
    //       </h2>
    //       <p>Find in-depth information about Next.js features and API.</p>
    //     </a>

    //     <a
    //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className={styles.card}
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2>
    //         Learn <span>-&gt;</span>
    //       </h2>
    //       <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
    //     </a>

    //     <a
    //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className={styles.card}
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2>
    //         Templates <span>-&gt;</span>
    //       </h2>
    //       <p>Explore the Next.js 13 playground.</p>
    //     </a>

    //     <a
    //       href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className={styles.card}
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2>
    //         Deploy <span>-&gt;</span>
    //       </h2>
    //       <p>
    //         Instantly deploy your Next.js site to a shareable URL with Vercel.
    //       </p>
    //     </a>
    //   </div>
    // </main>
  )
}
