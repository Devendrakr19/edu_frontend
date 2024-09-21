import "./App.css";
import React from "react";
import RoutConfig from "./Components/routes/RoutConfig";
import { Provider } from 'react-redux';
 import { store } from "./Components/Redux/store";

const App = () => {
  return (
    <>
      <Provider store={store}>
       <RoutConfig />
      </Provider>
    </>
  );
};

export default App;

// import { useState } from "react";
// import { Route, Routes } from "react-router-dom";
// import Login from "./Components/Unpadh/Login";
// import Signup from "./Components/Unpadh/Signup";
// import Homepage from "./Components/Unpadh/Homepage";
// import Dashboard from "./Components/Unpadh/StdDashboard/Dashboard";
// import Mylearning from "./Components/Unpadh/StdDashboard/Mylearning";
// import Notification from "./Components/Unpadh/StdDashboard/Notification";
// import Message from "./Components/Unpadh/StdDashboard/Message";
// import Paymentmethod from "./Components/Unpadh/StdDashboard/Paymentmethod";
// import Subscription from "./Components/Unpadh/StdDashboard/Subscription";
// import Unpadhcredit from "./Components/Unpadh/StdDashboard/Unpadhcredit";
// import Purchasehistory from "./Components/Unpadh/StdDashboard/Purchasehisty/Purchasehistory";
// import Languagelist from "./Components/Unpadh/StdDashboard/Languagelist";
// import Publicprofle from "./Components/Unpadh/StdDashboard/Publicprofile";
// import Editprofile from "./Components/Unpadh/StdDashboard/StdEdit_profile/Editprofile";
// import Teacherdashboard from "./Components/Unpadh/Teacherdashbrd/Teacherdashboard";
// import Teachersignup from "./Components/Unpadh/Teacherdashbrd/Teachersignup";
// import Teacherlogin from "./Components/Unpadh/Teacherdashbrd/Teacherlogin";
// import Sendmailpsword from "./Components/Unpadh/StdForgotpassword/Sendmailpsword";
// import Resetpassword from "./Components/Unpadh/StdForgotpassword/Resetpassword";
// import Tsendmailpswrd from "./Components/Unpadh/teacherForgotpswd/Tsendmailpswd";
// import Tresetpswd from "./Components/Unpadh/teacherForgotpswd/Tresetpswd";
// import Lab from "./Components/Unpadh/StdDashboard/Lab/Lab";
// import Courseanalyse from "./Components/Unpadh/StdDashboard/Courseanalyse";
// import Tnotification from "./Components/Unpadh/Teacherdashbrd/Tnotification";
// import Teacheractsetting from "./Components/Unpadh/Teacherdashbrd/Tactssetting/Teacheractsetting";
// import Teacheractsecurity from "./Components/Unpadh/Teacherdashbrd/Tactssetting/Teacheractsecurity";
// import TeachernotificSetting from "./Components/Unpadh/Teacherdashbrd/Tactssetting/TeachernotificSetting";
// import TeacherMessagestng from "./Components/Unpadh/Teacherdashbrd/Tactssetting/TeacherMessagestng";
// import TeachercloseAccount from "./Components/Unpadh/Teacherdashbrd/Tactssetting/TeachercloseAccount";
// import Admindashboard from "./Components/Unpadh/AdminDashboard/Admindashboard";
// // import BusinessNavbar from "./Components/Business/Navbar_content/BusinessNavbar";
// import TpayoutAndtax from "./Components/Unpadh/Teacherdashbrd/Payout_and_Tax/TpayoutAndtax";
// import TeacherPofilepicture from "./Components/Unpadh/Teacherdashbrd/Payout_and_Tax/TeacherPofilepicture";
// import InstructorTems from "./Components/Unpadh/Teacherdashbrd/Payout_and_Tax/InstructorTems";
// import UredxMarketing from "./Components/Unpadh/Teacherdashbrd/Payout_and_Tax/UredxMarketing";
// import Payout_taxDetails from "./Components/Unpadh/Teacherdashbrd/Payout_and_Tax/Payout_taxDetails";
// import ProfileEdit from "./Components/Unpadh/Teacherdashbrd/Edit_Profile/ProfileEdit";
// import UredxProfile from "./Components/Unpadh/Teacherdashbrd/Edit_Profile/UredxProfile";
// import ProfilePicture from "./Components/Unpadh/Teacherdashbrd/Edit_Profile/ProfilePicture";
// import PrivacySetting from "./Components/Unpadh/Teacherdashbrd/Edit_Profile/PrivacySetting";
// import TeacherRecordedclass from "./Components/Unpadh/Teacherdashbrd/TrecordedClasses/TeacherRecordedclass";
// import Addpage from "./Components/Unpadh/Teacherdashbrd/TrecordedClasses/Addpage";
// import createfolder from "./Components/Unpadh/Teacherdashbrd/TrecordedClasses/TeacharRecordFolderApi";
// import Addvideo from "./Components/Unpadh/Teacherdashbrd/TrecordedClasses/Addvideo";
// import Contact from "./Components/Unpadh/ContactPage/Contact";
// import Coursedetails from "./Components/Unpadh/AdminDashboard/CourseManagement/Coursedetails";
// import Addcourse from "./Components/Unpadh/AdminDashboard/CourseManagement/Addcourse";
// import { courses } from "./Components/Unpadh/AdminDashboard/CourseManagement/CourseApi";
// import { option } from "./Components/Unpadh/AdminDashboard/CourseManagement/OptionforfilterAPI";
// import TeacherList from "./Components/Unpadh/AdminDashboard/TeacherManagement/TeacherList";
// import { teacherlistdata } from "./Components/Unpadh/AdminDashboard/TeacherManagement/TeacherListAPI";
// import DetailsOfTeacher from "./Components/Unpadh/AdminDashboard/TeacherManagement/DetailsOfTeacher";
// import BusinessHome from "./Components/Business/BusinessHome/BusinessHome";
// import StudentList from "./Components/Unpadh/AdminDashboard/StudentManagement/StudentList";
// import { studentlistdata } from "./Components/Unpadh/AdminDashboard/StudentManagement/StudentListAPI";
// import DetailsOfStudent from "./Components/Unpadh/AdminDashboard/StudentManagement/DetailsofStudent";
// import CartPage from "./Components/Unpadh/CartPage";
// import Navbar from "./Components/Unpadh/Navbar";
// import AccountSettingTab from "./Components/Unpadh/StdDashboard/acsettingFile/AccountSettingTab";
// import CourseSinglePage from "./Components/layouts/landing-pages/Page4/CourseSinglePage";

