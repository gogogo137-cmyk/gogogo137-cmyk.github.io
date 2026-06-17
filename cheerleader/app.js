// Cheerleaders Database
const cheerleaders = [
    {
        id: "dahye",
        name: "李多慧 (이다혜)",
        nameEn: "Dahye Lee",
        team: "味全龍 Dragon Beauties / 台啤雲豹",
        leagues: ["cpbl", "tpbl"],
        nationality: "korea",
        popularity: 980000,
        emoji: "🐉",
        image: "assets/dahye.png",
        bio: "來自韓國的應援女神，以頂尖的爆發力舞技與極具親和力的標誌性笑容風靡全台，掀起了中職與職籃啦啦隊的「韓流旋風」，實力深受各界認可。",
        direction: "專業舞蹈編排與表演、個人YouTube Vlogger、電視廣告品牌代言、多棲藝人發展。"
    },
    {
        id: "mizuki",
        name: "林襄 (林襄)",
        nameEn: "Mizuki",
        team: "味全龍 Dragon Beauties",
        leagues: ["cpbl"],
        nationality: "taiwan",
        popularity: 920000,
        emoji: "🍒",
        image: "assets/mizuki.png",
        bio: "台灣指標性的啦啦隊超人氣隊員，笑容甜美、身形姣好。不僅在球場上活力四射，也是潮流時尚、寫真集與廣告代言的流量焦點，海外名氣響亮。",
        direction: "時尚模特兒、電視節目主持、寫真書出版、海外娛樂圈活動與戲劇發展。"
    },
    {
        id: "qunqun",
        name: "峮峮 (吳函峮)",
        nameEn: "Qunqun",
        team: "中信兄弟 Passion Sisters",
        leagues: ["cpbl"],
        nationality: "taiwan",
        popularity: 880000,
        emoji: "🐘",
        image: "assets/qunqun.png",
        bio: "憑藉一首「炸裂應援曲」红遍亞洲，擁有鄰家女孩般的甜美笑容與率真性格。多年來深耕球場應援與演藝圈，是橫跨啦啦隊與主持界的老牌女神。",
        direction: "電視綜藝主持（如《飢餓遊戲》）、影視戲劇演出、品牌聯名代言人。"
    },
    {
        id: "an",
        name: "安芝儇 (안지현)",
        nameEn: "Ji-hyun An",
        team: "台鋼雄鷹 Wing Stars / 台鋼獵鷹",
        leagues: ["cpbl", "tpbl"],
        nationality: "korea",
        popularity: 750000,
        emoji: "🦅",
        image: "assets/an.png",
        bio: "被譽為韓國「啦啦隊天花板」，身形高挑、舞姿優美儒雅。受邀來台後擔任台鋼啦啦隊總監與核心招牌，成功將韓式應援的精髓融入本土球隊。",
        direction: "啦啦隊編舞與培訓總監、跨國體育推廣大使、高階彩妝與時尚代言。"
    },
    {
        id: "cimei",
        name: "慈妹 (彭翊慈)",
        nameEn: "Cimei",
        team: "富邦悍將 / 台北富邦勇士 Fubon Angels",
        leagues: ["cpbl", "tpbl"],
        nationality: "taiwan",
        popularity: 680000,
        emoji: "👼",
        image: "assets/cimei.png",
        bio: "Fubon Angels 的人氣招牌，身形嬌小卻有強大的舞台爆發力，畢業於專業舞蹈科系，擅長多元舞風，性格活潑開朗，與現場球迷互動性極強。",
        direction: "街舞編排與教學、實境節目嘉賓、網路影音主持及運動休閒品牌代言。"
    },
    {
        id: "se7en",
        name: "瑟七 (林芮安)",
        nameEn: "Se7en",
        team: "統一獅 Uni-Girls / 新竹攻城獅 Muse Girls",
        leagues: ["cpbl", "tpbl"],
        nationality: "taiwan",
        popularity: 580000,
        emoji: "🦁",
        image: "assets/se7en.png",
        bio: "橫跨職棒與職籃雙棲，有著甜美深邃的電眼與開朗的陽光氣質，以青春洋溢、毫無架子的活潑表現受到廣大棒籃球迷的喜愛。",
        direction: "體育球團推廣宣傳、遊戲實況直播、潮流與美妝品牌代言。"
    },
    {
        id: "faye",
        name: "斐棋 (許斐棋)",
        nameEn: "Faye",
        team: "統一獅 Uni-Girls / 極速超跑女排",
        leagues: ["cpbl", "tvl"],
        nationality: "taiwan",
        popularity: 450000,
        emoji: "🥁",
        image: "assets/faye.png",
        bio: "充滿音樂才華與爵士鼓實力的啦啦隊女孩，身兼職棒 Uni-Girls 與企業排球聯賽「極速超跑女排」應援，以多元才藝與活力體態為特色。",
        direction: "爵士鼓與樂器表演、戲劇與廣告演出、運動與體態管理推廣大使。"
    },
    {
        id: "like",
        name: "賴可 (賴鈺涵)",
        nameEn: "Like",
        team: "味全龍 Dragon Beauties / 台北鯨華女排",
        leagues: ["cpbl", "tvl"],
        nationality: "taiwan",
        popularity: 400000,
        emoji: "🏐",
        image: "assets/like.png",
        bio: "熱情陽光、笑容大方，同時在職棒場與排球場（台北鯨華女排）賣力應援。親和力十足，擅長帶動球場熱烈氛圍，深受排球與棒球迷支持。",
        direction: "運動戶外直播、健康生活與健身運動推廣、旅遊外景節目主持。"
    },
    {
        id: "chihiro",
        name: "千紘 (山口千紘)",
        nameEn: "Chihiro",
        team: "統一獅 Uni-Girls",
        leagues: ["cpbl"],
        nationality: "japan",
        popularity: 420000,
        emoji: "🇯🇵",
        image: "assets/chihiro.png",
        bio: "來自日本的啦啦隊美少女，將精緻可愛的日式應援風格帶進中華職棒。舞蹈動作乾淨俐落、元氣滿滿，短時間內累積了極高的跨國人氣。",
        direction: "台日文化交流推廣、日系商品與旅遊代言、舞蹈培訓交流。"
    }
];

