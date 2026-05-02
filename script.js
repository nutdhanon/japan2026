const PAGE_LANG_STORAGE_KEY = "osaka-trip-lang";
const HELP_LANG_STORAGE_KEY = "osaka-trip-help-lang";
const DEFAULT_PAGE_LANG = "th";
const DEFAULT_HELP_LANG = "ja";

const LOCALE_MAP = {
  th: "th-TH",
  en: "en-GB",
  ja: "ja-JP",
  zh: "zh-CN",
};

const PAGE_LANGUAGE_META = {
  th: { code: "TH", flag: "🇹🇭", label: "ไทย" },
  en: { code: "EN", flag: "🇬🇧", label: "English" },
  ja: { code: "JA", flag: "🇯🇵", label: "日本語" },
  zh: { code: "ZH", flag: "🇨🇳", label: "中文" },
};

const DAY_TONE_CLASSES = ["neutral", "indigo", "rose", "teal", "moss", "plum", "bronze", "cobalt", "violet"];

const DAY_VISUALS = {
  "day-0": {
    icon: "✈",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/f0/be/f5/caption.jpg?h=500&s=1&w=900",
  },
  "day-1": {
    icon: "✈",
    image: "https://travel.rakuten.com/contents/sites/contents/files/styles/max_1300x1300/public/2024-04/night-activities-osaka_2.jpg?itok=PagSUVtG",
  },
  "day-2": {
    icon: "⛩",
    image: "https://cdn.gaijinpot.com/app/uploads/sites/6/2016/09/iStock-900771306.jpg",
  },
  "day-3": {
    icon: "⛩",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/66/Pedestrian_road_with_pavements_and_paper_umbrellas%2C_Higashiyama-ku%2C_Kyoto%2C_Japan%2C_early_morning.jpg",
  },
  "day-4": {
    icon: "♨",
    image: "https://www.japan-guide.com/g18/4019_02.jpg",
  },
  "day-5": {
    icon: "☕",
    image: "https://www.japan-guide.com/g17/3923_01.jpg",
  },
  "day-6": {
    icon: "👜",
    image: "https://res.cloudinary.com/dbm1qiew0/image/upload/blog-images/2024/09/fujiko11621122600011421_TP_V4.jpg",
  },
  "day-7": {
    icon: "⚓",
    image: "https://www.feel-kobe.jp/kobe-yakei/assets/media/DSC03874-1025x680.jpg",
  },
  "day-8": {
    icon: "☁",
    image: "https://images.squarespace-cdn.com/content/v1/52ccee75e4b00bc0dba03f46/1590891440489-5S8I6Z6OMMOT4Y8ZPKZ4/image-asset.jpeg",
  },
};

const DAY_SHORT_TITLES = {
  th: {
    "day-0": "คืนทรานซิตที่ไทเป",
    "day-1": "เริ่มต้นโอซากะ",
    "day-2": "แลนด์มาร์กโอซากะ",
    "day-3": "เกียวโตสาย heritage",
    "day-4": "Minoh & Katsuoji",
    "day-5": "วันพักใจที่ Uji",
    "day-6": "วันช็อปหลังย้าย",
    "day-7": "Kobe & Ikuta",
    "day-8": "เดินทางกลับ",
  },
  en: {
    "day-0": "Taipei Transit",
    "day-1": "Ease into Osaka",
    "day-2": "Osaka Highlights",
    "day-3": "Kyoto Heritage",
    "day-4": "Minoh & Katsuoji",
    "day-5": "Uji Reset",
    "day-6": "Shopping Day",
    "day-7": "Kobe & Ikuta",
    "day-8": "Fly Home",
  },
  ja: {
    "day-0": "台北トランジット",
    "day-1": "大阪の始まり",
    "day-2": "大阪ハイライト",
    "day-3": "京都ヘリテージ",
    "day-4": "箕面と勝尾寺",
    "day-5": "宇治でリセット",
    "day-6": "ショッピング日",
    "day-7": "神戸と生田神社",
    "day-8": "帰国日",
  },
  zh: {
    "day-0": "台北转机夜",
    "day-1": "慢慢进入大阪",
    "day-2": "大阪重点日",
    "day-3": "京都文化日",
    "day-4": "箕面与胜尾寺",
    "day-5": "宇治疗愈日",
    "day-6": "购物日",
    "day-7": "神户与生田",
    "day-8": "返程日",
  },
};

