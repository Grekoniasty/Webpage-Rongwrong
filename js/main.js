// =============================================
// RONGWRONG - Main JavaScript
// =============================================

// Project Data
const projectData = {
    events: [
        {
            id: 'wroclaw-2026',
            title: 'Za siodma gora',
            subtitle: 'Warszawa',
            year: 'wroclaw-2026',
            date: '30.05.2026',
            thumbnail: 'img/events/warsaw-2021-thumb.jpg',
            description: {
                en: 'Special event at the heart of Requiem Records, featuring 2 Concerts, 2 Bands. Dedicated to former Rongwrong Member - Marcin Kamieniak',
                pl: 'Wyjątkowe wydarzenie w sercu Requiem Records, 2 Koncerty, 2 Zespoły. Dedykowany byłemu Członkowi Rongwrong - Marcinowi Kamieniakowi'
            },
            members: 'Maciek, Andrzej, Mikołaj',
            gallery: [
                'img/events/warsaw-2021-1.jpg',
                'img/events/warsaw-2021-2.jpg',
                'img/events/warsaw-2021-3.jpg'
            ],
            videos: [
                        { url: 'https://m.youtube.com/watch?v=Ajwvo59xfU8&list=RDAjwvo59xfU8&start_radio=1&pp=ygUUWmF3aWVqZSBkbGEga2FtaWVuaWGgBwE%3D', thumb: 'img/events/warsaw-2021-thumb.jpg' }
                    ]
        },
        {
            id: 'warsaw-2021',
            title: 'Zawieje dla Kamienia',
            subtitle: 'Warszawa',
            year: '2024',
            date: '12.10.2024',
            thumbnail: 'img/events/warsaw-2021-thumb.jpg',
            description: {
                en: 'Special event at the heart of Requiem Records, featuring 2 Concerts, 2 Bands. Dedicated to former Rongwrong Member - Marcin Kamieniak',
                pl: 'Wyjątkowe wydarzenie w sercu Requiem Records, 2 Koncerty, 2 Zespoły. Dedykowany byłemu Członkowi Rongwrong - Marcinowi Kamieniakowi'
            },
            members: 'Maciek, Andrzej',
            gallery: [
                'img/events/warsaw-2021-1.jpg',
                'img/events/warsaw-2021-2.jpg',
                'img/events/warsaw-2021-3.jpg'
            ],
            videos: [
                        { url: 'https://m.youtube.com/watch?v=Ajwvo59xfU8&list=RDAjwvo59xfU8&start_radio=1&pp=ygUUWmF3aWVqZSBkbGEga2FtaWVuaWGgBwE%3D', thumb: 'img/events/warsaw-2021-thumb.jpg' }
                    ]
        },
        {
            id: 'temple-of-silence-2024',
            title: 'Temple of Silence',
            subtitle: 'Ostrów Wielkopolski',
            year: '2024',
            date: '30-31.08.2024',
            thumbnail: 'img/events/temple-of-silence-thumb.jpg',
            description: {
                en: 'A transcendent two-day performance at Temple of Silence festival, where sound becomes ritual and space transforms into a vessel for collective experience.',
                pl: 'Transcendentny dwudniowy występ na festiwalu Temple of Silence, gdzie dźwięk staje się rytuałem, a przestrzeń przekształca się w naczynie dla wspólnego doświadczenia.'
            },
            members: 'Maciej, Andrzej, Mikołaj',
            gallery: [
                'img/events/temple-of-silence-1.jpg',
                'img/events/temple-of-silence-2.jpg',
                'img/events/temple-of-silence-3.jpg',
                'img/events/temple-of-silence-4.jpg'
            ]
        },
        {
            id: 'tour-2024',
            title: 'Tour Furia-Totenmesse',
            subtitle: 'Białystok / Olsztyn / Łódź',
            year: '2024',
            date: '24-26.05.2024',
            thumbnail: 'img/events/tour-2024-thumb.jpg',
            description: {
                en: 'A new experience in a different acoustic reality. A three-day tour with bands Furia and Totenmesse.',
                pl: 'Nowe doświadczenie w innej przestrzeni dźwiękowej. Trzydniowa trasa koncertowa z kapelami Furia i Totenmesse.'
            },
            members: 'Maciej, Andrzej, Mikołaj',
            gallery: [
                'img/events/tour-2024-1.jpg',
                'img/events/tour-2024-2.jpg',
                'img/events/tour-2024-3.jpg',
                'img/events/tour-2024-4.jpg'
            ]
        },
        {
            id: 'Wroclaw-2022',
            title: 'XXI Wroclaw Industrial Festival',
            subtitle: 'Wrocław',
            year: '2022',
            date: '3-6.11.2022',
            thumbnail: 'img/events/wroclaw-2022-thumb.jpg',
            description: {
                en: 'Another edition of the iconic festival featuring our performance.',
                pl: 'Kolejna edycja kultowego festiwalu z naszym udziałem.'
            },
            members: 'Maciej, Andrzej',
            gallery: [
                'img/events/wroclaw-2022-1.jpg',
                'img/events/wroclaw-2022-2.jpg'
            ]
        },
        {
            id: 'gorlice-2022',
            title: 'Gorlice Ambient Festival',
            subtitle: 'Gorlice',
            year: '2022',
            date: '15.07.2022',
            thumbnail: 'img/events/gorlice-thumb.jpg',
            description: {
                en: 'Participation in the iconic ambient festival in Gorlice. The Homunkulus project was presented for the first time.',
                pl: 'Udział w kultowym festiwalu ambientowym w Gorlicach. Zaprezentowany po raz pierwszy projekt Homunkulus.'
            },
            members: 'Maciej, Andrzej, Mikołaj',
            gallery: [
                'img/events/gorlice-1.jpg'
            ]
        },
        {
            id: 'magic-garden',
            title: 'Magic Garden',
            subtitle: 'Warszawa',
            year: '2021',
            date: '21.08.2021',
            thumbnail: 'img/events/magic-garden-thumb.jpg',
            description: {
                en: 'An spectacular evening at Magic Garden in Warsaw, hosted by Requiem Records. The story of Alfons Czahor returns once again.',
                pl: 'Spektakularny wieczór w Warszawie, w Magicznym Ogrodzie, zorganizowany przez Requiem Records. Historia Alfonsa czahora znowu powraca'
            },
            members: 'Maciek, Andrzej',
            gallery: [
                'img/events/magic-garden-1.jpg',
                'img/events/magic-garden-2.jpg',
                'img/events/magic-garden-3.jpg'
            ]
        },
        {
            id: 'bikiniarze-2021',
            title: 'Od Bikiniarzy Do Hipsterów',
            subtitle: 'Warszawa',
            year: '2021',
            date: '09.07.2021',
            thumbnail: 'img/events/bikiniarze-thumb.jpg',
            description: {
                en: 'A unique festival, in a full squad, exploring the cultural continuum from post-war subcultures to contemporary movements.',
                pl: 'Unikalny festiwal, w pełnym składzie, eksplorujący kulturowe continuum od subkultur powojennych do współczesnych ruchów. '
            },
            members: 'Maciek, Marcin, Andrzej, Piotr',
            gallery: [
                'img/events/bikiniarze-1.jpg',
                'img/events/bikiniarze-2.jpg',
                'img/events/bikiniarze-3.jpg'
            ]
        },
        {
            id: 'audiosphere-madrid',
            title: 'Audiosphere',
            subtitle: 'Museo Reina Sofia, Madrid',
            year: '2020',
            date: '2020-2021',
            thumbnail: 'img/events/audiosphere-thumb.jpg',
            description: {
                en: 'Rongwrong/Pojawa participated in AUDIOSPHERE: Sound Experimentation 1980-2020 at the Museo Nacional Centro de Arte Reina Sofia in Madrid. Curated by Francisco López, the exhibition featured over 700 sound pieces by around 800 artists from all over the world—the first exhibition focusing solely on the aural experience.',
                pl: 'Rongwrong/Pojawa wzięli udział w wystawie AUDIOSFERA: Eksperymentowanie z dźwiękiem 1980-2020 w Museo Nacional Centro de Arte Reina Sofia w Madrycie. Wystawa, kuratorowana przez Francisco Lópeza, prezentowała ponad 700 utworów dźwiękowych około 800 artystów z całego świata—pierwsza tego typu wystawa skupiona wyłącznie na doświadczeniu słuchowym.'
            },
            members: 'Rongwrong/Pojawa',
            gallery: [
                'img/events/audiosphere-1.jpg',
                'img/events/audiosphere-2.jpg'
            ]
        },
        {
            id: 'zawieje-2019',
            title: 'Zawieje X',
            subtitle: 'Warszawa',
            year: '2019',
            date: '26.10.2019',
            thumbnail: 'img/events/zawieje-thumb.jpg',
            description: {
                en: 'Zawieje is an intimate concert scene in the heart of Requiem Records—a space for just 21 people, with Artists within arm\'s reach and a series of individual invitations to unique, mysterious events. The visual setting of the project was prepared by Bukamade.',
                pl: 'Zawieje to kameralna scena koncertowa w sercu Requiem Records — przestrzeń dla zaledwie 21 osób, z Artystami na wyciągnięcie ręki i cyklem indywidualnych zaproszeń na unikatowe, owiane tajemnicą wydarzenia. Oprawę wizualną projektu przygotowało Bukamade.'
            },
            members: 'Maciek Piaseczyński, Mikołaj Piaseczyński',
            gallery: [
                'img/events/zawieje-1.jpg',
                'img/events/zawieje-2.jpg'
            ],
            videos: [
                        { url: 'https://www.youtube.com/watch?v=9EUWLR9T_fA', thumb: 'img/events/zawieje-thumb.jpg' }
                    ]
        },
        {
            id: 'pojawa-2017',
            title: 'XVI Wrocław Industrial Festival',
            subtitle: 'Wrocław',
            year: '2017',
            date: '2017',
            thumbnail: 'img/events/pojawa-thumb.jpg',
            description: {
                en: 'Debut at the iconic Industrial Festival in Wrocław. An audiovisual performance. Noise and Evolution, Emerging Ideas, Scheme and Rhythmic Pattern. The musical part is based on string instruments, field recordings, and voices.',
                pl: 'Debiut na kultowym Industrialu z Wrocławia. Performans audiowizualny. Szum i Ewolucja, Wyłaniające się Idee, Schemat i Wzorzec Rytmiczny. Część muzyczna oparta na instrumentach strunowych, nagraniach terenowych i głosach.'
            },
            members: 'Maciek, BUKA',
            gallery: [
                'img/events/pojawa-1.jpg',
                'img/events/pojawa-2.jpg',
                'img/events/pojawa-3.jpg'
            ]
        },
        {
            id: 'laznia-gdansk',
            title: 'Łaźnia Gdańsk',
            subtitle: 'Gdańsk',
            year: '2014',
            date: '2014',
            thumbnail: 'img/events/laznia-thumb.jpg',
            description: {
                en: 'Part of the IN PROGRESS concert series at Łaźnia Centre for Contemporary Art in Gdańsk, exploring the boundaries between sound art and performance.',
                pl: 'Część cyklu koncertów IN PROGRESS w Centrum Sztuki Współczesnej Łaźnia w Gdańsku, eksplorująca granice między sztuką dźwięku a performancem.'
            },
            members: 'Maciek',
            gallery: [
                'img/events/laznia-1.jpg'
            ]
        }
    ],
    albums: [
        {
            id: 'homunkulus-pojawa-2026',
            title: 'Homunkulus',
            year: 'in progress',
            thumbnail: 'img/albums/homunkulus-pojawa-thumb.jpg',
            description: {
                en: 'In the glow of an alchemical experiment we summon A story written long ago, yet never fully told. <br> An act of creation.  <br> A hidden being. <br>The deepest desire.',
                pl: 'W poświacie alchemicznego eksperymentu przywołamy dawno spisaną, lecz do końca nieopowiedzianą historię. <br>Akt twórczy, <br>Byt tajemny, <br>Najgłębsze pragnienie.'
            },
            label: 'Requiem Records',
            gallery: [
                'img/albums/homonkulus.jpg'
            ],
            mp4s: [
                        { src: 'img/events/homunkulus-vid.mp4', thumb: 'img/events/homonkulus-vid.jpg' }
        
            ]
        },
        {
            id: 'zawieje-dla-kamienia',
            title: 'Zawieje | dla Kamienia',
            year: '2024',
            thumbnail: 'img/albums/homonkulus1.jpeg',
            description: {
                en: 'The audio record of the event held on October 12, 2024. Rongwrong: Maciej Piaseczyński, Andrzej Pacewicz <br> The visual part of this project was prepared by Mikołaj Piaseczyński.',
                pl: 'Płyta audio z zapisem wydarzenia, które odbyło się 12 października 2024 r. Rongwrong: Maciej Piaseczyński, Andrzej Pacewicz <br>Część wizualną tego projektu przygotował Mikolaj Piaseczyński.'
            },
            label: 'Requiem Records',
            gallery: [
                'img/albums/homonkulus1.jpeg'
            ]
        },
        {
            id: 'zawieje',
            title: 'Zawieje X',
            year: '2019',
            thumbnail: 'img/albums/zawieje-thumb.jpg',
            description: {
                en: 'The audio record of the event held on October 26, 2019. <br> Rongwrong: Maciej Piaseczyński (electronics, guitar, effects, objects) and Mikołaj Piaseczyński (guitar, effects). The visual part of this project was prepared by Bukamade. <br><br> Zawieje is a concert scene in the heart of Requiem Records. Its unique atmosphere and Artists within arm\'s reach. An intimate space for just 21 people. A series in the format of individual invitations to unique events shrouded in mystery...',
                pl: 'Płyta audio z zapisem wydarzenia, które odbyło się 26 października 2019 r.<br> Rongwrong: Maciej Piaseczyński, (elektronika, gitara, efekty, przedmioty) i Mikołaj Piaseczyński (gitara, efekty). Część wizualną tego projektu została przygotowana przez Bukamade. <br><br> Zawieje to scena koncertowa w sercu Requiem Records. Wyjątkowy jej nastrój i Artyści na wyciągnięcie ręki. Przestrzeń intymna, jedynie dla 21 osób. Cykl w formacie indywidualnych zaproszeń na unikatowe wydarzenia owiane tajemnicą... '
            },
            label: 'Requiem Records',
            gallery: [
                'img/events/zawieje-1.jpg',
                'img/events/zawieje-2.jpg'
            ],
            videos: [
                { url: 'https://www.youtube.com/watch?v=9EUWLR9T_fA', thumb: 'img/events/zawieje-thumb.jpg' }
            ]
        },
        {
            id: 'krwy-2014',
            title: 'Krwy',
            year: '2014',
            thumbnail: 'img/albums/krwy-thumb.jpg',
            description: {
                en: 'Time is stuck in a complex weave of fate and events, and an unfinished story slips like a ghost between worlds. It is a sonic journey to special places marked by the echo of past events and forgotten presences.<br><br>Krwy is a ritual that summons traces of what has passed—and what may never have left.',
                pl: 'Czas utknął w zawiłym splocie losów i zdarzeń, a niedokończona historia przemyka niczym duch między światami. To dźwiękowa podróż do miejsc szczególnych, naznaczonych echem dawnych wydarzeń oraz zapomnianych obecności.<br><br>Krwy to rytuał przywołujący ślady tego, co minęło — i tego, co być może nigdy nie odeszło.'
            },
            label: 'Requiem Records',
            listen: 'https://soundcloud.com/rongwrong-music/sets/krwy-1',
            gallery: [
                'img/albums/krwy1.jpg',
                'img/albums/krwy2.jpg'
            ],
            videos: [
                { url: 'https://www.youtube.com/watch?v=BgfSBAhCHd4', thumb: 'img/albums/krwythumb.jpg' }
            ]
        },
        {
            id: 'miniatury',
            title: 'Eugeniusz Rudnik | Miniatury',
            year: '1975-1995',
            thumbnail: 'img/albums/miniatury-thumb.jpg',
            description: {
                en: 'Second release of the legend of the Polish Radio Experimental Studio, issued by Requiem Records. It is a rich collection of sound miniatures that the artist recorded regularly between 1975 and 1995. The release includes a fourth disc with reinterpretations of the original recordings and new pieces using Rudnik\'s samples. All were prepared by musicians of the young and middle generations, creating broadly understood electronic music (from industrial through techno and ambient to trip-hop and avant-garde). Rongwrong participated in this project.',
                pl: 'Drugie wydawnictwo legendy Studia Eksperymentalnego Polskiego Radia, ukazujące się nakładem Requiem Records. Jest to bogaty zbiór dźwiękowych miniatur, które artysta nagrywał regularnie między 1975 a 1995 rokiem. Wydawnictwo zawiera czwarty dysk z reinterpretacjami oryginalnych nagrań oraz nowymi utworami wykorzystującymi rudnikowe sample. Wszystkie zostały przygotowane przez muzyków młodego i średniego pokolenia, tworzących szeroko rozumianą muzykę elektroniczną (od industrialu przez techno i ambient, aż po trip-hop i awangardę).Rongwrong wziął udział w tym projekcie.'
            },
            label: 'Narodowe Centrum Kultury / Requiem Records',
            gallery: [
                'img/albums/miniatury-1.jpg'
            ],
            videos: [
                { url: 'https://youtu.be/En5-J-8mLi4?si=W9_wc0uPK6JTLqO2', thumb: 'img/albums/miniatury-thumb.jpg' }
            ]
        },
        {
            id: 'alfons-czahor',
            title:'Historia Alfonsa Czahora',
            year: '1994',
            thumbnail: 'img/albums/alfons-czahor-thumb.jpg',
            description: {
                en: 'Inspiration for the project "Historia Alfonsa Czahora" was a legend about a mythical figure deeply rooted in the folklore and culture of eastern Poland.<br><br>This is music on the border of dream and reality—a call of the borderland wilderness entwined with electroacoustic sounds and echoes from an ancient, decaying cottage somewhere near the Czarna Hańcza river…<br>Rongwrong: Maciek Piaseczyński, Marcin Kamieniak, Piotr Gałczyński<br>The original material was released in 1994 on cassette by OBUH Records. In January 1995, the whole album was refined, re-recorded—including the additional track Epiphonema—and remixed. A year later, this new material was released on CD, also by OBUH.<br><br>2024 reissue of “Historia Alfonsa Czahora.”<br>The story of Alfons Czahor in a new version.<br>Special, limited collector’s edition by Requiem Records—vinyl or CD in a hand-crafted, artistic package.',
                pl: 'Inspiracją do projektu Historia Alfonsa Czahora stała się legenda o mitycznej postaci, głęboko zakorzenionej w folklorze i kulturze wschodniej Polski.<br><br>To muzyka z pogranicza jawy i snu — zew kresowej głuszy spleciony z elektroakustycznymi dźwiękami oraz echem dobiegającym z prastarej, zmurszałej chaty gdzieś w okolicach Czarnej Hańczy…<br>Rongwrong: Maciek Piaseczyński, Marcin Kamieniak, Piotr Gałczyński<br>Pierwotny materiał został wydany w 1994 roku na kasecie nakładem OBUH Records. W styczniu 1995 roku całość uszlachetniono, ponownie <br>nagrano — włączając dodatkowy utwór Epiphonema — i zremiksowano. Rok później ten nowy materiał ukazał się na płycie CD, również wydanej przez OBUH.<br><br>Reedycja płyty „Historia Alfonsa Czahora” 2024.<br>Historia Alfonsa Czahora w nowej odsłonie.<br>Specjalne, limitowane wydanie kolekcjonerskie Requiem Records — płyta winylowa lub CD w ręcznie wykonanym, artystycznym opakowaniu.'
            },
            label: 'Requiem Records',
            listen: 'https://soundcloud.com/rongwrong-music/sets/historia-alfonsa-czahora',
            gallery: [
                'img/albums/czachor-1.jpg',
                'img/albums/czachor-2.jpg',
                'img/albums/czachor-3.jpg',
                'img/albums/czachor-4.jpg',
                'img/albums/czachor-5.jpg'
            ]
        },
        {
            id: 'skupiska',
            title: 'Skupiska',
            year: '1994',
            thumbnail: 'img/albums/skupiska-thumb.jpg',
            description: {
                en: 'Skupiska - Transformations / Our Dark Stars. Originally released as a 7" split by RRRecords (USA/RRR-091/1994), later re-edited by Requiem Records.',
                pl: 'Skupiska - Transformacje / Our Dark Stars. Pierwotnie wydane jako split 7" przez RRRecords (USA/RRR-091/1994), później reedycja Requiem Records.'
            },
            label: 'RRRecords / Requiem Records',
            listen: 'https://soundcloud.com/requiem-records-1/rongwrong-skupiska-ekspozycja-3',
            gallery: [
                'img/albums/skupiska-2.jpg'
            ]
        },
        {
            id: 'epiphany',
            title: 'Epiphany',
            year: '1993',
            thumbnail: 'img/albums/epiphany-thumb.jpg',
            description: {
                en: 'An early work from the formative years of Rongwrong, capturing the raw spirit of the Polish avant-garde scene of the early 90s. A heavy, dark, mechanical whirlwind that knocks you off your feet.',
                pl: 'Wczesne dzieło z lat formacyjnych Rongwrong surowy duch polskiej sceny awangardowej wczesnych lat 90. Ciężki, mroczny, mechaniczny kołowrót zwalający z nóg.'
            },
            label: '1993 - OBUH Records / 2024 - Requiem Records',
              listen: 'https://soundcloud.com/rongwrong-music/epiphany',
            gallery: [
                'img/albums/epiphany-1.jpg'
            ],
            videos: [
                { url: 'https://youtu.be/a5uuQhaFhW4', thumb: 'img/albums/epiphany-thumb.jpg' }
            ]
        }
    ]
};

