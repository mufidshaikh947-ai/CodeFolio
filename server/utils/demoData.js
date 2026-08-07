const Skill = require("../models/Skill");
const Project = require("../models/Project");
const Experience = require("../models/Experience");
const Education = require("../models/Education");
const Certificate = require("../models/Certificate");

const bcrypt = require("bcryptjs");

const User = require("../models/User");

async function seedDemoUsers() {

    try {

        const existingUsers = await User.countDocuments();

        if (existingUsers > 0) {

            console.log("Demo users already exist.");

            return;

        }

        const password = await bcrypt.hash("password123", 10);

        await User.insertMany([

            {
                name: "Alex Johnson",
                email: "alex@example.com",
                username: "alex",

                password,

                title: "Full Stack Developer",

                headline:
                    "Building scalable MERN applications.",

                about:
                    "Passionate full stack developer with experience in React, Node.js and MongoDB.",

                location: "Bangalore, India",

                availability: "Available for Work",

                github: "https://github.com/alex",

                linkedin:
                    "https://linkedin.com/in/alex",

                website:
                    "https://alex.dev",

                portfolioEmail:
                    "alex@example.com",

                templateId: "minimal",

                theme: "light"
            },

            {
                name: "Sarah Williams",
                email: "sarah@example.com",
                username: "sarah",

                password,

                title: "Frontend Developer",

                headline:
                    "Creating premium UI experiences.",

                about:
                    "Frontend engineer focused on beautiful, responsive and accessible interfaces.",

                location: "Mumbai, India",

                availability: "Open for Opportunities",

                github:
                    "https://github.com/sarah",

                linkedin:
                    "https://linkedin.com/in/sarah",

                website:
                    "https://sarah.dev",

                portfolioEmail:
                    "sarah@example.com",

                templateId: "modern",

                theme: "light"
            }

        ]);

        console.log("Demo users created.");

    }

    catch (error) {

        console.log(error.message);

    }
await seedPortfolioData();
}

async function seedPortfolioData() {

    const users = await User.find({
        username: {
            $in: ["alex", "sarah"]
        }
    });

    for (const user of users) {

        const hasData = await Skill.exists({
            user: user._id
        });

        if (hasData) {
            continue;
        }

        await Skill.insertMany([
            {
                user: user._id,
                name: "React",
                level: 5,
                category: "Frontend",
                displayOrder: 1
            },
            {
                user: user._id,
                name: "Node.js",
                level: 4,
                category: "Backend",
                displayOrder: 2
            },
            {
                user: user._id,
                name: "MongoDB",
                level: 4,
                category: "Database",
                displayOrder: 3
            },
            {
                user: user._id,
                name: "JavaScript",
                level: 5,
                category: "Programming Language",
                displayOrder: 4
            }
        ]);

        await Project.create({

            user: user._id,

            title: "CodeFolio",

            description:
                "Developer portfolio CMS built using the MERN stack.",

            technologies: [
                "React",
                "Node.js",
                "MongoDB"
            ],

            githubLink: "https://github.com/demo",

            liveLink: "https://example.com",

            category: "Full Stack",

            status: "Completed",

            featured: true,

            displayOrder: 1

        });

        await Experience.create({

            user: user._id,

            company: "Tech Solutions",

            position: "Frontend Developer Intern",

            employmentType: "Internship",

            location: "Remote",

            startDate: "2025-01",

            endDate: "2025-06",

            technologies: [
                "React",
                "Tailwind CSS"
            ],

            achievements: [
                "Developed reusable UI",
                "Improved dashboard performance"
            ],

            description:
                "Worked on frontend modules and reusable components.",

            displayOrder: 1

        });

        await Education.create({

            user: user._id,

            institution: "ABC University",

            degree: "Bachelor of Technology",

            fieldOfStudy: "Computer Science",

            grade: "8.8 CGPA",

            startYear: 2021,
endYear: 2025,

            relevantCoursework: [
                "DSA",
                "DBMS",
                "Operating Systems"
            ],

            displayOrder: 1

        });

        await Certificate.create({

            user: user._id,

            title: "Meta Front-End Developer",

            issuer: "Coursera",

            issueDate: new Date("2024-08-10"),

            credentialId: "META12345",

            credentialUrl:
                "https://coursera.org",

            skills: [
                "React",
                "JavaScript",
                "HTML",
                "CSS"
            ],

            displayOrder: 1

        });

    }

    console.log("Demo portfolio data created.");

}
module.exports = seedDemoUsers;