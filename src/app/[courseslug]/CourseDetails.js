'use client'
import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import CompanyLogoSlider from '../../component/CompanyLogoSlider';
import QuiryForm from '@/component/QuiryForm';
import Navigation from '@/component/Navigation';
import Footer from '@/component/Footer';
import CourseReview from "@/component/CourseReview";
// import CoomonStudentSlider from '@/component/CoomonStudentSlider';
import Accordion from 'react-bootstrap/Accordion';
import { CourseData } from '@/utils/data';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import CourseDetailsEnrollButton from '@/utils/CourseDetailsEnrollButton';
import { urlToUrlWithoutFlightMarker } from 'next/dist/client/components/app-router';
import PlaceMentReview from '@/component/PlaceMentReview';
import FactSection from '@/component/FactSection';
import CareerCounsellingStrip from '@/component/CareerCounsellingStrip';
// import TopBannerDetails from '@/component/TopBannerDetails';



const CourseDetails = ({ params }) => {
  const pathname = usePathname()
  const CourseList = CourseData
  const courseValue = CourseList.find(data => data.slug === params?.courseslug)

  return (

    <>
    <main className="entire-page-wrapper" style={{width:'100%', height:'100%'}}>

      <Navigation />
  

      {/* <CoomonStudentSlider /> */}
 
      
        <div className="sub-banner"  style={{
          backgroundImage: `url(${courseValue.image})`,
          width: '100%',
          height: '100%',
        }}
        >
      <div className="container">
         <div className="col-sm-12 text-center">
            <h2>  {courseValue?.title}</h2>
            <p>
                <Link className="btn btn-theme" href="/contact-us-for-more-information">Talk to Our Experts</Link>
            </p>
         </div>
      </div>
   </div>





      <section className="course-details pt-pb">
        <div className="container">
          <div className="row">
            <div className="col-xl-8">
              {/* <div className="course-details__thumb">
                <img src={courseValue?.image} alt="eduact" />
              </div> */}
              <div className="course-details__meta mb-3">
                <div className="course-details__meta__author mb-lg-0 mb-2">
                  <img src={courseValue?.flagImage} alt="eduact" width={32} height={32} className='rounded-circle' />
                </div>
                <h2 className="course-details__title text-capitalize mb-lg-0 ">
                  {courseValue?.title}
                </h2>

              </div>
              <div className='d-flex align-items-center gap-3 mb-4'>
               
                <div className="course-details__meta__ratings">
                  <span className="fa-solid fa-star" />
                  <span className="fa-solid fa-star" />
                  <span className="fa-solid fa-star" />
                  <span className="fa-solid fa-star" />
                  <span className="fa-solid fa-star-half-stroke" />
                  <div className="course-details__meta__ratings__reviews">
                    ({courseValue?.ratingCount} Reviews)
                  </div>
                </div>
              </div>

              <div className="course-details__tabs tabs-box">
                <Tabs defaultActiveKey="overview" id="course-details-tabs">
                  <Tab eventKey="overview" title="Overview">
                    <div className='tabs-content mt-4'>
                      <div className="course-details__overview">
                        <div dangerouslySetInnerHTML={{ __html: courseValue?.description }} className='mb-5' />

                        {pathname === '/best-hindi-language-institute-in-delhi' ?
                          <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                              <Accordion.Header className='text-uppercase'>1. Beginner Level</Accordion.Header>
                              <Accordion.Body>
                                <p>Ideal for those learners who are new to Hindi. This level introduces the basic vocabulary, conversational skills, and grammar in Hindi.</p>
                              </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                              <Accordion.Header>2. Intermediate Level</Accordion.Header>
                              <Accordion.Body>
                                <p>This level is ideal for learners with prior knowledge of Hindi. This training level focuses on expanding the vocabulary in Hindi, improving fluency, and mastering the complex structures of sentences.</p>
                              </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                              <Accordion.Header>3. Advanced Level</Accordion.Header>
                              <Accordion.Body>
                                <p>The advanced level learners in Hindi delve into advanced grammar, culture, and literature, enabling them to communicate effectively in various situations.</p>
                              </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                              <Accordion.Header>4. Specialized Courses</Accordion.Header>
                              <Accordion.Body>
                                <p>The advanced level learners in Hindi delve into advanced grammar, culture, and literature, enabling them to communicate effectively in various situations.</p>
                              </Accordion.Body>
                            </Accordion.Item>
                          </Accordion> :
                          <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                              <Accordion.Header>Level A</Accordion.Header>
                              <Accordion.Body>
                                <p ><b>A1:</b>  A lot of motivation is given to the learner to express his/her feelings, opinions and needs in the
                                  same language. The learner will be able to understand and use common expressions and very simple
                                  sentences. The learner will be able to introduce himself/herself and freely ask general questions from
                                  others.
                                </p>
                                <p ><b>A2:</b> The learner will be able to read and write simple sentences and paragraphs. A lot of emphases is
                                  given on the grammar and pronunciation of the language. The clear understanding of the basics is given
                                  a lot of significance. The learner will be able to communicate in general daily tasks.
                                </p>
                              </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                              <Accordion.Header>Level B</Accordion.Header>
                              <Accordion.Body>
                                <p ><b>B1:</b> The learner will be able to improve their speaking ability and fluency. Also, a clear understanding
                                  of the language will be developed and he/she will easily be able to express himself/herself on a range of
                                  topics related to personal interests, work, and other familiar topics.
                                </p>
                                <p ><b>B2:</b> A great importance is given to provide the learners with space where they can learn and communicate
                                  freely in the language. She/he will learn new idioms, expressions and will master the creative use of the
                                  language. The learner will be able to create comprehensive and detailed text on a wide range of topics.
                                </p>

                              </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                              <Accordion.Header>Level C</Accordion.Header>
                              <Accordion.Body>
                                <p ><b>C1:</b> The learner will be able to write letters and will have a hands-on practice to use the language in a smooth manner. The learners are given a thorough knowledge about the literature, history, and culture of the language.</p>
                                <p ><b>C2:</b> The learner will have a great command on the language. The learners are instructed to practice novels,
                                  magazines and a variety of assignments. The learner will be able to understand, read and write the
                                  language with ease and will achieve perfection in all the circumstances.
                                </p>
                              </Accordion.Body>
                            </Accordion.Item>
                          </Accordion>}

                      </div>

                    </div>
                  </Tab>
                  {courseValue?.oracleDescription &&
                    <Tab eventKey="Why Oracle" title="Why Oracle">
                      <div className="tabs-content">
                        <div className="course-details__curriculum">
                          {/* <h4 className="course-details__curriculum__title">
                            WHY ORACLE
                          </h4> */}
                          <div dangerouslySetInnerHTML={{ __html: courseValue.oracleDescription }} />


                        </div>
                      </div>
                    </Tab>}
                  <Tab eventKey="curriculum" title="Course Lavels">
                    <div className="tabs-content Levels-content-tab-btn">
                      <div className="course-details__curriculum">

                        <div className='table-responsive'>
                          <table className="table text-center table-striped table-bordered table align-middle">
                            <thead >
                              <tr className='table-danger'>
                                <th>Course</th>
                                <th>Level</th>
                                <th>Duration</th>
                                <th>Fees</th>
                                <th>No. of Classes</th>
                              </tr>
                            </thead>
                            <tbody>
                              {courseValue?.courseTable?.map((courseTableValue, i) => (
                                <tr key={i + 100} >
                                  {courseTableValue?.course && <td rowSpan={courseTableValue?.course.courseLavel} className='text-center text-capitalize'>{courseTableValue?.course.courseType}</td>}
                                  <td>{courseTableValue.levelName}</td>
                                  <td>{courseTableValue.duration}</td>
                                  <td>{courseTableValue.fee}</td>
                                  <td>{courseTableValue.totalClass}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>



                        <a href="tel:+91114940-4131"><button className="btn-hover color-2">For more details - Call 011-49404131</button></a>

                      </div>
                    </div>
                  </Tab>

                </Tabs>
              </div>
            </div>
            <div className="col-xl-4 wow fadeInRight animated" >
              <div className="course-details__sidebar">
                <div className="course-details__sidebar__item">
                   {/* <div className="course-details__meta__price">
                    <p>This Course Fee:</p>
                    <i className="fa-solid fa-indian-rupee-sign"></i> {courseValue?.price}
                    </div> */}
                  <h3 className="course-details__sidebar__title">Course Features</h3>
                 

                  <ul className="course-details__sidebar__lists clerfix">
                    <li>
                      <i className="fa-regular fa-calendar-days icon-history" />

                      Duration<span>  {courseValue?.duration}</span>
                    </li>
                    <li>
                      <i className="fa-regular fa-clock icon-history" />
                      Timing<span>  {courseValue?.timing}</span>
                    </li>
                    <li>

                      <i className="fa-solid fa-users icon-reading" />
                      Batch Size <span>   {courseValue?.batchSize} Students</span>
                    </li>
                    <li>
                      <i className="fa-regular fa-building icon-logical-thinking" />
                      No. of class<span>  {courseValue?.totalClass}</span>
                    </li>
                  </ul> 
                  <CourseDetailsEnrollButton />
                </div>
                {/* <div className="course-details__sidebar__item">
                  <h3 className="course-details__sidebar__title">Latest Course</h3>
                  <ul className="course-details__sidebar__post d-flex">
                    {CourseList.map((courseValue) => (
                      <li key={courseValue.id}>
                        <div className="course-details__sidebar__post__image"> 
                          <img src={`${courseValue.image}`} alt="eduact" />
                        </div>
                        <div className="course-details__sidebar__post__content">

                          <h3 className="course-details__sidebar__post__title">
                            <Link href={`/${courseValue.slug}`}>{courseValue.title}</Link>
                          </h3>
                          <div className="course-details__sidebar__post__ratings">
                            <span className="fa-solid fa-star" />
                            <span className="fa-solid fa-star" />
                            <span className="fa-solid fa-star" />
                            <span className="fa-solid fa-star" />
                            <span className="fa-solid fa-star" />
                            <div className="course-details__sidebar__post__ratings__reviews">
                              4.8(30)
                            </div>
                          </div>
                        </div>
                      </li>
                    ))} 
                  </ul>
                </div> */}
                 <div className="course-details__sidebar__item">
                  <h3 className="course-details__sidebar__title">Latest Course</h3>
                  <br></br>
                  <ul className="more-course">
                    {CourseList.map((courseValue) => (
                      <li key={courseValue.id}>
                          <i class="fa-solid fa-hand-point-right"></i>   <Link href={`/${courseValue.slug}`}>{courseValue.title}</Link>
                      </li>
                    ))} 
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className='pt-pb'>

<FactSection/>
</div>
      <CourseReview />
      <div className='pt-pb'>
      <CareerCounsellingStrip/>

      </div>
      <CompanyLogoSlider />
      



<PlaceMentReview/>

      <Footer />
</main>
    </>
  )
}

export default CourseDetails;
