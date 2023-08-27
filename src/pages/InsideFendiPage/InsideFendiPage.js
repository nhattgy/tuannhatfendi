import React from "react";
import imageinsidefendi from "../../asset/inside.avif";
import ReactPlayer from "react-player";
import "./InsideFendi.css";
function InsideFendiPage() {
  return (
    <div>
      <div className="fendi__container">
        <div className="img__insidefendi">
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
    </div>
  );
}

export default InsideFendiPage;
