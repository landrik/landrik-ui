import React, { FC } from 'react'

interface IProps {
  label: string
}

/**
* @author
* @function @sanitizeForId
**/

const sanitizeForId = (label:string) => {
  return label.toLowerCase().replace(/[^\w\s]|(\s+)/g, (_match: string, group1: string)=> group1? "-" : "");
 }

export default sanitizeForId  
