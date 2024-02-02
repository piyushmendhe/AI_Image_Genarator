import React , {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {preview} from '../assets'
import {getRandomPromt} from '../utils'
import { Formfield ,Loader } from '../Components'

const CreatePost = () => {

  const navigate = useNavigate();
  const [form,setform] = useState({
    name:'',
    prompt:'',
    photo:'',
  });
  const[generatingImg,setGeneratingImg] = useState(false);
  const[loading ,setLoading] = useState(false);

  const handleSubmit=() =>{}
  const handleChange=(e) =>{}
  const handleSurpriseMe = ()=>{}
  return (
    <section className='max-w-7xl mx-auto'>
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">
          Create
        </h1>
          <p className="mt-2 text-[#666e75] text-[16px] maxw[500px]">
            Create AI-Image
          </p>
      </div>

      <form className='mt-16 max-w-3xl' onSubmit={handleSubmit}>
      <div className='flex flex-col gap-5'>
        <Formfield
        lableName="Your Name"
        type = "text"
        name="name"
        placeholder="Piyush Mendhe"
        value={form.name}
        handleChange={handleChange}
        />
        <Formfield
        lableName="Promt"
        type = "text"
        name="Promt"
        placeholder="Piyush Mendhe"
        value={form.prompt}
        handleChange={handleChange}
        isSurpriseMe
        handleSurpriseMe ={handleSurpriseMe}
        />
      </div>
      </form>

    </section>
  )
}

export default CreatePost