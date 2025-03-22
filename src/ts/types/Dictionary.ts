type Dictionary = {
  name: string;
  role: string;
  aboutMe: string;
  techs: string;
  phone: string;
  resume: string;
  seeOnGitHub: string;
  yourMessage: string;
  sendWhatsappMessage: string;
  contactDescription: string;
  alt: {
    hamburguerIcon: string;
    profileImage: string;
  };
  sections: {
    home: string;
    about: string;
    experience: string;
    projects: string;
    recommendations: string;
    contact: string;
  };
  experiences: {
    companyName: string;
    website: string;
    role: string;
    startDate: string;
    endDate: string;
    description: string;
    stack: string[];
  }[];
  college: {
    name: string;
    website: string;
    degree: string;
    courseName: string;
    startDate: string;
    endDate: string;
  };
  projects: {
    name: string;
    description: string;
    href: string;
  }[];
  recommendations: {
    text: string;
    name: string;
    role: string;
    image: {
        src: string;
        alt: string;
    }
  }[]
};

export default Dictionary;
