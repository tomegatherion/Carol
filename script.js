// Dados dos arquivos markdown
const firstMeetingText = `Nos conhecemos online, e desde os primeiros dias passávamos horas e horas conversando, de manhã, de tarde, à noite e até de madrugada. Falávamos sobre tudo, sobre nós, sobre o mundo, sobre a vida, e logo começamos a partilhar nossos sonhos. Um segredo meu é que, na escrita, tenho dificuldade de entender o humor, então eu nunca sabia se você estava brincando ou era "louquinha", mas isso só aumentava a minha curiosidade por você.

Chegou o dia de marcar o nosso primeiro encontro. Desde então, ensaiei várias coisas para falar e como me comportar, mas por algum motivo misterioso, nunca me senti tão nervoso. No final, nem segui absolutamente nada do que planejei, porque a ansiedade tomou conta. E como se a vida já quisesse testar nossa determinação, um chuveiro quebrou antes do nosso date, e depois, quando reprogramamos, meu celular parou de funcionar do nada. Fiquei desesperado, tentando entrar em contato a todo custo, jamais queria que você achasse que te dei um gelo e um bolo, mas felizmente, tudo deu certo.

O dia era 28 de abril. A primeira vez que te vi pessoalmente, seu perfume entrou no meu olfato de uma forma tão intensa que eu esqueci de interagir com você. Só conseguia pensar: "que rosa mais cheirosa". Depois que te peguei na sua casa, o caminho até o LifeBox pareceu uma eternidade. Minha ansiedade aumentava a cada segundo, e eu não entendia por que nunca tinha me sentido assim antes. Mas, apesar da nervação, aquele caminho eternamente longo foi bom para conversarmos mais. E foi nesse dia que percebi que, em qualquer eternidade, eu prefiro estar com você ao meu lado.

Assim que descemos e pude olhar melhor para você por mais alguns segundos, foi o suficiente para sentir uma vontade imensa de te beijar. Você me fez descobrir coisas inesperadas, como o quanto eu gosto de ar condicionado e de lentes de contato – coisas que só passaram a ter sentido porque estavam ligadas a você. Quando percebi que você também estava nervosa, até desisti da ideia momentânea de "roubar seus rins", afinal, a adrenalina não é boa para transplantes.

Fui para casa ouvindo "Proibida Pra Mim", e desde aquele dia, nossos dias nunca mais foram os mesmos. Conversávamos mesmo à distância como se estivéssemos juntos, e os encontros aos finais de semana foram se tornando cada vez mais frequentes, assim como as pequenas visitas no seu trabalho nos intervalos. A cada dia, nos tornávamos mais próximos, e cada vez mais inseríamos um na vida do outro.

No meu aniversário, o maior presente foi descobrir, através dos seus atos, o que você realmente sentia por mim. Não sei exatamente quando comecei a perceber que, ao imaginar o futuro, eu sempre te via nele. Cada plano que rabiscava tinha você no centro. Eu já te amava, mas ainda não sabia que esse amor era tão profundo a ponto de te querer como a mulher da minha vida.

Dia 14 de agosto de 2024, demos o primeiro grande passo da nossa história. E hoje, eu quero celebrar um ano da segunda melhor escolha da minha vida – a primeira foi te conhecer.`;

const shakespeareQuote = `"Se por te beijar tivesse que ir depois para o inferno, eu faria isso. Assim poderia me gabar aos demônios de ter estado no paraíso sem nunca entrar."
— William Shakespeare`;

const differences = [
    "Nossos gostos musicais são diferentes, existe uma coerência nos gêneros que você escuta, eu sou mais caótico.",
    "Eu sou uma pessoa matutina, ela vespertina.",
    "Definitivamente não concordamos com a quantidade de sal na cozinha.",
    "Você é uma social, adora estar rodeada de pessoas, em eventos, festas. Eu também gosto, principalmente se puder chegar atrasado e sair mais cedo. Acho que é o meu jeito de me proteger um pouco da multidão, mas com você sempre me sinto à vontade.",
    "Você se sente feliz em seguir tradições e celebrar datas com rituais familiares. Eu respeito, mas prefiro analisar se tudo isso faz sentido, talvez criar nossa própria forma de celebrar. Lembro que no início eu achava que você era exagerada com as datas, mas agora entendo que é sua forma de mostrar amor, e isso me toca profundamente.",
    "Sobre filmes e séries, você gosta de histórias com finais felizes e personagens cativantes. Eu gosto de tramas complexas, coisas que me fazem pensar sobre o mundo e sobre o futuro, dilemas, ficção, ou onde o certo e o errado se tornam confusos. Lembro de uma vez que assistimos um filme, você chorou no final e eu tinha achado o final óbvio, mas depois vi que as suas lágrimas não se tratava de lógica, e sim emoção, e isso me fez amar ainda mais essa sua sensibilidade."
];

