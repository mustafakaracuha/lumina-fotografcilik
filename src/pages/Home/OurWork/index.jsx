import React from "react";

function index({PhotoItem}) {

      const photoData = [
    {
      id: 1,
      category: "düğün",
      title: "Sahil Düğünü",
      image:
        "https://images.unsplash.com/photo-1576694667642-6f289dd54187?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QmVhY2glMjBXZWRkaW5nfGVufDB8fDB8fHww",
    },
    {
      id: 2,
      category: "portre",
      title: "Stüdyo Portre",
      image:
        "https://images.unsplash.com/photo-1621784563330-caee0b138a00?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U3R1ZGlvJTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 3,
      category: "doğa",
      title: "Doğa Manzarası",
      image:
        "https://plus.unsplash.com/premium_photo-1676660358405-37de3793dba8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TmF0dXJlJTIwVmlld3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 4,
      category: "nisan",
      title: "Nişan",
      image:
        "https://plus.unsplash.com/premium_photo-1671050939885-2cb29c4a85b1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZW5nYWdlbWVudHxlbnwwfHwwfHx8MA%3D%3D",
    },
  ];

  
  return (
    <div>
      <p className="text-xl md:text-2xl font-normal text-gray-300 mb-4 md:mb-6 lg:mb-8">
        Çalışmalarımız
      </p>

      {/* First grid section - stacks on mobile */}
      <div className="w-full grid grid-cols-1 max-sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-10">
        {photoData.map((photo) => (
          <PhotoItem key={photo.id} item={photo} />
        ))}
      </div>
    </div>
  );
}

export default index;
