import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import src1 from "../../../Assets/de.png";
import src2 from "../../../Assets/hcl.png";
import src3 from "../../../Assets/ms.png";
import src4 from "../../../Assets/hex.png";

const HiringCarousel = () => {
  return (
    <section>
      <Carousel autoPlay>
        <div>
          <img src={src1} alt="orginizaton" />
        </div>
        <div>
          <img src={src2} alt="orginizaton" />
        </div>
        <div>
          <img src={src3} alt="orginizaton" />
        </div>
        <div>
          <img src={src4} alt="orginizaton" />
        </div>
      </Carousel>
    </section>
  );
};

export default HiringCarousel;