let currentTab = 'events';
let currentProject = null;
let currentLang = localStorage.getItem('rongwrong-lang') || 'en';

const carousel = document.getElementById('carousel');
const projectDetail = document.getElementById('project-detail');
const tabBtns = document.querySelectorAll('.tab-btn');
const langToggle = document.getElementById('lang-toggle');
const carouselPrev = document.getElementById('carousel-prev');
const carouselNext = document.getElementById('carousel-next');

document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLang);
    renderCarousel();
    setupEventListeners();
});

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('rongwrong-lang', lang);
    document.documentElement.setAttribute('data-lang', lang);
    if (currentProject) {
        renderProjectDetail(currentProject);
    }
}

function renderCarousel() {
    const projects = projectData[currentTab];
    
    carousel.innerHTML = projects.map((project, index) => `
        <div class="carousel-item flex-shrink-0 w-48 md:w-56 cursor-pointer snap-start ${index === 0 ? 'active' : ''}"
             data-project-id="${project.id}"
             data-index="${index}">
            <div class="aspect-square img-placeholder mb-3 overflow-hidden">
                <img src="${project.thumbnail}" alt="${project.title}" class="w-full h-full object-cover">
            </div>
            <h3 class="text-sm font-medium text-bone/80 truncate">${project.title}</h3>
            <p class="text-xs text-bone/40">${project.year}</p>
        </div>
    `).join('');
    document.querySelectorAll('.carousel-item').forEach(item => {
        item.addEventListener('click', () => {
            const projectId = item.dataset.projectId;
            const project = projects.find(p => p.id === projectId);
            document.querySelectorAll('.carousel-item').forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            
            currentProject = project;
            renderProjectDetail(project);
        });
    });

    if (projects.length > 0) {
        currentProject = projects[0];
        renderProjectDetail(projects[0]);
    }
}