const I18N = {
  th: {
    "page.title": "Osaka Slow Life 2026 — Belmond x Aman Edition",
    "page.description": "คู่มือทริปส่วนตัวสำหรับ Osaka Slow Life 2026 พร้อมเที่ยวบิน แผนรายวัน งบ และ Help Mode ใช้งานระหว่างเที่ยว",
    "brand.label": "คู่มือทริปส่วนตัว",
    "help.shortcut": "Help Mode",
    "nav.flights": "เที่ยวบิน",
    "nav.overview": "ภาพรวม",
    "nav.intel": "เตรียมตัว",
    "nav.highlights": "ไฮไลต์",
    "nav.daySeven": "วันที่ 7",
    "nav.dayDetails": "รายละเอียดรายวัน",
    "nav.help": "Help Mode",
    "nav.contacts": "ฉุกเฉิน",
    "countdown.heading.label": "นับถอยหลัง",
    "countdown.heading.title": "เหลือเวลาอีกนิดก่อนจะเข้าสู่จังหวะของโอซากะจริง ๆ",
    "countdown.helper.before": "ตอนนี้ยังเป็นช่วงเตรียมตัวอยู่ เราจึงโชว์เวลาแบบ countdown ให้ก่อน",
    "countdown.helper.during": "ตอนนี้ทริปกำลังเกิดขึ้นจริง ตัวเลขด้านล่างจะเปลี่ยนเป็นเวลาที่เหลือก่อนทริปจบ",
    "countdown.helper.after": "ทริปนี้เดินทางครบแล้ว แต่ยังเปิดกลับมาดูบันทึกและรายละเอียดรายวันได้เสมอ",
    "detailExplorer.heading.label": "เลือกวัน",
    "detailExplorer.heading.title": "เลือกวัน แล้วดูแผนของวันนั้น",
    "hero.kicker": "จากคืนทรานซิตที่ไทเป สู่โอซากะ เกียวโต มิโนะ อุจิ และโกเบ",
    "hero.title": "Osaka, ในจังหวะที่นุ่มและนิ่งขึ้น",
    "hero.summary":
      "คู่มือทริปส่วนตัวสำหรับการเดินทางแบบ slow life ที่ค่อย ๆ ไหลจากคืน transit ในไต้หวันไปสู่โอซากะ เกียวโต มิโนะ อุจิ วันช็อปปิง โกเบ และไฟลต์กลับบ้านอย่างนุ่มนวล",
    "hero.tones.kyoto": "เช้าเกียวโต",
    "hero.tones.namba": "บ่ายนัมบะ",
    "hero.tones.kobe": "เย็นโกเบ",
    "hero.meta.dates.label": "วันที่เดินทาง",
    "hero.meta.travelers.label": "ผู้เดินทาง",
    "hero.meta.travelers.value": "คู่รักวัย 40s",
    "hero.meta.style.label": "สไตล์ทริป",
    "hero.meta.style.value": "slow life, cafe, wine",
    "strip.mood.label": "อารมณ์",
    "strip.mood.title": "Quiet Luxury",
    "strip.mood.body": "นุ่ม สงบ พรีเมียม แต่ยังโรแมนติกและเป็นส่วนตัว",
    "strip.palette.label": "สีหลัก",
    "strip.palette.body": "ลดสีสดลงและใช้ accent แบบผู้ใหญ่มากขึ้น",
    "strip.experience.label": "ประสบการณ์",
    "strip.experience.title": "เปิดดูง่ายระหว่างเดินทาง",
    "strip.experience.body": "ทุก section ถูกจัดไว้ให้หยิบใช้ได้จริงทั้งตอนเช็กไฟลต์ หาเส้นทาง ดูงบ และเปิดให้คนอื่นช่วยอ่าน",
    "flights.heading.label": "เที่ยวบิน",
    "flights.heading.title": "สี่ช่วงการเดินทางที่ต่อกันอย่างนุ่มนวลตลอดทั้งทริป",
    "flights.phase.outbound1": "ขาไป 1/2",
    "flights.phase.outbound2": "ขาไป 2/2",
    "flights.phase.return1": "ขากลับ 1/2",
    "flights.phase.return2": "ขากลับ 2/2",
    "overview.heading.label": "ภาพรวมทั้ง 9 วัน",
    "overview.heading.title": "ให้แต่ละวันเป็นหนึ่งบทของการเดินทาง ไม่ใช่แค่รายการเช็ก",
    "overview.day0.label": "วันที่ 0",
    "overview.day0.title": "คืนทรานซิตที่ไทเป",
    "overview.day0.body": "BKK → TPE → Gloria Outlets",
    "overview.day1.label": "วันที่ 1",
    "overview.day1.title": "เริ่มต้นโอซากะแบบค่อยเป็นค่อยไป",
    "overview.day1.body": "TPE → KIX → Namba",
    "overview.day2.label": "วันที่ 2",
    "overview.day2.title": "แลนด์มาร์กหลักของโอซากะ",
    "overview.day2.body": "Castle Park → Shinsekai → Dotonbori",
    "overview.day3.label": "วันที่ 3",
    "overview.day3.title": "เกียวโตสาย heritage",
    "overview.day3.body": "To-ji → Fushimi Inari → Gion",
    "overview.day4.label": "วันที่ 4",
    "overview.day4.title": "Minoh & Katsuoji",
    "overview.day4.body": "ธรรมชาติ → วัดดารุมะ",
    "overview.day5.label": "วันที่ 5",
    "overview.day5.title": "วันพักใจที่ Uji",
    "overview.day5.body": "ถนนชา → matcha → Osaka spa",
    "overview.day6.label": "วันที่ 6",
    "overview.day6.title": "วันช็อปหลังย้ายโรงแรม",
    "overview.day6.body": "Namba → Shinsaibashi → PARCO",
    "overview.day7.label": "วันที่ 7",
    "overview.day7.title": "วันโกเบแบบผู้ใหญ่และไม่เร่งรีบ",
    "overview.day7.body": "Ikuta → Kitano → Harborland",
    "overview.day8.label": "วันที่ 8",
    "overview.day8.title": "เดินทางกลับแบบไม่รีบ",
    "overview.day8.body": "Namba → KIX → TPE → BKK",
    "intel.heading.label": "สรุปการเดินทาง",
    "intel.heading.title": "บัตร ค่าใช้จ่าย และของที่ต้องเตรียม ควรดูเป็นชุดเดียวกันก่อนออกเดินทาง",
    "intel.quote.kicker": "กฎง่ายที่สุดของทริปนี้",
    "intel.quote.body": "มีแค่ ICOCA ใบเดียว แล้วใช้ได้ทั้งทริป ส่วนไต้หวันใช้ taxi กับบัตรเครดิตไปเลยให้ชีวิตง่ายที่สุด",
    "intel.cards.transport.title": "บัตรเดินทาง",
    "intel.cards.costs.title": "ค่าเดินทางและค่าใช้จ่าย",
    "intel.cards.extras.title": "ค่าเดินทางจุดพิเศษที่ควรรู้",
    "intel.cards.prep.title": "ของที่ต้องเตรียมก่อนเดินทาง",
    "intel.transport.icoca.title": "ICOCA IC Card 2 ใบ",
    "intel.transport.icoca.body": "ซื้อที่ KIX และเติมเงิน ¥10,000 ต่อใบ ใช้กับ JR, Metro, Hankyu, Hanshin และรถบัสหลายสายได้ทั้งทริป",
    "intel.transport.pass.title": "ไม่ต้องซื้อ Kansai Railway Pass",
    "intel.transport.pass.body": "ค่าเดินทางรวมยังอยู่ในจุดที่ ICOCA ยืดหยุ่นและคุ้มกว่าการล็อกตัวเองกับ pass",
    "intel.transport.easycard.title": "ไต้หวันไม่ต้องซื้อ EasyCard",
    "intel.transport.easycard.body": "พักแค่ 1 คืน ใช้บัตรเครดิตหรือเงินสดสำหรับ taxi และค่าใช้จ่ายเล็ก ๆ ได้เลย",
    "intel.totals.transit.label": "ค่าเดินทางญี่ปุ่น 2 คน",
    "intel.totals.taxi.label": "Taxi และค่าเดินทางพิเศษ 2 คน",
    "intel.totals.food.label": "ค่าอาหารและเครื่องดื่ม 2 คน",
    "intel.totals.total.label": "รวมคร่าว ๆ ไม่รวมโรงแรมและตั๋วเครื่องบิน",
    "intel.totals.note": "ภาพรวมคิดเป็นประมาณ 18,000–25,000 บาทสำหรับ 2 คน และไต้หวันอีกประมาณ NT$1,800–2,500 สำหรับ 2 คน",
    "intel.extras.kyoto": "Fushimi Inari → Higashiyama ประมาณ ¥2,000–2,500 ต่อคัน",
    "intel.extras.minoh": "Minoh → Katsuoji → กลับสถานี ประมาณ ¥5,000–6,000 ต่อคัน",
    "intel.extras.taiwanAirport": "Airport ↔ City Suites Gateway ประมาณ NT$200–250 ต่อเที่ยว",
    "intel.extras.taiwanOutlet": "Hotel ↔ Gloria Outlets ประมาณ NT$150–200 ต่อเที่ยว",
    "intel.prep.1": "ซื้อ ICOCA 2 ใบที่ KIX แล้วเติมเงิน ¥10,000 ต่อใบ",
    "intel.prep.2": "ไม่ต้องซื้อ pass เพิ่ม ทั้ง Kansai Railway Pass และ EasyCard ไต้หวันไม่จำเป็นแล้ว",
    "intel.prep.3": "เตรียมบัตรเครดิตและ Apple Pay สำหรับ taxi ร้านอาหาร คาเฟ่ และค่าใช้จุกจิก",
    "intel.prep.4": "พกเงินสดก้อนเล็กไว้สำรองสำหรับร้านเล็กหรือ taxi บางจุด",
    "intel.prep.5": "เซฟชื่อโรงแรม ไฟลต์ และ booking สำคัญไว้ในมือถือกับ Maps ล่วงหน้า",
    "chapters.heading.label": "ฉากสำคัญของทริป",
    "chapters.heading.title": "สามช่วงที่จะนิยามคาแรกเตอร์ของทริปนี้ได้ชัดที่สุด",
    "chapters.kyoto.eyebrow": "Kyoto Heritage Day",
    "chapters.kyoto.title": "ตรอกหิน โคมไฟกระดาษ และมื้อเย็นที่ควรให้ความรู้สึกนิ่งและลึก",
    "chapters.kyoto.body":
      "วันเกียวโตจะค่อย ๆ พาเข้าโซนวัด ตรอกหิน และมื้อเย็นที่นิ่งลึก เป็นวันที่เหมาะกับการเดินช้าและปล่อยให้บรรยากาศนำทาง",
    "chapters.shopping.eyebrow": "Shopping, Reframed",
    "chapters.shopping.title": "ไม่ใช่วันเดินห้าง แต่เป็นบทหนึ่งของเมืองที่มีแฟชั่น ความงาม และจังหวะพัก",
    "chapters.shopping.body":
      "วันนี้เป็นช่วงเติมของที่อยากได้แบบไม่เร่งรีบ เดินจาก Namba ไป Shinsaibashi แวะห้าง คาเฟ่ และแบรนด์ที่ตั้งใจไว้โดยไม่ต้องกดดันตัวเอง",
    "chapters.kobe.eyebrow": "Kobe at Dusk",
    "chapters.kobe.title": "Harborland ควรให้ความรู้สึกเหมือนไวน์แก้วสุดท้าย ไม่ใช่แค่จุดแวะ",
    "chapters.kobe.body":
      "ช่วงเย็นของโกเบเหมาะกับการปล่อยเวลาให้ไหลช้า ๆ ปิดวันด้วยวิวอ่าว แสงเย็น และมื้อเบาหรือไวน์สักแก้วก่อนกลับโอซากะ",
    "dayFocus.heading.label": "Featured Day",
    "dayFocus.heading.title": "Day 7 | Kobe Mature Slow Day",
    "dayFocus.dayLabel": "วันที่ 7",
    "dayFocus.title": "วันโกเบแบบผู้ใหญ่และไม่เร่งรีบ",
    "dayFocus.body":
      "เช้าเริ่มด้วยความสงบของ Ikuta Shrine ก่อนขึ้นเนินไป Kitano, พักคาเฟ่, ทาน Kobe Beef แบบพอดี แล้วปิดด้วยแสงเย็นริมอ่าว",
    "dayFocus.timeline.ikuta.title": "Ikuta Shrine",
    "dayFocus.timeline.ikuta.body": "เริ่มวันอย่างสงบ คนยังไม่แน่น และให้ความรู้สึกเรียบหรูตั้งแต่ต้นวัน",
    "dayFocus.timeline.kitano.title": "Kitano Ijinkan + pudding",
    "dayFocus.timeline.kitano.body": "กลิ่นอายยุโรปบนเนินเขา เดินไม่หนัก และมีช่วงหวาน ๆ ให้วันดูพอดี",
    "dayFocus.timeline.mouriya.title": "Mouriya Honten",
    "dayFocus.timeline.mouriya.body": "มื้อนี้ควรมีน้ำหนักเหมือนหนึ่งฉากสำคัญ ไม่ใช่แค่บรรทัดในแผนเที่ยว",
    "dayFocus.timeline.harbor.title": "Harborland + Port Tower",
    "dayFocus.timeline.harbor.body": "ปิดวันด้วยลม น้ำ แสงสีบรอนซ์ และชั่วโมงสุดท้ายที่ไม่ต้องเร่งอะไรเลย",
    "detailDemo.heading.label": "Daily Itinerary",
    "detailDemo.heading.title": "เมื่อเปิดเข้ามาในวันนั้น ทุกอย่างควรอยู่ใน timeline เดียวที่ใช้งานได้จริง",
    "detailDemo.summary.kicker": "Day 7 Detail",
    "detailDemo.summary.title": "ทุกอย่างของวันนี้รวมไว้ในหน้าเดียว",
    "detailDemo.summary.body":
      "ด้านนี้สรุป mood และจังหวะของวัน ส่วน timeline ด้านขวาเอาไว้ใช้จริงระหว่างเดินทาง ทั้งแผนที่ เว็บไซต์ โน้ต และตัวบอกเวลา",
    "detailDemo.summary.previewLabel": "เวลาที่กำลังดู",
    "detailDemo.summary.note":
      "ตั้งเวลาไว้ช่วงบ่ายแก่ ๆ ของวันโกเบ เพื่อจำลองจังหวะจริงระหว่างคาเฟ่กับทางลงริมอ่าว",
    "detailDemo.summary.markerTag": "เวลาระหว่างวัน",
    "actions.map": "แผนที่",
    "actions.website": "เว็บไซต์",
    "actions.notes": "ดูโน้ต",
    "detail.cards.ikuta.eyebrow": "ช่วงเปิดวัน",
    "detail.cards.ikuta.title": "Ikuta Shrine",
    "detail.cards.ikuta.place": "Kobe",
    "detail.cards.ikuta.copy": "เปิดวันอย่างสงบด้วยศาลเจ้าเก่าแก่กลางเมือง คนยังไม่เยอะ และเดินจากสถานีได้ง่าย",
    "detail.cards.kitano.eyebrow": "European Hillside",
    "detail.cards.kitano.title": "Kitano Ijinkan + pudding",
    "detail.cards.kitano.place": "Kitano",
    "detail.cards.kitano.copy": "เดินช้า ๆ ในย่านบ้านสไตล์ยุโรป แล้วคั่นด้วยพุดดิ้งที่ทำให้วันดูพอดี และไม่แน่นเกินไป",
    "detail.cards.mouriya.eyebrow": "Main Lunch",
    "detail.cards.mouriya.title": "Mouriya Honten",
    "detail.cards.mouriya.place": "Sannomiya",
    "detail.cards.mouriya.copy": "มื้อกลางวันที่ควรมีน้ำหนักแบบ scene สำคัญของวัน ทั้งบรรยากาศ การบริการ และจังหวะในการพัก",
    "detail.cards.chinatown.eyebrow": "City Contrast",
    "detail.cards.chinatown.title": "Kobe Chinatown",
    "detail.cards.chinatown.place": "Nankinmachi",
    "detail.cards.chinatown.copy": "แวะเดินต่อแบบไม่ต้องจริงจังมาก เน้นดูบรรยากาศและลองของกินเล่นนิด ๆ พอให้วันมี contrast",
    "detail.cards.bluebottle.eyebrow": "Cafe Pause",
    "detail.cards.bluebottle.title": "Blue Bottle Coffee",
    "detail.cards.bluebottle.place": "Kitano",
    "detail.cards.bluebottle.copy": "จุดพักเหนื่อยที่ควรดูเรียบ สวย และนิ่ง เป็นช่วงหายใจของวันก่อนเดินต่อเข้าฝั่ง Motomachi",
    "detail.cards.motomachi.eyebrow": "Soft Walk",
    "detail.cards.motomachi.title": "Motomachi Shopping Street",
    "detail.cards.motomachi.place": "Motomachi",
    "detail.cards.motomachi.copy": "ถนนช้อปปิ้งที่เดินง่ายและไม่กดดัน เหมาะกับช่วงบ่ายแก่ ๆ ก่อนปิดวันที่ริมน้ำ",
    "detail.cards.harbor.eyebrow": "Golden Finish",
    "detail.cards.harbor.title": "Harborland + Port Tower",
    "detail.cards.harbor.place": "Waterfront",
    "detail.cards.harbor.copy": "ปิดวันด้วยแสงเย็นริมอ่าว เหมาะกับไวน์หรือเบียร์เบา ๆ และใช้เป็นภาพจำสุดท้ายของ Kobe",
    "help.heading.label": "Help Mode",
    "help.heading.title": "ประโยคช่วยเหลือแบบ offline ที่กดเปิดให้คนอื่นอ่านได้ทันที",
    "help.cards.nut.title": "เรื่องถั่วและการแพ้อาหาร",
    "help.cards.nut.body": "ใช้ตอนถามพนักงานร้านอาหารว่าจานนี้มีถั่วไหม และมีเมนูไหนที่ไม่มีถั่วบ้าง",
    "help.cards.lamb.title": "เราไม่ทานเนื้อแกะ",
    "help.cards.lamb.body": "ใช้ตอนสั่งอาหารหรือถามว่ามีเมนูอื่นที่ไม่ใช่เนื้อแกะแนะนำไหม",
    "help.cards.safeMenu.title": "ช่วยแนะนำเมนูที่ปลอดภัยให้หน่อย",
    "help.cards.safeMenu.body": "ใช้ตอนอยากให้พนักงานช่วยเลือกเมนูที่ไม่มีถั่วและไม่มีเนื้อแกะให้เลยในครั้งเดียว",
    "help.cards.taxi.title": "ช่วยเรียกแท็กซี่ให้หน่อย",
    "help.cards.taxi.body": "ใช้ที่โรงแรม ร้านอาหาร หรือห้าง เวลาต้องการให้ช่วยเรียกแท็กซี่ไปยังโรงแรม สถานี หรือสนามบิน",
    "help.cards.station.title": "ช่วยบอกทางไปสถานีหรือชานชาลา",
    "help.cards.station.body": "ใช้เวลาหลงในสถานีใหญ่ หรือไม่แน่ใจว่าควรไปทางออกไหน ชานชาลาไหน หรือรถไฟสายไหน",
    "help.cards.booking.title": "เรามี booking นี้ ช่วยดูให้หน่อย",
    "help.cards.booking.body": "ใช้ตอนโชว์ใบจองโรงแรม ร้านอาหาร หรือกิจกรรม แล้วอยากให้พนักงานช่วยเช็กว่าถูกต้องไหม",
    "help.cards.clinic.title": "ช่วยพาไป pharmacy หรือ clinic ที่ใกล้ที่สุด",
    "help.cards.clinic.body": "ใช้เวลาไม่สบาย ต้องการยา หรืออยากหาคลินิกและโรงพยาบาลที่ใกล้ที่สุดแบบรวดเร็ว",
    "help.cards.lost.title": "เราทำของหาย ช่วยเราหน่อย",
    "help.cards.lost.body": "ใช้ตอนลืมของไว้ที่ร้าน สถานี รถไฟ หรือแท็กซี่ และอยากให้ช่วยติดต่อให้",
    "help.openPhrase": "เปิดข้อความช่วยเหลือ",
    "help.modal.kicker": "Help Mode",
    "help.modal.languageLabel": "ภาษาที่จะแสดงให้ผู้อื่นอ่าน",
    "contacts.heading.label": "ข้อมูลติดต่อฉุกเฉิน",
    "contacts.heading.title": "เบอร์และข้อมูลที่ควรหยิบใช้ได้ทันทีระหว่างทริป",
    "contacts.police.label": "ตำรวจ",
    "contacts.police.body": "เหตุฉุกเฉินด้านความปลอดภัยหรืออุบัติเหตุ",
    "contacts.ambulance.label": "รถพยาบาล",
    "contacts.ambulance.body": "กรณีเจ็บป่วยฉุกเฉินและเหตุเร่งด่วนทางการแพทย์",
    "contacts.jnto.body": "สายช่วยเหลือนักท่องเที่ยวที่ควรมีติดไว้ตลอดทริป",
    "contacts.eva.body": "สำหรับปัญหาไฟลต์ขากลับหรือการ re-check ระหว่าง transit",
    "common.close": "ปิด",
    "detail.note.kicker": "Note",
    "detail.note.defaultTitle": "รายละเอียด",
    "marker.now": "ตอนนี้ {time}",
    "marker.nextIn": "กิจกรรมถัดไปในอีก {minutes} นาที · {title}",
    "marker.live": "กำลังอยู่ในกิจกรรมนี้ · {title}",
    "marker.done": "วันนี้เดินทางครบแล้ว",
  },
  en: {
    "page.title": "Osaka Slow Life 2026 — Belmond x Aman Edition",
    "page.description": "A personal travel companion for Osaka Slow Life 2026 with flights, daily plans, budget notes, and offline Help Mode.",
    "brand.label": "Personal Travel Companion",
    "help.shortcut": "Help Mode",
    "nav.flights": "Flights",
    "nav.overview": "Overview",
    "nav.intel": "Trip intel",
    "nav.highlights": "Highlights",
    "nav.daySeven": "Day 7",
    "nav.dayDetails": "Day details",
    "nav.help": "Help Mode",
    "nav.contacts": "Contacts",
    "countdown.heading.label": "Countdown",
    "countdown.heading.title": "Only a little longer before the rhythm of Osaka begins for real.",
    "countdown.helper.before": "For now, we are still in preparation mode, so the page shows a countdown first.",
    "countdown.helper.during": "The trip is now live, so this section shifts to the remaining time before the journey ends.",
    "countdown.helper.after": "The trip is complete, but you can still return to this page for the notes and daily details.",
    "detailExplorer.heading.label": "Choose a Day",
    "detailExplorer.heading.title": "Choose a day and open that day's plan",
    "hero.kicker": "From one quiet night in Taipei to Osaka, Kyoto, Minoh, Uji, Kobe, and the journey home",
    "hero.title": "Osaka, composed in a softer rhythm.",
    "hero.summary":
      "A calm personal travel companion for a slow-life journey that moves gently from the Taiwan transit night into Osaka, Kyoto, Minoh, Uji, the shopping day, Kobe, and the flight home.",
    "hero.tones.kyoto": "Kyoto morning",
    "hero.tones.namba": "Namba afternoon",
    "hero.tones.kobe": "Kobe evening",
    "hero.meta.dates.label": "Travel dates",
    "hero.meta.travelers.label": "Travelers",
    "hero.meta.travelers.value": "Couple in their 40s",
    "hero.meta.style.label": "Trip style",
    "hero.meta.style.value": "slow life, cafe, wine",
    "strip.mood.label": "Mood",
    "strip.mood.title": "Quiet Luxury",
    "strip.mood.body": "Soft, calm, premium, yet still romantic and personal.",
    "strip.palette.label": "Palette",
    "strip.palette.body": "A more grown-up palette with less bright color and more refined accents.",
    "strip.experience.label": "Experience",
    "strip.experience.title": "Easy to use on the move",
    "strip.experience.body": "Each section is arranged to be practical during the trip, from checking flights and routes to opening notes for help.",
    "flights.heading.label": "Flights",
    "flights.heading.title": "Four gentle transitions that carry the whole trip seamlessly.",
    "flights.phase.outbound1": "Outbound 1/2",
    "flights.phase.outbound2": "Outbound 2/2",
    "flights.phase.return1": "Return 1/2",
    "flights.phase.return2": "Return 2/2",
    "overview.heading.label": "Nine-day overview",
    "overview.heading.title": "Treat each day as a chapter, not a checklist.",
    "overview.day0.label": "Day 0",
    "overview.day0.title": "Taipei transit night",
    "overview.day0.body": "BKK → TPE → Gloria Outlets",
    "overview.day1.label": "Day 1",
    "overview.day1.title": "Ease into Osaka",
    "overview.day1.body": "TPE → KIX → Namba",
    "overview.day2.label": "Day 2",
    "overview.day2.title": "Osaka landmarks",
    "overview.day2.body": "Castle Park → Shinsekai → Dotonbori",
    "overview.day3.label": "Day 3",
    "overview.day3.title": "Kyoto heritage",
    "overview.day3.body": "To-ji → Fushimi Inari → Gion",
    "overview.day4.label": "Day 4",
    "overview.day4.title": "Minoh & Katsuoji",
    "overview.day4.body": "Nature → daruma temple",
    "overview.day5.label": "Day 5",
    "overview.day5.title": "Reset day in Uji",
    "overview.day5.body": "Tea streets → matcha → Osaka spa",
    "overview.day6.label": "Day 6",
    "overview.day6.title": "Shopping after the hotel move",
    "overview.day6.body": "Namba → Shinsaibashi → PARCO",
    "overview.day7.label": "Day 7",
    "overview.day7.title": "A mature, unhurried day in Kobe",
    "overview.day7.body": "Ikuta → Kitano → Harborland",
    "overview.day8.label": "Day 8",
    "overview.day8.title": "Fly home softly",
    "overview.day8.body": "Namba → KIX → TPE → BKK",
    "intel.heading.label": "Travel essentials",
    "intel.heading.title": "Transport cards, costs, and pre-trip essentials should live together in one practical section.",
    "intel.quote.kicker": "The simplest rule for this trip",
    "intel.quote.body": "One ICOCA card is enough for the whole Japan portion, while Taiwan works best with taxis and a credit card.",
    "intel.cards.transport.title": "Transport cards",
    "intel.cards.costs.title": "Travel costs and budget",
    "intel.cards.extras.title": "Special transport costs worth knowing",
    "intel.cards.prep.title": "What to prepare before departure",
    "intel.transport.icoca.title": "Two ICOCA IC cards",
    "intel.transport.icoca.body": "Buy them at KIX and load ¥10,000 on each card. They will cover JR, Metro, Hankyu, Hanshin, and many bus rides throughout the trip.",
    "intel.transport.pass.title": "No Kansai Railway Pass needed",
    "intel.transport.pass.body": "The overall transport cost stays within a range where ICOCA remains more flexible and better value than locking into a pass.",
    "intel.transport.easycard.title": "No EasyCard needed in Taiwan",
    "intel.transport.easycard.body": "Since the Taiwan stay is only one night, a credit card or cash is enough for taxis and small expenses.",
    "intel.totals.transit.label": "Japan transport for 2 people",
    "intel.totals.taxi.label": "Taxis and special transport for 2 people",
    "intel.totals.food.label": "Food and drinks for 2 people",
    "intel.totals.total.label": "Estimated total excluding hotels and flights",
    "intel.totals.note": "This works out to roughly THB 18,000–25,000 for two people, plus around NT$1,800–2,500 for Taiwan food and drinks.",
    "intel.extras.kyoto": "Fushimi Inari → Higashiyama around ¥2,000–2,500 per taxi",
    "intel.extras.minoh": "Minoh → Katsuoji → back to the station around ¥5,000–6,000 per taxi",
    "intel.extras.taiwanAirport": "Airport ↔ City Suites Gateway around NT$200–250 per ride",
    "intel.extras.taiwanOutlet": "Hotel ↔ Gloria Outlets around NT$150–200 per ride",
    "intel.prep.1": "Buy 2 ICOCA cards at KIX and load ¥10,000 onto each one",
    "intel.prep.2": "No extra pass is needed; both the Kansai Railway Pass and Taiwan EasyCard can be skipped",
    "intel.prep.3": "Prepare a credit card and Apple Pay for taxis, restaurants, cafes, and small purchases",
    "intel.prep.4": "Carry a small amount of cash for tiny shops or occasional taxi situations",
    "intel.prep.5": "Save hotel names, flight details, and key bookings in your phone and Maps in advance",
    "chapters.heading.label": "Signature chapters",
    "chapters.heading.title": "Three scenes that define the identity of this trip.",
    "chapters.kyoto.eyebrow": "Kyoto Heritage Day",
    "chapters.kyoto.title": "Stone lanes, paper lanterns, and a dinner that should feel hushed and deep.",
    "chapters.kyoto.body":
      "Kyoto is the most atmospheric day of the trip, moving through temple grounds, stone lanes, and a dinner that should feel quiet and unhurried.",
    "chapters.shopping.eyebrow": "Shopping, Reframed",
    "chapters.shopping.title": "Not a mall day, but a city chapter shaped by fashion, beauty, and pause.",
    "chapters.shopping.body":
      "This is the day to move slowly between Namba and Shinsaibashi, mixing department stores, cafes, and the specific brands you already want to see.",
    "chapters.kobe.eyebrow": "Kobe at Dusk",
    "chapters.kobe.title": "Harborland should feel like the final glass of wine, not merely another stop.",
    "chapters.kobe.body":
      "Kobe is best enjoyed by letting the afternoon and early evening stretch gently toward the harbor, with enough room for coffee, sunset, and one last glass before returning.",
    "dayFocus.heading.label": "Featured Day",
    "dayFocus.heading.title": "Day 7 | Kobe Mature Slow Day",
    "dayFocus.dayLabel": "Day 7",
    "dayFocus.title": "A mature and unhurried day in Kobe",
    "dayFocus.body":
      "Start quietly at Ikuta Shrine, move uphill to Kitano, pause for coffee, enjoy Kobe beef without rushing, and close with harbor light at dusk.",
    "dayFocus.timeline.ikuta.title": "Ikuta Shrine",
    "dayFocus.timeline.ikuta.body": "A calm opening with low crowds and a refined mood from the very start.",
    "dayFocus.timeline.kitano.title": "Kitano Ijinkan + pudding",
    "dayFocus.timeline.kitano.body": "European hillside charm, gentle walking, and just enough sweetness in the day.",
    "dayFocus.timeline.mouriya.title": "Mouriya Honten",
    "dayFocus.timeline.mouriya.body": "A lunch that should carry the weight of a scene, not just a booking line.",
    "dayFocus.timeline.harbor.title": "Harborland + Port Tower",
    "dayFocus.timeline.harbor.body": "End with wind, water, bronze light, and one final hour with no need to rush.",
    "detailDemo.heading.label": "Daily Itinerary",
    "detailDemo.heading.title": "Once you open a day, the full plan should live in one practical timeline",
    "detailDemo.summary.kicker": "Day 7 Detail",
    "detailDemo.summary.title": "Everything for the day, gathered in one place",
    "detailDemo.summary.body":
      "This side holds the tone and rhythm of the day, while the timeline keeps the practical details close at hand: maps, websites, notes, and the live time guide.",
    "detailDemo.summary.previewLabel": "Current trip time",
    "detailDemo.summary.note":
      "The time is set in the late afternoon of the Kobe day so the flow between the cafe stop and the harbor feels easy to follow.",
    "detailDemo.summary.markerTag": "live time",
    "actions.map": "Map",
    "actions.website": "Website",
    "actions.notes": "Notes",
    "detail.cards.ikuta.eyebrow": "Morning opening",
    "detail.cards.ikuta.title": "Ikuta Shrine",
    "detail.cards.ikuta.place": "Kobe",
    "detail.cards.ikuta.copy": "An elegant opening at a historic shrine in the city center, with low crowds and an easy walk from the station.",
    "detail.cards.kitano.eyebrow": "European hillside",
    "detail.cards.kitano.title": "Kitano Ijinkan + pudding",
    "detail.cards.kitano.place": "Kitano",
    "detail.cards.kitano.copy": "A slow walk through the European-style neighborhood, softened by a pudding stop that keeps the day balanced.",
    "detail.cards.mouriya.eyebrow": "Main lunch",
    "detail.cards.mouriya.title": "Mouriya Honten",
    "detail.cards.mouriya.place": "Sannomiya",
    "detail.cards.mouriya.copy": "The main lunch scene of the day, with the right balance of atmosphere, service, and breathing room.",
    "detail.cards.chinatown.eyebrow": "City contrast",
    "detail.cards.chinatown.title": "Kobe Chinatown",
    "detail.cards.chinatown.place": "Nankinmachi",
    "detail.cards.chinatown.copy": "A casual walk-through for contrast, focused more on atmosphere and light tasting than a full meal.",
    "detail.cards.bluebottle.eyebrow": "Cafe pause",
    "detail.cards.bluebottle.title": "Blue Bottle Coffee",
    "detail.cards.bluebottle.place": "Kitano",
    "detail.cards.bluebottle.copy": "A calm, polished pause before continuing toward Motomachi.",
    "detail.cards.motomachi.eyebrow": "Soft walk",
    "detail.cards.motomachi.title": "Motomachi Shopping Street",
    "detail.cards.motomachi.place": "Motomachi",
    "detail.cards.motomachi.copy": "An easy shopping street for the late afternoon, just before closing the day at the waterfront.",
    "detail.cards.harbor.eyebrow": "Golden finish",
    "detail.cards.harbor.title": "Harborland + Port Tower",
    "detail.cards.harbor.place": "Waterfront",
    "detail.cards.harbor.copy": "Close with harbor light, soft drinks, and the image you want to remember from Kobe.",
    "help.heading.label": "Help Mode",
    "help.heading.title": "Offline support phrases that can be opened instantly for someone else to read",
    "help.cards.nut.title": "Questions about nuts and food safety",
    "help.cards.nut.body": "Use this to ask restaurant staff whether a dish contains nuts and which menu items are nut-free.",
    "help.cards.lamb.title": "We do not eat lamb",
    "help.cards.lamb.body": "Use this when ordering food or asking for recommendations without lamb.",
    "help.cards.safeMenu.title": "Please recommend a safe menu item",
    "help.cards.safeMenu.body": "Use this when you want staff to recommend something that has no nuts and no lamb in one step.",
    "help.cards.taxi.title": "Could you call a taxi for us?",
    "help.cards.taxi.body": "Useful at hotels, restaurants, or department stores when you want someone to call a taxi to a hotel, station, or airport.",
    "help.cards.station.title": "Please show us the way to the station or platform",
    "help.cards.station.body": "Use this in a large station when you are unsure about the right exit, platform, or train line.",
    "help.cards.booking.title": "We have this booking. Could you check it for us?",
    "help.cards.booking.body": "Use this when showing a hotel, restaurant, or activity booking and asking staff to confirm it.",
    "help.cards.clinic.title": "Please take us to the nearest pharmacy or clinic",
    "help.cards.clinic.body": "Use this when someone feels unwell and you need medicine, a clinic, or a nearby hospital quickly.",
    "help.cards.lost.title": "We lost an item. Please help us.",
    "help.cards.lost.body": "Use this when something was left at a shop, station, train, or taxi and you need help contacting someone.",
    "help.openPhrase": "Open support phrase",
    "help.modal.kicker": "Help Mode",
    "help.modal.languageLabel": "Language to show another person",
    "contacts.heading.label": "Emergency contacts",
    "contacts.heading.title": "The key numbers and notes you should be able to reach quickly during the trip",
    "contacts.police.label": "Police",
    "contacts.police.body": "For safety issues, theft, or accidents.",
    "contacts.ambulance.label": "Ambulance",
    "contacts.ambulance.body": "For medical emergencies or urgent health support.",
    "contacts.jnto.body": "A tourist support line worth keeping handy throughout the trip.",
    "contacts.eva.body": "Useful for return-flight issues or re-check questions during transit.",
    "common.close": "Close",
    "detail.note.kicker": "Note",
    "detail.note.defaultTitle": "Details",
    "marker.now": "Now {time}",
    "marker.nextIn": "Next in {minutes} min · {title}",
    "marker.live": "Currently in progress · {title}",
    "marker.done": "The day is already complete",
  },
  ja: {
    "page.title": "Osaka Slow Life 2026 — Belmond x Aman Edition",
    "page.description": "Osaka Slow Life 2026 のための、フライト・日別プラン・予算メモ・Help Mode をまとめた個人用トラベルガイドです。",
    "brand.label": "旅のパーソナルガイド",
    "help.shortcut": "Help Mode",
    "nav.flights": "フライト",
    "nav.overview": "全体像",
    "nav.intel": "準備情報",
    "nav.highlights": "ハイライト",
    "nav.daySeven": "7日目",
    "nav.dayDetails": "日別詳細",
    "nav.help": "Help Mode",
    "nav.contacts": "緊急連絡",
    "countdown.heading.label": "カウントダウン",
    "countdown.heading.title": "大阪のリズムが本当に始まるまで、あと少しです。",
    "countdown.helper.before": "まだ出発前の準備期間なので、まずはカウントダウンを表示しています。",
    "countdown.helper.during": "いま旅の最中なので、この欄は旅の終わりまでの残り時間を表示します。",
    "countdown.helper.after": "旅は終わりましたが、このページには記録や日別の詳細をいつでも見返しに来られます。",
    "detailExplorer.heading.label": "日を選ぶ",
    "detailExplorer.heading.title": "日を選んで、その日の流れを見る",
    "hero.kicker": "台北の静かなトランジットの夜から、大阪・京都・箕面・宇治・神戸、そして帰路まで",
    "hero.title": "Osakaを、よりやわらかく静かなリズムで。",
    "hero.summary":
      "台北での一泊トランジットから始まり、大阪、京都、箕面、宇治、ショッピングの日、神戸、そして帰りのフライトまでを静かにつないでいく、slow life のための個人用トラベルガイドです。",
    "hero.tones.kyoto": "京都の朝",
    "hero.tones.namba": "難波の午後",
    "hero.tones.kobe": "神戸の夕方",
    "hero.meta.dates.label": "旅行日程",
    "hero.meta.travelers.label": "旅行者",
    "hero.meta.travelers.value": "40代の夫婦",
    "hero.meta.style.label": "旅のスタイル",
    "hero.meta.style.value": "slow life, cafe, wine",
    "strip.mood.label": "ムード",
    "strip.mood.title": "Quiet Luxury",
    "strip.mood.body": "やわらかく、静かで、上質。それでいてロマンチックで私的な空気感。",
    "strip.palette.label": "カラーパレット",
    "strip.palette.body": "鮮やかさを抑え、大人っぽいアクセントを加えます。",
    "strip.experience.label": "体験",
    "strip.experience.title": "移動中にも見やすい構成",
    "strip.experience.body": "フライト確認、移動、予算メモ、そして人に見せる Help Mode まで、旅の途中で使いやすいようにまとめています。",
    "flights.heading.label": "フライト",
    "flights.heading.title": "四つの移動を、ひとつながりの穏やかな旅として見せます。",
    "flights.phase.outbound1": "往路 1/2",
    "flights.phase.outbound2": "往路 2/2",
    "flights.phase.return1": "復路 1/2",
    "flights.phase.return2": "復路 2/2",
    "overview.heading.label": "9日間の全体像",
    "overview.heading.title": "各日をチェックリストではなく、旅の一章として扱います。",
    "overview.day0.label": "Day 0",
    "overview.day0.title": "台北トランジットの夜",
    "overview.day0.body": "BKK → TPE → Gloria Outlets",
    "overview.day1.label": "Day 1",
    "overview.day1.title": "やわらかく始まる大阪",
    "overview.day1.body": "TPE → KIX → Namba",
    "overview.day2.label": "Day 2",
    "overview.day2.title": "大阪のランドマーク",
    "overview.day2.body": "Castle Park → Shinsekai → Dotonbori",
    "overview.day3.label": "Day 3",
    "overview.day3.title": "京都ヘリテージ",
    "overview.day3.body": "To-ji → Fushimi Inari → Gion",
    "overview.day4.label": "Day 4",
    "overview.day4.title": "Minoh & Katsuoji",
    "overview.day4.body": "自然 → だるま寺",
    "overview.day5.label": "Day 5",
    "overview.day5.title": "宇治で心を整える日",
    "overview.day5.body": "茶の町 → matcha → Osaka spa",
    "overview.day6.label": "Day 6",
    "overview.day6.title": "ホテル移動後のショッピング",
    "overview.day6.body": "Namba → Shinsaibashi → PARCO",
    "overview.day7.label": "Day 7",
    "overview.day7.title": "大人のための、ゆっくりした神戸の日",
    "overview.day7.body": "Ikuta → Kitano → Harborland",
    "overview.day8.label": "Day 8",
    "overview.day8.title": "静かに帰路へ",
    "overview.day8.body": "Namba → KIX → TPE → BKK",
    "intel.heading.label": "旅の準備情報",
    "intel.heading.title": "交通カード、費用、出発前の準備は、ひとつの実用的な章としてまとめておくべきです。",
    "intel.quote.kicker": "この旅のいちばん簡単なルール",
    "intel.quote.body": "日本では ICOCA 一枚で十分。台湾はタクシーとクレジットカードを使うのが一番シンプルです。",
    "intel.cards.transport.title": "交通カード",
    "intel.cards.costs.title": "移動費と予算",
    "intel.cards.extras.title": "知っておきたい特別な移動費",
    "intel.cards.prep.title": "出発前に準備すること",
    "intel.transport.icoca.title": "ICOCA ICカード 2枚",
    "intel.transport.icoca.body": "KIX で購入し、各カードに ¥10,000 をチャージします。JR、Metro、Hankyu、Hanshin、そして多くのバスで使えます。",
    "intel.transport.pass.title": "Kansai Railway Pass は不要",
    "intel.transport.pass.body": "全体の移動費は ICOCA のほうが柔軟で、パスよりも自然に使いやすい範囲に収まっています。",
    "intel.transport.easycard.title": "台湾では EasyCard 不要",
    "intel.transport.easycard.body": "1泊だけなので、タクシーや小さな支払いはクレジットカードか現金で十分です。",
    "intel.totals.transit.label": "日本の移動費（2人）",
    "intel.totals.taxi.label": "タクシーと特別移動費（2人）",
    "intel.totals.food.label": "食事と飲み物（2人）",
    "intel.totals.total.label": "ホテルと航空券を除いた概算合計",
    "intel.totals.note": "全体では2人でおよそ 18,000〜25,000 バーツ相当、台湾の飲食代は別で NT$1,800〜2,500 ほどです。",
    "intel.extras.kyoto": "Fushimi Inari → Higashiyama はタクシーで約 ¥2,000〜2,500 / 台",
    "intel.extras.minoh": "Minoh → Katsuoji → 駅に戻るタクシーで約 ¥5,000〜6,000 / 台",
    "intel.extras.taiwanAirport": "Airport ↔ City Suites Gateway は約 NT$200〜250 / 回",
    "intel.extras.taiwanOutlet": "Hotel ↔ Gloria Outlets は約 NT$150〜200 / 回",
    "intel.prep.1": "KIX で ICOCA を2枚購入し、それぞれ ¥10,000 をチャージする",
    "intel.prep.2": "追加のパスは不要。Kansai Railway Pass も Taiwan EasyCard も今回は必要ありません",
    "intel.prep.3": "タクシー、レストラン、カフェ、小さな支払い用にクレジットカードと Apple Pay を準備する",
    "intel.prep.4": "小さなお店や一部のタクシー用に少額の現金も持っておく",
    "intel.prep.5": "ホテル名、フライト情報、重要な予約を事前にスマホと Maps に保存しておく",
    "chapters.heading.label": "旅の象徴的な章",
    "chapters.heading.title": "この旅の個性を決める三つのシーン",
    "chapters.kyoto.eyebrow": "Kyoto Heritage Day",
    "chapters.kyoto.title": "石畳、和紙の灯り、そして静かに深まる夕食。",
    "chapters.kyoto.body":
      "京都の日は、寺院の空気、石畳の坂道、そして静かな夕食へとゆっくり流れていく、この旅の中でも特に雰囲気の深い一日です。",
    "chapters.shopping.eyebrow": "Shopping, Reframed",
    "chapters.shopping.title": "ただの買い物の日ではなく、ファッションと美容と余白で構成された都市の一章。",
    "chapters.shopping.body":
      "この日は、難波から心斎橋へとゆっくり歩きながら、百貨店、カフェ、そして見ておきたいブランドを無理なく回るための一日です。",
    "chapters.kobe.eyebrow": "Kobe at Dusk",
    "chapters.kobe.title": "Harborland は、最後のワイン一杯のように感じられるべきです。",
    "chapters.kobe.body":
      "神戸の夕方は、港に向かうまでの時間を少しゆるめにとり、カフェ、夕景、そして最後の一杯を自然につなげるのが心地よい流れです。",
    "dayFocus.heading.label": "Featured Day",
    "dayFocus.heading.title": "Day 7 | Kobe Mature Slow Day",
    "dayFocus.dayLabel": "7日目",
    "dayFocus.title": "大人のための、ゆっくりした神戸の日",
    "dayFocus.body":
      "静かな生田神社から始まり、北野の坂へ、コーヒーでひと息つき、神戸牛を急がず味わい、最後は港の夕景で締めくくります。",
    "dayFocus.timeline.ikuta.title": "Ikuta Shrine",
    "dayFocus.timeline.ikuta.body": "人もまだ少なく、朝の始まりにふさわしい上品な静けさがあります。",
    "dayFocus.timeline.kitano.title": "Kitano Ijinkan + pudding",
    "dayFocus.timeline.kitano.body": "異国情緒のある坂道と、ちょうどよい甘さの休憩。",
    "dayFocus.timeline.mouriya.title": "Mouriya Honten",
    "dayFocus.timeline.mouriya.body": "ただの予約枠ではなく、一つの場面として重みを持つランチです。",
    "dayFocus.timeline.harbor.title": "Harborland + Port Tower",
    "dayFocus.timeline.harbor.body": "風、水、ブロンズ色の光とともに、急がない最後の一時間を。",
    "detailDemo.heading.label": "Daily Itinerary",
    "detailDemo.heading.title": "その日のページを開くと、流れ全体をひとつのタイムラインで確認できます",
    "detailDemo.summary.kicker": "Day 7 Detail",
    "detailDemo.summary.title": "その日に必要なものを一ページにまとめて",
    "detailDemo.summary.body":
      "左側ではその日の空気と流れをつかみ、右側のタイムラインでは地図、サイト、ノート、現在時刻を見ながら実際に動けます。",
    "detailDemo.summary.previewLabel": "いま見ている時刻",
    "detailDemo.summary.note":
      "神戸の日の午後後半に時間を置き、カフェから港へ向かう流れを見やすくしています。",
    "detailDemo.summary.markerTag": "現在時刻",
    "actions.map": "地図",
    "actions.website": "ウェブサイト",
    "actions.notes": "ノート",
    "detail.cards.ikuta.eyebrow": "朝のはじまり",
    "detail.cards.ikuta.title": "Ikuta Shrine",
    "detail.cards.ikuta.place": "Kobe",
    "detail.cards.ikuta.copy": "街の中心にある歴史ある神社で、駅からも歩きやすく、朝の始まりにふさわしい静けさがあります。",
    "detail.cards.kitano.eyebrow": "European Hillside",
    "detail.cards.kitano.title": "Kitano Ijinkan + pudding",
    "detail.cards.kitano.place": "Kitano",
    "detail.cards.kitano.copy": "洋館街をゆっくり歩き、プリンでひと息。日全体のバランスが整う時間です。",
    "detail.cards.mouriya.eyebrow": "メインランチ",
    "detail.cards.mouriya.title": "Mouriya Honten",
    "detail.cards.mouriya.place": "Sannomiya",
    "detail.cards.mouriya.copy": "雰囲気、サービス、余白のすべてが大切な昼のシーンになります。",
    "detail.cards.chinatown.eyebrow": "街のコントラスト",
    "detail.cards.chinatown.title": "Kobe Chinatown",
    "detail.cards.chinatown.place": "Nankinmachi",
    "detail.cards.chinatown.copy": "しっかり食べるというより、雰囲気と軽い食べ歩きで街のコントラストを足す時間です。",
    "detail.cards.bluebottle.eyebrow": "カフェ休憩",
    "detail.cards.bluebottle.title": "Blue Bottle Coffee",
    "detail.cards.bluebottle.place": "Kitano",
    "detail.cards.bluebottle.copy": "Motomachi へ向かう前の、整った静かな休憩ポイントです。",
    "detail.cards.motomachi.eyebrow": "やわらかな散歩",
    "detail.cards.motomachi.title": "Motomachi Shopping Street",
    "detail.cards.motomachi.place": "Motomachi",
    "detail.cards.motomachi.copy": "夕方前にちょうどよい、歩きやすく気負わない商店街です。",
    "detail.cards.harbor.eyebrow": "Golden Finish",
    "detail.cards.harbor.title": "Harborland + Port Tower",
    "detail.cards.harbor.place": "Waterfront",
    "detail.cards.harbor.copy": "港の光と軽い一杯で、神戸の記憶をきれいに締めくくります。",
    "help.heading.label": "Help Mode",
    "help.heading.title": "オフラインで使える、すぐ見せられるサポート文",
    "help.cards.nut.title": "ナッツと食の安全について",
    "help.cards.nut.body": "料理にナッツが入っているか、ナッツ不使用のメニューがあるかを店員に確認するときに使います。",
    "help.cards.lamb.title": "ラム肉は食べません",
    "help.cards.lamb.body": "注文時や、ラム肉以外のおすすめを聞くときに使います。",
    "help.cards.safeMenu.title": "安全なメニューをおすすめしてください",
    "help.cards.safeMenu.body": "ナッツもラム肉も使っていない料理を、店員さんにまとめて選んでもらいたいときに使います。",
    "help.cards.taxi.title": "タクシーを呼んでいただけますか",
    "help.cards.taxi.body": "ホテル、レストラン、デパートなどで、ホテルや駅、空港までのタクシーを呼んでもらいたいときに使います。",
    "help.cards.station.title": "駅やホームへの行き方を教えてください",
    "help.cards.station.body": "大きな駅で、出口、ホーム、路線のどれが正しいか分からないときに使います。",
    "help.cards.booking.title": "この予約を確認していただけますか",
    "help.cards.booking.body": "ホテル、レストラン、アクティビティの予約画面を見せて、内容が正しいか確認してもらいたいときに使います。",
    "help.cards.clinic.title": "一番近い薬局かクリニックへ案内してください",
    "help.cards.clinic.body": "体調が悪いときや、薬・クリニック・近くの病院を早く探したいときに使います。",
    "help.cards.lost.title": "忘れ物をしました。助けてください",
    "help.cards.lost.body": "店、駅、電車、タクシーに物を忘れてしまい、連絡を手伝ってほしいときに使います。",
    "help.openPhrase": "サポート文を開く",
    "help.modal.kicker": "Help Mode",
    "help.modal.languageLabel": "相手に見せる言語",
    "contacts.heading.label": "緊急連絡先",
    "contacts.heading.title": "旅の途中で、すぐに開いて使える連絡先とメモをまとめています",
    "contacts.police.label": "警察",
    "contacts.police.body": "安全上の問題、盗難、事故など。",
    "contacts.ambulance.label": "救急",
    "contacts.ambulance.body": "急病や医療上の緊急対応が必要なとき。",
    "contacts.jnto.body": "旅行中ずっと手元に置いておきたい観光サポート窓口です。",
    "contacts.eva.body": "復路便の問題や transit 中の再確認に役立ちます。",
    "common.close": "閉じる",
    "detail.note.kicker": "Note",
    "detail.note.defaultTitle": "詳細",
    "marker.now": "現在 {time}",
    "marker.nextIn": "{minutes}分後 · {title}",
    "marker.live": "現在この行程中 · {title}",
    "marker.done": "この日の行程は完了しています",
  },
  zh: {
    "page.title": "Osaka Slow Life 2026 — Belmond x Aman Edition",
    "page.description": "为 Osaka Slow Life 2026 准备的个人旅行指南，包含航班、每日行程、预算备注和离线 Help Mode。",
    "brand.label": "个人旅行指南",
    "help.shortcut": "Help Mode",
    "nav.flights": "航班",
    "nav.overview": "总览",
    "nav.intel": "出发准备",
    "nav.highlights": "亮点",
    "nav.daySeven": "第 7 天",
    "nav.dayDetails": "每日详情",
    "nav.help": "Help Mode",
    "nav.contacts": "紧急联系",
    "countdown.heading.label": "倒数计时",
    "countdown.heading.title": "距离真正进入 Osaka 的节奏，只剩一点点时间了。",
    "countdown.helper.before": "现在还处于出发前准备阶段，所以这里先显示倒数计时。",
    "countdown.helper.during": "现在旅程正在进行中，这里会显示距离整趟旅程结束还剩多少时间。",
    "countdown.helper.after": "旅程已经结束，不过你仍然可以随时回来查看记录和每日详情。",
    "detailExplorer.heading.label": "选择日期",
    "detailExplorer.heading.title": "选择一天，查看当天行程",
    "hero.kicker": "从台北安静的转机之夜，一路走到大阪、京都、箕面、宇治、神户和回程",
    "hero.title": "让 Osaka 以更柔和、更安静的节奏展开。",
    "hero.summary":
      "这是为 slow life 旅程准备的个人旅行指南，让台北转机之夜、大阪、京都、箕面、宇治、购物日、神户和回家这一路都能安静而顺畅地连在一起。",
    "hero.tones.kyoto": "京都清晨",
    "hero.tones.namba": "难波午后",
    "hero.tones.kobe": "神户傍晚",
    "hero.meta.dates.label": "出行日期",
    "hero.meta.travelers.label": "旅伴",
    "hero.meta.travelers.value": "40 多岁的夫妻",
    "hero.meta.style.label": "旅行风格",
    "hero.meta.style.value": "slow life, cafe, wine",
    "strip.mood.label": "气质",
    "strip.mood.title": "Quiet Luxury",
    "strip.mood.body": "柔和、安静、高级，同时也保留浪漫与私密感。",
    "strip.palette.label": "配色",
    "strip.palette.body": "降低鲜艳度，改用更成熟、更克制的色彩点缀。",
    "strip.experience.label": "体验",
    "strip.experience.title": "在路上也能轻松查看",
    "strip.experience.body": "从查看航班、路线、预算，到打开 Help Mode 给别人看，所有信息都整理成旅途中真正好用的样子。",
    "flights.heading.label": "航班",
    "flights.heading.title": "四段衔接自然的移动，串起整趟旅程。",
    "flights.phase.outbound1": "去程 1/2",
    "flights.phase.outbound2": "去程 2/2",
    "flights.phase.return1": "回程 1/2",
    "flights.phase.return2": "回程 2/2",
    "overview.heading.label": "9 天总览",
    "overview.heading.title": "把每天当成旅程中的一章，而不是待办清单。",
    "overview.day0.label": "第 0 天",
    "overview.day0.title": "台北转机之夜",
    "overview.day0.body": "BKK → TPE → Gloria Outlets",
    "overview.day1.label": "第 1 天",
    "overview.day1.title": "慢慢进入大阪节奏",
    "overview.day1.body": "TPE → KIX → Namba",
    "overview.day2.label": "第 2 天",
    "overview.day2.title": "大阪地标日",
    "overview.day2.body": "Castle Park → Shinsekai → Dotonbori",
    "overview.day3.label": "第 3 天",
    "overview.day3.title": "京都 heritage 日",
    "overview.day3.body": "To-ji → Fushimi Inari → Gion",
    "overview.day4.label": "第 4 天",
    "overview.day4.title": "Minoh & Katsuoji",
    "overview.day4.body": "自然 → 达摩寺",
    "overview.day5.label": "第 5 天",
    "overview.day5.title": "Uji 放松日",
    "overview.day5.body": "茶街 → matcha → Osaka spa",
    "overview.day6.label": "第 6 天",
    "overview.day6.title": "换酒店后的购物日",
    "overview.day6.body": "Namba → Shinsaibashi → PARCO",
    "overview.day7.label": "第 7 天",
    "overview.day7.title": "成熟而从容的神户一天",
    "overview.day7.body": "Ikuta → Kitano → Harborland",
    "overview.day8.label": "第 8 天",
    "overview.day8.title": "从容返程",
    "overview.day8.body": "Namba → KIX → TPE → BKK",
    "intel.heading.label": "出行准备摘要",
    "intel.heading.title": "交通卡、费用和出发前准备，最好放在同一个实用章节里一起看。",
    "intel.quote.kicker": "这趟旅程最简单的规则",
    "intel.quote.body": "在日本只要一张 ICOCA 就够了，台湾则直接用出租车和信用卡最省心。",
    "intel.cards.transport.title": "交通卡",
    "intel.cards.costs.title": "交通费用与预算",
    "intel.cards.extras.title": "需要提前知道的特殊交通费用",
    "intel.cards.prep.title": "出发前要准备的东西",
    "intel.transport.icoca.title": "两张 ICOCA IC 卡",
    "intel.transport.icoca.body": "在 KIX 购买，每张先充值 ¥10,000。全程可用于 JR、Metro、Hankyu、Hanshin 和多条巴士线路。",
    "intel.transport.pass.title": "不需要 Kansai Railway Pass",
    "intel.transport.pass.body": "整体交通费仍处于 ICOCA 更灵活也更划算的区间，没有必要被 pass 绑定。",
    "intel.transport.easycard.title": "台湾不需要 EasyCard",
    "intel.transport.easycard.body": "因为只停留一晚，用信用卡或现金应付出租车和小额花费就足够了。",
    "intel.totals.transit.label": "日本交通费（2人）",
    "intel.totals.taxi.label": "出租车与特殊交通费（2人）",
    "intel.totals.food.label": "餐饮费用（2人）",
    "intel.totals.total.label": "粗略总计，不含酒店与机票",
    "intel.totals.note": "整体约合 18,000–25,000 泰铢 / 2 人，台湾餐饮另外约 NT$1,800–2,500 / 2 人。",
    "intel.extras.kyoto": "Fushimi Inari → Higashiyama 出租车约 ¥2,000–2,500 / 车",
    "intel.extras.minoh": "Minoh → Katsuoji → 返回车站 出租车约 ¥5,000–6,000 / 车",
    "intel.extras.taiwanAirport": "Airport ↔ City Suites Gateway 约 NT$200–250 / 趟",
    "intel.extras.taiwanOutlet": "Hotel ↔ Gloria Outlets 约 NT$150–200 / 趟",
    "intel.prep.1": "在 KIX 购买 2 张 ICOCA，并各自充值 ¥10,000",
    "intel.prep.2": "不需要再买其他 pass，Kansai Railway Pass 和台湾 EasyCard 都可以省略",
    "intel.prep.3": "准备信用卡和 Apple Pay，用于出租车、餐厅、咖啡店和小额消费",
    "intel.prep.4": "另外带少量现金，以备小店或部分出租车场景使用",
    "intel.prep.5": "提前把酒店名称、航班信息和重要 booking 存进手机和 Maps",
    "chapters.heading.label": "旅程亮点章节",
    "chapters.heading.title": "最能定义这趟旅程气质的三个场景",
    "chapters.kyoto.eyebrow": "Kyoto Heritage Day",
    "chapters.kyoto.title": "石板路、纸灯笼，以及一顿应当安静而深沉的晚餐。",
    "chapters.kyoto.body":
      "京都这一天会慢慢带你进入寺院、石板路和安静晚餐的节奏，是整趟旅程里最有氛围的一天之一。",
    "chapters.shopping.eyebrow": "Shopping, Reframed",
    "chapters.shopping.title": "这不是逛商场的一天，而是由时装、美妆和停顿组成的城市章节。",
    "chapters.shopping.body":
      "这一天适合从 Namba 走到 Shinsaibashi，慢慢逛百货、咖啡店和想看的品牌，不需要把每个点都赶完。",
    "chapters.kobe.eyebrow": "Kobe at Dusk",
    "chapters.kobe.title": "Harborland 应该像最后一杯酒，而不只是一个停靠点。",
    "chapters.kobe.body": "神户的傍晚最适合把节奏放慢一些，让咖啡、夕阳、海边和最后一杯酒自然接在一起。",
    "dayFocus.heading.label": "Featured Day",
    "dayFocus.heading.title": "Day 7 | Kobe Mature Slow Day",
    "dayFocus.dayLabel": "第 7 天",
    "dayFocus.title": "成熟而从容的神户一天",
    "dayFocus.body":
      "从安静的 Ikuta Shrine 开始，走到 Kitano 的山坡，喝杯咖啡，慢慢吃 Kobe Beef，最后以港边黄昏作结。",
    "dayFocus.timeline.ikuta.title": "Ikuta Shrine",
    "dayFocus.timeline.ikuta.body": "适合作为一天开场，游客不多，气质安静而精致。",
    "dayFocus.timeline.kitano.title": "Kitano Ijinkan + pudding",
    "dayFocus.timeline.kitano.body": "欧式山坡街区的氛围，加上一段刚刚好的甜点停顿。",
    "dayFocus.timeline.mouriya.title": "Mouriya Honten",
    "dayFocus.timeline.mouriya.body": "这顿午餐应该像一个场景，而不只是预约表上的一行文字。",
    "dayFocus.timeline.harbor.title": "Harborland + Port Tower",
    "dayFocus.timeline.harbor.body": "用风、水、铜色光线和一个不需要赶路的最后小时收尾。",
    "detailDemo.heading.label": "Daily Itinerary",
    "detailDemo.heading.title": "打开某一天后，当天的安排应该集中在一条真正好用的时间轴里",
    "detailDemo.summary.kicker": "Day 7 Detail",
    "detailDemo.summary.title": "把当天需要的一切放在同一页里",
    "detailDemo.summary.body":
      "左侧先把当天的气氛和节奏整理好，右侧的时间轴则负责地图、网站、备注和当前行程时间，方便真正拿着用。",
    "detailDemo.summary.previewLabel": "当前查看时间",
    "detailDemo.summary.note": "这里把时间放在神户日下午后段，好让咖啡之后到海边之前的节奏更容易跟上。",
    "detailDemo.summary.markerTag": "当前行程时间",
    "actions.map": "地图",
    "actions.website": "网站",
    "actions.notes": "备注",
    "detail.cards.ikuta.eyebrow": "清晨开场",
    "detail.cards.ikuta.title": "Ikuta Shrine",
    "detail.cards.ikuta.place": "Kobe",
    "detail.cards.ikuta.copy": "在市中心的古老神社安静开启一天，人不多，而且从车站步行也很轻松。",
    "detail.cards.kitano.eyebrow": "European Hillside",
    "detail.cards.kitano.title": "Kitano Ijinkan + pudding",
    "detail.cards.kitano.place": "Kitano",
    "detail.cards.kitano.copy": "慢慢走在欧式老宅街区，再用一份布丁让这一天保持恰到好处的节奏。",
    "detail.cards.mouriya.eyebrow": "主午餐",
    "detail.cards.mouriya.title": "Mouriya Honten",
    "detail.cards.mouriya.place": "Sannomiya",
    "detail.cards.mouriya.copy": "这顿午餐是当天的重要场景，氛围、服务和节奏都很关键。",
    "detail.cards.chinatown.eyebrow": "城市反差",
    "detail.cards.chinatown.title": "Kobe Chinatown",
    "detail.cards.chinatown.place": "Nankinmachi",
    "detail.cards.chinatown.copy": "不用太认真吃正餐，轻松走走、尝一点小食，就足够让当天更有层次。",
    "detail.cards.bluebottle.eyebrow": "咖啡停顿",
    "detail.cards.bluebottle.title": "Blue Bottle Coffee",
    "detail.cards.bluebottle.place": "Kitano",
    "detail.cards.bluebottle.copy": "一个安静、好看、适合喘口气的停留点，然后再走向 Motomachi。",
    "detail.cards.motomachi.eyebrow": "轻松散步",
    "detail.cards.motomachi.title": "Motomachi Shopping Street",
    "detail.cards.motomachi.place": "Motomachi",
    "detail.cards.motomachi.copy": "适合下午后段的轻松商店街，在海边收尾之前刚刚好。",
    "detail.cards.harbor.eyebrow": "Golden Finish",
    "detail.cards.harbor.title": "Harborland + Port Tower",
    "detail.cards.harbor.place": "Waterfront",
    "detail.cards.harbor.copy": "用港湾的光线、轻饮和神户最后的印象为这一天收尾。",
    "help.heading.label": "Help Mode",
    "help.heading.title": "离线可用、能立刻给别人看的求助句子",
    "help.cards.nut.title": "关于坚果与饮食安全",
    "help.cards.nut.body": "用来询问餐厅员工这道菜有没有坚果，以及哪些菜单是不含坚果的。",
    "help.cards.lamb.title": "我们不吃羊肉",
    "help.cards.lamb.body": "点餐时或想请对方推荐不含羊肉的菜单时使用。",
    "help.cards.safeMenu.title": "请帮我们推荐安全的菜单",
    "help.cards.safeMenu.body": "当你想请店员直接推荐不含坚果、也不含羊肉的菜时使用。",
    "help.cards.taxi.title": "请帮我们叫一辆出租车",
    "help.cards.taxi.body": "在酒店、餐厅或百货公司时，如果想请对方帮忙叫车去酒店、车站或机场，可以用这句。",
    "help.cards.station.title": "请告诉我们去车站或站台的路",
    "help.cards.station.body": "在大型车站里，不确定应该走哪个出口、哪个站台或哪条线路时使用。",
    "help.cards.booking.title": "我们有这个预约，请帮我们看一下",
    "help.cards.booking.body": "出示酒店、餐厅或活动预约时，请工作人员帮忙确认内容是否正确。",
    "help.cards.clinic.title": "请带我们去最近的药店或诊所",
    "help.cards.clinic.body": "身体不舒服、需要买药，或想尽快找到最近的诊所和医院时使用。",
    "help.cards.lost.title": "我们遗失了东西，请帮帮我们",
    "help.cards.lost.body": "把东西忘在商店、车站、列车或出租车上时，请对方协助联系。",
    "help.openPhrase": "打开求助句子",
    "help.modal.kicker": "Help Mode",
    "help.modal.languageLabel": "给对方看的语言",
    "contacts.heading.label": "紧急联系信息",
    "contacts.heading.title": "把旅途中需要立刻打开的号码和备注放在一起",
    "contacts.police.label": "警察",
    "contacts.police.body": "安全问题、失窃或事故。",
    "contacts.ambulance.label": "救护车",
    "contacts.ambulance.body": "医疗紧急情况或急需医疗帮助时。",
    "contacts.jnto.body": "旅行期间值得一直保存的游客支援热线。",
    "contacts.eva.body": "适合处理返程航班问题或转机重新确认。",
    "common.close": "关闭",
    "detail.note.kicker": "Note",
    "detail.note.defaultTitle": "详情",
    "marker.now": "现在 {time}",
    "marker.nextIn": "再过 {minutes} 分钟 · {title}",
    "marker.live": "当前正在进行 · {title}",
    "marker.done": "今天的行程已经结束",
  },
};

