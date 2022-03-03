import './students.css';
import { useState, useEffect } from "react";

function Students() {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/students")
          .then((response) => response.json())
          .then(students => {
            setStudents(students); 
            console.log('Students fetched...', students);
            });
          }, []);

  return (
    <div className="Students">
        <h2>Students</h2>
        <ul>
            {students.map(student =>
            <li key={student.id}> { student.firstname} {student.lastname} </li>
            )}
        </ul>
      
    </div>
  );
}

export default Students;
