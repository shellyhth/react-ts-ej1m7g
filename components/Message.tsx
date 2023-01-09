import * as React from 'react'

type MessageProps={
  font:string;
  text:string;
}
export default function Message({text,font}:MessageProps){
  return<h1 style={{fontFamily:'font'}}>{text}</h1>
}