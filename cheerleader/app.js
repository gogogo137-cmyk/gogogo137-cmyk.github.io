// Cheerleaders Database
const cheerleaders = [
  {
    "id": "dahye",
    "name": "李多慧 (이다혜)",
    "nameEn": "Dahye Lee",
    "team": "味全龍 Dragon Beauties / 台啤雲豹",
    "leagues": [
      "cpbl",
      "tpbl"
    ],
    "nationality": "korea",
    "popularity": 980000,
    "emoji": "🐉",
    "image": "assets/dahye.png",
    "bio": "來自韓國的應援女神，以頂尖的爆發力舞技與極具親和力的標誌性笑容風靡全台，掀起了中職與職籃啦啦隊的「韓流旋風」，實力深受各界認可。",
    "direction": "專業舞蹈編排與表演、個人YouTube Vlogger、電視廣告品牌代言、多棲藝人發展。"
  },
  {
    "id": "mizuki",
    "name": "林襄 (林襄)",
    "nameEn": "Mizuki",
    "team": "味全龍 Dragon Beauties",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 920000,
    "emoji": "🍒",
    "image": "assets/mizuki.png",
    "bio": "台灣指標性的啦啦隊超人氣隊員，笑容甜美、身形姣好。不僅在球場上活力四射，也是潮流時尚、寫真集與廣告代言的流量焦點，海外名氣響亮。",
    "direction": "時尚模特兒、電視節目主持、寫真書出版、海外娛樂圈活動與戲劇發展。"
  },
  {
    "id": "qunqun",
    "name": "峮峮 (吳函峮)",
    "nameEn": "Qunqun",
    "team": "中信兄弟 Passion Sisters",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 880000,
    "emoji": "🐘",
    "image": "assets/qunqun.png",
    "bio": "憑藉一首「炸裂應援曲」红遍亞洲，擁有鄰家女孩般的甜美笑容與率真性格。多年來深耕球場應援與演藝圈，是橫跨啦啦隊與主持界的老牌女神。",
    "direction": "電視綜藝主持（如《飢餓遊戲》）、影視戲劇演出、品牌聯名代言人。"
  },
  {
    "id": "an",
    "name": "安芝儇 (안지현)",
    "nameEn": "Ji-hyun An",
    "team": "台鋼雄鷹 Wing Stars / 台鋼獵鷹",
    "leagues": [
      "cpbl",
      "tpbl"
    ],
    "nationality": "korea",
    "popularity": 750000,
    "emoji": "🦅",
    "image": "assets/an.png",
    "bio": "被譽為韓國「啦啦隊天花板」，身形高挑、舞姿優美儒雅。受邀來台後擔任台鋼啦啦隊總監與核心招招牌，成功將韓式應援的精髓融入本土球隊。",
    "direction": "啦啦隊編舞與培訓總監、跨國體育推廣大使、高階彩妝與時尚代言。"
  },
  {
    "id": "cimei",
    "name": "慈妹 (彭翊慈)",
    "nameEn": "Cimei",
    "team": "富邦悍將 / 台北富邦勇士 Fubon Angels",
    "leagues": [
      "cpbl",
      "tpbl"
    ],
    "nationality": "taiwan",
    "popularity": 680000,
    "emoji": "👼",
    "image": "assets/cimei.png",
    "bio": "Fubon Angels 的人氣招招牌，身形嬌小卻有強大的舞台爆發力，畢業於專業舞蹈科系，擅長多元舞風，性格活潑開朗，與現場球迷互動性極強。",
    "direction": "街舞編排與教學、實境節目嘉賓、網路影音主持及運動休閒品牌代言。"
  },
  {
    "id": "se7en",
    "name": "瑟七 (林芮安)",
    "nameEn": "Se7en",
    "team": "統一獅 Uni-Girls / 新竹攻城獅 Muse Girls",
    "leagues": [
      "cpbl",
      "tpbl"
    ],
    "nationality": "taiwan",
    "popularity": 580000,
    "emoji": "🦁",
    "image": "assets/se7en.png",
    "bio": "橫跨職棒與職籃雙棲，有著甜美深邃的電眼與開朗的陽光氣質，以青春洋溢、毫無架子的活潑表現受到廣大棒籃球迷的喜愛。",
    "direction": "體育球團推廣宣傳、遊戲實況直播、潮流與美妝品牌代言。"
  },
  {
    "id": "faye",
    "name": "斐棋 (許斐棋)",
    "nameEn": "Faye",
    "team": "統一獅 Uni-Girls / 極速超跑女排",
    "leagues": [
      "cpbl",
      "tvl"
    ],
    "nationality": "taiwan",
    "popularity": 450000,
    "emoji": "🥁",
    "image": "assets/faye.png",
    "bio": "充滿音樂才華與爵士鼓實力的啦啦隊女孩，身兼職棒 Uni-Girls 與企業排球聯賽「極速超跑女排」應援，以多元才藝與活力體態為特色。",
    "direction": "爵士鼓與樂器表演、戲劇與廣告演出、運動與體態管理推廣大使。"
  },
  {
    "id": "like",
    "name": "賴可 (賴鈺涵)",
    "nameEn": "Like",
    "team": "味全龍 Dragon Beauties / 台北鯨華女排",
    "leagues": [
      "cpbl",
      "tvl"
    ],
    "nationality": "taiwan",
    "popularity": 400000,
    "emoji": "🏐",
    "image": "assets/like.png",
    "bio": "熱情陽光、笑容大方，同時在職棒場與排球場（台北鯨華女排）賣力應援。親和力十足，擅長帶動球場熱烈氛圍，深受排球與棒球迷支持。",
    "direction": "運動戶外直播、健康生活與健身運動推廣、旅遊外景節目主持。"
  },
  {
    "id": "chihiro",
    "name": "千紘 (山口千紘)",
    "nameEn": "Chihiro",
    "team": "統一獅 Uni-Girls",
    "leagues": [
      "cpbl"
    ],
    "nationality": "japan",
    "popularity": 420000,
    "emoji": "🇯🇵",
    "image": "assets/chihiro.png",
    "bio": "來自日本的啦啦隊美少女，將精緻可愛的日式應援風格帶進中華職棒。舞蹈動作乾淨俐落、元氣滿滿，短時間內累積了極高的跨國人氣。",
    "direction": "台日文化交流推廣、日系商品與旅遊代言、舞蹈培訓交流。"
  },
  {
    "id": "lanlan",
    "name": "籃籃 (籃籃)",
    "nameEn": "Lan Lan",
    "team": "樂天桃猿 Rakuten Girls",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 450000,
    "emoji": "🍊",
    "image": "assets/lanlan.png",
    "bio": "樂天女孩隊長，以古靈精怪、開朗討喜的形象深受球迷喜愛，也是多檔知名電視綜藝節目的核心主持，人氣居高不下。",
    "direction": "電視節目主持、品牌代言、跨足綜藝影視發展、啦啦隊隊長與編舞管理。"
  },
  {
    "id": "hayul",
    "name": "邊荷律 (변하율)",
    "nameEn": "Ha-yul Byun",
    "team": "中信兄弟 Passion Sisters",
    "leagues": [
      "cpbl"
    ],
    "nationality": "korea",
    "popularity": 380000,
    "emoji": "🐻",
    "image": "assets/hayul.png",
    "bio": "來自韓國的超人氣應援女神，擁有極高人氣與超萌的表情包，跳舞時極具渲染力，性格可愛呆萌，深受中職球迷喜愛。",
    "direction": "短影音創作、個人品牌聯名、韓式應援教學、多棲藝人發展。"
  },
  {
    "id": "yayeong",
    "name": "李雅英 (이아整理)",
    "nameEn": "Yayeong Lee",
    "team": "富邦悍將 / 台啤雲豹 Fubon Angels",
    "leagues": [
      "cpbl",
      "tpbl"
    ],
    "nationality": "korea",
    "popularity": 700000,
    "emoji": "🌸",
    "image": "assets/yayeong.png",
    "bio": "被譽為「全民表妹」，高挑迷人的身段與招牌酒窩笑容擄獲無數球迷，雙棲職棒與職籃應援，舞姿優美流暢，舞台魅力驚人。",
    "direction": "模特兒與時尚走秀、跨國體育推廣、美妝與服飾代言、舞蹈藝術編排。"
  },
  {
    "id": "mingo",
    "name": "趙娟週 (조연주)",
    "nameEn": "Mingo",
    "team": "統一獅 Uni-Girls",
    "leagues": [
      "cpbl"
    ],
    "nationality": "korea",
    "popularity": 320000,
    "emoji": "🍑",
    "image": "assets/mingo.png",
    "bio": "有著「啦啦隊界艾琳」的清純稱號，高超的舞蹈技巧與無害的清純臉龐形成強烈反差，受邀加入統一獅後迅速累積本土人氣。",
    "direction": "台日韓啦啦隊交流、日韓美妝產品代言、個人YouTube頻道、演藝舞蹈發展。"
  },
  {
    "id": "hojung",
    "name": "李晧禎 (이호정)",
    "nameEn": "Hojung Lee",
    "team": "富邦悍將 Fubon Angels",
    "leagues": [
      "cpbl"
    ],
    "nationality": "korea",
    "popularity": 410000,
    "emoji": "❄️",
    "image": "assets/hojung.png",
    "bio": "被譽為「釜山女神」，擁有高冷冷艷的精緻外型，但私底下極具親和力且活潑開朗，具有極強的舞台氣場與粉絲互動魅力。",
    "direction": "高階時尚品牌合作、彩妝代言、模特兒、個人日常Vlog創作。"
  },
  {
    "id": "emily",
    "name": "秀秀子 (秀秀子)",
    "nameEn": "Emily",
    "team": "富邦悍將 / 台北富邦勇士 Fubon Angels",
    "leagues": [
      "cpbl",
      "tpbl"
    ],
    "nationality": "taiwan",
    "popularity": 280000,
    "emoji": "🦢",
    "image": "assets/emily.png",
    "bio": "Fubon Angels 的核心成員兼隊長，舞台表演張力十足，嗓音甜美，口才與主持能力極佳，畢業於藝術大學，表演才華橫溢。",
    "direction": "商業活動主持、舞台劇與戲劇演出、舞蹈編排、戶外健康品牌推廣。"
  },
  {
    "id": "mimi",
    "name": "冞冞 (Mimi)",
    "nameEn": "Mimi",
    "team": "統一獅 Uni-Girls",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 350000,
    "emoji": "💫",
    "image": "assets/se7en.png",
    "bio": "統一獅 Uni-Girls 的超人氣成員，以甜美的笑容與精湛的舞技深受球迷喜愛。在看台上充滿活力的應援表現，具有強大的渲染力與親和力。",
    "direction": "個人自媒體經營、商業活動主持、美妝與穿搭代言、運動休閒推廣。"
  },
  {
    "id": "wenwen",
    "name": "汶汶 (Wenwen)",
    "nameEn": "Wenwen",
    "team": "中信兄弟 Passion Sisters",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 360000,
    "emoji": "🐘",
    "image": "assets/qunqun.png",
    "bio": "中信兄弟 Passion Sisters 的活力成員，以青春亮麗的外型與充滿陽光朝氣的笑容為特色。在球場上展現滿滿的熱情，與球迷的互動親切又自然。",
    "direction": "綜藝節目嘉賓、平面模特兒、品牌大使、自媒體經營與舞蹈表演。"
  },
  {
    "id": "member_18",
    "name": "李雅英 (이아영)",
    "nameEn": "Member_18",
    "team": "富邦悍將 / 台啤雲豹 Fubon Angels",
    "leagues": [
      "cpbl",
      "tpbl"
    ],
    "nationality": "korea",
    "popularity": 348801,
    "emoji": "🌸",
    "image": "assets/qunqun.png",
    "bio": "擁有鄰家女孩般的親切氣質，是 富邦悍將 / 台啤雲豹 Fubon Angels 備受矚目的新星。憑藉對應援的熱愛與無比活力，迅速在球場累積高人氣與關注。",
    "direction": "寫真書出版發行、商業活動主持、網路影音節目企劃、個人品牌創立與電商運營。"
  },
  {
    "id": "member_19",
    "name": "南珉貞 (남민정)",
    "nameEn": "Member_19",
    "team": "富邦悍將 Fubon Angels",
    "leagues": [
      "cpbl"
    ],
    "nationality": "korea",
    "popularity": 397267,
    "emoji": "🌻",
    "image": "assets/an.png",
    "bio": "以清純甜美的氣質與治癒人心的笑容風靡看台，是 富邦悍將 Fubon Angels 的招牌隊員之一。應援時細心熱情，與球迷的親切互動極具魅力。",
    "direction": "多棲藝人發展、廣告品牌大使、流行舞編排與教學、戶外健身品牌大使。"
  },
  {
    "id": "member_20",
    "name": "朴旻曙 (박민서)",
    "nameEn": "Member_20",
    "team": "台鋼雄鷹 Wing Stars",
    "leagues": [
      "cpbl"
    ],
    "nationality": "korea",
    "popularity": 554315,
    "emoji": "💎",
    "image": "assets/cimei.png",
    "bio": "為 台鋼雄鷹 Wing Stars 的人氣隊員，擁有活潑開朗的性格與熱情洋溢的笑容。在場上賣力應援，擅長與球迷互動，舞蹈實力突出，深得粉絲愛戴。",
    "direction": "多棲藝人發展、廣告品牌大使、流行舞編排與教學、戶外健身品牌大使。"
  },
  {
    "id": "member_21",
    "name": "李丹妃 (이단비)",
    "nameEn": "Member_21",
    "team": "中信兄弟 Passion Sisters",
    "leagues": [
      "cpbl"
    ],
    "nationality": "korea",
    "popularity": 442569,
    "emoji": "🔥",
    "image": "assets/se7en.png",
    "bio": "性格活潑、古靈精怪，在 中信兄弟 Passion Sisters 中扮演開心果的角色。不僅應援動作元氣滿滿，也擅長帶動觀眾席氣氛，深具群眾感染力。",
    "direction": "多棲藝人發展、廣告品牌大使、流行舞編排與教學、戶外健身品牌大使。"
  },
  {
    "id": "member_22",
    "name": "金泰雅 (김태아)",
    "nameEn": "Member_22",
    "team": "台鋼雄鷹 Wing Stars",
    "leagues": [
      "cpbl"
    ],
    "nationality": "korea",
    "popularity": 199938,
    "emoji": "🍭",
    "image": "assets/faye.png",
    "bio": "以清純甜美的氣質與治癒人心的笑容風靡看台，是 台鋼雄鷹 Wing Stars 的招牌隊員之一。應援時細心熱情，與球迷的親切互動極具魅力。",
    "direction": "個人自媒體（Instagram/YouTube）經營、美妝與穿搭品牌合作代言、舞蹈編排、體育活動推廣。"
  },
  {
    "id": "member_23",
    "name": "希美 (Nozomi)",
    "nameEn": "Member_23",
    "team": "統一獅 Uni-Girls",
    "leagues": [
      "cpbl"
    ],
    "nationality": "japan",
    "popularity": 477763,
    "emoji": "🌸",
    "image": "assets/like.png",
    "bio": "畢業於專業舞蹈學系，身兼 統一獅 Uni-Girls 的編舞核心。在舞台上展現精湛且具爆發力的舞姿，氣場十足，是現場表演的焦點人物。",
    "direction": "高階時尚服飾模特兒、跨國文化與旅遊宣傳推廣、舞蹈教學、運動健康食品代言人。"
  },
  {
    "id": "member_24",
    "name": "十元 (Towa)",
    "nameEn": "Member_24",
    "team": "樂天桃猿 Rakuten Girls",
    "leagues": [
      "cpbl"
    ],
    "nationality": "japan",
    "popularity": 574987,
    "emoji": "🍡",
    "image": "assets/chihiro.png",
    "bio": "以清純甜美的氣質與治癒人心的笑容風靡看台，是 樂天桃猿 Rakuten Girls 的招牌隊員之一。應援時細心熱情，與球迷的親切互動極具魅力。",
    "direction": "高階時尚服飾模特兒、跨國文化與旅遊宣傳推廣、舞蹈教學、運動健康食品代言人。"
  },
  {
    "id": "member_25",
    "name": "詩雅 (Shia)",
    "nameEn": "Member_25",
    "team": "味全龍 Dragon Beauties",
    "leagues": [
      "cpbl"
    ],
    "nationality": "japan",
    "popularity": 404880,
    "emoji": "🍣",
    "image": "assets/lanlan.png",
    "bio": "以清純甜美的氣質與治癒人心的笑容風靡看台，是 味全龍 Dragon Beauties 的招牌隊員之一。應援時細心熱情，與球迷的親切互動極具魅力。",
    "direction": "綜藝電視節目主持、遊戲實況主、品牌聯名商品企劃、影視戲劇客串演出。"
  },
  {
    "id": "member_26",
    "name": "諺諺",
    "nameEn": "Member_26",
    "team": "台啤雲豹 電豹女",
    "leagues": [
      "tpbl"
    ],
    "nationality": "taiwan",
    "popularity": 274444,
    "emoji": "💫",
    "image": "assets/hayul.png",
    "bio": "性格活潑、古靈精怪，在 台啤雲豹 電豹女 中扮演開心果的角色。不僅應援動作元氣滿滿，也擅長帶動觀眾席氣氛，深具群眾感染力。",
    "direction": "多棲藝人發展、廣告品牌大使、流行舞編排與教學、戶外健身品牌大使。"
  },
  {
    "id": "member_27",
    "name": "霖霖",
    "nameEn": "Member_27",
    "team": "味全龍 Dragon Beauties",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 179874,
    "emoji": "🔥",
    "image": "assets/yayeong.png",
    "bio": "擁有鄰家女孩般的親切氣質，是 味全龍 Dragon Beauties 備受矚目的新星。憑藉對應援的熱愛與無比活力，迅速在球場累積高人氣與關注。",
    "direction": "高階時尚服飾模特兒、跨國文化與旅遊宣傳推廣、舞蹈教學、運動健康食品代言人。"
  },
  {
    "id": "member_28",
    "name": "苡萱",
    "nameEn": "Member_28",
    "team": "樂天桃猿 Rakuten Girls",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 360288,
    "emoji": "🔥",
    "image": "assets/mingo.png",
    "bio": "性格活潑、古靈精怪，在 樂天桃猿 Rakuten Girls 中扮演開心果的角色。不僅應援動作元氣滿滿，也擅長帶動觀眾席氣氛，深具群眾感染力。",
    "direction": "寫真書出版發行、商業活動主持、網路影音節目企劃、個人品牌創立與電商運營。"
  },
  {
    "id": "member_29",
    "name": "愛麗絲",
    "nameEn": "Member_29",
    "team": "福爾摩沙夢想家 Formosa Sexy",
    "leagues": [
      "tpbl"
    ],
    "nationality": "taiwan",
    "popularity": 204783,
    "emoji": "🎵",
    "image": "assets/hojung.png",
    "bio": "以清純甜美的氣質與治癒人心的笑容風靡看台，是 福爾摩沙夢想家 Formosa Sexy 的招牌隊員之一。應援時細心熱情，與球迷的親切互動極具魅力。",
    "direction": "綜藝電視節目主持、遊戲實況主、品牌聯名商品企劃、影視戲劇客串演出。"
  },
  {
    "id": "member_30",
    "name": "儀諠",
    "nameEn": "Member_30",
    "team": "中信兄弟 Passion Sisters",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 741348,
    "emoji": "🎀",
    "image": "assets/emily.png",
    "bio": "以清純甜美的氣質與治癒人心的笑容風靡看台，是 中信兄弟 Passion Sisters 的招牌隊員之一。應援時細心熱情，與球迷的親切互動極具魅力。",
    "direction": "綜藝電視節目主持、遊戲實況主、品牌聯名商品企劃、影視戲劇客串演出。"
  },
  {
    "id": "member_31",
    "name": "迪迪",
    "nameEn": "Member_31",
    "team": "台新戰神 Taishin Wonders",
    "leagues": [
      "tpbl"
    ],
    "nationality": "taiwan",
    "popularity": 594946,
    "emoji": "🍬",
    "image": "assets/dahye.png",
    "bio": "畢業於專業舞蹈學系，身兼 台新戰神 Taishin Wonders 的編舞核心。在舞台上展現精湛且具爆發力的舞姿，氣場十足，是現場表演的焦點人物。",
    "direction": "綜藝電視節目主持、遊戲實況主、品牌聯名商品企劃、影視戲劇客串演出。"
  },
  {
    "id": "member_32",
    "name": "芊芊",
    "nameEn": "Member_32",
    "team": "福爾摩沙夢想家 Formosa Sexy",
    "leagues": [
      "tpbl"
    ],
    "nationality": "taiwan",
    "popularity": 570869,
    "emoji": "💫",
    "image": "assets/mizuki.png",
    "bio": "為 福爾摩沙夢想家 Formosa Sexy 的人氣隊員，擁有活潑開朗的性格與熱情洋溢的笑容。在場上賣力應援，擅長與球迷互動，舞蹈實力突出，深得粉絲愛戴。",
    "direction": "綜藝電視節目主持、遊戲實況主、品牌聯名商品企劃、影視戲劇客串演出。"
  },
  {
    "id": "member_33",
    "name": "媛媛",
    "nameEn": "Member_33",
    "team": "福爾摩沙夢想家 Formosa Sexy",
    "leagues": [
      "tpbl"
    ],
    "nationality": "taiwan",
    "popularity": 421113,
    "emoji": "💖",
    "image": "assets/qunqun.png",
    "bio": "以清純甜美的氣質與治癒人心的笑容風靡看台，是 福爾摩沙夢想家 Formosa Sexy 的招牌隊員之一。應援時細心熱情，與球迷的親切互動極具魅力。",
    "direction": "寫真書出版發行、商業活動主持、網路影音節目企劃、個人品牌創立與電商運營。"
  },
  {
    "id": "member_34",
    "name": "宜婷",
    "nameEn": "Member_34",
    "team": "台鋼雄鷹 Wing Stars",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 465621,
    "emoji": "🔥",
    "image": "assets/an.png",
    "bio": "性格活潑、古靈精怪，在 台鋼雄鷹 Wing Stars 中扮演開心果的角色。不僅應援動作元氣滿滿，也擅長帶動觀眾席氣氛，深具群眾感染力。",
    "direction": "個人自媒體（Instagram/YouTube）經營、美妝與穿搭品牌合作代言、舞蹈編排、體育活動推廣。"
  },
  {
    "id": "member_35",
    "name": "張晴",
    "nameEn": "Member_35",
    "team": "味全龍 Dragon Beauties",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 327659,
    "emoji": "✨",
    "image": "assets/cimei.png",
    "bio": "畢業於專業舞蹈學系，身兼 味全龍 Dragon Beauties 的編舞核心。在舞台上展現精湛且具爆發力的舞姿，氣場十足，是現場表演的焦點人物。",
    "direction": "寫真書出版發行、商業活動主持、網路影音節目企劃、個人品牌創立與電商運營。"
  },
  {
    "id": "member_36",
    "name": "嘎琳",
    "nameEn": "Member_36",
    "team": "樂天桃猿 Rakuten Girls",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 300774,
    "emoji": "💗",
    "image": "assets/se7en.png",
    "bio": "為 樂天桃猿 Rakuten Girls 的人氣隊員，擁有活潑開朗的性格與熱情洋溢的笑容。在場上賣力應援，擅長與球迷互動，舞蹈實力突出，深得粉絲愛戴。",
    "direction": "個人自媒體（Instagram/YouTube）經營、美妝與穿搭品牌合作代言、舞蹈編排、體育活動推廣。"
  },
  {
    "id": "member_37",
    "name": "宋家宜",
    "nameEn": "Member_37",
    "team": "樂天桃猿 Rakuten Girls",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 573120,
    "emoji": "🎵",
    "image": "assets/faye.png",
    "bio": "畢業於專業舞蹈學系，身兼 樂天桃猿 Rakuten Girls 的編舞核心。在舞台上展現精湛且具爆發力的舞姿，氣場十足，是現場表演的焦點人物。",
    "direction": "綜藝電視節目主持、遊戲實況主、品牌聯名商品企劃、影視戲劇客串演出。"
  },
  {
    "id": "member_38",
    "name": "禹菡",
    "nameEn": "Member_38",
    "team": "樂天桃猿 Rakuten Girls",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 703690,
    "emoji": "💗",
    "image": "assets/like.png",
    "bio": "畢業於專業舞蹈學系，身兼 樂天桃猿 Rakuten Girls 的編舞核心。在舞台上展現精湛且具爆發力的舞姿，氣場十足，是現場表演的焦點人物。",
    "direction": "寫真書出版發行、商業活動主持、網路影音節目企劃、個人品牌創立與電商運營。"
  },
  {
    "id": "member_39",
    "name": "拉拉",
    "nameEn": "Member_39",
    "team": "味全龍 Dragon Beauties",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 608419,
    "emoji": "🍬",
    "image": "assets/chihiro.png",
    "bio": "以清純甜美的氣質與治癒人心的笑容風靡看台，是 味全龍 Dragon Beauties 的招牌隊員之一。應援時細心熱情，與球迷的親切互動極具魅力。",
    "direction": "個人自媒體（Instagram/YouTube）經營、美妝與穿搭品牌合作代言、舞蹈編排、體育活動推廣。"
  },
  {
    "id": "member_40",
    "name": "雅伊",
    "nameEn": "Member_40",
    "team": "樂天桃猿 Rakuten Girls",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 613722,
    "emoji": "🎵",
    "image": "assets/lanlan.png",
    "bio": "以清純甜美的氣質與治癒人心的笑容風靡看台，是 樂天桃猿 Rakuten Girls 的招牌隊員之一。應援時細心熱情，與球迷的親切互動極具魅力。",
    "direction": "綜藝電視節目主持、遊戲實況主、品牌聯名商品企劃、影視戲劇客串演出。"
  },
  {
    "id": "member_41",
    "name": "小映",
    "nameEn": "Member_41",
    "team": "味全龍 Dragon Beauties",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 708390,
    "emoji": "👟",
    "image": "assets/hayul.png",
    "bio": "為 味全龍 Dragon Beauties 的人氣隊員，擁有活潑開朗的性格與熱情洋溢的笑容。在場上賣力應援，擅長與球迷互動，舞蹈實力突出，深得粉絲愛戴。",
    "direction": "個人自媒體（Instagram/YouTube）經營、美妝與穿搭品牌合作代言、舞蹈編排、體育活動推廣。"
  },
  {
    "id": "member_42",
    "name": "十元",
    "nameEn": "Member_42",
    "team": "樂天桃猿 Rakuten Girls",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 344771,
    "emoji": "🎉",
    "image": "assets/yayeong.png",
    "bio": "畢業於專業舞蹈學系，身兼 樂天桃猿 Rakuten Girls 的編舞核心。在舞台上展現精湛且具爆發力的舞姿，氣場十足，是現場表演的焦點人物。",
    "direction": "個人自媒體（Instagram/YouTube）經營、美妝與穿搭品牌合作代言、舞蹈編排、體育活動推廣。"
  },
  {
    "id": "member_43",
    "name": "妮可",
    "nameEn": "Member_43",
    "team": "中信兄弟 Passion Sisters",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 616468,
    "emoji": "🌈",
    "image": "assets/mingo.png",
    "bio": "畢業於專業舞蹈學系，身兼 中信兄弟 Passion Sisters 的編舞核心。在舞台上展現精湛且具爆發力的舞姿，氣場十足，是現場表演的焦點人物。",
    "direction": "高階時尚服飾模特兒、跨國文化與旅遊宣傳推廣、舞蹈教學、運動健康食品代言人。"
  },
  {
    "id": "member_44",
    "name": "寧寧",
    "nameEn": "Member_44",
    "team": "味全龍 Dragon Beauties",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 170228,
    "emoji": "💗",
    "image": "assets/hojung.png",
    "bio": "擁有鄰家女孩般的親切氣質，是 味全龍 Dragon Beauties 備受矚目的新星。憑藉對應援的熱愛與無比活力，迅速在球場累積高人氣與關注。",
    "direction": "綜藝電視節目主持、遊戲實況主、品牌聯名商品企劃、影視戲劇客串演出。"
  },
  {
    "id": "member_45",
    "name": "妮妮",
    "nameEn": "Member_45",
    "team": "統一獅 Uni-Girls",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 293032,
    "emoji": "✨",
    "image": "assets/emily.png",
    "bio": "擁有鄰家女孩般的親切氣質，是 統一獅 Uni-Girls 備受矚目的新星。憑藉對應援的熱愛與無比活力，迅速在球場累積高人氣與關注。",
    "direction": "多棲藝人發展、廣告品牌大使、流行舞編排與教學、戶外健身品牌大使。"
  },
  {
    "id": "member_46",
    "name": "柴柴",
    "nameEn": "Member_46",
    "team": "統一獅 Uni-Girls",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 723886,
    "emoji": "🔥",
    "image": "assets/dahye.png",
    "bio": "為 統一獅 Uni-Girls 的人氣隊員，擁有活潑開朗的性格與熱情洋溢的笑容。在場上賣力應援，擅長與球迷互動，舞蹈實力突出，深得粉絲愛戴。",
    "direction": "綜藝電視節目主持、遊戲實況主、品牌聯名商品企劃、影視戲劇客串演出。"
  },
  {
    "id": "member_47",
    "name": "莉子",
    "nameEn": "Member_47",
    "team": "中信兄弟 Passion Sisters",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 703466,
    "emoji": "🍬",
    "image": "assets/mizuki.png",
    "bio": "為 中信兄弟 Passion Sisters 的人氣隊員，擁有活潑開朗的性格與熱情洋溢的笑容。在場上賣力應援，擅長與球迷互動，舞蹈實力突出，深得粉絲愛戴。",
    "direction": "個人自媒體（Instagram/YouTube）經營、美妝與穿搭品牌合作代言、舞蹈編排、體育活動推廣。"
  },
  {
    "id": "member_48",
    "name": "螢螢",
    "nameEn": "Member_48",
    "team": "台鋼雄鷹 Wing Stars",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 426664,
    "emoji": "🔥",
    "image": "assets/qunqun.png",
    "bio": "以清純甜美的氣質與治癒人心的笑容風靡看台，是 台鋼雄鷹 Wing Stars 的招牌隊員之一。應援時細心熱情，與球迷的親切互動極具魅力。",
    "direction": "個人自媒體（Instagram/YouTube）經營、美妝與穿搭品牌合作代言、舞蹈編排、體育活動推廣。"
  },
  {
    "id": "member_49",
    "name": "小楓",
    "nameEn": "Member_49",
    "team": "台啤雲豹 電豹女",
    "leagues": [
      "tpbl"
    ],
    "nationality": "taiwan",
    "popularity": 514283,
    "emoji": "👟",
    "image": "assets/an.png",
    "bio": "畢業於專業舞蹈學系，身兼 台啤雲豹 電豹女 的編舞核心。在舞台上展現精湛且具爆發力的舞姿，氣場十足，是現場表演的焦點人物。",
    "direction": "綜藝電視節目主持、遊戲實況主、品牌聯名商品企劃、影視戲劇客串演出。"
  },
  {
    "id": "member_50",
    "name": "少鹽",
    "nameEn": "Member_50",
    "team": "福爾摩沙夢想家 Formosa Sexy",
    "leagues": [
      "tpbl"
    ],
    "nationality": "taiwan",
    "popularity": 583980,
    "emoji": "🔥",
    "image": "assets/cimei.png",
    "bio": "畢業於專業舞蹈學系，身兼 福爾摩沙夢想家 Formosa Sexy 的編舞核心。在舞台上展現精湛且具爆發力的舞姿，氣場十足，是現場表演的焦點人物。",
    "direction": "多棲藝人發展、廣告品牌大使、流行舞編排與教學、戶外健身品牌大使。"
  },
  {
    "id": "member_51",
    "name": "宣宣",
    "nameEn": "Member_51",
    "team": "台鋼雄鷹 Wing Stars",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 300934,
    "emoji": "🌈",
    "image": "assets/se7en.png",
    "bio": "擁有鄰家女孩般的親切氣質，是 台鋼雄鷹 Wing Stars 備受矚目的新星。憑藉對應援的熱愛與無比活力，迅速在球場累積高人氣與關注。",
    "direction": "個人自媒體（Instagram/YouTube）經營、美妝與穿搭品牌合作代言、舞蹈編排、體育活動推廣。"
  },
  {
    "id": "member_52",
    "name": "盈瑩",
    "nameEn": "Member_52",
    "team": "中信兄弟 Passion Sisters",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 571098,
    "emoji": "🍀",
    "image": "assets/faye.png",
    "bio": "為 中信兄弟 Passion Sisters 的人氣隊員，擁有活潑開朗的性格與熱情洋溢的笑容。在場上賣力應援，擅長與球迷互動，舞蹈實力突出，深得粉絲愛戴。",
    "direction": "寫真書出版發行、商業活動主持、網路影音節目企劃、個人品牌創立與電商運營。"
  },
  {
    "id": "member_53",
    "name": "波波",
    "nameEn": "Member_53",
    "team": "中信兄弟 Passion Sisters",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 356522,
    "emoji": "🔥",
    "image": "assets/like.png",
    "bio": "擁有鄰家女孩般的親切氣質，是 中信兄弟 Passion Sisters 備受矚目的新星。憑藉對應援的熱愛與無比活力，迅速在球場累積高人氣與關注。",
    "direction": "個人自媒體（Instagram/YouTube）經營、美妝與穿搭品牌合作代言、舞蹈編排、體育活動推廣。"
  },
  {
    "id": "member_54",
    "name": "溫妮",
    "nameEn": "Member_54",
    "team": "樂天桃猿 Rakuten Girls",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 128143,
    "emoji": "💗",
    "image": "assets/chihiro.png",
    "bio": "以清純甜美的氣質與治癒人心的笑容風靡看台，是 樂天桃猿 Rakuten Girls 的招牌隊員之一。應援時細心熱情，與球迷的親切互動極具魅力。",
    "direction": "寫真書出版發行、商業活動主持、網路影音節目企劃、個人品牌創立與電商運營。"
  },
  {
    "id": "member_55",
    "name": "曼容",
    "nameEn": "Member_55",
    "team": "中信兄弟 Passion Sisters",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 334813,
    "emoji": "🎉",
    "image": "assets/lanlan.png",
    "bio": "以清純甜美的氣質與治癒人心的笑容風靡看台，是 中信兄弟 Passion Sisters 的招牌隊員之一。應援時細心熱情，與球迷的親切互動極具魅力。",
    "direction": "多棲藝人發展、廣告品牌大使、流行舞編排與教學、戶外健身品牌大使。"
  },
  {
    "id": "member_56",
    "name": "小安",
    "nameEn": "Member_56",
    "team": "中信兄弟 Passion Sisters",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 407423,
    "emoji": "🌈",
    "image": "assets/hayul.png",
    "bio": "以清純甜美的氣質與治癒人心的笑容風靡看台，是 中信兄弟 Passion Sisters 的招牌隊員之一。應援時細心熱情，與球迷的親切互動極具魅力。",
    "direction": "綜藝電視節目主持、遊戲實況主、品牌聯名商品企劃、影視戲劇客串演出。"
  },
  {
    "id": "mika",
    "name": "Mika",
    "nameEn": "Mika",
    "team": "台新戰神 Taishin Wonders",
    "leagues": [
      "tpbl"
    ],
    "nationality": "taiwan",
    "popularity": 248076,
    "emoji": "💗",
    "image": "assets/yayeong.png",
    "bio": "以清純甜美的氣質與治癒人心的笑容風靡看台，是 台新戰神 Taishin Wonders 的招牌隊員之一。應援時細心熱情，與球迷的親切互動極具魅力。",
    "direction": "綜藝電視節目主持、遊戲實況主、品牌聯名商品企劃、影視戲劇客串演出。"
  },
  {
    "id": "member_58",
    "name": "怡琪",
    "nameEn": "Member_58",
    "team": "中信兄弟 Passion Sisters",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 729762,
    "emoji": "🍀",
    "image": "assets/mingo.png",
    "bio": "性格活潑、古靈精怪，在 中信兄弟 Passion Sisters 中扮演開心果的角色。不僅應援動作元氣滿滿，也擅長帶動觀眾席氣氛，深具群眾感染力。",
    "direction": "個人自媒體（Instagram/YouTube）經營、美妝與穿搭品牌合作代言、舞蹈編排、體育活動推廣。"
  },
  {
    "id": "member_59",
    "name": "柳柳",
    "nameEn": "Member_59",
    "team": "台新戰神 Taishin Wonders",
    "leagues": [
      "tpbl"
    ],
    "nationality": "taiwan",
    "popularity": 144829,
    "emoji": "📣",
    "image": "assets/hojung.png",
    "bio": "為 台新戰神 Taishin Wonders 的人氣隊員，擁有活潑開朗的性格與熱情洋溢的笑容。在場上賣力應援，擅長與球迷互動，舞蹈實力突出，深得粉絲愛戴。",
    "direction": "寫真書出版發行、商業活動主持、網路影音節目企劃、個人品牌創立與電商運營。"
  },
  {
    "id": "member_60",
    "name": "甜心",
    "nameEn": "Member_60",
    "team": "台鋼雄鷹 Wing Stars",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 624180,
    "emoji": "🍬",
    "image": "assets/emily.png",
    "bio": "為 台鋼雄鷹 Wing Stars 的人氣隊員，擁有活潑開朗的性格與熱情洋溢的笑容。在場上賣力應援，擅長與球迷互動，舞蹈實力突出，深得粉絲愛戴。",
    "direction": "綜藝電視節目主持、遊戲實況主、品牌聯名商品企劃、影視戲劇客串演出。"
  },
  {
    "id": "member_61",
    "name": "雅惟",
    "nameEn": "Member_61",
    "team": "富邦悍將 Fubon Angels",
    "leagues": [
      "cpbl",
      "tpbl"
    ],
    "nationality": "taiwan",
    "popularity": 619907,
    "emoji": "👟",
    "image": "assets/dahye.png",
    "bio": "性格活潑、古靈精怪，在 富邦悍將 Fubon Angels 中扮演開心果的角色。不僅應援動作元氣滿滿，也擅長帶動觀眾席氣氛，深具群眾感染力。",
    "direction": "個人自媒體（Instagram/YouTube）經營、美妝與穿搭品牌合作代言、舞蹈編排、體育活動推廣。"
  },
  {
    "id": "member_62",
    "name": "口水",
    "nameEn": "Member_62",
    "team": "味全龍 Dragon Beauties",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 431612,
    "emoji": "🍬",
    "image": "assets/mizuki.png",
    "bio": "擁有鄰家女孩般的親切氣質，是 味全龍 Dragon Beauties 備受矚目的新星。憑藉對應援的熱愛與無比活力，迅速在球場累積高人氣與關注。",
    "direction": "多棲藝人發展、廣告品牌大使、流行舞編排與教學、戶外健身品牌大使。"
  },
  {
    "id": "member_63",
    "name": "芮妮",
    "nameEn": "Member_63",
    "team": "味全龍 Dragon Beauties",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 183728,
    "emoji": "😻",
    "image": "assets/qunqun.png",
    "bio": "為 味全龍 Dragon Beauties 的人氣隊員，擁有活潑開朗的性格與熱情洋溢的笑容。在場上賣力應援，擅長與球迷互動，舞蹈實力突出，深得粉絲愛戴。",
    "direction": "寫真書出版發行、商業活動主持、網路影音節目企劃、個人品牌創立與電商運營。"
  },
  {
    "id": "member_64",
    "name": "陳伊",
    "nameEn": "Member_64",
    "team": "樂天桃猿 Rakuten Girls",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 665595,
    "emoji": "😻",
    "image": "assets/an.png",
    "bio": "以清純甜美的氣質與治癒人心的笑容風靡看台，是 樂天桃猿 Rakuten Girls 的招牌隊員之一。應援時細心熱情，與球迷的親切互動極具魅力。",
    "direction": "個人自媒體（Instagram/YouTube）經營、美妝與穿搭品牌合作代言、舞蹈編排、體育活動推廣。"
  },
  {
    "id": "member_65",
    "name": "艾莉",
    "nameEn": "Member_65",
    "team": "台鋼雄鷹 Wing Stars",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 533933,
    "emoji": "💖",
    "image": "assets/cimei.png",
    "bio": "以清純甜美的氣質與治癒人心的笑容風靡看台，是 台鋼雄鷹 Wing Stars 的招牌隊員之一。應援時細心熱情，與球迷的親切互動極具魅力。",
    "direction": "綜藝電視節目主持、遊戲實況主、品牌聯名商品企劃、影視戲劇客串演出。"
  },
  {
    "id": "yuki",
    "name": "Yuki",
    "nameEn": "Yuki",
    "team": "統一獅 Uni-Girls",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 292005,
    "emoji": "💖",
    "image": "assets/se7en.png",
    "bio": "畢業於專業舞蹈學系，身兼 統一獅 Uni-Girls 的編舞核心。在舞台上展現精湛且具爆發力的舞姿，氣場十足，是現場表演的焦點人物。",
    "direction": "寫真書出版發行、商業活動主持、網路影音節目企劃、個人品牌創立與電商運營。"
  },
  {
    "id": "member_67",
    "name": "馬妹",
    "nameEn": "Member_67",
    "team": "味全龍 Dragon Beauties",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 680507,
    "emoji": "📣",
    "image": "assets/faye.png",
    "bio": "擁有鄰家女孩般的親切氣質，是 味全龍 Dragon Beauties 備受矚目的新星。憑藉對應援的熱愛與無比活力，迅速在球場累積高人氣與關注。",
    "direction": "綜藝電視節目主持、遊戲實況主、品牌聯名商品企劃、影視戲劇客串演出。"
  },
  {
    "id": "member_68",
    "name": "草莓",
    "nameEn": "Member_68",
    "team": "台啤雲豹 電豹女",
    "leagues": [
      "tpbl"
    ],
    "nationality": "taiwan",
    "popularity": 745288,
    "emoji": "🎵",
    "image": "assets/like.png",
    "bio": "擁有鄰家女孩般的親切氣質，是 台啤雲豹 電豹女 備受矚目的新星。憑藉對應援的熱愛與無比活力，迅速在球場累積高人氣與關注。",
    "direction": "寫真書出版發行、商業活動主持、網路影音節目企劃、個人品牌創立與電商運營。"
  },
  {
    "id": "member_69",
    "name": "檸檬",
    "nameEn": "Member_69",
    "team": "富邦悍將 Fubon Angels",
    "leagues": [
      "cpbl",
      "tpbl"
    ],
    "nationality": "taiwan",
    "popularity": 631456,
    "emoji": "📣",
    "image": "assets/chihiro.png",
    "bio": "畢業於專業舞蹈學系，身兼 富邦悍將 Fubon Angels 的編舞核心。在舞台上展現精湛且具爆發力的舞姿，氣場十足，是現場表演的焦點人物。",
    "direction": "多棲藝人發展、廣告品牌大使、流行舞編排與教學、戶外健身品牌大使。"
  },
  {
    "id": "member_70",
    "name": "洗菜",
    "nameEn": "Member_70",
    "team": "台新戰神 Taishin Wonders",
    "leagues": [
      "tpbl"
    ],
    "nationality": "taiwan",
    "popularity": 736813,
    "emoji": "💫",
    "image": "assets/lanlan.png",
    "bio": "性格活潑、古靈精怪，在 台新戰神 Taishin Wonders 中扮演開心果的角色。不僅應援動作元氣滿滿，也擅長帶動觀眾席氣氛，深具群眾感染力。",
    "direction": "高階時尚服飾模特兒、跨國文化與旅遊宣傳推廣、舞蹈教學、運動健康食品代言人。"
  },
  {
    "id": "member_71",
    "name": "沁沁",
    "nameEn": "Member_71",
    "team": "富邦悍將 Fubon Angels",
    "leagues": [
      "cpbl",
      "tpbl"
    ],
    "nationality": "taiwan",
    "popularity": 730354,
    "emoji": "🌈",
    "image": "assets/hayul.png",
    "bio": "畢業於專業舞蹈學系，身兼 富邦悍將 Fubon Angels 的編舞核心。在舞台上展現精湛且具爆發力的舞姿，氣場十足，是現場表演的焦點人物。",
    "direction": "多棲藝人發展、廣告品牌大使、流行舞編排與教學、戶外健身品牌大使。"
  },
  {
    "id": "member_72",
    "name": "艾莉絲",
    "nameEn": "Member_72",
    "team": "富邦悍將 Fubon Angels",
    "leagues": [
      "cpbl",
      "tpbl"
    ],
    "nationality": "taiwan",
    "popularity": 365522,
    "emoji": "⭐",
    "image": "assets/yayeong.png",
    "bio": "以清純甜美的氣質與治癒人心的笑容風靡看台，是 富邦悍將 Fubon Angels 的招牌隊員之一。應援時細心熱情，與球迷的親切互動極具魅力。",
    "direction": "個人自媒體（Instagram/YouTube）經營、美妝與穿搭品牌合作代言、舞蹈編排、體育活動推廣。"
  },
  {
    "id": "member_73",
    "name": "麥麥",
    "nameEn": "Member_73",
    "team": "統一獅 Uni-Girls",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 668044,
    "emoji": "🍬",
    "image": "assets/mingo.png",
    "bio": "性格活潑、古靈精怪，在 統一獅 Uni-Girls 中扮演開心果的角色。不僅應援動作元氣滿滿，也擅長帶動觀眾席氣氛，深具群眾感染力。",
    "direction": "綜藝電視節目主持、遊戲實況主、品牌聯名商品企劃、影視戲劇客串演出。"
  },
  {
    "id": "member_74",
    "name": "柔一",
    "nameEn": "Member_74",
    "team": "統一獅 Uni-Girls",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 458027,
    "emoji": "🎀",
    "image": "assets/hojung.png",
    "bio": "擁有鄰家女孩般的親切氣質，是 統一獅 Uni-Girls 備受矚目的新星。憑藉對應援的熱愛與無比活力，迅速在球場累積高人氣與關注。",
    "direction": "高階時尚服飾模特兒、跨國文化與旅遊宣傳推廣、舞蹈教學、運動健康食品代言人。"
  },
  {
    "id": "member_75",
    "name": "筱雯",
    "nameEn": "Member_75",
    "team": "台鋼雄鷹 Wing Stars",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 534963,
    "emoji": "👟",
    "image": "assets/emily.png",
    "bio": "以清純甜美的氣質與治癒人心的笑容風靡看台，是 台鋼雄鷹 Wing Stars 的招牌隊員之一。應援時細心熱情，與球迷的親切互動極具魅力。",
    "direction": "個人自媒體（Instagram/YouTube）經營、美妝與穿搭品牌合作代言、舞蹈編排、體育活動推廣。"
  },
  {
    "id": "member_76",
    "name": "儷軒",
    "nameEn": "Member_76",
    "team": "樂天桃猿 Rakuten Girls",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 712457,
    "emoji": "🔥",
    "image": "assets/dahye.png",
    "bio": "性格活潑、古靈精怪，在 樂天桃猿 Rakuten Girls 中扮演開心果的角色。不僅應援動作元氣滿滿，也擅長帶動觀眾席氣氛，深具群眾感染力。",
    "direction": "綜藝電視節目主持、遊戲實況主、品牌聯名商品企劃、影視戲劇客串演出。"
  },
  {
    "id": "member_77",
    "name": "宋宋",
    "nameEn": "Member_77",
    "team": "樂天桃猿 Rakuten Girls",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 320626,
    "emoji": "🍬",
    "image": "assets/mizuki.png",
    "bio": "畢業於專業舞蹈學系，身兼 樂天桃猿 Rakuten Girls 的編舞核心。在舞台上展現精湛且具爆發力的舞姿，氣場十足，是現場表演的焦點人物。",
    "direction": "多棲藝人發展、廣告品牌大使、流行舞編排與教學、戶外健身品牌大使。"
  },
  {
    "id": "member_78",
    "name": "蔓妮",
    "nameEn": "Member_78",
    "team": "台新戰神 Taishin Wonders",
    "leagues": [
      "tpbl"
    ],
    "nationality": "taiwan",
    "popularity": 572149,
    "emoji": "🎵",
    "image": "assets/qunqun.png",
    "bio": "擁有鄰家女孩般的親切氣質，是 台新戰神 Taishin Wonders 備受矚目的新星。憑藉對應援的熱愛與無比活力，迅速在球場累積高人氣與關注。",
    "direction": "個人自媒體（Instagram/YouTube）經營、美妝與穿搭品牌合作代言、舞蹈編排、體育活動推廣。"
  },
  {
    "id": "member_79",
    "name": "侯芳",
    "nameEn": "Member_79",
    "team": "統一獅 Uni-Girls",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 516125,
    "emoji": "💫",
    "image": "assets/an.png",
    "bio": "為 統一獅 Uni-Girls 的人氣隊員，擁有活潑開朗的性格與熱情洋溢的笑容。在場上賣力應援，擅長與球迷互動，舞蹈實力突出，深得粉絲愛戴。",
    "direction": "寫真書出版發行、商業活動主持、網路影音節目企劃、個人品牌創立與電商運營。"
  },
  {
    "id": "member_80",
    "name": "心璇",
    "nameEn": "Member_80",
    "team": "味全龍 Dragon Beauties",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 402520,
    "emoji": "💫",
    "image": "assets/cimei.png",
    "bio": "性格活潑、古靈精怪，在 味全龍 Dragon Beauties 中扮演開心果的角色。不僅應援動作元氣滿滿，也擅長帶動觀眾席氣氛，深具群眾感染力。",
    "direction": "多棲藝人發展、廣告品牌大使、流行舞編排與教學、戶外健身品牌大使。"
  },
  {
    "id": "member_81",
    "name": "小珍奶",
    "nameEn": "Member_81",
    "team": "味全龍 Dragon Beauties",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 290286,
    "emoji": "🎉",
    "image": "assets/se7en.png",
    "bio": "以清純甜美的氣質與治癒人心的笑容風靡看台，是 味全龍 Dragon Beauties 的招牌隊員之一。應援時細心熱情，與球迷的親切互動極具魅力。",
    "direction": "高階時尚服飾模特兒、跨國文化與旅遊宣傳推廣、舞蹈教學、運動健康食品代言人。"
  },
  {
    "id": "member_82",
    "name": "咪雅",
    "nameEn": "Member_82",
    "team": "統一獅 Uni-Girls",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 541115,
    "emoji": "🔥",
    "image": "assets/faye.png",
    "bio": "畢業於專業舞蹈學系，身兼 統一獅 Uni-Girls 的編舞核心。在舞台上展現精湛且具爆發力的舞姿，氣場十足，是現場表演的焦點人物。",
    "direction": "多棲藝人發展、廣告品牌大使、流行舞編排與教學、戶外健身品牌大使。"
  },
  {
    "id": "wendy",
    "name": "Wendy",
    "nameEn": "Wendy",
    "team": "台啤雲豹 電豹女",
    "leagues": [
      "tpbl"
    ],
    "nationality": "taiwan",
    "popularity": 437167,
    "emoji": "🎉",
    "image": "assets/like.png",
    "bio": "擁有鄰家女孩般的親切氣質，是 台啤雲豹 電豹女 備受矚目的新星。憑藉對應援的熱愛與無比活力，迅速在球場累積高人氣與關注。",
    "direction": "個人自媒體（Instagram/YouTube）經營、美妝與穿搭品牌合作代言、舞蹈編排、體育活動推廣。"
  },
  {
    "id": "member_84",
    "name": "東東",
    "nameEn": "Member_84",
    "team": "富邦悍將 Fubon Angels",
    "leagues": [
      "cpbl",
      "tpbl"
    ],
    "nationality": "taiwan",
    "popularity": 212267,
    "emoji": "🌈",
    "image": "assets/chihiro.png",
    "bio": "畢業於專業舞蹈學系，身兼 富邦悍將 Fubon Angels 的編舞核心。在舞台上展現精湛且具爆發力的舞姿，氣場十足，是現場表演的焦點人物。",
    "direction": "寫真書出版發行、商業活動主持、網路影音節目企劃、個人品牌創立與電商運營。"
  },
  {
    "id": "member_85",
    "name": "雪旋",
    "nameEn": "Member_85",
    "team": "台啤雲豹 電豹女",
    "leagues": [
      "tpbl"
    ],
    "nationality": "taiwan",
    "popularity": 353742,
    "emoji": "⭐",
    "image": "assets/lanlan.png",
    "bio": "擁有鄰家女孩般的親切氣質，是 台啤雲豹 電豹女 備受矚目的新星。憑藉對應援的熱愛與無比活力，迅速在球場累積高人氣與關注。",
    "direction": "綜藝電視節目主持、遊戲實況主、品牌聯名商品企劃、影視戲劇客串演出。"
  },
  {
    "id": "member_86",
    "name": "詩雅",
    "nameEn": "Member_86",
    "team": "統一獅 Uni-Girls",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 366527,
    "emoji": "🍀",
    "image": "assets/hayul.png",
    "bio": "畢業於專業舞蹈學系，身兼 統一獅 Uni-Girls 的編舞核心。在舞台上展現精湛且具爆發力的舞姿，氣場十足，是現場表演的焦點人物。",
    "direction": "寫真書出版發行、商業活動主持、網路影音節目企劃、個人品牌創立與電商運營。"
  },
  {
    "id": "member_87",
    "name": "凱伊",
    "nameEn": "Member_87",
    "team": "樂天桃猿 Rakuten Girls",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 602831,
    "emoji": "🍬",
    "image": "assets/yayeong.png",
    "bio": "畢業於專業舞蹈學系，身兼 樂天桃猿 Rakuten Girls 的編舞核心。在舞台上展現精湛且具爆發力的舞姿，氣場十足，是現場表演的焦點人物。",
    "direction": "高階時尚服飾模特兒、跨國文化與旅遊宣傳推廣、舞蹈教學、運動健康食品代言人。"
  },
  {
    "id": "member_88",
    "name": "奶昔",
    "nameEn": "Member_88",
    "team": "富邦悍將 Fubon Angels",
    "leagues": [
      "cpbl",
      "tpbl"
    ],
    "nationality": "taiwan",
    "popularity": 143804,
    "emoji": "🍀",
    "image": "assets/mingo.png",
    "bio": "擁有鄰家女孩般的親切氣質，是 富邦悍將 Fubon Angels 備受矚目的新星。憑藉對應援的熱愛與無比活力，迅速在球場累積高人氣與關注。",
    "direction": "綜藝電視節目主持、遊戲實況主、品牌聯名商品企劃、影視戲劇客串演出。"
  },
  {
    "id": "member_89",
    "name": "凱蒂",
    "nameEn": "Member_89",
    "team": "中信兄弟 Passion Sisters",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 309587,
    "emoji": "🍀",
    "image": "assets/hojung.png",
    "bio": "畢業於專業舞蹈學系，身兼 中信兄弟 Passion Sisters 的編舞核心。在舞台上展現精湛且具爆發力的舞姿，氣場十足，是現場表演的焦點人物。",
    "direction": "個人自媒體（Instagram/YouTube）經營、美妝與穿搭品牌合作代言、舞蹈編排、體育活動推廣。"
  },
  {
    "id": "member_90",
    "name": "吉拿",
    "nameEn": "Member_90",
    "team": "台啤雲豹 電豹女",
    "leagues": [
      "tpbl"
    ],
    "nationality": "taiwan",
    "popularity": 296004,
    "emoji": "✨",
    "image": "assets/emily.png",
    "bio": "為 台啤雲豹 電豹女 的人氣隊員，擁有活潑開朗的性格與熱情洋溢的笑容。在場上賣力應援，擅長與球迷互動，舞蹈實力突出，深得粉絲愛戴。",
    "direction": "綜藝電視節目主持、遊戲實況主、品牌聯名商品企劃、影視戲劇客串演出。"
  },
  {
    "id": "member_91",
    "name": "毛毛",
    "nameEn": "Member_91",
    "team": "台鋼雄鷹 Wing Stars",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 120581,
    "emoji": "🎉",
    "image": "assets/dahye.png",
    "bio": "畢業於專業舞蹈學系，身兼 台鋼雄鷹 Wing Stars 的編舞核心。在舞台上展現精湛且具爆發力的舞姿，氣場十足，是現場表演的焦點人物。",
    "direction": "綜藝電視節目主持、遊戲實況主、品牌聯名商品企劃、影視戲劇客串演出。"
  },
  {
    "id": "member_92",
    "name": "林可",
    "nameEn": "Member_92",
    "team": "中信兄弟 Passion Sisters",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 123456,
    "emoji": "👟",
    "image": "assets/mizuki.png",
    "bio": "性格活潑、古靈精怪，在 中信兄弟 Passion Sisters 中扮演開心果的角色。不僅應援動作元氣滿滿，也擅長帶動觀眾席氣氛，深具群眾感染力。",
    "direction": "綜藝電視節目主持、遊戲實況主、品牌聯名商品企劃、影視戲劇客串演出。"
  },
  {
    "id": "member_93",
    "name": "妙妙",
    "nameEn": "Member_93",
    "team": "統一獅 Uni-Girls",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 694243,
    "emoji": "💫",
    "image": "assets/qunqun.png",
    "bio": "以清純甜美的氣質與治癒人心的笑容風靡看台，是 統一獅 Uni-Girls 的招牌隊員之一。應援時細心熱情，與球迷的親切互動極具魅力。",
    "direction": "綜藝電視節目主持、遊戲實況主、品牌聯名商品企劃、影視戲劇客串演出。"
  },
  {
    "id": "member_94",
    "name": "穎樂",
    "nameEn": "Member_94",
    "team": "樂天桃猿 Rakuten Girls",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 350852,
    "emoji": "💗",
    "image": "assets/an.png",
    "bio": "擁有鄰家女孩般的親切氣質，是 樂天桃猿 Rakuten Girls 備受矚目的新星。憑藉對應援的熱愛與無比活力，迅速在球場累積高人氣與關注。",
    "direction": "寫真書出版發行、商業活動主持、網路影音節目企劃、個人品牌創立與電商運營。"
  },
  {
    "id": "member_95",
    "name": "若潼",
    "nameEn": "Member_95",
    "team": "樂天桃猿 Rakuten Girls",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 325443,
    "emoji": "🎵",
    "image": "assets/cimei.png",
    "bio": "擁有鄰家女孩般的親切氣質，是 樂天桃猿 Rakuten Girls 備受矚目的新星。憑藉對應援的熱愛與無比活力，迅速在球場累積高人氣與關注。",
    "direction": "高階時尚服飾模特兒、跨國文化與旅遊宣傳推廣、舞蹈教學、運動健康食品代言人。"
  },
  {
    "id": "member_96",
    "name": "艾妮",
    "nameEn": "Member_96",
    "team": "統一獅 Uni-Girls",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 704960,
    "emoji": "🍬",
    "image": "assets/se7en.png",
    "bio": "擁有鄰家女孩般的親切氣質，是 統一獅 Uni-Girls 備受矚目的新星。憑藉對應援的熱愛與無比活力，迅速在球場累積高人氣與關注。",
    "direction": "個人自媒體（Instagram/YouTube）經營、美妝與穿搭品牌合作代言、舞蹈編排、體育活動推廣。"
  },
  {
    "id": "queena",
    "name": "Queena",
    "nameEn": "Queena",
    "team": "台新戰神 Taishin Wonders",
    "leagues": [
      "tpbl"
    ],
    "nationality": "taiwan",
    "popularity": 308647,
    "emoji": "😻",
    "image": "assets/faye.png",
    "bio": "畢業於專業舞蹈學系，身兼 台新戰神 Taishin Wonders 的編舞核心。在舞台上展現精湛且具爆發力的舞姿，氣場十足，是現場表演的焦點人物。",
    "direction": "高階時尚服飾模特兒、跨國文化與旅遊宣傳推廣、舞蹈教學、運動健康食品代言人。"
  },
  {
    "id": "member_98",
    "name": "梓梓",
    "nameEn": "Member_98",
    "team": "福爾摩沙夢想家 Formosa Sexy",
    "leagues": [
      "tpbl"
    ],
    "nationality": "taiwan",
    "popularity": 224495,
    "emoji": "😻",
    "image": "assets/like.png",
    "bio": "性格活潑、古靈精怪，在 福爾摩沙夢想家 Formosa Sexy 中扮演開心果的角色。不僅應援動作元氣滿滿，也擅長帶動觀眾席氣氛，深具群眾感染力。",
    "direction": "個人自媒體（Instagram/YouTube）經營、美妝與穿搭品牌合作代言、舞蹈編排、體育活動推廣。"
  },
  {
    "id": "member_99",
    "name": "蘿拉",
    "nameEn": "Member_99",
    "team": "味全龍 Dragon Beauties",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 694451,
    "emoji": "💫",
    "image": "assets/chihiro.png",
    "bio": "為 味全龍 Dragon Beauties 的人氣隊員，擁有活潑開朗的性格與熱情洋溢的笑容。在場上賣力應援，擅長與球迷互動，舞蹈實力突出，深得粉絲愛戴。",
    "direction": "多棲藝人發展、廣告品牌大使、流行舞編排與教學、戶外健身品牌大使。"
  },
  {
    "id": "member_100",
    "name": "筱緹",
    "nameEn": "Member_100",
    "team": "台啤雲豹 電豹女",
    "leagues": [
      "tpbl"
    ],
    "nationality": "taiwan",
    "popularity": 233717,
    "emoji": "⭐",
    "image": "assets/lanlan.png",
    "bio": "擁有鄰家女孩般的親切氣質，是 台啤雲豹 電豹女 備受矚目的新星。憑藉對應援的熱愛與無比活力，迅速在球場累積高人氣與關注。",
    "direction": "寫真書出版發行、商業活動主持、網路影音節目企劃、個人品牌創立與電商運營。"
  },
  {
    "id": "member_101",
    "name": "琪琪",
    "nameEn": "Member_101",
    "team": "味全龍 Dragon Beauties",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 732602,
    "emoji": "😻",
    "image": "assets/hayul.png",
    "bio": "以清純甜美的氣質與治癒人心的笑容風靡看台，是 味全龍 Dragon Beauties 的招牌隊員之一。應援時細心熱情，與球迷的親切互動極具魅力。",
    "direction": "寫真書出版發行、商業活動主持、網路影音節目企劃、個人品牌創立與電商運營。"
  },
  {
    "id": "member_102",
    "name": "小蛙",
    "nameEn": "Member_102",
    "team": "味全龍 Dragon Beauties",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 527749,
    "emoji": "💫",
    "image": "assets/yayeong.png",
    "bio": "性格活潑、古靈精怪，在 味全龍 Dragon Beauties 中扮演開心果的角色。不僅應援動作元氣滿滿，也擅長帶動觀眾席氣氛，深具群眾感染力。",
    "direction": "高階時尚服飾模特兒、跨國文化與旅遊宣傳推廣、舞蹈教學、運動健康食品代言人。"
  },
  {
    "id": "member_103",
    "name": "琳妲",
    "nameEn": "Member_103",
    "team": "樂天桃猿 Rakuten Girls",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 521319,
    "emoji": "👟",
    "image": "assets/mingo.png",
    "bio": "性格活潑、古靈精怪，在 樂天桃猿 Rakuten Girls 中扮演開心果的角色。不僅應援動作元氣滿滿，也擅長帶動觀眾席氣氛，深具群眾感染力。",
    "direction": "綜藝電視節目主持、遊戲實況主、品牌聯名商品企劃、影視戲劇客串演出。"
  },
  {
    "id": "member_104",
    "name": "貴貴",
    "nameEn": "Member_104",
    "team": "中信兄弟 Passion Sisters",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 601618,
    "emoji": "🎵",
    "image": "assets/hojung.png",
    "bio": "擁有鄰家女孩般的親切氣質，是 中信兄弟 Passion Sisters 備受矚目的新星。憑藉對應援的熱愛與無比活力，迅速在球場累積高人氣與關注。",
    "direction": "個人自媒體（Instagram/YouTube）經營、美妝與穿搭品牌合作代言、舞蹈編排、體育活動推廣。"
  },
  {
    "id": "member_105",
    "name": "其其",
    "nameEn": "Member_105",
    "team": "福爾摩沙夢想家 Formosa Sexy",
    "leagues": [
      "tpbl"
    ],
    "nationality": "taiwan",
    "popularity": 291005,
    "emoji": "✨",
    "image": "assets/emily.png",
    "bio": "為 福爾摩沙夢想家 Formosa Sexy 的人氣隊員，擁有活潑開朗的性格與熱情洋溢的笑容。在場上賣力應援，擅長與球迷互動，舞蹈實力突出，深得粉絲愛戴。",
    "direction": "個人自媒體（Instagram/YouTube）經營、美妝與穿搭品牌合作代言、舞蹈編排、體育活動推廣。"
  },
  {
    "id": "member_106",
    "name": "孟潔",
    "nameEn": "Member_106",
    "team": "樂天桃猿 Rakuten Girls",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 277453,
    "emoji": "🌈",
    "image": "assets/dahye.png",
    "bio": "為 樂天桃猿 Rakuten Girls 的人氣隊員，擁有活潑開朗的性格與熱情洋溢的笑容。在場上賣力應援，擅長與球迷互動，舞蹈實力突出，深得粉絲愛戴。",
    "direction": "高階時尚服飾模特兒、跨國文化與旅遊宣傳推廣、舞蹈教學、運動健康食品代言人。"
  },
  {
    "id": "member_107",
    "name": "芮絲",
    "nameEn": "Member_107",
    "team": "統一獅 Uni-Girls",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 689609,
    "emoji": "🌈",
    "image": "assets/mizuki.png",
    "bio": "為 統一獅 Uni-Girls 的人氣隊員，擁有活潑開朗的性格與熱情洋溢的笑容。在場上賣力應援，擅長與球迷互動，舞蹈實力突出，深得粉絲愛戴。",
    "direction": "高階時尚服飾模特兒、跨國文化與旅遊宣傳推廣、舞蹈教學、運動健康食品代言人。"
  }
];

