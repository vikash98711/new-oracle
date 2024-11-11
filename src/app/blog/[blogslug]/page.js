import CompanyLogoSlider from '@/component/CompanyLogoSlider';
import CoomonStudentSlider from '@/component/CoomonStudentSlider';
import Footer from '@/component/Footer';
import Navigation from '@/component/Navigation';
import QuiryForm from '@/component/QuiryForm';
import TopBannerDetails from '@/component/TopBannerDetails';
import Link from 'next/link';
import React from 'react';




// Fetch all blogs
async function fetchBlog() {
  try {
    const response = await fetch('https://russianclassesindelhi.com/admin/public/api/blog');
    if (!response.ok) {
      throw new Error('Failed to fetch blog list');
    }
    const responseJson = await response.json();
 
    return responseJson.blog_list.data || [];
  } catch (error) {
    console.error('Error fetching blog list:', error);
    return [];
  }
}


async function fetchSingleBlog(slug) {
  try {
    const response = await fetch(`https://russianclassesindelhi.com/admin/public/api/latest-blogs-of-oracle/${slug}`);
    if (!response.ok) {
      throw new Error('Failed to fetch single blog');
    }
    const responseJson = await response.json();


    return responseJson.blog_details.data?.[0] || null;
  } catch (error) {
    console.error(`Error fetching blog with slug ${slug}:`, error);
    return null;
  }
}


export async function generateStaticParams({params}) {
  const response = await fetch('https://russianclassesindelhi.com/admin/public/api/blog');
  
  const responseJson = await response.json();
  
  

  const slugs = responseJson.blog_list.data || ['real-patients-real-stories2', 'learning-is-heaven', 'real-patients-real-stories2'];

  return slugs.map((slug) => ({
    blogslug: slug.slug, 
  }));
}

const Page = async ({ params }) => {
  const blogData = await fetchBlog();
  const blogValue = await fetchSingleBlog(params.blogslug);


  const formatDate = (timeString) => {
    if (!timeString) return '';
    return new Date(timeString).toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });
  };

  // Handle case when the blog doesn't exist
  if (!blogValue) {
    return (
      <>
        <Navigation />
        <TopBannerDetails />
        <section className="pt-pb">
          <div className="container">
            <h2>Blog not found</h2>
          </div>
        </section>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navigation />
     

     <div className="sub-banner" 
      style={{
        backgroundImage: `url(${blogValue.blog_image})`,
        width: '100%',
        height: '100%',
      }}>
      <div className="container">
         <div className="col-sm-12 text-center">
            <h2>  {blogValue.blog_title}</h2>
            <p>
         <Link className="btn btn-theme" href="/contact-us-for-more-information">Talk to Our Experts</Link>
            </p>
         </div>
      </div>
   </div>
      <section className="pt-pb">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-12 mb-4 wrapper-blogs-details-content">
              <img
                src={blogValue.blog_image || '/path/to/default-image.jpg'}
                alt="education"
                className="rounded-4 img-fluid w-100 mb-3"
              />
              <div className="mb-4">
                <span>
                  <i className="fa-regular fa-clock fa-xl text-secondary"></i>
                </span>{' '}
                &nbsp; <span>{formatDate(blogValue.date)}</span>
              </div>
              <h3 className="Title-blogs-h3">{blogValue.blog_title}</h3>
              <div
                dangerouslySetInnerHTML={{ __html: blogValue.long_desc }}
                className="border-bottom pb-5 mb-5"
              />

         
            </div>

           
            <div className="col-lg-4 col-12">
              <div className="rounded shadow bg-white p-3">
                <h3 className="course-details__sidebar__title pb-3 mb-3">
                  Latest Post
                </h3>
                {blogData.slice(0, 12).map((value) => (
                  <div className="border-bottom pb-3 mb-3" key={value.id}>
                    <div className="d-flex align-items-center gap-3">
                      <div className="blog-sidebar-img-wrapper">
                        <Link href={`/blog/${value.slug}`}>
                          <img
                            src={value.blog_image || '/path/to/default-image.jpg'}
                            alt="education"
                            className="img-fluid h-100"
                          />
                        </Link>
                      </div>
                      <div>
                        <div className="mb-2">
                          <span>
                            <i className="fa-regular fa-clock fa-lg text-secondary"></i>
                          </span>{' '}
                          &nbsp; <span>{formatDate(value.date)}</span>
                        </div>
                        <h3 className="text-capitalize sidebar__post__content__title">
                          <Link href={`/blog/${value.slug}`}>
                            {value.blog_title}
                          </Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <QuiryForm />
      <CompanyLogoSlider />
      <Footer />
    </>
  );
};

export default Page;
