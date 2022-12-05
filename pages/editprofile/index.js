import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/EditProfile.module.css'

const index = () => {
    return (
        <>
        <Head>
        <title> Halaman Edit Profile</title>
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
                                <div className="d-flex flex-column mt-5">
                                    <p className={styles.textName}>Louis Tomlinson</p>
                                    <p className={styles.textProfession}>Web Developer</p>
                                </div>
                                <div className="d-flex flex-row">
                                    <Image src='/mappin.svg' height={25} width={10} alt='map' />
                                    <p className={`ms-2 ${styles.textLocation}`}>Purwokerto, Jawa Tengah</p>
                                </div>
                                <div className="d-flex flex-column">
                                    <p className={styles.textStatus}>Freelancer</p>
                                    {/* <p className={styles.textDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.</p> */}
                                </div>
                            </div>
                            <div className="leftsideBottom">
                                <button className={` col-12 mt-4 ${styles.btnSimpan}`}>Simpan</button>
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
                                    <p className={`mb-0  ps-4 ${styles.labelInput}`}> Nama lengkap </p>
                                    <div className="form-floating px-4">
                                        <input type="text" className="form-control" id="floatingInput" placeholder="Masukan nama lengkap" />
                                        <label for="floatingInput" className={`px-4 ${styles.holderInput}`}>Masukan nama lengkap</label>
                                    </div>
                                    <p className={`mb-0 mt-4  ps-4 ${styles.labelInput}`}> Job desk </p>
                                    <div className="form-floating px-4">
                                        <input type="text" className="form-control" id="floatingInput" placeholder="Masukan nama lengkap" />
                                        <label for="floatingInput" className={`px-4 ${styles.holderInput}`}>Masukan job desk</label>
                                    </div>
                                    <p className={`mb-0 mt-4  ps-4 ${styles.labelInput}`}> Domisili </p>
                                    <div className="form-floating px-4">
                                        <input type="text" className="form-control" id="floatingInput" placeholder="Masukan domisili" />
                                        <label for="floatingInput" className={`px-4 ${styles.holderInput}`}>Masukan domisili</label>
                                    </div>
                                    <p className={`mb-0 mt-4  ps-4 ${styles.labelInput}`}> Tempat kerja </p>
                                    <div className="form-floating px-4">
                                        <input type="text" className="form-control" id="floatingInput" placeholder="Masukan tempat kerja" />
                                        <label for="floatingInput" className={`px-4 ${styles.holderInput}`}>Masukan tempat kerja</label>
                                    </div>
                                    <p className={`mb-0 mt-4  ps-4 ${styles.labelInput}`}> Deskripsi singkat </p>
                                    <div className="form-floating px-4">
                                        <textarea className="form-control" placeholder="Tuliskan deskripsi singkat" id="floatingTextarea2"></textarea>
                                        <label for="floatingTextarea2" className={`px-4 ${styles.holderInput}`}>Tuliskan deskripsi singkat</label>
                                    </div>
                                </div>
                            </div>
                            <div className={`p-5 mt-5 ${styles.rightsideSkill}`}>
                                <div className="  ps-4 d-flex flex-column">
                                    <p className={styles.textTitle}>Skill </p>
                                </div>
                                <hr />
                                <div className=" d-flex flex-row mt-4">
                                    <div className="form-floating col-md-10 px-4">
                                        <input type="text" className="form-control " id="floatingInputSkill" placeholder="Java " />
                                        <label for="floatingInputSkill" className={`px-4 ${styles.holderInput}`}>Java</label>
                                    </div>
                                    <button className={`ms-3 ${styles.btnSimpan}`}>Simpan</button>
                                </div>
                            </div>
                            <div className={`p-5 mt-5 ${styles.rightsideExp}`}>
                                <div className="  ps-4 d-flex flex-column">
                                    <p className={styles.textTitle}> Pengalaman Kerja </p>
                                </div>
                                <hr />
                                <p className={`mb-0 mt-4  ps-4 ${styles.labelInput}`}> Posisi </p>
                                <div className="form-floating px-4">
                                    <input type="text" className="form-control" id="floatingInput" placeholder="web developer" />
                                    <label for="floatingInput" className={`px-4 ${styles.holderInput}`}>web developer</label>
                                </div>
                                <div className="d-flex flex-row">
                                    <div className="col-md-6 d-flex flex-column mt-3">
                                        <p className={`mb-0 mt-4  ps-4 ${styles.labelInput}`}> Nama Perusahaan </p>
                                        <div className="form-floating  px-4">
                                            <input type="text" className="form-control " id="floatingInputSkill" placeholder="PT Harus bisa " />
                                            <label for="floatingInputSkill" className={`px-4 ${styles.holderInput}`}>PT Harus bisa</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6 d-flex flex-column mt-3">
                                        <p className={`mb-0 mt-4  ps-4 ${styles.labelInput}`}> Bulan/tahun </p>
                                        <div className="form-floating px-4">
                                            <input type="text" className="form-control " id="floatingInputSkill" placeholder="Januari 2018 " />
                                            <label for="floatingInputSkill" className={`px-4 ${styles.holderInput}`}>Januari 2018</label>
                                        </div>
                                    </div>
                                </div>
                                <p className={`mb-0 mt-4  ps-4 ${styles.labelInput}`}> Deskripsi singkat </p>
                                <div className="form-floating px-4">
                                    <textarea className="form-control mb-4" placeholder="Tuliskan deskripsi singkat" id="floatingTextarea2"></textarea>
                                    <label for="floatingTextarea2" className={`px-4 ${styles.holderInput}`}>Tuliskan deskripsi singkat</label>
                                </div>
                                <hr />
                                <div className="d-flex flex-column px-3">
                                    <button className={`mt-5 ${styles.btnExp}`}>Tambah pengalaman kerja</button>
                                </div>
                            </div>
                            <div className={`p-5 mt-5 ${styles.rightsidePorto}`}>
                                <div className="  ps-4 d-flex flex-column">
                                    <p className={styles.textTitle}> Portofolio </p>
                                </div>
                                <hr />
                                <div className=" d-flex flex-column mt-4">
                                    <p className={`mb-0 mt-4  ps-4 ${styles.labelInput}`}> Nama aplikasi </p>
                                    <div className="form-floating px-4">
                                        <input type="text" className="form-control " id="floatingInputSkill" placeholder="Masukan nama aplikasi " />
                                        <label for="floatingInputSkill" className={`px-4 ${styles.holderInput}`}>Masukan nama aplikasi</label>
                                    </div>
                                    <p className={`mb-0 mt-4  ps-4 ${styles.labelInput}`}> Link repository </p>
                                    <div className="form-floating px-4">
                                        <input type="text" className="form-control " id="floatingInputSkill" placeholder="Masukan link repository" />
                                        <label for="floatingInputSkill" className={`px-4 ${styles.holderInput}`}>Masukan link repository</label>
                                    </div>
                                </div>
                                <p className={`mb-0 mt-4  ps-4 ${styles.labelInput}`}> Type portofolio </p>
                                <div className="d-flex flex-row ps-5">
                                    <div class="form-check me-5">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                        <label class="form-check-label" for="flexRadioDefault1">
                                            Aplikasi mobile
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked />
                                        <label class="form-check-label" for="flexRadioDefault2">
                                            Aplikasi web
                                        </label>
                                    </div>
                                </div>
                                <p className={`mb-0 mt-4  ps-4 ${styles.labelInput}`}> Upload gambar </p>
                                <div class="mb-3 px-4">
                                    <input class="form-control" type="file" id="formFile" />
                                </div>
                                <div className="d-flex flex-column px-3">
                                    <button className={`mt-5 ${styles.btnExp}`}>Tambah portofolio</button>
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