// Current State
let activeLeague = "all";
let activeNationality = "all";
let selectedCheerleaderId = "dahye"; // default selected cheerleader ID

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
    syncSelectionWithFilter();
    renderAllCards();
    updateCansProbability();
}

function filterNationality(nat) {
    activeNationality = nat;
    document.querySelectorAll(".nat-btn").forEach(btn => btn.classList.remove("active"));
    document.getElementById(`nbtn-${nat}`).classList.add("active");
    syncSelectionWithFilter();
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

// Get probability of a cheerleader in the current filtered pool
function getCheerleaderProbabilityText(c) {
    if (!c) return "0.00%";
    const filtered = getFilteredList();
    const isInPool = filtered.some(item => item.id === c.id);
    if (!isInPool) return "0.00% (不在候選池中)";
    const sumSqrt = filtered.reduce((sum, item) => sum + Math.sqrt(item.popularity), 0);
    if (sumSqrt === 0) return "0.00%";
    const prob = (Math.sqrt(c.popularity) / sumSqrt) * 100;
    return prob.toFixed(2) + "%";
}

// Handle cheerleader card click from the pool
function selectCheerleader(c) {
    selectedCheerleaderId = c.id;
    
    // Update selected styling in pool grid
    document.querySelectorAll(".cheer-mini-card").forEach(card => {
        if (card.getAttribute("data-id") === c.id) {
            card.classList.add("selected");
        } else {
            card.classList.remove("selected");
        }
    });
    
    // Render in spotlight
    const probText = getCheerleaderProbabilityText(c);
    renderPreviewCard(c, probText, false);
    triggerCelebration();
}

// Sync currently selected cheerleader when filters change
function syncSelectionWithFilter() {
    const filtered = getFilteredList();
    if (filtered.length === 0) {
        selectedCheerleaderId = null;
        const probEl = document.getElementById("spotlight-prob");
        if (probEl) probEl.textContent = "0.00%";
        return;
    }
    
    const isSelectedInPool = filtered.some(c => c.id === selectedCheerleaderId);
    if (!isSelectedInPool) {
        selectedCheerleaderId = filtered[0].id;
    }
    
    const selectedCheerleader = filtered.find(c => c.id === selectedCheerleaderId);
    const probText = getCheerleaderProbabilityText(selectedCheerleader);
    renderPreviewCard(selectedCheerleader, probText, false);
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
        card.className = "cheer-mini-card" + (c.id === selectedCheerleaderId ? " selected" : "");
        card.setAttribute("data-id", c.id);
        card.onclick = () => selectCheerleader(c);
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
            selectedCheerleaderId = winner.id;
            document.querySelectorAll(".cheer-mini-card").forEach(card => {
                if (card.getAttribute("data-id") === winner.id) {
                    card.classList.add("selected");
                } else {
                    card.classList.remove("selected");
                }
            });
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
