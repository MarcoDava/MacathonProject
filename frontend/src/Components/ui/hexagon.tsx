import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { cn } from "../../lib/utils"

export interface HexagonBackgroundProps {
  className?: string
  children?: React.ReactNode
  /** Base hexagon width in pixels */
  hexagonSize?: number
  /** Gap between hexagons in pixels */
  hexagonMargin?: number
  /** Glow color on hover */
  glowColor?: string
  /** Base border color */
  borderColor?: string
}

export function HexagonBackground({
  className,
  children,
  hexagonSize = 60,
  hexagonMargin = 2,
  glowColor = "rgba(34, 211, 238, 0.6)",
  borderColor = "rgba(63, 63, 70, 0.5)",
}: HexagonBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [grid, setGrid] = useState({ rows: 0, cols: 0, scale: 1 })

  const hexWidth = hexagonSize
  const hexHeight = hexagonSize * 1.15
  const rowSpacing = hexagonSize * 0.86

  const updateGrid = useCallback(() => {
    const container = containerRef.current
    if (!container) return

    const { width, height } = container.getBoundingClientRect()
    const scale = Math.max(1, Math.min(width, height) / 800)
    const scaledSize = hexagonSize * scale

    const cols = Math.ceil(width / scaledSize) + 2
    const rows = Math.ceil(height / (scaledSize * 0.86)) + 2

    setGrid({ rows, cols, scale })
  }, [hexagonSize])

  useEffect(() => {
    updateGrid()
    const container = containerRef.current
    if (!container) return

    const ro = new ResizeObserver(updateGrid)
    ro.observe(container)
    return () => ro.disconnect()
  }, [updateGrid])

  const scaledHexWidth = hexWidth * grid.scale
  const scaledHexHeight = hexHeight * grid.scale
  const scaledRowSpacing = rowSpacing * grid.scale
  const scaledMargin = hexagonMargin * grid.scale

  // Memoize the hexagon style to avoid recreating objects
  const hexagonStyle = useMemo(
    () => ({
      width: scaledHexWidth,
      height: scaledHexHeight,
      marginLeft: scaledMargin,
      "--glow-color": glowColor,
      "--border-color": borderColor,
      "--margin": `${scaledMargin}px`,
    }),
    [scaledHexWidth, scaledHexHeight, scaledMargin, glowColor, borderColor],
  )

  return (
    <div
      ref={containerRef}
      className={cn("fixed inset-0 overflow-hidden bg-neutral-950", className)}
    >
      {/* Hexagon grid */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: grid.rows }).map((_, rowIndex) => {
          const isOddRow = rowIndex % 2 === 1
          const marginLeft = isOddRow ? -(scaledHexWidth / 2) + scaledMargin : scaledMargin

          return (
            <div
              key={rowIndex}
              className="flex"
              style={{
                marginTop: rowIndex === 0 ? -scaledHexHeight * 0.25 : -scaledRowSpacing * 0.16,
                marginLeft: marginLeft - scaledHexWidth * 0.1,
              }}
            >
              {Array.from({ length: grid.cols }).map((_, colIndex) => (
                <div
                  key={`${rowIndex}-${colIndex}`}
                  className={cn(
                    "relative shrink-0 transition-all duration-1000",
                    "[clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]",
                    // Border layer
                    "before:absolute before:inset-0 before:bg-[var(--border-color)]",
                    "before:transition-all before:duration-1000",
                    // Inner fill
                    "after:absolute after:inset-[var(--margin)] after:bg-neutral-950",
                    "after:[clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]",
                    "after:transition-all after:duration-500",
                    // Hover effects
                    "hover:before:bg-[var(--glow-color)] hover:before:duration-0",
                    "hover:after:bg-neutral-900 hover:after:duration-0",
                    "hover:before:shadow-[0_0_20px_var(--glow-color)]",
                  )}
                  style={hexagonStyle as React.CSSProperties}
                />
              ))}
            </div>
          )
        })}
      </div>

      {/* Ambient glow overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(ellipse at 30% 20%, ${glowColor.replace("0.6", "0.15")} 0%, transparent 50%),
                       radial-gradient(ellipse at 70% 80%, ${glowColor.replace("0.6", "0.1")} 0%, transparent 50%)`,
        }}
      />

      {/* Vignette */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 0%, transparent 40%, rgba(10,10,10,0.8) 100%)",
        }}
      />

      {/* Content layer */}
      {children && <div className="relative z-10 h-full w-full">{children}</div>}
    </div>
  )
}

export default function HexagonBackgroundDemo() {
  return <HexagonBackground />
}
