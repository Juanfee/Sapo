import TimelineItem from './TimelineItem/TimelineItem';
import { timeline } from '../../data/timeline';
import './Timeline.css';

function Timeline() {
  return (
    <section className="timeline">
      <div className="timeline-container">
        {timeline.map((item, index) => (
          <TimelineItem key={index} {...item} index={index} />
        ))}
      </div>
    </section>
  );
}

export default Timeline;
