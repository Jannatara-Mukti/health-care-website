import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const style = {
        fontSize: 50
      };

    return (
        <div className="bg-dark text-center text-white py-5">
        <div className="row mb-5">
            <div className="col-md-4 ms-20 col-12">
                <h3 className="text-xl font-semibold">Contact Us</h3>
                <p><i className="fas fa-map-marker-alt"></i>   House#7, Road#4, Dhanmondi, Dhaka-1205</p>
                <p><i className="fas fa-phone"></i>   <span>880 1624666000,</span>
                <span>+880 1624888444,</span> 
                <span>+880 1966177177</span></p>
                <p><i className="fas fa-envelope"></i>   learn.english@gmail.com</p>
                <Link to='/appoinment' stylt={{color: 'inherit', textDecoration: 'none'}} ><p className="text-success">Make an Appoinment <i className="fas fa-arrow-right"></i></p></Link>
            </div>
            <div className="col-md-4 ms-28 col-12">
                <h3 className="">Departments</h3>
                <div className="">
                    <p>Neurology Clinic</p>
                    <p>Cardiology Clinic</p>
                    <p>Pathology Clinic</p>
                    <p>Laboratory Analysis</p>
                    <p>Pediatric Clinic</p>
                    <p>Cardiac Clinic</p>
                </div>
            </div>
            <div className="col-md-4 ms-28 col-12">
                <h3 className="">Quick Links</h3>
                <div className="ms-2">
                    <p>About Us</p>
                    <p>Services</p>
                    <p>Meet Specislist</p>
                    <p>Patients Feedback</p>
                </div>
            </div>
        </div>
        <hr />
        <div className="border-t-2 border-green-200 pt-5 drop-shadow-lg filter">
            <p className="text-xl  font-semibold">Connect With Us</p>
            <span style={style} className="text-5xl"><i className="fab fa-facebook-square"></i> <i className="fab fa-twitter-square"></i> <i className="fab fa-instagram-square"></i> <i className="fab fa-youtube-square"></i></span>
            <p className="text-xl pb-2  font-semibold"> &copy; Learn English. All Rights Reserved</p>
        </div>
    </div>
    );
};

export default Footer;