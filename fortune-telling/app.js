/* ==========================================
   🔮 JS Application: Cosmic Divination Oracle
   ========================================== */

// 1. Data Store: 22 Major Arcana Tarot Cards
const tarotDeck = [
    { id: 0, name: "愚者 (The Fool)", symbol: "🃏", meaningUp: "冒險的開始、無限可能、率性而為。現在是相信直覺、勇敢踏出新旅程的最佳時機。", meaningRev: "魯莽盲目、逃避責任、缺乏計畫。警告您需要停下腳步，冷靜評估潛在風險。" },
    { id: 1, name: "魔術師 (The Magician)", symbol: "🧙‍♂️", meaningUp: "創造力、溝通能力、付諸行動。您已具備所有成功所需的工具，展現才華的時刻到了。", meaningRev: "能力不足、欺騙操縱、意志消沉。需要警惕身邊的甜言蜜語或自身動機的偏差。" },
    { id: 2, name: "女祭司 (The High Priestess)", symbol: "📖", meaningUp: "直覺、潛意識、靜止等待。靜下心來傾聽內在聲音，有些秘密會在適當時機顯現。", meaningRev: "理智過度、忽視直覺、浮躁焦慮。過度干涉外在事物反而會使情況更加混亂。" },
    { id: 3, name: "皇后 (The Empress)", symbol: "👑", meaningUp: "豐收與母愛、創造力、生活富足。周圍正孕育著美好的事物，適合藝術創作與感情進展。", meaningRev: "過度控制、缺乏生產力、情緒化。可能面臨資源浪費或對身邊的人管束過嚴的困境。" },
    { id: 4, name: "皇帝 (The Emperor)", symbol: "🏛️", meaningUp: "權威控制、紀律秩序、穩定基石。有能力掌控全局，需制定長遠的計畫與執行策略。", meaningRev: "專制暴政、效率低下、缺乏掌控。面臨權力鬥爭或因缺乏自律而感到局勢混亂。" },
    { id: 5, name: "教皇 (The Hierophant)", symbol: "🛐", meaningUp: "傳統秩序、精神導師、尋求認同。適合遵循既定規則，或尋求長輩、專業導師的協助。", meaningRev: "打破傳統、思想叛逆、流言蜚語。可能對目前的體制感到不滿，尋求非傳統的突破道路。" },
    { id: 6, name: "戀人 (The Lovers)", symbol: "💑", meaningUp: "和諧結合、重大抉擇、人際吸引。面臨價值觀的抉擇，需要傾聽內心做出最誠實的決定。", meaningRev: "關係失和、錯誤決策、意志動搖。可能面臨溝通障礙，或是被外在誘惑干擾了判斷。" },
    { id: 7, name: "戰車 (The Chariot)", symbol: "🏎️", meaningUp: "意志力、克服困難、成功凱旋。保持專注與決心，憑藉著堅強的意志力衝破目前障礙。", meaningRev: "失去方向、失控受挫、情緒崩潰。提醒您需要調整步伐，過度衝動只會招致失敗。" },
    { id: 8, name: "力量 (Strength)", symbol: "🦁", meaningUp: "勇氣與堅韌、內在力量、溫柔掌控。用耐心與愛去包容挑戰，這比單純的暴力更有力量。", meaningRev: "軟弱無力、喪失自信、情緒失控。可能感到力不從心，需要找回內在的勇氣與平靜。" },
    { id: 9, name: "隱士 (The Hermit)", symbol: "🕯️", meaningUp: "內省沉思、尋找真理、自我沉澱。暫時遠離塵囂，向內探索能為您帶來真正的答案。", meaningRev: "孤立疏離、固執偏激、過度退縮。警惕自己不要陷入不健康的自我封閉與寂寞之中。" },
    { id: 10, name: "命運之輪 (Wheel of Fortune)", symbol: "🎡", meaningUp: "好運來臨、重大轉折、順應時局。命運的齒輪正在轉動，接受變化，機會就在身邊。", meaningRev: "壞運阻礙、抗拒改變、時機未到。處於低潮時更應保持信念，這只是暫時的考驗。" },
    { id: 11, name: "正義 (Justice)", symbol: "⚖️", meaningUp: "公平正義、誠實理性、因果報應。公正冷靜地面對局勢，您的付出將得到合理的應對。", meaningRev: "不公平對待、偏見失衡、逃避判決。可能存在不公情況，或自身決策受到了情緒偏頗的影響。" },
    { id: 12, name: "倒吊人 (The Hanged Man)", symbol: "🤸", meaningUp: "犧牲奉獻、換位思考、暫停等待。以全新的視角看待問題，暫時的等待是為了走更長遠的路。", meaningRev: "做無用功、抗拒犧牲、停滯不前。可能在錯誤的方向上白白浪費精力，需要重新審視自我。" },
    { id: 13, name: "死神 (Death)", symbol: "💀", meaningUp: "結束與重生、徹底變革、告別過去。舊的事物必須結束，才能迎來崭新的開始與希望。", meaningRev: "抗拒改變、苟延殘喘、停滯不前。抱著過去不放只會加深痛苦，勇敢放手才能重生。" },
    { id: 14, name: "節制 (Temperance)", symbol: "🧪", meaningUp: "調和與平衡、淨化療癒、耐心協調。尋求生活的和諧與中庸之道，情感與理性正漸趨平衡。", meaningRev: "失去平衡、溝通不良、過度消耗。生活或感情中出現了失衡現象，急需調整作息與人際溝通。" },
    { id: 15, name: "惡魔 (The Devil)", symbol: "😈", meaningUp: "慾望束縛、物質誘惑、執著不放。可能沉溺於某種不良習慣、感情執著或物質追求中。", meaningRev: "擺脫束縛、覺醒重生、自我解脫。您正逐漸看清事實真相，並獲得勇氣掙脫束縛。" },
    { id: 16, name: "高塔 (The Tower)", symbol: "⚡", meaningUp: "突發變故、信念崩塌、破舊立新。崩解雖然痛苦，但這是一次摧毀虛假、重築真實基石的契機。", meaningRev: "局勢動盪、緩慢磨難、逃避危機。變革已不可避免，越抗拒反而會帶來越長期的困擾。" },
    { id: 17, name: "星星 (The Star)", symbol: "⭐", meaningUp: "希望與靈感、心靈療癒、璀璨未來。黑暗已過，信心重回，您的願望正受到宇宙的祝福。", meaningRev: "失望失望、喪失信心、靈感枯竭。可能感到前路茫茫，需要重新點燃內心的火光與希望。" },
    { id: 18, name: "月亮 (The Moon)", symbol: "🌙", meaningUp: "不安與恐懼、直覺幻想、潛在謊言。目前局勢晦暗不明，小心受直覺中的恐懼與幻覺所干擾。", meaningRev: "迷霧散去、看清真相、克服恐懼。隱藏的秘密即將揭曉，心中的不安也正逐漸消退。" },
    { id: 19, name: "太陽 (The Sun)", symbol: "☀️", meaningUp: "成功榮耀、活力四射、幸福快樂。一切都在光明之下，您將獲得充沛的能量與喜悅。", meaningRev: "短暫失落、缺乏熱情、虛張聲勢。雖然成功可能稍微延遲，但大體方向仍然是樂觀的。" },
    { id: 20, name: "審判 (Judgement)", symbol: "🎺", meaningUp: "覺醒召喚、重大決定、因果清算。面臨人生關鍵轉折，過去的積累引導您做出決定性選擇。", meaningRev: "自我懷疑、逃避召喚、錯失良機。因為害怕改變而遲疑不決，可能會錯過轉變的關鍵時機。" },
    { id: 21, name: "世界 (The World)", symbol: "🌍", meaningUp: "圓滿結束、完美達成、環遊世界。一個階段的完美落幕，您已達到了和諧與成功的頂峰。", meaningRev: "未竟之業、美中不足、面臨瓶頸。雖然接近終點，但仍有最後的細節需要完善與努力。" }
];

