const games = [
  {
    category: "Coop",
    title: "Arizona Sunshine",
    description: "Предстоит вам сражаться за свою жизнь в жаркой пустыне Аризоны после наступления зомби-апокалипсиса...",
    genre: "Экшен",
    age: "12",
    players: "1-2 (в сюжетной кампании), 1-4 (в режиме орды)",
    teaser: "https://store.steampowered.com/app/342180/Arizona_Sunshine/",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/342180/header.jpg"
  },
  {
    category: "Coop",
    title: "Arizona Sunshine® 2",
    description: "Вернитесь в зомби-апокалипсис с ещё большей дозой безумия. Используйте широкий арсенал оружия ближнего и дальнего боя, командуйте преданным псом Бадди и пройдите полностью новую кампанию в одиночку или в кооперативе.",
    genre: "Экшен",
    age: "17",
    players: "1-2 (кооперативная кампания)",
    teaser: "https://www.youtube.com/watch?v=j8afR1UeR6I",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1540210/header.jpg"
  },  
  
    {
      category: "Coop",
      title: "Elven Assassin",
      description: "Возьмите лук и убейте орды орков в эпической игре по обороне города. Вы можете играть в одиночку, чтобы завоевать место в таблице лидеров, или объединиться с другими ассасинами в кооперативном режиме онлайн. Будьте осторожны, чтобы избежать массивных топоров, брошенных в вас воинами-орками.",
      genre: "Экшен",
      age: "10",
      players: "1-4",
      teaser: "https://store.steampowered.com/app/503770/Elven_Assassin/",
      image: "https://cdn.akamai.steamstatic.com/steam/apps/503770/header.jpg"
    },  
  {
    category: "Coop",
    title: "Pavlov VR",
    description: "Pavlov VR — это многопользовательский шутер в виртуальной реальности...",
    genre: "Экшен",
    age: "15",
    players: "1-4",
    teaser: "https://store.steampowered.com/app/555160/Pavlov_VR/",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/555160/header.jpg"
  },
  {
    category: "Coop",
    title: "PAYDAY 2",
    description: "PAYDAY 2 - это кооперативный экшен-шутер для четверых игроков...",
    genre: "Экшен",
    age: "12",
    players: "1-4",
    teaser: "https://store.steampowered.com/app/218620/PAYDAY_2/",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/218620/header.jpg"
  },
  {
    category: "Coop",
    title: "Propagation VR",
    description: "Сочетая выживание в стиле хоррор и стрельбу по волнам врагов, Propagation VR заставит вас почувствовать прилив адреналина, пока вы пытаетесь выжить в зомби-апокалипсисе. Вооружённый только своими пистолетами и кулаками, сражайтесь с ужасающими зомби и другими мутантами. Сможете ли вы выжить?",
    genre: "Экшен, Хоррор",
    age: "18",
    players: "1-2",
    teaser: "https://cdn.cloudflare.steamstatic.com/steam/apps/256793764/movie_max.mp4",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1363430/header.jpg"
  },  
  {
    category: "Coop",
    title: "Serious Sam 3: BFE",
    description: "Serious Sam 3: BFE — это великолепное возвращение в золотой век шутеров с видом от первого лица...",
    genre: "Экшен",
    age: "10",
    players: "1-4",
    teaser: "https://store.steampowered.com/app/41070/Serious_Sam_3_BFE/",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/41070/header.jpg"
  },
  {
    category: "Coop",
    title: "Trickster VR: Co-op Dungeon Crawler",
    description: "Процедурно сгенерированное фэнтезийное приключение с плавающими островами, эпической добычей и ордами орков! Испытайте свои навыки против орочьей боевой доблести, древней магии и разношёрстных дирижаблей.",
    genre: "Экшен",
    age: "10",
    players: "1-4",
    teaser: "https://www.youtube.com/watch?v=3tTGyh8UwRA",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/512220/header.jpg"
  },  
  {
    category: "Coop",
    title: "Tower Tag",
    description: "Tower Tag — это гипердинамичный футуристический PvP-шутер в стиле пейнтбола с уникальной системой передвижения с помощью крюка-кошки. Захватывайте башни, перемещайтесь по арене и побеждайте соперников с помощью тактики и неожиданности.",
    genre: "Экшен",
    age: "10",
    players: "1-8 (PvP)",
    teaser: "https://www.youtube.com/watch?v=RSXsWJb-KkE",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1187330/header.jpg"
  },

    // Horror games
    {
      category: "Horror",
      title: "The Bellows",
      description: "The Bellows — это виртуальный хоррор, созданный для воспроизведения как интерактивный фильм...",
      genre: "Хоррор",
      age: "12",
      players: "1",
      teaser: "https://www.youtube.com/watch?v=awtSZKCQ_bg", // Актуальный тизер на YouTube
      image: "https://cdn.akamai.steamstatic.com/steam/apps/529670/header.jpg" // Актуальная обложка из Steam
    },      
    {
      category: "Horror",
      title: "Devour",
      description: "DEVOUR — кооперативная хоррор-игра на выживание для 1–4 игроков. Остановите одержимую культистку, прежде чем она утащит вас в ад. Бегите. Кричите. Прячьтесь. Только не попадайтесь.",
      genre: "Хоррор",
      age: "15",
      players: "1-4",
      teaser: "https://gamingshogun.com/2021/01/07/devour-teaser-trailer/", // Актуальный трейлер от разработчиков
      image: "https://cdn.akamai.steamstatic.com/steam/apps/1274570/header.jpg" // Актуальная обложка из Steam
    },    
    {
      category: "Horror",
      title: "Don't Knock Twice",
      description: "Don't Knock Twice — игра-хоррор от первого лица, основанная на городской легенде...",
      genre: "Хоррор",
      age: "12",
      players: "1",
      teaser: "https://www.youtube.com/watch?v=ORMiMSvMx7c",
      image: "https://www.kindpng.com/picc/m/163-1635860_don-t-knock-twice-game-logo-png-download.png"
    },    
      {
        category: "Horror",
        title: "DreadEye VR",
        description: "DreadEye - это игра в виртуальной реальности, которая позволяет вам стать индонезийским шаманом...",
        genre: "Хоррор",
        age: "12",
        players: "1",
        teaser: "https://www.youtube.com/watch?v=DKmvRdKbgO4",
        image: "https://cdn.akamai.steamstatic.com/steam/apps/692930/header.jpg"
      },
      {
        category: "Horror",
        title: "The Exorcist: Legion VR",
        description: "The Exorcist: Legion VR Deluxe Edition - это полное собрание всех пяти глав...",
        genre: "Хоррор",
        age: "12",
        players: "1",
        teaser: "https://www.youtube.com/watch?v=uoCzthZK8s8",
        image: "https://cdn.akamai.steamstatic.com/steam/apps/1156250/header.jpg"
      },    
    {
      category: "Horror",
      title: "FNAF Five Nights at Freddy's: Help Wanted",
      description: "Не дайте запугать себя до потери сознания леденящими душу скримерами...",
      genre: "Хоррор",
      age: "12",
      players: "1",
      teaser: "https://www.youtube.com/watch?v=lLv3wTRJwWM",
      image: "https://cdn.akamai.steamstatic.com/steam/apps/732690/header.jpg"
    },
    {
      category: "Horror",
      title: "FNAF Five Nights at Freddy's: Help Wanted 2",
      description: "Продолжение культового ужастика в VR!...",
      genre: "Хоррор",
      age: "12",
      players: "1",
      teaser: "https://www.youtube.com/watch?v=88zU6TbGiqY",
      image: "https://cdn.cloudflare.steamstatic.com/steam/apps/2287520/header.jpg"
    },
    {
      category: "Horror",
      title: "Layers Of Fear",
      description: "На холсте, на сцене или на страницах — все истории рано или поздно подходят к концу...",
      genre: "Хоррор",
      age: "12",
      players: "1",
      teaser: "https://www.youtube.com/watch?v=e0QBnez-c6A",
      image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1946700/header.jpg"
    },
    ///музыкальные 
    {
      category: "Music",
      title: "AGAINST",
      description: "AGAINST — это ритм-игра в VR, которая погрузит вас в мрачную атмосферу комикса. Следуя ритму, стреляйте и пробивайте свой путь через злых приспешников Доктора Вайса. Динамичная музыка поможет вам выбраться живым из тёмных улиц города.",
      genre: "Ритм-игра",
      age: "10",
      players: "1",
      teaser: "https://www.youtube.com/watch?v=7uq5MDRBvIQ", // Ссылка на актуальный трейлер на YouTube
      image: "https://cdn.akamai.steamstatic.com/steam/apps/1584840/header.jpg"
    },    
    {
      category: "Music",
      title: "Beat Saber",
      description: "Beat Saber — это ритмическая игра виртуальной реальности, в которой вы отбиваете ритмы адреналиновой музыки, когда они летят к вам, окружённые футуристическим миром.",
      genre: "Ритм-игра",
      age: "10",
      players: "1",
      teaser: "https://store.steampowered.com/app/620980/Beat_Saber/",
      image: "https://cdn.akamai.steamstatic.com/steam/apps/620980/header.jpg"
    },
    {
      category: "Music",
      title: "Pistol Whip",
      description: "Pistol Whip — это физическая экшен-ритмическая игра, в которой сочетаются перестрелки, вдохновлённые фильмами, и пульсирующие ритмы. Взрывайте и уворачивайтесь от препятствий на своём пути через сцены лихорадочных снов, создавайте уникальные ритмы в балете пуль и добивайтесь славы в таблице лидеров.",
      genre: "Ритм-игра",
      age: "10",
      players: "1",
      teaser: "https://store.steampowered.com/app/1079800/Pistol_Whip/",
      image: "https://cdn.akamai.steamstatic.com/steam/apps/1079800/header.jpg"
    },
    {
      category: "Music",
      title: "Ragnarock",
      description: "Приведи свой корабль викингов к победе в нашей ритм-игре в условиях виртуальной реальности! Поднимай паруса и бросайся в бой с врагами, играя на барабанах в режиме многопользовательской игры под эпическую музыку: от кельтского рока до пауэр-метала в духе викингов!",
      genre: "Ритм-игра",
      age: "10",
      players: "1",
      teaser: "https://store.steampowered.com/app/1345820/Ragnarock/",
      image: "https://cdn.akamai.steamstatic.com/steam/apps/1345820/header.jpg"
    },

///Симуляторы 
{
  category: "Simulator",
  title: "ALL IN ONE SPORTS",
  description: "13 видов спорта в 1 игре! Какой вид спорта будет безопаснее в эпоху пандемии? All in One Sports Vr предлагает самый безопасный способ сохранить здоровье как физически, так и морально без каких-либо контактов.",
  genre: "Симулятор, Спортивная игра",
  age: "8",
  players: "1-2",
  teaser: "https://www.youtube.com/results?search_query=ALL+IN+ONE+SPORTS+VR+trailer",
  image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1514840/header.jpg"
},
{
  category: "Simulator",
  title: "Angry Birds VR",
  description: "Присоединяйтесь к Реду, Чаку, Бомбу и Синим, чтобы спасти украденные яйца в Angry Birds VR: Остров Свиней, захватывающем приключении в виртуальной реальности! Стреляйте из рогатки, чтобы победить доктора Франкенсвина и создавайте уровни с помощью конструктора.",
  genre: "Симулятор",
  age: "8",
  players: "1",
  teaser: "https://www.youtube.com/results?search_query=Angry+Birds+VR+trailer",
  image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1001140/header.jpg"
},
{
  category: "Simulator",
  title: "BLASTON",
  description: "В замедленном пулевом аду Blaston вы уклоняетесь от атак противника, создавая комбо. Увлекательная, тактическая VR-тренировка с неоновой эстетикой.",
  genre: "Симулятор-шутер, Дуэль",
  age: "8",
  players: "1-2",
  teaser: "https://www.youtube.com/results?search_query=BLASTON+VR+trailer",
  image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1427890/header.jpg"
},

{
  category: "Simulator",
  title: "Cook-Out",
  description: "Работайте в команде из 4 человек, чтобы готовить заказы для волшебных существ в этой веселой кулинарной VR-игре.",
  genre: "Симулятор, Готовка",
  age: "8",
  players: "1-4",
  teaser: "https://www.youtube.com/results?search_query=Cook-Out+VR+trailer",
  image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1523720/header.jpg"
},
{
  category: "Simulator",
  title :"Fruit Ninja VR",
  description: "Погрузитесь во вселенную Fruit Ninja в VR! Разрубите фрукты и почувствуйте скорость и азарт как никогда раньше.",
  genre: "Симулятор-песочница",
  age: "8",
  players: "1",
  teaser:  "https://www.youtube.com/results?search_query=Fruit+Ninja+VR+trailer",
  image: "https://cdn.cloudflare.steamstatic.com/steam/apps/486780/header.jpg"
},
{
  category: "Simulator",
  title: "Gorilla Tag",
  description: "Бегайте, прыгайте и карабкайтесь, используя только руки. Играйте в пятнашки и заражение в многопользовательской VR-игре.",
  genre: "Симулятор-песочница",
  age: "8",
  players: "1",
  teaser: "https://www.youtube.com/results?search_query=Gorilla+Tag+VR+trailer",
  image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1533390/header.jpg"
},
{
  category: "Simulator",
  title: "GORN",
  description: "Мультяшный, абсурдно жестокий VR-симулятор гладиатора с множеством оружия и кровавыми битвами.",
  genre: "Симулятор-экшен",
  age: "9",
  players: "1",
  teaser: "https://www.youtube.com/results?search_query=GORN+VR+trailer",
  image: "https://cdn.cloudflare.steamstatic.com/steam/apps/578620/header.jpg"
},
{
  category: "Simulator",
  title: "Job Simulator",
  description: "В будущем, где роботы заменили людей на работе, попробуйте 'работать' в симуляторе офисной жизни, магазина и других профессий.",
  genre: "Симулятор",
  age: "7",
  players: "1",
  teaser: "https://www.youtube.com/results?search_query=Job+Simulator+VR+trailer",
  image: "https://cdn.cloudflare.steamstatic.com/steam/apps/448280/header.jpg"
},
{
  category: "Simulator",
  title: "Minecraft VR",
  description: "Погрузитесь в кубический мир Minecraft в формате виртуальной реальности. Исследуйте, стройте и выживайте в 3D.",
  genre: "Симулятор-песочница",
  age: "8",
  players: "1-4",
  teaser: "https://www.youtube.com/results?search_query=Minecraft+VR+trailer",
  image: "https://avatars.mds.yandex.net/get-mpic/5233721/img_id4567891234567890123.jpeg/orig"
},
{
  category: "Simulator",
  title: "Moss VR",
  description: "Приключенческая игра-головоломка с очаровательной мышкой Квилл. Увлекательные сражения и исследование мира.",
  genre: "Симулятор-история",
  age: "9-10",
  players: "1",
  teaser:"https://www.youtube.com/results?search_query=Moss+VR+trailer",
  image: "https://cdn.cloudflare.steamstatic.com/steam/apps/846470/header.jpg"
},
{
  category: "Simulator",
  title: "Rick and Morty: Virtual Rick-ality",
  description: "Сумасшедшая VR-комедия в стиле 'Рика и Морти'. Создана создателями Job Simulator.",
  genre: "Симулятор",
  age: "7-8",
  players: "1",
  teaser: "https://www.youtube.com/results?search_query=Rick+and+Morty+Virtual+Rick-ality+trailer",
  image: "https://cdn.cloudflare.steamstatic.com/steam/apps/469610/header.jpg"
},
{
  category: "Simulator",
  title: "Rec Room",
  description: "Масштабная социальная VR-платформа для общения, игр и создания собственных миров.",
  genre: "Симулятор-песочница",
  age: "8",
  players: "1-4",
  teaser: "https://store.steampowered.com/app/471710",
  image: "https://cdn.akamai.steamstatic.com/steam/apps/471710/header.jpg"
},
{
  category: "Simulator",
  title: "Surgeon Simulator: Meet the Medic",
  description: "Симулятор хирурга по мотивам Team Fortress 2. Оперируйте Пулемётчика в сумасшедшем стиле.",
  genre: "Симулятор",
  age: "8-9",
  players: "1",
  teaser: "https://store.steampowered.com/app/457420/Surgeon_Simulator_VR_Meet_The_Medic/",
  image: "https://cdn.akamai.steamstatic.com/steam/apps/457420/header.jpg"
},
{
  category: "Simulator",
  title: "Titans Clinic",
  description: "Весёлый стоматологический симулятор с титанами: гориллами, вампирами, инопланетянами и другими.",
  genre: "Симулятор",
  age: "7",
  players: "1",
  teaser: "https://store.steampowered.com/app/2596030/Titans_Clinic/",
  image: "https://cdn.akamai.steamstatic.com/steam/apps/2596030/header.jpg"
},
{
  category: "Simulator",
  title: "Voxel Shot",
  description: "Сражайтесь с воксельными зомби и гигантскими боссами в аркадной шутер-симуляции VR.",
  genre: "Симулятор",
  age: "7",
  players: "1",
  teaser: "https://store.steampowered.com/app/593250/Voxel_Shot_VR/",
  image: "https://cdn.akamai.steamstatic.com/steam/apps/593250/header.jpg"
},
{
  category: "Simulator",
  title: "Keep Talking and Nobody Explodes VR",
  description: "Вы окажетесь в ловушке в комнате с бомбой замедленного действия. У ваших друзей есть инструкция, как её обезвредить, но они не видят бомбу, так что вам придётся объясниться — и побыстрее!",
  genre: "Головоломка",
  age: "11",
  players: "1-2",
  teaser: "https://store.steampowered.com/app/341800/Keep_Talking_and_Nobody_Explodes/",
  image: "https://cdn.akamai.steamstatic.com/steam/apps/341800/header.jpg"
},

//релакс игры 

{
  category: "Relax",
  title: "Epic Roller Coasters VR",
  description: "В Epic Roller Coasters вы найдёте самые уникальные американские горки в мире. Попробуйте три разных режима: классический, шутер и гонка. Не забудьте позвать своих друзей покататься вместе с вами!",
  genre: "Ощущение",
  age: "7",
  players: "1",
  teaser: "https://www.youtube.com/watch?v=FUN84gPVpRs", // Ссылка на официальный трейлер на YouTube
  image: "https://cdn.akamai.steamstatic.com/steam/apps/787790/header.jpg"
},
{
  category: "Relax",
  title: "Fancy Skiing VR",
  description: "Fancy Skiing — игра, основанная на реальном катании на лыжах. Игроки используют рукоятки как лыжные палки и наклоняются для управления, что обеспечивает полное погружение.",
  genre: "Ощущение",
  age: "7",
  players: "1",
  teaser: "https://www.youtube.com/watch?v=rvtm8T14BRE", // Ссылка на трейлер на YouTube
  image: "https://cdn.akamai.steamstatic.com/steam/apps/512080/header.jpg" // Ссылка на изображение из Steam
},
{
  category: "Relax",
  title: "Richie's Plank Experience VR",
  description: "Вы стоите на доске на высоте 80 этажей. Колени дрожат, ладони потеют. Вы идёте или замираете? Перенесите реальную доску в виртуальный мир для максимального погружения!",
  genre: "Ощущение",
  age: "7",
  players: "1",
  teaser: "https://www.youtube.com/watch?v=qnVQFSUIDjE", // Ссылка на трейлер на YouTube
  image: "https://cdn.cloudflare.steamstatic.com/steam/apps/517160/header.jpg" // Ссылка на изображение из Steam
},
{
  category: "Relax",
  title: "Ultimate Booster Experience",
  description: "Головокружительная поездка на 200-метровом бустере над огромным мегаполисом с потрясающим окружением и реалистичными ощущениями.",
  genre: "Ощущение",
  age: "10",
  players: "1",
  teaser: "https://www.youtube.com/watch?v=TGAJjXHMqZ0", // Ссылка на трейлер на YouTube
  image: "https://cdn.cloudflare.steamstatic.com/steam/apps/499620/header.jpg" // Ссылка на изображение из Steam
},

//Экшен 

{
  category: "Action",
  title: "Bullet Roulette",
  description: "Четверо подозрительных личностей с таинственным прошлым сидят за столом в мрачном темном баре и играют в русскую рулетку. Остерегайтесь других игроков, потому что они не похожи на тех, кто планирует играть честно. Будь хитер и стань последним, кто устоит!",
  genre: "Экшен",
  age: "9-10",
  players: "1-4",
  teaser: "https://www.youtube.com/watch?v=rD9Yyzh_DtU",
  image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1103880/header.jpg"
},
  {
    category: "Action",
    title: "Boneworks",
    description: "Boneworks - это экспериментальное физическое виртуальное приключение. Используйте найденное физическое оружие, инструменты и предметы, чтобы сражаться в опасных игровых ландшафтах и таинственной архитектуре.",
    genre: "Экшен-песочница",
    age: "14-15",
    players: "1",
    teaser: "https://www.youtube.com/watch?v=oP8C2nmv3Ag",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/823500/header.jpg"
  },
  {
    category: "Action",
    title: "Blade & Sorcery",
    description: "Blade & Sorcery - это средневековое фэнтези, созданное для виртуальной реальности, с полностью управляемыми физикой рукопашными, дальнобойными и магическими боями.",
    genre: "Экшен",
    age: "11-12",
    players: "1",
    teaser: "https://www.youtube.com/watch?v=-Kmd07gEq1s",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/629730/header.jpg"
  },
  {
    category: "Action",
    title: "DOOM VFR",
    description: "DOOM® VFR переносит динамичный и жестокий игровой процесс, который так любят поклонники серии, в виртуальную реальность. Играйте за кибернетического выжившего, который активирован UAC для борьбы с вторжением демонов.",
    genre: "Экшен",
    age: "12-14",
    players: "1",
    teaser: "https://www.youtube.com/watch?v=I55t9gePzVA",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/650000/header.jpg"
  },
  {
    category: "Action",
    title: "Guns’n Stories: Preface",
    description: "Наденьте шлем VR, берите пистолет и будьте готовы ко всему! Вы погружаетесь в непредсказуемую историю — в воспоминания своего деда – охотника за головами в прошлом!",
    genre: "Экшен",
    age: "9-10",
    players: "1",
    teaser: "https://www.youtube.com/watch?v=pcYEcHLVms0",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/716260/header.jpg"
  },
  {
    category: "Action",
    title: "Guns’n’Stories: Bulletproof",
    description: "Динамичный VR-вестерн шутер, который полностью погружает игроков в атмосферу странного Дикого Запада. Вас ждёт запутанный сюжет, множество врагов и битвы с Боссами.",
    genre: "Экшен",
    age: "9-10",
    players: "1",
    teaser: "https://www.youtube.com/watch?v=uGNRn1KarSA",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/685690/header.jpg"
  },  
  {
    category: "Action",
    title: "Half-Life: Alyx",
    description: "Half-Life: Alyx — возвращение Valve во вселенную Half-Life в VR. История невозможной борьбы с Альянсом, происходящая между событиями первой и второй части.",
    genre: "Экшен",
    age: "11-12",
    players: "1",
    teaser: "https://www.youtube.com/watch?v=O2W0N3uKXmo",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/546560/header.jpg"
  },
  {
    category: "Action",
    title: "In Death",
    description: "Рогаликовый шутер, действие которого разворачивается в безбожной загробной жизни. Сражайтесь на процедурно генерируемых уровнях в напряжённых боях.",
    genre: "Экшен",
    age: "11-12",
    players: "1",
    teaser: "https://www.youtube.com/watch?v=24Cn7BAAD3s",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/605450/header.jpg"
  },
  {
    category: "Action",
    title: "SURV1V3",
    description: "SURV1V3 — реалистичная VR-игра на выживание в жанре fps. Пройдите одиночную кампанию или объединитесь с друзьями, чтобы выжить в апокалипсисе!",
    genre: "Экшен",
    age: "12-13",
    players: "1-2",
    teaser: "https://www.youtube.com/watch?v=8eBQow2sAeg",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/722180/header.jpg"
  },
  {
    category: "Action",
    title: "SUPERHOT VR",
    description: "В этом стильном VR-шутере время движется только тогда, когда двигаетесь вы. Противники врываются в комнату со всех сторон... но вы контролируете реальность.",
    genre: "Экшен",
    age: "8",
    players: "1",
    teaser: "https://www.youtube.com/watch?v=pzG7Wc6mbwE",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/617830/header.jpg"
  },
  {
    category: "Action",
    title: "Skyrim VR",
    description: "Модификация знаменитой RPG в виртуальной реальности. Погрузитесь в открытый мир, полный магии, драконов и приключений.",
    genre: "Экшен",
    age: "13-14",
    players: "1",
    teaser: "https://www.youtube.com/watch?v=fg_vqd8zAhw",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/611670/header.jpg"
  },
  {
    category: "Action",
    title: "The Forest",
    description: "Выживание в лесу после крушения самолёта. Исследуйте, стройте и сражайтесь с обществом мутантов-каннибалов в этом ужасающем симуляторе.",
    genre: "Экшен-рпг",
    age: "16",
    players: "1-4",
    teaser: "https://www.youtube.com/watch?v=7mwn5U2PNvk",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/242760/header.jpg"
  },
  {
    category: "Action",
    title: "The Walking Dead: Saints & Sinners",
    description: "Живите, сражайтесь и принимайте морально сложные решения в мире 'Ходячих мертвецов'. Исследуйте Новый Орлеан, наполненный нежитью.",
    genre: "Экшен-рпг",
    age: "16",
    players: "1",
    teaser: "https://www.youtube.com/watch?v=Gb46LStrXD4",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/916840/header.jpg"
  }
  


];

