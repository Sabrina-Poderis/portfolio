type Dictionary = {
    name: string;
    role: string;
    aboutMe: string;
    techs: string;
    phone: string;
    resume: string;
    alt: {
        hamburguerIcon: string;
        profileImage: string;
    };
    sections: {
        home: string;
        about: string;
        experience: string;
        projects: string;
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
};

export default Dictionary