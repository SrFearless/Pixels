"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"

interface ActionItem {
  label: string
  modalTitle: string
  modalMessage: string
  href: string        // você ainda pode usar para algo, mas não fará push
  image: string       // background do card
  modalImage?: string // imagem que será exibida no segundo passo
}

export default function Home() {
  const pathname = usePathname()
  const [isVisible, setIsVisible] = useState(true)

  // passo 1: confirmação de texto
  const [showConfirmModal, setShowConfirmModal] = useState(false)
  // passo 2: modal de imagem
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
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-10 gap-8 justify-items-center text-center">
          {actions.map((action, idx) => (
            <div
              key={action.label + idx}
              className="relative w-[100px] h-[100px] rounded-lg overflow-hidden border border-red-900 shadow-sm bg-cover bg-center"
              style={{ backgroundImage: `url(${action.image})` }}
            >
              <Button
                onClick={() => handleOpen(action)}
                className="absolute w-[100px] h-[20px] inset-0 bg-red-200/40 text-red-800 text-[14px] font-pixel hover:bg-red-500/60 hover:text-black"
              >
                {action.label}
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* 1) Modal de confirmação de texto */}
      {showConfirmModal && selectedItem && (
  <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
    <div className="bg-red-100 rounded-lg p-6 max-w-lg w-full text-left">
      <h2 className="text-xl font-pixel mb-4 text-center">
        {selectedItem.modalTitle}
      </h2>
      <pre className="mb-6 whitespace-pre-wrap bg-white p-4 rounded text-sm overflow-auto">
        {selectedItem.modalMessage}
      </pre>
      <div className="flex justify-end space-x-4">
        <Button variant="ghost" onClick={handleCancel}>
          Sair
        </Button>
      </div>
    </div>
  </div>
)}

      {/* 2) Modal de imagem */}
      {showImageModal && selectedItem && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg max-w-md w-full">
            {selectedItem.modalImage
              ? <img src={selectedItem.modalImage} alt={selectedItem.label} className="w-full object-cover" />
              : <div className="p-6 text-center">Sem preview disponível</div>
            }
            <div className="flex justify-end bg-gray-100 p-4">
              <Button onClick={handleCloseImage}>
                Fechar
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
