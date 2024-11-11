import React from 'react'; 
import CourseDetails from './CourseDetails';
import { MetaDetails } from '@/utils/data';

// Define possible dynamic paths for static export
export async function generateStaticParams() {  
  // Map through your data to return an array of possible slugs
  const courseSlugs = MetaDetails.map((d) => ({
    courseslug: d.link,
  }));

  return courseSlugs;
}

// Generate metadata dynamically based on the slug
export async function generateMetadata({ params }) {  
  const { courseslug } = params; 
  const filterMetadata = MetaDetails.find(d => d.link === courseslug); 
  
  if (!filterMetadata) {
    return {
      title: 'Course Not Found',
      description: 'The course you are looking for does not exist.',
    };
  }

  return {
    title: filterMetadata.title,
    description: filterMetadata.description,
    keywords: filterMetadata.keywords,
    alternates: { 
      canonical: filterMetadata.canonical,
    },  
  };
}

const Page = async ({ params }) => {  
  return (
    <>
      <CourseDetails params={params} />
    </>
  );
}

export default Page;