// Current State
let activeLeague = "all";
let activeNationality = "all";
let lastSelectedIndex = -1;

// Render original stats on load
document.addEventListener("DOMContentLoaded", () => {
    renderAllCards();
    updateCansProbability();
});

// Filter functions
function filterLeague(league) {
    activeLeague = league;
    document.querySelectorAll(".league-btn").forEach(btn => btn.classList.remove("active"));
    document.getElementById(`lbtn-${league}`).classList.add("active");
    renderAllCards();
    updateCansProbability();
}

function filterNationality(nat) {
    activeNationality = nat;
    document.querySelectorAll(".nat-btn").forEach(btn => btn.classList.remove("active"));
    document.getElementById(`nbtn-${nat}`).classList.add("active");
    renderAllCards();
    updateCansProbability();
}

// Get currently filtered list
function getFilteredList() {
    return cheerleaders.filter(c => {
        const leagueMatch = (activeLeague === "all" || c.leagues.includes(activeLeague));
        const natMatch = (activeNationality === "all" || c.nationality === activeNationality);
        return leagueMatch && natMatch;
    });
}

// Render cards in the pool gallery
function renderAllCards() {
    const listContainer = document.getElementById("cheer-grid");
    if (!listContainer) return;

    const filtered = getFilteredList();
    listContainer.innerHTML = "";

    if (filtered.length === 0) {
        listContainer.innerHTML = `<div class="no-data">沒有符合篩選條件的隊員</div>`;
        return;
    }

    filtered.forEach(c => {
        // Translate leagues
        const leagueBadges = c.leagues.map(l => {
            if (l === "cpbl") return `<span class="badge badge-cpbl">職棒</span>`;
            if (l === "tpbl") return `<span class="badge badge-tpbl">職籃</span>`;
            return `<span class="badge badge-tvl">職排</span>`;
        }).join(" ");

        // Translate nationality
        let natText = "台灣";
        if (c.nationality === "korea") natText = "韓國";
        if (c.nationality === "japan") natText = "日本";

        const card = document.createElement("div");
        card.className = "cheer-mini-card";
        card.innerHTML = `
            <div class="mini-card-img" style="background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 199, 44, 0.05) 100%)">
                <img src="${c.image}" alt="${c.name}">
            </div>
            <div class="mini-card-info">
                <h4>${c.emoji} ${c.name}</h4>
                <p class="mini-card-team">${c.team}</p>
                <div class="mini-card-badges">
                    <span class="badge-nat">${natText}</span>
                    ${leagueBadges}
                </div>
            </div>
        `;
        listContainer.appendChild(card);
    });
}

