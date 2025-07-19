// import React from "react";
// import { MdLocationOn } from "react-icons/md";

// import "./PropertyDetails.css";
// import PropertyDescription from "../../component/PropertyDescription/PropertyDescription";
// import PropertyAddress from "../../component/PropertyAddress/PropertyAddress";
// import PropertyFeatures from "../../component/PropertyFeatures/PropertyFeatures";
// import { Link, useLoaderData } from "react-router-dom";
// //my code
// import { useState } from "react";

// const [comments, setComments] = useState([]);
// const [newComment, setNewComment] = useState("");

// const handleCommentSubmit = (e) => {
//   e.preventDefault();
//   if (newComment.trim()) {
//     const commentObj = {
//       text: newComment,
//       date: new Date().toLocaleString(),
//     };
//     setComments([...comments, commentObj]);
//     setNewComment("");
//   }
// };

// //Mycode

// const PropertyDetails = () => {
//   const propertyData = useLoaderData();
//   console.log(propertyData);
//   const {
//     address,
//     area,
//     bath,
//     category,
//     city,
//     details,
//     elevator,
//     email,
//     garage,
//     gas,
//     image,
//     image1,
//     image2,
//     kitchen,
//     month,
//     name,
//     phone,
//     propertySize,
//     rent,
//     room,
//     title,
//     _id,
//   } = propertyData;

//   console.log(image, image1, image2);

//   return (
//     <div>
//       <section className="banner-section container my-5">
//         <h3>{title}</h3>
//         <p>
//           <MdLocationOn className="font-awesome-icon me-2" /> {area}, {city}
//         </p>
//         <div className="row gx-5">
//           <div className="col-lg-8 col-md-8 col-12">
//             <div
//               id="carouselExampleIndicators1"
//               className="carousel slide"
//               data-bs-ride="true"
//             >
//               <div className="carousel-indicators">
//                 <button
//                   type="button"
//                   data-bs-target="#carouselExampleIndicators1"
//                   data-bs-slide-to="0"
//                   className="active"
//                   aria-current="true"
//                   aria-label="Slide 1"
//                 ></button>
//                 <button
//                   type="button"
//                   data-bs-target="#carouselExampleIndicators1"
//                   data-bs-slide-to="1"
//                   aria-label="Slide 2"
//                 ></button>
//                 <button
//                   type="button"
//                   data-bs-target="#carouselExampleIndicators1"
//                   data-bs-slide-to="2"
//                   aria-label="Slide 3"
//                 ></button>
//               </div>
//               <div className="carousel-inner">
//                 <div className="carousel-item active">
//                   <img
//                     src={image}
//                     className="d-block w-100 banner-image-resize"
//                     alt="..."
//                   />
//                 </div>

//                 <div className="carousel-item">
//                   <img
//                     src={image1}
//                     className="d-block w-100 banner-image-resize"
//                     alt="..."
//                   />
//                 </div>
//                 <div className="carousel-item">
//                   <img
//                     src={image2}
//                     className="d-block w-100 banner-image-resize"
//                     alt="..."
//                   />
//                 </div>
//               </div>
//               <button
//                 className="carousel-control-prev"
//                 type="button"
//                 data-bs-target="#carouselExampleIndicators1"
//                 data-bs-slide="prev"
//               >
//                 <span
//                   className="carousel-control-prev-icon"
//                   aria-hidden="true"
//                 ></span>
//                 <span className="visually-hidden">Previous</span>
//               </button>
//               <button
//                 className="carousel-control-next"
//                 type="button"
//                 data-bs-target="#carouselExampleIndicators1"
//                 data-bs-slide="next"
//               >
//                 <span
//                   className="carousel-control-next-icon"
//                   aria-hidden="true"
//                 ></span>
//                 <span className="visually-hidden">Next</span>
//               </button>
//             </div>
//             <div className="features-section mt-3">
//               <div className="features">
//                 <PropertyDescription></PropertyDescription>
//               </div>
//               <div className="features">
//                 <PropertyAddress></PropertyAddress>
//               </div>
//               <div className="features">
//                 <PropertyFeatures></PropertyFeatures>
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-4 col-md-4 col-12 m-3 m-lg-0 m-md-0  contact-section ">
//             <h4>Manage By:- </h4>
//             <h5>RentUs</h5>
//             <img src="./assets/img/logo.svg" alt="" />
//             <p className="mt-3">
//               Contact With property owner for more information
//             </p>
//             <div className="mt-2 fs-5">
//               Chat <i className="fa-solid fa-message font-awesome-icon"></i>
//             </div>

