import './TimelineItem.css';

interface TimelineItemProps {
  title: string;
  description: string;
  image?: string;
  index: number;
}

function TimelineItem({
  title,
  description,
  image,
  index,
}: TimelineItemProps) {
  return (
    <article className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
      <div className="timeline-marker" />

      <div className="timeline-content">
        <h2>{title}</h2>

        <p>{description}</p>

        {image && <img src={image} alt={title} className="timeline-image" />}
      </div>
    </article>
  );
}

export default TimelineItem;
