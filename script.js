const tripData = {
  title: "Taipei Transit + Osaka Slow Life",
  dateLabel: "16–24 พฤษภาคม 2026",
  countdownTarget: "2026-05-16T00:00:00+07:00",
  tripStart: "2026-05-16T00:00:00+07:00",
  tripEnd: "2026-05-24T23:59:59+09:00",
  travelers: [
    { label: "Travelers", value: "คู่รัก" },
    { label: "Age Mood", value: "วัย 40s" },
    { label: "Style", value: "Slow Life" },
    { label: "Flavor", value: "Cafe + Wine" },
  ],
  metrics: [
    { label: "รวม", value: "9 วัน 8 คืน" },
    { label: "Transit", value: "Taipei 1 คืน" },
    { label: "Base", value: "Namba + Shinsaibashi" },
    { label: "Transit Card", value: "ICOCA ใบเดียว" },
  ],
  notes: [
    {
      title: "จังหวะทริปบาลานซ์มาก",
      copy:
        "สลับวันเมือง วัน heritage วันธรรมชาติ และวันรีเซ็ตไว้แล้ว ทำให้ทั้งทริปไม่แน่นเกินไป",
    },
    {
      title: "กินดี ดื่มดี แต่ไม่วิ่ง",
      copy:
        "มีคาเฟ่ ไวน์บาร์ craft beer และมื้อไฮไลต์แทรกอยู่ใน flow แบบไม่ต้องเร่งตามเช็กลิสต์",
    },
    {
      title: "ระบบเดินทางง่าย",
      copy:
        "แผนนี้ไม่ต้องซื้อ pass ซับซ้อน ใช้ ICOCA เติมครั้งเดียวแล้วนั่ง JR, Metro, Hankyu และ Hanshin ได้เลย",
    },
  ],
  hotels: [
    {
      dates: "16–17 พ.ค.",
      name: "City Suites Gateway",
      area: "Taoyuan, Taiwan",
      summary: "คืน transit ที่ตั้งใจให้ง่ายที่สุด ใกล้สนามบินและเรียก taxi สบาย",
      mapQuery: "City Suites Gateway Taoyuan",
    },
    {
      dates: "17–22 พ.ค.",
      name: "VIA INN PRIME Shinsaibashi Yotsubashi",
      area: "Shinsaibashi, Osaka",
      summary: "ฐานหลักของทริป ใกล้ย่านคาเฟ่ ร้านอาหาร และรถไฟสำหรับ day trip",
      mapQuery: "VIA INN PRIME Shinsaibashi Yotsubashi Osaka",
      website: "https://www.viainn.com/en/shinsaibashi-yotsubashi/",
    },
    {
      dates: "22–24 พ.ค.",
      name: "Swissôtel Nankai Osaka",
      area: "Namba, Osaka",
      summary: "ย้ายมาพักกลาง Namba ช่วงท้ายทริปเพื่อให้วันกลับบ้านง่ายและนุ่มขึ้น",
      mapQuery: "Swissotel Nankai Osaka",
      website: "https://www.swissotel.com/hotels/nankai-osaka/",
    },
  ],
  transportCards: [
    {
      status: "requires",
      badge: "ต้องซื้อ",
      title: "ICOCA IC Card 2 ใบ",
      copy:
        "ซื้อที่ KIX และเติมเงิน ¥10,000 ต่อใบตั้งแต่วันแรก ใช้ได้แทบทั้งทริปโดยไม่ต้องมานั่งคำนวณ pass",
      bullets: [
        "ใช้ได้กับ JR, Osaka Metro, Hankyu, Hanshin และรถบัสหลายสาย",
        "เหลือเงินปลายบัตรไว้ซื้อกาแฟ ขนม หรือร้านสะดวกซื้อได้",
      ],
      website: "https://www.westjr.co.jp/global/en/ticket/icoca/",
    },
    {
      status: "skip",
      badge: "ไม่ต้องซื้อ",
      title: "Kansai Railway Pass",
      copy:
        "แพลนล่าสุดไม่จำเป็นแล้ว เพราะค่าเดินทางรวมยังอยู่ในจุดที่ ICOCA ยืดหยุ่นและคุ้มกว่า",
      bullets: [
        "ไม่มีวันไหนที่ต้องกดเที่ยวรถจนคุ้ม pass จริงจัง",
        "ไม่ต้องล็อกตัวเองกับเครือข่ายรถไฟเจ้าเดียว",
      ],
    },
    {
      status: "easy",
      badge: "ง่ายที่สุด",
      title: "Taiwan Transit แบบไม่ต้องซื้อ EasyCard",
      copy:
        "พักแค่ 1 คืน ใช้บัตรเครดิตหรือเงินสดสำหรับ taxi และค่าใช้จ่ายเล็ก ๆ ได้เลย",
      bullets: [
        "Airport ↔ Hotel และ Hotel ↔ Gloria Outlets ใช้ taxi ได้สะดวกสุด",
        "ไม่ต้องเพิ่มบัตรอีกใบให้กระเป๋ายุ่ง",
      ],
    },
  ],
  prepList: [
    {
      title: "ซื้อ ICOCA 2 ใบที่ KIX",
      copy: "ถึงสนามบินแล้วจัดบัตรเลย จะได้ใช้ต่อเข้าเมืองและใช้ทั้งทริปทันที",
    },
    {
      title: "เติมเงิน ¥10,000 ต่อใบ",
      copy: "ระดับนี้พอดีกับค่าเดินทางทั้งทริปและมักเหลือเล็กน้อยไว้ซื้อกาแฟหรือขนม",
    },
    {
      title: "ไม่ต้องซื้อ pass เพิ่ม",
      copy: "ทั้ง Kansai Railway Pass และ EasyCard ไต้หวันไม่จำเป็นสำหรับแผนนี้แล้ว",
    },
    {
      title: "เตรียมบัตรเครดิตและ Apple Pay",
      copy: "ใช้กับ taxi, ร้านอาหาร, คาเฟ่ และการจ่ายจุกจิกได้สะดวกมาก",
    },
    {
      title: "จัด cash ก้อนเล็กไว้สำรอง",
      copy: "เผื่อร้านเล็กและ taxi บางจุด โดยเฉพาะช่วงนอกเมืองหรือร้านเฉพาะทาง",
    },
  ],
  summaryQuote: {
    title: "Trip Rule of Thumb",
    copy:
      "มีแค่ ICOCA ใบเดียว แล้วใช้ได้ทั้งทริป ส่วนไต้หวันใช้ taxi กับบัตรเครดิตไปเลยให้ชีวิตง่ายที่สุด",
    kicker: "เรียบง่าย = เดินทางสบาย",
  },
  budgets: {
    transit: [
      {
        label: "Day 1",
        detail: "KIX → Namba Limousine + รถในเมือง",
        value: "¥1,500",
      },
      {
        label: "Day 2",
        detail: "Osaka Metro ทั้งวัน",
        value: "¥800",
      },
      {
        label: "Day 3",
        detail: "Osaka ↔ Kyoto + taxi Higashiyama",
        value: "¥1,800",
      },
      {
        label: "Day 4",
        detail: "Osaka ↔ Minoh + taxi ไป Katsuoji",
        value: "¥2,000",
      },
      {
        label: "Day 5",
        detail: "Osaka ↔ Uji",
        value: "¥1,000",
      },
      {
        label: "Day 6",
        detail: "รถใน Osaka / ย้ายโรงแรม",
        value: "¥300",
      },
      {
        label: "Day 7",
        detail: "Osaka ↔ Kobe",
        value: "¥1,100",
      },
      {
        label: "Day 8",
        detail: "Namba → KIX",
        value: "¥1,000",
      },
    ],
    extras: [
      {
        label: "Kyoto Taxi",
        detail: "Fushimi Inari → Higashiyama",
        value: "¥2,000–2,500 / คัน",
      },
      {
        label: "Minoh Taxi",
        detail: "Minoh → Katsuoji → กลับสถานี",
        value: "¥5,000–6,000 / คัน",
      },
      {
        label: "Taiwan Taxi",
        detail: "Airport ↔ City Suites Gateway",
        value: "NT$200–250 / เที่ยว",
      },
      {
        label: "Taiwan Taxi",
        detail: "Hotel ↔ Gloria Outlets",
        value: "NT$150–200 / เที่ยว",
      },
    ],
    food: [
      {
        label: "Day 0 Taiwan",
        detail: "Din Tai Fung + Blu Bar",
        value: "NT$1,800–2,500 / 2 คน",
      },
      {
        label: "Day 1 Osaka",
        detail: "Gyutoroya + Craft Beer",
        value: "¥10,000–14,000 / 2 คน",
      },
      {
        label: "Day 2 Osaka",
        detail: "Lunch + Dinner + Bar",
        value: "¥8,000–12,000 / 2 คน",
      },
      {
        label: "Day 3 Kyoto",
        detail: "Duck Rice + Cafe",
        value: "¥6,000–8,000 / 2 คน",
      },
      {
        label: "Day 4 Minoh",
        detail: "Cafe + Wine Bar",
        value: "¥6,000–9,000 / 2 คน",
      },
      {
        label: "Day 5 Uji",
        detail: "Matcha ramen + Tea + Dinner",
        value: "¥5,000–8,000 / 2 คน",
      },
      {
        label: "Day 6 Osaka",
        detail: "Cafe + Dinner แถว Namba / Shinsaibashi",
        value: "¥6,000–10,000 / 2 คน",
      },
      {
        label: "Day 7 Kobe",
        detail: "Kobe beef + Wine",
        value: "¥12,000–18,000 / 2 คน",
      },
    ],
    totals: [
      {
        value: "¥17,000–19,000",
        label: "ค่าเดินทางญี่ปุ่นรวมสำหรับ 2 คน",
      },
      {
        value: "¥8,000–10,000",
        label: "Taxi และค่าเดินทางพิเศษสำหรับ 2 คน",
      },
      {
        value: "¥55,000–80,000",
        label: "ค่าอาหารและเครื่องดื่มในญี่ปุ่นสำหรับ 2 คน",
      },
      {
        value: "¥80,000–110,000",
        label: "รวมงบคร่าว ๆ ไม่รวมโรงแรมและตั๋วเครื่องบิน",
      },
    ],
    note:
      "ภาพรวมคิดเป็นประมาณ 18,000–25,000 บาทสำหรับ 2 คน ไม่รวมโรงแรมและตั๋วเครื่องบิน ส่วนค่าอาหารไต้หวันอยู่ราว NT$1,800–2,500 สำหรับ 2 คน",
  },
  days: [
    {
      id: "day-0",
      day: "Day 0",
      date: "เสาร์ 16 พฤษภาคม 2026",
      location: "Taiwan Transit Night",
      vibe: "Transit คืนเดียวแบบสบายที่สุด",
      hotel: "City Suites Gateway",
      coverNote:
        "เช็กอิน พักร่างกาย เดิน outlet เบา ๆ แล้วจบด้วยมื้อเย็นและ optional drink ก่อนนอนเร็ว",
      gallery: [
        {
          src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/f0/be/f5/caption.jpg?h=500&s=1&w=900",
          caption: "City Suites Gateway สำหรับคืน transit ที่ไม่ต้องลากร่างกายไกล",
        },
        {
          src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/b9/5f/18/din.jpg?h=500&s=1&w=900",
          caption: "Din Tai Fung ที่ Gloria Outlets เป็นมื้อเย็นปิดวันได้พอดีมาก",
        },
        {
          src: "https://ik.imagekit.io/tvlk/xpe-asset/AyJ40ZAo1DOyPyKLZ9c3RGQHTP2oT4ZXW%2BQmPVVkFQiXFSv42UaHGzSmaSzQ8DO5QIbWPZuF%2BVkYVRk6gh-Vg4ECbfuQRQ4pHjWJ5Rmbtkk%3D/3597289345100/Up-to-25-discount-on-high-speed-rail-purchase-One-day-tour-of-Taoyuan-High-speed-rail-exploration-center-GLORIA-OUTLETS-Huatai-Outlets-Mall-Heyi-Hotel-Blu-Bar-High-speed-rail-round-trip-ticket-High-speed-rail-holidays-18a032f5-69a5-4ba0-952c-47ef2056023f.jpeg?_src=imagekit&tr=c-at_max,h-250,q-100,w-412",
          caption: "บรรยากาศแถว Gloria Outlets ช่วยให้คืน transit มีอะไรพอดี ๆ ให้ทำ",
        },
        {
          src: "https://ik.imagekit.io/tvlk/xpe-asset/AyJ40ZAo1DOyPyKLZ9c3RGQHTP2oT4ZXW%2BQmPVVkFQiXFSv42UaHGzSmaSzQ8DO5QIbWPZuF%2BVkYVRk6gh-Vg4ECbfuQRQ4pHjWJ5Rmbtkk%3D/3597289345100/Up-to-25-discount-on-high-speed-rail-purchase-One-day-tour-of-Taoyuan-High-speed-rail-exploration-center-GLORIA-OUTLETS-Huatai-Outlets-Mall-Heyi-Hotel-Blu-Bar-High-speed-rail-round-trip-ticket-High-speed-rail-holidays-cc31c25f-5fbe-4ca1-83cc-c25b9a80397c.jpeg?_src=imagekit&tr=c-at_max,h-250,q-100,w-412",
          caption: "ถ้ายังมีพลัง แวะ Blu Bar ต่อสั้น ๆ ได้ก่อนกลับไปพัก",
        },
      ],
      events: [
        {
          time: "13:25–14:30",
          title: "ถึง Taiwan Taoyuan International Airport",
          blurb:
            "ลงจาก BR062 ผ่าน ตม. รับกระเป๋า และซื้อ eSIM ถ้าต้องการ ก่อนออกจากสนามบินราวบ่ายสองกว่า ๆ",
          tags: ["Arrival", "Transit"],
          mapQuery: "Taiwan Taoyuan International Airport",
          website: "https://www.taoyuan-airport.com/?lang=en",
          details: [
            "คาดว่าออกจากสนามบินประมาณ 14:15–14:30",
            "วันแรกโฟกัสที่ความลื่นไหล ไม่ต้องมีโปรแกรมเยอะ",
            "ถ้าจะจัดซิมให้จบที่สนามบินเลยจะสะดวกที่สุด",
          ],
        },
        {
          time: "14:30–14:45",
          title: "Taxi ไป City Suites Gateway",
          blurb: "นั่ง taxi สั้น ๆ จากสนามบินไปโรงแรม ค่าโดยสารประมาณ NT$200–250",
          tags: ["Transfer", "Easy Start"],
          mapQuery: "City Suites Gateway Taoyuan",
          details: [
            "ใกล้สนามบินมากจึงเหมาะกับคืน transit",
            "ไม่ต้องยุ่งกับรถสาธารณะหรือซื้อบัตรเพิ่ม",
          ],
        },
        {
          time: "14:45–16:15",
          title: "Check-in และพักฟื้น",
          blurb: "อาบน้ำ เปลี่ยนเสื้อผ้า และพักเต็มที่ก่อนออกไปเดินเล่นช่วงเย็น",
          tags: ["Hotel", "Reset"],
          mapQuery: "City Suites Gateway Taoyuan",
          details: [
            "ใช้เวลาพักจริงเพื่อให้คืนแรกไม่เพลีย",
            "เช็กของสำหรับไฟลต์เช้าพรุ่งนี้ไว้ล่วงหน้าได้เลย",
          ],
        },
        {
          time: "16:30–16:45",
          title: "Taxi ไป Gloria Outlets",
          blurb: "ขยับจากโรงแรมไป outlet แบบสั้นและสบาย เพื่อเริ่มช่วงเย็นที่มีชีวิตชีวาเล็กน้อย",
          tags: ["Transfer", "Outlet"],
          mapQuery: "Gloria Outlets Taoyuan",
          website: "https://www.gloriaoutlets.com/eng/",
          details: [
            "ไปแบบไม่รีบและไม่ต้องเผื่อเวลาเยอะมาก",
            "เหมาะกับวันที่ต้องการแค่เดินเล่นเปลี่ยนบรรยากาศ",
          ],
        },
        {
          time: "16:45–19:15",
          title: "เดินเล่น Gloria Outlets + Starbucks Reserve",
          blurb:
            "เดิน outlet เบา ๆ แวะดู Xpark ด้านนอก แล้วนั่งกาแฟให้ร่างกายค่อย ๆ ปรับจังหวะ",
          tags: ["Outlet", "Cafe"],
          mapQuery: "Gloria Outlets Taoyuan",
          details: [
            "ไม่จำเป็นต้องช้อปจริงจัง แค่ใช้เป็นช่วงยืดเส้นยืดสาย",
            "ถ้าเริ่มล้าเร็วสามารถตัดส่วนเดินและไปมื้อเย็นได้ทันที",
          ],
        },
        {
          time: "19:30–20:45",
          title: "Dinner ที่ Din Tai Fung Gloria Outlets",
          blurb: "มื้อเย็นของวันแรกที่ง่าย อร่อย และปลอดภัยกับพลังงานร่างกาย",
          tags: ["Dinner", "Comfort Food"],
          mapQuery: "Din Tai Fung Gloria Outlets Taoyuan",
          website: "https://www.dintaifung.com.tw/eng/",
          details: [
            "เหมาะมากกับการจบทริปวันแรกแบบไม่ต้องคิดเยอะ",
            "กินเสร็จแล้วตัดสินใจอีกทีว่าจะกลับเลยหรือแวะดื่มต่อ",
          ],
        },
        {
          time: "20:45–21:20",
          title: "Blu Bar ถ้ายังอยากดื่มต่อ",
          blurb: "ตัวเลือกสำหรับไวน์หรือเบียร์เบา ๆ ถ้าอารมณ์ยังดีและยังมีแรงเหลือ",
          tags: ["Optional", "Drink"],
          mapQuery: "Blu Bar Taoyuan",
          details: [
            "เป็นช่วงที่ยืดหยุ่นที่สุดของวัน สามารถข้ามได้โดยไม่เสียฟีล",
            "ดื่มแค่พอสนุกเพื่อให้ตื่นเช้าพรุ่งนี้สบาย",
          ],
        },
        {
          time: "21:20–21:35",
          title: "Taxi กลับโรงแรม",
          blurb: "กลับ City Suites Gateway แบบสั้น ๆ แล้วเตรียมของสำหรับไฟลต์เช้า",
          tags: ["Transfer", "Hotel"],
          mapQuery: "City Suites Gateway Taoyuan",
          details: [
            "เช็กเอกสารและกระเป๋า hand carry ก่อนนอน",
            "เป้าหมายคือให้เช้าวันถัดไปลื่นที่สุด",
          ],
        },
        {
          time: "22:30",
          title: "เข้านอน",
          blurb: "ปิดวัน transit เร็วหน่อยเพื่อให้ร่างกายพร้อมสำหรับโอซากะในวันพรุ่งนี้",
          tags: ["Sleep", "Recovery"],
          mapQuery: "City Suites Gateway Taoyuan",
          details: [
            "ไม่มีอะไรต้องเร่งอีกแล้ว แค่พักให้เต็ม",
            "วันแรกของ main trip จะสบายขึ้นมากถ้าได้นอนพอ",
          ],
        },
      ],
    },
    {
      id: "day-1",
      day: "Day 1",
      date: "อาทิตย์ 17 พฤษภาคม 2026",
      location: "Fly to Osaka + Ease-In Night",
      vibe: "บินต่อ แล้วเปิดโอซากะแบบไม่รีบ",
      hotel: "VIA INN PRIME Shinsaibashi Yotsubashi",
      coverNote:
        "เริ่มเช้าด้วย lounge ที่ EVA แล้วเข้าชินไซบาชิแบบสบาย มีคาเฟ่ มื้อเนื้อ และ craft beer ปิดวัน",
      gallery: [
        {
          src: "https://images.squarespace-cdn.com/content/v1/52ccee75e4b00bc0dba03f46/1590891440489-5S8I6Z6OMMOT4Y8ZPKZ4/image-asset.jpeg",
          caption: "EVA Air The Star Lounge เป็นเช้าที่นุ่มและมีพื้นที่พักจริง",
        },
        {
          src: "https://travel.rakuten.com/contents/sites/contents/files/styles/max_1300x1300/public/2024-04/night-activities-osaka_2.jpg?itok=PagSUVtG",
          caption: "โอซากะคืนแรกควรเริ่มด้วย city walk สั้น ๆ ให้คุ้นจังหวะเมือง",
        },
        {
          src: "https://www.gyutoroya.com/shared/img/index/key_img03.jpg",
          caption: "Gyutoroya Fukushima เหมาะกับ dinner แรกของโอซากะมาก",
        },
        {
          src: "https://www.gyutoroya.com/shared/img/english/about_img03.png",
          caption: "จบท้ายวันด้วยของกินดี ๆ แล้วค่อยต่อ craft beer ถ้ายังมีแรง",
        },
      ],
      events: [
        {
          time: "05:45",
          title: "ตื่น เช็กของ และ Check-out",
          blurb: "เริ่มวันแบบเบา ๆ เพราะคืนก่อนจัดของไว้แล้ว แค่เช็กเอกสารและลงจากห้องให้ทันเวลา",
          tags: ["Morning", "Departure"],
          mapQuery: "City Suites Gateway Taoyuan",
          details: [
            "เช้านี้เน้นความลื่นไหลมากกว่าความเร็ว",
            "พกของสำคัญให้อยู่ในมือก่อนเรียก taxi ลงสนามบิน",
          ],
        },
        {
          time: "06:10–06:20",
          title: "Taxi ไปสนามบิน",
          blurb: "เดินทางสั้น ๆ กลับ Taoyuan Airport แบบไม่ต้องลุ้นเวลา",
          tags: ["Transfer"],
          mapQuery: "Taiwan Taoyuan International Airport",
          details: [
            "ใกล้สนามบินจึงไม่ต้องเผื่อเวลาเยอะมาก",
            "เหมาะกับการเริ่มเช้าที่ไม่เหนื่อย",
          ],
        },
        {
          time: "06:20–06:45",
          title: "Check-in BR132 / ผ่าน ตม. และ Security",
          blurb: "เคลียร์ขั้นตอนขาออกให้เรียบร้อยแล้วเข้าไปพักก่อนขึ้นเครื่อง",
          tags: ["Airport", "Check-in"],
          mapQuery: "Taiwan Taoyuan International Airport",
          details: [
            "เป้าหมายคือผ่านทุกอย่างไวพอให้มีเวลานั่ง lounge จริง",
            "หากมีเวลาค่อยซื้อของเล็ก ๆ ก่อนขึ้นเครื่อง",
          ],
        },
        {
          time: "06:45–07:50",
          title: "พักที่ EVA Air The Star Lounge",
          blurb: "อาหารเช้า กาแฟ และช่วงรีเซ็ตก่อนขึ้นไฟลต์ไปโอซากะ",
          tags: ["Lounge", "Breakfast"],
          mapQuery: "EVA Air The Star Lounge Taoyuan Airport",
          website: "https://www.evaair.com/en-th/fly-prepare/at-the-airport/airport-and-lounges/airport-lounges/",
          details: [
            "เป็นช่วงเติมพลังที่สำคัญสำหรับวันเดินทางยาว",
            "ออกจาก lounge ราว 07:50 จะไป gate แบบไม่รีบ",
          ],
        },
        {
          time: "08:20",
          title: "BR132 ออกเดินทาง",
          blurb: "จากไทเปสู่โอซากะอย่างเป็นทางการ เพื่อเริ่ม main trip ของจริง",
          tags: ["Flight"],
          mapQuery: "Kansai International Airport",
          website: "https://www.evaair.com/",
          details: [
            "ไฟลต์เช้าทำให้ไม่เสียวันเที่ยวในโอซากะ",
            "ถึงเที่ยงกว่าแล้วยังเข้าเมืองและออกเดินเล่นต่อได้",
          ],
        },
        {
          time: "12:10–13:30",
          title: "ถึง Kansai International Airport",
          blurb: "ผ่าน ตม. รับกระเป๋า และซื้อ ICOCA เติม ¥10,000 ต่อคนให้จบทันทีที่ KIX",
          tags: ["Arrival", "ICOCA"],
          mapQuery: "Kansai International Airport",
          website: "https://www.kansai-airport.or.jp/en/",
          details: [
            "ICOCA จะเป็นบัตรหลักของทั้งทริป",
            "จัดบัตรให้เรียบร้อยก่อนเข้าเมืองจะช่วยลด friction ได้มาก",
          ],
        },
        {
          time: "12:45–13:45",
          title: "Airport Limousine Bus → Namba",
          blurb: "เข้าเมืองแบบสบายกว่าลากกระเป๋าเปลี่ยนหลายต่อ เหมาะกับวันแรกมาก",
          tags: ["Transfer", "Comfort"],
          mapQuery: "Osaka Namba Station",
          website: "https://www.kate.co.jp/en/",
          details: [
            "เลือกความสบายก่อนความเร็วในวันแรก",
            "คาดว่าไปถึงโซนโรงแรมราวบ่ายสอง",
          ],
        },
        {
          time: "14:00",
          title: "Check-in VIA INN PRIME Shinsaibashi Yotsubashi",
          blurb: "เก็บกระเป๋า พักสั้น ๆ และตั้งหลักก่อนออกไปสำรวจย่านรอบโรงแรม",
          tags: ["Hotel", "Check-in"],
          mapQuery: "VIA INN PRIME Shinsaibashi Yotsubashi Osaka",
          website: "https://www.viainn.com/en/shinsaibashi-yotsubashi/",
          details: [
            "ให้ร่างกายรีเฟรชหลังเดินทางสองช่วง",
            "วันนี้ไม่จำเป็นต้องอัดหลายโลเคชันเพราะแค่เดินรอบย่านก็เพลินแล้ว",
          ],
        },
        {
          time: "16:00–17:30",
          title: "เดิน Shinsaibashi / Amerikamura + กาแฟ",
          blurb:
            "เปิดโอซากะด้วย city walk ง่าย ๆ และแวะ LiLo Coffee หรือ Brooklyn Roasting ตามอารมณ์",
          tags: ["Walk", "Cafe"],
          mapQuery: "Amerikamura Osaka",
          details: [
            "ใช้ช่วงนี้ดูจังหวะย่านที่พักและเก็บร้านน่าสนใจไว้ก่อน",
            "ถ้ายังล้าจากไฟลต์ สามารถเน้นแค่คาเฟ่กับเดินเล่นสั้น ๆ ได้",
          ],
        },
        {
          time: "18:30–20:00",
          title: "Dinner ที่ Gyutoroya Fukushima",
          blurb: "มื้อแรกในโอซากะแบบจริงจังขึ้นอีกนิด มีทั้งบรรยากาศและคุณภาพอาหารที่ดี",
          tags: ["Dinner", "Highlight"],
          mapQuery: "Gyutoroya Fukushima Osaka",
          website: "https://www.gyutoroya.com/",
          details: [
            "เหมาะกับการเปิดทริปญี่ปุ่นด้วยมื้อที่มีน้ำหนักพอดี",
            "ถ้ากินเสร็จแล้วยังมีแรงค่อยขยับไปดื่มต่อ",
          ],
        },
        {
          time: "21:00–22:30",
          title: "Craft Beer Works Kamikaze",
          blurb: "จบวันแรกด้วยเบียร์ดี ๆ แบบไม่ต้องดึกเกินไป",
          tags: ["Craft Beer", "Nightcap"],
          mapQuery: "Craft Beer Works Kamikaze Osaka",
          details: [
            "เป็น optional finish ที่เข้าธีมคู่รักสายกินดื่มมาก",
            "ถ้าเหนื่อยก็ข้ามได้โดยไม่กระทบภาพรวมของวัน",
          ],
        },
      ],
    },
    {
      id: "day-2",
      day: "Day 2",
      date: "จันทร์ 18 พฤษภาคม 2026",
      location: "Osaka Landmarks + Namba Yasaka",
      vibe: "แลนด์มาร์กเมือง + จบด้วยย่านกินเที่ยว",
      hotel: "VIA INN PRIME Shinsaibashi Yotsubashi",
      coverNote:
        "วันในโอซากะแบบคมและครบ เริ่มจากสวนปราสาท ขยับไป Shinsekai แล้วไหลลง Dotonbori กับบาร์ช่วงค่ำ",
      gallery: [
        {
          src: "https://www.japan-guide.com/g18/4000_top.jpg",
          caption: "Osaka Castle Park เหมาะกับการเริ่มวันให้โปร่งก่อนเข้าเมืองหนาแน่น",
        },
        {
          src: "https://res-2.cloudinary.com/jnto/image/upload/w_2064%2Ch_1300%2Cc_fill%2Cf_auto%2Cfl_lossy%2Cq_auto/v1675232782/osaka/Osaka_s_id26_1",
          caption: "วิวเมืองโอซากะช่วงกลางวันให้มู้ดทริปเมืองที่สดชัดมาก",
        },
        {
          src: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweo4mOA4gd5YNh_RDyiivT_ieIOIHVBlEy6bd2pXSkGG4YUoWa7aPAzvXYla_i51X_MlxgUscyA-l38ZzQy6KhghU7gCA40aRQrHNRrEx1j3YGdzBKkyMzxkriENbmhatLaxMjef=w86-h119-k-no",
          caption: "Shinsekai เติมกลิ่นอายโอซากะแบบครึกครื้นและมี texture",
        },
        {
          src: "https://www.kanpai-japan.com/sites/default/files/uploads/2015/02/namba-yasaka-jinja-5.jpg",
          caption: "Namba Yasaka Jinja เป็น stop สั้น ๆ ที่ภาพจำชัดมาก",
        },
      ],
      events: [
        {
          time: "09:30",
          title: "ออกจากโรงแรม",
          blurb: "เริ่มวันแบบไม่เช้าเกินไป เพื่อให้ยังคง mood slow life ของทริป",
          tags: ["Morning", "Easy Start"],
          mapQuery: "VIA INN PRIME Shinsaibashi Yotsubashi Osaka",
          details: [
            "วันนี้มีหลายย่านจึงควรเริ่มแบบสบายแต่ไม่สายเกินไป",
            "ถือเป็นวัน landmark ของโอซากะที่ยังบาลานซ์อยู่",
          ],
        },
        {
          time: "10:00–11:45",
          title: "เดินเล่นที่ Osaka Castle Park",
          blurb: "ชมสวนและบรรยากาศรอบปราสาทแบบค่อย ๆ เดิน ไม่จำเป็นต้องเร่งเก็บทุกมุม",
          tags: ["Park", "Landmark"],
          mapQuery: "Osaka Castle Park",
          website: "https://www.osakacastlepark.jp/en/",
          details: [
            "ช่วงสายอากาศยังสบายกว่าช่วงบ่าย",
            "เหมาะกับการเปิดวันด้วยพื้นที่กว้างและสีเขียว",
          ],
        },
        {
          time: "12:15–13:15",
          title: "Lunch ที่ Ramen Jinsei Jet600",
          blurb: "พักเที่ยงด้วยราเมนก่อนเข้าสู่ช่วงบ่ายที่คึกคักขึ้นของโอซากะ",
          tags: ["Lunch", "Ramen"],
          mapQuery: "Ramen Jinsei Jet600 Osaka",
          details: [
            "ถ้าคิวแน่นให้ยืดเวลาแถวรอบ ๆ แล้วค่อยกลับมา",
            "เป็นมื้อที่วางไว้ให้ตรงกลางวันพอดี ไม่หนักเกินไปก่อนเดินต่อ",
          ],
        },
        {
          time: "14:00–15:30",
          title: "Shinsekai + Tsutenkaku",
          blurb: "เดินย่าน Shinsekai และแวะถ่ายรูปกับ Tsutenkaku เพื่อเก็บอีกด้านของโอซากะ",
          tags: ["Street Vibe", "Photo Stop"],
          mapQuery: "Shinsekai Osaka",
          details: [
            "ย่านนี้เหมาะกับการเสพภาพรวมมากกว่าต้องวิ่งเช็กลิสต์",
            "เลือกเดินเฉพาะโซนที่รู้สึกสนุกและไม่เหนื่อยจนเกินไป",
          ],
        },
        {
          time: "16:00–16:40",
          title: "แวะ Namba Yasaka Jinja",
          blurb: "stop สั้น ๆ แต่มีคาแรกเตอร์แรงมาก และไปต่อ Dotonbori ได้ง่าย",
          tags: ["Shrine", "Namba"],
          mapQuery: "Namba Yasaka Jinja",
          website: "https://www.nambayasaka.jp/",
          details: [
            "ใช้เวลาไม่มาก เหมาะกับเป็นช่วงเปลี่ยนจังหวะก่อนเย็น",
            "แสงช่วงนี้มักถ่ายรูปสวยกว่าตอนเที่ยง",
          ],
        },
        {
          time: "17:30–19:00",
          title: "เดินเล่น Dotonbori",
          blurb: "ชมแสงสีและคนเมืองแบบโอซากะคลาสสิกในจังหวะเย็นที่กำลังสนุก",
          tags: ["Walk", "Food Street"],
          mapQuery: "Dotonbori Osaka",
          details: [
            "ไม่ต้องพยายามเก็บทุกตรอก ให้ไหลตามร้านและบรรยากาศจริง",
            "เหมาะกับการเผื่อเวลาสำหรับถ่ายรูปและแวะของกินเล็ก ๆ ระหว่างทาง",
          ],
        },
        {
          time: "19:00–20:30",
          title: "Dinner: Sushi Daizen หรือ Yakiniku M Hozenji",
          blurb: "เลือกมื้อค่ำตามอารมณ์จริงของวัน ระหว่างสายซูชิกับสายเนื้อย่าง",
          tags: ["Dinner", "Choice"],
          mapQuery: "Dotonbori Osaka",
          details: [
            "ถ้าอยากเบากว่าและสดกว่าให้ไปทาง Sushi Daizen",
            "ถ้าอยากจัดเต็มแบบโอซากะ popular night ให้เลือก Yakiniku M Hozenji",
          ],
        },
        {
          time: "21:00–22:30",
          title: "Nightcap ที่ Bar Nayuta",
          blurb: "ปิดวันด้วยเครื่องดื่มหนึ่งหรือสองแก้วในบรรยากาศที่โตและช้าลง",
          tags: ["Bar", "Nightcap"],
          mapQuery: "Bar Nayuta Osaka",
          details: [
            "เป็นจุดจบวันที่เข้าธีม mature city walk มาก",
            "หากวันนี้เหนื่อยกว่าคาด กลับโรงแรมเลยก็ยังสวยอยู่",
          ],
        },
      ],
    },
    {
      id: "day-3",
      day: "Day 3",
      date: "อังคาร 19 พฤษภาคม 2026",
      location: "Kyoto Slow Heritage Day",
      vibe: "วัด คาเฟ่ ย่านเก่า และ evening walk ที่เกียวโต",
      hotel: "VIA INN PRIME Shinsaibashi Yotsubashi",
      coverNote:
        "เป็นวันที่วางจังหวะสวยมาก เริ่มด้วยวัด ต่อด้วยกาแฟ ขึ้นเขาแบบพอดี แล้วปิดด้วย Gion และแม่น้ำ Kamogawa",
      gallery: [
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Toji_2015.JPG",
          caption: "To-ji เปิดวันเกียวโตได้สงบและมีน้ำหนักทางภาพมาก",
        },
        {
          src: "https://www.japan-guide.com/g18/3915_top.jpg",
          caption: "Kyoto heritage day วันนี้ตั้งใจให้ค่อย ๆ ละเลียดมากกว่าวิ่งเก็บ",
        },
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/6/66/Pedestrian_road_with_pavements_and_paper_umbrellas%2C_Higashiyama-ku%2C_Kyoto%2C_Japan%2C_early_morning.jpg",
          caption: "Ninenzaka และ Sannenzaka เหมาะกับช่วงเดินช้าที่สุดของทริป",
        },
        {
          src: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqMOJyqEqxfVOZ-zpiysCPQf8Y8UmeA6-qVFyrtp26boVT0skogLiasCkrah3PapLi4GfCOCTEs4aq6Ez0He7aEq0mFTzyxahYCJCKolL8D4XrojYqoul3mRiCeRaewb7rs6vnJGftY9uFM=w203-h114-k-no",
          caption: "Gion Duck Rice ปิดวันเกียวโตได้โตและนุ่มมาก",
        },
      ],
      events: [
        {
          time: "08:45–09:45",
          title: "Hankyu Railway: Osaka → Kyoto",
          blurb: "ออกจากโอซากะไปเกียวโตแบบเช้าไม่หักโหม เพื่อมีวันเต็มที่ยังไม่รีบ",
          tags: ["Transit", "Day Trip"],
          mapQuery: "Kyoto Station",
          details: [
            "วันเกียวโตควรเผื่อพลังให้ช่วงเดินย่านเก่าตอนบ่าย",
            "เริ่มเช้าแบบนี้ทำให้ไม่หลุด mood slow life",
          ],
        },
        {
          time: "10:15–10:45",
          title: "To-ji Temple",
          blurb: "วัดเปิดวันเกียวโตที่สงบและมีมู้ด heritage เข้มชัดกว่าจุดฮิตหลายแห่ง",
          tags: ["Temple", "Morning"],
          mapQuery: "To-ji Kyoto",
          website: "https://toji.or.jp/",
          details: [
            "ใช้เวลาไม่ยาวมากแต่ให้โทนของวันได้ดีมาก",
            "เหมาะกับการเริ่มจากความสงบก่อนค่อยเข้าสู่โซนคนมาก",
          ],
        },
        {
          time: "11:00–11:30",
          title: "กาแฟที่ Kurasu Kyoto Stand",
          blurb: "coffee stop สำคัญของวันเพื่อเติมพลังและพักขาก่อนเข้า Fushimi Inari",
          tags: ["Cafe", "Coffee"],
          mapQuery: "Kurasu Kyoto",
          website: "https://kurasu.kyoto/",
          details: [
            "ร้านนี้เข้ากับธีมทริปมากทั้ง mood และกาแฟ",
            "อย่านั่งรีบเกินไป เพราะช่วงนี้มีไว้บาลานซ์พลังทั้งวัน",
          ],
        },
        {
          time: "12:00–13:15",
          title: "Fushimi Inari Taisha",
          blurb: "เดินเฉพาะช่วงต้นของเสาโทริอิแบบพอดี ไม่ต้องฝืนขึ้นจนหมดแรง",
          tags: ["Shrine", "Iconic"],
          mapQuery: "Fushimi Inari Taisha",
          website: "https://inari.jp/en/",
          details: [
            "ใช้แนวคิด less but better กับจุดนี้จะสนุกกว่า",
            "โฟกัสที่บรรยากาศและภาพรวมมากกว่าการพิชิตเส้นทางทั้งหมด",
          ],
        },
        {
          time: "13:15–13:45",
          title: "Taxi ไป Higashiyama",
          blurb: "จ่ายเพิ่มเพื่อประหยัดแรงและคงอารมณ์ของวันเกียวโตให้ไหลลื่น",
          tags: ["Taxi", "Comfort"],
          mapQuery: "Higashiyama Kyoto",
          details: [
            "นี่คือ taxi ช่วงที่คุ้มมากของทั้งทริป",
            "ช่วยให้ช่วงบ่ายในย่านเก่าเริ่มต้นแบบไม่เหนื่อยเกินไป",
          ],
        },
        {
          time: "14:00–14:30",
          title: "กาแฟที่ % Arabica Kyoto Higashiyama",
          blurb: "คาเฟ่ stop ที่เข้ากับบ่ายเกียวโตมาก และเป็นช่วงปรับจังหวะก่อนเดินตรอกเก่า",
          tags: ["Cafe", "Signature"],
          mapQuery: "% Arabica Kyoto Higashiyama",
          website: "https://arabica.coffee/",
          details: [
            "เหมาะกับการนั่งสั้นแต่มีคุณภาพ",
            "เป็นจุดเริ่ม flow ของโซน Ninenzaka และ Sannenzaka",
          ],
        },
        {
          time: "14:30–15:15",
          title: "เดิน Ninenzaka",
          blurb: "เริ่มครึ่งบ่ายด้วยถนนเก่าที่ละมุนและถ่ายรูปสวยมาก",
          tags: ["Old Streets", "Walk"],
          mapQuery: "Ninenzaka Kyoto",
          details: [
            "เดินช้า ๆ จะได้เสน่ห์ของย่านมากกว่าเดินรีบผ่าน",
            "เผื่อเวลาแวะร้านเล็ก ๆ ได้ตามอารมณ์",
          ],
        },
        {
          time: "15:15–15:45",
          title: "เดิน Sannenzaka",
          blurb: "ต่อเนื่องจาก Ninenzaka แบบไม่ต้องมีเป้าหมายมาก ปล่อยบรรยากาศทำงาน",
          tags: ["Old Streets", "Scenic"],
          mapQuery: "Sannenzaka Kyoto",
          details: [
            "ช่วงนี้คือหัวใจของคำว่า slow heritage day",
            "เหมาะกับการเก็บภาพและหาของฝากชิ้นเล็ก",
          ],
        },
        {
          time: "15:45–16:30",
          title: "Kiyomizu-dera",
          blurb: "เก็บวัดใหญ่ของวันในช่วงบ่ายที่แสงสวยและต่อ Gion ได้ง่าย",
          tags: ["Temple", "Scenic"],
          mapQuery: "Kiyomizu-dera",
          website: "https://www.kiyomizudera.or.jp/en/",
          details: [
            "ไม่ต้องรีบออกจากที่นี่ เพราะเป็นจุดเด่นของวันเกียวโต",
            "ถ้ายังมีแรงใช้เวลากับวิวให้เต็มได้เลย",
          ],
        },
        {
          time: "16:45–17:20",
          title: "เดินเล่น Gion",
          blurb: "เปลี่ยนโหมดจากวัดและตรอกเก่าเข้าสู่เย็นแบบสงบและโตขึ้นของเกียวโต",
          tags: ["Walk", "Evening"],
          mapQuery: "Gion Kyoto",
          details: [
            "ไม่ต้องเช็กอินเยอะ แค่เดินดู mood ของย่านก็เพียงพอ",
            "เป็นช่วงเชื่อมมื้อเย็นที่สวยมาก",
          ],
        },
        {
          time: "17:30–18:30",
          title: "Dinner ที่ Gion Duck Rice",
          blurb: "มื้อเย็นที่เข้าธีมวันเกียวโตแบบสวยและโตมาก",
          tags: ["Dinner", "Kyoto Highlight"],
          mapQuery: "Gion Duck Rice Kyoto",
          details: [
            "แนะนำให้กินแบบไม่รีบ เพราะหลังจากนี้ยังมี evening walk ต่อ",
            "ถือเป็นหนึ่งในมื้อที่ character ชัดที่สุดของทริป",
          ],
        },
        {
          time: "18:30–19:15",
          title: "เดินริมแม่น้ำ Kamogawa / Gion ต่อ",
          blurb: "ปล่อยช่วงหัวค่ำให้เกียวโตทำงานแบบเบาและโรแมนติก",
          tags: ["River Walk", "Relax"],
          mapQuery: "Kamogawa Kyoto",
          details: [
            "ช่วงนี้ไม่ต้องมีแผนอะไรเพิ่ม แค่เดินและซึมบรรยากาศ",
            "เป็นตอนจบของวันเกียวโตที่พอดีมาก",
          ],
        },
        {
          time: "19:30–20:30",
          title: "กลับ Osaka",
          blurb: "กลับฐานพักในโอซากะแบบไม่ดึกจนเกินไป เพื่อให้วันถัดไปยังสดอยู่",
          tags: ["Return", "Day Trip"],
          mapQuery: "Osaka Namba Station",
          details: [
            "วันเกียวโตเต็มและสวยแล้ว จึงไม่ควรยืดจนล้าเกินไป",
            "กลับถึงโรงแรมแล้วยังมีเวลาพักจริงก่อนนอน",
          ],
        },
      ],
    },
    {
      id: "day-4",
      day: "Day 4",
      date: "พุธ 20 พฤษภาคม 2026",
      location: "Minoh + Katsuoji",
      vibe: "ธรรมชาติ + วัดดารุมะในวันเดียว",
      hotel: "VIA INN PRIME Shinsaibashi Yotsubashi",
      coverNote:
        "วันที่ให้ภาพทริปเปลี่ยนจากเมืองไปเป็นสีเขียวและแดงของดารุมะ ทำให้ครึ่งกลางทริปไม่ซ้ำจังหวะเดิม",
      gallery: [
        {
          src: "https://www.japan-guide.com/g18/4019_02.jpg",
          caption: "ทางเดินไป Minoh Falls ให้ความรู้สึกพักสายตาจากเมืองได้เต็ม ๆ",
        },
        {
          src: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweo65gdwprVztD-wHhTJCBv2f_bb4y4sHCpYDzro-Krh5jVGvXBJoTIi6Gx3sVOfXQvk94XTqfI-kouxTLdohFWK9C1RfnEBxiSvTH1QxXf3glfwEMbX8ytRlekR2jkz5lDGXcMV4Q=w203-h152-k-no",
          caption: "Minoh เป็น day trip ที่สวยและไม่ใช้แรงมากเกินไป",
        },
        {
          src: "https://cdn.gaijinpot.com/app/uploads/sites/6/2019/05/Daruma-at-Katsuo-ji-1-1024x768.jpg",
          caption: "Katsuoji เต็มไปด้วยดารุมะและมีคาแรกเตอร์ชัดมาก",
        },
        {
          src: "https://www.kanpai-japan.com/sites/default/files/styles/content_xs/public/uploads/2020/11/katsuoji-osaka-8.jpg",
          caption: "วัดแห่งนี้เหมาะกับการเผื่อเวลาเดินเล่นและถ่ายรูปจริง ๆ",
        },
      ],
      events: [
        {
          time: "09:30–10:45",
          title: "Namba → Umeda → Minoh",
          blurb: "ออกจากโอซากะไป Minoh แบบเช้าไม่รีบเพื่อให้ได้วันธรรมชาติเต็มที่พอดี",
          tags: ["Transit", "Nature Day"],
          mapQuery: "Minoh Station Osaka",
          details: [
            "วันนี้ควรใส่รองเท้าที่เดินสบายจริง",
            "โครงเวลาเผื่อให้ไปถึงแบบไม่ต้องหอบ",
          ],
        },
        {
          time: "11:00–12:15",
          title: "เดินไป Minoh Falls",
          blurb: "เส้นทางธรรมชาติระดับสบาย เดินเพลินกว่าที่เหนื่อย และได้ภาพสีเขียวเต็มตา",
          tags: ["Walk", "Nature"],
          mapQuery: "Minoh Falls Osaka",
          details: [
            "ไม่ต้องเร่งถึงน้ำตก เพราะตัวเส้นทางก็เป็นส่วนสำคัญของวันนี้",
            "เหมาะกับการค่อย ๆ เดิน หยุดพัก และถ่ายภาพไปเรื่อย ๆ",
          ],
        },
        {
          time: "12:30–13:30",
          title: "Lunch ที่ Yuzan Cafe",
          blurb: "พักมื้อกลางวันให้เต็ม ก่อนย้ายไปอีก mood หนึ่งของวันในช่วงบ่าย",
          tags: ["Lunch", "Cafe"],
          mapQuery: "Yuzan Cafe Minoh",
          details: [
            "ใช้เวลาพักขาและเติมพลังจริง ๆ",
            "เป็นมื้อกลางวันที่เข้ากับภาพ slow nature day ได้ดี",
          ],
        },
        {
          time: "14:00–15:30",
          title: "Taxi ไป–กลับ Katsuoji Temple",
          blurb: "ยอมจ่าย taxi เพื่อรักษาพลังและเวลา แล้วไปเก็บวัดดารุมะแบบสบายขึ้นมาก",
          tags: ["Taxi", "Temple"],
          mapQuery: "Katsuoji Temple Osaka",
          website: "https://katsuo-ji-temple.or.jp/en/",
          details: [
            "ช่วงนี้เป็นค่าใช้จ่ายที่ช่วยให้คุณภาพทริปดีขึ้นชัดเจน",
            "เมื่อไปถึงแล้วเผื่อเวลาเดินรอบวัดและถ่ายภาพให้คุ้ม",
          ],
        },
        {
          time: "17:30–18:45",
          title: "กลับ Osaka",
          blurb: "ไหลกลับเมืองแบบไม่รีบ เพื่อมีเวลาพักก่อนออกมื้อค่ำต่อ",
          tags: ["Return", "Reset"],
          mapQuery: "Osaka Namba Station",
          details: [
            "การกลับช่วงนี้ช่วยให้ไม่ล้าจนเสีย evening mood",
            "สามารถแวะโรงแรมก่อนออก dinner ได้สบาย",
          ],
        },
        {
          time: "19:30–21:00",
          title: "Dinner ที่ Wine Bar Cave Osaka",
          blurb: "ปิดวันธรรมชาติด้วยไวน์บาร์ที่ทำให้ mood ผู้ใหญ่ของทริปยังต่อเนื่อง",
          tags: ["Dinner", "Wine"],
          mapQuery: "Wine Bar Cave Osaka",
          details: [
            "เหมาะกับการนั่งคุยเรื่อย ๆ และสรุปครึ่งแรกของทริป",
            "ถ้าเหนื่อยจาก day trip วันนี้ทำมื้อเบาก็ยังเข้าธีม",
          ],
        },
      ],
    },
    {
      id: "day-5",
      day: "Day 5",
      date: "พฤหัส 21 พฤษภาคม 2026",
      location: "Uji Half Day + Osaka Reset",
      vibe: "อุจิครึ่งวันหวาน ๆ แล้วกลับมาพักเมือง",
      hotel: "VIA INN PRIME Shinsaibashi Yotsubashi",
      coverNote:
        "วันนี้ตั้งใจให้อ่อนโยนที่สุดของทริป มีวัด มัทฉะ แม่น้ำ และเย็นที่ยืดหยุ่นสำหรับนวดหรือไวน์",
      gallery: [
        {
          src: "https://www.japan-guide.com/g17/3923_01.jpg",
          caption: "Byodo-in ให้บรรยากาศสงบและปราณีตแบบเมืองชา",
        },
        {
          src: "https://byfood.b-cdn.net/api/public/assets/37446/content?optimizer=image",
          caption: "มื้อราเมนที่ Uji เติมพลังได้ดีโดยไม่ทำให้วันหนักเกิน",
        },
        {
          src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/f3/b5/de/caption.jpg?h=500&s=1&w=900",
          caption: "Tsujirihei Honten คือช่วงมัทฉะที่เข้าธีมมากที่สุดของทริป",
        },
        {
          src: "https://media-cdn.tripadvisor.com/media/photo-m/1280/1c/79/7e/20/photo6jpg.jpg",
          caption: "ถนนชาและโซนเดินริมแม่น้ำ Uji ช่วยให้ครึ่งวันนี้ช้าและสวยมาก",
        },
      ],
      events: [
        {
          time: "09:00–09:30",
          title: "ตื่นสบาย ๆ",
          blurb: "เช้านี้จงใจไม่เริ่มเร็วเกินไป เพราะเป็นวันรีเซ็ตกลางทริปแบบเต็มตัว",
          tags: ["Slow Morning", "Recovery"],
          mapQuery: "VIA INN PRIME Shinsaibashi Yotsubashi Osaka",
          details: [
            "ใช้เช้านี้ช้า ๆ ให้สมกับธีม trip",
            "วันนี้มีความยืดหยุ่นสูง ไม่ต้องกดดันเรื่องเวลา",
          ],
        },
        {
          time: "10:30–11:30",
          title: "Osaka → Uji โดย JR",
          blurb: "เดินทางไป Uji แบบง่ายและไม่ต้องซับซ้อน ใช้ ICOCA แตะได้เลย",
          tags: ["JR", "Half Day"],
          mapQuery: "Uji Station Kyoto",
          details: [
            "เป็นอีกวันที่เห็นชัดว่า ICOCA ใบเดียวพอจริง",
            "การไปครึ่งวันทำให้ไม่รู้สึกรีบหรือเหนื่อย",
          ],
        },
        {
          time: "11:30–12:15",
          title: "Byodo-in",
          blurb: "เริ่มครึ่งวัน Uji ด้วยวัดที่สงบและละเอียด เหมาะกับจังหวะผู้ใหญ่ของทั้งทริป",
          tags: ["Temple", "Uji"],
          mapQuery: "Byodo-in Uji",
          website: "https://www.byodoin.or.jp/en/",
          details: [
            "ให้เวลากับการดูสถาปัตยกรรมและบรรยากาศมากกว่าการรีบต่อโลเคชัน",
            "เป็นช่วงที่ช่วยพักสมองจากวันเดินเมืองก่อนหน้าได้ดี",
          ],
        },
        {
          time: "12:20–13:00",
          title: "Lunch ที่ Ramen Tanaka Kyu Shoten",
          blurb: "ลอง Matcha Salt Ramen เพื่อให้มื้อกลางวันยังผูกกับ character ของเมืองชา",
          tags: ["Lunch", "Matcha Twist"],
          mapQuery: "Ramen Tanaka Kyu Shoten Uji",
          details: [
            "ร้านนี้ช่วยให้วัน Uji ไม่ซ้ำกับมื้อ ramen แบบวันอื่น",
            "เป็นจุดที่ทั้งสนุกและยังเบาเกินไปกว่าวันใหญ่",
          ],
        },
        {
          time: "13:10–14:00",
          title: "ของหวานที่ Tsujirihei Honten",
          blurb: "ไฮไลต์มัทฉะของทั้งวัน นั่งให้เต็มอารมณ์มากกว่ากินแล้วรีบไปต่อ",
          tags: ["Dessert", "Matcha"],
          mapQuery: "Tsujirihei Honten Kyoto Uji Main Shop",
          website: "https://www.tsujirihei.co.jp/",
          details: [
            "ช่วงนี้ควรปล่อยเวลาสบาย ๆ เพราะเป็นหัวใจของ day trip Uji",
            "เหมาะกับการนั่งยาวและคุยกันช้า ๆ มากกว่าถ่ายรูปแล้วรีบออก",
          ],
        },
        {
          time: "14:00–15:00",
          title: "เดินถนนชาและริมแม่น้ำ Uji",
          blurb: "ช่วงบ่ายเบาสบายสำหรับเดินเล่น ซื้อชา หรือแค่รับบรรยากาศเมืองอย่างช้า ๆ",
          tags: ["Walk", "Tea Town"],
          mapQuery: "Uji Bridge Kyoto",
          details: [
            "เป็นช่วงที่ควรเก็บเวลาเปล่าไว้ให้เมืองทำงาน",
            "ไม่จำเป็นต้องมีเป้าหมายชัด เพราะเสน่ห์ของ Uji อยู่ที่จังหวะ",
          ],
        },
        {
          time: "15:00–16:00",
          title: "กลับ Osaka",
          blurb: "กลับเข้าเมืองเร็วพอให้เย็นนี้ยังมีเวลา recovery หรือออกไปดินเนอร์ต่ออย่างสบาย",
          tags: ["Return", "Reset"],
          mapQuery: "Osaka Namba Station",
          details: [
            "การกลับเร็วคือส่วนสำคัญของความบาลานซ์ในวันนี้",
            "ทำให้ช่วงเย็นไม่รู้สึกว่าต้องฝืนพลัง",
          ],
        },
        {
          time: "16:30–18:00",
          title: "นวด / Spa / พัก",
          blurb: "หนึ่งในช่องเวลาที่ยืดหยุ่นที่สุดของทริป ใช้กับการพักจริงหรือ wellness ได้เต็มที่",
          tags: ["Wellness", "Flexible"],
          mapQuery: "Shinsaibashi Osaka",
          details: [
            "ถ้าอยากรีเฟรชร่างกาย ช่วงนี้เหมาะมาก",
            "หรือจะกลับห้องพักช้า ๆ ก็ยังถือว่าตรงแผน",
          ],
        },
        {
          time: "19:00–21:00",
          title: "Dinner + Wine แถว Shinsaibashi",
          blurb: "ปล่อยให้เย็นนี้เลือกตามอารมณ์จริง เพื่อไม่ให้วันที่แสนสบายนี้ถูกบีบด้วยร้านตายตัว",
          tags: ["Dinner", "Wine"],
          mapQuery: "Shinsaibashi Osaka",
          details: [
            "เหมาะกับการเดินหามุมดี ๆ แล้วนั่งยาว",
            "คืนนี้ไม่ต้องมี after plan เพิ่มก็ได้",
          ],
        },
      ],
    },
    {
      id: "day-6",
      day: "Day 6",
      date: "ศุกร์ 22 พฤษภาคม 2026",
      location: "Free Shopping Day after Move to Swissôtel",
      vibe: "ย้ายโรงแรมแล้วเดินช็อปแบบชิล ๆ ใน Namba และ Shinsaibashi",
      hotel: "Swissôtel Nankai Osaka",
      coverNote:
        "หลังฝากกระเป๋าและเช็กอินที่ Swissôtel Nankai Osaka วันนี้ตั้งใจให้เป็นวัน shopping สบาย ๆ เดิน Takashimaya, Namba Parks, Namba City แล้วค่อยข้ามไปฝั่ง Shinsaibashi หา Dior, Flower Mountain และร้าน local brand เพิ่มถ้ายังมีแรง",
      gallery: [
        {
          src: "https://images.openai.com/static-rsc-4/7P3bSAjyCaDsH2TsUgDW6D8fPHaynJ1t5an0kGhTA-ZKh3Z09MPXIbo4LiMpPYPyVtEpsL05qvzx6-WKQaMSSAdqRI0ZIv6RMCWXL7k3V6upeHjxzBXrsqw4Jlas_8qY-cFHLIoWJ9GM7WxsukEeRteHpEFhDE7tbHPYx3BAONCwd4Ga_6ejlpQSrUVEwDU8?purpose=fullsize",
          caption: "Takashimaya Osaka เหมาะมากสำหรับเริ่มวัน เพราะติดกับ Swissôtel และหาของ beauty ได้ครบ",
        },
        {
          src: "https://images.openai.com/static-rsc-4/MRIECPSHSe-J6PNZ0vCYjRiMz_vZ2MCzbWld2qeMhngAHgdcjvCYZNGN96EL5HkB5Ed44Oi-vpryUUkXQO2RAYooCKa3FWVJFoF6RyDl3dNwfZU06CkIaTWGd-SocKNYCCfk7aOtIWJdoqOgI_aUKd9DbMHuRuCVapd7levGCTrAJzAh2FUcQopmJDwap9LS?purpose=fullsize",
          caption: "Namba Parks กับ Namba City เป็นโซนเดินง่ายและมีแบรนด์ local ญี่ปุ่นให้เลือกเยอะ",
        },
        {
          src: "https://images.openai.com/static-rsc-4/UIvzyXfXHDvls0ZgDIDO-r-yDMiMQugxhDX4naGS5zoRARfSQpuxThCs2ol7tjCAXXr8V94eaE9IA9BFNQ7hzt1HiYQ6KLdzESZ4ljtRmmN0hJopcsCVHQNK4oKiapE9UrAO5ObhdPgBkqwAQLMHBFBQ02Kso3_2KUC9GwsT8LgwepPXmNadXjCtCEBLynta?purpose=fullsize",
          caption: "Daimaru Shinsaibashi เหมาะกับ Dior Beauty และแบรนด์ใหญ่ที่อยากดูแบบครบ ๆ",
        },
        {
          src: "https://images.openai.com/static-rsc-4/wN_EwdknxdERb6f0QEqnhia7T_oAkj1f0MiCHss-Jew7Aqr7iAAUhU6tTkzg30Wl130HOhMAyECdKNMomu_0lO-zg5T8vDrU62fyPx4HrL-OdLrtOjSNK_WT27kMXh2qF6vwQ9lw01PyVNJ6XKE5Xb0NVckLogfYnkP8jL_zI6CH1AbKFCFTec9_dn-jR3qo?purpose=fullsize",
          caption: "Shinsaibashi PARCO เป็นจุดรวมแบรนด์แฟชั่นและรองเท้าที่ช่วยให้ช่วงบ่ายมีเป้าหมายชัด",
        },
        {
          src: "https://images.openai.com/static-rsc-4/ldDWJpXlZgR4PDWvaYL2Ru3XZqvcfIO6QnRIbvGHFMEAsQPUFGDcjpyqIW4FUsEAdogJVLX6ZZvYkdCsLGz0z2g5S2j1y2RjZHkxlUbjYOr5GZdtgwEj0_q1erbSKYhT5o9bzsc516UgYdSvfK81LdlXpm3nq0-RlLkYiHGY8AM6AFagDd9Q5-Uen666nhpa?purpose=fullsize",
          caption: "Namba Marui, Loft และจุดของฝากรอบ Namba เหมาะกับการเก็บของจุกจิกช่วงเย็น",
        },
        {
          src: "https://images.openai.com/static-rsc-4/thVW7vJzyjVwXZf6DL5ikUrqqG1IgdKPigcMhQa0gvV-aFfw6OcQKNGM1knCBFoi7HT7QF5Tl63xvq6Fac-WkEN9ZoqXR4gfvyeS1ER6hSE-JEOn24AOqBVSBhNZlM44qxeU6Iw5CgyGq_hGnFfke9c7XoNa4eTm356UgccMRGlDVcZtoVqdD5eXbsVcHn50?purpose=fullsize",
          caption: "Hands Shinsaibashi และร้านแนว lifestyle ทำให้วันช็อปมีมิติไม่ใช่แค่เสื้อผ้าอย่างเดียว",
        },
        {
          src: "https://images.openai.com/static-rsc-4/2DNe9bPjv3-XOzJ0HyaKyDQqcpXDT9riIC9S5ALIYYOnFEyfXKEYVV_cHTc1KNWwVKOFmbTyaTWvkYir5WvIRZIqUdGg9q_lxbEywxjlwJgBfgRd_bLPXuEnYQTkBSbO97xDo-jngCf7PsA3jw-0Fa3MZzWR3JMd4sOXKhUL24f2r5zFbezfZJinrTApnn_e?purpose=fullsize",
          caption: "B'2nd และร้าน niche ในโซนนี้เหมาะกับการหา Flower Mountain แบบมีลุ้นที่สุด",
        },
      ],
      events: [
        {
          time: "10:30",
          title: "Check-out จาก VIA INN PRIME",
          blurb: "ย้ายโหมดจากช่วงกลางทริปเข้าสู่ช่วงท้ายแบบนุ่ม ๆ ไม่มีโปรแกรมหนักซ้อน",
          tags: ["Hotel Move", "Soft Reset"],
          mapQuery: "VIA INN PRIME Shinsaibashi Yotsubashi Osaka",
          details: [
            "ให้เช้านี้เป็นเรื่องของโลจิสติกส์แบบง่ายที่สุด",
            "เก็บของให้เป็นระเบียบเพื่อลดความวุ่นวายในช่วงท้ายทริป",
          ],
        },
        {
          time: "11:00",
          title: "ฝากกระเป๋าที่ Swissotel Nankai Osaka",
          blurb: "เคลียร์สัมภาระให้หมดก่อน แล้วใช้โลเคชันกลาง Namba ของ Swissôtel เป็นฐาน shopping ทั้งวัน",
          tags: ["Luggage Drop", "Namba"],
          mapQuery: "Swissotel Nankai Osaka",
          website: "https://www.swissotel.com/hotels/nankai-osaka/",
          details: [
            "ข้อดีคือหลังจากนี้เดินตัวเบาตลอด",
            "การย้ายมาพัก Namba ตอนนี้ช่วยเรื่องวันกลับอย่างชัดเจน",
          ],
        },
        {
          time: "11:15–12:30",
          title: "Takashimaya Osaka + Dior Beauty",
          blurb: "เริ่มจากจุดที่ง่ายที่สุดก่อน เพราะ Takashimaya อยู่ติดโรงแรมและมี Dior Beauty ครบทั้งเครื่องสำอาง สกินแคร์ และน้ำหอม",
          tags: ["Beauty", "Department Store"],
          mapQuery: "Takashimaya Osaka",
          website: "https://www.takashimaya-global.com/en/stores/osaka/",
          details: [
            "เหมาะกับการเริ่มวันแบบไม่ต้องเดินไกลทันที",
            "ถ้าจบที่นี่ไว ยังมีเวลาขยับไปโซนเสื้อผ้าต่อได้สบาย",
          ],
        },
        {
          time: "12:30–14:30",
          title: "Namba Parks + Namba City หาดู local brand",
          blurb: "สองโซนนี้เหมาะกับการเดินช้า ๆ และไล่ดูแบรนด์ญี่ปุ่นอย่าง Beams, United Arrows, Urban Research, Journal Standard, Ships, Nano Universe และ Tomorrowland",
          tags: ["Local Brands", "Shopping"],
          mapQuery: "Namba Parks Osaka",
          website: "https://nambaparks.com/en/",
          details: [
            "แบรนด์เหล่านี้ใส่ง่ายและเข้ากับสไตล์วัย 40s มาก",
            "เป็นช่วงที่ดีสำหรับหาทั้งเสื้อผ้าผู้หญิงและผู้ชายในโซนเดียวกัน",
          ],
        },
        {
          time: "15:00–16:00",
          title: "Check-in Swissôtel",
          blurb: "ขึ้นห้องใหม่ พัก อาบน้ำ และตั้งหลักก่อนออกมื้อค่ำในช่วงเย็น",
          tags: ["Check-in", "Upgrade"],
          mapQuery: "Swissotel Nankai Osaka",
          website: "https://www.swissotel.com/hotels/nankai-osaka/",
          details: [
            "วันนี้ออกแบบมาให้มีความรู้สึกเหมือนได้พักอีกครั้ง",
            "ใช้ห้องพักใหม่เป็น reward เล็ก ๆ ช่วงท้ายทริป",
          ],
        },
        {
          time: "16:30–18:15",
          title: "Daimaru Shinsaibashi + Shinsaibashi PARCO",
          blurb: "ถ้ายังมีแรง ค่อยข้ามมาฝั่ง Shinsaibashi เพื่อดู Dior Beauty เพิ่ม เติม local brands และเช็กโซนรองเท้าสำหรับ Flower Mountain",
          tags: ["Dior", "Flower Mountain"],
          mapQuery: "Shinsaibashi PARCO Osaka",
          website: "https://shinsaibashi.parco.jp.e.aiv.hp.transer.com/",
          details: [
            "จุดที่น่าลองเช็ก Flower Mountain คือ B'2nd Osaka, PARCO และ Daimaru",
            "ช่วงนี้ยืดหยุ่นมาก ถ้าซื้อของครบแล้วจะลดเวลาแล้วกลับโรงแรมเร็วก็ได้",
          ],
        },
        {
          time: "18:15–19:15",
          title: "Namba Marui / Loft / Hands ตามพลังที่เหลือ",
          blurb: "ปิดท้ายด้วยโซนของฝาก ของใช้ และ gadget จุกจิก หรือแวะรองเท้าเพิ่มอีกนิดก่อนจบวัน",
          tags: ["Souvenirs", "Flexible"],
          mapQuery: "Loft Namba Osaka",
          details: [
            "Loft Namba เหมาะกับของใช้ ของฝาก และเครื่องเขียน",
            "Hands Shinsaibashi จะเด่นเรื่อง gadget และของใช้จุกจิกแบบญี่ปุ่น",
            "ถ้ายังมีแรงน้อย แค่เลือก 1 จุดแล้วปิดวันเลยก็ถือว่าตรงแผนแล้ว",
          ],
        },
      ],
    },
    {
      id: "day-7",
      day: "Day 7",
      date: "เสาร์ 23 พฤษภาคม 2026",
      location: "Kobe Mature Slow Day",
      vibe: "เมืองท่าผู้ใหญ่ ย่านยุโรป คาเฟ่ และ sunset ริมอ่าว",
      hotel: "Swissôtel Nankai Osaka",
      coverNote:
        "วันนี้จะเป็นฟีลเมืองท่าผู้ใหญ่ เดินสบายไม่รีบ เริ่มด้วยศาลเจ้ากลางเมือง ต่อด้วย Kitano, Kobe Beef, Chinatown, คาเฟ่ และปิดท้ายริมอ่าวช่วงเย็น",
      gallery: [
        {
          src: "https://onb-cdn.b-cdn.net/images-stn-kobe/40-Ikuta-Jinja-Shrine-Kobe2.jpg",
          caption: "Ikuta Shrine เหมาะมากสำหรับเริ่มวันก่อนเข้าโซนคนเยอะและขึ้นเขา",
        },
        {
          src: "https://cdn.gaijinpot.com/app/uploads/sites/6/2017/09/kitacho-Ijinkan-800x500.jpg",
          caption: "Kitano Ijinkan ให้บรรยากาศยุโรปเล็ก ๆ บนเนินเขาแบบเดินช้า ๆ ได้เพลินมาก",
        },
        {
          src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/9d/3c/90/caption.jpg?h=500&s=1&w=900",
          caption: "Mouriya Honten เป็นมื้อ Kobe Beef ที่พรีเมียมพอดีและเหมาะกับคู่รักมาก",
        },
        {
          src: "https://www.feel-kobe.jp/kobe-yakei/assets/media/DSC03874-1025x680.jpg",
          caption: "Harborland และ Port Tower ช่วงเย็นคือฉากปิดวันที่สวยและโรแมนติกที่สุด",
        },
      ],
      events: [
        {
          time: "09:15–10:00",
          title: "เดินทาง Osaka → Kobe",
          blurb: "ออกจาก Namba ประมาณ 09:15 นั่ง Hanshin Railway จาก Osaka-Namba ไป Kobe-Sannomiya ใช้ ICOCA ได้และใช้เวลาราว 45 นาที",
          tags: ["Transit", "Day Trip"],
          mapQuery: "Kobe-Sannomiya Station",
          details: [
            "ออกเช้าแบบพอดีเพื่อให้ยังคง mood slow day",
            "Hanshin Railway เป็นเส้นทางที่ตรงและใช้ง่ายสำหรับวันโกเบ",
            "ถึงสถานีช่วงสิบโมงต้น ๆ แล้วยังไม่รู้สึกว่าถูกเร่งด้วยเวลา",
          ],
        },
        {
          time: "10:00–10:30",
          title: "Ikuta Shrine",
          blurb: "เดินจากสถานีประมาณ 5 นาที แล้วเริ่มวันที่ศาลเจ้าเก่าแก่กลางเมืองโกเบที่เงียบ สงบ และมีสวนเล็ก ๆ กับป่าไผ่ด้านใน",
          tags: ["Shrine", "Quiet Start"],
          mapQuery: "Ikuta Shrine Kobe",
          details: [
            "ใช้เวลาประมาณ 20–30 นาที กำลังดีมากสำหรับเปิดวัน",
            "เหมาะมากก่อนเข้าโซนคนเยอะและขึ้นเขา",
            "ให้ความรู้สึกว่าเริ่มวันแบบเบาและมีสมาธิ",
          ],
        },
        {
          time: "10:45–12:15",
          title: "Kitano Ijinkan + พุดดิ้ง",
          blurb: "เดินหรือนั่ง taxi สั้น ๆ ขึ้นไปโซน Kitano Ijinkan เพื่อเดินเล่นย่านบ้านสไตล์ยุโรปเก่าแก่บนเนินเขา แล้วแวะ Kazamidori no Yakata Pudding",
          tags: ["Architecture", "Pudding Break"],
          mapQuery: "Kitano Ijinkan Kobe",
          details: [
            "โซนนี้เหมาะกับการเดินช้า ๆ ถ่ายรูป และเสพบรรยากาศเหมือนยุโรปเล็ก ๆ",
            "แนะนำแวะ Kazamidori no Yakata Pudding แล้วพักกินคู่กาแฟเบา ๆ ราว 20 นาที",
            "เป็นช่วงที่ทำให้วันโกเบมี texture ต่างจากเมืองอื่นในทริปชัดมาก",
          ],
        },
        {
          time: "12:30–14:00",
          title: "Kobe Beef Lunch ที่ Mouriya Honten",
          blurb: "มื้อหลักของวันเลือก Mouriya Honten เพราะบรรยากาศดี พรีเมียมแบบไม่เว่อร์ และเหมาะกับคู่รักมากกว่า Steakland",
          tags: ["Lunch", "Kobe Beef"],
          mapQuery: "Mouriya Honten Kobe",
          details: [
            "งบประมาณประมาณ ¥6,000–10,000 ต่อคน แล้วแต่เซ็ต",
            "บรรยากาศเหมาะกับคู่รักและให้ความรู้สึกพิเศษกว่ามื้อเนื้อทั่วไป",
            "แนะนำจองล่วงหน้าเพื่อให้ flow ของวันไม่สะดุด",
          ],
        },
        {
          time: "14:15–15:00",
          title: "Kobe Chinatown",
          blurb: "เดินต่อมาย่าน Nankinmachi เพื่อดู Chinatown ของโกเบ มีขนม ซาลาเปา และของกินเล่นให้ลองชิมนิดหน่อยแบบไม่ต้องกินจริงจัง",
          tags: ["Chinatown", "Snack Stop"],
          mapQuery: "Nankinmachi Kobe Chinatown",
          details: [
            "ใช้เวลาประมาณ 30–45 นาที กำลังดีสำหรับช่วงหลังมื้อใหญ่",
            "เน้นเดินดูบรรยากาศและลองของกินเล็ก ๆ มากกว่ามื้อจริง",
            "เป็นช่วงที่ช่วยเปลี่ยน mood จากมื้อพรีเมียมให้กลับมาสนุกขึ้นอีกนิด",
          ],
        },
        {
          time: "15:15–16:00",
          title: "Blue Bottle Coffee Kobe Kitano Cafe",
          blurb: "พักเหนื่อยที่คาเฟ่สวย เงียบ และเหมาะกับการ slow down ในช่วงบ่ายก่อนเดินต่อ",
          tags: ["Cafe", "Slow Down"],
          mapQuery: "Blue Bottle Coffee Kobe Kitano Cafe",
          website: "https://bluebottlecoffee.com/",
          details: [
            "เป็นช่วงนั่งพักที่ช่วยให้วันนี้ไม่แน่นจนเกินไป",
            "เหมาะกับการค่อย ๆ รีเซ็ตพลังหลังมื้อกลางวันและ Chinatown",
            "ให้บ่ายของโกเบมีจังหวะนุ่มขึ้นอีกครั้ง",
          ],
        },
        {
          time: "16:15–17:15",
          title: "Motomachi Shopping Street",
          blurb: "เดินเล่นถนนช้อปปิ้งเก่าแก่ที่มีร้านกาแฟ ร้านของฝาก และเสื้อผ้า เดินง่ายและไม่เหนื่อย",
          tags: ["Walk", "Shopping"],
          mapQuery: "Motomachi Shopping Street Kobe",
          details: [
            "เหมาะกับการเดินแบบไม่เร่งและค่อย ๆ ดูย่านเก่าแก่ของเมือง",
            "มีร้านเล็ก ๆ ให้แวะโดยไม่ต้องมี mission ชัด",
            "เป็นช่วงคั่นก่อน sunset ที่ลงตัวมาก",
          ],
        },
        {
          time: "17:30–19:00",
          title: "Harborland + Port Tower Sunset",
          blurb: "ปิดท้ายวันที่ Kobe Harborland และ Kobe Port Tower เดินเล่นริมอ่าวในช่วงพระอาทิตย์ตกซึ่งสวยที่สุดของวัน",
          tags: ["Sunset", "Harbor"],
          mapQuery: "Kobe Harborland",
          details: [
            "ถ้ายังไม่อิ่มจากมื้อกลางวัน สามารถดื่มไวน์หรือเบียร์เบา ๆ ริมอ่าวได้",
            "หรือเลือกมื้อเย็นง่าย ๆ ก่อนกลับโอซากะก็ยังเหมาะมาก",
            "นี่คือช่วงที่โรแมนติกและเข้ากับธีมเมืองท่าผู้ใหญ่ที่สุดของวัน",
          ],
        },
        {
          time: "19:15–20:00",
          title: "กลับ Osaka",
          blurb: "เดินกลับสถานี Motomachi หรือ Sannomiya แล้วนั่ง Hanshin Railway กลับ Osaka-Namba ถึงโรงแรมประมาณ 20:00–20:15",
          tags: ["Return", "Easy Finish"],
          mapQuery: "Osaka-Namba Station",
          details: [
            "จบวันโกเบแบบครบที่สุดแต่ยังไม่เหนื่อยเกิน",
            "เช้าได้ศาลเจ้า เที่ยงได้ Kobe Beef บ่ายได้คาเฟ่และย่านชุมชน เย็นได้วิวอ่าว",
            "เข้ากับสไตล์คู่รักวัย 40s ของทริปนี้มาก",
          ],
        },
      ],
    },
    {
      id: "day-8",
      day: "Day 8",
      date: "อาทิตย์ 24 พฤษภาคม 2026",
      location: "Fly Home",
      vibe: "วันกลับบ้านแบบไม่เหนื่อย",
      hotel: "Swissôtel Nankai Osaka",
      coverNote:
        "วันปิดทริปที่ตั้งใจไม่อัดอะไรเพิ่ม ออกจากโรงแรมอย่างนุ่มนวลแล้วไปสนามบินแบบไม่ลุ้น",
      gallery: [
        {
          src: "https://www.swissotel.com/assets/0/92/2119/4011/4029/4031/6442451752/d1920536-82ab-488d-aa3e-517262ff29fa.jpg",
          caption: "โลเคชันของ Swissôtel ทำให้เช้าวันกลับบ้านง่ายขึ้นมาก",
        },
      ],
      events: [
        {
          time: "08:30–09:30",
          title: "ตื่น / Check-out / เดินเล่นรอบสุดท้ายถ้ามีเวลา",
          blurb: "เช้าวันสุดท้ายให้ใช้กับการเก็บของช้า ๆ และสูดบรรยากาศโอซากะรอบท้ายแบบไม่กดดัน",
          tags: ["Checkout", "Final Morning"],
          mapQuery: "Swissotel Nankai Osaka",
          website: "https://www.swissotel.com/hotels/nankai-osaka/",
          details: [
            "ถ้ามีเวลาและอารมณ์ยังอยากเดิน แวะกาแฟสั้น ๆ รอบโรงแรมได้",
            "แต่เป้าหมายหลักคือกลับแบบไม่เหนื่อย",
          ],
        },
        {
          time: "10:00–11:00",
          title: "Limousine มารับที่โรงแรม → KIX",
          blurb: "เลือกวิธีที่ชิลที่สุดในวันกลับ และลดความเสี่ยงเรื่องย้ายกระเป๋าหลายต่อ",
          tags: ["Transfer", "Airport"],
          mapQuery: "Kansai International Airport",
          website: "https://www.kate.co.jp/en/",
          details: [
            "นี่คือเหตุผลที่ย้ายมาพัก Namba ในช่วงท้ายทริป",
            "วันสุดท้ายจึงควรลื่นและเบาที่สุดเท่าที่ทำได้",
          ],
        },
        {
          time: "หลังจากนั้น",
          title: "เดินทางกลับบ้าน",
          blurb: "เช็กอินผ่านขั้นตอนสนามบิน แล้วปิดทริปนี้ด้วยพลังที่ยังเหลือ ไม่ใช่ด้วยความล้า",
          tags: ["Homeward", "Wrap Up"],
          mapQuery: "Kansai International Airport",
          website: "https://www.kansai-airport.or.jp/en/",
          details: [
            "ใช้เวลาที่สนามบินกับของฝาก เครื่องดื่ม หรือ duty free แบบสบาย ๆ",
            "ทริปนี้จบในโทนเดียวกับที่เริ่ม คือเรียบง่ายและบาลานซ์",
          ],
        },
      ],
    },
  ],
};

