export type Course = {
  slug: string; code: string; title: string; shortTitle: string; eyebrow: string;
  level: string; ageGroup: string; duration: string; format: string;
  accent: 'cyan' | 'violet' | 'lime' | 'orange'; summary: string; promise: string; overview: string;
  outcomes: string[]; tools: string[];
  modules: { number: string; title: string; description: string; topics: string[] }[];
  projects: { title: string; description: string; build: string }[];
  idealFor: string[]; faqs: { question: string; answer: string }[];
};

export const courses: Course[] = [
  {
    slug: 'python-foundations', code: 'PY-101', title: 'Python Programming Foundations', shortTitle: 'Python Foundations', eyebrow: 'START HERE', level: 'Beginner', ageGroup: 'Classes 8–12', duration: '16 weeks', format: 'Live hybrid · 2 sessions/week', accent: 'cyan',
    summary: 'Learn to think like a programmer, write clean Python and turn everyday ideas into useful applications.', promise: 'Go from your first print statement to three confident, working Python projects.',
    overview: 'This beginner-friendly Python course in Kolkata builds real programming confidence—not memorised syntax. Students learn through short explanations, guided coding and weekly challenges, with individual feedback in a small batch.',
    outcomes: ['Write readable Python programs independently', 'Break large problems into logical steps', 'Work with APIs, files and structured data', 'Debug errors using a repeatable method', 'Present finished projects with confidence'],
    tools: ['Python 3', 'VS Code', 'GitHub', 'Replit', 'APIs', 'Streamlit'],
    modules: [
      { number: '01', title: 'Think in Code', description: 'Understand how programs work and translate a problem into instructions.', topics: ['Variables & types', 'Input/output', 'Operators', 'Debugging basics'] },
      { number: '02', title: 'Logic & Decisions', description: 'Make programs respond intelligently to different inputs and situations.', topics: ['Conditions', 'Boolean logic', 'Loops', 'Pattern challenges'] },
      { number: '03', title: 'Reusable Programs', description: 'Organise code into functions that are easy to test, reuse and explain.', topics: ['Functions', 'Parameters', 'Scope', 'Testing habits'] },
      { number: '04', title: 'Real-world Data', description: 'Store, transform and retrieve useful information with Python.', topics: ['Lists & dictionaries', 'Files', 'JSON', 'Data cleaning'] },
      { number: '05', title: 'Web & APIs', description: 'Connect Python to live services and build simple interactive interfaces.', topics: ['HTTP concepts', 'Public APIs', 'Error handling', 'Streamlit UI'] },
      { number: '06', title: 'Final Build Sprint', description: 'Plan, build, test and present an original capstone with mentor reviews.', topics: ['Project planning', 'GitHub', 'Demo skills', 'Portfolio story'] },
    ],
    projects: [
      { title: 'Smart Quiz Engine', description: 'An adaptive quiz that tracks scores and explains mistakes.', build: 'Logic · functions · data' },
      { title: 'Kolkata Weather Desk', description: 'A live weather dashboard powered by an external API.', build: 'APIs · JSON · interface' },
      { title: 'Personal Study Tracker', description: 'A visual tool to plan subjects and measure weekly progress.', build: 'Files · charts · Streamlit' },
    ],
    idealFor: ['Students who have never coded before', 'School learners who want stronger logic and problem-solving', 'Students preparing for AI, ML or computer science courses', 'Young builders who learn best through practical work'],
    faqs: [
      { question: 'Does this course assume any coding knowledge?', answer: 'No. We begin with the absolute basics and use guided practice to make each idea concrete.' },
      { question: 'Will this help with school computer science?', answer: 'Yes. It strengthens Python fundamentals and computational thinking while going beyond textbook-only exercises.' },
      { question: 'What does a student need at home?', answer: 'A laptop, a stable internet connection and the willingness to practise between sessions. We help set up all software.' },
    ],
  },
  {
    slug: 'ai-machine-learning', code: 'AI-201', title: 'AI & Machine Learning', shortTitle: 'AI & Machine Learning', eyebrow: 'MAKE DATA THINK', level: 'Beginner to intermediate', ageGroup: 'Classes 11–College', duration: '20 weeks', format: 'Live hybrid · 2 sessions/week', accent: 'violet',
    summary: 'Understand how machine learning works, train models with Python and build AI projects you can genuinely explain.', promise: 'Move beyond AI buzzwords and build an end-to-end machine learning portfolio.',
    overview: 'A project-led machine learning course for Kolkata students who want a clear, mathematical-but-approachable introduction to AI. Every concept is connected to a dataset, experiment or application so students learn both how a model works and when to trust it.',
    outcomes: ['Prepare data for machine learning', 'Train and compare supervised learning models', 'Evaluate accuracy, bias and common failure modes', 'Explain model decisions in plain language', 'Deploy an interactive ML application'],
    tools: ['Python', 'Jupyter', 'pandas', 'scikit-learn', 'Matplotlib', 'Streamlit'],
    modules: [
      { number: '01', title: 'AI Foundations', description: 'Build a useful mental model of AI, machine learning and responsible use.', topics: ['AI vs ML', 'Learning from examples', 'Ethics & bias', 'Problem framing'] },
      { number: '02', title: 'Data for Models', description: 'Turn imperfect raw data into reliable training material.', topics: ['pandas', 'Missing values', 'Feature design', 'Visual exploration'] },
      { number: '03', title: 'Prediction', description: 'Train regression models and measure how well they generalise.', topics: ['Linear regression', 'Train/test split', 'Error metrics', 'Overfitting'] },
      { number: '04', title: 'Classification', description: 'Build systems that choose meaningful categories from evidence.', topics: ['Logistic regression', 'Decision trees', 'Confusion matrix', 'Precision & recall'] },
      { number: '05', title: 'Patterns Without Labels', description: 'Discover groups and structure inside unfamiliar datasets.', topics: ['Clustering', 'Similarity', 'Dimensionality', 'Visual storytelling'] },
      { number: '06', title: 'Deploy & Defend', description: 'Ship a working ML product and explain every major design choice.', topics: ['Pipelines', 'Streamlit', 'Model cards', 'Demo practice'] },
    ],
    projects: [
      { title: 'Student Success Predictor', description: 'Explore study patterns and predict support needs responsibly.', build: 'Classification · ethics · evaluation' },
      { title: 'Kolkata Home Price Lab', description: 'Estimate prices while examining data quality and model error.', build: 'Regression · features · metrics' },
      { title: 'News Topic Explorer', description: 'Group articles into themes and visualise the discovered patterns.', build: 'Clustering · text · visualisation' },
    ],
    idealFor: ['Students comfortable with basic Python', 'College learners building an AI project portfolio', 'Science and commerce students curious about predictive data', 'Beginners considering a career in AI or analytics'],
    faqs: [
      { question: 'How much mathematics is required?', answer: 'Comfort with school-level algebra is enough to begin. We teach the statistics and intuition as they become useful.' },
      { question: 'Is deep learning included?', answer: 'This track builds the core ML foundation first. Neural networks are introduced conceptually; deeper work is available in an advanced pathway.' },
      { question: 'Do students receive datasets and starter code?', answer: 'Yes. Early projects include structured support, which reduces as students become more independent.' },
    ],
  },
  {
    slug: 'agentic-ai-lab', code: 'AG-301', title: 'Agentic AI Lab', shortTitle: 'Agentic AI Lab', eyebrow: 'FLAGSHIP TRACK', level: 'Intermediate', ageGroup: 'Classes 11–College', duration: '18 weeks', format: 'Live lab · 2 sessions/week', accent: 'lime',
    summary: 'Design AI agents that reason through goals, use tools, remember context and collaborate to complete real tasks.', promise: 'Build dependable AI workflows—not just clever prompts.',
    overview: 'Our flagship Agentic AI course in Kolkata teaches students how modern AI systems plan and act. Learners build from simple tool-calling assistants to multi-agent workflows, while studying reliability, evaluation, safety and human oversight at every stage.',
    outcomes: ['Design goal-driven agent workflows', 'Connect language models to safe, useful tools', 'Add memory and retrieval to an agent', 'Coordinate specialised agents in one system', 'Evaluate reliability, cost and safety'],
    tools: ['Python', 'LLM APIs', 'Structured outputs', 'Vector search', 'GitHub', 'Agent frameworks'],
    modules: [
      { number: '01', title: 'From Chat to Agent', description: 'Understand what makes an agent different from a chatbot.', topics: ['Goals & state', 'Reasoning loops', 'System prompts', 'Structured output'] },
      { number: '02', title: 'Tools & Actions', description: 'Give an AI safe ways to search, calculate and work with data.', topics: ['Function calling', 'API tools', 'Validation', 'Error recovery'] },
      { number: '03', title: 'Memory & Knowledge', description: 'Help agents retrieve the right context without losing focus.', topics: ['Embeddings', 'Vector search', 'RAG', 'Memory design'] },
      { number: '04', title: 'Planning Workflows', description: 'Break complex goals into observable and testable steps.', topics: ['Planning patterns', 'State machines', 'Human approval', 'Retries'] },
      { number: '05', title: 'Multi-agent Systems', description: 'Coordinate specialists that research, create and review together.', topics: ['Orchestration', 'Delegation', 'Shared context', 'Conflict handling'] },
      { number: '06', title: 'Reliable Agent Launch', description: 'Evaluate, protect and present a complete agentic application.', topics: ['Agent evals', 'Guardrails', 'Cost control', 'Observability'] },
    ],
    projects: [
      { title: 'Research Companion', description: 'An agent that gathers sources, compares claims and drafts a cited brief.', build: 'Search · RAG · evaluation' },
      { title: 'Study Planning Agent', description: 'A goal-aware assistant that turns a syllabus into an adaptive weekly plan.', build: 'Memory · tools · planning' },
      { title: 'Multi-agent Project Crew', description: 'A researcher, builder and critic that collaborate on one mission.', build: 'Orchestration · review · guardrails' },
    ],
    idealFor: ['Students with basic Python confidence', 'Builders who already experiment with generative AI', 'College learners seeking a distinctive AI portfolio', 'Students interested in automation, product design or research'],
    faqs: [
      { question: 'Is this only about prompt engineering?', answer: 'No. Prompt design is one skill, but the course focuses on tools, memory, orchestration, evaluation and complete software workflows.' },
      { question: 'Are paid AI accounts required?', answer: 'We design classroom exercises to control cost and explain any optional API usage before a project begins.' },
      { question: 'How do you teach AI safety?', answer: 'Students use permission boundaries, validation, human review and systematic tests as core engineering practices—not an afterthought.' },
    ],
  },
  {
    slug: 'data-science-studio', code: 'DS-210', title: 'Data Science Studio', shortTitle: 'Data Science Studio', eyebrow: 'FIND THE STORY', level: 'Beginner to intermediate', ageGroup: 'Classes 11–College', duration: '18 weeks', format: 'Live hybrid · 2 sessions/week', accent: 'orange',
    summary: 'Ask better questions, analyse real datasets and communicate clear insights with Python, statistics and visual storytelling.', promise: 'Turn messy data into decisions people can understand and use.',
    overview: 'This hands-on data science course in Kolkata combines Python analysis, statistics and communication. Students investigate locally relevant and public datasets, learn to avoid misleading conclusions and create portfolio-ready notebooks and dashboards.',
    outcomes: ['Clean and organise real-world datasets', 'Explore data with sound statistical thinking', 'Create clear and honest visualisations', 'Build repeatable analysis workflows', 'Present insights to a non-technical audience'],
    tools: ['Python', 'Jupyter', 'pandas', 'NumPy', 'Seaborn', 'Plotly'],
    modules: [
      { number: '01', title: 'Questions Before Charts', description: 'Frame a useful data question and identify what evidence is needed.', topics: ['Problem framing', 'Data types', 'Sources', 'Quality checks'] },
      { number: '02', title: 'Cleaning with Python', description: 'Make inconsistent data reliable enough to explore.', topics: ['pandas', 'Missing data', 'Text cleanup', 'Dates & categories'] },
      { number: '03', title: 'Explore & Compare', description: 'Use summary statistics to find signals and challenge assumptions.', topics: ['Distributions', 'Groups', 'Correlation', 'Outliers'] },
      { number: '04', title: 'Visual Storytelling', description: 'Choose charts that reveal the truth without distracting the reader.', topics: ['Chart selection', 'Colour & labels', 'Seaborn', 'Interactive plots'] },
      { number: '05', title: 'Statistics for Decisions', description: 'Reason about samples, uncertainty and claims with care.', topics: ['Sampling', 'Probability', 'Confidence', 'A/B thinking'] },
      { number: '06', title: 'Data Story Capstone', description: 'Publish a polished investigation with a clear narrative and dashboard.', topics: ['Notebooks', 'Dashboards', 'Peer review', 'Presentation'] },
    ],
    projects: [
      { title: 'Kolkata Air Quality Story', description: 'Explore patterns over time and communicate responsible conclusions.', build: 'Time series · cleaning · charts' },
      { title: 'IPL Match Explorer', description: 'Turn ball-by-ball data into an interactive performance dashboard.', build: 'pandas · Plotly · storytelling' },
      { title: 'Student Survey Lab', description: 'Design a survey, analyse responses and discuss uncertainty.', build: 'Sampling · statistics · reporting' },
    ],
    idealFor: ['Students curious about patterns and evidence', 'College learners preparing for analytics roles', 'Commerce, science and humanities students who work with data', 'Python beginners who want a practical specialisation'],
    faqs: [
      { question: 'Is data science only for mathematics students?', answer: 'No. Careful reasoning matters more than advanced mathematics at this level, and we teach each statistical idea in context.' },
      { question: 'Does the course include machine learning?', answer: 'It introduces predictive thinking, but the main focus is reliable analysis and communication. The AI & ML track goes deeper into modelling.' },
      { question: 'Can projects be used in a college portfolio?', answer: 'Yes. Students publish clean notebooks or dashboards and learn how to explain their process, choices and findings.' },
    ],
  },
];

export function getCourse(slug: string) { return courses.find((course) => course.slug === slug); }
