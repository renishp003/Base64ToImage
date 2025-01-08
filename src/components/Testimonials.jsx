import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styled from 'styled-components';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Robert Fox',
      role: 'Web Specialist',
      text: 'Many desktop publishing packages and web page editors now use model text search for sites their infancy.',
      color: '#d9fdd3',
      image: 'https://via.placeholder.com/50',
    },
    {
      name: 'Brittni Lando',
      role: 'Artist',
      text: 'Many desktop publishing packages and web page editors now use model text search for sites their infancy.',
      color: '#fde7e3',
      image: 'https://via.placeholder.com/50',
    },
    {
      name: 'Jacob Jones',
      role: 'Designer',
      text: 'Many desktop publishing packages and web page editors now use model text search for sites their infancy.',
      color: '#e3effd',
      image: 'https://via.placeholder.com/50',
    },
    {
      name: 'Beatrice Cooper',
      role: 'UI/UX Designer',
      text: 'Many desktop publishing packages and web page editors now use model text search for sites their infancy.',
      color: '#fff8dc',
      image: 'https://via.placeholder.com/50',
    },
  ];

  return (
    <StyledSection>
      <h2>What Say Our Client's</h2>
      <p>Many Desktop Publish Packages Web Page Editors Now Use Model Text Search For Sites Their Infancy.</p>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={3}
        breakpoints={{
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 3 },
        }}
        centeredSlides
        loop
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-card" style={{ backgroundColor: item.color }}>
              <p>{item.text}</p>
              <div className="author">
                <img src={item.image} alt={item.name} />
                <h3>{item.name}</h3>
                <p>{item.role}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledSection>
  );
};

export default Testimonials;

const StyledSection = styled.section`
  text-align: center;
  padding: 50px 20px;

  h2 {
    font-size: 2rem;
    margin-bottom: 10px;
  }

  p {
    font-size: 1rem;
    margin-bottom: 20px;
  }

  .swiper {
    padding: 20px 0;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    perspective: 1000px;
  }

  .testimonial-card {
    background: white;
    width: 250px;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    text-align: left;
    transform: rotatey(15deg);
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: rotateY(0deg);
    }

    p {
      margin-bottom: 20px;
      font-size: 0.9rem;
    }

    .author {
      display: flex;
      align-items: center;
      gap: 10px;

      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        object-fit: cover;
      }

      h3 {
        margin: 0;
        font-size: 1.2rem;
      }

      p {
        margin: 0;
        font-size: 0.9rem;
        color: #555;
      }
    }
  }
`;