const sheet = document.querySelector("#detail-sheet");
const countdownGrid = document.querySelector("#countdown-grid");
const countdownTitle = document.querySelector("#countdown-title");
const countdownHelper = document.querySelector("#countdown-helper");
const memberPills = document.querySelector("#member-pills");
const heroMetrics = document.querySelector("#hero-metrics");
const hotelList = document.querySelector("#hotel-list");
const noteList = document.querySelector("#note-list");
const transportCardList = document.querySelector("#transport-card-list");
const prepList = document.querySelector("#prep-list");
const summaryQuote = document.querySelector("#summary-quote");
const transitBudget = document.querySelector("#transit-budget");
const specialBudget = document.querySelector("#special-budget");
const foodBudget = document.querySelector("#food-budget");
const totalList = document.querySelector("#total-list");
const totalNote = document.querySelector("#total-note");
const daysContainer = document.querySelector("#days");
const statusCopy = document.querySelector("#status-copy");
const dayNav = document.querySelector("#day-nav");
const petals = document.querySelector("#petals");
const todayAnchor = document.querySelector("#today-anchor");
const themeToggle = document.querySelector("#theme-toggle");

const detailNodes = {
  time: document.querySelector("#detail-time"),
  title: document.querySelector("#detail-title"),
  summary: document.querySelector("#detail-summary"),
  list: document.querySelector("#detail-list"),
  links: document.querySelector("#detail-links"),
};

