import Image from "next/image";
import styles from "./page.module.css";
import Navigation from "@/component/Navigation";
import Link from "next/link";
import LearningJourney from "@/component/LearningJourney";
import Courses from "@/component/Courses";
import CourseReview from "@/component/CourseReview";
import AboutUs from "@/component/AboutUs";
import Footer from "@/component/Footer";
import Newsletter from "@/component/Newsletter";
import Blog from "@/component/Blog";
import Cta from "@/component/Cta";
import Testimonial from "@/component/Testimonial";
import BlogVideoNotice from "@/component/BlogVideoNotice";
import OurService from "@/component/OurService";
import HappyStudentStrip from "@/component/HappyStudentStrip";
import CareerCounsellingStrip from "@/component/CareerCounsellingStrip";
import QuiryForm from "@/component/QuiryForm";
import CompanyLogoSlider from "@/component/CompanyLogoSlider";
import Faq from "@/component/Faq";


export function generateMetadata(params) {
  return {
    title: "Join The Best International Language Institute for Foreign Languages course | Oracle Global Education",
    description: "If you have a passion for learning foreign and regional languages then this is the best institute to learn international languages. Oracle is the best coaching, learning teaching institute in Delhi. It covers all the courses of international languages ",
    keywords: ['best international language institute in Delhi', 'best foreign language institute in Delhi', 'best leading language institute in Delhi', 'best language teaching institute in Delhi', 'study with best global language institute oracle'],
    alternates: {
      canonical: `https://www.oracleglobaleducation.com`,
    },
  }
}

export default function Home() {
  return (
    <>
    <main style={{width:'100%', height:'100%'}}>
      <Navigation />
      <LearningJourney />
      <AboutUs />
      <Courses />
      <OurService />
      
      <CourseReview />
      {/* <Cta/> */}

      <HappyStudentStrip />
      
      <BlogVideoNotice />
      <Blog />
      
      {/* <Testimonial/> */}
      <QuiryForm />
      
      <CompanyLogoSlider />
      <Faq />
      <CareerCounsellingStrip />
      {/* <Newsletter/> */}
      <Footer />
      </main>
    </>
  );
}  
