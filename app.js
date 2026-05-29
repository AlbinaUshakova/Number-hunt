const ALL_NUMBERS = Array.from({ length: 99 }, (_, i) => i + 1)
const LANGUAGE_KEY = "nh-language"
const STORAGE_KEY = "nh99x_"
const RUNS_KEY = "nh99x_runs"

const loc = (en, ru = en) => ({ en, ru })

const I18N = {
  en: {
    meta: {
      description: "Number Hunt 99 is a fast browser puzzle about spotting the right numbers before your focus slips.",
      ogDescription: "Pick a rule, scan the board, and clear every number in the right order.",
      topKicker: "Focus Grid v1.0",
      rule: "RULE",
      section: "SECTION",
    },
    controls: {
      hideCategories: "Hide Categories",
      showCategories: "Show Categories",
      show: "Show",
      hide: "Hide",
      categories: "Categories",
      size: "Size",
      mode: "Mode",
      quick: "Quick",
      full: "Full",
      archive49: "GRID 49",
      archive99: "GRID 99",
      classic: "Classic",
      stable: "Stable",
      shifting: "Shifting",
      unstable: "Unstable",
      play: "Play",
      back: "← back",
      replay: "play again",
      found: "Found",
      errors: "Errors",
      time: "Time",
      find: "Find",
      penalty: "+3s",
      targets: "targets",
      modeNote: "Board state",
      archiveClearance: "levels cleared",
      archiveStatus: "PROGRESS",
      casesCleared: "LEVELS CLEARED",
      defaultMessage: "Follow the rule. Wrong picks are traps.",
    },
    statuses: {
      clear: "CLEAR",
      master: "MASTER",
      perfect: "PERFECT",
    },
    categories: {
      all: "ALL LEVELS",
      order: "ORDER",
      filter: "FILTERS",
      pattern: "PATTERNS",
      logic: "LOGIC",
      speed: "SPEED",
      sidebarAll: "All Levels",
      sidebarOrder: "Order",
      sidebarFilter: "Filters",
      sidebarPattern: "Patterns",
      sidebarLogic: "Logic",
      sidebarSpeed: "Speed",
      random: "Random",
      labelCategories: "Categories",
      labelOther: "Other",
      tagOrder: "ORDER",
      tagFilter: "FILTER",
      tagPattern: "PATTERN",
      tagLogic: "LOGIC",
      tagSpeed: "SPEED",
    },
    sections: {
      core: "Core Levels",
      filter: "Filter Levels",
      pattern: "Pattern Levels",
      logic: "Logic Levels",
      speed: "Speed Levels",
    },
    archive: {
      listMeta49: "49-number board · quick run",
      listMeta99: "99-number board · full run",
      listMetaProgress: "{cases} levels · {cleared} cleared",
      recentCases: "Recent Runs",
      archiveNotes: "Play Notes",
      operationNotes: "How It Works",
      catalogProgress: "Progress",
      operationLine1: "Follow the active rule and clear the board.",
      operationLine2: "Errors add penalty time. Stable runs preserve pace.",
      operationLine3: "Marker tip: long press one cell before commitment.",
      progressLine1: "{completion} levels cleared.",
      progressLine2: "Results update after each completed run.",
      archiveLine2: "Recommended route: start with standard order levels.",
      archiveLine3: "Try both board sizes.",
      caseLine: "[{num}] {title} · {sizeTag}",
      caseComplete: "All levels cleared",
      sizeTag49: "QUICK",
      sizeTag99: "FULL",
    },
    gameplay: {
      anyWrong: "This number does not match the rule.",
      wrongPick: "Wrong pick. Find: {expected}",
      suddenDeathLose: "Sudden Death. One mistake ended the run.",
      playAgainQuestion: "{reason} Play again?",
      finish: "{status}. {time} run. Best {best}. Next level: {nextLevel}.",
      orderedMode: "ORDER MODE · {modifier}",
      suddenDeathMode: "SUDDEN DEATH · {modifier}",
      filterMode: "FILTER MODE · {modifier}",
      patternMode: "PATTERN MODE · {modifier}",
      logicMode: "LOGIC MODE · {modifier}",
      scanMode: "RUN MODE · {modifier}",
      modifierClassicShort: "CLASSIC GRID",
      modifierShiftShort: "UNSTABLE GRID",
    },
    modifiers: {
      none: "Classic",
      shift: "Shifting Grid",
      noneShort: "Classic grid.",
      shiftShort: "Board reshuffles after hits.",
      noneDescription: "Classic keeps the board stable.",
      shiftDescription: "Shifting reshuffles the board after correct picks.",
      cardNone: "Classic",
      cardShift: "Shift",
    },
    levels: {
      ascTitle49: "1 → 49",
      ascTitle99: "1 → 99",
      ascPlay49: "Clear 1 → 49 in order.",
      ascPlay99: "Clear 1 → 99 in order.",
      ascDesc49: "Clear the board from 1 to 49 in perfect order. Order matters.",
      ascDesc99: "Clear the board from 1 to 99 in perfect order. Order matters.",
      descTitle49: "49 → 1",
      descTitle99: "99 → 1",
      descPlay49: "Clear 49 → 1 in order.",
      descPlay99: "Clear 99 → 1 in order.",
      descDesc49: "Reverse run. Clear the board from 49 down to 1. Order matters.",
      descDesc99: "Reverse run. Start high, finish low, and keep your head straight. Order matters.",
      evenTitle: "Even",
      evenDesc: "Ignore the odds. Only the even numbers count.",
      oddTitle: "Odd",
      oddDesc: "Only the odds survive. Leave the evens behind.",
      m3Title: "Multiples of 3",
      m3Desc: "Track only the numbers divisible by 3. The rest are noise.",
      m7Title: "Multiples of 7",
      m7Desc: "A tighter rule. Catch every multiple of 7 in the field.",
      d7Title: "Contains 7",
      d7Desc: "Anything hiding a 7 is live. Everything else is bait.",
      s9Title: "Digit Sum = 9",
      s9Desc: "Read the digits. Only totals of 9 belong to the rule.",
      e05Title: "Divisible by 5",
      e05Desc: "Stick to the fives. Skip the rest.",
      prmTitle: "Prime Numbers",
      prmDesc: "Spot the primes before your focus slips.",
      fiboTitle: "Fibonacci",
      fiboDesc: "Follow the Fibonacci sequence in order: each number is the sum of the previous two. Order matters.",
      squaresTitle: "Squares",
      squaresDesc: "Spot the square numbers: 1, 4, 9, 16, 25, and so on. Order does not matter.",
      adigTitle: "Ascending Digits",
      adigDesc: "Follow numbers with rising digits in order: 12, 23, 34, and onward. Order matters.",
      ddigTitle: "Descending Digits",
      ddigDesc: "Follow numbers with falling digits in order: 98, 87, 76, and onward. Order matters.",
      twinTitle: "Twin Digits",
      twinDesc: "Spot the doubles: 11, 22, 33, and the rest.",
      sdeathTitle: "Sudden Death",
      sdeathDesc: "Find the shown target. One mistake ends the run.",
      playEven: "Only even numbers count.",
      playOdd: "Ignore the evens.",
      playM3: "Only multiples of 3 survive.",
      playM7: "Track the sevens table.",
      playD7: "Catch every number with a 7.",
      playS9: "Digit sum must equal 9.",
      playE05: "Only numbers divisible by 5.",
      playPrm: "Prime numbers only.",
      playFibo: "Follow Fibonacci in order.",
      playSquares: "Spot the square numbers.",
      playAdig: "Follow rising digits in order.",
      playDdig: "Follow falling digits in order.",
      playTwin: "Hunt matching doubles.",
      playSdeath: "Hit the shown number. One miss ends the run.",
    },
  },
  ru: {
    meta: {
      description: "Number Hunt 99 — браузерная головоломка на внимание: выбери правило, сканируй поле и находи нужные числа.",
      ogDescription: "Выбери правило, сканируй поле и очищай его в нужной последовательности.",
      topKicker: "Focus Grid v1.0",
      rule: "RULE",
      section: "SECTION",
    },
    controls: {
      hideCategories: "Скрыть категории",
      showCategories: "Показать категории",
      show: "Показать",
      hide: "Скрыть",
      categories: "Категории",
      size: "Размер",
      mode: "Режим",
      quick: "Быстро",
      full: "Полно",
      archive49: "GRID 49",
      archive99: "GRID 99",
      classic: "Классика",
      stable: "Стабильно",
      shifting: "Сдвиг",
      unstable: "Нестабильно",
      play: "Играть",
      back: "← back",
      replay: "play again",
      found: "Found",
      errors: "Errors",
      time: "Time",
      find: "Find",
      penalty: "+3s",
      targets: "целей",
      modeNote: "Состояние поля",
      archiveClearance: "пройдено уровней",
      archiveStatus: "ПРОГРЕСС",
      casesCleared: "УРОВНЕЙ ПРОЙДЕНО",
      defaultMessage: "Следуй правилу. Ошибки стоят времени.",
    },
    statuses: {
      clear: "CLEAR",
      master: "MASTER",
      perfect: "PERFECT",
    },
    categories: {
      all: "ВСЕ УРОВНИ",
      order: "ПОРЯДОК",
      filter: "ФИЛЬТРЫ",
      pattern: "ПАТТЕРНЫ",
      logic: "ЛОГИКА",
      speed: "СКОРОСТЬ",
      sidebarAll: "Все уровни",
      sidebarOrder: "Порядок",
      sidebarFilter: "Фильтры",
      sidebarPattern: "Паттерны",
      sidebarLogic: "Логика",
      sidebarSpeed: "Скорость",
      random: "Random",
      labelCategories: "Категории",
      labelOther: "Прочее",
      tagOrder: "ПОРЯДОК",
      tagFilter: "ФИЛЬТР",
      tagPattern: "ПАТТЕРН",
      tagLogic: "ЛОГИКА",
      tagSpeed: "СКОРОСТЬ",
    },
    sections: {
      core: "Основные уровни",
      filter: "Фильтр-уровни",
      pattern: "Паттерн-уровни",
      logic: "Логические уровни",
      speed: "Скоростные уровни",
    },
    archive: {
      listMeta49: "поле на 49 чисел · быстрый раунд",
      listMeta99: "поле на 99 чисел · полный раунд",
      listMetaProgress: "{cases} уровней · {cleared} пройдено",
      recentCases: "Последние раны",
      archiveNotes: "Заметки",
      operationNotes: "Как играть",
      catalogProgress: "Прогресс",
      operationLine1: "Следуй активному правилу и очищай поле.",
      operationLine2: "Ошибки добавляют штраф ко времени. Стабильные раны держат темп.",
      operationLine3: "Подсказка по метке: удерживай одну клетку перед выбором.",
      progressLine1: "{completion} уровней пройдено.",
      progressLine2: "Результаты обновляются после каждого завершенного рана.",
      archiveLine2: "Рекомендуемый маршрут: начни со стандартных уровней на порядок.",
      archiveLine3: "Попробуй оба размера поля.",
      caseLine: "[{num}] {title} · {sizeTag}",
      caseComplete: "Все уровни пройдены",
      sizeTag49: "QUICK",
      sizeTag99: "FULL",
    },
    gameplay: {
      anyWrong: "Это число не подходит под правило.",
      wrongPick: "Неверный выбор. Найди: {expected}",
      suddenDeathLose: "Sudden Death. Одна ошибка закончила раунд.",
      playAgainQuestion: "{reason} Сыграть снова?",
      finish: "{status}. Ран: {time}. Лучшее: {best}. Следующий уровень: {nextLevel}.",
      orderedMode: "РЕЖИМ ПОРЯДКА · {modifier}",
      suddenDeathMode: "SUDDEN DEATH · {modifier}",
      filterMode: "РЕЖИМ ФИЛЬТРА · {modifier}",
      patternMode: "РЕЖИМ ПАТТЕРНА · {modifier}",
      logicMode: "РЕЖИМ ЛОГИКИ · {modifier}",
      scanMode: "РЕЖИМ РАНА · {modifier}",
      modifierClassicShort: "CLASSIC GRID",
      modifierShiftShort: "UNSTABLE GRID",
    },
    modifiers: {
      none: "Классика",
      shift: "Сдвиг сетки",
      noneShort: "Стабильная сетка.",
      shiftShort: "Поле перемешивается после верных ходов.",
      noneDescription: "Классика держит поле стабильным.",
      shiftDescription: "Shifting перемешивает поле после верных ходов.",
      cardNone: "Классика",
      cardShift: "Сдвиг",
    },
    levels: {
      ascTitle49: "1 → 49",
      ascTitle99: "1 → 99",
      ascPlay49: "Очисти 1 → 49 по порядку.",
      ascPlay99: "Очисти 1 → 99 по порядку.",
      ascDesc49: "Очисти поле от 1 до 49 в идеальном порядке. Порядок важен.",
      ascDesc99: "Очисти поле от 1 до 99 в идеальном порядке. Порядок важен.",
      descTitle49: "49 → 1",
      descTitle99: "99 → 1",
      descPlay49: "Очисти 49 → 1 по порядку.",
      descPlay99: "Очисти 99 → 1 по порядку.",
      descDesc49: "Обратный проход. Очисти поле от 49 до 1. Порядок важен.",
      descDesc99: "Обратный проход. Начинай сверху и спускайся вниз. Порядок важен.",
      evenTitle: "Четные",
      evenDesc: "Игнорируй нечетные. Считаются только четные числа.",
      oddTitle: "Нечетные",
      oddDesc: "Выживают только нечетные. Оставь четные в стороне.",
      m3Title: "Кратные 3",
      m3Desc: "Следи только за числами, которые делятся на 3. Остальное — шум.",
      m7Title: "Кратные 7",
      m7Desc: "Более плотное правило. Поймай все числа, кратные 7.",
      d7Title: "Содержит 7",
      d7Desc: "Все числа с цифрой 7 активны. Остальное — приманка.",
      s9Title: "Сумма цифр = 9",
      s9Desc: "Смотри на цифры. Подходят только числа с суммой цифр 9.",
      e05Title: "Делится на 5",
      e05Desc: "Держись пятерок. Остальное пропускай.",
      prmTitle: "Простые числа",
      prmDesc: "Поймай простые числа, пока внимание не соскользнуло.",
      fiboTitle: "Фибоначчи",
      fiboDesc: "Следуй ряду Фибоначчи по порядку: каждое число — сумма двух предыдущих. Порядок важен.",
      squaresTitle: "Квадраты",
      squaresDesc: "Ищи квадраты: 1, 4, 9, 16, 25 и далее. Порядок не важен.",
      adigTitle: "Возрастающие цифры",
      adigDesc: "Следуй по порядку числам с возрастающими цифрами: 12, 23, 34 и дальше. Порядок важен.",
      ddigTitle: "Убывающие цифры",
      ddigDesc: "Следуй по порядку числам с убывающими цифрами: 98, 87, 76 и дальше. Порядок важен.",
      twinTitle: "Двойняшки",
      twinDesc: "Ищи пары: 11, 22, 33 и остальные.",
      sdeathTitle: "Sudden Death",
      sdeathDesc: "Найди показанную цель. Одна ошибка завершает раунд.",
      playEven: "Считаются только четные числа.",
      playOdd: "Игнорируй четные.",
      playM3: "Выживают только кратные 3.",
      playM7: "Следи за таблицей семерок.",
      playD7: "Поймай все числа с цифрой 7.",
      playS9: "Сумма цифр должна быть 9.",
      playE05: "Только числа, делящиеся на 5.",
      playPrm: "Только простые числа.",
      playFibo: "Следуй Фибоначчи по порядку.",
      playSquares: "Ищи квадратные числа.",
      playAdig: "Следуй возрастающим цифрам по порядку.",
      playDdig: "Следуй убывающим цифрам по порядку.",
      playTwin: "Охоться на одинаковые пары.",
      playSdeath: "Жми показанное число. Один промах — конец рана.",
    },
  },
}