const themeKey = "osaka-trip-theme-v2";

function createMapsUrl(query) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

function createLink(label, url, extraClass = "event-link") {
  const link = document.createElement("a");
  link.className = extraClass;
  link.href = url;
  link.target = "_blank";
  link.rel = "noreferrer";
  link.textContent = label;
  return link;
}

function getDayRegion(day) {
  if (day.id === "day-0") {
    return "taiwan";
  }

  if (day.id === "day-7") {
    return "kobe";
  }

  if (day.id === "day-6" || day.id === "day-8") {
    return "special";
  }

  return "japan";
}

function getNavLabel(day) {
  if (day.id === "day-0") {
    return "🇹🇼 Transit";
  }

  if (day.id === "day-8") {
    return "Day 8 ✈️";
  }

  return day.day;
}

function setActiveNav(targetId) {
  dayNav.querySelectorAll(".nav-btn").forEach((button) => {
    button.classList.toggle("active", button.dataset.target === targetId);
  });
}

function formatRelativeDayMessage(now, start, end) {
  if (now < start) {
    return {
      title: "กำลังเตรียมตัวออกเดินทาง",
      helper: "นับถอยหลังสู่คืน transit ที่ไต้หวันและทริปคันไซเวอร์ชันสุดท้าย",
      statusBlocks: [
        {
          title: "Cards",
          copy: "ซื้อแค่ ICOCA 2 ใบที่ KIX แล้วใช้ต่อทั้งทริปได้เลย",
        },
        {
          title: "Budget",
          copy: "รวมงบคร่าว ๆ อยู่ที่ประมาณ ¥80,000–110,000 สำหรับ 2 คน",
        },
      ],
    };
  }

  if (now > end) {
    return {
      title: "ทริปนี้เดินทางครบแล้ว",
      helper: "ยังใช้หน้านี้ทบทวนงบ แผนรายวัน และหยิบโครงไปทำทริปรอบถัดไปได้",
      statusBlocks: [
        {
          title: "Recap",
          copy: "ทริปนี้มีทั้งเมือง วัด ธรรมชาติ และวันรีเซ็ตที่บาลานซ์กันดีมาก",
        },
        {
          title: "Reuse",
          copy: "โครงหน้าเว็บพร้อมแก้ต่อเป็น Kyoto หรือ Tokyo slow trip รอบหน้าได้ง่าย",
        },
      ],
    };
  }

  return {
    title: "ตอนนี้กำลังอยู่ในทริป",
    helper: "ปุ่มดูแผนวันนี้จะพาไปยังวันปัจจุบันโดยอัตโนมัติ",
    statusBlocks: [
      {
        title: "Today",
        copy: "เลื่อนลงเพื่อเปิดดู timeline ของวันและกดการ์ดเพื่ออ่านโน้ตละเอียด",
      },
      {
        title: "Rule",
        copy: "ระหว่างทริปใช้ ICOCA เป็นหลัก แล้วค่อยเติม taxi ในช่วงที่ช่วยประหยัดแรงจริง",
      },
    ],
  };
}

