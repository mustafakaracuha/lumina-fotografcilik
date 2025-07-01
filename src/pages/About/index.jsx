import { Camera, Users, Award } from "lucide-react";

function AboutPage() {
  const studioInfo = {
    name: "Lumina Fotoğrafçılık",
    founded: 2015,
    mission:
      "Her anınızı sanatsal bir bakış açısıyla ölümsüzleştirmek ve sizlere unutulmaz hatıralar sunmak.",
    description:
      "2015 yılından bu yana profesyonel fotoğrafçılık hizmetleri sunuyoruz. Düğün, nişan, doğum günü gibi özel günlerinizden kurumsal etkinliklere, portre çekimlerinden doğa fotoğrafçılığına kadar geniş bir yelpazede hizmet veriyoruz. Deneyimli ekibimiz ve son teknoloji ekipmanlarımızla her projede en yüksek kaliteyi sunmayı hedefliyoruz.",
    values: [
      "Profesyonellik ve kaliteden asla ödün vermemek",
      "Her müşterimizin özgün tarzını ve isteklerini öncelikli tutmak",
      "Sürekli kendimizi geliştirmek ve fotoğrafçılık dünyasındaki yenilikleri takip etmek",
      "Samimi ve güvenilir bir çalışma ortamı oluşturmak",
    ],
    contact: {
      address: "Bağdat Caddesi No:157, Kadıköy, İstanbul",
      phone: "+90 (212) 555 1234",
      email: "info@luminafotografcilik.com",
    },
  };

  // Team members
  const teamMembers = [
    {
      name: "Ahmet Yılmaz",
      title: "Kurucu & Baş Fotoğrafçı",
      bio: "15 yıllık tecrübesiyle sektörün önde gelen isimlerinden. Ulusal ve uluslararası birçok ödüle sahip.",
      image:
        "https://images.unsplash.com/photo-1615109398623-88346a601842?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8fDB8fHww",
    },
    {
      name: "Zeynep Kaya",
      title: "Kıdemli Fotoğrafçı",
      bio: "Portre ve düğün fotoğrafçılığında uzman. Samimi ve doğal anları yakalamadaki ustalığıyla tanınıyor.",
      image:
        "https://images.unsplash.com/photo-1586351012965-861624544334?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGdpcmx8ZW58MHx8MHx8fDA%3D",
    },
    {
      name: "Mehmet Demir",
      title: "Sanat Yönetmeni",
      bio: "Görsel tasarım geçmişiyle ekibimize yaratıcı bir bakış açısı katıyor. Konsept çekimlerin mimarı.",
      image:
        "https://plus.unsplash.com/premium_photo-1689977927774-401b12d137d6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1hbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Ayşe Şahin",
      title: "Retüş Uzmanı",
      bio: "Fotoğrafları mükemmelleştirmek için büyük bir titizlikle çalışıyor. Adobe uzmanı.",
      image:
        "https://images.unsplash.com/photo-1601288496920-b6154fe3626a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGdpcmx8ZW58MHx8MHx8fDA%3D",
    },
  ];

  // Services
  const services = [
    {
      name: "Düğün Fotoğrafçılığı",
      description:
        "Hayatınızın en özel gününü her detayıyla ölümsüzleştiriyoruz.",
      icon: <Camera className="w-6 h-6" />,
    },
    {
      name: "Portre Çekimleri",
      description: "Kişiliğinizi ve tarzınızı yansıtan profesyonel portreler.",
      icon: <Users className="w-6 h-6" />,
    },
    {
      name: "Kurumsal Etkinlikler",
      description:
        "Şirket etkinlikleriniz için profesyonel fotoğraf hizmetleri.",
      icon: <Award className="w-6 h-6" />,
    },
  ];

  return (
    <div className="w-full min-h-screen text-gray-200 pt-20">
      {/* Studio Information */}
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {studioInfo.name}
            </h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              {studioInfo.description}
            </p>
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 mb-6">
              <h3 className="text-xl font-normal text-white mb-4">
                Misyonumuz
              </h3>
              <p className="text-gray-300">{studioInfo.mission}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-900 rounded-xl h-40 md:h-48 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1"
                alt="Düğün Fotoğrafı 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-gray-900 rounded-xl h-40 md:h-48 mt-6 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1481653125770-b78c206c59d4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHdlZGRpbmd8ZW58MHx8MHx8fDA%3D"
                alt="Portre Fotoğrafı 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-gray-900 rounded-xl h-40 md:h-48 mt-6 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1658752784764-e17f9d1eeaa0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBvcnRyZXxlbnwwfHwwfHx8MA%3D%3D"
                alt="Doğum Fotoğrafı 2"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-gray-900 rounded-xl h-40 md:h-48 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1587677171791-8b93c752999b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cG9ydHJlfGVufDB8fDB8fHww"
                alt="Doğum Günü Fotoğrafı 1"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="md:py-12">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-normal text-white mb-8 text-center">
            Değerlerimiz
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {studioInfo.values.map((value, index) => (
              <div
                key={index}
                className="bg-gray-700 p-5 rounded-xl flex items-center"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full mr-4 flex-shrink-0">
                  {index + 1}
                </div>
                <p className="text-gray-200">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-normal text-white mb-8 text-center">
          Ekibimiz
        </h2>
        <p className="text-center text-gray-300 mb-10 max-w-3xl mx-auto">
          Profesyonel ekibimiz, her projeye özgün bir bakış açısı ve yüksek
          kalite standardı getiriyor. Farklı alanlarda uzmanlaşmış ekip
          üyelerimizle ihtiyaçlarınıza en uygun hizmeti sunuyoruz.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gray-700 rounded-xl p-6 flex flex-col items-center text-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full mb-4 object-cover"
              />
              <h3 className="text-gray-200 text-lg font-semibold">
                {member.name}
              </h3>
              <p className="text-gray-400 text-sm mb-3">{member.title}</p>
              <p className="text-gray-300 text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>

     
    </div>
  );
}

export default AboutPage;
