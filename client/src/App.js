import { useState } from 'react';
import axios from 'axios'
import './App.css';

const App = () => {
  const [file, setFile] = useState(null)

  const onFormSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append('photo', file)
    const config = {
      headers: {
        'content-type': 'multipart/formdata'
      }
    }
    const url = 'http://localhost:3001/user/upload'
    axios.post(url, formData, config).then((response) => {
      alert('Image uploaded successfully!')
    })
    .catch((err) => {
      console.log('err', err)
    })
  }

  const onInputChange = (e) => {
    setFile(e.target.files[0])
  } 

  return (
    <div className="App">
      <form onSubmit={onFormSubmit}>
        <h1>File upload</h1>
        <input type='file' name='photo' onChange={onInputChange}/>
        <button type='submit'>Upload</button>
      </form>
    </div>
  );
}

export default App;