function renderHeroBits() {
  tripData.travelers.forEach((item) => {
    const pill = document.createElement("div");
    pill.className = "pill";
    pill.innerHTML = `<strong>${item.value}</strong><span>${item.label}</span>`;
    memberPills.appendChild(pill);
  });

  tripData.metrics.forEach((item) => {
    const metric = document.createElement("div");
    metric.className = "metric";
    metric.innerHTML = `<strong>${item.value}</strong><span>${item.label}</span>`;
    heroMetrics.appendChild(metric);
  });
}

function renderDayNav() {
  const items = [
    { id: "summary", label: "Summary", tw: false },
    ...tripData.days.map((day) => ({
      id: day.id,
      label: getNavLabel(day),
      tw: day.id === "day-0",
    })),
  ];

  items.forEach((item, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `nav-btn${item.tw ? " tw" : ""}${index === 0 ? " active" : ""}`;
    button.dataset.target = item.id;
    button.textContent = item.label;
    button.addEventListener("click", () => {
      document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveNav(item.id);
    });
    dayNav.appendChild(button);
  });
}

function renderOverview() {
  tripData.hotels.forEach((hotel) => {
    const card = document.createElement("article");
    card.className = "hotel-card";
    card.innerHTML = `
      <span class="hotel-dates">${hotel.dates}</span>
      <strong>${hotel.name}</strong>
      <p class="hotel-meta">${hotel.area}</p>
      <p>${hotel.summary}</p>
    `;

    const actions = document.createElement("div");
    actions.className = "hotel-actions";
    actions.appendChild(createLink("แผนที่", createMapsUrl(hotel.mapQuery), "chip-link"));

    if (hotel.website) {
      actions.appendChild(createLink("เว็บไซต์", hotel.website, "chip-link"));
    }

    card.appendChild(actions);
    hotelList.appendChild(card);
  });

  tripData.notes.forEach((note) => {
    const card = document.createElement("article");
    card.className = "note-item";
    card.innerHTML = `<strong>${note.title}</strong><p>${note.copy}</p>`;
    noteList.appendChild(card);
  });
}

