const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    section: [{
            sectionNum: 1,
            roomNum: 'STC 353',
            enrolled: 26,
            days: 'TTh',
            instructor: 'Bro T'
        },
        {
            sectionNum: 2,
            roomNum: 'STC 347',
            enrolled: 28,
            days: 'TTh',
            instructor: 'Sis A'
        }
    ],
    editStudent: function(number, job) {
        if (number <= this.section.length) {
            index = number - 1;
            section = this.section[index];
            if (job === "enroll") {
                section.enrolled += 1;
            } else {
                section.enrolled -= 1;
            }
            renderTable(this.section);
        }
    }
};

function setName(nameObj, courseObj) {
    document.querySelector("#courseName").innerHTML = nameObj;
    document.querySelector("#courseCode").innerHTML = courseObj;
}

setName(aCourse.name, aCourse.code);



function renderTable(sections) {
    const html = sections.map((section) => `            <tr>
    <td>${section.sectionNum}</td>
    <td>${section.roomNum}</td>
    <td>${section.enrolled}</td>
    <td>${section.days}</td>
    <td>${section.instructor}</td>
</tr>`);
    document.querySelector("#sections").innerHTML = html.join("");
}

renderTable(aCourse.section);
document.querySelector("#enrollStudent").addEventListener("click", function() {
    let number = document.querySelector("#sectionNumber").value;
    aCourse.editStudent(number, "enroll");
});
document.querySelector("#dropStudent").addEventListener("click", function() {
    let number = document.querySelector("#sectionNumber").value;
    aCourse.editStudent(number, "drop");
});