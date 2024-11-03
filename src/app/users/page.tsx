import React from 'react'
interface student{
  "id":number,
  "name":string,
  "school":string
  "trade":string,
  "age":number,

}

const user = async() => {
  const res = await fetch('http://localhost:3001/student/find');
  const students:student[] = await res.json();
  return (
    <div>
      <h1>student page</h1>
      {new Date().toLocaleTimeString()}
      <table>
        {students.map(student=> <li key={student.id}> name {student.name} , school {student.school}, age {student.age}</li>)}
      </table>

    </div>
  )
}

export default user
