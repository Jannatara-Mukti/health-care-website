import React from 'react';
import { Carousel } from 'react-bootstrap';

import img1 from '../../../../images/banner/img1.jpeg';
import img2 from '../../../../images/banner/img2.jpg';
import img3 from '../../../../images/banner/img3.jpeg';

const Banner = () => {
    return (
        <>
            <Carousel  variant="dark" className="mb-5">
                <Carousel.Item interval={1000}>
                    <img
                    className="d-block w-100"
                    src={img1}
                    alt="First slide"
                    />
                    <Carousel.Caption className="mb-5 pb-2 text-secondary">
                    <h3>Providing Best Medical Care.</h3>
                    <p>The health and well-being of our patients and their health care team will
                    always be our priority, so we follow the best practices for cleanliness.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                    className="d-block w-100"
                    src={img2}
                    alt="Second slide"
                    />
                    <Carousel.Caption className="mb-5 pb-2 text-secondary">
                    <h3>All Aspects Of Medical Practice</h3>
                    <p>The health and well-being of our patients and their health care team will
                    always be our priority, so we follow the best practices for cleanliness.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={img3}
                    alt="Third slide"
                    />
                    <Carousel.Caption className="mb-5 pb-2 text-secondary">
                    <h3>Better Technology</h3>
                    <p>Improving The Quality Of Your Life Through Better Health.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;