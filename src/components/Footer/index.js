import React, { useEffect, useRef } from "react";
import { TweenMax, Power2 } from "gsap";

const MyComponent = () => {
    const elementRef = useRef(null);

    useEffect(() => {
        // Animate the element with GSAP
        TweenMax.to(elementRef.current, 1, {
            x: 100,
            opacity: 0.5,
            rotation: 360,
            ease: Power2.easeInOut
        });
    }, []);

    return <div ref={elementRef}>fsdfghjkkneroioewnnwooernrlslk mfjtjtopw tkktl tkkwwl</div>;
};

export default MyComponent;
