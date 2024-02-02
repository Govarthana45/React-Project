import React from "react";
import imgg from "../Assets/1891.jpeg";
import imggg1 from "../Assets/1893.jpeg";
import imggg2 from "../Assets/1898.jpeg";
import imggg3 from "../Assets/1924.jpeg";
import imggg4 from "../Assets/1932.jpeg";
import imggg5 from "../Assets/1935.jpeg";
import imggg6 from "../Assets/2021.jpeg";
import imggg7 from "../Assets/1989.jpeg";
import imggg8 from "../Assets/2017.jpeg";
import imggg9 from "../Assets/2019.jpeg";

const About = () => {
  return (
    <div className="aboutcontainer d-flex">
      <div className="aboutimage">
        <img src={imgg} alt="1891" />
        <img src={imggg1} alt="1893" />
        <img src={imggg2} alt="1898" />
        <img src={imggg3} alt="1924" />
        <img src={imggg4} alt="1932" />
        <img src={imggg5} alt="1935" />
        <img src={imggg7} alt="1989" />
        <img src={imggg8} alt="2017" />
        <img src={imggg9} alt="2019" />
        <img src={imggg6} alt="2021" />
      </div>
      <div className="aboutimagecontent">
        <h1 className="text-uppercasse ps-5">1891</h1>
        <p className="ps-5">
          In November 1891, entrepreneurs Bob Walker Smith and Albert Eadie buy
          George Townsend & Co. of Hunt End, Redditch. Townsend’s is a
          well-respected needle manufacturer of almost 50 years standing which
          has recently begun manufacturing bicycles.
        </p>
        <h1 className="tetx-uppercase content2  ps-5">1893</h1>
        <p className="ps-5">
          The duo win a contract to supply precision parts to the Royal Small
          Arms Factory of Enfield, Middlesex. To celebrate this prestigious
          order, they rename their undertaking the Enfield Manufacturing Company
          Ltd. and call their first Bob Walker Smith designed bicycle, the
          Enfield. The following year, their bicycles are renamed Royal Enfields
          and the trademark ‘Made Like A Gun’ is introduced.
        </p>
        <h1 className="tetx-uppercase content3  ps-5">1898</h1>
        <p className="ps-5">
          Bob Walker Smith designs the company’s first motorised vehicle. Known
          as a quadricycle, it is built around two sturdy bicycle frames and
          uses a proprietary 1 1/2 hp De Dion engine. The company finalises its
          trading name as The Enfield Cycle Co. Ltd., a name it is to use for
          the following 70 years.
        </p>
        <h1 className="tetx-uppercase content4  ps-5">1924</h1>
        <p className="ps-5">
          Continuous development results in a range of 8 models, including the
          launch of the Sports Model 351, the first Royal Enfield 350cc OHV
          4-stroke motorcycle with foot operated gear change. A unique 225cc
          2-stroke step-through 'Ladies Model' is also introduced.
        </p>
        <h1 className="tetx-uppercase content5  ps-5">1932</h1>
        <p className="ps-5">
          The legendary "Bullet" motorcycle is born. It is first displayed in
          November 1932 at the Olympia Motorcycle Show in London. Three versions
          are produced: 250, 350 and 500cc, all with inclined 'sloper' engines,
          twin-ported cylinder heads, foot operated gear change and high
          compression pistons.
        </p>
        <h1 className="tetx-uppercase content6  ps-5">1936</h1>
        <p className="ps-5">
          The 500cc Bullet is radically changed with the release of the Model
          JF. It features an upright engine with a 4-valve cylinder head. A
          sports version, with a bronze cylinder head, is available to special
          order.
        </p>
        <h1 className="tetx-uppercase content7  ps-5">1989</h1>
        <p className="ps-5">
          A new 24 bhp 500cc Bullet is released. The bike is primarily aimed at
          export markets where it is available in Classic, Deluxe and Superstar
          trim.
        </p>
        <h1 className="tetx-uppercase content8  ps-5">2017</h1>
        <p className="ps-5">
          The new Royal Enfield Technology Centre opens at Bruntingthorpe
          Proving Ground, near Leicester in the UK. A team of over 100
          engineers, designers and testers begin work on research, development
          and long-term product strategy.
        </p>
        <h1 className="tetx-uppercase content9  ps-5">2019</h1>
        <p className="ps-5">
          A team of eleven Indian Army and Royal Enfield riders summit the
          5,540m Karakoram Pass on Himalayans despite treacherous snow, ice and
          temperatures below -30°. It is the first time the pass has been
          reached by motorcycle. The Bullet Trials Works Replica 500 is launched
          as an homage to Johnny Brittain’s all-conquering trials mounts of the
          1950s.
        </p>
        <h1 className="tetx-uppercase content10  ps-5">2021</h1>
        <p className="ps-5">
          Royal Enfield celebrates 120 years of Pure Motorcycling.
        </p>
      </div>
    </div>
  );
};
export default About;
