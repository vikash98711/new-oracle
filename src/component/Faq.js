'use client'
import React from 'react'
import { Accordion } from 'react-bootstrap'

const Faq = () => {
    return (
        <section className='bg-white pt-pb' >
            <div className="container">
            <div className="row align-items-center justify-content-center">
            <div className="col-sm-10">
                <div className="main-title text-center mb-0">
          <h5 className="mb-0">FAQ</h5>
          <h2 className='sec-title'> Frequently Asked Questions</h2>
          <br></br>
        </div>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Q: What career options are available after studying at an international language institute?</Accordion.Header>
                        <Accordion.Body>
                            <ul className="position-relative faq-list-wrap">
                                <li>
                                    <span className="fa-solid fa-check icon-check faq-icon" />
                                    <p><span>Translation & Interpretation: </span>This is a classic career path for language learners. You can work as a freelance translator, a staff translator for a company, or a conference interpreter. </p>
                                </li>
                                <li>
                                    <span className="fa-solid fa-check icon-check faq-icon" />
                                    <p><span>International Business & Sales: </span>Multilingual skills are highly sought-after in today's globalized business world. You can pursue careers in international marketing, sales, or business development. </p>
                                </li>
                                <li>
                                    <span className="fa-solid fa-check icon-check faq-icon" />
                                    <p><span>Education & Teaching: </span>Become a language instructor and share your passion for languages with others. You can teach at international schools, language institutes, or online platforms. </p>
                                </li>
                                <li>
                                    <span className="fa-solid fa-check icon-check faq-icon" />
                                    <p><span>Tourism & Hospitality: </span>Language skills are crucial in the tourism and hospitality sectors. You can work as a tour guide, travel agent, hotel receptionist, or cruise ship staff.</p>
                                </li>
                                <li>
                                    <span className="fa-solid fa-check icon-check faq-icon" />
                                    <p><span>Government & Diplomacy: </span>Multilingualism is an asset for government jobs and diplomatic careers. You can work as a foreign service officer, embassy representative, or international relations specialist.</p>
                                </li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Q: How does an international language institute benefit my career?</Accordion.Header>
                        <Accordion.Body>
                            <ul className="position-relative faq-list-wrap">
                                <li>
                                    <span className="fa-solid fa-check icon-check faq-icon" />
                                    <p><span>Language Proficiency: </span>Gain fluency and strong communication skills in your chosen language, opening doors to various career paths.</p>
                                </li>
                                <li>
                                    <span className="fa-solid fa-check icon-check faq-icon" />
                                    <p><span>Cultural Understanding: </span>Develop cultural awareness and sensitivity, allowing you to navigate international settings effectively.</p>
                                </li>
                                <li>
                                    <span className="fa-solid fa-check icon-check faq-icon" />
                                    <p><span>Networking Opportunities: </span>Meet fellow language enthusiasts and professionals, potentially leading to future job opportunities.</p>
                                </li>
                                <li>
                                    <span className="fa-solid fa-check icon-check faq-icon" />
                                    <p><span>Credentials & Certification: </span>Earning language certificates from recognized institutions can boost your resume and demonstrate your expertise.</p>
                                </li>
                            </ul>

                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Q: What languages are in high demand for careers?</Accordion.Header>
                        <Accordion.Body>
                            <ul className="position-relative faq-list-wrap">
                                <li>
                                    <span className="fa-solid fa-check icon-check faq-icon" />
                                    <p><span>Mandarin Chinese:  </span>
                                    China growing economic power makes Mandarin a valuable asset in many fields.</p>
                                </li>
                                <li>
                                    <span className="fa-solid fa-check icon-check faq-icon" />
                                    <p><span>Spanish: </span>
                                    Widely spoken across the globe, Spanish is crucial for careers in tourism, business, and education in many regions.</p>
                                </li>
                                <li>
                                    <span className="fa-solid fa-check icon-check faq-icon" />
                                    <p><span>French:  </span>
                                    French is the official language in many countries and holds importance in diplomacy, international organizations, and luxury goods sectors.</p>
                                </li>
                                <li>
                                    <span className="fa-solid fa-check icon-check faq-icon" />
                                    <p><span>German: </span>
                                    The language of engineering, manufacturing, and a strong European economy, German offers career prospects in these areas.</p>
                                </li>
                                <li>
                                    <span className="fa-solid fa-check icon-check faq-icon" />
                                    <p><span>Arabic: </span>
                                    The growing importance of the Middle East in global trade makes Arabic a valuable skill, especially for business and energy sectors.</p>
                                </li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>Q: Do I need a degree to work in a language-related field?</Accordion.Header>
                        <Accordion.Body>
                        <ul className="position-relative faq-list-wrap">
                                <li>
                                    <span className="fa-solid fa-check icon-check faq-icon" />
                                    <p>While a formal degree can be beneficial, it's not always mandatory. Strong language proficiency, relevant certifications, and demonstrably successful completion of a language program at a reputable institute can be enough to qualify for many positions.</p>
                                </li>
                                </ul>

                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>Q: How can I find a job after studying at an international language institute?</Accordion.Header>
                        <Accordion.Body>
                        <ul className="position-relative faq-list-wrap">
                                <li>
                                    <span className="fa-solid fa-check icon-check faq-icon" />
                                    <p>Utilize the institute's career resources and job placement assistance.</p>
                                </li>
                                <li>
                                    <span className="fa-solid fa-check icon-check faq-icon" />
                                    <p>Network with professors, fellow students, and industry professionals.</p>
                                </li>
                                <li>
                                    <span className="fa-solid fa-check icon-check faq-icon" />
                                    <p>Leverage online job boards and career websites that focus on multilingual opportunities.</p>
                                </li>
                                <li>
                                    <span className="fa-solid fa-check icon-check faq-icon" />
                                    <p>Highlight your language skills and cultural awareness on your resume and cover letter.</p>
                                </li>
                                </ul>

                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
            </div>
            </div>
        </section>
    )
}

export default Faq