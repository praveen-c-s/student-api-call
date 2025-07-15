import React, { useState } from 'react'
import Nav from './Nav'
import axios from 'axios'

const Add = () => {
    const [input,changeInput]=useState(
        {
 name: "",
 roll_number: "",
 admission_number: "",
 college: ""
 }
    )
        const inputHandler=(e)=>{
        changeInput({...input,[e.target.name]:e.target.value})
    }
    const readValues=()=>{
        console.log(input)
        axios.post("http://18.144.111.41/student_api.php",input).then(
            (response)=>{
                alert("succesfully added")
            }
        ).catch()
    }
  return (
    <div>
        
        <Nav/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">


                         <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Name</label>
                                <input type="text" className="form-control" name='name' value={input.name} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Collage</label>
                                <input type="text" className="form-control"  name='college' value={input.college} onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Roll_no</label>
                                <input type="text" className="form-control" name='roll_number' value={input.roll_number} onChange={inputHandler} />
                            </div>
                            
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Addmision_no</label>
                                <input type="text" className="form-control" name='admission_number' value={input.admission_number} onChange={inputHandler}/>
                            </div>
                            
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-success" onClick={readValues}>Submit</button>
                            </div>
                        </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Add