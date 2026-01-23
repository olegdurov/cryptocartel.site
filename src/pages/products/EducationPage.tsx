import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function EducationPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Обучение и сопровождение</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Для новичков</h2>
              <ul className="space-y-3 text-zinc-300">
                <li>• Разобраться с механиками работы рынка и трейдинга</li>
                <li>• Начать торговать с помощью готовых стратегий или API торговых ботов</li>
                <li>• Понять, как это работает и что стоит учитывать в самом начале</li>
              </ul>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Для профессионалов</h2>
              <ul className="space-y-3 text-zinc-300">
                <li>• Расширить кругозор и почерпнуть новые знания в сфере криптовалют</li>
                <li>• Углубиться в механику работы API торговых ботов</li>
                <li>• Получить грамотную поддержку от экспертов в сфере крипто</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
