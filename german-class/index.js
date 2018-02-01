import React from 'react';
import ReactDOM from 'react-dom';

class StartPage extends React.Component {
  render() {
    return(
      <div className="main-contents">
        <h2>Introduction to this German class</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    );
  }
}

class LessonPage extends React.Component {
  
  render() {
    return(
      <div className="lection main-contents">
        <h2> Lektion 1 – Lesson 1 – 第一課</h2>
        <div className="lection-title"> Hallo! </div>
        <PracticeText />
        <VocabularyAll />
      </div>
    );
  }
}

class VocabularyAll extends React.Component {
  render() {
    return (
  <div className="vocabulary">
      <h3> Vokabeln – Vocabulary – 單字</h3>
      <VocabularySingle key="voc1" german="Hanna" english="female Name" chinese="女性名" />
      <VocabularySingle key="voc2" german="Marie" english="female Name" chinese="女性名" />
      <VocabularySingle key="voc3" german="hallo" english="hello" chinese="你好" />
      <VocabularySingle key="voc4" german="ich" english="I" chinese="我" />
      <VocabularySingle key="voc5" german="du" english="you (singular)" chinese="你" />
      <VocabularySingle key="voc6" german="sein" english="to be" chinese="是" />
      <VocabularySingle key="voc7" german="heißen" english="to be called" chinese="叫，姓，謂" />
      <VocabularySingle key="voc8" german="sich freuen" english="to be happy" chinese="高興，開心" />
      <VocabularySingle key="voc9" german="(jemanden) kennenlernen" english="to get to know (someone)" chinese="認識 （一個人）" />
      <VocabularySingle key="voc10" german="wie" english="how" chinese="怎麼，怎樣" />
      <VocabularySingle key="voc11" german="auch" english="also, too, as well" chinese="也" />
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
        <span key="voc-german" className="german">{this.props.german}</span>
        <span key="voc-english" className="english">{this.props.english}</span>
        <span key="voc-chinese" className="chinese">{this.props.chinese}</span>
      </div>
    );
  }
}

class PracticeText extends React.Component {
  render() {
    return (
      <div className="practice">
        <h3> Übungstext – Reading Practice – 會話內容</h3>
  
        <PracticeTextBox language="english" text={[
          <span key="name1" className="name">Hanna:</span>,
          "Hallo, ich bin Hanna. Wie heißt du?",
          <br key="br1"/>, <br key="br2"/>,
          <span key="name2" className="name">Marie:</span>,
          "Hallo, Hanna. Ich heiße Marie. Freut mich dich kennenzulernen!",
          <br key="br3"/>, <br key="br4"/>,
          <span key="name3" className="name">Hanna:</span>,
          "Freut mich auch!"
          ]} />
        
        <PracticeTextBox language="english" text={[
          <span key="name1" className="name">Hanna:</span>,
          "Hello, I am Hanna. What is your name?",
          <br key="br1"/>, <br key="br2"/>,
          <span key="name2" className="name">Marie:</span>,
          "Hello, Hanna. My name is Marie. Nice to meet you! （Literally: I am happy to get to know you!)",
          <br key="br3"/>, <br key="br4"/>,
          <span key="name3" className="name">Hanna:</span>,
          "Nice to meet you too! (Lit.: I am happy too!)"
          ]} />
      
        <PracticeTextBox language="chinese" text={[
          <span key="name1" className="name">Hanna:</span>, 
          "你好，我是Hanna。 你叫什麼？ （Lit.: 怎麼叫你？）",
          <br key="br1"/>, <br key="br2"/>,
          <span key="name2" className="name">Marie:</span>,
          "你好，Hanna。 我叫Marie。 高興認識你！",
          <br key="br3"/>, <br key="br4"/>,
          <span key="name3" className="name">Hanna:</span> ,
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
      <p key={"pt"+this.props.language} className={this.props.language}>
        {this.props.text}
      </p>
    );
  }
  
}

class MainComponent extends React.Component {
  constructor(props) {
    super(props);
    this.handlePageClick = this.handlePageClick.bind(this);
    this.state = {currentPage: 0};
  }

  handlePageClick(pageId) {
    this.setState({currentPage: pageId});
  }
  
  render() {
    let pageContent = null;
    if(this.state.currentPage == 0){
      pageContent = <StartPage />;
    }
    
    if(this.state.currentPage == 1){
      pageContent = <LessonPage lessonId="1" />
    }
    
    return (
      <div>
        <NavBar onClick={this.handlePageClick} currentContentId={this.state.currentPage}/>
      
        {pageContent}
      
        <AllLessons />
      </div>
    );
  }
}

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {contentId: this.props.currentContentId};
  }
  
  render() {
    return(
      <div className="navbar">
        <NavElem key="nav1" onClick={this.props.onClick} contentId="0" navTitle="Home" />
        <NavElem key="nav2" navUrl="#all" navTitle="Alle Lektionen – All lessons – " />
        <NavElem key="nav3" onClick={this.props.onClick} 
          contentId={this.state.contentId + 1} 
          navTitle="Nächste Lektion – Next lesson – 下一課" />
      </div>
    );
  }
}

class NavElem extends React.Component {
  constructor(props) {
    super(props);
    this.navItemClicked = this.navItemClicked.bind(this)
  }
  
  navItemClicked() {
    this.props.onClick(this.props.contentId);
  }
  
  render() {
    if(this.props.navUrl != null){
      return(
        <a href={this.props.navUrl}>{this.props.navTitle}</a>
      );
    }
    else {
      return(
        <div onClick={this.navItemClicked.bind(this, this.props.contentId)} className="navItem">{this.props.navTitle}</div> 
      );
    }
  }
}

class AllLessons extends React.Component {
  render() {
    return(
      <div id="all">
        <h2>Alle Lektionen – All lessons – </h2>
        <ul>
          <li key="lessons0"><a href="./lesson01.html">Lektion 1 – Lesson 1 – 第一課</a></li>
          <li key="lessons1"><a href="./lesson_numbers.html">Zahlen – Numbers – 數目字</a></li>
          <li key="lessons2"><a href="./lesson_abc.html">Das Alphabet – The alphabet – 德文字母</a></li>
        </ul>
      </div>
    );
  }
}

ReactDOM.render(
  <MainComponent />,
  document.getElementById('react-elem')
);