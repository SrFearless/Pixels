"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"

interface ActionItem {
  label: string
  modalTitle: string
  modalMessage: string
  href: string
  image: string
  modalImage?: string
}

export default function Home() {
  const pathname = usePathname()
  const [isVisible, setIsVisible] = useState(true)

  const [showConfirmModal, setShowConfirmModal] = useState(false)
  const [showImageModal, setShowImageModal] = useState(false)
  const [selectedItem, setSelectedItem] = useState<ActionItem | null>(null)

  useEffect(() => {
    setIsVisible(!pathname.includes("/configuracoes"))
  }, [pathname])

  if (!isVisible) return null

  const actions: ActionItem[] = [
    {
      label: "Aranha",
      modalTitle: "",
      modalMessage:"MOB !!",
      href: "",
      image: "/images/1.gif",
      modalImage: "",
    },
    {
      label: "Cachorro",
      modalTitle: "",
      modalMessage:"MOB !!",
      href: "",
      image: "/images/2.gif",
      modalImage: "",
    },
    {
      label: "Minotauro",
      modalTitle: "",
      modalMessage:"MOB !!",
      href: "",
      image: "/images/3.gif",
      modalImage: "",
    },
    {
      label: "Ovelha",
      modalTitle: "",
      modalMessage:"MOB !!",
      href: "",
      image: "/images/4.gif",
      modalImage: "",
    },    {
      label: "Passaro",
      modalTitle: "",
      modalMessage:"Decoração !!",
      href: "",
      image: "/images/5.gif",
      modalImage: "",
    },    {
      label: "1º Boss",
      modalTitle: "",
      modalMessage:"Boss !!",
      href: "",
      image: "/images/6.gif",
      modalImage: "",
    },    {
      label: "Ferreiro",
      modalTitle: "",
      modalMessage:"NPC !!",
      href: "",
      image: "/images/7.gif",
      modalImage: "",
    },
    {
      label: "Ferreiro 2.0",
      modalTitle: "",
      modalMessage:"NPC !!",
      href: "",
      image: "/images/8.gif",
      modalImage: "",
    },
    {
      label: "Moradora",
      modalTitle: "",
      modalMessage:"NPC !!",
      href: "",
      image: "/images/9.gif",
      modalImage: "",
    },
    {
      label: "Moradora 2.0",
      modalTitle: "",
      modalMessage:"NPC !!",
      href: "",
      image: "/images/10.gif",
      modalImage: "",
    },
    {
      label: "Alquimista",
      modalTitle: "",
      modalMessage:"NPC !!",
      href: "",
      image: "/images/11.gif",
      modalImage: "",
    },
    {
      label: "Alquimista 2.0",
      modalTitle: "",
      modalMessage:"NPC !!",
      href: "",
      image: "/images/12.gif",
      modalImage: "",
    },
    {
      label: "Personagem 2.0",
      modalTitle: "",
      modalMessage:"Protagonista !!",
      href: "",
      image: "/images/13.gif",
      modalImage: "",
    },
    {
      label: "Personagem",
      modalTitle: "",
      modalMessage:"Protagonista !!",
      href: "",
      image: "/images/14.gif",
      modalImage: "",
    },
    {
      label: "Subindo 2.0",
      modalTitle: "",
      modalMessage:"Protagonista !!",
      href: "",
      image: "/images/15.gif",
      modalImage: "",
    },
    {
      label: "Subindo",
      modalTitle: "",
      modalMessage:"Protagonista !!",
      href: "",
      image: "/images/16.gif",
      modalImage: "",
    },
    {
      label: "Com Tocha",
      modalTitle: "",
      modalMessage:"Protagonista !!",
      href: "",
      image: "/images/17.gif",
      modalImage: "",
    },
    {
      label: "Recebe Espada",
      modalTitle: "",
      modalMessage:"Protagonista !!",
      href: "",
      image: "/images/18.gif",
      modalImage: "",
    },
    {
      label: "Atacando",
      modalTitle: "",
      modalMessage:"Protagonista !!",
      href: "",
      image: "/images/19.gif",
      modalImage: "",
    },
    {
      label: "Andando",
      modalTitle: "",
      modalMessage:"Espada !!",
      href: "",
      image: "/images/20.gif",
      modalImage: "",
    },
    {
      label: "Arbusto",
      modalTitle: "",
      modalMessage:"Decoração !!",
      href: "",
      image: "/images/21.gif",
      modalImage: "",
    },
    {
      label: "Arvore 1",
      modalTitle: "",
      modalMessage:"Decoração !!",
      href: "",
      image: "/images/22.gif",
      modalImage: "",
    },
    {
      label: "Arvore 2",
      modalTitle: "",
      modalMessage:"Decoração !!",
      href: "",
      image: "/images/23.gif",
      modalImage: "",
    },
    {
      label: "Arvore 3",
      modalTitle: "",
      modalMessage:"Decoração !!",
      href: "",
      image: "/images/24.gif",
      modalImage: "",
    },
    {
      label: "Baú",
      modalTitle: "",
      modalMessage:"Decoração !!",
      href: "",
      image: "/images/25.gif",
      modalImage: "",
    },
    {
      label: "Barra de Vida",
      modalTitle: "",
      modalMessage:"Decoração !!",
      href: "",
      image: "/images/26.gif",
      modalImage: "",
    },
    {
      label: "Flor",
      modalTitle: "",
      modalMessage:"Decoração !!",
      href: "",
      image: "/images/27.gif",
      modalImage: "",
    },
    {
      label: "Coração",
      modalTitle: "",
      modalMessage:"Decoração !!",
      href: "",
      image: "/images/28.gif",
      modalImage: "",
    },
    {
      label: "Caveira",
      modalTitle: "",
      modalMessage:"Decoração !!",
      href: "",
      image: "/images/29.gif",
      modalImage: "",
    },
    {
      label: "Escada",
      modalTitle: "",
      modalMessage:"Decoração !!",
      href: "",
      image: "/images/30.gif",
      modalImage: "",
    },
    {
      label: "BonFire",
      modalTitle: "",
      modalMessage:"Decoração !!",
      href: "",
      image: "/images/31.gif",
      modalImage: "",
    },
    {
      label: "Moeda",
      modalTitle: "",
      modalMessage:"Decoração !!",
      href: "",
      image: "/images/32.gif",
      modalImage: "",
    },
    {
      label: "Escudo",
      modalTitle: "",
      modalMessage:"Decoração !!",
      href: "",
      image: "/images/33.gif",
      modalImage: "",
    },
    {
      label: "Mapa",
      modalTitle: "",
      modalMessage:"Decoração !!",
      href: "",
      image: "/images/34.gif",
      modalImage: "",
    },
    {
      label: "Mini-Mapa",
      modalTitle: "",
      modalMessage:"Decoração !!",
      href: "",
      image: "/images/35.gif",
      modalImage: "",
    },
    {
      label: "Portão/Chave",
      modalTitle: "",
      modalMessage:"Decoração !!",
      href: "",
      image: "/images/36.gif",
      modalImage: "",
    },
    {
      label: "Descrição",
      modalTitle: "",
      modalMessage:"Decoração !!",
      href: "",
      image: "/images/37.gif",
      modalImage: "",
    },
    {
      label: "Portão",
      modalTitle: "",
      modalMessage:"Decoração !!",
      href: "",
      image: "/images/38.gif",
      modalImage: "",
    },
    {
      label: "Guarda 2.0",
      modalTitle: "",
      modalMessage:"NPC !!",
      href: "",
      image: "/images/39.gif",
      modalImage: "",
    },
    {
      label: "Guarda",
      modalTitle: "",
      modalMessage:"NPC !!",
      href: "",
      image: "/images/40.gif",
      modalImage: "",
    },
    {
      label: "Casa 1",
      modalTitle: "",
      modalMessage:"Casa !!",
      href: "",
      image: "/images/41.gif",
      modalImage: "",
    },
    {
      label: "Casa 2",
      modalTitle: "",
      modalMessage:"Casa !!",
      href: "",
      image: "/images/42.gif",
      modalImage: "",
    },
    {
      label: "Casa 3",
      modalTitle: "",
      modalMessage:"Casa !!",
      href: "",
      image: "/images/43.gif",
      modalImage: "",
    },
    {
      label: "Casa 4",
      modalTitle: "",
      modalMessage:"Casa !!",
      href: "",
      image: "/images/44.gif",
      modalImage: "",
    },
    {
      label: "Cenário 1",
      modalTitle: "",
      modalMessage:"Mapa 1 !!",
      href: "",
      image: "/images/45.gif",
      modalImage: "",
    },
    {
      label: "Cenário 2",
      modalTitle: "",
      modalMessage:"Abertura !!",
      href: "",
      image: "/images/46.gif",
      modalImage: "",
    },
    {
      label: "Cenário 3",
      modalTitle: "",
      modalMessage:"Mapa 3 !!",
      href: "",
      image: "/images/47.gif",
      modalImage: "",
    },
    {
      label: "Cenário 4",
      modalTitle: "",
      modalMessage:"Mapa 2 !!",
      href: "",
      image: "/images/48.gif",
      modalImage: "",
    },
    {
      label: "Cenário 5",
      modalTitle: "",
      modalMessage:"Mapa 0 !!",
      href: "",
      image: "/images/49.gif",
      modalImage: "",
    },
    {
      label: "Portão",
      modalTitle: "",
      modalMessage:"Decoração !!",
      href: "",
      image: "/images/50.gif",
      modalImage: "",
    },
    {
      label: "Chuva 1",
      modalTitle: "",
      modalMessage:"Clima !!",
      href: "",
      image: "/images/51.gif",
      modalImage: "",
    },
    {
      label: "Chuva 2",
      modalTitle: "",
      modalMessage:"Clima !!",
      href: "",
      image: "/images/52.gif",
      modalImage: "",
    },
    {
      label: "Cenário 6",
      modalTitle: "",
      modalMessage:"Menu !!",
      href: "",
      image: "/images/53.gif",
      modalImage: "",
    },
    {
      label: "Itens",
      modalTitle: "",
      modalMessage:"Inventário !!",
      href: "",
      image: "/images/54.gif",
      modalImage: "",
    },
    {
      label: "Inventário",
      modalTitle: "",
      modalMessage:"Inventário !!",
      href: "",
      image: "/images/55.gif",
      modalImage: "",
    },
    {
      label: "Loja 1",
      modalTitle: "",
      modalMessage:"Inventário !!",
      href: "",
      image: "/images/56.gif",
      modalImage: "",
    },
    {
      label: "Loja 2",
      modalTitle: "",
      modalMessage:"Inventário !!",
      href: "",
      image: "/images/57.gif",
      modalImage: "",
    },
    {
      label: "Inventário 2.0",
      modalTitle: "",
      modalMessage:"Inventário !!",
      href: "",
      image: "/images/58.gif",
      modalImage: "",
    },
    {
      label: "Nome",
      modalTitle: "",
      modalMessage:"Menu !!",
      href: "",
      image: "/images/59.gif",
      modalImage: "",
    },
    {
      label: "Nome 2.0",
      modalTitle: "",
      modalMessage:"Menu !!",
      href: "",
      image: "/images/60.gif",
      modalImage: "",
    },
    {
      label: "Reviver",
      modalTitle: "",
      modalMessage:"Personagem !!",
      href: "",
      image: "/images/61.gif",
      modalImage: "",
    },
  ]

  function handleOpen(item: ActionItem) {
    setSelectedItem(item)
    setShowConfirmModal(true)
  }

  function handleCancel() {
    setShowConfirmModal(false)
    setSelectedItem(null)
  }

  function handleConfirm() {
    setShowConfirmModal(false)
    setShowImageModal(true)
  }

  function handleCloseImage() {
    setShowImageModal(false)
    setSelectedItem(null)
  }

  return (
    <>
      {/* Container principal com tema medieval */}
      <div className="min-h-screen bg-stone-900 bg-[url('/images/medieval-bg.jpg')] bg-cover bg-fixed">
        {/* Banner superior */}
        <div className="bg-black/70 border-b-4 border-amber-800 py-4 shadow-lg">
          <h1 className="text-3xl md:text-5xl font-pixel text-center text-amber-400 tracking-wider">
            GALERIA DE PIXEL ART
          </h1>
          <p className="text-center text-amber-200 mt-2 font-pixel text-sm">
            Arte digital para seu RPG medieval
          </p>
        </div>

        {/* Grid de itens */}
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
            {actions.map((action, idx) => (
              <div
                key={action.label + idx}
                className="relative group cursor-pointer transform hover:scale-105 transition-all duration-300"
                onClick={() => handleOpen(action)}
              >
                {/* Moldura medieval */}
                <div className="absolute inset-0 border-4 border-amber-700 rounded-lg pointer-events-none"></div>
                <div className="absolute inset-1 border-2 border-amber-500/50 rounded pointer-events-none"></div>
                
                {/* Card */}
                <div 
                  className="relative w-full h-32 rounded bg-stone-800 overflow-hidden bg-cover bg-center"
                  style={{ backgroundImage: `url(${action.image})` }}
                >
                  {/* Sombra do texto */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-2">
                    <p className="text-amber-100 font-pixel text-center text-sm drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                      {action.label}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal de confirmação com tema medieval */}
      {showConfirmModal && selectedItem && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-stone-800 border-4 border-amber-700 rounded-lg p-6 max-w-md w-full text-center shadow-xl">
            {/* Cabeçalho do modal */}
            <div className="border-b border-amber-600 pb-2 mb-4">
              <h2 className="text-2xl font-pixel text-amber-300">
                {selectedItem.modalTitle || "Detalhes"}
              </h2>
            </div>
            
            {/* Corpo do modal */}
            <div className="mb-6">
              <div className="bg-stone-700 border border-amber-900 p-4 rounded text-amber-100 font-pixel text-sm">
                {selectedItem.modalMessage}
              </div>
            </div>
            
            {/* Rodapé do modal */}
            <div className="flex justify-center">
              <Button 
                onClick={handleCancel}
                className="bg-amber-700 hover:bg-amber-600 text-stone-100 font-pixel px-6 py-2 rounded border border-amber-900"
              >
                Fechar
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Modal de imagem com tema medieval */}
      {showImageModal && selectedItem && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="bg-stone-800 border-4 border-amber-700 rounded-lg overflow-hidden shadow-2xl max-w-4xl w-full">
            {/* Cabeçalho */}
            <div className="bg-stone-900 border-b border-amber-800 p-3">
              <h3 className="text-amber-300 font-pixel text-center">
                {selectedItem.label}
              </h3>
            </div>
            
            {/* Conteúdo */}
            <div className="p-4 bg-black flex justify-center">
              {selectedItem.modalImage ? (
                <img 
                  src={selectedItem.modalImage} 
                  alt={selectedItem.label} 
                  className="max-h-[70vh] object-contain pixelated"
                />
              ) : (
                <div className="p-8 text-center text-amber-200 font-pixel">
                  Sem preview disponível
                </div>
              )}
            </div>
            
            {/* Rodapé */}
            <div className="bg-stone-900 border-t border-amber-800 p-3 flex justify-center">
              <Button 
                onClick={handleCloseImage}
                className="bg-amber-700 hover:bg-amber-600 text-stone-100 font-pixel px-6 py-2 rounded border border-amber-900"
              >
                Fechar
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}