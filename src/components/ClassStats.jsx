import React from "react";

const ClassStats = ({
  totalStudents,
  submittedQuizzes,
  openQuizzes,
  averageGrade,
}) => {
  return (
    <div className="bg-white rounded-lg p-5 shadow-md mb-5">
      <h2 className="text-xl font-semibold text-gray-800 mb-5">
        Estatísticas da Classe
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-gray-50 rounded-lg p-4 text-center">
          <h3 className="text-gray-600 text-sm mb-2">Total de Alunos</h3>
          <p className="text-2xl font-bold text-blue-600">{totalStudents}</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-4 text-center">
          <h3 className="text-gray-600 text-sm mb-2">Quizzes Submetidos</h3>
          <p className="text-2xl font-bold text-blue-600">{submittedQuizzes}</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-4 text-center">
          <h3 className="text-gray-600 text-sm mb-2">Quizzes em Aberto</h3>
          <p className="text-2xl font-bold text-blue-600">{openQuizzes}</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-4 text-center">
          <h3 className="text-gray-600 text-sm mb-2">Média das Notas</h3>
          <p className="text-2xl font-bold text-blue-600">{averageGrade}%</p>
        </div>
      </div>
    </div>
  );
};

export default ClassStats;
