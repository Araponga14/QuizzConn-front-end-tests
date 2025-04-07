import React, { useState } from "react";
import ClassStats from "../components/ClassStats";
import StudentReport from "../components/popups/StudentReport";

// Dados mockados para exemplo
const mockData = {
  totalStudents: 30,
  submittedQuizzes: 15,
  openQuizzes: 5,
  averageGrade: 75,
  students: [
    {
      id: 1,
      name: "João Silva",
      pendingQuizzes: 2,
      completedQuizzes: 8,
      successRate: 85,
      averageGrade: 82,
      quizHistory: [
        { name: "Quiz 1", grade: 90 },
        { name: "Quiz 2", grade: 75 },
        { name: "Quiz 3", grade: 80 },
      ],
    },
    {
      id: 2,
      name: "Maria Santos",
      pendingQuizzes: 1,
      completedQuizzes: 9,
      successRate: 92,
      averageGrade: 88,
      quizHistory: [
        { name: "Quiz 1", grade: 95 },
        { name: "Quiz 2", grade: 85 },
        { name: "Quiz 3", grade: 85 },
      ],
    },
    // Adicione mais alunos conforme necessário
  ],
};

function Class() {
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [showStudentReport, setShowStudentReport] = useState(false);

  const handleStudentClick = (student) => {
    setSelectedStudent(student);
    setShowStudentReport(true);
  };

  const handleCloseReport = () => {
    setShowStudentReport(false);
    setSelectedStudent(null);
  };

  return (
    <div className="p-5 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 mb-8">Minha Classe</h1>

      <ClassStats
        totalStudents={mockData.totalStudents}
        submittedQuizzes={mockData.submittedQuizzes}
        openQuizzes={mockData.openQuizzes}
        averageGrade={mockData.averageGrade}
      />

      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-5">
          Lista de Alunos
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {mockData.students.map((student) => (
            <div
              key={student.id}
              className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => handleStudentClick(student)}
            >
              <h3 className="text-lg font-medium text-gray-800 mb-2">
                {student.name}
              </h3>
              <p className="text-gray-600">
                Quizzes Pendentes: {student.pendingQuizzes}
              </p>
              <p className="text-gray-600">
                Quizzes Completados: {student.completedQuizzes}
              </p>
            </div>
          ))}
        </div>
      </div>

      {showStudentReport && selectedStudent && (
        <StudentReport student={selectedStudent} onClose={handleCloseReport} />
      )}
    </div>
  );
}

export default Class;
