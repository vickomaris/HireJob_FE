import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Profile.module.css'

const Index = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("data"));
    const id_user = data.id_user
    // console.log(id)
    getId(id_user)
  }, [])

  const getId = (id_user) => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/${id_user}`)
      .then((response) => {
        console.log(response.data)
        setData(response.data)
      })
      .catch((error) => {
        console.error(error)
        // router.push('/login')
      })
  }

  return (
    <>
      {/* {JSON.stringify(data)} */}
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
            <div className={`col-md-4 p-5 ${styles.leftside}`}>
              <div className="d-flex flex-row justify-content-center">
                <Image src='/luis.png' width={150} height={150} alt="avatar" />
              </div>
              {
                data.map((item, index) => (
                  <div key={index} className="d-flex flex-row mt-3 justify-content-center">
                    <Link href={`/editprofile/${item.id_user}`}>
                      {/* {localStorage.setItem("data", JSON.stringify(response.data.token.data));} */}
                      <button className={styles.btnEdit}> <Image src='/pencil.png' width={15} height={15} alt="pencil" /> Edit </button>
                    </Link>
                  </div>
                ))
              }
              {
                data.map((item, index) => (
                  <div key={index} className="d-flex flex-column mt-5">
                    <p className={styles.textName}>{item.username}</p>
                    <p className={styles.textProfession}>{item.jobdesk == null ? (<p>.....</p>) : (<p>{item.jobdesk}</p>)} </p>
                  </div>
                ))
              }
              {
                data.map((item, index) => (
                  <div key={index} className="d-flex flex-row">
                    <Image src='/mappin.svg' height={25} width={10} alt="pin" />
                    <p className={`ms-2 ${styles.textLocation}`}>{item.city == null ? (<p>.....</p>) : (<p>{item.city}</p>)}</p>
                  </div>
                ))
              }
              {
                data.map((item, index) => (
                  <div key={index} className="d-flex flex-column">
                    <p className={styles.textStatus}>{item.statusjob == null ? (<p>.....</p>) : (<p>{item.statusjob}</p>)}</p>
                    <p className={styles.textDescription}>{item.description == null ? (<p>.....</p>) : (<p>{item.description}</p>)}</p>
                    <button className={`mt-4 ${styles.btnHire}`}>Hire</button>
                  </div>
                ))
              }
              <p className={`mt-4 ${styles.titleSkill}`}>Skill</p>
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
              {
                data.map((item, index) => (
                  <div key={index} className="d-flex flex-row mt-5">
                    <Image src='/iconMail.svg' height={30} width={30} alt="mail" />
                    <p className={`ms-4 ${styles.textContact}`}>{item.email == null ? (<p>.....</p>) : (<p>{item.email}</p>)}</p>
                  </div>
                ))
              }
              {
                data.map((item, index) => (
                  <div key={index} className="d-flex flex-row mt-3">
                    <Image src='/iconIg.svg' height={30} width={30} alt="ig" />
                    <p className={`ms-4 ${styles.textContact}`}>{item.ig == null ? (<p>.....</p>) : (<p>{item.ig}</p>)}</p>
                  </div>
                ))
              }
              {
                data.map((item, index) => (
                  <div key={index} className="d-flex flex-row mt-3">
                    <Image src='/iconGithub.svg' height={30} width={30} alt="github" />
                    <p className={`ms-4 ${styles.textContact}`}>{item.github == null ? (<p>.....</p>) : (<p>{item.github}</p>)}</p>
                  </div>
                ))
              }
              {
                data.map((item, index) => (
                  <div key={index} className="d-flex flex-row mt-3">
                    <Image src='/iconGitlab.svg' height={30} width={30} alt="gitlab" />
                    <p className={`ms-4 ${styles.textContact}`}>{item.gitlab == null ? (<p>.....</p>) : (<p>{item.gitlab}</p>)}</p>
                  </div>
                ))
              }
            </div>
            <div className={`col-md-7 p-5 ms-4 ${styles.rightside}`}>
              <div className="d-flex flex-row">
                <p className='me-3' type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">Portofolio</p>
                <p className='ms-3' type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample">Pengalaman kerja</p>
              </div>

              <div className="d-flex flex-row">
                <div className="row">
                  <div className="col-md-4 mt-4">
                    <div className="collapse" id="collapseExample">
                      <div className={styles.portofolioCard}>
                        <Image src='/reminder.jpg' width={150} height={150} alt="reminder" className={styles.gambar} />
                        <p className={`text-center mt-3 ${styles.titlePortofolio}`}>
                          Remainder app
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 mt-4">
                    <div className="collapse" id="collapseExample">
                      <div className={styles.portofolioCard}>
                        <Image src='/sosmed.jpg' width={150} height={150} alt="sosmed" className={styles.gambar} />
                        <p className={`text-center mt-3 ${styles.titlePortofolio}`}>
                          Social media app
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 mt-4">
                    <div className="collapse" id="collapseExample">
                      <div className={styles.portofolioCard}>
                        <Image src='/management.jpg' width={150} height={150} alt="management" className={styles.gambar} />
                        <p className={`text-center mt-3 ${styles.titlePortofolio}`}>
                          Project management web
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 mt-4">
                    <div className="collapse" id="collapseExample">
                      <div className={styles.portofolioCard}>
                        <Image src='/reminder2.jpg' width={150} height={150} alt="reminder" className={styles.gambar} />
                        <p className={`text-center mt-3 ${styles.titlePortofolio}`}>
                          Remainder app
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 mt-4">
                    <div className="collapse" id="collapseExample">
                      <div className={styles.portofolioCard}>
                        <Image src='/sosmed2.jpg' width={150} height={150} alt="sosmed" className={styles.gambar} />
                        <p className={`text-center mt-3 ${styles.titlePortofolio}`}>
                          Social media app
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 mt-4">
                    <div className="collapse" id="collapseExample">
                      <div className={styles.portofolioCard}>
                        <Image src='/management2.jpg' width={150} height={150} alt="management" className={styles.gambar} />
                        <p className={`text-center mt-3 ${styles.titlePortofolio}`}>
                          Project management web
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="collapse" id="collapseExample2">
                      <div className={`card ${styles.cardCostum}`}>
                        <div className="row g-0">
                          <div className="col-md-3">
                            <Image src='/tokped.jpg' width={150} height={150} alt="tokped" className={styles.gambarPK} />
                          </div>
                          <div className="col-md-9">
                            <div className="card-body">
                              <p className={styles.textProfessionPK}>Enginer</p>
                              <p className={styles.textCompanyPK}>Tokopedia</p>
                              <div className="d-flex flex-row">
                                <p className={styles.textDatePK}>July 2019 - January 2020</p>
                                <p className={`ms-3 ${styles.textMonthPK}`}> 6 months</p>
                              </div>
                              <p className={`mt-2 ${styles.textDescriptionPK}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.</p>
                              <hr />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={`card ${styles.cardCostum}`}>
                        <div className="row g-0">
                          <div className="col-md-3">
                            <Image src='/tokped.jpg' width={150} height={150} alt="toped" className={styles.gambarPK} />
                          </div>
                          <div className="col-md-9">
                            <div className="card-body">
                              <p className={styles.textProfessionPK}>Enginer</p>
                              <p className={styles.textCompanyPK}>Tokopedia</p>
                              <div className="d-flex flex-row">
                                <p className={styles.textDatePK}>July 2019 - January 2020</p>
                                <p className={`ms-3 ${styles.textMonthPK}`}> 6 months</p>
                              </div>
                              <p className={`mt-2 ${styles.textDescriptionPK}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.</p>
                              <hr />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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