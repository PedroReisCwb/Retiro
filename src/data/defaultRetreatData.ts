import { RetreatData, Team, EventItem, Song } from '../types/retreat';

export const DEFAULT_TEAMS: Team[] = [
  {
    id: 'team-coord',
    name: 'Casal Coordenador',
    couples: 'Coordenação Geral',
    color: '#8B5CF6', // Purple
    notes: 'Responsável pela condução geral, avisos, acolhimento dos palestrantes e orientação dos néos.'
  },
  {
    id: 'team-alegria',
    name: 'Equipe Alegria / Violeiros',
    couples: 'Músicos e Violeiros',
    color: '#F59E0B', // Amber/Gold
    notes: 'Animação, cantos nos momentos de descontração, refeições, capela, missa e serenata.'
  },
  {
    id: 'team-espiritualidade',
    name: 'Casal Espiritualidade',
    couples: 'Equipe de Liturgia e Oração',
    color: '#3B82F6', // Blue
    notes: 'Preparação da capela, momentos de oração, bênçãos, adoração e apoio aos palestrantes.'
  },
  {
    id: 'team-sineteiro',
    name: 'Casal Sineteiro',
    couples: 'Pontualidade e Sinos',
    color: '#EC4899', // Pink
    notes: 'Controle dos horários com toque da sineta, despertar da interna e dos néos, verificação de quartos.'
  },
  {
    id: 'team-boa-ordem',
    name: 'Casal Boa Ordem',
    couples: 'Organização e Silêncio',
    color: '#10B981', // Emerald
    notes: 'Distribuição de lembranças nas carteiras, organização de salas, banheiros e sinalização.'
  },
  {
    id: 'team-bem-estar',
    name: 'Casal Bem Estar',
    couples: 'Cuidado e Acolhida',
    color: '#14B8A6', // Teal
    notes: 'Entrega de lencinhos nas mesas redondas, cuidado com as necessidades dos casais e água.'
  },
  {
    id: 'team-ligacao',
    name: 'Casal Ligação',
    couples: 'Comunicação Interna',
    color: '#6366F1', // Indigo
    notes: 'Ponte entre cozinha, capela e coordenação. Recolhimento de relógios/celulares.'
  },
  {
    id: 'team-mercadinho',
    name: 'Casais Mercadinho / Livraria',
    couples: 'Apoio e Confraternização',
    color: '#F97316', // Orange
    notes: 'Organização dos cafezinhos, suporte nos intervalos e mercadinho nos horários autorizados.'
  },
  {
    id: 'team-cinefoto',
    name: 'Casal Cine Foto / Audiovisual',
    couples: 'Multimídia',
    color: '#06B6D4', // Cyan
    notes: 'Registros fotográficos, gravação, projeção de slides e apresentação de audiovisual no domingo.'
  },
  {
    id: 'team-secretaria',
    name: 'Casais Secretaria',
    couples: 'Secretaria e Fichas',
    color: '#64748B', // Slate
    notes: 'Crachás, fichas dos néos, colocação de sacos de choro nos quartos e apoio geral.'
  },
  {
    id: 'team-padrinhos',
    name: 'Padrinhos',
    couples: 'Padrinhos dos Casais',
    color: '#D946EF', // Fuchsia
    notes: 'Entrega dos crucifixos e acompanhamento espiritual.'
  },
  {
    id: 'team-todos',
    name: 'Todos / Equipe Completa',
    couples: 'Toda a Equipe de Trabalho',
    color: '#475569', // Dark Slate
    notes: 'Momentos comunitários, montagem de mesas redondas e oração da manhã.'
  }
];

