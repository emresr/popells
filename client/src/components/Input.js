import React, { useState, useEffect } from "react"

const Input = () => {
  const [title, setTitle] = useState("")
    const [option, setOption] = useState("")

  const onSubmitForm = async (e) => {
    e.preventDefault()
    try {
      const body = { title }
      const response = await fetch("http://localhost:5000/polls", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      })

      window.location = "/"
    } catch (err) {
      console.error(err.message)
    }
  }

  return (
    <div class="form-style-6">
      <form onSubmit={onSubmitForm}>
        <input type="text"   value={title}
          onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
        <input type="text"  placeholder="Option" />
        <input type="submit" value="Send" />
      </form>
    </div>
  )
}

export default Input