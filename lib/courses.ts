export type Course = {
  slug: string; code: string; title: string; shortTitle: string; eyebrow: string;
  level: string; ageGroup: string; duration: string; format: string;
  accent: 'cyan' | 'violet' | 'lime' | 'orange'; summary: string; promise: string; overview: string;
  outcomes: string[]; tools: string[];
  modules: { number: string; title: string; description: string; topics: string[]; outcome: string }[];
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
      { number: '01', title: 'Think in Code', description: 'Learn how a computer follows instructions, then turn everyday problems into small, ordered steps. Students write and run their first Python programs while learning how to read errors calmly.', topics: ['Variables & data types', 'Input and output', 'Operators', 'Reading error messages'], outcome: 'Build a small interactive program without copying line by line.' },
      { number: '02', title: 'Logic & Decisions', description: 'Make programs choose what to do based on user input and repeat work efficiently. Visual tracing exercises make conditions and loops easy to follow before students use them in challenges.', topics: ['If/elif/else', 'Boolean logic', 'For and while loops', 'Logic challenges'], outcome: 'Create a rule-based game that responds correctly to different choices.' },
      { number: '03', title: 'Reusable Programs', description: 'Break a long program into focused functions with clear inputs and outputs. Students practise naming, testing and improving code so another person can understand it.', topics: ['Functions', 'Parameters & returns', 'Scope', 'Testing habits'], outcome: 'Refactor a messy script into clean, reusable and testable functions.' },
      { number: '04', title: 'Real-world Data', description: 'Organise collections of information and save them between program runs. Students learn to clean simple datasets and choose the right Python structure for each task.', topics: ['Lists & dictionaries', 'Reading and writing files', 'JSON data', 'Data cleaning'], outcome: 'Build an application that stores, updates and retrieves useful data.' },
      { number: '05', title: 'Web & APIs', description: 'Understand how applications request information from the web, handle unreliable responses and present results in a friendly interface. Students connect Python to a live public service.', topics: ['How HTTP works', 'Public APIs', 'Error handling', 'Streamlit interfaces'], outcome: 'Publish an interactive dashboard powered by live API data.' },
      { number: '06', title: 'Final Build Sprint', description: 'Choose an original idea, define a realistic first version and build it through mentor checkpoints. Students test with users, document the code and practise explaining their decisions.', topics: ['Project planning', 'GitHub workflow', 'Testing & feedback', 'Portfolio presentation'], outcome: 'Present a polished capstone with working code and a clear project story.' },
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
      { number: '01', title: 'AI Foundations', description: 'Separate artificial intelligence, machine learning and deep learning using examples students already recognise. We also examine where training data comes from and why responsible problem framing matters.', topics: ['AI vs machine learning', 'Learning from examples', 'Ethics & bias', 'Problem framing'], outcome: 'Explain how an ML system learns, where it can fail and whether ML suits a problem.' },
      { number: '02', title: 'Data for Models', description: 'Inspect raw data, find quality problems and prepare reliable features for a model. Students use pandas and visual exploration to understand the evidence before asking an algorithm to learn from it.', topics: ['pandas workflows', 'Missing values', 'Feature design', 'Visual exploration'], outcome: 'Turn a messy dataset into a documented, model-ready training table.' },
      { number: '03', title: 'Prediction', description: 'Train regression models to estimate numerical values and compare predictions with reality. Students learn why train/test separation matters and how overfitting creates impressive but misleading results.', topics: ['Linear regression', 'Train/test split', 'Error metrics', 'Overfitting'], outcome: 'Train, evaluate and improve a prediction model using evidence rather than guesswork.' },
      { number: '04', title: 'Classification', description: 'Build models that assign useful categories, then look beyond headline accuracy. Confusion matrices and real scenarios help students understand false positives, false negatives and decision thresholds.', topics: ['Logistic regression', 'Decision trees', 'Confusion matrices', 'Precision & recall'], outcome: 'Choose and defend the right evaluation metric for a classification problem.' },
      { number: '05', title: 'Patterns Without Labels', description: 'Explore what a model can discover when no correct answers are supplied. Students measure similarity, group examples and visualise clusters without pretending every discovered pattern is meaningful.', topics: ['Clustering', 'Similarity measures', 'Dimensionality reduction', 'Pattern visualisation'], outcome: 'Create and responsibly interpret an unsupervised pattern explorer.' },
      { number: '06', title: 'Deploy & Defend', description: 'Join data preparation and modelling into a repeatable pipeline, then place the model inside an interactive application. Students document limitations and prepare to answer questions about every choice.', topics: ['ML pipelines', 'Streamlit deployment', 'Model cards', 'Demo practice'], outcome: 'Ship a usable ML application with transparent metrics, limitations and documentation.' },
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
      { number: '01', title: 'From Chat to Agent', description: 'Compare a one-turn chatbot with a system that tracks a goal, state and next action. Students learn the anatomy of an agent loop and use structured outputs to make model responses predictable.', topics: ['Goals & state', 'Reasoning loops', 'System instructions', 'Structured outputs'], outcome: 'Build a simple goal-driven agent whose decisions can be inspected step by step.' },
      { number: '02', title: 'Tools & Actions', description: 'Give a language model carefully defined tools for calculation, search and data access. Students validate arguments, restrict permissions and design useful recovery when a tool or API fails.', topics: ['Function calling', 'API tools', 'Input validation', 'Error recovery'], outcome: 'Connect an agent to multiple tools without giving it unsafe or unclear access.' },
      { number: '03', title: 'Memory & Knowledge', description: 'Explore short-term conversation state, long-term memory and retrieval from trusted documents. Students learn when embeddings and vector search help—and when a smaller context is more reliable.', topics: ['Embeddings', 'Vector search', 'Retrieval-augmented generation', 'Memory design'], outcome: 'Create a document-aware assistant that retrieves and cites relevant context.' },
      { number: '04', title: 'Planning Workflows', description: 'Turn a broad request into clear stages with visible state, success conditions and checkpoints. Students add retries and human approval where an automated action would be risky or expensive.', topics: ['Planning patterns', 'State machines', 'Human approval', 'Retries & fallbacks'], outcome: 'Design a multi-step workflow that can pause, recover and explain its progress.' },
      { number: '05', title: 'Multi-agent Systems', description: 'Assign specialised roles to agents and coordinate the information they share. Students compare orchestration patterns and learn that more agents only help when responsibilities and review paths are clear.', topics: ['Orchestration', 'Delegation', 'Shared context', 'Conflict handling'], outcome: 'Build a small agent team with distinct roles and a dependable review loop.' },
      { number: '06', title: 'Reliable Agent Launch', description: 'Test a complete agent against realistic tasks, edge cases and adversarial inputs. Students measure quality and cost, add guardrails and instrument the workflow so failures are visible.', topics: ['Agent evaluations', 'Guardrails', 'Cost control', 'Observability'], outcome: 'Launch and demonstrate an agentic application with evidence of reliability and safety.' },
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
      { number: '01', title: 'Questions Before Charts', description: 'Begin with a decision or curiosity instead of opening a charting tool immediately. Students translate broad interests into answerable questions and assess whether a source can provide trustworthy evidence.', topics: ['Problem framing', 'Data types', 'Finding sources', 'Quality checks'], outcome: 'Write a focused investigation brief and evaluate a dataset before using it.' },
      { number: '02', title: 'Cleaning with Python', description: 'Use pandas to find missing, duplicated and inconsistent values, then make deliberate cleaning choices. Students keep a record of changes so their analysis remains repeatable and honest.', topics: ['pandas workflows', 'Missing data', 'Text cleanup', 'Dates & categories'], outcome: 'Produce a clean dataset and an audit trail that explains every transformation.' },
      { number: '03', title: 'Explore & Compare', description: 'Summarise distributions, compare meaningful groups and investigate unusual observations. Students learn why correlation is not causation and how averages can hide important differences.', topics: ['Distributions', 'Group comparisons', 'Correlation', 'Outliers'], outcome: 'Create an exploratory notebook that identifies patterns and tests assumptions.' },
      { number: '04', title: 'Visual Storytelling', description: 'Match the chart to the question, remove visual noise and guide attention with careful labels and colour. Students create both publication-ready static charts and useful interactive views.', topics: ['Chart selection', 'Colour & annotation', 'Seaborn', 'Interactive Plotly charts'], outcome: 'Turn a complex finding into a clear, accurate visual story for any audience.' },
      { number: '05', title: 'Statistics for Decisions', description: 'Reason about samples, randomness and uncertainty without hiding behind formulas. Practical experiments show how confidence, selection bias and comparison design affect the claims we can make.', topics: ['Sampling', 'Probability intuition', 'Confidence intervals', 'A/B test thinking'], outcome: 'Assess whether a data claim is supported and communicate its uncertainty clearly.' },
      { number: '06', title: 'Data Story Capstone', description: 'Plan and publish an original investigation from question to final recommendation. Students combine a reproducible notebook, a focused dashboard and a presentation refined through peer review.', topics: ['Reproducible notebooks', 'Dashboard design', 'Peer review', 'Presentation'], outcome: 'Present a portfolio-ready data story with evidence, limitations and next steps.' },
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
