import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/editPerekrut.module.css'


const index = () => {
    return (
        <>
            <Head>
                <title> Halaman Edit Perusahaan</title>
                <link rel='icon' href='/logoheaderputih.svg' />
            </Head>
            <section className="top">
                <div className="container-fluid">
                    <div className="row">
                        <div className={styles.topPurple}>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.main}>
                <div className="container">
                    <div className="row">
                        <div className={`col-md-4  ${styles.leftside}`}>
                            <div className={`p-5  ${styles.cardProfile}`}>
                                <div className="d-flex flex-row justify-content-center">
                                    <Image src='/luis.png' width={150} height={150} alt='luis' />
                                </div>
                                <div className="d-flex flex-row mt-3 justify-content-center">
                                    <button className={styles.btnEdit}> <Image src='/pencil.png' width={15} height={15} alt='pencil' /> Edit </button>
                                </div>
                                <div className="d-flex flex-column mt-5">
                                    <p className={styles.textName}>PT. Martabat Jaya Abadi</p>
                                    <p className={styles.textProfession}>Financial</p>
                                </div>
                                <div className="d-flex flex-row">
                                    <Image src='/mappin.svg' height={25} width={10} alt='map' />
                                    <p className={`ms-2 ${styles.textLocation}`}>Purwokerto, Jawa Tengah</p>
                                </div>
                                
                            </div>
                            <div className="leftsideBottom">
                                <button className={` col-12 mt-4 ${styles.btnSimpan}`}>Delete</button>
                                <button className={` col-12 mt-4 ${styles.btnBatal}`}>Batal</button>
                            </div>
                        </div>
                        <div className={`col-md-8 ${styles.rightside}`}>
                            <div className={`p-5 ${styles.rightsideDatadiri}`}>
                                <div className="  ps-4 d-flex flex-column">
                                    <p className={styles.textTitle}>Data diri </p>
                                </div>
                                <hr />
                                <div className="d-flex flex-column mt-4">
                                    <p className={`mb-0  ps-4 ${styles.labelInput}`}> Nama Perusahaan </p>
                                    <div className="form-floating px-4">
                                        <input type="text" className="form-control" id="floatingInput" placeholder="Masukan nama perusahan" />
                                        <label for="floatingInput" className={`px-4 ${styles.holderInput}`}>Masukan nama perusahan</label>
                                    </div>
                                    <p className={`mb-0 mt-4  ps-4 ${styles.labelInput}`}> Bidang </p>
                                    <div className="form-floating px-4">
                                        <input type="text" className="form-control" id="floatingInput" placeholder="Masukan bidang perusahaan ex : Financial" />
                                        <label for="floatingInput" className={`px-4 ${styles.holderInput}`}>Masukan bidang perusahaan ex : Financial</label>
                                    </div>
                                    <p className={`mb-0 mt-4  ps-4 ${styles.labelInput}`}> Kota </p>
                                    <div className="form-floating px-4">
                                        <input type="text" className="form-control" id="floatingInput" placeholder="Masukan kota" />
                                        <label for="floatingInput" className={`px-4 ${styles.holderInput}`}>Masukan kota</label>
                                    </div>
                                    <p className={`mb-0 mt-4  ps-4 ${styles.labelInput}`}> Deskripsi singkat </p>
                                    <div className="form-floating px-4">
                                        <textarea className="form-control" placeholder="Tuliskan deskripsi singkat" id="floatingTextarea2"></textarea>
                                        <label for="floatingTextarea2" className={`px-4 ${styles.holderInput}`}>Tuliskan deskripsi singkat</label>
                                    </div>
                                    <p className={`mb-0 mt-4  ps-4 ${styles.labelInput}`}> Email </p>
                                    <div className="form-floating px-4">
                                        <input type="email" className="form-control" id="floatingInput" placeholder="Masukan email" />
                                        <label for="floatingInput" className={`px-4 ${styles.holderInput}`}>Masukan email</label>
                                    </div>
                                    <p className={`mb-0 mt-4  ps-4 ${styles.labelInput}`}> Instagram </p>
                                    <div className="form-floating px-4">
                                        <input type="text" className="form-control" id="floatingInput" placeholder="Masukan nama Instagram" />
                                        <label for="floatingInput" className={`px-4 ${styles.holderInput}`}>Masukan nama Instagram</label>
                                    </div>
                                    <p className={`mb-0 mt-4  ps-4 ${styles.labelInput}`}> Nomor Telepon </p>
                                    <div className="form-floating px-4">
                                        <input type="text" className="form-control" id="floatingInput" placeholder="Masukan nomor telepon" />
                                        <label for="floatingInput" className={`px-4 ${styles.holderInput}`}>Masukan nomor telepon</label>
                                    </div>
                                    <p className={`mb-0 mt-4  ps-4 ${styles.labelInput}`}> Linkedin </p>
                                    <div className="form-floating px-4">
                                        <input type="text" className="form-control" id="floatingInput" placeholder="Masukan nama Linkedin" />
                                        <label for="floatingInput" className={`px-4 ${styles.holderInput}`}>Masukan nama Linkedin</label>
                                    </div>
                                    <div className="d-flex flex-column px-3">
                                        <button type="submit" className={`mt-5 ${styles.btnExp}`}>Simpan</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
index.layout = 'L1'
export default index