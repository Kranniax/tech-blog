const users = [
  {
    username: "john_doe",
    email: "john.doe@example.com",
    password: "password123", // Ensure passwords are hashed in your model hooks
  },
  {
    username: "jane_smith",
    email: "jane.smith@example.com",
    password: "securePass456", // Ensure passwords are hashed in your model hooks
  },
  {
    username: "alex_jones",
    email: "alex.jones@example.com",
    password: "alexPass789", // Ensure passwords are hashed in your model hooks
  },
  {
    username: "sarah_wilson",
    email: "sarah.wilson@example.com",
    password: "wilsonPass321", // Ensure passwords are hashed in your model hooks
  },
  {
    username: "mike_brown",
    email: "mike.brown@example.com",
    password: "brownPass654", // Ensure passwords are hashed in your model hooks
  },
  {
    username: "emma_taylor",
    email: "emma.taylor@example.com",
    password: "taylorEm123", // Ensure passwords are hashed in your model hooks
  },
  {
    username: "david_miller",
    email: "david.miller@example.com",
    password: "millerD456", // Ensure passwords are hashed in your model hooks
  },
  {
    username: "olivia_johnson",
    email: "olivia.johnson@example.com",
    password: "oliviaJ789", // Ensure passwords are hashed in your model hooks
  },
  {
    username: "james_williams",
    email: "james.williams@example.com",
    password: "williamsJ321", // Ensure passwords are hashed in your model hooks
  },
  {
    username: "sophia_davis",
    email: "sophia.davis@example.com",
    password: "davisS654", // Ensure passwords are hashed in your model hooks
  },
  {
    username: "ethan_garcia",
    email: "ethan.garcia@example.com",
    password: "garciaE123", // Ensure passwords are hashed in your model hooks
  },
  {
    username: "ava_rodriguez",
    email: "ava.rodriguez@example.com",
    password: "rodriguezA456", // Ensure passwords are hashed in your model hooks
  },
  {
    username: "noah_martinez",
    email: "noah.martinez@example.com",
    password: "martinezN789", // Ensure passwords are hashed in your model hooks
  },
  {
    username: "isabella_clark",
    email: "isabella.clark@example.com",
    password: "clarkI321", // Ensure passwords are hashed in your model hooks
  },
  {
    username: "mason_lewis",
    email: "mason.lewis@example.com",
    password: "lewisM654", // Ensure passwords are hashed in your model hooks
  },
  {
    username: "mia_lee",
    email: "mia.lee@example.com",
    password: "leeM123", // Ensure passwords are hashed in your model hooks
  },
  {
    username: "jacob_walker",
    email: "jacob.walker@example.com",
    password: "walkerJ456", // Ensure passwords are hashed in your model hooks
  },
  {
    username: "charlotte_hall",
    email: "charlotte.hall@example.com",
    password: "hallC789", // Ensure passwords are hashed in your model hooks
  },
  {
    username: "logan_allen",
    email: "logan.allen@example.com",
    password: "allenL321", // Ensure passwords are hashed in your model hooks
  },
  {
    username: "amelia_king",
    email: "amelia.king@example.com",
    password: "kingA654", // Ensure passwords are hashed in your model hooks
  },
];

