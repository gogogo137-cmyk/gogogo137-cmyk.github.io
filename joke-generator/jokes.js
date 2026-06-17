const jokes = [
    {
        setup: "Why do programmers wear glasses?",
        punchline: "Because they can't C#.",
        setupZh: "為什麼工程師特別容易近視需要戴眼鏡？",
        punchlineZh: "因為他們不會 C# (See sharp / 看得清楚)。",
        emoji: "🤓"
    },
    {
        setup: "What is the widest line in the world?",
        punchline: "Line 80 in a programmer's code.",
        setupZh: "世界上最寬的線是什麼線？",
        punchlineZh: "程式碼的 Line 80 (限制行寬的警戒線)。",
        emoji: "📏"
    },
    {
        setup: "Why is the McDonald's Big Mac so popular among IT folks?",
        punchline: "Because it's a Big Mac (Macs are cooler than Windows!).",
        setupZh: "為什麼大麥克 (Big Mac) 在 IT 工程師之間特別受歡迎？",
        punchlineZh: "因為它是 Big Mac (用 Mac 寫程式就是比較潮)！",
        emoji: "🍔"
    },
    {
        setup: "Two bananas were going for a walk. One felt hot, peeled off its skin, and...",
        punchline: "The other banana slipped on it!",
        setupZh: "兩隻香蕉在街上散步，其中一隻覺得很熱，就把皮脫掉，結果呢？",
        punchlineZh: "另一隻香蕉就踩到皮滑倒了！",
        emoji: "🍌"
    },
    {
        setup: "Which fruit dresses up the most?",
        punchline: "Starfruit, because it's a Star fruit!",
        setupZh: "什麼水果最注重穿搭、最會打扮？",
        punchlineZh: "楊桃！因為它是 Star fruit (星級水果)！",
        emoji: "⭐️"
    },
    {
        setup: "Why does Xiaoming drink hot water in front of his computer?",
        punchline: "Because he's studying Java, and wants to 'Java' (make it warm).",
        setupZh: "為什麼小明坐在電腦前看程式碼時，一定要喝熱水？",
        punchlineZh: "因為他在學習 Java，所以想幫自己「加溫」(Java)！",
        emoji: "☕️"
    },
    {
        setup: "There are 10 types of people in the world...",
        punchline: "Those who understand binary, and those who don't.",
        setupZh: "世界上只有 10 種人...",
        punchlineZh: "一種是懂得二進位的人，另一種是不懂二進位的人。",
        emoji: "🔢"
    },
    {
        setup: "Why do programmers hate going into nature?",
        punchline: "Because there are way too many bugs out there.",
        setupZh: "為什麼程式設計師特別不喜歡去大自然露營？",
        punchlineZh: "因為那裡面的 Bug (昆蟲) 實在是太多了！",
        emoji: "🐛"
    },
    {
        setup: "Why do programmers dislike going to the beach?",
        punchline: "Because they're tired of sandboxes.",
        setupZh: "為什麼工程師放假不喜歡去沙灘玩耍？",
        punchlineZh: "因為他們平常在測試環境裡就已經看膩 Sandbox (沙盒) 了！",
        emoji: "🏖️"
    },
    {
        setup: "An SQL query walks into a bar, walks up to two tables and asks...",
        punchline: "'Can I join you?'",
        setupZh: "一個 SQL 查詢語句走進酒吧，走到兩張桌子旁問...",
        punchlineZh: "「請問我可以 JOIN (加入) 你們嗎？」",
        emoji: "🗄️"
    },
    {
        setup: "Why couldn't Isaac Newton be a programmer?",
        punchline: "Because he got hit by an Apple and spent all his time trying to explain it.",
        setupZh: "為什麼物理學家牛頓如果活在現代，不適合當程式設計師？",
        punchlineZh: "因為他被 Apple 砸中之後，沒去修 Bug，反而花了一輩子去解釋它。",
        emoji: "🍎"
    },
    {
        setup: "Programming is like writing poetry...",
        punchline: "Except most people write limericks, and the compiler is a picky editor.",
        setupZh: "寫程式就像是在寫詩歌...",
        punchlineZh: "只不過大多數人寫的都是打油詩，而編譯器則是一個吹毛求疵的編輯。",
        emoji: "✍️"
    },
    {
        setup: "'Mom, why does the sun rise in the east and set in the west?'",
        punchline: "'Don't touch it, dear. It's legacy code, but it works perfectly.'",
        setupZh: "「媽媽，為什麼每天太陽都會從東邊升起、西邊落下呢？」",
        punchlineZh: "「孩子，別去動它！那是 Legacy code (舊系統遺留程式碼)，雖然沒人懂原理但它動得好好的。」",
        emoji: "☀️"
    },
    {
        setup: "A programmer's wife says: 'Go buy 3 loaves of bread, and if you see watermelons, buy 1.'",
        punchline: "The programmer returns with 1 loaf. Wife: 'Why only 1?' - 'Because I saw watermelons.'",
        setupZh: "老婆吩咐工程師老公：「去店裡買 3 個麵包，如果看到賣西瓜的，買 1 個回來。」",
        punchlineZh: "工程師最後只抱了 1 個麵包回家。老婆問：「為什麼只買 1 個？」工程師說：「因為我看到賣西瓜的了。」",
        emoji: "🍉"
    },
    {
        setup: "Why do programmers confuse Halloween and Christmas?",
        punchline: "Because Oct 31 equals Dec 25!",
        setupZh: "為什麼程式工程師常常把萬聖節和聖誕節搞混？",
        punchlineZh: "因為八進位的 31 (Oct 31) 等於十進位的 25 (Dec 25)！",
        emoji: "🎃"
    },
    {
        setup: "What is a programmer's favorite hangout spot?",
        punchline: "Foo Bar.",
        setupZh: "工程師下班最喜歡去哪家小酒吧聚會？",
        punchlineZh: "那家叫 Foo Bar 的酒吧。",
        emoji: "🍻"
    },
    {
        setup: "Why don't programmers eat breakfast?",
        punchline: "Because they usually wake up at 4:04 AM, and breakfast is not found.",
        setupZh: "為什麼大部分的軟體工程師都不習慣吃早餐？",
        punchlineZh: "因為他們起床時往往都已經是 404 (Not Found) 的時間了。",
        emoji: "🥪"
    },
    {
        setup: "Why is the moon so romantic?",
        punchline: "Because it's constantly running its orbit loop around the Earth.",
        setupZh: "為什麼天上的月亮是個暖男？",
        punchlineZh: "因為他無時無刻都在為地球「運行」(Run) 著軌道迴圈。",
        emoji: "🌙"
    },
    {
        setup: "What fruit is the smartest of them all?",
        punchline: "Pears. Because they are always 'peer' reviewed.",
        setupZh: "什麼水果最聰明、IQ 最高？",
        punchlineZh: "梨子！因為它們經常通過「同儕審查」(Peer / 梨 review)！",
        emoji: "🍐"
    },
    {
        setup: "How do you tell if HTML is a programming language?",
        punchline: "Say it is in front of real programmers, and measure the velocity of their eye rolls.",
        setupZh: "如何分辨 HTML 究竟是不是程式語言？",
        punchlineZh: "直接在工程師面前說「HTML 是程式語言」，然後測量他們翻白眼的速度即可。",
        emoji: "🙄"
    }
];

// Export for usage
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = jokes;
}