// function App() {
//   // for Add To cart
//   const [cart, setCart] = useState([]);

//   const AddToCart = (products) => {
//     setCart([...cart, products]);
//   };
//   // for Remove Add to cart iteam
//   const handleRemove = (id) => {
//     const RemoveCartIteam = cart.filter((filterIteam) => filterIteam.id !== id);
//     setCart(RemoveCartIteam);
//   };

//   //  calculate total price

//   const getTotalPrice = () => {
//     const totalPrice = cart.reduce((totalCost, cartItem) => {
//       return totalCost + parseFloat(cartItem.price); // parseFloat()  to parse a string argument and return a floating-point number
//     }, 0);

//     const formattedPrice = totalPrice.toFixed(2); // Fixed to 2 decimal places
//     return `₹${formattedPrice}`; // Add ₹ symbol
//   };
//   const getMaxTotalPrice = () => {
//     const totalPrice = cart.reduce((totalCost, cartItem) => {
//       return totalCost + parseFloat(cartItem.maxprice); // parseFloat()  to parse a string argument and return a floating-point number
//     }, 0);

//     const formattedPrice = totalPrice.toFixed(2); // Fixed to 2 decimal places
//     return `₹${formattedPrice}`; // Add ₹ symbol
//   };
//   return (
//     <>
//       <Routes>
//         <Route path="/" element={<Navbar AddCart={cart} />}>
//           <Route path="" element={<Homepage />} />
//           <Route path="Contact" element={<Contact />} />
//           <Route
//             path="/cart"
//             element={
//               <CartPage
//                 AddCart={cart}
//                 handleRemove={handleRemove}
//                 getTotalPrice={getTotalPrice}
//                 getMaxTotalPrice={getMaxTotalPrice}
//               />
//             }
//           />

//           {/* //.....Single Page for each course Routing ....... */}
//           <Route
//             path="/Courses/:courseTitle"
//             element={<CourseSinglePage AddToCart={AddToCart} />}
//           />