// 2. Data Store: Traditional Slips (靈籤)
const fortuneSlips = [
    { num: "第一籤", type: "上上籤", poem: "東洋海日照天紅\n風送乘鸞萬里通\n凡事皆得神力助\n謀望功名正合時", poetic: "如日初升，前途光明。好運當頭，謀事可成。", fortune: "求財得意，功名大成，婚姻和合，諸事大吉。" },
    { num: "第二籤", type: "中平籤", poem: "雲開霧散月重圓\n枯木逢春花再鮮\n路遙知馬力雖健\n事急且寬莫強前", poetic: "撥雲見日，否極泰來。唯需耐心，切莫急躁躁進。", fortune: "求財中平，訴訟宜和，婚姻稍待，尋人終見。" },
    { num: "第三籤", type: "下下籤", poem: "風刮暴雨打船桅\n浪大波濤路阻歸\n舟漏又逢當面浪\n此身猶如涉險梯", poetic: "雪上加霜，行事須極度謹慎防微，不宜盲目開展新計畫。", fortune: "求財落空，疾病有憂，出行受阻，宜守不宜動。" },
    { num: "第四籤", type: "上吉籤", poem: "桂花香氣飄滿園\n秋風送爽瑞氣全\n貴人指引登高處\n錦上添花喜事連", poetic: "貴人相助，喜氣盈門。事業將登高峰，家庭和諧。", fortune: "交易順利，合夥大吉，求官得位，疾病無礙。" },
    { num: "第五籤", type: "中吉籤", poem: "春風吹綠柳梢頭\n一江春水向東流\n功名富貴皆前定\n何必終日自憂憂", poetic: "順其自然，無須自尋煩惱，運勢正在悄然好轉。", fortune: "家宅平安，求財中平，婚姻可成，疾病自癒。" },
    { num: "第六籤", type: "中下籤", poem: "日落西山夜幕低\n荒郊野路馬蹄迷\n前途茫茫無處問\n且在林中暫歇棲", poetic: "局勢未明，不宜前行。暫時休整、沉澱是目前最佳策略。", fortune: "合夥防詐，出行不利，婚姻難成，宜安分守己。" },
    { num: "第七籤", type: "上上籤", poem: "祥雲朵朵現天門\n瑞氣千條降宅門\n積善之家天有眼\n福祿壽喜永相尊", poetic: "福星高照，積善有福。家庭圓滿，好運綿延不絕。", fortune: "百事皆吉，求財大得，婚姻美滿，疾病痊癒。" },
    { num: "第八籤", type: "下下籤", poem: "虎落平平被犬欺\n落魄何時見生機\n閉門思過防小人\n退後一步自然吉", poetic: "身處逆境，宜隱忍退讓。防範口舌是非與小人暗算。", fortune: "諸事不順，官司口舌，財物防盜，宜守舊避禍。" },
    { num: "第九籤", type: "中平籤", poem: "花開易謝月易虧\n世事無常莫強為\n得失隨緣心自在\n何須終日淚雙垂", poetic: "繁華易逝，得失隨緣。保持內心豁達方能看清出路。", fortune: "求財微利，家運平平，婚姻難諧，病求神助。" },
    { num: "第十籤", type: "上吉籤", poem: "金雞報曉氣象新\n萬事亨通喜迎門\n勤勞耕耘收成好\n天道酬勤福滿身", poetic: "一分耕耘一分收穫。天道酬勤，即將迎來豐收時節。", fortune: "學業進步，事業高升，財運大通，求醫得治。" }
];