//             <div className="row mt-2">
//               <div className="col-6">
//                 {" "}
//                 <button className="contact-btn">
//                   <a href={"tel:" + phone}>Call</a>
//                 </button>
//               </div>
//               <div className="col-6">
//                 {" "}
//                 <button className="contact-btn">
//                   <a href={"mailto:" + email}>Email</a>
//                 </button>
//               </div>
//               {/* <div className="col-6 mt-5">
//                 {" "}
//                 <button className="contact-btn">
//                   <Link to={`/conversations/${_id}`}>Message</Link>
//                 </button>

//                  <div className="col-6 mt-5">
//                 {" "}
//                 <button className="contact-btn">
//                   <a href={"mailto:" + email}>Booking</a>
//                 </button>
//               </div>

//               </div> */}

//               <div className="row mt-5">
//                 <div className="col-6">
//                   <button className="contact-btn">
//                     <Link to={`/conversations/${_id}`}>Message</Link>
//                   </button>
//                 </div>
//                 <div className="col-6">
//                   <button className="contact-btn">
//                     <a href={"mailto:" + email}>Booking</a>
//                   </button>
//                 </div>
//               </div>
//               <hr className="my-4" />
//               <h5>Comments</h5>
//               <div className="comment-box mt-3">
//                 {comments.length === 0 ? (
//                   <p>No comments yet.</p>
//                 ) : (
//                   <ul className="list-group">
//                     {comments.map((comment, index) => (
//                       <li key={index} className="list-group-item">
//                         <p className="mb-1">{comment.text}</p>
//                         <small className="text-muted">{comment.date}</small>
//                       </li>
//                     ))}
//                   </ul>
//                 )}

//                 <form className="mt-3" onSubmit={handleCommentSubmit}>
//                   <textarea
//                     className="form-control mb-2"
//                     rows="3"
//                     placeholder="Write a comment..."
//                     value={newComment}
//                     onChange={(e) => setNewComment(e.target.value)}
//                   />
//                   <button className="btn btn-primary" type="submit">
//                     Submit
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default PropertyDetails;
//maraaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa

// import React, { useState } from "react";
// import { MdLocationOn } from "react-icons/md";
// import { Link, useLoaderData } from "react-router-dom";
// import { useEffect } from "react";

// import "./PropertyDetails.css";
// import PropertyDescription from "../../component/PropertyDescription/PropertyDescription";
// import PropertyAddress from "../../component/PropertyAddress/PropertyAddress";
// import PropertyFeatures from "../../component/PropertyFeatures/PropertyFeatures";
// import { useContext } from "react";
// import { AuthContext } from "../../contexts/AuthProvider"; // Adjust path if needed

// const PropertyDetails = () => {
//   const [comments, setComments] = useState([]);
//   const [newComment, setNewComment] = useState("");
//   const { user } = useContext(AuthContext);
//   const [loadingComments, setLoadingComments] = useState(false);

//   const handleCommentSubmit = async (e) => {
//     e.preventDefault();

//     if (!user) {
//       alert("Please log in to post a review.");
//       return;
//     }

//     if (newComment.trim()) {
//       const commentObj = {
//         text: newComment,
//         date: new Date().toLocaleString(),
//         userEmail: user.email,
//         userName: user.displayName || "Anonymous",
//         propertyId: _id,
//       };

//       try {
//         const res = await fetch("http://localhost:5000/feedback", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(commentObj),
//         });

//         if (res.ok) {
//           setComments([...comments, commentObj]);
//           setNewComment("");
//         } else {
//           alert("Failed to submit review.");
//         }
//       } catch (err) {
//         console.error("Error submitting review:", err);
//       }
//     }
//   };

