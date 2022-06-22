import { createWorker } from "tesseract.js";
import {useState, useEffect} from "react";
import { useLocation } from 'react-router-dom';


export default function TesseractWorker(){
const {state} = useLocation()
const [imgData, setImageData] = useState(state.imgData)
const [imgText, setImgText] = useState("")
const [imgLines, setImgLines] = useState("")


useEffect(()=> {



  console.log('state', imgData)
  const worker = createWorker();
  (async () => {
    await worker.load();
    await worker.loadLanguage("eng");
    await worker.initialize("eng");
    console.log('worker created')
    await worker.setParameters({
      preserve_interword_spaces: 1,
    });
    const {
      data: { text, lines },
    } = await worker.recognize(imgData);
    console.log(text);
    setImgText(text)
    setImgLines(lines)
    await worker.terminate();

    })();
  },[])



  return(
    <div>Reading IMG</div>
  )
}
