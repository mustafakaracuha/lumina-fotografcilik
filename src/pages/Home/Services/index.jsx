const index = () => {
  const services = [
    {
      title: "Düğün Fotoğrafçılığı",
      description:
        "Özel gününüzü eşsiz karelerle ölümsüzleştiriyoruz. Doğal ve samimi anlarınızı profesyonelce yakalıyoruz.",
      bgColor: "bg-rose-800",
      image:
        "https://images.pexels.com/photos/265722/pexels-photo-265722.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      title: "Portre Çekimleri",
      description:
        "Profesyonel stüdyo ışıklarıyla kişisel veya kurumsal portrelerinizi çekiyoruz.",
      bgColor: "bg-amber-800",
      image:
        "https://images.pexels.com/photos/32145474/pexels-photo-32145474/free-photo-of-basortulu-kadinin-zarif-portresi.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      title: "Mekan Çekimleri",
      description:
        "İşletmeniz veya eviniz için profesyonel mekan fotoğrafları çekiyoruz.",
      bgColor: "bg-emerald-800",
      image:
        "https://images.pexels.com/photos/32131272/pexels-photo-32131272.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      title: "Etkinlik Fotoğrafçılığı",
      description:
        "Konser, festival, lansman gibi etkinliklerinizi dinamik bir şekilde belgeliyoruz.",
      bgColor: "bg-blue-800",
      image:
        "https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      title: "Ürün Fotoğrafçılığı",
      description:
        "E-ticaret siteniz için profesyonel ürün fotoğrafları çekiyoruz.",
      bgColor: "bg-purple-800",
      image:
        "https://images.pexels.com/photos/17312554/pexels-photo-17312554/free-photo-of-eller-kahverengi-beyaz-tutmak.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      title: "Hava Fotoğrafçılığı",
      description:
        "Drone ile eşsiz açılardan çarpıcı hava fotoğrafları çekiyoruz.",
      bgColor: "bg-sky-800",
      image:
        "https://images.pexels.com/photos/1123972/pexels-photo-1123972.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
  ];

  return (
    <section className="py-0">
      <div className="container mx-auto">
        <div className="text-left mt-10">
          <p className="text-xl md:text-2xl font-normal text-gray-300 mb-4 md:mb-6 lg:mb-8">
            Hizmetlerimiz
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative rounded-xl overflow-hidden group shadow-lg transition-transform duration-300 hover:-translate-y-1"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-4 flex flex-col justify-end">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/20 backdrop-blur">
                    {service.icon}
                  </div>
                  <h3 className="text-base font-semibold text-white">
                    {service.title}
                  </h3>
                </div>
                <p className="text-sm text-gray-300 line-clamp-2">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default index;
