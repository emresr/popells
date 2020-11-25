import React, { useState, useEffect} from "react"

const List = () => {
  const [polls, setPolls] = useState([])


  const getPolls = async () => {
    try {
      const response = await fetch("http://localhost:5000/polls")
      const jsonData = await response.json()

      setPolls(jsonData)
    } catch (err) {

      console.error(err.message)
    }
  }

  useEffect(() => {
    getPolls()
  }, [])
  
  return (
<div class="col-sm">
     <h6 className="list-title"> Latest Polls</h6>

     <div  className="list-item">
       <h1 className="item-title">Tİtle 1111 </h1>
      
       <h3 className="item-option">Option </h3> 
    </div>


    {polls.map(polls => (
    <div key={polls.poll_id} className="list-item">
      <h1>{polls.title} </h1>
      
      <h3>{polls.option} </h3> 
    </div>

    ))}
    </div>
  )
}

export default List
