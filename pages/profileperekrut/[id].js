import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/ProfilePerekrut.module.css'
import axios from 'axios'

//get by SSG
// export async function getStaticProps(context) {
//   try {
//       const { id } = context.params
//       const response = await axios({
//           method: "GET",
//           url: `${process.env.NEXT_PUBLIC_API_URL}/perekrut/${id}`
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
export async function getStaticProps(context) {
  try {
    const {id} = context.params;
    // console.log("iniid",id)
    // const response = await axios({
    //     method: 'GET',
    //     url: `${process.env.NEXT_PUBLIC_API_URL}/recruiter/list/${id}`,
    // })
    
    const resultList = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/perekrut/${id}`,
      {
        method: "GET",
      }
    )
    
    const data = await resultList.json();
    // console.log("iniprint",data)
    return {
        props: {
            data: data
        },
        revalidate: 1,
        notFound: false
    }
  } 
  
  catch (err) {
    return {
        props: {
            data: null
        },
        revalidate: 1,
        notFound: true
    }
  }
}

// Generates `/posts/1` and `/posts/2`
export async function getStaticPaths() {
  const response = await axios({
      method: "GET",
      url: `${process.env.NEXT_PUBLIC_API_URL}/perekrut/`
  })
  // console.log("inidatanya",response.data.data.rows)
  const paths = response.data.data.rows.map((item) => {
      return { params: { id: item.id_perekrut.toString() } }
  })
  
  // console.log(paths)
  return {
      //   paths: [{ params: { id: '97' } }, { params: { id: '100' } }],
      paths,
      fallback:"blocking", // can also be true or 'blocking'
  }
}

const Index = (props) => {
  console.log(props.data)
  // const router = useRouter()
  // const { id } = router.query
  // const [data, setData] = useState([])
  // const [iniLocal, setIniLocal] = useState('')

  // useEffect(() => {
  //   const id_perekrut_localstorage = JSON.parse(localStorage.getItem("data"));
  //   setIniLocal(id_perekrut_localstorage)
  //   getId()
  // }, [])

  // const getId = () => {
  //   axios.get(`${process.env.NEXT_PUBLIC_API_URL}/perekrut/${id}`)
  //     .then((response) => {
  //       console.log(response.data)
  //       setData(response.data)
  //     })
  //     .catch((error) => {
  //       console.error(error)
  //       // router.push('/login')
  //     })
  // }
  return (
    <>
      {/* {JSON.stringify(props.data)}
      {console.log(props.data)} */}
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
                props.data.map((item, index) => (
                  <div key={index} className="d-flex flex-column align-items-center mt-4">
                    <span className={styles.nameCompany}>{item.perusahaan}</span>
                    <span className={styles.bidangCompany}>{item.bidang == null ? (<span>.....</span>) : (<span>{item.bidang}</span>)}</span>
                  </div>
                ))
              }
              {
                props.data.map((item, index) => (
                  <div key={index} className="d-flex flex-row justify-content-center">
                    <Image src='/mappin.svg' height={25} width={10} alt="icMap" />
                    <span className={`ms-2 ${styles.textLocation}`}>{item.kota == null ? (<span>.....</span>) : (<span>{item.kota}</span>)}</span>
                  </div>
                ))
              }
              {
                props.data.map((item, index) => (
                  <div key={index} className="d-flex flex-column align-items-center">
                    <span className={`col-md-7 text-center ${styles.textDeskripsi}`}>{item.deskripsi == null ? (<span>.....</span>) : (<span>{item.deskripsi}</span>)}</span>
                    <Link href={`/editperekrut/${item.id_perekrut}`}>
                      <button className={`mt-3 ${styles.btnEdit}`}> Edit Profile</button>
                    </Link>
                  </div>
                ))
              }
              <div className="d-flex flex-column align-items-center">
                {
                  props.data.map((item, index) => (
                    <div key={index} className="d-flex flex-row mt-5 col-md-2">
                      <Image src='/iconMail.svg' height={30} width={30} alt="icEmail" />
                      <span className={`ms-4 ${styles.textContact}`}>{item.email == null ? (<span>.....</span>) : (<span>{item.email}</span>)}</span>
                    </div>
                  ))
                }
                {
                  props.data.map((item, index) => (
                    <div key={index} className="d-flex flex-row mt-3 col-md-2">
                      <Image src='/iconIg.svg' height={30} width={30} alt="icInsta" />
                      <span className={`ms-4 ${styles.textContact}`}>{item.instagram == null ? (<span>.....</span>) : (<span>{item.instagram}</span>)}</span>
                    </div>
                  ))
                }
                {
                  props.data.map((item, index) => (
                    <div key={index} className="d-flex flex-row mt-3 col-md-2">
                     
                      <Image src='/iconPhone.png' height={30} width={30} alt="icPhone" />
                      <span className={`ms-4 ${styles.textContact}`}>{item.phone == null ? (<span>.....</span>) : (<span>{item.phone}</span>)}</span>
                      
                    </div>
                  ))
                }
                {
                  props.data.map((item, index) => (
                    <div key={index} className="d-flex flex-row mt-3 col-md-2">
                      <Image src='/iconLinkedin.png' height={30} width={30} alt="icLinkedin" />
                      <span className={`ms-4 ${styles.textContact}`}>{item.linkedin == null ? (<span>.....</span>) : (<span>{item.linkedin}</span>)}</span>
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