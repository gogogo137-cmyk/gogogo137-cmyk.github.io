/**
 * 山海經 · 奇獸異誌 | Classic of Mountains & Seas
 * Application Logic & Database
 */

// 1. Mythical Beasts Database
const BEASTS_DATABASE = [
    {
        id: "nine-tailed-fox",
        nameCn: "九尾狐",
        zhuyin: "ㄐㄧㄡˇ ㄨㄟˇ ㄏㄨˊ",
        nameEn: "Nine-Tailed Fox",
        category: "auspicious", // divine, auspicious, perilous
        categoryCn: "瑞獸",
        region: "east", // east, south, west, north, central
        regionCn: "東山經 (青丘山)",
        classicText: "「青丘之山，有獸焉，其狀如狐而九尾，其音如嬰兒，能食人，食之不蠱。」",
        description: "九尾狐居住在青丘國。牠長著九條尾巴，聲音如同嬰兒啼哭一般。雖然古籍記載牠會吃人，但同時也指出，人們若食用了牠的肉，就可以避開妖邪之氣的蠱惑。在後世文化中，九尾狐逐漸演變為繁衍昌盛與太平祥瑞的吉兆。",
        image: "assets/nine_tailed_fox.png",
        stats: {
            spiritual: 85,
            aggression: 35,
            rarity: 80
        }
    },
    {
        id: "zhu-long",
        nameCn: "燭龍",
        zhuyin: "ㄓㄨˊ ㄌㄨㄥˊ",
        nameEn: "Torch Dragon / Zhu Long",
        category: "divine",
        categoryCn: "神獸",
        region: "north",
        regionCn: "北山經 (鐘山)",
        classicText: "「鐘山之神，名曰燭陰，視為晝，瞑為夜，吹為冬，呼為夏，不飲，不食，不息，息為風。身長千里。」",
        description: "燭龍又稱燭陰，是鐘山之神。牠擁有人的面孔與紅色的蛇形身軀，身長千里。祂的神力無邊，睜開雙眼世界便是白晝，閉上雙眼便是黑夜；吹氣時大地進入寒冬，呼氣時便轉為炎夏。祂不需要飲食、呼吸與休息，祂的每一次悠長呼吸，都會化作天地間的人間大風。",
        image: "assets/zhu_long.png",
        stats: {
            spiritual: 98,
            aggression: 15,
            rarity: 99
        }
    },
    {
        id: "taotie",
        nameCn: "饕餮 (麅鴞)",
        zhuyin: "ㄊㄠ ㄊㄧㄝˋ (ㄆㄠˊ ㄒㄧㄠ)",
        nameEn: "Taotie (Pao Xiao)",
        category: "perilous",
        categoryCn: "凶獸",
        region: "west",
        regionCn: "西山經 (鉤吾山)",
        classicText: "「鉤吾之山其上多玉...有獸焉，其狀如羊身人面，其目在腋下，虎齒人爪，其音如嬰兒，名曰麅鴞，食人。」",
        description: "饕餮在《山海經》中被記載為「麅鴞」。牠長著羊的身體、人的面孔，眼睛長在腋下，擁有老虎般的牙齒和人的指甲，聲音聽起來像嬰兒。饕餮極度貪食，生性凶殘且會食人。在後世中，祂被視為中國古代四大凶獸之一，常被鑄造於青銅器上，象徵無窮的貪婪與權慾。",
        image: "assets/taotie.png",
        stats: {
            spiritual: 80,
            aggression: 95,
            rarity: 88
        }
    },
    {
        id: "jingwei",
        nameCn: "精衛",
        zhuyin: "ㄐㄧㄥ ㄨㄟˋ",
        nameEn: "Jingwei Bird",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "north",
        regionCn: "北山經 (發鳩山)",
        classicText: "「發鳩之山，其上多柘木。有鳥焉，其狀如烏，文首、白喙、赤足，名曰精衛，其鳴自詨。是炎帝之少女，名曰女娃。」",
        description: "精衛原是太陽神炎帝的小女兒，名叫女娃。她在東海遊玩時不幸溺水身亡，靈魂化為一隻頭部有花紋、白嘴喙、紅爪子的神鳥。她對東海懷有極大的怨恨，每日不知疲倦地銜著西山的木枝與石子，投向波濤洶湧的東海，立志要將大海填平。象徵著永不妥協的精神。",
        image: "assets/jingwei.png",
        stats: {
            spiritual: 75,
            aggression: 10,
            rarity: 85
        }
    },
    {
        id: "qilin",
        nameCn: "麒麟",
        zhuyin: "ㄑㄧˊ ㄌㄧㄣˊ",
        nameEn: "Qilin / Kylin",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "central",
        regionCn: "中山經 (中次九經)",
        classicText: "「有獸焉，其狀如麇而一角，龍尾而馬蹄，五彩文，名曰麒麟，出則王道興。」",
        description: "麒麟是中國古代傳說中的神聖仁獸。牠的身體像麇鹿，長著獨角，擁有一條龍尾與駿馬的蹄子，身上覆蓋著五彩斑斕的鱗甲。麒麟不傷生靈，不踐踏生草，祂的出世往往預示著聖人誕生、王道興盛與天下太平。與龍、鳳、龜並稱為四大靈獸。",
        image: "assets/qilin.png",
        stats: {
            spiritual: 92,
            aggression: 5,
            rarity: 92
        }
    },
    {
        id: "xing-tian",
        nameCn: "刑天",
        zhuyin: "ㄒㄧㄥˊ ㄊㄧㄢ",
        nameEn: "Xing Tian",
        category: "divine",
        categoryCn: "神獸",
        region: "west",
        regionCn: "西山經 (海外西經)",
        classicText: "「刑天與帝至此爭神，帝斷其首，葬之常羊之山。乃以乳為目，以臍為口，操干戚以舞。」",
        description: "刑天是中國古代神話中的戰神與巨人。他與黃帝爭奪天帝神位，在激烈的搏鬥中被黃帝砍去了頭顱，頭顱被安葬在常羊山下。然而，無頭的刑天並未屈服，他以雙乳化為眼睛，以肚臍當作嘴巴，右手揮舞著戰斧（戚），左手持著盾牌（干），繼續在天地間戰鬥，象徵著永不妥協、抗爭到底的悲壯英雄靈魂。",
        image: "assets/xing_tian.png",
        stats: {
            spiritual: 90,
            aggression: 98,
            rarity: 95
        }
    },
    {
        id: "hundun",
        nameCn: "混沌 (帝江)",
        zhuyin: "ㄏㄨㄣˋ ㄉㄨㄣˋ (ㄉㄧˋ ㄐㄧㄤ)",
        nameEn: "Hundun (Di Jiang)",
        category: "perilous",
        categoryCn: "凶獸",
        region: "west",
        regionCn: "西山經 (天山)",
        classicText: "「天山...有神焉，其狀如黃囊，赤如丹火，六足四翼，渾敦無面目，是識歌舞，實為帝江也。」",
        description: "混沌又名帝江，是西方的神鳥。牠的外形像一個黃色的口袋，散發著如丹火般耀眼的紅光。牠長著六隻腳和四隻翅膀，但是完全沒有五官與面目（渾敦無面目）。混沌雖然沒有七竅，卻非常精通唱歌與跳舞。在後世中，祂被列為中國古代四大凶獸之一，代表混沌無序狀態。",
        image: "assets/hundun.png",
        stats: {
            spiritual: 85,
            aggression: 45,
            rarity: 92
        }
    },
    {
        id: "tiangou",
        nameCn: "天狗",
        zhuyin: "ㄊㄧㄢ ㄍㄡˇ",
        nameEn: "Tiangou",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "west",
        regionCn: "西山經 (陰山)",
        classicText: "「陰山...有獸焉，其狀如貍而白首，名曰天狗，其音如榴榴，可以禦凶。」",
        description: "天狗是中國古代傳說中的靈獸。不同於後世吃月亮的惡狗或日本神話中的天狗，在《山海經》原始記載中，天狗是一隻形狀像狸（野貓）、腦袋呈白色的奇特神獸。牠會發出「榴榴」的叫聲。人們豢養牠可以用來禦凶、防範妖邪與災禍，是一隻能帶來平安的吉獸。",
        image: "assets/tiangou.png",
        stats: {
            spiritual: 82,
            aggression: 30,
            rarity: 88
        }
    },
    {
        id: "bi-fang",
        nameCn: "畢方",
        zhuyin: "ㄅㄧˋ ㄈㄤ",
        nameEn: "Bi Fang Bird",
        category: "divine",
        categoryCn: "神獸",
        region: "west",
        regionCn: "西山經 (章莪山)",
        classicText: "「章莪之山...有鳥焉，其狀如鶴，一足，赤文青質而白喙，名曰畢方，其鳴自詨，見則其邑有訛火。」",
        description: "畢方是中國古代神話中的木神與火神鳥。牠的外貌像鶴，但極其奇特的是牠只有一隻腳。畢方身體呈青色，覆蓋著紅色的斑紋，嘴喙是白色的。牠的叫聲就像在呼喚自己的名字「畢方」。傳說中，只要畢方在某處出現，該城鎮或地區就會莫名奇妙地發生離奇的火災（訛火）。",
        image: "assets/bi_fang.png",
        stats: {
            spiritual: 88,
            aggression: 55,
            rarity: 90
        }
    },
    {
        id: "ling-ling",
        nameCn: "軨軨",
        zhuyin: "ㄌㄧㄥˊ ㄌㄧㄥˊ",
        nameEn: "Ling Ling",
        category: "perilous",
        categoryCn: "凶獸",
        region: "east",
        regionCn: "東山經 (空桑山)",
        classicText: "「空桑之山...有獸焉，其狀如牛而虎文，其音如欽，其名曰軨軨，見則天下大水。」",
        description: "軨軨是居住在東方空桑山的一種異獸。牠的外形長得像牛，但身上覆蓋著如老虎一般斑闌的條紋。牠叫聲奇特，聽起來就像是在喊自己的名字「軨軨」。軨軨是象徵洪水的凶獸，傳說中只要看見牠出沒，天下就會發生極大的洪水水災。",
        image: "assets/ling_ling.png",
        stats: {
            spiritual: 78,
            aggression: 70,
            rarity: 85
        }
    }
];

