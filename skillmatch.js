const candidato = {
        nome: 'Thiago', 
        area: 'Front-End',
        habilidades: ['JavaScript', 'GitHub', 'Lógica de Programação', 'Kanban'],
        experienciaMeses: 2
    };

const vagas = [
    {
        id: 1,
        empresa: 'NewTech',
        cargo: 'Desenvolvedor Front-End Júnior', 
        requisitos:['JavaScript', 'GitHub', 'Lógica de Programação'], 
        salario: 2700,
        modalidade: 'Remoto'
    },
    {
        id: 2,
        empresa: 'LabsCode',
        cargo: 'Estágio Front-End', 
        requisitos:['JavaScript', 'React', 'GitHub', 'Kanban'],
        salario: 1500,
        modalidade: 'Presencial'
    },
    {
        id: 3,
        empresa: 'NextSolutions',
        cargo: 'Programador Front-End', 
        requisitos:['JavaScript', 'Arrays', 'Objetos','Funções'],
        salario: 3500,
        modalidade: 'Híbrido'
    },
]

let maiorCompatibilidade = 0;
let melhorVaga;
let recomendacaoEstudo = [];

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

    if (compatibilidade > maiorCompatibilidade) {
        melhorVaga = vaga;
        maiorCompatibilidade = compatibilidade;
    }

    recomendacaoEstudo = vagas.reduce((acumular, vaga) => {
    const faltantes = vaga.requisitos.filter(req => 
        !candidato.habilidades.includes(req)
    );
    return acumular.concat(faltantes);
    }, []);


    console.log('Empresa: ' + vaga.empresa)
    console.log('Cargo: ' + vaga.cargo)
    console.log('Compatibilidade: ' + compatibilidade.toFixed(0) + '%')
    console.log('Habilidades Encontradas: ' + comparaHabilidades)
    console.log('Habilidades faltantes: ' + habilidadeFaltantes )
    console.log('Classificação: ' + classificao)
    console.log('----------------------')

});

    console.log('Vaga mais compatível:');
    console.log(melhorVaga.empresa + ' - ' + melhorVaga.cargo);
    console.log('Compatibilidade: ' + maiorCompatibilidade + '%');
    console.log('----------------------')

    console.log('Recomendação de estudo:');
    console.log('Priorizar estudar ' + recomendacaoEstudo + ', ' + 'pois esses conteúdos aparecem nas vagas analisadas.');
    console.log('----------------------')

    const vagaRemota = vagas.find(vaga => vaga.modalidade === 'Remoto');
    console.log('Vaga remota encontrada: ' + vagaRemota.empresa + ' - ' + vagaRemota.cargo);
    console.log('----------------------')

class Vaga {
    constructor(empresa, cargo, requisitos, salario, modalidade) {
        this.empresa = empresa;
        this.cargo = cargo;
        this.requisitos = requisitos;
        this.salario = salario;
        this.modalidade = modalidade;
    }

    exibirResumo() {
        return `${this.cargo} na empresa ${this.empresa}`;
    }
}

const vagaJunior = new Vaga(
    'BigTech Tecnology',
    'Junior FullStack', 
    ['React', 'Node', 'SQL', 'API'],
    '4.000',
    'Híbrido' 
);



class VagaFrontEnd extends Vaga {
    constructor(empresa, cargo, requisitos, salario, modalidade, nivel) {
        super(empresa, cargo, requisitos, salario, modalidade);
        this.nivel = nivel;
    }
    
    exibirNivel(){
        return `Nivel da Vaga: ${this.nivel}`;
    }
}

const vagaFrontReactNative = new VagaFrontEnd(
    'Promisse Tech',
    'Front-End', 
    ['React', 'ReactNative','Tailwind','API'],
    '6.500',
    'Remoto',
    'Senior'
)

 

function finalizarAnalise(nomeCandidato, callback) {
    console.log('Análise Finalizada');
    callback(nomeCandidato);
}


function exibirMensagemFinal(nome) {
    console.log(`${nome}, revise suas habilidades faltantes e atualize seu plano de estudos.`);
}


function criarContadorDeanalises(){
    let total = 0;

    return function() {
        total++;
        return total;
    };
}



function buscarVagasSimuladas() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(vagas);
        }, 1000);
    });
}

async function iniciarSistema() {
    const vagasCarregadas = await buscarVagasSimuladas();
    console.log('Vagas carregadas com sucesso!');
    console.log(vagasCarregadas);
}

iniciarSistema();
finalizarAnalise(candidato.nome, exibirMensagemFinal);

const contarAnalise = criarContadorDeanalises();
console.log('Total de análises: ' + contarAnalise());

console.log(vagaJunior.exibirResumo());
console.log(vagaFrontReactNative.exibirResumo());
console.log(vagaFrontReactNative.exibirNivel());