//   const handleBooking = async () => {
//     if (!user?.email) {
//       alert("Please log in to book this property.");
//       return;
//     }

//     const booking = {
//       propertyId: _id,
//       propertyTitle: title,
//       renterEmail: user.email,
//       ownerEmail: email,
//     };

//     try {
//       const res = await fetch("http://localhost:5000/bookings", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(booking),
//       });

//       const data = await res.json();

//       if (data.insertedId) {
//         alert("Booking request sent to the owner!");
//       } else {
//         alert("Failed to send booking request.");
//       }
//     } catch (err) {
//       console.error("Booking error:", err);
//       alert("An error occurred. Please try again.");
//     }
//   };

//   const propertyData = useLoaderData();
//   //confusion
//   useEffect(() => {
//   if (!_id) return; // ✅ wait until _id is ready

//   const fetchComments = async () => {
//     setLoadingComments(true);
//     try {
//       const res = await fetch("http://localhost:5000/feedback");
//       const data = await res.json();
//       const filtered = data.filter((comment) => comment.propertyId === _id);
//       setComments(filtered);
//     } catch (err) {
//       console.error("Error fetching comments:", err);
//     } finally {
//       setLoadingComments(false);
//     }
//   };

//   fetchComments();
// }, [_id]);


//   const {
//     address,
//     area,
//     bath,
//     category,
//     city,
//     details,
//     elevator,
//     email,
//     garage,
//     gas,
//     image,
//     image1,
//     image2,
//     kitchen,
//     month,
//     name,
//     phone,
//     propertySize,
//     rent,
//     room,
//     title,
//     _id,
//   } = propertyData;

//   return (
//     <div>
//       <section className="banner-section container my-5">
//         <h3>{title}</h3>
//         <p>
//           <MdLocationOn className="font-awesome-icon me-2" /> {area}, {city}
//         </p>
//         <div className="row gx-5">
//           <div className="col-lg-8 col-md-8 col-12">
//             <div
//               id="carouselExampleIndicators1"
//               className="carousel slide"
//               data-bs-ride="true"
//             >
//               <div className="carousel-indicators">
//                 <button
//                   type="button"
//                   data-bs-target="#carouselExampleIndicators1"
//                   data-bs-slide-to="0"
//                   className="active"
//                   aria-current="true"
//                   aria-label="Slide 1"
//                 ></button>
//                 <button
//                   type="button"
//                   data-bs-target="#carouselExampleIndicators1"
//                   data-bs-slide-to="1"
//                   aria-label="Slide 2"
//                 ></button>
//                 <button
//                   type="button"
//                   data-bs-target="#carouselExampleIndicators1"
//                   data-bs-slide-to="2"
//                   aria-label="Slide 3"
//                 ></button>
//               </div>
//               <div className="carousel-inner">
//                 <div className="carousel-item active">
//                   <img
//                     src={image}
//                     className="d-block w-100 banner-image-resize"
//                     alt="Property Image 1"
//                   />
//                 </div>

//                 <div className="carousel-item">
//                   <img
//                     src={image1}
//                     className="d-block w-100 banner-image-resize"
//                     alt="Property Image 2"
//                   />
//                 </div>
//                 <div className="carousel-item">
//                   <img
//                     src={image2}
//                     className="d-block w-100 banner-image-resize"
//                     alt="Property Image 3"
//                   />
//                 </div>
//               </div>
//               <button
//                 className="carousel-control-prev"
//                 type="button"
//                 data-bs-target="#carouselExampleIndicators1"
//                 data-bs-slide="prev"
//               >
//                 <span
//                   className="carousel-control-prev-icon"
//                   aria-hidden="true"
//                 ></span>
//                 <span className="visually-hidden">Previous</span>
//               </button>
//               <button
//                 className="carousel-control-next"
//                 type="button"
//                 data-bs-target="#carouselExampleIndicators1"
//                 data-bs-slide="next"
//               >
//                 <span
//                   className="carousel-control-next-icon"
//                   aria-hidden="true"
//                 ></span>
//                 <span className="visually-hidden">Next</span>
//               </button>
//             </div>

