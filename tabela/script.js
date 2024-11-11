let contadorAlunos = 0; // Inicializando com o número total de alunos
let somaDasMedias = 0; // Inicializa a soma das médias
let somaDasFrequencias = 0; // Inicializa a soma das frequências

function limite(notasAlunos, freqn) {
    let nota1 = notasAlunos[0].value;
    let nota2 = notasAlunos[1].value;
    let nota3 = notasAlunos[2].value;
    let freqValor = Number.parseFloat(freqn.value);

    if (nota1 > 100 || nota1 < 0){
        return false;
    }
    if (nota2 > 100 || nota2 < 0){
        return false;
    }
    if (nota3 > 100 || nota3 < 0){
        return false;
    }
    if (freqValor > 100 || freqValor < 0){
        return false;
    } 
    return true;
}

function addTable(event) {
    event.preventDefault(); // Não faz o evento de recarregar a página

    // Variáveis do input
    let nameAluno = document.getElementById('name_aluno');
    let notasAlunos = document.querySelectorAll('.notas');
    let freqn = document.getElementById('freq');
    if (limite(notasAlunos, freqn)){
        
            // Nome dos alunos
            let newLine = document.createElement('tr');
            let nome = document.createElement('td');
            nome.innerText = nameAluno.value;
        
            // Notas alunos
            let nota1 = document.createElement('td');
            let nota2 = document.createElement('td');
            let nota3 = document.createElement('td');
            nota1.innerText = notasAlunos[0].value;
            nota2.innerText = notasAlunos[1].value;
            nota3.innerText = notasAlunos[2].value;
        
            // Frequência alunos
            let frequencia = document.createElement('td');
            let freqValor = Number.parseFloat(freqn.value);
            frequencia.innerText = freqValor + '%';
        
            // Média da nota dos alunos
            let mediaAluno = document.createElement('td');
            let media = Math.floor((Number.parseFloat(notasAlunos[0].value) + Number.parseFloat(notasAlunos[1].value) + Number.parseFloat(notasAlunos[2].value)) / 3);
            mediaAluno.innerText = media;
        
            // Atualiza a soma das médias
            somaDasMedias += media;
        
            // Atualiza a soma das frequências
            somaDasFrequencias += freqValor;
        
            let situacao = document.createElement('td');
            if (media < 60 || freqValor < 75) {
                situacao.innerText = "Reprovado";
            } else {
                situacao.innerText = "Aprovado";
            }
        
            // Variáveis do total da turma
            let totalAlunos = document.getElementById('total_alunos');
            let mediaTurma = document.getElementById('media_turma');
            let freqTurma = document.getElementById('freq_turma');
        
            newLine.appendChild(nome);
            newLine.appendChild(nota1);
            newLine.appendChild(nota2);
            newLine.appendChild(nota3);
            newLine.appendChild(mediaAluno);
            newLine.appendChild(frequencia);
            newLine.appendChild(situacao);
            document.getElementById('tabela').appendChild(newLine);
        
            // Atualiza o total de alunos
            contadorAlunos++;
            totalAlunos.innerText = `Total de Alunos: ${contadorAlunos}`;
        
            // Calcula e atualiza a média da turma
            let mediaTotal = somaDasMedias / contadorAlunos;
            mediaTurma.innerText = `Média da turma: ${mediaTotal.toFixed(1)}`;
        
            // Calcula e atualiza a frequência média da turma
            let freqMedia = somaDasFrequencias / contadorAlunos;
            freqTurma.innerText = `Frequência da turma: ${freqMedia.toFixed(1)}%`;

    } else{
        window.alert("Valores Invalidos!");
    }
}

// Adiciona o evento ao botão de submissão
document.getElementById('submit_buttom').addEventListener('click', addTable);