import React from 'react'

export const Card = (props) => {
  return (
    <div className="card">
        <img src="https://images.unsplash.com/photo-1704278917298-254db4a66741?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <h1>{props.user}, {props.age}</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi explicabo doloremque et ab, eum quos earum dicta, cupiditate asperiores inventore maiores. Magnam dolorum et quasi voluptatum tempora nam distinctio iure?</p>
        <button>View Profile</button>
      </div>
  )
}
