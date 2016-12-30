import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addCard } from '../actions'


let AddCard = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addCard(input.value))
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
          Add Card
        </button>
      </form>
    </div>
  )
}

AddCard = connect()(AddCard)

export default AddCard