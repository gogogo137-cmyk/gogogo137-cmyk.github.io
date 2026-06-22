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
    { id: 15, name: "惡魔 (The Devil)", symbol: "😈", meaningUp: "慾望束縛、物質誘惑、執著不放。可能沉溺於某種不良習慣、感情執著或物質追求中。", meaningRev: "擺擺脫束縛、覺醒重生、自我解脫。您正逐漸看清事實真相，並獲得勇氣掙脫束縛。" },
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
    { num: "第九籤", type: "中平籤", poem: "花開易謝月易虧\n世事無常莫強為\n得失隨緣心自在\n何須終日淚雙垂", poetic: "繁華易逝，得失隨緣. 保持內心擺正與泰然方能解脫困境。", fortune: "求財微利，家運平平，婚姻難諧，病求神助。" },
    { num: "第十籤", type: "上吉籤", poem: "金雞報曉氣象新\n萬事亨通喜迎門\n勤勞耕耘收成好\n天道酬勤福滿身", poetic: "一分耕耘一分收穫。天道酬勤，即將迎來豐收時節。", fortune: "學業進步，事業高升，財運大通，求醫得治。" }
];

// 3. Western Zodiac database
const zodiacData = {
    aries: { name: "牡羊座", title: "牡羊座 Aries", icon: "♈", element: "火象元素", ruler: "火星", summary: ["今日星象顯示您熱情充沛，直覺敏銳。適合主動開啟挑戰，在職場上表現果敢能獲得貴人青睞。", "感情方面有驚喜，單身者可能遇到合拍的夥伴。財運平穩，適合做好長遠規劃。"], advice: "行動是克服內心焦慮的良藥，勇敢邁出第一步。" },
    taurus: { name: "金牛座", title: "金牛座 Taurus", icon: "♉", element: "土象元素", ruler: "金星", summary: ["今日守護星運行平緩，您的心情趨於沉著。適合處理行政或財務等需要細心專注的工作。", "愛情上偏向保守溫情，多關心伴侶的感受。財富管理上有額外收益的機會，請妥善把握。"], advice: "沉著穩健的步伐可以幫您避開不必要的浮躁與損失。" },
    gemini: { name: "雙子座", title: "雙子座 Gemini", icon: "♊", element: "風象元素", ruler: "水星", summary: ["今日思維敏捷，交際能量高昂。適合業務談判、頭腦風暴或文書寫作，想法容易被採納。", "戀愛方面互動頻繁，幽默風氣加分。理財需避免衝動消費，健康方面注意喉嚨與支氣管保養。"], advice: "在資訊紛雜時，保持專注與獨立判斷是您的致勝法寶。" },
    cancer: { name: "巨蟹座", title: "巨蟹座 Cancer", icon: "♋", element: "水象元素", ruler: "月亮", summary: ["今日運勢側重於心靈修復與情感安全感。適合整理家居、陪伴家人或與知己談心，重塑內在平靜。", "職場上以柔克剛效果更佳。偏財運不錯，可能有精緻禮物或退款等好運，健康注意睡眠。"], advice: "溫柔是您的防護罩，給予他人體貼同時也別忘了滋養自己。" },
    leo: { name: "獅子座", title: "獅子座 Leo", icon: "♌", element: "火象元素", ruler: "太陽", summary: ["今日陽光能量普照，自信滿滿。適合擔任領導角色或在公開場合發表觀點，能收穫滿滿掌聲與崇拜。", "愛情中帶有掌控欲，需適度給予對方空間。開銷可能偏大，適合在充實自我的事物上進行投資。"], advice: "真正的王者懂得在適當時候隱藏光芒，傾聽他人的聲音。" },
    virgo: { name: "處女座", title: "處女座 Virgo", icon: "♍", element: "土象元素", ruler: "水星", summary: ["今日思考條理清晰，細節洞察力極強。適合整理舊檔案、進行精確分析或制定詳盡的健康計劃。", "感情上少些碎念多些包容會更甜蜜。財富運勢適合長線佈局，不宜短線投機，今日健康良好。"], advice: "完美並非終極追求，與自身的小瑕疵和解能釋放無窮能量。" },
    libra: { name: "天秤座", title: "天秤座 Libra", icon: "♎", element: "風象元素", ruler: "金星", summary: ["人際宮位能量暢旺，今日非常適合處理合作或調解紛爭。優雅的社交手腕能為您帶來好機會。", "感情方面處於甜蜜期，雙方默契十足。財政狀況朝向良性循環發展，適合規劃輕旅行犒賞自己。"], advice: "維持內外和諧的平衡，別因迎合他人而迷失自我主見。" },
    scorpio: { name: "天蠍座", title: "天蠍座 Scorpio", icon: "♏", element: "水象元素", ruler: "冥王星 / 火星", summary: ["今日直覺爆棚，事情背後的核心動機一覽無遺。非常適合進行深度研究、解密或克服長久以來的心理陰影。", "感情上表現深沉濃烈，適度展現溫柔能化解誤會。注意理財防漏財，健康宜做深層放鬆。"], advice: "將敏銳的洞察力轉化為慈悲，包容並接納世界的多樣性。" },
    sagittarius: { name: "射手座", title: "射手座 Sagittarius", icon: "♐", element: "火象元素", ruler: "木星", summary: ["今天求知與冒險欲望強烈，適合接觸新學術、報名課程或安排出差旅程，宇宙能量會拓寬您的眼界。", "感情中展現陽光開朗的魅力，深得人緣。財運有開源機會，注意不要因為粗心大意丟失小物品。"], advice: "身體雖在遠行，也別忘了審視內心是否同樣獲得了自由。" },
    capricorn: { name: "摩羯座", title: "摩羯座 Capricorn", icon: "♑", element: "土象元素", ruler: "土星", summary: ["事業宮位有吉星護持，今日執行力極佳，困難繁重的任務在您手下也能井然有序地完成，深受信任。", "感情上有些不解風情，記得偶爾製造點浪漫。財富穩定累積，健康上注意關節與骨骼保健。"], advice: "辛勤耕耘後的果實最甜美，但也別忘了適時停下腳步欣賞路旁風景。" },
    aquarius: { name: "水瓶座", title: "水瓶座 Aquarius", icon: "♒", element: "風象元素", ruler: "天王星 / 土星", summary: ["今天靈感泉湧，打破常規的創意會讓眾人驚艷。適合進行設計、程式開發或思考新型商業模式。", "感情上追求思想契合，單身者容易在興趣群組中擦出火花。財運有隨機小好運，保持開放心態。"], advice: "堅持獨特個性的同時，與群體保持友好的聯繫能帶給您更多力量。" },
    pisces: { name: "雙魚座", title: "雙魚座 Pisces", icon: "♓", element: "水象元素", ruler: "海王星 / 木星", summary: ["感性細胞異常活躍，藝術審美與共情能力達到頂峰。適合從事療癒、藝術創作或公益活動，能獲得極大滿足。", "情感上有依賴傾向，保持獨立性能讓關係更健康。財運適合儲蓄守財，睡前適合冥想放鬆。"], advice: "隨波逐流雖輕鬆，但唯有游向自己設定的燈塔才能找到歸屬。" }
};

