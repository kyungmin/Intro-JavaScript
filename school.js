function Student (fname, lname) {
	this.fname = fname;
	this.lname = lname;
	this.courses = [];
}

Student.prototype.name = function() {
	return this.fname + " " + this.lname;
}

Student.prototype.courses = function() {
	return this.courses;
}

Student.prototype.enroll = function(course) {
	for(var i = 0; i < this.courses.length; i++) {
		if (this.courses[i].conflictsWith(course)) {
			console.log(course.name + " conflicts with schedule");
			return;
		}
	}

	this.courses.push(course);
	course.addStudent(this);
}

Student.prototype.courseLoad = function() {
	var courseLoad = {};

	for(var i = 0; i < this.courses.length; i++) {
		if (courseLoad[this.courses[i].department]) {
			courseLoad[this.courses[i].department] += this.courses[i].credits;
		} else {
			courseLoad[this.courses[i].department] = this.courses[i].credits;
		}
	}
	return courseLoad;
}


function Course (name, department, credits, schedule) {
	this.name = name;
	this.department = department;
	this.credits = credits;
	this.studentsList = [];
	this.schedule = schedule;
}

Course.prototype.students = function() {
	return this.studentsList;
}

Course.prototype.addStudent = function(student) {
	this.studentsList.push(student);
}

Course.prototype.conflictsWith = function(otherCourse) {

	if (this.schedule.timeBlock == otherCourse.schedule.timeBlock) {

		for (var i = 0; i < this.schedule.days.length; i++) {
			for (var j = 0; j < otherCourse.schedule.days.length; j++) {
				if (this.schedule.days[i] == otherCourse.schedule.days[j]) {
					return true;
				}
			}
		}
	}
	return false;
}


s1 = new Student("Kyungmin", "Kim");
s2 = new Student("Dean", "Yang");

d1 = {
	days: ["monday", "wednesday", "thursday"],
	timeBlock: 1
}

d2 = {
	days: ["monday", "wednesday", "thursday"],
	timeBlock: 5
}

c1 = new Course("Javascript", "Computer Science", 4, d1);
c2 = new Course("Ruby", "Computer Science", 4, d2);
c3 = new Course("SQL", "Computer Science", 4, d1);

s1.enroll(c1);
s1.enroll(c2);
s2.enroll(c1);
s1.enroll(c3);

console.log(c1.students());
console.log("");
console.log(c2.students());
console.log("");
console.log(s1.courseLoad());