const NOTE_COPY = {
  ikuta: {
    th: {
      title: "Ikuta Shrine",
      body: "เหมาะมากสำหรับเริ่มวัน เพราะเงียบ สงบ และให้ mood เมืองท่าผู้ใหญ่ตั้งแต่ต้น",
      list: ["เดินจากสถานีประมาณ 5 นาที", "ถ้าเช้าแดดอ่อน ภาพจะนุ่มและถ่ายง่าย", "ใช้เวลา 20–30 นาทีกำลังดี"],
    },
    en: {
      title: "Ikuta Shrine",
      body: "A strong opening point for the day: calm, quiet, and instantly mature in mood.",
      list: ["Around 5 minutes on foot from the station", "Soft morning light makes the photos gentler", "20–30 minutes feels just right"],
    },
    ja: {
      title: "Ikuta Shrine",
      body: "朝の始まりにとても向いています。静かで落ち着いていて、港町らしい大人の空気が最初からあります。",
      list: ["駅から徒歩約5分", "朝のやわらかい光だと写真もきれい", "20〜30分ほどでちょうどよいです"],
    },
    zh: {
      title: "Ikuta Shrine",
      body: "非常适合作为一天的开场，安静、平和，而且一开始就有成熟的港口城市气质。",
      list: ["从车站步行约 5 分钟", "早晨光线柔和时更适合拍照", "停留 20–30 分钟刚刚好"],
    },
  },
  kitano: {
    th: {
      title: "Kitano Ijinkan + pudding",
      body: "ช่วงนี้คือ mood ยุโรปของโกเบ เหมาะกับการเดิน ถ่ายรูป และแวะของหวานเบา ๆ",
      list: ["ถ้าเมื่อย ใช้ taxi สั้น ๆ ขึ้นเนินได้", "Kazamidori pudding เหมาะกับกาแฟมาก", "อย่าเร่งมาก เพราะย่านนี้เด่นที่บรรยากาศ"],
    },
    en: {
      title: "Kitano Ijinkan + pudding",
      body: "This is Kobe's European mood chapter, best enjoyed through slow walking, photos, and a light dessert pause.",
      list: ["Use a short taxi ride if the uphill walk feels tiring", "Kazamidori pudding pairs beautifully with coffee", "Do not rush; the neighborhood works because of its atmosphere"],
    },
    ja: {
      title: "Kitano Ijinkan + pudding",
      body: "ここは神戸のヨーロッパ的なムードが最も出る時間です。ゆっくり歩き、写真を撮り、軽い甘い休憩を入れるのが合います。",
      list: ["坂道がきつければ短いタクシーもあり", "Kazamidori のプリンはコーヒーによく合います", "このエリアは雰囲気が魅力なので急がないのが大切です"],
    },
    zh: {
      title: "Kitano Ijinkan + pudding",
      body: "这一段最有神户欧式山坡街区的气氛，适合慢慢走、拍照，再用一份甜点稍微停一下。",
      list: ["如果走坡路累了，可以搭短程出租车", "Kazamidori 布丁很适合配咖啡", "这一区最重要的是氛围，不要走太赶"],
    },
  },
  mouriya: {
    th: {
      title: "Mouriya Honten",
      body: "เลือก Mouriya เพราะบาลานซ์ระหว่างความพรีเมียมและความสบาย เหมาะกับคู่รักมากกว่าโทน casual",
      list: ["แนะนำจองล่วงหน้า", "งบประมาณประมาณ ¥6,000–10,000 ต่อคน", "หลังมื้ออาหารยังเดินต่อได้สบาย"],
    },
    en: {
      title: "Mouriya Honten",
      body: "Mouriya is chosen for its balance between premium atmosphere and comfort, especially fitting for a couple.",
      list: ["Booking ahead is recommended", "Rough budget: ¥6,000–10,000 per person", "Still easy to continue walking after lunch"],
    },
    ja: {
      title: "Mouriya Honten",
      body: "Mouriya を選ぶ理由は、上質さと気楽さのバランスがよく、夫婦の旅にとても合うからです。",
      list: ["事前予約がおすすめです", "予算は一人あたり約¥6,000〜10,000", "食後もそのまま歩きやすい流れです"],
    },
    zh: {
      title: "Mouriya Honten",
      body: "选择 Mouriya 的原因是它在高级感与舒适度之间很平衡，特别适合情侣或夫妻。",
      list: ["建议提前预约", "预算约为每人 ¥6,000–10,000", "午餐后继续走行程也不会太累"],
    },
  },
  chinatown: {
    th: {
      title: "Kobe Chinatown",
      body: "ช่วงนี้ตั้งใจให้เป็น walk-through มากกว่ามื้อจริง เพื่อรักษาจังหวะของทริปให้ยังเบาอยู่",
      list: ["ลองชิมแค่พอดี", "เหมาะกับการเดิน 30–45 นาที", "ใช้เป็น transition ก่อนคาเฟ่ช่วงบ่าย"],
    },
    en: {
      title: "Kobe Chinatown",
      body: "This stop is designed more as a walk-through than a full meal, so the day keeps its lighter rhythm.",
      list: ["Taste just a little", "30–45 minutes is enough", "Works well as a transition before the afternoon cafe"],
    },
    ja: {
      title: "Kobe Chinatown",
      body: "ここはしっかり食べる場所というより、軽く歩きながら雰囲気を足すための区間です。旅全体を軽やかに保てます。",
      list: ["食べ歩きは少しだけで十分", "30〜45分ほどでちょうどよいです", "午後のカフェ前の切り替えとして使えます"],
    },
    zh: {
      title: "Kobe Chinatown",
      body: "这一站更适合作为轻松 walk-through，而不是正式的一餐，这样整天的节奏会更轻。",
      list: ["小试一点就够了", "步行 30–45 分钟刚好", "很适合作为下午咖啡前的过渡"],
    },
  },
  bluebottle: {
    th: {
      title: "Blue Bottle Coffee",
      body: "จุดนี้เหมาะกับการพักจริง เช็กแผนต่อช่วงเย็น และตัดสินใจแบบสบาย ๆ ว่าจะเดินต่อเร็วหรือพักให้นานขึ้นอีกนิด",
      list: ["ถ้าเมื่อยมากอาจยืดเวลาคาเฟ่อีกนิด", "เหมาะกับการเช็กแผนช่วงเย็น", "เป็น stop ที่ช่วยรีเซ็ต mood"],
    },
    en: {
      title: "Blue Bottle Coffee",
      body: "This is a genuine pause in the day, a good place to review the evening flow and decide whether to move on or linger a little longer.",
      list: ["Stay a little longer if you feel tired", "A good moment to review the evening plan", "A stop that resets the mood nicely"],
    },
    ja: {
      title: "Blue Bottle Coffee",
      body: "ここは一日の中でしっかり休める時間です。夕方の流れを確認しながら、もう少し休むか次へ進むかを落ち着いて決められます。",
      list: ["疲れていれば少し長めに休んでもよい", "夕方の流れを確認するのに向いています", "ムードを整え直す stop になります"],
    },
    zh: {
      title: "Blue Bottle Coffee",
      body: "这里是真正适合停下来休息的地方，也很适合顺便看看晚上的安排，决定是继续走还是再多坐一会儿。",
      list: ["如果累了可以把咖啡时间拉长一点", "适合顺便确认晚上的安排", "是一个能重置心情的 stop"],
    },
  },
  motomachi: {
    th: {
      title: "Motomachi Shopping Street",
      body: "จุดนี้จะได้ประโยชน์จาก marker เวลาเยอะมาก เพราะเป็นช่วงเปลี่ยนผ่านก่อน sunset",
      list: ["ถ้าเสียเวลาก่อนหน้านี้ สามารถย่อช่วงนี้ได้", "เหมาะกับร้านกาแฟและของฝากเบา ๆ", "คุมเวลาเพื่อไปอ่าวตอนแสงสวย"],
    },
    en: {
      title: "Motomachi Shopping Street",
      body: "This part benefits from the time marker the most, because it sits right before the sunset transition.",
      list: ["Shorten this block if earlier stops ran long", "Good for cafes and light souvenirs", "Keep an eye on time for the best harbor light"],
    },
    ja: {
      title: "Motomachi Shopping Street",
      body: "ここは時間マーカーの恩恵が大きい区間です。ちょうど sunset 前の切り替えになるからです。",
      list: ["前が押したらここを短くしてもよい", "カフェや軽いお土産に向いています", "港の光がきれいな時間を意識して動く"],
    },
    zh: {
      title: "Motomachi Shopping Street",
      body: "这一段最能体现时间 marker 的价值，因为它正好是进入日落前的过渡阶段。",
      list: ["如果前面的行程拖长了，这一段可以缩短", "适合逛咖啡店和轻量伴手礼", "注意时间，好赶上港边最美的光线"],
    },
  },
  harbor: {
    th: {
      title: "Harborland + Port Tower",
      body: "ถ้าจะเก็บฉากจบของวันให้ดูแพงและโรแมนติก ช่วงนี้คือ section ที่ควรปล่อยภาพทำงานมากที่สุด",
      list: ["มาถึงก่อนพระอาทิตย์ตกเล็กน้อย", "ไม่จำเป็นต้องแน่นด้วยกิจกรรม", "เหมาะกับมื้อเบา ๆ ริมอ่าว"],
    },
    en: {
      title: "Harborland + Port Tower",
      body: "If the day is meant to end in a premium and romantic way, this is where imagery should do most of the work.",
      list: ["Arrive a little before sunset", "There is no need to overfill this block", "Perfect for a light drink or simple meal by the water"],
    },
    ja: {
      title: "Harborland + Port Tower",
      body: "一日の終わりを上質でロマンチックに見せるなら、この区間こそ写真に語らせるべきです。",
      list: ["日没の少し前に着くのが理想", "活動を詰め込みすぎる必要はありません", "港辺で軽く飲むか食べるのに向いています"],
    },
    zh: {
      title: "Harborland + Port Tower",
      body: "如果想让这一天的结尾看起来高级又浪漫，这一段最适合让画面自己说话。",
      list: ["最好在日落前一点到达", "不需要把这个时段塞得太满", "很适合在海边轻松吃点东西或喝一杯"],
    },
  },
};

