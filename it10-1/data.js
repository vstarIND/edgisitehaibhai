const slides = [
    {
        heading: "Introduction to Communication",
        hook: ["\"Tu bolta hai...\"", "\"Par kya samne wala samajhta hai?\"", "\"Yahi difference hai communication ka.\""],
        content: [
            [ { text: "Communication ka matlab sirf bolna nahi hota." } ],
            [ { text: "Asli communication tab hota hai\njab jo tum bol rahe ho,\nsamne wala usko " }, { text: "SAME", highlight: true }, { text: " way me samajh le." } ],
            [ { text: "Socho..." } ],
            [ { text: "Tum bolte ho ‘mazaak tha’\npar samne wala hurt ho jata hai." } ],
            [ { text: "Problem kya hai?" } ],
            [ { text: "Words galat nahi the...\nsamajh alag ho gaya." } ],
            [ { text: "Isi ko bolte hain " }, { text: "communication gap", highlight: true }, { text: "." } ],
            [ { text: "Aur isi gap ko samajhna hi real skill hai." } ],
            {
                type: 'diagram', direction: 'row',
                steps: [ { text: "[You speak]" }, { text: "→", isArrow: true }, { text: "[Listener interprets]" }, { text: "→", isArrow: true }, { text: "[Different understanding]", highlight: true } ]
            },
            [ { text: "Bolna easy hai... samjhana skill hai.", final: true } ]
        ],
        quizBank: [
            { q: "Communication kab successful hota hai?", options: ["Jab bolne wala lamba bole", "Jab receiver SAME meaning samjhe", "Jab vocabulary high ho", "Jab email bheji jaye"], correctIndex: 1 },
            { q: "Dost 'mazaak tha' sunke hurt kyu hota hai?", options: ["Words buray the", "Samajh alag-alag thi (Gap)", "Usne suna nahi", "Awaz dheemi thi"], correctIndex: 1 },
            { q: "Communication gap kya hai?", options: ["Network kharab hona", "Bolne aur samajhne ke beech ka difference", "Baat na karna", "English na aana"], correctIndex: 1 },
            { q: "Communication me sabse zaruri skill kya hai?", options: ["Bolna", "Samjhana", "Likhna", "Sunna"], correctIndex: 1 }
        ]
    },

    {
        heading: "Parts of Communication",
        hook: ["\"Tu bolta hai...\"", "\"Samne wala sunta hai...\"", "\"Par kya reply aata hai?\""],
        content: [
            [ { text: "Communication kab complete hota hai?" } ],
            [ { text: "Jab 3 cheezein sahi hoti hain." } ],
            [ { text: "Pehla... Tum message bhejte ho." } ],
            [ { text: "Doosra... Samne wala usse samajhta hai." } ],
            [ { text: "Teesra... Woh uska reply deta hai." } ],
            [ { text: "Agar reply hi nahi aaya..." } ],
            [ { text: "toh tumhe kaise pata chalega ki baat samajh aayi ya nahi?" } ],
            [ { text: "Isi liye " }, { text: "feedback", highlight: true }, { text: " important hai." } ],
            {
                type: 'diagram', direction: 'row',
                steps: [ { text: "[You speak]" }, { text: "→", isArrow: true }, { text: "[They understand]" }, { text: "→", isArrow: true }, { text: "[They reply]", highlight: true } ]
            },
            [ { text: "Communication = bolna + samajhna + reply.", final: true } ]
        ],
        quizBank: [
            { q: "Communication complete kab hota hai?", options: ["Message type karne par", "Seen hone tak", "Jab samne se reply aaye", "Jab group ban jaye"], correctIndex: 2 },
            { q: "Tum message bhejte ho, samne wala samajhta hai, teesra step kya hai?", options: ["Message delete karna", "Forward karna", "Reply dena (Feedback)", "Notification off karna"], correctIndex: 2 },
            { q: "Agar reply hi na aaye toh kya hota hai?", options: ["Communication fail/incomplete reh jata hai", "Sender hero ban jata hai", "Receiver ki jeet hoti hai", "Communication loop pura hota hai"], correctIndex: 0 },
            { q: "Inme se communication ka hissa nahi hai?", options: ["Sender", "Receiver", "Feedback", "Shor (Noise as a core part)"], correctIndex: 3 }
        ]
    },

    {
        heading: "Methods of Communication",
        hook: ["\"Sab log bolte nahi...\"", "\"Kabhi bina bole bhi samajh aata hai...\"", "\"Kaise?\""],
        content: [
            [ { text: "Communication sirf words se nahi hota." } ],
            [ { text: "3 main tareeke hote hain:" } ],
            [ { text: "Verbal", highlight: true }, { text: "...\n" }, { text: "Non-verbal", highlight: true }, { text: "...\nAur " }, { text: "Visual", highlight: true }, { text: "." } ],
            [ { text: "Verbal matlab... jo tum bolte ho ya likhte ho." } ],
            [ { text: "Non-verbal matlab... tumhari body language." } ],
            [ { text: "Aur Visual matlab... images, signs, symbols." } ],
            [ { text: "Kabhi notice kiya?\nKisi ka face dekh ke hi samajh aa jata hai ki woh khush hai ya gussa." } ],
            [ { text: "Wahi non-verbal hai." } ],
            {
                type: 'diagram', direction: 'column',
                steps: [ { text: "Verbal → Words", highlight: true }, { text: "Non-verbal → Body language", highlight: true }, { text: "Visual → Images / signs", highlight: true } ]
            },
            [ { text: "Communication sirf words nahi hota.", final: true } ]
        ],
        quizBank: [
            { q: "Communication ke 3 main tareeke kaunse hain?", options: ["Verbal, Calling, Texting", "Verbal, Non-verbal, Visual", "Hindi, English, Spanish", "Loud, Soft, Silent"], correctIndex: 1 },
            { q: "Face expressions aur gussa kaunse communication me aata hai?", options: ["Verbal", "Non-verbal", "Visual", "Auditory"], correctIndex: 1 },
            { q: "Visual communication ka example kya hai?", options: ["Bolna", "Body language", "Images aur symbols", "Gaana gaana"], correctIndex: 2 },
            { q: "Bina words use kiye samajhana kya kahlata hai?", options: ["Verbal method", "Written method", "Non-verbal ya Visual", "Direct method"], correctIndex: 2 }
        ]
    },

    {
        heading: "Verbal Communication",
        hook: ["\"Sirf bolne tak limited nahi...\"", "\"Likhne me bhi words hain...\"", "\"Toh difference kya hai?\""],
        content: [
            [ { text: "Verbal matlab... jahan " }, { text: "WORDS", highlight: true }, { text: " ka direct use ho." } ],
            [ { text: "Yeh do types ke hote hain: " }, { text: "Oral", highlight: true }, { text: " aur " }, { text: "Written", highlight: true }, { text: "." } ],
            [ { text: "Oral: Face-to-face baat karna ya phone pe." } ],
            [ { text: "Written: Email, WhatsApp, ya letters." } ],
            [ { text: "Example kya hai?" } ],
            [ { text: "Dost se plan banana hai? Oral fast hai." } ],
            [ { text: "Boss ko report deni hai? Written proof accha hai." } ],
            {
                type: 'diagram', direction: 'column',
                steps: [ { text: "Oral → Phone Calls", highlight: true }, { text: "Written → Emails", highlight: true } ]
            },
            [ { text: "Right situation = Right verbal method.", final: true } ]
        ],
        quizBank: [
            { q: "Verbal communication ki sabse badi pehchaan kya hai?", options: ["Body language", "Words (Shabdon) ka use", "Images dikhana", "Khamoshi"], correctIndex: 1 },
            { q: "Boss ko official report deni hai, best kya rahega?", options: ["Oral (Bol ke)", "Written (Email se)", "Non-verbal (Ishare se)", "Visual (Drawing se)"], correctIndex: 1 },
            { q: "Oral communication kiske liye best hai?", options: ["Legal proof rakhne ke liye", "Lambi report bhejane ke liye", "Fast reply aur discussion ke liye", "Data save karne ke liye"], correctIndex: 2 },
            { q: "Verbal ke do parts kaunse hain?", options: ["Good aur Bad", "Formal aur Free", "Oral aur Written", "Slow aur Fast"], correctIndex: 2 }
        ]
    },

    {
        heading: "Non-verbal Communication",
        hook: ["\"Bina words bole samajh aana...\"", "\"Action bolta hai...\"", "\"Kaisa action?\""],
        content: [
            [ { text: "Non-verbal matlab... " }, { text: "bina bole", highlight: true }, { text: " message dena." } ],
            [ { text: "Isme aate hain: Body Language, Gestures, aur Eye Contact." } ],
            [ { text: "Gussa ho? Aankhen badi ho jati hain.\nKhush ho? Smile aa jati hai." } ],
            [ { text: "Example socho:" } ],
            [ { text: "Teacher class me bas muh pe ungli rakhti hai..." } ],
            [ { text: "Poori class chup ho jati hai." } ],
            [ { text: "Ek bhi word nahi bola, par message clear pahunch gaya." } ],
            {
                type: 'diagram', direction: 'row',
                steps: [ { text: "[Facial Expression]" }, { text: "→", isArrow: true }, { text: "[Emotion]" }, { text: "→", isArrow: true }, { text: "[Understanding]", highlight: true } ]
            },
            [ { text: "Actions speak louder than words.", final: true } ]
        ],
        quizBank: [
            { q: "Smile kis communication ka hissa hai?", options: ["Verbal", "Visual", "Non-verbal", "Written"], correctIndex: 2 },
            { q: "Bina shabdon ke apni baat pohochana kya kahlata hai?", options: ["Telepathy", "Oral communication", "Non-verbal communication", "Magic"], correctIndex: 2 },
            { q: "Teacher ka class ko shaant karne ke liye ungli muh pe rakhna kya hai?", options: ["A type of gesture (Non-verbal)", "Visual sign", "Written message", "Oral order"], correctIndex: 0 },
            { q: "Gusse mein laal aankhen kya darshati hain?", options: ["Linguistic skill", "Emotion via facial expression", "Visual trick", "Vocabulary"], correctIndex: 1 }
        ]
    },

    {
        heading: "Visual Communication",
        hook: ["\"Image = 1000 words...\"", "\"Bas dekh ke samajh jana...\"", "\"Visuals strong kyu hain?\""],
        content: [
            [ { text: "Visual communication matlab info pass karna " }, { text: "images", highlight: true }, { text: " se." } ],
            [ { text: "Isme time nahi lagta, aap instantly samajh jate ho." } ],
            [ { text: "Real-life Example socho:\nRoad pe Traffic Light hoti hai." } ],
            [ { text: "Neeche likha thodi hota hai 'Ab gadi rok do'." } ],
            [ { text: "Aapne RED color dekha aur aap chup chaap ruk gaye." } ],
            {
                type: 'diagram', direction: 'column',
                steps: [ { text: "🔴 Red Light → Stop", highlight: true }, { text: "🟢 Green Light → Go", highlight: true } ]
            },
            [ { text: "Images instantly samajh aati hain.", final: true } ]
        ],
        quizBank: [
            { q: "Traffic light kis type ka communication hai?", options: ["Verbal", "Visual", "Written", "Non-verbal"], correctIndex: 1 },
            { q: "Visual communication words se better kab hota hai?", options: ["Jab story likhni ho", "Jab detail samjhani ho", "Jab instantly alert dena ho", "Jab boss se baat karni ho"], correctIndex: 2 },
            { q: "Inme se kya visual communication nahi hai?", options: ["WhatsApp DP", "Red Stop Sign", "Speed Breaker Board", "Radio News"], correctIndex: 3 },
            { q: "Visuals brain mein jaldi process hote hain, True ya False?", options: ["False, words fast hote hain", "True, bas color/shape dekh kar meaning milta hai", "False, time lagta hai", "None of the above"], correctIndex: 1 }
        ]
    },

    {
        heading: "Communication Cycle",
        hook: ["\"Ek process hota hai...\"", "\"Sirf bolne se khatam nahi...\"", "\"Yeh loop kaise kaam karti hai?\""],
        content: [
            [ { text: "Baat poori hone ka fir ek proper " }, { text: "Cycle", highlight: true }, { text: " hai." } ],
            [ { text: "Start hota hai Sender se... (jo baat start karta hai)." } ],
            [ { text: "Woh ek Message banata hai (encode karta hai).\nPhir usse Channel (jaise WhatsApp) pe daalta hai." } ],
            [ { text: "Message pahunchta hai Receiver ke paas. (Woh usse decode/samajhta hai)." } ],
            [ { text: "Example: Tum (Sender) ne WhatsApp (Channel) pe 'Hi' bheja (Message)." } ],
            [ { text: "Dost (Receiver) ne padha aur samjha." } ],
            {
                type: 'diagram', direction: 'row',
                steps: [ { text: "[Sender]" }, { text: "→", isArrow: true }, { text: "[Message]" }, { text: "→", isArrow: true }, { text: "[Channel]" }, { text: "→", isArrow: true }, { text: "[Receiver]", highlight: true } ]
            },
            [ { text: "Communication ek constant loop hai.", final: true } ]
        ],
        quizBank: [
            { q: "Communication cycle kahan se shuru hoti hai?", options: ["Channel se", "Receiver se", "Sender se", "Feedback se"], correctIndex: 2 },
            { q: "WhatsApp pe message bhejte waqt WhatsApp kya ban jata hai?", options: ["Sender", "Medium (Channel)", "Receiver", "Message"], correctIndex: 1 },
            { q: "Jo insaan message banata hai usse kya kehte hain?", options: ["Receiver", "Decoder", "Sender (Encoder)", "Channel"], correctIndex: 2 },
            { q: "Cycle mein Receiver ka kya kaam hai?", options: ["Message ko start karna", "Sirf padhna aur delete karna", "Message samajhna aur feedback dena", "Aankhe band rakhna"], correctIndex: 2 }
        ]
    },

    {
        heading: "Importance of Feedback",
        hook: ["\"Reply aana zaruri hai...\"", "\"Warna pata kaise chalega?\"", "\"Feedback ka magic kya hai?\""],
        content: [
            [ { text: "Feedback is cycle ka " }, { text: "sabse important", highlight: true }, { text: " part hai." } ],
            [ { text: "Message gaya, receiver ne padh liya... par kya usse wahi samajh aaya jo tum bata rahe the?" } ],
            [ { text: "Jab tak 'Haan' ya 'Nahi' ka reply na aaye, cycle open rehti hai." } ],
            [ { text: "Life Example:" } ],
            [ { text: "Aapne relative ko dinner invite bheja." } ],
            [ { text: "Agar unhone kuch reply nahi kiya... toh aap doubt me rahoge." } ],
            [ { text: "Unka 'Hum aayenge' (Feedback) bolna confusion khatam karta hai." } ],
            {
                type: 'diagram', direction: 'row',
                steps: [ { text: "[Message Sent]" }, { text: "→", isArrow: true }, { text: "[Feedback Received]" }, { text: "→", isArrow: true }, { text: "[Doubt Cleared]", highlight: true } ]
            },
            [ { text: "No feedback = Incomplete communication.", final: true } ]
        ],
        quizBank: [
            { q: "Cycle ka aakhiri hissa kya hota hai?", options: ["Channel", "Feedback", "Sender", "Noise"], correctIndex: 1 },
            { q: "Feedback kyu zaroori hai?", options: ["Formality puri karne ke liye", "Cycle destroy karne ke liye", "Confirmation dene ke liye ki message samajh aa gaya", "Message bhejne ke maze ke liye"], correctIndex: 2 },
            { q: "Agar dost message dekhe aur koi emoji na bheje, ye kaisa communication hua?", options: ["One-way (incomplete)", "Two-way communication", "Visual communication", "Perfect communication"], correctIndex: 0 },
            { q: "Inviting par 'Hum aayenge' sunna kya kehlata hai?", options: ["Argument", "Feedback", "Visuals", "Channel"], correctIndex: 1 }
        ]
    },

    {
        heading: "7 C's of Communication",
        hook: ["\"Kya bolna hai, pata hai...\"", "\"Par KAISE bolna hai?\"", "\"Yeh rules successful banate hain.\""],
        content: [
            [ { text: "Effective baat karne ke " }, { text: "7 rules", highlight: true }, { text: " hain. Ek mistake, message fail." } ],
            [ { text: "Example: Bahut long confusing email (Concise aur Clear nahi thi) = Logon ne Ignore kar di." } ],
            [ { text: "Achhe Communication ke pillars dekho:" } ],
            {
                type: 'diagram', direction: 'column',
                steps: [
                    { text: "1. Clear → Point ki baat karo", highlight: false },
                    { text: "2. Concise → Short rakho, lamba nahi", highlight: false },
                    { text: "3. Concrete → Solid facts aur details do", highlight: false },
                    { text: "4. Correct → Grammar aur spelling sahi ho", highlight: false },
                    { text: "5. Coherent → Logic wise link ho", highlight: false },
                    { text: "6. Complete → Total details covered hon", highlight: false },
                    { text: "7. Courteous → Respectful aur polite ho", highlight: true }
                ]
            },
            [ { text: "7 rules for 100% impact.", final: true } ]
        ],
        quizBank: [
            { q: "7C's mein 'Clear' ka kya arth hai?", options: ["Screen saaf karna", "Message bina ghuma-fira ke seedha hona chahiye", "Awaaz tezz hona", "White page pe likhna"], correctIndex: 1 },
            { q: "Agar email mein extra faltu lines hain, toh konsa C miss hai?", options: ["Correct", "Complete", "Concise (Short aur to-the-point)", "Concrete"], correctIndex: 2 },
            { q: "Agar aap message me bad words (rude) use karte hain, toh aap kya nahi hain?", options: ["Clear", "Courteous (Polite)", "Concrete", "Coherent"], correctIndex: 1 },
            { q: "Logical tariqe se points connect karne ko kya bolte hain?", options: ["Concrete", "Concise", "Coherent", "Clear"], correctIndex: 2 }
        ]
    },

    {
        heading: "Barriers to Communication",
        hook: ["\"Baat pahunchi nahi...\"", "\"Beech me rukawat aa gayi...\"", "\"Kaha phase hum?\""],
        content: [
            [ { text: "Barriers matlab jo rukawatein (walls) message ko " }, { text: "kharab", highlight: true }, { text: " karti hain." } ],
            [ { text: "Inme 3 main types hote hain:" } ],
            [ { text: "Physical (Shor, Dooriyon ka fasla), Linguistic (Language problem), aur Interpersonal (Attitude/Mood)." } ],
            [ { text: "Ek common Example:" } ],
            [ { text: "Tum bahut technical English me smart joke/logic marte ho...\nPar samne wale ko advanced English nahi aati." } ],
            [ { text: "Joke flop ho gaya." } ],
            [ { text: "Yeh ek Linguistic Barrier hai." } ],
            {
                type: 'diagram', direction: 'row',
                steps: [ { text: "[Sender]" }, { text: "→", isArrow: true }, { text: "[BARRIER BLOCK]", highlight: true }, { text: "→", isArrow: true }, { text: "[Misunderstanding]", highlight: true } ]
            },
            [ { text: "Barriers cross karna zaroori hai.", final: true } ]
        ],
        quizBank: [
            { q: "Bahar construction ka shor aana kaisa barrier hai?", options: ["Physical", "Linguistic", "Interpersonal", "Mental"], correctIndex: 0 },
            { q: "Aap French bol rahe hain, aur receiver ko sirf Hindi aati hai. Yeh barrier kya hai?", options: ["Physical barrier", "Linguistic barrier", "Attitude barrier", "Time barrier"], correctIndex: 1 },
            { q: "Aap pehle se gusse me hain aur friend ki sahi baat ko bhi galat maan lete hain. Ye kaisa barrier hai?", options: ["Physical", "Visual", "Interpersonal (Emotional/Attitude)", "Linguistic"], correctIndex: 2 },
            { q: "Barrier communication ke sath kya karta hai?", options: ["Usse improve karta hai", "Uska time bachata hai", "Usme noise add karke message kharab karta hai", "Use loud banata hai"], correctIndex: 2 }
        ]
    },

    {
        heading: "Writing Skills",
        hook: ["\"Likha toh sahi tha...\"", "\"Par meaning badal gaya...\"", "\"Chhoti ghalti, bada panga.\""],
        content: [
            [ { text: "Writing skills me " }, { text: "Grammar", highlight: true }, { text: " sabse bada hero hai." } ],
            [ { text: "Punctuation (, . !) ya Capital letters (A) use sahi point pe karna lazmi hai." } ],
            [ { text: "Aao yeh wild Example dekhein:" } ],
            [ { text: "'Let's eat, Grandma!' (Dadi, aao khana khayen)" } ],
            [ { text: "Ab comma hata do..." } ],
            [ { text: "'Let's eat Grandma!' (Aao Dadi ko hi kha jayen...)" } ],
            [ { text: "Ek comma lagane se kitna bada farq aa gaya!" } ],
            {
                type: 'diagram', direction: 'row',
                steps: [ { text: "[Subject]" }, { text: "+", isArrow: true }, { text: "[Verb]" }, { text: "+", isArrow: true }, { text: "[Object]" }, { text: "=", isArrow: true }, { text: "[Meaning]", highlight: true } ]
            },
            [ { text: "Good grammar = Clear meaning.", final: true } ]
        ],
        quizBank: [
            { q: "Written communication mein sabse main cheez kya milti hai agar punctuation galat ho?", options: ["Paper check fail", "Word zyada lamba lagta hai", "Message ka exact meaning badal (destroy) jata hai", "Log sentence chhod dete hain"], correctIndex: 2 },
            { q: "\"Let's eat, Grandma!\" aur \"Let's eat Grandma!\" example mein kis rule ne message ko bachaya?", options: ["Capital letter", "A comma (,)", "Full stop (.)", "Question mark (?)"], correctIndex: 1 },
            { q: "Good grammar hone ka seedha result kya hai?", options: ["Likhai (Handwriting) achi dikhti hai", "Meaning 100% clear convey hota hai", "Space kam lagta hai", "Vocabulary test paas hota hai"], correctIndex: 1 },
            { q: "Writing me letters ko properly end karna kis category me aata hai?", options: ["Formatting and Grammar structure", "Calling skills", "Math logic", "Non-verbal signs"], correctIndex: 0 }
        ]
    }
];