let currentLanguage = loadLanguage()

function getLocaleValue(source, language = currentLanguage) {
  if (source && typeof source === "object" && !Array.isArray(source) && ("en" in source || "ru" in source)) {
    return source[language] ?? source.en ?? ""
  }
  return source ?? ""
}

function t(key, vars = {}) {
  const value = key.split(".").reduce((acc, part) => acc?.[part], I18N[currentLanguage]) ?? key
  const template = getLocaleValue(value)
  return String(template).replace(/\{(\w+)\}/g, (_, token) => vars[token] ?? `{${token}}`)
}

function loadLanguage() {
  const stored = window.localStorage.getItem(LANGUAGE_KEY)
  return stored === "ru" ? "ru" : "en"
}

function fibonacciSeq() {
  const values = []
  let a = 1
  let b = 2
  while (a <= 99) {
    values.push(a)
    ;[a, b] = [b, a + b]
  }
  return values
}

function squaresSeq() {
  const values = []
  for (let n = 1; n * n <= 99; n += 1) {
    values.push(n * n)
  }
  return values
}

function ascendingDigitsSeq() {
  return ALL_NUMBERS.filter(number => {
    const digits = String(number).split("").map(Number)
    return digits.length > 1 && digits.every((digit, index) => index === 0 || digits[index - 1] < digit)
  })
}

