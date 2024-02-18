import React, { Fragment, useEffect, useRef } from "react";
import { TweenMax, Power2,gsap } from "gsap";
import { FaStar } from "react-icons/fa";
import { BsEmojiAngryFill,BsEmojiGrimaceFill,BsEmojiFrownFill } from "react-icons/bs";
import { MdEmojiEmotions } from "react-icons/md";
import Navbar  from "../Navbar";
import "./index.css"

const Home = () => {
    const leftContainer = useRef(null);
    const imageEl = useRef(null)
    const headingE1 = useRef(null);
    const descriptionE1 = useRef(null)
    const descriptionE2 = useRef(null);
    const thirdBlockE1 = useRef(null)
    

    useEffect(() => {
        // Animate the element with GSAP
        TweenMax.to(leftContainer.current, 2, {
            x: 100,
            rotation: 360,
            ease: Power2.easeInOut
        });
    }, []);

    useEffect(() => {
        // Animate the element with GSAP
        TweenMax.to(imageEl.current, 2, {
            x: 100,
            rotation: -360,
            ease: Power2.easeInOut
        });
    }, []);

    useEffect(() => {
        const heading = headingE1.current;
        const description1 = descriptionE1.current;
        const description2 = descriptionE2.current;
    
        gsap.fromTo(
          [heading, description1,description2],
          { x: -1000 }, // Start from the left side (off-screen)
          { x: 0, duration: 3, ease: "power2.inOut", stagger: 0.5 } // Scroll to the right
        );
      }, []);

      useEffect(() => {
        const container= thirdBlockE1.current;
    
        // Get all the boxes inside the container
        const boxes = container.querySelectorAll(".box");
    
        // Animation
        gsap.fromTo(
            boxes,
            { x: window.innerWidth }, // Start from the right side (off-screen)
            { 
              x: -window.innerWidth, // Scroll to the left
              rotation: 360, // Rotate 360 degrees
              duration: 5, 
              ease: "power2.inOut", 
              stagger: 0.5, 
              repeat: 1 // Repeat animation infinitely
            }
          );
      },[])
      

    const renderTheSecondContainer=()=>(
        <div className="second-block">
            <h1 ref={headingE1} className="second-heading">EQ beats IQ</h1>
            <p ref={descriptionE1} className="second-description">People with high emotional intelligence (EQ) live more fulfilled lives. They tend to be happier and have healthier relationships.</p>
            <p ref={descriptionE2} className="second-description">They are more successful in their pursuits and make for inspiring leaders. According to science, they earn $29k a year.</p>
        </div>
    )

    const renderTheThirdContainer=()=>(
        <div className="third-block">
            <h1>Does this sound familiar...</h1>
            <div ref={thirdBlockE1} className="third-block-description-containers" style={{overflow:"hidden"}}>
                <div className="block3-cont-1 box" >
                    <BsEmojiAngryFill  className="emoji"/>
                    <p>You arque with a colleague You get angry and defensive, instead of staying open and working towards common ground.</p>
                </div>
                <div className="block3-cont-2 box">
                <BsEmojiFrownFill  className="emoji"/>
                    <p>You get a promotion at work You question yourself and wonder who they'll realize you're an unqualified imposter, instead of trusting yourself & your abilities</p>
                </div>
                <div className="block3-cont-3 box">
                <BsEmojiGrimaceFill  className="emoji"/>
                    <p>You attend a class reur You compare yourself with you achievements, instead of ma self-judgement more indeper others.</p>
                </div>
                <div className="block3-cont-4 box">
                    <MdEmojiEmotions  className="emoji"/>
                    <p>You arque with a colleague You get angry and defensive, instead of staying open and working towards common ground.</p>
                </div>
            </div>
        </div>
    )

    return (
        <>
        <Navbar/>
        <div className="first-container">
            <div ref={leftContainer} className="text-container-1">
                <p>Ahead App</p>
                <h1>Master your life <br/>by mastering <br/>your Emotions</h1>
                <div className="app-star-container">
                    <div className="download-container">
                        <p>Download on the<br/><span style={{fontSize:30}}>App Store</span></p>
                    </div>
                    <div>
                    <div className="star-conatiner">
                       <FaStar className="star-icon"/>
                       <FaStar className="star-icon"/>
                       <FaStar className="star-icon"/>
                       <FaStar className="star-icon"/>
                       <FaStar className="star-icon"/>
                    </div>
                    <p>100+ AppStore reviews</p>
                    </div>
                </div>
                 </div>
                 <img ref={imageEl} src="https://ik.imagekit.io/Satish108/spur-fit-company/images%20(2).jpg?updatedAt=1708230911464" className="mobile-image"/>
        </div>
        {renderTheSecondContainer()}
        {renderTheThirdContainer()}
        </>
    )


    
};

export default Home;
