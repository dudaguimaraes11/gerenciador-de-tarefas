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

// Etapa 1: Adicionando Novas Tarefas

tarefas.push (`Ir à academia`, `Revisar matemática`);
console.log (`Depois do push: ${tarefas}.`); 

// Etapa 2: Removendo a Última Tarefa

let tarefaRemovida = tarefas.pop();

console.log("Depois do pop:", tarefas);

console.log("Tarefa removida:", tarefaRemovida); 

// Etapa 3: Adicionando uma Tarefa no Início

tarefas.unshift('Regar a planta');

console.log("Depois do unshift:", tarefas);

// Etapa 4: Removendo a Primeira Tarefa

let primeiraTarefaRemovida = tarefas.shift();

console.log("Depois do shift:", tarefas);

console.log("Primeira tarefa removida:", tarefas);

// Etapa 5: Verificando se uma Tarefa Existe

console.log(`A lista de tarefas inclui ler um livro? ${tarefas.includes("Ler um livro")}`);

console.log(`A lista de tarefas inclui limpar o quarto? ${tarefas.includes("Limpar o quarto")}`);
