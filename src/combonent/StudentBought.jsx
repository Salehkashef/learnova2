// // import React from 'react'
// import './StudentBought.css'
// function StudentBought() {
//   return (
//     <>
//       <p style={{margin:'50px 65px 20px',fontSize:'30px',fontWeight:'bold'}}>Student also bought</p>

//       <div className="botons d-flex justify-content-end mb-4">
//         <button className="btnn">
//           <img src="src\assets\angle-left.png" alt="" />
//           {/* <i className="fa-solid fa-less-than"></i> */}
//           {/* <i className="bi bi-chevron-left"></i> */}

//         </button>
//         <button className="btnn">
//           <img src="src\assets\angle-right.png" alt="" />
//           {/* <i className="fa-solid fa-greater-than"></i> */}
//           {/* <i className="bi bi-chevron-right"></i> */}
//         </button>
//       </div>

//       <div className="row row-col-3 gap-30px bought">

//         <div className="col-4 ">
//           <div className="card shadow border-0 h-100 d-flex justify-content-center align-items-center">
//             <img src="src\assets\Rectangle 33.png" className='cardimg' alt="..." />
//             <div className="card-body">
//               <div className="techerimg d-flex justify-content-lg-between align-items-center">
//                 <div className='d-flex justify-content-start align-items-center  mt-2'>
//                   <i className="fa-regular fa-pen-fancy  mb-3 mx-2 "></i>
//                   <p className="botomtext">Design</p>
//                 </div>
//                 <div className='d-flex justify-content-end align-items-center mt-2'>
//                   <i className="fa-regular fa-clock mb-3 mx-2 "></i>
//                   <p className="botomtext">3 Month</p>
//                 </div>
//               </div>
//               <h5 className="card-title" style={{marginBottom:'20px'}}>
//                 AWS Certified solutions Architect
//               </h5>
//               <p className="botomtext">Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</p>
//               <div className="techerimg d-flex justify-content-lg-between align-items-center">
//                 <div className='d-flex justify-content-start align-items-center'>
//                   <img src="src\assets\image 12 (1).png" className="cardimg2" alt="" />
//                   <p className="mt-3">Lina</p>
//                 </div>
//                 <div className='d-flex justify-content-end align-items-center mt-3'>
//                   <p className="lin">$100</p>
//                   <p className="linkes">$80</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
        
//         <div className="col-4">
//           <div className="card shadow border-0 h-100 d-flex justify-content-center align-items-center">
//             <img src="src\assets\Rectangle 33.png" className='cardimg' alt="..." />
//             <div className="card-body">
//               <div className="techerimg d-flex justify-content-lg-between align-items-center">
//                 <div className='d-flex justify-content-start align-items-center  mt-2'>
//                   <i className="fa-regular fa-pen-fancy  mb-3 mx-2 "></i>
//                   <p className="botomtext">Design</p>
//                 </div>
//                 <div className='d-flex justify-content-end align-items-center mt-2'>
//                   <i className="fa-regular fa-clock mb-3 mx-2 "></i>
//                   <p className="botomtext">3 Month</p>
//                 </div>
//               </div>
//               <h5 className="card-title" style={{marginBottom:'20px'}}>
//                 AWS Certified solutions Architect
//               </h5>
//               <p className="botomtext">Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</p>
//               <div className="techerimg d-flex justify-content-lg-between align-items-center">
//                 <div className='d-flex justify-content-start align-items-center'>
//                   <img src="src\assets\image 12 (1).png" className="cardimg2" alt="" />
//                   <p className="mt-3">Lina</p>
//                 </div>
//                 <div className='d-flex justify-content-end align-items-center mt-3'>
//                   <p className="lin">$100</p>
//                   <p className="linkes">$80</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="col-4">
//           <div className="card shadow border-0 h-100 d-flex justify-content-center align-items-center">
//             <img src="src\assets\Rectangle 33.png" className='cardimg' alt="..." />
//             <div className="card-body">
//               <div className="techerimg d-flex justify-content-lg-between align-items-center">
//                 <div className='d-flex justify-content-start align-items-center  mt-2'>
//                   <i className="fa-regular fa-pen-fancy  mb-3 mx-2 "></i>
//                   <p className="botomtext">Design</p>
//                 </div>
//                 <div className='d-flex justify-content-end align-items-center mt-2'>
//                   <i className="fa-regular fa-clock mb-3 mx-2 "></i>
//                   <p className="botomtext">3 Month</p>
//                 </div>
//               </div>
//               <h5 className="card-title" style={{marginBottom:'20px'}}>
//                 AWS Certified solutions Architect
//               </h5>
//               <p className="botomtext">Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</p>
//               <div className="techerimg d-flex justify-content-lg-between align-items-center">
//                 <div className='d-flex justify-content-start align-items-center'>
//                   <img src="src\assets\image 12 (1).png" className="cardimg2" alt="" />
//                   <p className="mt-3">Lina</p>
//                 </div>
//                 <div className='d-flex justify-content-end align-items-center mt-3'>
//                   <p className="lin">$100</p>
//                   <p className="linkes">$80</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>


