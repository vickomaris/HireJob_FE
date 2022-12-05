import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/ProfilePerekrut.module.css'


// export async function getStaticProps(context) {
//   try {
//       const { id_perekrut } = context.params
//       const response = await axios({
//           method: "GET",
//           url: `${process.env.NEXT_PUBLIC_API_URL}/perekrut/${id_perekrut}`
//       })
//       return {
//           props: {
//               data: response.data
//           }, // will be passed to the page component as props
//           revalidate: 15,
//           notFound: false
//       }
//   } catch (error) {
//       return {
//           props: {
//               data: null
//           },
//           revalidate: 10,
//           notFound: true
          
//       }
//   }
// }

const Index = () => {

  const [data, setData] = useState([])
  
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("data"));
    const id_perekrut = data.id_perekrut
    // console.log(id)
    getId(id_perekrut)
  }, [])

  const getId = (id_perekrut) => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/perekrut/${id_perekrut}`)
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
        <title> Halaman Profile Perusahaan</title>
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
            <div className={styles.mainProfile}>
              <div className="d-flex flex-row justify-content-center">
                <Image src='/luis.png' width={150} height={150} alt="imgAva" />
              </div>
              {
                data.map((item, index) => (
                  <div key={index} className="d-flex flex-column align-items-center mt-4">
                    <p className={styles.nameCompany}>{item.perusahaan}</p>
                    <p className={styles.bidangCompany}>{item.bidang == null ? (<p>.....</p>) : (<p>{item.bidang}</p>)}</p>
                  </div>
                ))
              }
              {
                data.map((item, index) => (
                  <div key={index} className="d-flex flex-row justify-content-center">
                    <Image src='/mappin.svg' height={25} width={10} alt="icMap" />
                    <p className={`ms-2 ${styles.textLocation}`}>{item.kota == null ? (<p>.....</p>) : (<p>{item.kota}</p>)}</p>
                  </div>
                ))
              }
              {
                data.map((item, index) => (
                  <div key={index} className="d-flex flex-column align-items-center">
                    <p className={`col-md-7 text-center ${styles.textDeskripsi}`}>{item.deskripsi == null ? (<p>.....</p>) : (<p>{item.deskripsi}</p>)}</p>
                    <Link href={`/editperekrut/${item.id_perekrut}`}>
                      <button className={`mt-3 ${styles.btnEdit}`}> Edit Profile</button>
                    </Link>
                  </div>
                ))
              }
              <div className="d-flex flex-column align-items-center">
                {
                  data.map((item, index) => (
                    <div key={index} className="d-flex flex-row mt-5 col-md-2">
                      <Image src='/iconMail.svg' height={30} width={30} alt="icEmail" />
                      <p className={`ms-4 ${styles.textContact}`}>{item.email == null ? (<p>.....</p>) : (<p>{item.email}</p>)}</p>
                    </div>
                  ))
                }
                {
                  data.map((item, index) => (
                    <div key={index} className="d-flex flex-row mt-3 col-md-2">
                      <Image src='/iconIg.svg' height={30} width={30} alt="icInsta" />
                      <p className={`ms-4 ${styles.textContact}`}>{item.instagram == null ? (<p>.....</p>) : (<p>{item.instagram}</p>)}</p>
                    </div>
                  ))
                }
                {
                  data.map((item, index) => (
                    <div key={index} className="d-flex flex-row mt-3 col-md-2">
                      {/* <Link href={`/profileperekrut/${item.id_perekrut}`}>  */}
                      <Image src='/iconPhone.png' height={30} width={30} alt="icPhone" />
                      <p className={`ms-4 ${styles.textContact}`}>{item.phone == null ? (<p>.....</p>) : (<p>{item.phone}</p>)}</p>
                      {/* </Link> */}
                    </div>
                  ))
                }
                {
                  data.map((item, index) => (
                    <div key={index} className="d-flex flex-row mt-3 col-md-2">
                      <Image src='/iconLinkedin.png' height={30} width={30} alt="icLinkedin" />
                      <p className={`ms-4 ${styles.textContact}`}>{item.linkedin == null ? (<p>.....</p>) : (<p>{item.linkedin}</p>)}</p>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

Index.layout = 'L2'
export default Index