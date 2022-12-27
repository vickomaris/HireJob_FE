import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Hire.module.css'
import { useRouter } from 'next/router'
import axios from "axios";

const Index = () => {
    const router = useRouter();
    const [data, setData] = useState([]);
    const { id } = router.query;

    useEffect(() => {
        axios
            .get(`${process.env.NEXT_PUBLIC_API_URL}/user/${id}`)
            .then((response) => {
                setData(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
                // router.push("/konfirmasi");
            });
    }, [id, router]);
    return (
        <>
            <Head>
                <title> Halaman Hire</title>
                <link rel='icon' href='/logoheaderputih.svg' />
            </Head>
            {JSON.stringify(data)}
            <section className={styles.main}>
                <div className="container">
                    <div className="row">
                        {
                            data.map((item, index) => (
                                <div key={index} className={`col-md-4 p-5 mt-5 ${styles.leftside}`}>
                                    <div className="d-flex flex-row justify-content-center">
                                        <Image src={item.image_url ? item.image_url : `${process.env.NEXT_PUBLIC_API_URL}/${item.image}`} width={150} height={150} alt="avatar" style={{ borderRadius: "100%" }} />
                                    </div>
                                    <div className="d-flex flex-column mt-5">
                                        <p className={styles.textName}>{item.username}</p>
                                        <p className={styles.textProfession}>{item.jobdesk}</p>
                                    </div>
                                    <div className="d-flex flex-row">
                                        <Image src='/mappin.svg' height={25} width={10} alt="pin" />
                                        <p className={`ms-2 ${styles.textLocation}`}>{item.city}</p>
                                    </div>
                                    <div className="d-flex flex-column">
                                        <p className={styles.textDescription}>{item.description}</p>
                                    </div>
                                    <p className={`mt-4 ${styles.titleSkill}`}>Skill</p>
                                    <div className="d-flex flex-row">
                                        {item.skill != null ? (
                                            item.skill.split(",").map((item, index) => (
                                                <p
                                                    key={index}
                                                    className={`m-1 p-1 ${styles.textSkill}`}>
                                                    {item}
                                                </p>
                                            ))
                                        ) : (
                                            <p className="text-secondary">No skill</p>
                                        )}
                                    </div>
                                </div>
                            ))
                        }
                        <div className={`col-md-7 p-5 ${styles.rightside}`}>
                            <div className={`ps-5 ${styles.rightsideDatadiri}`}>
                                <div className="  ps-4 d-flex flex-column">
                                    <p className={styles.textTitle}>Hubungi Lous Tomlinson </p>
                                    <p className={styles.textSubTitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
                                </div>

                                <div className="d-flex flex-column mt-4">
                                    <p className={`mb-0  ps-4 ${styles.labelInput}`}> Tujuan tentang pesan ini </p>
                                    <div className="form-floating px-4">
                                        <input type="text" className="form-control" id="floatingInput" placeholder="Projek" />
                                        <label for="floatingInput" className={`px-4 ${styles.holderInput}`}>Projek</label>
                                    </div>
                                    <p className={`mb-0 mt-4  ps-4 ${styles.labelInput}`}> Nama lengkap </p>
                                    <div className="form-floating px-4">
                                        <input type="text" className="form-control" id="floatingInput" placeholder="Masukan nama lengkap" />
                                        <label for="floatingInput" className={`px-4 ${styles.holderInput}`}>Masukan nama lengkap</label>
                                    </div>
                                    <p className={`mb-0 mt-4  ps-4 ${styles.labelInput}`}> Email </p>
                                    <div className="form-floating px-4">
                                        <input type="email" className="form-control" id="floatingInput" placeholder="Masukan email" />
                                        <label for="floatingInput" className={`px-4 ${styles.holderInput}`}>Masukan email</label>
                                    </div>
                                    <p className={`mb-0 mt-4  ps-4 ${styles.labelInput}`}> No Handpone </p>
                                    <div className="form-floating px-4">
                                        <input type="text" className="form-control" id="floatingInput" placeholder="Masukan no handpone" />
                                        <label for="floatingInput" className={`px-4 ${styles.holderInput}`}>Masukan no handpone</label>
                                    </div>
                                    <p className={`mb-0 mt-4  ps-4 ${styles.labelInput}`}> Deskripsi singkat </p>
                                    <div className="form-floating px-4">
                                        <textarea className={`form-control ${styles.cstmArea}`} placeholder="Deskripsikan/jelaskan lebih detail" id="floatingTextarea2"></textarea>
                                        <label for="floatingTextarea2" className={`px-4 ${styles.holderInput}`}>Deskripsikan/jelaskan lebih detail</label>
                                    </div>

                                    <div className="d-flex flex-column px-3">
                                        <button type="submit" className={`mt-5 ${styles.btnSimpan}`}>Hire</button>
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

Index.layout = 'L1'

export default Index