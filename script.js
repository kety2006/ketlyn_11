const perguntas = [
    {
    enunciado: "Assim que saiu da escola você precisa escolher uma faculdade. Qual seu primeiro pensamento?",
    alternativas: [
    "Isso é assustador!",
    "Isso é maravilhoso!"
    ]
    },
    {
    enunciado: "Com a descoberta desta tecnologia, chamada Inteligência Artificial, uma professora da faculddade decidiu passar um trabalho sobre o uso de IA em sala de aula. Qual atitude você toma?",
    alternativas: [
    "Utiliza uma ferramenta de busca na internet que utiliza IA para que ela ajude a encontrar informações relevantes para o trabalho e explique numa linguagem que facilite o entendimento.",
    "Escreve o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos próprios sobre o tema."
    ]
    },
    {
    enunciado: "Após a elaboração do trabalho escrito, a professora realizou um debate entre a turma para entender como foi realizada a pesquisa e escrita. Nesse debate, como você se posiciona?",
    alternativas: [
    "Defende a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
    "Me preocupo com as pessoas que perderão seus empregos para máquinas e defendem a importância de proteger os trabalhadores."
    ]
    },
    {
    enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre o debate. E agora o que voce faz?",
    alternativas: [
    "Crio uma imagem utilizando uma plataforma de design como o Paint.",
    "Criar uma imagem utilizando um gerador de imagem de IA."
    ]
    
    },
    {
    enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz?",
    alternativas: [
    "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
    "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial."
    ]
    }
    ];
    let atual = 0;
    let perguntaAtual;
    const caixaPerguntas = document.getElementById('caixaPerguntas');
    const alternativasContainer = document.getElementById('alternativas');
    function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    alternativasContainer.innerHTML = '';
    perguntaAtual.alternativas.forEach((alternativa, index) => {
    const button = document.createElement('button');
    button.textContent = alternativa;
    button.addEventListener('click', () => {
    atual++;
    if (atual < perguntas.length) {
    mostraPergunta();
    } else {
    caixaPerguntas.textContent = 'Você completou o questionário!';
    alternativasContainer.innerHTML = '';
    }
    });
    alternativasContainer.appendChild(button);
    });
    }
    mostraPergunta();