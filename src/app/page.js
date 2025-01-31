// import Image from "next/image";
// import styles from "./page.module.css";
// import Navigation from "@/component/Navigation";
// import Link from "next/link";
// import LearningJourney from "@/component/LearningJourney";
// import Courses from "@/component/Courses";
// import CourseReview from "@/component/CourseReview";
// import AboutUs from "@/component/AboutUs";
// import Footer from "@/component/Footer";
// import Newsletter from "@/component/Newsletter";
// import Blog from "@/component/Blog";
// import Cta from "@/component/Cta";
// import Testimonial from "@/component/Testimonial";
// import BlogVideoNotice from "@/component/BlogVideoNotice";
// import OurService from "@/component/OurService";
// import HappyStudentStrip from "@/component/HappyStudentStrip";
// import CareerCounsellingStrip from "@/component/CareerCounsellingStrip";
// import QuiryForm from "@/component/QuiryForm";
// import CompanyLogoSlider from "@/component/CompanyLogoSlider";
// import Faq from "@/component/Faq";
// import PlaceMentReview from "@/component/PlaceMentReview";


// export function generateMetadata(params) {
//   return {
//     title: "Join The Best International Language Institute for Foreign Languages course | Oracle Global Education",
//     description: "If you have a passion for learning foreign and regional languages then this is the best institute to learn international languages. Oracle is the best coaching, learning teaching institute in Delhi. It covers all the courses of international languages ",
//     keywords: ['best international language institute in Delhi', 'best foreign language institute in Delhi', 'best leading language institute in Delhi', 'best language teaching institute in Delhi', 'study with best global language institute oracle'],
//     alternates: {
//       canonical: `https://www.oracleglobaleducation.com`,
//     },
//   }
// }

// export default function Home() {
//   return (
//     <>
//     <main className="entire-page-wrapper" style={{width:'100%', height:'100%'}}>
//       <Navigation />
//       <LearningJourney />
//       <AboutUs />
//       <Courses />
//       <PlaceMentReview/>

//       <OurService />
      
//       <CourseReview />
//       {/* <Cta/> */}

//       <HappyStudentStrip />
      
//       <BlogVideoNotice />
//       <Blog />
      
//       {/* <Testimonial/> */}
//       <QuiryForm />
      
//       <CompanyLogoSlider />
//       <Faq />
//       <CareerCounsellingStrip />
//       {/* <Newsletter/> */}
//       <Footer />
//       </main>
//     </>
//   );
// }  



"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // AOS CSS import

import Navigation from "@/component/Navigation";
import LearningJourney from "@/component/LearningJourney";
import Courses from "@/component/Courses";
import CourseReview from "@/component/CourseReview";
import AboutUs from "@/component/AboutUs";
import Footer from "@/component/Footer";
import Blog from "@/component/Blog";
import BlogVideoNotice from "@/component/BlogVideoNotice";
import OurService from "@/component/OurService";
import HappyStudentStrip from "@/component/HappyStudentStrip";
import CareerCounsellingStrip from "@/component/CareerCounsellingStrip";
import QuiryForm from "@/component/QuiryForm";
import CompanyLogoSlider from "@/component/CompanyLogoSlider";
import Faq from "@/component/Faq";
import PlaceMentReview from "@/component/PlaceMentReview";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation ki speed (1 second)
      easing: "ease-in-out", // Smooth animation effect
      once: false, // Ye baar-baar repeat hoga jab scroll karoge
      mirror: true, // Jab upar scroll karoge tab bhi chalega
    });
  }, []);

  return (
    <>
      <main className="entire-page-wrapper" style={{ width: "100%", height: "100%" }}>
       
          <Navigation />
          <LearningJourney />
       

        <div data-aos="fade-left">
          <AboutUs />
        </div>

        <div data-aos="fade-right">
          <Courses />
        </div>

        <div data-aos="zoom-in">
          <PlaceMentReview />
        </div>

        <div data-aos="flip-left">
          <OurService />
        </div>

        <div data-aos="fade-up">
          <CourseReview />
        </div>

        <div data-aos="zoom-out">
          <HappyStudentStrip />
        </div>

        <div data-aos="fade-left">
          <BlogVideoNotice />
        </div>

        <div data-aos="fade-right">
          <Blog />
        </div>

        <div data-aos="zoom-in">
          <QuiryForm />
        </div>

        <div data-aos="flip-up">
          <CompanyLogoSlider />
        </div>

        <div data-aos="fade-up">
          <Faq />
        </div>

        <div data-aos="fade-down">
          <CareerCounsellingStrip />
        </div>

        <div data-aos="fade-up">
          <Footer />
        </div>
      </main>
    </>
  );
}
