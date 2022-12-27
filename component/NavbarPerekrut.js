import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {

    const [data, setData] = useState('')

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("data"));
        const data1 = data.id_perekrut
        setData(data1)
        console.log(data1)
    }, [])


    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <Link className="navbar-brand" href='/homeperekrut'><Image src='/logoungu.png' height={50} width={100} /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        </ul>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" href="#"><Image src='/iconbellNav.svg' height={10} width={100} className={`mx-3 ${styles.picNav}`} /></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="#"><Image src='/iconmainNav.svg' height={10} width={50} className={`mx-3 ${styles.picNav}`} /></Link>
                            </li>
                            <li className="nav-item ms-4">
                                <Link className="nav-link" href={`/profileperekrut/${data.id_perekrut}`}><Image src='/iconprofNav.svg' height={10} width={100} className={` ${styles.picNav}`} /> </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}
export default Navbar