function renderProjectDetail(project) {
    const isEvent = currentTab === 'events';
    const description = project.description[currentLang];
    
    projectDetail.innerHTML = `
        <div class="project-detail">
            <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
                <div>
                    <h3 class="font-display text-3xl md:text-4xl text-bone/90 mb-2">${project.title}</h3>
                    ${project.subtitle ? `<p class="text-rust/80 text-sm tracking-wider">${project.subtitle}</p>` : ''}
                </div>
                <div class="text-right">
                    <p class="text-2xl text-bone/30 font-display">${project.year}</p>
                    ${project.date ? `<p class="text-xs text-bone/40 mt-1">${project.date}</p>` : ''}
                </div>
            </div>
            
            <p class="text-bone/70 leading-relaxed max-w-3xl mb-8">${description}</p>
            
            <div class="flex flex-wrap gap-6 mb-10 text-sm">
                ${project.members ? `
                    <div>
                        <span class="text-xs tracking-widest text-bone/40 uppercase block mb-1">
                            ${currentLang === 'en' ? 'Members' : 'Skład'}
                        </span>
                        <span class="text-bone/60">${project.members}</span>
                    </div>
                ` : ''}
                ${project.label ? `
                    <div>
                        <span class="text-xs tracking-widest text-bone/40 uppercase block mb-1">
                            ${currentLang === 'en' ? 'Label' : 'Wydawca'}
                        </span>
                        <span class="text-bone/60">${project.label}</span>
                    </div>
                ` : ''}
                ${project.listen ? `
                    <div>
                        <span class="text-xs tracking-widest text-bone/40 uppercase block mb-1">
                            ${currentLang === 'en' ? 'Listen' : 'Posłuchaj'}
                        </span>
                        <a href="${project.listen}" target="_blank" rel="noopener" 
                           class="text-rust hover:text-ember transition-colors">
                            SoundCloud →
                        </a>
                    </div>
                ` : ''}
            </div>
            
            <!-- Gallery & Videos -->
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                ${project.gallery.map((img, idx) => `
                    <div class="gallery-item aspect-square bg-smoke overflow-hidden cursor-pointer" onclick="openLightbox('image', '${img}')">
                        <img src="${img}" alt="${project.title} ${idx + 1}" class="w-full h-full object-cover hover:scale-105 transition-transform duration-300">
                    </div>
                `).join('')}
                ${project.videos ? project.videos.map((video, idx) => `
                    <a href="${video.url}" target="_blank" rel="noopener" class="gallery-item aspect-square bg-smoke overflow-hidden cursor-pointer relative block">
                        <img src="${video.thumb}" alt="Video ${idx + 1}" class="w-full h-full object-cover hover:scale-105 transition-transform duration-300">
                        <div class="absolute inset-0 flex items-center justify-center bg-void/50">
                            <div class="text-center">
                                <span class="text-bone text-xs tracking-wider lang-en">Watch on YouTube</span>
                                <span class="text-bone text-xs tracking-wider lang-pl">Zobacz na YouTube</span>
                            </div>
                        </div>
                    </a>
                `).join('') : ''}
                ${project.mp4s ? project.mp4s.map((mp4, idx) => `
                    <div class="gallery-item aspect-square bg-smoke overflow-hidden cursor-pointer relative" onclick="openLightbox('mp4', '${mp4.src}')">
                        <img src="${mp4.thumb}" alt="Video ${idx + 1}" class="w-full h-full object-cover hover:scale-105 transition-transform duration-300">
                        <div class="absolute inset-0 flex items-center justify-center">
                            <div class="w-12 h-12 bg-rust/80 rounded-full flex items-center justify-center">
                                <svg class="w-5 h-5 text-bone ml-1" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                `).join('') : ''}
            </div>
        </div>
    `;
}