const luckyColors = ["星際藍", "霓虹粉", "香檳金", "極光綠", "曜石黑", "珍珠白", "神秘紫", "珊瑚橙", "玫瑰金", "薄荷青"];
const luckyDirections = ["東方", "西方", "南方", "北方", "東北方", "西北方", "東南方", "西南方"];

// 4. Ziwei 14 Main Stars Database
const ziweiStars = [
    { star: "紫微星", tag: "北斗帝王主星", desc: "尊貴、霸氣、求好心切。您天生具有領導才能與強烈的自尊心，格局宏大，但也容易因主觀意識過強而顯得孤高不群。一生多得貴人提攜，能在大風大浪中穩站領導核心。", advice: "寬容與傾聽是帝王真正的冠冕，包容異己能使您的事業版圖更加穩固。" },
    { star: "天機星", tag: "南斗智多星", desc: "聰穎、多謀、反應敏捷。您心思細密、善於策劃分析，具有極佳的適應力與求知慾。然而思慮過多容易陷入精神緊繃或杞人憂天的情境，一生適合擔任軍師、專業策劃或創意技術人才。", advice: "心寬路自廣，適時放下腦中繁雜的運算，給靈魂放個假。" },
    { star: "太陽星", tag: "中天博愛星", desc: "熱情、公正、樂於助人。您的心胸寬廣、作風光明磊落，天生散發溫暖陽光的氣場。一生樂於付出，但需防範因過度好客或多管閒事而招致無謂的口舌誤會與體力透支。", advice: "陽光普照萬物，但過度燃燒自己也會疲憊，請留一分溫暖給自己。" },
    { star: "武曲星", tag: "北斗財帛星", desc: "剛毅、果決、務實求真。您行事作風雷厲風行、極具責任感與耐操力，天生對商業、金錢與實務操作有極高敏感度。性格略顯孤剛，在人際情感上稍欠柔軟度，是典型的實幹派與開創者。", advice: "剛硬的鋼鐵也需要淬火的柔軟，在感情中展現溫柔能收穫更多幸福。" },
    { star: "天同星", tag: "南斗福德星", desc: "溫和、知足、人緣極佳。您性格平易近人、充滿同理心且追求和諧，是典型的樂天派。一生命帶福氣，遇事常能化險為夷，但需警惕自身可能缺乏開創魄力，容易隨遇而安而停滯不前。", advice: "福報由天定，努力由己起。適度給予自己一些壓力，能激發出潛在的天賦。" },
    { star: "廉貞星", tag: "北斗次桃花星", desc: "狂放、感性、不拘小節。您極具個人魅力，直覺性強且敢作敢當。在事業上具有開創性，在社交場合左右逢源。但情緒起伏大，愛恨分明，有時顯得過於偏激或主觀。", advice: "理智是情感的韁繩，學會冷靜處理衝突能幫您避開許多人生陷阱。" },
    { star: "天府星", tag: "南斗令星 / 賢能之星", desc: "穩重、高雅、善於理財。您氣質高雅、行事有條不紊且極具包容心。天生善於整合資源與儲藏財富，適合在中大型組織擔任管理層，一生衣食無缺，生活追求品質與安穩。", advice: "安穩的港灣固然溫馨，偶爾駛向未知風浪才能領略海洋的遼闊。" },
    { star: "太陰星", tag: "中天富貴星", desc: "溫柔、細緻、富於幻想。您氣質陰柔、情感細膩，極具藝術天賦與審美。行事溫和內斂，追求心靈的和諧與家庭的溫馨。但有時過度敏感、多愁善感，容易受到外在環境的情緒感染。", advice: "月有陰晴圓缺，接納自己情緒的起伏，相信內在直覺的智慧。" },
    { star: "貪狼星", tag: "北斗第一大桃花星", desc: "多才多藝、長袖善舞、物慾強烈。您學習能力極快、見識廣博且富含幽默感，是社交場合的焦點。天生對神秘學、美學與新鮮事物充滿好奇心，但需防範做事三分鐘熱度、貪多不爛。", advice: "專注是通往大師之路的唯一捷徑，收斂心神，專攻一藝必有大成。" },
    { star: "巨門星", tag: "北斗暗曜 / 口才之星", desc: "心思慎密、觀察力極強、能言善辯。您天生具有卓越的邏輯思維與口才，善於挑錯與分析問題，適合法律、傳播、諮詢等行業。防範說話過於直接而引來口舌是非。", advice: "良言一句三冬暖，將銳利的言詞轉化為建設性的指導，能廣結善緣。" },
    { star: "天相星", tag: "南斗印星 / 輔佐之星", desc: "敦厚、誠實、樂於服務。您行事體貼周到、極具正義感且講究信用，是團隊中不可或缺的協調軸心。天生熱心助人，注重外表儀態與人際和諧，一生命運平穩，多受器重。", advice: "輔佐他人是您的天命，但也要勇敢為自己的願景與夢想站上舞台中心。" },
    { star: "天梁星", tag: "南斗蔭星 / 老人星", desc: "慈悲、成熟、大公無私。您性格穩重老成、熱心公益且樂於提攜後輩，具有宗教情懷與長者風範。一生命帶逢凶化吉的福蔭，適合從事教育、醫療、社工或諮詢顧問等職務。", advice: "護蔭他人是偉大的功德，但也別忘了給自己保留喘息與放鬆的私人空間。" },
    { star: "七殺星", tag: "南斗將星 / 開創主星", desc: "剛直、冒險、不屈不撓。您具有極強的開創魄力，行事果斷大膽，不畏艱難險阻。天生帶有軍人將領般的鐵血風格，渴望在競爭中證明自我，但性格急躁，容易大起大落。", advice: "謀定而後動，在衝鋒陷陣前先做好周全的退路規劃，方能立於不敗之地。" },
    { star: "破軍星", tag: "北斗耗星 / 改革之星", desc: "求新求變、破壞力強、特立獨行。您極度討厭一成不變的生活，具有強烈的改革意識與創造力，樂於打破既定規則。一生多起伏巨變，每一次的毀滅都伴隨著更絢麗的重生。", advice: "破舊是為了立新，在摧毀舊體制前，先想清楚要建設什麼樣的新世界。" }
];

