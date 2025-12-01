'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import Container from '@/components/ui/Container'
import { cn } from '@/lib/utils'

const heroWord = 'VALORA'

// Configuración de animaciones personalizadas por letra
const letterAnimations = [
  { delay: 100, animation: 'fadeInLeftBig' }, // V
  { delay: 300, animation: 'rotateInDownLeft', rotate: 30 }, // A (rotada)
  { delay: 400, animation: 'swing', translateY: -50 }, // L (elevada)
  { delay: 800, animation: 'fadeInLeftBig' }, // O
  { delay: 1100, animation: 'fadeInLeftBig' }, // R
  { delay: 1400, animation: 'fadeInLeftBig' }, // A
]

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative bg-[#424dae] overflow-hidden pt-[75px] pb-[60px] md:pb-[100px] lg:pb-[141px]">
      <Container>
        <div className="w-full">
          {/* Animated Hero Text - VALORA */}
          <div className="mb-[30px] flex justify-center items-center overflow-visible flex-wrap">
            {heroWord.split('').map((letter, index) => {
              const config = letterAnimations[index]
              return (
                <span
                  key={index}
                  className={cn(
                    'font-gasoek text-white inline-block leading-[105%] font-bold',
                    'text-[80px] sm:text-[90px] md:text-[110px] lg:text-[140px] xl:text-[200px]',
                    'p-0 m-0',
                    isLoaded && `animate-${config.animation}`
                  )}
                  style={{
                    animationDelay: isLoaded ? `${config.delay}ms` : undefined,
                    animationDuration: '800ms',
                    transform: config.rotate ? `rotate(${config.rotate}deg)` : 
                               config.translateY ? `translateY(${config.translateY}px)` : undefined,
                    transformOrigin: 'center',
                    fontWeight: 900
                  }}
                >
                  {letter}
                </span>
              )
            })}
          </div>

          {/* Subtitle with Icon */}
          <div className="w-full lg:w-[64%] ml-auto">
            <div className={cn(
              'flex items-center md:items-baseline transition-all duration-700',
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            )}>
              {/* Icono amarillo - Pill decorativa - visible en móvil también */}
              <span 
                className="inline-flex bg-accent rounded-[50px] px-[30px] py-[15px] md:px-[40px] md:py-[18px] lg:px-[50px] lg:py-[20px] mr-[15px] md:mr-[20px] flex-shrink-0 items-center justify-center"
                aria-hidden="true"
              >
                <span className="w-[8px] h-[8px] md:w-[10px] md:h-[10px] bg-primary rounded-full"></span>
              </span>
              
              {/* Texto del subtítulo */}
              <h1 className="text-white font-space font-bold uppercase leading-[105%] text-[18px] sm:text-[24px] md:text-[35px] lg:text-[50px] xl:text-[80px]">
                VALORACION DE <br />
                EMPRESAS Y DE OPERACIONES VINCULADAS
              </h1>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