const posts = [
  {
    title: "Getting Started with Node.js",
    content:
      "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows you to run JavaScript on the server side. In this post, we'll explore the basics of setting up a Node.js environment and creating a simple web server.",
    user_id: 1, // john_doe
    created_at: "2025-03-15T08:30:00Z",
    updated_at: "2025-03-15T08:30:00Z",
  },
  {
    title: "React Hooks Explained",
    content:
      "React Hooks are a powerful feature that lets you use state and other React features without writing a class. This post covers useState, useEffect, useContext, and custom hooks with practical examples.",
    user_id: 2, // jane_smith
    created_at: "2025-03-18T14:22:00Z",
    updated_at: "2025-03-20T09:15:00Z",
  },
  {
    title: "Introduction to SQL Databases",
    content:
      "Structured Query Language (SQL) is a standard language for storing, manipulating, and retrieving data in databases. This post covers basic SQL commands, joins, and best practices for database design.",
    user_id: 3, // alex_jones
    created_at: "2025-03-20T11:45:00Z",
    updated_at: "2025-03-20T11:45:00Z",
  },
  {
    title: "CSS Grid Layout Tutorial",
    content:
      "CSS Grid Layout is a two-dimensional layout system designed for user interface design. In this tutorial, we'll learn how to create complex grid layouts with just a few lines of CSS code.",
    user_id: 4, // sarah_wilson
    created_at: "2025-03-22T16:30:00Z",
    updated_at: "2025-03-23T10:15:00Z",
  },
  {
    title: "JavaScript Promises and Async/Await",
    content:
      "Asynchronous programming is essential in JavaScript. This post explores Promises and the async/await syntax to help you write cleaner asynchronous code.",
    user_id: 5, // mike_brown
    created_at: "2025-03-25T09:10:00Z",
    updated_at: "2025-03-25T09:10:00Z",
  },
  {
    title: "Building RESTful APIs with Express",
    content:
      "Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. In this post, we'll build a complete RESTful API with Express.",
    user_id: 6, // emma_taylor
    created_at: "2025-03-27T13:45:00Z",
    updated_at: "2025-03-28T11:20:00Z",
  },
  {
    title: "Introduction to Docker Containers",
    content:
      "Docker containers wrap up software and its dependencies into a standardized unit for software development. Learn how to create, manage, and deploy applications using Docker.",
    user_id: 7, // david_miller
    created_at: "2025-03-30T15:30:00Z",
    updated_at: "2025-03-30T15:30:00Z",
  },
  {
    title: "Python for Data Science",
    content:
      "Python has become one of the most popular languages for data science. This post introduces essential Python libraries like NumPy, Pandas, and Matplotlib for data analysis and visualization.",
    user_id: 8, // olivia_johnson
    created_at: "2025-04-02T10:15:00Z",
    updated_at: "2025-04-03T14:20:00Z",
  },
  {
    title: "Understanding Git Workflow",
    content:
      "Git is a distributed version control system that helps track changes in source code during software development. This post covers branches, merging, rebasing, and collaboration workflows.",
    user_id: 9, // james_williams
    created_at: "2025-04-05T08:30:00Z",
    updated_at: "2025-04-05T08:30:00Z",
  },
  {
    title: "Responsive Web Design Principles",
    content:
      "Responsive web design ensures your website looks good on all devices. Learn about fluid grids, flexible images, and media queries to create fully responsive websites.",
    user_id: 10, // sophia_davis
    created_at: "2025-04-08T16:45:00Z",
    updated_at: "2025-04-09T09:30:00Z",
  },
  {
    title: "TypeScript Fundamentals",
    content:
      "TypeScript is a superset of JavaScript that adds static types. This post introduces TypeScript's key features and how it can help prevent bugs and improve code quality.",
    user_id: 11, // ethan_garcia
    created_at: "2025-04-10T11:20:00Z",
    updated_at: "2025-04-10T11:20:00Z",
  },
  {
    title: "Machine Learning Basics",
    content:
      "This post introduces fundamental concepts in machine learning, including supervised and unsupervised learning, training and testing data, and common algorithms.",
    user_id: 12, // ava_rodriguez
    created_at: "2025-04-12T14:15:00Z",
    updated_at: "2025-04-13T10:45:00Z",
  },
  {
    title: "Building a Progressive Web App",
    content:
      "Progressive Web Apps (PWAs) combine the best of web and mobile apps. Learn how to create fast, reliable, and engaging web applications with service workers and app manifests.",
    user_id: 13, // noah_martinez
    created_at: "2025-04-15T09:30:00Z",
    updated_at: "2025-04-15T09:30:00Z",
  },
  {
    title: "GraphQL vs. REST API Design",
    content:
      "This post compares GraphQL and REST API architectures, discussing the pros and cons of each approach and when to use one over the other.",
    user_id: 14, // isabella_clark
    created_at: "2025-04-18T13:40:00Z",
    updated_at: "2025-04-19T08:25:00Z",
  },
  {
    title: "Cybersecurity Best Practices",
    content:
      "Protecting your applications and data from security threats is essential. This post covers authentication, authorization, data encryption, and other security best practices.",
    user_id: 15, // mason_lewis
    created_at: "2025-04-20T15:10:00Z",
    updated_at: "2025-04-20T15:10:00Z",
  },
];