// 2. Lore Database
const LORE_DATABASE = {
    kuafu: {
        title: "夸父追日",
        source: "《山海經 · 海外北經》",
        paragraphs: [
            "「夸父與日逐走，入日；渴，欲得飲，飲於河、渭；河、渭不足，北飲大澤。未至，道渴而死。棄其杖，化為鄧林。」",
            "在遠古時代，夸父族的巨人首領夸父，看到太陽每日東升西落，帶給大地短暫的光明後便陷入長久的黑暗與寒冷。為了讓陽光永遠普照大地，他下定決心要追趕並抓住太陽。",
            "夸父邁開大步，風馳電掣地向著太陽的方向奔跑。他跨過高山，躍過大河，一直追到了太陽落山的地方（禺谷）。此時，火紅的太陽近在咫尺，巨大的熱量烤得夸父口乾舌燥。",
            "為了解渴，他俯身喝乾了黃河與渭水的水，但依然感到乾渴難耐。於是，他決定北上前往北方的大澤（瀚海）尋找水源。然而，就在他前往大澤的途中，因為嚴重的脫水與體力耗盡，最終倒在半路上，遺憾死去。",
            "夸父在臨死前，將自己手中的木杖拋了出去。這根木杖落地後，吸取了巨人的殘餘精氣，化作了一片廣袤繁茂的桃林（鄧林），為後世路過此處的旅人遮擋烈日、提供甘甜的桃子解渴。這個故事歌頌了挑戰大自然、追求光明的英雄主義氣概。"
        ]
    },
    jingwei: {
        title: "精衛填海",
        source: "《山海經 · 北山經》",
        paragraphs: [
            "「發鳩之山，其上多柘木。有鳥焉，其狀如烏，文首、白喙、赤足，名曰精衛，其鳴自詨。是炎帝之少女，名曰女娃。女娃遊於東海，溺而不返，故為精衛。常銜西山之木石，以堙於東海。」",
            "女娃是遠古神話中太陽神炎帝最疼愛的小女兒。一天，性格活潑的女娃獨自划著小船來到浩瀚的東海玩耍。突然，海面上狂風大作，巨浪翻滾，將女娃的小船掀翻，女娃不幸溺水身亡，再也沒有回來。",
            "女娃死後，她的靈魂與強烈的不甘化作了一隻美麗的神鳥。這隻鳥長著花紋的頭部、白色的嘴喙和鮮紅的雙爪，發出的叫聲就像在呼喚自己的名字：「精衛！精衛！」",
            "精衛痛恨奪去她生命的東海，誓要將東海填平。於是，她居住在發鳩山上，每天辛勤地飛往西山銜取一根小樹枝或一顆小石子，然後飛越千里，將它們精準地投入東海之中。",
            "面對無邊無際、波濤洶湧的大海，精衛的身影顯得無比渺小，但她日復一日、年復一年，從不停歇。這個神話故事展現了遠古人民面對無法抗拒的自然災害時，那股堅韌不拔、誓不低頭的悲壯意志。"
        ]
    },
    nuwa: {
        title: "女媧補天",
        source: "《淮南子 · 覽冥訓》（補足山海經創世神話）",
        paragraphs: [
            "「往古之時，四極廢，九州裂，天不兼覆，地不周載。火爁焱而不滅，水浩洋而不息。鷙鳥鷙老弱。於是女媧煉五色石以補蒼天，斷鰲足以立四極，殺黑龍以濟冀州，積蘆灰以止淫水。」",
            "在天地混沌初開之後，水神共工與火神祝融為了爭奪天帝之位爆發了大戰。共工戰敗後惱羞成怒，一頭撞向了支撐天地的西北天柱——不周山。天柱崩塌，導致天傾西北、地陷東南。",
            "霎時間，天空中出現了巨大的窟窿，大火肆虐無法熄滅，洪水如猛獸般在大地上奔流，各種兇猛的野獸紛紛出洞撕咬殘害人類，人類面臨著滅頂之災。",
            "人類的始祖神女媧看到自己的孩子遭受如此苦難，痛心無比。她決心修復天空。她走遍群山，尋找紅、黃、藍、白、黑五種顏色的神石，並將它們聚在一起，用神火熔煉成熔漿，填補了天空的巨大缺口。",
            "接著，為了防止天空再次塌陷，女媧斬下了一隻巨大神鰲的四隻腳，將它們作為新的天柱立在大地的四方。她還殺死了危害人間的黑龍，用蘆葦燒成的灰燼堵住了滔天的洪水。終於，風雨停息，萬物復甦，人類重新過上了安寧的日子。"
        ]
    }
};

