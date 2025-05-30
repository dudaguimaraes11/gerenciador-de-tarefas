let tarefas = ['Estudar JavaScript', 
    'Fazer exercícios de matemática',
     'Lavar a louça', 
     'Comprar mercado', 
     'Ir à academia', 
     'Ler um livro', 
     'Fazer revisão para o teste', 
     'Limpar o quarto',
      'Estudar para concurso', 
      'Organizar o computador'];

// Adiciona dois novos elementos 

tarefas.push (`Ir à academia`, `Revisar matemática`);
console.log (`Depois do push: ${tarefas}.`); 

// Remove o último elemento

let tarefaRemovida = tarefas.pop();

console.log("Depois do pop:", tarefas);

console.log("Tarefa removida:", tarefaRemovida); 