"use client"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-stone-900 bg-[url('/images/medieval-bg.jpg')] bg-cover bg-fixed">
      {/* NavBar e RankingMarquee seriam inseridos aqui automaticamente */}

      {/* Conteúdo principal */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Cabeçalho */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-pixel text-amber-400 mb-4 tracking-wider">
            Oque você vai Encontrar aqui ?
          </h1>
          <div className="w-32 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="font-pixel text-amber-200 max-w-2xl mx-auto">
            Através da minha paixão por Games eu resolvi tentar criar o meu próprio, e com essa missão começei a explorar o mundo da pixel art onde as primeiras sprites da "Galeria" são desse mini jogo.
          </p>
        </div>

        {/* Seção biográfica */}
        <div className="bg-stone-800/90 border-4 border-amber-700 rounded-lg p-6 md:p-8 mb-12 shadow-xl">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-2/3">
              <h2 className="text-2xl font-pixel text-amber-300 mb-4">Galeria</h2>
              <p className="font-pixel text-amber-100 mb-4">
                Aqui apresento todas minhas pixels arts sendo elas a maioria "Animação" com ideias minhas de Personagens, Construções, Equipamentos e etc.
              </p>
            </div>
          </div>
        </div>
                {/* Seção biográfica */}
                <div className="bg-stone-800/90 border-4 border-amber-700 rounded-lg p-6 md:p-8 mb-12 shadow-xl">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-2/3">
              <h2 className="text-2xl font-pixel text-amber-300 mb-4">Sobre</h2>
              <p className="font-pixel text-amber-100 mb-4">
                Apresento que plataforma eu uso para criar as pixels arts, resolução, ajustes e informações para contato caso deseja algum projeto.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}