export const DEFAULT_SONGS: Song[] = [
  {
    id: 'song-boa-noite',
    title: 'Boa Noite Meu Jesus',
    artist: 'Música de Retiro / Tradicional',
    originalKey: 'D',
    currentKey: 'D',
    notes: 'Cantada no encerramento da Sexta-feira após o Filme da Vida.',
    lyricsAndChords: `Tom: D

[Intro] D  A/C#  Bm  G  A7  D

D           A/C#       Bm
Boa noite, meu bom Jesus!
      G           Em           A7
Obrigado por este dia de oração e luz
D           A/C#       Bm
Abençoai os nossos lares
        G          A7        D     D7
Guardai nossos corações em paz!

  G       A/G       F#m    Bm
Fica conosco, Senhor, nesta noite
      Em          A7         D    D7
Pois a noite vem caindo devagar
    G         A/G      F#m      Bm
Abençoa os casais, as famílias e os lares
       Em          A7        D
Dá-nos força pra recomeçar!`
  },
  {
    id: 'song-oracao-familia',
    title: 'Oração pela Família',
    artist: 'Pe. Zezinho',
    originalKey: 'G',
    currentKey: 'G',
    notes: 'Música especial para momentos de reflexão matrimonial e palestras.',
    lyricsAndChords: `Tom: G

[Intro] G  D/F#  Em  C  Am  D7

G                    D/F#
Que nenhuma família comece em qualquer de repente
Em                     Bm
Que nenhuma família termine por falta de amor
C                    G/B
Que o casal seja um para o outro de corpo e de mente
Am                    D7
E que nada no mundo separe um casal sonhador!

G                  D/F#
Que nenhuma família se abrigue debaixo da ponte
Em                   Bm
Que ninguém interfira no lar e na vida dos dois
C                  G/B
Que ninguém os obrigue a viver sem nenhum horizonte
Am                    D7                G
Que eles vivam do ontem, no hoje em função de um depois!

[Refrão]
         G       D/F#       Em
Abençoa, Senhor, as famílias! Amém!
         C       Am         D7
Abençoa, Senhor, a minha também!
         G       D/F#       Em
Abençoa, Senhor, as famílias! Amém!
         C       D7         G
Abençoa, Senhor, a minha também!`
  },
  {
    id: 'song-utopia',
    title: 'Utopia',
    artist: 'Pe. Zezinho',
    originalKey: 'C',
    currentKey: 'C',
    notes: 'Cantada nos momentos de descontração e refeitório.',
    lyricsAndChords: `Tom: C

[Intro] C  G/B  Am  F  G7  C

C           G/B        Am
Das muitas coisas do meu sertão
F          Dm          G7
Me deu saudade do meu lugar
C            G/B       Am
Onde eu plantava meu feijão
F         G7            C
E ouvia o riacho murmurar...

C            G/B        Am
Se eu não puder plantar meu chão
F          Dm          G7
Eu quero ao menos cantar a paz
C          G/B       Am
E ver brotar no coração
F         G7            C
O amor que a gente sonha e faz!`
  },
  {
    id: 'song-bencao-alimentos',
    title: 'Oração de Bênção dos Alimentos',
    artist: 'Tradicional Retiro',
    originalKey: 'E',
    currentKey: 'E',
    notes: 'Cantada no início do café da manhã, almoço e jantar.',
    lyricsAndChords: `Tom: E

[Intro] E  B7  E

E                      B7
Abençoai, Senhor, o nosso pão
                         E
E dai o pão a quem tem fome
E7                       A
E dai a fome de Ti aos corações
   E          B7        E
Bendito seja o Vosso Santo Nome!`
  },
  {
    id: 'song-serenata',
    title: 'Serenata aos Casais',
    artist: 'Equipe Alegria',
    originalKey: 'A',
    currentKey: 'A',
    notes: 'Momento da Serenata nos quartos dos néos (Sábado 23h00).',
    lyricsAndChords: `Tom: A

[Intro] A  C#m  D  E7  A

A             C#m
Vem ver como brilha a lua
D              E7
Vem ver o amor que floresceu
A            C#m
Nesta noite abençoada
D             E7          A
O amor de Deus nos uniu!`
  }
];

