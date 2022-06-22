import React, {useState, useEffect} from "react";
import apiService from "./apiService";
import { Link } from "react-router-dom";
import RenderImage from "./RenderImage"


export default function UserImages() {
  const [imgPaths, setImgPaths] = useState([])

  useEffect(()=> {
    fetchData()
  },[])

  const fetchData = async () =>{
      let filePaths = await apiService.import.retrieveFilePaths()
      setImgPaths(filePaths)
  }

    return(
      <div>
    <div>
     <div>Your Images</div>
        <div>
         {imgPaths !== null ?
         imgPaths.map((image)=>{
          return(
            <div>
              <RenderImage filePath={image.filepath} />

        </div>
          )
        })
        :
        <div>
          No Images
        </div>}
      </div>
     <Link to="/">Home</Link>|{" "}
     <Link to="/upload">Upload New Files </Link> |{" "}
    </div>
    </div>
  )
}
