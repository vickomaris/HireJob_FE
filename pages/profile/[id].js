import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Profile.module.css'
import axios from 'axios'

//get by SSR
export async function getServerSideProps(context) {
    try {
        const { id } = context.params
        const response = await axios({
            method: 'GET',
            url: `${process.env.NEXT_PUBLIC_API_URL}/user/${id}`
        })
        // console.log(response.data)
        return {
            props: {
                data: response.data,
                error: false,
                errorMessage: ""
            }
        }
    }
    catch (error) {
        return {
            props: {
                data: [],
                error: true,
                errorMessage: "error API"
            }
        }
    }
}


const Detail = (props) => {
    const router = useRouter()
    const { id } = router.query
    const [data, setData] = useState([])
    const [experience, setExperience] = useState([])

    // const [iniLocal, setIniLocal] = useState('')

    useEffect(() => {
        // const id_user_localstorage = JSON.parse(localStorage.getItem("data"));
        // setIniLocal(id_user_localstorage)
        getPortofolio()
        getExperience()
    }, [])

    const getPortofolio = () => {
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/portofolio/user/${id}`)
            .then((response) => {
                console.log(response.data.data)
                setData(response.data.data)
            })
            .catch((error) => {
                console.error(error)
                // router.push('/login')
            })
    }
    const getExperience = () => {
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/experience/user/${id}`)
            .then((response) => {
                console.log(response.data.data)
                setExperience(response.data.data)
            })
            .catch((error) => {
                console.error(error)
                // router.push('/login')
            })
    }
    return (

        <div>
            {/* {JSON.stringify(data)} */}
            <section className="top">
                <div className="container-fluid">
                    <div className="row">
                        <div className={styles.topPurple}>
                        </div>
                    </div>
                </div>
            </section>
            {/* {JSON.stringify(props)} */}

            <section className={styles.main}>
                <div className="container">
                    <div className="row">
                        <div className={`col-md-4 p-5 ${styles.leftside}`}>
                            {/* {
                                props.data.map((item, index) => (
                                    <div key={index} className="d-flex flex-row justify-content-center">
                                        <Image src={`${process.env.NEXT_PUBLIC_API_URL}/${item.image_url}`} width={150} height={150} style={{ borderRadius: "100%" }} alt='luis' />
                                    </div>
                                ))
                            } */}
                            {/* {
                                props.data.map((item, index) => (
                                    <div key={index}> {item.id_user !== iniLocal.id_user ? ('') : (<div className="d-flex flex-row">
                                        <Link href="#">
                                            <button className='text-center'>edit</button>
                                        </Link></div>)} </div>
                                )
                                )} */}
                            {/* {
                                props.data.map((item, index) => (
                                    <div key={index} className="d-flex flex-row mt-3 justify-content-center">
                                        <Link href={`/editprofile/${item.id_user}`}>
                                            
                                            <button className={styles.btnEdit}> <Image src='/pencil.png' width={15} height={15} alt="pencil" /> Edit </button>
                                        </Link>
                                    </div>
                                ))
                            }
                            {
                                props.data.map((item, index) => (
                                    <div key={index} className="d-flex flex-column mt-5">
                                        <p className={styles.textName}>{item.username}</p>
                                        <p className={styles.textProfession}>{item.jobdesk}</p>
                                    </div>

                                ))
                            }
                            {
                                props.data.map((item, index) => (
                                    <div key={index} className="d-flex flex-row">
                                        <Image src='/mappin.svg' height={25} width={10} alt="location" />
                                        <p className={`ms-2 ${styles.textLocation}`}>{item.city}</p>
                                    </div>
                                ))
                            }
                            {
                                props.data.map((item, index) => (
                                    <div key={index} className="d-flex flex-column">
                                        <p className={styles.textStatus}>{item.statusjob}</p>
                                        <p className={styles.textDescription}>{item.description}</p>
                                        <Link href='/hire'>
                                            <button className={`mt-4 ${styles.btnHire}`}> Hire</button>
                                        </Link>

                                        <Link href='/home'>
                                            <button className={`mt-4 ${styles.btnHome}`}> Back Home</button>
                                        </Link>

                                    </div>
                                ))
                            } */}
                            < p className={`mt-4 ${styles.titleSkill}`}>Skill</p>
                            <div className="d-flex flex-row">
                                <ul className='p-0'>
                                    <li className={`${styles.textSkill} px-3 py-2 mt-2 me-2`}>Pyhton</li>
                                    <li className={`${styles.textSkill} px-3 py-2 mt-2 me-2 `}>Laravel</li>
                                    <li className={`${styles.textSkill} px-3 py-2 mt-2 me-2 `}>Golang</li>
                                    <li className={`${styles.textSkill} px-3 py-2 mt-2 me-2`}>C++</li>
                                    <li className={`${styles.textSkill} px-3 py-2 mt-2 me-2 `}>JavaScript</li>
                                    <li className={`${styles.textSkill} px-3 py-2 mt-2 me-2 `}>HTML</li>
                                    <li className={`${styles.textSkill} px-3 py-2 mt-2 me-2`}>PHP</li>
                                    <li className={`${styles.textSkill} px-3 py-2 mt-2 me-2 `}>Kotlin</li>
                                    <li className={`${styles.textSkill} px-3 py-2 mt-2 me-2 `}>Swift</li>

                                </ul>
                            </div>

                        </div>
                        <div className={`col-md-7 p-5 ms-4 ${styles.rightside}`}>
                            <div className="d-flex flex-row">
                                <p className='me-3' type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">Portofolio</p>
                                <p className='ms-3' type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample">Pengalaman kerja</p>
                            </div>

                            <div className="d-flex flex-row">
                                <div className="row">
                                    {/* {data == "" ? (
                                        <p> Protofolio Masih Kosong </p>
                                    ) : (
                                        data.map((item, index) => (
                                            <div key={index} className="col-md-4 mt-4">
                                                <div className="collapse" id="collapseExample">
                                                    <div className={styles.portofolioCard}>
                                                        <Image src={`${process.env.NEXT_PUBLIC_API_URL}/${item.imageporto_url}`} width={150} height={150} alt="" className={styles.gambar} />
                                                        <p className={`text-center mt-3 ${styles.titlePortofolio}`}>
                                                            {item.name}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    )
                                    } */}
                                    <div className="col-md-12">
                                        <div className="collapse" id="collapseExample2">
                                            <div className={`card ${styles.cardCostum}`}>
                                                <div className="row g-0">
                                                    {/* <div className="col-md-3">
                                                        <Image src='/tokped.jpg' width={150} height={150} alt="..." className={styles.gambarPK} />
                                                    </div> */}
                                                    {/* {experience == "" ? (
                                                        <p> Experience Masih Kosong </p>
                                                    ) : (
                                                        experience.map((item, index) => (
                                                            <div key={index} className="col-md-9">
                                                                <div className="card-body">
                                                                    <p className={styles.textProfessionPK}>{item.posisi}</p>
                                                                    <p className={styles.textCompanyPK}>{item.companyexp}</p>
                                                                    <div className="d-flex flex-row">
                                                                        <p className={styles.textDatePK}>{item.startyear} - {item.endyear}</p>
                                                                    </div>
                                                                    <p className={`mt-2 ${styles.textDescriptionPK}`}>{item.descriptionexp}</p>
                                                                    <hr />
                                                                </div>
                                                            </div>
                                                        ))
                                                    )
                                                    } */}
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </div >
    )
}
Detail.layout = 'L1'
export default Detail
