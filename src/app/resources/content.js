import { Logo } from "@/once-ui/components";

const person = {
  firstName: "Daniel",
  lastName: "Guidry",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Senior Software Developer",
  avatar: "/images/avatar.jpeg",
  email: "daniel@techinnovators.dev",
  location: "America/Chicago", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/DanielGuidry-tech",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/company/once-ui/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Web Development Specialist<br/> 
  <h6 className="neutral-on-background-weak">PHP | .NET | Python | React | Next.js | Vue.js</h6></>,
  featured: {
    display: true,
    title: <>Recent project: Urban Self Storage</>,
    href: "https://www.urbanstorage.com/",
  },
  subline: (
    <>
    I'm a Senior PHP, .NET, Python Full Stack Developer with 8 years of experience in building scalable, secure applications across banking,
healthcare, and telecom. I specialize in PHP, .NET, Python, React.js, Vue.js, AWS, GCP, and Docker, with expertise in both front-end
and back-end development. My strengths lie in creating robust microservices, cloud integration, and delivering solutions that
enhance security and compliance. I'm dedicated to writing efficient, maintainable code and continuously exploring new tools to
drive innovation.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Hi, I'm Daniel, a Senior Web Developer with over 8 years of experience building robust, scalable, and user-focused web applications. 
        My expertise spans across both frontend and backend development, with deep knowledge of modern JavaScript frameworks (like Angular, 
        React, Next.js, Vue.js), server-side technologies (Node.js, PHP, Python), and cloud infrastructure (AWS, Firebase, Docker).
        <br/>
        Throughout my career, I've led full-stack development projects for startups, enterprise clients, and digital agencies—delivering 
        high-quality code, intuitive UI/UX, and seamless integrations. I thrive in agile environments, collaborate well with 
        cross-functional teams, and enjoy mentoring junior developers.
        <br/>
        I'm passionate about writing clean, maintainable code, optimizing performance, and staying updated with the latest in web technologies 
        to solve real-world problems effectively.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Tech Innovators LLC",
        timeframe: "Aug/2024 - Present",
        role: "Full-Stack Developer",
        achievements: [
          <>
            Developed custom CMS platforms and e-commerce systems using PHP (CodeIgnitor) and MySQL.
          </>,
          <>
            Worked closely with UI/UX teams to implement pixel-perfect, mobile-friendly designs.
          </>,
          <>
            Enhanced legacy codebases with modern JavaScript (ES6+), reducing load times and improving UX.
          </>,
          <>
            Conducted website QA testing and cross-browser compatibility checks.
          </>
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          // {
          //   src: "/images/projects/project-01/cover-01.jpg",
          //   alt: "Once UI Project",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        company: "Ginkgo Residential",
        timeframe: "Apr/2022 - Present",
        role: "Web Frontend Developer",
        achievements: [
          <>
            Developed Python modules for the dashboards for the User Interface.
          </>,
          <>
            Created REST APIs which are consumed by internal and external applications using the Django REST framework.
          </>,
          <>
            Hands of experience in GCP, Big Query, GCS bucket, G - cloud function, cloud dataflow, Pub/Sub cloud shell, GSUTIL, BQ
          command line utilities, DataProc and Stack driver.
          </>,
          <>
            Experience in building and architecting multiple data pipelines, end-to-end ETL and ELT processes for data ingestion and
          transformation in GCP.
          </>,
          <>
            Experience in developing applications using Python 3.6/3.7, Flask web framework backed up by MS SQL/PostgreSQL
          databases using SQL Alchemy for Object Relational Mapper (ORM).
          </>,
          <>
            Developed Python scripts for reporting needs for the business teams.
          </>

        ],
        images: [],
      },
      {
        company: "Urban Self Storage, Inc",
        timeframe: "Apr/2024 - Present",
        role: "Full-Stack Data Engineer",
        achievements: [
          <>
            Cost-effective data synchronization solution benefiting company-wide operations.
          </>,
          <>
            Empowersnon-technical staff to effectively manage data relevant to their reporting
          </>,
          <>
            Delivers a scalable and customizable system tailored to evolving business needs
          </>,
          <>
            Implements an all-Python full stack for the data team to easily expand upon
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "Lafayette College | Easton, PA 18042",
        description: <>Electronic and Computer Enineering | 10/2020</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Frontend Development",
        description: <>React.js | Next.js | Vue.js | Angular.js | Nuxt.js | HTML5 | CSS3 | Tailwind CSS</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          // {
          //   src: "/images/projects/project-01/cover-02.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
          // {
          //   src: "/images/projects/project-01/cover-03.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        title: "Backend Development",
        description: <>Java | PHP | Node.js | Python | Django | .Net | Express.js | NestJS</>,
        // optional: leave the array empty if you don't want to display images
        images: [
        ],
      },
      {
        title: "Database Management",
        description: <>MySQL | PostgreSQL | MongoDB | Firebase | SQL Server</>,
        // optional: leave the array empty if you don't want to display images
        images: [
        ],
      },
      {
        title: "DevOps & Deployment",
        description: <>Docker | Kubernetes | AWS | GCP | CI/CD</>,
        // optional: leave the array empty if you don't want to display images
        images: [
        ],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Codes",
  title: "As a seasoned web developer, I possess strong coding skills across a wide range of modern programming languages and development paradigms.",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