const HELP_PHRASES = {
  nut: {
    th: "ภรรยาผมไม่ทานถั่ว อาหารนี้มีส่วนผสมของถั่วไหม เมนูไหนไม่มีส่วนผสมของถั่วบ้าง",
    en: "My wife cannot eat nuts. Does this dish contain any nuts? Which menu items are nut-free?",
    ja: "妻はナッツを食べられません。この料理にナッツは入っていますか。ナッツが入っていないメニューはどれですか。",
    zh: "我太太不能吃坚果。这道菜里有坚果吗？有哪些菜单是不含坚果的？",
  },
  lamb: {
    th: "เราไม่ทานเนื้อแกะ มีเมนูอื่นที่ไม่ใช่เนื้อแกะแนะนำไหม",
    en: "We do not eat lamb. Is there another menu you would recommend?",
    ja: "私たちはラム肉を食べません。ほかにおすすめのメニューはありますか。",
    zh: "我们不吃羊肉。请问有其他推荐的菜吗？",
  },
  safeMenu: {
    th: "ภรรยาผมไม่ทานถั่ว และเราไม่ทานเนื้อแกะ ช่วยแนะนำเมนูที่ปลอดภัยสำหรับเราหน่อยได้ไหม",
    en: "My wife cannot eat nuts, and we do not eat lamb. Could you please recommend a menu item that is safe for us?",
    ja: "妻はナッツを食べられず、私たちはラム肉も食べません。私たちが食べられる安全なメニューをおすすめしていただけますか。",
    zh: "我太太不能吃坚果，而且我们也不吃羊肉。请帮我们推荐适合我们吃、比较安全的菜。",
  },
  taxi: {
    th: "ช่วยเรียกแท็กซี่ให้เราได้ไหม เราต้องการไปที่นี่",
    en: "Could you please call a taxi for us? We would like to go here.",
    ja: "タクシーを呼んでいただけますか。ここに行きたいです。",
    zh: "请帮我们叫一辆出租车好吗？我们想去这里。",
  },
  station: {
    th: "ขอโทษครับ ช่วยบอกทางไปสถานีนี้ ชานชาลานี้ หรือทางออกนี้ให้หน่อยได้ไหม",
    en: "Excuse me, could you please show us how to get to this station, platform, or exit?",
    ja: "すみません、この駅、このホーム、またはこの出口へはどう行けばいいですか。",
    zh: "不好意思，请问怎么去这个车站、这个站台，或者这个出口？",
  },
  booking: {
    th: "เรามี booking นี้ ช่วยดูให้หน่อยได้ไหม ว่าถูกต้องไหมและต้องไปตรงไหน",
    en: "We have this booking. Could you please check whether it is correct and tell us where we should go?",
    ja: "この予約があります。内容が正しいか、そしてどこへ行けばいいか確認していただけますか。",
    zh: "我们有这个预约。请帮我们确认一下是否正确，以及我们应该去哪里。",
  },
  clinic: {
    th: "เรารู้สึกไม่สบาย ช่วยพาเราไป pharmacy clinic หรือ hospital ที่ใกล้ที่สุดได้ไหม",
    en: "We do not feel well. Could you please help us get to the nearest pharmacy, clinic, or hospital?",
    ja: "体調がよくありません。一番近い薬局、クリニック、または病院へ案内していただけますか。",
    zh: "我们身体不舒服。请帮我们去最近的药店、诊所，或者医院，可以吗？",
  },
  lost: {
    th: "เราทำของหายหรืออาจลืมของไว้ ช่วยติดต่อสถานี ร้าน หรือเจ้าหน้าที่ให้เราได้ไหม",
    en: "We lost an item, or we may have left something behind. Could you please help us contact the station, shop, or staff?",
    ja: "忘れ物をしたか、物をなくしたかもしれません。駅、お店、または係員に連絡するのを手伝っていただけますか。",
    zh: "我们东西丢了，或者可能把东西忘在别的地方了。请帮我们联系车站、商店或工作人员，可以吗？",
  },
};

const THEME_STORAGE_KEY = "osaka-trip-theme";
const DETAIL_DAY_STORAGE_KEY = "osaka-trip-detail-day";
const PREVIEW_STORAGE_KEY = "osaka-trip-preview-now";
const TRIP_START = "2026-05-16T00:00:00+07:00";
const TRIP_END = "2026-05-24T23:59:59+09:00";

const PROTOTYPE_DAYS = [
  {
    id: "day-0",
    label: "Day 0",
    dateIso: "2026-05-16",
    timeZone: "Asia/Taipei",
    date: "เสาร์ 16 พฤษภาคม 2026",
    title: "Taiwan Transit Night",
    route: "BKK → TPE → Gloria Outlets",
    hotel: "City Suites Gateway",
    summary: "คืน transit ที่ตั้งใจให้ง่ายที่สุด เช็กอินเร็ว เดิน outlet เบา ๆ แล้วจบด้วยมื้อเย็นก่อนนอนเร็ว",
    previewNow: "2026-05-16T19:40:00+08:00",
    previewNote: "ตั้งเวลาไว้ช่วงก่อน Din Tai Fung เพื่อให้เห็น marker ตอนเย็นของวัน transit",
    events: [
      {
        id: "d0-arrival",
        time: "13:25–14:30",
        start: "13:25",
        end: "14:30",
        title: "ถึง Taiwan Taoyuan International Airport",
        place: "Taoyuan",
        blurb: "ลงจาก BR062 ผ่าน ตม. รับกระเป๋า และซื้อ eSIM ถ้าต้องการก่อนออกจากสนามบิน",
        map: "https://maps.google.com/?q=Taiwan+Taoyuan+International+Airport",
        website: "https://www.taoyuan-airport.com/?lang=en",
        note: { th: { title: "ถึงสนามบินไต้หวัน", body: "วันแรกโฟกัสที่ความลื่นไหล ไม่ต้องมีโปรแกรมแน่นมาก", list: ["คาดว่าออกจากสนามบินประมาณ 14:15–14:30", "ถ้าจะจัดซิมให้จบที่สนามบินเลยจะสะดวกที่สุด"] } },
      },
      {
        id: "d0-hotel",
        time: "14:30–16:15",
        start: "14:30",
        end: "16:15",
        title: "Taxi + Check-in ที่ City Suites Gateway",
        place: "Hotel",
        blurb: "นั่ง taxi สั้น ๆ ไปโรงแรม อาบน้ำ เปลี่ยนเสื้อผ้า และพักเต็มที่ก่อนออกไปช่วงเย็น",
        map: "https://maps.google.com/?q=City+Suites+Gateway+Taoyuan",
        note: { th: { title: "ช่วงพักฟื้น", body: "นี่คือช่วงสำคัญที่ทำให้คืน transit ไม่เหนื่อยเกินไป", list: ["ค่า taxi ประมาณ NT$200–250", "เช็กของสำหรับไฟลต์เช้าพรุ่งนี้ไว้ล่วงหน้า"] } },
      },
      {
        id: "d0-outlet",
        time: "16:30–19:15",
        start: "16:30",
        end: "19:15",
        title: "Gloria Outlets + Starbucks Reserve",
        place: "Gloria",
        blurb: "เดิน outlet เบา ๆ แวะดู Xpark ด้านนอก และนั่งกาแฟให้ร่างกายค่อย ๆ ปรับจังหวะ",
        map: "https://maps.google.com/?q=Gloria+Outlets+Taoyuan",
        website: "https://www.gloriaoutlets.com/eng/",
        note: { th: { title: "เดินเล่นก่อนมื้อเย็น", body: "ไม่ต้องช้อปจริงจังก็ได้ ใช้ช่วงนี้เป็นการยืดเส้นยืดสายก็พอ", list: ["ถ้ารู้สึกล้าเร็ว ตัดเข้ามื้อเย็นได้เลย", "ช่วงนี้ควรเบาและสนุก ไม่ใช่ภารกิจ"] } },
      },
      {
        id: "d0-dinner",
        time: "19:30–21:20",
        start: "19:30",
        end: "21:20",
        title: "Dinner ที่ Din Tai Fung + optional Blu Bar",
        place: "Evening",
        blurb: "จบวันด้วยมื้อเย็นที่ Gloria Outlets และถ้ายังมีแรงค่อยแวะ drink สั้น ๆ ก่อนกลับโรงแรม",
        map: "https://maps.google.com/?q=Din+Tai+Fung+Gloria+Outlets",
        note: { th: { title: "ปิดวันแบบนุ่ม ๆ", body: "จังหวะคืนนี้ควรให้ความรู้สึกสบาย ไม่ยาวจนกระทบไฟลต์เช้า", list: ["ถ้าแวะ Blu Bar ให้สั้นพอ", "ตั้งใจเข้านอนประมาณ 22:30"] } },
      },
    ],
  },
  {
    id: "day-1",
    label: "Day 1",
    dateIso: "2026-05-17",
    timeZone: "Asia/Tokyo",
    date: "อาทิตย์ 17 พฤษภาคม 2026",
    title: "Fly to Osaka + Ease-In Night",
    route: "TPE → KIX → Namba",
    hotel: "VIA INN PRIME Shinsaibashi Yotsubashi",
    summary: "บินเข้าโอซากะ เช็กอิน แล้วเดินย่านเมืองแบบเบา ๆ ก่อนเริ่มมื้อเย็นและ craft beer คืนแรก",
    previewNow: "2026-05-17T16:20:00+09:00",
    previewNote: "ตั้งเวลาไว้ช่วงเริ่มเดิน Shinsaibashi เพื่อให้เห็น marker ของคืนแรกในโอซากะ",
    events: [
      {
        id: "d1-flight",
        time: "05:45–13:45",
        start: "05:45",
        end: "13:45",
        title: "ไฟลต์ BR132 และเข้าเมืองสู่ Namba",
        place: "Travel",
        blurb: "ตื่นเช้า เช็กอินที่ TPE พัก lounge แล้วบินเข้า KIX ก่อนต่อ Limousine Bus เข้าสู่ Namba",
        map: "https://maps.google.com/?q=Kansai+International+Airport",
        note: { th: { title: "วันเดินทางเข้าโอซากะ", body: "วันแรกของญี่ปุ่นยังควรคุมจังหวะให้เบา เพราะมี transit มาก่อนแล้ว", list: ["ซื้อ ICOCA และเติมเงินให้จบที่ KIX", "ไม่ต้องรีบยัดโปรแกรมกลางวันมากเกินไป"] } },
      },
      {
        id: "d1-hotel",
        time: "14:00–15:30",
        start: "14:00",
        end: "15:30",
        title: "Check-in ที่ VIA INN PRIME",
        place: "Shinsaibashi",
        blurb: "เข้าห้อง จัดของ และพักสั้น ๆ ก่อนออกไปสัมผัสเมืองในจังหวะสบาย",
        map: "https://maps.google.com/?q=VIA+INN+PRIME+Shinsaibashi+Yotsubashi+Osaka",
        website: "https://www.viainn.com/en/shinsaibashi-yotsubashi/",
        note: { th: { title: "ตั้งฐานของทริป", body: "พักตรงนี้เพื่อให้ day trip ทั้งหมดของทริปลื่นที่สุด", list: ["เหมาะกับการรีเซ็ตตัวเองหลังบิน", "ออกเย็นได้โดยไม่ต้องไกล"] } },
      },
      {
        id: "d1-citywalk",
        time: "16:00–17:30",
        start: "16:00",
        end: "17:30",
        title: "Shinsaibashi / Amerikamura + Coffee",
        place: "City Walk",
        blurb: "เดินเล่นย่านแรกของทริป แวะ LiLo Coffee หรือ Brooklyn Roasting ให้โอซากะเปิดตัวแบบนุ่ม ๆ",
        map: "https://maps.google.com/?q=Amerikamura+Osaka",
        note: { th: { title: "คืนแรกของเมือง", body: "พอเดินนิด ๆ ให้มีความรู้สึกว่าเข้า Osaka แล้ว แต่ยังไม่ใช้แรงมาก", list: ["เป็นช่วงที่เหมาะกับการสังเกต rhythm ของเมือง", "ไม่จำเป็นต้องช้อปหรือเก็บจุดเช็กอินเยอะ"] } },
      },
      {
        id: "d1-dinner",
        time: "18:30–22:30",
        start: "18:30",
        end: "22:30",
        title: "Gyutoroya Fukushima + Craft Beer Works Kamikaze",
        place: "Dinner",
        blurb: "เริ่มมื้อเนื้อในคืนแรก แล้วค่อยต่อเบียร์เบา ๆ เพื่อให้วันจบแบบมีสีแต่ไม่หนักเกิน",
        map: "https://maps.google.com/?q=Gyutoroya+Fukushima+Osaka",
        website: "https://www.gyutoroya.com/",
        note: { th: { title: "คืนแรกที่ควรมี character", body: "จังหวะคืนนี้คือสิ่งที่ทำให้ทริปเริ่มต้นแบบผู้ใหญ่และมีรสนิยม", list: ["ไม่ต้องเร่งต่อหลายร้าน", "ถ้าเหนื่อยจากไฟลต์ ตัดเหลือแค่มื้อเย็นอย่างเดียวก็ยังดี"] } },
      },
    ],
  },
  {
    id: "day-2",
    label: "Day 2",
    dateIso: "2026-05-18",
    timeZone: "Asia/Tokyo",
    date: "จันทร์ 18 พฤษภาคม 2026",
    title: "Osaka Landmarks + Namba Yasaka",
    route: "Castle Park → Shinsekai → Dotonbori",
    hotel: "VIA INN PRIME Shinsaibashi Yotsubashi",
    summary: "วันเมืองที่คมและครบ เริ่มจากสวนปราสาท ขยับไป Shinsekai แล้วไหลลง Dotonbori พร้อมบาร์ช่วงค่ำ",
    previewNow: "2026-05-18T18:05:00+09:00",
    previewNote: "ตั้งเวลาไว้ก่อนมื้อค่ำ เพื่อให้เห็น marker ช่วงที่กำลังไหลเข้าสู่ย่านกินเที่ยว",
    events: [
      {
        id: "d2-castle",
        time: "10:00–11:45",
        start: "10:00",
        end: "11:45",
        title: "Osaka Castle Park",
        place: "Osaka",
        blurb: "เริ่มวันที่สวนปราสาทเพื่อให้วันเปิดแบบโปร่งและมีพื้นที่หายใจก่อนเข้าเมืองแน่น",
        map: "https://maps.google.com/?q=Osaka+Castle+Park",
        note: { th: { title: "เปิดวันให้โปร่ง", body: "ช่วงเช้าในสวนทำให้วันที่มีหลายย่านยังรู้สึกไม่แน่นเกินไป", list: ["เดินสบาย ๆ ได้", "ถ่ายภาพง่ายช่วงเช้า"] } },
      },
      {
        id: "d2-lunch",
        time: "12:15–15:30",
        start: "12:15",
        end: "15:30",
        title: "Ramen Jinsei Jet600 + Shinsekai",
        place: "Lunch / Walk",
        blurb: "กินราเม็งก่อนต่อเข้า Shinsekai เพื่อเก็บ texture ของเมืองอีกด้านที่สนุกและมีสีสันมากขึ้น",
        map: "https://maps.google.com/?q=Shinsekai+Osaka",
        note: { th: { title: "จังหวะเมืองเริ่มเข้มขึ้น", body: "Shinsekai ควรมาแบบไม่รีบ จะได้ดูทั้งป้าย แสง และบรรยากาศจริง ๆ", list: ["เหมาะกับช่วงกลางวันถึงบ่าย", "ไม่จำเป็นต้องยาวเกินไป"] } },
      },
      {
        id: "d2-yasaka",
        time: "16:00–16:40",
        start: "16:00",
        end: "16:40",
        title: "Namba Yasaka Jinja",
        place: "Namba",
        blurb: "แวะสั้น ๆ ที่ศาลเจ้าหัวสิงโตเพื่อให้วันมีจังหวะสงบคั่นก่อนเข้า Dotonbori",
        map: "https://maps.google.com/?q=Namba+Yasaka+Jinja",
        note: { th: { title: "คั่นวันให้หายใจ", body: "เป็น stop สั้น ๆ แต่ช่วยบาลานซ์วันเมืองได้ดีมาก", list: ["ถ่ายรูปเด่นและไว", "อยู่ไม่ไกลจาก flow หลัก"] } },
      },
      {
        id: "d2-evening",
        time: "17:30–22:30",
        start: "17:30",
        end: "22:30",
        title: "Dotonbori + Dinner + Bar Nayuta",
        place: "Night",
        blurb: "ช่วงค่ำคือย่านกินเที่ยวเต็มตัว เลือก Sushi Daizen หรือ Yakiniku M แล้วปิดวันด้วย nightcap",
        map: "https://maps.google.com/?q=Dotonbori+Osaka",
        note: { th: { title: "ช่วงค่ำของโอซากะ", body: "นี่คือวันเมืองแบบเต็มรูปที่สุดของทั้งทริป แต่ยังคุมจังหวะไม่ให้วิ่งเกินไป", list: ["เลือกร้าน dinner แค่หนึ่งร้านพอ", "Bar Nayuta เหมาะกับปิดวันอย่างมี character"] } },
      },
    ],
  },
  {
    id: "day-3",
    label: "Day 3",
    dateIso: "2026-05-19",
    timeZone: "Asia/Tokyo",
    date: "อังคาร 19 พฤษภาคม 2026",
    title: "Kyoto Slow Heritage Day",
    route: "To-ji → Fushimi Inari → Kiyomizu → Gion",
    hotel: "VIA INN PRIME Shinsaibashi Yotsubashi",
    summary: "วัน heritage ที่ตั้งใจให้ค่อย ๆ ละเอียดมากกว่าวิ่งเก็บ เริ่มด้วยวัด กาแฟ ขึ้นเขา แล้วปิดด้วย Gion",
    previewNow: "2026-05-19T14:20:00+09:00",
    previewNote: "ตั้งเวลาไว้ก่อนเริ่ม Ninenzaka เพื่อให้เห็น marker ช่วงที่กำลังเข้าบทสวยที่สุดของเกียวโต",
    events: [
      {
        id: "d3-morning",
        time: "08:45–11:30",
        start: "08:45",
        end: "11:30",
        title: "Osaka → To-ji → Kurasu Kyoto",
        place: "Kyoto Morning",
        blurb: "ออกจากโอซากะ ขึ้นมาที่ To-ji แล้วคั่นด้วยกาแฟที่ Kurasu เพื่อให้วันเปิดอย่างสงบและมีน้ำหนักภาพ",
        map: "https://maps.google.com/?q=Toji+Temple+Kyoto",
        website: "https://kurasu.kyoto/",
        note: { th: { title: "เช้าของเกียวโต", body: "วัดและกาแฟทำหน้าที่ตั้ง mood ให้ทั้งวันได้ดีมาก", list: ["ไม่ควรรีบเกินไป", "เช้านี้คือบทเปิดของวัน heritage"] } },
      },
      {
        id: "d3-inari",
        time: "12:00–13:45",
        start: "12:00",
        end: "13:45",
        title: "Fushimi Inari + Taxi ไป Higashiyama",
        place: "Inari",
        blurb: "เดินเฉพาะช่วงต้นของเสาโทริอิ แล้วใช้ taxi ช่วยย้ายแรงไปย่านถัดไปอย่างนุ่มขึ้น",
        map: "https://maps.google.com/?q=Fushimi+Inari+Taisha",
        note: { th: { title: "เลือกใช้แรงอย่างฉลาด", body: "วันนี้ไม่ต้องพิสูจน์ตัวเองด้วยการเดินทุกช่วง การใช้ taxi ทำให้คุณภาพวันดีขึ้น", list: ["อยู่ Inari แค่ช่วงต้นก็พอ", "เก็บแรงไว้ให้ Higashiyama และ Gion"] } },
      },
      {
        id: "d3-higashiyama",
        time: "14:00–16:30",
        start: "14:00",
        end: "16:30",
        title: "% Arabica + Ninenzaka + Sannenzaka + Kiyomizu-dera",
        place: "Higashiyama",
        blurb: "นี่คือช่วง visual highlight ของเกียวโต เดินช้า ๆ และให้ภาพทำงานมากกว่าจำนวนสถานที่",
        map: "https://maps.google.com/?q=Kiyomizu-dera+Kyoto",
        note: { th: { title: "ช่วงสวยที่สุดของวัน", body: "Ninenzaka และ Kiyomizu ควรเป็นช่วงที่ไม่เร่ง ไม่ยัดร้านเพิ่มเกินจำเป็น", list: ["ถ่ายภาพและเดินจริงมากกว่าทำ checklist", "ให้ % Arabica เป็นจังหวะพักก่อนเข้าสตรอก"] } },
      },
      {
        id: "d3-evening",
        time: "16:45–20:30",
        start: "16:45",
        end: "20:30",
        title: "Gion + Dinner ที่ Gion Duck Rice + กลับ Osaka",
        place: "Gion",
        blurb: "เดิน Gion ต่อให้วันจบด้วยแสงเย็นริม Kamogawa แล้วทานมื้อเย็นก่อนกลับโอซากะ",
        map: "https://maps.google.com/?q=Gion+Duck+Rice+Kyoto",
        note: { th: { title: "บทจบของ Kyoto", body: "มื้อนี้ควรให้ความรู้สึกนิ่ง ลึก และเป็นการปิดวัน heritage อย่างแท้จริง", list: ["เดินริมแม่น้ำต่อได้ถ้ายังมีแรง", "ไม่ต้องเร่งกลับจนเกินไป"] } },
      },
    ],
  },
  {
    id: "day-4",
    label: "Day 4",
    dateIso: "2026-05-20",
    timeZone: "Asia/Tokyo",
    date: "พุธ 20 พฤษภาคม 2026",
    title: "Minoh + Katsuoji",
    route: "Namba → Minoh → Katsuoji → Osaka",
    hotel: "VIA INN PRIME Shinsaibashi Yotsubashi",
    summary: "ธรรมชาติและดารุมะในวันเดียว เป็นวันที่เปลี่ยนโทนภาพของทริปจากเมืองไปสู่สีเขียวและแดง",
    previewNow: "2026-05-20T14:20:00+09:00",
    previewNote: "ตั้งเวลาไว้ช่วงกำลังย้ายจากน้ำตกไป Katsuoji ซึ่งเป็นจุดที่ taxi มีค่ามากที่สุดของวัน",
    events: [
      {
        id: "d4-travel",
        time: "09:30–10:45",
        start: "09:30",
        end: "10:45",
        title: "เดินทางจาก Namba ไป Minoh",
        place: "Transfer",
        blurb: "นั่งรถไฟเปลี่ยนโทนของวันจากเมืองให้กลายเป็นวันธรรมชาติแบบเต็มตัว",
        map: "https://maps.google.com/?q=Minoh+Station",
        note: { th: { title: "ค่อย ๆ เปลี่ยน mood", body: "วันที่สี่มีหน้าที่รีเฟรชสายตาและพลังของทั้งทริป", list: ["อย่าออกช้าเกินไป", "วันนี้จังหวะควรนุ่มและโล่ง"] } },
      },
      {
        id: "d4-falls",
        time: "11:00–13:30",
        start: "11:00",
        end: "13:30",
        title: "Minoh Falls + Yuzan Cafe",
        place: "Nature",
        blurb: "เดินไปน้ำตกแล้วพักมื้อกลางวันที่คาเฟ่ เป็นช่วงที่ให้ร่างกายได้หายใจจากวันเมืองก่อนหน้า",
        map: "https://maps.google.com/?q=Minoh+Falls",
        note: { th: { title: "ช่วงพักสายตา", body: "Minoh เป็น day trip ที่สวยและไม่ใช้แรงจนเกินไป ถ้าคุมเวลาได้ดี", list: ["ทางเดินไม่ควรเร่ง", "มื้อกลางวันช่วยรีเซ็ตจังหวะทั้งวัน"] } },
      },
      {
        id: "d4-katsuoji",
        time: "14:00–17:30",
        start: "14:00",
        end: "17:30",
        title: "Taxi ไป–กลับ Katsuoji Temple",
        place: "Katsuoji",
        blurb: "ยอมใช้ taxi เพื่อรักษาแรงและเวลา แล้วไปเก็บวัดดารุมะแบบสบายขึ้นมาก",
        map: "https://maps.google.com/?q=Katsuoji+Temple",
        note: { th: { title: "ค่าใช้จ่ายที่คุ้มคุณภาพ", body: "นี่คือ taxi ช่วงที่แพงขึ้น แต่ช่วยให้วันดีขึ้นชัดมาก", list: ["ประมาณ ¥5,000–6,000 ต่อคัน", "เป็นหนึ่งในค่าใช้จ่ายที่ควรยอมเพื่อพลังงาน"] } },
      },
      {
        id: "d4-dinner",
        time: "19:30–21:00",
        start: "19:30",
        end: "21:00",
        title: "Dinner ที่ Wine Bar Cave Osaka",
        place: "Osaka Evening",
        blurb: "กลับเมืองแล้วจบด้วยไวน์บาร์ เพื่อให้วันธรรมชาติปิดด้วยโทนผู้ใหญ่เหมือนเดิม",
        map: "https://maps.google.com/?q=Wine+Bar+Cave+Osaka",
        note: { th: { title: "กลับสู่ city tone", body: "หลังธรรมชาติทั้งวัน ไวน์บาร์ช่วยดึงทริปกลับเข้าคาแรกเตอร์หลักได้ดี", list: ["ไม่ต้องต่อหลายร้าน", "เหมาะกับการพักยาวหลังเดิน"] } },
      },
    ],
  },
  {
    id: "day-5",
    label: "Day 5",
    dateIso: "2026-05-21",
    timeZone: "Asia/Tokyo",
    date: "พฤหัส 21 พฤษภาคม 2026",
    title: "Uji Half Day + Osaka Reset",
    route: "Osaka → Uji → Osaka spa",
    hotel: "VIA INN PRIME Shinsaibashi Yotsubashi",
    summary: "ครึ่งวันสบายที่ Uji แล้วกลับมารีเซ็ตตัวเองที่โอซากะ เป็นวันเบาที่ตั้งใจให้หายใจจริง",
    previewNow: "2026-05-21T13:25:00+09:00",
    previewNote: "ตั้งเวลาไว้ช่วงของหวาน matcha เพื่อให้เห็น marker ในวันที่ flow นุ่มที่สุดวันหนึ่งของทริป",
    events: [
      {
        id: "d5-uji-travel",
        time: "10:30–11:30",
        start: "10:30",
        end: "11:30",
        title: "Osaka → Uji โดย JR",
        place: "Transfer",
        blurb: "ออกสายขึ้นนิดหนึ่งแล้วค่อยไป Uji แบบไม่ต้องรีบ ใช้ ICOCA แตะได้ง่าย",
        map: "https://maps.google.com/?q=Uji+Station+Kyoto",
        note: { th: { title: "วันเบาที่ตั้งใจไว้", body: "นี่คือวันที่ใช้จังหวะ slow life ชัดที่สุดวันหนึ่ง", list: ["ออกจากโรงแรมแบบสบาย ๆ ได้", "ICOCA ใบเดียวพอจริงสำหรับวันนี้"] } },
      },
      {
        id: "d5-byodoin",
        time: "11:30–12:15",
        start: "11:30",
        end: "12:15",
        title: "Byodo-in",
        place: "Uji",
        blurb: "เริ่มที่วัดหลักของเมืองชา ก่อนจะค่อย ๆ ไหลไปสู่ราเม็งและของหวาน matcha",
        map: "https://maps.google.com/?q=Byodo-in+Temple",
        note: { th: { title: "เริ่มด้วยภาพนิ่ง", body: "Byodo-in ทำหน้าที่เปิดวันแบบสงบมากกว่าตื่นเต้น", list: ["ใช้เวลาไม่นานก็กำลังดี", "เหมาะกับวันครึ่งวันที่ไม่ต้องแน่น"] } },
      },
      {
        id: "d5-food",
        time: "12:20–15:00",
        start: "12:20",
        end: "15:00",
        title: "Ramen Tanaka Kyu Shoten + Tsujirihei Honten",
        place: "Lunch / Dessert",
        blurb: "กิน matcha salt ramen แล้วปิดด้วยขนมและชาระดับ Uji แบบเต็ม ๆ",
        map: "https://maps.google.com/?q=Tsujirihei+Honten+Uji",
        note: { th: { title: "Uji แบบที่ควรเป็น", body: "วันเมืองชาไม่ต้องเร่งเก็บหลายที่ แค่กินและเดินให้ดีพอ", list: ["ลอง Matcha Salt Ramen", "ของหวานคือหัวใจของช่วงบ่าย"] } },
      },
      {
        id: "d5-reset",
        time: "15:00–21:00",
        start: "15:00",
        end: "21:00",
        title: "กลับ Osaka → Spa / นวด / Dinner + Wine",
        place: "Reset",
        blurb: "กลับมารีเซ็ตตัวเองช่วงบ่ายแก่ ๆ ก่อนมื้อค่ำเบา ๆ ที่ Shinsaibashi",
        map: "https://maps.google.com/?q=Shinsaibashi+Osaka",
        note: { th: { title: "รีเซ็ตครึ่งหลังของทริป", body: "ถ้าวันนี้นุ่มจริง พลังของสองวันท้ายจะดีขึ้นชัดเจน", list: ["ช่วง spa หรือ massage มีค่ากับทริปนี้มาก", "อย่าเปลี่ยนวันเบาให้กลายเป็นวันยาว"] } },
      },
    ],
  },
  {
    id: "day-6",
    label: "Day 6",
    dateIso: "2026-05-22",
    timeZone: "Asia/Tokyo",
    date: "ศุกร์ 22 พฤษภาคม 2026",
    title: "Free Shopping Day after Move to Swissôtel",
    route: "Namba → Shinsaibashi → PARCO",
    hotel: "Swissôtel Nankai Osaka",
    summary: "ฝากกระเป๋า แล้วยกวันนี้ให้เป็นวันเดินช็อปแบบชิล ๆ ระหว่าง Namba และ Shinsaibashi",
    previewNow: "2026-05-22T13:40:00+09:00",
    previewNote: "ตั้งเวลาไว้ช่วงเดิน Namba กลางวัน เพื่อให้เห็น marker ระหว่างการย้ายโรงแรมกับช่วงช็อปหลัก",
    events: [
      {
        id: "d6-move",
        time: "10:30–11:00",
        start: "10:30",
        end: "11:00",
        title: "Check-out VIA INN และฝากกระเป๋าที่ Swissôtel",
        place: "Move Day",
        blurb: "ย้ายฐานปลายทริปให้เรียบร้อยก่อน แล้วค่อยปล่อยวันนี้ให้เป็นวัน shopping จริง ๆ",
        map: "https://maps.google.com/?q=Swissotel+Nankai+Osaka",
        website: "https://www.swissotel.com/hotels/nankai-osaka/",
        note: { th: { title: "ย้ายโรงแรมแบบไม่เสียวัน", body: "ยิ่งฝากกระเป๋าไวเท่าไร วันช็อปจะยิ่งลื่นเท่านั้น", list: ["ไม่ต้องแบกสัมภาระระหว่างเดินห้าง", "ช่วงนี้คือกุญแจของทั้งวัน"] } },
      },
      {
        id: "d6-namba",
        time: "12:00–14:30",
        start: "12:00",
        end: "14:30",
        title: "Takashimaya Osaka + Namba Parks + Namba City",
        place: "Namba",
        blurb: "เริ่มจากโซนติดโรงแรม ดู Dior และแบรนด์ local ญี่ปุ่นแบบเดินถึงกันทั้งหมด",
        map: "https://maps.google.com/?q=Takashimaya+Osaka",
        note: { th: { title: "ครึ่งวันแรกของ shopping day", body: "โซนนี้เหมาะกับการเริ่มแบบไม่กระโดดหลายย่านเกินไป", list: ["Takashimaya สะดวกที่สุดสำหรับ Dior", "Namba Parks และ City เหมาะกับ local brands"] } },
      },
      {
        id: "d6-checkin",
        time: "15:00–16:00",
        start: "15:00",
        end: "16:00",
        title: "Check-in ที่ Swissôtel Nankai Osaka",
        place: "Hotel",
        blurb: "กลับเข้าโรงแรมช่วงบ่าย เพื่อวางของและพักนิดหนึ่งก่อนเดินต่อช่วงเย็น",
        map: "https://maps.google.com/?q=Swissotel+Nankai+Osaka",
        note: { th: { title: "ตั้งฐานช่วงท้ายทริป", body: "การกลับเข้าห้องช่วงนี้ช่วยให้ตอนเย็นสนุกต่อได้โดยไม่ล้าเกินไป", list: ["แยกของฝากและของช็อปได้", "เติมพลังสั้น ๆ ก่อนออกต่อ"] } },
      },
      {
        id: "d6-shinsaibashi",
        time: "16:15–21:00",
        start: "16:15",
        end: "21:00",
        title: "Daimaru Shinsaibashi + PARCO + Loft / Hands",
        place: "Shinsaibashi",
        blurb: "ถ้ายังมีแรงค่อยข้ามไปหา Dior เพิ่ม ดู Flower Mountain และปิดวันด้วย dinner ใกล้โรงแรม",
        map: "https://maps.google.com/?q=Shinsaibashi+PARCO",
        note: { th: { title: "ครึ่งวันหลังแบบยืดหยุ่น", body: "นี่คือช่วงที่ควรฟังพลังงานของตัวเองมากกว่าทำทุกห้างให้ครบ", list: ["PARCO เหมาะกับแบรนด์มากขึ้น", "Loft และ Hands เหมาะกับของฝากและของใช้"] } },
      },
    ],
  },
  {
    id: "day-7",
    label: "Day 7",
    dateIso: "2026-05-23",
    timeZone: "Asia/Tokyo",
    date: "เสาร์ 23 พฤษภาคม 2026",
    title: "Kobe Mature Slow Day",
    route: "Ikuta → Kitano → Chinatown → Harborland",
    hotel: "Swissôtel Nankai Osaka",
    summary: "ทริปวันนี้จะเป็นฟีลเมืองท่าผู้ใหญ่ เดินสบาย ไม่รีบ เน้นบรรยากาศ ย่านยุโรป คาเฟ่ และจบที่ริมอ่าว",
    previewNow: "2026-05-23T16:05:00+09:00",
    previewNote: "ตั้งเวลาไว้ระหว่าง Blue Bottle และ Motomachi เพื่อให้เห็น marker คั่นอยู่ระหว่างกิจกรรมแบบพอดีที่สุด",
    events: [
      {
        id: "ikuta",
        time: "10:00–10:30",
        start: "10:00",
        end: "10:30",
        title: "Ikuta Shrine",
        place: "Kobe",
        blurb: "เปิดวันอย่างสงบด้วยศาลเจ้าเก่าแก่กลางเมือง คนยังไม่เยอะ และเดินจากสถานีได้ง่าย",
        map: "https://maps.google.com/?q=Ikuta+Shrine+Kobe",
        website: "https://ikutajinja.or.jp/en/",
      },
      {
        id: "kitano",
        time: "10:45–12:15",
        start: "10:45",
        end: "12:15",
        title: "Kitano Ijinkan + pudding",
        place: "Kitano",
        blurb: "เดินช้า ๆ ในย่านบ้านสไตล์ยุโรป แล้วคั่นด้วยพุดดิ้งที่ทำให้วันดูพอดีและไม่แน่นเกินไป",
        map: "https://maps.google.com/?q=Kitano+Ijinkan+Kobe",
        website: "https://www.feel-kobe.jp/en/area-guide/kitano/",
      },
      {
        id: "mouriya",
        time: "12:30–14:00",
        start: "12:30",
        end: "14:00",
        title: "Mouriya Honten",
        place: "Sannomiya",
        blurb: "มื้อกลางวันที่ควรมีน้ำหนักแบบ scene สำคัญของวัน ทั้งบรรยากาศ การบริการ และจังหวะในการพัก",
        map: "https://maps.google.com/?q=Mouriya+Honten+Kobe",
        website: "https://www.mouriya.co.jp/en/honten/",
      },
      {
        id: "chinatown",
        time: "14:15–15:00",
        start: "14:15",
        end: "15:00",
        title: "Kobe Chinatown",
        place: "Nankinmachi",
        blurb: "แวะเดินต่อแบบไม่ต้องจริงจังมาก เน้นดูบรรยากาศและลองของกินเล่นนิด ๆ พอให้วันมี contrast",
        map: "https://maps.google.com/?q=Kobe+Chinatown+Nankinmachi",
        website: "https://www.nankinmachi.or.jp/english/",
      },
      {
        id: "bluebottle",
        time: "15:15–16:00",
        start: "15:15",
        end: "16:00",
        title: "Blue Bottle Coffee",
        place: "Kitano",
        blurb: "จุดพักเหนื่อยที่ควรดูเรียบ สวย และนิ่ง เป็นช่วงหายใจของวันก่อนเดินต่อเข้าฝั่ง Motomachi",
        map: "https://maps.google.com/?q=Blue+Bottle+Coffee+Kobe+Kitano",
        website: "https://bluebottlecoffee.com/us/eng/cafes/kobe",
      },
      {
        id: "motomachi",
        time: "16:15–17:15",
        start: "16:15",
        end: "17:15",
        title: "Motomachi Shopping Street",
        place: "Motomachi",
        blurb: "ถนนช้อปปิ้งที่เดินง่ายและไม่กดดัน เหมาะกับช่วงบ่ายแก่ ๆ ก่อนปิดวันที่ริมน้ำ",
        map: "https://maps.google.com/?q=Motomachi+Shopping+Street+Kobe",
        website: "https://www.kobe-motomachi.or.jp/",
      },
      {
        id: "harbor",
        time: "17:30–19:00",
        start: "17:30",
        end: "19:00",
        title: "Harborland + Port Tower",
        place: "Waterfront",
        blurb: "ปิดวันด้วยแสงเย็นริมอ่าว เหมาะกับไวน์หรือเบียร์เบา ๆ และใช้เป็นภาพจำสุดท้ายของ Kobe",
        map: "https://maps.google.com/?q=Kobe+Harborland",
        website: "https://www.harborland.co.jp/",
      },
      {
        id: "d7-return",
        time: "19:15–20:15",
        start: "19:15",
        end: "20:15",
        title: "Hanshin Railway กลับ Osaka",
        place: "Return",
        blurb: "เดินกลับสถานี Motomachi หรือ Sannomiya แล้วค่อยกลับ Osaka แบบไม่รีบ",
        map: "https://maps.google.com/?q=Osaka-Namba+Station",
        note: { th: { title: "ปิดวันที่ดีอย่าทำให้รีบ", body: "ถ้าวันนี้ flow ดีอยู่แล้ว ไม่ควรเร่งปิดเร็วเกินจนเสียอารมณ์ของ Kobe", list: ["ออกจาก Harborland แบบมีเวลาเหลือ", "ถึงโรงแรมประมาณ 20:00–20:15 กำลังดี"] } },
      },
    ],
  },
  {
    id: "day-8",
    label: "Day 8",
    dateIso: "2026-05-24",
    timeZone: "Asia/Tokyo",
    date: "อาทิตย์ 24 พฤษภาคม 2026",
    title: "Fly Home via Taipei",
    route: "Namba → KIX → TPE → BKK",
    hotel: "Swissôtel Nankai Osaka",
    summary: "วันกลับบ้านแบบไม่รีบ ตื่นสบาย เช็กเอาต์ แล้วต่อไฟลต์ EVA สองช่วงกลับไทย",
    previewNow: "2026-05-24T12:25:00+09:00",
    previewNote: "ตั้งเวลาไว้ก่อนขึ้นเครื่องจาก KIX เพื่อให้เห็น marker ในวันเดินทางกลับ",
    events: [
      {
        id: "d8-morning",
        time: "08:30–11:00",
        start: "08:30",
        end: "11:00",
        title: "Check-out + Limousine ไป KIX",
        place: "Departure",
        blurb: "ตื่น เช็กของ เช็กเอาต์ แล้วเดินทางไปสนามบินแบบไม่ต้องเร่งมาก",
        map: "https://maps.google.com/?q=Kansai+International+Airport",
        note: { th: { title: "เช้าวันกลับ", body: "วันนี้ยิ่งนิ่งเท่าไร ยิ่งทำให้ทริปทั้งชุดจบสวยเท่านั้น", list: ["ออกจากโรงแรมเผื่อเวลาแบบพอ", "ถ้ามีเวลาเหลือค่อยเดินเล่นสั้น ๆ"] } },
      },
      {
        id: "d8-br131",
        time: "13:10–15:05",
        start: "13:10",
        end: "15:05",
        title: "BR131 KIX → TPE",
        place: "Flight",
        blurb: "ไฟลต์แรกของวันกลับบ้าน บินจากคันไซกลับไป transit ที่ไทเป",
        map: "https://maps.google.com/?q=Kansai+International+Airport",
        note: { th: { title: "กลับช่วงแรก", body: "ยังมีอีกหนึ่งต่อที่ไทเป จึงควรเช็ก gate และเวลา boarding ทุกครั้ง", list: ["อย่าลืม duty free ถ้ายังอยากได้", "เก็บ boarding pass ให้ครบสองช่วง"] } },
      },
      {
        id: "d8-transit",
        time: "15:05–20:45",
        start: "15:05",
        end: "20:45",
        title: "Transit ที่ Taipei",
        place: "TPE",
        blurb: "พักระหว่างขากลับแบบสบาย ๆ จัดของ เช็ก gate และค่อยขึ้นไฟลต์กลับไทยช่วงค่ำ",
        map: "https://maps.google.com/?q=Taiwan+Taoyuan+International+Airport",
        note: { th: { title: "ช่วง transit ขากลับ", body: "ตอนกลับมักจะล้าแล้ว จึงควรใช้ช่วงนี้แบบนิ่งที่สุด", list: ["เช็ก boarding time ของ BR205", "หาอาหารเบา ๆ และพักให้พอ"] } },
      },
      {
        id: "d8-br205",
        time: "20:45–23:30",
        start: "20:45",
        end: "23:30",
        title: "BR205 TPE → BKK",
        place: "Final Flight",
        blurb: "ไฟลต์สุดท้ายกลับบ้าน จบทริป Osaka Slow Life 2026 อย่างสมบูรณ์",
        map: "https://maps.google.com/?q=Suvarnabhumi+Airport",
        note: { th: { title: "บทสุดท้ายของทริป", body: "ถึงบ้านดึกหน่อย แต่ได้จบด้วย flow ที่ไม่เหนื่อยเกินไป", list: ["พกของสำคัญไว้กับตัว", "ถึงไทยประมาณ 23:30"] } },
      },
    ],
  },
];