const testimonialText = `O amor não foi uma escolha, foi uma revelação.

Antes de você, eu pensava que o amor era uma construção, algo que a gente planejava, como um projeto. Mas você chegou, com seu perfume inesquecível e sua risada contagiante, e mostrou que o amor é uma força da natureza, algo que simplesmente acontece, te envolve, te transforma.

Você me ensinou que estar nervoso na sua presença não é fraqueza, é a certeza de que o que sinto é real. Você me mostrou que não preciso ensaiar palavras para te impressionar, porque é a minha verdade que te conquista, mesmo que eu tropece nas minhas próprias intenções.

Com você, descobri que o silêncio pode ser tão significativo quanto as palavras mais sinceras. Descobri que o meu caos interno encontra equilíbrio no seu olhar. E que a felicidade não está nas grandes conquistas, mas em pequenos momentos, como caminhar ao seu lado por uma eternidade que parece um segundo.

Você me fez acreditar em finais felizes, sem precisar de roteiro. Você me fez querer escrever nossa história, um capítulo de cada vez, com todas as imperfeições e todas as promessas do mundo.

Eu não te escolhi para amar.
Eu te escolhi para ser minha eternidade, meu hoje e todos os meus futuros.

E pensar que tudo começou com um simples "oi" em uma tela, e hoje você é o motivo do meu sorriso matinal e da minha última lembrança antes de dormir. Que as manhãs continuem nos trazendo motivos para rir, e que os desafios que vierem apenas nos fortaleçam. Porque com você, até o comum se torna extraordinário.

Você é a razão pela qual acredito que o melhor ainda está por vir, e é com você que quero viver todas as histórias que a vida nos fará escrever.`;

