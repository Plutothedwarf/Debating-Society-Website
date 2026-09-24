import { motions } from '../data/motions';

// Duplicate the list so the ticker seamlessly loops
const tickerItems = [...motions, ...motions];

export default function MotionTicker() {
  return (
    <div className="motion-ticker" aria-label="Recent debate motions" role="marquee">
      <div className="motion-ticker__track">
        {tickerItems.map((m, i) => (
          <span key={`${m.id}-${i}`} className="motion-ticker__item">
            {m.text}
          </span>
        ))}
      </div>
    </div>
  );
}
