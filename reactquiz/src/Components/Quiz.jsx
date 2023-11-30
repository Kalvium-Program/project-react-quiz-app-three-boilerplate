import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Quiz = () => {
  // Quiz data (question, options, and correct answer)
  const quizData = [
    {
        "question": "What temperature does water boil at?",
        "optionA": "50 degrees Celcius",
        "optionB": "25 degrees Celcius",
        "optionC": "100 degrees Celcius",
        "optionD": "150 degrees Celcius",
        "answer": "100 degrees Celcius"
    },
  
    {
        "question": "Who wrote Julius Caesar, Macbeth and Hamlet?",
        "optionA": "Wole Soyinka",
        "optionB": "William Shakespeare",
        "optionC": "Ngozi Chimamanda Adichie",
        "optionD": "Dan Brown",
        "answer": "William Shakespeare"
    },
  
    {
        "question": "What did the crocodile swallow in Peter Pan?",
        "optionA": "A Book",
        "optionB": "A Computer",
        "optionC": "A pair of shoes",
        "optionD": "Alarm Clock",
        "answer": "Alarm Clock"
    },
  
    {
        "question": "Which is the only mammal that can’t jump?",
        "optionA": "Dog",
        "optionB": "Elephant",
        "optionC": "Goat",
        "optionD": "Lion",
        "answer": "Elephant"
    },
  
    {
        "question": "Who lived at 221B, Baker Street, London?",
        "optionA": "Tony Stark",
        "optionB": "Morgan Freeman",
        "optionC": "Sherlock Holmes",
        "optionD": "Samuel L. Jackson",
        "answer": "Sherlock Holmes"
    },
  
    {
        "question": "What colour is a panda?",
        "optionA": "Green and Yellow",
        "optionB": "Blue and Red",
        "optionC": "Green and White",
        "optionD": "Black and White",
        "answer": "Black and White"
    },
  
    {
        "question": "Where is the smallest bone in the human body?",
        "optionA": "The Chest",
        "optionB": "The Ear",
        "optionC": "The Legs",
        "optionD": "The Hands",
        "answer": "The Ear"
    },
  
    {
        "question": "What does the roman numeral C represent?",
        "optionA": "100",
        "optionB": "10",
        "optionC": "10,000",
        "optionD": "1,000,000",
        "answer": "100"
    },
  
    {
        "question": "What takes place in Hong Kong's Happy Valley?",
        "optionA": "Chicken Wrestling",
        "optionB": "Horse racing",
        "optionC": "Street Racing",
        "optionD": "Arm Wrestling",
        "answer": "Horse racing"
    },
  
    {
        "question": "Who painted the Mona Lisa?",
        "optionA": "Alexander Graham Bell",
        "optionB": "Sir Isaac Newton",
        "optionC": "Leonardo Da Vinci",
        "optionD": "Albert Einstein",
        "answer": "Leonardo Da Vinci"
    },
  
    {
        "question": "What’s the most important book in the Moslem religion?",
        "optionA": "The Koran",
        "optionB": "The Dictionary",
        "optionC": "The Bible",
        "optionD": "The Chemistry text Book",
        "answer": "The Koran"
    },
  
    {
        "question": "What’s the capital of Ethiopia?",
        "optionA": "Cape Town",
        "optionB": "San Francisco",
        "optionC": "Abuja",
        "optionD": "Syndey",
        "answer": "Addis Ababa"
    },
  
    {
        "question": "How many squares are there on a chess board?",
        "optionA": "128",
        "optionB": "64",
        "optionC": "32",
        "optionD": "256",
        "answer": "64"
    },
  
    {
        "question": "Who invented the electric light bulb?",
        "optionA": "Tom Cruise",
        "optionB": "Barack Obama",
        "optionC": "Wole Soyinka",
        "optionD": "Thomas Edison",
        "answer": "Thomas Edison"
    },
  
    {
        "question": "What are the first three words of the bible?",
        "optionA": "be with everyone",
        "optionB": "Again Jesus asked",
        "optionC": "In the beginning",
        "optionD": "At that time",
        "answer": "In the beginning"
    }
  ]
  




  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score,setScore] = useState(0);
  const [incorrect,setIncorrect] = useState(0);

  let localscore = localStorage.setItem("score",JSON.stringify(score));
  let localincorrect = localStorage.setItem("incorrect",JSON.stringify(incorrect));
  console.log(localincorrect,localscore,"152");
  const handleNext = () => {
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleQuit = ()=>{
     alert("Are you sure ?");
     setCurrentQuestionIndex(0)
  }

  const handleAnswer = (option,answer)=>{
      if(option==answer){
          alert("correct answer")
           setScore((pre)=> pre+10)
      }
      else{
        alert("wrong answer")
        setIncorrect((pre)=>pre+1);
      }
  }

 
  return (
    <div>
      <h1>Question </h1>
      <div>
        {currentQuestionIndex+1} of 15
      </div>
      <p>{quizData[currentQuestionIndex].question}</p>
      <div className='options-container'>
        {Object.values(quizData[currentQuestionIndex]).slice(1, -1).map((option, index) => (
          <div className='option' onClick={()=>handleAnswer(option,quizData[currentQuestionIndex].answer)} key={index}>{option}</div>
        ))}
      </div>
      <div className='button_container'>
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handleNext}>Next</button>
        <button onClick={handleQuit}>Quit</button>
        <Link to="/result"><button>Finish</button></Link>
      </div>
    </div>
  );
};

export default Quiz;