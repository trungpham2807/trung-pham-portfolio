import React from 'react'
import { ParallaxBanner } from 'react-scroll-parallax'
const Parallax = (props) => {
    return (
        <div className="parallax">
            <ParallaxBanner
            layers={[
                {
                    image: props.imgsrc,
                    amount: 0.6
                }
            ]}
            style={{height: props.height}}
            >
            <div>
                {props.children}
            </div>
            </ParallaxBanner>
        </div>
    )
}

export default Parallax