function renderBudgetRows(container, rows) {
  rows.forEach((row) => {
    const item = document.createElement("div");
    item.className = "budget-row";
    item.innerHTML = `
      <div class="budget-main">
        <strong>${row.label}</strong>
        <p>${row.detail}</p>
      </div>
      <span class="budget-value">${row.value}</span>
    `;
    container.appendChild(item);
  });
}

function renderSummary() {
  tripData.transportCards.forEach((cardData) => {
    const card = document.createElement("article");
    card.className = "fare-card";
    card.innerHTML = `
      <span class="status-badge ${cardData.status}">${cardData.badge}</span>
      <strong>${cardData.title}</strong>
      <p>${cardData.copy}</p>
    `;

    const list = document.createElement("ul");
    cardData.bullets.forEach((bullet) => {
      const li = document.createElement("li");
      li.textContent = bullet;
      list.appendChild(li);
    });
    card.appendChild(list);

    if (cardData.website) {
      const actions = document.createElement("div");
      actions.className = "hotel-actions";
      actions.appendChild(createLink("เว็บไซต์", cardData.website, "chip-link"));
      card.appendChild(actions);
    }

    transportCardList.appendChild(card);
  });

  tripData.prepList.forEach((item) => {
    const card = document.createElement("article");
    card.className = "prep-item";
    card.innerHTML = `
      <div>
        <strong>${item.title}</strong>
        <p>${item.copy}</p>
      </div>
    `;
    prepList.appendChild(card);
  });

  summaryQuote.innerHTML = `
    <p class="eyebrow">${tripData.summaryQuote.kicker}</p>
    <strong>${tripData.summaryQuote.title}</strong>
    <p>${tripData.summaryQuote.copy}</p>
  `;

  renderBudgetRows(transitBudget, tripData.budgets.transit);
  renderBudgetRows(specialBudget, tripData.budgets.extras);
  renderBudgetRows(foodBudget, tripData.budgets.food);

  tripData.budgets.totals.forEach((item) => {
    const card = document.createElement("div");
    card.className = "total-item";
    card.innerHTML = `<strong>${item.value}</strong><span>${item.label}</span>`;
    totalList.appendChild(card);
  });

  totalNote.textContent = tripData.budgets.note;
}