// 3. Current Filters State
let currentCategory = "all";
let currentRegion = "all";

// 4. Dom Elements
const beastGrid = document.getElementById("beast-cards-grid");
const filterStatusText = document.getElementById("filter-status-text");
const navTabs = document.querySelectorAll(".nav-tab");
const tabPanes = document.querySelectorAll(".tab-pane");

const luoPan = document.getElementById("luo-pan-compass");
const compassCenter = document.getElementById("compass-center");
const directionLabels = document.querySelectorAll(".direction-label");
const needle = document.querySelector(".needle");

// Modals
const beastModal = document.getElementById("beast-modal");
const beastModalClose = document.getElementById("modal-close");
const storyModal = document.getElementById("story-modal");
const storyModalClose = document.getElementById("story-modal-close");

// Modal Elements
const modalImg = document.getElementById("modal-beast-img");
const modalRegion = document.getElementById("modal-beast-region");
const modalCategory = document.getElementById("modal-beast-category");
const modalName = document.getElementById("modal-beast-name");
const modalEnglish = document.getElementById("modal-beast-english");
const modalClassic = document.getElementById("modal-beast-classic");
const modalDesc = document.getElementById("modal-beast-desc");
const statSpiritual = document.getElementById("stat-spiritual");
const statAggression = document.getElementById("stat-aggression");
const statRarity = document.getElementById("stat-rarity");
const valSpiritual = document.getElementById("val-spiritual");
const valAggression = document.getElementById("val-aggression");
const valRarity = document.getElementById("val-rarity");

