import React, { useState } from 'react'
import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../../styles/Auth.module.css'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Index = () => {
    const router = useRouter();

    const [form, setForm] = useState({
        username: '',
        email: '',
        phone: '',
        createNewPass: '',
        password: "",
    })

    const onSubmit = (e) => {
        e.preventDefault();
        // console.log(form)
        if (form.username == "" || form.email == "" || form.phone == "" || form.password == "") {
            alert('Semua input wajib diisi')
        } else {
            const body = {
                username: form.username,
                email: form.email,
                phone: form.phone,
                createNewPass: form.createNewPass,
                password: form.password,
            }
            if (form.createNewPass !== form.password) {
                alert("password dan new password tidak sama")
            } else {
                axios.post(`${process.env.NEXT_PUBLIC_API_URL}/register`, body)
                    .then((response) => {
                        // if(response.data.code !== 200){
                        //     alert('error:' + response.data.message)
                        // }
                        if (response.data.status != 'success') {
                            alert(response.data.message)
                        } else {
                            alert("data berhasil ditambahkan")
                            console.log(response.data)
                            router.push('/auth/login')
                        }
                        // console.log(response.data)
                        // return navigate('/')
                    }).catch((err) => {
                        console.error(err)
                    })
            }
        }

    }
    return (
        <>
            <Head>
                <title> Halaman Login Pekerja</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <section className="loginpekerja">
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
                                    <p className={`mb-0 ${styles.labelInput}`}> Nama </p>
                                    <div className="form-floating ">
                                        <input 
                                        type="text" 
                                        className="form-control" 
                                        id="floatingInput" 
                                        placeholder="Masukan nama panjang" 
                                        onChange={(e) => setForm({ ...form, username: e.target.value })} />
                                        <label htmlFor="floatingInput" className={styles.holderInput}>Masukan nama panjang</label>
                                    </div>
                                    <p className={`mb-0 mt-5 ${styles.labelInput}`}>Email</p>
                                    <div className="form-floating">
                                        <input
                                            type="Email"
                                            className="form-control"
                                            id="floatingPassword"
                                            placeholder="Masukan alamat email"
                                            onChange={(e) => setForm({ ...form, email: e.target.value })} />
                                        <label htmlFor="floatingPassword" className={styles.holderInput}>Masukan alamat email</label>
                                    </div>
                                    <p className={`mb-0 mt-5 ${styles.labelInput}`}>No handphone</p>
                                    <div className="form-floating">
                                        <input 
                                        type="tect" className="form-control" 
                                        id="floatingPassword" 
                                        placeholder="Masukan no handphone" 
                                        onChange={(e) => setForm({ ...form, phone: e.target.value })}/>
                                        <label htmlFor="floatingPassword" className={styles.holderInput}>Masukan no handphone</label>
                                    </div>
                                    <p className={`mb-0 mt-5 ${styles.labelInput}`}>Kata Sandi</p>
                                    <div className="form-floating">
                                        <input 
                                        type="password" 
                                        className="form-control" id="floatingPassword" 
                                        placeholder="MMasukan kata sandi" 
                                        onChange={(e) => setForm({ ...form, createNewPass: e.target.value })} />
                                        <label htmlFor="floatingPassword" className={styles.holderInput}>Masukan kata sandi</label>
                                    </div>
                                    <p className={`mb-0 mt-5 ${styles.labelInput}`}>Konfirmasi kata sandi</p>
                                    <div className="form-floating">
                                        <input 
                                        type="password" 
                                        className="form-control" 
                                        id="floatingPassword" 
                                        placeholder="Masukan konfirmasi kata sandi" 
                                        onChange={(e) => setForm({ ...form, password: e.target.value })}/>
                                        <label htmlFor="floatingPassword" className={styles.holderInput}>Masukan konfirmasi kata sandi</label>
                                    </div>
                                    <button type="submit" className={`mt-5 ${styles.btncostum}`}> Daftar </button>
                                    <p className={`text-center my-4 ${styles.regis}`}> Anda sudah punya akun? <span> <Link href="/auth/login">Masuk disini </Link>    </span>  </p>
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