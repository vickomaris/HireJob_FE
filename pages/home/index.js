import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/HomeLanding.module.css'
// import { useRouter } from 'next/router'

// export async function getServerSideProps(context) {
//   try {
//     const response = await axios({
//       method: 'GET',
//       url: `${process.env.NEXT_PUBLIC_API_URL
//       }/user?sort=${sort}&asc=${asc}&limit=${limit}${
//         page ? `&page=${page}` : ""
//       }`
//     })
//     console.log(response.data)
//     return {
//       props: {
//         data: response.data,
//         error: false,
//         errorMessage: ""
//       }
//     }
//   }
//   catch (error) {
//     return {
//       props: {
//         data: [],
//         error: true,
//         errorMessage: "error API"
//       }
//     }
//   }
// }


const Index = () => {
  // const router = useRouter();
  // const data = JSON.parse(localStorage.getItem('data'));

  // console.log(router.query)
  const [data, setData] = useState([])
  const [sort, setSort] = useState('username')
  const [asc, setAsc] = useState('asc')
  const [page, setPage] = useState(1)
  const [data2, setData2] = useState([])
  const [username, setName] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (username != "") {
      axios
        .get(`${process.env.NEXT_PUBLIC_API_URL}/user/search/${username}`)
        .then((res) => {
          setData2(res.data.data.rows);
          // router.push(`/home/home?username=${username}`);
        });
    }
  };

  useEffect(() => {
    getDatauser(sort, asc, 5, page)
  }, [sort, asc, page])

  const getDatauser = (sort, asc, limit, page) => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL
    }/user?sort=${sort}&asc=${asc}&limit=${limit}${
      page ? `&page=${page}` : ""
    }`)
      .then((response) => {
        console.log(response.data.data.rows)
        setData(response.data.data.rows)
      })
      .catch((error) => {
        console.error(error)
        // router.push('/login')
      })
  }

  const handleSorting = () => {
    if (sort == "username") {
      setSort("id_user");
    } else {
      setSort("username");
    }
    getDatauser(sort, asc, 5, page)
  };

  const handleSortasc = () => {
    if (asc == "asc") {
      setAsc("desc");
    } else {
      setAsc("asc");
    }
    getDatauser(sort, asc, 5, page)
  };

  const NextPage = () => {
    setPage(page + 1);
    getDatauser(sort, asc, 5, page)
    console.log(page);
  };
  const PreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
      console.log(page);
      getDatauser(sort, asc, 5, page-1)
    }
  };

  return (
    <>
      <Head>
        <title> Halaman Home</title>
        <link rel='icon' href='/logoheaderputih.svg' />
      </Head>
      {/* {JSON.stringify(data)} */}
      <section className="topjobs">
        <div className="container-fluid">
          <div className="row">
            <div className={`p-5 ${styles.top}`}>
              <p className={`ps-4 ${styles.title}`}> Top Jobs </p>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.main}>
        <div className="container">
          <div className="row">
            <div className="col-md-12 py-5 g-0">
            <form action="" onSubmit={(e) => onSubmitHandler(e)}>
              <div className={`input-group flex-nowrap ${styles.cari}`}>
                <input type="text" className="form-control" id={styles.cari2} placeholder="Search for any skill" aria-describedby="addon-wrapping" onChange={(e) => setName(e.target.value)} />
                <span className={`input-group-text ${styles.spanCostum}`} id="addon-wrapping">
                  {/* <i className="fa fa-search"> </i> */}
                  <Image src='/search.png' width={20} height={20} alt="search" />
                </span>
                <span className={`input-group-text ${styles.spanCostum}`} id="addon-wrapping">
                  <div className="dropdown">
                    <button className={`btn btn-secondary dropdown-toggle ${styles.spanCostumsort}`} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Sort
                    </button>
                    <ul className="dropdown-menu">
                      <li><Link className="dropdown-item" href="#" onClick={()=> handleSortasc()}>Sortir berdasarkan {asc}</Link></li>
                      <li><Link className="dropdown-item" href="#" onClick={()=> handleSorting()}>Sortir berdasarkan {sort}</Link></li>
                      {/* <li><Link className="dropdown-item" href="#">Sortir berdasarkan Lokasi</Link></li>
                      <li><Link className="dropdown-item" href="#">Sortir berdasarkan freelance</Link></li>
                      <li><Link className="dropdown-item" href="#">Sortir berdasarkan fulltime</Link></li> */}
                    </ul>
                  </div>
                </span>
                <span className={`input-group-text ${styles.spanCostum}`} id="addon-wrapping">
                  <button className={styles.spanCostumbutton}> Search </button>
                </span>
              </div>
              </form>
            </div>
          </div>
          <div className="row">
            {
              data2.length === 0 ? data.map ((item, index) => (
                <div key={index} className={`col-md-12 mb-1 ${styles.content}`}>
                  <div  className="d-flex flex-row p-3">
                    <Image src={`${process.env.NEXT_PUBLIC_API_URL}/${item.image}`} height={100} width={100} className="col-md-1" style={{borderRadius:"100%"}} alt='ava' />
                    <div className="col-md-5 d-flex flex-column ms-5">
                      <p className={styles.textName}>{item.username}</p>
                      <p className={styles.textProfession}>{item.jobdesk}</p>
                      <div className="d-flex flex-row">
                        <Image src='/mappin.svg' height={25} width={10} alt='map' />
                        <p className={`ms-2 ${styles.textLocation}`}>{item.city}</p>
                      </div>
                      <div className="d-flex flex-row">
                        <ul className='p-0'>
                          <li className={`${styles.textSkill} px-4 py-2 me-3`}>PHP</li>
                          <li className={`${styles.textSkill} px-4 py-2 me-3`}>JavaScript</li>
                          <li className={`${styles.textSkill} px-4 py-2 me-3`}>HTML</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-5 d-flex flex-row align-items-center justify-content-end">
                      <Link href={`/profile/${item.id_user}`}> 
                        <button className={`px-4 ${styles.toProfile}`}> Lihat Profile</button>
                      </Link>
                    </div>
                  </div>
                </div>
              )
              ) :
                data2.map((item, index) => (
                  <div key={index} className={`col-md-12 mb-1 ${styles.content}`}>
                    <div  className="d-flex flex-row p-3">
                      <Image src='/luis.png' height={100} width={100} className="col-md-1" alt='luis' />
                      <div className="col-md-5 d-flex flex-column ms-5">
                        <p className={styles.textName}>{item.username}</p>
                        <p className={styles.textProfession}>{item.jobdesk}</p>
                        <div className="d-flex flex-row">
                          <Image src='/mappin.svg' height={25} width={10} alt='map' />
                          <p className={`ms-2 ${styles.textLocation}`}>Lorem ipsum</p>
                        </div>
                        <div className="d-flex flex-row">
                          <ul className='p-0'>
                            <li className={`${styles.textSkill} px-4 py-2 me-3`}>PHP</li>
                            <li className={`${styles.textSkill} px-4 py-2 me-3`}>JavaScript</li>
                            <li className={`${styles.textSkill} px-4 py-2 me-3`}>HTML</li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-md-5 d-flex flex-row align-items-center justify-content-end">
                        <Link href={`/profile/${item.id_user}`}> 
                          <button className={`px-4 ${styles.toProfile}`}> Lihat Profile</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))
            }
            <button className="btn btn-primary my-5 col-md-2  mx-auto" onClick={()=> PreviousPage()}> Prev </button>
            <button className="btn btn-primary my-5 col-md-2  mx-auto">{page}</button>
            <button className="btn btn-primary my-5 col-md-2  mx-auto" disabled={data <= 0} onClick={()=> NextPage()}>Next</button>
          </div>
        </div>
      </section>
    </>
  )
}
Index.layout = 'L1'

export default Index