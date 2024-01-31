"use client"

import * as React from "react"
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

type CarouselApi = UseEmblaCarouselType[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
type CarouselOptions = UseCarouselParameters[0]
type CarouselPlugin = UseCarouselParameters[1]

type CarouselProps = {
  opts?: CarouselOptions
  plugins?: CarouselPlugin
  orientation?: "horizontal" | "vertical"
  setApi?: (api: CarouselApi) => void
}

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0]
  api: ReturnType<typeof useEmblaCarousel>[1]
  scrollPrev: () => void
  scrollNext: () => void
  scrollTo: (index: number) => void
  canScrollPrev: boolean
  canScrollNext: boolean
  isHovered: boolean
  current: number
} & CarouselProps

const CarouselContext = React.createContext<CarouselContextProps | null>(null)

function useCarousel() {
  const context = React.useContext(CarouselContext)

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />")
  }

  return context
}

const Carousel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(
  (
    {
      orientation = "horizontal",
      opts,
      setApi,
      plugins,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y",
      },
      plugins
    )
    const [canScrollPrev, setCanScrollPrev] = React.useState(false)
    const [canScrollNext, setCanScrollNext] = React.useState(false)
    const [isHovered, setIsHovered] = React.useState(false)
    const [current, setCurrent] = React.useState(0)

    const onSelect = React.useCallback((api: CarouselApi) => {
      if (!api) {
        return
      }

      setCanScrollPrev(api.canScrollPrev())
      setCanScrollNext(api.canScrollNext())
    }, [])

    const scrollPrev = React.useCallback(() => {
      api?.scrollPrev()
      setCurrent(current - 1)
    }, [api])

    const scrollNext = React.useCallback(() => {
      api?.scrollNext()
      setCurrent(current + 1)
    }, [api])

    const scrollTo = React.useCallback(
      (index: number) => {
        api?.scrollTo(index)
        setCurrent(index)
      }, [api])

    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault()
          scrollPrev()
          setCurrent(current - 1)
        } else if (event.key === "ArrowRight") {
          event.preventDefault()
          scrollNext()
          setCurrent(current + 1)
        }
      },
      [scrollPrev, scrollNext]
    )

    React.useEffect(() => {
      if (!api || !setApi) {
        return
      }

      setApi(api)
    }, [api, setApi])

    React.useEffect(() => {
      if (!api) {
        return
      }

      onSelect(api)
      api.on("reInit", onSelect)
      api.on("select", onSelect)

      return () => {
        api?.off("select", onSelect)
      }
    }, [api, onSelect])

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api: api,
          opts,
          orientation:
            orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
          isHovered,
          current,
          scrollTo,
        }}
      >
        <div
          ref={ref}
          onKeyDownCapture={handleKeyDown}
          className={cn("relative", className)}
          role="region"
          aria-roledescription="carousel"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    )
  }
)
Carousel.displayName = "Carousel"

const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel()

  return (
    <div ref={carouselRef} className="overflow-hidden">
      <div
        ref={ref}
        className={cn(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className
        )}
        {...props}
      />
    </div>
  )
})
CarouselContent.displayName = "CarouselContent"

const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { orientation } = useCarousel()

  return (
    <div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      )}
      {...props}
    />
  )
})
CarouselItem.displayName = "CarouselItem"

const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollPrev, canScrollPrev, isHovered } = useCarousel()

  return (
    <Button
      ref={ref}
      size={'icon'}
      className={cn(
        "absolute  h-8 w-8 rounded-full transition-all duration-300 left-0 overflow-hidden",
        orientation === "horizontal"
          ? "top-1/2 -translate-y-1/2"
          : "left-1/2 -translate-x-1/2 rotate-90",
        className,
        isHovered ? "opacity-100 left-6 md:left-12" : "opacity-0",
        canScrollPrev ? "" : "!opacity-0",
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <ChevronLeft className="scale-[2] md:scale-[4] stroke-[0.5] transition-all duration-300 hover:text-ecm-yellow" />
      <span className="sr-only">Previous slide</span>
    </Button>
  )
})
CarouselPrevious.displayName = "CarouselPrevious"

const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollNext, canScrollNext, isHovered } = useCarousel()

  return (
    <Button
      ref={ref}
      size={'icon'}
      className={cn(
        "absolute h-8 w-8 rounded-full transition-all duration-300 right-0 overflow-hidden",
        orientation === "horizontal"
          ? "top-1/2 -translate-y-1/2"
          : "bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        className,
        isHovered ? "opacity-100 right-6 md:right-12" : "opacity-0",
        canScrollNext ? "" : "!opacity-0",
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <ChevronRight className="scale-[2] md:scale-[4] stroke-[0.5] transition-all duration-300 hover:text-ecm-yellow" />
      <span className="sr-only">Next slide</span>
    </Button>
  )
})
CarouselNext.displayName = "CarouselNext"

const CarouselDots = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { api, current, scrollTo } = useCarousel()
  if (!api) {
    return null
  }
  const { slideNodes } = api
  const numberOfSlides = slideNodes().length
  return (
    <div
      ref={ref}
      className={cn(
        "flex justify-start items-center space-x-2 ecm-max-width relative mb-4 mx-auto",
        className
      )}
      {...props}
    >
      <div className="absolute bottom-8">
        {Array.from(Array(numberOfSlides).keys()).map((i) => (
          <Button
            key={i}
            className={`mx-1 w-4 h-4 rounded-full p-0.5 cursor-pointer transition-all duration-300 border-2 border-transparent hover:bg-transparent hover:border-ecm-yellow
            ${i === current
              ? "border-2 border-ecm-yellow "
              : "bg-[#aaa]"
              }`}
            onClick={() => scrollTo(i)}
          />
        ))}
      </div>

    </div>
  )
}
)
CarouselDots.displayName = "CarouselDots"

export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselDots,
}
