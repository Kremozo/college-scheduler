// Course data with multiple lesson times
const courses = [
  {
    id: "CS101",
    name: "Intro to Computer Science",
    professor: "Dr. Smith",
    credits: 3,
    lessons: [
      {
        type: "Lecture",
        day: "Mon",
        start: "10:00",
        end: "11:30"
      },
      {
        type: "Lab",
        day: "Fri",
        start: "14:00",
        end: "16:00"
      }
    ]
  },
  {
    id: "MATH201",
    name: "Calculus II",
    professor: "Dr. Lee",
    credits: 4,
    lessons: [
      {
        type: "Lecture",
        day: "Tue",
        start: "09:00",
        end: "10:30"
      },
      {
        type: "Tutorial",
        day: "Fri",
        start: "10:00",
        end: "11:00"
      }
    ]
  },
  {
    id: "PHYS101",
    name: "Physics I",
    professor: "Dr. Johnson",
    credits: 4,
    lessons: [
      {
        type: "Lecture",
        day: "Mon",
        start: "13:00",
        end: "14:00"
      },
      {
        type: "Lab",
        day: "Thu",
        start: "15:00",
        end: "17:00"
      }
    ]
  },
  {
    id: "ENG202",
    name: "English Literature",
    professor: "Prof. Williams",
    credits: 3,
    lessons: [
      {
        type: "Seminar",
        day: "Tue",
        start: "11:00",
        end: "12:30"
      }
    ]
  },
  {
    id: "CHEM101",
    name: "General Chemistry",
    professor: "Dr. Brown",
    credits: 4,
    lessons: [
      {
        type: "Lecture",
        day: "Mon",
        start: "08:00",
        end: "09:00"
      },
      {
        type: "Lab",
        day: "Tue",
        start: "14:00",
        end: "16:00"
      }
    ]
  }
];