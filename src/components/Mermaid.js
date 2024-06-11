import { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

const Mermaid = ({ chart }) => {
  const chartRef = useRef();

  useEffect(() => {
    mermaid.initialize({ startOnLoad: true });
    mermaid.contentLoaded();
  }, []);

  useEffect(() => {
    if (chartRef.current) {
      mermaid.init(undefined, chartRef.current);
    }
  }, [chart]);

  return <div className="mermaid" ref={chartRef}>{chart}</div>;
};

export default Mermaid;