// Update the probability badges on the screen without spinning
function updateCansProbability() {
    const filtered = getFilteredList();
    const sumSqrt = filtered.reduce((sum, c) => sum + Math.sqrt(c.popularity), 0);
    const poolCountText = document.getElementById("pool-count");
    if (poolCountText) {
        poolCountText.textContent = `當前篩選池：${filtered.length} 人`;
    }
}

// Weighted Random Picker based on SQRT(popularity)
function spinWheel() {
    const filtered = getFilteredList();
    if (filtered.length === 0) {
        alert("當前篩選池內沒有隊員，請調整篩選標籤！");
        return;
    }

    const btn = document.getElementById("btn-spin");
    btn.disabled = true;
    btn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> 正在應援抽選...`;

    // Visual Spin Effect (rapid swapping name/image)
    let count = 0;
    const maxSpins = 25;
    const interval = setInterval(() => {
        const tempIdx = Math.floor(Math.random() * filtered.length);
        const temp = filtered[tempIdx];
        renderPreviewCard(temp, "?%", true);
        count++;

        if (count >= maxSpins) {
            clearInterval(interval);
            
            // Execute the actual math picker
            const weights = filtered.map(c => Math.sqrt(c.popularity));
            const totalWeight = weights.reduce((sum, w) => sum + w, 0);
            const randomNum = Math.random() * totalWeight;

            let winner = filtered[filtered.length - 1];
            let winnerProb = 0;
            let weightSum = 0;
            
            for (let i = 0; i < filtered.length; i++) {
                weightSum += weights[i];
                if (randomNum <= weightSum) {
                    winner = filtered[i];
                    winnerProb = (weights[i] / totalWeight) * 100;
                    break;
                }
            }

            // Display Winner
            renderPreviewCard(winner, winnerProb.toFixed(2) + "%", false);
            triggerCelebration();

            btn.disabled = false;
            btn.innerHTML = `<i class="fa-solid fa-ranking-star"></i> 開始隨機應援！`;
        }
    }, 80);
}

// Show the cheerleader in the spotlight card
function renderPreviewCard(c, probText, isSpinning) {
    const imgEl = document.getElementById("spotlight-img");
    const nameEl = document.getElementById("spotlight-name");
    const teamEl = document.getElementById("spotlight-team");
    const popEl = document.getElementById("spotlight-popularity");
    const sqrtEl = document.getElementById("spotlight-sqrt");
    const probEl = document.getElementById("spotlight-prob");
    const bioEl = document.getElementById("spotlight-bio");
    const dirEl = document.getElementById("spotlight-direction");

    // Images
    imgEl.src = c.image;
    imgEl.alt = c.name;
    
    if (isSpinning) {
        imgEl.classList.add("spinning-effect");
        nameEl.textContent = `${c.emoji} ???`;
        teamEl.textContent = "正在連線球場...";
        popEl.textContent = "計算中...";
        sqrtEl.textContent = "計算中...";
        probEl.textContent = probText;
        bioEl.textContent = "正在下載個人應援簡歷資訊...";
        dirEl.textContent = "正在載入職業生涯方向資訊...";
    } else {
        imgEl.classList.remove("spinning-effect");
        
        let natText = "台灣籍 (Taiwan)";
        if (c.nationality === "korea") natText = "韓國籍 (Korea)";
        if (c.nationality === "japan") natText = "日本籍 (Japan)";

        nameEl.innerHTML = `${c.emoji} ${c.name} <span class="spotlight-nat">${natText}</span>`;
        teamEl.textContent = c.team;
        popEl.textContent = c.popularity.toLocaleString();
        sqrtEl.textContent = Math.sqrt(c.popularity).toFixed(1);
        probEl.textContent = probText;
        bioEl.textContent = c.bio;
        dirEl.textContent = c.direction;
    }
}

// Celebration particle effects (simplified canvas or simple emojis)
function triggerCelebration() {
    const card = document.querySelector(".spotlight-card");
    if (!card) return;

    card.classList.add("bounce-anim");
    setTimeout(() => {
        card.classList.remove("bounce-anim");
    }, 600);
}
