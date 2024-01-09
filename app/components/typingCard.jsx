'use client'
import React, { useState, useEffect, useRef } from 'react'
import paragraphData from './idWord.json'
import { document } from 'postcss'

const typingCard = () => {
   const uniqueWords = Array.from(new Set(paragraphData.words.map((words) => words.targetWord)))
   const [textData, setTextData] = useState('')
   const totalWords = 150
   const inpField = useRef(null)

   useEffect(() => {
    const generateRandomText = () => {
      let randArr = []
      for (let i = 0; i <= totalWords; i++) {
        let randIndex = Math.floor(Math.random() * uniqueWords.length)
        randArr.push(uniqueWords[randIndex])
      }
      return randArr
    }
    const randArr = generateRandomText();
    const combinedArr = randArr.concat(randArr)
    setTextData(randArr.join(' '))

    inpField.current.focus(); 
  }, [])

    const handleInputClick = () => {
      //console.log('click')
    }

    const handleInputKeyDown = (event) => {
     const typedChar = inpField.current.value.split("")[0]
     //setCharArray(typedChar)
     console.log(typedChar)
    }


   return (
    <div id='wrapper' className='mx-16 mt-10 p-6 bg-white rounded-3xl border-8 border-solid border-primaryColor shadow-md bg-bgColor text-textDark mx-16'>
      <div id='content-container'>
        <div id='text-box' className='font-mono font-medium text-2xl'>
          <input 
            id='inputfield' 
            type='text' 
            ref={inpField} 
            className='' 
            onClick={handleInputClick}
            onKeyDown={handleInputKeyDown}
          />
          <p>{[...textData].map((char, index) => (
          <span key={index}>{char}</span>
          ))}
          </p>
        </div>
      </div>
    </div>
  )
}

export default typingCard