function descendingDigitsSeq() {
  return ALL_NUMBERS.filter(number => {
    const digits = String(number).split("").map(Number)
    return digits.length > 1 && digits.every((digit, index) => index === 0 || digits[index - 1] > digit)
  })
}

function twinDigitsSeq() {
  return ALL_NUMBERS.filter(number => {
    const digits = String(number)
    return digits.length === 2 && digits[0] === digits[1]
  })
}

const LEVELS = [
  { id: "asc", num: "01", title: loc("1 → 99", "1 → 99"), playDesc: loc("", ""), desc: loc("", ""), cat: "order", diff: "easy", mode: "ordered", tags: ["ORDER"], seq: () => [...ALL_NUMBERS] },
  { id: "desc", num: "02", title: loc("99 → 1", "99 → 1"), playDesc: loc("", ""), desc: loc("", ""), cat: "order", diff: "hard", mode: "ordered", tags: ["ORDER", "HARD"], seq: () => [...ALL_NUMBERS].reverse() },
  { id: "even", num: "03", title: loc("Even", "Четные"), desc: loc("Ignore the odds. Only the even numbers count.", "Игнорируй нечетные. Считаются только четные числа."), cat: "filter", diff: "easy", mode: "any", tags: ["FILTER"], seq: () => ALL_NUMBERS.filter(n => n % 2 === 0) },
  { id: "odd", num: "04", title: loc("Odd", "Нечетные"), desc: loc("Only the odds survive. Leave the evens behind.", "Выживают только нечетные. Оставь четные в стороне."), cat: "filter", diff: "easy", mode: "any", tags: ["FILTER"], seq: () => ALL_NUMBERS.filter(n => n % 2 === 1) },
  { id: "m3", num: "05", title: loc("Multiples of 3", "Кратные 3"), desc: loc("Track only the numbers divisible by 3. The rest are noise.", "Следи только за числами, которые делятся на 3. Остальное — шум."), cat: "filter", diff: "hard", mode: "any", tags: ["FILTER", "HARD"], seq: () => ALL_NUMBERS.filter(n => n % 3 === 0) },
  { id: "m7", num: "06", title: loc("Multiples of 7", "Кратные 7"), desc: loc("A tighter scan. Catch every multiple of 7 in the field.", "Более плотный скан. Поймай все числа, кратные 7."), cat: "filter", diff: "hard", mode: "any", tags: ["FILTER", "HARD"], seq: () => ALL_NUMBERS.filter(n => n % 7 === 0) },
  { id: "d7", num: "07", title: loc("Contains 7", "Содержит 7"), desc: loc("Anything hiding a 7 is live. Everything else is bait.", "Все числа с цифрой 7 активны. Остальное — приманка."), cat: "filter", diff: "easy", mode: "any", tags: ["FILTER"], seq: () => ALL_NUMBERS.filter(n => String(n).includes("7")) },
  { id: "s9", num: "08", title: loc("Digit Sum = 9", "Сумма цифр = 9"), desc: loc("Read the digits. Only totals of 9 belong to the rule.", "Смотри на цифры. Подходят только числа с суммой цифр 9."), cat: "pattern", diff: "hard", mode: "any", tags: ["PATTERN", "HARD"], seq: () => ALL_NUMBERS.filter(n => [...String(n)].reduce((s, d) => s + Number(d), 0) === 9) },
  { id: "e05", num: "09", title: loc("Divisible by 5", "Делится на 5"), desc: loc("Stick to the fives. Skip the rest.", "Держись пятерок. Остальное пропускай."), cat: "filter", diff: "easy", mode: "any", tags: ["FILTER"], seq: () => ALL_NUMBERS.filter(n => n % 5 === 0) },
  { id: "prm", num: "10", title: loc("Prime Numbers", "Простые числа"), desc: loc("Spot the primes before your focus slips.", "Поймай простые числа, пока внимание не соскользнуло."), cat: "pattern", diff: "hard", mode: "any", tags: ["PATTERN", "HARD"], seq: () => [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97] },
  { id: "fibo", num: "11", title: loc("Fibonacci", "Фибоначчи"), desc: loc("Follow the Fibonacci sequence in order: each number is the sum of the previous two. Order matters.", "Следуй ряду Фибоначчи по порядку: каждое число — сумма двух предыдущих. Порядок важен."), cat: "logic", diff: "easy", mode: "ordered", tags: ["LOGIC", "NEW"], seq: fibonacciSeq },
  { id: "squares", num: "12", title: loc("Squares", "Квадраты"), desc: loc("Spot the square numbers: 1, 4, 9, 16, 25, and so on. Order does not matter.", "Ищи квадраты: 1, 4, 9, 16, 25 и далее. Порядок не важен."), cat: "logic", diff: "easy", mode: "any", tags: ["LOGIC", "NEW"], seq: squaresSeq },
  { id: "adig", num: "13", title: loc("Ascending Digits", "Возрастающие цифры"), desc: loc("Follow numbers with rising digits in order: 12, 23, 34, and onward. Order matters.", "Следуй по порядку числам с возрастающими цифрами: 12, 23, 34 и дальше. Порядок важен."), cat: "logic", diff: "hard", mode: "ordered", tags: ["LOGIC", "HARD", "NEW"], seq: ascendingDigitsSeq },
  { id: "ddig", num: "14", title: loc("Descending Digits", "Убывающие цифры"), desc: loc("Follow numbers with falling digits in order: 98, 87, 76, and onward. Order matters.", "Следуй по порядку числам с убывающими цифрами: 98, 87, 76 и дальше. Порядок важен."), cat: "logic", diff: "hard", mode: "ordered", tags: ["LOGIC", "HARD", "NEW"], seq: descendingDigitsSeq },
  { id: "twin", num: "15", title: loc("Twin Digits", "Двойняшки"), desc: loc("Spot the doubles: 11, 22, 33, and the rest.", "Ищи пары: 11, 22, 33 и остальные."), cat: "logic", diff: "easy", mode: "any", tags: ["LOGIC", "NEW"], seq: twinDigitsSeq },
  { id: "sdeath", num: "16", title: loc("Sudden Death", "Sudden Death"), desc: loc("Find the shown target. One mistake ends the run.", "Найди показанную цель. Одна ошибка завершает раунд."), cat: "speed", diff: "easy", mode: "random", tags: ["SPEED", "NEW"], suddenDeath: true, seq: () => shuffle([...ALL_NUMBERS]) },
]

let currentLevel = null
let sequence = []
let sequenceIndex = 0
let board = []
let found = new Set()
let markedNumber = null
let errors = 0
let startedAt = null
let timer = null
let currentCategory = "all"
let selectedLevelId = null
let selectedModifier = "none"
let currentFieldSize = 49
let hintTarget = null
let correctStreak = 0

