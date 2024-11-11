'use client'
import CompanyLogoSlider from '@/component/CompanyLogoSlider';
import CoomonStudentSlider from '@/component/CoomonStudentSlider';
import Faq from '@/component/Faq';
import Footer from '@/component/Footer';
import Navigation from '@/component/Navigation';
import QuiryForm from '@/component/QuiryForm';
import TopBannerDetails from '@/component/TopBannerDetails';
import { CourseData } from '@/utils/data';
import Link from 'next/link';
import React from 'react'
import { Tab, Tabs } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';


const page = () => {
  const CourseList = CourseData
  return (
    <>
      <Navigation />
      <div className="sub-banner" style={{background:'url(/assets/img/services.jpg)'}}>
      <div className="container">
         <div className="col-sm-12 text-center">
            <h2> Our Branches</h2>
            <p>
                <Link className="btn btn-theme" href="/contact-us-for-more-information">Talk to Our Experts</Link>
            </p>
         </div>
      </div>
   </div>
      <section className="course-details branch visit-our-branches-in-delhi pt-pb">
        <div className="container mt-3">
          <div className="row">
            <div className="col-xl-8">
              {/* <div className="course-details__thumb">
                <img src="/assets/img/services.jpg" alt="eduact" />
              </div>  */}
              
              <h3 className='text-primary'>Best English Speaking Courses & International Languages Institute in Connaught Place and Delhi NCR</h3>
              <div className="course-details__tabs tabs-box">
                <p className="course-details__overview__text">
                  To enhance the employability of students by developing the following skills:


                </p>

                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>1:Foundation Level</Accordion.Header>
                    <Accordion.Body>
                      <p><b>A1:</b>  Can understand and use familiar, everyday expressions and very simple sentences, which relate to the satisfying of concrete needs. Can introduce him/her and others as well as ask others about themselves – e.g. where they live, who they know and what they own – and can respond to questions of this nature. Can communicate in a simple manner if the person they are speaking to speaks slowly and clearly and is willing to help.
                      </p>
                      <p><b>A2:</b>  Can understand and use familiar, everyday expressions and very simple sentences, which relate to the satisfying of concrete needs. Can introduce him/her and others as well as ask others about themselves – e.g. where they live, who they know and what they own – and can respond to questions of this nature. Can communicate in a simple manner if the person they are speaking to speaks slowly and clearly and is willing to help.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>2: Intermediate Level</Accordion.Header>
                    <Accordion.Body>
                      <p><b>B1:</b> Can understand the main points when clear, standard language is used and the focus is on familiar topics associated with work, school, leisure time, etc. Can deal with most situations typically encountered when travelling in the language region. Can express him/ herself simply and coherently regarding familiar topics and areas of personal interest. Can report on experiences and events , describe dreams, hopes and goals as well as make short statements to justify or explain his/her own views and plans.
                      </p>
                      <p><b>B2:</b> Can understand the main contents of complex texts on concrete and abstract topics; also understands specialized discussions in his/her own primary area of specialization. Can communicate so spontaneously and fluently that a normal conversation with native speakers is easily possible without a great deal of effort on either side. Can express him/ herself on a wide range of topics in a clear and detailed manner, explain his/her position on a current issue and indicate the benefits and drawbacks of various options.
                      </p>

                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>3: Civil Engineering</Accordion.Header>
                    <Accordion.Body>
                      <p><b>C1:</b> Can understand a wide range of challenging, longer texts and also grasp implicit meanings. Can express him/ herself spontaneously and fluently without having to search for words frequently and noticeably. Can use the language effectively and flexibly in his/her social and professional life or in training and studies. Can make clear, structured and detailed statements on complex topics and apply various means of text association appropriately in the process.</p>
                      <p><b>C2:</b> Can effortlessly understand practically everything which he/she reads or hears. Can summarize information from various written and spoken sources, logically recounting the reasons and explanations. Can express him/ herself spontaneously with high fluency and precision and also make finer nuances of meaning clear in more complex topics..
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>4: IELTS (International English Language Testing System)</Accordion.Header>
                    <Accordion.Body>
                      <p>International English Language Testing System is an international standardized test of English language proficiency. It is jointly managed by University of Cambridge ESOL Examinations, the British Council and IDP Education Pvt. Ltd. and was established in 1989. There are two versions of the IELTS: the Academic Version and the General Training Version. The Academic Version is intended for those who want to enroll in universities and other institutions of higher education and for professionals such as medical doctors and nurses who want to study or practice in an English-speaking country. The General Training Version is intended for those planning to undertake non-academic training or to gain work experience, or for immigration purposes. IELTS is accepted by most Australian, British, Canadian, Irish, New Zealand and South African academic institutions, over 3,000 academic institutions in the United States, and various professional organizations. It is also a requirement for immigration to Australia, New Zealand and Canada. No minimum score is required to pass the test. An IELTS result or Test Report Form is issued to all candidates with a score from "band 1" ("non-user") to "band 9" ("expert user") and each institution sets a different threshold. There is also a "band 0" score for those who did not attempt the test. Institutions are advised not to consider a report older than two years to be valid, unless the user proves that he has worked to maintain his level. [2][3] In 2007, IELTS tested over a million candidates in a single 12-month period for the first time ever, making it the world's most popular English language test for higher education and immigration.[4] In 2009, 1.4 million candidates took the IELTS test in over 130 countries, in 2011 there were 1.7 million candidates.</p>

                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="4">
                    <Accordion.Header>5: DELF - The Diplôme d'études en langue française (DELF) (English: Diploma in French Studies)</Accordion.Header>
                    <Accordion.Body>
                      <p>The Diplôme d'études en langue française (DELF) (English: Diploma in French Studies) is a certification of French-language abilities for non-native speakers of French administered by the International Centre for French Studies (Centre international d'études pédagogiques, or CIEP) for France's Ministry of Education. It is composed of four independent diplomas corresponding to the first four levels of the Common European Framework of Reference for Languages: A1, A2, B1 and B2. Above this level, the "Proficient User" divisions are certified by the DALF. The examinations are available in three varieties: "DELF Prim" which is for Primary school students (only available at A1 level), "DELF Junior et Scolaire" which is aimed at secondary-school aged students and "DELF Tous Publics" which is aimed at adults. Each variety is worth exactly the same and results in the awarding of the same diploma, but the material is varied to ensure that it is appropriate for the target cohort

                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="5">
                    <Accordion.Header>6: Englis</Accordion.Header>
                    <Accordion.Body>
                      <p>English is a West Germanic language that was first spoken in early medieval England and is now the most widely used language in the world. It is spoken as a first language by the majority populations of several sovereign states, including the United Kingdom, the United States, Canada, Australia, Ireland, New Zealand and a number of Caribbean nations. It is the third-most-common native language in the world, after Mandarin Chinese and Spanish. It is widely learned as a second language and is an official language of the European Union, many Commonwealth countries and the United Nations, as well as in many world organizations</p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="6">
                    <Accordion.Header>7: German</Accordion.Header>
                    <Accordion.Body>
                      <p>German is a West Germanic language related to and classified alongside English and Dutch. With an estimated 95–100 million native speakers, German is one of the world's major languages and is the most widely spoken first language in the European Union. Most German vocabulary is derived from the Germanic branch of the Indo-European language family. A number of words are derived from Latin and Greek, and fewer from French and English. German is written using the Latin alphabet. In addition to the 26 standard letters, German has three vowels with umlauts (Ä/ä, Ö/ö, and Ü/ü) and the letter ß.</p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="7">
                    <Accordion.Header>8: Arabic</Accordion.Header>
                    <Accordion.Body>
                      <p>Arabic or عربي/عربى ʻarabī is a name applied to the descendants of the Classical Arabic language of the 6th century AD. This includes both the literary language and varieties of Arabic spoken in a wide arc of territory stretching across the Middle East, North Africa, and the Horn of Africa. Arabic belongs to the Afro-Asiatic language family. The literary language is called Modern Standard Arabic or Literary Arabic. It is currently the only official form of Arabic, used in most written documents as well as in formal spoken occasions, such as lectures and news broadcasts. However, this varies from one country to the other. In 1912, Moroccan Arabic was official in Morocco for some time, before Morocco joined the Arab League. Arabic languages are Central Semitic languages, most closely related to Aramaic, Hebrew, Ugaritic, and Phoenician. The standardized written Arabic is distinct from and more conservative than all of the spoken varieties, and the two exist in a state known as diglossia, used side-by-side for different societal functions.</p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="8">
                    <Accordion.Header>9: Language Translation and Interpretation</Accordion.Header>
                    <Accordion.Body>
                      <p>Welcome to Oracle International Language Institute – , a trusted provider of translation and language interpretation services to various commercial and corporate businesses in Delhi NCR. Based in Delhi, we have been supplying translation services to the clients for the last many years. We offer a comprehensive service, tailored specially to the requirements and commercial anticipations and objectives of our clients. We have the knowledge to offer you the translation of the language that you need, and are known for making sure that you get the quality that you deserve.</p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="9">
                    <Accordion.Header>10: French</Accordion.Header>
                    <Accordion.Body>
                      <p>Oracle International Language Institute’s french learning courses are designed by some of the most experienced and expert french scholars to serve language learners of all age groups. With class offerings ranging from the beginning level rising up to the most advanced ones, we can provide a long-term result-oriented study, prepare aspiring French speakers for overseas travel, and train youngsters to interact fluently with French speakers and in French environments.</p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="10">
                    <Accordion.Header>11: Chinese</Accordion.Header>
                    <Accordion.Body>
                      <p>Our Chinese courses were brought in as an innovative solution to the lack of high-quality Chinese education for people living in the Indian capital. Over the last few years, our hard work, dedication, and commitment have helped us in reaping fantastic results – we have been on the right side of the positive growth of our students who come to us for being proficient in Mandarin.</p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="11">
                    <Accordion.Header>12: Career Counselling</Accordion.Header>
                    <Accordion.Body>
                      <p>Over the years, our career counseling services in Delhi have developed and grown into widely appreciated and regarded services which are availed by people from all walks of life. We provide our services for individuals, India-based public and commercial employers, national organizations, young students, and also offer core skills to become a career counselor.</p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="12">
                    <Accordion.Header>13: Study Abroad Consultants</Accordion.Header>
                    <Accordion.Body>
                      <p>Welcome to Oracle International Language Institute . We are an experienced advising group assisting national and international students [and their parents] determine the best destination and route for their higher studies in foreign countries.</p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="13">
                    <Accordion.Header>14: Spanish</Accordion.Header>
                    <Accordion.Body>
                      <p>Spanish is spoken by 400 million people worldwide. Yes, that's right, 400 million more people for you to speak with! It is the official language in 21 countries and is the third most spoken language in the world after English and Mandarin. The Spanish-speaking population is one of the fastest growing segments in the world today, comprising of a huge community that shares products, services and culture, and at the same time offering individuals, institutions and businesses a unique opportunity for growth!</p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="14">
                    <Accordion.Header>15: Japanese</Accordion.Header>
                    <Accordion.Body>
                      <p>Japanese is an East Asian language spoken by about 125 million speakers, primarily in Japan, where it is the national language. It is a member of the Japonic (or Japanese-Ryukyuan) language family. Relations to other language groups are debated. Japanese shows in its proto-form strong similarities to Southeast Asian languages. A 2015 analysis using the Automated Similarity Judgment Program resulted in the Japonic languages being grouped with the Ainu and then with the Austroasiatic languages. Relations to Korean or to the now discredited Altaic family are seen as obsolete.</p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="15">
                    <Accordion.Header>16: PTE (Pearson Test of English)</Accordion.Header>
                    <Accordion.Body>
                      <p>Learning English can be fun. At Oracle International Language Institute in Delhi, there is a team of well-trained and dedicated teachers who are known for using a variety of challenging, fun, and interesting classroom techniques for students who want to learn English. These techniques are designed by the experts for developing student’s learning strategies and encourage them to become more independent language learners.</p>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
            <div className="col-xl-4 wow fadeInRight animated">
              <div className="course-details__sidebar Course-Categories-wrapper">

                {/* <div className="course-details__sidebar__item">
                  <h3 className="course-details__sidebar__title">
                    Course Categories
                  </h3>
                  <ul className="course-details__sidebar__lists clerfix">
                    {CourseList.map((courseValue) => (
                      <li key={courseValue.id}>
                        <Link href={`/${courseValue.slug}`} className='text-muted ws-6'><i className="fa-solid fa-angles-right icon-history" />
                          {courseValue.title}</Link>

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
                            <Link href={`/${courseValue.slug}`}>{courseValue.title}</Link>
                      </li>
                    ))} 
                  </ul>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
      <QuiryForm />

      <CompanyLogoSlider />


      <Footer />
    </>
  )
}

export default page;
