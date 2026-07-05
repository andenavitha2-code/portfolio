import React from 'react';

import alan from "../assets/gallery/alan.jpg";
import america from "../assets/gallery/america.png";
import barca from "../assets/gallery/barca.png";
import bayern from "../assets/gallery/bayern.png";
import bayernjersey from "../assets/gallery/bayernjersey.png";
import chelsea from "../assets/gallery/chelsea.png";
import drs from "../assets/gallery/drs.png";
import f1 from "../assets/gallery/f1.png";
import finalrender from "../assets/gallery/finalrender.png";
import finalrender2 from "../assets/gallery/finalrender2.png";
import finalrender3 from "../assets/gallery/finalrender3.png";
import finalrender4 from "../assets/gallery/finalrender4.png";
import grad from "../assets/gallery/grad.png";
import harvy from "../assets/gallery/harvy.jpg";
import ironman from "../assets/gallery/ironman.png";
import jujersey from "../assets/gallery/jujersey.png";
import kakashi from "../assets/gallery/kakashi.png";
import kit from "../assets/gallery/kit.png";
import marshmello from "../assets/gallery/marshmello.png";
import monster from "../assets/gallery/monster.jpg";
import naruto from "../assets/gallery/naruto.png";
import picsart from "../assets/gallery/picsart.jpg";
import psg from "../assets/gallery/psg.png";
import psg1 from "../assets/gallery/psg1.png";
import statue from "../assets/gallery/statue.png";
import tanjiro from "../assets/gallery/tanjiro.png";
import ten from "../assets/gallery/ten.png";
import thanos from "../assets/gallery/thanos.png";
import united from "../assets/gallery/united.png";
import vineth from "../assets/gallery/vineth.jpg";

const galleryImages = {
  "doctor-strange": drs,
  "monster": monster,
  "naruto": naruto,
  "kakashi": kakashi,
  "capt-america": america,
  "tanjiro": tanjiro,
  "marshmello": marshmello,
  "alien": thanos,
  "suit": grad,
  "ironman": ironman,
  "hoodie": finalrender4,
  "rahul-avatar": vineth,

  "bayern-red": bayern,
  "chelsea-blue": chelsea,
  "juventus-zebra": jujersey,
  "psg-blue": psg,
  "barca-spotify": barca,
  "bayern-black": bayernjersey,
  "roses-jersey": kit,
  "manutd-white": united,
  "turquoise": psg1,

  "room-render": finalrender,
  "shelf-render": finalrender2,
  "setup-render": finalrender3,
  "f1-car": f1,

  "rise-poster": harvy,
  "ronaldo-poster": alan,
  "beckham-poster": picsart,
  "graphic-poster": ten,
  "roman-statue": statue,
};

export default function GalleryCard({ item }) {
  // Renders the specific visual asset for the card
  const renderVisual = () => {
    return(
      <img
      src={galleryImages[item.id]}
      alt={item.title}
      className="w-full h-full object-cover" />
    );
  };

  return (
    <div className="break-inside-avoid bg-[#161920] border border-[#222731] rounded-2xl overflow-hidden shadow-lg group hover:border-[#ccff00]/40 transition-all duration-300 flex flex-col">
      {/* Visual Header container */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-zinc-950 flex items-center justify-center border-b border-[#222731]">
        {renderVisual()}
      </div>
        
        
    </div>
  );
}
