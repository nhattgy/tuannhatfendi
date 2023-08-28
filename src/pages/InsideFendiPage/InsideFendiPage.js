import React from "react";
import imageinsidefendi from "../../asset/inside.avif";
import inside2 from "../../asset/inside2.avif";
import inside3 from "../../asset/inside3.avif";
import inside4 from "../../asset/inside4.avif";
import inside5 from "../../asset/inside5.avif";
import inside6 from "../../asset/inside6.avif";
import inside7 from "../../asset/inside7.avif";
import inside8 from "../../asset/inside8.avif";

import "./InsideFendi.css";
function InsideFendiPage() {
  return (
    <div className="fendi__inside__container">
      <div className="fendi__container">
        <div className="img__inside fendi">
          <h1 className="h1__fendi">Fendi Women’s Fall/Winter 2023</h1>
          <img className="img__fendi" src={imageinsidefendi} />
        </div>
      </div>
      <div className="text__every">
        <h3 className="center__text">The Very Essence of Fendi </h3>
        <p className="center__p">
          Shot by Craig McDean, the latest campaign highlights the season’s
          exploration of Fendi craftsmanship and creativity through pieces by
          Kim Jones, Silvia Venturini Fendi, and Delfina Delettrez Fendi.
        </p>
      </div>
      <div className="video__insidefendi">
        <div className="player-wrapper">
          <iframe
            title="Custom Video"
            src="https://players.brightcove.net/5704890267001/rJwMgAVHM_default/index.html?videoId=6330499182112"
            className="custom-iframe"
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="text__box">
        <div className="text__boxp">
          <div className="text__div">
            <p className="p__inside">
              Artistic Director of Couture and Womenswear: Kim Jones
            </p>
            <p className="p__inside">
              Artistic Director of Accessories and Menswear: Silvia Venturini
              Fendi
            </p>
            <p className="p__inside">
              Artistic Director of Jewellery: Delfina Delettrez Fendi
            </p>
          </div>
          <div className="text__div">
            <p className="p__inside">
              Creative Direction: Ronnie Cooke Newhouse and Karl Bolander
            </p>
            <p className="p__inside">Photography: Craig McDean</p>
            <p className="p__inside">
              Film Direction: Craig McDean and Masha Vasyukova
            </p>
          </div>
          <div className="text__div">
            <p className="p__inside">Styling: Melanie Ward</p>
            <p className="p__inside">Hair: Anthony Turner</p>
            <p className="p__inside">Makeup: Peter Philips</p>
            <p className="p__inside">Set Design: Alexander Bock</p>
          </div>
          <div className="text__div">
            <p className="p__inside">Casting: Shelley Durkan</p>
            <p className="p__inside">
              Models: Rianne Van Rompaey, Julia Nobis, Mona Tougaard, Yilan Hua,
              Migoa Majoang, Farah Nieuwburg
            </p>
          </div>
        </div>
      </div>
      <div className="img__main">
        {" "}
        <div className="img__boxinside">
          <img className="img__inside " src={inside2} />
        </div>
        <div className="img__boxinside">
          <img className="img__inside " src={inside3} />
        </div>
        <div className="img__boxinside">
          <img className="img__inside " src={inside4} />
        </div>
        <div className="img__boxinside">
          <img className="img__inside " src={inside5} />
        </div>
        <div className="img__boxinside">
          <img className="img__inside " src={inside6} />
        </div>
        <div className="img__boxinside">
          <img className="img__inside " src={inside7} />
        </div>
        <div className="img__boxinside">
          <img className="img__inside " src={inside8} />
        </div>
      </div>
    </div>
  );
}

export default InsideFendiPage;
