import React, { useState } from 'react'

const Contact = () => {

    const [data, setData] = useState({
        fname : "",
        email : "",
        phone : "",
        msg : "",
    });
    
    const inputEvent = (event) => {
        const {name,value} = event.target;
        setData((preVal)=>{
            return{
                ...preVal,
                [name]:value,
            }
        })
    }

    const formSubmit = (event) => {
        event.preventDefault();
        alert(`My name is ${data.fname}. My mobile number is ${data.phone}. My email is ${data.email}. This is what i want to say: ${data.msg}`)
    }

    return(
        <>
            <div className='my-5'>
                <h1 className='text-center'>Contact US</h1>
            </div>
            <div className='container contact_div'>
                <div className='row'>
                    <div className='col-md-6 col-10 mx-auto'>
                        <form onSubmit={formSubmit}>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Full Name</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" name="fname" onChange={inputEvent} value={data.fname} placeholder="Enter your name" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Phone</label>
                                <input type="number" className="form-control" id="exampleFormControlInput1" name="phone" onChange={inputEvent} value={data.phone} placeholder="Enter your mobile number" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" name="email" onChange={inputEvent} value={data.email} placeholder="Enter your email" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="msg" onChange={inputEvent} value={data.msg}></textarea>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-outline-primary" type="submit">Submit form</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact