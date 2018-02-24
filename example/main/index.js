import React, { Component } from 'react'
import { getUrlParams } from './utils'
import '../styles/main.scss'
import Traditional from './traditional'
import Spa from './spa'

const itemArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const Main = () => (
  <div>
    <div className="title">React Simple Pagination demo</div>
    <Traditional items={itemArray} />
    <Spa items={itemArray} />
  </div>
)

export default Main

