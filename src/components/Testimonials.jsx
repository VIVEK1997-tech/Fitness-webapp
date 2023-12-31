
import { useState } from "react"
import ProgramHead from "./ProgramHead"
import Card from "../UI/Card"
import { testimonials } from "../data"
import {ImQuotesLeft} from 'react-icons/im'
import {IoIosArrowDropleftCircle, IoIosArrowDroprightCircle} from 'react-icons/io'

const Testimonials = () => {

        const [index,setIndex]=useState(0);
        const {name,quote,job,avatar} =  testimonials[index];

        const prevTestimonialsHandler=()=>{
            setIndex(prev=>prev-1);

        if(index<=0){
            setIndex(testimonials.length-1)
        }
        }

        const nextTestimonialsHandler=()=>{
            setIndex(prev=>prev+1);

            if(index>=testimonials.length-1){
                setIndex(0);
            }
        }

  return (
    <section className="testimonials">
            <div className="container testimonials__container">
                <ProgramHead icon={<ImQuotesLeft/>} title="Testimonials" className="testimonials__head"/>

                <Card className="testimonial">
                    <div className="testimonial__avatar">
                        <img src={avatar} alt={name} />
                    </div>
                    <p className="testimonials__quote">{`"${quote}"`}</p>
                    <h5>{name}</h5>
                    <small className="testimonials__title">{job}</small>
                </Card>
                <div className="testimonials__btn-container">
                    <button className="testimonials__btn" onClick={prevTestimonialsHandler} > <IoIosArrowDropleftCircle/> </button>
                    <button className="testimonials__btn" onClick={nextTestimonialsHandler}> <IoIosArrowDroprightCircle/> </button>
                </div>
            </div>

    </section>
  )
}

export default Testimonials