const photoCaptions = [
    "O amor é o desejo da posse perpétua do bem. — Platão",
    "O amor é composto por uma única alma habitando dois corpos. — Aristóteles",
    "O amor é o desejo de estar unido à beleza para sempre. — Sócrates",
    "Há sempre um pouco de loucura no amor. Mas há também sempre um pouco de razão na loucura. — Nietzsche",
    "O amor é o gênio da espécie. — Schopenhauer",
    "O amor revela o que é divino em uma pessoa. — Kierkegaard",
    "O amor é a unidade de duas almas em um único pensamento. — Hegel",
    "O amor é a alegria acompanhada da ideia de uma causa externa. — Spinoza",
    "O amor é um delírio onde a mente se perde para se encontrar novamente. — Rousseau",
    "O amor não é uma questão de emoção, mas de vontade e ação. — Kant",
    "O amor não é um fogo que começa por si só; deve ser cultivado com cuidado. — Sêneca",
    "A essência do amor é querer o bem do outro. — Agostinho",
    "Amar é querer o bem do outro. — Tomás de Aquino",
    "No amor, não se possui, se dá. — Sartre",
    "O amor é a harmonia dos opostos. — Heráclito",
    "O amor é uma loteria onde o prêmio é frequentemente a loucura. — Diógenes",
    "O amor é uma questão de vontade; não é um sentimento, mas um ato da alma. — Epicteto",
    "O amor é a força que une todas as coisas. — Plotino",
    "O amor é o vínculo que une o universo. — Boécio",
    "Onde há amor, há virtude, e onde há virtude, há beleza. — Confúcio",
    "O amor não é um sentimento, mas uma arte; requer conhecimento, esforço e comprometimento. — Erich Fromm",
    "O encontro de duas personalidades é como o contato de duas substâncias químicas: se há reação, ambas são transformadas. — Carl Jung",
    "Amor e trabalho são os pilares fundamentais de nossa humanidade. — Freud",
    "O amor é um ato de coragem, não de medo. — Paulo Freire",
    "A escuridão não pode expulsar a escuridão; apenas a luz pode fazer isso. O ódio não pode expulsar o ódio; apenas o amor pode. — Martin Luther King Jr.",
    "Para criaturas pequenas como nós, a vastidão só é suportável através do amor. — Carl Sagan",
    "O amor surge mais naturalmente no coração humano do que seu oposto. — Nelson Mandela",
    "A salvação do homem está através do amor e no amor. — Viktor Frankl",
    "O amor é a única resposta sã e satisfatória para o problema da existência humana. — Hannah Arendt",
    "O amor não é algo que possa ser reduzido a um único ato ou relacionamento. — Michel Foucault",
    "O amor é um ato de fé, e quem não está pronto para correr o risco não merece experimentá-lo. — Edward Said",
    "O amor é uma ação, nunca simplesmente um sentimento. — bell hooks",
    "O amor é a única força capaz de transformar um inimigo em um amigo. — Albert Schweitzer",
    "O amor é um professor melhor do que o dever. — Albert Einstein",
    "O amor é o cuidado ativo pela vida e pelo crescimento do que amamos. — Simone Weil",
    "O amor é a chave para toda harmonia social. — Charles Fourier",
    "O amor é a recusa de deixar outro sofrer. — Herbert Marcuse",
    "O amor é uma prática de liberdade. — Judith Butler",
    "O amor é um ato de perdão infinito. — John Gray",
    "O amor é um compromisso com o florescimento de outro. — Martha Nussbaum",
    "O amor é a ponte entre você e tudo. — Rumi",
    "Amo-te como se amam certas coisas obscuras, em segredo, entre a sombra e a alma. — Pablo Neruda",
    "O amor é anterior à vida, posterior à morte, inicial da criação e o expoente da respiração. — Emily Dickinson",
    "O amor é a única realidade e não é um mero sentimento. É a verdade última que reside no coração da criação. — Rabindranath Tagore",
    "O amor não é amor que muda quando encontra mudança. — Shakespeare",
    "O amor é minha religião — eu poderia morrer por ela. — John Keats",
    "A grande arte do amor é apenas uma hipocrisia contínua. — Lord Byron",
    "Aprendi que estar com aqueles que eu gosto é suficiente. — Walt Whitman",
    "O amor é uma sombra na parede, uma coisa cintilante. — Sylvia Plath",
    "O amor é quase ele próprio quando o aqui e agora deixam de importar. — T.S. Eliot",
    "Amor, que move o sol e as outras estrelas. — Dante Alighieri",
    "De que maneira eu te amo? Deixa-me contar os modos. — Elizabeth Barrett Browning",
    "O amor é um fogo que queima invisível. — Federico García Lorca",
    "O amor não reconhece barreiras. Ele salta obstáculos, ultrapassa cercas, penetra muros para chegar ao seu destino cheio de esperança. — Maya Angelou",
    "O amor é a única luz que pode iluminar as profundezas da alma. — Charles Baudelaire",
    "A vida é uma flor da qual o amor é o mel. — Victor Hugo",
    "Seja qual for a substância de que nossas almas são feitas, a dele e a minha são iguais. — Emily Brontë",
    "O amor é um desejo irresistível de ser irresistivelmente desejado. — Robert Frost",
    "O amor é o filho da ilusão e o pai da desilusão. — Langston Hughes",
    "O amor é um mistério infinito, porque aquele que o cria nunca o entende, e aquele que o sente nunca o explica. — Octavio Paz"
];

// Função para carregar o texto do primeiro encontro
document.addEventListener('DOMContentLoaded', function() {
    // Iniciar a chuva de rosas imediatamente, mas escondida
    startRoseRain();
    
    // Mostrar tela de carregamento por 4 segundos
    setTimeout(function() {
        // Iniciar a transição
        const loadingScreen = document.getElementById('loading-screen');
        loadingScreen.classList.add('fade-out');
        
        // Após a transição da tela de carregamento, mostrar o conteúdo principal
        setTimeout(function() {
            loadingScreen.style.display = 'none';
            document.getElementById('main-content').style.display = 'block';
            document.getElementById('main-content').classList.add('fade-in');
            
            // Inicializar o conteúdo da página principal
            initializeMainContent();
        }, 1000); // Tempo da animação de fade out
    }, 4000); // 4 segundos de tela de carregamento
});

