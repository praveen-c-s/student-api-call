import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import axios from 'axios'

const View = () => {
  const [student, changeStudent] = useState(
{"status":"success","data":[

]}
    )

    const fetchData=()=>{
axios.get("http://18.144.111.41/view_all_students.php").then((response)=>{
    changeStudent(response.data)

  }
).catch()
}
    useEffect(()=>{fetchData()},[])
  return (
    <div>
<Nav/>
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
<h2 style={{textAlign:"center"}}>view student</h2>
            <div className="row">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                <table class="table table-bordered table-striped ">
                  <thead>
                    <tr>
                      <th scope="col">id</th>
                      <th scope="col">name</th>
                      <th scope="col">admmision_number</th>
                      <th scope="col">roll_no</th>
                      <th scope="col">College</th>

                    </tr>
                  </thead>
                  <tbody>
                    {student.data.map((value, index) => {
                      return (
                        <tr>

                          <td>{value.id}</td>
                          <td>{value.name}</td>
                          <td>{value.admission_number}</td>
                          <td>{value.roll_number}</td>
                          <td>{value.college}</td>
                        </tr>

                      )
                    })}

                  </tbody>
                </table>
              </div>
            </div>


          </div>
        </div>
      </div>




    </div>
  )
}

export default View