export const projects = [
  {
    id: "portfolio",
    title: "Portfolio",
    type: "Frontend",
    tagline: "Developed to showcase my skills in web development. My portfolio website exemplifies proficiency in technologies such as ReactJS, CSS, and Figma.",
    description: "This project is a portfolio website developed using React.js. The website is designed to showcase the user's skills, projects, and services. It features a modern and clean design with smooth navigation and responsive layout.",
    tech: ["react", "js", "css", "figma"],
    imageType: "portfolio",
    features: [
      {
        title: "Responsive Design",
        desc: "The website is designed to be responsive, ensuring a seamless experience across various devices and screen sizes."
      },
      {
        title: "Modern UI/UX",
        desc: "The website features a modern and clean user interface, providing a pleasant user experience. It uses a consistent color scheme and typography throughout the site."
      }
    ],
    demoUrl: "https://rahul-portfolio.example.com",
    githubUrl: "https://github.com/rahul/portfolio"
  },
  {
    id: "weather-app",
    title: "Weather App",
    type: "Full Stack",
    tagline: "Developed a full-stack weather app using NodeJS/Express for server-side logic and ReactJS/Handlebars for interactive frontend, delivering real-time weather data.",
    description: "A complete weather forecasting application that retrieves live meteorology data based on current GPS location or manual search. Features a responsive chart visualization of daily temperature patterns.",
    tech: ["react", "js", "css", "node"],
    imageType: "weather",
    features: [
      {
        title: "Live GPS Location Weather",
        desc: "Automatically detects coordinates to display immediate local weather conditions and hourly forecasts."
      },
      {
        title: "Detailed Charts & Metrics",
        desc: "Visual representation of wind speed, humidity, UV index, pressure, and sunrise/sunset timings."
      }
    ],
    demoUrl: "https://rahul-weather.example.com",
    githubUrl: "https://github.com/rahul/weather-app"
  },
  {
    id: "cred-clone",
    title: "Cred Clone",
    type: "Frontend",
    tagline: "Crafted a responsive CRED Landing Page clone using ReactJS for modularity and interactivity, styled with CSS to match the original design.",
    description: "An absolute visual recreation of the CRED landing page. Showcases advanced Tailwind CSS transitions, parallax scroll elements, dynamic tabs, and premium dark glassmorphic design features.",
    tech: ["react", "js", "css", "figma"],
    imageType: "cred",
    features: [
      {
        title: "Glassmorphism & Neon Shadows",
        desc: "Uses premium styling parameters to copy CRED's elite visual language and glow styles."
      },
      {
        title: "Custom Interactive Sliders",
        desc: "Custom slides and tab selectors that demonstrate modular React components and state transitions."
      }
    ],
    demoUrl: "https://rahul-cred.example.com",
    githubUrl: "https://github.com/rahul/cred-clone"
  },
  {
    id: "auth-system",
    title: "User Authentication system",
    type: "Full Stack",
    tagline: "A secure, robust user authentication system utilizing JWT, bcrypt, and MongoDB for secure login, registration, and password recovery.",
    description: "A fully functional developer authentication template containing middleware, session management, secure HTTP-only cookie distribution, and client-side route protection built in React.",
    tech: ["react", "js", "css", "node"],
    imageType: "auth",
    features: [
      {
        title: "JWT Token Rotation",
        desc: "Implements access token expiration and cookie-based refresh tokens for secure and persistence-aware web logins."
      },
      {
        title: "Two-Factor Verification",
        desc: "Optional configurations for sending authentication codes to registered user emails using Nodemailer."
      }
    ],
    demoUrl: "https://rahul-auth.example.com",
    githubUrl: "https://github.com/rahul/auth-system"
  },
  {
    id: "todo-list",
    title: "Todo List",
    type: "Frontend",
    tagline: "A highly interactive Todo application with drag-and-drop task reordering, categories, and local storage integration.",
    description: "A productivity tool that provides smooth animations for task completion, filtering by categories (Work, Personal, Urgent), and local device persistence.",
    tech: ["react", "js", "css", "figma"],
    imageType: "todo",
    features: [
      {
        title: "Drag & Drop Organization",
        desc: "Enables natural mouse or touch-based task prioritization and column movements."
      },
      {
        title: "Local State Synchronization",
        desc: "Automatically backs up current tasks to window localStorage to protect work from browser tabs closing."
      }
    ],
    demoUrl: "https://rahul-todo.example.com",
    githubUrl: "https://github.com/rahul/todo-list"
  },
  {
    id: "qr-scanner",
    title: "QR Scanner",
    type: "Frontend",
    tagline: "A real-time QR code generator and scanner app that runs entirely in the browser using device cameras.",
    description: "Provides on-the-fly QR code generation from text inputs and active QR scanning through live video feeds, supporting standard URL redirections.",
    tech: ["react", "js", "css", "figma"],
    imageType: "qr",
    features: [
      {
        title: "Live Camera Parsing",
        desc: "Scans frames in real-time utilizing high performance jsQR processing to recognize links and copy texts instantly."
      },
      {
        title: "Vector SVG QR Output",
        desc: "Generates high quality, scale-invariant vector QR downloads ideal for digital display and print formats."
      }
    ],
    demoUrl: "https://rahul-qr.example.com",
    githubUrl: "https://github.com/rahul/qr-scanner"
  },
  {
    id: "playlist-generator",
    title: "Playlist Generator",
    type: "Frontend",
    tagline: "An automated playlist generator connected to Spotify API, filtering songs by mood, tempo, and genre criteria.",
    description: "Logs users in via Spotify OAuth and queries their library or Spotify global catalog, assembling customized mixes according to target metrics like energy level and danceability.",
    tech: ["react", "js", "css", "figma"],
    imageType: "playlist",
    features: [
      {
        title: "Spotify API Integration",
        desc: "Authenticates users securely and directly writes generated playlists to their official Spotify accounts."
      },
      {
        title: "Audio Feature Sliders",
        desc: "Fine-tune recommendations using sliders for acousticness, valence (positivity), tempo (BPM), and popularity."
      }
    ],
    demoUrl: "https://rahul-playlist.example.com",
    githubUrl: "https://github.com/rahul/playlist-generator"
  }
];
