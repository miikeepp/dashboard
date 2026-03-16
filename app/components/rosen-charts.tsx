import { CSSProperties } from "react";
import { arc, curveMonotoneX, line as d3Line, scaleLinear } from "d3";

export function RosenLineChart({
  values,
  maxY = 15,
  ticks = [0, 5, 10, 15],
}: {
  values: number[];
  maxY?: number;
  ticks?: number[];
}) {
  const data = values.map((value, index) => ({ index, value }));

  const xScale = scaleLinear()
    .domain([0, Math.max(1, data.length - 1)])
    .range([0, 100]);
  const yScale = scaleLinear().domain([0, maxY]).range([100, 0]);

  const line = d3Line<(typeof data)[number]>()
    .x((d) => xScale(d.index))
    .y((d) => yScale(d.value))
    .curve(curveMonotoneX);

  const d = line(data);
  if (!d) return null;

  return (
    <div
      className="relative h-full w-full"
      style={
        {
          "--marginTop": "8px",
          "--marginRight": "0px",
          "--marginBottom": "6px",
          "--marginLeft": "18px",
        } as CSSProperties
      }
    >
      {/* Y axis labels */}
      <div
        className="absolute inset-0
          h-[calc(100%-var(--marginTop)-var(--marginBottom))]
          w-[var(--marginLeft)]
          translate-y-[var(--marginTop)]
          overflow-visible"
      >
        {ticks
          .slice()
          .reverse()
          .map((value) => (
            <div
              key={value}
              style={{ top: `${yScale(value)}%`, left: "0%" }}
              className="absolute w-full -translate-y-1/2 pr-2 text-right text-[11px] font-semibold tabular-nums text-zinc-400"
            >
              {value}
            </div>
          ))}
      </div>

      {/* Chart area */}
      <div
        className="absolute inset-0
          h-[calc(100%-var(--marginTop)-var(--marginBottom))]
          w-[calc(100%-var(--marginLeft)-var(--marginRight))]
          translate-x-[var(--marginLeft)]
          translate-y-[var(--marginTop)]
          overflow-hidden"
      >
        <svg
          viewBox="0 0 100 100"
          className="h-full w-full overflow-visible"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {/* Grid lines */}
          {ticks
            .filter((t) => t !== Math.max(...ticks))
            .map((t) => (
            <g
              key={t}
              transform={`translate(0,${yScale(t)})`}
              className="text-zinc-200"
            >
              <line
                x1={0}
                x2={100}
                stroke="currentColor"
                strokeWidth={1}
                vectorEffect="non-scaling-stroke"
              />
            </g>
          ))}

          <defs>
            <linearGradient id="rosen-sessions-line" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="currentColor" className="text-indigo-300" />
              <stop offset="100%" stopColor="currentColor" className="text-indigo-600" />
            </linearGradient>
          </defs>

          {/* Soft glow */}
          <path
            d={d}
            fill="none"
            stroke="currentColor"
            className="text-indigo-500"
            strokeWidth={10}
            opacity={0.14}
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
          />

          {/* Line */}
          <path
            d={d}
            fill="none"
            stroke="url(#rosen-sessions-line)"
            strokeWidth={3.5}
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>
    </div>
  );
}

export function RosenHalfDonutGauge({
  value,
  max = 100,
  thickness = 24,
}: {
  value: number;
  max?: number;
  thickness?: number;
}) {
  const clamped = Math.max(0, Math.min(value, max));
  const pct = max === 0 ? 0 : clamped / max;
  const width = 200;
  const height = 120;
  const cx = width / 2;
  const cy = 100;
  const radius = 84;

  // d3 arc angles: 0 is 12 o'clock; positive is clockwise.
  // Top half donut: from 9 o'clock (-π/2) to 3 o'clock (π/2).
  const startAngle = -Math.PI / 2;
  const endAngle = Math.PI / 2;
  const filledEndAngle = startAngle + (endAngle - startAngle) * pct;

  const innerRadius = radius - thickness;
  const arcGen = arc()
    .innerRadius(innerRadius)
    .outerRadius(radius)
    .cornerRadius(0);

  const bgPath =
    arcGen({
      startAngle,
      endAngle,
      innerRadius,
      outerRadius: radius,
    }) ?? "";
  const fgPath =
    arcGen({
      startAngle,
      endAngle: filledEndAngle,
      innerRadius,
      outerRadius: radius,
    }) ?? "";

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className="h-full w-full"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="rosen-gauge-purple" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="currentColor" className="text-indigo-500" />
          <stop offset="100%" stopColor="currentColor" className="text-indigo-600" />
        </linearGradient>
      </defs>

      <g transform={`translate(${cx}, ${cy})`}>
        {/* Background arc (empty) */}
        <path d={bgPath} className="fill-indigo-100/80" />

        {/* Foreground arc (filled) */}
        <path d={fgPath} fill="url(#rosen-gauge-purple)" />
      </g>
    </svg>
  );
}
