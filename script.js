function timeToMinutes(time){
  const [hours, minutes] = time.split(':').map(Number);
  return hours*60 + minutes;
}

function generateTimeSlots(startHour,endHour){
  const slots = [];
  for(let hour = startHour; hour <= endHour;hour++){
    slots.push('${hour}:00');
  }
  return slots;
}
function calculateRowFromTime(time, startHour = 8) {
  const minutes = timeToMinutes(time);
  const startMinutes = startHour * 60;
  const hoursPassed = (minutes - startMinutes) / 60;
  return Math.floor(hoursPassed) + 2; // +2 for header row
}
function generateTimeTable(courses){
  const container = document.getElementById('timetable');
  const days = ['Sun','Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
  const startHour = 8;
  const endHour = 20;

  container.style.gridTemplateRows = `50px repeat(${timeSlots.length}, 60px)`;
  
  const corner = document.createElement('div');
  corner.className = 'header-cell';
  corner.textContent = 'Time';
  container.appendChild(corner);

  days.forEach(day => {
    const header = document.createElement('div');
    header.className = 'header-cell';
    header.textContent = day;
    container.appendChild(header);
  });

  timeSlots.forEach(time => {
    // Time label
    const timeCell = document.createElement('div');
    timeCell.className = 'time-cell';
    timeCell.textContent = time;
    container.appendChild(timeCell);

    // Empty cells for each day
    days.forEach(day => {
      const dayCell = document.createElement('div');
      dayCell.className = 'day-cell';
      container.appendChild(dayCell);
    });
  });

  courses.forEach(course => {
      placeCourse(container, course, days, startHour);
  });
}

function placeCourse(container,course,days,startHour){
  lessons.forEach(lesson =>{
    const block = document.createElement('div');
    block.className = 'course-block';
    block.innerHTML = 
      "<strong> ${course.name}</strong>" + 
      "<small>${lesson.type}</small>" +
      "<small>${lesson.start} - ${lesson.end}</small>";

    const dayIndex = days.indexOf(lesson.day);
    const startRow = calculateRowFromTime(lesson.start, startHour);
    const endRow = calculateRowFromTime(lesson.end, startHour);

    block.style.gridColumn = dayIndex + 2;
    block.style.gridRow = '${startRow} / ${endRow}';

    container.appendChild(block);
  })
}
generateTimetable(courses);