// 5. I Ching Bagua Trigrams Database
const baguaTrigrams = [
    { name: "乾卦 (Chian) ・ 乾為天 ☰", element: "金", desc: "象徵純陽、天道、剛健剛強。您具有自強不息的奮鬥精神，行事磊落，但需注意防範剛愎自用與過剛易折。" },
    { name: "兌卦 (Dui) ・ 兌為澤 ☱", element: "金", desc: "象徵喜悅、口舌、澤潤大地。您善於溝通，人緣極佳，生活充滿歡樂氣息，但也需防範口舌是非與流言干擾。" },
    { name: "離卦 (Li) ・ 離為火 ☲", element: "火", desc: "象徵光明、美麗、依附共生。您熱情開朗，思想進步，在人群中十分耀眼，但需注意情緒控制，防範燥熱衝動。" },
    { name: "震卦 (Zhen) ・ 震為雷 ☳", element: "木", desc: "象徵震動、起步、春雷滾滾。您極具活力，執行力強，敢於打破僵局開創新局，但有時會顯得毛躁與虎頭蛇尾。" },
    { name: "巽卦 (Xun) ・ 巽為風 ☴", element: "木", desc: "象徵柔順、滲入、無孔不入。您處事圓滑柔順，極具適應力與滲透性，但需注意在決策時切忌猶豫不決。" },
    { name: "坎卦 (Kan) ・ 坎為水 ☵", element: "水", desc: "象徵艱難險阻、深邃智慧、川流不息。您智慧深沉，處變不驚，極具韌性，但需防範心思過度陰鬱沉悶。" },
    { name: "艮卦 (Gen) ・ 艮為山 ☶", element: "土", desc: "象徵靜止、阻擋、穩如泰山。您行事穩重可靠，做事有原則且能堅守底線，但需警惕自身顯得過於固執己見。" },
    { name: "坤卦 (Kun) ・ 坤為地 ☷", element: "土", desc: "象徵純陰、大地、厚德載物。您具有極佳的包容力與母性關懷，默默付出而不居功，但有時會顯得缺乏自主決魄力。" }
];

