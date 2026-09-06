import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  ArrowLeft,
  ArrowRight,
  Bot,
  Check,
  Clock3,
  Code2,
  Download,
  MapPin,
  MonitorUp,
  Terminal,
  Users,
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { CourseRoadmap } from '@/components/course-roadmap';
import { courses, getCourse } from '@/lib/courses';

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return courses.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) return { title: 'Course not found | CodeAdda.ai' };
  const description = `${course.summary} Live online ${course.shortTitle} coaching for school and college students, held on Saturdays and Sundays.`;
  return {
    title: `${course.title} Course in Kolkata | CodeAdda.ai`,
    description,
    keywords: [
      `${course.shortTitle} course Kolkata`,
      `${course.shortTitle} coaching for students`,
      'coding classes Kolkata',
      'AI courses Kolkata',
    ],
    openGraph: {
      title: `${course.title} | CodeAdda.ai`,
      description,
      type: 'website',
      locale: 'en_IN',
      images: [],
    },
    twitter: {
      card: 'summary',
      title: `${course.title} | CodeAdda.ai`,
      description,
      images: [],
    },
  };
}

export default async function CoursePage({ params }: PageProps) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) notFound();

  return (
    <main className={`course-page ${course.accent}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Course',
            name: course.title,
            description: course.summary,
            provider: {
              '@type': 'EducationalOrganization',
              name: 'CodeAdda.ai',
              areaServed: 'Kolkata, West Bengal',
            },
            educationalLevel: course.level,
            audience: {
              '@type': 'EducationalAudience',
              educationalRole: 'student',
            },
          }),
        }}
      />

      <header className="course-header">
        <a href="/" className="brand" aria-label="CodeAdda.ai home">
          <span className="brand-mark">
            <Terminal size={19} />
          </span>
          <span>
            CodeAdda<span>.ai</span>
          </span>
        </a>
        <nav aria-label="Course navigation">
          <a href="#curriculum">Curriculum</a>
          <a href="#projects">Projects</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a className="nav-cta" href="#enrol">
          Book a free demo <ArrowRight size={16} />
        </a>
      </header>

      <section className="course-hero">
        <div className="hero-grid" aria-hidden="true" />
        <div className="course-breadcrumb">
          <a href="/">
            <ArrowLeft size={14} /> All programs
          </a>
          <span>/</span>
          <span>{course.code}</span>
        </div>
        <div className="course-hero-grid">
          <div className="course-hero-copy">
            <span className="eyebrow">
              <i /> {course.eyebrow}
            </span>
            <h1>{course.title}</h1>
            <p>{course.summary}</p>
            <div className="course-actions">
              <a className="primary-button" href="#enrol">
                Join a free demo <ArrowRight size={18} />
              </a>
              <a
                className="brochure-button"
                href={`/courses/${course.slug}/brochure`}
                download
              >
                <Download size={17} /> Download brochure
              </a>
              <a className="text-button" href="#curriculum">
                View curriculum
              </a>
            </div>
          </div>
          <aside className="course-spec-card" aria-label="Course details">
            <div className="spec-top">
              <span>{course.code}</span>
              <i>ENROLMENTS OPEN</i>
            </div>
            <dl>
              <div>
                <dt>
                  <Users /> Best for
                </dt>
                <dd>{course.ageGroup}</dd>
              </div>
              <div>
                <dt>
                  <Clock3 /> Duration
                </dt>
                <dd>{course.duration}</dd>
              </div>
              <div>
                <dt>
                  <MonitorUp /> Format
                </dt>
                <dd>{course.format}</dd>
              </div>
              <div>
                <dt>
                  <MapPin /> Location
                </dt>
                <dd>Online · Join from anywhere</dd>
              </div>
            </dl>
            <div className="spec-status">
              <span>Next step</span>
              <strong>Meet your mentor for free</strong>
            </div>
          </aside>
        </div>
      </section>

      <section className="course-intro course-shell">
        <div>
          <span className="kicker">// THE OUTCOME</span>
          <h2>{course.promise}</h2>
          <p>{course.overview}</p>
        </div>
        <aside>
          <h3>By the end, you can</h3>
          <ul>
            {course.outcomes.map((item) => (
              <li key={item}>
                <Check /> {item}
              </li>
            ))}
          </ul>
        </aside>
      </section>

      <section className="curriculum-section" id="curriculum">
        <div className="course-shell">
          <div className="course-section-heading">
            <div>
              <span className="kicker">// COURSE ROADMAP</span>
              <h2>See the whole journey.</h2>
            </div>
            <p>
              Follow the road from your first guided lesson to an independent
              capstone. Every milestone explains the ideas, practical skills and
              result you can expect before moving ahead.
            </p>
          </div>
          <CourseRoadmap modules={course.modules} />
        </div>
      </section>

      <section className="projects-section course-shell" id="projects">
        <div className="course-section-heading">
          <div>
            <span className="kicker">// BUILD, TEST, SHOW</span>
            <h2>Portfolio projects.</h2>
          </div>
          <p>
            You won&apos;t finish with empty notes. These guided builds become
            clear proof of your skills and thinking.
          </p>
        </div>
        <div className="project-grid">
          {course.projects.map((project, index) => (
            <article key={project.title}>
              <div className="project-icon">
                {index === 1 ? <Bot /> : <Code2 />}
              </div>
              <span>PROJECT {String(index + 1).padStart(2, '0')}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <small>{project.build}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="fit-section">
        <div className="course-shell fit-grid">
          <div>
            <span className="kicker">// IS THIS FOR YOU?</span>
            <h2>A strong fit for curious builders.</h2>
            <p>
              No inflated promises—just a clear path, mentor feedback and the
              practice needed to become independent.
            </p>
          </div>
          <ul>
            {course.idealFor.map((item) => (
              <li key={item}>
                <Check /> <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="toolbelt course-shell">
        <span className="kicker">// YOUR TOOLBELT</span>
        <div>
          {course.tools.map((tool) => (
            <span key={tool}>{tool}</span>
          ))}
        </div>
      </section>

      <section className="course-faq course-shell" id="faq">
        <div>
          <span className="kicker">// COURSE FAQ</span>
          <h2>Know before you join.</h2>
        </div>
        <Accordion className="faq-list">
          {course.faqs.map((faq, index) => (
            <AccordionItem value={`faq-${index}`} key={faq.question}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section className="course-enrol" id="enrol">
        <div className="enrol-grid" aria-hidden="true" />
        <div>
          <span className="kicker">// START WITH ZERO PRESSURE</span>
          <h2>
            Try the learning
            <br />
            experience first.
          </h2>
          <p>
            Meet a mentor, see how the lab works and check whether{' '}
            {course.shortTitle} is the right path for you.
          </p>
          <a
            className="primary-button large"
            href={`mailto:hellocodeadda@gmail.com?subject=${encodeURIComponent(`Free demo: ${course.title}`)}`}
          >
            Book a free demo <ArrowRight size={19} />
          </a>
          <small>
            Small student batches · Saturday &amp; Sunday classes · Live online
          </small>
        </div>
      </section>

      <footer>
        <a href="/" className="brand">
          <span className="brand-mark">
            <Terminal size={19} />
          </span>
          <span>
            CodeAdda<span>.ai</span>
          </span>
        </a>
        <p>{course.shortTitle} coaching for Kolkata&apos;s young builders.</p>
        <nav aria-label="Footer navigation">
          <a href="/#programs">All programs</a>
          <a href="/#method">Our method</a>
          <a href="/#faq">General FAQ</a>
        </nav>
        <span>© 2026 CodeAdda.ai</span>
      </footer>
    </main>
  );
}
