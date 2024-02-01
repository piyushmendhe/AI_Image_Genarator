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


  return (
    <div>CreatePost</div>
  )
}

export default CreatePost