import React from 'react';
import ReactDOM from 'react-dom';

const lesson1 = require('./lessons/lesson1');
const lesson2 = require('./lessons/lesson2');
const lessonsAll = require('./lessonsAll');
const numOfLessons = lessonsAll.allLessonsList.length;

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
    //this.resolveLessonTitle = this.resolveLessonTitle.bind(this);
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
  
  //resolveLessonTitle() {
  //  if(this.props.lessonNumber == 1){
  //    return lesson1.lessonTitle;
  //  }
  //  if(this.props.lessonNumber == 2){
  //    return lesson2.lessonTitle;
  //  }
  //  else {
  //    return "lesson not defined";
  //  }
  //}
  
  render() {
    const lessonNum =  this.props.lessonNumber;
    const allLessons = lessonsAll.allLessonsList;
    return(
      <div className="lection main-contents">
        <h2> Lektion {this.props.lessonNumber} – Lesson {lessonNum} – 第{this.getChineseLessonNumber()}課</h2>
        <div className="lection-title"> {allLessons[lessonNum - 1].lessonTitle} </div>
        <PracticeText lessonNumber={lessonNum} />
        <VocabularyAll lessonNumber={lessonNum} />
        <TasksAll lessonNumber={lessonNum} />
      </div>
    );
  }
}

class TasksAll extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const tasks = lessonsAll.allLessonsList[this.props.lessonNumber - 1].tasks;
    const tasksAll = [];
    
    for(var i = 0; i < tasks.length; i++){
        tasksAll.push(
          <Task key={"task"+i} taskNum={i} taskContent={tasks[i]}/>
        );
    }
    
    return(
      <div className="tasks">
        <h3>Aufgaben - Tasks - 練習</h3>
        {tasksAll}
      </div>
    );
  }
}

class Task extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    console.log("task rendering: " + this.props.taskContent);
    
    const subTasks = this.props.taskContent.taskSubjects;
    const subTasksAll = [];
    
    for(var i = 0; i < subTasks.length; i++){
      subTasksAll.push(
        <SubTask key={"subtask"+i} subTaskNum={i} subTaskContent={this.props.taskContent.taskSubjects[i]}/> 
      );
    }
    
    return(
      <div className="task">
      <span className="subtask">{this.props.taskNum +1}.</span> {this.props.taskContent.taskText}
        {subTasksAll}
      </div>
    );
  }
}

class SubTask extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return(
      <div>
        <span className="subtask indent">{this.props.subTaskNum+1}.</span> {this.props.subTaskContent}
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
    
    for(var i = 0; i < vocArr.length; i++){
        vocComponentArr.push(
          <VocabularySingle key={"voc"+i} german={vocArr[i].german} english={vocArr[i].english} chinese={vocArr[i].chinese} />
        );
    }
    
    return (
      <div className="vocabulary">
        <h3>Vokabeln – Vocabulary – 單字</h3>
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
    return (
      <div>
        <NavBar onClick={this.handlePageClick} currentContentId={this.state.currentPage}/>
      
        { 
          (this.state.currentPage == 0)? <StartPage /> : <LessonPage lessonNumber={this.state.currentPage} lessonId={this.state.currentPage} />
        }
      
        <AllLessons onClick={this.handlePageClick} />
      </div>
    );
  }
}

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    //this.state = {contentId: this.props.currentContentId};
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
        <NavElem key="nav2" navUrl="#all" navTitle="Alle Lektionen – All lessons – 所有的課" />
        {(this.props.currentContentId - 1) > 0 ? prevButton : ""}
        {(this.props.currentContentId + 1) <= numOfLessons ? nextButton : ""}
      </div>
    );
  }
}

class NavElem extends React.Component {
  constructor(props) {
    super(props);
    this.navItemClicked = this.navItemClicked.bind(this);
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
  constructor(props) {
    super(props);
    this.lessonsItemClicked = this.lessonsItemClicked.bind(this);
  }
  
  lessonsItemClicked(id) {
    this.props.onClick(id);
  }
  
  render() {
    const lessonItemsList = [];
    const allLessons = lessonsAll.allLessonsList;
    
    for(var i = 0; i < allLessons.length; i++){
      lessonItemsList.push(
        <li key={"lessons"+i}><div onClick={this.lessonsItemClicked.bind(this, (i+1))}>Lesson {i+1} – "{allLessons[i].lessonTitle}"</div></li>
      );
    }
    
    return(
      <div id="all">
        <h2>Alle Lektionen – All lessons – </h2>
        <ul>
          {lessonItemsList}
        </ul>
      </div>
    );
  }
}

ReactDOM.render(
  <MainComponent />,
  document.getElementById('react-elem')
);