// Life Path Numbers Database (1 to 9)
const lifePathData = {
    1: { desc: "獨立開創者。您極具領導才能與原創想法，渴望自主獨立，但需注意不要過於自我中心或顯得孤傲。", keywords: ["領導力", "獨立性", "開創者", "自尊心"] },
    2: { desc: "和平協調者。您心思細膩，具備卓越的同理心與合作外交能力，但需注意防範過度依賴他人或委曲求全。", keywords: ["合作伴侶", "同理心", "外交手腕", "敏感度"] },
    3: { desc: "創意表達者。您天生樂觀，具備極佳的藝術天賦、溝通能力與創造力，但有時會顯得注意力分散或浮躁。", keywords: ["藝術天賦", "樂觀風趣", "自我表達", "社交力"] },
    4: { desc: "務實建構者。您做事腳踏實地，追求秩序與穩定性，極具耐心與責任感，但有時會顯得過於保守與固執。", keywords: ["秩序感", "責任心", "組織力", "穩固基石"] },
    5: { desc: "自由冒險家。您熱愛自由，渴望多元體驗與變革，具備極強的適應力，但需防範生活缺乏規律或浮躁逃避。", keywords: ["追求自由", "冒險精神", "多才多藝", "適應力"] },
    6: { desc: "負責關懷者。您富有責任感，熱愛家庭與社區，善於照顧他人與進行心理療癒，但要小心過度干涉他人私事。", keywords: ["奉獻關懷", "療癒能力", "家庭和諧", "美感追求"] },
    7: { desc: "真理尋求者。您天生具備分析思考與研究天賦，追求精神真理與獨立思考，但有時會顯得冷漠或自我封閉。", keywords: ["分析探求", "心靈直覺", "精神追求", "孤芳自賞"] },
    8: { desc: "商業掌控者。您極具商業頭腦、組織魄力與物質掌控力，渴望成功與權威，但需注意金錢物慾與權力失衡。", keywords: ["商業巨擎", "掌控魄力", "實務成就", "物質宮位"] },
    9: { desc: "人道關懷者。您心懷大愛，具備卓越的人道主義情懷、靈性直覺與無私奉獻精神，但需注意避免不切實際與聖母心。", keywords: ["人道關懷", "靈性自覺", "無私大愛", "藝術想像"] }
};