// Função para iniciar a chuva de rosas
function startRoseRain() {
    const roseRain = document.getElementById('rose-rain');
    roseRain.style.display = 'block';
    
    // Criar muitas rosas no início
    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            createRose();
        }, i * 30); // Criar uma rosa a cada 30ms para mais rosas no início
    }
    
    // Continuar criando rosas por mais 5 segundos
    for (let i = 100; i < 300; i++) {
        setTimeout(() => {
            createRose();
        }, (i - 100) * 100 + 3000); // Depois de 3 segundos, criar mais rosas
    }
}

// Função para criar uma rosa
function createRose() {
    const roseRain = document.getElementById('rose-rain');
    const rose = document.createElement('div');
    rose.innerHTML = '🌹';
    rose.classList.add('rose');
    
    // Posição aleatória horizontal
    const left = Math.random() * 100;
    rose.style.left = `${left}vw`;
    
    // Tamanho aleatório
    const size = Math.random() * 20 + 10;
    rose.style.fontSize = `${size}px`;
    
    // Duração aleatória da animação
    const duration = Math.random() * 3 + 2;
    rose.style.animationDuration = `${duration}s`;
    
    roseRain.appendChild(rose);
    
    // Remover a rosa após a animação
    setTimeout(() => {
        rose.remove();
    }, duration * 1000);
}

// Função para inicializar o conteúdo principal
function initializeMainContent() {
    document.getElementById('first-meeting-text').textContent = firstMeetingText;
    document.getElementById('shakespeare-quote-text').innerHTML = shakespeareQuote;
    document.getElementById('testimonial-text').textContent = testimonialText;
    
    // Inicializar carrosséis
    initializeCarousel('carousel1', 10);
    initializeCarousel('carousel2', 10);
    
    // Inicializar diferenças
    let currentDifference = 0;
    const differenceElement = document.getElementById('difference-text');
    differenceElement.textContent = differences[currentDifference];
    
    document.getElementById('next-difference').addEventListener('click', function() {
        currentDifference = (currentDifference + 1) % differences.length;
        differenceElement.textContent = differences[currentDifference];
    });
    
    // Inicializar galeria
    initializeGallery();
}

// Função para inicializar carrossel
function initializeCarousel(carouselId, count) {
    const carousel = document.getElementById(carouselId);
    const startIndex = carouselId === 'carousel1' ? 0 : 10;
    
    for (let i = startIndex; i < startIndex + count; i++) {
        const slide = document.createElement('div');
        slide.className = 'carousel-slide';
        const img = document.createElement('img');
        img.src = `Fotos/IMG-20250815-WA01${String(i + 69).padStart(2, '0')}.jpg`;
        img.alt = `Foto ${i + 1}`;
        slide.appendChild(img);
        carousel.appendChild(slide);
    }
    
    // Inicializar posição do carrossel
    carousel.style.transform = 'translateX(0)';
    carousel.currentSlide = 0;
}

// Função para mover slides do carrossel
function moveSlide(direction, carouselId) {
    const carousel = document.getElementById(carouselId);
    const totalSlides = carousel.children.length;
    carousel.currentSlide = (carousel.currentSlide + direction + totalSlides) % totalSlides;
    const translateX = -carousel.currentSlide * 100;
    carousel.style.transform = `translateX(${translateX}%)`;
}

// Função para inicializar galeria
function initializeGallery() {
    const gallery = document.getElementById('photo-gallery-container');
    // Usar fotos de 20 em diante (já usamos 0-19 nos carrosséis)
    // Ajustado para parar na última foto existente (IMG-20250815-WA0227.jpg que é a foto 59)
    for (let i = 20; i < 59; i++) { 
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        
        const img = document.createElement('img');
        img.src = `Fotos/IMG-20250815-WA0${String(i + 169).padStart(3, '0')}.jpg`;
        img.alt = `Foto da galeria ${i + 1}`;
        
        const caption = document.createElement('div');
        caption.className = 'caption';
        // Usar legendas cíclicas se tivermos mais fotos que legendas
        caption.textContent = photoCaptions[i % photoCaptions.length];
        
        galleryItem.appendChild(img);
        galleryItem.appendChild(caption);
        gallery.appendChild(galleryItem);
    }
}