const modalStoryTitle = document.getElementById("modal-story-title");
const modalStoryBody = document.getElementById("modal-story-body");

// 5. Initialize the App
document.addEventListener("DOMContentLoaded", () => {
    initParticles();
    renderBeasts();
    setupTabNavigation();
    setupFilters();
    setupCompass();
    setupModalListeners();
});

// 6. Particle Engine (Spiritual Embers)
function initParticles() {
    const canvas = document.getElementById("particles-canvas");
    const ctx = canvas.getContext("2d");
    
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    
    window.addEventListener("resize", () => {
        width = (canvas.width = window.innerWidth);
        height = (canvas.height = window.innerHeight);
    });
    
    const particles = [];
    const maxParticles = 65;
    
    class Particle {
        constructor() {
            this.reset();
        }
        
        reset() {
            this.x = Math.random() * width;
            this.y = height + Math.random() * 50;
            this.size = Math.random() * 2.5 + 0.5;
            this.speedY = Math.random() * 0.8 + 0.2;
            this.speedX = Math.random() * 0.6 - 0.3;
            // Gold and warm red particles
            this.color = Math.random() > 0.3 
                ? `rgba(212, 175, 55, ${Math.random() * 0.4 + 0.15})` // Gold
                : `rgba(178, 34, 34, ${Math.random() * 0.3 + 0.1})`;  // Vermilion
            this.alpha = 1;
            this.fadeSpeed = Math.random() * 0.005 + 0.002;
        }
        
        update() {
            this.y -= this.speedY;
            this.x += this.speedX;
            
            if (this.y < -10) {
                this.reset();
            }
        }
        
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
        }
    }
    
    for (let i = 0; i < maxParticles; i++) {
        particles.push(new Particle());
        // Stagger positions initially
        particles[i].y = Math.random() * height;
    }
    
    function animate() {
        ctx.clearRect(0, 0, width, height);
        
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        
        requestAnimationFrame(animate);
    }
    
    animate();
}

