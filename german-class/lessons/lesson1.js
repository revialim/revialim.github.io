import React from 'react';

module.exports = {
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
  grammar: "grammar123",
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
};