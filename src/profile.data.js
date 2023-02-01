// profile image
import profileImg from './assets/images/profile.jpeg'

// school collge images
import collegeImg from './assets/images/educat/college1.png';
import schoolImg from './assets/images/educat/school.jpeg';

// images for projects
import activityPlan from './assets/images/projects/project1.jpeg'
import resumeFilter from './assets/images/projects/resume-filter.jpeg'
import weatherMan from './assets/images/projects/weatherman.jpeg'

export const PERSON = {
  first_name: "Anubha",
  last_name: "Kansal",
  age: 23,
  number: "+91 951-137-7725",
  email: "anubhakansal14@gmail.com",
  image: profileImg,
  current_place: {
    city: "Noida",
    country: "India",
    pincode: "201307",
  },
  social_url: {
    linkedIn: "https://www.linkedin.com/in/anubha-kansal-9b11411a4/",
    gitHub: "https://github.com/anubhakansal/",
    insta: "https://instagram.com/angelkvines?igshid=ZmZhODViOGI=/",
  },
  education: {
    college: [{
      name: "Jodhpur Institute Of Engineering & Technology",
      degree: "Bachelor Of Technology",
      field: "Computer science",
      year: "2018-2022",
      status: "Completed",
      image: collegeImg,
    }],
    school: [
      {
        name: "Delhi Public School",
        degree: "12th",
        field: "CBSE",
        year: "2017-2018",
        status: "Completed",
        image: schoolImg,
      },
      {
        name: "Delhi Public School",
        degree: "10th",
        field: "CBSE",
        year: "2015-2016",
        status: "Completed",
        image: schoolImg,
      },
    ],
  },
  about: `I graduated with BTech in CSE  from Jodhpur Institute of Engineering & Technology.
  Currently, I am working as Assistant System Engineer in Tata Consultancy Services. I like to connect with different people and learn about them.
  I like to keep learning and unlearn at regular intervals so as to expand my knowledge.`,
  current_role: "assistant system trainee",
  skills: [
    {
      name: "C++",
      icon: "https://img.icons8.com/color/48/000000/c-plus-plus-logo.png",
    },
    {
      name: "MySQL",
      icon: "https://img.icons8.com/color/48/000000/mysql-logo.png",
    },
    {
      name: "JavaScript",
      icon: "https://img.icons8.com/color/48/000000/javascript--v1.png",
    },
    {
      name: "CSS3",
      icon: "https://img.icons8.com/color/48/000000/css3.png",
    },
    {
      name: "HTML5",
      icon: "https://img.icons8.com/color/48/000000/html-5--v1.png",
    },
    {
      name: "ExpressJS",
      icon: "https://img.icons8.com/fluency/48/000000/node-js.png",
    },
    {
      name: "NodeJS",
      icon: "https://img.icons8.com/color/48/000000/nodejs.png",
    },
    {
      name: "ReactJS",
      icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/000000/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png",
    },
    {
      name: "Python",
      icon: "https://img.icons8.com/color/48/000000/python--v1.png",
    },
  ],
  experience: [
    {
      company_name: "tata consultancy services pvt ltd",
      role: "assistant system trainee",
      join_from: "July 2022",
      till: "Present",
    },
  ],
  projects: [
    {
      name: "WEATHERMAN",
      desc: `My major project in the online summer training is named "WEATHERAMN" and it is based on 
      REACT framework which uses node modules for its proper functioning. It is an open-source 
      framework more popular for single-page applications. It also uses HTML, CSS, Bootstrap and 
      Javascript for proper display and functioning. It uses API Integration for backend purpose.`,
      image: weatherMan,
      category: 1, // MARN
    },
    {
      name: "RESUME FILTERING",
      desc: `We designed a technical project in a team of 5 by using HTML5, CSS, JavaScript. Project was 
      based on the fact that we have number if resumes and our site help to filter the necessary details 
      and represent it in a tabular format with a column containing link to each resume.`,
      image: activityPlan,
      category: 2, // MARN
    },
    {
      name: "ACTIVITY PLAN MANAGER",
      desc: `This is the final year project I made in college. This project aim is to help teachers and students 
      make their work efficient by providing proper tools for planning, making strategies and for 
      activities that can help them to accomplish their task. I have used VS Code Editor, MongoDB, 
      Express, ReactJS, NodeJS in this project.`,
      image: resumeFilter,
      category: 1, // MEAN
    },
  ],
};
