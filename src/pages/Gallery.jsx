import React, { useState } from 'react';
import GalleryCard from '../components/GalleryCard';

export default function Gallery() {
  const [selectedItem, setSelectedItem] = useState(null);

  // Group items exactly by column to match the user's reference image layout
  const col1 = [
    {
      id: "doctor-strange",
      title: "Doctor Strange",
      category: "avatar",
      description: "Vector headshot illustration of Marvel's Sorcerer Supreme on a bold yellow background."
    },
    {
      id: "monster",
      title: "Little Monster",
      category: "avatar",
      description: "A cute, three-eyed cartoon monster vector design with small horns on vibrant orange."
    },
    {
      id: "rise-poster",
      title: "Still We Rise",
      category: "poster",
      description: "A motivating sports poster featuring F1 champion Lewis Hamilton in high contrast black and white."
    },
    {
      id: "roses-jersey", // Represents the rose jersey in column 1 in custom mockup terms
      title: "Rose Jersey Concept",
      category: "jersey",
      description: "Special edition concept kit styled with purple rose textures and dark patterns.",
      imageType: "roses" // customized mockup type for rosas jersey
    },
    {
      id: "hoodie",
      title: "Hacker Avatar",
      category: "avatar",
      description: "A faceless character wearing a dark hoodie, ideal for developer profiles."
    },
    {
      id: "barca-spotify",
      title: "FC Barcelona Spotify",
      category: "jersey",
      description: "The classic Blaugrana vertical stripe layout with sleek gold sponsor logos."
    },
    {
      id: "bayern-black",
      title: "Bayern Munich Black",
      category: "jersey",
      description: "FC Bayern Munich third kit concept in deep black with gold trims and vertical stripes."
    }
  ];

  const col2 = [
    {
      id: "bayern-red",
      title: "Bayern Munich Red",
      category: "jersey",
      description: "FC Bayern Munich home kit featuring red textures and vertical white stripes."
    },
    {
      id: "chelsea-blue",
      title: "Chelsea Home",
      category: "jersey",
      description: "Chelsea FC blue jersey layout with subtle yellow detailing on collar and sleeves."
    },
    {
      id: "f1-car",
      title: "F1 Racing Car",
      category: "render",
      description: "3D CAD model rendering of a modern formula 1 aerodynamic racing car concept."
    },
    {
      id: "room-render",
      title: "3D Workstation Room",
      category: "render",
      description: "Orthographic 3D render of a cozy developer workspace bedroom setup."
    },
    {
      id: "shelf-render",
      title: "Office Shelf Mockup",
      category: "render",
      description: "3D visualization of floating office shelves displaying custom books and trophies."
    },
    {
      id: "graphic-poster",
      title: "Neon Geometry",
      category: "poster",
      description: "Abstract geometric star illustration in pink, purple, and blue hues."
    },
    {
      id: "setup-render",
      title: "Gaming Station Console",
      category: "render",
      description: "Isometric 3D model of a dual monitor PC setup and desk layout."
    },
    {
      id: "suit",
      title: "Business Suit",
      category: "avatar",
      description: "Minimalist corporate avatar depicting a man in a navy blue suit and black tie."
    },
    {
      id: "ironman",
      title: "Iron Man Mark L",
      category: "avatar",
      description: "Minimalist vector illustration of the classic red and gold Iron Man chest armor."
    }
  ];

  const col3 = [
    {
      id: "juventus-zebra",
      title: "Juventus Zebra",
      category: "jersey",
      description: "Juventus FC zebra striped design featuring gold accents and Jeep logo."
    },
    {
      id: "naruto",
      title: "Naruto Uzumaki",
      category: "avatar",
      description: "Greyscale minimalist manga vector of Naruto wearing his signature headband."
    },
    {
      id: "kakashi",
      title: "Kakashi Hatake",
      category: "avatar",
      description: "Kakashi Hatake avatar featuring his headband, sharingan eye, and face mask."
    },
    {
      id: "marshmello",
      title: "Marshmello Glow",
      category: "avatar",
      description: "Glowing neon lights outlining the iconic Marshmello helmet."
    },
    {
      id: "capt-america",
      title: "Captain America",
      category: "avatar",
      description: "Captain America face avatar in his blue helmet on a bright yellow block."
    },
    {
      id: "psg-blue",
      title: "PSG Air Jordan",
      category: "jersey",
      description: "Paris Saint-Germain Jordan kit featuring the bold central red and white stripe."
    },
    {
      id: "turquoise",
      title: "Turquoise Waves",
      category: "jersey",
      description: "Modern wavy jersey concept in deep teal with violet overlays and decals."
    }
  ];

  const col4 = [
    {
      id: "roman-statue",
      title: "Golden Crying Bust",
      category: "poster",
      description: "Greek bust statue on a purple backdrop crying bright neon yellow tears."
    },
    {
      id: "tanjiro",
      title: "Tanjiro Kamado",
      category: "avatar",
      description: "Demon Slayer Tanjiro Kamado face avatar on a green checkered backing."
    },
    {
      id: "ronaldo-poster",
      title: "Ronaldo Poster",
      category: "poster",
      description: "Stunning red wall poster design dedicated to football star Cristiano Ronaldo."
    },
    {
      id: "alien",
      title: "Nebula Alien",
      category: "avatar",
      description: "Creative avatar of an alien in purple scales with a gold accessory."
    },
    {
      id: "beckham-poster",
      title: "Beckham Duotone",
      category: "poster",
      description: "Minimalist retro duotone poster of England legend David Beckham."
    },
    {
      id: "manutd-white",
      title: "Manchester United White",
      category: "jersey",
      description: "Manchester United away kit in clean white with tiger stripe shoulder textures."
    },
    {
      id: "rahul-avatar",
      title: "Rahul Kumar",
      category: "avatar",
      description: "Custom illustrated headshot avatar of the developer on a bright yellow card."
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8 space-y-6 animate-fade-in">
      
      {/* 4-Column Exact Structure Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 items-start">
        
        {/* COLUMN 1 */}
        <div className="flex flex-col gap-4">
          {/* Exact Top Left Black Header Card matching screenshot */}
          <div className="bg-[#161920] border border-[#222731] rounded-2xl py-6 text-center shadow-lg relative overflow-hidden select-none">
            <h2 className="font-display text-4xl text-white tracking-widest uppercase">
              Gallery
            </h2>
            <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#ccff00]"></div>
          </div>

          {col1.map((item, idx) => (
            <div key={`${item.id}-${idx}`} onClick={() => setSelectedItem(item)} className="cursor-pointer">
              <GalleryCard item={item} />
            </div>
          ))}
        </div>

        {/* COLUMN 2 */}
        <div className="flex flex-col gap-4">
          {col2.map((item, idx) => (
            <div key={`${item.id}-${idx}`} onClick={() => setSelectedItem(item)} className="cursor-pointer">
              <GalleryCard item={item} />
            </div>
          ))}
        </div>

        {/* COLUMN 3 */}
        <div className="flex flex-col gap-4">
          {col3.map((item, idx) => (
            <div key={`${item.id}-${idx}`} onClick={() => setSelectedItem(item)} className="cursor-pointer">
              <GalleryCard item={item} />
            </div>
          ))}
        </div>

        {/* COLUMN 4 */}
        <div className="flex flex-col gap-4">
          {col4.map((item, idx) => (
            <div key={`${item.id}-${idx}`} onClick={() => setSelectedItem(item)} className="cursor-pointer">
              <GalleryCard item={item} />
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox / Modal view on Click */}
      {selectedItem && (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedItem(null)}
        >
          <div 
            className="bg-[#161920] border border-[#222731] rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image display */}
            <div className="relative aspect-[3/4] bg-zinc-950 flex items-center justify-center p-6">
              <GalleryCard item={selectedItem} />
              <button 
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 bg-black/80 hover:bg-black text-white hover:text-[#ccff00] w-9 h-9 rounded-full flex items-center justify-center font-bold text-lg shadow-lg cursor-pointer"
              >
                &times;
              </button>
            </div>
            
            {/* Modal metadata text */}
            <div className="p-6 space-y-2 border-t border-[#222731] bg-[#13151a]">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold text-white">{selectedItem.title}</h3>
                <span className="text-[10px] bg-[#ccff00] text-black px-2.5 py-1 rounded-full uppercase tracking-wider font-extrabold">
                  {selectedItem.category}
                </span>
              </div>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed pt-2">
                {selectedItem.description}
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
