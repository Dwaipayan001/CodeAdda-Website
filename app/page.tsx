'use client';

import {
  ArrowRight,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  CalendarDays,
  Check,
  Code2,
  Database,
  MapPin,
  Mail,
  Menu,
  Network,
  Play,
  Send,
  ShieldCheck,
  Sparkles,
  Terminal,
  X,
  Zap,
} from 'lucide-react';
import { type SyntheticEvent, useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const programs = [
  {
    icon: Code2,
    slug: 'python-foundations',
    index: '01',
    title: 'Python Foundations',
    audience: 'Classes 8–12',
    copy: 'Start from zero. Build logic, write clean Python and turn ideas into working apps.',
    tags: ['Python', 'Logic', 'Projects'],
    accent: 'cyan',
  },
  {
    icon: BrainCircuit,
    slug: 'ai-machine-learning',
    index: '02',
    title: 'AI & Machine Learning',
    audience: 'College & beginners',
    copy: 'Train models, understand data and create AI projects that belong in your portfolio.',
    tags: ['ML', 'Neural nets', 'Python'],
    accent: 'violet',
  },
  {
    icon: Bot,
    slug: 'agentic-ai-lab',
    index: '03',
    title: 'Agentic AI Lab',
    audience: 'Flagship track',
    copy: 'Design AI agents that plan, use tools, remember context and complete real tasks.',
    tags: ['Agents', 'LLMs', 'Automation'],
    accent: 'lime',
  },
  {
    icon: Database,
    slug: 'data-science-studio',
    index: '04',
    title: 'Data Science Studio',
    audience: 'Classes 11–College',
    copy: 'Find the story in data with pandas, visualisation, statistics and guided case studies.',
    tags: ['Data', 'Pandas', 'Analytics'],
    accent: 'orange',
  },
];

const CONTACT_EMAIL = 'hellocodeadda@gmail.com';

const terminalLines = {
  learn: [
    { type: 'prompt', text: 'mentor.ask("How do AI agents think?")' },
    { type: 'muted', text: 'Breaking the problem into a clear learning path…' },
    { type: 'ok', text: '✓ Plan  →  reason  →  use tools  →  reflect' },
    { type: 'result', text: 'Next: build a research agent in Python.' },
  ],
  build: [
    { type: 'prompt', text: 'lab.build("Kolkata study planner")' },
    { type: 'muted', text: 'Connecting calendar, tasks and memory…' },
    { type: 'ok', text: '✓ 3 tools connected  ·  12 tests passed' },
    { type: 'result', text: 'Your first useful AI agent is live.' },
  ],
  launch: [
    { type: 'prompt', text: 'portfolio.publish(project)' },
    { type: 'muted', text: 'Preparing README, demo and project story…' },
    { type: 'ok', text: '✓ Portfolio-ready  ·  mentor reviewed' },
    { type: 'result', text: 'Share your work with colleges and recruiters.' },
  ],
};

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [enquiryStatus, setEnquiryStatus] = useState<
    'idle' | 'sending' | 'sent' | 'error'
  >('idle');
  const [enquiryError, setEnquiryError] = useState('');

  const handleEnquiry = async (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const getFormValue = (field: string) => {
      const value = formData.get(field);
      return typeof value === 'string' ? value.trim() : '';
    };

    setEnquiryStatus('sending');
    setEnquiryError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: getFormValue('name'),
          email: getFormValue('email'),
          course: getFormValue('course'),
          message: getFormValue('message'),
          website: getFormValue('website'),
        }),
      });
      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(result.error || 'We could not send your enquiry.');
      }

      form.reset();
      setEnquiryStatus('sent');
    } catch (error) {
      setEnquiryError(
        error instanceof Error
          ? error.message
          : 'We could not send your enquiry. Please try again.',
      );
      setEnquiryStatus('error');
    }
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'EducationalOrganization',
            name: 'CodeAdda.ai',
            url: 'https://code-adda-ai.vercel.app/',
            description:
              'Weekend-only, live online Agentic AI, Generative AI, Python, Machine Learning and Data Science coaching for school and college students, led by mentors with Big Four GenAI experience.',
            areaServed: 'Kolkata, West Bengal',
            knowsAbout: [
              'Python programming',
              'Agentic AI',
              'Artificial Intelligence',
              'Machine Learning',
              'Data Science',
            ],
          }),
        }}
      />

      <header className="site-header">
        <a href="#top" className="brand" aria-label="CodeAdda.ai home">
          <span className="brand-mark">
            <Terminal size={19} />
          </span>
          <span>
            CodeAdda<span>.ai</span>
          </span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#programs">Programs</a>
          <a href="#agentic-lab">Agentic AI Lab</a>
          <a href="#mentors">Mentors</a>
          <a href="#method">How it works</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a className="nav-cta" href="#enrol">
          Book a free demo <ArrowRight size={16} />
        </a>
        <button
          className="menu-button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
        {menuOpen && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            <a href="#programs" onClick={() => setMenuOpen(false)}>
              Programs
            </a>
            <a href="#agentic-lab" onClick={() => setMenuOpen(false)}>
              Agentic AI Lab
            </a>
            <a href="#mentors" onClick={() => setMenuOpen(false)}>
              Mentors
            </a>
            <a href="#method" onClick={() => setMenuOpen(false)}>
              How it works
            </a>
            <a href="#faq" onClick={() => setMenuOpen(false)}>
              FAQ
            </a>
            <a href="#enrol" onClick={() => setMenuOpen(false)}>
              Book a free demo
            </a>
          </nav>
        )}
      </header>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-glow hero-glow-one" aria-hidden="true" />
        <div className="hero-glow hero-glow-two" aria-hidden="true" />
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="pulse" /> Agentic AI coaching in Kolkata
          </div>
          <h1>
            Don&apos;t just use AI.
            <br />
            <em>Build what comes next.</em>
          </h1>
          <p className="hero-lede">
            Live, project-based{' '}
            <strong>
              Python, Agentic AI, Machine Learning and Data Science coaching
            </strong>{' '}
            for curious school and college students, guided by mentors with
            hands-on GenAI experience in a Big Four environment.
          </p>
          <div className="weekend-callout">
            <CalendarDays />
            <div>
              <strong>Weekend-only live online classes</strong>
              <span>Saturdays &amp; Sundays · No weekday classes</span>
            </div>
          </div>
          <div className="hero-actions">
            <a className="primary-button" href="#enrol">
              Start with a free class <ArrowRight size={18} />
            </a>
            <a className="text-button" href="#programs">
              <Play size={17} fill="currentColor" /> Explore programs
            </a>
          </div>
          <div className="trust-row">
            <div className="avatar-stack" aria-hidden="true">
              <span>PY</span>
              <span>AI</span>
              <span>ML</span>
            </div>
            <div>
              <strong>Mentors with Big Four GenAI experience</strong>
              <small>Small batches · Industry context · Real projects</small>
            </div>
          </div>
        </div>

        <div className="agent-console" id="agentic-lab">
          <div className="console-topbar">
            <div className="window-dots" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <span>AI_LEARNING_AGENT.py</span>
            <div className="online">
              <i /> ONLINE
            </div>
          </div>
          <Tabs defaultValue="learn" className="console-tabs">
            <TabsList className="console-tab-list">
              <TabsTrigger value="learn">01 Learn</TabsTrigger>
              <TabsTrigger value="build">02 Build</TabsTrigger>
              <TabsTrigger value="launch">03 Launch</TabsTrigger>
            </TabsList>
            {(
              Object.keys(terminalLines) as Array<keyof typeof terminalLines>
            ).map((key) => (
              <TabsContent value={key} key={key} className="console-panel">
                <div className="agent-orbit" aria-hidden="true">
                  <div className="orbit orbit-one">
                    <span />
                  </div>
                  <div className="orbit orbit-two">
                    <span />
                  </div>
                  <div className="agent-core">
                    <Bot size={34} />
                    <i />
                  </div>
                </div>
                <div className="code-block">
                  {terminalLines[key].map((line, index) => (
                    <div className={`code-line ${line.type}`} key={line.text}>
                      <span>{String(index + 1).padStart(2, '0')}</span>
                      {line.type === 'prompt' && <b>›</b>}
                      {line.text}
                    </div>
                  ))}
                  <span className="cursor" aria-hidden="true" />
                </div>
              </TabsContent>
            ))}
          </Tabs>
          <div className="console-footer">
            <span>
              <Zap size={14} /> AGENT MODE
            </span>
            <span>Python 3.12</span>
            <span className="console-location">
              <MapPin size={13} /> Kolkata
            </span>
          </div>
        </div>
      </section>

      <div className="signal-strip" aria-label="Course topics">
        <span>PYTHON</span>
        <i />
        <span>AGENTIC AI</span>
        <i />
        <span>MACHINE LEARNING</span>
        <i />
        <span>DATA SCIENCE</span>
        <i />
        <span>GENERATIVE AI</span>
      </div>

      <section className="mentor-proof" id="mentors">
        <div className="mentor-proof-intro">
          <span className="kicker">{'// LEARN FROM PRACTITIONERS'}</span>
          <h2>
            Industry experience,
            <br />
            <em>inside every lesson.</em>
          </h2>
          <p>
            Learn from professionals who bring hands-on Generative AI experience
            from a Big Four environment. Concepts are connected to real
            workflows, practical constraints and the standards expected in
            professional teams.
          </p>
        </div>
        <div className="mentor-proof-grid">
          <article>
            <span>
              <BriefcaseBusiness />
            </span>
            <div>
              <strong>Big Four perspective</strong>
              <p>
                Professional practices translated into clear, student-friendly
                guidance.
              </p>
            </div>
          </article>
          <article>
            <span>
              <Bot />
            </span>
            <div>
              <strong>Hands-on GenAI experience</strong>
              <p>
                Learn from mentors who have worked with modern GenAI tools and
                workflows.
              </p>
            </div>
          </article>
          <article>
            <span>
              <ShieldCheck />
            </span>
            <div>
              <strong>Responsible real-world thinking</strong>
              <p>
                Build with attention to quality, reliability, safety and human
                oversight.
              </p>
            </div>
          </article>
        </div>
        <small className="credential-note">
          “Big Four” describes our instructors&apos; professional experience.
          CodeAdda.ai is an independent learning initiative and is not endorsed
          by or affiliated with their employers.
        </small>
      </section>

      <section className="section programs-section" id="programs">
        <div className="section-heading">
          <div>
            <span className="kicker">{'// CHOOSE YOUR PATH'}</span>
            <h2>
              From first line of code
              <br />
              to intelligent systems.
            </h2>
          </div>
          <p>
            Clear learning tracks. No endless theory. Every module ends with
            something you can run, test and show.
          </p>
        </div>
        <div className="program-grid">
          {programs.map(({ icon: Icon, ...program }) => (
            <article
              className={`program-card ${program.accent}`}
              key={program.title}
            >
              <div className="card-top">
                <span className="program-icon">
                  <Icon />
                </span>
                <span className="program-index">/{program.index}</span>
              </div>
              <div className="audience-tag">{program.audience}</div>
              <h3>{program.title}</h3>
              <p>{program.copy}</p>
              <div className="tag-row">
                {program.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <a
                href={`/courses/${program.slug}`}
                aria-label={`Explore ${program.title}`}
              >
                Explore this track <ArrowRight size={16} />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="agentic-feature" id="method">
        <div className="section agentic-inner">
          <div className="agentic-copy">
            <span className="kicker lime-text">
              {'// THE AGENTIC ADVANTAGE'}
            </span>
            <h2>
              Learn with AI.
              <br />
              Learn to <em>lead AI.</em>
            </h2>
            <p>
              Our students don&apos;t stop at prompts. They learn how AI agents
              reason, call tools, work together and solve multi-step problems.
            </p>
            <ul>
              <li>
                <span>
                  <Check />
                </span>
                <div>
                  <strong>Mentor + AI feedback loop</strong>
                  <small>
                    Human judgment and instant iteration in every session.
                  </small>
                </div>
              </li>
              <li>
                <span>
                  <Check />
                </span>
                <div>
                  <strong>Build your own agent team</strong>
                  <small>
                    Create research, study and automation agents with Python.
                  </small>
                </div>
              </li>
              <li>
                <span>
                  <Check />
                </span>
                <div>
                  <strong>Portfolio, not just certificates</strong>
                  <small>Graduate with demos that prove what you can do.</small>
                </div>
              </li>
            </ul>
            <a className="outline-button" href="#enrol">
              See the Agentic AI curriculum <ArrowRight size={17} />
            </a>
          </div>
          <div className="workflow-card">
            <div className="workflow-title">
              <Network size={18} />
              <span>multi_agent_workflow</span>
              <i>RUNNING</i>
            </div>
            <div className="workflow-canvas">
              <div className="connector c1" />
              <div className="connector c2" />
              <div className="connector c3" />
              <div className="node user-node">
                <span>YOU</span>
                <strong>Your idea</strong>
                <small>“Research my topic”</small>
              </div>
              <div className="node orchestrator-node">
                <span>
                  <Sparkles size={16} /> ORCHESTRATOR
                </span>
                <strong>Plans the mission</strong>
                <small>Breaks work into steps</small>
              </div>
              <div className="worker-row">
                <div className="node worker-node">
                  <Bot size={17} />
                  <strong>Research</strong>
                  <small>Finds sources</small>
                </div>
                <div className="node worker-node">
                  <Code2 size={17} />
                  <strong>Builder</strong>
                  <small>Creates output</small>
                </div>
                <div className="node worker-node">
                  <BrainCircuit size={17} />
                  <strong>Critic</strong>
                  <small>Checks quality</small>
                </div>
              </div>
              <div className="output-chip">
                <Check size={14} /> Task complete · 3 agents collaborated
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section outcomes-section">
        <span className="kicker">
          {"// MADE FOR KOLKATA'S NEXT GENERATION"}
        </span>
        <div className="outcomes-grid">
          <div className="outcome-lead">
            <h2>
              Small batches.
              <br />
              Big <em>builds.</em>
            </h2>
            <p>
              Designed around school and college schedules, with live online
              classes kept exclusively to weekends.
            </p>
          </div>
          <div className="metric">
            <strong>1:8</strong>
            <span>
              mentor to student
              <br />
              batch ratio
            </span>
          </div>
          <div className="metric">
            <strong>80%</strong>
            <span>
              hands-on building
              <br />
              in every track
            </span>
          </div>
          <div className="metric">
            <strong>12+</strong>
            <span>
              portfolio projects
              <br />
              on advanced paths
            </span>
          </div>
        </div>
        <div className="local-banner">
          <MapPin />
          <div>
            <strong>Keep weekdays free. Learn on weekends.</strong>
            <span>
              Live online classes every Saturday and Sunday—join from anywhere
              without disrupting school or college.
            </span>
          </div>
          <span className="bangla">কোড করো। ভবিষ্যৎ গড়ো।</span>
        </div>
      </section>

      <section className="section faq-section" id="faq">
        <div>
          <span className="kicker">{'// QUESTIONS, ANSWERED'}</span>
          <h2>
            Before you
            <br />
            start building.
          </h2>
          <p>
            Still unsure which path fits? A mentor will help you choose during
            the free demo.
          </p>
        </div>
        <Accordion className="faq-list">
          <AccordionItem value="one">
            <AccordionTrigger>
              Does my child need prior coding experience?
            </AccordionTrigger>
            <AccordionContent>
              No. The Python Foundations track starts from the basics and builds
              confidence step by step. We group students by age and current
              skill level.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="two">
            <AccordionTrigger>
              What is Agentic AI, and is it suitable for students?
            </AccordionTrigger>
            <AccordionContent>
              Agentic AI means systems that can plan and complete tasks using
              tools. We teach it through age-appropriate Python projects, with
              strong focus on safe and responsible use.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="three">
            <AccordionTrigger>
              When and where are the classes held?
            </AccordionTrigger>
            <AccordionContent>
              All classes are live and online, and are held only on Saturdays
              and Sundays. There are no weekday classes, so students can learn
              without disrupting their regular school or college schedule.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="four">
            <AccordionTrigger>
              Will students build real projects?
            </AccordionTrigger>
            <AccordionContent>
              Yes. Every track is project-led. Students create working apps,
              data stories, ML models and AI agents they can explain and
              present.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="five">
            <AccordionTrigger>Who will teach the classes?</AccordionTrigger>
            <AccordionContent>
              Sessions are guided by professionals with hands-on Generative AI
              experience in a Big Four environment. They connect the curriculum
              to real-world workflows while keeping every lesson approachable
              for school and college students.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <section className="enrol-section" id="enrol">
        <div className="enrol-grid" aria-hidden="true" />
        <div className="enrol-content contact-content">
          <div className="contact-intro">
            <span className="kicker lime-text">{'// CONTACT US'}</span>
            <h2>
              Let&apos;s find your
              <br />
              <em>learning path.</em>
            </h2>
            <p>
              Ask about a course, a free demo or anything else. All classes are
              live online on Saturdays and Sundays, leaving weekdays free for
              school, college and regular commitments.
            </p>
            <a className="contact-email" href={`mailto:${CONTACT_EMAIL}`}>
              <Mail size={18} /> {CONTACT_EMAIL}
            </a>
            <small>
              No prior coding needed · Weekend-only batches · Live online
            </small>
          </div>
          <form className="contact-form" onSubmit={handleEnquiry}>
            <label className="contact-honeypot" aria-hidden="true">
              Website
              <input name="website" tabIndex={-1} autoComplete="off" />
            </label>
            <div className="contact-field-row">
              <label>
                <span>Your name</span>
                <input
                  type="text"
                  name="name"
                  autoComplete="name"
                  placeholder="Enter your name"
                  required
                />
              </label>
              <label>
                <span>Your email</span>
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  required
                />
              </label>
            </div>
            <label>
              <span>Which course are you interested in?</span>
              <select name="course" defaultValue="" required>
                <option value="" disabled>
                  Select a course
                </option>
                {programs.map((program) => (
                  <option key={program.slug} value={program.title}>
                    {program.title}
                  </option>
                ))}
                <option value="Not sure yet / General enquiry">
                  Not sure yet / General enquiry
                </option>
              </select>
            </label>
            <label>
              <span>
                Your message <small>(optional)</small>
              </span>
              <textarea
                name="message"
                rows={5}
                placeholder="Tell us what you would like to know…"
              />
            </label>
            <button
              className="primary-button large"
              type="submit"
              disabled={enquiryStatus === 'sending'}
            >
              {enquiryStatus === 'sending' ? 'Sending…' : 'Send enquiry'}{' '}
              <Send size={18} />
            </button>
            <p className="form-note">
              Sent securely without leaving this page.
            </p>
            {enquiryStatus === 'sent' && (
              <output className="form-status success">
                Thank you—your enquiry has been sent. We&apos;ll reply soon.
              </output>
            )}
            {enquiryStatus === 'error' && (
              <p className="form-status error" role="alert">
                {enquiryError}
              </p>
            )}
          </form>
        </div>
      </section>

      <footer>
        <a href="#top" className="brand">
          <span className="brand-mark">
            <Terminal size={19} />
          </span>
          <span>
            CodeAdda<span>.ai</span>
          </span>
        </a>
        <p>Python & AI coaching for Kolkata&apos;s young builders.</p>
        <nav aria-label="Footer navigation">
          <a href="#programs">Programs</a>
          <a href="#agentic-lab">Agentic AI</a>
          <a href="#faq">FAQ</a>
          <a href="#enrol">Contact</a>
        </nav>
        <span>© 2026 CodeAdda.ai</span>
      </footer>
    </main>
  );
}
