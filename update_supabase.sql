-- =========================================================================
-- ATUALIZAÇÃO DO BANCO DE DADOS SUPABASE (PROJETO: Retiro-PWA)
-- =========================================================================
-- Cole todo este código no SQL Editor do Supabase e clique em RUN
-- =========================================================================

INSERT INTO public.retreat_state (id, payload, updated_at)
VALUES (
  'default',
  '{
  "retreatTitle": "Retiro de Casais",
  "retreatSubtitle": "Roteiro & Organização Geral (20 a 22 de Novembro)",
  "events": [
    {
      "id": "sex-1830",
      "day": "sexta",
      "time": "18h30",
      "title": "ACOLHIDA NO SALÃO DA V. AMÉLIA",
      "responsible": "Váleria e Denis, Cida e Beranei",
      "teamId": "team-acolhida",
      "location": "Salão da Vila Amélia",
      "details": [
        "Equipe de acolhida no salão da V. Amélia (Váleria e Denis, Cida e Beranei)."
      ]
    },
    {
      "id": "sex-1900",
      "day": "sexta",
      "time": "19h00",
      "title": "RECEPÇÃO DOS NEOS",
      "responsible": "Casal Coordenador",
      "teamId": "team-coord",
      "location": "Salão da Vila Amélia",
      "details": [
        "1- Organizar as malas dos néos com as etiquetas e colocar no caminhão;",
        "2- Ir uma pessoa com o motorista do caminhão; Chegada do caminhão na casa retiro quem estiver lá ajudar com as bagagens para os quartos, e pôr fim apagar todas as luzes;",
        "3- Confirmar a presença de todos os néos;",
        "4- Casal coordenador se apresenta para os casais;",
        "5- Entregar o crachá dos néos;",
        "6- Convidar os NEOS para um lanche.",
        "Nota: Organizar quem pode ficar de maleiro no salão, e quem vai ficar de maleiro na casa de retiro."
      ]
    },
    {
      "id": "sex-1930-a",
      "day": "sexta",
      "time": "19h30",
      "title": "EMBARQUE DOS NEOS",
      "responsible": "Casais Presentes",
      "teamId": "team-todos",
      "songIds": [
        "song-utopia"
      ],
      "details": [
        "1- Cantar música durante o embarque dos néos;",
        "2- E os casais que vão juntos no ônibus. (Das equipe);",
        "3- No ônibus vão conversando e cantando até a casa;",
        "4- No portão da casa de retiro um casal passa mensagem/liga informando que estão chegando."
      ]
    },
    {
      "id": "sex-1930-b",
      "day": "sexta",
      "time": "19h30",
      "title": "CASA DE RETIRO - PREPARAÇÃO",
      "responsible": "Casal Sineteiro, Boa Ordem, Espiritualidade e Decoração",
      "teamId": "team-sineteiro",
      "location": "Casa de Retiro",
      "details": [
        "1- Colocar as estacas ou fitas limitadoras (Casal Sineteiro);",
        "2- Verificar se está tudo organizado. Com as cadeiras, os bebedouros, copos e lixeiras na entrada da sala de palestras (Casais Boa Ordem);",
        "3- Colocar papel nos banheiros, sabonetes e toalhas de papel (Casais Boa Ordem);",
        "4- Organizar a capela (Casal Espiritualidade e Casal Decoração);",
        "5- Colocar sobre o altar a bandeja com os crucifixos (Casal Espiritualidade);",
        "6- Colocar os pezinhos bagunçado no corredor; 4- Colocar galho seco do lado do altar (Casal Espiritualidade e Casal Decoração)."
      ]
    },
    {
      "id": "sex-2030",
      "day": "sexta",
      "time": "20h30",
      "title": "CHEGADA DO ÔNIBUS NA CASA DE RETIRO",
      "responsible": "Casal Espiritualidade",
      "teamId": "team-espiritualidade",
      "location": "Entrada / Capela da Casa de Retiro",
      "details": [
        "1- Todos preparados na Capela;",
        "2- Casal espiritualidade – vinde espirito santo casais abençoam-se com o sinal da cruz (Casal Espiritualidade);",
        "3- Convidar todos os néos até a entrada da Igreja."
      ]
    },
    {
      "id": "sex-2040",
      "day": "sexta",
      "time": "20h40",
      "title": "LER A MENSAGEM NO ESCURO",
      "responsible": "Nelo e Cleuza",
      "teamId": "team-coord",
      "location": "Capela / Recepção",
      "isHighlight": true,
      "details": [
        "1- Leitura da Mensagem no Escuro: Nelo e Cleuza;",
        "2- Dar o toque de silêncio (Casal Boa Ordem);",
        "3- Executar o cântico escolhido (Equipe Alegria);",
        "4- Abrir as portas e convidar os NEOS a entrarem; 3- Acender as luzes da recepção e da casa de retiro (Equipe Alegria);",
        "5- Dar boas vindas, perguntar como foi a viagem (Casal Coordenador);",
        "6- Liberar os NEOS para visita aos quartos; 3- Chama os NEOS pelos nomes (Casal Coordenador);",
        "7- Um casal da equipe acompanha os NEOS até o quarto;",
        "8- Deixar o casal no quarto para verificar se as bagagens estão correta (Casais da equipe)."
      ]
    },
    {
      "id": "sex-2130",
      "day": "sexta",
      "time": "21h30",
      "title": "LOCAL DE DESCONTRAÇÃO - AO PÉ DA ESCADA",
      "responsible": "Casal Sineteiro, Ligação, Alegria e Coordenador",
      "teamId": "team-alegria",
      "songIds": [
        "song-utopia"
      ],
      "location": "Pé da Escada",
      "details": [
        "1- Verificar se não ficou ninguém no quartos (Casal Sineteiro);",
        "2- Verificar se o jantar está pronto (Casal Ligação);",
        "3- Iniciar a animação (Equipe Alegria);",
        "4- Convidar a todos para dirigirem-se ao refeitório (Casal Coordenador)."
      ]
    },
    {
      "id": "sex-2145",
      "day": "sexta",
      "time": "21h45",
      "title": "REFEITÓRIO - JANTAR",
      "responsible": "Casal Coordenador",
      "teamId": "team-coord",
      "songIds": [
        "song-bencao-alimentos"
      ],
      "location": "Refeitório",
      "details": [
        "1- Fazer as orações de agradecimento – pelos alimentos (Casal Coordenador);",
        "2- Após o jantar convidar a todos para dirigirem -se a sala de palestras (Casal Coordenador)."
      ]
    },
    {
      "id": "sex-2215",
      "day": "sexta",
      "time": "22h15",
      "title": "SALA DE PALESTRAS - ABERTURA E REGRAS",
      "responsible": "Casal Ligação & Casal Coordenador",
      "teamId": "team-coord",
      "location": "Sala de Palestras",
      "details": [
        "1- Levar os sacos plástico com etiquetas para recolher os relógios, celulares, aguardar aviso do casal coordenador. (SAQUINHOS PLÁSTICOS - Casal Ligação);",
        "2- Discursos de abertura (Casal Coordenador);",
        "3- Apresentar alguns casais da interna e informar aos néos sua missão (boa ordem, bem estar, mercadinho, sineteiro e alegria);",
        "4- Informar os NEOS sobre as regras da casa, (fazer silêncio por que os freis moram aqui);",
        "5- Informar os NEOS que não façam perguntas e não batam palmas durante as palestras;",
        "6- Não ultrapassar as fitas de marcação e usar as lixeiras de bituca de cigarros;",
        "7- Convidar a todos para dirigirem-se a capela após o ok do casal ligação (Casal Coordenador);",
        "8- Verificar-se se está tudo ok na capela para o momento (Casal Espiritualidade);",
        "9- Liberar a secretaria a colocar a lembranças nos quartos (Casal Ligação Interna);",
        "10- Definir com casal coordenador quem trará os pães na manhã.??? (Casal Ligação Interna);",
        "11- Preparar para um momento de adoração em torno de uns minutos (Equipe Alegria e Espiritualidade)."
      ]
    },
    {
      "id": "sex-2240",
      "day": "sexta",
      "time": "22h40",
      "title": "LER O FILME DA VIDA",
      "responsible": "Osmar",
      "teamId": "team-coord",
      "songIds": [
        "song-boa-noite"
      ],
      "location": "Capela / Sala de Palestras",
      "isHighlight": true,
      "details": [
        "1- Leitura do \"Filme da Vida\" por Osmar;",
        "2- Executar a música boa noite meu jesus (Equipe Alegria);",
        "3- Pedir para levantarem; 2- convidar a todos para dirigirem-se aos seus quartos (Casal Coordenador);",
        "4- Lembrar que o mercadinho está aberto para suprir suas necessidades (Casal Coordenador);",
        "5- Informar que ao toque da sineta terão um tempo para dirigirem-se ao local de descontração, para início das atividades do sábado (Casal Coordenador);",
        "6- Verifique se os néos se recolheram em seus quartos (Casal Bem Estar)."
      ]
    },
    {
      "id": "sex-2300",
      "day": "sexta",
      "time": "23h00",
      "title": "MONTAGEM DA MESA REDONDA",
      "responsible": "Equipe Completa",
      "teamId": "team-todos",
      "details": [
        "1- Montagem da mesa redonda, ter em mãos a ficha dos néos (Equipe Completa)."
      ]
    },
    {
      "id": "sab-0600",
      "day": "sabado",
      "time": "06h00",
      "title": "DESPERTAR DA INTERNA",
      "responsible": "Casal Sineteiro",
      "teamId": "team-sineteiro",
      "details": [
        "1- Acordar a interna com leve toque na porta;",
        "2- Aguardar a resposta que acordaram."
      ]
    },
    {
      "id": "sab-0615",
      "day": "sabado",
      "time": "06h15",
      "title": "INTERNA: MOMENTO DE ORAÇÃO NA CAPELA",
      "responsible": "Equipe Completa",
      "teamId": "team-todos",
      "location": "Capela",
      "details": [
        "1- Interna momento de oração na capela."
      ]
    },
    {
      "id": "sab-0630",
      "day": "sabado",
      "time": "06h30",
      "title": "DESPERTAR DOS NEOS",
      "responsible": "Casal Decoração & Casal Sineteiro",
      "teamId": "team-sineteiro",
      "details": [
        "1- Organizar a mesa do café (Casal Decoração);",
        "2- Acordar os néos através da sineta (Casal Sineteiro);",
        "3- Estipular tempo e verificar se não ficou ninguém no quartos (+/- 10 minutos)."
      ]
    },
    {
      "id": "sab-0650",
      "day": "sabado",
      "time": "06h50",
      "title": "LOCAL DA DESCONTRAÇÃO PÉ DA ESCADA",
      "responsible": "Equipe Alegria, Espiritualidade, Ligação, Coordenador, Boa Ordem",
      "teamId": "team-alegria",
      "songIds": [
        "song-utopia"
      ],
      "location": "Pé da Escada",
      "details": [
        "1- Músicas, conforme os neos vão descendo (Equipe Alegria);",
        "2- Preparar a capela para a oração da manhã (Casal Espiritualidade);",
        "3- Avisar que a capela está pronta (Casal Ligação);",
        "4- Convidar todos para irem a capela (O Casal Coordenador);",
        "5- Colocar as lembranças nas carteiras da sala de palestras: (PLANO DE DEUS) a definir (Casal Boa Ordem)."
      ]
    },
    {
      "id": "sab-0700",
      "day": "sabado",
      "time": "07h00",
      "title": "ORAÇÃO NA CAPELA & MEDITAÇÃO FILHO PRÓDIGO",
      "responsible": "Rogério e Nice",
      "teamId": "team-espiritualidade",
      "location": "Capela",
      "isHighlight": true,
      "details": [
        "1- Músicas (Equipe Alegria);",
        "2- Oração da manhã (Casal Espiritualidade);",
        "3- MEDITAÇÃO FILHO PRÓDIGO (LUCAS 15,11-32) por Rogério e Nice;",
        "4- Tem folha com a mensagem da leitura bíblica;",
        "5- Convidar a todos para se dirigirem até o local de descontração (próx. sala de palestra) (Casal Coordenador)."
      ]
    },
    {
      "id": "sab-0725",
      "day": "sabado",
      "time": "07h25",
      "title": "LOCAL DE DESCONTRAÇÃO",
      "responsible": "Casal Ligação & Equipe Alegria",
      "teamId": "team-alegria",
      "location": "Próx. Sala de Palestras",
      "details": [
        "1- Confirmar se o café está pronto (Casal Ligação);",
        "2- Música de animação (Equipe Alegria)."
      ]
    },
    {
      "id": "sab-0730",
      "day": "sabado",
      "time": "07h30",
      "title": "REFEITÓRIO - CAFÉ DA MANHÃ",
      "responsible": "Equipe Alegria & Casal Coordenador",
      "teamId": "team-alegria",
      "songIds": [
        "song-bencao-alimentos"
      ],
      "location": "Refeitório",
      "details": [
        "1- Cantar músicas e as orações de bênção de agradecimentos dos alimentos (Equipe Alegria);",
        "2- Avisar que haverá um intervalo de 5 minutos (Casal Coordenador);",
        "3- Avisar que ao toque da sineta dirigir-se a local de descontração (próx. sala de palestra) (Casal Coordenador)."
      ]
    },
    {
      "id": "sab-0800",
      "day": "sabado",
      "time": "08h00",
      "title": "FOTOGRAFIA",
      "responsible": "Casal Coordenador & Casal Audiovisual",
      "teamId": "team-cinefoto",
      "details": [
        "1- Convidar a todos para a foto (Casal Coordenador);",
        "2- Foto com os NEOS e equipe (Casal Audiovisual);",
        "3- Organizar um horário para a foto das equipes cozinha e secretaria (Casal Audiovisual)."
      ]
    },
    {
      "id": "sab-0825",
      "day": "sabado",
      "time": "08h25",
      "title": "SALA DE PALESTRAS - PREPARAÇÃO",
      "responsible": "Equipe Alegria, Bem Estar, Boa Ordem, Casais Espiritualidade",
      "teamId": "team-boa-ordem",
      "location": "Sala de Palestras",
      "details": [
        "1- Música de animação (Equipe Alegria);",
        "2- Colocar jarra com água para os palestrantes (Casal Bem Estar);",
        "3- Entregar a lembrança do palestrante para o casal coordenador (Casal Boa Ordem);",
        "4- Convidar o palestrante para ir até a capela para o momento de entrega (Casais Espiritualidade)."
      ]
    },
    {
      "id": "sab-0830",
      "day": "sabado",
      "time": "08h30",
      "title": "PALESTRA: PLANO DE DEUS",
      "responsible": "TOM",
      "teamId": "team-coord",
      "location": "Sala de Palestras",
      "isHighlight": true,
      "details": [
        "1- Apresentar o palestrante TOM (Casal Coordenador);",
        "2- Organizar os quartos, banheiros e corredores (Casal Boa Ordem);",
        "3- Organizar para o cafezinho, das 09:45h (Casais Mercadinho);",
        "4- Cumprimentar, agradecer e entregar uma lembrança ao final da palestra (Casal Coordenador);",
        "5- Convidar todos para cafezinho (Casal Coordenador);",
        "6- Convidar o palestrante para ir até a capela para o momento de entrega: PALESTRANTE DIÁCONO JULIO (Casais Espiritualidade)."
      ]
    },
    {
      "id": "sab-0945",
      "day": "sabado",
      "time": "09h45",
      "title": "CAFEZINHO - MESA DO LADO SALA DE PALESTRAS",
      "responsible": "Casal Sineteiro & Casal Boa Ordem",
      "teamId": "team-mercadinho",
      "location": "Mesa do lado da Sala de Palestras",
      "details": [
        "1- Cafezinho na mesa ao lado da sala de palestras;",
        "2- Tocar sineta retorno para sala de palestras 09h55 (Casal Sineteiro);",
        "3- Verificar se ninguém nos quartos ou banheiros (Casal Sineteiro);",
        "4- Colocar as lembranças nas carteiras da sala de palestras: VIVÊNCIA NO MATRIMÔNIO (Casal Boa Ordem)."
      ]
    },
    {
      "id": "sab-1000",
      "day": "sabado",
      "time": "10h00",
      "title": "PALESTRA: VIVÊNCIA MATRIMONIAL",
      "responsible": "DIÁCONO JULIO",
      "teamId": "team-coord",
      "location": "Sala de Palestras",
      "isHighlight": true,
      "details": [
        "1- Apresentar o palestrante DIÁCONO JULIO (Casal Coordenador);",
        "2- Organizar as cadeiras para mesa redonda - serão 5 mesas redondas (Casais Boa Ordem e Mercadinho);",
        "3- Cumprimentar, agradecer e entregar uma lembrança ao final da palestra (Casal Coordenador);",
        "4- Convidar todos para cafezinho (Casal Coordenador)."
      ]
    },
    {
      "id": "sab-1115",
      "day": "sabado",
      "time": "11h15",
      "title": "MESA REDONDA",
      "responsible": "Casal Decoração, Coordenador, Bem Estar, Sineteiro, Ligação",
      "teamId": "team-bem-estar",
      "details": [
        "1- Arrumar a mesa para o Almoço (Casal Decoração);",
        "2- Explicar o que é mesa redonda (Casal Coordenador);",
        "3- Informar a composição de cada uma (Casal Coordenador);",
        "4- Apresentar os casais que os néos devem acompanharem (Casal Coordenador);",
        "5- Avisar que ao toque da sineta - retornar ao local descontração (próx. sala de palestra) (Casal Coordenador);",
        "6- Entregar os lencinhos para os casais responsável pela cada mesa redonda (Casal Bem Estar);",
        "7- Passar nas mesas redonda e falar que tem mais 5 minutos (Casal Sineteiro);",
        "8- Tocar a sineta para retorno para local descontração (Casal Sineteiro);",
        "9- Verificar se almoço está tudo ok e avisar o casal coordenador (Casal Ligação)."
      ]
    },
    {
      "id": "sab-1150",
      "day": "sabado",
      "time": "11h50",
      "title": "REFEITÓRIO - ALMOÇO",
      "responsible": "Equipe Alegria, Mercadinho, Coordenador, Boa Ordem, Sineteiro, Audiovisual",
      "teamId": "team-alegria",
      "songIds": [
        "song-bencao-alimentos"
      ],
      "location": "Refeitório",
      "details": [
        "1- Cantar músicas e as orações de benção de agradecimentos dos alimentos (Equipe Alegria);",
        "2- Retirar antecipadamente para seus negócios (Casais Mercadinho);",
        "3- Avisar que haverá um intervalo e que os NEOS podem ir ao quarto (Casal Coordenador);",
        "4- Lembrar que o mercadinho estará aberto (Casal Coordenador);",
        "5- Avisar que ao toque da sineta dirigir-se à sala de palestras (Casal Coordenador);",
        "6- Colocar as lembranças nas carteiras da sala de palestras: HARMONIA CONJUGAL (Casal Boa Ordem);",
        "7- Avisar que está esgotado tempo para asseio - tocar a sineta (Casal Sineteiro);",
        "8- Verifique o DATA SHOW e as MÚSICAS que vão ser usadas com os palestrantes antes (Casal Audiovisual)."
      ]
    },
    {
      "id": "sab-1300",
      "day": "sabado",
      "time": "13h00",
      "title": "PALESTRA: HARMONIA CONJUGAL COM O CASAL",
      "responsible": "NEIDE E CARLOS",
      "teamId": "team-coord",
      "location": "Sala de Palestras",
      "isHighlight": true,
      "details": [
        "1- Músicas de animação (Equipe Alegria);",
        "2- Convidar os palestrantes para ir até a capela para o momento de entrega: PALESTRANTES NEIDE e CARLOS (Casais Espiritualidade);",
        "3- Apresentar os palestrantes NEIDE E CARLOS (Casal Coordenador);",
        "4- Convidar o palestrante para ir até a capela para o momento de entrega: PALESTRANTE SILVIA (Casais Espiritualidade);",
        "5- Cumprimentar, agradecer e entregar uma lembrança ao final da palestra (Casal Coordenador);",
        "6- Avisar do intervalo para irem ao banheiro (Casal Coordenador)."
      ]
    },
    {
      "id": "sab-1445",
      "day": "sabado",
      "time": "14h45",
      "title": "CAFEZINHO - MESA DO LADO SALA DE PALESTRAS",
      "responsible": "Casais Mercadinho",
      "teamId": "team-mercadinho",
      "location": "Mesa do lado da Sala de Palestras",
      "details": [
        "1- Cafezinho na mesa ao lado da sala de palestras (Casais Mercadinho)."
      ]
    },
    {
      "id": "sab-1500",
      "day": "sabado",
      "time": "15h00",
      "title": "PALESTRA: ATO DO PERDÃO (LAVA-PÉS)",
      "responsible": "Silvia",
      "teamId": "team-coord",
      "location": "Sala de Palestras",
      "isHighlight": true,
      "details": [
        "1- Apresentar o palestrante Silvia (Casal Coordenador);",
        "2- Momento lava pés com os NEOS no final;",
        "3- Cumprimentar, agradecer e entregar uma lembrança ao final da palestra (Casal Coordenador);",
        "4- Avisar do intervalo para irem ao banheiro (Casal Coordenador)."
      ]
    },
    {
      "id": "sab-1630",
      "day": "sabado",
      "time": "16h30",
      "title": "CONFISSÃO PARA QUEM DESEJAR E PASSEIO PARA OS DEMAIS",
      "responsible": "Padre Auxilio",
      "teamId": "team-espiritualidade",
      "location": "Capela / Área Externa",
      "isHighlight": true,
      "details": [
        "1- Atendimento de Confissão: Padre Auxilio;",
        "2- Abrir o mercadinho no período da confissão e passeio (Casais Mercadinho);",
        "3- Observar se algum casal NEOS quer conversar (Casais Espiritualidade);",
        "4- Deixar a capela aberta na hora da confissão (Casais Espiritualidade);",
        "5- Organizar o refeitório para o jantar e baile (Casais Boa Ordem e Decoração);",
        "6- Verificar as cadeiras para a mesa redonda (Casais Bem Estar e Mercadinho)."
      ]
    },
    {
      "id": "sab-1650",
      "day": "sabado",
      "time": "16h50",
      "title": "VERIFICAÇÃO DE HORÁRIO",
      "responsible": "Casal Sineteiro",
      "teamId": "team-sineteiro",
      "details": [
        "1- Verificar o horário (Casal Sineteiro)."
      ]
    },
    {
      "id": "sab-1710",
      "day": "sabado",
      "time": "17h10",
      "title": "LOCAL DESCONTRAÇÃO PÉ DA ESCADA PARA A MESA REDONDA",
      "responsible": "Casal Coordenador, Mesa Redonda, Espiritualidade, Sineteiro",
      "teamId": "team-coord",
      "location": "Pé da Escada",
      "details": [
        "1- Todos Os Casais Coordenadores Da Mesa Redonda, estejam presentes (Casal Coordenador);",
        "2- Ao toque Da Sineta Dirigir -se até a capela (Casal Coordenador);",
        "3- Levar os lencinhos para a mesa redonda (Casais Coordenadores Mesa redonda);",
        "4- Preparar a capela para hora do Ângelus (Casais Espiritualidade);",
        "5- 17h30: Avisar que está esgotado o tempo para passeio. PARA IR A CAPELA (Casal Sineteiro)."
      ]
    },
    {
      "id": "sab-1740",
      "day": "sabado",
      "time": "17h40",
      "title": "HORA DO ÂNGELUS / MARIA",
      "responsible": "Thiago e Débora",
      "teamId": "team-espiritualidade",
      "location": "Capela",
      "isHighlight": true,
      "details": [
        "1- Música de animação (Equipe Alegria);",
        "2- Apresentar o palestrante Thiago e Débora (Casal Coordenador);",
        "3- Oração e reflexão Mariana com Thiago e Débora."
      ]
    },
    {
      "id": "sab-1800",
      "day": "sabado",
      "time": "18h00",
      "title": "BANHO & PREPARATIVOS DOS NOIVOS",
      "responsible": "Casal Coordenador, Mercadinho, Equipe Homens, Equipe Mulheres, Decoração, Espiritualidade, Boa Ordem, Alegria, Sineteiro",
      "teamId": "team-coord",
      "details": [
        "1- Informar que a roupa especial será usada neste momento. Avisar do banho momento para aquela roupa especial (Casal Coordenador);",
        "2- Homens tomar banho, se arrumar e aguardar suas esposas no local descontração;",
        "3- Informar que o mercadinho estará aberto no período de banho;",
        "4- Abrir o mercadinho no período de banho (Casais Mercadinho);",
        "5- Ajudar os noivos a se arrumarem. Homens da equipe podem ajudar (Equipe Homens);",
        "6- Ajudar as noivas a se arrumarem. Mulheres da equipe podem ajudar (Equipe Mulheres);",
        "7- Preparativos para a missa: Igreja decorada, galhinho verde, bacia com água para as bênçãos (Casais Decoração e Casais Espiritualidade);",
        "8- Preparar a sala de palestras para o baile (Casal Boa Ordem, Equipe Alegria e Demais);",
        "9- 18h40: Avisar que está esgotado tempo - passar nos quartos (Casal Sineteiro);",
        "10- 18h50: PREPARATIVOS COM OS NOIVOS - colocar a tiara nas mulheres e os botons nos homens."
      ]
    },
    {
      "id": "sab-1900",
      "day": "sabado",
      "time": "19h00",
      "title": "MISSA BENÇÃO DOS CASAIS",
      "responsible": "Padre Ildefonso",
      "teamId": "team-espiritualidade",
      "location": "Capela / Igreja Decorada",
      "isHighlight": true,
      "details": [
        "1- Celebração da Santa Missa e Bênção dos Casais com Padre Ildefonso;",
        "2- Renovação dos votos matrimoniais e bênção das alianças."
      ]
    },
    {
      "id": "sab-2030",
      "day": "sabado",
      "time": "20h30",
      "title": "JANTAR ROMÂNTICO",
      "responsible": "Casal Coordenador & Equipe Alegria",
      "teamId": "team-coord",
      "location": "Refeitório Decorado",
      "isHighlight": true,
      "details": [
        "1- Convidar para o jantar romântico (Casal Coordenador);",
        "2- Música e agradecimento pelo alimento (Equipe Alegria);",
        "3- Podem levar as lembrancinhas. Taças com rosas e velas (Casal Coordenador)."
      ]
    },
    {
      "id": "sab-2130",
      "day": "sabado",
      "time": "21h30",
      "title": "BAILE",
      "responsible": "Casal Coordenador & Equipe Alegria",
      "teamId": "team-alegria",
      "location": "Sala de Palestras Decorada",
      "isHighlight": true,
      "details": [
        "1- Convidar para o baile (Casal Coordenador);",
        "2- Baile e confraternização animada com os casais."
      ]
    },
    {
      "id": "sab-2230",
      "day": "sabado",
      "time": "22h30",
      "title": "MOMENTO DE ORAÇÃO NA CAPELA",
      "responsible": "Casal Coordenador",
      "teamId": "team-coord",
      "location": "Capela",
      "details": [
        "1- Seguir para a capela momento oração (Casal Coordenador)."
      ]
    },
    {
      "id": "sab-2240",
      "day": "sabado",
      "time": "22h40",
      "title": "ORAÇÃO DA NOITE",
      "responsible": "Casal Espiritualidade & Casal Coordenador",
      "teamId": "team-espiritualidade",
      "location": "Capela",
      "details": [
        "1- Realizar a oração da noite (Casal Espiritualidade);",
        "2- Convidar a todos para dirigirem-se a seus quartos (Casal Coordenador);",
        "3- Lembrar que o mercadinho está aberto para suprir suas necessidades (Casal Coordenador);",
        "4- Informar que ao toque da sineta terão um tempo para dirigirem-se ao local de descontração, para inicio das atividades do DOMINGO (Casal Coordenador);",
        "5- Verificar se os néos se recolheram em seus quartos (Casal Bem Estar)."
      ]
    },
    {
      "id": "sab-2300",
      "day": "sabado",
      "time": "23h00",
      "title": "SERENATA",
      "responsible": "Equipe Alegria / Violeiros",
      "teamId": "team-alegria",
      "songIds": [
        "song-serenata",
        "song-boa-noite"
      ],
      "isHighlight": true,
      "details": [
        "1- Serenata musical nos corredores dos quartos dos néos."
      ]
    },
    {
      "id": "dom-0600",
      "day": "domingo",
      "time": "06h00",
      "title": "DESPERTAR DA INTERNA",
      "responsible": "Casal Sineteiro",
      "teamId": "team-sineteiro",
      "details": [
        "1- Acordar a interna com leve toque na porta;",
        "2- Aguardar a resposta que acordaram."
      ]
    },
    {
      "id": "dom-0615",
      "day": "domingo",
      "time": "06h15",
      "title": "INTERNA: MOMENTO DE ORAÇÃO NA CAPELA",
      "responsible": "Todos",
      "teamId": "team-todos",
      "location": "Capela",
      "details": [
        "1- Interna momento de oração na capela."
      ]
    },
    {
      "id": "dom-0630",
      "day": "domingo",
      "time": "06h30",
      "title": "DESPERTAR DOS NEOS",
      "responsible": "Casal Sineteiro",
      "teamId": "team-sineteiro",
      "details": [
        "1- Acordar os néos através da sineta (Casal Sineteiro);",
        "2- Estipular tempo e verificar se não ficou ninguém no quartos."
      ]
    },
    {
      "id": "dom-0645",
      "day": "domingo",
      "time": "06h45",
      "title": "LOCAL DA DESCONTRAÇÃO PÉ DA ESCADA",
      "responsible": "Equipe Alegria, Espiritualidade, Ligação, Coordenador, Boa Ordem",
      "teamId": "team-alegria",
      "songIds": [
        "song-utopia"
      ],
      "location": "Pé da Escada",
      "details": [
        "1- Músicas, conforme os neos vão descendo (Equipe Alegria);",
        "2- Preparar a capela para a oração da manhã => arrumar os pezinhos e o galho verde (Casal Espiritualidade);",
        "3- Avisar que a capela está pronta (Casal Ligação);",
        "4- Convidar todos para visitarem a capela (O Casal Coordenador);",
        "5- Colocar as lembranças nas carteiras da sala de palestras (PLANO DE DEUS) (Casal Boa Ordem)."
      ]
    },
    {
      "id": "dom-0700",
      "day": "domingo",
      "time": "07h00",
      "title": "ORAÇÃO NA CAPELA & MEDITAÇÃO OS DISCÍPULOS DE EMAÚS",
      "responsible": "EDSON e DALVA",
      "teamId": "team-espiritualidade",
      "location": "Capela",
      "isHighlight": true,
      "details": [
        "1- Meditação OS DISCÍPULOS DE EMAÚS – LUCAS 24, 13-35 (EDSON e DALVA);",
        "2- Músicas (Equipe Alegria);",
        "3- Verificar os preparativos para o café (Casal Ligação);",
        "4- Colocar lembrancinhas na sala de palestras - QUALIDADE DE VIDA (Casal Boa Ordem);",
        "5- Convidar a todos para se dirigirem ao refeitório para o café (Casal Coordenador)."
      ]
    },
    {
      "id": "dom-0725",
      "day": "domingo",
      "time": "07h25",
      "title": "REFEITÓRIO - CAFÉ DA MANHÃ",
      "responsible": "Equipe Alegria, Casal Espiritualidade, Casal Coordenador",
      "teamId": "team-alegria",
      "songIds": [
        "song-bencao-alimentos"
      ],
      "location": "Refeitório",
      "details": [
        "1- Cantar músicas e as orações de benção de agradecimentos dos alimentos (Equipe Alegria);",
        "2- Convidar a palestrante para ir até a capela para o momento de oração de entrega para que Deus conduza. PALESTRANTE BRUNO (Casal Espiritualidade);",
        "3- Avisar que haverá um intervalo de 5 minutos (Casal Coordenador);",
        "4- Avisar que ao toque da sineta dirigir-se a sala de palestras (Casal Coordenador)."
      ]
    },
    {
      "id": "dom-0800",
      "day": "domingo",
      "time": "08h00",
      "title": "PALESTRA: QUALIDADE DE VIDA",
      "responsible": "Bruno",
      "teamId": "team-coord",
      "location": "Sala de Palestras",
      "isHighlight": true,
      "details": [
        "1- Música de animação (Equipe Alegria);",
        "2- Apresentar o palestrante BRUNO (Casal Coordenador);",
        "3- Convidar os palestrantes para ir até a capela para o momento de oração de entrega para que Deus conduza. PALESTRANTES JORGE E DIRCE (Casais Espiritualidade);",
        "4- Cumprimentar, agradecer e entregar uma lembrança ao final da palestra (Casal Coordenador);",
        "5- Avisar do intervalo para irem ao banheiro (Casal Coordenador);",
        "6- Colocar lembrancinhas na sala de palestras - PAIS E FILHOS (Bauzinho com bombom - Casal Boa Ordem)."
      ]
    },
    {
      "id": "dom-0915",
      "day": "domingo",
      "time": "09h15",
      "title": "PALESTRA: PAIS E FILHOS",
      "responsible": "JORGE E DIRCE",
      "teamId": "team-coord",
      "location": "Sala de Palestras",
      "songIds": [
        "song-oracao-familia"
      ],
      "isHighlight": true,
      "details": [
        "1- Música de animação (Equipe Alegria);",
        "2- Apresentar os palestrantes JORGE E DIRCE (Casal Coordenador);",
        "3- Organizar as rosas para o palestrantes (Casal Boa Ordem);",
        "4- Colocar o saco de choro nos quartos (Casais Secretaria);",
        "5- Cumprimentar, agradecer e entregar uma lembrança ao final da palestra (Casal Coordenador);",
        "6- Colocar um vaso para receber as rosas ao lado do santíssimo (CAPELA) (Casais Espiritualidade)."
      ]
    },
    {
      "id": "dom-1015",
      "day": "domingo",
      "time": "10h15",
      "title": "MOMENTO DE ADORAÇÃO",
      "responsible": "Casais Espiritualidade & Casal Coordenador",
      "teamId": "team-espiritualidade",
      "location": "Capela",
      "isHighlight": true,
      "details": [
        "1- Ao final da palestra convidar a todos para ir à capela para o MOMENTO DE ADORAÇÃO (Casais Espiritualidade);",
        "2- Convidar os NEOS para ir até os quartos (Casal Coordenador);",
        "3- Retornar ao local de descontração ao toque da sineta. Pé da escada (Casal Coordenador)."
      ]
    },
    {
      "id": "dom-1115",
      "day": "domingo",
      "time": "11h15",
      "title": "MESA REDONDA",
      "responsible": "Casal Coordenador, Bem Estar, Sineteiro, Ligação",
      "teamId": "team-bem-estar",
      "details": [
        "1- Convidar os NEOS para mesa redonda (Casal Coordenador);",
        "2- Informar a composição de cada uma (Casal Coordenador);",
        "3- Apresentar os casais que os néos devem acompanharem (Casal Coordenador);",
        "4- Entregar os lencinhos para o casais responsável pela cada mesa redonda (Casal Bem Estar);",
        "5- Passar nas mesas redonda e falar que tem mais 5 minutos (Casal Sineteiro);",
        "6- Tocar a sineta para retorno para local descontração (Casal Sineteiro);",
        "7- Verificar se almoço está tudo ok e avisar o casal coordenador (Casal Ligação)."
      ]
    },
    {
      "id": "dom-1200",
      "day": "domingo",
      "time": "12h00",
      "title": "ALMOÇO & APRESENTAÇÃO DA COZINHA",
      "responsible": "Equipe Alegria & Casal Coordenador",
      "teamId": "team-alegria",
      "songIds": [
        "song-bencao-alimentos"
      ],
      "location": "Refeitório & Cozinha",
      "isHighlight": true,
      "details": [
        "1- Cantar músicas e as orações de benção de agradecimentos dos alimentos (Equipe Alegria);",
        "2- Apresentação da cozinha e musiquinha do pessoal da cozinha (Casal Coordenador);",
        "3- Equipe da secretaria e externa (frei e outros);",
        "4- Apresentar a cozinha para os neos com passagem pela cozinha (Casal Coordenador);",
        "5- Informar para dirigirem até os quartos para arrumar as bagagem (Casal Coordenador);",
        "6- Ao toque da sineta retornar a sala de palestras (Casal Coordenador);",
        "7- TODA EQUIPE FOTO NO POÇO ( COZINHA JUNTO) (Casal Coordenador)."
      ]
    },
    {
      "id": "dom-1400",
      "day": "domingo",
      "time": "14h00",
      "title": "APRESENTAÇÃO DO AUDIOVISUAL & TESTEMUNHOS",
      "responsible": "Casal Cine Foto, Casal Coordenador, Padrinhos",
      "teamId": "team-cinefoto",
      "location": "Sala de Palestras",
      "isHighlight": true,
      "details": [
        "1- Apresentar as atividades realizados durante o retiro 2024 (Casal Cine Foto);",
        "2- TESTEMUNHOS E AGRADECIMENTOS: Dar um tempo para os CASAIS NEOS darem seus testemunhos (Casal Coordenador);",
        "3- ENTREGA DO CRUCIFIXOS: Entregar os crucifixos aos NEOS (Padrinhos)."
      ]
    },
    {
      "id": "dom-1530",
      "day": "domingo",
      "time": "15h30",
      "title": "MOMENTO PIQUENIQUE",
      "responsible": "Casal Coordenador",
      "teamId": "team-coord",
      "details": [
        "1- MOMENTO PIQUENIQUE antes do embarque;",
        "2- REENCONTRO: Dia 01/11 às 18:30 - Comunidade São Miguel Arcanjo- Jd. Amélia => Levar um prato para confraternização (Casal Coordenador)."
      ]
    },
    {
      "id": "dom-1600",
      "day": "domingo",
      "time": "16h00",
      "title": "EMBARQUE DOS NEOS NA CASA DE RETIRO & REENCONTRO",
      "responsible": "Acolhida",
      "teamId": "team-acolhida",
      "location": "Casa de Retiro -> Capela São Miguel Arcanjo",
      "isHighlight": true,
      "details": [
        "1- EMBARQUE dos NEOS NA CASA DE RETIRO (16h00);",
        "2- Recepcionar as famílias na Capela São Miguel Arcanjo. A partir das 16h50 (Acolhida);",
        "3- Chegada do ônibus na Capela São Miguel Arcanjo A partir das 17h00 (Acolhida)."
      ]
    }
  ],
  "teams": [
    {
      "id": "team-coord",
      "name": "Casal Coordenador",
      "couples": "Coordenação Geral",
      "color": "#8B5CF6",
      "notes": "Responsável pela condução geral, avisos, acolhimento dos palestrantes, condução das atividades e orientação dos néos."
    },
    {
      "id": "team-alegria",
      "name": "Equipe Alegria / Violeiros",
      "couples": "Músicos e Violeiros",
      "color": "#F59E0B",
      "notes": "Animação, cantos nos momentos de descontração, bênção das refeições, capela, missa e serenata."
    },
    {
      "id": "team-espiritualidade",
      "name": "Casal Espiritualidade",
      "couples": "Equipe de Liturgia e Oração",
      "color": "#3B82F6",
      "notes": "Preparação da capela, momentos de oração, bênçãos, adoração ao Santíssimo e oração com os palestrantes."
    },
    {
      "id": "team-sineteiro",
      "name": "Casal Sineteiro",
      "couples": "Pontualidade e Sinos",
      "color": "#EC4899",
      "notes": "Controle rigoroso dos horários com toque da sineta, despertar da interna e dos néos, verificação de quartos."
    },
    {
      "id": "team-boa-ordem",
      "name": "Casal Boa Ordem",
      "couples": "Organização e Silêncio",
      "color": "#10B981",
      "notes": "Distribuição de lembranças nas carteiras, organização de salas, banheiros e sinalização de silêncio."
    },
    {
      "id": "team-bem-estar",
      "name": "Casal Bem Estar",
      "couples": "Cuidado e Acolhida",
      "color": "#14B8A6",
      "notes": "Entrega de lencinhos nas mesas redondas, cuidado com as necessidades dos casais e água."
    },
    {
      "id": "team-ligacao",
      "name": "Casal Ligação",
      "couples": "Comunicação Interna",
      "color": "#6366F1",
      "notes": "Ponte entre cozinha, capela e coordenação. Recolhimento de relógios/celulares e avisos."
    },
    {
      "id": "team-mercadinho",
      "name": "Casais Mercadinho / Livraria",
      "couples": "Apoio e Confraternização",
      "color": "#F97316",
      "notes": "Organização dos cafezinhos, suporte nos intervalos e mercadinho nos horários autorizados."
    },
    {
      "id": "team-cinefoto",
      "name": "Casal Cine Foto / Audiovisual",
      "couples": "Multimídia",
      "color": "#06B6D4",
      "notes": "Registros fotográficos, gravação, projeção de data show, músicas e apresentação do audiovisual."
    },
    {
      "id": "team-secretaria",
      "name": "Casais Secretaria",
      "couples": "Secretaria e Fichas",
      "color": "#64748B",
      "notes": "Crachás, fichas dos néos, colocação de sacos de choro nos quartos e apoio geral."
    },
    {
      "id": "team-acolhida",
      "name": "Equipe de Acolhida",
      "couples": "Váleria e Denis, Cida e Beranei",
      "color": "#0284C7",
      "notes": "Acolhida e recepção no Salão da Vila Amélia na sexta-feira e recepção das famílias no domingo na Capela São Miguel Arcanjo."
    },
    {
      "id": "team-decoracao",
      "name": "Casal Decoração",
      "couples": "Decoração e Ambientação",
      "color": "#84CC16",
      "notes": "Arrumação da capela, mesa do café da manhã, mesa do almoço, preparação do refeitório para o jantar romântico, baile e missa."
    },
    {
      "id": "team-padrinhos",
      "name": "Padrinhos",
      "couples": "Padrinhos dos Casais",
      "color": "#D946EF",
      "notes": "Entrega dos crucifixos e acompanhamento espiritual dos casais."
    },
    {
      "id": "team-todos",
      "name": "Todos / Equipe Completa",
      "couples": "Toda a Equipe de Trabalho",
      "color": "#475569",
      "notes": "Momentos comunitários, montagem de mesas redondas, oração da manhã e foto comunitária no poço."
    }
  ],
  "songs": [
    {
      "id": "song-boa-noite",
      "title": "Boa Noite Meu Jesus",
      "artist": "Música de Retiro / Tradicional",
      "originalKey": "D",
      "currentKey": "D",
      "notes": "Cantada no encerramento da Sexta-feira após o Filme da Vida e na Serenata.",
      "lyricsAndChords": "Tom: D\n\n[Intro] D  A/C#  Bm  G  A7  D\n\nD           A/C#       Bm\nBoa noite, meu bom Jesus!\n      G           Em           A7\nObrigado por este dia de oração e luz\nD           A/C#       Bm\nAbençoai os nossos lares\n        G          A7        D     D7\nGuardai nossos corações em paz!\n\n  G       A/G       F#m    Bm\nFica conosco, Senhor, nesta noite\n      Em          A7         D    D7\nPois a noite vem caindo devagar\n    G         A/G      F#m      Bm\nAbençoa os casais, as famílias e os lares\n       Em          A7        D\nDá-nos força pra recomeçar!"
    },
    {
      "id": "song-oracao-familia",
      "title": "Oração pela Família",
      "artist": "Pe. Zezinho",
      "originalKey": "G",
      "currentKey": "G",
      "notes": "Música especial para momentos de reflexão matrimonial e palestras (ex: Pais e Filhos).",
      "lyricsAndChords": "Tom: G\n\n[Intro] G  D/F#  Em  C  Am  D7\n\nG                    D/F#\nQue nenhuma família comece em qualquer de repente\nEm                     Bm\nQue nenhuma família termine por falta de amor\nC                    G/B\nQue o casal seja um para o outro de corpo e de mente\nAm                    D7\nE que nada no mundo separe um casal sonhador!\n\nG                  D/F#\nQue nenhuma família se abrigue debaixo da ponte\nEm                   Bm\nQue ninguém interfira no lar e na vida dos dois\nC                  G/B\nQue ninguém os obrigue a viver sem nenhum horizonte\nAm                    D7                G\nQue eles vivam do ontem, no hoje em função de um depois!\n\n[Refrão]\n         G       D/F#       Em\nAbençoa, Senhor, as famílias! Amém!\n         C       Am         D7\nAbençoa, Senhor, a minha também!\n         G       D/F#       Em\nAbençoa, Senhor, as famílias! Amém!\n         C       D7         G\nAbençoa, Senhor, a minha também!"
    },
    {
      "id": "song-utopia",
      "title": "Utopia",
      "artist": "Pe. Zezinho",
      "originalKey": "C",
      "currentKey": "C",
      "notes": "Cantada nos momentos de descontração e refeições.",
      "lyricsAndChords": "Tom: C\n\n[Intro] C  G/B  Am  F  G7  C\n\nC           G/B        Am\nDas muitas coisas do meu sertão\nF          Dm          G7\nMe deu saudade do meu lugar\nC            G/B       Am\nOnde eu plantava meu feijão\nF         G7            C\nE ouvia o riacho murmurar...\n\nC            G/B        Am\nSe eu não puder plantar meu chão\nF          Dm          G7\nEu quero ao menos cantar a paz\nC          G/B       Am\nE ver brotar no coração\nF         G7            C\nO amor que a gente sonha e faz!"
    },
    {
      "id": "song-bencao-alimentos",
      "title": "Oração de Bênção dos Alimentos",
      "artist": "Tradicional Retiro",
      "originalKey": "E",
      "currentKey": "E",
      "notes": "Cantada no início do café da manhã, almoço e jantar.",
      "lyricsAndChords": "Tom: E\n\n[Intro] E  B7  E\n\nE                      B7\nAbençoai, Senhor, o nosso pão\n                         E\nE dai o pão a quem tem fome\nE7                       A\nE dai a fome de Ti aos corações\n   E          B7        E\nBendito seja o Vosso Santo Nome!"
    },
    {
      "id": "song-serenata",
      "title": "Serenata aos Casais",
      "artist": "Equipe Alegria",
      "originalKey": "A",
      "currentKey": "A",
      "notes": "Momento da Serenata nos quartos dos néos (Sábado 23h00).",
      "lyricsAndChords": "Tom: A\n\n[Intro] A  C#m  D  E7  A\n\nA             C#m\nVem ver como brilha a lua\nD              E7\nVem ver o amor que floresceu\nA            C#m\nNesta noite abençoada\nD             E7          A\nO amor de Deus nos uniu!"
    }
  ]
}'::jsonb,
  timezone('utc'::text, now())
)
ON CONFLICT (id) DO UPDATE 
SET 
  payload = EXCLUDED.payload,
  updated_at = EXCLUDED.updated_at;

-- Verificação dos dados atualizados:
SELECT 
  id, 
  updated_at, 
  jsonb_array_length(payload->'events') AS total_eventos,
  jsonb_array_length(payload->'teams') AS total_equipes,
  jsonb_array_length(payload->'songs') AS total_musicas
FROM public.retreat_state 
WHERE id = 'default';
