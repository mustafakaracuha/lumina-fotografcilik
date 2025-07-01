import React, { useState, useEffect } from "react";
import { Camera, X, ChevronLeft, ChevronRight, Image } from "lucide-react";
import { sampleCollections } from "./Data/Collections";
import { samplePhotosByCollection } from "./Data";

// Ana Komponent
function CollectionGallery() {
  const [activeCategory, setActiveCategory] = useState("tumu");
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCollection, setSelectedCollection] = useState(null);
  const [collectionPhotos, setCollectionPhotos] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [viewMode, setViewMode] = useState("collections"); // "collections" veya "photos"

  // Koleksiyon kategorileri
  const categories = [
    { id: "tumu", label: "Tümü" },
    { id: "dugun", label: "Düğün" },
    { id: "dogum", label: "Doğum" },
    { id: "dogumgunu", label: "Doğum Günü" },
    { id: "mezuniyet", label: "Mezuniyet" },
    { id: "portre", label: "Portre" },
  ];

  // API'den koleksiyonları yükleme simülasyonu
  useEffect(() => {
    const timer = setTimeout(() => {
      setCollections(sampleCollections);
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  // Aktif kategoriye göre filtrelenmiş koleksiyonlar
  const filteredCollections =
    activeCategory === "tumu"
      ? collections
      : collections.filter(
          (collection) => collection.category === activeCategory
        );

  // Koleksiyonu aç ve içindeki fotoğrafları yükle
  const openCollection = (collection) => {
    setSelectedCollection(collection);
    setLoading(true);
    setViewMode("photos");

    // API'den fotoğrafları yükleme simülasyonu
    setTimeout(() => {
      setCollectionPhotos(samplePhotosByCollection[collection.id] || []);
      setLoading(false);
    }, 300);
  };

  // Koleksiyonlar görünümüne geri dön
  const backToCollections = () => {
    setViewMode("collections");
    setSelectedCollection(null);
    setCollectionPhotos([]);
  };

  // Her kolon için koleksiyonları/fotoğrafları dağıt (masonry layout için)
  const distributeItems = (items, columnCount) => {
    const columns = Array.from({ length: columnCount }, () => []);
    items.forEach((item, index) => {
      const columnIndex = index % columnCount;
      columns[columnIndex].push(item);
    });
    return columns;
  };

  // Ekran genişliğine göre kolon sayısını belirle
  const getColumnCount = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1280) return 3; // xl
      if (window.innerWidth >= 1024) return 3; // lg
      if (window.innerWidth >= 768) return 2; // md
      return 1; // sm and below
    }
    return 3; // Default (SSR)
  };

  const [columnCount, setColumnCount] = useState(3);

  // Ekran boyutu değiştiğinde kolon sayısını güncelle
  useEffect(() => {
    const handleResize = () => {
      setColumnCount(getColumnCount());
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Fotoğraf görüntüleme modalını aç
  const openPhotoModal = (photo) => {
    const index = collectionPhotos.findIndex((p) => p.id === photo.id);
    setPhotoIndex(index);
    setSelectedPhoto(photo);
    document.body.style.overflow = "hidden";
  };

  // Fotoğraf görüntüleme modalını kapat
  const closePhotoModal = () => {
    setSelectedPhoto(null);
    document.body.style.overflow = "auto";
  };

  // Bir sonraki fotoğrafa git
  const nextPhoto = () => {
    const newIndex = (photoIndex + 1) % collectionPhotos.length;
    setPhotoIndex(newIndex);
    setSelectedPhoto(collectionPhotos[newIndex]);
  };

  // Bir önceki fotoğrafa git
  const prevPhoto = () => {
    const newIndex =
      (photoIndex - 1 + collectionPhotos.length) % collectionPhotos.length;
    setPhotoIndex(newIndex);
    setSelectedPhoto(collectionPhotos[newIndex]);
  };

  // ESC tuşuna basıldığında modalı kapat
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closePhotoModal();
      if (e.key === "ArrowRight" && selectedPhoto) nextPhoto();
      if (e.key === "ArrowLeft" && selectedPhoto) prevPhoto();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedPhoto, photoIndex, collectionPhotos]);

  // Koleksiyonları/fotoğrafları kolonlara dağıt
  const itemColumns = distributeItems(
    viewMode === "collections" ? filteredCollections : collectionPhotos,
    columnCount
  );

  // Koleksiyon Kartı Komponenti
  const CollectionCard = ({ collection }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <>
        <div
          className="mb-6 relative overflow-hidden rounded-xl shadow-lg transform transition-all duration-300 hover:shadow-xl cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => openCollection(collection)}
        >
          <div className="relative aspect-[4/3]">
            <img
              src={collection.thumbnail}
              alt={collection.title}
              className="w-full h-full object-cover block"
              style={{
                transition: "transform 0.5s ease-in-out",
                transform: isHovered ? "scale(1.05)" : "scale(1)",
              }}
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
              style={{
                opacity: isHovered ? 1 : 0.7,
                transition: "opacity 0.3s ease",
              }}
            >
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-white font-medium text-xl mb-1">
                  {collection.title}
                </h3>
                <p className="text-gray-300 text-sm mb-3 line-clamp-2">
                  {collection.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-300 flex items-center">
                    <Image size={16} className="mr-1" />
                    {collection.photoCount} fotoğraf
                  </span>
                  <button className="text-xs bg-white text-indigo-600 px-4 py-2 rounded-full font-medium hover:bg-indigo-100 transition-colors">
                    Koleksiyonu Görüntüle
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  // Fotoğraf Kartı Komponenti
  const PhotoCard = ({ photo }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <>
        <div
          className="mb-4 relative overflow-hidden rounded-xl shadow-lg transform transition-all duration-300 hover:shadow-xl"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => openPhotoModal(photo)}
        >
          <img
            src={photo.src}
            alt={photo.alt}
            className="w-full object-cover block"
            style={{
              aspectRatio: `${photo.width} / ${photo.height}`,
              transition: "transform 0.5s ease-in-out",
              transform: isHovered ? "scale(1.05)" : "scale(1)",
            }}
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent transition-opacity duration-300"
            style={{ opacity: isHovered ? 1 : 0 }}
          >
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="text-white font-medium text-lg">{photo.alt}</h3>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-300">
                  {selectedCollection?.title || ""}
                </span>
                <button className="text-xs bg-white text-indigo-600 px-4 py-2 rounded-full font-medium hover:bg-indigo-100 transition-colors">
                  Görüntüle
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="min-h-screen container mx-auto pt-32 px-4">
        {/* Görünüm Başlığı */}
        <div className="mb-8 flex items-center justify-between">
          {viewMode === "collections" ? (
            <h1 className="text-2xl text-gray-200 font-normal">
              Fotoğraf Çekimlerimiz
            </h1>
          ) : (
            <div className="flex items-center">
              <button
                onClick={backToCollections}
                className="mr-4 cursor-pointer flex items-center text-gray-100 hover:text-indigo-800 transition-colors"
              >
                <ChevronLeft size={20} />
                <span>Geri Dön</span>
              </button>
              <h1 className="text-xl text-gray-200 font-normal">
                {selectedCollection?.title}
              </h1>
            </div>
          )}
        </div>

        {/* Kategori Filtreleme (Sadece koleksiyonlar görünümünde) */}
        {viewMode === "collections" && (
          <div className="mb-10">
            <div className="flex flex-wrap justify-start gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-lg text-sm md:text-base font-normal transition-colors duration-300 ${
                    activeCategory === category.id
                      ? "bg-indigo-600 text-white"
                      : "bg-gray-600 text-gray-200 hover:bg-gray-900"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Yükleniyor durumu */}
        {loading && (
          <div className="flex justify-center items-center py-20">
            <div className="w-12 h-12 border-4 border-indigo-300 border-t-indigo-600 rounded-full animate-spin"></div>
          </div>
        )}

        {/* Masonry Layout (Koleksiyonlar veya Fotoğraflar için) */}
        {!loading && (
          <div className="flex flex-wrap -mx-2">
            {itemColumns.map((column, columnIndex) => (
              <div
                key={columnIndex}
                className={`px-2 ${
                  columnCount === 1
                    ? "w-full"
                    : columnCount === 2
                    ? "w-1/2"
                    : "w-1/3"
                }`}
              >
                {column.map((item) =>
                  viewMode === "collections" ? (
                    <CollectionCard key={item.id} collection={item} />
                  ) : (
                    <PhotoCard key={item.id} photo={item} />
                  )
                )}
              </div>
            ))}
          </div>
        )}

        {/* Koleksiyon/fotoğraf yoksa */}
        {!loading && itemColumns.flat().length === 0 && (
          <div className="text-center py-12">
            {viewMode === "collections" ? (
              <>
                <Camera className="mx-auto h-16 w-16 text-gray-400 mb-4" />
                <p className="text-gray-500 text-lg">
                  Bu kategoride henüz koleksiyon bulunmuyor.
                </p>
                <button
                  onClick={() => setActiveCategory("tumu")}
                  className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  Tüm koleksiyonları göster
                </button>
              </>
            ) : (
              <>
                <Image className="mx-auto h-16 w-16 text-gray-400 mb-4" />
                <p className="text-gray-500 text-lg">
                  Bu koleksiyonda henüz fotoğraf bulunmuyor.
                </p>
                <button
                  onClick={backToCollections}
                  className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  Koleksiyonlara dön
                </button>
              </>
            )}
          </div>
        )}

        {/* Fotoğraf Modalı */}
        {selectedPhoto && (
          <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
            {/* Kapatma butonu */}
            <button
              onClick={closePhotoModal}
              className="absolute top-6 right-6 text-white p-2 rounded-full bg-gray-800/50 hover:bg-gray-700/50 z-10"
            >
              <X size={24} />
            </button>

            {/* Önceki fotoğraf butonu */}
            <button
              onClick={prevPhoto}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-2 rounded-full bg-gray-800/50 hover:bg-gray-700/50 z-10"
            >
              <ChevronLeft size={32} />
            </button>

            {/* Fotoğraf */}
            <div className="relative max-w-5xl max-h-screen p-4">
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                className="max-h-[85vh] mx-auto object-contain"
                style={{ maxWidth: "90vw" }}
              />
              <div className="absolute bottom-4 left-0 right-0 text-center">
                <h3 className="text-white font-medium text-xl">
                  {selectedPhoto.alt}
                </h3>
                <p className="text-gray-300 mt-1">
                  {selectedCollection?.title} • Fotoğraf {photoIndex + 1}/
                  {collectionPhotos.length}
                </p>
              </div>
            </div>

            {/* Sonraki fotoğraf butonu */}
            <button
              onClick={nextPhoto}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-2 rounded-full bg-gray-800/50 hover:bg-gray-700/50 z-10"
            >
              <ChevronRight size={32} />
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default CollectionGallery;