function setupEventListeners() {
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tab = btn.dataset.tab;
            if (tab === currentTab) return;

            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            currentTab = tab;
            renderCarousel();
        });
    });

    langToggle.addEventListener('click', () => {
        setLanguage(currentLang === 'en' ? 'pl' : 'en');
    });

    carouselPrev.addEventListener('click', () => {
        carousel.scrollBy({ left: -240, behavior: 'smooth' });
    });
    
    carouselNext.addEventListener('click', () => {
        carousel.scrollBy({ left: 240, behavior: 'smooth' });
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            nav.classList.add('bg-void/95');
            nav.classList.remove('bg-void/80');
        } else {
            nav.classList.remove('bg-void/95');
            nav.classList.add('bg-void/80');
        }
    });
}

const style = document.createElement('style');
style.textContent = `
    .scrollbar-hide {
        -ms-overflow-style: none;
        scrollbar-width: none;
    }
    .scrollbar-hide::-webkit-scrollbar {
        display: none;
    }
`;
document.head.appendChild(style);

function openLightbox(type, src) {
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.className = 'fixed inset-0 z-[2000] bg-void/95 flex items-center justify-center p-4 cursor-pointer';
    lightbox.onclick = closeLightbox;
    
    let content;
    if (type === 'image') {
        content = `<img src="${src}" class="max-w-full max-h-[90vh] object-contain" onclick="event.stopPropagation()">`;
    } 
    else if (type === 'video') {
    content = `
        <div class="w-full max-w-4xl aspect-video" onclick="event.stopPropagation()">
            <iframe 
                src="${src}" 
                class="w-full h-full"
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen>
            </iframe>
        </div>
    `;
    }
    else if (type === 'mp4') 
    {
        content = `
            <div class="w-full max-w-4xl" onclick="event.stopPropagation()">
                <video 
                    src="${src}" 
                    class="w-full max-h-[90vh]"
                    controls>
                </video>
            </div>
        `;
    }
    
    lightbox.innerHTML = `
        <button class="absolute top-4 right-4 text-bone/60 hover:text-bone text-4xl font-light" onclick="closeLightbox()">&times;</button>
        ${content}
    `;
    
    document.body.appendChild(lightbox);
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.remove();
        document.body.style.overflow = '';
    }
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
});

