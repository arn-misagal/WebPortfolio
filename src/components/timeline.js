import data from './timelineData';
import timelineData from './timelineData';
import TimelineItem from './timelineItem';
import '../timeline.css'

const timeline = () => data.length > 0 && (
    <div className="timeline-container">
        {timelineData.map((data, idx) => (
            <TimelineItem data={data} key={idx} />
        ))}
    </div>
);

export default timeline;