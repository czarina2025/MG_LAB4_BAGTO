type StudentListProps = {
    students: string[];
  };
  
  const StudentList = ({ students }: StudentListProps) => {
    return (
      <>
        <h4>Registered Students:</h4>
        <ul>
          {students.map((student, index) => (
            <li key={index}>{student}</li>
          ))}
        </ul>
      </>
    );
  };
  
  export default StudentList;
  