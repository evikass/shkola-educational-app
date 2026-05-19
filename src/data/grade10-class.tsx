// Полные данные для 10 класса
// Иерархия: Предмет → Раздел → Тема → Урок

import { 
  Calculator, Target, Atom, Scroll, BookOpen, Users, 
  Monitor, Languages, Bug, FlaskConical, GraduationCap, History, Telescope, BookOpenText, Globe, Shield, Palette, Music
} from 'lucide-react'
import type { Subject } from './types'

// ==================== 10 КЛАСС ====================

export const grade10Subjects: Subject[] = [
  // ==================== РУССКИЙ ЯЗЫК ====================
  {
    id: 'russian10',
    title: 'Русский язык',
    icon: <BookOpen className="w-5 h-5" />,
    color: 'text-red-400',
    gradient: 'from-red-500 to-rose-500',
    description: 'Стилистика, культура речи, анализ текста',
    sections: [
      {
        id: 'rus10-s1',
        title: 'Фонетика и орфоэпия',
        description: 'Звуки речи и ударение',
        order: 1,
        topics: [
          {
            id: 'rus10-s1-t1',
            title: 'Фонетический разбор',
            description: 'Анализ звукового состава слова',
            theory: `<h3>Фонетика</h3>
            <p>Фонетика — раздел языкознания, изучающий звуки речи.</p>
            <h4>Гласные звуки:</h4>
            <ul>
              <li><b>Ударные</b>: [а], [о], [у], [ы], [и], [э]</li>
              <li><b>Безударные</b>: [ʌ], [иэ], [ыэ] — редуцированные</li>
            </ul>
            <h4>Согласные звуки:</h4>
            <ul>
              <li><b>Звонкие/глухие</b>: б-п, в-ф, г-к, д-т, ж-ш, з-с</li>
              <li><b>Твёрдые/мягкие</b>: [б]-[б'], [м]-[м']</li>
              <li><b>Всегда твёрдые</b>: [ж], [ш], [ц]</li>
              <li><b>Всегда мягкие</b>: [ч'], [щ'], [й']</li>
            </ul>`,
            examples: ['Сделай фонетический разбор слова "яблоко"', 'Определи количество звуков и букв'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 40,
            lessons: [
              {
                id: 'rus10-s1-t1-l1',
                title: 'Согласные звуки',
                content: `<div class="lesson">
                  <h2>🔊 Согласные звуки</h2>
                  <h3>Парные по звонкости/глухости:</h3>
                  <p>Б-П, В-Ф, Г-К, Д-Т, Ж-Ш, З-С</p>
                  <h3>Всегда звонкие:</h3>
                  <p>Л, М, Н, Р, Й</p>
                  <h3>Всегда глухие:</h3>
                  <p>Х, Ц, Ч, Щ</p>
                  <div class="tip">💡 Запомни: ЖИ-ШИ пиши с И!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              }
            ]
          },
          {
            id: 'rus10-s1-t2',
            title: 'Орфоэпические нормы',
            description: 'Правильное ударение и произношение',
            theory: `<h3>Орфоэпия</h3>
            <p>Орфоэпия — совокупность правил произношения.</p>
            <h4>Ударение в словах:</h4>
            <ul>
              <li>звони́т, позво́нит (не звóнит!)</li>
              <li>катало́г (не катáлог!)</li>
              <li>сре́дства (не средствá!)</li>
              <li>краси́вее (не красивéе!)</li>
            </ul>`,
            examples: ['Поставь ударение в словах', 'Определи правильное произношение'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 35,
            lessons: [
              {
                id: 'rus10-s1-t2-l1',
                title: 'Правила ударения',
                content: `<div class="lesson">
                  <h2>📝 Ударение</h2>
                  <h3>Запомни ударения:</h3>
                  <ul>
                    <li>звони́т, позво́нит</li>
                    <li>катало́г, диалог</li>
                    <li>сре́дства, торты́</li>
                  </ul>
                  <div class="tip">💡 Ударение проверяй по орфоэпическому словарю!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              }
            ]
          }
        ]
      },
      {
        id: 'rus10-s2',
        title: 'Лексика и фразеология',
        description: 'Слово и его значение',
        order: 2,
        topics: [
          {
            id: 'rus10-s2-t1',
            title: 'Лексическое значение слова',
            description: 'Типы лексических значений',
            theory: `<h3>Лексика</h3>
            <p>Лексика — словарный состав языка.</p>
            <h4>Типы лексических значений:</h4>
            <ul>
              <li><b>Прямое</b> — основное значение</li>
              <li><b>Переносное</b> — вторичное значение</li>
            </ul>
            <h4>Синонимы, антонимы, омонимы:</h4>
            <p>Синонимы: большой — огромный</p>
            <p>Антонимы: большой — маленький</p>`,
            examples: ['Определи тип лексического значения', 'Подбери синонимы и антонимы'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 35,
            lessons: [
              {
                id: 'rus10-s2-t1-l1',
                title: 'Синонимы и антонимы',
                content: `<div class="lesson">
                  <h2>📚 Лексические отношения</h2>
                  <h3>Синонимы (близкие):</h3>
                  <p>Красивый — прекрасный — великолепный</p>
                  <h3>Антонимы (противоположные):</h3>
                  <p>Большой — маленький, Добрый — злой</p>
                  <div class="tip">💡 Синонимы обогащают речь!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              }
            ]
          }
        ]
      },
      {
        id: 'rus10-s3',
        title: 'Стили речи',
        description: 'Функциональные стили',
        order: 3,
        topics: [
          {
            id: 'rus10-s3-t1',
            title: 'Функциональные стили',
            description: 'Разговорный, книжные стили',
            theory: `<h3>Стили речи</h3>
            <h4>Разговорный стиль:</h4>
            <p>Сфера: бытовое общение</p>
            <h4>Научный стиль:</h4>
            <p>Сфера: наука, образование</p>
            <h4>Официально-деловой стиль:</h4>
            <p>Сфера: документы, законы</p>
            <h4>Публицистический стиль:</h4>
            <p>Сфера: СМИ, выступления</p>
            <h4>Художественный стиль:</h4>
            <p>Сфера: литература</p>`,
            examples: ['Определи стиль текста', 'Найди средства разных стилей'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 45,
            lessons: [
              {
                id: 'rus10-s3-t1-l1',
                title: 'Определение стиля',
                content: `<div class="lesson">
                  <h2>📝 Стили речи</h2>
                  <h3>Разговорный:</h3>
                  <p>«Привет! Как дела?»</p>
                  <h3>Научный:</h3>
                  <p>«Фотосинтез — процесс образования органических веществ...»</p>
                  <h3>Официально-деловой:</h3>
                  <p>«Довожу до Вашего сведения...»</p>
                  <div class="tip">💡 Стиль определяется по цели и сфере!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              }
            ]
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'rus10-q1',
        question: 'В каком слове ударение падает на первый слог?',
        options: ['звонит', 'средства', 'красивее', 'каталог'],
        correctAnswer: 1,
        explanation: 'В слове «средства» ударение падает на первый слог: сре́дства.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'rus10-q2',
        question: 'Какой стиль используется в научных статьях?',
        options: ['Разговорный', 'Научный', 'Художественный', 'Официально-деловой'],
        correctAnswer: 1,
        explanation: 'Научный стиль используется в научных статьях.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'rus10-q3',
        question: 'Какие согласные всегда твёрдые?',
        options: ['Ч, Щ, Й', 'Ж, Ш, Ц', 'Б, В, Г', 'П, Ф, К'],
        correctAnswer: 1,
        explanation: 'Ж, Ш, Ц — всегда твёрдые согласные.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'rus10-q4',
        question: 'Какое слово имеет переносное значение?',
        options: ['Золотое кольцо', 'Золотые руки', 'Золотая медаль', 'Золотой слиток'],
        correctAnswer: 1,
        explanation: '"Золотые руки" — переносное значение (умелые руки).',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'rus10-q5',
        question: 'Какой стиль характеризуется неофициальностью общения?',
        options: ['Научный', 'Разговорный', 'Официально-деловой', 'Публицистический'],
        correctAnswer: 1,
        explanation: 'Разговорный стиль используется в бытовом общении.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'rus10-q6',
        question: 'В каком слове верно поставлено ударение?',
        options: ['красИвее', 'красивЕе', 'красИве', 'красивЕй'],
        correctAnswer: 0,
        explanation: 'Ударение в слове «краси́вее» падает на второй слог.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'rus10-q7',
        question: 'Что такое синонимы?',
        options: ['Слова с противоположным значением', 'Слова с близким значением', 'Слова с одинаковым написанием', 'Слова с разным звучанием'],
        correctAnswer: 1,
        explanation: 'Синонимы — слова с близким или одинаковым значением.',
        difficulty: 'easy',
        points: 10
      }
    ]
  },

  // ==================== ЛИТЕРАТУРА ====================
  {
    id: 'literature10',
    title: 'Литература',
    icon: <BookOpenText className="w-5 h-5" />,
    color: 'text-purple-400',
    gradient: 'from-purple-500 to-pink-500',
    description: 'Русская классика XIX века',
    sections: [
      {
        id: 'lit10-s1',
        title: 'А.С. Пушкин',
        description: 'Жизнь и творчество',
        order: 1,
        topics: [
          {
            id: 'lit10-s1-t1',
            title: 'Роман "Евгений Онегин"',
            description: 'Анализ романа в стихах',
            theory: `<h3>Роман "Евгений Онегин"</h3>
            <p>Роман в стихах, написанный в 1823-1831 годах.</p>
            <h4>Главная идея:</h4>
            <p>Изображение судьбы "лишнего человека" в русском обществе.</p>
            <h4>Система образов:</h4>
            <ul>
              <li><b>Евгений Онегин</b> — "лишний человек", скептик, эгоист</li>
              <li><b>Татьяна Ларина</b> — "милый идеал", искренность, глубина</li>
              <li><b>Владимир Ленский</b> — романтик, поэт, идеалист</li>
              <li><b>Ольга Ларина</b> — легкомысленная красавица</li>
            </ul>
            <h4>Особенности:</h4>
            <ul>
              <li>"Энциклопедия русской жизни"</li>
              <li>Онегинская строфа (14 строк, 4-стопный ямб)</li>
              <li>Лиро-эпический жанр</li>
            </ul>`,
            examples: ['Проанализируй образ Онегина', 'Сравни Татьяну и Ольгу'],
            completed: false,
            difficulty: 'hard',
            estimatedTime: 60,
            lessons: [
              {
                id: 'lit10-s1-t1-l1',
                title: 'Образ Онегина',
                content: `<div class="lesson">
                  <h2>📖 Евгений Онегин</h2>
                  <h3>Характеристика героя:</h3>
                  <ul>
                    <li>Тип "лишнего человека"</li>
                    <li>Образован, но поверхностно</li>
                    <li>Разочарован в жизни</li>
                    <li>Эгоист, не умеет любить</li>
                  </ul>
                  <h3>Эволюция героя:</h3>
                  <p>От эгоизма — к любви и раскаянию</p>
                  <div class="tip">💡 Онегин — отражение дворянской молодёжи XIX века!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 20
              },
              {
                id: 'lit10-s1-t1-l2',
                title: 'Образ Татьяны',
                content: `<div class="lesson">
                  <h2>💕 Татьяна Ларина</h2>
                  <h3>"Милый идеал" Пушкина:</h3>
                  <ul>
                    <li>Искренность и естественность</li>
                    <li>Глубина чувств</li>
                    <li>Верность долгу</li>
                    <li>Русская душа</li>
                  </ul>
                  <h3>Изменения:</h3>
                  <p>Провинциальная девушка → светская дама</p>
                  <p>Но сохранила внутренний мир</p>
                  <div class="tip">💡 "Я вас люблю (к чему лукавить?)" — признание Татьяны</div>
                </div>`,
                completed: false,
                order: 2,
                estimatedTime: 20
              }
            ]
          },
          {
            id: 'lit10-s1-t2',
            title: 'Лирика Пушкина',
            description: 'Темы и мотивы',
            theory: `<h3>Основные темы лирики</h3>
            <h4>Любовная лирика:</h4>
            <ul>
              <li>"Я помню чудное мгновенье..." (Керн)</li>
              <li>"На холмах Грузии лежит ночная мгла..."</li>
              <li>"Я вас любил: любовь ещё, быть может..."</li>
            </ul>
            <h4>Философская лирика:</h4>
            <ul>
              <li>"К морю" — тема свободы</li>
              <li>"Пророк" — назначение поэта</li>
              <li>"Я памятник себе воздвиг нерукотворный..."</li>
            </ul>
            <h4>Свободолюбивая лирика:</h4>
            <ul>
              <li>"К Чаадаеву"</li>
              <li>"Во глубине сибирских руд..."</li>
            </ul>`,
            examples: ['Проанализируй стихотворение', 'Определи тему лирики'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 45,
            lessons: [
              {
                id: 'lit10-s1-t2-l1',
                title: 'Любовная лирика',
                content: `<div class="lesson">
                  <h2>💝 Любовная лирика Пушкина</h2>
                  <h3>"Я вас любил...":</h3>
                  <p>Безответная любовь, благородство</p>
                  <p>"Я вас любил так искренно, так нежно..."</p>
                  <h3>"К ***" (Керн):</h3>
                  <p>"Я помню чудное мгновенье..."</p>
                  <p>Вдохновение, возрождение души</p>
                  <div class="tip">💡 Любовь у Пушкина — высокое, чистое чувство!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 20
              }
            ]
          }
        ]
      },
      {
        id: 'lit10-s2',
        title: 'М.Ю. Лермонтов',
        description: 'Поэзия и проза',
        order: 2,
        topics: [
          {
            id: 'lit10-s2-t1',
            title: 'Роман "Герой нашего времени"',
            description: 'Психологический роман',
            theory: `<h3>"Герой нашего времени"</h3>
            <p>Первый психологический роман в русской литературе.</p>
            <h4>Печорин — герой времени:</h4>
            <ul>
              <li>Тип "лишнего человека"</li>
              <li>Сила характера без цели</li>
              <li>Противоречивая натура</li>
              <li>Разрушитель судеб</li>
            </ul>
            <h4>Композиция:</h4>
            <p>Нарушена хронология — психологический эффект</p>
            <h4>Повести:</h4>
            <ul>
              <li>"Бэла" — страсть и трагедия</li>
              <li>"Максим Максимыч" — встреча с героем</li>
              <li>"Княжна Мери" — светское общество</li>
              <li>"Фаталист" — тема судьбы</li>
            </ul>`,
            examples: ['Проанализируй образ Печорина', 'Определи роль композиции'],
            completed: false,
            difficulty: 'hard',
            estimatedTime: 60,
            lessons: [
              {
                id: 'lit10-s2-t1-l1',
                title: 'Образ Печорина',
                content: `<div class="lesson">
                  <h2>🎭 Печорин</h2>
                  <h3>Характеристика:</h3>
                  <ul>
                    <li>"Страшный человек"</li>
                    <li>Ум, воля, скептицизм</li>
                    <li>Двойственность натуры</li>
                    <li>Одиночество и скука</li>
                  </ul>
                  <h3>Отношения:</h3>
                  <p>Бэла, Мери, Вера — разбитые судьбы</p>
                  <div class="tip">💡 Печорин — портрет поколения!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 20
              }
            ]
          },
          {
            id: 'lit10-s2-t2',
            title: 'Лирика Лермонтова',
            description: 'Темы и мотивы',
            theory: `<h3>Основные мотивы лирики</h3>
            <h4>Одиночество:</h4>
            <ul>
              <li>"Одиночество" — "Как страшно жизни сей оковы..."</li>
              <li>"Выхожу один я на дорогу..."</li>
            </ul>
            <h4>Свобода:</h4>
            <ul>
              <li>"Парус" — "Белеет парус одинокой..."</li>
              <li>"Мцыри" — поэма о свободе</li>
            </ul>
            <h4>Тема поэта и поэзии:</h4>
            <ul>
              <li>"Смерть поэта" — отклик на гибель Пушкина</li>
              <li>"Поэт" — назначение искусства</li>
            </ul>
            <h4>Патриотизм:</h4>
            <ul>
              <li>"Родина" — любовь к родной земле</li>
            </ul>`,
            examples: ['Проанализируй "Парус"', 'Определи тему одиночества'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 45,
            lessons: [
              {
                id: 'lit10-s2-t2-l1',
                title: 'Стихотворение "Парус"',
                content: `<div class="lesson">
                  <h2>⛵ "Парус"</h2>
                  <h3>Образ паруса:</h3>
                  <p>Символ одинокой, мятежной души</p>
                  <h3>Композиция:</h3>
                  <p>3 строфы, каждая — новая грань образа</p>
                  <h3>Ключевые строки:</h3>
                  <p>"А он, мятежный, просит бури,</p>
                  <p>Как будто в бурях есть покой!"</p>
                  <div class="tip">💡 Парус — символ романтического героя!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 20
              }
            ]
          }
        ]
      },
      {
        id: 'lit10-s3',
        title: 'Н.В. Гоголь',
        description: 'Сатира и реализм',
        order: 3,
        topics: [
          {
            id: 'lit10-s3-t1',
            title: 'Поэма "Мёртвые души"',
            description: 'Анализ произведения',
            theory: `<h3>"Мёртвые души"</h3>
            <p>Поэма в прозе (1842).</p>
            <h4>Сюжет:</h4>
            <p>Чичиков скупает "мёртвые души" — умерших крестьян для аферы.</p>
            <h4>Галерея помещиков:</h4>
            <ul>
              <li><b>Манилов</b> — сентиментальность, пустота</li>
              <li><b>Коробочка</b> — тупая жадность</li>
              <li><b>Ноздрёв</b> — безалаберность, хамство</li>
              <li><b>Собакевич</b> — грубая деловитость</li>
              <li><b>Плюшкин</b> — патологическая скупость</li>
            </ul>
            <h4>Идея:</h4>
            <p>Критика крепостничества, "мёртвые души" — омертвевшие характеры.</p>`,
            examples: ['Сравни образы помещиков', 'Проанализируй образ Чичикова'],
            completed: false,
            difficulty: 'hard',
            estimatedTime: 60,
            lessons: [
              {
                id: 'lit10-s3-t1-l1',
                title: 'Галерея помещиков',
                content: `<div class="lesson">
                  <h2>🏠 Помещики в поэме</h2>
                  <h3>Манилов:</h3>
                  <p>Мечтательность без дела, "маниловщина"</p>
                  <h3>Коробочка:</h3>
                  <p>Накопительство, боязнь нового</p>
                  <h3>Собакевич:</h3>
                  <p>"Дубинноголовый", грубая сила</p>
                  <h3>Плюшкин:</h3>
                  <p>"Прореха на человечестве"</p>
                  <div class="tip">💡 Гоголь показывает деградацию дворянства!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 20
              }
            ]
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'lit10-q1',
        question: 'Кто автор "Евгения Онегина"?',
        options: ['М.Ю. Лермонтов', 'А.С. Пушкин', 'Н.В. Гоголь', 'И.С. Тургенев'],
        correctAnswer: 1,
        explanation: 'Роман в стихах "Евгений Онегин" написал А.С. Пушкин.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'lit10-q2',
        question: 'Какой тип героя представляет Печорин?',
        options: ['Герой-романтик', 'Лишний человек', 'Герой-труженик', 'Герой-революционер'],
        correctAnswer: 1,
        explanation: 'Печорин — типичный "лишний человек" в русской литературе.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'lit10-q3',
        question: 'Сколько помещиков посещает Чичиков в "Мёртвых душах"?',
        options: ['Трёх', 'Четырёх', 'Пяти', 'Шести'],
        correctAnswer: 2,
        explanation: 'Чичиков посещает пять помещиков: Манилова, Коробочку, Ноздрёва, Собакевича и Плюшкина.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'lit10-q4',
        question: 'Как называется строфа, использованная Пушкиным в "Евгении Онегине"?',
        options: ['Сонет', 'Онегинская строфа', 'Ода', 'Баллада'],
        correctAnswer: 1,
        explanation: 'Онегинская строфа — 14 строк 4-стопного ямба.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'lit10-q5',
        question: 'Кого Пушкин назвал "милым идеалом"?',
        options: ['Ольгу Ларину', 'Татьяну Ларину', 'Наталью Гончарову', 'Анну Керн'],
        correctAnswer: 1,
        explanation: 'Татьяна Ларина — "милый идеал" Пушкина.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'lit10-q6',
        question: 'Какой жанр у произведения "Герой нашего времени"?',
        options: ['Роман-эпопея', 'Психологический роман', 'Повесть', 'Рассказ'],
        correctAnswer: 1,
        explanation: '"Герой нашего времени" — первый психологический роман в русской литературе.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'lit10-q7',
        question: 'Кто из помещиков в "Мёртвых душах" был "прорехой на человечестве"?',
        options: ['Манилов', 'Ноздрёв', 'Плюшкин', 'Собакевич'],
        correctAnswer: 2,
        explanation: 'Гоголь называет Плюшкина "прорехой на человечестве" из-за его патологической скупости.',
        difficulty: 'hard',
        points: 20
      },
      {
        id: 'lit10-q8',
        question: 'В каком стихотворении Лермонтов откликнулся на гибель Пушкина?',
        options: ['"Парус"', '"Мцыри"', '"Смерть поэта"', '"Родина"'],
        correctAnswer: 2,
        explanation: '"Смерть поэта" — отклик Лермонтова на гибель Пушкина.',
        difficulty: 'medium',
        points: 15
      }
    ]
  },

  // ==================== АЛГЕБРА И НАЧАЛА АНАЛИЗА ====================
  {
    id: 'algebra10',
    title: 'Алгебра и начала анализа',
    icon: <Calculator className="w-5 h-5" />,
    color: 'text-blue-400',
    gradient: 'from-blue-500 to-violet-500',
    description: 'Тригонометрия, производная, функции',
    sections: [
      {
        id: 'alg10-s1',
        title: 'Тригонометрические функции',
        description: 'Синус, косинус, тангенс',
        order: 1,
        topics: [
          {
            id: 'alg10-s1-t1',
            title: 'Тригонометрические формулы',
            description: 'Основные тождества',
            theory: `<h3>Основные тригонометрические тождества</h3>
            <h4>Главное тождество:</h4>
            <p>sin²α + cos²α = 1</p>
            <h4>Связь тангенса и котангенса:</h4>
            <p>tgα · ctgα = 1</p>
            <h4>Формулы сложения:</h4>
            <p>sin(α + β) = sinα·cosβ + cosα·sinβ</p>
            <p>cos(α + β) = cosα·cosβ - sinα·sinβ</p>
            <h4>Формулы двойного угла:</h4>
            <p>sin2α = 2sinα·cosα</p>
            <p>cos2α = cos²α - sin²α</p>`,
            examples: ['Упрости: 1 - sin²α', 'Вычисли sin2α, если sinα = 0.6'],
            completed: false,
            difficulty: 'hard',
            estimatedTime: 45,
            lessons: [
              {
                id: 'alg10-s1-t1-l1',
                title: 'Основные тождества',
                content: `<div class="lesson">
                  <h2>📐 Тригонометрические тождества</h2>
                  <h3>Главное тождество:</h3>
                  <p><b>sin²α + cos²α = 1</b></p>
                  <h3>Из него следует:</h3>
                  <p>sin²α = 1 - cos²α</p>
                  <p>cos²α = 1 - sin²α</p>
                  <div class="tip">💡 Зная sinα, можно найти cosα и наоборот!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              },
              {
                id: 'alg10-s1-t1-l2',
                title: 'Формулы сложения',
                content: `<div class="lesson">
                  <h2>➕ Формулы сложения</h2>
                  <h3>Синус суммы:</h3>
                  <p>sin(α + β) = sinα·cosβ + cosα·sinβ</p>
                  <h3>Косинус суммы:</h3>
                  <p>cos(α + β) = cosα·cosβ - sinα·sinβ</p>
                  <div class="tip">💡 Эти формулы — основа тригонометрии!</div>
                </div>`,
                completed: false,
                order: 2,
                estimatedTime: 15
              }
            ]
          },
          {
            id: 'alg10-s1-t2',
            title: 'Тригонометрические уравнения',
            description: 'Решение уравнений',
            theory: `<h3>Простейшие тригонометрические уравнения</h3>
            <h4>sin x = a:</h4>
            <p>x = (-1)ⁿ · arcsin a + πn, n ∈ Z</p>
            <h4>cos x = a:</h4>
            <p>x = ± arccos a + 2πn, n ∈ Z</p>
            <h4>tg x = a:</h4>
            <p>x = arctg a + πn, n ∈ Z</p>`,
            examples: ['Реши: sin x = 0.5', 'Реши: cos x = -√2/2'],
            completed: false,
            difficulty: 'hard',
            estimatedTime: 50,
            lessons: [
              {
                id: 'alg10-s1-t2-l1',
                title: 'Решение sin x = a',
                content: `<div class="lesson">
                  <h2>📈 Уравнение sin x = a</h2>
                  <h3>Общее решение:</h3>
                  <p>x = (-1)ⁿ · arcsin a + πn, n ∈ Z</p>
                  <h3>Частные случаи:</h3>
                  <ul>
                    <li>sin x = 0 → x = πn</li>
                    <li>sin x = 1 → x = π/2 + 2πn</li>
                  </ul>
                  <div class="tip">💡 |a| ≤ 1 — иначе решений нет!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              }
            ]
          }
        ]
      },
      {
        id: 'alg10-s2',
        title: 'Производная',
        description: 'Понятие производной и её применение',
        order: 2,
        topics: [
          {
            id: 'alg10-s2-t1',
            title: 'Понятие производной',
            description: 'Определение и формулы',
            theory: `<h3>Производная функции</h3>
            <p>Производная — предел отношения приращения функции к приращению аргумента.</p>
            <h4>Таблица производных:</h4>
            <ul>
              <li>C' = 0 (константа)</li>
              <li>(xⁿ)' = n·xⁿ⁻¹</li>
              <li>(sin x)' = cos x</li>
              <li>(cos x)' = -sin x</li>
              <li>(eˣ)' = eˣ</li>
              <li>(ln x)' = 1/x</li>
            </ul>`,
            examples: ['Найди производную: x³ + 2x', 'Найди: (x²·sin x)\''],
            completed: false,
            difficulty: 'hard',
            estimatedTime: 50,
            lessons: [
              {
                id: 'alg10-s2-t1-l1',
                title: 'Таблица производных',
                content: `<div class="lesson">
                  <h2>📊 Производные элементарных функций</h2>
                  <h3>Степенная:</h3>
                  <p>(xⁿ)' = n·xⁿ⁻¹</p>
                  <h3>Тригонометрические:</h3>
                  <p>(sin x)' = cos x</p>
                  <p>(cos x)' = -sin x</p>
                  <div class="tip">💡 Выучи таблицу производных!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              }
            ]
          },
          {
            id: 'alg10-s2-t2',
            title: 'Применение производной',
            description: 'Исследование функций',
            theory: `<h3>Применение производной</h3>
            <h4>Геометрический смысл:</h4>
            <p>f'(x₀) = tg α — тангенс угла наклона касательной</p>
            <h4>Исследование функции:</h4>
            <ul>
              <li>f'(x) > 0 — функция возрастает</li>
              <li>f'(x) < 0 — функция убывает</li>
              <li>f'(x) = 0 — критическая точка</li>
            </ul>`,
            examples: ['Найди точки экстремума', 'Напиши уравнение касательной'],
            completed: false,
            difficulty: 'hard',
            estimatedTime: 55,
            lessons: [
              {
                id: 'alg10-s2-t2-l1',
                title: 'Возрастание и убывание',
                content: `<div class="lesson">
                  <h2>📈 Монотонность функции</h2>
                  <h3>Правила:</h3>
                  <ul>
                    <li>f'(x) > 0 — возрастает</li>
                    <li>f'(x) < 0 — убывает</li>
                  </ul>
                  <div class="tip">💡 Точка, где f'(x) = 0 — возможный экстремум!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              }
            ]
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'alg10-q1',
        question: 'Чему равен cos²α, если sin²α = 0.36?',
        options: ['0.36', '0.64', '1', '0.6'],
        correctAnswer: 1,
        explanation: 'sin²α + cos²α = 1, значит cos²α = 1 - 0.36 = 0.64.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'alg10-q2',
        question: 'Найди производную: f(x) = x⁴',
        options: ['x³', '4x³', '4x⁴', 'x⁴'],
        correctAnswer: 1,
        explanation: '(xⁿ)\' = n·xⁿ⁻¹. (x⁴)\' = 4x³.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'alg10-q3',
        question: 'Чему равен sin2α?',
        options: ['2sinαcosα', 'sin²α + cos²α', '2sinα', 'sinαcosα'],
        correctAnswer: 0,
        explanation: 'Формула двойного угла: sin2α = 2sinαcosα.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'alg10-q4',
        question: 'Какое уравнение является решением sin x = 0?',
        options: ['x = π/2 + 2πn', 'x = πn', 'x = 2πn', 'x = -π/2 + πn'],
        correctAnswer: 1,
        explanation: 'sin x = 0 при x = πn, n ∈ Z.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'alg10-q5',
        question: 'Найди производную: f(x) = cos x',
        options: ['sin x', '-sin x', 'cos x', '-cos x'],
        correctAnswer: 1,
        explanation: '(cos x)\' = -sin x.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'alg10-q6',
        question: 'При каком условии функция возрастает?',
        options: ['f\'(x) < 0', 'f\'(x) > 0', 'f\'(x) = 0', 'f(x) > 0'],
        correctAnswer: 1,
        explanation: 'Функция возрастает, когда f\'(x) > 0.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'alg10-q7',
        question: 'Чему равен tgα·ctgα?',
        options: ['0', '1', 'sin²α', 'cos²α'],
        correctAnswer: 1,
        explanation: 'tgα·ctgα = 1.',
        difficulty: 'easy',
        points: 10
      }
    ]
  },

  // ==================== ГЕОМЕТРИЯ (Стереометрия) ====================
  {
    id: 'geometry10',
    title: 'Геометрия',
    icon: <Target className="w-5 h-5" />,
    color: 'text-purple-400',
    gradient: 'from-purple-500 to-pink-500',
    description: 'Стереометрия: многогранники и тела',
    sections: [
      {
        id: 'geom10-s1',
        title: 'Многогранники',
        description: 'Призма, пирамида',
        order: 1,
        topics: [
          {
            id: 'geom10-s1-t1',
            title: 'Призма',
            description: 'Прямая и наклонная призма',
            theory: `<h3>Призма</h3>
            <p>Многогранник с двумя равными основаниями и параллельными рёбрами.</p>
            <h4>Формулы:</h4>
            <ul>
              <li><b>Sбок</b> = P·h (прямая призма)</li>
              <li><b>V</b> = Sосн·h</li>
            </ul>`,
            examples: ['Найди объём призмы', 'Вычисли площадь боковой поверхности'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 40,
            lessons: [
              {
                id: 'geom10-s1-t1-l1',
                title: 'Прямая призма',
                content: `<div class="lesson">
                  <h2>📦 Призма</h2>
                  <h3>Формулы:</h3>
                  <p>Sбок = P·h</p>
                  <p>V = Sосн·h</p>
                  <div class="tip">💡 В прямой призме высота = боковому ребру!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              }
            ]
          },
          {
            id: 'geom10-s1-t2',
            title: 'Пирамида',
            description: 'Правильная пирамида',
            theory: `<h3>Пирамида</h3>
            <h4>Правильная пирамида:</h4>
            <ul>
              <li>Основание — правильный многоугольник</li>
              <li>Все боковые рёбра равны</li>
            </ul>
            <h4>Формулы:</h4>
            <ul>
              <li><b>Sбок</b> = ½·P·a (a — апофема)</li>
              <li><b>V</b> = ⅓·Sосн·h</li>
            </ul>`,
            examples: ['Найди объём пирамиды', 'Вычисли апофему'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 40,
            lessons: [
              {
                id: 'geom10-s1-t2-l1',
                title: 'Правильная пирамида',
                content: `<div class="lesson">
                  <h2>🔺 Пирамида</h2>
                  <h3>Формулы:</h3>
                  <p>Sбок = ½·P·a</p>
                  <p>V = ⅓·Sосн·h</p>
                  <div class="tip">💡 Объём пирамиды = ⅓ объёма призмы!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              }
            ]
          }
        ]
      },
      {
        id: 'geom10-s2',
        title: 'Тела вращения',
        description: 'Цилиндр, конус, шар',
        order: 2,
        topics: [
          {
            id: 'geom10-s2-t1',
            title: 'Цилиндр и конус',
            description: 'Тела вращения',
            theory: `<h3>Цилиндр</h3>
            <ul>
              <li><b>Sбок</b> = 2πRh</li>
              <li><b>V</b> = πR²h</li>
            </ul>
            <h3>Конус</h3>
            <ul>
              <li><b>Sбок</b> = πRl</li>
              <li><b>V</b> = ⅓πR²h</li>
            </ul>`,
            examples: ['Найди объём цилиндра', 'Вычисли площадь конуса'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 35,
            lessons: [
              {
                id: 'geom10-s2-t1-l1',
                title: 'Цилиндр',
                content: `<div class="lesson">
                  <h2>📦 Цилиндр</h2>
                  <h3>Формулы:</h3>
                  <p>Sбок = 2πRh</p>
                  <p>V = πR²h</p>
                  <div class="tip">💡 Цилиндр = прямоугольник, свёрнутый в трубу!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              }
            ]
          },
          {
            id: 'geom10-s2-t2',
            title: 'Шар и сфера',
            description: 'Шар, его элементы',
            theory: `<h3>Шар и сфера</h3>
            <h4>Сфера:</h4>
            <p>S = 4πR²</p>
            <h4>Шар:</h4>
            <p>V = ⁴⁄₃πR³</p>`,
            examples: ['Найди объём шара', 'Вычисли площадь сферы'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 30,
            lessons: [
              {
                id: 'geom10-s2-t2-l1',
                title: 'Шар и сфера',
                content: `<div class="lesson">
                  <h2>🔮 Шар</h2>
                  <h3>Формулы:</h3>
                  <p>Sсферы = 4πR²</p>
                  <p>Vшара = ⁴⁄₃πR³</p>
                  <div class="tip">💡 Сфера — это "кожа" шара!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              }
            ]
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'geom10-q1',
        question: 'Чему равен объём призмы с Sосн = 10 и h = 5?',
        options: ['50', '25', '15', '30'],
        correctAnswer: 0,
        explanation: 'V = Sосн·h = 10·5 = 50.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'geom10-q2',
        question: 'Чему равен объём цилиндра с R = 2, h = 3?',
        options: ['6π', '12π', '4π', '8π'],
        correctAnswer: 1,
        explanation: 'V = πR²h = π·4·3 = 12π.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'geom10-q3',
        question: 'Чему равен объём пирамиды?',
        options: ['Sосн·h', '⅓·Sосн·h', '½·Sосн·h', '¼·Sосн·h'],
        correctAnswer: 1,
        explanation: 'Vпирамиды = ⅓·Sосн·h.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'geom10-q4',
        question: 'Чему равна площадь поверхности сферы?',
        options: ['2πR²', '3πR²', '4πR²', 'πR²'],
        correctAnswer: 2,
        explanation: 'Sсферы = 4πR².',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'geom10-q5',
        question: 'Чему равен объём шара с R = 3?',
        options: ['12π', '27π', '36π', '9π'],
        correctAnswer: 2,
        explanation: 'Vшара = ⁴⁄₃πR³ = ⁴⁄₃π·27 = 36π.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'geom10-q6',
        question: 'Какая фигура является боковой поверхностью цилиндра?',
        options: ['Круг', 'Прямоугольник', 'Треугольник', 'Трапеция'],
        correctAnswer: 1,
        explanation: 'Боковая поверхность цилиндра — прямоугольник.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'geom10-q7',
        question: 'Что такое апофема пирамиды?',
        options: ['Высота пирамиды', 'Высота боковой грани', 'Радиус основания', 'Диагональ основания'],
        correctAnswer: 1,
        explanation: 'Апофема — высота боковой грани правильной пирамиды.',
        difficulty: 'medium',
        points: 15
      }
    ]
  },

  // ==================== ИСТОРИЯ ====================
  {
    id: 'history10',
    title: 'История',
    icon: <History className="w-5 h-5" />,
    color: 'text-amber-400',
    gradient: 'from-amber-500 to-orange-500',
    description: 'Россия в XIX-XX веках',
    sections: [
      {
        id: 'hist10-s1',
        title: 'Россия в XIX веке',
        description: 'От Александра I до Николая II',
        order: 1,
        topics: [
          {
            id: 'hist10-s1-t1',
            title: 'Правление Александра I',
            description: 'Реформы и Отечественная война 1812 года',
            theory: `<h3>Александр I (1801-1825)</h3>
            <h4>Либеральные реформы:</h4>
            <ul>
              <li>Министерская реформа (1802)</li>
              <li>Реформа образования</li>
              <li>Проект Конституции (М.М. Сперанский)</li>
              <li>Указ о вольных хлебопашцах (1803)</li>
            </ul>
            <h4>Отечественная война 1812:</h4>
            <ul>
              <li>Причина: нарушение Тильзитского мира</li>
              <li>Бородинское сражение (26 августа)</li>
              <li>Тарутинский манёвр Кутузова</li>
              <li>Изгнание Наполеона</li>
            </ul>
            <h4>Итоги:</h4>
            <p>Венский конгресс (1815), Священный союз</p>`,
            examples: ['Охарактеризуй реформы Александра I', 'Опиши Бородинское сражение'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 50,
            lessons: [
              {
                id: 'hist10-s1-t1-l1',
                title: 'Отечественная война 1812',
                content: `<div class="lesson">
                  <div style="text-align: center; margin-bottom: 1rem;">
                    <img src="/inetshkola/images/topics/history/t11.svg" alt="Отечественная война 1812" style="max-width: 100%; height: auto; border-radius: 12px;" />
                  </div>
                  <h2>⚔️ Война 1812 года</h2>
                  <h3>Причины:</h3>
                  <p>Континентальная блокада, споры о Польше</p>
                  <h3>Хронология:</h3>
                  <ul>
                    <li>12 июня — переход Наполеона через Неман</li>
                    <li>8 августа — Кутузов главнокомандующий</li>
                    <li>26 августа — Бородино</li>
                    <li>октябрь — бегство Наполеона из Москвы</li>
                  </ul>
                  <div class="tip">💡 "Сражение выиграно, но война не закончена!" — Кутузов</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 20
              }
            ]
          },
          {
            id: 'hist10-s1-t2',
            title: 'Декабристы',
            description: 'Восстание 14 декабря 1825 года',
            theory: `<h3>Движение декабристов</h3>
            <h4>Причины:</h4>
            <ul>
              <li>Влияние идей Просвещения</li>
              <li>Отечественная война 1812</li>
              <li>Крепостное право</li>
            </ul>
            <h4>Организации:</h4>
            <ul>
              <li>Союз спасения (1816)</li>
              <li>Союз благоденствия (1818)</li>
              <li>Северное и Южное общества</li>
            </ul>
            <h4>Восстание 14 декабря 1825:</h4>
            <ul>
              <li>Сенатская площадь в Петербурге</li>
              <li>Требования: Конституция, отмена крепостничества</li>
              <li>Подавление войсками Николая I</li>
            </ul>
            <h4>Итоги:</h4>
            <p>5 казнены (Пестель, Муравьёв-Апостол и др.), 121 сослан</p>`,
            examples: ['Определи причины восстания', 'Сравни программы декабристов'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 45,
            lessons: [
              {
                id: 'hist10-s1-t2-l1',
                title: 'Программы декабристов',
                content: `<div class="lesson">
                  <div style="text-align: center; margin-bottom: 1rem;">
                    <img src="/inetshkola/images/topics/history/t12.svg" alt="Декабристы" style="max-width: 100%; height: auto; border-radius: 12px;" />
                  </div>
                  <h2>📜 Программы декабристов</h2>
                  <h3>"Русская правда" (Пестель):</h3>
                  <ul>
                    <li>Республика</li>
                    <li>Отмена крепостничества с землёй</li>
                    <li>Однопалатный парламент</li>
                  </ul>
                  <h3>"Конституция" (Муравьёв):</h3>
                  <ul>
                    <li>Конституционная монархия</li>
                    <li>Освобождение без земли</li>
                    <li>Двухпалатный парламент</li>
                  </ul>
                  <div class="tip">💡 Декабристы — первые революционеры России!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 20
              }
            ]
          },
          {
            id: 'hist10-s1-t3',
            title: 'Отмена крепостного права',
            description: 'Реформы Александра II',
            theory: `<h3>Крестьянская реформа 1861</h3>
            <h4>Причины:</h4>
            <ul>
              <li>Кризис крепостничества</li>
              <li>Поражение в Крымской войне</li>
              <li>Рост крестьянских выступлений</li>
            </ul>
            <h4>Основные положения:</h4>
            <ul>
              <li>Личная свобода крестьян</li>
              <li>Выкуп земли у помещиков</li>
              <li>Отрезки — потеря части земли</li>
              <li>Временнообязанное состояние</li>
            </ul>
            <h4>Значение:</h4>
            <p>Начало модернизации России</p>`,
            examples: ['Оцени реформу 1861 года', 'Что такое отрезки?'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 45,
            lessons: [
              {
                id: 'hist10-s1-t3-l1',
                title: 'Суть реформы',
                content: `<div class="lesson">
                  <div style="text-align: center; margin-bottom: 1rem;">
                    <img src="/inetshkola/images/topics/history/t11.svg" alt="Отмена крепостного права" style="max-width: 100%; height: auto; border-radius: 12px;" />
                  </div>
                  <h2>📋 Реформа 1861 года</h2>
                  <h3>Ключевые даты:</h3>
                  <ul>
                    <li>19 февраля 1861 — Манифест</li>
                    <li>1881 — конец временнообязанного состояния</li>
                  </ul>
                  <h3>Условия:</h3>
                  <p>Выкуп = 20% крестьянин + 80% государство (кредит на 49 лет)</p>
                  <p>Отрезки = крестьяне потеряли до 20% земли</p>
                  <h3>Значение:</h3>
                  <p>Россия пошла по пути капитализма</p>
                  <div class="tip">💡 "Великие реформы" изменили Россию навсегда!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 20
              }
            ]
          }
        ]
      },
      {
        id: 'hist10-s2',
        title: 'Россия в начале XX века',
        description: 'Революции и реформы',
        order: 2,
        topics: [
          {
            id: 'hist10-s2-t1',
            title: 'Революция 1905-1907',
            description: 'Первая русская революция',
            theory: `<h3>Революция 1905-1907</h3>
            <h4>Причины:</h4>
            <ul>
              <li>Отсутствие политических прав</li>
              <li>Крепостнические пережитки</li>
              <li>Русско-японская война</li>
            </ul>
            <h4>Ход:</h4>
            <ul>
              <li>9 января — Кровавое воскресенье</li>
              <li>Май — забастовки в Иванове</li>
              <li>Июнь — восстание на "Потёмкине"</li>
              <li>Октябрь — Всероссийская стачка</li>
              <li>Декабрь — вооружённое восстание в Москве</li>
            </ul>
            <h4>Итоги:</h4>
            <ul>
              <li>Манифест 17 октября</li>
              <li>Создание Государственной Думы</li>
              <li>Политические партии легализованы</li>
            </ul>`,
            examples: ['Опиши ход революции', 'Оцени Манифест 17 октября'],
            completed: false,
            difficulty: 'hard',
            estimatedTime: 50,
            lessons: [
              {
                id: 'hist10-s2-t1-l1',
                title: 'Кровавое воскресенье',
                content: `<div class="lesson">
                  <div style="text-align: center; margin-bottom: 1rem;">
                    <img src="/inetshkola/images/topics/history/t12.svg" alt="Революция 1905" style="max-width: 100%; height: auto; border-radius: 12px;" />
                  </div>
                  <h2>🗓️ 9 января 1905</h2>
                  <h3>Шествие к царю:</h3>
                  <p>Отец Гапон, 150 000 рабочих</p>
                  <h3>Требования:</h3>
                  <ul>
                    <li>8-часовой рабочий день</li>
                    <li>Учредительное собрание</li>
                    <li>Политические свободы</li>
                  </ul>
                  <h3>Итог:</h3>
                  <p>Более 1000 убитых, начало революции</p>
                  <div class="tip">💡 "У нас больше нет царя!" — реакция народа</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 20
              }
            ]
          }
        ]
      },
      {
        id: 'hist10-s3',
        title: 'Первая мировая война',
        description: '1914-1918 годы',
        order: 3,
        topics: [
          {
            id: 'hist10-s3-t1',
            title: 'Россия в Первой мировой войне',
            description: 'Участие России в войне',
            theory: `<h3>Первая мировая война (1914-1918)</h3>
            <h4>Причины:</h4>
            <ul>
              <li>Борьба за передел колоний</li>
              <li>Противоречия между державами</li>
              <li>Убийство эрцгерцога Франца Фердинанда</li>
            </ul>
            <h4>Военные действия:</h4>
            <ul>
              <li>1914 — Восточно-Прусская операция</li>
              <li>1915 — Великое отступление</li>
              <li>1916 — Брусиловский прорыв</li>
            </ul>
            <h4>Итоги для России:</h4>
            <ul>
              <li>Огромные потери</li>
              <li>Экономический кризис</li>
              <li>Рост недовольства</li>
              <li>Февральская революция 1917</li>
            </ul>`,
            examples: ['Опиши Брусиловский прорыв', 'Каковы причины вступления России в войну?'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 50,
            lessons: [
              {
                id: 'hist10-s3-t1-l1',
                title: 'Брусиловский прорыв',
                content: `<div class="lesson">
                  <div style="text-align: center; margin-bottom: 1rem;">
                    <img src="/inetshkola/images/topics/history/t11.svg" alt="Первая мировая война" style="max-width: 100%; height: auto; border-radius: 12px;" />
                  </div>
                  <h2>⚔️ Брусиловский прорыв</h2>
                  <h3>Дата:</h3>
                  <p>Май-июнь 1916 года</p>
                  <h3>Суть:</h3>
                  <p>Наступление Юго-Западного фронта под командованием А.А. Брусилова</p>
                  <h3>Результат:</h3>
                  <ul>
                    <li>Прорыв австрийского фронта на 340 км</li>
                    <li>Взятие 400 000 пленных</li>
                    <li>Спасение Франции от разгрома</li>
                  </ul>
                  <div class="tip">💡 Последний крупный успех Российской империи!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              }
            ]
          }
        ]
      },
      {
        id: 'hist10-s4',
        title: 'Революции 1917 года',
        description: 'Февраль и Октябрь',
        order: 4,
        topics: [
          {
            id: 'hist10-s4-t1',
            title: 'Февральская революция',
            description: 'Свержение монархии',
            theory: `<h3>Февральская революция 1917</h3>
            <h4>Причины:</h4>
            <ul>
              <li>Военные неудачи</li>
              <li>Экономический кризис</li>
              <li>Нерешённость аграрного вопроса</li>
              <li>"Министерская чехарда"</li>
            </ul>
            <h4>Ход:</h4>
            <ul>
              <li>23 февраля — забастовки в Петрограде</li>
              <li>27 февраля — переход армии на сторону народа</li>
              <li>2 марта — отречение Николая II</li>
            </ul>
            <h4>Итоги:</h4>
            <ul>
              <li>Свержение самодержавия</li>
              <li>Двоевластие: Временное правительство и Петросовет</li>
            </ul>`,
            examples: ['Опиши ход Февральской революции', 'Что такое двоевластие?'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 45,
            lessons: [
              {
                id: 'hist10-s4-t1-l1',
                title: 'Отречение Николая II',
                content: `<div class="lesson">
                  <div style="text-align: center; margin-bottom: 1rem;">
                    <img src="/inetshkola/images/topics/history/t12.svg" alt="Февральская революция" style="max-width: 100%; height: auto; border-radius: 12px;" />
                  </div>
                  <h2>📜 Отречение</h2>
                  <h3>Дата:</h3>
                  <p>2 марта 1917 года</p>
                  <h3>Место:</h3>
                  <p>Вагон поезда, станция Дно (Псков)</p>
                  <h3>Причина:</h3>
                  <p>Потеря поддержки армии, "Верхи не могут, низы не хотят"</p>
                  <h3>Итог:</h3>
                  <p>Конец 304-летней династии Романовых</p>
                  <div class="tip">💡 Двоевластие: Временное правительство и Петросовет!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              }
            ]
          },
          {
            id: 'hist10-s4-t2',
            title: 'Октябрьская революция',
            description: 'Приход большевиков к власти',
            theory: `<h3>Октябрьская революция 1917</h3>
            <h4>Предпосылки:</h4>
            <ul>
              <li>Кризис Временного правительства</li>
              <li>"Апрельские тезисы" Ленина</li>
              <li>Корниловский мятеж</li>
              <li>Большевизация Советов</li>
            </ul>
            <h4>Ход:</h4>
            <ul>
              <li>24-25 октября — вооружённое восстание</li>
              <li>Штурм Зимнего дворца</li>
              <li>II съезд Советов</li>
            </ul>
            <h4>Первые декреты:</h4>
            <ul>
              <li>Декрет о мире</li>
              <li>Декрет о земле</li>
              <li>Декрет о власти</li>
            </ul>`,
            examples: ['Опиши ход Октябрьского восстания', 'Каковы первые декреты Советской власти?'],
            completed: false,
            difficulty: 'hard',
            estimatedTime: 55,
            lessons: [
              {
                id: 'hist10-s4-t2-l1',
                title: 'Первые декреты',
                content: `<div class="lesson">
                  <div style="text-align: center; margin-bottom: 1rem;">
                    <img src="/inetshkola/images/topics/history/t12.svg" alt="Октябрьская революция" style="max-width: 100%; height: auto; border-radius: 12px;" />
                  </div>
                  <h2>📑 Декреты Советской власти</h2>
                  <h3>О мире (26 октября):</h3>
                  <p>Выход из войны без аннексий и контрибуций</p>
                  <h3>О земле (26 октября):</h3>
                  <p>Отмена частной собственности на землю, земля — крестьянам!</p>
                  <h3>О власти:</h3>
                  <p>Вся власть Советам! СНК во главе с Лениным</p>
                  <h3>Итог:</h3>
                  <p>Начало строительства социалистического государства</p>
                  <div class="tip">💡 "Мир — народам, земля — крестьянам, фабрики — рабочим!"</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              }
            ]
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'hist10-q1',
        question: 'В каком году была отменена крепостная зависимость?',
        options: ['1803', '1861', '1881', '1905'],
        correctAnswer: 1,
        explanation: 'Крепостное право было отменено в 1861 году Александром II.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'hist10-q2',
        question: 'Кто был главнокомандующим в войне 1812 года?',
        options: ['Александр I', 'Барклай-де-Толли', 'М.И. Кутузов', 'Сперанский'],
        correctAnswer: 2,
        explanation: 'М.И. Кутузов был назначен главнокомандующим 8 августа 1812 года.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'hist10-q3',
        question: 'Когда произошло Кровавое воскресенье?',
        options: ['1903', '1905', '1907', '1914'],
        correctAnswer: 1,
        explanation: 'Кровавое воскресенье — 9 января 1905 года.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'hist10-q4',
        question: 'Кто был автором проекта "Русская правда"?',
        options: ['Муравьёв', 'Пестель', 'Рылеев', 'Сперанский'],
        correctAnswer: 1,
        explanation: 'П.И. Пестель — автор "Русской правды".',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'hist10-q5',
        question: 'В каком году произошла Октябрьская революция?',
        options: ['1905', '1914', '1917', '1921'],
        correctAnswer: 2,
        explanation: 'Октябрьская революция произошла в октябре 1917 года.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'hist10-q6',
        question: 'Как назывался манифест, изданный 17 октября 1905 года?',
        options: ['Манифест о земле', 'Манифест о свободах', 'Манифест "Об усовершенствовании государственного порядка"', 'Манифест о войне'],
        correctAnswer: 2,
        explanation: 'Манифест 17 октября "Об усовершенствовании государственного порядка" даровал свободы.',
        difficulty: 'hard',
        points: 20
      },
      {
        id: 'hist10-q7',
        question: 'Какое событие началось 23 февраля 1917 года?',
        options: ['Октябрьская революция', 'Февральская революция', 'Первая мировая война', 'Гражданская война'],
        correctAnswer: 1,
        explanation: '23 февраля 1917 года началась Февральская революция.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'hist10-q8',
        question: 'Кто командовал Юго-Западным фронтом в 1916 году?',
        options: ['Кутузов', 'Брусилов', 'Колчак', 'Корнилов'],
        correctAnswer: 1,
        explanation: 'А.А. Брусилов командовал Юго-Западным фронтом и провёл знаменитый прорыв.',
        difficulty: 'medium',
        points: 15
      }
    ]
  },

  // ==================== ФИЗИКА ====================
  {
        id: 'physics10',
        title: 'Физика',
        icon: <Atom className="w-5 h-5" />,
        color: 'text-pink-400',
        gradient: 'from-pink-500 to-rose-500',
        description: 'Механика, молекулярная физика, термодинамика, электростатика (по Грачеву)',
        sections: [
          {
            id: 'phys10-s1',
            title: 'Кинематика',
            description: 'Механическое движение, скорость, ускорение',
            order: 1,
            topics: [
                {
                  id: 'phys10-s1-t1',
                  title: 'Классическая механика Ньютона',
                  description: 'Предмет механики, границы применимости',
                  theory: `<h3>Классическая механика Ньютона</h3>
                <p>Механика — раздел физики, изучающий движение тел и причины, его вызывающие. Классическая механика Ньютона описывает движение макроскопических тел со скоростями, много меньшими скорости света в вакууме.</p>
                <h4>Разделы механики:</h4>
                <ul>
                  <li><b>Кинематика</b> — описание движения без выяснения причин</li>
                  <li><b>Динамика</b> — причины движения (законы Ньютона)</li>
                  <li><b>Законы сохранения</b> — импульс, энергия</li>
                  <li><b>Статика</b> — условия равновесия</li>
                </ul>
                <h4>Границы применимости:</h4>
                <ul>
                  <li>Скорости много меньше скорости света (v &lt;&lt; c)</li>
                  <li>Макроскопические тела (размеры много больше атомных)</li>
                  <li>Инерциальные системы отсчёта</li>
                </ul>
                <h4>Принцип относительности Галилея:</h4>
                <p>Все механические явления протекают одинаково во всех инерциальных системах отсчёта.</p>`,
                  examples: ['Что изучает кинематика?', 'Границы применимости механики Ньютона', 'Сформулируйте принцип относительности Галилея'],
                  completed: false,
                  difficulty: 'easy',
                  estimatedTime: 25,
                  image: '/images/lessons/grade10/physics/lesson1.svg',
                  lessons: [
                    {
                      id: 'phys10-s1-t1-l1',
                      title: 'Введение в механику',
                      content: `<div class="lesson">
                          <div style="text-align: center; margin-bottom: 1rem;">
                            <img src="/images/lessons/grade10/physics/lesson1.svg" alt="Классическая механика Ньютона" style="max-width: 100%; height: auto; border-radius: 12px;" />
                          </div>
                          <h2>Классическая механика Ньютона</h2>
                          <p>Механика — фундаментальный раздел физики, изучающий движение и взаимодействие тел. Она делится на кинематику (описание движения), динамику (причины движения), законы сохранения и статику.</p>
                          <h3>Границы применимости:</h3>
                          <p>v &lt;&lt; c, макротела, инерциальные СО</p>
                          <div class="tip">Классическая механика — основа для понимания всех физических процессов!</div>
                        </div>`,
                      completed: false,
                      order: 1,
                      estimatedTime: 15
                    },
                  ],
                },
                {
                  id: 'phys10-s1-t2',
                  title: 'Положение тела в пространстве. Системы отсчёта',
                  description: 'Тело отсчёта, система координат, материальная точка',
                  theory: `<h3>Положение тела. Системы отсчёта</h3>
                <h4>Механическое движение:</h4>
                <p>Изменение положения тела в пространстве относительно других тел с течением времени.</p>
                <h4>Система отсчёта:</h4>
                <ul>
                  <li><b>Тело отсчёта</b> — тело, относительно которого определяется положение</li>
                  <li><b>Система координат</b> — для указания положения (декартова x, y, z)</li>
                  <li><b>Часы</b> — для отсчёта времени</li>
                </ul>
                <h4>Материальная точка:</h4>
                <p>Тело, размерами и формой которого в данных условиях можно пренебречь. Модель, упрощающая задачу.</p>
                <h4>Радиус-вектор:</h4>
                <p><b>r</b> — вектор, проведённый из начала координат в точку, где находится тело.</p>
                <p>Проекции: r<sub>x</sub> = x, r<sub>y</sub> = y, r<sub>z</sub> = z</p>
                <h4>Когда тело можно считать материальной точкой:</h4>
                <ul>
                  <li>Размеры тела много меньше расстояний в задаче</li>
                  <li>Движение поступательное</li>
                </ul>`,
                  examples: ['Что входит в систему отсчёта?', 'Когда тело — материальная точка?', 'Чему равен модуль радиус-вектора?'],
                  completed: false,
                  difficulty: 'easy',
                  estimatedTime: 30,
                  image: '/images/lessons/grade10/physics/lesson2.svg',
                  lessons: [
                    {
                      id: 'phys10-s1-t2-l1',
                      title: 'Системы отсчёта',
                      content: `<div class="lesson">
                          <div style="text-align: center; margin-bottom: 1rem;">
                            <img src="/images/lessons/grade10/physics/lesson2.svg" alt="Системы отсчёта" style="max-width: 100%; height: auto; border-radius: 12px;" />
                          </div>
                          <h2>Положение тела. Системы отсчёта</h2>
                          <p>СО = тело отсчёта + система координат + часы</p>
                          <p>Материальная точка — тело, размерами которого можно пренебречь.</p>
                          <div class="tip">СО нужна, чтобы описать, где и когда находится тело!</div>
                        </div>`,
                      completed: false,
                      order: 1,
                      estimatedTime: 15
                    },
                  ],
                },
                {
                  id: 'phys10-s1-t3',
                  title: 'Перемещение. Путь',
                  description: 'Вектор перемещения, траектория, путь',
                  theory: `<h3>Перемещение и путь</h3>
                <h4>Траектория:</h4>
                <p>Линия, которую описывает тело при движении. Может быть прямолинейной или криволинейной.</p>
                <h4>Путь (l):</h4>
                <p>Длина траектории. Скалярная величина, всегда l &gt;= 0.</p>
                <h4>Перемещение (S):</h4>
                <p>Вектор, соединяющий начальное и конечное положения тела. Направлен из точки A в точку B.</p>
                <h4>Важные соотношения:</h4>
                <ul>
                  <li>Путь — скаляр, перемещение — вектор</li>
                  <li>l &gt;= |S| (путь не меньше модуля перемещения)</li>
                  <li>l = |S| только при прямолинейном движении в одном направлении</li>
                  <li>При возвращении в начальную точку S = 0, но l &gt; 0</li>
                </ul>
                <h4>Проекции перемещения:</h4>
                <p>S<sub>x</sub> = x - x<sub>0</sub>, S<sub>y</sub> = y - y<sub>0</sub></p>`,
                  examples: ['Чем путь отличается от перемещения?', 'Может ли перемещение быть равно нулю?', 'Вычисли путь и перемещение'],
                  completed: false,
                  difficulty: 'easy',
                  estimatedTime: 25,
                  image: '/images/lessons/grade10/physics/lesson3.svg',
                  lessons: [
                    {
                      id: 'phys10-s1-t3-l1',
                      title: 'Перемещение и путь',
                      content: `<div class="lesson">
                          <div style="text-align: center; margin-bottom: 1rem;">
                            <img src="/images/lessons/grade10/physics/lesson3.svg" alt="Перемещение и путь" style="max-width: 100%; height: auto; border-radius: 12px;" />
                          </div>
                          <h2>Перемещение и путь</h2>
                          <p>Путь — длина траектории (скаляр). Перемещение — вектор из A в B.</p>
                          <p>l &gt;= |S|, l = |S| при прямолинейном движении.</p>
                          <div class="tip">При движении по окружности путь растёт, а перемещение может быть нулём!</div>
                        </div>`,
                      completed: false,
                      order: 1,
                      estimatedTime: 15
                    },
                  ],
                },
                {
                  id: 'phys10-s1-t4',
                  title: 'Скорость',
                  description: 'Средняя и мгновенная скорость, проекция скорости',
                  theory: `<h3>Скорость</h3>
                <h4>Средняя скорость перемещения:</h4>
                <p><b>v<sub>ср</sub> = S / t</b> — векторная величина, отношение перемещения ко времени.</p>
                <h4>Средняя путевая скорость:</h4>
                <p><b>v<sub>ср.пут</sub> = l / t</b> — скалярная величина, отношение пути ко времени.</p>
                <h4>Мгновенная скорость:</h4>
                <p><b>v = dS / dt</b> — скорость в данный момент времени. Направлена по касательной к траектории.</p>
                <h4>Проекция скорости:</h4>
                <p>v<sub>x</sub> = dx/dt — скорость вдоль оси X. Может быть положительной и отрицательной.</p>
                <h4>Единица измерения:</h4>
                <p>[v] = м/с</p>
                <h4>Важное замечание:</h4>
                <p>Средняя скорость перемещения НЕ равна среднему арифметическому скоростей!</p>`,
                  examples: ['Найди среднюю скорость', 'Чем отличается средняя скорость от мгновенной?', 'Определи проекцию скорости'],
                  completed: false,
                  difficulty: 'medium',
                  estimatedTime: 30,
                  image: '/images/lessons/grade10/physics/lesson4.svg',
                  lessons: [
                    {
                      id: 'phys10-s1-t4-l1',
                      title: 'Скорость',
                      content: `<div class="lesson">
                          <div style="text-align: center; margin-bottom: 1rem;">
                            <img src="/images/lessons/grade10/physics/lesson4.svg" alt="Скорость" style="max-width: 100%; height: auto; border-radius: 12px;" />
                          </div>
                          <h2>Скорость</h2>
                          <p>Средняя: v = S/t. Мгновенная: v = dS/dt.</p>
                          <p>Мгновенная скорость направлена по касательной к траектории.</p>
                          <div class="tip">Средняя скорость — не среднее арифметическое!</div>
                        </div>`,
                      completed: false,
                      order: 1,
                      estimatedTime: 15
                    },
                  ],
                },
                {
                  id: 'phys10-s1-t5',
                  title: 'Равномерное прямолинейное движение',
                  description: 'Уравнение движения, графики x(t) и v(t)',
                  theory: `<h3>Равномерное прямолинейное движение</h3>
                <h4>Определение:</h4>
                <p>Движение, при котором тело за любые равные промежутки времени совершает одинаковые перемещения.</p>
                <h4>Уравнение движения:</h4>
                <p><b>x = x<sub>0</sub> + v<sub>x</sub> t</b></p>
                <p>x<sub>0</sub> — начальная координата, v<sub>x</sub> — проекция скорости.</p>
                <h4>Графики:</h4>
                <ul>
                  <li><b>x(t)</b> — прямая линия. Наклон = скорость</li>
                  <li><b>v(t)</b> — горизонтальная прямая (v = const)</li>
                  <li>Площадь под графиком v(t) = перемещение</li>
                </ul>
                <h4>Перемещение:</h4>
                <p><b>S<sub>x</sub> = v<sub>x</sub> t</b></p>
                <h4>Скорость постоянна:</h4>
                <p>v = const, a = 0</p>`,
                  examples: ['Построй график x(t)', 'Найди время встречи двух тел', 'Определи перемещение по графику'],
                  completed: false,
                  difficulty: 'medium',
                  estimatedTime: 35,
                  image: '/images/lessons/grade10/physics/lesson5.svg',
                  lessons: [
                    {
                      id: 'phys10-s1-t5-l1',
                      title: 'Равномерное прямолинейное движение',
                      content: `<div class="lesson">
                          <div style="text-align: center; margin-bottom: 1rem;">
                            <img src="/images/lessons/grade10/physics/lesson5.svg" alt="Равномерное прямолинейное движение" style="max-width: 100%; height: auto; border-radius: 12px;" />
                          </div>
                          <h2>Равномерное прямолинейное движение</h2>
                          <p>x = x0 + vx*t — уравнение движения</p>
                          <p>v = const, a = 0</p>
                          <div class="tip">График x(t) — прямая, наклон которой равен скорости!</div>
                        </div>`,
                      completed: false,
                      order: 1,
                      estimatedTime: 15
                    },
                  ],
                },
                {
                  id: 'phys10-s1-t6',
                  title: 'Решение задач кинематики',
                  description: 'Графический и аналитический способы решения',
                  theory: `<h3>Решение задач кинематики</h3>
                <h4>Алгоритм решения:</h4>
                <ol>
                  <li>Выбрать систему отсчёта (тело отсчёта, оси, начало отсчёта времени)</li>
                  <li>Записать данные задачи в проекциях на оси</li>
                  <li>Записать уравнения движения для каждого тела</li>
                  <li>Составить систему уравнений</li>
                  <li>Решить систему</li>
                </ol>
                <h4>Графический способ:</h4>
                <p>Построить графики x(t) для всех тел. Точка пересечения — место и время встречи.</p>
                <h4>Аналитический способ:</h4>
                <p>Приравнять координаты: x<sub>1</sub>(t) = x<sub>2</sub>(t). Решить уравнение.</p>
                <h4>Советы:</h4>
                <ul>
                  <li>Направление оси — по направлению движения</li>
                  <li>За t = 0 удобно брать момент начала наблюдения</li>
                  <li>Начальную координату считать в точке старта</li>
                </ul>`,
                  examples: ['Реши задачу на встречу двух тел', 'Определи время обгона', 'Найди расстояние между телами'],
                  completed: false,
                  difficulty: 'medium',
                  estimatedTime: 40,
                  image: '/images/lessons/grade10/physics/lesson6.svg',
                  lessons: [
                    {
                      id: 'phys10-s1-t6-l1',
                      title: 'Решение задач кинематики',
                      content: `<div class="lesson">
                          <div style="text-align: center; margin-bottom: 1rem;">
                            <img src="/images/lessons/grade10/physics/lesson6.svg" alt="Решение задач кинематики" style="max-width: 100%; height: auto; border-radius: 12px;" />
                          </div>
                          <h2>Решение задач кинематики</h2>
                          <p>1. Выбрать СО, 2. Записать в проекциях, 3. Уравнения движения, 4. Решить систему</p>
                          <div class="tip">Графический и аналитический способы должны давать одинаковый результат!</div>
                        </div>`,
                      completed: false,
                      order: 1,
                      estimatedTime: 15
                    },
                  ],
                },
                {
                  id: 'phys10-s1-t7',
                  title: 'Сложение движений',
                  description: 'Закон сложения скоростей, относительность движения',
                  theory: `<h3>Сложение движений</h3>
                <h4>Закон сложения скоростей:</h4>
                <p><b>v = v<sub>1</sub> + v<sub>2</sub></b></p>
                <p>Скорость тела относительно неподвижной СО равна сумме скорости относительно подвижной СО и скорости подвижной СО.</p>
                <h4>Формула:</h4>
                <p><b>v = v<sub>отн</sub> + v<sub>переносн</sub></b></p>
                <h4>Правила сложения:</h4>
                <ul>
                  <li><b>Правило треугольника</b> — конец первого к началу второго</li>
                  <li><b>Правило параллелограмма</b> — из одной точки</li>
                </ul>
                <h4>Примеры:</h4>
                <ul>
                  <li>Переправа через реку: скорость лодки + скорость течения</li>
                  <li>Пассажир в поезде: скорость пассажира + скорость поезда</li>
                </ul>
                <h4>Относительность движения:</h4>
                <p>Характер движения зависит от выбора системы отсчёта.</p>`,
                  examples: ['Найди скорость лодки относительно берега', 'Задача на переправу', 'Вычисли относительную скорость'],
                  completed: false,
                  difficulty: 'medium',
                  estimatedTime: 35,
                  image: '/images/lessons/grade10/physics/lesson7.svg',
                  lessons: [
                    {
                      id: 'phys10-s1-t7-l1',
                      title: 'Сложение движений',
                      content: `<div class="lesson">
                          <div style="text-align: center; margin-bottom: 1rem;">
                            <img src="/images/lessons/grade10/physics/lesson7.svg" alt="Сложение движений" style="max-width: 100%; height: auto; border-radius: 12px;" />
                          </div>
                          <h2>Сложение движений</h2>
                          <p>v = v1 + v2 — векторная сумма</p>
                          <p>Правила: треугольника и параллелограмма</p>
                          <div class="tip">Скорость — вектор, складываем по правилам векторов!</div>
                        </div>`,
                      completed: false,
                      order: 1,
                      estimatedTime: 15
                    },
                  ],
                },
                {
                  id: 'phys10-s1-t8',
                  title: 'Ускорение. Равноускоренное движение',
                  description: 'Определение ускорения, формулы равноускоренного движения',
                  theory: `<h3>Ускорение. Равноускоренное движение</h3>
                <h4>Ускорение:</h4>
                <p><b>a = (v - v<sub>0</sub>) / t</b></p>
                <p>Векторная величина, характеризующая быстроту изменения скорости.</p>
                <p>[a] = м/с<sup>2</sup></p>
                <h4>Равноускоренное движение:</h4>
                <p>Движение с постоянным ускорением. a = const.</p>
                <h4>Основные формулы:</h4>
                <ul>
                  <li><b>v = v<sub>0</sub> + at</b> — скорость</li>
                  <li><b>S = v<sub>0</sub>t + at<sup>2</sup>/2</b> — перемещение</li>
                  <li><b>x = x<sub>0</sub> + v<sub>0</sub>t + at<sup>2</sup>/2</b> — координата</li>
                  <li><b>v<sup>2</sup> - v<sub>0</sub><sup>2</sup> = 2aS</b> — без времени</li>
                </ul>
                <h4>Свободное падение:</h4>
                <p>Частный случай равноускоренного движения: a = g = 9,8 м/с<sup>2</sup></p>`,
                  examples: ['Найди ускорение тела', 'Вычисли конечную скорость', 'Определи перемещение'],
                  completed: false,
                  difficulty: 'hard',
                  estimatedTime: 45,
                  image: '/images/lessons/grade10/physics/lesson8.svg',
                  lessons: [
                    {
                      id: 'phys10-s1-t8-l1',
                      title: 'Ускорение. Равноускоренное движение',
                      content: `<div class="lesson">
                          <div style="text-align: center; margin-bottom: 1rem;">
                            <img src="/images/lessons/grade10/physics/lesson8.svg" alt="Ускорение" style="max-width: 100%; height: auto; border-radius: 12px;" />
                          </div>
                          <h2>Ускорение. Равноускоренное движение</h2>
                          <p>a = (v - v0)/t — ускорение</p>
                          <p>v = v0 + at, S = v0t + at^2/2</p>
                          <div class="tip">4 формулы, 5 величин — для решения нужно знать 2!</div>
                        </div>`,
                      completed: false,
                      order: 1,
                      estimatedTime: 20
                    },
                  ],
                },
                {
                  id: 'phys10-s1-t9',
                  title: 'Решение задач равноускоренного движения',
                  description: 'Практика применения формул',
                  theory: `<h3>Решение задач равноускоренного движения</h3>
                <h4>Система формул:</h4>
                <ul>
                  <li>v = v<sub>0</sub> + at</li>
                  <li>S = v<sub>0</sub>t + at<sup>2</sup>/2</li>
                  <li>x = x<sub>0</sub> + v<sub>0</sub>t + at<sup>2</sup>/2</li>
                  <li>v<sup>2</sup> - v<sub>0</sub><sup>2</sup> = 2aS</li>
                </ul>
                <h4>Аналитический способ:</h4>
                <ol>
                  <li>Записать все формулы</li>
                  <li>Подставить известные данные</li>
                  <li>Решить уравнение</li>
                </ol>
                <h4>Графический способ:</h4>
                <p>Площадь под графиком v(t) = перемещение S. Для равноускоренного движения — площадь трапеции или треугольника.</p>
                <h4>Типичные ошибки:</h4>
                <ul>
                  <li>Забыть про знаки проекций</li>
                  <li>Путать начальную и конечную скорость</li>
                  <li>Не учитывать направление ускорения</li>
                </ul>`,
                  examples: ['Торможение автомобиля', 'Тело брошено вертикально вверх', 'Движение с начальной скоростью'],
                  completed: false,
                  difficulty: 'hard',
                  estimatedTime: 45,
                  image: '/images/lessons/grade10/physics/lesson9.svg',
                  lessons: [
                    {
                      id: 'phys10-s1-t9-l1',
                      title: 'Решение задач равноускоренного движения',
                      content: `<div class="lesson">
                          <div style="text-align: center; margin-bottom: 1rem;">
                            <img src="/images/lessons/grade10/physics/lesson9.svg" alt="Решение задач" style="max-width: 100%; height: auto; border-radius: 12px;" />
                          </div>
                          <h2>Решение задач равноускоренного движения</h2>
                          <p>4 формулы, 5 величин — нужно знать 2 величины</p>
                          <p>Площадь под v(t) = S</p>
                          <div class="tip">Внимательно следи за знаками проекций!</div>
                        </div>`,
                      completed: false,
                      order: 1,
                      estimatedTime: 20
                    },
                  ],
                },
                {
                  id: 'phys10-s1-t10',
                  title: 'Равномерное движение по окружности',
                  description: 'Период, частота, угловая и линейная скорость, центростремительное ускорение',
                  theory: `<h3>Равномерное движение по окружности</h3>
                <h4>Характеристики:</h4>
                <ul>
                  <li><b>Период</b> T — время одного оборота [с]</li>
                  <li><b>Частота</b> nu = 1/T — число оборотов в секунду [Гц]</li>
                  <li><b>Угловая скорость</b> w = 2pi/T [рад/с]</li>
                  <li><b>Линейная скорость</b> v = 2piR/T = wR [м/с]</li>
                </ul>
                <h4>Центростремительное ускорение:</h4>
                <p><b>a = v<sup>2</sup>/R = w<sup>2</sup>R</b></p>
                <p>Направлено к центру окружности! Вектор скорости направлен по касательной.</p>
                <h4>Важные соотношения:</h4>
                <ul>
                  <li>v = wR</li>
                  <li>T = 2piR/v</li>
                  <li>nu = v/(2piR)</li>
                </ul>
                <h4>Равномерное — означает постоянство модуля скорости!</h4>
                <p>Но направление скорости меняется, поэтому есть ускорение.</p>`,
                  examples: ['Найди центростремительное ускорение', 'Вычисли период обращения', 'Определи линейную скорость'],
                  completed: false,
                  difficulty: 'hard',
                  estimatedTime: 40,
                  image: '/images/lessons/grade10/physics/lesson10.svg',
                  lessons: [
                    {
                      id: 'phys10-s1-t10-l1',
                      title: 'Движение по окружности',
                      content: `<div class="lesson">
                          <div style="text-align: center; margin-bottom: 1rem;">
                            <img src="/images/lessons/grade10/physics/lesson10.svg" alt="Движение по окружности" style="max-width: 100%; height: auto; border-radius: 12px;" />
                          </div>
                          <h2>Равномерное движение по окружности</h2>
                          <p>v = 2piR/T, a = v^2/R</p>
                          <p>Ускорение направлено к центру!</p>
                          <div class="tip">Скорость по модулю постоянна, но направление меняется — поэтому есть ускорение!</div>
                        </div>`,
                      completed: false,
                      order: 1,
                      estimatedTime: 20
                    },
                  ],
                },
            ]
          },
          {
            id: 'phys10-s2',
            title: 'Динамика',
            description: 'Законы Ньютона, силы в природе, всемирное тяготение',
            order: 2,
            topics: [
                {
                  id: 'phys10-s2-t1',
                  title: 'Первый закон Ньютона',
                  description: 'Инерция, инерциальные системы отсчёта',
                  theory: `<h3>Первый закон Ньютона</h3>
                <h4>Закон инерции:</h4>
                <p>Существуют такие системы отсчёта, относительно которых тела сохраняют свою скорость неизменной, если на них не действуют другие тела или действие других тел компенсируется.</p>
                <h4>Инерциальные СО:</h4>
                <p>СО, в которых выполняется первый закон Ньютона. Большинство задач решается в инерциальных СО.</p>
                <h4>Инерция:</h4>
                <p>Явление сохранения скорости тела при отсутствии внешних воздействий.</p>`,
                  examples: ['Что такое инерция?', 'Сформулируйте первый закон Ньютона', 'Какие СО называются инерциальными?'],
                  completed: false,
                  difficulty: 'easy',
                  estimatedTime: 25,
                  image: '/images/lessons/grade10/physics/lesson11.svg',
                  lessons: [
                    {
                      id: 'phys10-s2-t1-l1',
                      title: 'Первый закон Ньютона',
                      content: `<div class="lesson"><div style="text-align: center; margin-bottom: 1rem;"><img src="/images/lessons/grade10/physics/lesson11.svg" alt="Первый закон Ньютона" style="max-width: 100%; height: auto; border-radius: 12px;" /></div><h2>Первый закон Ньютона</h2><p>Тело сохраняет скорость неизменной, если нет воздействия других тел.</p><div class="tip">Закон инерции — фундамент механики!</div></div>`,
                      completed: false,
                      order: 1,
                      estimatedTime: 15
                    },
                  ],
                },
                {
                  id: 'phys10-s2-t2',
                  title: 'Сила. Второй закон Ньютона',
                  description: 'Сила как мера взаимодействия, F = ma',
                  theory: `<h3>Сила. Второй закон Ньютона</h3>
                <h4>Сила:</h4>
                <p>Векторная величина — мера взаимодействия тел. [F] = Н (Ньютон).</p>
                <h4>Второй закон Ньютона:</h4>
                <p><b>F = ma</b></p>
                <p>Равнодействующая всех сил, действующих на тело, равна произведению массы тела на ускорение.</p>
                <h4>Важно:</h4>
                <ul><li>Ускорение сонаправлено с равнодействующей силой</li><li>Если F = 0, то a = 0 (первый закон Ньютона)</li></ul>`,
                  examples: ['Найди равнодействующую силу', 'Определи ускорение', 'Вычисли массу тела'],
                  completed: false,
                  difficulty: 'medium',
                  estimatedTime: 35,
                  image: '/images/lessons/grade10/physics/lesson12.svg',
                  lessons: [
                    {
                      id: 'phys10-s2-t2-l1',
                      title: 'Второй закон Ньютона',
                      content: `<div class="lesson"><div style="text-align: center; margin-bottom: 1rem;"><img src="/images/lessons/grade10/physics/lesson12.svg" alt="Второй закон Ньютона" style="max-width: 100%; height: auto; border-radius: 12px;" /></div><h2>Второй закон Ньютона</h2><p>F = ma — основное уравнение динамики!</p><div class="tip">Ускорение направлено туда же, куда и равнодействующая сила!</div></div>`,
                      completed: false,
                      order: 1,
                      estimatedTime: 15
                    },
                  ],
                },
                {
                  id: 'phys10-s2-t3',
                  title: 'Третий закон Ньютона',
                  description: 'Взаимодействие тел, силы действия и противодействия',
                  theory: `<h3>Третий закон Ньютона</h3>
                <h4>Закон:</h4>
                <p><b>F<sub>12</sub> = -F<sub>21</sub></b></p>
                <p>Сила, с которой первое тело действует на второе, равна по модулю и противоположна по направлению силе, с которой второе тело действует на первое.</p>
                <h4>Важные свойства:</h4>
                <ul><li>Силы всегда парами</li><li>Приложены к разным телам</li><li>Одной природы</li><li>Не компенсируют друг друга (приложены к разным телам!)</li></ul>`,
                  examples: ['Почему силы не компенсируются?', 'Приведи пример третьего закона', 'Куда приложены силы?'],
                  completed: false,
                  difficulty: 'medium',
                  estimatedTime: 30,
                  image: '/images/lessons/grade10/physics/lesson13.svg',
                  lessons: [
                    {
                      id: 'phys10-s2-t3-l1',
                      title: 'Третий закон Ньютона',
                      content: `<div class="lesson"><div style="text-align: center; margin-bottom: 1rem;"><img src="/images/lessons/grade10/physics/lesson13.svg" alt="Третий закон Ньютона" style="max-width: 100%; height: auto; border-radius: 12px;" /></div><h2>Третий закон Ньютона</h2><p>F12 = -F21 — сила действия равна силе противодействия</p><div class="tip">Силы приложены к РАЗНЫМ телам — поэтому не компенсируются!</div></div>`,
                      completed: false,
                      order: 1,
                      estimatedTime: 15
                    },
                  ],
                },
                {
                  id: 'phys10-s2-t4',
                  title: 'Сила упругости. Закон Гука',
                  description: 'Деформация, сила упругости, жёсткость',
                  theory: `<h3>Сила упругости. Закон Гука</h3>
                <h4>Закон Гука:</h4>
                <p><b>F<sub>упр</sub> = -kx</b></p>
                <p>k — жёсткость [Н/м], x — удлинение.</p>
                <h4>Виды деформации:</h4>
                <ul><li>Упругая — тело восстанавливает форму</li><li>Пластическая — форма не восстанавливается</li></ul>
                <h4>Сила реакции опоры и сила натяжения нити</h4>
                <p>Это тоже силы упругости, возникающие при деформации опоры или нити.</p>`,
                  examples: ['Найди жёсткость пружины', 'Определи удлинение', 'Рассчитай силу упругости'],
                  completed: false,
                  difficulty: 'medium',
                  estimatedTime: 30,
                  image: '/images/lessons/grade10/physics/lesson14.svg',
                  lessons: [
                    {
                      id: 'phys10-s2-t4-l1',
                      title: 'Сила упругости',
                      content: `<div class="lesson"><div style="text-align: center; margin-bottom: 1rem;"><img src="/images/lessons/grade10/physics/lesson14.svg" alt="Закон Гука" style="max-width: 100%; height: auto; border-radius: 12px;" /></div><h2>Сила упругости. Закон Гука</h2><p>F = -kx — сила упругости пропорциональна деформации</p><div class="tip">Знак минус означает, что сила направлена против деформации!</div></div>`,
                      completed: false,
                      order: 1,
                      estimatedTime: 15
                    },
                  ],
                },
                {
                  id: 'phys10-s2-t5',
                  title: 'Сила всемирного тяготения',
                  description: 'Закон всемирного тяготения, гравитационная постоянная',
                  theory: `<h3>Сила всемирного тяготения</h3>
                <h4>Закон:</h4>
                <p><b>F = G m<sub>1</sub>m<sub>2</sub>/r<sup>2</sup></b></p>
                <p>G = 6,67 x 10<sup>-11</sup> Н x м<sup>2</sup>/кг<sup>2</sup> — гравитационная постоянная.</p>
                <h4>Свойства:</h4>
                <ul><li>Действует между любыми телами</li><li>Всегда притяжение</li><li>Зависит от масс и расстояния</li></ul>`,
                  examples: ['Вычисли силу притяжения', 'Как изменится сила при увеличении расстояния?', 'Найди гравитационную постоянную'],
                  completed: false,
                  difficulty: 'medium',
                  estimatedTime: 35,
                  image: '/images/lessons/grade10/physics/lesson15.svg',
                  lessons: [
                    {
                      id: 'phys10-s2-t5-l1',
                      title: 'Закон всемирного тяготения',
                      content: `<div class="lesson"><div style="text-align: center; margin-bottom: 1rem;"><img src="/images/lessons/grade10/physics/lesson15.svg" alt="Всемирное тяготение" style="max-width: 100%; height: auto; border-radius: 12px;" /></div><h2>Сила всемирного тяготения</h2><p>F = G m1*m2/r^2</p><div class="tip">Закон открыл Ньютон, а G впервые измерил Кавендиш!</div></div>`,
                      completed: false,
                      order: 1,
                      estimatedTime: 15
                    },
                  ],
                },
                {
                  id: 'phys10-s2-t6',
                  title: 'Сила тяжести. Вес тела',
                  description: 'Ускорение свободного падения, невесомость, перегрузка',
                  theory: `<h3>Сила тяжести. Вес тела</h3>
                <h4>Сила тяжести:</h4>
                <p><b>F<sub>тяж</sub> = mg</b></p>
                <p>g = 9,8 м/с<sup>2</sup> — ускорение свободного падения. Зависит от широты и высоты.</p>
                <h4>Вес тела:</h4>
                <p>Сила, с которой тело давит на опору или растягивает подвес. P = mg (в покое).</p>
                <h4>Особые случаи:</h4>
                <ul><li><b>Невесомость</b>: P = 0 (свободное падение)</li><li><b>Перегрузка</b>: P &gt; mg (ускорение вверх)</li></ul>`,
                  examples: ['Найди вес тела в лифте', 'Что такое невесомость?', 'Определи перегрузку'],
                  completed: false,
                  difficulty: 'medium',
                  estimatedTime: 35,
                  image: '/images/lessons/grade10/physics/lesson16.svg',
                  lessons: [
                    {
                      id: 'phys10-s2-t6-l1',
                      title: 'Сила тяжести. Вес тела',
                      content: `<div class="lesson"><div style="text-align: center; margin-bottom: 1rem;"><img src="/images/lessons/grade10/physics/lesson16.svg" alt="Сила тяжести" style="max-width: 100%; height: auto; border-radius: 12px;" /></div><h2>Сила тяжести. Вес тела</h2><p>Fтяж = mg, P = mg (в покое)</p><div class="tip">Вес — это не масса! Вес зависит от ускорения.</div></div>`,
                      completed: false,
                      order: 1,
                      estimatedTime: 15
                    },
                  ],
                },
                {
                  id: 'phys10-s2-t7',
                  title: 'Сила трения',
                  description: 'Трение покоя, скольжения, качения',
                  theory: `<h3>Сила трения</h3>
                <h4>Виды трения:</h4>
                <ul><li><b>Покоя</b> — препятствует началу движения</li><li><b>Скольжения</b> — при движении: F<sub>тр</sub> = mu N</li><li><b>Качения</b> — при качении (наименьшее)</li></ul>
                <h4>Закон Кулона-Амонтона:</h4>
                <p><b>F<sub>тр</sub> = mu N</b></p>
                <p>mu — коэффициент трения, N — сила нормальной реакции опоры.</p>`,
                  examples: ['Найди силу трения', 'Определи коэффициент трения', 'Тормозной путь автомобиля'],
                  completed: false,
                  difficulty: 'medium',
                  estimatedTime: 30,
                  image: '/images/lessons/grade10/physics/lesson17.svg',
                  lessons: [
                    {
                      id: 'phys10-s2-t7-l1',
                      title: 'Сила трения',
                      content: `<div class="lesson"><div style="text-align: center; margin-bottom: 1rem;"><img src="/images/lessons/grade10/physics/lesson17.svg" alt="Сила трения" style="max-width: 100%; height: auto; border-radius: 12px;" /></div><h2>Сила трения</h2><p>Fтр = mu*N — сила трения скольжения</p><div class="tip">Трение покоя может быть меньше или равно mu*N!</div></div>`,
                      completed: false,
                      order: 1,
                      estimatedTime: 15
                    },
                  ],
                },
                {
                  id: 'phys10-s2-t8',
                  title: 'Движение под действием сил',
                  description: 'Применение законов Ньютона к решению задач',
                  theory: `<h3>Движение под действием сил</h3>
                <h4>Алгоритм:</h4>
                <ol><li>Выбрать СО и записать данные</li><li>Изобразить все силы</li><li>Записать второй закон Ньютона в векторной форме</li><li>Перейти к проекциям на оси</li><li>Решить систему уравнений</li></ol>
                <h4>Типичные ситуации:</h4>
                <ul><li>Движение по горизонтальной поверхности</li><li>Движение по наклонной плоскости</li><li>Движение связанных тел</li></ul>`,
                  examples: ['Тело на наклонной плоскости', 'Связанные тела через блок', 'Движение с трением'],
                  completed: false,
                  difficulty: 'hard',
                  estimatedTime: 45,
                  image: '/images/lessons/grade10/physics/lesson18.svg',
                  lessons: [
                    {
                      id: 'phys10-s2-t8-l1',
                      title: 'Движение под действием сил',
                      content: `<div class="lesson"><div style="text-align: center; margin-bottom: 1rem;"><img src="/images/lessons/grade10/physics/lesson18.svg" alt="Движение под действием сил" style="max-width: 100%; height: auto; border-radius: 12px;" /></div><h2>Движение под действием сил</h2><p>Алгоритм: силы - F=ma в векторах - проекции - решение</p><div class="tip">Всегда рисуй все силы и выбирай удобные оси!</div></div>`,
                      completed: false,
                      order: 1,
                      estimatedTime: 20
                    },
                  ],
                },
                {
                  id: 'phys10-s2-t9',
                  title: 'Движение тела под действием силы тяжести',
                  description: 'Свободное падение, движение брошенного тела',
                  theory: `<h3>Движение под действием силы тяжести</h3>
                <h4>Свободное падение:</h4>
                <p>Движение тела только под действием силы тяжести. a = g = 9,8 м/с<sup>2</sup>.</p>
                <h4>Тело брошено вертикально:</h4>
                <p>v = v<sub>0</sub> - gt, h = v<sub>0</sub>t - gt<sup>2</sup>/2</p>
                <h4>Тело брошено горизонтально:</h4>
                <p>Движение по горизонтали — равномерное, по вертикали — свободное падение.</p>
                <h4>Дальность и высота:</h4>
                <p>L = v<sub>0x</sub>t, H = gt<sup>2</sup>/2</p>`,
                  examples: ['Время подъёма тела', 'Дальность полёта', 'Максимальная высота'],
                  completed: false,
                  difficulty: 'hard',
                  estimatedTime: 40,
                  image: '/images/lessons/grade10/physics/lesson19.svg',
                  lessons: [
                    {
                      id: 'phys10-s2-t9-l1',
                      title: 'Движение под действием силы тяжести',
                      content: `<div class="lesson"><div style="text-align: center; margin-bottom: 1rem;"><img src="/images/lessons/grade10/physics/lesson19.svg" alt="Свободное падение" style="max-width: 100%; height: auto; border-radius: 12px;" /></div><h2>Движение под действием силы тяжести</h2><p>Свободное падение: a = g = 9,8 м/с^2</p><div class="tip">В вакууме все тела падают одинаково!</div></div>`,
                      completed: false,
                      order: 1,
                      estimatedTime: 15
                    },
                  ],
                },
                {
                  id: 'phys10-s2-t10',
                  title: 'Движение тела по окружности под действием сил',
                  description: 'Центростремительная сила, вес в вращающейся системе',
                  theory: `<h3>Движение по окружности под действием сил</h3>
                <h4>Центростремительная сила:</h4>
                <p>Любая сила (или равнодействующая), направленная к центру: F = mv<sup>2</sup>/R.</p>
                <h4>Примеры:</h4>
                <ul><li>Конический маятник</li><li>Автомобиль на повороте</li><li>Самолёт в вираже</li></ul>
                <h4>Вес тела при движении по окружности:</h4>
                <ul><li>В верхней точке: P = m(g - v<sup>2</sup>/R)</li><li>В нижней точке: P = m(g + v<sup>2</sup>/R)</li></ul>`,
                  examples: ['Конический маятник', 'Вес в верхней точке петли', 'Минимальная скорость для петли'],
                  completed: false,
                  difficulty: 'hard',
                  estimatedTime: 40,
                  image: '/images/lessons/grade10/physics/lesson20.svg',
                  lessons: [
                    {
                      id: 'phys10-s2-t10-l1',
                      title: 'Движение по окружности',
                      content: `<div class="lesson"><div style="text-align: center; margin-bottom: 1rem;"><img src="/images/lessons/grade10/physics/lesson20.svg" alt="Движение по окружности" style="max-width: 100%; height: auto; border-radius: 12px;" /></div><h2>Движение по окружности под действием сил</h2><p>F = mv^2/R — центростремительная сила</p><div class="tip">Это не отдельная сила, а равнодействующая!</div></div>`,
                      completed: false,
                      order: 1,
                      estimatedTime: 15
                    },
                  ],
                },
                {
                  id: 'phys10-s2-t11',
                  title: 'Движение искусственных спутников',
                  description: 'Первая космическая скорость, орбиты',
                  theory: `<h3>Движение искусственных спутников</h3>
                <h4>Первая космическая скорость:</h4>
                <p><b>v<sub>1</sub> = sqrt(gR) = sqrt(GM/R)</b></p>
                <p>v<sub>1</sub> = 7,9 км/с — для поверхности Земли.</p>
                <h4>Орбиты:</h4>
                <ul><li>Круговая: v = sqrt(GM/r)</li><li>Эллиптическая: v &lt; v<sub>1</sub></li><li>Параболическая (убегание): v<sub>2</sub> = 11,2 км/с</li></ul>
                <h4>Вторая космическая скорость:</h4>
                <p>v<sub>2</sub> = sqrt(2) * v<sub>1</sub> = 11,2 км/с</p>`,
                  examples: ['Вычисли первую космическую скорость', 'Найди период обращения спутника', 'Определи высоту орбиты'],
                  completed: false,
                  difficulty: 'hard',
                  estimatedTime: 40,
                  image: '/images/lessons/grade10/physics/lesson21.svg',
                  lessons: [
                    {
                      id: 'phys10-s2-t11-l1',
                      title: 'Искусственные спутники',
                      content: `<div class="lesson"><div style="text-align: center; margin-bottom: 1rem;"><img src="/images/lessons/grade10/physics/lesson21.svg" alt="Спутники" style="max-width: 100%; height: auto; border-radius: 12px;" /></div><h2>Движение спутников</h2><p>v1 = 7,9 км/с — первая космическая скорость</p><div class="tip">При v > 11,2 км/с тело покинет Землю!</div></div>`,
                      completed: false,
                      order: 1,
                      estimatedTime: 15
                    },
                  ],
                },
                {
                  id: 'phys10-s2-t12',
                  title: 'Движение жидкостей и газов',
                  description: 'Закон Паскаля, давление в жидкости, закон Архимеда',
                  theory: `<h3>Движение жидкостей и газов</h3>
                <h4>Закон Паскаля:</h4>
                <p>Давление, производимое на жидкость или газ, передаётся во все стороны одинаково.</p>
                <h4>Гидростатическое давление:</h4>
                <p><b>p = rho g h</b></p>
                <h4>Закон Архимеда:</h4>
                <p><b>F<sub>A</sub> = rho g V</b> — выталкивающая сила равна весу вытесненной жидкости.</p>
                <h4>Условия плавания:</h4>
                <ul><li>F<sub>A</sub> &gt; mg — всплывает</li><li>F<sub>A</sub> = mg — плавает</li><li>F<sub>A</sub> &lt; mg — тонет</li></ul>`,
                  examples: ['Найди выталкивающую силу', 'Определи, утонет ли тело', 'Гидростатическое давление'],
                  completed: false,
                  difficulty: 'medium',
                  estimatedTime: 35,
                  image: '/images/lessons/grade10/physics/lesson22.svg',
                  lessons: [
                    {
                      id: 'phys10-s2-t12-l1',
                      title: 'Жидкости и газы',
                      content: `<div class="lesson"><div style="text-align: center; margin-bottom: 1rem;"><img src="/images/lessons/grade10/physics/lesson22.svg" alt="Жидкости и газы" style="max-width: 100%; height: auto; border-radius: 12px;" /></div><h2>Движение жидкостей и газов</h2><p>p = rho*g*h, FA = rho*g*V</p><div class="tip">Архимедова сила зависит только от объёма погружённой части!</div></div>`,
                      completed: false,
                      order: 1,
                      estimatedTime: 15
                    },
                  ],
                },
                {
                  id: 'phys10-s2-t13',
                  title: 'Применение законов динамики',
                  description: 'Решение комплексных задач',
                  theory: `<h3>Применение законов динамики</h3>
                <h4>Общий подход:</h4>
                <ol><li>Выбрать СО, нарисовать чертёж</li><li>Показать все силы</li><li>F = ma в векторном виде</li><li>Проекции на оси</li><li>Решить систему</li></ol>
                <h4>Сложные случаи:</h4>
                <ul><li>Система связанных тел</li><li>Движение с переменной массой</li><li>Комбинированное движение</li></ul>`,
                  examples: ['Система через блок', 'Движение по наклонной с трением', 'Комплексная задача'],
                  completed: false,
                  difficulty: 'hard',
                  estimatedTime: 50,
                  image: '/images/lessons/grade10/physics/lesson23.svg',
                  lessons: [
                    {
                      id: 'phys10-s2-t13-l1',
                      title: 'Применение законов динамики',
                      content: `<div class="lesson"><div style="text-align: center; margin-bottom: 1rem;"><img src="/images/lessons/grade10/physics/lesson23.svg" alt="Применение динамики" style="max-width: 100%; height: auto; border-radius: 12px;" /></div><h2>Применение законов динамики</h2><p>Алгоритм: чертёж - силы - F=ma - проекции - решение</p><div class="tip">Практика — ключ к мастерству!</div></div>`,
                      completed: false,
                      order: 1,
                      estimatedTime: 20
                    },
                  ],
                },
            ]
          },
          {
            id: 'phys10-s3',
            title: 'Законы сохранения',
            description: 'Импульс, работа, энергия',
            order: 3,
            topics: [
                {
                  id: 'phys10-s3-t1',
                  title: 'Импульс тела. Закон сохранения импульса',
                  description: 'Импульс, замкнутая система, реактивное движение',
                  theory: `<h3>Импульс. Закон сохранения импульса</h3>
                <h4>Импульс тела:</h4>
                <p><b>p = mv</b> — векторная величина [кг x м/с].</p>
                <h4>Закон сохранения импульса:</h4>
                <p><b>p<sub>1</sub> + p<sub>2</sub> = p<sub>1</sub>' + p<sub>2</sub>'</b></p>
                <p>В замкнутой системе векторная сумма импульсов всех тел сохраняется.</p>
                <h4>Реактивное движение:</h4>
                <p>Движение, возникающее при отделении части массы от тела. Основа космонавтики.</p>`,
                  examples: ['Закон сохранения импульса при столкновении', 'Реактивное движение ракеты', 'Неупругий удар'],
                  completed: false,
                  difficulty: 'hard',
                  estimatedTime: 45,
                  image: '/images/lessons/grade10/physics/lesson24.svg',
                  lessons: [
                    {
                      id: 'phys10-s3-t1-l1',
                      title: 'Импульс и его сохранение',
                      content: `<div class="lesson"><div style="text-align: center; margin-bottom: 1rem;"><img src="/images/lessons/grade10/physics/lesson24.svg" alt="Импульс" style="max-width: 100%; height: auto; border-radius: 12px;" /></div><h2>Импульс. Закон сохранения</h2><p>p = mv, p1+p2 = p1'+p2'</p><div class="tip">Закон сохранения импульса — один из фундаментальных законов природы!</div></div>`,
                      completed: false,
                      order: 1,
                      estimatedTime: 20
                    },
                  ],
                },
                {
                  id: 'phys10-s3-t2',
                  title: 'Работа силы',
                  description: 'Механическая работа, мощность',
                  theory: `<h3>Работа силы</h3>
                <h4>Работа:</h4>
                <p><b>A = F S cos(alpha)</b></p>
                <p>[A] = Дж (Джоуль)</p>
                <h4>Знак работы:</h4>
                <ul><li>A &gt; 0 — сила совпадает с перемещением</li><li>A &lt; 0 — сила противоположна перемещению</li><li>A = 0 — сила перпендикулярна перемещению</li></ul>
                <h4>Мощность:</h4>
                <p><b>N = A/t = Fv</b> [Вт]</p>`,
                  examples: ['Вычисли работу силы', 'Найди мощность', 'Работа силы тяжести'],
                  completed: false,
                  difficulty: 'medium',
                  estimatedTime: 30,
                  image: '/images/lessons/grade10/physics/lesson25.svg',
                  lessons: [
                    {
                      id: 'phys10-s3-t2-l1',
                      title: 'Работа силы',
                      content: `<div class="lesson"><div style="text-align: center; margin-bottom: 1rem;"><img src="/images/lessons/grade10/physics/lesson25.svg" alt="Работа силы" style="max-width: 100%; height: auto; border-radius: 12px;" /></div><h2>Работа силы</h2><p>A = F*S*cos(a), N = A/t</p><div class="tip">Работа может быть положительной, отрицательной и нулевой!</div></div>`,
                      completed: false,
                      order: 1,
                      estimatedTime: 15
                    },
                  ],
                },
                {
                  id: 'phys10-s3-t3',
                  title: 'Кинетическая и потенциальная энергия',
                  description: 'Виды механической энергии',
                  theory: `<h3>Энергия</h3>
                <h4>Кинетическая энергия:</h4>
                <p><b>E<sub>к</sub> = mv<sup>2</sup>/2</b> — энергия движения.</p>
                <h4>Потенциальная энергия:</h4>
                <p><b>E<sub>п</sub> = mgh</b> — энергия взаимодействия (в поле тяжести).</p>
                <p><b>E<sub>пр</sub> = kx<sup>2</sup>/2</b> — энергия упруго деформированного тела.</p>
                <h4>Теорема о кинетической энергии:</h4>
                <p><b>A = E<sub>к2</sub> - E<sub>к1</sub></b></p>
                <p>Работа равнодействующей = изменение кинетической энергии.</p>`,
                  examples: ['Найди кинетическую энергию', 'Вычисли потенциальную энергию', 'Теорема о кинетической энергии'],
                  completed: false,
                  difficulty: 'medium',
                  estimatedTime: 35,
                  image: '/images/lessons/grade10/physics/lesson26.svg',
                  lessons: [
                    {
                      id: 'phys10-s3-t3-l1',
                      title: 'Кинетическая и потенциальная энергия',
                      content: `<div class="lesson"><div style="text-align: center; margin-bottom: 1rem;"><img src="/images/lessons/grade10/physics/lesson26.svg" alt="Энергия" style="max-width: 100%; height: auto; border-radius: 12px;" /></div><h2>Энергия</h2><p>Eк = mv^2/2, Eп = mgh</p><div class="tip">Энергия — способность тела совершать работу!</div></div>`,
                      completed: false,
                      order: 1,
                      estimatedTime: 15
                    },
                  ],
                },
                {
                  id: 'phys10-s3-t4',
                  title: 'Закон сохранения механической энергии',
                  description: 'Полная механическая энергия, консервативные силы',
                  theory: `<h3>Закон сохранения механической энергии</h3>
                <h4>Закон:</h4>
                <p><b>E<sub>к1</sub> + E<sub>п1</sub> = E<sub>к2</sub> + E<sub>п2</sub></b></p>
                <p>Полная механическая энергия сохраняется, если действуют только консервативные силы (тяжести, упругости).</p>
                <h4>Когда НЕ сохраняется:</h4>
                <p>При наличии неконсервативных сил (трение). Часть энергии переходит во внутреннюю.</p>
                <h4>Закон изменения энергии:</h4>
                <p><b>A<sub>тр</sub> = E<sub>2</sub> - E<sub>1</sub></b></p>`,
                  examples: ['Тело падает с высоты', 'Маятник', 'Горка с трением'],
                  completed: false,
                  difficulty: 'hard',
                  estimatedTime: 40,
                  image: '/images/lessons/grade10/physics/lesson27.svg',
                  lessons: [
                    {
                      id: 'phys10-s3-t4-l1',
                      title: 'Закон сохранения энергии',
                      content: `<div class="lesson"><div style="text-align: center; margin-bottom: 1rem;"><img src="/images/lessons/grade10/physics/lesson27.svg" alt="Закон сохранения энергии" style="max-width: 100%; height: auto; border-radius: 12px;" /></div><h2>Закон сохранения энергии</h2><p>Eк1 + Eп1 = Eк2 + Eп2</p><div class="tip">Энергия не возникает и не исчезает, а лишь переходит из одной формы в другую!</div></div>`,
                      completed: false,
                      order: 1,
                      estimatedTime: 15
                    },
                  ],
                },
                {
                  id: 'phys10-s3-t5',
                  title: 'Применение законов сохранения',
                  description: 'Решение задач на импульс и энергию',
                  theory: `<h3>Применение законов сохранения</h3>
                <h4>Столкновения:</h4>
                <ul><li><b>Упругое</b> — сохраняются импульс и кинетическая энергия</li><li><b>Неупругое</b> — сохраняется только импульс, тела движутся вместе</li></ul>
                <h4>Баллистический маятник:</h4>
                <p>Пуля застревает в маятнике — закон сохранения импульса, затем закон сохранения энергии.</p>
                <h4>Стратегия решения:</h4>
                <ol><li>Определить: замкнутая ли система?</li><li>Выбрать закон: импульс или энергия</li><li>Записать уравнение</li><li>Решить</li></ol>`,
                  examples: ['Упругое столкновение', 'Неупругий удар', 'Баллистический маятник'],
                  completed: false,
                  difficulty: 'hard',
                  estimatedTime: 50,
                  image: '/images/lessons/grade10/physics/lesson28.svg',
                  lessons: [
                    {
                      id: 'phys10-s3-t5-l1',
                      title: 'Применение законов сохранения',
                      content: `<div class="lesson"><div style="text-align: center; margin-bottom: 1rem;"><img src="/images/lessons/grade10/physics/lesson28.svg" alt="Применение законов" style="max-width: 100%; height: auto; border-radius: 12px;" /></div><h2>Применение законов сохранения</h2><p>Упругое: импульс + энергия. Неупругое: только импульс.</p><div class="tip">Законы сохранения — мощнейший инструмент решения задач!</div></div>`,
                      completed: false,
                      order: 1,
                      estimatedTime: 20
                    },
                  ],
                },
            ]
          },
          {
            id: 'phys10-s4',
            title: 'Статика',
            description: 'Условия равновесия тел',
            order: 4,
            topics: [
                {
                  id: 'phys10-s4-t1',
                  title: 'Условия равновесия тел',
                  description: 'Первое и второе условия равновесия',
                  theory: `<h3>Условия равновесия</h3>
                <h4>Первое условие (поступательное):</h4>
                <p><b>F<sub>1</sub> + F<sub>2</sub> + ... = 0</b></p>
                <p>Векторная сумма всех сил равна нулю.</p>
                <h4>Второе условие (вращательное):</h4>
                <p><b>M<sub>1</sub> + M<sub>2</sub> + ... = 0</b></p>
                <p>Сумма моментов всех сил равна нулю.</p>`,
                  examples: ['Условия равновесия рычага', 'Равновесие при нескольких силах'],
                  completed: false,
                  difficulty: 'medium',
                  estimatedTime: 30,
                  image: '/images/lessons/grade10/physics/lesson29.svg',
                  lessons: [
                    {
                      id: 'phys10-s4-t1-l1',
                      title: 'Условия равновесия',
                      content: `<div class="lesson"><div style="text-align: center; margin-bottom: 1rem;"><img src="/images/lessons/grade10/physics/lesson29.svg" alt="Равновесие" style="max-width: 100%; height: auto; border-radius: 12px;" /></div><h2>Условия равновесия</h2><p>1: Сумма F = 0. 2: Сумма M = 0.</p><div class="tip">Два условия — для поступательного и вращательного движения!</div></div>`,
                      completed: false,
                      order: 1,
                      estimatedTime: 15
                    },
                  ],
                },
                {
                  id: 'phys10-s4-t2',
                  title: 'Момент силы. Правило моментов',
                  description: 'Плечо силы, правило рычага',
                  theory: `<h3>Момент силы</h3>
                <h4>Определение:</h4>
                <p><b>M = Fl</b></p>
                <p>F — сила, l — плечо силы (кратчайшее расстояние от оси до линии действия силы).</p>
                <p>[M] = Н x м</p>
                <h4>Правило моментов:</h4>
                <p><b>M<sub>1</sub> = M<sub>2</sub></b> (для двух сил)</p>
                <p>F<sub>1</sub>l<sub>1</sub> = F<sub>2</sub>l<sub>2</sub> — правило рычага.</p>`,
                  examples: ['Найди момент силы', 'Рычаг в равновесии', 'Определи плечо силы'],
                  completed: false,
                  difficulty: 'medium',
                  estimatedTime: 30,
                  image: '/images/lessons/grade10/physics/lesson30.svg',
                  lessons: [
                    {
                      id: 'phys10-s4-t2-l1',
                      title: 'Момент силы',
                      content: `<div class="lesson"><div style="text-align: center; margin-bottom: 1rem;"><img src="/images/lessons/grade10/physics/lesson30.svg" alt="Момент силы" style="max-width: 100%; height: auto; border-radius: 12px;" /></div><h2>Момент силы</h2><p>M = F*l, правило рычага: F1*l1 = F2*l2</p><div class="tip">Рычаг даёт выигрыш в силе, но проигрыш в расстоянии!</div></div>`,
                      completed: false,
                      order: 1,
                      estimatedTime: 15
                    },
                  ],
                },
                {
                  id: 'phys10-s4-t3',
                  title: 'Центр тяжести. Виды равновесия',
                  description: 'Устойчивое, неустойчивое, безразличное равновесие',
                  theory: `<h3>Центр тяжести. Виды равновесия</h3>
                <h4>Центр тяжести:</h4>
                <p>Точка приложения равнодействующей сил тяжести, действующих на все части тела.</p>
                <h4>Виды равновесия:</h4>
                <ul><li><b>Устойчивое</b> — при отклонении сила возвращает тело (центр тяжести поднимается)</li><li><b>Неустойчивое</b> — при отклонении сила удаляет тело (центр тяжести опускается)</li><li><b>Безразличное</b> — центр тяжести не меняет высоту</li></ul>
                <h4>Устойчивость:</h4>
                <p>Чем ниже центр тяжести и шире площадь опоры, тем устойчивее тело.</p>`,
                  examples: ['Определи вид равновесия', 'Найди центр тяжести', 'Условие устойчивости'],
                  completed: false,
                  difficulty: 'medium',
                  estimatedTime: 30,
                  image: '/images/lessons/grade10/physics/lesson31.svg',
                  lessons: [
                    {
                      id: 'phys10-s4-t3-l1',
                      title: 'Центр тяжести',
                      content: `<div class="lesson"><div style="text-align: center; margin-bottom: 1rem;"><img src="/images/lessons/grade10/physics/lesson31.svg" alt="Центр тяжести" style="max-width: 100%; height: auto; border-radius: 12px;" /></div><h2>Центр тяжести. Виды равновесия</h2><p>Устойчивое, неустойчивое, безразличное</p><div class="tip">Чем ниже центр тяжести, тем устойчивее тело!</div></div>`,
                      completed: false,
                      order: 1,
                      estimatedTime: 15
                    },
                  ],
                },
            ]
          },
          {
            id: 'phys10-s5',
            title: 'Молекулярная физика',
            description: 'МКТ, газовые законы, жидкости и твёрдые тела',
            order: 5,
            topics: [
                {
                  id: 'phys10-s5-t1',
                  title: 'Основные положения МКТ',
                  description: 'Атомно-молекулярное строение вещества',
                  theory: `<h3>Основные положения МКТ</h3>
                <h4>1. Вещество состоит из частиц:</h4>
                <p>Атомов, молекул, ионов. Доказательства: диффузия, броуновское движение.</p>
                <h4>2. Частицы непрерывно хаотически движутся:</h4>
                <p>Броуновское движение — движение мелких частиц под ударами молекул.</p>
                <h4>3. Частицы взаимодействуют:</h4>
                <p>Притяжение на дальних расстояниях, отталкивание на близких.</p>
                <h4>Размеры молекул:</h4>
                <p>~10<sup>-10</sup> м. Масса: ~10<sup>-26</sup> кг.</p>
                <h4>Количество вещества:</h4>
                <p><b>nu = N/N<sub>A</sub></b>, N<sub>A</sub> = 6,02 x 10<sup>23</sup> моль<sup>-1</sup></p>`,
                  examples: ['Что такое броуновское движение?', 'Сколько молекул в 1 моле?', 'Доказательства МКТ'],
                  completed: false,
                  difficulty: 'medium',
                  estimatedTime: 35,
                  image: '/images/lessons/grade10/physics/lesson32.svg',
                  lessons: [
                    {
                      id: 'phys10-s5-t1-l1',
                      title: 'Основные положения МКТ',
                      content: `<div class="lesson"><div style="text-align: center; margin-bottom: 1rem;"><img src="/images/lessons/grade10/physics/lesson32.svg" alt="МКТ" style="max-width: 100%; height: auto; border-radius: 12px;" /></div><h2>Основные положения МКТ</h2><p>1. Частицы, 2. Движение, 3. Взаимодействие</p><div class="tip">N_A = 6,02*10^23 — число Авогадро!</div></div>`,
                      completed: false,
                      order: 1,
                      estimatedTime: 15
                    },
                  ],
                },
                {
                  id: 'phys10-s5-t2',
                  title: 'Основное уравнение МКТ',
                  description: 'Давление газа, концентрация, средняя энергия',
                  theory: `<h3>Основное уравнение МКТ</h3>
                <h4>Уравнение:</h4>
                <p><b>p = 1/3 m<sub>0</sub>nv<sup>2</sup><sub>ср</sub> = nkT</b></p>
                <p>n — концентрация, m<sub>0</sub> — масса молекулы, k — постоянная Больцмана.</p>
                <h4>Связь давления и энергии:</h4>
                <p><b>p = 2/3 nE<sub>ср</sub></b></p>
                <p>E<sub>ср</sub> = 3/2 kT — средняя кинетическая энергия молекулы.</p>`,
                  examples: ['Найди давление газа', 'Вычисли среднюю энергию', 'Определи концентрацию'],
                  completed: false,
                  difficulty: 'hard',
                  estimatedTime: 40,
                  image: '/images/lessons/grade10/physics/lesson33.svg',
                  lessons: [
                    {
                      id: 'phys10-s5-t2-l1',
                      title: 'Основное уравнение МКТ',
                      content: `<div class="lesson"><div style="text-align: center; margin-bottom: 1rem;"><img src="/images/lessons/grade10/physics/lesson33.svg" alt="Основное уравнение МКТ" style="max-width: 100%; height: auto; border-radius: 12px;" /></div><h2>Основное уравнение МКТ</h2><p>p = 1/3 * m0*n*v^2 = nkT</p><div class="tip">Давление газа определяется ударами молекул о стенки!</div></div>`,
                      completed: false,
                      order: 1,
                      estimatedTime: 15
                    },
                  ],
                },
                {
                  id: 'phys10-s5-t3',
                  title: 'Температура. Термодинамическая шкала',
                  description: 'Абсолютный нуль, шкала Кельвина',
                  theory: `<h3>Температура</h3>
                <h4>Температура — мера средней кинетической энергии:</h4>
                <p><b>E<sub>ср</sub> = 3/2 kT</b></p>
                <h4>Шкала Кельвина:</h4>
                <p><b>T = t + 273</b> (Кельвины = Цельсии + 273)</p>
                <h4>Абсолютный нуль:</h4>
                <p>T = 0 K = -273 C. При этой температуре тепловое движение прекращается.</p>`,
                  examples: ['Переведи в Кельвины', 'Что такое абсолютный нуль?', 'Связь температуры и энергии'],
                  completed: false,
                  difficulty: 'easy',
                  estimatedTime: 25,
                  image: '/images/lessons/grade10/physics/lesson34.svg',
                  lessons: [
                    {
                      id: 'phys10-s5-t3-l1',
                      title: 'Температура',
                      content: `<div class="lesson"><div style="text-align: center; margin-bottom: 1rem;"><img src="/images/lessons/grade10/physics/lesson34.svg" alt="Температура" style="max-width: 100%; height: auto; border-radius: 12px;" /></div><h2>Температура</h2><p>T = t + 273, E = 3/2 kT</p><div class="tip">Абсолютный нуль недостижим!</div></div>`,
                      completed: false,
                      order: 1,
                      estimatedTime: 15
                    },
                  ],
                },
                {
                  id: 'phys10-s5-t4',
                  title: 'Уравнение состояния идеального газа',
                  description: 'Уравнение Менделеева-Клапейрона',
                  theory: `<h3>Уравнение состояния идеального газа</h3>
                <h4>Уравнение Менделеева-Клапейрона:</h4>
                <p><b>pV = nu RT = (m/M)RT</b></p>
                <p>R = 8,31 Дж/(моль x К) — универсальная газовая постоянная.</p>
                <h4>Частные случаи:</h4>
                <ul><li>p = nkT — через концентрацию</li><li>pV = const при T = const (Бойль-Мариотт)</li></ul>`,
                  examples: ['Реши задачу с уравнением состояния', 'Найди неизвестный параметр', 'Изменение состояния газа'],
                  completed: false,
                  difficulty: 'hard',
                  estimatedTime: 40,
                  image: '/images/lessons/grade10/physics/lesson35.svg',
                  lessons: [
                    {
                      id: 'phys10-s5-t4-l1',
                      title: 'Уравнение состояния газа',
                      content: `<div class="lesson"><div style="text-align: center; margin-bottom: 1rem;"><img src="/images/lessons/grade10/physics/lesson35.svg" alt="Уравнение состояния" style="max-width: 100%; height: auto; border-radius: 12px;" /></div><h2>Уравнение состояния</h2><p>pV = nuRT</p><div class="tip">Одно уравнение связывает три макропараметра: p, V, T!</div></div>`,
                      completed: false,
                      order: 1,
                      estimatedTime: 15
                    },
                  ],
                },
                {
                  id: 'phys10-s5-t5',
                  title: 'Изопроцессы',
                  description: 'Изотермический, изобарный, изохорный процессы',
                  theory: `<h3>Изопроцессы</h3>
                <h4>Изотермический (T = const):</h4>
                <p><b>pV = const</b> — закон Бойля-Мариотта. График: гипербола.</p>
                <h4>Изобарный (p = const):</h4>
                <p><b>V/T = const</b> — закон Гей-Люссака. График: прямая из начала координат.</p>
                <h4>Изохорный (V = const):</h4>
                <p><b>p/T = const</b> — закон Шарля. График: прямая из начала координат.</p>`,
                  examples: ['Построй график изотермы', 'Определи тип процесса', 'Реши задачу на изопроцесс'],
                  completed: false,
                  difficulty: 'medium',
                  estimatedTime: 40,
                  image: '/images/lessons/grade10/physics/lesson36.svg',
                  lessons: [
                    {
                      id: 'phys10-s5-t5-l1',
                      title: 'Изопроцессы',
                      content: `<div class="lesson"><div style="text-align: center; margin-bottom: 1rem;"><img src="/images/lessons/grade10/physics/lesson36.svg" alt="Изопроцессы" style="max-width: 100%; height: auto; border-radius: 12px;" /></div><h2>Изопроцессы</h2><p>T=const: pV=const. p=const: V/T=const. V=const: p/T=const.</p><div class="tip">Каждый изопроцесс — частный случай уравнения Менделеева-Клапейрона!</div></div>`,
                      completed: false,
                      order: 1,
                      estimatedTime: 15
                    },
                  ],
                },
                {
                  id: 'phys10-s5-t6',
                  title: 'Реальные газы. Воздух и водяной пар',
                  description: 'Отличие реальных газов от идеальных, влажность',
                  theory: `<h3>Реальные газы</h3>
                <h4>Отличие от идеального:</h4>
                <ul><li>Молекулы имеют объём</li><li>Молекулы взаимодействуют</li></ul>
                <h4>Влажность воздуха:</h4>
                <p><b>Абсолютная влажность</b> — плотность водяного пара [г/м<sup>3</sup>]</p>
                <p><b>Относительная влажность</b> = rho/rho<sub>нас</sub> x 100%</p>
                <h4>Точка росы:</h4>
                <p>Температура, при которой пар становится насыщенным.</p>`,
                  examples: ['Найди относительную влажность', 'Что такое точка росы?', 'Психрометр'],
                  completed: false,
                  difficulty: 'medium',
                  estimatedTime: 30,
                  image: '/images/lessons/grade10/physics/lesson37.svg',
                  lessons: [
                    {
                      id: 'phys10-s5-t6-l1',
                      title: 'Реальные газы',
                      content: `<div class="lesson"><div style="text-align: center; margin-bottom: 1rem;"><img src="/images/lessons/grade10/physics/lesson37.svg" alt="Реальные газы" style="max-width: 100%; height: auto; border-radius: 12px;" /></div><h2>Реальные газы</h2><p>phi = rho/rho_нас * 100%</p><div class="tip">Комфортная влажность — 40-60%!</div></div>`,
                      completed: false,
                      order: 1,
                      estimatedTime: 15
                    },
                  ],
                },
                {
                  id: 'phys10-s5-t7',
                  title: 'Свойства жидкостей. Поверхностное натяжение',
                  description: 'Смачивание, капилляры',
                  theory: `<h3>Свойства жидкостей</h3>
                <h4>Поверхностное натяжение:</h4>
                <p><b>F = sigma l</b>, sigma — коэффициент поверхностного натяжения.</p>
                <h4>Смачивание:</h4>
                <ul><li>Смачивание — край жидкости поднимается</li><li>Несмачивание — край опускается</li></ul>
                <h4>Капилляры:</h4>
                <p><b>h = 2 sigma / (rho g r)</b> — высота подъёма в капилляре.</p>`,
                  examples: ['Найди высоту подъёма в капилляре', 'Что такое поверхностное натяжение?', 'Смачивание и несмачивание'],
                  completed: false,
                  difficulty: 'medium',
                  estimatedTime: 30,
                  image: '/images/lessons/grade10/physics/lesson38.svg',
                  lessons: [
                    {
                      id: 'phys10-s5-t7-l1',
                      title: 'Свойства жидкостей',
                      content: `<div class="lesson"><div style="text-align: center; margin-bottom: 1rem;"><img src="/images/lessons/grade10/physics/lesson38.svg" alt="Жидкости" style="max-width: 100%; height: auto; border-radius: 12px;" /></div><h2>Свойства жидкостей</h2><p>F = sigma*l, h = 2*sigma/(rho*g*r)</p><div class="tip">Капиллярные явления объясняют поднятие воды в растениях!</div></div>`,
                      completed: false,
                      order: 1,
                      estimatedTime: 15
                    },
                  ],
                },
                {
                  id: 'phys10-s5-t8',
                  title: 'Твёрдые тела. Кристаллы и аморфные тела',
                  description: 'Кристаллические и аморфные тела, деформация',
                  theory: `<h3>Твёрдые тела</h3>
                <h4>Кристаллические тела:</h4>
                <ul><li>Упорядоченное расположение атомов</li><li>Определённая температура плавления</li><li>Анизотропия (свойства зависят от направления)</li></ul>
                <h4>Аморфные тела:</h4>
                <ul><li>Беспорядочное расположение</li><li>Нет определённой температуры плавления</li><li>Изотропия</li></ul>
                <h4>Деформация твёрдых тел:</h4>
                <p>Упругая и пластическая. Закон Гука: sigma = E x epsilon.</p>`,
                  examples: ['Чем кристаллы отличаются от аморфных тел?', 'Закон Гука для твёрдых тел', 'Виды кристаллических решёток'],
                  completed: false,
                  difficulty: 'medium',
                  estimatedTime: 30,
                  image: '/images/lessons/grade10/physics/lesson39.svg',
                  lessons: [
                    {
                      id: 'phys10-s5-t8-l1',
                      title: 'Твёрдые тела',
                      content: `<div class="lesson"><div style="text-align: center; margin-bottom: 1rem;"><img src="/images/lessons/grade10/physics/lesson39.svg" alt="Твёрдые тела" style="max-width: 100%; height: auto; border-radius: 12px;" /></div><h2>Твёрдые тела</h2><p>Кристаллы: порядок, t_пл, анизотропия. Аморфные: хаос, нет t_пл.</p><div class="tip">Стекло — аморфное тело, а лёд — кристаллическое!</div></div>`,
                      completed: false,
                      order: 1,
                      estimatedTime: 15
                    },
                  ],
                },
            ]
          },
          {
            id: 'phys10-s6',
            title: 'Термодинамика',
            description: 'Внутренняя энергия, законы термодинамики',
            order: 6,
            topics: [
                {
                  id: 'phys10-s6-t1',
                  title: 'Внутренняя энергия',
                  description: 'Внутренняя энергия идеального газа, способы изменения',
                  theory: `<h3>Внутренняя энергия</h3>
                <h4>Определение:</h4>
                <p>Сумма кинетических энергий всех молекул и потенциальных энергий их взаимодействия.</p>
                <h4>Идеальный газ:</h4>
                <p><b>U = 3/2 nu RT</b> (одноатомный)</p>
                <p>Зависит только от температуры!</p>
                <h4>Способы изменения:</h4>
                <ul><li>Совершение работы (над газом или газом)</li><li>Теплопередача (теплообмен)</li></ul>`,
                  examples: ['Найди изменение внутренней энергии', 'Способы изменения U', 'U одноатомного газа'],
                  completed: false,
                  difficulty: 'medium',
                  estimatedTime: 30,
                  image: '/images/lessons/grade10/physics/lesson40.svg',
                  lessons: [
                    {
                      id: 'phys10-s6-t1-l1',
                      title: 'Внутренняя энергия',
                      content: `<div class="lesson"><div style="text-align: center; margin-bottom: 1rem;"><img src="/images/lessons/grade10/physics/lesson40.svg" alt="Внутренняя энергия" style="max-width: 100%; height: auto; border-radius: 12px;" /></div><h2>Внутренняя энергия</h2><p>U = 3/2 * nuRT (одноатомный газ)</p><div class="tip">Внутренняя энергия идеального газа зависит только от температуры!</div></div>`,
                      completed: false,
                      order: 1,
                      estimatedTime: 15
                    },
                  ],
                },
                {
                  id: 'phys10-s6-t2',
                  title: 'Работа в термодинамике',
                  description: 'Работа газа, работа над газом, первый закон',
                  theory: `<h3>Работа в термодинамике</h3>
                <h4>Работа газа:</h4>
                <p><b>A = p x deltaV</b> (при изобарном процессе)</p>
                <p>Геометрически: площадь под графиком p(V).</p>
                <h4>Работа над газом:</h4>
                <p><b>A' = -A</b> — работа внешних сил над газом.</p>
                <h4>При изопроцессах:</h4>
                <ul><li>Изохорный: A = 0</li><li>Изотермический: A = nuRT ln(V2/V1)</li></ul>`,
                  examples: ['Найди работу газа', 'Площадь под графиком p(V)', 'Работа при изотермическом процессе'],
                  completed: false,
                  difficulty: 'hard',
                  estimatedTime: 40,
                  image: '/images/lessons/grade10/physics/lesson41.svg',
                  lessons: [
                    {
                      id: 'phys10-s6-t2-l1',
                      title: 'Работа в термодинамике',
                      content: `<div class="lesson"><div style="text-align: center; margin-bottom: 1rem;"><img src="/images/lessons/grade10/physics/lesson41.svg" alt="Работа газа" style="max-width: 100%; height: auto; border-radius: 12px;" /></div><h2>Работа в термодинамике</h2><p>A = p*dV, A' = -A</p><div class="tip">Работа = площадь под графиком p(V)!</div></div>`,
                      completed: false,
                      order: 1,
                      estimatedTime: 15
                    },
                  ],
                },
                {
                  id: 'phys10-s6-t3',
                  title: 'Первый закон термодинамики',
                  description: 'Q = dU + A, применение к изопроцессам',
                  theory: `<h3>Первый закон термодинамики</h3>
                <h4>Закон:</h4>
                <p><b>Q = dU + A</b></p>
                <p>Количество теплоты идёт на изменение внутренней энергии и совершение работы.</p>
                <h4>К изопроцессам:</h4>
                <ul><li>Изохорный: Q = dU (A = 0)</li><li>Изотермический: Q = A (dU = 0)</li><li>Изобарный: Q = dU + A</li><li>Адиабатный: dU = -A (Q = 0)</li></ul>
                <h4>Адиабатный процесс:</h4>
                <p>Без теплообмена с окружающей средой. Q = 0.</p>`,
                  examples: ['Первый закон для изохорного', 'Адиабатный процесс', 'Рассчитай Q'],
                  completed: false,
                  difficulty: 'hard',
                  estimatedTime: 45,
                  image: '/images/lessons/grade10/physics/lesson42.svg',
                  lessons: [
                    {
                      id: 'phys10-s6-t3-l1',
                      title: 'Первый закон термодинамики',
                      content: `<div class="lesson"><div style="text-align: center; margin-bottom: 1rem;"><img src="/images/lessons/grade10/physics/lesson42.svg" alt="Первый закон" style="max-width: 100%; height: auto; border-radius: 12px;" /></div><h2>Первый закон термодинамики</h2><p>Q = dU + A</p><div class="tip">Это закон сохранения энергии для тепловых процессов!</div></div>`,
                      completed: false,
                      order: 1,
                      estimatedTime: 15
                    },
                  ],
                },
                {
                  id: 'phys10-s6-t4',
                  title: 'Тепловые двигатели',
                  description: 'КПД, цикл Карно, второй закон',
                  theory: `<h3>Тепловые двигатели</h3>
                <h4>КПД:</h4>
                <p><b>eta = A/Q1 = (Q1-Q2)/Q1</b></p>
                <h4>Цикл Карно:</h4>
                <p><b>eta_max = (T1-T2)/T1</b> — максимальный КПД</p>
                <h4>Второй закон термодинамики:</h4>
                <p>Невозможно полностью превратить тепло в работу. Теплота самопроизвольно переходит от горячего к холодному.</p>
                <h4>Примеры КПД:</h4>
                <ul><li>ДВС: 25-40%</li><li>Дизель: 35-45%</li><li>Паровая турбина: 30-40%</li></ul>`,
                  examples: ['Рассчитай КПД', 'Цикл Карно', 'Почему КПД < 100%?'],
                  completed: false,
                  difficulty: 'hard',
                  estimatedTime: 40,
                  image: '/images/lessons/grade10/physics/lesson43.svg',
                  lessons: [
                    {
                      id: 'phys10-s6-t4-l1',
                      title: 'Тепловые двигатели',
                      content: `<div class="lesson"><div style="text-align: center; margin-bottom: 1rem;"><img src="/images/lessons/grade10/physics/lesson43.svg" alt="Тепловые двигатели" style="max-width: 100%; height: auto; border-radius: 12px;" /></div><h2>Тепловые двигатели</h2><p>eta = (T1-T2)/T1 — КПД цикла Карно</p><div class="tip">КПД всегда меньше 100% — это второй закон термодинамики!</div></div>`,
                      completed: false,
                      order: 1,
                      estimatedTime: 15
                    },
                  ],
                },
            ]
          },
          {
            id: 'phys10-s7',
            title: 'Электростатика',
            description: 'Закон Кулона, электрическое поле, конденсаторы',
            order: 7,
            topics: [
                {
                  id: 'phys10-s7-t1',
                  title: 'Электрический заряд. Закон Кулона',
                  description: 'Два вида заряда, закон сохранения, закон Кулона',
                  theory: `<h3>Электрический заряд. Закон Кулона</h3>
                <h4>Два вида зарядов:</h4>
                <p>Положительные и отрицательные. Одноимённые отталкиваются, разноимённые притягиваются.</p>
                <h4>Закон сохранения заряда:</h4>
                <p>В замкнутой системе алгебраическая сумма зарядов сохраняется.</p>
                <h4>Закон Кулона:</h4>
                <p><b>F = k |q1||q2|/r<sup>2</sup></b></p>
                <p>k = 9 x 10<sup>9</sup> Н x м<sup>2</sup>/Кл<sup>2</sup></p>
                <h4>Элементарный заряд:</h4>
                <p>e = 1,6 x 10<sup>-19</sup> Кл</p>`,
                  examples: ['Вычисли силу Кулона', 'Как изменится сила при увеличении расстояния?', 'Закон сохранения заряда'],
                  completed: false,
                  difficulty: 'medium',
                  estimatedTime: 35,
                  image: '/images/lessons/grade10/physics/lesson44.svg',
                  lessons: [
                    {
                      id: 'phys10-s7-t1-l1',
                      title: 'Закон Кулона',
                      content: `<div class="lesson"><div style="text-align: center; margin-bottom: 1rem;"><img src="/images/lessons/grade10/physics/lesson44.svg" alt="Закон Кулона" style="max-width: 100%; height: auto; border-radius: 12px;" /></div><h2>Закон Кулона</h2><p>F = k*q1*q2/r^2</p><div class="tip">Закон Кулона похож на закон всемирного тяготения, но для зарядов!</div></div>`,
                      completed: false,
                      order: 1,
                      estimatedTime: 15
                    },
                  ],
                },
                {
                  id: 'phys10-s7-t2',
                  title: 'Электрическое поле. Напряжённость',
                  description: 'Поле точечного заряда, принцип суперпозиции',
                  theory: `<h3>Электрическое поле</h3>
                <h4>Напряжённость:</h4>
                <p><b>E = F/q</b></p>
                <p>Векторная величина, характеризует поле в данной точке.</p>
                <h4>Поле точечного заряда:</h4>
                <p><b>E = kq/r<sup>2</sup></b></p>
                <h4>Принцип суперпозиции:</h4>
                <p><b>E = E1 + E2 + ...</b> — векторная сумма!</p>
                <h4>Линии напряжённости:</h4>
                <p>Направлены от + к -. Не пересекаются.</p>`,
                  examples: ['Найди напряжённость поля', 'Принцип суперпозиции', 'Нарисуй линии поля'],
                  completed: false,
                  difficulty: 'medium',
                  estimatedTime: 35,
                  image: '/images/lessons/grade10/physics/lesson45.svg',
                  lessons: [
                    {
                      id: 'phys10-s7-t2-l1',
                      title: 'Электрическое поле',
                      content: `<div class="lesson"><div style="text-align: center; margin-bottom: 1rem;"><img src="/images/lessons/grade10/physics/lesson45.svg" alt="Электрическое поле" style="max-width: 100%; height: auto; border-radius: 12px;" /></div><h2>Электрическое поле</h2><p>E = F/q, E = kq/r^2</p><div class="tip">Поле — материальный объект, передаёт взаимодействие!</div></div>`,
                      completed: false,
                      order: 1,
                      estimatedTime: 15
                    },
                  ],
                },
                {
                  id: 'phys10-s7-t3',
                  title: 'Потенциал. Разность потенциалов',
                  description: 'Потенциал поля, напряжение, работа поля',
                  theory: `<h3>Потенциал. Разность потенциалов</h3>
                <h4>Потенциал:</h4>
                <p><b>phi = W/q = kq/r</b></p>
                <p>Энергетическая характеристика поля.</p>
                <h4>Разность потенциалов (напряжение):</h4>
                <p><b>U = phi1 - phi2 = A/q</b></p>
                <h4>Работа поля:</h4>
                <p><b>A = qU = q(phi1 - phi2)</b></p>
                <p>Работа не зависит от формы траектории!</p>
                <h4>Связь E и U:</h4>
                <p><b>E = U/d</b> (для однородного поля)</p>`,
                  examples: ['Найди потенциал', 'Вычисли работу поля', 'Связь напряжённости и напряжения'],
                  completed: false,
                  difficulty: 'hard',
                  estimatedTime: 40,
                  image: '/images/lessons/grade10/physics/lesson46.svg',
                  lessons: [
                    {
                      id: 'phys10-s7-t3-l1',
                      title: 'Потенциал',
                      content: `<div class="lesson"><div style="text-align: center; margin-bottom: 1rem;"><img src="/images/lessons/grade10/physics/lesson46.svg" alt="Потенциал" style="max-width: 100%; height: auto; border-radius: 12px;" /></div><h2>Потенциал</h2><p>phi = kq/r, U = A/q</p><div class="tip">Потенциал — как высота в поле тяжести: работа зависит от разности!</div></div>`,
                      completed: false,
                      order: 1,
                      estimatedTime: 15
                    },
                  ],
                },
                {
                  id: 'phys10-s7-t4',
                  title: 'Проводники и диэлектрики в электрическом поле',
                  description: 'Электростатическая индукция, поляризация',
                  theory: `<h3>Проводники и диэлектрики</h3>
                <h4>Проводники:</h4>
                <p>Есть свободные заряды. Внутри проводника E = 0. Электростатическая индукция.</p>
                <h4>Диэлектрики:</h4>
                <p>Нет свободных зарядов. Поляризация. Ослабляют поле в epsilon раз.</p>
                <h4>Диэлектрическая проницаемость:</h4>
                <p><b>E = E0/epsilon</b></p>`,
                  examples: ['Что такое индукция?', 'Как диэлектрик влияет на поле?', 'Заземление'],
                  completed: false,
                  difficulty: 'medium',
                  estimatedTime: 30,
                  image: '/images/lessons/grade10/physics/lesson47.svg',
                  lessons: [
                    {
                      id: 'phys10-s7-t4-l1',
                      title: 'Проводники и диэлектрики',
                      content: `<div class="lesson"><div style="text-align: center; margin-bottom: 1rem;"><img src="/images/lessons/grade10/physics/lesson47.svg" alt="Проводники" style="max-width: 100%; height: auto; border-radius: 12px;" /></div><h2>Проводники и диэлектрики</h2><p>Проводники: E=0 внутри. Диэлектрики: поляризация.</p><div class="tip">Внутри проводника электростатического поля нет!</div></div>`,
                      completed: false,
                      order: 1,
                      estimatedTime: 15
                    },
                  ],
                },
                {
                  id: 'phys10-s7-t5',
                  title: 'Электроёмкость. Конденсаторы',
                  description: 'Плоский конденсатор, энергия',
                  theory: `<h3>Конденсаторы</h3>
                <h4>Электроёмкость:</h4>
                <p><b>C = q/U</b> [Ф] (Фарад)</p>
                <h4>Плоский конденсатор:</h4>
                <p><b>C = epsilon0 epsilon S/d</b></p>
                <h4>Энергия конденсатора:</h4>
                <p><b>W = qU/2 = CU<sup>2</sup>/2 = q<sup>2</sup>/(2C)</b></p>
                <h4>Соединение:</h4>
                <ul><li>Параллельное: C = C1 + C2</li><li>Последовательное: 1/C = 1/C1 + 1/C2</li></ul>`,
                  examples: ['Найди ёмкость конденсатора', 'Энергия заряженного конденсатора', 'Соединение конденсаторов'],
                  completed: false,
                  difficulty: 'hard',
                  estimatedTime: 40,
                  image: '/images/lessons/grade10/physics/lesson48.svg',
                  lessons: [
                    {
                      id: 'phys10-s7-t5-l1',
                      title: 'Конденсаторы',
                      content: `<div class="lesson"><div style="text-align: center; margin-bottom: 1rem;"><img src="/images/lessons/grade10/physics/lesson48.svg" alt="Конденсаторы" style="max-width: 100%; height: auto; border-radius: 12px;" /></div><h2>Конденсаторы</h2><p>C = q/U, W = CU^2/2</p><div class="tip">1 Фарад — огромная ёмкость! Типичные конденсаторы — мкФ, нФ, пФ.</div></div>`,
                      completed: false,
                      order: 1,
                      estimatedTime: 15
                    },
                  ],
                },
                {
                  id: 'phys10-s7-t6',
                  title: 'Применение электростатики',
                  description: 'Молниеотводы, копчение, фильтры, электризация',
                  theory: `<h3>Применение электростатики</h3>
                <h4>Полезные применения:</h4>
                <ul><li>Электрофильтры (очистка воздуха)</li><li>Электрокопчение</li><li>Электростатическая окраска</li><li>Копировальные аппараты</li></ul>
                <h4>Вредная электризация:</h4>
                <ul><li>Искры при заправке</li><li>Удары током от одежды</li><li>Повреждение электроники</li></ul>
                <h4>Защита:</h4>
                <p>Заземление, антистатическая обработка.</p>`,
                  examples: ['Как работает молниеотвод?', 'Защита от статического электричества', 'Электрофильтр'],
                  completed: false,
                  difficulty: 'easy',
                  estimatedTime: 25,
                  image: '/images/lessons/grade10/physics/lesson49.svg',
                  lessons: [
                    {
                      id: 'phys10-s7-t6-l1',
                      title: 'Применение электростатики',
                      content: `<div class="lesson"><div style="text-align: center; margin-bottom: 1rem;"><img src="/images/lessons/grade10/physics/lesson49.svg" alt="Применение" style="max-width: 100%; height: auto; border-radius: 12px;" /></div><h2>Применение электростатики</h2><p>Фильтры, покраска, копирование</p><div class="tip">Заземление — главный способ защиты от электризации!</div></div>`,
                      completed: false,
                      order: 1,
                      estimatedTime: 10
                    },
                  ],
                },
            ]
          },
        ],
        quiz: [
          {
            id: 'phys10-s1-q1',
            question: 'Что входит в систему отсчёта?',
            options: ['Только координаты', 'Тело отсчёта, система координат, часы', 'Только часы', 'Только тело отсчёта'],
            correctAnswer: 1,
            explanation: 'Система отсчёта = тело отсчёта + система координат + часы.',
            difficulty: 'easy',
            points: 10
          },
          {
            id: 'phys10-s1-q2',
            question: 'Может ли путь быть меньше модуля перемещения?',
            options: ['Да', 'Нет', 'Только при равномерном движении', 'Только при криволинейном'],
            correctAnswer: 1,
            explanation: 'Путь всегда больше или равен модулю перемещения: l >= |S|.',
            difficulty: 'easy',
            points: 10
          },
          {
            id: 'phys10-s1-q3',
            question: 'Куда направлено центростремительное ускорение?',
            options: ['По касательной', 'К центру окружности', 'От центра', 'По направлению скорости'],
            correctAnswer: 1,
            explanation: 'Центростремительное ускорение направлено к центру окружности.',
            difficulty: 'easy',
            points: 10
          },
          {
            id: 'phys10-s1-q4',
            question: 'Формула скорости при равноускоренном движении:',
            options: ['v = v0 + at', 'v = v0 * at', 'v = v0 / at', 'v = at'],
            correctAnswer: 0,
            explanation: 'v = v0 + at — основная формула скорости при равноускоренном движении.',
            difficulty: 'easy',
            points: 10
          },
          {
            id: 'phys10-s2-q1',
            question: 'Формула второго закона Ньютона:',
            options: ['F = ma', 'F = mv', 'F = mg', 'F = mv^2/R'],
            correctAnswer: 0,
            explanation: 'F = ma — равнодействующая сила равна произведению массы на ускорение.',
            difficulty: 'easy',
            points: 10
          },
          {
            id: 'phys10-s2-q2',
            question: 'Первая космическая скорость:',
            options: ['7,9 км/с', '11,2 км/с', '3 км/с', '16,7 км/с'],
            correctAnswer: 0,
            explanation: 'v1 = 7,9 км/с — минимальная скорость для выхода на круговую орбиту.',
            difficulty: 'easy',
            points: 10
          },
          {
            id: 'phys10-s2-q3',
            question: 'Силы действия и противодействия:',
            options: ['Компенсируют друг друга', 'Приложены к одному телу', 'Приложены к разным телам', 'Разной природы'],
            correctAnswer: 2,
            explanation: 'Силы действия и противодействия приложены к разным телам, поэтому не компенсируют друг друга.',
            difficulty: 'medium',
            points: 15
          },
          {
            id: 'phys10-s3-q1',
            question: 'Формула импульса тела:',
            options: ['p = mv', 'p = ma', 'p = mg', 'p = Fv'],
            correctAnswer: 0,
            explanation: 'p = mv — импульс равен произведению массы на скорость.',
            difficulty: 'easy',
            points: 10
          },
          {
            id: 'phys10-s3-q2',
            question: 'При неупругом столкновении сохраняется:',
            options: ['Только энергия', 'Только импульс', 'И импульс, и энергия', 'Ничего'],
            correctAnswer: 1,
            explanation: 'При неупругом ударе сохраняется только импульс. Кинетическая энергия частично переходит во внутреннюю.',
            difficulty: 'medium',
            points: 15
          },
          {
            id: 'phys10-s4-q1',
            question: 'Формула момента силы:',
            options: ['M = Fl', 'M = F/l', 'M = Fv', 'M = F+m'],
            correctAnswer: 0,
            explanation: 'M = Fl — момент силы равен произведению силы на плечо.',
            difficulty: 'easy',
            points: 10
          },
          {
            id: 'phys10-s5-q1',
            question: 'Чему равно число Авогадро?',
            options: ['6,02*10^23', '6,02*10^20', '3,14*10^23', '1,38*10^-23'],
            correctAnswer: 0,
            explanation: 'N_A = 6,02*10^23 моль^-1 — число частиц в одном моле вещества.',
            difficulty: 'easy',
            points: 10
          },
          {
            id: 'phys10-s5-q2',
            question: 'Какой закон описывает изотермический процесс?',
            options: ['pV = const', 'V/T = const', 'p/T = const', 'pV = nuRT'],
            correctAnswer: 0,
            explanation: 'pV = const — закон Бойля-Мариотта для изотермического процесса.',
            difficulty: 'easy',
            points: 10
          },
          {
            id: 'phys10-s6-q1',
            question: 'Формула первого закона термодинамики:',
            options: ['Q = dU + A', 'Q = dU - A', 'Q = A - dU', 'Q = dU * A'],
            correctAnswer: 0,
            explanation: 'Q = dU + A — теплота идёт на изменение внутренней энергии и работу.',
            difficulty: 'easy',
            points: 10
          },
          {
            id: 'phys10-s6-q2',
            question: 'При адиабатном процессе:',
            options: ['Q = 0', 'A = 0', 'dU = 0', 'T = const'],
            correctAnswer: 0,
            explanation: 'Адиабатный процесс протекает без теплообмена: Q = 0.',
            difficulty: 'medium',
            points: 15
          },
          {
            id: 'phys10-s7-q1',
            question: 'Формула закона Кулона:',
            options: ['F = kq1q2/r^2', 'F = kq1q2/r', 'F = q1q2/r^2', 'F = q/r^2'],
            correctAnswer: 0,
            explanation: 'F = k|q1||q2|/r^2 — сила взаимодействия зарядов.',
            difficulty: 'easy',
            points: 10
          },
          {
            id: 'phys10-s7-q2',
            question: 'Чему равна напряжённость внутри проводника?',
            options: ['Максимум', 'Минимум', '0', 'Бесконечность'],
            correctAnswer: 2,
            explanation: 'Внутри проводника в электростатическом поле E = 0.',
            difficulty: 'medium',
            points: 15
          },
          {
            id: 'phys10-s7-q3',
            question: 'Формула электроёмкости:',
            options: ['C = qU', 'C = q/U', 'C = U/q', 'C = q^2/U'],
            correctAnswer: 1,
            explanation: 'C = q/U — ёмкость равна отношению заряда к напряжению.',
            difficulty: 'easy',
            points: 10
          },
        ]
      },

  // ==================== ХИМИЯ ====================
  {
    id: 'chemistry10',
    title: 'Химия',
    icon: <FlaskConical className="w-5 h-5" />,
    color: 'text-cyan-400',
    gradient: 'from-cyan-500 to-teal-500',
    description: 'Органическая химия',
    sections: [
      {
        id: 'chem10-s1',
        title: 'Основы органической химии',
        description: 'Углеводороды',
        order: 1,
        topics: [
          {
            id: 'chem10-s1-t1',
            title: 'Предельные углеводороды',
            description: 'Алканы',
            theory: `<h3>Алканы (предельные углеводороды)</h3>
            <h4>Общая формула:</h4>
            <p><b>CnH2n+2</b></p>
            <h4>Примеры:</h4>
            <ul>
              <li>CH₄ — метан</li>
              <li>C₂H₆ — этан</li>
              <li>C₃H₈ — пропан</li>
              <li>C₄H₁₀ — бутан</li>
            </ul>
            <h4>Химические свойства:</h4>
            <ul>
              <li>Горение: CH₄ + 2O₂ → CO₂ + 2H₂O</li>
              <li>Галогенирование (свет)</li>
              <li>Нитрование (реакция Коновалова)</li>
            </ul>
            <h4>Получение:</h4>
            <p>Из природного газа, нефти</p>`,
            examples: ['Назови алкан C₅H₁₂', 'Напиши реакцию горения пропана'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 45,
            lessons: [
              {
                id: 'chem10-s1-t1-l1',
                title: 'Номенклатура алканов',
                content: `<div class="lesson">
                  <div style="text-align: center; margin-bottom: 1rem;">
                    <img src="/inetshkola/images/topics/chemistry/chem-15.svg" alt="Углеводороды" style="max-width: 100%; height: auto; border-radius: 12px;" />
                  </div>
                  <h2>🧪 Алканы</h2>
                  <h3>Названия:</h3>
                  <ul>
                    <li>C₁ — метан</li>
                    <li>C₂ — этан</li>
                    <li>C₃ — пропан</li>
                    <li>C₄ — бутан</li>
                    <li>C₅ — пентан</li>
                    <li>C₆ — гексан</li>
                  </ul>
                  <div class="tip">💡 Мет-эт-проп-бут-пент-гекс-гепт-окт-нон-дек</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              }
            ]
          },
          {
            id: 'chem10-s1-t2',
            title: 'Непредельные углеводороды',
            description: 'Алкены и алкины',
            theory: `<h3>Алкены</h3>
            <h4>Общая формула:</h4>
            <p><b>CnH2n</b></p>
            <h4>Примеры:</h4>
            <ul>
              <li>C₂H₄ — этен (этилен)</li>
              <li>C₃H₆ — пропен</li>
            </ul>
            <h4>Химические свойства:</h4>
            <ul>
              <li>Гидрирование: C₂H₄ + H₂ → C₂H₆</li>
              <li>Гидратация: C₂H₄ + H₂O → C₂H₅OH</li>
              <li>Полимеризация: n(C₂H₄) → (-CH₂-CH₂-)n</li>
            </ul>
            <h3>Алкины</h3>
            <h4>Общая формула:</h4>
            <p><b>CnH2n-2</b></p>
            <p>C₂H₂ — этин (ацетилен)</p>`,
            examples: ['Напиши реакцию гидратации этилена', 'Что такое полимеризация?'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 45,
            lessons: [
              {
                id: 'chem10-s1-t2-l1',
                title: 'Реакции алкенов',
                content: `<div class="lesson">
                  <div style="text-align: center; margin-bottom: 1rem;">
                    <img src="/inetshkola/images/topics/chemistry/chem-08.svg" alt="Бензольное кольцо" style="max-width: 100%; height: auto; border-radius: 12px;" />
                  </div>
                  <h2>⚗️ Алкены</h2>
                  <h3>Качественная реакция:</h3>
                  <p>C₂H₄ + Br₂ → C₂H₄Br₂</p>
                  <p>Обесцвечивание бромной воды</p>
                  <h3>Полимеризация:</h3>
                  <p>n(C₂H₄) → полиэтилен</p>
                  <div class="tip">💡 Двойная связь — источник активности!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              }
            ]
          }
        ]
      },
      {
        id: 'chem10-s2',
        title: 'Кислородсодержащие соединения',
        description: 'Спирты, альдегиды, карбоновые кислоты',
        order: 2,
        topics: [
          {
            id: 'chem10-s2-t1',
            title: 'Спирты',
            description: 'Одноатомные и многоатомные спирты',
            theory: `<h3>Спирты</h3>
            <h4>Общая формула:</h4>
            <p><b>R-OH</b></p>
            <h4>Примеры:</h4>
            <ul>
              <li>CH₃OH — метанол (ядовит!)</li>
              <li>C₂H₅OH — этанол (этиловый спирт)</li>
              <li>C₃H₇OH — пропанол</li>
            </ul>
            <h4>Химические свойства:</h4>
            <ul>
              <li>Горение: C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O</li>
              <li>Окисление: C₂H₅OH → CH₃COH (альдегид)</li>
              <li>Взаимодействие с Na: 2C₂H₅OH + 2Na → 2C₂H₅ONa + H₂</li>
            </ul>
            <h4>Получение:</h4>
            <p>Гидратация этилена, брожение глюкозы</p>`,
            examples: ['Напиши реакцию горения этанола', 'Как получить этанол?'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 45,
            lessons: [
              {
                id: 'chem10-s2-t1-l1',
                title: 'Свойства спиртов',
                content: `<div class="lesson">
                  <div style="text-align: center; margin-bottom: 1rem;">
                    <img src="/inetshkola/images/topics/chemistry/chem-15.svg" alt="Органические соединения" style="max-width: 100%; height: auto; border-radius: 12px;" />
                  </div>
                  <h2>🍷 Спирты</h2>
                  <h3>Этанол:</h3>
                  <p>C₂H₅OH — этиловый спирт</p>
                  <h3>Качественная реакция:</h3>
                  <p>С CuO → альдегид (запах)</p>
                  <h3>Многоатомные спирты:</h3>
                  <p>Глицерин C₃H₅(OH)₃</p>
                  <div class="tip">💡 Спирты — производные углеводородов с группой -OH!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              }
            ]
          },
          {
            id: 'chem10-s2-t2',
            title: 'Альдегиды и карбоновые кислоты',
            description: 'Производные углеводородов',
            theory: `<h3>Альдегиды</h3>
            <h4>Общая формула:</h4>
            <p><b>R-CHO</b></p>
            <h4>Примеры:</h4>
            <ul>
              <li>HCHO — формальдегид</li>
              <li>CH₃CHO — ацетальдегид</li>
            </ul>
            <h4>Качественные реакции:</h4>
            <ul>
              <li>Реакция "серебряного зеркала"</li>
              <li>Реакция с Cu(OH)₂</li>
            </ul>
            <h3>Карбоновые кислоты</h3>
            <h4>Общая формула:</h4>
            <p><b>R-COOH</b></p>
            <h4>Примеры:</h4>
            <ul>
              <li>HCOOH — муравьиная кислота</li>
              <li>CH₃COOH — уксусная кислота</li>
              <li>C₁₇H₃₅COOH — стеариновая кислота</li>
            </ul>`,
            examples: ['Напиши реакцию "серебряного зеркала"', 'Что такое уксусная кислота?'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 50,
            lessons: [
              {
                id: 'chem10-s2-t2-l1',
                title: 'Альдегиды',
                content: `<div class="lesson">
                  <div style="text-align: center; margin-bottom: 1rem;">
                    <img src="/inetshkola/images/topics/chemistry/chem-15.svg" alt="Органические соединения" style="max-width: 100%; height: auto; border-radius: 12px;" />
                  </div>
                  <h2>⚗️ Альдегиды</h2>
                  <h3>Реакция "серебряного зеркала":</h3>
                  <p>R-CHO + Ag₂O → R-COOH + 2Ag↓</p>
                  <p>Альдегид окисляется до кислоты</p>
                  <h3>Получение:</h3>
                  <p>Окисление спиртов</p>
                  <div class="tip">💡 Альдегиды содержат группу -CHO!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              }
            ]
          }
        ]
      },
      {
        id: 'chem10-s3',
        title: 'Углеводы',
        description: 'Моносахариды, дисахариды, полисахариды',
        order: 3,
        topics: [
          {
            id: 'chem10-s3-t1',
            title: 'Классификация углеводов',
            description: 'Строение и функции',
            theory: `<h3>Углеводы</h3>
            <h4>Моносахариды:</h4>
            <ul>
              <li><b>Глюкоза</b> C₆H₁₂O₆ — источник энергии</li>
              <li><b>Фруктоза</b> C₆H₁₂O₆ — фруктовый сахар</li>
              <li><b>Рибоза</b> C₅H₁₀O₅ — компонент РНК</li>
            </ul>
            <h4>Дисахариды:</h4>
            <ul>
              <li><b>Сахароза</b> C₁₂H₂₂O₁₁ — столовый сахар</li>
              <li><b>Лактоза</b> — молочный сахар</li>
              <li><b>Мальтоза</b> — солодовый сахар</li>
            </ul>
            <h4>Полисахариды:</h4>
            <ul>
              <li><b>Крахмал</b> (C₆H₁₀O₅)n — запасное вещество растений</li>
              <li><b>Целлюлоза</b> — клетчатка, основа клеточных стенок</li>
              <li><b>Гликоген</b> — "животный крахмал"</li>
            </ul>`,
            examples: ['Определи тип углевода', 'Напиши формулу глюкозы'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 45,
            lessons: [
              {
                id: 'chem10-s3-t1-l1',
                title: 'Глюкоза',
                content: `<div class="lesson">
                  <div style="text-align: center; margin-bottom: 1rem;">
                    <img src="/inetshkola/images/topics/chemistry/chem-04.svg" alt="Молекулы" style="max-width: 100%; height: auto; border-radius: 12px;" />
                  </div>
                  <h2>🍬 Глюкоза</h2>
                  <h3>Формула:</h3>
                  <p>C₆H₁₂O₆</p>
                  <h3>Свойства:</h3>
                  <ul>
                    <li>Альдегидоспирт</li>
                    <li>Брожение: C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂</li>
                    <li>Окисление: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O</li>
                  </ul>
                  <div class="tip">💡 Глюкоза — главный источник энергии!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              }
            ]
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'chem10-q1',
        question: 'Какая общая формула алканов?',
        options: ['CnH2n', 'CnH2n+2', 'CnH2n-2', 'CnH2n-6'],
        correctAnswer: 1,
        explanation: 'Алканы: CnH2n+2 (предельные углеводороды).',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'chem10-q2',
        question: 'Какой алкан имеет формулу C₄H₁₀?',
        options: ['Пропан', 'Бутан', 'Пентан', 'Метан'],
        correctAnswer: 1,
        explanation: 'C₄H₁₀ — бутан (4 атома углерода).',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'chem10-q3',
        question: 'Какая общая формула алкенов?',
        options: ['CnH2n+2', 'CnH2n', 'CnH2n-2', 'CnH2n-6'],
        correctAnswer: 1,
        explanation: 'Алкены: CnH2n (непредельные углеводороды с двойной связью).',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'chem10-q4',
        question: 'Какая реакция является качественной для алкенов?',
        options: ['Горение', 'Обесцвечивание бромной воды', 'Замещение', 'Нитрование'],
        correctAnswer: 1,
        explanation: 'Алкены обесцвечивают бромную воду из-за двойной связи.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'chem10-q5',
        question: 'Какая формула у этанола?',
        options: ['CH₃OH', 'C₂H₅OH', 'C₃H₇OH', 'C₄H₉OH'],
        correctAnswer: 1,
        explanation: 'C₂H₅OH — этанол (этиловый спирт).',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'chem10-q6',
        question: 'Какая качественная реакция на альдегиды?',
        options: ['Реакция с водой', 'Реакция "серебряного зеркала"', 'Реакция горения', 'Реакция с кислородом'],
        correctAnswer: 1,
        explanation: 'Реакция "серебряного зеркала" — качественная реакция на альдегиды.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'chem10-q7',
        question: 'Какой углевод является источником энергии?',
        options: ['Крахмал', 'Целлюлоза', 'Глюкоза', 'Гликоген'],
        correctAnswer: 2,
        explanation: 'Глюкоза — основной источник энергии для клеток.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'chem10-q8',
        question: 'Какой продукт образуется при спиртовом брожении глюкозы?',
        options: ['Уксусная кислота', 'Этанол', 'Метанол', 'Глицерин'],
        correctAnswer: 1,
        explanation: 'C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂ — спиртовое брожение.',
        difficulty: 'medium',
        points: 15
      }
    ]
  },

  // ==================== БИОЛОГИЯ ====================
  {
    id: 'biology10',
    title: 'Биология',
    icon: <Bug className="w-5 h-5" />,
    color: 'text-lime-400',
    gradient: 'from-lime-500 to-green-500',
    description: 'Общая биология',
    sections: [
      {
        id: 'bio10-s1',
        title: 'Клетка',
        description: 'Строение и функции',
        order: 1,
        topics: [
          {
            id: 'bio10-s1-t1',
            title: 'Строение клетки',
            description: 'Органеллы клетки',
            theory: `<h3>Строение эукариотической клетки</h3>
            <h4>Органеллы:</h4>
            <ul>
              <li><b>Ядро</b> — хранение генетической информации</li>
              <li><b>Митохондрии</b> — энергетические станции</li>
              <li><b>Рибосомы</b> — синтез белка</li>
              <li><b>ЭПР</b> — транспорт веществ</li>
              <li><b>Аппарат Гольджи</b> — упаковка белков</li>
              <li><b>Лизосомы</b> — пищеварение</li>
            </ul>
            <h4>Плазматическая мембрана:</h4>
            <p>Фосфолипидный бислой с белками</p>`,
            examples: ['Опиши функции митохондрий', 'Что такое рибосомы?'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 40,
            lessons: [
              {
                id: 'bio10-s1-t1-l1',
                title: 'Органеллы',
                content: `<div class="lesson">
                  <h2>🔬 Органеллы клетки</h2>
                  <h3>Митохондрии:</h3>
                  <p>АТФ — энергия клетки</p>
                  <h3>Рибосомы:</h3>
                  <p>Синтез белка из аминокислот</p>
                  <h3>Ядро:</h3>
                  <p>ДНК, хромосомы, наследственность</p>
                  <div class="tip">💡 "Клетка — элементарная единица жизни"</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              }
            ]
          }
        ]
      },
      {
        id: 'bio10-s2',
        title: 'Генетика',
        description: 'Основы наследственности',
        order: 2,
        topics: [
          {
            id: 'bio10-s2-t1',
            title: 'Законы Менделя',
            description: 'Наследование признаков',
            theory: `<h3>Законы Менделя</h3>
            <h4>Первый закон (единообразия):</h4>
            <p>При скрещивании гомозигот всё потомство единообразно.</p>
            <h4>Второй закон (расщепления):</h4>
            <p>Aa × Aa → 1AA : 2Aa : 1aa (3:1 по фенотипу)</p>
            <h4>Третий закон (независимого наследования):</h4>
            <p>Признаки наследуются независимо друг от друга.</p>
            <h4>Обозначения:</h4>
            <ul>
              <li>A — доминантный аллель</li>
              <li>a — рецессивный аллель</li>
              <li>AA, aa — гомозиготы</li>
              <li>Aa — гетерозигота</li>
            </ul>`,
            examples: ['Реши задачу на скрещивание', 'Определи генотип'],
            completed: false,
            difficulty: 'hard',
            estimatedTime: 50,
            lessons: [
              {
                id: 'bio10-s2-t1-l1',
                title: 'Решение задач',
                content: `<div class="lesson">
                  <h2>🧬 Генетические задачи</h2>
                  <h3>Алгоритм:</h3>
                  <ol>
                    <li>Определи признаки и аллели</li>
                    <li>Запиши генотипы родителей</li>
                    <li>Составь схему скрещивания</li>
                    <li>Определи гаметы</li>
                    <li>Найди расщепление</li>
                  </ol>
                  <div class="tip">💡 P — родители, F — потомство, G — гаметы</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 20
              }
            ]
          }
        ]
      },
      {
        id: 'bio10-s3',
        title: 'Эволюция',
        description: 'Теория эволюции',
        order: 3,
        topics: [
          {
            id: 'bio10-s3-t1',
            title: 'Дарвинизм',
            description: 'Эволюционная теория Ч. Дарвина',
            theory: `<h3>Теория эволюции</h3>
            <h4>Основные положения Ч. Дарвина:</h4>
            <ul>
              <li><b>Наследственная изменчивость</b> — материал для эволюции</li>
              <li><b>Борьба за существование</b> — конкуренция за ресурсы</li>
              <li><b>Естественный отбор</b> — выживание приспособленных</li>
            </ul>
            <h4>Формы естественного отбора:</h4>
            <ul>
              <li><b>Движущий</b> — изменение среды</li>
              <li><b>Стабилизирующий</b> — постоянство условий</li>
              <li><b>Разрывающий</b> — две формы в популяции</li>
            </ul>
            <h4>Приспособленность:</h4>
            <p>Результат действия естественного отбора</p>`,
            examples: ['Объясни механизм естественного отбора', 'Приведи пример приспособленности'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 50,
            lessons: [
              {
                id: 'bio10-s3-t1-l1',
                title: 'Естественный отбор',
                content: `<div class="lesson">
                  <h2>🌿 Естественный отбор</h2>
                  <h3>Суть:</h3>
                  <p>Выживают и размножаются наиболее приспособленные</p>
                  <h3>Пример:</h3>
                  <p>Берёзовая пяденица: тёмные формы выживают на загрязнённых деревьях</p>
                  <div class="tip">💡 "Выживает сильнейший" — не всегда самый сильный, а самый приспособленный!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              }
            ]
          },
          {
            id: 'bio10-s3-t2',
            title: 'Видообразование',
            description: 'Процессы образования новых видов',
            theory: `<h3>Видообразование</h3>
            <h4>Пути видообразования:</h4>
            <ul>
              <li><b>Аллопатрическое</b> — географическое разделение</li>
              <li><b>Симпатрическое</b> — в одном ареале</li>
            </ul>
            <h4>Элементарные эволюционные факторы:</h4>
            <ul>
              <li><b>Мутации</b> — источник изменчивости</li>
              <li><b>Дрейф генов</b> — случайные изменения</li>
              <li><b>Изоляция</b> — разделение популяций</li>
              <li><b>Естественный отбор</b> — направляющий фактор</li>
            </ul>
            <h4>Микро- и макроэволюция:</h4>
            <p>Микроэволюция — в пределах вида</p>
            <p>Макроэволюция — надвидовой уровень</p>`,
            examples: ['Приведи пример аллопатрического видообразования', 'Что такое дрейф генов?'],
            completed: false,
            difficulty: 'hard',
            estimatedTime: 55,
            lessons: [
              {
                id: 'bio10-s3-t2-l1',
                title: 'Изоляция',
                content: `<div class="lesson">
                  <h2>🏝️ Изоляция</h2>
                  <h3>Типы:</h3>
                  <ul>
                    <li>Географическая — горы, реки, океаны</li>
                    <li>Экологическая — разные местообитания</li>
                    <li>Репродуктивная — невозможность скрещивания</li>
                  </ul>
                  <div class="tip">💡 Изоляция — ключевой фактор видообразования!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              }
            ]
          }
        ]
      },
      {
        id: 'bio10-s4',
        title: 'Экология',
        description: 'Взаимодействие организмов со средой',
        order: 4,
        topics: [
          {
            id: 'bio10-s4-t1',
            title: 'Экологические факторы',
            description: 'Факторы среды',
            theory: `<h3>Экологические факторы</h3>
            <h4>Абиотические:</h4>
            <ul>
              <li><b>Климатические</b> — температура, влажность, свет</li>
              <li><b>Эдафические</b> — почва</li>
              <li><b>Орографические</b> — рельеф</li>
            </ul>
            <h4>Биотические:</h4>
            <ul>
              <li><b>Хищник-жертва</b></li>
              <li><b>Симбиоз</b> — взаимовыгодное сожительство</li>
              <li><b>Паразитизм</b></li>
              <li><b>Конкуренция</b></li>
            </ul>
            <h4>Антропогенные:</h4>
            <p>Влияние человека на природу</p>`,
            examples: ['Классифицируй экологический фактор', 'Приведи пример симбиоза'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 45,
            lessons: [
              {
                id: 'bio10-s4-t1-l1',
                title: 'Биотические связи',
                content: `<div class="lesson">
                  <h2>🦠 Биотические факторы</h2>
                  <h3>Хищничество:</h3>
                  <p>Волк и заяц — "гонка вооружений"</p>
                  <h3>Симбиоз:</h3>
                  <p>Лишайник = гриб + водоросль</p>
                  <p>Клубеньковые бактерии и бобовые</p>
                  <div class="tip">💡 Симбиоз — взаимовыгодное сотрудничество!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              }
            ]
          },
          {
            id: 'bio10-s4-t2',
            title: 'Экосистемы',
            description: 'Структура экосистем',
            theory: `<h3>Экосистема</h3>
            <h4>Структура:</h4>
            <ul>
              <li><b>Продуценты</b> — производители (растения)</li>
              <li><b>Консументы</b> — потребители (животные)</li>
              <li><b>Редуценты</b> — разрушители (грибы, бактерии)</li>
            </ul>
            <h4>Пищевые цепи:</h4>
            <p>Трава → Заяц → Лиса → Орёл</p>
            <h4>Правило 10%:</h4>
            <p>На каждый следующий уровень переходит ~10% энергии</p>
            <h4>Экологическая пирамида:</h4>
            <p>Отражает уменьшение биомассы и энергии</p>`,
            examples: ['Составь пищевую цепь', 'Объясни правило 10%'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 45,
            lessons: [
              {
                id: 'bio10-s4-t2-l1',
                title: 'Пищевые цепи',
                content: `<div class="lesson">
                  <h2>🔗 Пищевые цепи</h2>
                  <h3>Пример:</h3>
                  <p>Фитопланктон → Зоопланктон → Рыба → Тюлень → Белый медведь</p>
                  <h3>Правило:</h3>
                  <p>Каждый уровень — ~10% энергии предыдущего</p>
                  <div class="tip">💡 Чем короче цепь, тем эффективнее передача энергии!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              }
            ]
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'bio10-q1',
        question: 'Какая органелла отвечает за синтез белка?',
        options: ['Митохондрия', 'Рибосома', 'Ядро', 'Лизосома'],
        correctAnswer: 1,
        explanation: 'Рибосомы синтезируют белки из аминокислот.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'bio10-q2',
        question: 'Какое расщепление по фенотипу даёт второй закон Менделя?',
        options: ['1:1', '1:2:1', '3:1', '9:3:3:1'],
        correctAnswer: 2,
        explanation: 'Второй закон: расщепление 3:1 по фенотипу.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'bio10-q3',
        question: 'Какая органелла является "энергетической станцией" клетки?',
        options: ['Рибосома', 'Митохондрия', 'Ядро', 'Лизосома'],
        correctAnswer: 1,
        explanation: 'Митохондрии производят АТФ — энергию клетки.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'bio10-q4',
        question: 'Кто является автором теории эволюции?',
        options: ['Менделеев', 'Мендель', 'Дарвин', 'Павлов'],
        correctAnswer: 2,
        explanation: 'Чарльз Дарвин — автор эволюционной теории.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'bio10-q5',
        question: 'Какой фактор эволюции является направляющим?',
        options: ['Мутации', 'Дрейф генов', 'Естественный отбор', 'Изоляция'],
        correctAnswer: 2,
        explanation: 'Естественный отбор — направляющий фактор эволюции.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'bio10-q6',
        question: 'Какие организмы являются продуцентами в экосистеме?',
        options: ['Животные', 'Растения', 'Грибы', 'Бактерии'],
        correctAnswer: 1,
        explanation: 'Продуценты (производители) — растения, создающие органические вещества.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'bio10-q7',
        question: 'Какое правило гласит, что на следующий трофический уровень переходит 10% энергии?',
        options: ['Правило Либиха', 'Правило 10%', 'Правило Аллена', 'Правило Бергмана'],
        correctAnswer: 1,
        explanation: 'Правило 10% — на следующий уровень переходит ~10% энергии.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'bio10-q8',
        question: 'Какой тип изоляции связан с географическим разделением популяций?',
        options: ['Репродуктивная', 'Экологическая', 'Географическая', 'Поведенческая'],
        correctAnswer: 2,
        explanation: 'Географическая изоляция — разделение популяций пространственными барьерами.',
        difficulty: 'medium',
        points: 15
      }
    ]
  },

  // ==================== ИНФОРМАТИКА ====================
  {
    id: 'informatics10',
    title: 'Информатика',
    icon: <Monitor className="w-5 h-5" />,
    color: 'text-indigo-400',
    gradient: 'from-indigo-500 to-violet-500',
    description: 'Программирование и алгоритмы',
    sections: [
      {
        id: 'inf10-s1',
        title: 'Программирование',
        description: 'Основы Python',
        order: 1,
        topics: [
          {
            id: 'inf10-s1-t1',
            title: 'Введение в Python',
            description: 'Переменные и типы данных',
            theory: `<h3>Основы Python</h3>
            <h4>Типы данных:</h4>
            <ul>
              <li><b>int</b> — целые числа: 5, -3, 100</li>
              <li><b>float</b> — вещественные: 3.14, -0.5</li>
              <li><b>str</b> — строки: "Hello", 'World'</li>
              <li><b>bool</b> — логические: True, False</li>
              <li><b>list</b> — списки: [1, 2, 3]</li>
            </ul>
            <h4>Переменные:</h4>
            <pre>
x = 5
name = "Иван"
price = 99.99
is_student = True
            </pre>`,
            examples: ['Создай переменную', 'Определи тип данных'],
            completed: false,
            difficulty: 'easy',
            estimatedTime: 30,
            lessons: [
              {
                id: 'inf10-s1-t1-l1',
                title: 'Переменные',
                content: `<div class="lesson">
                  <h2>🐍 Python: Переменные</h2>
                  <h3>Создание:</h3>
                  <p>x = 10</p>
                  <p>name = "Мария"</p>
                  <h3>Операции:</h3>
                  <p>+ - * / // % **</p>
                  <div class="tip">💡 Python — язык с динамической типизацией!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              }
            ]
          },
          {
            id: 'inf10-s1-t2',
            title: 'Условия и циклы',
            description: 'Конструкции управления',
            theory: `<h3>Условия</h3>
            <pre>
if x > 0:
    print("Положительное")
elif x < 0:
    print("Отрицательное")
else:
    print("Ноль")
            </pre>
            <h3>Цикл for:</h3>
            <pre>
for i in range(5):
    print(i)  # 0, 1, 2, 3, 4
            </pre>
            <h3>Цикл while:</h3>
            <pre>
while x > 0:
    x -= 1
            </pre>`,
            examples: ['Напиши цикл for', 'Создай условие'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 40,
            lessons: [
              {
                id: 'inf10-s1-t2-l1',
                title: 'Циклы',
                content: `<div class="lesson">
                  <h2>🔄 Циклы в Python</h2>
                  <h3>for:</h3>
                  <p>for i in range(10):</p>
                  <h3>while:</h3>
                  <p>while условие:</p>
                  <h3>break и continue:</h3>
                  <p>break — выход из цикла</p>
                  <p>continue — следующая итерация</p>
                  <div class="tip">💡 Отступы важны в Python!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              }
            ]
          }
        ]
      },
      {
        id: 'inf10-s2',
        title: 'Алгоритмы',
        description: 'Сортировка и поиск',
        order: 2,
        topics: [
          {
            id: 'inf10-s2-t1',
            title: 'Сортировка',
            description: 'Алгоритмы сортировки',
            theory: `<h3>Сортировка пузырьком</h3>
            <pre>
for i in range(n):
    for j in range(n-1):
        if arr[j] > arr[j+1]:
            arr[j], arr[j+1] = arr[j+1], arr[j]
            </pre>
            <h4>Сложность: O(n²)</h4>
            <h3>Быстрая сортировка (QuickSort)</h3>
            <p>Разделяй и властвуй — O(n log n)</p>`,
            examples: ['Реализуй сортировку', 'Определи сложность'],
            completed: false,
            difficulty: 'hard',
            estimatedTime: 50,
            lessons: [
              {
                id: 'inf10-s2-t1-l1',
                title: 'Сложность алгоритмов',
                content: `<div class="lesson">
                  <h2>📊 Сложность алгоритмов</h2>
                  <h3>O(n) — линейная:</h3>
                  <p>Поиск в массиве</p>
                  <h3>O(n²) — квадратичная:</h3>
                  <p>Сортировка пузырьком</p>
                  <h3>O(log n) — логарифмическая:</h3>
                  <p>Бинарный поиск</p>
                  <div class="tip">💡 Чем меньше O, тем быстрее!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              }
            ]
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'inf10-q1',
        question: 'Какой тип данных для целых чисел в Python?',
        options: ['float', 'str', 'int', 'bool'],
        correctAnswer: 2,
        explanation: 'int — целые числа (integer).',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'inf10-q2',
        question: 'Какая сложность у сортировки пузырьком?',
        options: ['O(n)', 'O(n²)', 'O(log n)', 'O(1)'],
        correctAnswer: 1,
        explanation: 'Сортировка пузырьком имеет сложность O(n²).',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'inf10-q3',
        question: 'Какой тип данных используется для хранения текста в Python?',
        options: ['int', 'float', 'str', 'bool'],
        correctAnswer: 2,
        explanation: 'str (string) — строковый тип данных для текста.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'inf10-q4',
        question: 'Какой цикл выполняется, пока условие истинно?',
        options: ['for', 'while', 'if', 'else'],
        correctAnswer: 1,
        explanation: 'Цикл while выполняется, пока условие истинно.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'inf10-q5',
        question: 'Что выведет print(range(3))?',
        options: ['[0, 1, 2]', '[1, 2, 3]', 'range(0, 3)', '[0, 1, 2, 3]'],
        correctAnswer: 2,
        explanation: 'range(3) возвращает объект range(0, 3).',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'inf10-q6',
        question: 'Какая сложность у бинарного поиска?',
        options: ['O(n)', 'O(n²)', 'O(log n)', 'O(1)'],
        correctAnswer: 2,
        explanation: 'Бинарный поиск имеет сложность O(log n).',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'inf10-q7',
        question: 'Какое ключевое слово используется для выхода из цикла?',
        options: ['continue', 'break', 'return', 'exit'],
        correctAnswer: 1,
        explanation: 'break — выход из цикла.',
        difficulty: 'easy',
        points: 10
      }
    ]
  },

  // ==================== АНГЛИЙСКИЙ ЯЗЫК ====================
  {
    id: 'english10',
    title: 'Английский язык',
    icon: <Languages className="w-5 h-5" />,
    color: 'text-sky-400',
    gradient: 'from-sky-500 to-blue-500',
    description: 'Advanced grammar and vocabulary',
    sections: [
      {
        id: 'eng10-s1',
        title: 'Grammar',
        description: 'Advanced structures',
        order: 1,
        topics: [
          {
            id: 'eng10-s1-t1',
            title: 'Conditionals',
            description: 'Conditional sentences',
            theory: `<h3>Conditionals</h3>
            <h4>Zero Conditional:</h4>
            <p>If + Present Simple, Present Simple</p>
            <p>If you heat water to 100°C, it boils.</p>
            <h4>First Conditional:</h4>
            <p>If + Present Simple, will + infinitive</p>
            <p>If it rains, I will stay at home.</p>
            <h4>Second Conditional:</h4>
            <p>If + Past Simple, would + infinitive</p>
            <p>If I had money, I would buy a car.</p>
            <h4>Third Conditional:</h4>
            <p>If + Past Perfect, would have + V3</p>
            <p>If I had studied, I would have passed.</p>`,
            examples: ['Complete the conditional', 'Translate the sentence'],
            completed: false,
            difficulty: 'hard',
            estimatedTime: 45,
            lessons: [
              {
                id: 'eng10-s1-t1-l1',
                title: 'Second Conditional',
                content: `<div class="lesson">
                  <h2>🎯 Second Conditional</h2>
                  <h3>Structure:</h3>
                  <p>If + Past Simple, would + verb</p>
                  <h3>Usage:</h3>
                  <p>Imaginary situations in present/future</p>
                  <h3>Examples:</h3>
                  <p>If I were rich, I would travel the world.</p>
                  <p>If she knew the answer, she would tell us.</p>
                  <div class="tip">💡 Use "were" for all persons in formal English!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 20
              }
            ]
          },
          {
            id: 'eng10-s1-t2',
            title: 'Passive Voice',
            description: 'Страдательный залог',
            theory: `<h3>Passive Voice</h3>
            <h4>Formation:</h4>
            <p>Subject + to be + V3 (past participle)</p>
            <h4>Tenses:</h4>
            <ul>
              <li><b>Present Simple:</b> is/am/are + V3</li>
              <li><b>Past Simple:</b> was/were + V3</li>
              <li><b>Future Simple:</b> will be + V3</li>
              <li><b>Present Perfect:</b> have/has been + V3</li>
            </ul>
            <h4>Examples:</h4>
            <ul>
              <li>Active: They build houses.</li>
              <li>Passive: Houses are built.</li>
            </ul>`,
            examples: ['Transform to passive', 'Identify the tense'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 40,
            lessons: [
              {
                id: 'eng10-s1-t2-l1',
                title: 'Passive formation',
                content: `<div class="lesson">
                  <h2>📝 Passive Voice</h2>
                  <h3>Formula:</h3>
                  <p>Object + be + V3</p>
                  <h3>Examples:</h3>
                  <p>Active: Tom wrote a letter.</p>
                  <p>Passive: A letter was written by Tom.</p>
                  <div class="tip">💡 Use "by" to mention the agent!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              }
            ]
          }
        ]
      },
      {
        id: 'eng10-s2',
        title: 'Vocabulary',
        description: 'Advanced vocabulary',
        order: 2,
        topics: [
          {
            id: 'eng10-s2-t1',
            title: 'Phrasal Verbs',
            description: 'Common phrasal verbs',
            theory: `<h3>Phrasal Verbs</h3>
            <h4>Common phrasal verbs:</h4>
            <ul>
              <li><b>give up</b> — отказаться</li>
              <li><b>take off</b> — взлететь, снимать</li>
              <li><b>put on</b> — надевать</li>
              <li><b>turn up</b> — появляться, усиливать</li>
              <li><b>look after</b> — присматривать</li>
              <li><b>run out of</b> — заканчиваться</li>
              <li><b>get along</b> — ладить</li>
              <li><b>bring up</b> — воспитывать</li>
            </ul>`,
            examples: ['Fill in the phrasal verb', 'Translate the sentence'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 35,
            lessons: [
              {
                id: 'eng10-s2-t1-l1',
                title: 'Essential phrasal verbs',
                content: `<div class="lesson">
                  <h2>📚 Phrasal Verbs</h2>
                  <h3>Give up = quit:</h3>
                  <p>He gave up smoking.</p>
                  <h3>Run out of:</h3>
                  <p>We've run out of milk.</p>
                  <h3>Look after:</h3>
                  <p>Can you look after my cat?</p>
                  <div class="tip">💡 Context determines the meaning!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              }
            ]
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'eng10-q1',
        question: 'Which conditional expresses imaginary situations?',
        options: ['Zero', 'First', 'Second', 'Third'],
        correctAnswer: 2,
        explanation: 'Second Conditional expresses imaginary/unreal situations.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'eng10-q2',
        question: 'What is the passive form of "They built a house"?',
        options: ['A house is built', 'A house was built', 'A house will be built', 'A house has been built'],
        correctAnswer: 1,
        explanation: 'Past Simple passive: was/were + V3.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'eng10-q3',
        question: 'Which conditional is used for real situations?',
        options: ['Zero', 'First', 'Second', 'Third'],
        correctAnswer: 1,
        explanation: 'First Conditional is used for real/possible future situations.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'eng10-q4',
        question: 'What does "give up" mean?',
        options: ['Start', 'Quit', 'Continue', 'Improve'],
        correctAnswer: 1,
        explanation: '"Give up" means to quit or stop doing something.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'eng10-q5',
        question: 'Which sentence is in Present Perfect?',
        options: ['I saw him yesterday', 'I have seen him', 'I will see him', 'I see him'],
        correctAnswer: 1,
        explanation: 'Present Perfect: have/has + V3.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'eng10-q6',
        question: 'What is the passive of "She writes letters"?',
        options: ['Letters are written by her', 'Letters is written by her', 'Letters were written by her', 'Letters will be written by her'],
        correctAnswer: 0,
        explanation: 'Present Simple passive: am/is/are + V3.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'eng10-q7',
        question: 'Which phrasal verb means "appear"?',
        options: ['Give up', 'Turn up', 'Put on', 'Look after'],
        correctAnswer: 1,
        explanation: '"Turn up" can mean to appear or arrive.',
        difficulty: 'medium',
        points: 15
      }
    ]
  },

  // ==================== ОБЩЕСТВОЗНАНИЕ ====================
  {
    id: 'social10',
    title: 'Обществознание',
    icon: <Users className="w-5 h-5" />,
    color: 'text-emerald-400',
    gradient: 'from-emerald-500 to-teal-500',
    description: 'Человек и общество',
    sections: [
      {
        id: 'soc10-s1',
        title: 'Человек',
        description: 'Природа человека',
        order: 1,
        topics: [
          {
            id: 'soc10-s1-t1',
            title: 'Человек как биосоциальное существо',
            description: 'Природа и общество',
            theory: `<h3>Человек</h3>
            <h4>Биологическая природа:</h4>
            <ul>
              <li>Анатомические особенности</li>
              <li>Инстинкты и рефлексы</li>
              <li>Генетическая наследственность</li>
            </ul>
            <h4>Социальная природа:</h4>
            <ul>
              <li>Сознание и мышление</li>
              <li>Речь и общение</li>
              <li>Творчество и труд</li>
            </ul>
            <h4>Личность:</h4>
            <p>Человек как субъект отношений и деятельности</p>`,
            examples: ['Что такое личность?', 'Определи отличие человека от животного'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 40,
            lessons: [
              {
                id: 'soc10-s1-t1-l1',
                title: 'Индивид, личность, индивидуальность',
                content: `<div class="lesson">
                  <h2>👤 Понятия</h2>
                  <h3>Индивид:</h3>
                  <p>Представитель человеческого рода</p>
                  <h3>Личность:</h3>
                  <p>Субъект отношений и деятельности</p>
                  <h3>Индивидуальность:</h3>
                  <p>Уникальные черты человека</p>
                  <div class="tip">💡 Каждый человек — индивид, но не каждый — личность!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              }
            ]
          }
        ]
      },
      {
        id: 'soc10-s2',
        title: 'Общество',
        description: 'Социальные институты',
        order: 2,
        topics: [
          {
            id: 'soc10-s2-t1',
            title: 'Социальные институты',
            description: 'Основные институты общества',
            theory: `<h3>Социальные институты</h3>
            <h4>Определение:</h4>
            <p>Исторически сложившиеся формы организации деятельности людей</p>
            <h4>Основные институты:</h4>
            <ul>
              <li><b>Семья</b> — воспроизводство поколений</li>
              <li><b>Образование</b> — передача знаний</li>
              <li><b>Религия</b> — духовные потребности</li>
              <li><b>Государство</b> — управление, власть</li>
              <li><b>Экономика</b> — производство благ</li>
            </ul>`,
            examples: ['Назови функции семьи', 'Определи функции образования'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 40,
            lessons: [
              {
                id: 'soc10-s2-t1-l1',
                title: 'Функции институтов',
                content: `<div class="lesson">
                  <h2>🏛️ Социальные институты</h2>
                  <h3>Функции семьи:</h3>
                  <ul>
                    <li>Репродуктивная</li>
                    <li>Воспитательная</li>
                    <li>Эмоциональная</li>
                  </ul>
                  <h3>Функции образования:</h3>
                  <ul>
                    <li>Образовательная</li>
                    <li>Социализация</li>
                  </ul>
                  <div class="tip">💡 Институты обеспечивают стабильность общества!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              }
            ]
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'soc10-q1',
        question: 'Что такое личность?',
        options: [
          'Представитель человеческого рода',
          'Субъект отношений и деятельности',
          'Биологический организм',
          'Генетический набор'
        ],
        correctAnswer: 1,
        explanation: 'Личность — человек как субъект отношений и сознательной деятельности.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'soc10-q2',
        question: 'Какой институт отвечает за воспроизводство поколений?',
        options: ['Государство', 'Образование', 'Семья', 'Религия'],
        correctAnswer: 2,
        explanation: 'Семья выполняет репродуктивную функцию.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'soc10-q3',
        question: 'Что такое индивид?',
        options: ['Субъект деятельности', 'Представитель человеческого рода', 'Уникальная личность', 'Социальная роль'],
        correctAnswer: 1,
        explanation: 'Индивид — представитель человеческого рода, отдельный человек.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'soc10-q4',
        question: 'Какой институт отвечает за передачу знаний?',
        options: ['Семья', 'Образование', 'Религия', 'Экономика'],
        correctAnswer: 1,
        explanation: 'Образование — институт, отвечающий за передачу знаний и социализацию.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'soc10-q5',
        question: 'Что отличает человека от животного?',
        options: ['Инстинкты', 'Сознание и речь', 'Биологические потребности', 'Дыхание'],
        correctAnswer: 1,
        explanation: 'Сознание, речь, творчество — отличительные черты человека.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'soc10-q6',
        question: 'Что такое индивидуальность?',
        options: ['Представитель рода', 'Субъект деятельности', 'Уникальные черты человека', 'Социальный статус'],
        correctAnswer: 2,
        explanation: 'Индивидуальность — уникальные, неповторимые черты человека.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'soc10-q7',
        question: 'Какая функция не относится к семье?',
        options: ['Репродуктивная', 'Воспитательная', 'Производственная', 'Эмоциональная'],
        correctAnswer: 2,
        explanation: 'Производственная функция — не основная функция семьи.',
        difficulty: 'medium',
        points: 15
      }
    ]
  },

  // ==================== ГЕОГРАФИЯ ====================
  {
    id: 'geography10',
    title: 'География',
    icon: <Globe className="w-5 h-5" />,
    color: 'text-teal-400',
    gradient: 'from-teal-500 to-cyan-500',
    description: 'Социально-экономическая география мира',
    sections: [
      {
        id: 'geo10-s1',
        title: 'Население мира',
        description: 'Демография и расселение',
        order: 1,
        topics: [
          {
            id: 'geo10-s1-t1',
            title: 'Численность и воспроизводство населения',
            description: 'Демографические процессы',
            theory: `<h3>Население мира</h3>
            <h4>Численность:</h4>
            <p>На 2024 год — более 8 млрд человек</p>
            <h4>Типы воспроизводства:</h4>
            <ul>
              <li><b>Первый тип</b> — низкая рождаемость и смертность (Европа, Северная Америка)</li>
              <li><b>Второй тип</b> — высокая рождаемость, снижающаяся смертность (Африка, Азия)</li>
            </ul>
            <h4>Демографическая политика:</h4>
            <ul>
              <li><b>Антинаталистическая</b> — ограничение рождаемости (Китай, Индия)</li>
              <li><b>Пронаталистическая</b> — стимулирование рождаемости (Франция, Россия)</li>
            </ul>
            <h4>Демографический переход:</h4>
            <p>Переход от традиционного типа воспроизводства к современному</p>`,
            examples: ['Определи тип воспроизводства', 'Проанализируй демографическую политику'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 45,
            lessons: [
              {
                id: 'geo10-s1-t1-l1',
                title: 'Демографический переход',
                content: `<div class="lesson">
                  <h2>🌍 Демографический переход</h2>
                  <h3>Фазы перехода:</h3>
                  <ul>
                    <li>1 фаза: высокая рождаемость и смертность</li>
                    <li>2 фаза: высокая рождаемость, снижение смертности</li>
                    <li>3 фаза: снижение рождаемости и смертности</li>
                    <li>4 фаза: низкая рождаемость и смертность</li>
                  </ul>
                  <h3>Примеры:</h3>
                  <p>Китай — 2-3 фаза, Германия — 4 фаза, Нигер — 1-2 фаза</p>
                  <div class="tip">💡 Демографический взрыв — следствие 2-й фазы перехода!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 20
              }
            ]
          },
          {
            id: 'geo10-s1-t2',
            title: 'Миграции населения',
            description: 'Виды и причины миграций',
            theory: `<h3>Миграции</h3>
            <h4>Виды миграций:</h4>
            <ul>
              <li><b>Внутренние</b> — внутри страны</li>
              <li><b>Внешние</b> — между странами</li>
              <li><b>Эмиграция</b> — выезд из страны</li>
              <li><b>Иммиграция</b> — въезд в страну</li>
            </ul>
            <h4>Причины миграций:</h4>
            <ul>
              <li><b>Экономические</b> — поиск работы</li>
              <li><b>Политические</b> — преследования</li>
              <li><b>Экологические</b> — катастрофы</li>
              <li><b>Религиозные</b> — вера</li>
            </ul>
            <h4>Центры притяжения:</h4>
            <p>США, Западная Европа, Персидский залив</p>`,
            examples: ['Определи вид миграции', 'Назови причины миграции'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 40,
            lessons: [
              {
                id: 'geo10-s1-t2-l1',
                title: 'Миграционные потоки',
                content: `<div class="lesson">
                  <h2>🚶 Миграции</h2>
                  <h3>Главные направления:</h3>
                  <ul>
                    <li>Латинская Америка → США</li>
                    <li>Восточная Европа → Западная Европа</li>
                    <li>Южная Азия → Персидский залив</li>
                    <li>Африка → Европа</li>
                  </ul>
                  <h3>Последствия:</h3>
                  <p>Изменение демографической структуры, культурный обмен, трудовые ресурсы</p>
                  <div class="tip">💡 Миграция — важнейший фактор изменения населения!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              }
            ]
          }
        ]
      },
      {
        id: 'geo10-s2',
        title: 'Мировое хозяйство',
        description: 'Экономическая география',
        order: 2,
        topics: [
          {
            id: 'geo10-s2-t1',
            title: 'Международное разделение труда',
            description: 'МРТ и специализация стран',
            theory: `<h3>Международное разделение труда (МРТ)</h3>
            <h4>Сущность:</h4>
            <p>Специализация стран на производстве определённых товаров и услуг</p>
            <h4>Факторы МРТ:</h4>
            <ul>
              <li><b>Природные</b> — ресурсы, климат</li>
              <li><b>Экономические</b> — капитал, технологии</li>
              <li><b>Социальные</b> — трудовые ресурсы</li>
            </ul>
            <h4>Показатели:</h4>
            <ul>
              <li><b>Экспорт</b> — вывоз товаров</li>
              <li><b>Импорт</b> — ввоз товаров</li>
              <li><b>Сальдо</b> — разница экспорта и импорта</li>
            </ul>
            <h4>Международные организации:</h4>
            <p>ВТО, ЕС, НАФТА, АСЕАН, БРИКС</p>`,
            examples: ['Определи специализацию страны', 'Объясни причины МРТ'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 45,
            lessons: [
              {
                id: 'geo10-s2-t1-l1',
                title: 'Специализация стран',
                content: `<div class="lesson">
                  <h2>🏭 МРТ</h2>
                  <h3>Примеры специализации:</h3>
                  <ul>
                    <li>Саудовская Аравия — нефть</li>
                    <li>Китай — производство товаров</li>
                    <li>Япония — автомобили, электроника</li>
                    <li>Бразилия — кофе, соя</li>
                    <li>Швейцария — часы, банки</li>
                  </ul>
                  <div class="tip">💡 Глобализация усиливает МРТ!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              }
            ]
          },
          {
            id: 'geo10-s2-t2',
            title: 'Топливно-энергетический комплекс',
            description: 'Энергетика мира',
            theory: `<h3>Энергетика мира</h3>
            <h4>Виды энергоресурсов:</h4>
            <ul>
              <li><b>Нефть</b> — главный энергоресурс (30%)</li>
              <li><b>Природный газ</b> — экологичное топливо (24%)</li>
              <li><b>Уголь</b> — самый распространённый (27%)</li>
              <li><b>Гидроэнергия</b> — возобновляемая (7%)</li>
              <li><b>Атомная энергия</b> — 4%</li>
            </ul>
            <h4>Главные нефтедобывающие страны:</h4>
            <p>США, Саудовская Аравия, Россия, Ирак, Канада</p>
            <h4>Энергопотребление:</h4>
            <p>США, Китай, Россия — лидеры потребления</p>`,
            examples: ['Назови главных экспортёров нефти', 'Сравни виды энергетики'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 40,
            lessons: [
              {
                id: 'geo10-s2-t2-l1',
                title: 'Нефтяная промышленность',
                content: `<div class="lesson">
                  <h2>🛢️ Нефть</h2>
                  <h3>Главные районы добычи:</h3>
                  <ul>
                    <li>Ближний Восток (Персидский залив)</li>
                    <li>Северное море</li>
                    <li>Мексиканский залив</li>
                    <li>Западная Сибирь</li>
                  </ul>
                  <h3>ОПЕК:</h3>
                  <p>Организация стран-экспортёров нефти</p>
                  <div class="tip">💡 "Чёрное золото" — главный энергоресурс мира!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              }
            ]
          }
        ]
      },
      {
        id: 'geo10-s3',
        title: 'Глобальные проблемы',
        description: 'Проблемы человечества',
        order: 3,
        topics: [
          {
            id: 'geo10-s3-t1',
            title: 'Экологические проблемы',
            description: 'Глобальные экологические вызовы',
            theory: `<h3>Экологические проблемы</h3>
            <h4>Глобальное потепление:</h4>
            <ul>
              <li>Причина — парниковые газы (CO₂)</li>
              <li>Последствия — таяние ледников, подъём уровня океана</li>
            </ul>
            <h4>Другие проблемы:</h4>
            <ul>
              <li><b>Истощение ресурсов</b> — нефть, газ, леса</li>
              <li><b>Загрязнение океана</b> — пластик, нефтяные разливы</li>
              <li><b>Опустынивание</b> — Сахель, Центральная Азия</li>
              <li><b>Сокращение биоразнообразия</b></li>
            </ul>
            <h4>Пути решения:</h4>
            <p>Киотский протокол, Парижское соглашение, "Зелёные технологии"</p>`,
            examples: ['Назови причины потепления', 'Предложи решение экологической проблемы'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 40,
            lessons: [
              {
                id: 'geo10-s3-t1-l1',
                title: 'Парниковый эффект',
                content: `<div class="lesson">
                  <h2>🌡️ Глобальное потепление</h2>
                  <h3>Механизм:</h3>
                  <p>CO₂ задерживает тепло в атмосфере</p>
                  <h3>Источники CO₂:</h3>
                  <ul>
                    <li>Сжигание ископаемого топлива</li>
                    <li>Вырубка лесов</li>
                    <li>Промышленность</li>
                  </ul>
                  <h3>Последствия:</h3>
                  <p>К 2100 году — повышение на 1.5-4°C</p>
                  <div class="tip">💡 Углеродный след — вклад каждого человека!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              }
            ]
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'geo10-q1',
        question: 'Какой тип воспроизводства характерен для Европы?',
        options: ['Высокая рождаемость и смертность', 'Низкая рождаемость и смертность', 'Высокая рождаемость, низкая смертность', 'Средние показатели'],
        correctAnswer: 1,
        explanation: 'Для Европы характерен первый тип воспроизводства — низкая рождаемость и смертность.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'geo10-q2',
        question: 'Что такое эмиграция?',
        options: ['Въезд в страну', 'Выезд из страны', 'Внутренняя миграция', 'Сезонная миграция'],
        correctAnswer: 1,
        explanation: 'Эмиграция — выезд из страны на постоянное место жительства.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'geo10-q3',
        question: 'Какая страна является крупнейшим производителем нефти?',
        options: ['Саудовская Аравия', 'Россия', 'США', 'Китай'],
        correctAnswer: 2,
        explanation: 'США — крупнейший производитель нефти в мире.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'geo10-q4',
        question: 'Что такое МРТ?',
        options: ['Международный рынок труда', 'Международное разделение труда', 'Мировой рынок товаров', 'Международная регистрация труда'],
        correctAnswer: 1,
        explanation: 'МРТ — Международное разделение труда, специализация стран.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'geo10-q5',
        question: 'Какая организация объединяет страны-экспортёры нефти?',
        options: ['ВТО', 'ОПЕК', 'ЕС', 'НАФТА'],
        correctAnswer: 1,
        explanation: 'ОПЕК — Организация стран-экспортёров нефти.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'geo10-q6',
        question: 'Какой газ является главной причиной парникового эффекта?',
        options: ['Азот', 'Кислород', 'Углекислый газ (CO₂)', 'Водород'],
        correctAnswer: 2,
        explanation: 'CO₂ (углекислый газ) — главный парниковый газ.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'geo10-q7',
        question: 'Что такое сальдо внешней торговли?',
        options: ['Сумма экспорта и импорта', 'Разница экспорта и импорта', 'Только экспорт', 'Только импорт'],
        correctAnswer: 1,
        explanation: 'Сальдо — разница между экспортом и импортом.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'geo10-q8',
        question: 'Какое соглашение направлено на борьбу с изменением климата?',
        options: ['Киотский протокол', 'Вашингтонское соглашение', 'Лондонский договор', 'Берлинский пакт'],
        correctAnswer: 0,
        explanation: 'Киотский протокол — международное соглашение по сокращению выбросов парниковых газов.',
        difficulty: 'medium',
        points: 15
      }
    ]
  },

  // ==================== ФИЗИЧЕСКАЯ КУЛЬТУРА ====================
  {
    id: 'pe10',
    title: 'Физическая культура',
    icon: <Target className="w-5 h-5" />,
    color: 'text-orange-400',
    gradient: 'from-orange-500 to-red-500',
    description: 'Физическое совершенствование',
    sections: [
      {
        id: 'pe10-s1',
        title: 'Физкультурно-оздоровительная деятельность',
        description: 'Здоровый образ жизни',
        order: 1,
        topics: [
          {
            id: 'pe10-s1-t1',
            title: 'Здоровый образ жизни',
            description: 'Составляющие ЗОЖ',
            theory: `<h3>Здоровый образ жизни</h3>
            <h4>Основные компоненты:</h4>
            <ul>
              <li><b>Двигательная активность</b> — минимум 10000 шагов в день</li>
              <li><b>Правильное питание</b> — баланс белков, жиров, углеводов</li>
              <li><b>Режим дня</b> — сон 7-9 часов</li>
              <li><b>Отказ от вредных привычек</b> — курение, алкоголь</li>
              <li><b>Закаливание</b> — укрепление иммунитета</li>
            </ul>
            <h4>Индекс массы тела (ИМТ):</h4>
            <p>ИМТ = вес (кг) / рост² (м)</p>
            <ul>
              <li>Норма: 18.5-25</li>
              <li>Избыточный вес: 25-30</li>
              <li>Ожирение: более 30</li>
            </ul>`,
            examples: ['Рассчитай ИМТ', 'Составь план ЗОЖ'],
            completed: false,
            difficulty: 'easy',
            estimatedTime: 30,
            lessons: [
              {
                id: 'pe10-s1-t1-l1',
                title: 'Компоненты ЗОЖ',
                content: `<div class="lesson">
                  <h2>💪 Здоровый образ жизни</h2>
                  <h3>Четыре кита здоровья:</h3>
                  <ul>
                    <li>🏃 Движение — основа жизни</li>
                    <li>🥗 Питание — топливо организма</li>
                    <li>😴 Сон — восстановление сил</li>
                    <li>🧘 Психическое здоровье</li>
                  </ul>
                  <div class="tip">💡 Здоровье — не всё, но всё без здоровья — ничто!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              }
            ]
          },
          {
            id: 'pe10-s1-t2',
            title: 'Физическая нагрузка',
            description: 'Принципы тренировок',
            theory: `<h3>Принципы тренировки</h3>
            <h4>Основные принципы:</h4>
            <ul>
              <li><b>Постепенность</b> — плавное увеличение нагрузки</li>
              <li><b>Систематичность</b> — регулярные занятия</li>
              <li><b>Индивидуализация</b> — учёт особенностей организма</li>
              <li><b>Наглядность</b> — правильная техника</li>
            </ul>
            <h4>Пульсовые зоны:</h4>
            <ul>
              <li><b>Оздоровительная</b> — 50-60% от макс. пульса</li>
              <li><b>Аэробная</b> — 60-70%</li>
              <li><b>Силовая</b> — 70-80%</li>
              <li><b>Анаэробная</b> — 80-90%</li>
            </ul>
            <h4>Максимальный пульс:</h4>
            <p>ЧСС макс = 220 - возраст</p>`,
            examples: ['Рассчитай пульсовые зоны', 'Определи зону тренировки'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 35,
            lessons: [
              {
                id: 'pe10-s1-t2-l1',
                title: 'Пульсовые зоны',
                content: `<div class="lesson">
                  <h2>💓 Пульсовые зоны</h2>
                  <h3>Для 17 лет (макс. пульс = 203):</h3>
                  <ul>
                    <li>Зона 1 (101-122) — разминка</li>
                    <li>Зона 2 (122-142) — жиросжигание</li>
                    <li>Зона 3 (142-162) — аэробная</li>
                    <li>Зона 4 (162-183) — анаэробная</li>
                  </ul>
                  <div class="tip">💡 Оптимальная зона для здоровья — 2-3 зона!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              }
            ]
          }
        ]
      },
      {
        id: 'pe10-s2',
        title: 'Спортивная деятельность',
        description: 'Виды спорта',
        order: 2,
        topics: [
          {
            id: 'pe10-s2-t1',
            title: 'Лёгкая атлетика',
            description: 'Королева спорта',
            theory: `<h3>Лёгкая атлетика</h3>
            <h4>Виды:</h4>
            <ul>
              <li><b>Бег</b> — спринт (100м, 200м), средние дистанции (800м, 1500м), длинные (5000м, марафон)</li>
              <li><b>Прыжки</b> — в длину, в высоту, тройной, с шестом</li>
              <li><b>Метания</b> — копьё, диск, молот, ядро</li>
              <li><b>Многоборья</b> — десятиборье, семиборье</li>
            </ul>
            <h4>Мировые рекорды (мужчины):</h4>
            <ul>
              <li>100м — 9.58 с (Усэйн Болт)</li>
              <li>Прыжок в длину — 8.95 м</li>
              <li>Марафон — 2:01:39</li>
            </ul>`,
            examples: ['Изучи технику бега', 'Рассчитай темп бега'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 35,
            lessons: [
              {
                id: 'pe10-s2-t1-l1',
                title: 'Техника бега',
                content: `<div class="lesson">
                  <h2>🏃 Техника бега</h2>
                  <h3>Основные элементы:</h3>
                  <ul>
                    <li>Постановка стопы: с носка</li>
                    <li>Работа рук: согнуты под 90°</li>
                    <li>Корпус: небольшой наклон вперёд</li>
                    <li>Дыхание: ритмичное, 2-2 или 3-3</li>
                  </ul>
                  <div class="tip">💡 Правильная техника — залог успеха!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              }
            ]
          },
          {
            id: 'pe10-s2-t2',
            title: 'Игровые виды спорта',
            description: 'Командные игры',
            theory: `<h3>Командные игры</h3>
            <h4>Футбол:</h4>
            <ul>
              <li>11 игроков в команде</li>
              <li>Матч — 2 тайма по 45 минут</li>
              <li>Поле — 100-110 × 64-75 м</li>
            </ul>
            <h4>Баскетбол:</h4>
            <ul>
              <li>5 игроков в команде</li>
              <li>Матч — 4 четверти по 10 минут</li>
              <li>Кольцо на высоте 3.05 м</li>
            </ul>
            <h4>Волейбол:</h4>
            <ul>
              <li>6 игроков в команде</li>
              <li>Партия до 25 очков</li>
              <li>Сетка высотой 2.43 м (мужчины)</li>
            </ul>`,
            examples: ['Изучи правила игры', 'Разучи тактику'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 35,
            lessons: [
              {
                id: 'pe10-s2-t2-l1',
                title: 'Правила баскетбола',
                content: `<div class="lesson">
                  <h2>🏀 Баскетбол</h2>
                  <h3>Основные правила:</h3>
                  <ul>
                    <li>Ведение мяча — только руками</li>
                    <li>3 шага с мячом — нарушение</li>
                    <li>24 секунды на атаку</li>
                    <li>Штрафной бросок — 1 очко</li>
                    <li>Трёхочковый бросок — из-за дуги</li>
                  </ul>
                  <div class="tip">💡 "Двойное ведение" — нарушение!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              }
            ]
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'pe10-q1',
        question: 'Какова норма ИМТ?',
        options: ['15-18', '18.5-25', '25-30', '30-35'],
        correctAnswer: 1,
        explanation: 'Нормальный ИМТ — от 18.5 до 25.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'pe10-q2',
        question: 'Как рассчитать максимальный пульс?',
        options: ['200 - возраст', '220 - возраст', '180 - возраст', '240 - возраст'],
        correctAnswer: 1,
        explanation: 'Максимальный пульс = 220 - возраст.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'pe10-q3',
        question: 'Сколько игроков в команде в баскетболе?',
        options: ['4', '5', '6', '7'],
        correctAnswer: 1,
        explanation: 'В баскетболе 5 игроков в команде на площадке.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'pe10-q4',
        question: 'Какой принцип тренировки означает плавное увеличение нагрузки?',
        options: ['Систематичность', 'Постепенность', 'Индивидуализация', 'Наглядность'],
        correctAnswer: 1,
        explanation: 'Постепенность — плавное увеличение нагрузки.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'pe10-q5',
        question: 'Сколько длится футбольный матч?',
        options: ['60 минут', '80 минут', '90 минут', '100 минут'],
        correctAnswer: 2,
        explanation: 'Футбольный матч — 2 тайма по 45 минут (90 минут).',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'pe10-q6',
        question: 'Какая высота баскетбольного кольца?',
        options: ['2.5 м', '2.85 м', '3.05 м', '3.25 м'],
        correctAnswer: 2,
        explanation: 'Баскетбольное кольцо на высоте 3.05 м.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'pe10-q7',
        question: 'Какой пульс оптимален для жиросжигания?',
        options: ['50-60% от макс.', '60-70% от макс.', '70-80% от макс.', '80-90% от макс.'],
        correctAnswer: 1,
        explanation: 'Зона жиросжигания — 60-70% от максимального пульса.',
        difficulty: 'medium',
        points: 15
      }
    ]
  },

  // ==================== ОБЖ ====================
  {
    id: 'safety10',
    title: 'ОБЖ',
    icon: <Shield className="w-5 h-5" />,
    color: 'text-red-400',
    gradient: 'from-red-500 to-orange-500',
    description: 'Безопасность жизнедеятельности',
    sections: [
      {
        id: 'saf10-s1',
        title: 'Обеспечение личной безопасности',
        description: 'Безопасность в повседневной жизни',
        order: 1,
        topics: [
          {
            id: 'saf10-s1-t1',
            title: 'Пожарная безопасность',
            description: 'Профилактика пожаров',
            theory: `<h3>Пожарная безопасность</h3>
            <h4>Причины пожаров:</h4>
            <ul>
              <li><b>Электропроводка</b> — неисправная проводка, перегрузки</li>
              <li><b>Бытовые приборы</b> — оставленные без присмотра</li>
              <li><b>Открытый огонь</b> — курение, свечи, костры</li>
            </ul>
            <h4>Действия при пожаре:</h4>
            <ol>
              <li>Позвонить 101 или 112</li>
              <li>Вывести людей из помещения</li>
              <li>Отключить электричество</li>
              <li>Применить огнетушитель</li>
              <li>Покинуть помещение (при угрозе)</li>
            </ol>
            <h4>Типы огнетушителей:</h4>
            <ul>
              <li><b>ОП</b> — порошковый (универсальный)</li>
              <li><b>ОУ</b> — углекислотный (электрооборудование)</li>
              <li><b>ОВП</b> — воздушно-пенный</li>
            </ul>`,
            examples: ['Изучи правила эвакуации', 'Выбери огнетушитель'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 35,
            lessons: [
              {
                id: 'saf10-s1-t1-l1',
                title: 'Действия при пожаре',
                content: `<div class="lesson">
                  <h2>🔥 Пожар</h2>
                  <h3>Правила эвакуации:</h3>
                  <ul>
                    <li>Двигаться пригнувшись (дым снизу)</li>
                    <li>Дышать через мокрую ткань</li>
                    <li>Не пользоваться лифтом!</li>
                    <li>Закрывать двери за собой</li>
                  </ul>
                  <h3>Телефоны:</h3>
                  <p>101 — пожарная охрана, 112 — экстренные службы</p>
                  <div class="tip">💡 В дыму — на четвереньках! Дым поднимается вверх.</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              }
            ]
          },
          {
            id: 'saf10-s1-t2',
            title: 'Первая помощь',
            description: 'Оказание первой помощи',
            theory: `<h3>Первая помощь</h3>
            <h4>Последовательность действий:</h4>
            <ol>
              <li><b>Оценить обстановку</b> — безопасность</li>
              <li><b>Проверить сознание</b> — окликнуть, потормошить</li>
              <li><b>Проверить дыхание</b> — 10 секунд</li>
              <li><b>Вызвать помощь</b> — 103 или 112</li>
            </ol>
            <h4>Сердечно-лёгочная реанимация (СЛР):</h4>
            <ul>
              <li>30 нажатий на грудную клетку</li>
              <li>2 вдоха</li>
              <li>Глубина нажатия — 5-6 см</li>
              <li>Темп — 100-120 в минуту</li>
            </ul>
            <h4>При кровотечении:</h4>
            <ul>
              <li><b>Артериальное</b> — жгут выше раны</li>
              <li><b>Венозное</b> — давящая повязка</li>
            </ul>`,
            examples: ['Освой СЛР', 'Наложи жгут'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 45,
            lessons: [
              {
                id: 'saf10-s1-t2-l1',
                title: 'СЛР',
                content: `<div class="lesson">
                  <h2>❤️ Сердечно-лёгочная реанимация</h2>
                  <h3>Алгоритм:</h3>
                  <ul>
                    <li>Проверь сознание и дыхание</li>
                    <li>Вызови скорую</li>
                    <li>Начни непрямой массаж сердца</li>
                    <li>30 нажатий + 2 вдоха</li>
                  </ul>
                  <h3>Точка нажатия:</h3>
                  <p>Центр грудной клетки, на 2 пальца выше мечевидного отростка</p>
                  <div class="tip">💡 "Staying Alive" — ритм для СЛР!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 20
              }
            ]
          }
        ]
      },
      {
        id: 'saf10-s2',
        title: 'Чрезвычайные ситуации',
        description: 'Действия в ЧС',
        order: 2,
        topics: [
          {
            id: 'saf10-s2-t1',
            title: 'Природные чрезвычайные ситуации',
            description: 'Стихийные бедствия',
            theory: `<h3>Природные ЧС</h3>
            <h4>Землетрясения:</h4>
            <ul>
              <li>В помещении: встать в дверной проём, под стол</li>
              <li>На улице: удалиться от зданий</li>
              <li>Не пользоваться лифтом</li>
            </ul>
            <h4>Наводнения:</h4>
            <ul>
              <li>Подняться на возвышенность</li>
              <li>Не пытаться переплыть поток</li>
              <li>Ждать помощи</li>
            </ul>
            <h4>Ураганы:</h4>
            <ul>
              <li>Укрыться в подвале, внутренней комнате</li>
              <li>Держаться подальше от окон</li>
            </ul>
            <h4>Шкала землетрясений:</h4>
            <p>До 4 баллов — слабое, 5-7 — сильное, 8+ — разрушительное</p>`,
            examples: ['Составь план действий', 'Определи тип ЧС'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 40,
            lessons: [
              {
                id: 'saf10-s2-t1-l1',
                title: 'Действия при землетрясении',
                content: `<div class="lesson">
                  <h2>🌍 Землетрясение</h2>
                  <h3>Правила:</h3>
                  <ul>
                    <li>Не паниковать!</li>
                    <li>Встань в дверной проём несущей стены</li>
                    <li>Или спрячься под крепкий стол</li>
                    <li>Держись подальше от окон</li>
                    <li>После толчков — покинь здание</li>
                  </ul>
                  <div class="tip">💡 Правило "Треугольника жизни" — рядом с крупными предметами!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              }
            ]
          },
          {
            id: 'saf10-s2-t2',
            title: 'Террористические угрозы',
            description: 'Действия при теракте',
            theory: `<h3>Террористические угрозы</h3>
            <h4>При обнаружении подозрительного предмета:</h4>
            <ul>
              <li>Не трогать, не двигать</li>
              <li>Отойти на безопасное расстояние</li>
              <li>Сообщить охране, полиции (102)</li>
              <li>Не пользоваться радиосвязью рядом</li>
            </ul>
            <h4>При захвате заложников:</h4>
            <ul>
              <li>Не провоцировать террористов</li>
              <li>Выполнять требования</li>
              <li>Не совершать резких движений</li>
              <li>Запомнить внешность террористов</li>
            </ul>
            <h4>Телефоны экстренных служб:</h4>
            <p>112 — единый номер, 101 — пожарные, 102 — полиция, 103 — скорая</p>`,
            examples: ['Изучи правила поведения', 'Запомни телефоны'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 35,
            lessons: [
              {
                id: 'saf10-s2-t2-l1',
                title: 'Подозрительный предмет',
                content: `<div class="lesson">
                  <h2>⚠️ Подозрительный предмет</h2>
                  <h3>Признаки взрывного устройства:</h3>
                  <ul>
                    <li>Бесхозная сумка, пакет</li>
                    <li>Провода, антенны</li>
                    <li>Звуки (тиканье, гудение)</li>
                    <li>Запах топлива, химии</li>
                  </ul>
                  <h3>Действия:</h3>
                  <p>Не трогать! Отойти! Сообщить!</p>
                  <div class="tip">💡 Минимальное расстояние — 100 метров!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              }
            ]
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'saf10-q1',
        question: 'Какой телефон для вызова пожарных?',
        options: ['102', '103', '101', '104'],
        correctAnswer: 2,
        explanation: '101 — телефон пожарной охраны.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'saf10-q2',
        question: 'Сколько нажатий делает при СЛР?',
        options: ['15', '20', '30', '40'],
        correctAnswer: 2,
        explanation: 'При СЛР делается 30 нажатий на грудную клетку.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'saf10-q3',
        question: 'Какой огнетушитель универсален?',
        options: ['ОУ', 'ОП', 'ОВП', 'ОХ'],
        correctAnswer: 1,
        explanation: 'ОП (порошковый) — универсальный огнетушитель.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'saf10-q4',
        question: 'Где укрыться при землетрясении?',
        options: ['У окна', 'В лифте', 'В дверном проёме', 'На балконе'],
        correctAnswer: 2,
        explanation: 'При землетрясении нужно встать в дверной проём несущей стены.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'saf10-q5',
        question: 'Какой единый номер экстренных служб?',
        options: ['101', '102', '103', '112'],
        correctAnswer: 3,
        explanation: '112 — единый номер экстренных служб.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'saf10-q6',
        question: 'Какое кровотечение требует наложения жгута?',
        options: ['Капиллярное', 'Венозное', 'Артериальное', 'Носовое'],
        correctAnswer: 2,
        explanation: 'Артериальное кровотечение требует наложения жгута выше раны.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'saf10-q7',
        question: 'Какое минимальное расстояние от подозрительного предмета?',
        options: ['10 м', '50 м', '100 м', '200 м'],
        correctAnswer: 2,
        explanation: 'Минимальное безопасное расстояние — 100 метров.',
        difficulty: 'medium',
        points: 15
      }
    ]
  },

  // ==================== ИЗО ====================
  {
    id: 'art10',
    title: 'ИЗО',
    icon: <Palette className="w-5 h-5" />,
    color: 'text-pink-400',
    gradient: 'from-pink-500 to-purple-500',
    description: 'Изобразительное искусство',
    sections: [
      {
        id: 'art10-s1',
        title: 'История искусства',
        description: 'Направления и стили',
        order: 1,
        topics: [
          {
            id: 'art10-s1-t1',
            title: 'Искусство XX века',
            description: 'Модернизм и авангард',
            theory: `<h3>Искусство XX века</h3>
            <h4>Основные направления:</h4>
            <ul>
              <li><b>Импрессионизм</b> — передача впечатления, света (Моне, Ренуар)</li>
              <li><b>Кубизм</b> — геометрические формы (Пикассо, Брак)</li>
              <li><b>Абстракционизм</b> — отказ от изображения реальности (Кандинский, Малевич)</li>
              <li><b>Сюрреализм</b> — мир подсознания (Дали, Магритт)</li>
              <li><b>Поп-арт</b> — массовая культура (Уорхол)</li>
            </ul>
            <h4>Русский авангард:</h4>
            <ul>
              <li>Казимир Малевич — "Чёрный квадрат"</li>
              <li>Василий Кандинский — основоположник абстракционизма</li>
              <li>Владимир Татлин — конструктивизм</li>
            </ul>`,
            examples: ['Определи стиль картины', 'Проанализируй произведение'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 40,
            lessons: [
              {
                id: 'art10-s1-t1-l1',
                title: 'Русский авангард',
                content: `<div class="lesson">
                  <h2>🎨 Русский авангард</h2>
                  <h3>Казимир Малевич:</h3>
                  <p>"Чёрный квадрат" (1915) — символ новой эпохи</p>
                  <p>Супрематизм — чистые геометрические формы</p>
                  <h3>Василий Кандинский:</h3>
                  <p>Первые абстрактные картины</p>
                  <p>"Синий всадник" — духовное в искусстве</p>
                  <div class="tip">💡 Авангард — разрыв с традицией!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              }
            ]
          }
        ]
      },
      {
        id: 'art10-s2',
        title: 'Практика изобразительного искусства',
        description: 'Техники и материалы',
        order: 2,
        topics: [
          {
            id: 'art10-s2-t1',
            title: 'Живописные техники',
            description: 'Материалы и методы',
            theory: `<h3>Живописные техники</h3>
            <h4>Виды живописи:</h4>
            <ul>
              <li><b>Акварель</b> — прозрачные краски, работа с водой</li>
              <li><b>Гуашь</b> — кроющие краски, яркие цвета</li>
              <li><b>Масло</b> — классическая техника, многослойность</li>
              <li><b>Акрил</b> — современный материал, быстро сохнет</li>
              <li><b>Темпера</b> — историческая техника (иконы)</li>
            </ul>
            <h4>Основные приёмы:</h4>
            <ul>
              <li><b>Лессировка</b> — тонкие прозрачные слои</li>
              <li><b>Алла прима</b> — работа по сырому, за один раз</li>
              <li><b>Смешивание</b> — получение новых оттенков</li>
            </ul>`,
            examples: ['Освой технику акварели', 'Создай цветовую растяжку'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 40,
            lessons: [
              {
                id: 'art10-s2-t1-l1',
                title: 'Акварель',
                content: `<div class="lesson">
                  <h2>💧 Акварель</h2>
                  <h3>Особенности:</h3>
                  <ul>
                    <li>Прозрачность красок</li>
                    <li>Работа "по-сырому" и "по-сухому"</li>
                    <li>Резерваж — сохранение белого</li>
                  </ul>
                  <h3>Техники:</h3>
                  <ul>
                    <li>Заливка — сплошное покрытие</li>
                    <li>Градиент — плавный переход цвета</li>
                    <li>Смачивание бумаги</li>
                  </ul>
                  <div class="tip">💡 В акварели белый цвет — это бумага!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              }
            ]
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'art10-q1',
        question: 'Кто автор "Чёрного квадрата"?',
        options: ['Кандинский', 'Пикассо', 'Малевич', 'Дали'],
        correctAnswer: 2,
        explanation: '"Чёрный квадрат" создал Казимир Малевич в 1915 году.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'art10-q2',
        question: 'Какое направление изображает мир подсознания?',
        options: ['Кубизм', 'Сюрреализм', 'Импрессионизм', 'Поп-арт'],
        correctAnswer: 1,
        explanation: 'Сюрреализм изображает мир снов и подсознания (Дали, Магритт).',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'art10-q3',
        question: 'Какая техника использует прозрачные краски?',
        options: ['Гуашь', 'Масло', 'Акварель', 'Акрил'],
        correctAnswer: 2,
        explanation: 'Акварель — техника прозрачных водорастворимых красок.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'art10-q4',
        question: 'Кто основоположник абстракционизма?',
        options: ['Малевич', 'Пикассо', 'Кандинский', 'Уорхол'],
        correctAnswer: 2,
        explanation: 'Василий Кандинский — основоположник абстрактного искусства.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'art10-q5',
        question: 'Что такое лессировка?',
        options: ['Работа по сырому', 'Тонкие прозрачные слои', 'Геометрические формы', 'Резкие контрасты'],
        correctAnswer: 1,
        explanation: 'Лессировка — нанесение тонких прозрачных слоёв краски.',
        difficulty: 'medium',
        points: 15
      }
    ]
  },

  // ==================== МУЗЫКА ====================
  {
    id: 'music10',
    title: 'Музыка',
    icon: <Music className="w-5 h-5" />,
    color: 'text-cyan-400',
    gradient: 'from-cyan-500 to-blue-500',
    description: 'Музыкальное искусство',
    sections: [
      {
        id: 'mus10-s1',
        title: 'История музыки',
        description: 'Музыкальные эпохи',
        order: 1,
        topics: [
          {
            id: 'mus10-s1-t1',
            title: 'Музыка XX века',
            description: 'Джаз, рок, поп-музыка',
            theory: `<h3>Музыка XX века</h3>
            <h4>Джаз:</h4>
            <ul>
              <li>Возник в США, начало XX века</li>
              <li>Импровизация — основа джаза</li>
              <li>Представители: Луи Армстронг, Дюк Эллингтон</li>
            </ul>
            <h4>Рок-музыка:</h4>
            <ul>
              <li>1950-е годы — рождение рока</li>
              <li>Представители: The Beatles, Queen, Pink Floyd</li>
              <li>Жанры: хард-рок, панк, метал</li>
            </ul>
            <h4>Поп-музыка:</h4>
            <ul>
              <li>Массовая музыкальная культура</li>
              <li>Майкл Джексон — "Король поп-музыки"</li>
              <li>Мадонна, Принс, Уитни Хьюстон</li>
            </ul>
            <h4>Русская музыка:</h4>
            <p>Виктор Цой, Земфира, ДДТ, Сплин</p>`,
            examples: ['Проанализируй музыкальный жанр', 'Послушай классику джаза'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 35,
            lessons: [
              {
                id: 'mus10-s1-t1-l1',
                title: 'Джаз',
                content: `<div class="lesson">
                  <h2>🎷 Джаз</h2>
                  <h3>Особенности:</h3>
                  <ul>
                    <li>Импровизация</li>
                    <li>Синкопированный ритм</li>
                    <li>Свинг — особое чувство ритма</li>
                    <li>Блюзовые ноты</li>
                  </ul>
                  <h3>Великие джазмены:</h3>
                  <p>Луи Армстронг — труба, вокал</p>
                  <p>Дюк Эллингтон — оркестр</p>
                  <div class="tip">💡 Джаз — музыка свободы!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              }
            ]
          }
        ]
      },
      {
        id: 'mus10-s2',
        title: 'Музыкальная грамота',
        description: 'Теория музыки',
        order: 2,
        topics: [
          {
            id: 'mus10-s2-t1',
            title: 'Гармония и форма',
            description: 'Строение музыки',
            theory: `<h3>Музыкальная форма</h3>
            <h4>Простые формы:</h4>
            <ul>
              <li><b>Период</b> — простейшая форма (8 тактов)</li>
              <li><b>Двухчастная</b> — А + Б</li>
              <li><b>Трёхчастная</b> — А + Б + А</li>
            </ul>
            <h4>Сложные формы:</h4>
            <ul>
              <li><b>Рондо</b> — А + Б + А + В + А</li>
              <li><b>Вариации</b> — тема и её изменения</li>
              <li><b>Сонатная форма</b> — экспозиция, разработка, реприза</li>
            </ul>
            <h4>Гармония:</h4>
            <ul>
              <li><b>Тоника</b> — главная ступень (I)</li>
              <li><b>Доминанта</b> — V ступень</li>
              <li><b>Субдоминанта</b> — IV ступень</li>
            </ul>`,
            examples: ['Определи форму произведения', 'Построй аккорды'],
            completed: false,
            difficulty: 'hard',
            estimatedTime: 45,
            lessons: [
              {
                id: 'mus10-s2-t1-l1',
                title: 'Трёхчастная форма',
                content: `<div class="lesson">
                  <h2>🎼 Трёхчастная форма</h2>
                  <h3>Структура: А — Б — А</h3>
                  <h3>Части:</h3>
                  <ul>
                    <li>А — экспозиция (показ темы)</li>
                    <li>Б — разработка (развитие, контраст)</li>
                    <li>А — реприза (возвращение темы)</li>
                  </ul>
                  <h3>Примеры:</h3>
                  <p>Моцарт — "Турецкий марш"</p>
                  <p>Бетховен — "К Элизе"</p>
                  <div class="tip">💡 Реприза — возвращение к началу!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              }
            ]
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'mus10-q1',
        question: 'Кого называют "Королём поп-музыки"?',
        options: ['Принс', 'Майкл Джексон', 'Фредди Меркьюри', 'Элвис Пресли'],
        correctAnswer: 1,
        explanation: 'Майкл Джексон — "Король поп-музыки".',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'mus10-q2',
        question: 'Что основа джаза?',
        options: ['Ноты', 'Импровизация', 'Оркестр', 'Танец'],
        correctAnswer: 1,
        explanation: 'Импровизация — основа джаза.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'mus10-q3',
        question: 'Какая форма имеет структуру А + Б + А?',
        options: ['Рондо', 'Вариации', 'Трёхчастная', 'Сонатная'],
        correctAnswer: 2,
        explanation: 'Трёхчастная форма: А + Б + А.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'mus10-q4',
        question: 'Какая группа стала символом рок-музыки?',
        options: ['ABBA', 'The Beatles', 'Nirvana', 'Metallica'],
        correctAnswer: 1,
        explanation: 'The Beatles — символ рок-музыки.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'mus10-q5',
        question: 'Какая ступень называется тоникой?',
        options: ['I', 'III', 'IV', 'V'],
        correctAnswer: 0,
        explanation: 'Тоника — I ступень лада.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'mus10-q6',
        question: 'Какой русский рок-музыкант стал легендой?',
        options: ['Филипп Киркоров', 'Виктор Цой', 'Николай Басков', 'Дима Билан'],
        correctAnswer: 1,
        explanation: 'Виктор Цой — легенда русского рока.',
        difficulty: 'easy',
        points: 10
      }
    ]
  }
]