//             <div className="features-section mt-3">
//               <div className="features">
//                 <PropertyDescription />
//               </div>
//               <div className="features">
//                 <PropertyAddress />
//               </div>
//               <div className="features">
//                 <PropertyFeatures />
//               </div>
//             </div>
//           </div>

//           <div className="col-lg-4 col-md-4 col-12 m-3 m-lg-0 m-md-0 contact-section">
//             <h4>Manage By:- </h4>
//             <h5>RentUs</h5>
//             <img src="./assets/img/logo.svg" alt="Company Logo" />
//             <p className="mt-3">
//               Contact with property owner for more information
//             </p>
//             <div className="mt-2 fs-5">
//               Chat <i className="fa-solid fa-message font-awesome-icon"></i>
//             </div>

//             <div className="row mt-2">
//               <div className="col-6">
//                 <button className="contact-btn">
//                   <a href={`tel:${phone}`}>Call</a>
//                 </button>
//               </div>
//               <div className="col-6">
//                 <button className="contact-btn">
//                   <a href={`mailto:${email}`}>Email</a>
//                 </button>
//               </div>
//             </div>
//             <div className="row mt-5">
//               <div className="col-6">
//                 <Link to={`/conversations/${_id}`}>
//                   <button className="contact-btn w-100">Message</button>
//                 </Link>
//               </div>
//               <div className="col-6">
//                 <button className="contact-btn w-100" onClick={handleBooking}>
//                   Booking
//                 </button>
//               </div>
//             </div>

//             <hr className="my-4" />
//             <h5>Review</h5>
//             <div className="comment-box mt-3">
//               {comments.length === 0 ? (
//                 <p>No review yet.</p>
//               ) : (
//                 <ul className="list-group">
//                   {comments.map((comment, index) => (
//                     <li key={index} className="list-group-item">
//                       <p className="mb-1">{comment.text}</p>
//                       <small className="text-muted">
//                         By {comment.userName || "Anonymous"} on {comment.date}
//                       </small>
//                     </li>
//                   ))}
//                 </ul>
//               )}

//               <form className="mt-3" onSubmit={handleCommentSubmit}>
//                 <textarea
//                   className="form-control mb-2"
//                   rows="3"
//                   placeholder="Write a comment..."
//                   value={newComment}
//                   onChange={(e) => setNewComment(e.target.value)}
//                 />
//                 <button className="btn btn-primary" type="submit">
//                   Submit
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default PropertyDetails;
import React, { useState, useEffect, useContext } from "react";
import { MdLocationOn } from "react-icons/md";
import { Link, useLoaderData } from "react-router-dom";

import "./PropertyDetails.css";
import PropertyDescription from "../../component/PropertyDescription/PropertyDescription";
import PropertyAddress from "../../component/PropertyAddress/PropertyAddress";
import PropertyFeatures from "../../component/PropertyFeatures/PropertyFeatures";
import { AuthContext } from "../../contexts/AuthProvider"; // Adjust path if needed

