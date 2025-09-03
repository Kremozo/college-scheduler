const results = document.getElementById("results");
const search = document.getElementById("search");
const schedule = document.getElementById("schedule");
let selectedCourses = [];

search.addEventListener("input", () => {
  const query = search.value.toLowerCase();
  results.innerHTML = "";
  courses
    .filter(c => c.name.toLowerCase().includes(query) || c.id.toLowerCase().includes(query))
    .forEach(c => {
      const li = document.createElement("li");
      li.textContent = `${c.id} - ${c.name}`;
      li.addEventListener("click", () => addCourse(c));
      results.appendChild(li);
    });
});

function addCourse(course) {
  // check conflicts
  for (const sc of selectedCourses) {
    for (const day of course.days) {
      if (sc.days.includes(day) && !(course.end <= sc.start || course.start >= sc.end)) {
        alert("Conflict with " + sc.id);
        return;
      }
    }
  }

  selectedCourses.push(course);
  renderSchedule();
}

function renderSchedule() {
  // clear old
  document.querySelectorAll(".course-block").forEach(el => el.remove());

  selectedCourses.forEach(c => {
    c.days.forEach(day => {
      const block = document.createElement("div");
      block.className = "course-block";
      block.textContent = c.id;

      // Rough placement (improve later with real times)
      const dayIndex = ["Mon","Tue","Wed","Thu","Fri"].indexOf(day);
      block.style.gridColumn = dayIndex + 1;

      // Approx row based on start hour
      const startHour = parseInt(c.start.split(":")[0], 10);
      block.style.gridRow = (startHour - 7) + " / span 2";

      schedule.appendChild(block);
    });
  });
}
