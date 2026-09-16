

  const cities = [
  "Delhi",
  "Mumbai",
  "Bangalore",
  "Chennai",
  "Kolkata",
  "Pune",
  "Hyderabad",
  "Jaipur",
  "Lucknow",
  "Noida"
];

const courses = [
  "Node.js",
  "React",
  "MongoDB",
  "JavaScript",
  "Python",
  "DSA",
  "Express.js"
];

const departments = [
  "Computer Science",
  "IT",
  "Electronics",
  "Mechanical",
  "Civil"
];

const skills = [
  "JavaScript",
  "Node.js",
  "MongoDB",
  "React",
  "Express",
  "Python",
  "Git",
  "DSA",
  "HTML",
  "CSS"
];

const firstNames = [
  "Rajiv",
  "Sanjiv",
  "Ankit",
  "Rohit",
  "Amit",
  "Neha",
  "Priya",
  "Pooja",
  "Rahul",
  "Vikas",
  "Arjun",
  "Karan",
  "Nisha",
  "Simran",
  "Akash",
  "Manish",
  "Deepak",
  "Sneha",
  "Riya",
  "Aditya"
];

const lastNames = [
  "Kumar",
  "Sharma",
  "Singh",
  "Verma",
  "Gupta",
  "Yadav",
  "Mishra",
  "Agarwal",
  "Mehta",
  "Jain"
];

const users = [];

for (let i = 1; i <= 100; i++) {

  const firstName = firstNames[(i - 1) % firstNames.length];
  const lastName = lastNames[(i - 1) % lastNames.length];

  users.push({
    userId: i,

    name: {
      first: firstName,
      last: lastName,
      full: `${firstName} ${lastName}`
    },

    age: 18 + (i % 25),

    gender: i % 2 === 0 ? "Female" : "Male",

    email: `${firstName.toLowerCase()}${i}@example.com`,

    phone: `98${String(10000000 + i).padStart(8, "0")}`,

    city: cities[(i - 1) % cities.length],

    address: {
      houseNo: `${100 + i}`,
      street: `Main Street ${i}`,
      city: cities[(i - 1) % cities.length],
      state: i % 2 === 0 ? "Maharashtra" : "Delhi",
      pincode: 110000 + i
    },

    education: {
      department: departments[(i - 1) % departments.length],
      course: courses[(i - 1) % courses.length],
      year: 1 + (i % 4),
      college: `College ${1 + (i % 10)}`
    },

    marks: {
      math: 50 + (i * 3) % 51,
      science: 45 + (i * 5) % 56,
      programming: 40 + (i * 7) % 61,
      english: 55 + (i * 2) % 46
    },

    skills: [
      skills[(i - 1) % skills.length],
      skills[i % skills.length],
      skills[(i + 2) % skills.length]
    ],

    hobbies: [
      i % 2 === 0 ? "Reading" : "Gaming",
      i % 3 === 0 ? "Cricket" : "Music"
    ],

    attendance: 60 + (i * 3) % 41,

    salary: 25000 + (i * 1750),

    isActive: i % 5 !== 0,

    isVerified: i % 3 !== 0,

    experience: i % 8,

    orders: [
      {
        product: `Product ${i}`,
        amount: 500 + i * 100,
        status: i % 2 === 0 ? "Delivered" : "Pending"
      },
      {
        product: `Product ${i + 1}`,
        amount: 1000 + i * 50,
        status: "Delivered"
      }
    ],

    createdAt: new Date(
      2024,
      i % 12,
      1 + (i % 28)
    )
  });
}

module.exports = users;