import React from 'react';
import ReactDOM from 'react-dom';

var numOfLessons = 2; //todo find a better way to update
var lesson1 = require('./lessons/lesson1');
var lesson2 = require('./lessons/lesson2');

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
  constructor(props) {
    super(props);
    this.getChineseLessonNumber = this.getChineseLessonNumber.bind(this);
    this.resolveLessonTitle = this.resolveLessonTitle.bind(this);
  }
  
  getChineseLessonNumber() {
    if(this.props.lessonNumber === "1"){
      return "一";
    }
    if(this.props.lessonNumber === "2"){
      return "二";
    }
    if(this.props.lessonNumber === "3"){
      return "三";
    }      
    if(this.props.lessonNumber === "4"){
      return "四";
    }      
    if(this.props.lessonNumber === "5"){
      return "五";
    }
    if(this.props.lessonNumber === "6"){
      return "六";
    }
    if(this.props.lessonNumber === "7"){
      return "七";
    }
    if(this.props.lessonNumber === "8"){
      return "八";
    }
    if(this.props.lessonNumber === "9"){
      return "九";
    }
    if(this.props.lessonNumber === "10"){
      return "十";
    }
    else{ //no conversion for now, todo
      return this.props.lessonNumber;
    }
  }
  
  resolveLessonTitle() {
    if(this.props.lessonNumber == 1){
      return lesson1.lessonTitle;
    }
    if(this.props.lessonNumber == 2){
      return lesson2.lessonTitle;
    }
    else {
      return "lesson not defined";
    }
  }
  
  render() {
    return(
      <div className="lection main-contents">
        <h2> Lektion {this.props.lessonNumber} – Lesson {this.props.lessonNumber} – 第{this.getChineseLessonNumber()}課</h2>
        <div className="lection-title"> {this.resolveLessonTitle()} </div>
        <PracticeText lessonNumber={this.props.lessonNumber} />
        <VocabularyAll lessonNumber={this.props.lessonNumber} />
      </div>
    );
  }
}

class VocabularyAll extends React.Component {
  constructor(props) {
    super(props);
    this.resolveVocabularies = this.resolveVocabularies.bind(this);
  }
  
  resolveVocabularies() {
    if(this.props.lessonNumber == 1){
      return lesson1.vocabulary;
    }
    if(this.props.lessonNumber == 2){
      return lesson2.vocabulary;
    }
    else {
      return "lesson not defined";
    }
  }
  
  render() {
    const vocArr = this.resolveVocabularies();
    const vocComponentArr = [];
    
    console.log("vocArr: "+vocArr + " first voc: "+vocArr[0] +" german: "+vocArr[0].german);
    
    for(var i = 0; i < vocArr.length; i++){
        vocComponentArr.push(
          <VocabularySingle key={"voc"+i} german={vocArr[i].german} english={vocArr[i].english} chinese={vocArr[i].chinese} />
        );
    }
    
    return (
      <div className="vocabulary">
        <h3> Vokabeln – Vocabulary – 單字</h3>
        {vocComponentArr}
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
  constructor(props) {
    super(props);
    this.resolvePracticeText = this.resolvePracticeText.bind(this);
  }
  
  resolvePracticeText() {
    if(this.props.lessonNumber == 1){
      return lesson1.practiceText;
    }
    if(this.props.lessonNumber == 2){
      return lesson2.practiceText;
    }
    else {
      return "lesson not defined";
    }
  }
  
  render() {
    const practiceText = this.resolvePracticeText();
    console.log("practiceText: "+practiceText + "german? "+ practiceText.german);
    return (
      <div className="practice">
        <h3> Übungstext – Reading Practice – 會話內容</h3>
  
        <PracticeTextBox language="german" text={practiceText.german} />
        
        <PracticeTextBox language="english" text={practiceText.english} />
      
        <PracticeTextBox language="chinese" text= {practiceText.chinese}/>
      
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
      pageContent = <LessonPage lessonNumber="1" lessonId="1" />
    }
    
    if(this.state.currentPage == 2){
      pageContent = <LessonPage lessonNumber="2" lessonId="2" />
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
    var prevButton = <NavElem key="nav3" onClick={this.props.onClick} 
          contentId={this.props.currentContentId - 1} 
          navTitle="Vorherige Lektion – Previous lesson – 前一課" />;
          
    var nextButton = <NavElem key="nav4" onClick={this.props.onClick} 
          contentId={this.props.currentContentId + 1} 
          navTitle="Nächste Lektion – Next lesson – 下一課" />;
    
    console.log("this.props.currentContentId :"+this.props.currentContentId );
    
    return(
      <div className="navbar">
        <NavElem key="nav1" onClick={this.props.onClick} contentId="0" navTitle="Home" />
        <NavElem key="nav2" navUrl="#all" navTitle="Alle Lektionen – All lessons – " />
        {(this.props.currentContentId - 1) > 0 ? prevButton : ""}
        {(this.props.currentContentId + 1) <= numOfLessons ? nextButton : ""}
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