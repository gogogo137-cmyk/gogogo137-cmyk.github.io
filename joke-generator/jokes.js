const jokes = [
    {
        category: "programmer",
        setup: "Why do programmers wear glasses?",
        punchline: "Because they can't C#.",
        setupZh: "為什麼工程師特別容易近視需要戴眼鏡？",
        punchlineZh: "因為他們不會 C# (See sharp / 看得清楚)。",
        emoji: "🤓"
    },
    {
        category: "programmer",
        setup: "What is the widest line in the world?",
        punchline: "Line 80 in a programmer's code.",
        setupZh: "世界上最寬的線是什麼線？",
        punchlineZh: "程式碼的 Line 80 (限制行寬的警戒線)。",
        emoji: "📏"
    },
    {
        category: "special",
        setup: "Why is the McDonald's Big Mac so popular among IT folks?",
        punchline: "Because it's a Big Mac (Macs are cooler than Windows!).",
        setupZh: "為什麼大麥克 (Big Mac) 在 IT 工程師之間特別受歡迎？",
        punchlineZh: "因為它是 Big Mac (用 Mac 寫程式就是比較潮)！",
        emoji: "🍔"
    },
    {
        category: "cold",
        setup: "Two bananas were going for a walk. One felt hot, peeled off its skin, and...",
        punchline: "The other banana slipped on it!",
        setupZh: "兩隻香蕉在街上散步，其中一隻覺得很熱，就把皮脫掉，結果呢？",
        punchlineZh: "另一隻香蕉就踩到皮滑倒了！",
        emoji: "🍌"
    },
    {
        category: "cold",
        setup: "Which fruit dresses up the most?",
        punchline: "Starfruit, because it's a Star fruit!",
        setupZh: "什麼水果最注重穿搭、最會打扮？",
        punchlineZh: "楊桃！因為它是 Star fruit (星級水果)！",
        emoji: "⭐️"
    },
    {
        category: "programmer",
        setup: "Why does Xiaoming drink hot water in front of his computer?",
        punchline: "Because he's studying Java, and wants to 'Java' (make it warm).",
        setupZh: "為什麼小明坐在電腦前看程式碼時，一定要喝熱水？",
        punchlineZh: "因為他在學習 Java，所以想幫自己「加溫」(Java)！",
        emoji: "☕️"
    },
    {
        category: "programmer",
        setup: "There are 10 types of people in the world...",
        punchline: "Those who understand binary, and those who don't.",
        setupZh: "世界上只有 10 種人...",
        punchlineZh: "一種是懂得二進位的人，另一種是不懂二進位的人。",
        emoji: "🔢"
    },
    {
        category: "programmer",
        setup: "Why do programmers hate going into nature?",
        punchline: "Because there are way too many bugs out there.",
        setupZh: "為什麼程式設計師特別不喜歡去大自然露營？",
        punchlineZh: "因為那裡面的 Bug (昆蟲) 實在是太多了！",
        emoji: "🐛"
    },
    {
        category: "programmer",
        setup: "Why do programmers dislike going to the beach?",
        punchline: "Because they're tired of sandboxes.",
        setupZh: "為什麼工程師放假不喜歡去沙灘玩耍？",
        punchlineZh: "因為他們平常在測試環境裡就已經看膩 Sandbox (沙盒) 了！",
        emoji: "🏖️"
    },
    {
        category: "programmer",
        setup: "An SQL query walks into a bar, walks up to two tables and asks...",
        punchline: "'Can I join you?'",
        setupZh: "一個 SQL 查詢語句走進酒吧，走到兩張桌子旁問...",
        punchlineZh: "「請問我可以 JOIN (加入) 你們嗎？」",
        emoji: "🗄️"
    },
    {
        category: "programmer",
        setup: "Why couldn't Isaac Newton be a programmer?",
        punchline: "Because he got hit by an Apple and spent all his time trying to explain it.",
        setupZh: "為什麼物理學家牛頓如果活在現代，不適合當程式設計師？",
        punchlineZh: "因為他被 Apple 砸中之後，沒去修 Bug，反而花了一輩子去解釋它。",
        emoji: "🍎"
    },
    {
        category: "programmer",
        setup: "Programming is like writing poetry...",
        punchline: "Except most people write limericks, and the compiler is a picky editor.",
        setupZh: "寫程式就像是在寫詩歌...",
        punchlineZh: "只不過大多數人寫的都是打油詩，而編譯器則是一個吹毛求疵的編輯。",
        emoji: "✍️"
    },
    {
        category: "programmer",
        setup: "'Mom, why does the sun rise in the east and set in the west?'",
        punchline: "'Don't touch it, dear. It's legacy code, but it works perfectly.'",
        setupZh: "「媽媽，為什麼每天太陽都會從東邊升起、西邊落下呢？」",
        punchlineZh: "「孩子，別去動它！那是 Legacy code (舊系統遺留程式碼)，雖然沒人懂原理但它動得好好的。」",
        emoji: "☀️"
    },
    {
        category: "programmer",
        setup: "A programmer's wife says: 'Go buy 3 loaves of bread, and if you see watermelons, buy 1.'",
        punchline: "The programmer returns with 1 loaf. Wife: 'Why only 1?' - 'Because I saw watermelons.'",
        setupZh: "老婆吩咐工程師老公：「去店裡買 3 個麵包，如果看到賣西瓜的，買 1 個回來。」",
        punchlineZh: "工程師最後只抱了 1 個麵包回家。老婆問：「為什麼只買 1 個？」工程師說：「因為我看到賣西瓜的了。」",
        emoji: "🍉"
    },
    {
        category: "programmer",
        setup: "Why do programmers confuse Halloween and Christmas?",
        punchline: "Because Oct 31 equals Dec 25!",
        setupZh: "為什麼程式工程師常常把萬聖節和聖誕節搞混？",
        punchlineZh: "因為八進位的 31 (Oct 31) 等於十進位的 25 (Dec 25)！",
        emoji: "🎃"
    },
    {
        category: "programmer",
        setup: "What is a programmer's favorite hangout spot?",
        punchline: "Foo Bar.",
        setupZh: "工程師下班最喜歡去哪家小酒吧聚會？",
        punchlineZh: "那家叫 Foo Bar 的酒吧。",
        emoji: "🍻"
    },
    {
        category: "programmer",
        setup: "Why don't programmers eat breakfast?",
        punchline: "Because they usually wake up at 4:04 AM, and breakfast is not found.",
        setupZh: "為什麼大部分的軟體工程師都不習慣吃早餐？",
        punchlineZh: "因為他們起床時往往都已經是 404 (Not Found) 的時間了。",
        emoji: "🥪"
    },
    {
        category: "cold",
        setup: "Why is the moon so romantic?",
        punchline: "Because it's constantly running its orbit loop around the Earth.",
        setupZh: "為什麼天上的月亮是個暖男？",
        punchlineZh: "因為他無時無刻都在為地球「運行」(Run) 著軌道迴圈。",
        emoji: "🌙"
    },
    {
        category: "cold",
        setup: "What fruit is the smartest of them all?",
        punchline: "Pears. Because they are always 'peer' reviewed.",
        setupZh: "什麼水果最聰明、IQ 最高？",
        punchlineZh: "梨子！因為它們經常通過「同儕審查」(Peer / 梨 review)！",
        emoji: "🍐"
    },
    {
        category: "programmer",
        setup: "How do you tell if HTML is a programming language?",
        punchline: "Say it is in front of real programmers, and measure the velocity of their eye rolls.",
        setupZh: "如何分辨 HTML 究竟是不是程式語言？",
        punchlineZh: "直接在工程師面前說「HTML 是程式語言」，然後測量他們翻白眼的速度即可。",
        emoji: "🙄"
    },
    {
        category: "cold-war",
        setup: "An American dog, a Polish dog, and a Soviet dog meet. The American dog says: 'In my country, if you bark long enough, someone will give you meat.'",
        punchline: "The Polish dog asks: 'What is meat?' The Soviet dog asks: 'What is bark?'",
        setupZh: "一隻美國狗、一隻波蘭狗和一隻蘇聯狗相遇。美國狗得意地說：「在我們國家，只要你叫得夠久，就會有人給你肉吃。」",
        punchlineZh: "波蘭狗疑惑地問：「什麼是『肉』？」蘇聯狗則害怕地問：「什麼是『叫』？」",
        emoji: "🐕"
    },
    {
        category: "cold-war",
        setup: "Reagan and Gorbachev run a head-to-head two-car race. Reagan wins.",
        punchline: "The next day, Soviet newspaper Pravda reports: 'In the international car race, General Secretary Gorbachev won a glorious second place, while US President Reagan came in next-to-last.'",
        setupZh: "美國總統雷根和蘇聯總書記戈巴契夫進行了一場兩人的私人賽車對決，最後雷根贏了。",
        punchlineZh: "隔天蘇聯《真理報》頭條報導：「在國際賽車大賽中，我們偉大的戈巴契夫總書記榮獲第二名佳績！而美國總統雷根則是不幸落入倒數第二名。」",
        emoji: "🏎️"
    },
    {
        category: "cold-war",
        setup: "A citizen is waiting in a massive line to buy bread in Moscow. Furious, he shouts: 'I\'ve had enough! I\'m going to the Kremlin to shoot the General Secretary!'",
        punchline: "Two hours later, he returns to the line. People ask: 'Did you shoot him?' - 'No, the line over there was even longer!'",
        setupZh: "莫斯科街頭，一名男子排了數個小時的長隊買麵包，終於氣瘋了，大喊：「我不排了！我要去克里姆林宮把總書記崩了！」說完憤而離去。",
        punchlineZh: "兩個小時後，他垂頭喪氣地回到隊伍中。大家悄悄問他：「你動手了嗎？」他嘆氣道：「沒有，克里姆林宮那邊想開槍的人排得比這還長！」",
        emoji: "🥖"
    },
    {
        category: "cold-war",
        setup: "Three men are sitting in a Gulag cell and ask each other why they were arrested. The first says: 'I was 5 minutes late, so they accused me of spying.' The second says: 'I was 5 minutes early, so they accused me of infiltrating.'",
        punchline: "The third man sighs: 'I arrived exactly on time, so they accused me of buying a Western watch.'",
        setupZh: "西伯利亞古拉格集中營裡有三個囚犯。第一個說：「我上班遲到了五分鍾，他們控告我企圖怠工破壞社會主義經濟。」第二個說：「我上班早到了五分鍾，他們控告我是西方派來的滲透特務。」",
        punchlineZh: "第三個搖搖頭嘆道：「我每天都分秒不差準時上班，結果他們控告我非法購買並使用西方的走私手錶。」",
        emoji: "⛓️"
    },
    {
        category: "cold-war",
        setup: "Gorbachev, running late for a meeting, tells his chauffeur to sit in the back so he can drive. He speeds and gets pulled over by a cop.",
        punchline: "The cop looks in the window, runs back to his chief and says: 'I can't ticket him! He's too important!' - 'Who is it? Reagan?' - 'I don\'t know, but his driver is Gorbachev!'",
        setupZh: "戈巴契夫開會快要遲到了，他命令司機坐到後座，自己親自踩油門飆車。因為超速被一名年輕警員攔了下來。",
        punchlineZh: "警員看了一眼車內，驚慌失措地跑回警長身長說：「我不敢開單！車裡那個人太大咖了！」警長問：「是誰？雷根嗎？」警員顫抖地說：「我不知道他是誰，但他的司機是戈巴契夫！」",
        emoji: "👮"
    },
    {
        category: "life",
        setup: "How do you know an introvert likes you?",
        punchline: "They look at your shoes instead of their own when talking to you.",
        setupZh: "如何知道一個性格內向的人真的非常喜歡你？",
        punchlineZh: "當他鼓起勇氣跟你聊天時，他會一直盯著「你的鞋子」而不是他自己的鞋子。",
        emoji: "👟"
    },
    {
        category: "life",
        setup: "A PM, a QA engineer, and a Developer get into a car. The brakes fail and the car starts rolling down a hill.",
        punchline: "PM: 'Let\'s form a committee!' QA: 'Let\'s push it back up and repeat!' Developer: 'Let\'s keep riding, maybe it\'s a feature!'",
        setupZh: "一位專案經理（PM）、測試工程師（QA）和開發工程師（RD）坐在一輛車裡，下山時煞車突然失靈！",
        punchlineZh: "PM慌喊：「快成立跨部門委員會分析風險！」QA提議：「我們推回山頂再滑一次看能不能重現 Bug！」RD冷靜道：「大家坐好，煞車失靈也許是這款車的隱藏功能 (Feature)。」",
        emoji: "🚗"
    },
    {
        category: "life",
        setup: "Why did the student tell the professor that cold weather is like bad statistics?",
        punchline: "Because it makes you shiver with biased variables!",
        setupZh: "為什麼學生跟統計學教授抱怨寒冷的天氣很像「糟糕的數據分析」？",
        punchlineZh: "因為兩者都會讓你因為「偏差的變數」（Biased variables，諧音冷到發抖）而直打冷顫！",
        emoji: "🥶"
    },
    {
        category: "cold",
        setup: "Why does a gun get depressed if you paint a knife blue?",
        punchline: "Because blue knives are impenetrable (in Chinese 'Dao Qiang Bu Ru / Blue')!",
        setupZh: "為什麼把「刀」塗成藍色 (Blue) 的，旁邊的「槍」就會很憂鬱？",
        punchlineZh: "因為「刀槍不入 (Blue)」！",
        emoji: "⚔️"
    },
    {
        category: "cold",
        setup: "Why do foxes trip and fall all the time?",
        punchline: "Because they are foxes (in Chinese 'Jiao Hua / slippery feet')!",
        setupZh: "為什麼狐狸在路上散步的時候，常常會跌倒？",
        punchlineZh: "因為牠們「腳滑」(狡猾)！",
        emoji: "🦊"
    },
    {
        category: "cold",
        setup: "A sheep calls an eagle, and the eagle answers 'Wei?' What idiom is this?",
        punchline: "阳奉阴违 (Sheep Phone Eagle 'Wei')!",
        setupZh: "小羊打電話給老鷹，老鷹接起來說：「喂？」這代表哪一個成語？",
        punchlineZh: "「陽奉陰違」(羊 Phone 鷹 \"wei\")！",
        emoji: "🦅"
    },
    {
        category: "cold",
        setup: "What is a very polite mouse called?",
        punchline: "Polite mouse (in Chinese 'Bu Hao Yi Shu / Excuse me')!",
        setupZh: "請問什麼樣的老鼠最懂禮貌、家教最好？",
        punchlineZh: "「不好意鼠」(不好意思)！",
        emoji: "🐭"
    },
    {
        category: "cold",
        setup: "When does 2 + 1 not equal 3?",
        punchline: "When you calculate it wrong!",
        setupZh: "請問在什麼時候，2 加 1 會不等於 3？",
        punchlineZh: "算錯的時候！",
        emoji: "➕"
    }
];

// Export for usage
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = jokes;
}
