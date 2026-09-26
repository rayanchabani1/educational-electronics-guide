const articles = [
  {
    id: "setup-laptop",
    title: "إعداد حاسب جديد من الصفر: خطوة بخطوة",
    category: "setup",
    difficulty: "مبتدئ",
    readTime: "8 دقائق",
    tags: ["Windows", "تهيئة", "حسابات"],
    summary:
      "تعلم كيفية تجهيز جهاز جديد بشكل صحيح، من إعداد الحساب الأولي إلى تثبيت البرامج الأساسية وضبط إعدادات الشبكة.",
    sections: [
      {
        heading: "1. التهيئة الأولية",
        content:
          "عند تشغيل الجهاز لأول مرة، اختر اللغة المناسبة، والمنطقة الزمنية، وقم بربط الشبكة. من المهم اختيار حساب مستخدم قوي مع كلمة مرور معقدة. هذه الخطوة تسمح لك بتفعيل حماية النظام ومنع فقدان البيانات في حال فقدان الجهاز.",
      },
      {
        heading: "2. إعدادات الشبكة والمزامنة",
        content:
          "بعد تشغيل الجهاز، قم بتوصيل شبكة Wi‑Fi أو Ethernet. ثم سجل الدخول إلى حساب Microsoft أو نظام التشغيل الخاص بك، وفعّل مزامنة الإعدادات مثل الحفظ التلقائي للملفات والهواتف. إذا كنت ستستخدم جهازًا للأعمال، فقم بتهيئة إعدادات الخصوصية.",
      },
      {
        heading: "3. تثبيت التطبيقات الأساسية",
        content:
          "ثبت متصفحًا موثوقًا، برنامج مكافحة فيروسات، تطبيقات المزامنة، وأدوات التخزين السحابي. لا تقم بتثبيت عدد كبير من التطبيقات في البداية؛ ركز على ما تحتاجه أنت فعليًا لتجنب إبطاء الأداء.",
      },
      {
        heading: "4. نصائح مهمة",
        content:
          "أنشئ عدة حسابات مستخدم في حالات العمل المشتركة، وقم بعمل نسخة احتياطية لبياناتك أولًا. تجنب استخدام كلمات مرور ضعيفة أو إعادة استخدام نفس كلمة المرور عبر أكثر من حساب.",
      }
    ]
  },
  {
    id: "setup-wireless",
    title: "إعداد أجهزة لاسلكية: الطابعات، الشاشات، والسماعات",
    category: "setup",
    difficulty: "متوسط",
    readTime: "10 دقائق",
    tags: ["Wi‑Fi", "Bluetooth", "أجهزة محيطية"],
    summary:
      "دليل عملي لتوصيل الأجهزة اللاسلكية بأمان، وتهيئة الاتصال بها ومنع التعارض بين الشبكات.",
    sections: [
      {
        heading: "1. البحث عن الجهاز",
        content:
          "ابدأ بتشغيل الجهاز اللاسلكي، ثم افتح إعدادات الشبكة أو Bluetooth من جهازك. تأكد من أن الجهاز في وضع الاكتشاف، ثم حدد اسمه من القائمة المتاحة. إذا لم يظهر، أعد تشغيل الجهاز أو أعد ضبط الاتصال.",
      },
      {
        heading: "2. ربط الجهاز بشكل آمن",
        content:
          "قم بربط الجهاز باستخدام رمز PIN أو رمز المرور المعروض في شاشة الجهاز. إذا كان الجهاز يدعم التوصيل الآمن، فقم بتمكينه لضمان عدم توصيل أجهزة غير موثوقة.",
      },
      {
        heading: "3. اختبار الاتصال",
        content:
          "اختبر الوظائف الأساسية مثل الطباعة، أو تشغيل الصوت، أو نقل الملفات. إذا كانت هناك مشكلات، افصل الاتصال ثم أعد ربطه، وتأكد أن الجهاز ليس على نفس اسم الشبكة المتكرر مع أجهزة أخرى قريبة.",
      },
      {
        heading: "4. عندما يحدث تعارض",
        content:
          "في بعض الأحيان تتعارض الأقراص المحمولة أو الطابعات مع شبكات Wi‑Fi متعددة. استخدم اسمًا فريدًا للشبكة، وقم بتحديث برامج التشغيل، واستبعد التداخل من الأجهزة القريبة.",
      }
    ]
  },
  {
    id: "setup-phone",
    title: "تهيئة الهاتف الذكي لأول مرة بطريقة احترافية",
    category: "setup",
    difficulty: "مبتدئ",
    readTime: "7 دقائق",
    tags: ["Android", "iPhone", "حسابات"],
    summary:
      "تعرف على أفضل طريقة لتهيئة الهاتف الجديد، من النسخ الاحتياطي إلى إعداد الحسابات المهمة.",
    sections: [
      {
        heading: "1. استعادة البيانات أو التهيئة",
        content:
          "إذا كان الهاتف جديدًا، اختر خيار 'إعداد كجهاز جديد' أو استعد نسخة احتياطية من جهاز قديم بالتنسيق الصحيح. هذا يقلل من الوقت ويسهل نقل التطبيقات والرسائل والصور.",
      },
      {
        heading: "2. إعداد الحسابات",
        content:
          "أضف حساب البريد الإلكتروني، متجر التطبيقات، وأي حسابات متعلقة بالتخزين السحابي. هذا يسمح لك بمزامنة البيانات وأداء النسخ الاحتياطي بشكل أكثر أمانًا.",
      },
      {
        heading: "3. الأمان",
        content:
          "فعّل قفل الشاشة، والبطاقة الحيوية أو بصمة الإصبع، وقم بتفعيل التحقق بخطوتين إذا كان متاحًا. هذه الميزة لا تقتصر على حماية الصور، بل تحمى الحسابات المصرفية وتطبيقات الدفع أيضًا.",
      },
      {
        heading: "4. تنظيم النظام",
        content:
          "جرّب تنظيم التطبيقات في مجلدات، وتفعيل أدوات توفير البطارية، وتحديث نظام التشغيل بشكل منتظم لتقليل المشاكل عند التحديثات القادمة.",
      }
    ]
  },
  {
    id: "files-structure",
    title: "تنظيم الملفات والمجلدات على الحاسب",
    category: "files",
    difficulty: "مبتدئ",
    readTime: "6 دقائق",
    tags: ["ملفات", "مجلدات", "تنظيم"],
    summary:
      "تعلم هيكلة ملفات منطقية داخل الحاسب بحيث يسهل التصفح، البحث، والنسخ الاحتياطي دون الفوضى.",
    sections: [
      {
        heading: "1. إنشاء بنية واضحة",
        content:
          "ابدأ بإنشاء مجلدات رئيسية مثل: المستندات، الصور، الفيديوهات، المشاريع، والنسخ الاحتياطية. هذه البنية تضمن سهولة الوصول وتجنب تشتت الملفات داخل سطح المكتب.",
      },
      {
        heading: "2. تسمية الملفات بشكل منتظم",
        content:
          "استخدم أسماء واضحة مثل '2026-09-Project-Report.pdf' بدلًا من أسماء عشوائية. لا تخلط بين الأرقام والحروف أو تترك اسم الملف بلا معنى، لأن ذلك يسبب إهدار الوقت عند البحث.",
      },
      {
        heading: "3. استخدام المجلدات الثانوية",
        content:
          "داخل كل مشروع، حافظ على مجلدات فرعية مثل 'النسخ', 'مخرجات التنفيذ', 'الصور', و'الملاحظات'. هذه الطريقة ترفع الكفاءة وتقلل من الخلط.",
      },
      {
        heading: "4. توضيح أفضل الممارسات",
        content:
          "احذف الملفات المكررة بانتظام، ولا تجعل سطح المكتب مستودعًا لكل شيء. هذا لا يريح العين فقط، بل يخفف الضغط على النظام ويجعل النسخ الاحتياطي أسرع.",
      }
    ]
  },
  {
    id: "files-backup",
    title: "النسخ الاحتياطي الآمن للملفات المهمة",
    category: "files",
    difficulty: "متوسط",
    readTime: "9 دقائق",
    tags: ["نسخ احتياطي", "Cloud", "حماية البيانات"],
    summary:
      "تعرف على كيفية إنشاء نسخة احتياطية آمنة للملفات دون خسارة كبيرة في الوقت أو البيانات.",
    sections: [
      {
        heading: "1. تحديد ما يجب نسخه احتياطيًا",
        content:
          "حدد بياناتك المهمة مثل المستندات، صور العائلة، ملفات المشروع، والتقارير. قد لا تحتاج إلى نسخ كل شيء، لكن الملفات الحيوية تحتاج إلى حماية متكررة ومحددة.",
      },
      {
        heading: "2. حل النسخ الاحتياطي",
        content:
          "استخدم محرك أقراص خارجي أو خدمة سحابية مع تشفير. يفضل وجود نسختين: نسخة محلية ونسخة سحابية. هذا يضمن استعادة البيانات حتى لو تعطل أحد الوسائط.",
      },
      {
        heading: "3. جدولة النسخ الاحتياطي",
        content:
          "قم بتحديد وقت دوري مثل كل يوم أو كل أسبوع، حسب حيوية البيانات. هذا يخفف العبء على الجهاز ويحافظ على الملفات حتى لو حدث خطأ مفاجئ.",
      },
      {
        heading: "4. التحقق من الاستعادة",
        content:
          "من المهم اختبار استعادة نسخة احتياطية مرة في الشهر. لا تكفي النسخ الاحتياطية إن لم يتم التأكد أنها قابلة للاسترجاع عندما تحتاجها.",
      }
    ]
  },
  {
    id: "files-storage",
    title: "إدارة التخزين: حذف الملفات الزائدة وتهيئة المساحة",
    category: "files",
    difficulty: "مبتدئ",
    readTime: "7 دقائق",
    tags: ["تخزين", "حذف", "مساحة"],
    summary:
      "تعرف على طريقة تنظيف المساحة داخل الجهاز دون التأثير على البيانات المهمة أو الأنظمة الأساسية.",
    sections: [
      {
        heading: "1. تحليل مساحة التخزين",
        content:
          "افتح إدارة التخزين لمعرفة أين تستهلك أكبر مساحة. غالبًا يكون سببها الصور، الفيديوهات، الملفات المؤرشفة، أو البرامج الثقيلة.",
      },
      {
        heading: "2. تنظيف الملفات غير الضرورية",
        content:
          "احذف الملفات المكررة، وملفات التنزيل القديمة، وسجل التصفح المؤرشفة، وتطبيقات لم تعد تستخدمها. لا تحذف ملفات النظام أو مكونات التشغيل الأساسية.",
      },
      {
        heading: "3. ضغط الملفات",
        content:
          "استخدم ضغط الملفات عند الحاجة، خاصةً للمستندات الكبيرة والفيديوهات. هذا يقلل حجم التخزين مع الحفاظ على الجودة إذا كانت الملفات من النوع المناسب.",
      },
      {
        heading: "4. نصيحة احترافية",
        content:
          "الاحتفاظ بمساحة خالية يساعد النظام على العمل بشكل أسرع. أي زيادة في استخدام التخزين قد تؤدي إلى بطء الأداء أو تعليق التطبيقات.",
      }
    ]
  },
  {
    id: "updates-why",
    title: "لماذا تحتاج التحديثات؟ وكيف تؤثر على النظام؟",
    category: "updates",
    difficulty: "مبتدئ",
    readTime: "8 دقائق",
    tags: ["تحديثات", "الأمان", "الاستقرار"],
    summary:
      "اكتشف مفهوم التحديثات، وكيفية الاستفادة منها دون إضاعة الوقت أو تعريض النظام للخطر.",
    sections: [
      {
        heading: "1. ما هي التحديثات؟",
        content:
          "التحديثات هي ترقيات للنظام أو البرامج تتضمن إصلاحات للأخطاء، تحسينات للأمان، أو ميزات جديدة. وهي تمثل العنصر الحيوي لحماية الأجهزة والوظائف الأساسية.",
      },
      {
        heading: "2. لماذا لا تتجاهلها؟",
        content:
          "التجاهل المتكرر للتحديثات يترك الجهاز معرضًا للاختراق أو الأعطال. بعض الثغرات الأمنية تظل مفتوحة لأيام طويلة إذا لم يتم تحديث النظام والتطبيقات.",
      },
      {
        heading: "3. أفضل وقت للتحديث",
        content:
          "من الأفضل تحديث الجهاز عندما يكون هناك وقت كافٍ، ولا تكون هناك مهام حرجة. غالبًا يكون التحديث الليلي أو نهاية اليوم مناسبًا إذا كانت الملفات محفوظة ونظام الاسترداد جاهزًا.",
      },
      {
        heading: "4. نصائح عملية",
        content:
          "قم بعمل نسخة احتياطية قبل التحديثات الكبيرة. إذا كان الجهاز مهمًا جدًا، تأكد من أن بطارية الجهاز مشحونة أو موصولة بمصدر كهربائي.",
      }
    ]
  },
  {
    id: "updates-troubleshoot",
    title: "حل المشكلات بعد التحديث: ما الذي يجب فعله أولًا؟",
    category: "updates",
    difficulty: "متوسط",
    readTime: "9 دقائق",
    tags: ["استكشاف أخطاء", "تحديث", "إصلاحات"],
    summary:
      "دليل سريع لتحديد المشكلات الشائعة بعد التحديث ومراحل الاستكشاف السريعة دون قضاء وقت طويل.",
    sections: [
      {
        heading: "1. مشاكل البطارية أو التسارع",
        content:
          "إذا لاحظت زيادة في استهلاك البطارية أو بطء الأداء بعد التحديث، فافحص التطبيقات الحديثة، واستخدم مدير المهام، وأغلق التطبيقات الثقيلة. بعض التحديثات تسبب حركة كبيرة في الخلفية مؤقتًا.",
      },
      {
        heading: "2. تعطل الطابعة أو الشبكة",
        content:
          "في بعض الأجهزة، يحتاج برنامج التشغيل إلى إعادة تثبيت أو تحديث إضافي. قم بفحص إعدادات الشبكة والطابعة، وأعد تشغيل الجهاز ثم أعد الاتصال.",
      },
      {
        heading: "3. تطبيقات لا تفتح",
        content:
          "عند وجود تطبيقات لا تفتح، حاول إعادة التشغيل أولًا. إذا استمرت المشكلة، تحقق من تحديث التطبيق، أو قم بإعادة تثبيته فقط إذا كنت متأكدًا من احتياجك له.",
      },
      {
        heading: "4. استعادة النظام",
        content:
          "إذا كان التحديث قد تسبب في تعطل كبير، استخدم نقطة الاستعادة التي أنشأتها مسبقًا أو خيار استعادة النظام إلى حالة سابقة. هذا عادةً حل سريع ومؤثر.",
      }
    ]
  },
  {
    id: "security-protection",
    title: "حماية الأجهزة من التهديدات والبرامج الضارة",
    category: "security",
    difficulty: "متوسط",
    readTime: "10 دقائق",
    tags: ["أمان", "فيروسات", "حماية"],
    summary:
      "تعلم المبادئ الأساسية لحماية جهازك من التهديدات الرقمية، مع خطوات عملية لاستهلاك وقت قليل.",
    sections: [
      {
        heading: "1. التحديثات كطبقة دفاعية",
        content:
          "قم بتحديث نظام التشغيل، ومتصفح الإنترنت، وبرامج الأمان بشكل دوري. هذه التحديثات تحتوي على تصحيحات للثغرات المعروفة، وهي أول خطوة فعالة في الحماية.",
      },
      {
        heading: "2. التحقق من الروابط والملفات",
        content:
          "احذر الروابط الغامضة، والملفات التي تأتي عبر الرسائل أو التطبيقات غير المعروفة. غالبًا ما تبدأ الهجمات عبر تنزيل غير آمن أو رابط مشبوه.",
      },
      {
        heading: "3. التحقق الثنائي",
        content:
          "فعل خاصية التحقق بخطوتين في الحسابات الأساسية؛ فهذا يقلل خطر اختراق الحسابات حتى لو تم سرقة كلمة المرور.",
      },
      {
        heading: "4. الممارسة اليومية",
        content:
          "استخدم كلمة مرور قوية لكل حساب، وقم بمراجعة الأجهزة المتصلة بالنطاق المحلي، وحافظ على ملفاتي مغطاة بآلية نسخ احتياطي موثوقة.",
      }
    ]
  },
  {
    id: "security-performance",
    title: "تحسين أداء الجهاز دون إهدار المزايا",
    category: "security",
    difficulty: "متوسط",
    readTime: "8 دقائق",
    tags: ["أداء", "سرعة", "مراقبة"],
    summary:
      "تعرف على طريقة تحسين سرعة الجهاز بطرق آمنة وفعالة، مع الحفاظ على الاستقرار وسلامة البيانات.",
    sections: [
      {
        heading: "1. تنظيف البرامج الثقيلة",
        content:
          "راجع التطبيقات الثقيلة والبرامج التي لا تستخدمها كثيرًا. إذا كانت مستهلكة للطاقة أو تستهلك مساحة كبيرة، فهذه هي أولئك التي تضعف الأداء.",
      },
      {
        heading: "2. ضبط الخدمات الخلفية",
        content:
          "تأكد من أن التطبيقات لا تبدأ تلقائيًا عند التشغيل دون داع. هذا يقلل الحمل على الذاكرة واستهلاك المعالج، خاصة في الأجهزة المحمولة.",
      },
      {
        heading: "3. أدوات الصيانة الدورية",
        content:
          "قم بملفات النظام وتخزين التطبيق بانتظام، وفعّل عمليات المسح الروتيني. هذه الخطوات تضمن أن يظل الجهاز سريعًا وثابتًا خلال الأسابيع القادمة.",
      },
      {
        heading: "4. التوازن بين السرعة والأمان",
        content:
          "ليس من الضروري إيقاف كل حماية أو تشغيليًا. الأفضل هو التوازن: تحديثات منتظمة، تنظيف دوري، وتثبيت التطبيقات من مصادر موثوقة فقط.",
      }
    ]
  }
];

