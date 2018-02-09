import React from 'react';

module.exports = { allLessonsList: [                
  {
    lessonTitle: "Hallo!",
    practiceText: {
      german: [
            <span key="name1" className="name">Hanna:</span>,
            "Hallo, ich bin Hanna. Wie heißt du?",
            <br key="br1"/>, 
            <br key="br2"/>,
            <span key="name2" className="name">Marie:</span>,
            "Hallo, Hanna. Ich heiße Marie. Freut mich dich kennenzulernen!",
            <br key="br3"/>, 
            <br key="br4"/>,
            <span key="name3" className="name">Hanna:</span>,
            "Freut mich auch!"
            ], 
      english: [
            <span key="name1" className="name">Hanna:</span>,
            "Hello, I am Hanna. What is your name?",
            <br key="br1"/>, <br key="br2"/>,
            <span key="name2" className="name">Marie:</span>,
            "Hello, Hanna. My name is Marie. Nice to meet you! （Literally: I am happy to get to know you!)",
            <br key="br3"/>, <br key="br4"/>,
            <span key="name3" className="name">Hanna:</span>,
            "Nice to meet you too! (Lit.: I am happy too!)"
            ], 
      chinese: [
            <span key="name1" className="name">Hanna:</span>, 
            "你好，我是Hanna。 你叫什麼？ （Lit.: 怎麼叫你？）",
            <br key="br1"/>, <br key="br2"/>,
            <span key="name2" className="name">Marie:</span>,
            "你好，Hanna。 我叫Marie。 高興認識你！",
            <br key="br3"/>, <br key="br4"/>,
            <span key="name3" className="name">Hanna:</span> ,
            "我也高興認識你！"
            ]
    },
    vocabulary: [
      {german: "Hanna", english: "female Name", chinese: "女性名"},
      {german: "Marie", english: "female Name", chinese: "女性名"},
      {german: "hallo", english: "hello", chinese: "你好"},
      {german: "ich", english: "I", chinese: "我"},
      {german: "du", english: "you (singular)", chinese: "你"},
      {german: "sein", english: "to be", chinese: "是"},
      {german: "heißen", english: "to be called", chinese: "叫，姓，謂"},
      {german: "sich freuen", english: "to be happy", chinese: "高興，開心"},
      {german: "(jemanden) kennenlernen", english: "to get to know (someone)", chinese: "認識 （一個人）"},
      {german: "wie", english: "how", chinese: "怎麼，怎樣"},
      {german: "auch", english: "also, too, as well", chinese: "也"}
    ],
    grammar: [
      <div className="section">
        <h4>Konjugation – conjugation – 變位</h4>
        <div className="table-container"><table>
          <tr>
            <th>Infinitiv: <b>~en</b></th>
            <th>singular</th>
            <th>plural</th>
          </tr>
          <tr>
            <td>1. Person</td>
            <td>ich <b>~e</b></td>
            <td>wir <b>~en</b></td>
          </tr>
          <tr>
            <td>2. Person</td>
            <td>du <b>~st</b></td>
            <td>ihr <b>~t</b></td>
          </tr>
          <tr>
            <td>3. Person</td>
            <td>er/sie/es <b>~t</b></td>
            <td>sie <b>~en</b></td>
          </tr>
        </table></div>
        
        <div className="table-container"><table>
          <tr>
            <th><span className="highlited">geh</span>en – to walk – 走</th>
            <th>singular</th>
            <th>plural</th>
          </tr>
          <tr>
            <td>1. Person</td>
            <td>ich <span className="highlited">geh</span>e</td>
            <td>wir <span className="highlited">geh</span>en</td>
          </tr>
          <tr>
            <td>2. Person</td>
            <td>du <span className="highlited">geh</span>st</td>
            <td>ihr <span className="highlited">geh</span>t</td>
          </tr>
          <tr>
            <td>3. Person</td>
            <td>er/sie/es <span className="highlited">geh</span>t</td>
            <td>sie <span className="highlited">geh</span>en</td>
          </tr>
        </table></div>
        
        <div className="table-container"><table>
          <tr>
            <th><span className="highlited">sein – to be – 是</span></th>
            <th>singular</th>
            <th>plural</th>
          </tr>
          <tr>
            <td>1. Person</td>
            <td>ich <span className="highlited">bin</span></td>
            <td>wir <span className="highlited">sind</span></td>
          </tr>
          <tr>
            <td>2. Person</td>
            <td>du <span className="highlited">bist</span></td>
            <td>ihr <span className="highlited">seid</span></td>
          </tr>
          <tr>
            <td>3. Person</td>
            <td>er/sie/es <span className="highlited">ist</span></td>
            <td>sie <span className="highlited">sind</span></td>
          </tr>
        </table></div>
        
        <div className="table-container"><table>
          <tr>
            <th><span className="highlited">heiß</span>en – to be called – 叫</th>
            <th>singular</th>
            <th>plural</th>
          </tr>
          <tr>
            <td>1. Person</td>
            <td>ich <span className="highlited">heiß</span>e</td>
            <td>wir <span className="highlited">heiß</span>en</td>
          </tr>
          <tr>
            <td>2. Person</td>
            <td>du <span className="highlited">heiß</span>(s)t</td>
            <td>ihr <span className="highlited">heiß</span>t</td>
          </tr>
          <tr>
            <td>3. Person</td>
            <td>er/sie/es <span className="highlited">heiß</span>t</td>
            <td>sie <span className="highlited">heiß</span>en</td>
          </tr>
        </table></div>

        <div className="table-container"><table>
          <tr>
            <th>(sich) <span className="highlited">freu</span>en – to be happy – 高興</th>
            <th>singular</th>
            <th>plural</th>
          </tr>
          <tr>
            <td>1. Person</td>
            <td>ich <span className="highlited">freu</span>e (mich)</td>
            <td>wir <span className="highlited">freu</span>en (uns)</td>
          </tr>
          <tr>
            <td>2. Person</td>
            <td>du <span className="highlited">freu</span>st (dich)</td>
            <td>ihr <span className="highlited">freu</span>t (euch)</td>
          </tr>
          <tr>
            <td>3. Person</td>
            <td>er/sie/es <span className="highlited">freu</span>t (sich)</td>
            <td>sie <span className="highlited">freu</span>en (sich)</td>
          </tr>
        </table></div>
      </div>
      ],
    tasks: [
      {
        taskText: "Conjugate the following verbs: – 請做以下的動詞變化：", 
        taskSubjects: ["trinken (to drink - 喝)", "heißen (to be called - 叫)", "lachen (to laugh - 笑)"]
      },
      {
        taskText: "Translate these sentences into German: - 請翻譯以下的句子：",
        taskSubjects: ["Her name is Marie. 我叫Marie。 (--> heißen)", "You drink coffee (Kaffee). 你喝咖啡。 (--> trinken)", "They laugh. 他們笑了。(--> lachen)"]
      }
    ]
  },
  {
    lessonTitle: "Kann ich mir einen Stift ausleihen?",
    practiceText: {
      german: [
            <span key="name1" className="name">Bert:</span>,
            "Hey, kann ich mir einen Stift ausleihen?",
            <br key="br1"/>, 
            <br key="br2"/>,
            <span key="name2" className="name">Ralf:</span>,
            "Ja. Möchtest du den Bleistift oder den Kugelschreiber?",
            <br key="br3"/>, 
            <br key="br4"/>,
            <span key="name3" className="name">Bert:</span>,
            "Den Kugelschreiber, bitte!",
            <br key="br5"/>, 
            <br key="br6"/>,
            <span key="name4" className="name">Ralf:</span>,
            "Hier.",
            <br key="br7"/>, 
            <br key="br8"/>,
            <span key="name5" className="name">Bert:</span>,
            "Dankeschön!"
            ], 
      english: [
            <span key="name1" className="name">Bert:</span>,
            "Hey, can I borrow a pen?",
            <br key="br1"/>, 
            <br key="br2"/>,
            <span key="name2" className="name">Ralf:</span>,
            "Yes. Do you want the pencil or the ball pen?",
            <br key="br3"/>, 
            <br key="br4"/>,
            <span key="name3" className="name">Bert:</span>,
            "The ball pen, please!",
            <br key="br5"/>, 
            <br key="br6"/>,
            <span key="name4" className="name">Ralf:</span>,
            "Here you go.",
            <br key="br7"/>, 
            <br key="br8"/>,
            <span key="name5" className="name">Bert:</span>,
            "Thank you!"
            ], 
      chinese: [
            <span key="name1" className="name">Bert:</span>,
            "我可以借一支筆嗎？",
            <br key="br1"/>, 
            <br key="br2"/>,
            <span key="name2" className="name">Ralf:</span>,
            "可以. 你要鉛筆還是原子筆?",
            <br key="br3"/>, 
            <br key="br4"/>,
            <span key="name3" className="name">Bert:</span>,
            "原子筆。",
            <br key="br5"/>, 
            <br key="br6"/>,
            <span key="name4" className="name">Ralf:</span>,
            "這裡。",
            <br key="br7"/>, 
            <br key="br8"/>,
            <span key="name5" className="name">Bert:</span>,
            "謝謝！"
            ]
    },
    vocabulary: [
      {german: "Vokabel3 deutsch", english: "voc english", chinese: "中文詞"},
      {german: "Vokabel3 deutsch", english: "voc english", chinese: "中文詞"}
    ],
    grammar: "grammar3 123",
    tasks: [
      {
        taskText: "task1 text asdf", 
        taskSubjects: ["asdf", "zuio", "qwer"]
      },
      {
        taskText: "task2 text asdf",
        taskSubjects: ["sub1", "sub2", "sub3", "sub4"]
      }
    ]
  },
  {
    lessonTitle: "Alphabet",
    practiceText: {
      german: [
        <div>
          Das deutsche Alphabet hat 30 Buchstaben. Zusätzlich zu den Buchstaben von A bis Z gibt es noch die Umlaute Ä, Ö und Ü und das scharfe S, das ß.
        </div>,
        <br />,
        <div>
          <h4>Buchstabenkombinationen</h4>
          <div> eu - 'oi'</div>
          <div> ei – 'ai'</div>
          <div> ph - 'f' </div>
          <div> ch </div>
          <div> sch </div>
          <div> st – scht </div>
          <br />
          <div> h nach einem Vokal verlängert die Aussprache (ah, eh, ih, oh, uh) </div>
          <div> doppelte Konsonanten nach einem Vokal verkürzen die Aussprache </div>
        </div>
      ], 
      english: [
        "The german alphabet has 30 letters. Additional to the letters from A to Z there are the secondary vowels Ä, Ö and Ü and also the sharp S, the ß (read: es zet)"
      ], 
      chinese: ""
    },
    vocabulary: [
      {german: "A a", english: "a", chinese: "Apfel, Ameise"},
      {german: "B b", english: "be", chinese: "bald"},
      {german: "C c", english: "ze, ce", chinese: "Chemie"},
      {german: "D d", english: "de", chinese: "dort"},
      {german: "E e", english: "e", chinese: "Ei, Ente"},
      {german: "F f", english: "ef", chinese: "Fuchs, Frau"},
      {german: "G g", english: "ge", chinese: "gerne, gut"},
      {german: "H h", english: "ha", chinese: "Haus, hier"},
      {german: "I i", english: "ih", chinese: "in, Insel"},
      {german: "J j", english: "jot", chinese: "Jahr"},
      {german: "K k", english: "ka", chinese: "kalt"},
      {german: "L l", english: "el", chinese: "laut, leise"},
      {german: "M m", english: "em", chinese: "Mann, Maus"},
      {german: "N n", english: "en", chinese: "nein, nur"},
      {german: "O o", english: "o", chinese: "ohne, Ohr"},
      {german: "P p", english: "pe", chinese: "Papier, Pause"},
      {german: "Q q", english: "ku, qu", chinese: "Qualle, quasi"},
      {german: "R r", english: "er", chinese: "Reis, rauf, runter"},
      {german: "S s", english: "es", chinese: "Silber, sehen"},
      {german: "T t", english: "te", chinese: "tanzen"},
      {german: "U u", english: "u", chinese: "Uhr, unter"},
      {german: "V v", english: "fau", chinese: "Vogel, vier"},
      {german: "W w", english: "we", chinese: "warm"},
      {german: "X x", english: "iks, ix", chinese: ""},
      {german: "Y y", english: "ypsilon", chinese: ""},
      {german: "Z z", english: "zet", chinese: "Zahl, Zeit"},
      {german: "Ä ä", english: "ä", chinese: "ändern"},
      {german: "Ö ö", english: "ö", chinese: "Öl, öde"},
      {german: "Ü ü", english: "ü", chinese: "über"},
      {german: "ß (sz)", english: "es zet", chinese: ""}
    ],
    grammar: []
    ,
    tasks: [{
        taskText: "Read the alphabet out loud for yourself", 
        taskSubjects: []
      }
    ]
  }

]};