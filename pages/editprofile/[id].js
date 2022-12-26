import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/EditProfile.module.css'
import axios from 'axios'

const UpdateProfile = () => {
    const router = useRouter()
    // const { id } = router.query

    const [data, setData] = useState([])
    const [update, setUpdate] = useState({
        username: data.username,
        phone: data.phone,
        jobdesk: data.jobdesk,
        city: data.city,
        company: data.company,
        description: data.description,
        ig: data.ig,
        github: data.github,
        gitlab: data.gitlab,
        statusjob: data.statusjob,
        skill: data.skill
    })

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("data"));
        const id = data.id_user
        console.log(id)
        getId(id)
    }, [])

    const getId = (id) => {
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/${id}`)
            .then((response) => {
                console.log(response.data)
                setData(response.data)
            })
            .catch((error) => {
                console.error(error)
                // router.push('/home')
            })
    }

    const hiddenFileInput = useRef(null);
    // const navigate = useNavigate();
    const [image, setImage] = useState('');

    const handleClick = (event) => {
        hiddenFileInput.current.click();
    };
    const UpdatePhoto = (event) => {
        const fileUploaded = event.target.files[0];
        document.getElementById("addphoto").innerHTML = fileUploaded.name;
        setImage(fileUploaded);
    };
    const updateForm = (event) => {
        const data = JSON.parse(localStorage.getItem("data"));
        const id = data.id_user
        event.preventDefault();
        let formData = new FormData();
        formData.append("image", image);
        // handlePost(Object.fromEntries(formData));
        axios
            .put(`${process.env.NEXT_PUBLIC_API_URL}/user/photo/${id}`, formData)
            .then((res) => {
                console.log(res);
                alert("Update Success");
                router.push('/home');
            })
            .catch((err) => {
                console.log(err);
                alert("Update Failed");
            })
    };

    const handlePost = (e) => {
        const data = JSON.parse(localStorage.getItem("data"));
        const id = data.id_user
        e.preventDefault();
        const form = {
            username: update.username,
            phone: update.phone,
            jobdesk: update.jobdesk,
            city: update.city,
            company: update.company,
            description: update.description,
            ig: update.ig,
            github: update.github,
            gitlab: update.gitlab,
            statusjob: update.statusjob,
            skill: update.skill
        }
        axios
            .put(`${process.env.NEXT_PUBLIC_API_URL}/user/${id}`, form)
            .then((res) => {
                console.log(res);
                // setImage("");
                alert("Update Success");
                router.push('/home');
            })
            .catch((err) => {
                console.log(err);
                alert("Update Failed");
            })
    };

    const deleteRow = () => {
        const data = JSON.parse(localStorage.getItem("data"));
        const id_user = data.id_user;
        axios
            .delete(`${process.env.NEXT_PUBLIC_API_URL}/user/${id_user}`)
            .then((res) => {
                console.log(res);
                alert("Profile Terhapus");
                router.push('/auth/login');
            })
            .catch((err) => {
                console.log(err);
            });
    }

    //portofolio
    const [imagePortofolio, setImagePortofolio] = useState();

    const handleImagePorto = (event) => {
        const fileUploaded = event.target.files[0];
        document.getElementById("formFileimage").innerHTML = fileUploaded.name;
        setImagePortofolio(fileUploaded);
    };

    const [formporto, setFormporto] = useState({
        name: '',
        linkrepo: '',
        imageporto: '',
        type: '',
        // id_user:'',
    })

    const onSubmitporto = (e) => {
        e.preventDefault();
        const data = JSON.parse(localStorage.getItem("data"));
        const id_user = data.id_user;
        // console.log(form)

        // const body = {
        //     name: formporto.name,
        //     linkrepo: formporto.linkrepo,
        //     imageporto: formporto.imageporto,
        //     type: formporto.type,
        //     id_user: id_user
        // }
        const inputForm = new FormData();
        inputForm.append("name", formporto.name);
        inputForm.append("linkrepo", formporto.linkrepo);
        inputForm.append("imageporto", imagePortofolio);
        inputForm.append("type", formporto.type);
        inputForm.append("id_user", id_user);
        axios.post(`${process.env.NEXT_PUBLIC_API_URL}/portofolio/insert`, inputForm)
            .then((response) => {
                // if(response.data.code !== 200){
                //     alert('error:' + response.data.message)
                // }
                if (response.data.status != 'success') {
                    alert(response.data.message)
                } else {
                    alert("data berhasil ditambahkan")
                    console.log(response.data)
                    router.push(`/profile/${id_user}`)
                }
                // console.log(response.data)

            }).catch((err) => {
                console.error(err)
            })
    }

    //experience
    const [formexperience, setFormexperience] = useState({
        posisi: '',
        companyexp: '',
        startyear: '',
        endyear: '',
        descriptionexp: '',
        // id_user:'',
    })

    const onSubmitexperience = (e) => {
        e.preventDefault();
        const data = JSON.parse(localStorage.getItem("data"));
        const id_user = data.id_user;

        const inputExp = {
            posisi: formexperience.posisi,
            companyexp: formexperience.companyexp,
            startyear: formexperience.startyear,
            endyear: formexperience.endyear,
            descriptionexp: formexperience.descriptionexp,
            id_user: id_user,
        }
        axios.post(`${process.env.NEXT_PUBLIC_API_URL}/experience/insert`, inputExp)
            .then((response) => {
                if (response.data.status != 'success') {
                    alert(response.data.message)
                } else {
                    alert("data berhasil ditambahkan")
                    console.log(response.data)
                    router.push(`/profile/${id_user}`)
                }
                // console.log(response.data)

            }).catch((err) => {
                console.error(err)
            })
    }

    return (
        <div>
            <Head>
                <title> Halaman Edit Profile</title>
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
                                {
                                    data.map((item, index) => (
                                        <div key={index} className="d-flex flex-row justify-content-center">
                                            <Image src={`${process.env.NEXT_PUBLIC_API_URL}/${item.image}`} width={150} height={150} style={{ borderRadius: "100%" }} alt='ava' />
                                        </div>
                                    ))
                                }
                                {
                                    data.map((item, index) => (
                                        <div key={index} className="d-flex flex-column mt-5">
                                            <p className={styles.textName}>{item.username}</p>
                                            <p className={styles.textProfession}>{item.jobdesk == null ? (<p>.....</p>) : (<p>{item.jobdesk}</p>)}</p>
                                        </div>
                                    ))
                                }
                                {
                                    data.map((item, index) => (
                                        <div key={index} className="d-flex flex-row">
                                            <Image src='/mappin.svg' height={25} width={10} alt='map' />
                                            <p className={`ms-2 ${styles.textLocation}`}>{item.city == null ? (<p>.....</p>) : (<p>{item.city}</p>)}</p>
                                        </div>
                                    ))
                                }
                                {
                                    data.map((item, index) => (
                                        <div key={index} className="d-flex flex-column">
                                            <p className={styles.textStatus}>{item.statusjob == null ? (<p>.....</p>) : (<p>{item.statusjob}</p>)}</p>
                                            {/* <p className={styles.textDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.</p> */}
                                        </div>
                                    ))
                                }
                                <input className="form-control"
                                    type="file"
                                    ref={hiddenFileInput}
                                    htmlFor="image"
                                    onClick={handleClick}
                                    id="addphoto"
                                    style={{ display: "none" }}
                                    onChange={UpdatePhoto} />
                                <div className="text-center" type="button" htmlFor="image" onClick={handleClick}  >
                                    <br />Edit Photo</div>
                            </div>
                            <button type="submit" className='btn d-grid gap-2 col-3 mx-auto' onClick={updateForm} > Post </button>
                            {
                                data.map((item, index) => (
                                    <div key={index} className="leftsideBottom">
                                        <button onClick={(e) => deleteRow(e)} className={`col-12 mt-4 ${styles.btnSimpan}`}>Delete</button>
                                        <Link href={`/profile/${item.id_user}`}>
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
                                                <p className={`mb-0  ps-4 ${styles.labelInput}`}> Nama lengkap </p>
                                                <div className="form-floating px-4">
                                                    <input type="text"
                                                        className="form-control"
                                                        id="floatingInput"
                                                        placeholder="Masukan nama lengkap"
                                                        name="username"
                                                        defaultValue={item.username}
                                                        onChange={(e) => setUpdate({ ...update, username: e.target.value })}
                                                    />
                                                    <label for="floatingInput" className={`px-4 ${styles.holderInput}`}>Masukan nama lengkap</label>
                                                </div>
                                                <p className={`mb-0 mt-4  ps-4 ${styles.labelInput}`}> Phone </p>
                                                <div className="form-floating px-4">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="floatingInput"
                                                        placeholder="Masukan nama lengkap"
                                                        name="phone"
                                                        defaultValue={item.phone}
                                                        onChange={(e) => setUpdate({ ...update, phone: e.target.value })} />
                                                    <label for="floatingInput" className={`px-4 ${styles.holderInput}`}>Masukan job desk</label>
                                                </div>
                                                <p className={`mb-0 mt-4  ps-4 ${styles.labelInput}`}> Job desk </p>
                                                <div className="form-floating px-4">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="floatingInput"
                                                        placeholder="Masukan nama lengkap"
                                                        name="jobdesk"
                                                        defaultValue={item.jobdesk}
                                                        onChange={(e) => setUpdate({ ...update, jobdesk: e.target.value })} />
                                                    <label for="floatingInput" className={`px-4 ${styles.holderInput}`}>Masukan job desk</label>
                                                </div>
                                                <p className={`mb-0 mt-4  ps-4 ${styles.labelInput}`}> Domisili </p>
                                                <div className="form-floating px-4">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="floatingInput"
                                                        placeholder="Masukan domisili"
                                                        name="city"
                                                        defaultValue={item.city}
                                                        onChange={(e) => setUpdate({ ...update, city: e.target.value })} />
                                                    <label for="floatingInput" className={`px-4 ${styles.holderInput}`}>Masukan domisili</label>
                                                </div>
                                                <p className={`mb-0 mt-4  ps-4 ${styles.labelInput}`}> Tempat kerja </p>
                                                <div className="form-floating px-4">
                                                    <input type="text"
                                                        className="form-control"
                                                        id="floatingInput"
                                                        placeholder="Masukan tempat kerja"
                                                        name="company"
                                                        defaultValue={item.company}
                                                        onChange={(e) => setUpdate({ ...update, company: e.target.value })} />
                                                    <label for="floatingInput" className={`px-4 ${styles.holderInput}`}>Masukan tempat kerja</label>
                                                </div>
                                                <p className={`mb-0 mt-4  ps-4 ${styles.labelInput}`}> Deskripsi singkat </p>
                                                <div className="form-floating px-4">
                                                    <textarea
                                                        className="form-control"
                                                        placeholder="Tuliskan deskripsi singkat"
                                                        id="floatingTextarea2"
                                                        name="description"
                                                        defaultValue={item.description}
                                                        onChange={(e) => setUpdate({ ...update, description: e.target.value })}></textarea>
                                                    <label for="floatingTextarea2" className={`px-4 ${styles.holderInput}`}>Tuliskan deskripsi singkat</label>
                                                </div>
                                                <p className={`mb-0 mt-4  ps-4 ${styles.labelInput}`}> Instagram </p>
                                                <div className="form-floating px-4">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="floatingInput"
                                                        placeholder="Masukan ig"
                                                        name="ig"
                                                        defaultValue={item.ig}
                                                        onChange={(e) => setUpdate({ ...update, ig: e.target.value })} />
                                                    <label for="floatingInput" className={`px-4 ${styles.holderInput}`}>Masukan IG</label>
                                                </div>
                                                <p className={`mb-0 mt-4  ps-4 ${styles.labelInput}`}> github </p>
                                                <div className="form-floating px-4">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="floatingInput"
                                                        placeholder="Masukan github"
                                                        name="github"
                                                        defaultValue={item.github}
                                                        onChange={(e) => setUpdate({ ...update, github: e.target.value })} />
                                                    <label for="floatingInput" className={`px-4 ${styles.holderInput}`}>Masukan github</label>
                                                </div>
                                                <p className={`mb-0 mt-4  ps-4 ${styles.labelInput}`}> gitlab </p>
                                                <div className="form-floating px-4">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="floatingInput"
                                                        placeholder="Masukan ig"
                                                        name="gitlab"
                                                        defaultValue={item.gitlab}
                                                        onChange={(e) => setUpdate({ ...update, gitlab: e.target.value })} />
                                                    <label for="floatingInput" className={`px-4 ${styles.holderInput}`}>Masukan gitlab</label>
                                                </div>
                                                <p className={`mb-0 mt-4  ps-4 ${styles.labelInput}`}> statusjob </p>
                                                <div className="form-floating px-4">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="floatingInput"
                                                        placeholder="Masukan statusjob"
                                                        name="statusjob"
                                                        defaultValue={item.statusjob}
                                                        onChange={(e) => setUpdate({ ...update, statusjob: e.target.value })} />
                                                    <label for="floatingInput" className={`px-4 ${styles.holderInput}`}>Masukan statusjob</label>
                                                </div>
                                                <p className={`mb-0 mt-4  ps-4 ${styles.labelInput}`}> Skill </p>
                                                <div className="form-floating px-4">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="floatingInput"
                                                        placeholder="Masukan Skill"
                                                        name="Javascript"
                                                        defaultValue={item.skill}
                                                        onChange={(e) => setUpdate({ ...update, skill: e.target.value })} />
                                                    <label for="floatingInput" className={`px-4 ${styles.holderInput}`}>Masukan Skill</label>
                                                </div>
                                                <div className="d-flex flex-column px-3">
                                                    <button type="submit" className={`mt-5 ${styles.btnExp}`}>Simpan</button>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </form>

                            </div>
                            {/* <div className={`p-5 mt-5 ${styles.rightsideSkill}`}>
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
                            </div> */}

                            <form onSubmit={(e) => onSubmitexperience(e)}>
                                <div className={`p-5 mt-5 ${styles.rightsideExp}`}>
                                    <div className="  ps-4 d-flex flex-column">
                                        <p className={styles.textTitle}> Pengalaman Kerja </p>
                                    </div>
                                    <hr />
                                    <p className={`mb-0 mt-4  ps-4 ${styles.labelInput}`}> Posisi </p>
                                    <div className="form-floating px-4">
                                        <input type="text" className="form-control" id="floatingInput" placeholder="webdeveloper" onChange={(e) => setFormexperience({ ...formexperience, posisi: e.target.value})} />
                                            <label for="floatingInput" className={`px-4 ${styles.holderInput}`}>Web Developer</label>
                                    </div>
                                    <p className={`mb-0 mt-4  ps-4 ${styles.labelInput}`}> Nama Perusahaan </p>
                                    <div className="form-floating px-4">
                                        <input type="text" className="form-control" id="floatingInput" placeholder="PTHarusBisa"
                                        onChange={(e) => setFormexperience({ ...formexperience, companyexp: e.target.value})} />
                                        <label for="floatingInput" className={`px-4 ${styles.holderInput}`}>PT Harus Bisa </label>
                                    </div>
                                    <div className="d-flex flex-row">
                                        <div className="col-md-6 d-flex flex-column mt-3">
                                            <p className={`mb-0 mt-4  ps-4 ${styles.labelInput}`}> Mulai Bekerja </p>
                                            <div className="form-floating  px-4">
                                                <input type="text" className="form-control " id="floatingInput" placeholder="datein"
                                                onChange={(e) => setFormexperience({ ...formexperience, startyear: e.target.value})} />
                                                <label for="floatingInput" className={`px-4 ${styles.holderInput}`}>1 Januari 2018</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6 d-flex flex-column mt-3">
                                            <p className={`mb-0 mt-4  ps-4 ${styles.labelInput}`}> Akhir Bekerja </p>
                                            <div className="form-floating px-4">
                                                <input type="text" className="form-control " id="floatingInput" placeholder="dateout" 
                                                onChange={(e) => setFormexperience({ ...formexperience, endyear: e.target.value})} />
                                                <label for="floatingInput" className={`px-4 ${styles.holderInput}`}>1 Januari 2019</label>
                                            </div>
                                        </div>
                                    </div>
                                    <p className={`mb-0 mt-4  ps-4 ${styles.labelInput}`}> Deskripsi singkat </p>
                                    <div className="form-floating px-4">
                                        <textarea className="form-control mb-4" placeholder="Tuliskan deskripsi singkat" id="floatingTextarea2" style={{ height: "150px" }} 
                                        onChange={(e) => setFormexperience({ ...formexperience, descriptionexp: e.target.value})}></textarea>
                                        <label for="floatingTextarea2" className={`px-4 ${styles.holderInput}`}>Tuliskan deskripsi singkat</label>
                                    </div>
                                    <hr />
                                    <div className="d-flex flex-column px-3">
                                        <button type="submit" className={`mt-5 ${styles.btnExp}`}>Tambah pengalaman kerja</button>
                                    </div>
                                </div>
                            </form>

                            <div className={`p-5 mt-5 ${styles.rightsidePorto}`}>
                                <div className="  ps-4 d-flex flex-column">
                                    <p className={styles.textTitle}> Portofolio </p>
                                </div>
                                <hr />
                                <form onSubmit={(e) => onSubmitporto(e)}>
                                    <div className=" d-flex flex-column mt-4">
                                        <p className={`mb-0 mt-4  ps-4 ${styles.labelInput}`}> Nama aplikasi </p>
                                        <div className="form-floating px-4">
                                            <input type="text"
                                                className="form-control"
                                                id="floatingInputSkill"
                                                placeholder="Masukan nama aplikasi "
                                                onChange={(e) => setFormporto({ ...formporto, name: e.target.value })} />
                                            <label for="floatingInputSkill" className={`px-4 ${styles.holderInput}`}>Masukan nama aplikasi</label>
                                        </div>
                                        <p className={`mb-0 mt-4  ps-4 ${styles.labelInput}`}> Link repository </p>
                                        <div className="form-floating px-4">
                                            <input type="text" className="form-control " id="floatingInputSkill" placeholder="Masukan link repository"
                                                onChange={(e) => setFormporto({ ...formporto, linkrepo: e.target.value })} />
                                            <label for="floatingInputSkill" className={`px-4 ${styles.holderInput}`}>Masukan link repository</label>
                                        </div>
                                    </div>
                                    <p className={`mb-0 mt-4  ps-4 ${styles.labelInput}`}> Type portofolio </p>
                                    <div className="d-flex flex-row ps-5">
                                        <div class="form-check me-5">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="0" onChange={(e) => setFormporto({ ...formporto, type: e.target.value })} />
                                            <label class="form-check-label" for="flexRadioDefault1">
                                                Aplikasi mobile
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="1" onChange={(e) => setFormporto({ ...formporto, type: e.target.value })} />
                                            <label class="form-check-label" for="flexRadioDefault2">
                                                Aplikasi web
                                            </label>
                                        </div>
                                    </div>
                                    <p className={`mb-0 mt-4  ps-4 ${styles.labelInput}`}> Upload gambar </p>
                                    <div class="mb-3 px-4">
                                        <input class="form-control" type="file" id="formFileimage" onChange={handleImagePorto} />
                                    </div>
                                    <div className="d-flex flex-column px-3">
                                        <button type='submit' className={`mt-5 ${styles.btnExp}`}>Tambah portofolio</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

UpdateProfile.layout = 'L1'
export default UpdateProfile