// 3. Zodiac English to Chinese Names Map & Text Database
const zodiacData = {
    aries: { name: "雙羊/牡羊座", title: "牡羊座 Aries", icon: "♈", summary: ["今日星象顯示您熱情充沛，直覺敏銳。適合主動開啟挑戰，在職場上表現果敢能獲得貴人青睞。", "感情方面有驚喜，單身者可能遇到合拍的夥伴。財運平穩，適合做好長遠規劃。"] },
    taurus: { name: "金牛座", title: "金牛座 Taurus", icon: "♉", summary: ["今日守護星運行平緩，您的心情趨於沉著。適合處理行政或財務等需要細心專注的工作。", "愛情上偏向保守溫情，多關心伴侶的感受。財富管理上有額外收益的機會，請妥善把握。"] },
    gemini: { name: "雙子座", title: "雙子座 Gemini", icon: "♊", summary: ["今日思維敏捷，交際能量高昂。適合業務談判、頭腦風暴或文書寫作，想法容易被採納。", "戀愛方面互動頻繁，幽默風氣加分。理財需避免衝動消費，健康方面注意喉嚨與支氣管保養。"] },
    cancer: { name: "巨蟹座", title: "巨蟹座 Cancer", icon: "♋", summary: ["今日運勢側重於心靈修復與情感安全感。適合整理家居、陪伴家人或與知己談心，重塑內在平靜。", "職場上以柔克剛效果更佳。偏財運不錯，可能有精緻禮物或退款等好運，健康注意睡眠。"] },
    leo: { name: "獅子座", title: "獅子座 Leo", icon: "♌", summary: ["今日陽光能量普照，自信滿滿。適合擔任領導角色或在公開場合發表觀點，能收穫滿滿掌聲與崇拜。", "愛情中帶有掌控欲，需適度給予對方空間。開銷可能偏大，適合在充實自我的事物上進行投資。"] },
    virgo: { name: "處女座", title: "處女座 Virgo", icon: "♍", summary: ["今日思考條理清晰，細節洞察力極強。適合整理舊檔案、進行精確分析或制定詳盡的健康計劃。", "感情上少些碎念多些包容會更甜蜜。財富運勢適合長線佈局，不宜短線投機，今日健康良好。"] },
    libra: { name: "天秤座", title: "天秤座 Libra", icon: "♎", summary: ["人際宮位能量暢旺，今日非常適合處理合作或調解紛爭。優雅的社交手腕能為您帶來好機會。", "感情方面處於甜蜜期，雙方默契十足。財政狀況朝向良性循環發展，適合規劃輕旅行犒賞自己。"] },
    scorpio: { name: "天蠍座", title: "天蠍座 Scorpio", icon: "♏", summary: ["今日直覺爆棚，事情背後的核心動機一覽無遺。非常適合進行深度研究、解密或克服長久以來的心理陰影。", "感情上表現深沉濃烈，適度展現溫柔能化解誤會。注意理財防漏財，健康宜做深層放鬆。"] },
    sagittarius: { name: "射手座", title: "射手座 Sagittarius", icon: "♐", summary: ["今天求知與冒險欲望強烈，適合接觸新學術、報名課程或安排出差旅程，宇宙能量會拓寬您的眼界。", "感情中展現陽光開朗的魅力，深得人緣。財運有開源機會，注意不要因為粗心大意丟失小物品。"] },
    capricorn: { name: "摩羯座", title: "摩羯座 Capricorn", icon: "♑", summary: ["事業宮位有吉星護持，今日執行力極佳，困難繁重的任務在您手下也能井然有序地完成，深受信任。", "感情上有些不解風情，記得偶爾製造點浪漫。財富穩定累積，健康上注意關節與骨骼保健。"] },
    aquarius: { name: "水瓶座", title: "水瓶座 Aquarius", icon: "♒", summary: ["今天靈感泉湧，打破常規的創意會讓眾人驚艷。適合進行設計、程式開發或思考新型商業模式。", "感情上追求思想契合，單身者容易在興趣群組中擦出火花。財運有隨機小好運，保持開放心態。"] },
    pisces: { name: "雙魚座", title: "雙魚座 Pisces", icon: "♓", summary: ["感性細胞異常活躍，藝術審美與共情能力達到頂峰。適合從事療癒、藝術創作或公益活動，能獲得極大滿足。", "情感上有依賴傾向，保持獨立性能讓關係更健康。財運適合儲蓄守財，睡前適合冥想放鬆。"] }
};