//           {/* //.....Students Dashboard Routing start....... */}
//           <Route path="/dashboard/" element={<Dashboard />}>
//             <Route path="" element={<Mylearning />} />
//             <Route path="lab" element={<Lab />} />
//             <Route path="courseanalyse" element={<Courseanalyse />} />
//             {/* <Route path="wishlist" element={<Wishlist />} /> */}
//             <Route path="notification" element={<Notification />} />
//             <Route path="message" element={<Message />} />
//             <Route path="accountsetting" element={<AccountSettingTab />} />
//             <Route path="paymentmethod" element={<Paymentmethod />} />
//             <Route path="subscription" element={<Subscription />} />
//             <Route path="unpadhcredit" element={<Unpadhcredit />} />
//             <Route path="purchasehistory" element={<Purchasehistory />} />
//             <Route path="languagelist" element={<Languagelist />} />
//             <Route path="publicprofile" element={<Publicprofle />} />
//             <Route path="editprofile" element={<Editprofile />} />
//           </Route>
//           {/* // ..................Students Dashboard Routing End............. // */}

//           {/* ..................Teacher Dashboard Routing start........ */}
//           <Route path="/addpage" element={<Addpage />} />
//           <Route path="/upload_video/:id" element={<Addvideo />} />
//           <Route path="/teacherdashboard/" element={<Teacherdashboard />}>
//             ....................Teacher Recorded class area..............
//             <Route
//               path=""
//               element={<TeacherRecordedclass createfolder={createfolder} />}
//             />
//             <Route path="teachernotificaton" element={<Tnotification />} />
//             {/* .........Teacher account setting nested routing............. */}
//             <Route path="teacheractsetting" element={<Teacheractsetting />}>
//               <Route path="" element={<Teacheractsecurity />} />
//               <Route
//                 path="teacher_notification_setting"
//                 element={<TeachernotificSetting />}
//               />
//               <Route
//                 path="teacher_message_setting"
//                 element={<TeacherMessagestng />}
//               />
//               <Route
//                 path="teacher_close_account"
//                 element={<TeachercloseAccount />}
//               />
//             </Route>
//             {/* ...........Teacher papyout and tax nested routing............ */}
//             <Route path="Teacher_payout_and_tax" element={<TpayoutAndtax />}>
//               <Route path="" element={<TeacherPofilepicture />} />
//               <Route path="instructor_terms" element={<InstructorTems />} />
//               <Route path="Uredx_Marketing" element={<UredxMarketing />} />
//               <Route
//                 path="Payout_tax_Details"
//                 element={<Payout_taxDetails />}
//               />
//             </Route>
//             {/* ....Edit profile nested routing start........  */}
//             <Route path="Edit_profile" element={<ProfileEdit />}>
//               <Route path="" element={<UredxProfile />} />
//               <Route path="profile_picture" element={<ProfilePicture />} />
//               <Route path="privacy_setting" element={<PrivacySetting />} />
//             </Route>
//           </Route>

//           {/* .........Teacher Dashboard routing End............. */}

//           {/* //......Admin Routing area Start........... */}

//           <Route path="/admin_dashboard/" element={<Admindashboard />}>
//             {/* .............Course management routing............ */}
//             <Route path="" element={<Addcourse />} />
//             <Route
//               path="admn-course-details"
//               element={<Coursedetails courses={courses} option={option} />}
//             />

//             {/* .....................Teacher management routing............ */}
//             <Route
//               path="teacher-list"
//               element={<TeacherList teacherlistdata={teacherlistdata} />}
//             />
//             <Route path="detailsofteacher/:id" element={<DetailsOfTeacher />} />

//             {/* .....................Student management routing............ */}
//             <Route
//               path="student-list"
//               element={<StudentList studentlistdata={studentlistdata} />}
//             />
//             <Route path="detailsofstudent/:id" element={<DetailsOfStudent />} />
//           </Route>
//         {/* //......Admin Routing area End........... */}
//         </Route>

//         {/* // ...Teacher singup, login and forgot pswd start............. */}
//         <Route path="/teachersignup" element={<Teachersignup />} />
//         <Route path="/teacherlogin" element={<Teacherlogin />} />
//         <Route path="/tsendmail" element={<Tsendmailpswrd />} />
//         <Route path="/tresetpswd" element={<Tresetpswd />} />
//         {/* // ..................Teacher singup and login End............. */}
//         {/* //....Students singup, login and forgot pswd.......... */}
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/sendmail" element={<Sendmailpsword />} />
//         <Route path="/resetpassword" element={<Resetpassword />} />
//         {/* //..............Business page start............ */}

//         {/* <Route path="" element={<BusinessNavbar />}>
//         </Route> */}
//         <Route path="/business" element={<BusinessHome />} />
//       </Routes>
//     </>
//   );
// }

// export default App;