// 7. Render Beasts Cards
function renderBeasts() {
    beastGrid.innerHTML = "";
    
    const filteredBeasts = BEASTS_DATABASE.filter(beast => {
        const matchesCategory = currentCategory === "all" || beast.category === currentCategory;
        const matchesRegion = currentRegion === "all" || beast.region === currentRegion;
        return matchesCategory && matchesRegion;
    });
    
    if (filteredBeasts.length === 0) {
        beastGrid.innerHTML = `
            <div class="no-results">
                <i class="fa-solid fa-ghost"></i>
                <p>此方經脈暫無對應異獸出沒...</p>
                <button class="reset-filter-btn" id="reset-filters">重置篩選</button>
            </div>
        `;
        document.getElementById("reset-filters").addEventListener("click", resetAllFilters);
        filterStatusText.innerText = "沒有找到匹配的異獸";
        return;
    }
    
    filteredBeasts.forEach(beast => {
        const card = document.createElement("div");
        card.className = "beast-card";
        card.setAttribute("data-id", beast.id);
        
        // Badge color mapping
        let badgeClass = "badge-divine";
        if (beast.category === "auspicious") badgeClass = "badge-auspicious";
        if (beast.category === "perilous") badgeClass = "badge-perilous";
        
        card.innerHTML = `
            <div class="beast-image-wrapper">
                <img src="${beast.image}" alt="${beast.nameCn}" loading="lazy">
                <span class="card-badge ${badgeClass}">${beast.categoryCn}</span>
                <span class="card-region"><i class="fa-solid fa-map-pin"></i> ${beast.regionCn.split(" ")[0]}</span>
            </div>
            <div class="beast-card-info">
                <div class="beast-card-header">
                    <div class="beast-names">
                        <h2 class="beast-title-cn">${beast.nameCn} <span class="beast-zhuyin">(${beast.zhuyin})</span></h2>
                        <span class="beast-title-en">${beast.nameEn}</span>
                    </div>
                </div>
                <p class="beast-classic-extract">${beast.classicText}</p>
                <button class="view-details-btn" data-id="${beast.id}"><i class="fa-solid fa-eye"></i> 觀看異誌</button>
            </div>
        `;
        
        beastGrid.appendChild(card);
    });
    
    // Add Event Listeners for Details buttons
    document.querySelectorAll(".view-details-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            openBeastModal(btn.getAttribute("data-id"));
        });
    });
    
    filterStatusText.innerText = `正在展示：屬性【${getCategoryLabel(currentCategory)}】，地域【${getRegionLabel(currentRegion)}】 (共 ${filteredBeasts.length} 隻)`;
}

// 8. Tab Navigation
function setupTabNavigation() {
    navTabs.forEach(tab => {
        tab.addEventListener("click", () => {
            // Remove active classes
            navTabs.forEach(t => t.classList.remove("active"));
            tabPanes.forEach(p => p.classList.remove("active"));
            
            // Add active class
            tab.classList.add("active");
            const targetPane = document.getElementById(tab.getAttribute("data-target"));
            targetPane.classList.add("active");
        });
    });
    
    // Setup scroll reading buttons in Tab 2
    document.querySelectorAll(".read-scroll-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            openStoryModal(btn.getAttribute("data-story"));
        });
    });
}

