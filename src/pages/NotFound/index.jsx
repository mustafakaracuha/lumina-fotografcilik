import { Link } from "react-router-dom";
import { AlertCircle } from "lucide-react";

function index() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-4">
      <div className="flex flex-col items-center text-center space-y-6">
        <AlertCircle className="w-16 h-16 text-red-400" />
        <h1 className="text-6xl font-bold">404</h1>
        <p className="text-xl md:text-2xl text-gray-300">
          Üzgünüz, aradığınız sayfa bulunamadı.
        </p>
        <p className="text-md text-gray-400 max-w-md">
          Girmiş olduğunuz bağlantı kaldırılmış, adı değişmiş olabilir ya da hiç
          var olmamış olabilir.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block bg-gray-600 hover:bg-gray-600 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-300"
        >
          Anasayfaya Dön
        </Link>
      </div>
    </div>
  );
}

export default index;
