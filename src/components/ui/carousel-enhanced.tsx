import useEmblaCarousel, { type UseEmblaCarouselType } from 'embla-carousel-react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useCallback, useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

type CarouselApi = UseEmblaCarouselType[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
type CarouselOptions = UseCarouselParameters[0]
type CarouselPlugin = UseCarouselParameters[1]

interface CarouselProps {
  opts?: CarouselOptions
  plugins?: CarouselPlugin
  orientation?: 'horizontal' | 'vertical'
  setApi?: (api: CarouselApi) => void
  className?: string
  children: React.ReactNode
}

export function EnhancedCarousel({
  orientation = 'horizontal',
  opts,
  setApi,
  plugins,
  className,
  children,
  ...props
}: CarouselProps) {
  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === 'horizontal' ? 'x' : 'y',
    },
    plugins
  )
  
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  const onSelect = useCallback((api: CarouselApi) => {
    if (!api) {
      return
    }

    setCanScrollPrev(api.canScrollPrev())
    setCanScrollNext(api.canScrollNext())
  }, [])

  const scrollPrev = useCallback(() => {
    api?.scrollPrev()
  }, [api])

  const scrollNext = useCallback(() => {
    api?.scrollNext()
  }, [api])

  useEffect(() => {
    if (!api || !setApi) {
      return
    }

    setApi(api)
  }, [api, setApi])

  useEffect(() => {
    if (!api) {
      return
    }

    onSelect(api)
    api.on('reInit', onSelect)
    api.on('select', onSelect)

    return () => {
      api?.off('select', onSelect)
    }
  }, [api, onSelect])

  return (
    <div
      className={cn('relative', className)}
      {...props}
    >
      <div ref={carouselRef} className="overflow-hidden">
        <div className={cn(
          'flex',
          orientation === 'horizontal' ? '-ml-4' : '-mt-4 flex-col'
        )}>
          {children}
        </div>
      </div>
      
      <Button
        variant="outline"
        size="sm"
        className={cn(
          'absolute z-10 h-8 w-8 rounded-full p-0 bg-background/80 backdrop-blur-sm border-2',
          orientation === 'horizontal' 
            ? 'left-2 top-1/2 -translate-y-1/2' 
            : 'top-2 left-1/2 -translate-x-1/2 rotate-90'
        )}
        disabled={!canScrollPrev}
        onClick={scrollPrev}
      >
        <ArrowLeft className="h-4 w-4" />
      </Button>
      
      <Button
        variant="outline"
        size="sm"
        className={cn(
          'absolute z-10 h-8 w-8 rounded-full p-0 bg-background/80 backdrop-blur-sm border-2',
          orientation === 'horizontal' 
            ? 'right-2 top-1/2 -translate-y-1/2' 
            : 'bottom-2 left-1/2 -translate-x-1/2 rotate-90'
        )}
        disabled={!canScrollNext}
        onClick={scrollNext}
      >
        <ArrowRight className="h-4 w-4" />
      </Button>
    </div>
  )
}

export function CarouselItem({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('min-w-0 shrink-0 grow-0 basis-full pl-4', className)}
      {...props}
    >
      {children}
    </div>
  )
}