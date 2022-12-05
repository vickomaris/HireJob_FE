import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../../styles/Auth.module.css'

import bannerleft from '../../../public/pic1.png'

const index = () => {
    return (
        <>
            <Head>
                <title> Halaman Reset Password Perekrut</title>
                <link rel='icon' href='/logoheaderputih.svg' />
            </Head>
            <section className='loginpekerja'>
                <div className="container">
                    <div className={`row mt-5 ${styles.loginpekerja}`}>
                        <div className={`col-md-6  d-flex flex-row ${styles.leftside}`}>
                            {/* <img src={bannerleft}/> */}
                            {/* <img src='/pic1.png'/> */}
                            <div className="logo">
                                <Image src='/logoputih.png' width={90} height={50} alt='logo' />
                            </div>
                            <div className={`mt-5 ${styles.textBanner}`}>
                                Temukan developer berbakat & terbaik di berbagai bidang keahlian
                            </div>
                        </div>
                        <div className={`col-md-6 mt-5 p-5 ${styles.rightside}`}>
                            <div className="d-flex flex-column">
                                <h1 className={styles.titleRight}>Reset Password</h1>
                                <p className='mt-3'>Enter your user accounts verified email address and we will send you a password reset link.
                                </p>
                            </div>
                            <div className="d-flex flex-column mt-5">
                                <p className={`mb-0  ${styles.labelInput}`}> Email</p>
                                <div class="form-floating">
                                    <input type="email" class="form-control" id="floatingInput" placeholder="Masukan alamat email" />
                                    <label for="floatingInput" className={styles.holderInput}>Masukan alamat email</label>
                                </div>
                                
                                <button className={`mt-5 ${styles.btncostum}`}> Send password reset email </button>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>

    )
}

export default index