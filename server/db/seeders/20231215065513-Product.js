'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Products',
      [
        {
          name: 'MONSGEEK M1W',
          description:
            'M1W предлагает вам гибкость, позволяющую модифицировать его и сделать его по-настоящему вашим, а также предлагает отличные возможности «из коробки» с индивидуальным креплением из пенопласта и прокладкой MonsGeek. Благодаря Bluetooth и беспроводной связи 2,5 ГГц с аккумулятором емкостью 6000 мАч вы даже можете попрощаться с кабелями, чтобы максимально использовать возможности M1.',
          price: 100,
          meta: JSON.stringify({ size: 'full', color: 'black' }),
          categoryId: 1,
          stock: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'MONSGEEK M7W',
          description:
            'M7W предлагает вам гибкость, позволяющую модифицировать его и сделать его по-настоящему вашим, а также предлагает отличные возможности использования специального пенопластового крепления и прокладки от MonsGeek. Благодаря Bluetooth и беспроводной связи 2,5 ГГц и аккумулятору емкостью 6000 мАч вы даже можете попрощаться с кабелями, чтобы максимально эффективно печатать.',
          price: 120,
          meta: JSON.stringify({ size: 'tkl', color: 'black' }),
          categoryId: 1,
          stock: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'MONSGEEK MG75W',
          description:
            'Monsgeek MG75W — это новый способ заняться хобби по доступной цене! Этот 75%-ный комплект, монтируемый на лотке из АБС-пластика, может быть подключен как через USB-C, так и через 2,4G беспроводно.',
          price: 150,
          meta: JSON.stringify({ size: 'tkl', color: 'white' }),
          categoryId: 1,
          stock: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'KIT ADAM',
          description:
            'Первая работа KBDcraft — механическая клавиатура, на 60 % изготовленная по индивидуальному заказу, с кирпичным корпусом, креплением с прокладкой, QMK и неограниченным потенциалом обновления. отличное начало знакомства с настраиваемой клавиатурой. Благодаря высококачественным деталям Адам воплощает революционную ретро-эстетику в стиле Minecraft в любой установке.При разработке ADAM особое внимание уделялось его функциональности и возможности модернизации, что позволило оптимизировать конструкцию корпуса и ядра как нашу самую прочную основу для предсказуемой диверсификации в будущем. Наедине со всеми внешними деталями (Кейс Адама) в норме LEGO., каждый компонент ядра был создан с нуля и усовершенствован посредством физической/числовой оптимизации.',
          price: 100,
          meta: JSON.stringify({ size: 'full', color: 'pink' }),
          categoryId: 1,
          stock: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'BLOCK-67 R2',
          description:
            'Block-67 — доступный и улучшенный ЧПУ Bakeneko65 от ENG Studio. Усовершенствования варьируются от оптимизированных по звуку внутренних размеров до многоуровневой печатной платы с возможностью горячей замены и низкой передней высоты на 17 мм. Входящая в комплект алюминиевая пластина имеет вырезы, позволяющие использовать ввинчиваемый стабилизатор. Равномерные 7-миллиметровые рамки и острые углы Block-67 придают ему красивый блочный вид. ',
          price: 70,
          meta: JSON.stringify({ size: 'tkl', color: 'black' }),
          categoryId: 1,
          stock: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'PBTFANS DOUBLESHOT WOB',
          description:
            'PBTFANS DOUBLESHOT — это интересный и доступный набор клавиш, разработанный maxvoltar (mvkb.com). Вдохновлено рабочими станциями прошлого с их культовыми оранжевыми или зелеными дисплеями и моноширинными шрифтами. Текстовые легенды и некоторые тонкие детали, представленные двоичными подлегендами, придают этому набору приятный ретро-вид. Для простоты: существует только один набор, который охватывает широкий диапазон раскладок клавиатуры от 60 до 100 %, включая поддержку Alice, macOS, терминального ISO, ANSI, Tsangan и других.',
          price: 30,
          categoryId: 2,
          stock: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'MV TERMINAL KEYCAPS R2',
          description:
            'MVTerminal — это интересный и доступный набор клавиш, разработанный maxvoltar (mvkb.com). Вдохновлено рабочими станциями прошлого с их культовыми оранжевыми или зелеными дисплеями и моноширинными шрифтами. Текстовые легенды и некоторые тонкие детали, представленные двоичными подлегендами, придают этому набору приятный ретро-вид. Для простоты: существует только один набор, который охватывает широкий диапазон раскладок клавиатуры от 60 до 100 %, включая поддержку Alice, macOS, терминального ISO, ANSI, Tsangan и других.',
          price: 30,
          categoryId: 2,
          stock: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'WS MORANDI SWITCH / 10PCS',
          description: 'WS MORANDI SWITCH / 10PCS описание',
          price: 5,
          categoryId: 3,
          meta: JSON.stringify({ click: 'clicky' }),
          stock: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'JWK HERA SWITCH / 10PCS',
          description: 'JWK HERA SWITCH / 10PCS описание',
          price: 7,
          categoryId: 3,
          meta: JSON.stringify({ click: 'silent' }),
          stock: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // {
        //   name: 'EQUALZ X TKC FRUIT SMOOTHIE SWITCHES',
        //   description: 'JWK HERA SWITCH / 10PCS описание',
        //   price: 7,
        //   categoryId: 3,
        //   stock: 6,
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
        {
          name: 'AKKONeon',
          description:
            'Этот набор клавиш Akko, вдохновленный киберпанком, станет ярким дополнением к вашей сборке. Он оснащен фиолетовыми, синими и красными колпачками клавиш, которые создают красочный полуночный пейзаж на вашем столе.',
          meta: JSON.stringify({ colorKeycape: 'black' }),
          price: 30,
          categoryId: 2,
          stock: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'DSA SYLPH POTION KEYSET',
          description:
            'DSA Sylph Potion — очаровательный однородный профильный набор. Цветовые решения Sylph Potion произошли от недуга волшебного типа, чтобы способствовать крепким дружеским отношениям и творчеству. Присоединившись к предварительному заказу зелья Сильфида, вы наверняка вдохновитесь и, возможно, даже поприветствуете неожиданную дружбу, возникающую в сообществе сторонников ремесел Моти.',
          meta: JSON.stringify({ colorKeycape: 'pink' }),
          price: 30,
          categoryId: 2,
          stock: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Kitting',
          description:
            'Эти колпачки клавиш Dyysub украшены замысловатым рисунком, демонстрирующим множество ручек, ползунков и пэдов, которые перенесут вас в золотую эру электронной музыки. Synth, изготовленный из материалов премиум-класса, обеспечивающих долговечность и совместимость с широким спектром клавиатур, — это идеальный способ добавить нотку ностальгии и стиля к вашей механической клавиатуре.',
          meta: JSON.stringify({ colorKeycape: 'grey' }),
          price: 30,
          categoryId: 2,
          stock: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Marshmallow',
          description:
            'Marshmallow — это мягкий и милый набор с легендами, выполненными в дружелюбном шрифте, и изящными новыми значками. Он выполнен в теплых кремовых и коричневых тонах, вдохновленных палитрами макияжа. Разработано PRJKT_.',
          meta: JSON.stringify({ colorKeycape: 'beige' }),
          price: 30,
          categoryId: 2,
          stock: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Polish',
          description:
            'Эти наборы клавиш созданы для дополнения нашей клавиатуры Portico75, а также многих других клавиатур 75 %.',
          meta: JSON.stringify({ colorKeycape: 'black' }),
          price: 30,
          categoryId: 2,
          stock: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'MONSGEEK MG75W',
          description:
            'Monsgeek MG75W — это новый способ заняться хобби по доступной цене! Этот 75%-ный комплект, монтируемый на лотке из АБС-пластика, может быть подключен как через USB-C, так и через 2,4G беспроводно.',
          price: 100,
          meta: JSON.stringify({ size: 'full', color: 'white' }),
          categoryId: 1,
          stock: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'MONSGEEK',
          description:
            'Приветствуем первого TKL в TKC! MonsGeek M3 — это плата TKL, основанная на полноразмерной раскладке без цифровой клавиатуры.',
          price: 100,
          meta: JSON.stringify({ size: 'tkl', color: 'green' }),
          categoryId: 1,
          stock: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'MONSGEEK M6',
          description:
            'Макет «Алиса» был первоначально представлен yuktsi на TGR Alice. Он имеет разделенную компоновку, где каждая сторона разделена и наклонена внутрь, что обеспечивает более эргономичный набор текста. ',
          price: 100,
          meta: JSON.stringify({ size: 'full', color: 'green' }),
          categoryId: 1,
          stock: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'FAIRY PRO',
          description:
            'Fairy Pro Silent — бесшумный линейный переключатель, входящий в серию Akko v3 Pro Generation. В Fair Pro Silent направляющие смазаны, и они были в целом улучшены, чтобы обеспечить более плавный набор текста.',
          price: 7,
          categoryId: 3,
          meta: JSON.stringify({ click: 'silent' }),
          stock: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'MARBLE SODA',
          description:
            'Представляем переключатели серии Marble Soda. Эти переключатели SP-Star представляют собой линейный переключатель, выполненный в индивидуальной цветовой гамме, соответствующей нашему любимому газированному напитку, который можно открыть после трудного путешествия, исследования дальних пределов.',
          price: 7,
          categoryId: 3,
          meta: JSON.stringify({ click: 'clicky' }),
          stock: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'TKC BANANA',
          description:
            ' Это первая новинка в нашей линейке переключателей Snack Time Switch: переключатели Banana Split  представляют собой линейные переключатели с пружиной весом 62 г, корпусом из смеси нейлона и поликарбоната и штоком из ПОМ. ',
          price: 7,
          categoryId: 3,
          meta: JSON.stringify({ click: 'clicky' }),
          stock: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'eqalzpink',
          description:
            'Новейшее предложение переключателей от дизайнеров, которые представили вам любимые линейные переключатели сообщества, C³Equalz Tangerine и Banana Split, представляя долгожданную супергладкую линейку переключателей Fruit Smoothie. ',
          price: 7,
          categoryId: 3,
          meta: JSON.stringify({ click: 'silent' }),
          stock: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'eqalzpink blu',
          description:
            'Новейшее предложение переключателей от дизайнеров, которые представили вам любимые линейные переключатели сообщества, C³Equalz Tangerine и Banana Split, представляя долгожданную супергладкую линейку переключателей Fruit Smoothie. ',
          price: 7,
          categoryId: 3,
          meta: JSON.stringify({ click: 'silent' }),
          stock: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {});
  },
};
