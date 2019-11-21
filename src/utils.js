import React from 'react'

export function gradient(num) {
  return {
      color: `hsl(${Math.min((num / 100) * 120, 120)}, 80%, 50%)`
    }
}

// takes a string of format: 
// Доброе утро (Dobraye utro)
// and the corresponding langID of the language
// and splits the value into an array so that the foreign
// characters can be wrapped in a span with their lang attribute

export function parseForeign(str, langID) {
  let language = ""
  if (langID === 1) {
    language = 'ru'
  }
  let parsed = str.split('(')
  let parsedArr = parsed.map(word => word.replace(/[()]/g,''))
  parsedArr[0] = <span lang={`${language}`}>{parsedArr[0]}</span>
  parsedArr[1] = `(${parsedArr[1]})`
  return parsedArr
}