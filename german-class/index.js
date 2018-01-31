import React from 'react';
import ReactDOM from 'react-dom';

class VocabularyAll extends React.Component {
  render() {
    return (
  <div class="vocabulary">
      <h3> Vokabeln – Vocabulary – 單字</h3>
      <VocabularySingle german="Hanna" english="female Name" chinese="女性名" />
      <VocabularySingle german="Marie" english="female Name" chinese="女性名" />
      <VocabularySingle german="hallo" english="hello" chinese="你好" />
      <VocabularySingle german="ich" english="I" chinese="我" />
      <VocabularySingle german="du" english="you (singular)" chinese="你" />
      <VocabularySingle german="sein" english="to be" chinese="是" />
      <VocabularySingle german="heißen" english="to be called" chinese="叫，姓，謂" />
      <VocabularySingle german="sich freuen" english="to be happy" chinese="高興，開心" />
      <VocabularySingle german="(jemanden) kennenlernen" english="to get to know (someone)" chinese="認識 （一個人）" />
      <VocabularySingle german="wie" english="how" chinese="怎麼，怎樣" />
      <VocabularySingle german="auch" english="also, too, as well" chinese="也" />
    </div>
    );
  }
}

class VocabularySingle extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return(
      <div className="voc">
        <span className="german">{this.props.german}</span>
        <span className="english">{this.props.english}</span>
        <span className="chinese">{this.props.chinese}</span>
      </div>
    );
  }
}


class PracticeText extends React.Component {
  render() {
    return (
      <div className="practice">
        <h3> Übungstext – Reading Practice – 會話內容</h3>
  
        <p className="german">
          <span className="name">Hanna:</span> Hallo, ich bin Hanna. Wie heißt du?<br/><br/>
    
          <span className="name">Marie:</span> Hallo, Hanna. Ich heiße Marie. Freut mich dich kennenzulernen!<br/><br/>
    
          <span className="name">Hanna:</span> Freut mich auch!
        </p>
        <p className="english">
          <span className="name">Hanna:</span> Hello, I am Hanna. What is your name?<br/><br/>
    
          <span className="name">Marie:</span> Hello, Hanna. My name is Marie. Nice to meet you! （Literally: I am happy to get to know you!)<br/><br/>
          
          <span className="name">Hanna:</span> Nice to meet you too! (Lit.: I am happy too!)
        </p>
      
        <PracticeTextBox language="chinese" text={[
          <span className="name">Hanna:</span>, 
          "你好，我是Hanna。 你叫什麼？ （Lit.: 怎麼叫你？）",
          <br/>, <br/>, 
          <span className="name">Marie:</span>,
          "你好，Hanna。 我叫Marie。 高興認識你！",
          <br/>, <br/>,
          <span className="name">Hanna:</span> ,
          "我也高興認識你！"
          ]} />
      
      </div>
    );
  }
}

class PracticeTextBox extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render(){
    return (
      <p className={this.props.language}>
        {this.props.text}
      </p>
    );
  }
  
}

class MainComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render(){
    return (
      <div>
        <NavBar />
        <StartPage />
        <AllLessons />
      </div>
    );
  }
}

class StartPage extends React.Component {
  render() {
    return(
      <div>
        <h2>Introduction to this German class</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    );
  }
}

class AllLessons extends React.Component {
  render() {
    return(
      <div id="all">
        <ul>
          <li><a href="./lesson01.html">Lektion 1 – Lesson 1 – 第一課</a></li>
          <li><a href="./lesson_numbers.html">Zahlen – Numbers – 數目字</a></li>
          <li><a href="./lesson_abc.html">Das Alphabet – The alphabet – 德文字母</a></li>
        </ul>
      </div>
    );
  }
}

class NavBar extends React.Component {
  render() {
    return(
      <div className="navbar">
        <a href="#all">Alle Lektionen – All lessons – </a> | 
        <a href="./lesson01.html">Nächste Lektion –  Next lesson – 下一課</a>
      </div>
    );
  }
}

ReactDOM.render(
  <MainComponent />,
  document.getElementById('react-elem')
);