const tabs = document.querySelectorAll(".tab");
const container = document.getElementById("gamesContainer");

function displayGames(category) {
  container.innerHTML = "";
  const search = document.getElementById("searchInput").value.toLowerCase();
  const genre = document.getElementById("genreFilter").value;
  const age = document.getElementById("ageFilter").value;
  const players = document.getElementById("playersFilter").value;

  games
    .filter(g => g.category === category)
    .filter(g => g.title.toLowerCase().includes(search))
    .filter(g => (genre ? g.genre === genre : true))
    .filter(g => (age ? g.age === age : true))
    .filter(g => (players ? g.players === players : true))
    .forEach(game => {
      const card = document.createElement("div");
      card.className = "game-card";
      card.innerHTML = `
        <img src="${game.image}" alt="${game.title}" class="game-image">
        <div class="game-title">${game.title}</div>
        <div class="game-info">${game.description}</div>
        <div class="game-info">Жанр: ${game.genre}</div>
        <div class="game-info">Возраст: от ${game.age} лет</div>
        <div class="game-info">Игроков: ${game.players}</div>
        ${game.teaser ? `<a class="teaser-btn" href="${game.teaser}" target="_blank">Смотреть тизер</a>` : ''}
      `;
      container.appendChild(card);
    });
}

// Навешиваем обработчики на табы
tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelector(".tab.active").classList.remove("active");
    tab.classList.add("active");
    displayGames(tab.dataset.category);
  });
});

