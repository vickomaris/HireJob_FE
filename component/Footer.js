import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import styles from '../styles/Footer.module.css'

const Footer = () => {
    return (
        <>
            <section className="footer">
                <div className="container-fluid">
                    <div className="row">
                        <div className={`col-md-12 p-5 ${styles.footer}`}>
                            <Image src='/logoputih.png' height={50} width={100} />
                            <div className=" col-md-4 d-flex flex-row mt-5">
                                <p className={styles.textFooter}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor. </p>
                            </div>
                            <hr className={styles.lineFoot} />
                            <div className="d-flex flex-row">
                                <p className={`col-md-4  ${styles.textFooter}`}>2020 Pewworld. All right reserved</p>
                                <p className={`col-md-6 text-end mx-5 ${styles.textFooter}`}>Telepon</p>
                                <p className={`text-end ${styles.textFooter}`}>Email</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Footer