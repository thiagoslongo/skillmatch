const candidato = {
        nome: 'Thiago', 
        area: 'Front-End',
        habilidades: ['JavaScript', 'React', 'GitHub', 'Lógica de Programação', 'Banco de Dados', 'Kanban'],
        experienciaMeses: 2
    };

const vagas = [
    {
        id: 1,
        empresa: 'NewTech',
        cargo: 'Desenvolvedor Front-End Júnior', 
        requisitos:['JavaScript', 'GitHub', 'React', 'Lógica de Programação', 'Banco de Dados'],
        salario: 2700,
        modalidade: 'Remoto'
    },
    {
        id: 2,
        empresa: 'LabsCode',
        cargo: 'Estágio Front-End', 
        requisitos:['JavaScript', 'GitHub', 'Kanban'],
        salario: 1500,
        modalidade: 'Presencial'
    },
    {
        id: 3,
        empresa: 'NextSolutions',
        cargo: 'Programador Front-End', 
        requisitos:['React', 'JavaScript', 'Arrays', 'Objetos', 'POO', 'Funções'],
        salario: 3500,
        modalidade: 'Híbrido'
    },
]

vagas.forEach(function(vaga) {
    const comparaHabilidades = candidato.habilidades.filter(habilidades => vaga.requisitos.includes(habilidades));
    const habilidadeFaltantes = vaga.requisitos.filter(requisitos => !candidato.habilidades.includes(requisitos));

    const qtdeRequiAtend = comparaHabilidades.length;
    const totalReqVaga = vaga.requisitos.length;

    const compatibilidade = (qtdeRequiAtend / totalReqVaga) * 100;

    let classificao;

    if (compatibilidade >= 80) {
        classificao = 'Alta compatibilidade'

    } else if (compatibilidade >= 50 ) {
        classificao = 'Média compatibilidade'

    } else {
        classificao = 'Baixa compatibilidade'

}

    console.log('Empresa: ' + vaga.empresa)
    console.log('Cargo: ' + vaga.cargo)
    console.log('Compatibilidade: ' + compatibilidade + '%')
    console.log('Habilidades Encontradas: ' + comparaHabilidades)
    console.log('Habilidades faltantes: ' + habilidadeFaltantes )
    console.log('Classificação: ' + classificao)
    console.log('----------------------')

});

// Exemplo saída no console:
//Para a vaga da WebSolutions, faltam:  
//habilidades....
//habilidades....
//habilidades....


 