function syncModifierButtons() {
  document.querySelectorAll("#mods button").forEach(node => {
    node.classList.toggle("on", node.dataset.mod === selectedModifier)
  })
}

function syncFieldButtons() {
  document.querySelectorAll("#filt button[data-field]").forEach(node => {
    const isActive = Number(node.dataset.field) === currentFieldSize
    node.classList.toggle("on", isActive)
  })
}

const cards = document.getElementById("cards")
const sidebar = document.getElementById("sidebar")
const archivePanel = document.getElementById("archive-panel")
const gameView = document.getElementById("game-view")
const bodyNode = document.querySelector(".nh-body")
const boardWrap = document.querySelector(".nh-board-wrap")
const boardNode = document.getElementById("gv-board")
const targetCard = document.querySelector(".nh-target-card")
const timeNode = document.getElementById("gv-time")
const msgNode = document.getElementById("gv-msg")
const replayButton = document.getElementById("replay-btn")
const menuButton = document.getElementById("menu-btn")
const appRoot = document.querySelector(".nh")
const penaltyNode = document.getElementById("gv-penalty")
const langToggle = document.getElementById("lang-toggle")

const CATEGORY_LABELS = {
  all: () => t("categories.all"),
  order: () => t("categories.order"),
  filter: () => t("categories.filter"),
  pattern: () => t("categories.pattern"),
  logic: () => t("categories.logic"),
  speed: () => t("categories.speed"),
}

const CATEGORY_TAGS = {
  order: () => t("categories.tagOrder"),
  filter: () => t("categories.tagFilter"),
  pattern: () => t("categories.tagPattern"),
  logic: () => t("categories.tagLogic"),
  speed: () => t("categories.tagSpeed"),
}

const SIDEBAR_CATEGORIES = [
  { id: "all", label: () => t("categories.sidebarAll") },
  { id: "order", label: () => t("categories.sidebarOrder") },
  { id: "filter", label: () => t("categories.sidebarFilter") },
  { id: "pattern", label: () => t("categories.sidebarPattern") },
  { id: "logic", label: () => t("categories.sidebarLogic") },
  { id: "speed", label: () => t("categories.sidebarSpeed") },
]

const MODIFIER_LABELS = {
  none: () => t("modifiers.cardNone"),
  shift: () => t("modifiers.cardShift"),
}

const MODIFIER_FULL_LABELS = {
  none: () => t("modifiers.none"),
  shift: () => t("modifiers.shift"),
}

const MODIFIER_DESCRIPTIONS = {
  none: () => t("modifiers.noneDescription"),
  shift: () => t("modifiers.shiftDescription"),
}

const MODIFIER_SHORT_DESCRIPTIONS = {
  none: () => t("modifiers.noneShort"),
  shift: () => t("modifiers.shiftShort"),
}

const PLAY_LINES = {
  asc: () => currentFieldSize === 49 ? t("levels.ascPlay49") : t("levels.ascPlay99"),
  desc: () => currentFieldSize === 49 ? t("levels.descPlay49") : t("levels.descPlay99"),
  even: () => t("levels.playEven"),
  odd: () => t("levels.playOdd"),
  m3: () => t("levels.playM3"),
  m7: () => t("levels.playM7"),
  d7: () => t("levels.playD7"),
  s9: () => t("levels.playS9"),
  e05: () => t("levels.playE05"),
  prm: () => t("levels.playPrm"),
  fibo: () => t("levels.playFibo"),
  squares: () => t("levels.playSquares"),
  adig: () => t("levels.playAdig"),
  ddig: () => t("levels.playDdig"),
  twin: () => t("levels.playTwin"),
  sdeath: () => t("levels.playSdeath"),
}

const SECTION_LABELS = {
  core: () => t("sections.core"),
  filter: () => t("sections.filter"),
  pattern: () => t("sections.pattern"),
  logic: () => t("sections.logic"),
  speed: () => t("sections.speed"),
}

function normalizeArchiveProgress(value) {
  return {
    bestTime: value?.bestTime ?? null,
    bestAccuracy: value?.bestAccuracy ?? 0,
    attempts: value?.attempts ?? 0,
    completed: value?.completed ?? false,
    streak: value?.streak ?? 0,
  }
}

function normalizeModeProgress(value) {
  if (value?.archives) {
    const archives = {
      49: normalizeArchiveProgress(value.archives[49] ?? value.archives["49"]),
      99: normalizeArchiveProgress(value.archives[99] ?? value.archives["99"]),
    }
    return { archives }
  }

  const fallback = normalizeArchiveProgress(value)
  return {
    archives: {
      49: fallback,
      99: normalizeArchiveProgress(),
    },
  }
}

function summarizeProgressModes(modes, fieldSize = currentFieldSize) {
  const entries = Object.values(modes).map(mode => mode.archives[fieldSize] ?? normalizeArchiveProgress())
  const completedEntries = entries.filter(entry => entry.completed)
  const times = completedEntries.map(entry => entry.bestTime).filter(value => value !== null)

  return {
    bestTime: times.length ? Math.min(...times) : null,
    bestAccuracy: entries.reduce((max, entry) => Math.max(max, entry.bestAccuracy), 0),
    attempts: entries.reduce((sum, entry) => sum + entry.attempts, 0),
    completed: completedEntries.length > 0,
    streak: entries.reduce((max, entry) => Math.max(max, entry.streak), 0),
  }
}

function setGameMessage(text, kind = "") {
  msgNode.textContent = text
  msgNode.classList.toggle("fail", kind === "fail")
  msgNode.classList.toggle("success", kind === "success")
}

function getGameDescription(level) {
  const modifierLine = getCurrentModifierKey() === "shift"
    ? t("gameplay.modifierShiftShort")
    : t("gameplay.modifierClassicShort")
  if (level.mode === "ordered") return t("gameplay.orderedMode", { modifier: modifierLine })
  if (level.mode === "random") return t("gameplay.suddenDeathMode", { modifier: modifierLine })
  if (level.cat === "filter") return t("gameplay.filterMode", { modifier: modifierLine })
  if (level.cat === "pattern") return t("gameplay.patternMode", { modifier: modifierLine })
  if (level.cat === "logic") return t("gameplay.logicMode", { modifier: modifierLine })
  return t("gameplay.scanMode", { modifier: modifierLine })
}

function getLevelStatus(progressEntry, fieldSize = currentFieldSize) {
  const noneMode = progressEntry?.modes?.none?.archives?.[fieldSize] ?? normalizeArchiveProgress()
  const shiftMode = progressEntry?.modes?.shift?.archives?.[fieldSize] ?? normalizeArchiveProgress()
  const anyCompleted = noneMode.completed || shiftMode.completed
  const anyPerfect = (noneMode.completed && noneMode.bestAccuracy === 100) || (shiftMode.completed && shiftMode.bestAccuracy === 100)
  const allPerfect = noneMode.completed && shiftMode.completed && noneMode.bestAccuracy === 100 && shiftMode.bestAccuracy === 100

  if (allPerfect) return "perfect"
  if (anyPerfect) return "master"
  if (anyCompleted) return "clear"
  return ""
}

function getLevelCopy(level, fieldSize = currentFieldSize) {
  if (level.id === "asc") {
    return fieldSize === 49
      ? {
          title: loc(I18N.en.levels.ascTitle49, I18N.ru.levels.ascTitle49),
          playDesc: loc(I18N.en.levels.ascPlay49, I18N.ru.levels.ascPlay49),
          desc: loc(I18N.en.levels.ascDesc49, I18N.ru.levels.ascDesc49),
        }
      : {
          title: loc(I18N.en.levels.ascTitle99, I18N.ru.levels.ascTitle99),
          playDesc: loc(I18N.en.levels.ascPlay99, I18N.ru.levels.ascPlay99),
          desc: loc(I18N.en.levels.ascDesc99, I18N.ru.levels.ascDesc99),
        }
  }

  if (level.id === "desc") {
    return fieldSize === 49
      ? {
          title: loc(I18N.en.levels.descTitle49, I18N.ru.levels.descTitle49),
          playDesc: loc(I18N.en.levels.descPlay49, I18N.ru.levels.descPlay49),
          desc: loc(I18N.en.levels.descDesc49, I18N.ru.levels.descDesc49),
        }
      : {
          title: loc(I18N.en.levels.descTitle99, I18N.ru.levels.descTitle99),
          playDesc: loc(I18N.en.levels.descPlay99, I18N.ru.levels.descPlay99),
          desc: loc(I18N.en.levels.descDesc99, I18N.ru.levels.descDesc99),
        }
  }

  return {
    title: level.title,
    playDesc: level.playDesc ?? level.desc,
    desc: level.desc,
  }
}

