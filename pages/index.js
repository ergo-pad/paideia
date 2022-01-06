import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>BootstrapDash Comingsoon Template</title>
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Karla:400,700, 800, 900&display=swap" rel="stylesheet" />
          <link rel="stylesheet" href="https://cdn.materialdesignicons.com/4.8.95/css/materialdesignicons.min.css" />
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" />
      </Head>

      <body className="min-vh-100 d-flex flex-column">

        <header>
            <div className="container">
                <nav className="navbar navbar-dark bg-transparenet">
                    <a className="navbar-brand" href="#">
                        Paideia
                    </a>
                </nav>
            </div>
        </header>
        <main className="my-auto">
            <div className="container">
              <div className="max750">
                <h1 className="page-title">DAO Management: Simplified</h1>
                <p className="page-description p">
                  Paideia is an Ergopad incubated project, bringing a full suite of DAO management tools to the Ergo blockchain. 
                </p>
                <p className="p">Whitepaper and social links coming soon</p>
{/*                 <nav className="footer-social-links">
                    <a href="#!" className="social-link"><i className="mdi mdi-twitter"></i></a>
                    <a href="#!" className="social-link"><i className="mdi mdi-telegram"></i></a>
                    <a href="#!" className="social-link"><i className="mdi mdi-discord"></i></a>
                </nav> */}
                </div>
            </div>
        </main>
      </body>
    </div>
  )
}