// ==========================================
// 6. Global User State & Form Management
// ==========================================
let userData = {
    name: '',
    birthday: '',
    gender: ''
};

function activateDestinyMap() {
    const nameInput = document.getElementById('input-name').value.trim();
    const birthdayInput = document.getElementById('input-birthday').value;
    const genderSelect = document.getElementById('input-gender').value;

    if (!nameInput) {
        alert("請輸入您的姓名或稱呼，以啟動天命運算！");
        return;
    }
    if (!birthdayInput) {
        alert("請選擇您的出生日期！");
        return;
    }

    // Save state
    userData.name = nameInput;
    userData.birthday = birthdayInput;
    userData.gender = genderSelect;

    // Display user name in dashboard templates
    document.getElementById('destiny-user-name').textContent = userData.name;
    document.querySelectorAll('.user-placeholder-name').forEach(el => {
        el.textContent = userData.name;
    });

    // Run Calculations
    calculateDestiny();

    // Toggle UI transitions
    document.getElementById('onboarding-panel').style.display = 'none';
    document.getElementById('oracle-tabs').style.display = 'flex';
    document.getElementById('workspace-card').style.display = 'block';

    // Switch to Destiny Tab
    switchMode('destiny');
}

function showOnboardingForm() {
    // Hidden workspace panels
    document.getElementById('oracle-tabs').style.display = 'none';
    document.getElementById('workspace-card').style.display = 'none';
    
    // Reset cards and input views
    document.getElementById('onboarding-panel').style.display = 'grid';
}

