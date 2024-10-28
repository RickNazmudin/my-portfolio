import ayla from "/public/image/ayla.jpg";
import crefin from "/public/image/crefin.jpg";
import realEstate from "/public/image/real-estate.jpg";
import travel from "/public/image/travel.jpg";

export const projectsData = [
  {
    id: 1,
    name: "POS (Point Of Sale)",
    description:
      "My team and I developed a comprehensive POS (Point of Sale) application for web and mobile. The backend API was built with Node.js, Express, and MongoDB, ensuring data consistency. We used AWS S3 for secure receipt and inventory storage and managed real-time data sync with WebSocket. Authentication is handled via JWT and OAuth for Google login. Payment processing is integrated with Stripe and PayPal. The frontend was created using React for web and Flutter for mobile. Transaction reports are generated in PDF with Puppeteer and sent via AWS SES. The app is deployed on AWS EC2, managed with PM2 and Nginx.",
    tools: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Vue.js",
      "Node.js",
      "PHP",
      "Python",
      "Java",
      "MySQL",
      "Nginx",
      "MongoDB",
      "REST API",
      "WebSocket",
      "PWA",
      "JWT",
      "VSCode",
    ],
    role: "Backend Developer",
    code: "",
    demo: "",
    image: "",
  },
  {
    id: 2,
    name: "Q Hopes",
    description:
      "I developed a comprehensive healthcare management system for QHopes, designed for hospitals. The mobile app was built using Java for Android, providing an intuitive user interface. The backend utilized the Spring Framework to create robust APIs, with MySQL for secure data management. AWS services were employed for cloud hosting, and the system was deployed on AWS EC2, enhancing scalability and reliability. This solution aims to streamline hospital operations and improve patient care.",
    tools: [
      "Java",
      "",
      "JavaScript",
      "PHP",
      "Python",
      "MySQL",
      "Kotlin",
      "Spring Framework",
      "Node.js",
      "AWS",
      "Docker",
      "RESTful API",
      "GraphQL",
    ],
    role: "Full Stack Developer",
    code: "",
    demo: "",
    image: "",
  },
  {
    id: 3,
    name: "Q TOS",
    description:
      "Our team built QTOS (Terminal Operating System) to streamline container terminal operations. We used Node.js and PHP for the backend, with Vue.js on the frontend to create a responsive interface. MySQL and Redis supported data management, and Docker with Kubernetes ensured efficient deployment. Grafana and Prometheus provided real-time system monitoring for optimal logistics management.",
    tools: [
      "Java",
      "JavaScript",
      "PHP",
      "Python",
      "React",
      "Laravel",
      "Spring Boot",
      "Redis",
      "MySQL",
      "AWS",
      "Docker",
      "Kubernetes",
      "ElasticSearch",
      "Grafana",
      "Jenkins",
    ],
    code: "",
    role: "Full Stack Developer",
    demo: "",
    image: "",
  },
  {
    id: 4,
    name: "EA Forex Fury",
    description:
      "My team and I developed Forex Fury, an automated trading robot for forex markets. I contributed to the algorithm design using MQL4 and MQL5, enabling the robot to execute trades based on specific market conditions. We integrated features like dynamic retrace stop loss and a range filter to optimize performance. Additionally, I assisted in backtesting strategies against historical data to enhance profitability and ensure ease of use for traders through a user-friendly interface",
    tools: [
      "Machine Learning",
      "Artificial Intelligence",
      "MQL4/MQL5",
      "Data Analysis Tools",
    ],
    code: "",
    demo: "",
    image: "",
    role: "Forex Developer",
  },

  {
    id: 5,
    name: "EA GPS Forex Robot",
    description:
      "My team and I developed GPS Forex Robot, an automated trading solution designed for forex markets. I contributed to the coding using MQL4 to enable the robot to analyze market data and execute trades with high accuracy. We implemented advanced algorithms to predict price movements and included risk management features like dynamic stop-loss settings. Additionally, I assisted in optimizing the robot through rigorous backtesting against historical market data, ensuring its reliability and performance for traders seeking a user-friendly trading tool.",
    tools: [
      "Machine Learning",
      "Artificial Intelligence",
      "MetaTrader 4 (MT4)",
      "Analisis Statistik dan Algoritma Trading",
      "MQL4 (MetaQuotes Language 4)",
    ],
    code: "",
    demo: "",
    image: "",
    role: "Forex Developer",
  },
];

// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },
