import { useState } from 'react'

function Chapter4() {
   const [form, setForm] = useState({
      usename: '',
      message: '',
   })

   const { username, message } = form

   const onChange = (e) => {}

   const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
   }

   setForm(nextForm)

   return (
      <>
         <input name="username" value={username} onChange={onChange} />
         <input name="message" value={message} onChange={onChange} />
      </>
   )
}

export default Chapter4