// ==========================================
// 7. Core Destiny Algorithms (八卦, 紫微, 靈數, 星座)
// ==========================================
function calculateDestiny() {
    const bday = new Date(userData.birthday);
    const year = bday.getFullYear();
    const month = bday.getMonth() + 1; // 1-indexed
    const date = bday.getDate();

    // 1. Life Path Number (生命靈數)
    // Extract YYYYMMDD digits and sum
    const digitsStr = year.toString() + month.toString().padStart(2, '0') + date.toString().padStart(2, '0');
    let sum = 0;
    for (let char of digitsStr) {
        sum += parseInt(char);
    }
    while (sum >= 10) {
        let tempSum = 0;
        for (let char of sum.toString()) {
            tempSum += parseInt(char);
        }
        sum = tempSum;
    }
    // Render Life Path Number
    document.getElementById('lifepath-number').textContent = sum;
    document.getElementById('lifepath-desc').textContent = lifePathData[sum].desc;
    
    const keywordsContainer = document.getElementById('lifepath-keywords');
    keywordsContainer.innerHTML = '';
    lifePathData[sum].keywords.forEach(keyword => {
        const span = document.createElement('span');
        span.className = 'keyword-tag';
        span.textContent = `# ${keyword}`;
        keywordsContainer.appendChild(span);
    });

    // 2. Western Zodiac (西洋星座)
    let zodiacKey = "";
    if ((month == 3 && date >= 21) || (month == 4 && date <= 19)) zodiacKey = "aries";
    else if ((month == 4 && date >= 20) || (month == 5 && date <= 20)) zodiacKey = "taurus";
    else if ((month == 5 && date >= 21) || (month == 6 && date <= 21)) zodiacKey = "gemini";
    else if ((month == 6 && date >= 22) || (month == 7 && date <= 22)) zodiacKey = "cancer";
    else if ((month == 7 && date >= 23) || (month == 8 && date <= 22)) zodiacKey = "leo";
    else if ((month == 8 && date >= 23) || (month == 9 && date <= 22)) zodiacKey = "virgo";
    else if ((month == 9 && date >= 23) || (month == 10 && date <= 23)) zodiacKey = "libra";
    else if ((month == 10 && date >= 24) || (month == 11 && date <= 22)) zodiacKey = "scorpio";
    else if ((month == 11 && date >= 23) || (month == 12 && date <= 21)) zodiacKey = "sagittarius";
    else if ((month == 12 && date >= 22) || (month == 1 && date <= 19)) zodiacKey = "capricorn";
    else if ((month == 1 && date >= 20) || (month == 2 && date <= 18)) zodiacKey = "aquarius";
    else zodiacKey = "pisces";

    const zInfo = zodiacData[zodiacKey];
    document.getElementById('zodiac-card-icon').textContent = zInfo.icon;
    document.getElementById('zodiac-card-title').textContent = zInfo.title;
    document.getElementById('zodiac-ruler').textContent = zInfo.ruler;
    document.getElementById('zodiac-element').textContent = zInfo.element;
    
    // Custom description based on Name + Zodiac Summary
    const seed = getDailySeed(zodiacKey);
    const customZodiacSummary = `${userData.name}，根據您西洋出生星盤，您受守護星【${zInfo.ruler}】與【${zInfo.element}】引導。${zInfo.summary[0]}`;
    document.getElementById('zodiac-desc').textContent = customZodiacSummary;
    document.getElementById('zodiac-advice').textContent = zInfo.advice;

    // Auto-highlight/select the zodiac button in tab 3 (Horoscope)
    const items = document.querySelectorAll('.zodiac-item');
    items.forEach(item => {
        if(item.id === `zodiac-${zodiacKey}`) {
            item.classList.add('selected');
        } else {
            item.classList.remove('selected');
        }
    });
    // Fill horoscope tab preview as well
    selectZodiac(zodiacKey);

    // 3. Ziwei Doushu Life Palace Star (紫微主星)
    // Compute star index based on month + date hash
    const ziweiSeed = (month * 7 + date * 3) % ziweiStars.length;
    const starInfo = ziweiStars[ziweiSeed];
    document.getElementById('ziwei-title').textContent = `${starInfo.star} ・ ${starInfo.tag}`;
    document.getElementById('ziwei-desc').textContent = `${userData.name}，您的命宮本命主星坐落於【${starInfo.star}】。這表示您性格中帶有：${starInfo.desc}`;
    document.getElementById('ziwei-advice').textContent = starInfo.advice;

    // 4. I Ching Bagua & Five Elements (易經八卦與五行)
    // Calculate Bagua Trigram index using Name length + birthday day
    const nameCodeSum = Array.from(userData.name).reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const baguaSeed = (nameCodeSum + date) % baguaTrigrams.length;
    const trigram = baguaTrigrams[baguaSeed];
    document.getElementById('bagua-title').textContent = trigram.name;
    document.getElementById('bagua-desc').textContent = `${userData.name}，您的名字與生辰在易經磁場中合為【${trigram.name}】，五行本源屬【${trigram.element}】。此卦象意味著：${trigram.desc}`;

    // Deterministic Five Elements balance percentages
    const wSeed = nameCodeSum + year;
    let wWood = (wSeed % 25) + 10;   // 10-34%
    let wFire = ((wSeed >> 2) % 25) + 10;
    let wEarth = ((wSeed >> 4) % 25) + 10;
    let wMetal = ((wSeed >> 6) % 25) + 10;
    
    // Add bonus element points based on Trigram element
    if (trigram.element === "木") wWood += 20;
    else if (trigram.element === "火") wFire += 20;
    else if (trigram.element === "土") wEarth += 20;
    else if (trigram.element === "金") wMetal += 20;
    
    let wWater = 100 - (wWood + wFire + wEarth + wMetal);
    if (wWater < 5) {
        // Adjust bounds
        wWater = 10;
        const total = wWood + wFire + wEarth + wMetal + wWater;
        wWood = Math.floor((wWood / total) * 100);
        wFire = Math.floor((wFire / total) * 100);
        wEarth = Math.floor((wEarth / total) * 100);
        wMetal = Math.floor((wMetal / total) * 100);
        wWater = 100 - (wWood + wFire + wEarth + wMetal);
    }

    // Set progress bars
    document.getElementById('elem-wood').style.width = `${wWood}%`;
    document.getElementById('elem-fire').style.width = `${wFire}%`;
    document.getElementById('elem-earth').style.width = `${wEarth}%`;
    document.getElementById('elem-metal').style.width = `${wMetal}%`;
    document.getElementById('elem-water').style.width = `${wWater}%`;
}

