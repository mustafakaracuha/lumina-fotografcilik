import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  MessageSquare,
  Send,
  Instagram,
  Facebook,
  X,
} from "lucide-react";

function Index() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    setIsSubmitting(true);

    // Form gönderimi simülasyonu
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);

      // Başarı mesajını 3 saniye sonra kaldır
      setTimeout(() => {
        setSubmitSuccess(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      }, 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen text-white">
      {/* Header */}
      <div className="pt-32 pb-12 text-center">
        <h1 className="text-2xl text-gray-300 font-normal md:text-4xl mb-3">
          İletişim
        </h1>
        <p className="mt-4 text-gray-500 max-w-2xl mx-auto px-4">
          Fotoğraf çekimleri, randevu veya herhangi bir soru için bizimle
          iletişime geçebilirsiniz. En kısa sürede size dönüş yapacağız.
        </p>
      </div>

      <div className="container mx-auto px-4 pb-20">
        <div className="bg-gray-800/50 rounded-2xl overflow-hidden shadow-2xl max-w-6xl mx-auto">
          <div className="md:flex">
            {/* İletişim Bilgileri */}
            <div className="bg-gray-700 md:w-2/5 p-8 md:p-12">
              <h2 className="text-2xl font-bold mb-8">Bilgilerimiz</h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-gray-800 p-3 rounded-lg mr-4">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium">Adres</h3>
                    <p className="text-gray-200 mt-1">
                      Barbaros Bulvarı No:123
                      <br />
                      Beşiktaş, İstanbul
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-gray-800 p-3 rounded-lg mr-4">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium">Telefon</h3>
                    <p className="text-gray-200 mt-1">+90 (212) 123 45 67</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-gray-800 p-3 rounded-lg mr-4">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium">E-posta</h3>
                    <p className="text-gray-200 mt-1">info@fotografci.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-gray-800 p-3 rounded-lg mr-4">
                    <MessageSquare size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium">Çalışma Saatleri</h3>
                    <p className="text-gray-200 mt-1">
                      Pazartesi - Cumartesi: 09:00 - 18:00
                      <br />
                      Pazar: Kapalı
                    </p>
                  </div>
                </div>
              </div>

              {/* Sosyal Medya */}
              <div className="mt-12">
                <h3 className="font-medium mb-4">Bizi Takip Edin</h3>
                <div className="flex space-x-4">
                  <div className="bg-purple-600 p-3 rounded-lg hover:bg-purple-700 transition cursor-pointer">
                    <Instagram size={20} />
                  </div>
                  <div className="bg-blue-600 p-3 rounded-lg hover:bg-blue-700 transition cursor-pointer">
                    <Facebook size={20} />
                  </div>
                  <div className="bg-gray-800 p-3 rounded-lg hover:bg-gray-900 transition cursor-pointer">
                    <X size={20} />
                  </div>
                </div>
              </div>
            </div>

            {/* İletişim Formu */}
            <div className="md:w-3/5 p-8 md:p-12">
              <h2 className="text-2xl font-bold mb-8">Bize Ulaşın</h2>

              {submitSuccess ? (
                <div className="bg-green-800/30 border border-green-500 rounded-lg p-4 text-center">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send size={28} />
                  </div>
                  <h3 className="text-xl font-medium">Mesajınız İletildi!</h3>
                  <p className="text-gray-300 mt-2">
                    En kısa sürede size dönüş yapacağız.
                  </p>
                </div>
              ) : (
                <div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-300 mb-1"
                      >
                        İsim Soyisim*
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        placeholder="İsim Soyisim"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-300 mb-1"
                      >
                        E-posta*
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        placeholder="E-posta adresiniz"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-300 mb-1"
                      >
                        Telefon
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        placeholder="Telefon numaranız"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-300 mb-1"
                      >
                        Konu*
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        placeholder="Mesaj konusu"
                      />
                    </div>
                  </div>

                  <div className="mt-6">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-300 mb-1"
                    >
                      Mesajınız*
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="Mesajınızı buraya yazın..."
                    ></textarea>
                  </div>

                  <div className="mt-8">
                    <button
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className={`w-full py-3 px-6 rounded-lg flex items-center justify-center font-medium text-white transition duration-300 ${
                        isSubmitting
                          ? "bg-gray-600 cursor-not-allowed"
                          : "bg-indigo-600 hover:bg-indigo-500"
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                          Gönderiliyor...
                        </>
                      ) : (
                        <>
                          <Send size={18} className="mr-2" />
                          Mesajı Gönder
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Harita */}
        <div className="mt-16 max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-lg">
          <div className="aspect-video w-full">
            <iframe
              title="Lokasyon Haritası"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3067.1792687552914!2d32.85974131506249!3d39.93336397942221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34fdb2ce13b7d%3A0xc06e657a0b33b7c4!2zQW5rYXJhLCBBbmthcmEsIFR1cmtpeWU!5e0!3m2!1str!2str!4v1691250989044!5m2!1str!2str"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="border-0 w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
