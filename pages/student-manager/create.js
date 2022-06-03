import { useRouter } from 'next/router';
import axios from 'axios';
import { useState } from 'react';

export default function Home() {
  const router = useRouter();
  const [form, setForm] = useState({
    id: '',
    name: '',
    birthday: '',
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
    console.log(form);
  }

  const handleSubmit = function (e) {
    axios.post("http://localhost:3030/student", form)
  }

  return (
    <div className="container pt-5">
      <h2>Create page</h2>
      <form>
        <div className="form-group">
          <label htmlFor="ID">ID</label>
          <input onChange={handleChange} type="text" className="form-control" id="id" name='id' />
        </div>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input onChange={handleChange} type="text" className="form-control" id="name" name='name' />
        </div>
        <div className="form-group">
          <label htmlFor="birthday">Birthday</label>
          <input
            onChange={handleChange}
            type="date" className="form-control" id="birthday" name='birthday' />
        </div>
        <button className='btn btn-primary' type='submit' onClick={handleSubmit} >Add new Student</button>
      </form>
      <button onClick={(e) => router.back()}>Back</button>
    </div>
  )
}