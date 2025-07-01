function index({ PhotoItem }) {
  const mostLikedPhotos = [
    {
      id: 1,
      category: "portre",
      title: "Aile Portresi",
      image:
        "https://images.unsplash.com/photo-1666819288704-76a127d61788?w=900&auto=format&fit=crop&q=60",
    },
    {
      id: 2,
      category: "düğün",
      title: "Evlilik Teklifi",
      image:
        "https://images.unsplash.com/photo-1689455611668-792a0557576e?w=900&auto=format&fit=crop&q=60",
    },
    {
      id: 4,
      category: "çocuk",
      title: "Oyun Zamanı",
      image:
        "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=900&auto=format&fit=crop&q=60",
    },
  ];

  return (
    <div>
      <p className="text-xl md:text-2xl font-normal text-gray-300 mb-4 md:mb-6 lg:mb-8 mt-8 lg:mt-10">
        En Beğenilenler
      </p>
      <div className="w-full grid max-sm:grid-cols-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-10">
        {mostLikedPhotos.map((photo) => (
          <PhotoItem key={photo.id} item={photo} />
        ))}
      </div>
    </div>
  );
}

export default index;
