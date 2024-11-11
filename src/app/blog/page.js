import CompanyLogoSlider from '@/component/CompanyLogoSlider'
import CoomonStudentSlider from '@/component/CoomonStudentSlider'
import Footer from '@/component/Footer'
import Navigation from '@/component/Navigation'
import QuiryForm from '@/component/QuiryForm'
import TopBannerDetails from '@/component/TopBannerDetails'
import Link from 'next/link'
import React from 'react'


async function fetchBlog() {
    try { 

  const response = await fetch('https://russianclassesindelhi.com/admin/public/api/blog')
  if(response){
  const responseJson = await response.json() 
  return responseJson.blog_list.data
  }
  return false
} catch (error) {
     console.log("failed to get blog ", error)  
     return false 
}
}
const Page = async() => {
    const blogData = await fetchBlog() || []

    const formatDate = (timeString)=>{
        const formattedTime = new Date(timeString).toLocaleDateString('en-GB', {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
          });
        return formattedTime;
    }
  return (
    <>
    <Navigation />
    {/* <CoomonStudentSlider /> */}
   

    <div className="sub-banner" style={{background:'url(assets/img/blog.jpg)'}}>
      <div className="container">
         <div className="col-sm-12 text-center">
            <h2> Blogs</h2>
            <p>
                <Link className="btn btn-theme" href="/contact-us-for-more-information">Talk to Our Experts</Link>
            </p>
         </div>
      </div>
   </div>

    <section className='pt-pb mt-5'>
        <div className="container">
            {/* <div className="text-center pb-5">
                <h2 className='text-upppercase'>Blog</h2>
            </div> */}
            <div className="row">
                <div className=" col-12">
                    <div className="row">
                    {blogData.slice(0,4).map((blogValue)=>(
                        <div className="col-lg-4 col-md-6 mb-4" key={blogValue.id}>
                        <div className="px-2" >
                        <div className="blog-card-wrap rounded-4 position-relative mb-5">
                            <Link href={`/blog/${blogValue.slug}`} className='position-relative d-block blog-image-link-wrapper rounded-4'>
                            <img src={blogValue.blog_image} alt="blog" className='img-fluid w-100 rounded-4 h-image-rounded shadow '  />
                            <div className='position-absolute w-100 h-100 d-flex align-items-center justify-content-between  text-center blog-hover-wrapper'>
                                <div className='text-center w-100'><i className="fa-solid fa-plus text-white fa-xl"></i></div>
                            </div>
                            </Link>
                            <div className="blog-card-detail position-absolute top-100 start-50 translate-middle px-3 w-100">
                                <div className="bg-white shadow rounded-top-4 rounded-bottom-5 p-3">
                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                        <span className="btn-sm bg-primary text-white rounded px-2 py-1">
                                            Category
                                        </span>
                                        <span className='text-secondary'> {formatDate(blogValue.date)}</span>
                                    </div>
                                    <h3 className='blog-two__title'> <Link href={`/blog/${blogValue.slug}`}>{blogValue.blog_title}</Link> </h3>
                                    {/* <div className="text-end">
                                        <Link href="#"></Link>
                                    </div> */}
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className='d-flex align-items-center gap-2'>
                                            <img src="/assets/img/authorBlog.png" alt="education" className='blog-author-img' />
                                            <div>
                                                <p className="fw-bold mb-0">Darrell Steward</p>
                                                <p className='mb-0'>Author</p>
                                            </div>
                                        </div>
                                        <Link href={`/blog/${blogValue.slug}`} className='blog-link'><i className="fa-solid fa-arrow-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    ))}
                    </div>
                </div>
                {/* <div className="col-lg-4 col-12"></div> */}
            </div>
        </div>
    </section>


    <QuiryForm />
    <CompanyLogoSlider />
    <Footer/>

    </>
  )
}

export default Page

