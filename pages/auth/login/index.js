import React, { useState } from 'react'
import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../../styles/Auth.module.css'
import { useRouter } from 'next/router'
import Link from 'next/link'
import bannerleft from '../../../public/pic1.png'

const Index = () => {
    const router = useRouter()
    const [form, setform] = useState({
        email: '',
        password: '',
    })

    const onSubmit = (e) => {
        e.preventDefault();
        // console.log(form)
        // //root dari backend
            axios.post(`${process.env.NEXT_PUBLIC_API_URL}/login`, form)
            .then((response) => {
                console.log(response.data)
                if (response.data.status !== 'success') {
                    alert(response.data.message)
                } else {
                    // localStorage.setItem("name", JSON.stringify(response.data.token.data))
                    // document.cookie = ("data", JSON.stringify(response.data.token.data))
                    localStorage.setItem("token", response.data.token.token);
                    localStorage.setItem("data", JSON.stringify(response.data.token.data));
                    alert("data berhasil login")
                    router.push('/home')}
                })
            .catch((err) => {
                console.log(err);
            })
    }

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
                                <p className={`mb-0  ${styles.labelInput}`}> Email</p>
                                <div className="form-floating">
                                    <input 
                                    type="email" 
                                    className="form-control" 
                                    id="floatingInput" 
                                    placeholder="Masukan alamat email" 
                                    onChange={(e) => setform({ ...form, email: e.target.value })}/>
                                    <label htmlFor="floatingInput" className={styles.holderInput}>Masukan alamat email</label>
                                </div>
                                <p className={`mb-0 mt-5 ${styles.labelInput}`}>Password</p>
                                <div className="form-floating">
                                    <input 
                                    type="password" 
                                    className="form-control" 
                                    id="floatingPassword" 
                                    placeholder="Masukan kata sandi" 
                                    onChange={(e) => setform({ ...form, password: e.target.value })}/>
                                    <label htmlFor="floatingPassword" className={styles.holderInput}>Masukan kata sandi</label>
                                </div>
                                <p className='text-end my-4'> Lupa kata sandi ? </p>
                                <button type="submit" className={styles.btncostum}> Masuk </button>
                                <p className={`text-center my-4 ${styles.regis}`}> Anda belum punya akun? <span> <Link href="/auth/register"> Daftar disini </Link> </span>  </p>
                            </div>
                            </form>
                            
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Index