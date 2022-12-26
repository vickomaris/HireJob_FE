import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/editPerekrut.module.css'
import axios from 'axios'

const UpdatePerekrut = () => {
    const router = useRouter()
    // const { id } = router.query

    const [data, setData] = useState([])
    const [update, setUpdate] = useState({
        username: data.username,
        perusahaan: data.perusahaan,
        jabatan: data.jabatan,
        phone: data.phone,
        bidang: data.bidang,
        kota: data.kota,
        deskripsi: data.deskripsi,
        instagram: data.instagram,
        linkedin: data.linkedin
    })

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("data"));
        const id = data.id_perekrut
        console.log(id)
        getId(id)
    }, [])

    const getId = (id) => {
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/perekrut/${id}`)
            .then((response) => {
                console.log(response.data)
                setData(response.data)
            })
            .catch((error) => {
                console.error(error)
                // router.push('/home')
            })
    }

    const handlePost = (e) => {
        const data = JSON.parse(localStorage.getItem("data"));
        const id = data.id_perekrut
        e.preventDefault();
        const form = {
            username: update.username,
            perusahaan: update.perusahaan,
            jabatan: update.jabatan,
            phone: update.phone,
            bidang: update.bidang,
            kota: update.kota,
            deskripsi: update.deskripsi,
            instagram: update.instagram,
            linkedin: update.linkedin
        }
        axios
            .put(`${process.env.NEXT_PUBLIC_API_URL}/perekrut/${id}`, form)
            .then((res) => {
                console.log(res);
                // setImage("");
                alert("Update Success");
                router.push('/homeperekrut');
            })
            .catch((err) => {
                console.log(err);
                alert("Update Failed");
            })
    };
    const deletePerekrut = () => {
        const data = JSON.parse(localStorage.getItem("data"));
        const id_perekrut = data.id_perekrut;
        axios
            .delete(`${process.env.NEXT_PUBLIC_API_URL}/perekrut/${id_perekrut}`)
            .then((res) => {
                console.log(res);
                alert("Profile Terhapus");
                router.push('/auth/login');
            })
            .catch((err) => {
                console.log(err);
            });
    }
    return (
        <>
            <Head>
                <title> Halaman Edit Perusahaan</title>
                <link rel='icon' href='/logoheaderputih.svg' />
            </Head>
            {/* {JSON.stringify(data)} */}
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
                                {/* <div className="d-flex flex-row mt-3 justify-content-center">
                                    <button className={styles.btnEdit}> <Image src='/pencil.png' width={15} height={15} /> Edit </button>
                                </div> */}
                                {
                                    data.map((item, index) => (
                                        <div key={index} className="d-flex flex-column">
                                            <p className={`mt-5 ${styles.textName}`}>{item.perusahaan == null ? (<p>.....</p>) : (<p>{item.perusahaan}</p>)}</p>
                                            <p className={`mt-0 ${styles.textProfession}`}>{item.bidang == null ? (<p>.....</p>) : (<p>{item.bidang}</p>)}</p>
                                        </div>
                                    ))
                                }
                                {
                                    data.map((item, index) => (
                                        <div key={index} className="d-flex flex-row">
                                            <Image src='/mappin.svg' height={25} width={10} alt='map' />
                                            <p className={`ms-2 ${styles.textLocation}`}>{item.kota == null ? (<p>.....</p>) : (<p>{item.kota}</p>)}</p>
                                        </div>
                                    ))
                                }
                            </div>
                            {
                                data.map((item, index) => (
                                    <div key={index} className="leftsideBottom">
                                        <button onClick={(e) => deletePerekrut(e)} className={`  col-12 mt-4 ${styles.btnSimpan}`}>Delete</button>
                                        <Link href={`/profileperekrut/${item.id_perekrut}`}>
                                            <button className={` col-12 mt-4 ${styles.btnBatal}`}>Batal</button>
                                        </Link>
                                    </div>
                                ))
                            }
                        </div>
                        <div className={`col-md-8 ${styles.rightside}`}>
                            <div className={`p-5 ${styles.rightsideDatadiri}`}>
                                <div className="  ps-4 d-flex flex-column">
                                    <p className={styles.textTitle}>Data diri </p>
                                </div>
                                <hr />
                                <form onSubmit={(e) => handlePost(e)}>
                                    {
                                        data.map((item, index) => (
                                            <div key={index} className="d-flex flex-column mt-4">
                                                <p className={`mb-0  ps-4 ${styles.labelInput}`}> Nama Perusahaan </p>
                                                <div className="form-floating px-4">
                                                    <input type="text"
                                                        className="form-control"
                                                        id="floatingInput"
                                                        placeholder="Masukan nama perusahan"
                                                        name="perusahaan"
                                                        defaultValue={item.perusahaan}
                                                        onChange={(e) => setUpdate({ ...update, perusahaan: e.target.value })} />
                                                    <label for="floatingInput" className={`px-4 ${styles.holderInput}`}>Masukan nama perusahan</label>
                                                </div>
                                                <p className={`mb-0 mt-4  ps-4 ${styles.labelInput}`}> Bidang </p>
                                                <div className="form-floating px-4">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="floatingInput"
                                                        placeholder="Masukan bidang perusahaan ex : Financial"
                                                        name="bidang"
                                                        defaultValue={item.bidang}
                                                        onChange={(e) => setUpdate({ ...update, bidang: e.target.value })} />
                                                    <label for="floatingInput" className={`px-4 ${styles.holderInput}`}>Masukan bidang perusahaan ex : Financial</label>
                                                </div>
                                                <p className={`mb-0 mt-4  ps-4 ${styles.labelInput}`}> Kota </p>
                                                <div className="form-floating px-4">
                                                    <input type="text"
                                                        className="form-control"
                                                        id="floatingInput"
                                                        placeholder="Masukan kota"
                                                        name="kota"
                                                        defaultValue={item.kota}
                                                        onChange={(e) => setUpdate({ ...update, kota: e.target.value })} />
                                                    <label for="floatingInput" className={`px-4 ${styles.holderInput}`}>Masukan kota</label>
                                                </div>
                                                <p className={`mb-0 mt-4  ps-4 ${styles.labelInput}`}> Deskripsi singkat </p>
                                                <div className="form-floating px-4">
                                                    <textarea className="form-control"
                                                        placeholder="Tuliskan deskripsi singkat"
                                                        id="floatingTextarea2"
                                                        name="deskripsi"
                                                        defaultValue={item.deskripsi}
                                                        onChange={(e) => setUpdate({ ...update, deskripsi: e.target.value })}></textarea>
                                                    <label for="floatingTextarea2" className={`px-4 ${styles.holderInput}`}>Tuliskan deskripsi singkat</label>
                                                </div>
                                                <p className={`mb-0 mt-4  ps-4 ${styles.labelInput}`}> Email </p>
                                                <div className="form-floating px-4">
                                                    <input type="email"
                                                        className="form-control"
                                                        id="floatingInput"
                                                        placeholder="Masukan email"
                                                        name="email"
                                                        defaultValue={item.email}
                                                        onChange={(e) => setUpdate({ ...update, email: e.target.value })} />
                                                    <label for="floatingInput" className={`px-4 ${styles.holderInput}`}>Masukan email</label>
                                                </div>
                                                <p className={`mb-0 mt-4  ps-4 ${styles.labelInput}`}> Instagram </p>
                                                <div className="form-floating px-4">
                                                    <input type="text"
                                                        className="form-control"
                                                        id="floatingInput"
                                                        placeholder="Masukan nama Instagram"
                                                        name="instagram"
                                                        defaultValue={item.instagram}
                                                        onChange={(e) => setUpdate({ ...update, instagram: e.target.value })} />
                                                    <label for="floatingInput" className={`px-4 ${styles.holderInput}`}>Masukan nama Instagram</label>
                                                </div>
                                                <p className={`mb-0 mt-4  ps-4 ${styles.labelInput}`}> Nomor Telepon </p>
                                                <div className="form-floating px-4">
                                                    <input type="text"
                                                        className="form-control"
                                                        id="floatingInput"
                                                        placeholder="Masukan nomor telepon"
                                                        name="phone"
                                                        defaultValue={item.phone}
                                                        onChange={(e) => setUpdate({ ...update, phone: e.target.value })} />
                                                    <label for="floatingInput" className={`px-4 ${styles.holderInput}`}>Masukan nomor telepon</label>
                                                </div>
                                                <p className={`mb-0 mt-4  ps-4 ${styles.labelInput}`}> Linkedin </p>
                                                <div className="form-floating px-4">
                                                    <input type="text"
                                                        className="form-control"
                                                        id="floatingInput"
                                                        placeholder="Masukan nama Linkedin"
                                                        name="linkedin"
                                                        defaultValue={item.linkedin}
                                                        onChange={(e) => setUpdate({ ...update, linkedin: e.target.value })} />
                                                    <label for="floatingInput" className={`px-4 ${styles.holderInput}`}>Masukan nama Linkedin</label>
                                                </div>
                                                <div className="d-flex flex-column px-3">
                                                    <button type="submit" className={`mt-5 ${styles.btnExp}`}>Simpan</button>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

UpdatePerekrut.layout = 'L1'
export default UpdatePerekrut