let currentPageLang = DEFAULT_PAGE_LANG;
let currentHelpLang = DEFAULT_HELP_LANG;
let currentNoteId = null;
let currentHelpId = "nut";
let currentDetailDayId = null;

function t(key, lang = currentPageLang) {
  return I18N[lang]?.[key] ?? I18N.th[key] ?? key;
}

function getSavedLanguage() {
  const saved = localStorage.getItem(PAGE_LANG_STORAGE_KEY);
  if (saved && I18N[saved]) return saved;
  return DEFAULT_PAGE_LANG;
}

function getSavedHelpLanguage() {
  const saved = localStorage.getItem(HELP_LANG_STORAGE_KEY);
  if (saved && LOCALE_MAP[saved]) return saved;
  return DEFAULT_HELP_LANG;
}

function getSavedTheme() {
  const saved = localStorage.getItem(THEME_STORAGE_KEY);
  return saved === "dark" || saved === "light" ? saved : "light";
}

function getSavedDetailDay() {
  const saved = localStorage.getItem(DETAIL_DAY_STORAGE_KEY);
  if (saved && PROTOTYPE_DAYS.some((day) => day.id === saved)) return saved;
  return null;
}

function setTextForKey(element, key, lang) {
  if (element) element.textContent = t(key, lang);
}

