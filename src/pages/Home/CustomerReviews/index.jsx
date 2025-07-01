import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

function Index() {
  const reviews = [
    {
      name: "Elif Yıldız",
      comment:
        "Düğün fotoğraflarımız inanılmaz güzeldi! Hem profesyonel hem de çok samimi bir ekip.",
      rating: 5,
      image:
        "https://plus.unsplash.com/premium_photo-1670282393309-70fd7f8eb1ef?w=900&auto=format&fit=crop&q=60",
    },
    {
      name: "Ahmet Demir",
      comment:
        "Çekimler çok keyifli geçti. Albüm kalitesi ve teslim süresi harikaydı!",
      rating: 4,
      image:
        "https://images.unsplash.com/photo-1557862921-37829c790f19?w=900&auto=format&fit=crop&q=60",
    },
    {
      name: "Zeynep Acar",
      comment:
        "Tüm özel günlerimizde artık tek adresimiz burası olacak. Teşekkür ederiz!",
      rating: 5,
      image:
        "https://plus.unsplash.com/premium_photo-1673792686302-7555a74de717?w=900&auto=format&fit=crop&q=60",
    },
    {
      name: "Mustafa Karaçuha",
      comment:
        "Hizmet ve ilgi çok iyiydi. Fotoğraflarımızı hayranlıkla izliyoruz.",
      rating: 5,
      image:
        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      name: "Ayşe Kaplan",
      comment: "Güler yüzlü ekip ve profesyonel çalışma. Tavsiye ederim!",
      rating: 4,
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=60&w=900",
    },
    {
      name: "Burak Özkan",
      comment:
        "İlk başta tereddüt ettim ama sonuç mükemmeldi. Çok memnun kaldım.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&q=60&w=900",
    },
    {
      name: "Cansu Yılmaz",
      comment:
        "Doğum günü çekimi harika geçti. Her anı ölümsüzleştirdiniz, teşekkürler!",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?auto=format&fit=crop&q=60&w=900",
    },
    {
      name: "Emre Arslan",
      comment:
        "Bu kadar kaliteli bir çekimi uygun fiyata bulmak zor. Herkese öneriyorum.",
      rating: 4,
      image:
        "https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      name: "Gamze Tetik",
      comment:
        "Sadece fotoğraflar değil, videolar da harika oldu. Elinize sağlık!",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=60&w=900",
    },
    {
      name: "Mert Çetin",
      comment:
        "Çocuklarımızın doğum günü çekiminden çok memnun kaldık. Harika kareler yakalanmış.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=60&w=900",
    },
    {
      name: "Sibel Bozkurt",
      comment:
        "Tüm ekip çok kibar ve ilgiliydi. Tekrar tercih edeceğimiz bir yer.",
      rating: 4,
      image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=60&w=900",
    },
    {
      name: "Kerem Taş",
      comment:
        "Harika ışık kullanımı ve doğal pozlar. Fotoğrafları görünce çok mutlu olduk.",
      rating: 5,
      image:
        "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      name: "Nazlı Güneş",
      comment:
        "Anılarımızı bu kadar güzel ölümsüzleştirdiğiniz için teşekkür ederiz.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=60&w=900",
    },
    {
      name: "Tolga Duman",
      comment: "Yaratıcı kareler ve hızlı teslim. Emeğinize sağlık.",
      rating: 4,
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=60&w=900",
    },
    {
      name: "Selin Kaya",
      comment: "Çekim sırasında çok rahattık. Harika bir deneyimdi!",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&q=60&w=900",
    },
    {
      name: "Yusuf Uçar",
      comment:
        "Yıllardır böyle bir hizmet almamıştım. Harika bir fotoğrafçı kadrosu.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&q=60&w=900",
    },
    {
      name: "Büşra Tekin",
      comment:
        "Özellikle albüm tasarımı şahane olmuş. Gönülden teşekkür ederim.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=60&w=900",
    },
    {
      name: "Onur Şahin",
      comment:
        "Detaylara gösterilen özen ve kalite gerçekten çok etkileyiciydi.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&q=60&w=900",
    },
    {
      name: "Ece Bulut",
      comment:
        "En mutlu anlarımızı sizinle paylaşmak harikaydı. Herkese tavsiye ederim.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=60&w=900",
    },
    {
      name: "Furkan Öztürk",
      comment: "Kaliteli çekimler ve hızlı teslimat. Başarılar dilerim!",
      rating: 4,
      image:
        "https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&q=60&w=900",
    },
  ];

  return (
    <div className="mt-10 pb-10">
      <p className="text-xl md:text-2xl font-normal text-gray-300 mb-4 md:mb-6 lg:mb-8 mt-8 lg:mt-10">
        Müşteri Yorumları
      </p>

      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop={true}
        spaceBetween={24}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-10"
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="h-40 bg-gray-700 rounded-xl p-6 shadow-lg flex flex-col justify-between">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-white"
                />
                <div>
                  <h4 className="text-lg font-semibold text-white">
                    {review.name}
                  </h4>
                  <div className="text-yellow-400 text-sm">
                    {"★".repeat(review.rating)}
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed line-clamp-2">
                “{review.comment}”
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Index;
