import { useState } from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

export default function Join() {
  const [name, setName] = useState('')
  const [room, setRoom] = useState('')

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join</h1>
        <div>
          <input
            className="joinInput"
            placeholder="Name"
            type="text"
            onChange={({ target: { value } }) => setName(value)}
          />
        </div>
        <div>
          <input
            className="joinInput mt-20"
            placeholder="Rooom"
            type="text"
            onChange={({ target: { value } }) => setRoom(value)}
          />
          <Link to={`/chat?name=${name}&room=${room}`}>
            <button className="button mt-20" type="submit" disabled={!name || !room}>
              Sign In
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
