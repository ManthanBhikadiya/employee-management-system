import { jsxs } from "react/jsx-runtime";

const employees = [
    {
        id: 1,
        firstname: "Rahul",
        email: "employee1@gmail.com",
        password: "123",

        taskNumbers: {
            active: 3,
            newTask: 2,
            completed: 1,
            failed: 1
        },

        tasks: [
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                taskTitle: "Build Login Page",
                taskDescription: "Create a responsive login page using React and Tailwind CSS.",
                taskDate: "2026-08-26",
                category: "Development"
            },
            {
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                taskTitle: "Fix Navbar Bug",
                taskDescription: "Fix the responsive navbar issue on mobile devices.",
                taskDate: "2026-08-27",
                category: "Bug Fix"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: "Create Dashboard UI",
                taskDescription: "Design and implement the employee dashboard interface.",
                taskDate: "2026-08-24",
                category: "UI Design"
            },
            {
                active: false,
                newTask: false,
                completed: false,
                failed: true,
                taskTitle: "API Integration",
                taskDescription: "Integrate the employee API with the frontend application.",
                taskDate: "2026-08-22",
                category: "API"
            },
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                taskTitle: "Write Documentation",
                taskDescription: "Prepare documentation for the newly developed features.",
                taskDate: "2026-08-28",
                category: "Documentation"
            }
        ]
    },

    {
        id: 2,
        firstname: "Priya",
        email: "employee2@gmail.com",
        password: "123",

        taskNumbers: {
            active: 2,
            newTask: 1,
            completed: 2,
            failed: 1
        },

        tasks: [
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                taskTitle: "Design Homepage",
                taskDescription: "Create a modern and responsive homepage design.",
                taskDate: "2026-08-26",
                category: "Design"
            },
            {
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                taskTitle: "Implement Search",
                taskDescription: "Add search functionality to the application.",
                taskDate: "2026-08-27",
                category: "Development"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: "Update Footer",
                taskDescription: "Update footer links and contact information.",
                taskDate: "2026-08-23",
                category: "Frontend"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: "Test Registration",
                taskDescription: "Test the registration form with different input values.",
                taskDate: "2026-08-21",
                category: "Testing"
            },
            {
                active: false,
                newTask: false,
                completed: false,
                failed: true,
                taskTitle: "Fix Form Validation",
                taskDescription: "Resolve validation errors in the registration form.",
                taskDate: "2026-08-20",
                category: "Bug Fix"
            }
        ]
    },

    {
        id: 3,
        firstname: "Amit",
        email: "employee3@gmail.com",
        password: "123",

        taskNumbers: {
            active: 2,
            newTask: 2,
            completed: 2,
            failed: 1
        },

        tasks: [
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                taskTitle: "Create User Profile",
                taskDescription: "Develop a profile page where users can view their information.",
                taskDate: "2026-08-26",
                category: "Development"
            },
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                taskTitle: "Add Profile Image",
                taskDescription: "Allow users to upload and update their profile image.",
                taskDate: "2026-08-28",
                category: "Feature"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: "Setup Project",
                taskDescription: "Initialize the project and configure required dependencies.",
                taskDate: "2026-08-22",
                category: "Setup"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: "Create Components",
                taskDescription: "Create reusable React components for the application.",
                taskDate: "2026-08-24",
                category: "React"
            },
            {
                active: false,
                newTask: false,
                completed: false,
                failed: true,
                taskTitle: "Optimize Images",
                taskDescription: "Reduce image sizes and improve website loading speed.",
                taskDate: "2026-08-19",
                category: "Optimization"
            }
        ]
    },

    {
        id: 4,
        firstname: "Neha",
        email: "employee4@gmail.com",
        password: "123",

        taskNumbers: {
            active: 3,
            newTask: 2,
            completed: 1,
            failed: 1
        },

        tasks: [
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                taskTitle: "Build Product Card",
                taskDescription: "Create a reusable product card component.",
                taskDate: "2026-08-26",
                category: "Frontend"
            },
            {
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                taskTitle: "Add Shopping Cart",
                taskDescription: "Implement add, remove and update quantity functionality.",
                taskDate: "2026-08-27",
                category: "E-Commerce"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: "Create Product List",
                taskDescription: "Display all products with their details and prices.",
                taskDate: "2026-08-23",
                category: "Development"
            },
            {
                active: false,
                newTask: false,
                completed: false,
                failed: true,
                taskTitle: "Fix Cart Bug",
                taskDescription: "Fix incorrect product quantity calculations in the cart.",
                taskDate: "2026-08-21",
                category: "Bug Fix"
            },
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                taskTitle: "Payment Page",
                taskDescription: "Create the checkout and payment page UI.",
                taskDate: "2026-08-29",
                category: "E-Commerce"
            }
        ]
    },

    {
        id: 5,
        firstname: "Arjun",
        email: "employee5@gmail.com",
        password: "123",

        taskNumbers: {
            active: 2,
            newTask: 2,
            completed: 2,
            failed: 1
        },

        tasks: [
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                taskTitle: "Create API",
                taskDescription: "Create REST API endpoints for employee management.",
                taskDate: "2026-08-26",
                category: "Backend"
            },
            {
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                taskTitle: "Connect MongoDB",
                taskDescription: "Connect the application with MongoDB database.",
                taskDate: "2026-08-27",
                category: "Database"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: "Create Server",
                taskDescription: "Setup Express server and configure middleware.",
                taskDate: "2026-08-22",
                category: "Backend"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: "Test API",
                taskDescription: "Test all API endpoints using Postman.",
                taskDate: "2026-08-24",
                category: "Testing"
            },
            {
                active: false,
                newTask: false,
                completed: false,
                failed: true,
                taskTitle: "Fix Database Error",
                taskDescription: "Resolve database connection and query errors.",
                taskDate: "2026-08-20",
                category: "Bug Fix"
            }
        ]
    }
];

const admin = [
    {
        id: 1,
        email: "admin@gmail.com",
        password: "123"
    }
];

export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))

}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    return {
        employees,
        admin
    }
}