// Colors List for random zodiac details
const luckyColors = ["星際藍", "霓虹粉", "香檳金", "極光綠", "曜石黑", "珍珠白", "神秘紫", "珊瑚橙", "玫瑰金", "薄荷青"];
const luckyDirections = ["東方", "西方", "南方", "北方", "東北方", "西北方", "東南方", "西南方"];

// ==========================================
// 4. Controller: App State & Mode Switcher
// ==========================================
function switchMode(mode) {
    // 1. Toggle active class in tabs
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => {
        if(btn.getAttribute('onclick').includes(mode)) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // 2. Switch visible section with smooth transition
    const sections = document.querySelectorAll('.oracle-section');
    sections.forEach(sec => {
        if(sec.id === `mode-${mode}`) {
            sec.classList.add('active');
        } else {
            sec.classList.remove('active');
        }
    });
}

// ==========================================
// 5. Controller: Tarot Divination Logic
// ==========================================
let tarotState = {
    deck: [],
    drawnIndices: [],
    flips: [false, false, false]
};

function drawTarot() {
    // Reset cards display
    for(let i = 0; i < 3; i++) {
        const card = document.getElementById(`tarot-${i}`);
        card.classList.remove('flipped');
        tarotState.flips[i] = false;
    }

    // Hide result box with fade
    document.getElementById('tarot-results').style.display = 'none';

    // Shuffle and pick 3 cards randomly with random orientations (Upright/Reversed)
    setTimeout(() => {
        tarotState.deck = [];
        // Draw 3 unique random card indices
        let indices = [];
        while(indices.length < 3) {
            let r = Math.floor(Math.random() * tarotDeck.length);
            if(!indices.includes(r)) indices.push(r);
        }

        indices.forEach((cardIdx, posIdx) => {
            const isReversed = Math.random() < 0.35; // 35% chance of being reversed
            const originalCard = tarotDeck[cardIdx];
            
            tarotState.deck.push({
                ...originalCard,
                reversed: isReversed
            });

            // Update DOM face for the card back face representation
            const backFace = document.getElementById(`tarot-back-${posIdx}`);
            const rotationClass = isReversed ? 'style="transform: rotate(180deg);"' : '';
            backFace.innerHTML = `
                <div class="tarot-img-symbol" ${rotationClass}>${originalCard.symbol}</div>
                <div class="tarot-card-name">${originalCard.name.split(' (')[0]}</div>
                <div class="tarot-card-orient ${isReversed ? 'reversed' : ''}">${isReversed ? '逆位' : '正位'}</div>
                <div class="tarot-card-index">ARCANUM ${originalCard.id}</div>
            `;
        });

        // Trigger float glow animation for unrevealed cards
        const board = document.querySelector('.tarot-board');
        board.classList.add('ready');
        
        // Show status helper
        alert("洗牌完畢！請由左至右分別點擊三張卡牌，揭示您的過去、現在與未來命格。");
    }, 300);
}

function flipTarotCard(index) {
    if(tarotState.deck.length === 0) {
        alert("請先點擊下方按鈕進行『洗牌並抽取啟示』！");
        return;
    }
    if(tarotState.flips[index]) return; // Already flipped

    const card = document.getElementById(`tarot-${index}`);
    card.classList.add('flipped');
    tarotState.flips[index] = true;

    // Check if all cards are flipped, if so, render the interpretation box
    if(tarotState.flips.every(f => f)) {
        setTimeout(() => {
            renderTarotInterpretations();
        }, 800);
    }
}

function renderTarotInterpretations() {
    const resultsBox = document.getElementById('tarot-results');
    resultsBox.style.display = 'block';

    tarotState.deck.forEach((card, idx) => {
        const box = document.getElementById(`result-${idx}`);
        const nameText = `${card.name} (${card.reversed ? '逆位' : '正位'})`;
        const description = card.reversed ? card.meaningRev : card.meaningUp;

        box.querySelector('.card-name').textContent = nameText;
        box.querySelector('.card-name').style.color = card.reversed ? 'var(--cyan)' : 'var(--accent)';
        box.querySelector('.card-desc').textContent = description;
    });

    // Scroll smoothly to results
    resultsBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// ==========================================
// 6. Controller: Daily Horoscope Logic
// ==========================================
// Hash algorithm using Date + Sign string to ensure consistent daily readings per sign
function getDailySeed(sign) {
    const dateStr = new Date().toDateString(); // e.g. "Mon Jun 22 2026"
    const combinedStr = dateStr + sign;
    
    let hash = 0;
    for (let i = 0; i < combinedStr.length; i++) {
        hash = combinedStr.charCodeAt(i) + ((hash << 5) - hash);
    }
    return Math.abs(hash);
}

// Deterministic pseudo-random number generator using seed
function getSeededRandom(seed) {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
}

function selectZodiac(sign) {
    // 1. Set active class on grid items
    const items = document.querySelectorAll('.zodiac-item');
    items.forEach(item => {
        if(item.getAttribute('onclick').includes(sign)) {
            item.classList.add('selected');
        } else {
            item.classList.remove('selected');
        }
    });

    const report = document.getElementById('horoscope-report');
    report.style.display = 'block';

    // 2. Generate seeded scores for consistent daily experience
    const seed = getDailySeed(sign);
    const scoreLove = Math.floor(getSeededRandom(seed + 1) * 41) + 60; // 60-100%
    const scoreWork = Math.floor(getSeededRandom(seed + 2) * 41) + 60; // 60-100%
    const scoreMoney = Math.floor(getSeededRandom(seed + 3) * 41) + 60; // 60-100%
    const scoreHealth = Math.floor(getSeededRandom(seed + 4) * 41) + 60; // 60-100%

    // 3. Select seeded advice texts
    const luckyColorIdx = Math.floor(getSeededRandom(seed + 5) * luckyColors.length);
    const luckyDirIdx = Math.floor(getSeededRandom(seed + 6) * luckyDirections.length);
    const luckyNumber = Math.floor(getSeededRandom(seed + 7) * 9) + 1; // 1-9

    const config = zodiacData[sign];
    const summaryIdx = Math.floor(getSeededRandom(seed + 8) * config.summary.length);
    const summaryText = config.summary[summaryIdx];

    // 4. Update UI DOM Elements
    document.getElementById('report-icon').textContent = config.icon;
    document.getElementById('report-title').textContent = config.title;
    document.getElementById('report-date').textContent = `今日星相刻度 (西元 ${new Date().toLocaleDateString('zh-TW')} 能量分佈)`;

    // Trigger progressive score bar fill animations
    setTimeout(() => {
        updateBar('love', scoreLove);
        updateBar('work', scoreWork);
        updateBar('money', scoreMoney);
        updateBar('health', scoreHealth);
    }, 100);

    // Update text boxes
    document.getElementById('horo-summary').textContent = summaryText;
    document.getElementById('lucky-color').textContent = luckyColors[luckyColorIdx];
    document.getElementById('lucky-number').textContent = luckyNumber;
    document.getElementById('lucky-dir').textContent = luckyDirections[luckyDirIdx];

    // Scroll to report panel
    report.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function updateBar(type, val) {
    const bar = document.getElementById(`bar-${type}`);
    const pct = document.getElementById(`pct-${type}`);
    bar.style.width = `${val}%`;
    pct.textContent = `${val}%`;
}

// ==========================================
// 7. Controller: Traditional Divination (求籤 & 擲筊)
// ==========================================
let divinationState = {
    hasQian: false,
    drawnQian: null,
    jiaoTossedCount: 0
};

function shakeQian() {
    const barrel = document.getElementById('qian-barrel');
    const button = document.getElementById('btn-shake-qian');
    const slipCard = document.getElementById('qian-result-card');

    if(barrel.classList.contains('shaking')) return;

    // Reset old states
    divinationState.hasQian = false;
    divinationState.drawnQian = null;
    divinationState.jiaoTossedCount = 0;
    barrel.classList.remove('spit-out');
    slipCard.style.display = 'none';
    
    document.getElementById('jiao-status-hud').className = "jiao-status-hud";
    document.getElementById('jiao-status-hud').textContent = "正在搖動籤筒，默想心中所求之事...";
    document.getElementById('btn-toss-jiao').disabled = true;

    // Add shaking classes
    barrel.classList.add('shaking');
    button.disabled = true;

    // Play shaking sounds or delays
    setTimeout(() => {
        barrel.classList.remove('shaking');
        barrel.classList.add('spit-out');
        button.disabled = false;

        // Draw a random qian stick index
        const randomIdx = Math.floor(Math.random() * fortuneSlips.length);
        divinationState.drawnQian = fortuneSlips[randomIdx];
        divinationState.hasQian = true;

        // Prompt user to toss jiao blocks (擲筊)
        document.getElementById('jiao-status-hud').className = "jiao-status-hud success-text";
        document.getElementById('jiao-status-hud').innerHTML = `🔮 <b>已抽得：${divinationState.drawnQian.num}</b><br>請點擊右方『擲筊請示』，向神明確認是否為此靈籤！`;
        document.getElementById('btn-toss-jiao').disabled = false;
    }, 1800);
}

function tossJiao() {
    if(!divinationState.hasQian || !divinationState.drawnQian) {
        alert("請先搖動左方籤筒求取一支靈籤！");
        return;
    }

    const jiaoLeft = document.getElementById('jiao-left');
    const jiaoRight = document.getElementById('jiao-right');
    const hud = document.getElementById('jiao-status-hud');
    const tossBtn = document.getElementById('btn-toss-jiao');

    // Prevent double clicking during animation
    tossBtn.disabled = true;
    hud.className = "jiao-status-hud";
    hud.textContent = "筊杯彈跳翻轉中，請靜心等待神明裁示...";

    // Remove older animation classes to restart
    jiaoLeft.classList.remove('tossing-left');
    jiaoRight.classList.remove('tossing-right');
    void jiaoLeft.offsetWidth; // Trigger reflow to restart animations
    void jiaoRight.offsetWidth;

    // Generate random toss results
    // Combinations:
    // 0 = 聖筊 (1 flat, 1 convex) - Success
    // 1 = 笑筊 (2 flat) - God smiling, toss again
    // 2 = 陰筊 (2 convex) - God angry, redraw qian
    const r = Math.random();
    let outcome;
    
    if (r < 0.5) {
        outcome = "sheng"; // 50% chance of Sheng Jiao (聖筊)
    } else if (r < 0.75) {
        outcome = "xiao"; // 25% chance of Xiao Jiao (笑筊)
    } else {
        outcome = "yin"; // 25% chance of Yin Jiao (陰筊)
    }

    // Set rotation variables in CSS properties for randomized landing look
    let rotLeft = 0;
    let rotRight = 0;

    if (outcome === "sheng") {
        // One flat (0deg), one convex (180deg)
        const leftIsFlat = Math.random() < 0.5;
        rotLeft = leftIsFlat ? 360 : 540;
        rotRight = leftIsFlat ? 540 : 360;
    } else if (outcome === "xiao") {
        // Two flat (0deg, shown as 360 or 720)
        rotLeft = 360;
        rotRight = 720;
    } else {
        // Two convex (180deg, shown as 540 or 900)
        rotLeft = 540;
        rotRight = 900;
    }

    jiaoLeft.style.setProperty('--rot-left', `${rotLeft}deg`);
    jiaoRight.style.setProperty('--rot-right', `${rotRight}deg`);

    // Trigger animations
    jiaoLeft.classList.add('tossing-left');
    jiaoRight.classList.add('tossing-right');

    setTimeout(() => {
        tossBtn.disabled = false;
        
        if (outcome === "sheng") {
            hud.className = "jiao-status-hud success-text";
            hud.innerHTML = "🎉 <b>【聖筊】神明應允！</b><br>此籤確實為您所求，靈籤啟示已解鎖於下方！";
            tossBtn.disabled = true; // Complete, disable toss
            
            // Reveal Slip Details
            revealFortuneSlip();
        } else if (outcome === "xiao") {
            hud.className = "jiao-status-hud success-text";
            hud.innerHTML = "😅 <b>【笑筊】神明微笑不言。</b><br>神明笑而不答，或是您問事不夠明確。請再次『擲筊』請示！";
        } else {
            hud.className = "jiao-status-hud fail-text";
            hud.innerHTML = "❌ <b>【陰筊】神明不允，並非此籤！</b><br>此籤不對。請重按左方籤筒『重新求籤』並再次擲筊請示！";
            tossBtn.disabled = true; // Reject, must redraw qian
            divinationState.hasQian = false;
            divinationState.drawnQian = null;
        }
    }, 1250);
}

function revealFortuneSlip() {
    const slip = divinationState.drawnQian;
    const card = document.getElementById('qian-result-card');

    document.getElementById('slip-type').textContent = slip.type;
    // Set color based on slip level
    const badge = document.getElementById('slip-type');
    if(slip.type.includes('上上') || slip.type.includes('上吉')) {
        badge.style.background = '#b91c1c';
    } else if(slip.type.includes('中')) {
        badge.style.background = '#d97706';
    } else {
        badge.style.background = '#4b5563';
    }

    document.getElementById('slip-num').textContent = slip.num;
    document.getElementById('slip-poem').innerHTML = slip.poem.split('\n').join('<br>');
    document.getElementById('slip-poetic-meaning').textContent = slip.poetic;
    document.getElementById('slip-fortune-meaning').textContent = slip.fortune;

    card.style.display = 'block';
    
    // Smooth scroll down to slip
    setTimeout(() => {
        card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
}
