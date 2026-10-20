const nodes = [
  [200, 60], [80, 150], [320, 150], [140, 270], [270, 270], [200, 360], [40, 300], [360, 320],
];
const edges = [[0,1],[0,2],[1,3],[2,4],[3,5],[4,5],[1,6],[2,7],[3,4],[0,3],[6,5],[7,5]];

export function NetworkIllustration() {
  return (
    <svg viewBox="0 0 400 420" className="h-full w-full text-primary" aria-hidden>
      {edges.map(([a, b], i) => (
        <line key={i} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]}
          stroke="currentColor" strokeOpacity="0.35" strokeWidth="1" strokeDasharray="4 6"
          style={{ animation: `dash-flow ${3 + (i % 4)}s linear infinite` }} />
      ))}
      {nodes.map(([x, y], i) => (
        <g key={i}>
          <rect x={x - 18} y={y - 12} width="36" height="24" fill="var(--background)" stroke="currentColor" strokeOpacity="0.6" />
          <line x1={x - 18} y1={y - 4} x2={x + 18} y2={y - 4} stroke="currentColor" strokeOpacity="0.3" />
          <circle cx={x} cy={y + 4} r="2.5" fill="currentColor"
            style={{ animation: `pulse-node ${2 + (i % 3)}s ease-in-out ${i * 0.3}s infinite` }} />
        </g>
      ))}
    </svg>
  );
}