function formatTemplate(template, replacements) {
  return Object.entries(replacements).reduce(
    (result, [key, value]) => result.replace(`{${key}}`, String(value)),
    template,
  );
}

function parseTimeToMinutes(value) {
  const [hours, minutes] = value.split(":").map(Number);
  if (Number.isNaN(hours) || Number.isNaN(minutes)) return null;
  return hours * 60 + minutes;
}

function getDateKey(date, timeZone) {
  return new Intl.DateTimeFormat("en-CA", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    timeZone,
  }).format(date);
}

function getMinutesInZone(date, timeZone) {
  const parts = new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone,
  }).formatToParts(date);

  const hour = Number(parts.find((part) => part.type === "hour")?.value ?? 0);
  const minute = Number(parts.find((part) => part.type === "minute")?.value ?? 0);
  return hour * 60 + minute;
}

function formatTimeLabel(date, lang = currentPageLang, timeZone = "Asia/Tokyo") {
  return date.toLocaleTimeString(LOCALE_MAP[lang], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone,
  });
}

function formatDayDateLabel(day, lang = currentPageLang) {
  const date = new Date(`${day.dateIso}T12:00:00+09:00`);
  return new Intl.DateTimeFormat(LOCALE_MAP[lang], {
    weekday: "short",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: day.timeZone,
  }).format(date);
}

function setActiveButtonState(selector, value, attributeName) {
  document.querySelectorAll(selector).forEach((button) => {
    button.classList.toggle("is-active", button.getAttribute(attributeName) === value);
  });
}

function normalizePreviewValue(rawValue) {
  if (!rawValue) return null;
  const normalized = rawValue.replace(" ", "+");
  const parsed = new Date(normalized);
  return Number.isNaN(parsed.getTime()) ? null : normalized;
}

function getPreviewOverride() {
  const params = new URLSearchParams(window.location.search);
  const queryValue = params.get("previewNow");
  if (queryValue === "off") {
    localStorage.removeItem(PREVIEW_STORAGE_KEY);
    return null;
  }
  const fromQuery = normalizePreviewValue(queryValue);
  if (fromQuery) {
    localStorage.setItem(PREVIEW_STORAGE_KEY, fromQuery);
    return new Date(fromQuery);
  }
  const stored = normalizePreviewValue(localStorage.getItem(PREVIEW_STORAGE_KEY));
  return stored ? new Date(stored) : null;
}

function getDefaultDetailDay() {
  const previewOverride = getPreviewOverride();
  if (previewOverride) {
    const matched = PROTOTYPE_DAYS.find((day) => getDateKey(previewOverride, day.timeZone) === day.dateIso);
    if (matched) return matched.id;
  }

  const now = new Date();
  const matchedNow = PROTOTYPE_DAYS.find((day) => getDateKey(now, day.timeZone) === day.dateIso);
  if (matchedNow) return matchedNow.id;
  return "day-1";
}

function getCurrentDayData() {
  return PROTOTYPE_DAYS.find((day) => day.id === currentDetailDayId) ?? PROTOTYPE_DAYS[1];
}

function getEffectiveDetailDate(day) {
  const override = getPreviewOverride();
  if (override) return override;
  const now = new Date();
  if (getDateKey(now, day.timeZone) === day.dateIso) return now;
  return new Date(day.previewNow);
}

function applyTheme(theme) {
  document.body.dataset.theme = theme;
  const toggle = document.querySelector("#theme-toggle");
  if (!toggle) return;
  const dark = theme === "dark";
  toggle.setAttribute("aria-pressed", String(dark));
  const icon = toggle.querySelector(".theme-icon");
  if (icon) icon.textContent = dark ? "☀" : "☾";
}

function renderCountdown() {
  const target = new Date(TRIP_START);
  const end = new Date(TRIP_END);
  const now = new Date();
  const grid = document.querySelector("#countdown-grid");
  const helper = document.querySelector("#countdown-helper");
  if (!grid || !helper) return;

  let titleKey = "countdown.heading.title";
  let helperKey = "countdown.helper.before";
  let diff = target.getTime() - now.getTime();

  if (now >= target && now <= end) {
    helperKey = "countdown.helper.during";
    diff = end.getTime() - now.getTime();
  } else if (now > end) {
    helperKey = "countdown.helper.after";
    diff = 0;
  }

  const totalSeconds = Math.max(0, Math.floor(diff / 1000));
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  grid.innerHTML = "";
  [
    { label: currentPageLang === "th" ? "วัน" : currentPageLang === "ja" ? "日" : currentPageLang === "zh" ? "天" : "Days", value: days },
    { label: currentPageLang === "th" ? "ชั่วโมง" : currentPageLang === "ja" ? "時間" : currentPageLang === "zh" ? "小时" : "Hours", value: hours },
    { label: currentPageLang === "th" ? "นาที" : currentPageLang === "ja" ? "分" : currentPageLang === "zh" ? "分钟" : "Minutes", value: minutes },
    { label: currentPageLang === "th" ? "วินาที" : currentPageLang === "ja" ? "秒" : currentPageLang === "zh" ? "秒" : "Seconds", value: seconds },
  ].forEach((unit) => {
    const card = document.createElement("div");
    card.className = "countdown-unit";
    card.innerHTML = `<span>${unit.label}</span><strong>${String(unit.value).padStart(2, "0")}</strong>`;
    grid.appendChild(card);
  });

  setTextForKey(document.querySelector("#countdown-title"), titleKey, currentPageLang);
  setTextForKey(helper, helperKey, currentPageLang);
}

function getDayIndex(day) {
  return PROTOTYPE_DAYS.findIndex((entry) => entry.id === day.id);
}

