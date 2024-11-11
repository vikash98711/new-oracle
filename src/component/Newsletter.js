import React from 'react'

const Newsletter = () => {
  return (
    <section>
        <div className="container">
            <div className="newsletter-wrap rounded-top-5 "> 
            <div className="row p-lg-5 p-3 align-items-center">
                <div className="col-lg-6 col-md-6 col-12 mb-md-0 mb-3">
                    <h3 className='mb-0 text-white fs-sm-18'>Subscribe to Our Newsletter</h3>
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                    <div className="d-flex align-items-center gap-3">
                        <input type="text" className='form-control' placeholder='Email Address'/>
                        <input type="submit" value="subscribe" className='bg-secondary text-white d-inline-block form-control' style={{width: "200px"}} />
                    </div>
                </div>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Newsletter