const articleGrid = document.getElementById("articleGrid");
const articleDetail = document.getElementById("articleDetail");
const searchInput = document.getElementById("searchInput");
const resultLabel = document.getElementById("resultLabel");
const articleCount = document.getElementById("article-count");
const navButtons = document.querySelectorAll(".nav-item");
const sidebar = document.getElementById("sidebar");
const menuToggle = document.getElementById("menuToggle");

let activeFilter = "all";
let activeArticleId = articles[0].id;

function renderCards(items) {
  articleGrid.innerHTML = "";

  if (!items.length) {
    articleGrid.innerHTML = `
      <div class="article-card">
        <h4>لا توجد نتائج</h4>
        <p>حاول البحث بكلمة مختلفة أو اختر فئة أخرى.</p>
      </div>
    `;
    return;
  }

  items.forEach((article) => {
    const card = document.createElement("div");
    card.className = `article-card ${article.id === activeArticleId ? "active" : ""}`;
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");
    card.innerHTML = `
      <div class="card-top">
        <span class="badge">${article.category}</span>
        <span class="meta">${article.readTime}</span>
      </div>
      <h4>${article.title}</h4>
      <p>${article.summary}</p>
      <div class="tags">
        ${article.tags.map((tag) => `<span>${tag}</span>`).join("")}
      </div>
    `;

    card.addEventListener("click", () => {
      activeArticleId = article.id;
      renderCards(getFilteredArticles());
      renderArticle(article);
    });

    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        activeArticleId = article.id;
        renderCards(getFilteredArticles());
        renderArticle(article);
      }
    });

    articleGrid.appendChild(card);
  });
}

