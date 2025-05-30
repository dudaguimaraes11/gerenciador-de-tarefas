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

console.log(`A lista de tarefas inclui Ir à academia? ${tarefas.includes("Ir à academia")}`);

// Etapa 6: Transformando a Lista em String

console.log(`Lista de tarefas como string: ${tarefas.join(', ')}`);

// Etapa 7: Extraindo uma Parte da Lista

console.log(`Extrai partes da lista (índices 2 a 4): ${tarefas.slice(2, 5)}`); 

// Etapa 8: Alterando a Lista

console.log(`Antes do splice: ${tarefas.join(', ')}`);

let tarefaQueFoiRemovida = tarefas.splice(4, 1);

console.log(`Depois do splice: ${tarefas.join(', ')}`);

console.log(`Elemento removido: ${tarefaQueFoiRemovida.join(', ')}`);

tarefas[3] = "Encher a garrafa"; 

console.log (`Após substituir: ${tarefas}.`)

// Etapa 9: Concatenando Tarefas
let tarefas2 = ['Cuidar da irmã', 'Assistir um filme'];

console.log(`Playlist combinada: ${tarefas.concat(tarefas2)}`);

// Etapa 10: Transformando as Tarefas

let adicionarPalavra = tarefas.map(tarefas => "Fazer:" + tarefas)

console.log(`Adicionar palavra ao array com map(): ${adicionarPalavra}`);

// Etapa 11: Filtrando Tarefas

let tarefasFiltradas = tarefas.filter(tarefas => tarefas.length > 15);

console.log("Lista de tarefas filtrada (músicas com mais de 15 letras):", tarefasFiltradas);
