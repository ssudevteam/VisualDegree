const initialNodes = [
  {
    id: "1",
    data: {
      label: "101 - Computing Technology and You",
      units: "3",
      desc: "Introduction to the concepts, techniques, uses, applications, and terminology of computers, computing, programming, artificial intelligence, and networking. Emphasis is on the possibilities and limitations of computers and computing in a wide range of personal, commercial, and societal activities. Recommended for all students.",
      labHours: "2",
      lecHours: "2",
    },
    position: {
      x: 100,
      y: 100,
    },
    type: "courseNode",
  },
  {
    id: "2",
    data: {
      label: "115 - Programming I",
      units: "4",
      desc: "This course gives an overview of computer organization; arithmetic and logical expressions, decision and iteration, simple I/O; subprograms; principles of good programming style, readability, documentation, structured programming concepts; top-down design and refinements; techniques of debugging and testing. Use of the above concepts will be implemented in a standard high-level programming language.",
      labHours: "3",
      lecHours: "3",
    },
    position: {
      x: 260,
      y: 100,
    },
    type: "courseNode",
  },
  {
    id: "3",
    data: {
      label: "115W - Programming I Workshop",
      units: "1",
      desc: "A workshop designed to be taken with CS 115. Exploration of programming concepts through problem solving in a group setting.",
      labHours: "",
      lecHours: "",
    },
    position: {
      x: 420,
      y: 100,
    },
    type: "courseNode",
  },
  {
    id: "4",
    data: {
      label: "210 - Introduction to Unix",
      units: "1",
      desc: "This course is an introduction to the use of Linux/Unix as a programming environment. Communicating with a Linux host, shells and shell commands, files and directories, Gnome desktop, jobs and processes, scripting, programming utilities (compiler, linker, debugger, make, hex dump, etc.).",
      labHours: "3",
      lecHours: "",
    },
    position: {
      x: 100,
      y: 200,
    },
    type: "courseNode",
  },
  {
    id: "5",
    data: {
      label: "215 - Programming II",
      units: "4",
      desc: "This course is the sequel to CS 115. Topics include: pointers and dynamic allocation of storage, linked lists, an introduction to the object oriented programming (OOP) paradigm, classes and objects, encapsulation, member variables and member functions, inheritance and polymorphism, scoping, templates, iterators, and error handling techniques.",
      labHours: "3",
      lecHours: "3",
    },
    position: {
      x: 260,
      y: 200,
    },
    type: "courseNode",
  },
  {
    id: "6",
    data: {
      label: "242 - Discrete Structures for Computer Science",
      units: "4",
      desc: "This course covers fundamental mathematical concepts blended with their applications in Computer Science. Topics include: sets, functions and relations, Boolean algebra, normal forms., Karnaugh map and other minimization techniques, predicate logic, formal and informal proof techniques, relational algebra, basic counting techniques, recurrence relations, and an introduction to graph theory.",
      labHours: "",
      lecHours: "4",
    },
    position: {
      x: 420,
      y: 200,
    },
    type: "courseNode",
  },
  {
    id: "7",
    data: {
      label: "252 - Introduction to Computer Organization",
      units: "4",
      desc: "This course looks at the interface between computer hardware and software by introducing computer architecture and low-level programming. Topics to be covered include: data representations, digital logic, combinational and sequential circuits, computer system organization from the machine language point of view, and assembly language implementation of high-level constructs.",
      labHours: "3",
      lecHours: "3",
    },
    position: {
      x: 580,
      y: 200,
    },
    type: "courseNode",
  },
  {
    id: "8",
    data: {
      label: "285 - Selected Topics in Computer Science",
      units: "1-4",
      desc: "This lower-division course may be repeated with different subject matter. Content will be indicated by the specific topic.",
      labHours: "",
      lecHours: "",
    },
    position: {
      x: 740,
      y: 200,
    },
    type: "courseNode",
  },
  {
    id: "9",
    data: {
      label: "315 - Data Structures",
      units: "4",
      desc: "This course introduces the concept of the organization of data into different structures to support the efficient implementation of computer algorithms. The emphasis of the course is on the internal representation of the elementary and intermediate data structures such as stacks, queues, binary trees, heaps and hash tables, their time and space requirements, and their applications. A second component of the course is the study of more advanced features of object-oriented programming.",
      labHours: "3",
      lecHours: "3",
    },
    position: {
      x: 100,
      y: 300,
    },
    type: "courseNode",
  },
  {
    id: "10",
    data: {
      label: "330 - Introduction to Game Programming",
      units: "3",
      desc: "This course is an introduction to the theory and practice of video game design and programming. Video games combine, in real-time, concepts in computer graphics, human-computer interaction, networking, artificial intelligence, computer aided instruction, computer architecture, and databases. This course introduces students to a variety of game engines and frameworks and explores artificially intelligent agents. Students will work as part of a team to create a complete description document for a computer game and implement a prototype of the game.",
      labHours: "2",
      lecHours: "2",
    },
    position: {
      x: 260,
      y: 300,
    },
    type: "courseNode",
  },
  {
    id: "11",
    data: {
      label: "340 - Computer Security and Malware",
      units: "3",
      desc: "Current methods for increasing security, protecting privacy, and guaranteeing degrees of confidentiality of computer records; ensuring computer installation safety; protecting software products; preventing and dealing with crime; value systems, ethics, and human factors affecting use and misuse of computers. Discussion of recent technical, legal, and sociopolitical issues influencing computer security problems, with an emphasis on malware.",
      labHours: "2",
      lecHours: "2",
    },
    position: {
      x: 420,
      y: 300,
    },
    type: "courseNode",
  },
  {
    id: "12",
    data: {
      label: "349 - Problem Solving in a Team Environment",
      units: "1",
      desc: "This course focuses on problem solving and program development in a team programming environment. Topics include: techniques for problem analysis and algorithm design, rapid implementation and pair programming methods, use of standard container classes and library functions. Different types of problems will be selected each semester. Students taking this course participate in regional and national programming competitions.",
      labHours: "2",
      lecHours: "",
    },
    position: {
      x: 580,
      y: 300,
    },
    type: "courseNode",
  },
  {
    id: "13",
    data: {
      label: "351 - Computer Architecture",
      units: "4",
      desc: "This course is the sequel to CS 252 and includes the following topics: instruction set design; stages of instruction execution: data, and control path design; pipelining; memory hierarchy; cache models and design issues; virtual memory and secondary storage; I/O interfacing. Advanced topics to include some of the following: multiprocessor systems, GPU, multicores and cluster computers.",
      labHours: "",
      lecHours: "4",
    },
    position: {
      x: 740,
      y: 300,
    },
    type: "courseNode",
  },
  {
    id: "14",
    data: {
      label: "355 - Database Management Systems Design",
      units: "4",
      desc: "This course focuses on the theoretical as well as the practical aspects of modern database systems. Topics include the study of the entity-relationship (E/R) model, relational algebra, data normalization, XML as a semi-structured data model, data integrity, and database administration. Current tools and technologies are used to create and manipulate sample databases.",
      labHours: "",
      lecHours: "4",
    },
    position: {
      x: 900,
      y: 300,
    },
    type: "courseNode",
  },
  {
    id: "15",
    data: {
      label: "360 - Object-Oriented Programming",
      units: "3",
      desc: "Principles of object-oriented programming, including encapsulation, inheritance, polymorphism, and design patterns. Specific applications are developed in one or more object-oriented programming languages and will cover the use of application frameworks and graphical user interfaces based on object-oriented principles.",
      labHours: "3",
      lecHours: "2",
    },
    position: {
      x: 1060,
      y: 300,
    },
    type: "courseNode",
  },
  {
    id: "16",
    data: {
      label: "365 - Computer Networking and the Internet",
      units: "3",
      desc: "This course introduces the theory and practice of computer networking, with coverage of key theories in data communication and how these theories relate to current practices and will drive future practices. Network hardware implementations of local area networks, wide area networks, telephone networks, and wireless networks are investigated. Network software implementations of switches and routers, peer-to-peer networking, and hosted applications are investigated with exercises in writing and debugging network protocols in the laboratory.",
      labHours: "3",
      lecHours: "2",
    },
    position: {
      x: 1220,
      y: 300,
    },
    type: "courseNode",
  },
  {
    id: "17",
    data: {
      label: "370 - Software Design and Development",
      units: "4",
      desc: "Techniques of software design and development. Software lifecycle, requirements, formal specification, metrics, design, functional and structural testing, rapid prototyping, complexity, version control, and team management. Software metrics, tools for component-based software development. Team-based, agile, and scrum methodologies emphasized.",
      labHours: "",
      lecHours: "4",
    },
    position: {
      x: 1380,
      y: 300,
    },
    type: "courseNode",
  },
  {
    id: "18",
    data: {
      label: "375 - Computer Graphics",
      units: "3",
      desc: "An introduction to computer graphics. Survey of the fundamental algorithms and methodologies, including, but not limited to, polygon fill, line-drawing, antialiasing, geometric transformations, viewing and clipping, spline representation, occlusion and visible surface detection, illumination, texturing, color models, rendering, shaders, animation, and emerging techniques.",
      labHours: "",
      lecHours: "",
    },
    position: {
      x: 1540,
      y: 300,
    },
    type: "courseNode",
  },
  {
    id: "19",
    data: {
      label: "380 - ETS Major Field Test",
      units: "1",
      desc: "The focus of this course is preparation for the Major Field Test in Computer Science. Students will review material in the basic knowledge areas of computer science including: discrete structures, programming, algorithms and complexity, systems, software engineering, and information management. The course will culminate with students taking the Major Field Test in Computer Science administered through Educational Testing Services. This course is intended for students whom have completed the majority of required coursework in the CS major and are within one semester of graduation.",
      labHours: "",
      lecHours: "",
    },
    position: {
      x: 1700,
      y: 300,
    },
    type: "courseNode",
  },
  {
    id: "20",
    data: {
      label: "385 - Selected Topics in Computer Science",
      units: "1-4",
      desc: "This lower-division course may be repeated with different subject matter. Content will be indicated by the specific topic.",
      labHours: "",
      lecHours: "",
    },
    position: {
      x: 1860,
      y: 300,
    },
    type: "courseNode",
  },
  {
    id: "21",
    data: {
      label: "386 - Selected Topics in CS with Lab",
      units: "3",
      desc: "This course may be repeated with different subject matter for credit in the CS major.",
      labHours: "3",
      lecHours: "2",
    },
    position: {
      x: 2020,
      y: 300,
    },
    type: "courseNode",
  },
  {
    id: "22",
    data: {
      label: "390 - Computer Science Colloquium",
      units: "1",
      desc: "Series of lectures on current developments in computer science.",
      labHours: "",
      lecHours: "",
    },
    position: {
      x: 2180,
      y: 300,
    },
    type: "courseNode",
  },
  {
    id: "23",
    data: {
      label: "391 - Computing Professions",
      units: "1",
      desc: "This course will introduce students to careers in the computing field, covering different career possibilities; the software engineering job search and interview process; graduate education in computing; and aspects of professionalism including communication and ethics. Students in this course will develop job application materials and practice technical and nontechnical job interviews.",
      labHours: "",
      lecHours: "",
    },
    position: {
      x: 2340,
      y: 300,
    },
    type: "courseNode",
  },
  {
    id: "24",
    data: {
      label: "415 - Algorithm Analysis",
      units: "4",
      desc: "This course provides a systematic approach to the design and analysis of algorithms with an emphasis on efficiency. Topics include algorithms for searching and sorting, hashing, exploring graphs, and integer and polynomial arithmetic. Foundations in recurrence relations, combinatorics, probability, and graph theory as used in algorithm analysis are covered. Standard design techniques such as divide-and-conquer, greedy method, dynamic programming, heuristics, and probabilistic algorithms along with NP-completeness and approximation algorithms are included.",
      labHours: "",
      lecHours: "4",
    },
    position: {
      x: 100,
      y: 400,
    },
    type: "courseNode",
  },
  {
    id: "25",
    data: {
      label: "425 - Parallel Computing",
      units: "3",
      desc: "Overview of parallel patterns, programming models, and hardware. Topics include parallel performance analysis; types of parallelism; parallel decomposition of tasks; shared vs. distributed memory; synchronization; hands-on experience with multiple parallel programming models; and architectural support for parallelism.",
      labHours: "",
      lecHours: "3",
    },
    position: {
      x: 260,
      y: 400,
    },
    type: "courseNode",
  },
  {
    id: "26",
    data: {
      label: "450 - Operating Systems",
      units: "4",
      desc: "This course covers the fundamental concepts of operating system design and implementation; the study of problems, goals, and methods of concurrent programming; and the fundamentals of systems programming. Topics include resource-management, process and thread scheduling algorithms, inter-process communication, I/O subsystems and device-drivers, memory management including virtual memory, segmentation, and page-replacement policies. These topics will be covered in theory and in practice through the study of the source-code of a working operating system.",
      labHours: "",
      lecHours: "4",
    },
    position: {
      x: 420,
      y: 400,
    },
    type: "courseNode",
  },
  {
    id: "27",
    data: {
      label: "452 - Compiler Design and Construction",
      units: "3",
      desc: "Application of language and automata theory to the design and construction of compilers. Lexical scanning, top-down and bottom-up parsing; semantic analysis, code generation; optimization. Design and construction of parts of a simple compiler using compiler generation tools.",
      labHours: "2",
      lecHours: "2",
    },
    position: {
      x: 580,
      y: 400,
    },
    type: "courseNode",
  },
  {
    id: "28",
    data: {
      label: "454 - Theory of Computation",
      units: "4",
      desc: "Abstract mathematical models of computing devices and language specification systems with focus on regular and context-free languages and their applications in parsing, pattern matching, counting etc. Turing machines and computability, time and space complexity of languages, unsolvable problems and intractable problems.",
      labHours: "",
      lecHours: "4",
    },
    position: {
      x: 740,
      y: 400,
    },
    type: "courseNode",
  },
  {
    id: "29",
    data: {
      label: "460 - Programming Languages",
      units: "4",
      desc: "This course provides a survey of the syntactic, semantic, and implementation features of functional, procedural, object-oriented, logic, and concurrent programming languages.",
      labHours: "",
      lecHours: "4",
    },
    position: {
      x: 900,
      y: 400,
    },
    type: "courseNode",
  },
  {
    id: "30",
    data: {
      label: "465 - Data Communications",
      units: "3",
      desc: "The ISO reference model, theoretical basis for data communications, data transmission theory and practice, telephone systems, protocols, networks, internetworks, with examples.",
      labHours: "3",
      lecHours: "2",
    },
    position: {
      x: 1060,
      y: 400,
    },
    type: "courseNode",
  },
  {
    id: "31",
    data: {
      label: "470 - Advanced Software Design Project",
      units: "3",
      desc: 'This course is a project-based course designed to provide a "real world, team oriented" capstone experience for Computer Science majors. Coursework will be organized around large programming projects. The content of the projects may vary depending on the interests of the instructor and may include industry, government, nonprofit organization, or other affiliations.',
      labHours: "",
      lecHours: "3",
    },
    position: {
      x: 1220,
      y: 400,
    },
    type: "courseNode",
  },
  {
    id: "32",
    data: {
      label: "479 - Computer Vision Fundamentals",
      units: "3",
      desc: "Algorithms for face detection and face recognition are now widely employed for surveillance, security and entertainment applications. This course will delve into the study and implementation of such algorithms for detecting generic objects (pedestrians, animals, buildings, traffic signs, etc.). It will involve learning about (i) image filtering operations such as smoothing, thresholding and edge detection, (ii) interest point detection and representation methods such as SIFT and HOG, and (iii) machine learning classification techniques such as SVM and convolutional neural networks.",
      labHours: "",
      lecHours: "",
    },
    position: {
      x: 1380,
      y: 400,
    },
    type: "courseNode",
  },
  {
    id: "33",
    data: {
      label: "480 - Artificial Intelligence",
      units: "3",
      desc: "This course is a survey of techniques that simulate human intelligence. Topics may include: pattern recognition, general problem solving, search algorithms such as iterative deepening and A* search, adversarial game-tree search, decision-making, neural networks, various machine learning algorithms and applications.",
      labHours: "",
      lecHours: "3",
    },
    position: {
      x: 1540,
      y: 400,
    },
    type: "courseNode",
  },
  {
    id: "34",
    data: {
      label: "495 - Special Studies",
      units: "1-4",
      desc: "This course is intended for students who are doing advanced work in an area of computer science (e.g., a senior project).",
      labHours: "",
      lecHours: "",
    },
    position: {
      x: 1700,
      y: 400,
    },
    type: "courseNode",
  },
  {
    id: "35",
    data: {
      label: "496 - Senior Research Project",
      units: "3",
      desc: "Students, under the direction of one or more faculty members, undertake a substantial research project that is based on multiple upper-division CS courses. The result of the research is presented by the students in one of the Colloquium (CS 390) meetings.",
      labHours: "",
      lecHours: "",
    },
    position: {
      x: 1860,
      y: 400,
    },
    type: "courseNode",
  },
  {
    id: "36",
    data: {
      label: "497 - Internship",
      units: "1-3",
      desc: "Student projects conceived and designed in conjunction with an off-campus organization or group. The internship is intended to provide on-the-job experience in an area of computer science in which the student has no prior on-the-job experience. Computer hardware or computer time Required for the internship, as well as regular supervision of the intern, must be provided by the off-campus organization.",
      labHours: "",
      lecHours: "",
    },
    position: {
      x: 2020,
      y: 400,
    },
    type: "courseNode",
  },
];

export default initialNodes;