function getFilteredArticles() {
  const query = searchInput.value.trim().toLowerCase();

  return articles.filter((article) => {
    const matchesFilter =
      activeFilter === "all" || article.category === activeFilter;

    const matchesSearch =
      !query ||
      article.title.toLowerCase().includes(query) ||
      article.summary.toLowerCase().includes(query) ||
      article.tags.some((tag) => tag.toLowerCase().includes(query));

    return matchesFilter && matchesSearch;
  });
}

function renderArticle(article) {
  const toc = article.sections
    .map((section, index) => `<li><a href="#section-${index + 1}">${section.heading}</a></li>`)
    .join("");

  articleDetail.innerHTML = `
    <div class="detail-content">
      <header class="detail-header">
        <h2>${article.title}</h2>
        <div class="detail-meta">
          <span>📘 ${article.difficulty}</span>
          <span>⏱️ ${article.readTime}</span>
          <span>🏷️ ${article.category}</span>
        </div>
      </header>

      <div class="detail-summary">
        ${article.summary}
      </div>

      <nav class="toc" aria-label="جدول المحتويات">
        <h4>جدول المحتويات</h4>
        <ul>${toc}</ul>
      </nav>

      ${article.sections
        .map(
          (section, index) => `
            <section id="section-${index + 1}" class="section-block">
              <h3>${section.heading}</h3>
              <p>${section.content}</p>
            </section>
          `
        )
        .join("")}

      <div class="emphasis">
        ملاحظة: هذا المحتوى نموذج تجريبي يسهّل إضافة مقالات جديدة ومختلفة بسهولة عند الحاجة.
      </div>

      <div class="warning">
        نصيحة: قبل تطبيق أي تغيير جاد على جهازك، احتفظ بنسخة احتياطية من البيانات المهمة.
      </div>
    </div>
  `;
}

function updateResults() {
  const filtered = getFilteredArticles();
  resultLabel.textContent =
    activeFilter === "all"
      ? `كل المقالات (${filtered.length})`
      : `${activeFilter} (${filtered.length})`;

  articleCount.textContent = String(filtered.length);

  if (!filtered.length) {
    articleDetail.innerHTML = `
      <div class="detail-placeholder">
        <div>
          <h3>لا توجد نتائج</h3>
          <p>حاول استخدام كلمات أخرى أو تغيير الفئة المختارة.</p>
        </div>
      </div>
    `;
    return;
  }

  const selectedArticle =
    filtered.find((item) => item.id === activeArticleId) || filtered[0];
  activeArticleId = selectedArticle.id;

  renderCards(filtered);
  renderArticle(selectedArticle);
}

navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    navButtons.forEach((btn) => btn.classList.toggle("active", btn === button));
    updateResults();
  });
});

searchInput.addEventListener("input", () => {
  updateResults();
});

menuToggle.addEventListener("click", () => {
  sidebar.classList.toggle("collapsed");
});

articleCount.textContent = String(articles.length);
updateResults();