function getDayDisplayContent(day, lang = currentPageLang) {
  const index = getDayIndex(day);
  const fallbackNumber = index >= 0 ? index : 0;
  return {
    label: t(`overview.day${fallbackNumber}.label`, lang),
    title: t(`overview.day${fallbackNumber}.title`, lang),
    shortTitle: DAY_SHORT_TITLES[lang]?.[day.id] ?? DAY_SHORT_TITLES.th[day.id] ?? t(`overview.day${fallbackNumber}.title`, lang),
    route: t(`overview.day${fallbackNumber}.body`, lang),
    toneClass: DAY_TONE_CLASSES[fallbackNumber] ?? DAY_TONE_CLASSES[0],
    icon: DAY_VISUALS[day.id]?.icon ?? "✦",
    image: DAY_VISUALS[day.id]?.image ?? "",
  };
}

function getDaySummaryText(day, lang = currentPageLang) {
  if (lang === "th") return day.summary;
  const display = getDayDisplayContent(day, lang);
  if (lang === "ja") {
    return `${display.route}。下のタイムラインで地図・ウェブサイト・ノート・現在の進行をまとめて確認できます。`;
  }
  if (lang === "zh") {
    return `${display.route}。下方时间轴会集中显示地图、网站、备注与当天进行中的节奏。`;
  }
  return `${display.route}. Open the timeline below for maps, websites, notes, and the live rhythm of the day.`;
}

function getPreviewNoteText(day, lang = currentPageLang) {
  if (lang === "th") return day.previewNote;
  if (lang === "ja") return "ここで表示している時刻を基準に、下のタイムラインに現在位置マーカーを表示します。";
  if (lang === "zh") return "这里会根据当前预览时间，在下方时间轴中显示当天所处的位置。";
  return "The current preview time below is used to place the live marker inside the day's timeline.";
}

function renderDetailPicker() {
  const picker = document.querySelector("#day-detail-picker");
  if (!picker) return;
  picker.innerHTML = "";
  PROTOTYPE_DAYS.forEach((day) => {
    const display = getDayDisplayContent(day);
    const button = document.createElement("button");
    button.type = "button";
    button.className = `day-detail-pill ${display.toneClass}`;
    if (day.id === currentDetailDayId) button.classList.add("is-active");
    button.dataset.dayId = day.id;
    button.innerHTML = `
      <div class="day-detail-pill-top">
        <span>${display.label}</span>
        <em aria-hidden="true">${display.icon}</em>
      </div>
      <strong>${display.shortTitle}</strong>
    `;
    picker.appendChild(button);
  });

  document.querySelectorAll(".overview-card").forEach((card, index) => {
    card.classList.toggle("is-selected", PROTOTYPE_DAYS[index]?.id === currentDetailDayId);
  });
}

function renderDetailSummary(day) {
  const summary = document.querySelector("#detail-summary-card");
  if (!summary) return;
  const previewDate = getEffectiveDetailDate(day);
  const display = getDayDisplayContent(day);

  summary.className = `detail-summary-card ${display.toneClass}`;
  summary.innerHTML = `
    <figure class="detail-summary-figure">
      <img src="${display.image}" alt="${display.title}" />
    </figure>
    <div class="detail-summary-copy">
    <span class="detail-kicker">${display.label}</span>
    <h3>${display.title}</h3>
    <p>${getDaySummaryText(day)}</p>
    <div class="detail-summary-meta">
      <article>
        <span>${currentPageLang === "th" ? "วันที่" : currentPageLang === "ja" ? "日付" : currentPageLang === "zh" ? "日期" : "Date"}</span>
        <strong>${formatDayDateLabel(day)}</strong>
      </article>
      <article>
        <span>${currentPageLang === "th" ? "ที่พัก" : currentPageLang === "ja" ? "ホテル" : currentPageLang === "zh" ? "酒店" : "Hotel"}</span>
        <strong>${day.hotel}</strong>
      </article>
      <article>
        <span>${currentPageLang === "th" ? "เส้นทางของวัน" : currentPageLang === "ja" ? "本日の流れ" : currentPageLang === "zh" ? "当天动线" : "Route"}</span>
        <strong>${display.route}</strong>
      </article>
    </div>
    <div class="detail-preview-time">
      <span>${currentPageLang === "th" ? "เวลาที่กำลังดู" : currentPageLang === "ja" ? "いま見ている時刻" : currentPageLang === "zh" ? "当前查看时间" : "Current trip time"}</span>
      <strong>${formatTimeLabel(previewDate, currentPageLang, day.timeZone)}</strong>
    </div>
    <p class="detail-preview-note">${getPreviewNoteText(day)}</p>
    <div class="detail-tags">
      <span>${currentPageLang === "th" ? "เริ่มวัน" : currentPageLang === "ja" ? "始まり" : currentPageLang === "zh" ? "出发" : "Start"}</span>
      <span>${currentPageLang === "th" ? "เดินทาง" : currentPageLang === "ja" ? "移動" : currentPageLang === "zh" ? "动线" : "Route"}</span>
      <span>${currentPageLang === "th" ? "พักผ่อน" : currentPageLang === "ja" ? "休憩" : currentPageLang === "zh" ? "休息" : "Reset"}</span>
      <span>${currentPageLang === "th" ? "timeline สด" : currentPageLang === "ja" ? "ライブタイムライン" : currentPageLang === "zh" ? "实时节奏" : "Live timeline"}</span>
    </div>
    </div>
  `;
}

function getEventIcon(event) {
  const source = `${event.place} ${event.title}`.toLowerCase();
  if (source.includes("flight") || source.includes("ไฟลต์") || source.includes("br")) return "✈";
  if (source.includes("dinner") || source.includes("lunch") || source.includes("ราเม็ง") || source.includes("dessert") || source.includes("coffee") || source.includes("wine")) return "✦";
  if (source.includes("hotel") || source.includes("check-in") || source.includes("check-out")) return "⌂";
  if (source.includes("train") || source.includes("rail") || source.includes("jr") || source.includes("nankai") || source.includes("hanshin") || source.includes("transfer")) return "⇄";
  if (source.includes("temple") || source.includes("shrine") || source.includes("gion") || source.includes("yasaka")) return "⛩";
  if (source.includes("harbor") || source.includes("waterfront") || source.includes("port")) return "⚓";
  if (source.includes("walk") || source.includes("park") || source.includes("nature") || source.includes("minoh")) return "◦";
  return "•";
}

function getEventDurationLabel(event) {
  const start = parseTimeToMinutes(event.start || "");
  const end = parseTimeToMinutes(event.end || "");
  if (start === null || end === null || end <= start) return "";
  const total = end - start;
  const hours = Math.floor(total / 60);
  const minutes = total % 60;
  if (currentPageLang === "th") {
    if (hours && minutes) return `${hours} ชม. ${minutes} นาที`;
    if (hours) return `${hours} ชม.`;
    return `${minutes} นาที`;
  }
  if (currentPageLang === "ja") {
    if (hours && minutes) return `${hours}時間 ${minutes}分`;
    if (hours) return `${hours}時間`;
    return `${minutes}分`;
  }
  if (currentPageLang === "zh") {
    if (hours && minutes) return `${hours}小时 ${minutes}分钟`;
    if (hours) return `${hours}小时`;
    return `${minutes}分钟`;
  }
  if (hours && minutes) return `${hours}h ${minutes}m`;
  if (hours) return `${hours}h`;
  return `${minutes}m`;
}

function createDetailCard(event) {
  const article = document.createElement("article");
  article.className = "detail-card";
  article.dataset.cardId = event.id;
  article.dataset.start = event.start;
  article.dataset.end = event.end;
  article.dataset.title = event.title;
  const duration = getEventDurationLabel(event);
  const icon = getEventIcon(event);
  article.innerHTML = `
    <div class="detail-time">
      <strong>${event.time}</strong>
      ${duration ? `<span>${duration}</span>` : ""}
    </div>
    <div class="detail-icon" aria-hidden="true">${icon}</div>
    <div class="detail-card-body">
      <div class="detail-card-top">
        <div>
          <p class="detail-eyebrow">${event.place}</p>
          <h3>${event.title}</h3>
        </div>
        <span class="detail-place">${event.place}</span>
      </div>
      <p class="detail-copy">${event.blurb}</p>
      <div class="detail-actions">
        <a href="${event.map}" target="_blank" rel="noreferrer" class="action-map">${t("actions.map")}</a>
        ${event.website ? `<a href="${event.website}" target="_blank" rel="noreferrer" class="action-site">${t("actions.website")}</a>` : ""}
        <button type="button" class="js-open-note" data-note-id="${event.id}">${t("actions.notes")}</button>
      </div>
    </div>
  `;
  return article;
}

function renderDetailTimeline(day) {
  const timeline = document.querySelector("#detail-timeline");
  if (!timeline) return;
  timeline.innerHTML = "";
  day.events.forEach((event) => {
    timeline.appendChild(createDetailCard(event));
  });
}

function renderDetailExplorer() {
  const day = getCurrentDayData();
  renderDetailPicker();
  renderDetailSummary(day);
  renderDetailTimeline(day);
  renderPrototypeMarker();
}

function updatePageLangButton(lang) {
  const menu = document.querySelector("#page-lang-menu");
  const toggle = document.querySelector("#page-lang-toggle");
  const flag = menu?.querySelector(".page-lang-current .page-lang-flag");
  const code = menu?.querySelector(".page-lang-current .page-lang-code");
  const meta = PAGE_LANGUAGE_META[lang] ?? PAGE_LANGUAGE_META[DEFAULT_PAGE_LANG];
  if (!menu || !toggle || !flag || !code) return;

  flag.textContent = meta.flag;
  code.textContent = meta.code;
  toggle.setAttribute("aria-label", `Language: ${meta.label}`);
  setActiveButtonState(".page-lang-option", lang, "data-lang");
}

function closePageLangMenu() {
  const menu = document.querySelector("#page-lang-menu");
  const toggle = document.querySelector("#page-lang-toggle");
  const options = document.querySelector("#page-lang-options");
  if (!menu || !toggle || !options) return;
  menu.classList.remove("is-open");
  toggle.setAttribute("aria-expanded", "false");
  options.hidden = true;
}

function openPageLangMenu() {
  const menu = document.querySelector("#page-lang-menu");
  const toggle = document.querySelector("#page-lang-toggle");
  const options = document.querySelector("#page-lang-options");
  if (!menu || !toggle || !options) return;
  menu.classList.add("is-open");
  toggle.setAttribute("aria-expanded", "true");
  options.hidden = false;
}

function togglePageLangMenu() {
  const toggle = document.querySelector("#page-lang-toggle");
  const options = document.querySelector("#page-lang-options");
  const isExpanded = toggle?.getAttribute("aria-expanded") === "true";
  const isHidden = options?.hidden !== false;
  if (isExpanded || !isHidden) closePageLangMenu();
  else openPageLangMenu();
}

function applyTranslations(lang) {
  currentPageLang = lang;
  localStorage.setItem(PAGE_LANG_STORAGE_KEY, lang);
  document.documentElement.lang = lang;
  document.title = t("page.title", lang);

  const description = document.querySelector('meta[name="description"]');
  if (description) description.setAttribute("content", t("page.description", lang));

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    setTextForKey(element, element.dataset.i18n, lang);
  });

  updatePageLangButton(lang);
  renderCountdown();
  renderDetailExplorer();

  if (currentNoteId && !document.querySelector(".note-modal")?.hidden) {
    renderNoteModalContent(currentNoteId);
  }
  if (!document.querySelector(".help-modal")?.hidden) {
    renderHelpModal();
  }
}

function renderPrototypeMarker() {
  const day = getCurrentDayData();
  const timeline = document.querySelector("#detail-timeline");
  if (!timeline) return;

  const previewDate = getEffectiveDetailDate(day);
  const cards = Array.from(timeline.querySelectorAll(".detail-card"));
  cards.forEach((card) => card.classList.remove("is-live", "is-next-up", "is-complete"));
  timeline.querySelector(".detail-marker")?.remove();

  const nowMinutes = getMinutesInZone(previewDate, day.timeZone);
  const events = cards
    .map((card) => {
      const start = parseTimeToMinutes(card.dataset.start || "");
      const end = parseTimeToMinutes(card.dataset.end || "");
      if (start === null || end === null) return null;
      return { card, title: card.dataset.title || "", start, end };
    })
    .filter(Boolean);

  events.forEach((event) => {
    if (nowMinutes >= event.end) event.card.classList.add("is-complete");
  });

  const liveEvent = events.find((event) => nowMinutes >= event.start && nowMinutes < event.end);
  const nextEvent = events.find((event) => event.start > nowMinutes) || null;
  let anchorEvent = liveEvent || nextEvent || events[events.length - 1] || null;
  if (!anchorEvent) return;

  if (liveEvent) liveEvent.card.classList.add("is-live");
  else if (nextEvent) nextEvent.card.classList.add("is-next-up");

  const marker = document.createElement("div");
  marker.className = "detail-marker";
  const badge = document.createElement("span");
  badge.className = "detail-marker-badge";
  badge.textContent = formatTemplate(t("marker.now"), {
    time: formatTimeLabel(previewDate, currentPageLang, day.timeZone),
  });
  const meta = document.createElement("span");
  meta.className = "detail-marker-meta";
  if (nextEvent) {
    meta.textContent = formatTemplate(t("marker.nextIn"), {
      minutes: nextEvent.start - nowMinutes,
      title: nextEvent.title,
    });
  } else if (liveEvent) {
    meta.textContent = formatTemplate(t("marker.live"), { title: liveEvent.title });
  } else {
    meta.textContent = t("marker.done");
  }
  marker.append(badge, meta);

  if (liveEvent || nextEvent) timeline.insertBefore(marker, anchorEvent.card);
  else timeline.appendChild(marker);
}

function getEventNote(noteId) {
  for (const day of PROTOTYPE_DAYS) {
    const event = day.events.find((item) => item.id === noteId);
    if (event?.note) return event.note[currentPageLang] ?? event.note.th;
  }
  return NOTE_COPY[noteId]?.[currentPageLang] ?? NOTE_COPY[noteId]?.th ?? null;
}

function renderNoteModalContent(noteId) {
  const modal = document.querySelector(".note-modal");
  if (!modal) return;
  const note = getEventNote(noteId);
  if (!note) return;

  currentNoteId = noteId;
  modal.querySelector("#note-title").textContent = note.title || t("detail.note.defaultTitle");
  modal.querySelector(".note-body").textContent = note.body || "";
  const list = modal.querySelector(".note-list");
  list.innerHTML = "";
  (note.list || []).forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });
}

function initPrototypeNotes() {
  const modal = document.querySelector(".note-modal");
  if (!modal) return;

  function closeModal() {
    modal.hidden = true;
    document.body.classList.remove("is-note-open");
  }

  document.addEventListener("click", (event) => {
    const button = event.target.closest(".js-open-note[data-note-id]");
    if (!button) return;
    renderNoteModalContent(button.dataset.noteId);
    modal.hidden = false;
    document.body.classList.add("is-note-open");
  });

  modal.querySelectorAll("[data-close-note]").forEach((element) => {
    element.addEventListener("click", closeModal);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.hidden) closeModal();
  });
}

function renderHelpModal() {
  const modal = document.querySelector(".help-modal");
  if (!modal) return;
  const title = modal.querySelector("#help-title");
  const phrase = modal.querySelector(".help-phrase");
  const helpText = HELP_PHRASES[currentHelpId]?.[currentHelpLang] ?? HELP_PHRASES[currentHelpId]?.th ?? "";
  title.textContent = t(`help.cards.${currentHelpId}.title`, currentPageLang);
  phrase.textContent = helpText;
  setActiveButtonState(".help-lang-pill", currentHelpLang, "data-help-lang");
}

function initHelpMode() {
  const modal = document.querySelector(".help-modal");
  if (!modal) return;

  function closeModal() {
    modal.hidden = true;
    document.body.classList.remove("is-note-open");
  }

  document.querySelectorAll("[data-open-help]").forEach((button) => {
    button.addEventListener("click", () => {
      currentHelpId = button.dataset.helpId || "nut";
      renderHelpModal();
      modal.hidden = false;
      document.body.classList.add("is-note-open");
    });
  });

  document.querySelectorAll(".help-lang-pill").forEach((button) => {
    button.addEventListener("click", () => {
      currentHelpLang = button.dataset.helpLang || DEFAULT_HELP_LANG;
      localStorage.setItem(HELP_LANG_STORAGE_KEY, currentHelpLang);
      renderHelpModal();
    });
  });

  modal.querySelectorAll("[data-close-help]").forEach((element) => {
    element.addEventListener("click", closeModal);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.hidden) closeModal();
  });
}

function initLanguageSwitcher() {
  const menu = document.querySelector("#page-lang-menu");
  const toggle = document.querySelector("#page-lang-toggle");
  const options = document.querySelector("#page-lang-options");
  if (!menu || !toggle || !options) return;

  toggle.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    togglePageLangMenu();
  });

  options.addEventListener("click", (event) => {
    event.stopPropagation();
  });

  options.querySelectorAll(".page-lang-option").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      const lang = button.dataset.lang || DEFAULT_PAGE_LANG;
      applyTranslations(lang);
      closePageLangMenu();
    });
  });

  document.addEventListener("click", (event) => {
    if (!menu.contains(event.target)) closePageLangMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closePageLangMenu();
  });

  updatePageLangButton(getSavedLanguage());
  closePageLangMenu();
}

function initThemeToggle() {
  const toggle = document.querySelector("#theme-toggle");
  if (!toggle) return;
  const initialTheme = getSavedTheme();
  applyTheme(initialTheme);
  toggle.addEventListener("click", () => {
    const nextTheme = document.body.dataset.theme === "dark" ? "light" : "dark";
    localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    applyTheme(nextTheme);
  });
}

function initDetailExplorer() {
  currentDetailDayId = getSavedDetailDay() || getDefaultDetailDay();

  document.addEventListener("click", (event) => {
    const pill = event.target.closest(".day-detail-pill[data-day-id]");
    if (pill) {
      currentDetailDayId = pill.dataset.dayId;
      localStorage.setItem(DETAIL_DAY_STORAGE_KEY, currentDetailDayId);
      renderDetailExplorer();
      return;
    }

    const overview = event.target.closest(".overview-card");
    if (overview) {
      const cards = Array.from(document.querySelectorAll(".overview-card"));
      const index = cards.indexOf(overview);
      if (index >= 0 && PROTOTYPE_DAYS[index]) {
        currentDetailDayId = PROTOTYPE_DAYS[index].id;
        localStorage.setItem(DETAIL_DAY_STORAGE_KEY, currentDetailDayId);
        renderDetailExplorer();
        document.querySelector("#day-details")?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  });

  renderDetailExplorer();
}

document.addEventListener("DOMContentLoaded", () => {
  currentHelpLang = getSavedHelpLanguage();
  initLanguageSwitcher();
  initThemeToggle();
  initPrototypeNotes();
  initHelpMode();
  initDetailExplorer();
  applyTranslations(getSavedLanguage());
  renderCountdown();
  setInterval(() => {
    renderCountdown();
    renderPrototypeMarker();
  }, 1000);
});
