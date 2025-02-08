// import Link from 'next/link';
// import React from 'react';

// async function fetchBlog() {
//   try {
//     const response = await fetch('https://russianclassesindelhi.com/admin/public/api/blog');
//     const responseJson = await response.json();
//     return responseJson.blog_list.data;
//   } catch (error) {
//     console.log(error);
//     return []; // Return an empty array on error
//   }
// }

// async function fetchVideo() {
//   try {
//     const response = await fetch('https://russianclassesindelhi.com/admin/public/api/video',{
//       method: 'GET', 
//       // headers: {
//       //     'Content-Type': 'application/json',
//       // }, 
//       next: { revalidate: 10 },
//     });
    
    
//     const responseJson = await response.json();
    
//     const videoId = extractVideoId(responseJson.videos.data[0]?.video_link);
   

//     return videoId;
//   } catch (error) {
//     console.log(error);
//     return null; // Return null on error
//   }
// }

// function extractVideoId(url) {
//   const match = url?.match(/(?:\?|&)v=([^&#]+)/);
//   return match ? match[1] : null;
// }

// const BlogVideoNotice = async () => {
//   const blogData = await fetchBlog();
//   const videoData = await fetchVideo();

//   return (
   

//     <section className='Blog-Video-Notice-wrapper pt-pb'>
      
     
//       <div className="main-title text-center mb-0">
//           <h5 className="mb-0">Latest Update</h5>
//           <h2 className='sec-title'>Latest Blog & Videos</h2>
//           <br></br> 
//         </div>
//       <div className='container'>
//         <div className='row'>
//           <div className='col-lg-7'>
//             {/* <h1 className='text-white title mb-5px'>Blogs</h1>
//             <hr /> */}
//             <div className='row'>
//               {blogData.length > 0 ? (
//                 blogData.slice(0, 2).map((blogValue,) => (
//                   <div className="col-lg-12 col-md-12 col-sm-12 Blogs-card-wrapper-grid-common" key={blogValue.id}>
//                     <div className="card-blog">
//                       <div className="row g-4">
//                         <div className="col-md-4">
//                           <Link href={`/blog/${blogValue.slug}`}>
//                             <img src={blogValue.blog_image} className="img-fluid rounded-start" alt="Blog Image" />
//                           </Link>
//                         </div>
//                         <div className="col-md-8">
//                           <div className="card-content mb-3 text-start">
//                             <h3><Link href={`/blog/${blogValue.slug}`}>{blogValue.blog_title}</Link></h3>
//                             <p>{blogValue.short_desc}</p>
//                                 <Link href={`/blog/${blogValue.slug}`} className='btn btn-theme btn-extra-small'>
//                                   <i className="fa-solid fa-arrow-right"></i> Read More
//                                 </Link>
                             
                         
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))
//               ) : (
//                 <p className="text-white">No blogs available.</p>
//               )}
//             </div>
//           </div>
//           <div className='col-lg-5'>
//           {/* <div className='row d-flex'>
//             <div className='col'><h1 className='title mb-5px'>Video</h1></div>
//             <div className='col text-end'> <a className='text-white' href='https://www.youtube.com/channel/UC31D8Zz8hOMbJLdZOVpGW9Q' target='blank'>View More</a></div>
            
           
//           </div>
//             <hr /> */}
//             <div className="card-video">
//             {videoData ? (
//               <iframe width="100%" height="310px" src={`https://www.youtube.com/embed/${videoData}`} allow="accelerometer; autoPlay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
//             ) : (
//               <p className="text-white">No video available.</p>
//             )}
//           </div> </div>
//         </div>
//       </div>
     
    
//     </section>
//   );
// }

// export default BlogVideoNotice;



"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const BlogVideoNotice = () => {
    const [blogData, setBlogData] = useState([]);
    const [videoData, setVideoData] = useState(null);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await fetch('https://russianclassesindelhi.com/admin/public/api/blog');
                const responseJson = await response.json();
                setBlogData(responseJson.blog_list.data);
            } catch (error) {
                console.log(error);
            }
        };

        const fetchVideo = async () => {
            try {
                const response = await fetch('https://russianclassesindelhi.com/admin/public/api/video');
                const responseJson = await response.json();
                const videoId = extractVideoId(responseJson.videos.data[0]?.video_link);
                setVideoData(videoId);
            } catch (error) {
                console.log(error);
            }
        };

        fetchBlog();
        fetchVideo();
    }, []);

    function extractVideoId(url) {
        const match = url?.match(/(?:\?|&)v=([^&#]+)/);
        return match ? match[1] : null;
    }

    return (
        <section className='Blog-Video-Notice-wrapper pt-pb'>
            <div className="main-title text-center mb-0">
                <h5 className="mb-0">Latest Update</h5>
                <h2 className='sec-title'>Latest Blog & Videos</h2>
                <br />
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-7'>
                        <div className='row'>
                            {blogData.length > 0 ? (
                                blogData.slice(0, 2).map((blogValue) => (
                                    <div className="col-lg-12 col-md-12 col-sm-12" key={blogValue.id}>
                                        <div className="card-blog">
                                            <div className="row g-4">
                                                <div className="col-md-4">
                                                    <Link href={`/blog/${blogValue.slug}`}>
                                                        <img src={blogValue.blog_image} className="img-fluid rounded-start" alt="Blog Image" />
                                                    </Link>
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="card-content mb-3 text-start">
                                                        <h3><Link href={`/blog/${blogValue.slug}`}>{blogValue.blog_title}</Link></h3>
                                                        <p>{blogValue.short_desc}</p>
                                                        <Link href={`/blog/${blogValue.slug}`} className='btn btn-theme btn-extra-small'>
                                                            <i className="fa-solid fa-arrow-right"></i> Read More
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p className="text-white">No blogs available.</p>
                            )}
                        </div>
                    </div>
                    <div className='col-lg-5'>
                        <div className="card-video">
                            {videoData ? (
                                <iframe width="100%" height="310px" src={`https://www.youtube.com/embed/${videoData}`} allow="accelerometer; autoPlay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
                            ) : (
                                <p className="text-white">No video available.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogVideoNotice;

