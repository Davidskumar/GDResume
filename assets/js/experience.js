AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "About",
    cardImage: "assets/images/experience-page/aboutusicon.png",
    place: "Career Objective",
    time: "",
    desp: "<br><p>Diligent and detail-oriented software engineer with a B.Tech degree specializing in Artificial Intelligence, driven by a passion for crafting innovative and impactful solutions. Equipped with a deep understanding of software development methodologies, automation tools, and a commitment to ensuring quality and performance, I excel at delivering reliable, efficient results. As a game developer, I bring creativity and technical expertise to crafting immersive digital experiences. Adaptive, open-minded, and exceptionally organized, I am dedicated to exceeding expectations and contributing meaningfully to every project I undertake, eager to join a reputable organization to drive success and innovation.</p><br><br><a data-v-4877bd6a href='https://drive.google.com/file/d/1dWw3EK1uxFZXdbYYgbWXcfkOewhbw0Vr/view?usp=sharing' target='_blank'><img src='assets/images/experience-page/downloadico.jpg' height='20' width='20' alt='download img'/>Download as pdf mb <a>",
  },
  {
    title: "Skills",
    cardImage: "assets/images/experience-page/skillicon.png",
    place: "Technical",
    time: "",
    desp:"<ul style='list-style-type:disc'><li>Python, C#, C++, C Programming, Java/JavaScript/JQuery/AngularJS/Node.js, HTML/CSS </li><li>Data Analytics(ML & DL), Prompt Engineering, LLMs</li><li>SQL, MongoDB, Firebase</li><li>Software Development Life Cycle with Real-Time Data Processing</li></li><li>Unity Engine, Unreal Engine, Blender, Adobe Photoshop, Zbrush, Android studio</li></ul>",
  },
  {
    title: "Software Developer Intern",
    cardImage: "assets/images/experience-page/exposysdatalabicon.png",
    place: "Exposys Data Labs, Bengaluru",
    time: "(10/Sep/2024 - 10/Oct/2024)",
    desp: "<li>Developed a secure messaging system using Python, integrating AES and RSA hybrid encryption to protect data transmissions, achieving encryption speeds of around 50 milliseconds.</li><li>Implemented behavioral authentication through typing pattern analysis with machine learning models(KNN, MLP), achieving a 30% increase in user verification accuracy when transitioning from KNN to MLP.</li><li> Enhanced data security with two-factor authentication (OTP-based) and optimized encryption methods, significantly improving overall system security</li><p><i> Tech Stack - Python, scikit-learn, PyCryptodome, NumPy, smtplib, zlib</i></p>",
  },
  {
    title: "Machine Learning Intern",
    cardImage: "assets/images/experience-page/intelicon.png",
    place: "Intel Unnati Industrial Training , Chennai",
    time: "(29/May/2023 - 15/Jul/2023)",
    desp: "<li>Implemented a data-driven Social Distancing System with computer vision and real-time analytics, thereby reducing workplace spread of COVID-19 and ensuring 100% safety protocol adherence during COVID-19 as per audits conducted 3 times per month.</li><li>Leveraged Python for machine learning and computer vision to boost image recognition accuracy.Achieved an increase in accuracy from 50% to 75% on a standardized benchmark dataset. Decreased the error rate from 50% to 25% in using test cases scenarios.</li><li>Developed a system using OpenVINO for real-time social distance inference in video, optimizing deep learning models to detect rule violations and enhance accuracy and speed.</li><p><i>Tech Stack - Python, OpenCV, OpenVINO, PyTorch, Pandas, YOLO</i></p>",
  },
  {
    title: "Cybersecurity Intern",
    cardImage: "assets/images/experience-page/CiscoLogo.png",
    place: "Cisco AICTE Virtual Internship Program, Coimbatore",
    time: "(01/May/2022 - 01/Jul/2022)",
    desp: "<li>Designed and implemented a Network Topology with cybersecurity principles, resulting in increase in network efficiency with improved network throughput from 5 Mbps to 6 Mbps during peak hours for the University.</li><li>Utilized Packet Tracer to implement routing protocols with switches and IP configuration, reducing latency whereby average network latency from 50 milliseconds to 40 milliseconds across campus-wide network segments.</li><p><i>Tech Stack - Cisco Packet Tracer, Routing Protocols, Switching Technologies, VPN </i></p>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Student Traner KHacks",
    cardImage: "assets/images/experience-page/khacksicon.png",
    description:
      "Conducted workshops on AI, Python, and ML, mentoring peers and fostering innovation in technical learning.",
  },
  {
    title: "National Talent Search Exam - First round Qualifier",
    cardImage: "assets/images/experience-page/ntselogo.png",
    description:
      "Demonstrated strong analytical and problem-solving skills by clearing the first round of the National Talent Search Examination.",
  },
  {
    title: "3rd Place in InterSchool Essay Comp. (R. Mission Ashrama)",
    cardImage: "assets/images/experience-page/rmissionlogo.png",
    description:
      "Achieved 3rd place in a state-level competition by R. Mission Ashrama for outstanding writing.",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "Smart India Hackerathon (SIH) Grand Finalist(2022)",
    subtitle: "Participant",
    image: "assets/images/experience-page/SIHlogo.png",
    desp: "Developed a Disaster Response Radar (GS900), an innovative application designed to assist citizens during disasters by providing real-time alerts, actionable insights, and support coordination with emergency services.",
    href: "https://sih.gov.in/",
  },
  {
    title: "SRM National Workshop on Game Dev.",
    subtitle: "Participant",
    image: "assets/images/experience-page/Srmicon.png",
    desp: "Participated in a national-level workshop organized by the Department of Software Engineering, gaining insights into game development techniques, tools, and industry practices.",
    href: "https://www.srmist.edu.in/",
  },
  {
    title: "Microsoft Azure Github-Code",
    subtitle: "Participant",
    image: "assets/images/experience-page/azuregithubicon.png",
    desp: "Attended a workshop on utilizing Microsoft Azure and GitHub for cloud integration, code management, and deployment, improving skills in collaborative development and cloud computing conducted on 25th March 2021",
    href: "https://azure.microsoft.com/en-in/products/github",
  },
  {
    title: "Machyard 23rd by Gravitace",
    subtitle: "Participant",
    image: "assets/images/experience-page/khacksicon.png",
    desp: "Gravitace is the student association of the Department of Aerospace Engineering, dedicated to fostering innovation and technical skills. They aim to engage students in hands-on experiences and promote learning in aerospace engineering.",
    href: "https://www.facebook.com/story.php?story_fbid=658798622911978&id=100063455394313",
  },
  {
    title: "Workshop on Amazon Alexa & Google Assist.",
    subtitle: "Participant",
    image: "assets/images/experience-page/khacksicon.png",
    desp: "The workshop on Amazon Alexa and Google Assistant teaches participants to create voice-controlled apps using Alexa Skills Kit and Google Assistant SDK, focusing on IoT integration and natural language processing.",
    href: "https://karunya.edu/cse/workshops",
  },
  {
    title: "Workshop on Python Programming",
    subtitle: "Participant",
    image: "assets/images/experience-page/khacksicon.png",
    desp: "The Python programming workshop equips participants with essential skills to write efficient code, covering key concepts like data structures, algorithms, and libraries for real-world applications.",
    href: "https://karunya.edu/cse/workshops",
  },
  {
    title: "Workshop on Web Development",
    subtitle: "Participant",
    image: "assets/images/experience-page/khacksicon.png",
    desp: "A web development workshop equips participants with the skills to create dynamic websites using HTML, CSS, and JavaScript, focusing on both front-end and back-end development.",
    href: "https://karunya.edu/cse/workshops",
  },
  
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="${href}" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
