// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Michael",
  middleName: "",
  lastName: "Despo",
  message: "Empowered by technology, focused on building solutions for a brighter future.",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/md82680",
    },
    /*
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/profile.php?id=100085051753764",
    },
    */
    /*{
      image: "fa-instagram",
      url: "https://www.instagram.com/placeholder/",
    },*/
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/michaeldespo/",
    },
    /*{
      image: "fa-twitter",
      url: "https://www.twitter.com/placeholder/",
    },*/
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/michaeldespo.png"),
  imageSize: 375,
  message: (
    <span>
      I'm Michael Despo, a dedicated full stack developer eager to bring my
      passion for technology to new challenges and opportunities. Recently
      completing{" "}
      <a
        href="https://certificates.emeritus.org/ec7ef13e-f301-43e9-9841-28ceb86f1e96#gs.fm2r3f"
        target="_blank"
        rel="noopener noreferrer"
      >
        MIT's Professional Full Stack Development with MERN
      </a>{" "}
      program and H I’ve continued my relentless drive for problem-solving,
      continuous growth, and delivering innovative solutions that make an
      impact. With my diverse professional background and technical expertise, I
      am fully prepared to contribute as a full stack developer and tackle
      complex challenges.
    </span>
  ),
  resume:
    "https://drive.google.com/file/d/1KgS1s0vG2wTu8myFiB6Y-ADcLECO4S1q/view?usp=drive_link",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "md82680", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/michaeldespo.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/michaeldespo.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "JavaScript", value: 55 },
    { name: "Python", value: 65 },
    { name: "React", value: 45 },
    { name: "C", value: 28 },
    { name: "HTML/CSS", value: 45 },
    { name: "Tailwind", value: 20 },
    { name: "Bootstrap", value: 20 },
    { name: "Node.js", value: 20 },
    { name: "Express", value: 35 },
    { name: "Next.js", value: 40 },
    { name: "MongoDB", value: 20 },
    { name: "PostgreSQL", value: 35 },
    { name: "SQL", value: 40 },
    { name: "Git", value: 50 },
    { name: "Vercel", value: 40 },
    { name: "Data Structures and Algorithms", value: 55 },
  ],
  softSkills: [
    { name: "Project Management", value: 95 },
    { name: "Agile Frameworks/Delivery", value: 75 },
    { name: "IT Implementations", value: 90 },
    { name: "Business Requirements", value: 90 },
    { name: "Leadership", value: 90 },
    { name: "Problem Solving", value: 90 },
    { name: "Organization", value: 75 },
    { name: "Analytical", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm actively seeking a full-time Software Engineering role but am open to internships. Feel free to reach out if you have opportunities, questions, or just want to connect at",
  email: "mdespo@gmail.com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer',// Here Add Company Name
      companylogo: require('../assets/img/dell.png'),
      date: 'June 2018 – Present',
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/boeing.png'),
      date: 'May 2017 – May 2018',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
