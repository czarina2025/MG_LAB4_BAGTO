type StudentListProps = {
  students: string[];
};

const StudentList: React.FC<StudentListProps> = ({ students }) => {
  return (
    <ul>
      {students.map((student, index) => (
        <li key={index}>{student}</li>
      ))}
    </ul>
  );
};

export default StudentList;
