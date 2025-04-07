import React from "react";

const StudentReport = ({ student, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-5 w-11/12 max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-xl font-semibold text-gray-800">
            Relatório do Aluno
          </h2>
          <button
            className="text-2xl text-gray-600 hover:text-gray-800"
            onClick={onClose}
          >
            ×
          </button>
        </div>

        <div className="mb-5">
          <h3 className="text-lg font-medium text-gray-800">{student.name}</h3>
          <p className="text-gray-600">Matrícula: {student.id}</p>
        </div>

        <div className="mb-5">
          <h3 className="text-lg font-medium text-gray-800 mb-3">
            Estatísticas de Desempenho
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gray-50 rounded-lg p-3 text-center">
              <h4 className="text-sm text-gray-600 mb-1">
                Quizzes Respondidos
              </h4>
              <p className="text-xl font-bold text-blue-600">
                {student.completedQuizzes}
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-3 text-center">
              <h4 className="text-sm text-gray-600 mb-1">Quizzes Pendentes</h4>
              <p className="text-xl font-bold text-blue-600">
                {student.pendingQuizzes}
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-3 text-center">
              <h4 className="text-sm text-gray-600 mb-1">Taxa de Acerto</h4>
              <p className="text-xl font-bold text-blue-600">
                {student.successRate}%
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-3 text-center">
              <h4 className="text-sm text-gray-600 mb-1">Média de Notas</h4>
              <p className="text-xl font-bold text-blue-600">
                {student.averageGrade}%
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium text-gray-800 mb-3">
            Histórico de Quizzes
          </h3>
          <div className="space-y-2">
            {student.quizHistory.map((quiz, index) => (
              <div
                key={index}
                className="flex justify-between items-center bg-gray-50 rounded-lg p-3"
              >
                <span className="text-gray-800">{quiz.name}</span>
                <span className="font-bold text-blue-600">{quiz.grade}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentReport;