function openDetail(eventData) {
  detailNodes.time.textContent = eventData.time;
  detailNodes.title.textContent = eventData.title;
  detailNodes.summary.textContent = eventData.blurb;
  detailNodes.list.innerHTML = "";
  detailNodes.links.innerHTML = "";

  eventData.details.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    detailNodes.list.appendChild(li);
  });

  detailNodes.links.appendChild(
    createLink("เปิดแผนที่", createMapsUrl(eventData.mapQuery))
  );

  if (eventData.website) {
    detailNodes.links.appendChild(createLink("เว็บไซต์ที่เกี่ยวข้อง", eventData.website));
  }

  sheet.showModal();
}

function renderDays() {
  tripData.days.forEach((day) => {
    const article = document.createElement("article");
    article.className = "day-card";
    article.id = day.id;
    article.dataset.date = day.date;
    article.dataset.region = getDayRegion(day);

    const header = document.createElement("header");
    header.className = "day-header";
    header.innerHTML = `
      <div class="day-kicker">
        <span class="day-index">${day.day.replace("Day ", "")}</span>
        <div class="day-headline">
          <span class="day-theme">${day.location}</span>
          <h3>${day.vibe}</h3>
          <div class="day-meta">
            <span class="inline-stat"><strong>${day.date}</strong><span>Date</span></span>
            <span class="inline-stat"><strong>${day.hotel}</strong><span>Hotel</span></span>
          </div>
          <p class="day-summary">${day.coverNote}</p>
        </div>
      </div>
    `;

    article.appendChild(header);

    if (day.gallery?.length) {
      const gallery = document.createElement("div");
      gallery.className = `gallery-strip cols-${Math.min(day.gallery.length, 4)}`;

      day.gallery.forEach((image) => {
        const figure = document.createElement("figure");
        figure.className = "gallery-item";
        figure.innerHTML = `
          <img src="${image.src}" alt="${image.caption}" loading="lazy" />
          <figcaption>${image.caption}</figcaption>
        `;
        gallery.appendChild(figure);
      });

      article.appendChild(gallery);
    }

    const eventList = document.createElement("div");
    eventList.className = "event-list";

    day.events.forEach((eventItem) => {
      const eventCard = document.createElement("article");
      eventCard.className = "event-card";
      eventCard.tabIndex = 0;
      eventCard.setAttribute("role", "button");
      eventCard.setAttribute("aria-label", `${eventItem.time} ${eventItem.title}`);
      eventCard.addEventListener("click", () => openDetail(eventItem));
      eventCard.addEventListener("keydown", (keyboardEvent) => {
        if (keyboardEvent.key === "Enter" || keyboardEvent.key === " ") {
          keyboardEvent.preventDefault();
          openDetail(eventItem);
        }
      });

      const tags = eventItem.tags
        .map((tag) => `<span class="event-tag">${tag}</span>`)
        .join("");

      eventCard.innerHTML = `
        <div class="event-time">${eventItem.time}</div>
        <div class="event-content">
          <div>
            <h4>${eventItem.title}</h4>
            <p>${eventItem.blurb}</p>
          </div>
          <div class="event-tags">${tags}</div>
          <div class="event-links"></div>
        </div>
      `;

      const linksWrap = eventCard.querySelector(".event-links");
      linksWrap.appendChild(createLink("แผนที่", createMapsUrl(eventItem.mapQuery)));

      if (eventItem.website) {
        linksWrap.appendChild(createLink("เว็บไซต์", eventItem.website));
      }

      const noteButton = document.createElement("button");
      noteButton.type = "button";
      noteButton.className = "note-button";
      noteButton.textContent = "ดูโน้ต";
      noteButton.addEventListener("click", (domEvent) => {
        domEvent.stopPropagation();
        openDetail(eventItem);
      });
      linksWrap.appendChild(noteButton);

      linksWrap.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", (domEvent) => {
          domEvent.stopPropagation();
        });
      });

      eventList.appendChild(eventCard);
    });

    article.appendChild(eventList);
    daysContainer.appendChild(article);
  });
}