// ==========================================
// 8. Controller: Mode Switcher Tabs
// ==========================================
function switchMode(mode) {
    if (!userData.name) {
        alert("請先完成上方天命排盤，再解鎖功能！");
        return;
    }

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
// 9. Controller: Tarot Divination Logic
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
        alert(`${userData.name}，洗牌已完成！請由左至右點擊三張卡牌，揭示您的過去、現在與未來。`);
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
        box.querySelector('.card-desc').textContent = `${userData.name}，這代表您：${description}`;
    });

    // Scroll smoothly to results
    resultsBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// ==========================================
// 10. Controller: Daily Horoscope Logic
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
    const userNameGreeting = userData.name ? `${userData.name}，` : "";
    document.getElementById('horo-summary').textContent = userNameGreeting + summaryText;
    document.getElementById('lucky-color').textContent = luckyColors[luckyColorIdx];
    document.getElementById('lucky-number').textContent = luckyNumber;
    document.getElementById('lucky-dir').textContent = luckyDirections[luckyDirIdx];
}

function updateBar(type, val) {
    const bar = document.getElementById(`bar-${type}`);
    const pct = document.getElementById(`pct-${type}`);
    if (bar && pct) {
        bar.style.width = `${val}%`;
        pct.textContent = `${val}%`;
    }
}

// ==========================================
// 11. Controller: Traditional Divination (求籤 & 擲筊)
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
    document.getElementById('jiao-status-hud').textContent = `${userData.name}，正在搖動籤筒，默想心中祈求之事...`;
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
        document.getElementById('jiao-status-hud').innerHTML = `🔮 <b>${userData.name} 已抽得：${divinationState.drawnQian.num}</b><br>請點擊右方『擲筊請示』，向神明確認是否為此靈籤！`;
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
            hud.innerHTML = `🎉 <b>【聖筊】神明允示！</b><br>此籤確實為 ${userData.name} 所求，靈籤啟示已解鎖於下方！`;
            tossBtn.disabled = true; // Complete, disable toss
            
            // Reveal Slip Details
            revealFortuneSlip();
        } else if (outcome === "xiao") {
            hud.className = "jiao-status-hud success-text";
            hud.innerHTML = `😅 <b>【笑筊】神明微笑不言。</b><br>神明笑而不答，或是您問事不夠明確。請 ${userData.name} 再次『擲筊』請示！`;
        } else {
            hud.className = "jiao-status-hud fail-text";
            hud.innerHTML = `❌ <b>【陰筊】神明不允，並非此籤！</b><br>此籤不對。請 ${userData.name} 重按左方籤筒『重新求籤』並再次擲筊請示！`;
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
    document.getElementById('slip-poetic-meaning').textContent = `${userData.name}，此籤詩意為：${slip.poetic}`;
    document.getElementById('slip-fortune-meaning').textContent = slip.fortune;

    card.style.display = 'block';
    
    // Smooth scroll down to slip
    setTimeout(() => {
        card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
}