// Обновление при вводе в фильтры и поиск
["searchInput", "genreFilter", "ageFilter", "playersFilter"].forEach(id => {
  document.getElementById(id).addEventListener("input", () => {
    const activeTab = document.querySelector(".tab.active");
    if (activeTab) displayGames(activeTab.dataset.category);
  });
});

// Инициализация: активируем первый таб и показываем игры
const defaultTab = document.querySelector(".tab.active") || tabs[0];
if (defaultTab) {
  defaultTab.classList.add("active");
  displayGames(defaultTab.dataset.category);
}
document.getElementById('go-home').addEventListener('click', function() {
  // Открытие первой ссылки
  if (window.Telegram && window.Telegram.WebApp) {
    window.Telegram.WebApp.openLink('https://680cf2795c30c4bd8894843f--rainbow-cocada-868631.netlify.app/', { try_instant_view: true });
  } else {
    window.location.href = 'https://680cf2795c30c4bd8894843f--rainbow-cocada-868631.netlify.app/';
  }

  // Открытие второй ссылки
  if (window.Telegram && window.Telegram.WebApp) {
    window.Telegram.WebApp.openLink('https://musical-hotteok-033703.netlify.app/', { try_instant_view: true });
  } else {
    window.location.href = 'https://musical-hotteok-033703.netlify.app/';
  }
});
