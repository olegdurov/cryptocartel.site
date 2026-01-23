import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function BusinessHubPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">CC Business Hub</h1>
          <p className="text-xl text-zinc-400 mb-12">
            Площадка для предпринимателей и владельцев бизнеса с возможностью токенизации и выпуска собственных цифровых акций
          </p>
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
            <p className="text-zinc-300">
              Размещайте свой проект, токенизируйте его и получайте инвестиции через смарт-контракты на блокчейне PON.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