export const DEFAULT_EVENTS: EventItem[] = [
  // ===================== SEXTA-FEIRA =====================
  {
    id: 'sex-1830',
    day: 'sexta',
    time: '18h30',
    title: 'ACOLHIDA NO SALÃO DA V. AMÉLIA',
    responsible: 'Equipe de Acolhida',
    teamId: 'team-coord',
    location: 'Salão da Vila Amélia',
    details: [
      'Equipe de acolhida recepciona no salão da V. Amélia'
    ]
  },
  {
    id: 'sex-1900',
    day: 'sexta',
    time: '19h00',
    title: 'RECEPÇÃO DOS NÉOS',
    responsible: 'Casal Coordenador',
    teamId: 'team-coord',
    location: 'Salão da Vila Amélia',
    details: [
      '1- Organizar as malas dos néos com as etiquetas e colocar no caminhão;',
      '2- Ir uma pessoa com o motorista do caminhão; Chegada do caminhão na casa retiro quem estiver lá ajudar com as bagagens para os quartos, e por fim apagar todas as luzes;',
      '3- Confirmar a presença de todos os néos;',
      '4- Casal coordenador se apresenta para os casais;',
      '5- Entregar o crachá dos néos;',
      '6- Convidar os NEOS para um lanche.'
    ]
  },
  {
    id: 'sex-1930-a',
    day: 'sexta',
    time: '19h30',
    title: 'EMBARQUE DOS NÉOS',
    responsible: 'Casais Presentes / Equipes',
    teamId: 'team-todos',
    songIds: ['song-utopia'],
    details: [
      '1- Cantar música durante o embarque dos néos;',
      '2- E os casais que vão juntos no ônibus. (Das equipes);',
      '3- No ônibus vão conversando e cantando até a casa;',
      '4- No portão da casa de retiro um casal passa mensagem/liga informando que estão chegando.'
    ]
  },
  {
    id: 'sex-1930-b',
    day: 'sexta',
    time: '19h30',
    title: 'PREPARAÇÃO NA CASA DE RETIRO',
    responsible: 'Casal Sineteiro, Boa Ordem e Espiritualidade',
    teamId: 'team-sineteiro',
    location: 'Casa de Retiro',
    details: [
      '1- Colocar as estacas ou fitas limitadoras (Casal Sineteiro);',
      '2- Verificar se está tudo organizado com as cadeiras, os bebedouros, copos e lixeiras na entrada da sala de palestras (Casais Boa Ordem);',
      '3- Colocar papel nos banheiros, sabonetes e toalhas de papel (Casais Boa Ordem);',
      '4- Organizar a capela: colocar sobre o altar a bandeja com os crucifixos, colocar os pezinhos bagunçados no corredor e galho seco do lado do altar (Casais Espiritualidade).'
    ]
  },
  {
    id: 'sex-2030',
    day: 'sexta',
    time: '20h30',
    title: 'CHEGADA DO ÔNIBUS NA CASA DE RETIRO',
    responsible: 'Casal Espiritualidade & Casal Coordenador',
    teamId: 'team-espiritualidade',
    location: 'Entrada / Varanda da Casa de Retiro',
    details: [
      '1- Todos preparados na sala de recepção;',
      '2- Casal espiritualidade: Vinde Espírito Santo e casais abençoam-se com o sinal da cruz;',
      '3- Convidar todos os néos para dirigirem até a varanda.'
    ]
  },
  {
    id: 'sex-2040',
    day: 'sexta',
    time: '20h40',
    title: 'LER A MENSAGEM NO ESCURO',
    responsible: 'Nilza e Idelson / Boa Ordem / Alegria / Coordenador',
    teamId: 'team-boa-ordem',
    location: 'Varanda / Recepção',
    isHighlight: true,
    details: [
      '1- Dar o toque de silêncio (Casal Boa Ordem);',
      '2- Leitura da mensagem no escuro por NILZA E IDELSON;',
      '3- Executar o cântico escolhido (Equipe Alegria);',
      '4- Abrir as portas e convidar os NEOS a entrarem;',
      '5- Acender as luzes da recepção e da casa de retiro;',
      '6- Dar boas-vindas, perguntar como foi a viagem (Casal Coordenador);',
      '7- Liberar os NEOS para visita aos quartos, chamando os NEOS pelos nomes;',
      '8- Um casal da equipe acompanha os NEOS até o quarto para verificar se as bagagens estão corretas.'
    ]
  },
  {
    id: 'sex-2130',
    day: 'sexta',
    time: '21h30',
    title: 'LOCAL DE DESCONTRAÇÃO - AO PÉ DA ESCADA',
    responsible: 'Casal Sineteiro, Ligação, Alegria e Coordenador',
    teamId: 'team-alegria',
    songIds: ['song-utopia'],
    location: 'Pé da Escada',
    details: [
      '1- Verificar se não ficou ninguém nos quartos (Casal Sineteiro);',
      '2- Verificar se o jantar está pronto (Casal Ligação);',
      '3- Iniciar a animação com os cantos do CD (Equipe Alegria);',
      '4- Convidar a todos para dirigirem-se ao refeitório (Casal Coordenador).'
    ]
  },
  {
    id: 'sex-2145',
    day: 'sexta',
    time: '21h45',
    title: 'REFEITÓRIO - JANTAR',
    responsible: 'Casal Coordenador / Equipe Alegria',
    teamId: 'team-coord',
    songIds: ['song-bencao-alimentos'],
    location: 'Refeitório',
    details: [
      '1- Fazer as orações de agradecimento pelos alimentos (Casal Coordenador);',
      '2- Cantar cântico de bênção dos alimentos;',
      '3- Após o jantar, convidar a todos para dirigirem-se à sala de palestras.'
    ]
  },
  {
    id: 'sex-2215',
    day: 'sexta',
    time: '22h15',
    title: 'SALA DE PALESTRAS - ABERTURA E REGRAS',
    responsible: 'Casal Ligação & Casal Coordenador',
    teamId: 'team-coord',
    location: 'Sala de Palestras',
    details: [
      '1- Levar os sacos plásticos com etiquetas para recolher os relógios e celulares (SAQUINHOS PLÁSTICOS - Casal Ligação);',
      '2- Discursos de abertura (Casal Coordenador);',
      '3- Apresentar alguns casais da interna e informar aos néos sua missão (Boa Ordem, Bem Estar, Livraria, Mercadinho, Sineteiro e Alegria);',
      '4- Informar os NEOS sobre as regras da casa (fazer silêncio porque os freis moram aqui);',
      '5- Informar aos NEOS que não façam perguntas e não batam palmas durante as palestras;',
      '6- Não ultrapassar as fitas de marcação e usar as lixeiras de bituca de cigarros;',
      '7- Convidar a todos para dirigirem-se à capela após o OK do casal ligação.'
    ]
  },
  {
    id: 'sex-2230',
    day: 'sexta',
    time: '22h30',
    title: 'MOMENTO DE ADORAÇÃO NA CAPELA',
    responsible: 'Casal Espiritualidade & Equipe Alegria',
    teamId: 'team-espiritualidade',
    location: 'Capela',
    details: [
      '1- Verificar se está tudo OK na capela para o momento (Casal Espiritualidade);',
      '2- Liberar a secretaria a colocar as lembranças nos quartos (Casal Ligação Interna);',
      '3- Definir com casal coordenador quem trará os pães na manhã seguinte;',
      '4- Preparar para momento de adoração em torno de alguns minutos (Equipe Alegria e Espiritualidade).'
    ]
  },
  {
    id: 'sex-2240',
    day: 'sexta',
    time: '22h40',
    title: 'LER O FILME DA VIDA',
    responsible: 'OSMAR / Equipe Alegria / Casal Coordenador',
    teamId: 'team-alegria',
    songIds: ['song-boa-noite'],
    location: 'Capela / Sala de Palestras',
    isHighlight: true,
    details: [
      '1- Ler o "Filme da Vida" por OSMAR;',
      '2- Executar a música "Boa Noite Meu Jesus" (Equipe Alegria);',
      '3- Pedir para levantarem e convidar a todos para dirigirem-se aos seus quartos (Casal Coordenador);',
      '4- Lembrar que o mercadinho está aberto para suprir suas necessidades;',
      '5- Informar que ao toque da sineta terão um tempo para dirigirem-se ao local de descontração para início das atividades do sábado;',
      '6- Verificar se os néos se recolheram em seus quartos (Casal Bem Estar).'
    ]
  },
  {
    id: 'sex-2300',
    day: 'sexta',
    time: '23h00',
    title: 'MONTAGEM DA MESA REDONDA',
    responsible: 'Equipe Completa',
    teamId: 'team-todos',
    details: [
      '1- Montagem da mesa redonda, ter em mãos a ficha dos néos.'
    ]
  },

  // ===================== SÁBADO =====================
  {
    id: 'sab-0600',
    day: 'sabado',
    time: '06h00',
    title: 'DESPERTAR DA INTERNA',
    responsible: 'Casal Sineteiro',
    teamId: 'team-sineteiro',
    details: [
      '1- Acordar a interna com leve toque na porta;',
      '2- Aguardar a resposta que acordaram.'
    ]
  },
  {
    id: 'sab-0615',
    day: 'sabado',
    time: '06h15',
    title: 'INTERNA: MOMENTO DE ORAÇÃO NA CAPELA',
    responsible: 'Equipe Completa',
    teamId: 'team-todos',
    location: 'Capela',
    details: [
      '1- Momento de oração da interna na capela.'
    ]
  },
  {
    id: 'sab-0630',
    day: 'sabado',
    time: '06h30',
    title: 'DESPERTAR DOS NEOS',
    responsible: 'Casal Sineteiro',
    teamId: 'team-sineteiro',
    details: [
      '1- Acordar os néos através da sineta;',
      '2- Estipular tempo e verificar se não ficou ninguém nos quartos (+/- 10 minutos).'
    ]
  },
  {
    id: 'sab-0650',
    day: 'sabado',
    time: '06h50',
    title: 'LOCAL DA DESCONTRAÇÃO PÉ DA ESCADA',
    responsible: 'Equipe Alegria, Espiritualidade, Ligação e Boa Ordem',
    teamId: 'team-alegria',
    songIds: ['song-utopia'],
    location: 'Pé da Escada',
    details: [
      '1- Músicas conforme os néos vão descendo (Equipe Alegria);',
      '2- Preparar a capela para a oração da manhã (Casal Espiritualidade);',
      '3- Avisar que a capela está pronta (Casal Ligação);',
      '4- Convidar todos para visitarem a capela (Casal Coordenador);',
      '5- Colocar as lembranças nas carteiras da sala de palestras: PLANO DE DEUS - Guirlanda (Casal Boa Ordem).'
    ]
  },
  {
    id: 'sab-0700',
    day: 'sabado',
    time: '07h00',
    title: 'ORAÇÃO NA CAPELA & MEDITAÇÃO FILHO PRÓDIGO',
    responsible: 'ROGÉRIO e NICE / Espiritualidade / Alegria',
    teamId: 'team-espiritualidade',
    location: 'Capela',
    isHighlight: true,
    details: [
      '1- Músicas de acolhida na capela (Equipe Alegria);',
      '2- Oração da manhã (Casal Espiritualidade);',
      '3- MEDITAÇÃO FILHO PRÓDIGO (Lucas 15, 11-32) por ROGÉRIO e NICE;',
      '4- Ter folha com a mensagem da leitura bíblica;',
      '5- Convidar a todos para se dirigirem até o local de descontração próx. à sala de palestras (Casal Coordenador).'
    ]
  },
  {
    id: 'sab-0725',
    day: 'sabado',
    time: '07h25',
    title: 'LOCAL DE DESCONTRAÇÃO PRÉ-CAFÉ',
    responsible: 'Casal Ligação & Equipe Alegria',
    teamId: 'team-alegria',
    details: [
      '1- Verificar se café está OK (Casal Ligação);',
      '2- Música do CD / Animação (Equipe Alegria).'
    ]
  },
  {
    id: 'sab-0730',
    day: 'sabado',
    time: '07h30',
    title: 'REFEITÓRIO - CAFÉ DA MANHÃ',
    responsible: 'Equipe Alegria & Casal Coordenador',
    teamId: 'team-alegria',
    songIds: ['song-bencao-alimentos'],
    location: 'Refeitório',
    details: [
      '1- Cantar músicas e orações de bênção e agradecimento dos alimentos (Equipe Alegria);',
      '2- Avisar que haverá um intervalo de 5 minutos (Casal Coordenador);',
      '3- Avisar que ao toque da sineta dirigir-se ao local de descontração.'
    ]
  },
  {
    id: 'sab-0800',
    day: 'sabado',
    time: '08h00',
    title: 'FOTOGRAFIA OFICIAL',
    responsible: 'Casal Coordenador & Casal Cine Foto',
    teamId: 'team-cinefoto',
    details: [
      '1- Convidar a todos para a foto (Casal Coordenador);',
      '2- Foto com os NEOS e equipe (Casal Áudio Visual);',
      '3- Organizar um horário para a foto das equipes da cozinha e secretaria.'
    ]
  },
  {
    id: 'sab-0825',
    day: 'sabado',
    time: '08h25',
    title: 'SALA DE PALESTRAS - PREPARAÇÃO',
    responsible: 'Equipe Alegria, Bem Estar, Boa Ordem, Espiritualidade',
    teamId: 'team-boa-ordem',
    location: 'Sala de Palestras',
    details: [
      '1- Música de animação (Equipe Alegria);',
      '2- Colocar jarra com água para os palestrantes (Casal Bem Estar);',
      '3- Entregar a lembrança do palestrante para o casal coordenador (Casal Boa Ordem);',
      '4- Convidar os palestrantes para ir até a capela para o momento de oração de entrega para que Deus conduza (Casais Espiritualidade).'
    ]
  },
  {
    id: 'sab-0830',
    day: 'sabado',
    time: '08h30',
    title: 'PALESTRA: PLANO DE DEUS',
    responsible: 'TOM / Casal Coordenador',
    teamId: 'team-coord',
    location: 'Sala de Palestras',
    isHighlight: true,
    details: [
      '1- Apresentar o palestrante TOM (Casal Coordenador);',
      '2- Organizar os quartos, banheiros e corredores durante a palestra (Casal Boa Ordem);',
      '3- Organizar para o cafezinho das 09h45 (Casais Mercadinho);',
      '4- Cumprimentar, agradecer e entregar uma lembrança ao final da palestra;',
      '5- Convidar todos para o cafezinho;',
      '6- Convidar os palestrantes da próxima palestra (Diácono Julio) para momento de oração na capela (Casais Espiritualidade).'
    ]
  },
  {
    id: 'sab-0945',
    day: 'sabado',
    time: '09h45',
    title: 'CAFEZINHO',
    responsible: 'Casais Mercadinho & Sineteiro',
    teamId: 'team-mercadinho',
    location: 'Mesa do lado da Sala de Palestras',
    details: [
      '1- Cafezinho na mesa ao lado da sala de palestras;',
      '2- Tocar sineta para retorno à sala de palestras às 09h55 (Casal Sineteiro);',
      '3- Verificar se não há ninguém nos quartos ou banheiros (Casal Sineteiro);',
      '4- Colocar as lembranças nas carteiras da sala de palestras: VIVÊNCIA NO MATRIMÔNIO (Casal Boa Ordem).'
    ]
  },
  {
    id: 'sab-1000',
    day: 'sabado',
    time: '10h00',
    title: 'PALESTRA: VIVÊNCIA MATRIMONIAL',
    responsible: 'DIÁCONO JULIO / Casal Coordenador',
    teamId: 'team-coord',
    location: 'Sala de Palestras',
    isHighlight: true,
    details: [
      '1- Apresentar o palestrante DIÁCONO JULIO (Casal Coordenador);',
      '2- Organizar as cadeiras para mesa redonda - serão 5 mesas redondas (Casais Boa Ordem e Mercadinho);',
      '3- Cumprimentar, agradecer e entregar uma lembrança ao final da palestra;',
      '4- Convidar todos para o cafezinho / transição para mesa redonda.'
    ]
  },
  {
    id: 'sab-1115',
    day: 'sabado',
    time: '11h15',
    title: 'MESA REDONDA',
    responsible: 'Casal Coordenador & Casal Bem Estar',
    teamId: 'team-bem-estar',
    details: [
      '1- Explicar o que é a mesa redonda (Casal Coordenador);',
      '2- Informar a composição de cada uma;',
      '3- Apresentar os casais que os néos devem acompanhar;',
      '4- Avisar que ao toque da sineta retornar ao local de descontração;',
      '5- Entregar os lencinhos para os casais responsáveis por cada mesa redonda (Casal Bem Estar);',
      '6- Passar nas mesas redondas e avisar que restam 5 minutos (Casal Sineteiro);',
      '7- Tocar a sineta para retorno;',
      '8- Verificar se o almoço está OK e avisar o casal coordenador (Casal Ligação).'
    ]
  },
  {
    id: 'sab-1150',
    day: 'sabado',
    time: '11h50',
    title: 'REFEITÓRIO - ALMOÇO',
    responsible: 'Equipe Alegria & Casal Coordenador',
    teamId: 'team-alegria',
    songIds: ['song-bencao-alimentos'],
    location: 'Refeitório',
    details: [
      '1- Cantar músicas e orações de bênção de agradecimentos dos alimentos (Equipe Alegria);',
      '2- Casais do mercadinho retiram-se antecipadamente para seus preparativos;',
      '3- Avisar que haverá intervalo e que os NEOS podem ir aos quartos (Casal Coordenador);',
      '4- Lembrar que o mercadinho estará aberto;',
      '5- Avisar que ao toque da sineta dirigir-se à sala de palestras.'
    ]
  },
  {
    id: 'sab-1300',
    day: 'sabado',
    time: '13h00',
    title: 'PALESTRA: HARMONIA CONJUGAL',
    responsible: 'NEIDE E CARLOS / Casal Coordenador',
    teamId: 'team-coord',
    location: 'Sala de Palestras',
    isHighlight: true,
    details: [
      '1- Colocar as lembranças nas carteiras: HARMONIA CONJUGAL - almochaveiro (Casal Boa Ordem);',
      '2- Avisar que está esgotado o tempo de asseio / tocar sineta (Casal Sineteiro);',
      '3- Verificar o DATA SHOW e as MÚSICAS com os palestrantes antes (Casal Áudio Visual);',
      '4- Convidar os palestrantes para momento de oração na capela (Casais Espiritualidade);',
      '5- Música de animação (Equipe Alegria);',
      '6- Apresentar os palestrantes NEIDE E CARLOS (Casal Coordenador);',
      '7- Convidar os próximos palestrantes (Zico e Leny) para oração na capela (Casais Espiritualidade);',
      '8- Cumprimentar, agradecer e entregar lembrança ao final;',
      '9- Avisar do intervalo para irem ao banheiro.'
    ]
  },
  {
    id: 'sab-1445',
    day: 'sabado',
    time: '14h45',
    title: 'CAFEZINHO',
    responsible: 'Casais Mercadinho',
    teamId: 'team-mercadinho',
    location: 'Mesa ao lado da Sala de Palestras',
    details: [
      '1- Cafezinho na mesa ao lado da sala de palestras.'
    ]
  },
  {
    id: 'sab-1500',
    day: 'sabado',
    time: '15h00',
    title: 'PALESTRA: ATO DO PERDÃO (LAVA-PÉS)',
    responsible: 'ZICO E LENY / Casal Coordenador',
    teamId: 'team-coord',
    location: 'Sala de Palestras',
    isHighlight: true,
    details: [
      '1- Apresentar os palestrantes ZICO E LENY (Casal Coordenador);',
      '2- Momento de lava-pés com os NEOS no final;',
      '3- Cumprimentar, agradecer e entregar uma lembrança ao final;',
      '4- Avisar do intervalo para irem ao banheiro.'
    ]
  },
  {
    id: 'sab-1630',
    day: 'sabado',
    time: '16h30',
    title: 'CONFISSÃO & PASSEIO',
    responsible: 'Casais Mercadinho, Espiritualidade, Boa Ordem, Decoração',
    teamId: 'team-espiritualidade',
    details: [
      '1- Abrir o mercadinho no período da confissão e passeio (Casais Mercadinho);',
      '2- Observar se algum casal NEOS quer conversar (Casais Espiritualidade);',
      '3- Deixar a capela aberta na hora da confissão;',
      '4- Organizar o refeitório para o jantar e a sala de palestras para o baile (Casais Boa Ordem e Decoração);',
      '5- Verificar as cadeiras para a mesa redonda (Casais Bem Estar e Mercadinho).'
    ]
  },
  {
    id: 'sab-1650',
    day: 'sabado',
    time: '16h50',
    title: 'PREPARAÇÃO MESA REDONDA & HORA DE MARIA',
    responsible: 'Casal Sineteiro, Coordenador, Espiritualidade',
    teamId: 'team-sineteiro',
    details: [
      '1- Verificar o horário (Casal Sineteiro);',
      '2- 17h10: Local de descontração pé da escada para a mesa redonda;',
      '3- Todos os casais coordenadores da mesa redonda estejam presentes;',
      '4- Ao toque da sineta dirigir-se até a capela;',
      '5- Levar os lencinhos para a mesa redonda;',
      '6- Preparar a capela para a Hora de Maria e lembrancinhas (Maria em EVA - Casais Espiritualidade);',
      '7- 17h30: Avisar que está esgotado tempo para asseio para ir à capela (Casal Sineteiro).'
    ]
  },
  {
    id: 'sab-1740',
    day: 'sabado',
    time: '17h40',
    title: 'HORA DO ÂNGELUS / MARIA',
    responsible: 'BENEDITO E ROZELINE / Alegria / Coordenador',
    teamId: 'team-espiritualidade',
    location: 'Capela',
    isHighlight: true,
    details: [
      '1- Música de animação (Equipe Alegria);',
      '2- Apresentar os palestrantes ROZELINE E BENEDITO (Casal Coordenador).'
    ]
  },
  {
    id: 'sab-1800',
    day: 'sabado',
    time: '18h00',
    title: 'BANHO & PREPARATIVOS DOS NOIVOS',
    responsible: 'Equipes Homens, Mulheres, Decoração, Espiritualidade',
    teamId: 'team-bem-estar',
    details: [
      '1- Avisar do banho: momento para aquela roupa especial (Casal Coordenador);',
      '2- Homens tomam banho primeiro, se arrumam e aguardam suas esposas no local de descontração;',
      '3- Mercadinho aberto no período de banho;',
      '4- Ajudar os noivos a se arrumarem (Equipe Homens);',
      '5- Ajudar as noivas a se arrumarem (Equipe Mulheres);',
      '6- Preparativos para a missa: Igreja decorada, galhinho verde, bacia com água para as bênçãos (Decoração e Espiritualidade);',
      '7- Preparar a sala de palestras para o baile (Boa Ordem e Alegria);',
      '8- 18h40: Avisar que está esgotado o tempo passando nos quartos (Casal Sineteiro);',
      '9- 18h50: Preparativos com os noivos - colocar a tiara nas mulheres e os botons nos homens.'
    ]
  },
  {
    id: 'sab-1900',
    day: 'sabado',
    time: '19h00',
    title: 'MISSA - BÊNÇÃO DOS CASAIS',
    responsible: 'Sacerdote / Equipe Alegria / Espiritualidade',
    teamId: 'team-espiritualidade',
    location: 'Capela / Igreja',
    isHighlight: true,
    details: [
      '1- Celebração da Santa Missa com renovação e bênção dos casais;',
      '2- Cantos litúrgicos preparados pela Equipe Alegria.'
    ]
  },
  {
    id: 'sab-2030',
    day: 'sabado',
    time: '20h30',
    title: 'JANTAR ROMÂNTICO',
    responsible: 'Casal Coordenador & Equipe Alegria',
    teamId: 'team-coord',
    location: 'Refeitório Decorado',
    isHighlight: true,
    details: [
      '1- Convidar para o jantar romântico (Casal Coordenador);',
      '2- Música e agradecimento pelo alimento (Equipe Alegria);',
      '3- Podem levar as lembrancinhas: Taças com rosas e velas.'
    ]
  },
  {
    id: 'sab-2130',
    day: 'sabado',
    time: '21h30',
    title: 'BAILE DOS CASAIS',
    responsible: 'Casal Coordenador & Equipe Alegria',
    teamId: 'team-alegria',
    location: 'Sala de Eventos / Palestras',
    isHighlight: true,
    details: [
      '1- Convidar para o baile (Casal Coordenador);',
      '2- Músicas animadas e dança dos casais.'
    ]
  },
  {
    id: 'sab-2230',
    day: 'sabado',
    time: '22h30',
    title: 'ORAÇÃO DA NOITE NA CAPELA',
    responsible: 'Casal Espiritualidade & Casal Coordenador',
    teamId: 'team-espiritualidade',
    location: 'Capela',
    details: [
      '1- Seguir para a capela para momento de oração da noite (Casal Coordenador);',
      '2- Realizar a oração da noite (Casal Espiritualidade);',
      '3- Convidar a todos para dirigirem-se a seus quartos;',
      '4- Lembrar que o mercadinho está aberto;',
      '5- Informar que ao toque da sineta terão um tempo para dirigirem-se ao local de descontração para início do domingo;',
      '6- Verificar se os néos se recolheram em seus quartos (Casal Bem Estar).'
    ]
  },
  {
    id: 'sab-2300',
    day: 'sabado',
    time: '23h00',
    title: 'SERENATA NOS QUARTOS',
    responsible: 'Equipe Alegria / Violeiros',
    teamId: 'team-alegria',
    songIds: ['song-serenata', 'song-boa-noite'],
    isHighlight: true,
    details: [
      '1- Tocar e cantar a serenata nos corredores dos quartos dos néos.'
    ]
  },

  // ===================== DOMINGO =====================
  {
    id: 'dom-0600',
    day: 'domingo',
    time: '06h00',
    title: 'DESPERTAR DA INTERNA',
    responsible: 'Casal Sineteiro',
    teamId: 'team-sineteiro',
    details: [
      '1- Acordar a interna com leve toque na porta;',
      '2- Aguardar a resposta que acordaram.'
    ]
  },
  {
    id: 'dom-0615',
    day: 'domingo',
    time: '06h15',
    title: 'INTERNA: MOMENTO DE ORAÇÃO NA CAPELA',
    responsible: 'Todos / Equipe Completa',
    teamId: 'team-todos',
    location: 'Capela',
    details: [
      '1- Momento de oração da equipe interna na capela.'
    ]
  },
  {
    id: 'dom-0630',
    day: 'domingo',
    time: '06h30',
    title: 'DESPERTAR DOS NEOS',
    responsible: 'Casal Sineteiro',
    teamId: 'team-sineteiro',
    details: [
      '1- Acordar os néos através da sineta;',
      '2- Estipular tempo e verificar se não ficou ninguém nos quartos.'
    ]
  },
  {
    id: 'dom-0645',
    day: 'domingo',
    time: '06h45',
    title: 'LOCAL DA DESCONTRAÇÃO PÉ DA ESCADA',
    responsible: 'Equipe Alegria, Espiritualidade, Ligação, Coordenador, Boa Ordem',
    teamId: 'team-alegria',
    songIds: ['song-utopia'],
    location: 'Pé da Escada',
    details: [
      '1- Músicas conforme os néos vão descendo (Equipe Alegria);',
      '2- Preparar a capela para a oração da manhã => arrumar os pezinhos e o galho verde (Casal Espiritualidade);',
      '3- Avisar que a capela está pronta (Casal Ligação);',
      '4- Convidar todos para visitarem a capela (Casal Coordenador);',
      '5- Colocar as lembranças nas carteiras da sala de palestras: PLANO DE DEUS (Casal Boa Ordem).'
    ]
  },
  {
    id: 'dom-0700',
    day: 'domingo',
    time: '07h00',
    title: 'ORAÇÃO NA CAPELA & MEDITAÇÃO OS DISCÍPULOS DE EMAÚS',
    responsible: 'EDSON e DALVA / Alegria / Ligação',
    teamId: 'team-espiritualidade',
    location: 'Capela',
    isHighlight: true,
    details: [
      '1- Músicas na capela (Equipe Alegria);',
      '2- MEDITAÇÃO OS DISCÍPULOS DE EMAÚS (Lucas 24, 13-35) por EDSON e DALVA;',
      '3- Músicas adicionais (Equipe Alegria);',
      '4- Verificar os preparativos para o café (Casal Ligação);',
      '5- Colocar lembrancinhas na sala de palestras: QUALIDADE DE VIDA (Casal Boa Ordem);',
      '6- Convidar a todos para se dirigirem ao refeitório para o café (Casal Coordenador).'
    ]
  },
  {
    id: 'dom-0725',
    day: 'domingo',
    time: '07h25',
    title: 'REFEITÓRIO - CAFÉ DA MANHÃ',
    responsible: 'Equipe Alegria, Espiritualidade, Coordenador',
    teamId: 'team-alegria',
    songIds: ['song-bencao-alimentos'],
    location: 'Refeitório',
    details: [
      '1- Cantar músicas e orações de bênção e agradecimento dos alimentos (Equipe Alegria);',
      '2- Convidar a palestrante (Val Rodrigues) para ir até a capela para momento de oração de entrega (Casal Espiritualidade);',
      '3- Avisar que haverá um intervalo de 5 minutos (Casal Coordenador);',
      '4- Avisar que ao toque da sineta dirigir-se à sala de palestras.'
    ]
  },
  {
    id: 'dom-0800',
    day: 'domingo',
    time: '08h00',
    title: 'PALESTRA: QUALIDADE DE VIDA',
    responsible: 'VAL RODRIGUES / Alegria / Coordenador',
    teamId: 'team-coord',
    location: 'Sala de Palestras',
    isHighlight: true,
    details: [
      '1- Música de animação (Equipe Alegria);',
      '2- Apresentar a palestrante VAL RODRIGUES (Casal Coordenador);',
      '3- Convidar os próximos palestrantes (Jorge e Dirce) para momento de oração na capela (Casais Espiritualidade);',
      '4- Cumprimentar, agradecer e entregar uma lembrança ao final da palestra (Casal Coordenador);',
      '5- Avisar do intervalo para irem ao banheiro;',
      '6- Colocar lembrancinhas na sala de palestras: PAIS E FILHOS - Bauzinho com bombom (Casal Boa Ordem).'
    ]
  },
  {
    id: 'dom-0915',
    day: 'domingo',
    time: '09h15',
    title: 'PALESTRA: PAIS E FILHOS',
    responsible: 'JORGE E DIRCE / Coordenador / Secretaria / Boa Ordem',
    teamId: 'team-coord',
    location: 'Sala de Palestras',
    songIds: ['song-oracao-familia'],
    isHighlight: true,
    details: [
      '1- Música de animação;',
      '2- Apresentar os palestrantes JORGE E DIRCE (Casal Coordenador);',
      '3- Organizar as rosas para os palestrantes (Casal Boa Ordem);',
      '4- Colocar o saco de choro nos quartos (Casais Secretaria);',
      '5- Cumprimentar, agradecer e entregar uma lembrança ao final da palestra (Casal Coordenador);',
      '6- Colocar um vaso para receber as rosas ao lado do Santíssimo na Capela (Casais Espiritualidade).'
    ]
  },
  {
    id: 'dom-1015',
    day: 'domingo',
    time: '10h15',
    title: 'MOMENTO DE ADORAÇÃO AO SANTÍSSIMO',
    responsible: 'Casais Espiritualidade & Casal Coordenador',
    teamId: 'team-espiritualidade',
    location: 'Capela',
    isHighlight: true,
    details: [
      '1- Ao final da palestra, convidar a todos para ir à capela para o MOMENTO DE ADORAÇÃO (Casais Espiritualidade);',
      '2- Convidar os NEOS para ir até os quartos (Casal Coordenador);',
      '3- Retornar ao local de descontração ao toque da sineta no pé da escada.'
    ]
  },
  {
    id: 'dom-1115',
    day: 'domingo',
    time: '11h15',
    title: 'MESA REDONDA',
    responsible: 'Casal Coordenador & Casal Bem Estar',
    teamId: 'team-bem-estar',
    details: [
      '1- Convidar os NEOS para a mesa redonda (Casal Coordenador);',
      '2- Informar a composição de cada mesa;',
      '3- Apresentar os casais que os néos devem acompanhar;',
      '4- Entregar os lencinhos para os casais responsáveis por cada mesa redonda (Casal Bem Estar);',
      '5- Passar nas mesas redondas e avisar que tem mais 5 minutos (Casal Sineteiro);',
      '6- Tocar a sineta para retorno ao local de descontração (Casal Sineteiro);',
      '7- Verificar se o almoço está tudo OK e avisar o casal coordenador (Casal Ligação).'
    ]
  },
  {
    id: 'dom-1200',
    day: 'domingo',
    time: '12h00',
    title: 'REFEITÓRIO - ALMOÇO & APRESENTAÇÃO DA COZINHA',
    responsible: 'Equipe Alegria & Casal Coordenador',
    teamId: 'team-alegria',
    songIds: ['song-bencao-alimentos'],
    location: 'Refeitório & Cozinha',
    isHighlight: true,
    details: [
      '1- Cantar músicas e as orações de bênção de agradecimentos dos alimentos (Equipe Alegria);',
      '2- Apresentação da cozinha e musiquinha do pessoal da cozinha (Casal Coordenador);',
      '3- Equipe da secretaria e externa (Frei e outros);',
      '4- Apresentar a cozinha para os néos com passagem pela cozinha;',
      '5- Informar para dirigirem-se até os quartos para arrumar as bagagens (Casal Coordenador);',
      '6- Ao toque da sineta, retornar à sala de palestras.'
    ]
  },
  {
    id: 'dom-1400',
    day: 'domingo',
    time: '14h00',
    title: 'APRESENTAÇÃO DO AUDIOVISUAL & TESTEMUNHOS',
    responsible: 'Casal Cine Foto & Casal Coordenador',
    teamId: 'team-cinefoto',
    location: 'Sala de Palestras',
    isHighlight: true,
    details: [
      '1- Apresentação do Audiovisual com as atividades realizadas durante o retiro (Casal Cine Foto);',
      '2- TESTEMUNHOS E AGRADECIMENTOS: Dar um tempo para os CASAIS NEOS darem seus testemunhos (Casal Coordenador);',
      '3- ENTREGA DOS CRUCIFIXOS: Entregar os crucifixos aos NEOS (Padrinhos).'
    ]
  },
  {
    id: 'dom-1530',
    day: 'domingo',
    time: '15h30',
    title: 'MOMENTO PIQUENIQUE & DESPEDIDA',
    responsible: 'Equipe Completa',
    teamId: 'team-todos',
    details: [
      '1- Momento de piquenique antes do embarque;',
      '2- Confraternização e fotos finais.'
    ]
  },
  {
    id: 'dom-1600',
    day: 'domingo',
    time: '16h00',
    title: 'EMBARQUE DOS NEOS & REENCONTRO',
    responsible: 'Acolhida & Casal Coordenador',
    teamId: 'team-coord',
    location: 'Casa de Retiro -> Comunidade São Miguel Arcanjo',
    isHighlight: true,
    details: [
      '1- Embarque dos NEOS na casa de retiro;',
      '2- Recepção das famílias na Capela São Miguel Arcanjo a partir das 16h50 (Equipe de Acolhida);',
      '3- Chegada do ônibus na Capela São Miguel Arcanjo a partir das 17h00;',
      '4- REENCONTRO: Confraternização (Comunidade São Miguel Arcanjo - Jd. Amélia) => Levar um prato para confraternização.'
    ]
  }
];

export const INITIAL_RETREAT_DATA: RetreatData = {
  retreatTitle: 'Retiro de Casais',
  retreatSubtitle: 'Roteiro & Organização Geral',
  events: DEFAULT_EVENTS,
  teams: DEFAULT_TEAMS,
  songs: DEFAULT_SONGS
};
