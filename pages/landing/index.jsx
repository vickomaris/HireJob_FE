import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../../styles/Landing.module.css'

const index = () => {
  return (
    <>
      <Head>
        <title> Halaman Landing</title>
        <link rel='icon' href='/logoheaderputih.svg' />
      </Head>
      <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container">
                    <Link className="navbar-brand" href="#"><Image src='/logoungu.png' height={50} width={100} alt="logo" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        </ul>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" href="/auth/login">
                                  <button className={styles.btnLogin}>Masuk</button>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/auth/register">
                                  <button className={styles.btnRegister}>Daftar</button>
                                </Link>
                            </li>
                            
                        </ul>
                    </div>
                </div>
      </nav>
      <section className="pageOne">
        <div className="container">
          <div className="row  ">
            <div className={`col-md-6 mt-5  ${styles.leftside}`}>
              <div className="d-flex flex-column p-5">
                <h1> Talenta terbaik negri untuk perubahan revolusi 4.0 </h1>
                <p className='my-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  In euismod ipsum et dui rhoncus auctor.</p>
                <button className={`mt-5 ${styles.btncostum}`}> Mulai Dari Sekarang </button>
              </div>
            </div>
            <div className="col-md-6">
              <div className="d-flex flex-row mt-5 rightside">
                <Image src='/grupPic1.png' width={500} height={500} className={styles.pic1} alt="right"/>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={`${styles.pageTwo} mt-5`}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 leftsideTwo">
              <div className="d-flex flex-row">
                <Image src='/grupPic2.png' width={500} height={500} className={styles.pic1} alt="left" />
              </div>
            </div>
            <div className="col-md-6 rightsideTwo">
              <div className="d-flex flex-column">
                <h1>Kenapa harus mencari tallent di peworld</h1>
                <div className="d-flex flex-row mt-5">
                  <Image src='/ungutick.svg' width={23} height={23} alt="tick"  />
                  <p className='ms-4'> Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="d-flex flex-row mt-3">
                  <Image src='/ungutick.svg' width={23} height={23} alt="tick" />
                  <p className='ms-4'> Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="d-flex flex-row mt-3">
                  <Image src='/ungutick.svg' width={23} height={23} alt="tick" />
                  <p className='ms-4'> Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="d-flex flex-row mt-3">
                  <Image src='/ungutick.svg' width={23} height={23} alt="tick" />
                  <p className='ms-4'> Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pageThree mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 leftsideThree">
              <div className="d-flex flex-column">
                <h1>Skill Tallent</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
                <div className="d-flex flex-row">
                  <div className="col-md-6">
                    <div className="d-flex flex-row mt-5">
                      <Image src='/orangetick.svg' width={23} height={23} alt="tick" />
                      <p className='ms-4'> Java </p>
                    </div>
                    <div className="d-flex flex-row mt-3">
                      <Image src='/orangetick.svg' width={23} height={23} alt="tick" />
                      <p className='ms-4'> Kotlin </p>
                    </div>
                    <div className="d-flex flex-row mt-3">
                      <Image src='/orangetick.svg' width={23} height={23} alt="tick" />
                      <p className='ms-4'> PHP </p>
                    </div>
                    <div className="d-flex flex-row mt-3">
                      <Image src='/orangetick.svg' width={23} height={23} alt="tick" />
                      <p className='ms-4'> Javascirpt </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex flex-row mt-5">
                      <Image src='/orangetick.svg' width={23} height={23} alt="tick" />
                      <p className='ms-4'> Golang </p>
                    </div>
                    <div className="d-flex flex-row mt-3">
                      <Image src='/orangetick.svg' width={23} height={23} alt="tick" />
                      <p className='ms-4'> C++ </p>
                    </div>
                    <div className="d-flex flex-row mt-3">
                      <Image src='/orangetick.svg' width={23} height={23} alt="tick" />
                      <p className='ms-4'> Ruby </p>
                    </div>
                    <div className="d-flex flex-row mt-3">
                      <Image src='/orangetick.svg' width={23} height={23} alt="tick" />
                      <p className='ms-4'> 10+ Bahasa Lainnya </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 rightsideThree">
              <div className="d-flex flex-row">
                <Image src='/grupPic3.png' width={500} height={500} className={styles.pic1} alt="right2" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={`${styles.pageFour} mt-5`}>
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-5">
              <div className="d-flex flex-column align-items-center" >
                <h1 className={styles.titlePageFour}>Their opinion about peworld</h1>
              </div>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-md-3 g-4 text-center">
            <div className='col'>
              <div className="card h-100 px-5 py-4 align-items-center">
                <Image src='/harry.png' width={120} height={120} className={styles.photoImage} alt="harry" />
                  <div className="card-body">
                    <h5 className={`card-title ${styles.textName}`}>Harry Styles</h5>
                    <p className={styles.textProfession}> Web Developer </p>
                    <p className={`card-text ${styles.textDescription}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
                  </div>
              </div>
            </div>
            <div className="col">
            <div className="card h-100 px-5 py-4 align-items-center">
                <Image src='/Niall.png' width={120} height={120} className={styles.photoImage} alt="2" />
                  <div className="card-body">
                    <h5 className={`card-title ${styles.textName}`}>Niall Horan</h5>
                    <p className={styles.textProfession}> Web Developer </p>
                    <p className={`card-text ${styles.textDescription}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
                  </div>
              </div>
            </div>
            <div className="col">
            <div className="card h-100 px-5 py-4 align-items-center">
                <Image src='/Louis.png' width={120} height={120} className={styles.photoImage} alt="harry" />
                  <div className="card-body">
                    <h5 className={`card-title ${styles.textName}`}>Louis Tomlinson</h5>
                    <p className={styles.textProfession}> Web Developer </p>
                    <p className={`card-text ${styles.textDescription}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pageFive">
        <div className="container">
          <div className="row">
            <div className="d-flex flex-row mt-5 p-5">
              <div className={`col-md-12 d-flex flex-row ${styles.rectanglePurple}`}>
                <p className={`col-md-3  ${styles.textRectanglepurple}`}> Lorem ipsum dolor sit amet </p>
                <div className={`col-md-9 d-flex flex-row align-items-center justify-content-end ${styles.btncosutmRecPurple}`}>
                   <button> Mulai Daftar Sekarang </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
// index.layout = 'L1'

export default index