import React from "react";
import { useSelector } from "react-redux";
import Carousel from "react-material-ui-carousel";
import QueAnsCard from "../../Qura/QueAnsCard";

const QueAnsCrousel = () => {
  const { ques } = useSelector((state) => state.queAns);
  return (
    <section>
      <Carousel
      indicators={false}
        autoPlay={true}
        stopAutoPlayOnHover={false}
        interval={2500}
        animation={"slide"}
        swipe={true}
      >
        {ques && ques.map((que) => <QueAnsCard key={que._id} que={que} />)}
      </Carousel>
    </section>
  );
};

export default QueAnsCrousel;
