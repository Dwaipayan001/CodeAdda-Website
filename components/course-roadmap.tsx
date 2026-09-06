import type { Course } from '@/lib/courses';

type CourseRoadmapProps = {
  modules: Course['modules'];
};

export function CourseRoadmap({ modules }: CourseRoadmapProps) {
  return (
    <div className="roadmap" aria-label="Course learning roadmap">
      <svg
        className="roadmap-road"
        viewBox="0 0 1000 1200"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          className="roadmap-road-edge"
          d="M500 55 C760 85 760 205 680 270 S235 390 320 490 S765 605 680 710 S235 825 320 930 S500 1080 500 1145"
        />
        <path
          className="roadmap-road-line"
          d="M500 55 C760 85 760 205 680 270 S235 390 320 490 S765 605 680 710 S235 825 320 930 S500 1080 500 1145"
        />
      </svg>

      {modules.map((module, index) => (
        <article
          className={`roadmap-step roadmap-step-${index + 1}`}
          key={module.number}
        >
          <span className="roadmap-marker" aria-hidden="true">
            {module.number}
          </span>
          <div className="roadmap-card">
            <div className="roadmap-card-heading">
              <span>
                {index === 0 ? 'Start here' : `Milestone ${module.number}`}
              </span>
              <h3>{module.title}</h3>
            </div>
            <p>{module.description}</p>
            <ul aria-label={`Topics in ${module.title}`}>
              {module.topics.map((topic) => (
                <li key={topic}>{topic}</li>
              ))}
            </ul>
            <div className="roadmap-outcome">
              <span>You can now</span>
              <strong>{module.outcome}</strong>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
