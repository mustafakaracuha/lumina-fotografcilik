import React, { useEffect, useState } from "react";
import { Camera, ChevronLeft, ChevronRight } from "lucide-react";

function index({ PhotoItem }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const featuredPhotos = [
    {
      id: 5,
      category: "düğün",
      title: "Kır Düğünü",
      image:
        "https://plus.unsplash.com/premium_photo-1663100824732-883a1b063bc8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNvdW50cnklMjB3ZWRkaW5nfGVufDB8fDB8fHww",
    },
    {
      id: 6,
      category: "etkinlik",
      title: "Kurumsal Etkinlik",
      image:
        "https://plus.unsplash.com/premium_photo-1661396923254-92ed923a1485?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q29ycG9yYXRlJTIwRXZlbnR8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 7,
      category: "doğa",
      title: "Göl Kenarı",
      image:
        "https://images.unsplash.com/photo-1627155936109-f4f08fb0f1cf?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmF0dXJlJTIwbGFrZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 8,
      category: "portre",
      title: "Doğal Işık Portresi",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
    },
  ];

  // Auto rotate featured images
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % featuredPhotos.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [featuredPhotos.length]);

  return (
    <div>
      <p className="text-xl md:text-2xl font-normal text-gray-300 mb-4 md:mb-6 lg:mb-8 mt-8 lg:mt-10">
        Öne Çıkanlar
      </p>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-10">
        <div className="relative">
          <PhotoItem item={featuredPhotos[activeIndex]} large={true} />

          {/* Carousel controls */}
          <div className="absolute top-1/2 left-0 right-0 flex justify-between px-2 transform -translate-y-1/2">
            <button
              className="w-8 h-8 bg-black bg-opacity-50 rounded-full flex items-center justify-center text-white"
              onClick={() =>
                setActiveIndex((prevIndex) =>
                  prevIndex === 0 ? featuredPhotos.length - 1 : prevIndex - 1
                )
              }
            >
              <ChevronLeft size={20} />
            </button>
            <button
              className="w-8 h-8 bg-black bg-opacity-50 rounded-full flex items-center justify-center text-white"
              onClick={() =>
                setActiveIndex(
                  (prevIndex) => (prevIndex + 1) % featuredPhotos.length
                )
              }
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Carousel indicators */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
            {featuredPhotos.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === activeIndex ? "bg-white" : "bg-gray-400"
                }`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>

        <div className="bg-gray-700 rounded-xl md:rounded-2xl p-4 px-10 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-gray-200 mb-4">
            İşte En Yeni Fotoğraf Koleksiyonumuz
          </h2>
          <p className="text-gray-200 mb-6">
            Profesyonel ekibimizin çektiği en güncel ve trend fotoğraflarımızı
            keşfedin.
          </p>
          <button className="bg-indigo-600 text-white py-2.5 px-6 rounded-lg font-medium hover:bg-indigo-700 transition-colors self-start">
            Koleksiyonu İncele
          </button>
        </div>
      </div>
    </div>
  );
}

export default index;