function updateMenuButtonLabel() {
  const label = window.innerWidth < 600
    ? t("controls.categories")
    : bodyNode.classList.contains("sidebar-hidden")
      ? t("controls.showCategories")
      : t("controls.hideCategories")
  menuButton.setAttribute("aria-label", label)
  menuButton.setAttribute("title", label)
}

function pickRandomModifier() {
  const pool = ["none", "none", "shift"]
  return pool[Math.floor(Math.random() * pool.length)]
}

function getTargetHint() {
  if (currentLevel?.mode === "any") {
    return hintTarget ?? "✓"
  }
  return sequence[sequenceIndex] ?? "✓"
}

function getHighlightedTarget() {
  if (sequenceIndex !== 0) return null
  return currentLevel?.mode === "any"
    ? hintTarget
    : sequence[0]
}

function pickAnyModeHintTarget() {
  const remaining = sequence.filter(number => !found.has(number))
  if (!remaining.length) return null
  return remaining[Math.floor(Math.random() * remaining.length)]
}

function normalizeProgressEntry(value) {
  if (typeof value === "number") {
    const modes = {
      none: normalizeModeProgress({ archives: { 49: { bestTime: value, completed: true, streak: 1 } } }),
      shift: normalizeModeProgress(),
    }
    return { ...summarizeProgressModes(modes, 49), modes }
  }

  const modes = {
    none: normalizeModeProgress(value?.modes?.none ?? value),
    shift: normalizeModeProgress(value?.modes?.shift),
  }

  return {
    ...summarizeProgressModes(modes, 49),
    modes,
  }
}

function loadProgress() {
  try {
    const parsed = JSON.parse(window.localStorage.getItem(STORAGE_KEY)) || {}
    return Object.fromEntries(Object.entries(parsed).map(([key, value]) => [key, normalizeProgressEntry(value)]))
  } catch {
    return {}
  }
}

function saveProgress(payload) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(payload))
}

function loadRuns() {
  try {
    return JSON.parse(window.localStorage.getItem(RUNS_KEY)) || []
  } catch {
    return []
  }
}

function syncLanguageButtons() {
  document.querySelectorAll("#lang-toggle button[data-lang]").forEach(node => {
    node.classList.toggle("on", node.dataset.lang === currentLanguage)
  })
}

function applyLocalization() {
  document.documentElement.lang = currentLanguage
  document.title = "Number Hunt 99"
  document.querySelector('meta[name="description"]')?.setAttribute("content", t("meta.description"))
  document.querySelector('meta[property="og:title"]')?.setAttribute("content", "Number Hunt 99")
  document.querySelector('meta[property="og:description"]')?.setAttribute("content", t("meta.ogDescription"))

  document.getElementById("top-kicker").textContent = t("meta.topKicker")
  document.getElementById("field-label").textContent = t("controls.size")
  document.getElementById("mode-label").textContent = t("controls.mode")
  document.getElementById("field-49-desc").textContent = ""
  document.getElementById("field-99-desc").textContent = ""
  document.getElementById("mod-none-label").textContent = t("controls.classic")
  document.getElementById("mod-none-desc").textContent = ""
  document.getElementById("mod-shift-label").textContent = t("controls.shifting")
  document.getElementById("mod-shift-desc").textContent = ""
  document.querySelector('#filt button[data-field="49"] span').textContent = t("controls.archive49")
  document.querySelector('#filt button[data-field="99"] span').textContent = t("controls.archive99")
  document.getElementById("mode-note").textContent = t("controls.modeNote")
  document.getElementById("back-btn").textContent = t("controls.back")
  document.getElementById("replay-btn").textContent = t("controls.replay")
  document.getElementById("stats-found-label").textContent = t("controls.found")
  document.getElementById("stats-errors-label").textContent = t("controls.errors")
  document.getElementById("stats-time-label").textContent = t("controls.time")
  document.getElementById("gv-penalty").textContent = t("controls.penalty")
  document.getElementById("target-label").textContent = t("controls.find")
  document.getElementById("bottom-clearance-label").textContent = t("controls.archiveClearance")
  document.getElementById("gv-title").dataset.ruleLabel = t("meta.rule")
  if (!gameView.classList.contains("open") || !msgNode.textContent) {
    setGameMessage(t("controls.defaultMessage"))
  }
  syncLanguageButtons()
  updateMenuButtonLabel()
}

function setLanguage(language) {
  currentLanguage = language === "ru" ? "ru" : "en"
  window.localStorage.setItem(LANGUAGE_KEY, currentLanguage)
  applyLocalization()
  if (gameView.classList.contains("open") && currentLevel) {
    const baseLevel = LEVELS.find(level => level.id === currentLevel.id)
    if (baseLevel) {
      const levelCopy = getLevelCopy(baseLevel)
      currentLevel = {
        ...currentLevel,
        title: levelCopy.title,
        playDesc: levelCopy.playDesc,
        desc: levelCopy.desc,
      }
      document.getElementById("gv-title").textContent = getLocaleValue(currentLevel.title)
      document.querySelector(".nh-miss-txt").textContent = getGameDescription(currentLevel)
      document.getElementById("gv-tgt").textContent = getTargetHint()
      if (!msgNode.textContent) {
        setGameMessage("")
      }
    }
  }
  renderCards()
}

function saveRuns(payload) {
  window.localStorage.setItem(RUNS_KEY, JSON.stringify(payload))
}

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60)
  const secs = seconds % 60
  return mins > 0
    ? `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`
    : `${secs}s`
}

function getCurrentTitle() {
  return getLocaleValue(currentLevel?.title)
}

function getCurrentModifierKey() {
  if (currentLevel?.shiftingGrid) return "shift"
  return "none"
}

function getFieldConfig() {
  return currentFieldSize === 49
    ? { total: 49, cols: 7, rows: 7, label: loc("49 Board", "Поле 49") }
    : { total: 99, cols: 11, rows: 9, label: loc("99 Board", "Поле 99") }
}

function syncFieldFeel() {
  appRoot.classList.toggle("field-49", currentFieldSize === 49)
  appRoot.classList.toggle("field-99", currentFieldSize === 99)
}

