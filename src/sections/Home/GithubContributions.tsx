import { useState, useEffect, useMemo } from "react";
import useDarkMode from "@/hooks/useDarkMode";
import { Github, ExternalLink } from "lucide-react";
import githubCache from "@/constants/github.json";

interface ContributionDay {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

interface GithubData {
  total: {
    lastYear: number;
  };
  contributions: ContributionDay[];
}

const MONTH_NAMES = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const THEME_COLORS = {
  dark: ["#16191e", "#383e47", "#6e7681", "#adbac7", "#ffffff"],
  light: ["#ebedf0", "#c6cbd1", "#8c959f", "#424a53", "#1b1f24"],
};

export default function GithubContributions() {
  const { theme } = useDarkMode();
  const isDark = theme === "dark";

  const [data, setData] = useState<GithubData>(githubCache as unknown as GithubData);
  const [hovered, setHovered] = useState<{
    date: string;
    count: number;
    svgX: number;
    svgY: number;
  } | null>(null);

  // Background fetch to refresh with latest live data seamlessly
  useEffect(() => {
    let mounted = true;
    fetch("https://github-contributions-api.jogruber.de/v4/devmoamal?y=last")
      .then((res) => {
        if (!res.ok) throw new Error("Network error");
        return res.json();
      })
      .then((json: GithubData) => {
        if (mounted && json?.contributions?.length) {
          setData(json);
        }
      })
      .catch(() => {
        // Silently preserve cached data
      });

    return () => {
      mounted = false;
    };
  }, []);

  const colors = isDark ? THEME_COLORS.dark : THEME_COLORS.light;

  // Group contributions by weeks (each week has up to 7 days, Sunday to Saturday)
  const weeks = useMemo(() => {
    const list: ContributionDay[][] = [];
    const contribs = data.contributions || [];
    for (let i = 0; i < contribs.length; i += 7) {
      list.push(contribs.slice(i, i + 7));
    }
    return list;
  }, [data.contributions]);

  // Compute month label positions
  const monthLabels = useMemo(() => {
    const labels: { month: string; weekIndex: number }[] = [];
    let lastMonth = -1;
    let lastWeek = -3;
    const contribs = data.contributions || [];

    contribs.forEach((c, idx) => {
      const d = new Date(c.date + "T00:00:00Z");
      const m = d.getUTCMonth();
      const weekIdx = Math.floor(idx / 7);

      if (m !== lastMonth) {
        if (weekIdx - lastWeek >= 2 && weekIdx <= 50) {
          labels.push({ month: MONTH_NAMES[m], weekIndex: weekIdx });
          lastWeek = weekIdx;
        }
        lastMonth = m;
      }
    });

    return labels;
  }, [data.contributions]);

  const totalContributions = data.total?.lastYear ?? 1581;

  const formatDate = (dateStr: string) => {
    try {
      const d = new Date(dateStr + "T00:00:00Z");
      return d.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        timeZone: "UTC",
      });
    } catch {
      return dateStr;
    }
  };

  return (
    <section className="py-6">
      {/* Header */}
      <div className="flex items-center justify-between gap-2 mb-4">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
          GitHub Contributions
        </h2>

        <a
          href="https://github.com/devmoamal"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-text-muted hover:text-foreground transition-colors shrink-0"
        >
          <Github className="w-3.5 h-3.5" />
          <span>github.com/devmoamal</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>

      {/* Calendar Card - strictly NO scrollbar, full responsive auto-fit */}
      <div className="p-4 sm:p-5 rounded-xl border border-border bg-surface select-none">
        {/* SVG Container: scales 100% to fit container with zero horizontal scroll */}
        <div className="w-full">
          <svg
            viewBox="0 0 720 114"
            className="w-full h-auto block overflow-visible"
            onMouseLeave={() => setHovered(null)}
          >
            {/* Month labels */}
            {monthLabels.map(({ month, weekIndex }) => (
              <text
                key={`${month}-${weekIndex}`}
                x={28 + weekIndex * 13}
                y={11}
                fontSize="9"
                fill={isDark ? "#8b949e" : "#57606a"}
                fontFamily="inherit"
              >
                {month}
              </text>
            ))}

            {/* Weekday labels */}
            <text
              x={4}
              y={34}
              fontSize="8.5"
              fill={isDark ? "#8b949e" : "#57606a"}
              fontFamily="inherit"
            >
              Mon
            </text>
            <text
              x={4}
              y={60}
              fontSize="8.5"
              fill={isDark ? "#8b949e" : "#57606a"}
              fontFamily="inherit"
            >
              Wed
            </text>
            <text
              x={4}
              y={86}
              fontSize="8.5"
              fill={isDark ? "#8b949e" : "#57606a"}
              fontFamily="inherit"
            >
              Fri
            </text>

            {/* Grid cells */}
            {weeks.map((week, weekIdx) => {
              const x = 28 + weekIdx * 13;
              return week.map((day, dayIdx) => {
                const y = 20 + dayIdx * 13;
                const cellColor = colors[day.level] || colors[0];
                const isHoveredCell = hovered?.date === day.date;

                return (
                  <rect
                    key={day.date}
                    x={x}
                    y={y}
                    width={10}
                    height={10}
                    rx={2.2}
                    fill={cellColor}
                    stroke={
                      isHoveredCell
                        ? isDark
                          ? "#ffffff"
                          : "#000000"
                        : isDark
                        ? "rgba(255, 255, 255, 0.03)"
                        : "rgba(0, 0, 0, 0.04)"
                    }
                    strokeWidth={isHoveredCell ? 1.2 : 0.8}
                    className="cursor-pointer transition-colors duration-100"
                    onMouseEnter={() =>
                      setHovered({
                        date: day.date,
                        count: day.count,
                        svgX: x + 5,
                        svgY: y,
                      })
                    }
                  >
                    <title>
                      {day.count} contribution{day.count === 1 ? "" : "s"} on {day.date}
                    </title>
                  </rect>
                );
              });
            })}

            {/* Floating SVG Tooltip */}
            {hovered && (
              <g
                pointerEvents="none"
                transform={`translate(${Math.min(Math.max(hovered.svgX, 75), 645)}, ${
                  hovered.svgY < 32 ? hovered.svgY + 22 : hovered.svgY - 8
                })`}
              >
                <rect
                  x="-65"
                  y="-16"
                  width="130"
                  height="20"
                  rx="4"
                  fill={isDark ? "#1b1f24" : "#ffffff"}
                  stroke={isDark ? "#30363d" : "#d0d7de"}
                  strokeWidth="1"
                  filter="drop-shadow(0 2px 4px rgba(0,0,0,0.25))"
                />
                <text
                  x="0"
                  y="-3"
                  textAnchor="middle"
                  fontSize="8"
                  fontWeight="500"
                  fill={isDark ? "#f0f6fc" : "#1f2328"}
                  fontFamily="inherit"
                >
                  {hovered.count} {hovered.count === 1 ? "contrib" : "contribs"} ·{" "}
                  {formatDate(hovered.date)}
                </text>
              </g>
            )}
          </svg>
        </div>

        {/* Footer info & legend */}
        <div className="flex items-center justify-between gap-2 pt-3 mt-3 border-t border-border/40 text-[11px] sm:text-xs">
          <div className="font-mono min-h-[1.25rem] flex items-center">
            {hovered ? (
              <span className="text-foreground transition-all duration-150">
                <span className="text-foreground font-bold">{hovered.count}</span>{" "}
                {hovered.count === 1 ? "contribution" : "contributions"} on{" "}
                <span className="font-medium text-text-muted">{formatDate(hovered.date)}</span>
              </span>
            ) : (
              <span className="text-text-muted">
                <span className="text-foreground font-semibold">
                  {totalContributions.toLocaleString()}
                </span>{" "}
                contributions in the last year
              </span>
            )}
          </div>

          <div className="flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-[11px] text-text-muted font-mono shrink-0">
            <span>Less</span>
            <div className="flex items-center gap-0.5 sm:gap-1">
              {colors.map((color, i) => (
                <div
                  key={i}
                  className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-[2px] border border-border/30"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
            <span>More</span>
          </div>
        </div>
      </div>
    </section>
  );
}