function initNavObserver() {
  const targets = [document.querySelector("#summary"), ...document.querySelectorAll(".day-card")];

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveNav(entry.target.id);
        }
      });
    },
    {
      rootMargin: "-35% 0px -55% 0px",
      threshold: 0.01,
    }
  );

  targets.forEach((target) => {
    if (target) {
      observer.observe(target);
    }
  });
}

function updateCountdown() {
  const now = new Date();
  const target = new Date(tripData.countdownTarget);
  const start = new Date(tripData.tripStart);
  const end = new Date(tripData.tripEnd);
  const diff = target.getTime() - now.getTime();

  const { title, helper, statusBlocks } = formatRelativeDayMessage(now, start, end);
  countdownTitle.textContent = title;
  countdownHelper.textContent = helper;

  statusCopy.innerHTML = "";
  statusBlocks.forEach((item) => {
    const block = document.createElement("div");
    block.className = "note-item";
    block.innerHTML = `<strong>${item.title}</strong><p>${item.copy}</p>`;
    statusCopy.appendChild(block);
  });

  let totalSeconds = Math.max(Math.floor(diff / 1000), 0);

  const days = Math.floor(totalSeconds / 86400);
  totalSeconds -= days * 86400;
  const hours = Math.floor(totalSeconds / 3600);
  totalSeconds -= hours * 3600;
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds - minutes * 60;

  const units = [
    { label: "วัน", value: days },
    { label: "ชั่วโมง", value: hours },
    { label: "นาที", value: minutes },
    { label: "วินาที", value: seconds },
  ];

  countdownGrid.innerHTML = "";
  units.forEach((unit) => {
    const card = document.createElement("div");
    card.className = "countdown-unit";
    card.innerHTML = `<strong>${String(unit.value).padStart(2, "0")}</strong><span>${unit.label}</span>`;
    countdownGrid.appendChild(card);
  });

  const currentDay = findCurrentDayId(now, start, end);
  todayAnchor.href = currentDay ? `#${currentDay}` : "#day-0";
  todayAnchor.textContent = currentDay ? "ไปวันที่กำลังเดินทาง" : "ดูแผนวันแรก";

  document.querySelectorAll(".day-card").forEach((card) => {
    card.classList.remove("is-current-day");
  });

  if (currentDay) {
    const currentCard = document.querySelector(`#${currentDay}`);
    currentCard?.classList.add("is-current-day");
  }
}