function shuffle(array) {
  const copy = [...array]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

function buildBoard(levelSequence) {
  const { total } = getFieldConfig()
  const sourceNumbers = ALL_NUMBERS.slice(0, total)
  const all = shuffle(sourceNumbers)
  const seqSet = new Set(levelSequence)
  const pool = shuffle([...seqSet, ...all.filter(n => !seqSet.has(n))].slice(0, total))
  while (pool.length < total) {
    pool.push(pool[Math.floor(Math.random() * pool.length)])
  }
  return shuffle(pool).slice(0, total)
}

function toggleMarker(number) {
  if (found.has(number)) return
  markedNumber = markedNumber === number ? null : number
  renderBoard()
}

function bindCellPress(cell, number) {
  let holdTimer = null
  let startX = 0
  let startY = 0

  const clearHold = () => {
    if (holdTimer) {
      clearTimeout(holdTimer)
      holdTimer = null
    }
  }

  const startHold = (x, y) => {
    startX = x
    startY = y
    clearHold()
    holdTimer = window.setTimeout(() => {
      cell.dataset.ignoreClick = "1"
      toggleMarker(number)
    }, 360)
  }

  cell.addEventListener("contextmenu", event => event.preventDefault())
  cell.addEventListener("pointerdown", event => {
    if (event.pointerType === "mouse" && event.button !== 0) return
    startHold(event.clientX, event.clientY)
  })

  cell.addEventListener("pointermove", event => {
    if (!holdTimer) return
    if (Math.abs(event.clientX - startX) > 12 || Math.abs(event.clientY - startY) > 12) clearHold()
  })

  ;["pointerup", "pointercancel", "mouseleave", "mouseup", "touchend", "touchcancel"].forEach(type => {
    cell.addEventListener(type, clearHold)
  })

  cell.addEventListener("click", () => {
    if (cell.dataset.ignoreClick === "1") {
      delete cell.dataset.ignoreClick
      return
    }
    tapNumber(number, cell)
  })
}

function fitBoard() {
  if (!gameView.classList.contains("open")) return

  const wrapStyles = window.getComputedStyle(boardWrap)
  const gap = parseFloat(window.getComputedStyle(boardNode).getPropertyValue("--board-gap")) || 0
  const boardArea = boardWrap.parentElement
  const innerWidth = boardArea.clientWidth - parseFloat(wrapStyles.paddingLeft) - parseFloat(wrapStyles.paddingRight)
  const innerHeight = boardArea.clientHeight - parseFloat(wrapStyles.paddingTop) - parseFloat(wrapStyles.paddingBottom)
  const { cols, rows, total } = getFieldConfig()

  if (innerWidth <= 0 || innerHeight <= 0) return

  const byWidth = (innerWidth - gap * (cols - 1)) / cols
  const byHeight = (innerHeight - gap * (rows - 1)) / rows
  const isSmallArchive = total === 49
  const maxCell = isSmallArchive
    ? (window.innerWidth < 380 ? 22 : window.innerWidth < 600 ? 26 : 54)
    : (window.innerWidth < 380 ? 16 : window.innerWidth < 600 ? 20 : 40)
  const minCell = isSmallArchive
    ? (window.innerWidth < 380 ? 12 : window.innerWidth < 600 ? 14 : 20)
    : (window.innerWidth < 380 ? 10 : window.innerWidth < 600 ? 12 : 14)
  const nextCell = Math.floor(Math.min(byWidth, byHeight, maxCell))

  boardNode.style.setProperty("--cell-size", `${Math.max(minCell, nextCell)}px`)
  boardNode.style.setProperty("--board-cols", cols)
  boardNode.style.setProperty("--board-rows", rows)
}

function pulseTarget() {
  targetCard.classList.remove("pulse")
  void targetCard.offsetWidth
  targetCard.classList.add("pulse")
  window.setTimeout(() => targetCard.classList.remove("pulse"), 180)
}

function syncBoardModeState() {
  boardWrap.classList.toggle("shift-mode", Boolean(currentLevel?.shiftingGrid))
}

function pulseShiftBoard() {
  if (!currentLevel?.shiftingGrid) return
  boardWrap.classList.remove("shift-pulse")
  void boardWrap.offsetWidth
  boardWrap.classList.add("shift-pulse")
  window.setTimeout(() => boardWrap.classList.remove("shift-pulse"), 200)
}

function flashTimer() {
  timeNode.classList.remove("flash")
  void timeNode.offsetWidth
  timeNode.classList.add("flash")
  window.setTimeout(() => timeNode.classList.remove("flash"), 180)
}

function flashPenalty() {
  if (!penaltyNode) return
  penaltyNode.classList.remove("show")
  void penaltyNode.offsetWidth
  penaltyNode.classList.add("show")
  window.setTimeout(() => penaltyNode.classList.remove("show"), 720)
}

function pulseFlow() {
  timeNode.classList.remove("calm")
  void timeNode.offsetWidth
  timeNode.classList.add("calm")
  window.setTimeout(() => timeNode.classList.remove("calm"), 280)
}

function applyTimePenalty(seconds = 3) {
  if (!startedAt) return
  startedAt -= seconds * 1000
  const elapsed = Math.floor((Date.now() - startedAt) / 1000)
  timeNode.textContent = elapsed
  timeNode.classList.toggle("hot", elapsed >= 45)
  flashTimer()
  flashPenalty()
}

function getNextRecommendedCase(currentId, progress) {
  const sameCategory = LEVELS.filter(level => level.id !== currentId && level.cat === currentLevel?.cat)
  const firstUnclearedSameCategory = sameCategory.find(level => !summarizeProgressModes((normalizeProgressEntry(progress[level.id]).modes), currentFieldSize).completed)
  if (firstUnclearedSameCategory) return getLocaleValue(getLevelCopy(firstUnclearedSameCategory).title)

  const firstUncleared = LEVELS.find(level => level.id !== currentId && !summarizeProgressModes((normalizeProgressEntry(progress[level.id]).modes), currentFieldSize).completed)
  if (firstUncleared) return getLocaleValue(getLevelCopy(firstUncleared).title)

  const fallback = LEVELS.find(level => level.id !== currentId)
  return fallback ? getLocaleValue(getLevelCopy(fallback).title) : t("archive.caseComplete")
}

function getLevelSection(level) {
  if (["asc", "desc", "prm", "sdeath"].includes(level.id)) return "core"
  if (level.cat === "filter") return "filter"
  if (level.cat === "logic") return "logic"
  if (level.cat === "pattern") return "pattern"
  if (level.cat === "speed") return "speed"
  return level.cat
}

function getCardStyleClass(level, index, isFeatured) {
  if (level.id === "sdeath") return " nh-card-warning nh-card-primary"
  if (["asc", "desc", "prm"].includes(level.id)) return " nh-card-primary"
  if (["fibo", "squares", "adig", "ddig", "twin"].includes(level.id)) return " nh-card-logic"
  if (level.id === "s9") return " nh-card-wide"
  if (isFeatured) return ""
  return index % 3 === 1 ? " nh-card-tall" : " nh-card-compact"
}

function appendSectionCards(cardsNode, label, sectionLevels, progress) {
  if (!sectionLevels.length) return

  const marker = document.createElement("div")
  marker.className = "nh-section-label"
  marker.textContent = label
  cardsNode.appendChild(marker)

  sectionLevels.forEach((level, index) => {
    const levelProgress = progress[level.id] || normalizeProgressEntry()
    const levelCopy = getLevelCopy(level)
    const modeResults = ["none", "shift"].map(key => {
      const entry = levelProgress.modes[key].archives[currentFieldSize]
      return `<span class="nh-card-mode${entry.bestTime !== null ? "" : " no"}">${MODIFIER_LABELS[key]()} ${entry.bestTime !== null ? formatTime(entry.bestTime) : "—"}</span>`
    }).join("")
    const card = document.createElement("div")
    const isFeatured = level.id === "asc" || level.id === "desc"
    const activeClass = selectedLevelId === level.id ? " active" : ""
    const styleClass = getCardStyleClass(level, index, isFeatured)
    card.className = "nh-card nh-card-" + level.diff + " nh-card-cat-" + level.cat + (isFeatured ? " nh-card-featured" : "") + styleClass + activeClass
    card.innerHTML = `
      <div class="nh-card-meta">
        <div class="nh-card-n">${level.num}</div>
        <div class="nh-card-tag">${CATEGORY_TAGS[level.cat]?.() || t("controls.mode")}</div>
      </div>
      <div class="nh-card-t">${getLocaleValue(levelCopy.title)}</div>
      <div class="nh-card-d">${getLocaleValue(levelCopy.desc)}</div>
      <div class="nh-card-f">
        <div class="nh-card-stats">
          <span>${level.seq().filter(number => number <= currentFieldSize).length} ${t("controls.targets")}</span>
          <div class="nh-card-modes">${modeResults}</div>
        </div>
        <button class="nh-card-cta" type="button">${t("controls.play")}</button>
      </div>
    `
    card.addEventListener("click", () => startLevel(level))
    cardsNode.appendChild(card)
  })
}

function renderSidebar() {
  const progress = loadProgress()
  const counts = Object.fromEntries(SIDEBAR_CATEGORIES.map(category => [
    category.id,
    category.id === "all" ? LEVELS.length : LEVELS.filter(level => level.cat === category.id).length,
  ]))
  const completedCount = Object.values(progress).filter(entry => summarizeProgressModes(entry.modes, currentFieldSize).completed).length

  sidebar.innerHTML = `
    <div class="nh-nav-lbl" data-section-label="${t("meta.section")}">${t("categories.labelCategories")}</div>
    ${SIDEBAR_CATEGORIES.map(category => `
      <div class="nh-nav-item${currentCategory === category.id ? " active" : ""}" data-cat="${category.id}">
        <div class="nh-nav-dot"></div>${category.label()}<span class="nh-nav-cnt">${counts[category.id]}</span>
      </div>
    `).join("")}
    <div class="nh-nav-lbl nh-nav-lbl-gap" data-section-label="${t("meta.section")}">${t("categories.labelOther")}</div>
    <div class="nh-nav-item" id="nav-rand"><div class="nh-nav-dot"></div>${t("categories.random")}</div>
    <div class="nh-sidebar-status">
      <div class="nh-sidebar-status-k">${t("controls.archiveStatus")}</div>
      <strong>${completedCount} / ${LEVELS.length}</strong>
      <span>${t("controls.casesCleared")}</span>
    </div>
  `
}

function renderCards() {
  const progress = loadProgress()
  syncFieldFeel()
  const levelsAvailable = LEVELS.filter(level => {
    if (currentCategory !== "all" && level.cat !== currentCategory) return false
    return true
  })
  const completedCount = Object.values(progress).filter(entry => summarizeProgressModes(entry.modes, currentFieldSize).completed).length
  document.getElementById("sb-done").textContent = `${completedCount} / ${LEVELS.length}`
  document.getElementById("list-title").textContent = CATEGORY_LABELS[currentCategory]?.() || t("categories.all")
  document.getElementById("list-sub").innerHTML = `
    <span class="nh-list-sub-main">${currentFieldSize === 49 ? t("archive.listMeta49") : t("archive.listMeta99")}</span>
    <span class="nh-list-sub-meta">${t("archive.listMetaProgress", { cases: LEVELS.length, cleared: completedCount })}</span>
  `
  renderSidebar()

  cards.innerHTML = ""

  if (currentCategory === "all") {
    const orderedSections = ["core", "filter", "pattern", "logic", "speed"]
    orderedSections.forEach(section => {
      appendSectionCards(cards, SECTION_LABELS[section](), levelsAvailable.filter(level => getLevelSection(level) === section), progress)
    })
  } else {
    appendSectionCards(cards, CATEGORY_LABELS[currentCategory]?.() || t("categories.all"), levelsAvailable, progress)
  }

  renderArchivePanel()
}

function renderArchivePanel() {
  const runs = loadRuns().slice(0, 3)
  const progress = loadProgress()
  const completion = `${Object.values(progress).filter(entry => summarizeProgressModes(entry.modes, currentFieldSize).completed).length} / ${LEVELS.length}`
  if (!runs.length) {
    archivePanel.innerHTML = `
      <div class="nh-panel-sec" data-section-label="${t("meta.section")}">
        <div class="nh-panel-k">${t("archive.operationNotes")}</div>
        <div class="nh-brief">
          <p>${t("archive.operationLine1")}</p>
          <p>${t("archive.operationLine2")}</p>
          <p>${t("archive.operationLine3")}</p>
        </div>
      </div>
      <div class="nh-panel-sec" data-section-label="${t("meta.section")}">
        <div class="nh-panel-k">${t("archive.catalogProgress")}</div>
        <div class="nh-brief">
          <p>${t("archive.progressLine1", { completion })}</p>
          <p>${t("archive.progressLine2")}</p>
        </div>
      </div>
    `
    return
  }

  archivePanel.innerHTML = `
    <div class="nh-panel-sec" data-section-label="${t("meta.section")}">
      <div class="nh-panel-k">${t("archive.recentCases")}</div>
      <div class="nh-runs">
        ${runs.map(run => `
          <div class="nh-run">
            <strong>${t("archive.caseLine", {
              num: (LEVELS.find(level => level.id === run.id)?.num) || "00",
              title: run.id ? getLocaleValue(getLevelCopy(LEVELS.find(level => level.id === run.id) || { title: run.title }, run.fieldSize || currentFieldSize).title) : run.title,
              sizeTag: (run.fieldSize || 99) === 49 ? t("archive.sizeTag49") : t("archive.sizeTag99"),
            })}</strong>
            <span class="nh-run-time">${formatTime(run.time)}</span>
            <span class="nh-run-acc">${run.accuracy}%</span>
          </div>
        `).join("")}
      </div>
    </div>
    <div class="nh-panel-sec" data-section-label="${t("meta.section")}">
      <div class="nh-panel-k">${t("archive.archiveNotes")}</div>
      <div class="nh-brief">
        <p>${t("archive.progressLine1", { completion })}</p>
        <p>${t("archive.archiveLine2")}</p>
        <p>${t("archive.archiveLine3")}</p>
      </div>
    </div>
  `
}

function startLevel(level, options = {}) {
  selectedLevelId = level.id
  const levelCopy = getLevelCopy(level)
  currentLevel = {
    ...level,
    title: levelCopy.title,
    playDesc: levelCopy.playDesc,
    desc: levelCopy.desc,
    shiftingGrid: selectedModifier === "shift",
  }
  sequence = level.seq().filter(number => number <= currentFieldSize)
  sequenceIndex = 0
  errors = 0
  correctStreak = 0
  found = new Set()
  hintTarget = level.mode === "any"
    ? pickAnyModeHintTarget()
    : (sequence[0] ?? null)
  markedNumber = null
  board = buildBoard(sequence)
  const progress = loadProgress()
  const currentProgress = progress[level.id] || normalizeProgressEntry()
  currentProgress.modes[getCurrentModifierKey()].archives[currentFieldSize].attempts += 1
  Object.assign(currentProgress, summarizeProgressModes(currentProgress.modes, currentFieldSize))
  progress[level.id] = currentProgress
  saveProgress(progress)
  startedAt = Date.now()
  clearInterval(timer)
  timeNode.classList.remove("hot")
  timer = window.setInterval(() => {
    const elapsed = Math.floor((Date.now() - startedAt) / 1000)
    timeNode.textContent = elapsed
    timeNode.classList.toggle("hot", elapsed >= 45)
  }, 200)

  document.getElementById("gv-title").textContent = getLocaleValue(currentLevel.title)
  document.querySelector(".nh-miss-txt").textContent = getGameDescription(currentLevel)
  replayButton.classList.remove("attention")
  setGameMessage(t("controls.defaultMessage"))
  renderBoard()
  syncBoardModeState()
  syncFieldFeel()
  document.getElementById("list-view").style.display = "none"
  gameView.classList.add("open")
  window.requestAnimationFrame(() => {
    fitBoard()
    window.requestAnimationFrame(fitBoard)
  })

  if (window.innerWidth < 600) sidebar.classList.remove("show")
}

function renderBoard() {
  document.getElementById("gv-found").textContent = sequenceIndex + "/" + sequence.length
  document.getElementById("gv-err").textContent = errors
  document.getElementById("gv-tgt").textContent = getTargetHint()

  const highlightedTarget = getHighlightedTarget()
  boardNode.innerHTML = ""

  board.forEach(number => {
    const cell = document.createElement("div")
    cell.className = "nh-cell" + (found.has(number) ? " done" : "")
    if (!found.has(number) && markedNumber === number) cell.classList.add("marked")
    if (!found.has(number) && number === highlightedTarget) cell.classList.add("target")
    cell.textContent = number
    bindCellPress(cell, number)
    boardNode.appendChild(cell)
  })

  window.requestAnimationFrame(fitBoard)
  pulseTarget()
}

function finishLevel() {
  clearInterval(timer)
  timeNode.classList.remove("hot", "calm")
  const time = Math.floor((Date.now() - startedAt) / 1000)
  const accuracy = Math.max(0, Math.round((sequence.length / (sequence.length + errors)) * 100))
  const progress = loadProgress()
  const currentProgress = progress[currentLevel.id] || normalizeProgressEntry()
  const modeProgress = currentProgress.modes[getCurrentModifierKey()].archives[currentFieldSize]
  modeProgress.completed = true
  modeProgress.bestTime = modeProgress.bestTime === null ? time : Math.min(modeProgress.bestTime, time)
  modeProgress.bestAccuracy = Math.max(modeProgress.bestAccuracy, accuracy)
  modeProgress.streak += 1
  Object.assign(currentProgress, summarizeProgressModes(currentProgress.modes, currentFieldSize))
  progress[currentLevel.id] = currentProgress
  saveProgress(progress)
  const runs = loadRuns()
  runs.unshift({
    id: currentLevel.id,
    title: getLocaleValue(currentLevel.title),
    fieldSize: currentFieldSize,
    time,
    errors,
    accuracy,
  })
  saveRuns(runs.slice(0, 6))
  replayButton.classList.remove("attention")
  const statusKey = getLevelStatus(currentProgress, currentFieldSize) || "clear"
  const status = t(`statuses.${statusKey}`)
  const nextLevel = getNextRecommendedCase(currentLevel.id, progress)
  setGameMessage(t("gameplay.finish", {
    status,
    time: formatTime(time),
    best: formatTime(modeProgress.bestTime),
    nextLevel,
  }), "success")
}

function loseLevel(reason) {
  clearInterval(timer)
  timeNode.classList.remove("hot", "calm")
  const progress = loadProgress()
  const currentProgress = progress[currentLevel.id] || normalizeProgressEntry()
  currentProgress.modes[getCurrentModifierKey()].archives[currentFieldSize].streak = 0
  Object.assign(currentProgress, summarizeProgressModes(currentProgress.modes, currentFieldSize))
  progress[currentLevel.id] = currentProgress
  saveProgress(progress)
  replayButton.classList.add("attention")
  setGameMessage(t("gameplay.playAgainQuestion", { reason }), "fail")
  boardNode.querySelectorAll(".nh-cell").forEach(node => {
    node.style.pointerEvents = "none"
  })
}

function tapNumber(number, cell) {
  if (found.has(number)) return

  if (currentLevel?.mode === "random") {
    const expected = sequence[sequenceIndex]
    if (number === expected) {
      correctStreak += 1
      found.add(number)
      if (markedNumber === number) {
        markedNumber = null
        cell.classList.remove("marked")
      }
      cell.classList.add("good")
      window.setTimeout(() => {
        cell.classList.remove("good")
        cell.classList.add("done")
        cell.style.pointerEvents = "none"
      }, 160)

      sequenceIndex++
    document.getElementById("gv-found").textContent = sequenceIndex + "/" + sequence.length
    document.getElementById("gv-tgt").textContent = getTargetHint()

      if (sequenceIndex >= sequence.length) {
        finishLevel()
      } else {
        if (correctStreak >= 3) pulseFlow()
        pulseShiftBoard()
        renderBoard()
      }
      return
    }

    errors++
    document.getElementById("gv-err").textContent = errors
    correctStreak = 0
    applyTimePenalty(3)
    cell.classList.add("wrong")
    window.setTimeout(() => cell.classList.remove("wrong"), 240)
    loseLevel(t("gameplay.suddenDeathLose"))
    return
  }

  if (currentLevel?.mode === "any") {
    const allowed = sequence.includes(number)
    if (allowed) {
      correctStreak += 1
      found.add(number)
      if (markedNumber === number) {
        markedNumber = null
        cell.classList.remove("marked")
      }
      cell.classList.add("good")
      window.setTimeout(() => {
        cell.classList.remove("good")
        cell.classList.add("done")
        cell.style.pointerEvents = "none"
      }, 160)

      sequenceIndex++
      hintTarget = pickAnyModeHintTarget()
      document.getElementById("gv-found").textContent = sequenceIndex + "/" + sequence.length
      document.getElementById("gv-tgt").textContent = getTargetHint()
      if (currentLevel.shiftingGrid && sequenceIndex < sequence.length) {
        board = shuffle(board)
        pulseShiftBoard()
      }

      if (sequenceIndex >= sequence.length) {
        finishLevel()
      } else if (currentLevel.shiftingGrid) {
        if (correctStreak >= 3) pulseFlow()
        renderBoard()
      } else if (correctStreak >= 3) {
        pulseFlow()
      }
      return
    }

    errors++
    document.getElementById("gv-err").textContent = errors
    correctStreak = 0
    applyTimePenalty(3)
    cell.classList.add("wrong")
    window.setTimeout(() => cell.classList.remove("wrong"), 240)
    setGameMessage(t("gameplay.anyWrong"))
    if (currentLevel.suddenDeath) loseLevel(t("gameplay.suddenDeathLose"))
    return
  }

  const expected = sequence[sequenceIndex]
  if (number === expected) {
    correctStreak += 1
    found.add(number)
    if (markedNumber === number) {
      markedNumber = null
      cell.classList.remove("marked")
    }
    cell.classList.add("good")
    window.setTimeout(() => {
      cell.classList.remove("good")
      cell.classList.add("done")
      cell.style.pointerEvents = "none"
    }, 160)

    sequenceIndex++
    document.getElementById("gv-found").textContent = sequenceIndex + "/" + sequence.length
    document.getElementById("gv-tgt").textContent = getTargetHint()
    if (currentLevel.shiftingGrid && sequenceIndex < sequence.length) {
      board = shuffle(board)
      if (correctStreak >= 3) pulseFlow()
      pulseShiftBoard()
      renderBoard()
      return
    }

    if (sequenceIndex >= sequence.length) {
      finishLevel()
    } else if (correctStreak >= 3) {
      pulseFlow()
    }
  } else {
    errors++
    document.getElementById("gv-err").textContent = errors
    correctStreak = 0
    applyTimePenalty(3)
    cell.classList.add("wrong")
    window.setTimeout(() => cell.classList.remove("wrong"), 240)
    setGameMessage(t("gameplay.wrongPick", { expected }))
    if (currentLevel.suddenDeath) loseLevel(t("gameplay.suddenDeathLose"))
  }
}

document.getElementById("back-btn").addEventListener("click", () => {
  clearInterval(timer)
  timeNode.classList.remove("hot")
  gameView.classList.remove("open")
  document.getElementById("list-view").style.display = ""
  renderCards()
})

document.getElementById("replay-btn").addEventListener("click", () => {
  if (!selectedLevelId) return
  const baseLevel = LEVELS.find(level => level.id === selectedLevelId)
  if (!baseLevel) return

  selectedModifier = currentLevel?.shiftingGrid
      ? "shift"
      : "none"
  syncModifierButtons()
  startLevel(baseLevel)
})

menuButton.addEventListener("click", () => {
  if (window.innerWidth < 600) {
    sidebar.classList.toggle("show")
  } else {
    bodyNode.classList.toggle("sidebar-hidden")
  }
  updateMenuButtonLabel()
})

sidebar.addEventListener("click", event => {
  const randomNode = event.target.closest("#nav-rand")
  if (randomNode) {
    selectedModifier = pickRandomModifier()
    syncModifierButtons()
    startLevel(LEVELS[Math.floor(Math.random() * LEVELS.length)])
    return
  }

  const categoryNode = event.target.closest(".nh-nav-item[data-cat]")
  if (!categoryNode) return

  currentCategory = categoryNode.dataset.cat
  renderCards()
  if (window.innerWidth < 600) sidebar.classList.remove("show")
})

document.getElementById("mods").addEventListener("click", event => {
  const button = event.target.closest("button[data-mod]")
  if (!button) return
  selectedModifier = button.dataset.mod
  syncModifierButtons()
  renderCards()
})

document.getElementById("filt").addEventListener("click", event => {
  const button = event.target.closest("button[data-field]")
  if (!button) return
  currentFieldSize = Number(button.dataset.field)
  syncFieldButtons()
  renderCards()
})

langToggle.addEventListener("click", event => {
  const button = event.target.closest("button[data-lang]")
  if (!button) return
  setLanguage(button.dataset.lang)
})

window.addEventListener("resize", () => {
  fitBoard()
  updateMenuButtonLabel()
})

applyLocalization()
syncFieldButtons()
syncFieldFeel()
renderCards()