const PropertyDetails = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [loadingComments, setLoadingComments] = useState(false);
  const { user } = useContext(AuthContext);

  const propertyData = useLoaderData();

  // ✅ Move destructuring ABOVE useEffect so _id is available
  const {
    address,
    area,
    bath,
    category,
    city,
    details,
    elevator,
    email,
    garage,
    gas,
    image,
    image1,
    image2,
    kitchen,
    month,
    name,
    phone,
    propertySize,
    rent,
    room,
    title,
    _id,
  } = propertyData;

  // ✅ Safe useEffect: wait for _id before fetching comments
  useEffect(() => {
    if (!_id) return;

    const fetchComments = async () => {
      setLoadingComments(true);
      try {
        const res = await fetch("http://localhost:5000/feedback");
        const data = await res.json();
        const filtered = data.filter((comment) => comment.propertyId === _id);
        setComments(filtered);
      } catch (err) {
        console.error("Error fetching comments:", err);
      } finally {
        setLoadingComments(false);
      }
    };

    fetchComments();
  }, [_id]);

  // ✅ Submit new review
  const handleCommentSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      alert("Please log in to post a review.");
      return;
    }

    if (newComment.trim()) {
      const commentObj = {
        text: newComment,
        date: new Date().toLocaleString(),
        userEmail: user.email,
        userName: user.displayName || "Anonymous",
        propertyId: _id,
      };

      try {
        const res = await fetch("http://localhost:5000/feedback", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(commentObj),
        });

        if (res.ok) {
          setComments([...comments, commentObj]);
          setNewComment("");
        } else {
          alert("Failed to submit review.");
        }
      } catch (err) {
        console.error("Error submitting review:", err);
      }
    }
  };

  const handleBooking = async () => {
    if (!user?.email) {
      alert("Please log in to book this property.");
      return;
    }

const booking = {
  propertyId: _id,
  propertyTitle: title,
  renterEmail: user.email,
  renterName: user.displayName || "Anonymous", // ✅ ADD THIS
  ownerEmail: email,
};


    try {
      const res = await fetch("http://localhost:5000/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(booking),
      });

      const data = await res.json();

      if (data.insertedId) {
        alert("Booking request sent to the owner!");
      } else {
        alert("Failed to send booking request.");
      }
    } catch (err) {
      console.error("Booking error:", err);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div>
      <section className="banner-section container my-5">
        <h3>{title}</h3>
        <p>
          <MdLocationOn className="font-awesome-icon me-2" /> {area}, {city}
        </p>
        <div className="row gx-5">
          <div className="col-lg-8 col-md-8 col-12">
            <div
              id="carouselExampleIndicators1"
              className="carousel slide"
              data-bs-ride="true"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators1"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators1"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators1"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src={image}
                    className="d-block w-100 banner-image-resize"
                    alt="Property Image 1"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={image1}
                    className="d-block w-100 banner-image-resize"
                    alt="Property Image 2"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={image2}
                    className="d-block w-100 banner-image-resize"
                    alt="Property Image 3"
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators1"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators1"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>

            <div className="features-section mt-3">
              <div className="features">
                <PropertyDescription />
              </div>
              <div className="features">
                <PropertyAddress />
              </div>
              <div className="features">
                <PropertyFeatures />
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-12 m-3 m-lg-0 m-md-0 contact-section">
            <h4>Manage By:- </h4>
            <h5>RentUs</h5>
            <img src="./assets/img/logo.svg" alt="Company Logo" />
            <p className="mt-3">
              Contact with property owner for more information
            </p>
            <div className="mt-2 fs-5">
              Chat <i className="fa-solid fa-message font-awesome-icon"></i>
            </div>

            <div className="row mt-2">
              <div className="col-6">
                <button className="contact-btn">
                  <a href={`tel:${phone}`}>Call</a>
                </button>
              </div>
              <div className="col-6">
                <button className="contact-btn">
                  <a href={`mailto:${email}`}>Email</a>
                </button>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-6">
                <Link to={`/conversations/${_id}`}>
                  <button className="contact-btn w-100">Message</button>
                </Link>
              </div>
              <div className="col-6">
                <button className="contact-btn w-100" onClick={handleBooking}>
                  Booking
                </button>
              </div>
            </div>

            <hr className="my-4" />
            <h5>Review</h5>
            <div className="comment-box mt-3">
              {comments.length === 0 ? (
                <p>No review yet.</p>
              ) : (
                <ul className="list-group">
                  {comments.map((comment, index) => (
                    <li key={index} className="list-group-item">
                      <p className="mb-1">{comment.text}</p>
                      <small className="text-muted">
                        By {comment.userName || "Anonymous"} on {comment.date}
                      </small>
                    </li>
                  ))}
                </ul>
              )}

              <form className="mt-3" onSubmit={handleCommentSubmit}>
                <textarea
                  className="form-control mb-2"
                  rows="3"
                  placeholder="Write a comment..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                />
                <button className="btn btn-primary" type="submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PropertyDetails;