function findCurrentDayId(now, start, end) {
  if (now < start || now > end) {
    return "";
  }

  const tripDays = tripData.days.map((day, index) => {
    const base = new Date(tripData.tripStart);
    base.setHours(12, 0, 0, 0);
    base.setDate(base.getDate() + index);
    return { id: day.id, date: base };
  });

  const normalizedNow = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  const current = tripDays.find(({ date }) => {
    const normalized = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    return normalized.getTime() === normalizedNow.getTime();
  });

  return current?.id || "";
}

function applyTheme(theme) {
  document.body.dataset.theme = theme;
  const dark = theme === "dark";
  themeToggle.setAttribute("aria-pressed", String(dark));
  themeToggle.querySelector(".theme-icon").textContent = dark ? "☀" : "☾";
}

function initTheme() {
  const stored = localStorage.getItem(themeKey);
  const theme = stored === "dark" || stored === "light" ? stored : "light";
  applyTheme(theme);

  themeToggle.addEventListener("click", () => {
    const nextTheme = document.body.dataset.theme === "dark" ? "light" : "dark";
    localStorage.setItem(themeKey, nextTheme);
    applyTheme(nextTheme);
  });
}

function initPetals() {
  if (!petals) {
    return;
  }

  for (let index = 0; index < 18; index += 1) {
    const petal = document.createElement("span");
    petal.className = "petal";
    petal.style.left = `${Math.random() * 100}%`;
    petal.style.top = `${Math.random() * 40 - 20}%`;
    petal.style.animationDuration = `${8 + Math.random() * 8}s`;
    petal.style.animationDelay = `${Math.random() * 8}s`;
    petal.style.opacity = String(0.2 + Math.random() * 0.5);
    petals.appendChild(petal);
  }
}

function initSheet() {
  const backdrop = sheet.querySelector(".detail-backdrop");

  backdrop.addEventListener("click", (event) => {
    if (event.target === backdrop) {
      sheet.close();
    }
  });
}

function init() {
  renderHeroBits();
  renderDayNav();
  renderOverview();
  renderSummary();
  renderDays();
  initPetals();
  initNavObserver();
  initTheme();
  initSheet();
  updateCountdown();
  window.setInterval(updateCountdown, 1000);
}

init();
