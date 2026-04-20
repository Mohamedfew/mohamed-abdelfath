// courses-data.js - قاعدة بيانات جميع الكورسات الـ 12

const coursesDatabase = {
    // ========== كورس 1: HTML ==========
    "html-beginners": {
        id: 1,
        slug: "html-beginners",
        title: "كورس HTML للمبتدئين",
        shortDesc: "ابدأ من الأساسيات بتعلم مبادئ HTML — فهي خطوة مهمة لبناء وتعديل صفحات الويب.",
        fullDesc: "معلومة ممتعة: جميع المواقع تستخدم HTML — حتى هذا الموقع. فهي جزء أساسي من أدوات كل مطور ويب. توفّر HTML المحتوى الذي يمنح صفحات الويب بنيتها وتنظيمها؛ فمن خلال العناصر (Elements) والوسوم (Tags) يمكنك إضافة النصوص، الصور، الفيديوهات، النماذج، والمزيد. تعلّم أساسيات HTML هو الخطوة الأولى المهمة في رحلتك لتطوير الويب، ومهارة أساسية لمطوري الواجهة الأمامية والخلفية.",
        price: 0,
        oldPrice: 20,
        isFree: true,
        rating: 4.55,
        students: "5.8L+",
        level: "مبتدئ",
        duration: "2.0 ساعات",
        lectures: 4,
        language: "عربي",
        deadline: "مدى الحياة",
        certificate: "نعم",
        enrolled: 240,
        instructor: {
            name: "محمد عبد الفتاح",
            title: "مطور برامج",
            bio: "مدير المنهج في Codecademy ومبتكر تقنيات إبداعية. قام بتصميم مجموعة من دورات Codecademy، بما في ذلك: تعلم HTML، تعلم C#، تعلم Alexa، والدورة المبتدئة Learn How to Code.",
            rating: 4.87,
            reviews: 1533,
            students: 20,
            courses: 29,
            image: "img/1.png"
        },
        image: "img/course-1.jpg",
        skills: [
            "إنشاء هيكل الصفحات باستخدام HTML",
            "عرض البيانات باستخدام الجداول",
            "كتابة كود HTML منظم وواضح"
        ],
        curriculum: [
            {
                title: "العناصر والبنية",
                lessons: ["مقدمة في HTML", "معايير مستند HTML"]
            },
            {
                title: "جداول",
                lessons: ["جداول HTML"]
            },
            {
                title: "نماذج",
                lessons: ["نماذج HTML", "التحقق من صحة النماذج"]
            },
            {
                title: "هيكلة صفحات الويب بطريقة معنوية",
                lessons: ["هيكلة صفحات الويب بطريقة معنوية"]
            }
        ]
    },
    
    // ========== كورس 2: CSS ==========
    "css-beginners": {
        id: 2,
        slug: "css-beginners",
        title: "تطوير الواجهة الأمامية - CSS",
        shortDesc: "تعلم أساسيات CSS لتنسيق وتصميم صفحات الويب بشكل احترافي وجذاب.",
        fullDesc: "CSS هي لغة تصميم مواقع الويب التي تتحكم في مظهر الصفحات. ستتعلم في هذا الكورس كيفية تنسيق العناصر، الألوان، الخطوط، والتخطيطات المتجاوبة. CSS تجعل موقعك يبدو جميلاً واحترافياً، وهي مهارة أساسية لأي مطور ويب.",
        price: 199,
        oldPrice: 499,
        isFree: false,
        rating: 4.55,
        students: "5.2L+",
        level: "مبتدئ",
        duration: "4.0 ساعات",
        lectures: 8,
        language: "عربي",
        deadline: "مدى الحياة",
        certificate: "نعم",
        enrolled: 520,
        instructor: {
            name: "أحمد سمير",
            title: "مطور واجهات أمامية",
            bio: "مطور ويب محترف بخبرة 8 سنوات في تطوير الواجهات الأمامية. درّب أكثر من 5000 طالب على تصميم المواقع. حاصل على شهادات معتمدة في CSS المتقدم و frameworks.",
            rating: 4.8,
            reviews: 2100,
            students: 45,
            courses: 12,
            image: "img/instructor-2.jpg"
        },
        image: "img/course-2.jpg",
        skills: [
            "تنسيق النصوص والألوان والخطوط",
            "إنشاء تخطيطات مرنة باستخدام Flexbox و Grid",
            "تصميم متجاوب مع جميع الأجهزة",
            "التحريك والانتقالات CSS"
        ],
        curriculum: [
            {
                title: "أساسيات CSS",
                lessons: ["مقدمة في CSS", "طرق إضافة CSS", "المحددات", "الألوان والخلفيات"]
            },
            {
                title: "التخطيطات",
                lessons: ["نموذج الصندوق", "Flexbox", "CSS Grid", "وضعية العناصر"]
            },
            {
                title: "التصميم المتجاوب",
                lessons: ["Media Queries", "وحدات القياس", "الصور المتجاوبة"]
            },
            {
                title: "التحريك والتأثيرات",
                lessons: ["الانتقالات", "التحريك", "التأثيرات ثلاثية الأبعاد"]
            }
        ]
    },
    
    // ========== كورس 3: JavaScript ==========
    "javascript-beginners": {
        id: 3,
        slug: "javascript-beginners",
        title: "مقدمة إلى جافا سكريبت",
        shortDesc: "تعلم لغة البرمجة الأكثر شهرة لإضافة التفاعلية إلى مواقع الويب.",
        fullDesc: "جافا سكريبت هي لغة البرمجة التي تجعل مواقع الويب تفاعلية. ستتعلم في هذا الكورس أساسيات البرمجة وكيفية التعامل مع المتغيرات، الدوال، الأحداث، والـ DOM. جافا سكريبت هي اللغة الأكثر طلباً في سوق العمل.",
        price: 0,
        oldPrice: 299,
        isFree: true,
        rating: 4.46,
        students: "76L+",
        level: "مبتدئ",
        duration: "2.5 ساعات",
        lectures: 6,
        language: "عربي",
        deadline: "مدى الحياة",
        certificate: "نعم",
        enrolled: 760,
        instructor: {
            name: "نورهان سمير",
            title: "مهندسة برمجيات",
            bio: "مهندسة برمجيات بخبرة 6 سنوات في تطوير تطبيقات الويب. شغوفة بتعليم البرمجة للمبتدئين. عملت في كبرى شركات البرمجيات في الشرق الأوسط.",
            rating: 4.7,
            reviews: 1850,
            students: 32,
            courses: 8,
            image: "img/team-2.jpg"
        },
        image: "img/course-3.jpg",
        skills: [
            "أساسيات البرمجة والمتغيرات",
            "التعامل مع الدوال والأحداث",
            "التحكم في DOM",
            "التعامل مع APIs"
        ],
        curriculum: [
            {
                title: "أساسيات JavaScript",
                lessons: ["المتغيرات وأنواع البيانات", "الدوال", "الجمل الشرطية", "الحلقات"]
            },
            {
                title: "التفاعل مع الصفحة",
                lessons: ["التعامل مع DOM", "الأحداث", "تحديث المحتوى ديناميكياً", "النماذج والتحقق"]
            },
            {
                title: "المتقدم",
                lessons: ["المصفوفات", "الكائنات", "Local Storage", "API"]
            }
        ]
    },
    
    // ========== كورس 4: Python ==========
    "python-beginners": {
        id: 4,
        slug: "python-beginners",
        title: "برمجة بايثون",
        shortDesc: "تعلم لغة بايثون القوية والمستخدمة في مجالات عديدة مثل الذكاء الاصطناعي وعلوم البيانات.",
        fullDesc: "بايثون هي لغة برمجة عالية المستوى وسهلة التعلم. تستخدم في تطوير الويب، تحليل البيانات، الذكاء الاصطناعي، الأتمتة، والمزيد. تعتبر بايثون من أكثر اللغات طلباً في سوق العمل حالياً.",
        price: 299,
        oldPrice: 599,
        isFree: false,
        rating: 3.54,
        students: "3.3L+",
        level: "مبتدئ",
        duration: "3.0 ساعات",
        lectures: 7,
        language: "عربي",
        deadline: "مدى الحياة",
        certificate: "نعم",
        enrolled: 330,
        instructor: {
            name: "محمود رضا",
            title: "خبير بيانات",
            bio: "خبير في علم البيانات والذكاء الاصطناعي. عمل في كبرى شركات التكنولوجيا. حاصل على درجة الماجستير في علوم البيانات.",
            rating: 4.5,
            reviews: 950,
            students: 28,
            courses: 6,
            image: "img/team-3.jpg"
        },
        image: "img/course-4.jpg",
        skills: [
            "أساسيات لغة بايثون",
            "البرمجة الكائنية",
            "التعامل مع الملفات",
            "مكتبات بايثون الأساسية"
        ],
        curriculum: [
            {
                title: "أساسيات بايثون",
                lessons: ["المتغيرات وأنواع البيانات", "الجمل الشرطية", "الحلقات", "الدوال"]
            },
            {
                title: "البرمجة المتقدمة",
                lessons: ["البرمجة الكائنية", "التعامل مع الملفات", "المكتبات الأساسية"]
            },
            {
                title: "مشروع تطبيقي",
                lessons: ["بناء تطبيق بسيط", "التعامل مع APIs", "تحليل البيانات"]
            }
        ]
    },
    
    // ========== كورس 5: SQL ==========
    "sql-beginners": {
        id: 5,
        slug: "sql-beginners",
        title: "لغة SQL لعلوم البيانات",
        shortDesc: "تعلم كيفية التعامل مع قواعد البيانات واستعلامات SQL لتحليل البيانات.",
        fullDesc: "SQL هي لغة استعلام قواعد البيانات. ستتعلم في هذا الكورس كيفية إنشاء وإدارة قواعد البيانات، كتابة الاستعلامات، وتحليل البيانات. SQL هي مهارة أساسية لأي محلل بيانات أو مطور.",
        price: 0,
        oldPrice: 399,
        isFree: true,
        rating: 4.54,
        students: "1.3L+",
        level: "متوسط",
        duration: "5.0 ساعات",
        lectures: 10,
        language: "عربي",
        deadline: "مدى الحياة",
        certificate: "نعم",
        enrolled: 130,
        instructor: {
            name: "سارة خالد",
            title: "محللة بيانات",
            bio: "محللة بيانات معتمدة بخبرة 5 سنوات في تحليل البيانات واستخراج الرؤى. عملت في قطاع البنوك والتجارة الإلكترونية.",
            rating: 4.9,
            reviews: 720,
            students: 15,
            courses: 4,
            image: "img/team-1.jpg"
        },
        image: "img/course-5.jpg",
        skills: [
            "إنشاء قواعد البيانات",
            "كتابة استعلامات SQL",
            "تحليل البيانات",
            "الربط بين الجداول"
        ],
        curriculum: [
            {
                title: "أساسيات SQL",
                lessons: ["مقدمة في قواعد البيانات", "جمل SELECT", "جمل WHERE", "جمل ORDER BY"]
            },
            {
                title: "استعلامات متقدمة",
                lessons: ["الربط بين الجداول (JOIN)", "الدوال المجمعة", "تجميع البيانات", "تحسين أداء الاستعلامات"]
            },
            {
                title: "التطبيقات العملية",
                lessons: ["تحليل بيانات حقيقية", "إنشاء تقارير", "أفضل الممارسات"]
            }
        ]
    },
    
    // ========== كورس 6: Statistics ==========
    "statistics-beginners": {
        id: 6,
        slug: "statistics-beginners",
        title: "إحصاءات لعلوم البيانات",
        shortDesc: "تعلم أساسيات الإحصاء المستخدمة في تحليل البيانات وعلوم البيانات.",
        fullDesc: "الإحصاء هو أساس علم البيانات. ستتعلم في هذا الكورس المفاهيم الإحصائية الأساسية مثل المقاييس، التوزيعات، الاحتمالات، واختبار الفرضيات. هذه المهارات ضرورية لأي عالم بيانات.",
        price: 0,
        oldPrice: 449,
        isFree: true,
        rating: 3.55,
        students: "3.5L+",
        level: "مبتدئ",
        duration: "4.5 ساعات",
        lectures: 9,
        language: "عربي",
        deadline: "مدى الحياة",
        certificate: "نعم",
        enrolled: 350,
        instructor: {
            name: "د. ياسمين علي",
            title: "أستاذة إحصاء",
            bio: "دكتورة في الإحصاء الرياضي من جامعة القاهرة. لها أكثر من 15 بحثاً علمياً في مجال الإحصاء التطبيقي وعلوم البيانات.",
            rating: 4.7,
            reviews: 890,
            students: 25,
            courses: 7,
            image: "img/team-4.jpg"
        },
        image: "img/course-6.jpg",
        skills: [
            "المقاييس الإحصائية",
            "التوزيعات الاحتمالية",
            "اختبار الفرضيات",
            "تحليل الارتباط"
        ],
        curriculum: [
            {
                title: "المقاييس الإحصائية",
                lessons: ["المتوسط والوسيط والمنوال", "الانحراف المعياري", "التباين", "المدى الربيعي"]
            },
            {
                title: "الاحتمالات والتوزيعات",
                lessons: ["أساسيات الاحتمالات", "التوزيع الطبيعي", "التوزيع ذو الحدين"]
            },
            {
                title: "اختبار الفرضيات",
                lessons: ["اختبار t", "اختبار مربع كاي", "تحليل التباين", "اختبار الارتباط"]
            }
        ]
    },
    
    // ========== كورس 7: AWS ==========
    "aws-beginners": {
        id: 7,
        slug: "aws-beginners",
        title: "خدمات أمازون السحابية للمبتدئين",
        shortDesc: "تعلم أساسيات الحوسبة السحابية باستخدام خدمات AWS.",
        fullDesc: "AWS هي منصة الحوسبة السحابية الرائدة. ستتعلم في هذا الكورس المفاهيم الأساسية وكيفية استخدام خدمات AWS الرئيسية مثل EC2 و S3 و IAM. الحوسبة السحابية هي مستقبل التكنولوجيا.",
        price: 0,
        oldPrice: 499,
        isFree: true,
        rating: 4.53,
        students: "1L+",
        level: "مبتدئ",
        duration: "3.0 ساعات",
        lectures: 6,
        language: "عربي",
        deadline: "مدى الحياة",
        certificate: "نعم",
        enrolled: 100,
        instructor: {
            name: "خالد عبدالله",
            title: "مهندس سحابة معتمد AWS",
            bio: "مهندس سحابة معتمد من AWS بخبرة 7 سنوات في تصميم وإدارة البنية التحتية السحابية. حاصل على شهادات AWS Solutions Architect و Developer.",
            rating: 4.8,
            reviews: 450,
            students: 22,
            courses: 5,
            image: "img/instructor-1.jpg"
        },
        image: "img/course-7.jpg",
        skills: [
            "مفاهيم الحوسبة السحابية",
            "خدمات EC2 و S3",
            "إدارة المستخدمين IAM",
            "إعداد الخوادم الافتراضية"
        ],
        curriculum: [
            {
                title: "مقدمة في AWS",
                lessons: ["ما هي الحوسبة السحابية", "إنشاء حساب AWS", "لوحة التحكم", "نظرة عامة على الخدمات"]
            },
            {
                title: "الخدمات الأساسية",
                lessons: ["خدمة EC2 (الخوادم)", "خدمة S3 (التخزين)", "خدمة IAM (المستخدمين)", "خدمة VPC (الشبكات)"]
            },
            {
                title: "التطبيقات العملية",
                lessons: ["إطلاق أول خادم", "تخزين الملفات", "إدارة الصلاحيات"]
            }
        ]
    },
    
    // ========== كورس 8: Microsoft Azure ==========
    "azure-beginners": {
        id: 8,
        slug: "azure-beginners",
        title: "أساسيات مايكروسوفت ازور",
        shortDesc: "تعلم أساسيات منصة مايكروسوفت ازور السحابية.",
        fullDesc: "Microsoft Azure هي منصة الحوسبة السحابية من مايكروسوفت. ستتعلم في هذا الكورس المفاهيم الأساسية وكيفية استخدام خدمات Azure الرئيسية مثل Virtual Machines، Blob Storage، و Azure Active Directory.",
        price: 149,
        oldPrice: 399,
        isFree: false,
        rating: 4.64,
        students: "4.4L+",
        level: "متوسط",
        duration: "3.5 ساعات",
        lectures: 7,
        language: "عربي",
        deadline: "مدى الحياة",
        certificate: "نعم",
        enrolled: 440,
        instructor: {
            name: "أحمد محمود",
            title: "مهندس سحابة Azure",
            bio: "مهندس سحابة معتمد من Microsoft Azure. له خبرة 6 سنوات في تصميم وتنفيذ حلول سحابية للشركات الكبرى.",
            rating: 4.7,
            reviews: 680,
            students: 18,
            courses: 4,
            image: "img/instructor-3.jpg"
        },
        image: "img/course-8.jpg",
        skills: [
            "مفاهيم Azure الأساسية",
            "الآلات الافتراضية",
            "التخزين السحابي",
            "إدارة الهوية"
        ],
        curriculum: [
            {
                title: "مقدمة في Azure",
                lessons: ["ما هو Microsoft Azure", "إنشاء حساب Azure", "بوابة Azure"]
            },
            {
                title: "الخدمات الأساسية",
                lessons: ["Virtual Machines", "Blob Storage", "Azure Active Directory", "Azure Functions"]
            },
            {
                title: "التطبيقات العملية",
                lessons: ["إنشاء أول VM", "تخزين الملفات", "إدارة المستخدمين"]
            }
        ]
    },
    
    // ========== كورس 9: MS Excel ==========
    "excel-beginners": {
        id: 9,
        slug: "excel-beginners",
        title: "مقدمة إلى برنامج مايكروسوفت إكسل",
        shortDesc: "تعلم أساسيات Excel لتحليل البيانات وإنشاء الجداول والرسوم البيانية.",
        fullDesc: "Excel هو برنامج جداول البيانات الأكثر شهرة في العالم. ستتعلم في هذا الكورس كيفية إنشاء الجداول، استخدام الصيغ والدوال، إنشاء الرسوم البيانية، وتحليل البيانات. Excel مهارة أساسية في أي مجال.",
        price: 0,
        oldPrice: 199,
        isFree: true,
        rating: 4.60,
        students: "4.2L+",
        level: "مبتدئ",
        duration: "3.5 ساعات",
        lectures: 8,
        language: "عربي",
        deadline: "مدى الحياة",
        certificate: "نعم",
        enrolled: 420,
        instructor: {
            name: "منى السيد",
            title: "خبيرة Excel",
            bio: "خبيرة في برامج مايكروسوفت أوفيس معتمدة من Microsoft. لها خبرة 10 سنوات في تدريب الشركات على استخدام Excel.",
            rating: 4.9,
            reviews: 1200,
            students: 50,
            courses: 10,
            image: "img/team-5.jpg"
        },
        image: "img/course-9.jpg",
        skills: [
            "إنشاء الجداول وتنسيقها",
            "استخدام الصيغ والدوال",
            "إنشاء الرسوم البيانية",
            "تحليل البيانات"
        ],
        curriculum: [
            {
                title: "أساسيات Excel",
                lessons: ["واجهة Excel", "إدخال البيانات", "تنسيق الخلايا", "التنقل بين الأوراق"]
            },
            {
                title: "الصيغ والدوال",
                lessons: ["الصيغ الأساسية", "دوال الجمع والمتوسط", "دوال IF", "دوال البحث"]
            },
            {
                title: "الرسوم البيانية والتحليل",
                lessons: ["إنشاء الرسوم البيانية", "تنسيق الرسوم", "الجداول المحورية", "تحليل البيانات"]
            }
        ]
    },
    
    // ========== كورس 10: Data Science ==========
    "data-science-beginners": {
        id: 10,
        slug: "data-science-beginners",
        title: "أساسيات علم البيانات",
        shortDesc: "تعلم أساسيات علم البيانات وكيفية استخراج الرؤى من البيانات.",
        fullDesc: "علم البيانات هو مجال متعدد التخصصات يستخدم الأساليب العلمية والخوارزميات لاستخراج المعرفة من البيانات. ستتعلم في هذا الكورس أساسيات علم البيانات وكيفية تطبيقها على مشاكل حقيقية.",
        price: 299,
        oldPrice: 699,
        isFree: false,
        rating: 4.55,
        students: "5.3L+",
        level: "متوسط",
        duration: "2.5 ساعات",
        lectures: 6,
        language: "عربي",
        deadline: "مدى الحياة",
        certificate: "نعم",
        enrolled: 530,
        instructor: {
            name: "د. محمد حسن",
            title: "عالم بيانات",
            bio: "عالم بيانات معتمد من IBM. دكتوراه في علوم الحاسب تخصص ذكاء اصطناعي. عمل في مشاريع بحثية وتطبيقية في مجال البيانات الضخمة.",
            rating: 4.8,
            reviews: 1500,
            students: 35,
            courses: 8,
            image: "img/instructor-4.jpg"
        },
        image: "img/course-10.jpg",
        skills: [
            "مفاهيم علم البيانات",
            "تحليل البيانات الاستكشافي",
            "التعلم الآلي الأساسي",
            "تصور البيانات"
        ],
        curriculum: [
            {
                title: "مقدمة في علم البيانات",
                lessons: ["ما هو علم البيانات", "مراحل دورة حياة البيانات", "أدوات علم البيانات"]
            },
            {
                title: "تحليل البيانات",
                lessons: ["تحليل البيانات الاستكشافي", "تنظيف البيانات", "الإحصاء في علم البيانات"]
            },
            {
                title: "مقدمة في التعلم الآلي",
                lessons: ["التصنيف", "التجميع", "تقييم النماذج", "مشروع عملي"]
            }
        ]
    },
    
    // ========== كورس 11: Java ==========
    "java-beginners": {
        id: 11,
        slug: "java-beginners",
        title: "برمجة جافا",
        shortDesc: "تعلم لغة جافا من الصفر - لغة البرمجة الأكثر استخداماً في تطبيقات المؤسسات.",
        fullDesc: "جافا هي لغة برمجة قوية ومتعددة الاستخدامات تستخدم في تطبيقات المؤسسات، تطبيقات Android، والخوادم. ستتعلم في هذا الكورس أساسيات لغة جافا والبرمجة الكائنية.",
        price: 0,
        oldPrice: 399,
        isFree: true,
        rating: 4.45,
        students: "5L+",
        level: "مبتدئ",
        duration: "2.0 ساعات",
        lectures: 5,
        language: "عربي",
        deadline: "مدى الحياة",
        certificate: "نعم",
        enrolled: 500,
        instructor: {
            name: "إبراهيم علي",
            title: "مطور جافا محترف",
            bio: "مطور جافا بخبرة 10 سنوات في تطوير تطبيقات المؤسسات. عمل في شركات كبرى مثل Oracle و IBM.",
            rating: 4.6,
            reviews: 1100,
            students: 30,
            courses: 6,
            image: "img/team-6.jpg"
        },
        image: "img/course-11.jpg",
        skills: [
            "أساسيات لغة جافا",
            "البرمجة الكائنية",
            "التعامل مع الاستثناءات",
            "المصفوفات والمجموعات"
        ],
        curriculum: [
            {
                title: "أساسيات جافا",
                lessons: ["مقدمة في جافا", "المتغيرات وأنواع البيانات", "الجمل الشرطية", "الحلقات"]
            },
            {
                title: "البرمجة الكائنية",
                lessons: ["الكلاسات والكائنات", "الوراثة", "تعدد الأشكال", "التغليف"]
            },
            {
                title: "المتقدم",
                lessons: ["التعامل مع الاستثناءات", "المصفوفات والمجموعات", "مشروع عملي"]
            }
        ]
    },
    
    // ========== كورس 12: C Programming ==========
    "c-programming": {
        id: 12,
        slug: "c-programming",
        title: "تعلم لغة C للمبتدئين",
        shortDesc: "تعلم لغة C - أساس العديد من لغات البرمجة الحديثة.",
        fullDesc: "لغة C هي لغة برمجة قوية ومنخفضة المستوى. تعتبر أساساً للعديد من لغات البرمجة الحديثة مثل C++ و Java. ستتعلم في هذا الكورس أساسيات البرمجة بلغة C وكيفية التعامل مع المؤشرات والذاكرة.",
        price: 0,
        oldPrice: 299,
        isFree: true,
        rating: 4.50,
        students: "1.1L+",
        level: "مبتدئ",
        duration: "1.5 ساعات",
        lectures: 4,
        language: "عربي",
        deadline: "مدى الحياة",
        certificate: "نعم",
        enrolled: 110,
        instructor: {
            name: "عمرو خالد",
            title: "مهندس أنظمة",
            bio: "مهندس أنظمة مدمجة بخبرة 8 سنوات في تطوير البرمجيات بلغة C/C++. عمل في شركات متخصصة في الإلكترونيات والأنظمة المدمجة.",
            rating: 4.7,
            reviews: 650,
            students: 15,
            courses: 3,
            image: "img/team-7.jpg"
        },
        image: "img/course-12.png",
        skills: [
            "أساسيات لغة C",
            "المؤشرات وإدارة الذاكرة",
            "الدوال والمصفوفات",
            "البرمجة الهيكلية"
        ],
        curriculum: [
            {
                title: "أساسيات C",
                lessons: ["مقدمة في لغة C", "المتغيرات وأنواع البيانات", "عمليات الإدخال والإخراج", "الجمل الشرطية"]
            },
            {
                title: "المتقدم",
                lessons: ["الحلقات", "المصفوفات", "الدوال", "المؤشرات"]
            },
            {
                title: "التطبيقات العملية",
                lessons: ["مشروع: تطبيق بسيط", "إدارة الذاكرة", "أفضل الممارسات"]
            }
        ]
    }
};

// دالة للحصول على بيانات الكورس باستخدام slug
function getCourseBySlug(slug) {
    return coursesDatabase[slug] || null;
}

// دالة للحصول على جميع الكورسات (لصفحة courses.html)
function getAllCourses() {
    return Object.values(coursesDatabase);
}

// دالة للحصول على كورسات مجانية
function getFreeCourses() {
    return Object.values(coursesDatabase).filter(course => course.isFree === true);
}

// دالة للحصول على كورسات مدفوعة
function getPaidCourses() {
    return Object.values(coursesDatabase).filter(course => course.isFree === false);
}

// دالة للبحث في الكورسات
function searchCourses(keyword) {
    if (!keyword) return getAllCourses();
    keyword = keyword.toLowerCase();
    return Object.values(coursesDatabase).filter(course => 
        course.title.toLowerCase().includes(keyword) ||
        course.shortDesc.toLowerCase().includes(keyword) ||
        (course.skills && course.skills.some(skill => skill.toLowerCase().includes(keyword)))
    );
}