// 9. Filters Handling
function setupFilters() {
    const filterButtons = document.querySelectorAll(".filter-btn");
    
    filterButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const filterType = btn.getAttribute("data-filter-type");
            const value = btn.getAttribute("data-value");
            
            // Toggle active state in sibling buttons
            const siblings = btn.parentElement.querySelectorAll(".filter-btn");
            siblings.forEach(s => s.classList.remove("active"));
            btn.classList.add("active");
            
            if (filterType === "category") {
                currentCategory = value;
            } else if (filterType === "region") {
                currentRegion = value;
                // Sync compass compass ring active state
                syncCompassState(value);
            }
            
            renderBeasts();
        });
    });
}

// 10. Luo Pan Compass Sync and Interactions
function setupCompass() {
    directionLabels.forEach(label => {
        label.addEventListener("click", (e) => {
            e.stopPropagation(); // Avoid double trigger
            const dir = label.getAttribute("data-dir");
            rotateCompassToDirection(dir);
        });
    });
    
    compassCenter.addEventListener("click", (e) => {
        e.stopPropagation();
        rotateCompassToDirection("central");
    });
}

function rotateCompassToDirection(dir) {
    let rotation = 0;
    
    // De-activate all labels
    directionLabels.forEach(lbl => lbl.classList.remove("active"));
    compassCenter.classList.remove("active");
    
    if (dir === "north") {
        rotation = 0;
        document.querySelector(".dir-n").classList.add("active");
        needle.style.opacity = "1";
        needle.style.transform = `translateY(11px) rotate(0deg)`;
    } else if (dir === "east") {
        rotation = -90;
        document.querySelector(".dir-e").classList.add("active");
        needle.style.opacity = "1";
        needle.style.transform = `translateY(11px) rotate(90deg)`;
    } else if (dir === "south") {
        rotation = -180;
        document.querySelector(".dir-s").classList.add("active");
        needle.style.opacity = "1";
        needle.style.transform = `translateY(11px) rotate(180deg)`;
    } else if (dir === "west") {
        rotation = -270;
        document.querySelector(".dir-w").classList.add("active");
        needle.style.opacity = "1";
        needle.style.transform = `translateY(11px) rotate(270deg)`;
    } else if (dir === "central") {
        rotation = 45; // Subtle tilt for middle
        compassCenter.classList.add("active");
        needle.style.opacity = "0.2"; // Fade out needle in the center
    }
    
    // Rotate the outer compass disk
    luoPan.style.transform = `rotate(${rotation}deg)`;
    
    // Set Region Filter Value & Trigger render
    currentRegion = dir;
    
    // Update active filter button in tab
    const regionButtons = document.querySelectorAll('#select-region .filter-btn');
    regionButtons.forEach(btn => {
        if (btn.getAttribute("data-value") === dir) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });
    
    renderBeasts();
}

function syncCompassState(regionValue) {
    directionLabels.forEach(lbl => lbl.classList.remove("active"));
    compassCenter.classList.remove("active");
    
    let rotation = 0;
    
    if (regionValue === "north") {
        document.querySelector(".dir-n").classList.add("active");
        needle.style.opacity = "1";
        needle.style.transform = `translateY(11px) rotate(0deg)`;
        rotation = 0;
    } else if (regionValue === "east") {
        document.querySelector(".dir-e").classList.add("active");
        needle.style.opacity = "1";
        needle.style.transform = `translateY(11px) rotate(90deg)`;
        rotation = -90;
    } else if (regionValue === "south") {
        document.querySelector(".dir-s").classList.add("active");
        needle.style.opacity = "1";
        needle.style.transform = `translateY(11px) rotate(180deg)`;
        rotation = -180;
    } else if (regionValue === "west") {
        document.querySelector(".dir-w").classList.add("active");
        needle.style.opacity = "1";
        needle.style.transform = `translateY(11px) rotate(270deg)`;
        rotation = -270;
    } else if (regionValue === "central") {
        compassCenter.classList.add("active");
        needle.style.opacity = "0.2";
        rotation = 45;
    } else if (regionValue === "all") {
        needle.style.opacity = "1";
        needle.style.transform = `translateY(11px) rotate(0deg)`;
        rotation = 0;
    }
    
    luoPan.style.transform = `rotate(${rotation}deg)`;
}

