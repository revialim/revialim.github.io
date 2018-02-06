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
    lessonTitle: "lesson2 title asdf",
    practiceText: {
      german: "practice german asdf lorem ipsum test test 123", 
      english: "practice english asdf lorem ipsum test test 123", 
      chinese: "practice chinese asdf lorem ipsum test test 123"
    },
    vocabulary: [
      {german: "Vokabel deutsch", english: "voc english", chinese: "中文詞"},
      {german: "Vokabel deutsch", english: "voc english", chinese: "中文詞"}
    ],
    grammar: "grammar123",
    tasks: [{
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
    lessonTitle: "lesson3 title asdf",
    practiceText: {
      german: "practice3 german asdf lorem ipsum test test 123", 
      english: "practice3 english asdf lorem ipsum test test 123", 
      chinese: "practice3 chinese asdf lorem ipsum test test 123"
    },
    vocabulary: [
      {german: "Vokabel3 deutsch", english: "voc english", chinese: "中文詞"},
      {german: "Vokabel3 deutsch", english: "voc english", chinese: "中文詞"}
    ],
    grammar: "grammar3 123",
    tasks: [{
        taskText: "task1 text asdf", 
        taskSubjects: ["asdf", "zuio", "qwer"]
      },
      {
        taskText: "task2 text asdf",
        taskSubjects: ["sub1", "sub2", "sub3", "sub4"]
      }
    ]
  }

]};