const comments = [
  {
    comment:
      "Great tutorial! I found this really helpful for my current project.",
    post_id: 1,
    user_id: 3,
  },
  {
    comment:
      "I've been using this approach for years and it works well. One thing I would add is to consider using environment variables for sensitive configuration.",
    post_id: 1,
    user_id: 5,
  },
  {
    comment:
      "React Hooks changed the way I write components. useState is so much cleaner than class components.",
    post_id: 2,
    user_id: 7,
  },
  {
    comment:
      "Could you explain useEffect dependencies a bit more? I'm still confused about when to include items in the array.",
    post_id: 2,
    user_id: 9,
  },
  {
    comment:
      "This SQL tutorial was exactly what I needed. Joins always confused me until now.",
    post_id: 3,
    user_id: 4,
  },
  {
    comment:
      "Have you considered covering stored procedures in a follow-up post? They're really powerful for complex operations.",
    post_id: 3,
    user_id: 8,
  },
  {
    comment:
      "CSS Grid has been a game-changer for my layouts. No more floating elements!",
    post_id: 4,
    user_id: 2,
  },
  {
    comment:
      "I'm still struggling with the FR unit in Grid. Could you clarify how it differs from percentage?",
    post_id: 4,
    user_id: 6,
  },
  {
    comment:
      "Async/await has made my code so much more readable compared to nested promises.",
    post_id: 5,
    user_id: 1,
  },
  {
    comment:
      "I've found that try/catch blocks with async/await can sometimes hide important errors. Make sure to log them properly!",
    post_id: 5,
    user_id: 10,
  },
  {
    comment:
      "Express is so versatile. I've been using it for microservices lately.",
    post_id: 6,
    user_id: 11,
  },
  {
    comment:
      "Have you compared Express to Fastify? I'm curious about the performance differences.",
    post_id: 6,
    user_id: 13,
  },
  {
    comment:
      "Docker containers have completely changed our deployment process. No more 'works on my machine' problems!",
    post_id: 7,
    user_id: 15,
  },
  {
    comment:
      "Great intro to Docker. I'd love to see a follow-up on Docker Compose for multi-container applications.",
    post_id: 7,
    user_id: 12,
  },
  {
    comment:
      "Pandas is such a powerful library. I use it daily for data cleaning and analysis.",
    post_id: 8,
    user_id: 14,
  },
  {
    comment:
      "Good overview! I think a section on handling missing data would be really valuable for beginners.",
    post_id: 8,
    user_id: 16,
  },
  {
    comment:
      "Git rebase vs merge is always a hot topic in my team! Thanks for explaining the differences clearly.",
    post_id: 9,
    user_id: 17,
  },
  {
    comment:
      "I've found that a good branching strategy is key to effective collaboration. We use GitFlow and it works well for us.",
    post_id: 9,
    user_id: 19,
  },
  {
    comment:
      "Media queries are still confusing to me. Do you have any tips for organizing them in larger projects?",
    post_id: 10,
    user_id: 18,
  },
  {
    comment:
      "I've started using CSS custom properties (variables) with media queries and it's made responsive design much more maintainable.",
    post_id: 10,
    user_id: 20,
  },
  {
    comment:
      "TypeScript has caught so many bugs before they even made it to production. It's worth the learning curve!",
    post_id: 11,
    user_id: 1,
  },
  {
    comment:
      "What's your opinion on 'any' type? I find myself using it too often when I'm in a hurry.",
    post_id: 11,
    user_id: 3,
  },
  {
    comment:
      "I'm just getting started with machine learning. This was a great primer on the basic concepts.",
    post_id: 12,
    user_id: 5,
  },
  {
    comment:
      "Have you explored neural networks? That would make a great follow-up post.",
    post_id: 12,
    user_id: 7,
  },
  {
    comment:
      "I implemented a PWA for our company website and our mobile engagement went up significantly.",
    post_id: 13,
    user_id: 9,
  },
  {
    comment:
      "Service workers can be tricky to debug. Do you have any tips for development workflow?",
    post_id: 13,
    user_id: 2,
  },
  {
    comment:
      "We recently migrated from REST to GraphQL and haven't looked back. The flexibility is amazing.",
    post_id: 14,
    user_id: 4,
  },
  {
    comment:
      "One thing to consider with GraphQL is the potential for over-fetching if clients aren't careful with their queries.",
    post_id: 14,
    user_id: 6,
  },
  {
    comment:
      "Security is often overlooked until it's too late. Thanks for highlighting these important practices.",
    post_id: 15,
    user_id: 8,
  },
  {
    comment:
      "Two-factor authentication should be standard for any serious application these days.",
    post_id: 15,
    user_id: 10,
  },
];

export {users, posts, comments}