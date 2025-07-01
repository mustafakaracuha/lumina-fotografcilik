import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import {
  Camera,
  ChevronRight,
  Award,
  Clock,
  Users,
  Phone,
  ChevronDown,
} from "lucide-react";

import CustomerReviews from "./CustomerReviews";
import MostLiked from "./MostLiked";
import Featured from "./Featured";
import OurWork from "./OurWork";
import Services from "./Services";

import header_home1 from "../../assets/header_home1.jpg";
import header_home2 from "../../assets/header_home2.jpg";
import header_home3 from "../../assets/header_home3.jpg";
import header_home4 from "../../assets/header_home4.jpg";
import header_home5 from "../../assets/header_home5.jpg";
import header_home6 from "../../assets/header_home6.jpg";

function Index() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const heroSlides = [
    {
      id: 1,
      image: header_home1,
      title: "Anılarınızı Ölümsüzleştiriyoruz",
      subtitle: "Profesyonel fotoğrafçılık hizmetleri",
    },
    {
      id: 2,
      image: header_home2,
      title: "Özel Gün Çekimleri",
      subtitle: "Düğün, nişan ve etkinlikleriniz için",
    },
    {
      id: 3,
      image: header_home3,
      title: "Romantik & Zarif",
      subtitle: "Anılarınızı estetik bir bakışla ölümsüzleştiriyoruz",
    },
    {
      id: 4,
      image: header_home4,
      title: "Doğa ile İç İçe",
      subtitle: "Açık havada eşsiz kareler yakalayın",
    },
    {
      id: 5,
      image: header_home5,
      title: "Stüdyo Çekimleri",
      subtitle: "Kontrollü ışıkta profesyonel sonuçlar",
    },
    {
      id: 6,
      image: header_home6,
      title: "Aile ve Çocuk Çekimleri",
      subtitle: "En değerli anlarınızı sevdiklerinizle paylaşın",
    },
  ];

  // Auto slide for hero section
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  // Image placeholder with hover effects
  const PhotoItem = ({ item, large = false }) => {
    const bgColors = {
      düğün: "bg-rose-500",
      portre: "bg-lime-500",
      doğa: "bg-amber-500",
      mimari: "bg-indigo-500",
      etkinlik: "bg-purple-500",
      nisan: "bg-pink-500",
    };

    const bgColor = bgColors[item.category] || "bg-gray-500";

    return (
      <div
        className={`relative cursor-pointer overflow-hidden rounded-xl md:rounded-2xl transition-all duration-300 ${
          large
            ? "h-56 md:h-72 lg:h-96 transition-all duration-300"
            : "h-48 md:h-64 lg:h-80 transition-all duration-300"
        }`}
        onClick={() => navigate("/photograpy")}
      >
        {/* Image background */}
        {item.image ? (
          <img
            src={item.image}
            alt={item.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <div
            className={`absolute inset-0 flex items-center justify-center ${bgColor}`}
          >
            <Camera size={large ? 48 : 36} color="white" opacity={0.7} />
          </div>
        )}

        {/* Hover overlay */}
        <div
          className={`absolute inset-0 bg-black/10 transition-opacity duration-300 flex flex-col justify-end p-4`}
        >
          <h3 className="text-white font-semibold text-lg">{item.title}</h3>
          <p className="text-gray-200 text-sm capitalize">{item.category}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full h-screen">
      {/* Hero Header Section */}
      <div className="relative w-full h-screen overflow-hidden">
        {/* Hero Image Slider */}
        <div className="absolute inset-0 w-full h-full">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out ${
                currentSlide === index
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-105"
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover filter brightness-75"
              />
              {/* Premium gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/30 to-black/80"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>
          ))}
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-2 h-2 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-32 w-1 h-1 bg-white/60 rounded-full animate-ping"></div>
          <div className="absolute bottom-32 left-16 w-1.5 h-1.5 bg-white/40 rounded-full animate-pulse delay-1000"></div>
        </div>

        {/* Main Hero Content */}
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4 md:px-6 max-sm:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="max-w-2xl max-sm:text-center lg:text-left">
                {heroSlides.map((slide, index) => (
                  <div
                    key={slide.id}
                    className={`transition-all duration-700 ease-out ${
                      currentSlide === index
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-12"
                    }`}
                  >
                    {currentSlide === index && (
                      <div className="space-y-8">
                        {/* Badge */}
                        <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                          <Camera className="w-4 h-4 mr-2 text-amber-400" />
                          <span className="text-sm font-medium text-white">
                            Profesyonel Fotoğrafçılık
                          </span>
                        </div>

                        {/* Main Title */}
                        <div>
                          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
                            <span className="block">
                              {slide.title.split(" ")[0]}
                            </span>
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-600">
                              {slide.title.split(" ").slice(1).join(" ")}
                            </span>
                          </h1>

                          <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed font-light">
                            {slide.subtitle}
                          </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                          <button
                            onClick={() => navigate("/photograpy")}
                            className="group bg-gradient-to-r from-white to-white hover:from-white hover:to-gray-900 text-black px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center min-w-48"
                          >
                            Portföyü İncele
                            <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          </button>

                          <button
                            onClick={() => navigate("/contact")}
                            className="group bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20 hover:border-white/50 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 flex items-center justify-center min-w-48"
                          >
                            <Phone className="mr-2 w-5 h-5 group-hover:animate-pulse" />
                            İletişime Geç
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Right Content - Stats Cards */}
              <div className="hidden lg:block">
                <div className="grid grid-cols-1 gap-6">
                  {/* Stat Card 1 */}
                  <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-3xl font-bold text-white mb-1">
                          10+
                        </div>
                        <div className="text-gray-300 font-medium">
                          Yıl Deneyim
                        </div>
                      </div>
                      <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Clock className="w-6 h-6 text-amber-400" />
                      </div>
                    </div>
                  </div>

                  {/* Stat Card 2 */}
                  <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-3xl font-bold text-white mb-1">
                          500+
                        </div>
                        <div className="text-gray-300 font-medium">
                          Başarılı Proje
                        </div>
                      </div>
                      <div className="w-12 h-12 bg-rose-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Camera className="w-6 h-6 text-rose-400" />
                      </div>
                    </div>
                  </div>

                  {/* Stat Card 3 */}
                  <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-3xl font-bold text-white mb-1">
                          98%
                        </div>
                        <div className="text-gray-300 font-medium">
                          Müşteri Memnuniyeti
                        </div>
                      </div>
                      <div className="w-12 h-12 bg-lime-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Users className="w-6 h-6 text-lime-400" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Stats - Bottom overlay */}
        <div className="absolute bottom-20 left-0 right-0 lg:hidden">
          <div className="container mx-auto px-4">
            <div className="bg-black/40 backdrop-blur-sm rounded-2xl border border-white/20 p-4">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-xl font-bold text-white">10+</div>
                  <div className="text-xs text-gray-300">Yıl Deneyim</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-white">500+</div>
                  <div className="text-xs text-gray-300">Proje</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-white">98%</div>
                  <div className="text-xs text-gray-300">Memnuniyet</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Navigation Dots */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center">
          <div className="bg-black/30 backdrop-blur-sm px-4 py-3 rounded-full border border-white/20">
            <div className="flex space-x-3">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`transition-all duration-300 rounded-full ${
                    currentSlide === index
                      ? "bg-white w-8 h-2 shadow-lg"
                      : "bg-white/40 hover:bg-white/70 w-2 h-2"
                  }`}
                  aria-label={`Slayt ${index + 1}'e git`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 hidden md:block">
          <div className="animate-bounce">
            <ChevronDown className="w-6 h-6 text-white/60" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-3 pt-14">
        <OurWork PhotoItem={PhotoItem} />

        {/* Featured section with carousel */}
        <Featured PhotoItem={PhotoItem} />

        {/* Most Liked section */}
        <MostLiked PhotoItem={PhotoItem} />
        <Services />

        {/* Customer Reviews section */}
        <CustomerReviews />
      </div>
    </div>
  );
}

export default Index;