//       </div>
//     </>
//   )
// }

// export default StudentBought



import { useState, useEffect } from 'react';
import './StudentBought.css';
import axiosInstance from '../../axios/interceptor';

function StudentBought() {
  const [boughtCourses, setBoughtCourses] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetchBoughtCourses();
  }, []);

  const fetchBoughtCourses = async () => {
    try {
      const response = await axiosInstance.get('http://localhost:4000/course/Enroll');
      setBoughtCourses(response.data);
    } catch (error) {
      console.error('Error fetching bought courses:', error);
    }
  };

  const handlePrevButtonClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
  };

  const handleNextButtonClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < boughtCourses.length - 1 ? prevIndex + 1 : prevIndex
    );
  };

  return (
    <>
      <p style={{ margin: '50px 65px 20px', fontSize: '30px', fontWeight: 'bold' }}>
        Student also bought
      </p>

      <div className="botons d-flex justify-content-end mb-4">
        <button className="btnn" onClick={handlePrevButtonClick}>
          <img src="src\assets\angle-left.png" alt="" />
        </button>
        <button className="btnn" onClick={handleNextButtonClick}>
          <img src="src\assets\angle-right.png" alt="" />
        </button>
      </div>

      <div className="row row-col-3 gap-30px bought">
        {boughtCourses.map((course, index) => (
          <div key={index} className={`col-4 ${index === currentIndex ? 'active' : ''}`}>
            <div className="card shadow border-0 h-100 d-flex justify-content-center align-items-center">
              <img src={course.image} className="cardimg" alt="..." />
              <div className="card-body">
                <div className="techerimg d-flex justify-content-lg-between align-items-center">
                  <div className="d-flex justify-content-start align-items-center mt-2">
                    <i className="fa-regular fa-pen-fancy  mb-3 mx-2 "></i>
                    <p className="botomtext">{course.category}</p>
                  </div>
                  <div className="d-flex justify-content-end align-items-center mt-2">
                    <i className="fa-regular fa-clock mb-3 mx-2 "></i>
                    <p className="botomtext">{course.duration}</p>
                  </div>
                </div>
                <h5 className="card-title" style={{ marginBottom: '20px' }}>
                  {course.title}
                </h5>
                <p className="botomtext">{course.description}</p>
                <div className="techerimg d-flex justify-content-lg-between align-items-center">
                  <div className="d-flex justify-content-start align-items-center">
                    <img src={course.instructorImage} className="cardimg2" alt="" />
                    <p className="mt-3">{course.instructorName}</p>
                  </div>
                  <div className="d-flex justify-content-end align-items-center mt-3">
                    <p className="lin">${course.price}</p>
                    <p className="linkes">${course.discount}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default StudentBought;
