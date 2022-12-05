import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'


export default function Home() {
  return (
    <>
      <Head>
        <title> Halaman Login Pekerja</title>
        <link rel='icon' href='/logoheaderputih.svg' />
      </Head>
      <section className='loginpekerja'>
        <div className="container">
          <div className={`row mt-5 ${styles.loginpekerja}`}>
            <div className={`col-md-6  d-flex flex-row ${styles.leftside}`}>
              {/* <img src={bannerleft}/> */}
              {/* <img src='/pic1.png'/> */}
              <div className="logo">
                <Image src='/logoputih.png' width={90} height={50} alt="logo" />
              </div>
              <div className={`mt-5 ${styles.textBanner}`}>
                Temukan developer berbakat & terbaik di berbagai bidang keahlian
              </div>
            </div>
            <div className={`col-md-6 mt-5 p-5 ${styles.rightside}`}>
              <div className="d-flex flex-column">
                <h1 className={styles.titleRight}>Halo, Pewpeople</h1>
                <p className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
              </div>
              <form onSubmit={(e) => onSubmit(e)}>
                <div className="d-flex flex-column mt-5">
                  <Link href={'/auth/login'}>
                    <button type="button" className={styles.btncostum1}> Login Pekerja </button>
                  </Link>
                    <p className='text-center my-4'> or </p>
                  <Link href={'/authperekrut/login'}>
                    <button type="button" className={styles.btncostum}> Login Perekrut </button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
