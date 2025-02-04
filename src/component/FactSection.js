"use client";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const FactSection = () => {
  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true });
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true });
  const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: true });
  const { ref: ref4, inView: inView4 } = useInView({ triggerOnce: true });

  return (
    <div className="fact-one pt-pb">
      <div className="container">
        <div className="row">
          {/* Happy Students */}
          <div className="col-lg-3 col-md-6 col-sm-12 p-0">
            <div className="fact-one__item text-center bg-color1">
              <span><i className="fa-solid fa-users text-white"></i></span>
              <div className="fact-one__count" ref={ref1}>
                {inView1 && <CountUp start={0} end={20000} duration={2} separator="," />}
                +
              </div>
              <h3 className="fact-one__title">Happy Students</h3>
            </div>
          </div>

          {/* Best Awards Won */}
          <div className="col-lg-3 col-md-6 col-sm-12 p-0">
            <div className="fact-one__item text-center bg-color2">
              <span><i className="fa-solid fa-trophy text-white"></i></span>
              <div className="fact-one__count" ref={ref2}>
                {inView2 && <CountUp start={0} end={40} duration={2} />}
                +
              </div>
              <h3 className="fact-one__title">Best Awards Won</h3>
            </div>
          </div>

          {/* Batches Completed */}
          <div className="col-lg-3 col-md-6 col-sm-12 p-0">
            <div className="fact-one__item text-center bg-color3">
              <span><i className="fa-solid fa-chair text-white"></i></span>
              <div className="fact-one__count" ref={ref3}>
                {inView3 && <CountUp start={0} end={1500} duration={2} />}
                +
              </div>
              <h3 className="fact-one__title">Batches Completed</h3>
            </div>
          </div>

          {/* Courses */}
          <div className="col-lg-3 col-md-6 col-sm-12 p-0">
            <div className="fact-one__item text-center bg-color4">
              <span><i className="fa-solid fa-book text-white"></i></span>
              <div className="fact-one__count" ref={ref4}>
                {inView4 && <CountUp start={0} end={25} duration={2} />}
                +
              </div>
              <h3 className="fact-one__title">Courses</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FactSection;