// Helper Labels Translation
function getCategoryLabel(category) {
    switch(category) {
        case "divine": return "神獸";
        case "auspicious": return "瑞獸";
        case "perilous": return "凶獸";
        default: return "全部";
    }
}

function getRegionLabel(region) {
    switch(region) {
        case "east": return "東山經";
        case "south": return "南山經";
        case "west": return "西山經";
        case "north": return "北山經";
        case "central": return "中山經";
        default: return "全部";
    }
}

function resetAllFilters() {
    currentCategory = "all";
    currentRegion = "all";
    
    // Reset Filter Button states
    document.querySelectorAll(".filter-btn").forEach(btn => {
        if (btn.getAttribute("data-value") === "all") {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });
    
    // Reset compass
    directionLabels.forEach(lbl => lbl.classList.remove("active"));
    compassCenter.classList.remove("active");
    needle.style.opacity = "1";
    needle.style.transform = `translateY(11px) rotate(0deg)`;
    luoPan.style.transform = `rotate(0deg)`;
    
    renderBeasts();
}

// 11. Modal Logic
function openBeastModal(beastId) {
    const beast = BEASTS_DATABASE.find(b => b.id === beastId);
    if (!beast) return;
    
    modalImg.src = beast.image;
    modalImg.alt = beast.nameCn;
    modalRegion.innerHTML = `<i class="fa-solid fa-compass"></i> ${beast.regionCn}`;
    
    modalCategory.innerText = beast.categoryCn;
    modalCategory.className = "beast-category-tag"; // Reset
    if (beast.category === "divine") modalCategory.classList.add("badge-divine");
    if (beast.category === "auspicious") modalCategory.classList.add("badge-auspicious");
    if (beast.category === "perilous") modalCategory.classList.add("badge-perilous");
    
    modalName.innerHTML = `${beast.nameCn} <span class="modal-zhuyin">(${beast.zhuyin})</span>`;
    modalEnglish.innerText = beast.nameEn;
    modalClassic.innerText = beast.classicText;
    modalDesc.innerText = beast.description;
    
    // Stats Bars Animations
    setTimeout(() => {
        statSpiritual.style.width = beast.stats.spiritual + "%";
        statAggression.style.width = beast.stats.aggression + "%";
        statRarity.style.width = beast.stats.rarity + "%";
    }, 100);
    
    valSpiritual.innerText = beast.stats.spiritual;
    valAggression.innerText = beast.stats.aggression;
    valRarity.innerText = beast.stats.rarity;
    
    beastModal.classList.add("active");
    document.body.style.overflow = "hidden"; // Disable scroll
}

function openStoryModal(storyKey) {
    const story = LORE_DATABASE[storyKey];
    if (!story) return;
    
    modalStoryTitle.innerText = story.title;
    
    modalStoryBody.innerHTML = "";
    story.paragraphs.forEach((p, idx) => {
        const paragraph = document.createElement("p");
        if (idx === 0) {
            paragraph.className = "classic-source";
        }
        paragraph.innerText = p;
        modalStoryBody.appendChild(paragraph);
    });
    
    storyModal.classList.add("active");
    document.body.style.overflow = "hidden";
}

function setupModalListeners() {
    // Close Beast Modal
    beastModalClose.addEventListener("click", () => {
        beastModal.classList.remove("active");
        document.body.style.overflow = ""; // Re-enable scroll
    });
    
    beastModal.addEventListener("click", (e) => {
        if (e.target === beastModal) {
            beastModal.classList.remove("active");
            document.body.style.overflow = "";
        }
    });
    
    // Close Story Modal
    storyModalClose.addEventListener("click", () => {
        storyModal.classList.remove("active");
        document.body.style.overflow = "";
    });
    
    storyModal.addEventListener("click", (e) => {
        if (e.target === storyModal) {
            storyModal.classList.remove("active");
            document.body.style.overflow = "";
        }
    });
    
    // Keydown ESC to close all
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            beastModal.classList.remove("active");
            storyModal.classList.remove("active");
            document.body.style.overflow = "";
        }
    });
}
