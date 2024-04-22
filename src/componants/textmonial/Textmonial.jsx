import React from 'react'
import './textmonial.css'
// import Swiper core and required modules
import { Pagination,Autoplay} from "swiper/modules"

import { Swiper, SwiperSlide } from 'swiper/react';

//Import Images
import Avtar1 from '../../assets/avatar1.jpg'
import Avtar2 from '../../assets/avatar2.jpg'
import Avtar3 from '../../assets/avatar3.jpg'
import Avtar4 from '../../assets/avatar4.jpg'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay'
import 'swiper/css/pagination';

const data =[

  { 
    id:1,
    avatar:Avtar1,
    name:'rajnikant sing',
    review:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ratione, deleniti esse delectus qui optio ab autem debitis aut voluptatum cupiditate perferendis enim commodi, rerum mollitia modi accusamus nisi vel?'
  },
  {
    id:2,
    avatar:Avtar2,
    name:'mosin shaikh',
    review:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ratione, deleniti esse delectus qui optio ab autem debitis aut voluptatum cupiditate perferendis enim commodi, rerum mollitia modi accusamus nisi vel?'
  },
  {
    id:3,
    avatar:Avtar3,
    name:'manas pati',
    review:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ratione, deleniti esse delectus qui optio ab autem debitis aut voluptatum cupiditate perferendis enim commodi, rerum mollitia modi accusamus nisi vel?'
  },
  {
    id:4,
    avatar:Avtar4,
    name:'shiva ganesh',
    review:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ratione, deleniti esse delectus qui optio ab autem debitis aut voluptatum cupiditate perferendis enim commodi, rerum mollitia modi accusamus nisi vel?'
  }
]


const Textmonial = () => {
  return (
    <section id="textmonial">
      <h5>Review From Client</h5>
      <h2>Testimonial</h2>
      <Swiper className="container testimonial_container"
       modules={[ Pagination,Autoplay]}
       
       spaceBetween={40}
       slidesPerView={1}
       autoplay
       pagination={{ clickable: true }}
       onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
       
       >
        {
          data.map((item)=>{
            
            return(
              <SwiperSlide key={item.id} className="testomonial" >
          <div className="client_avtar">
            <img src={item.avatar} alt="Avatar one" />
          </div>
            <h5 className="client_name">{item.name}</h5>
            <small className="client_review">
              {item.review}
            </small>
           
        </SwiperSlide>
            )
          })
        }
        
      
      </Swiper>
    </section>
  );
}

export default Textmonial