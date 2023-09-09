import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import "./qrview.css"
import { ChromePicker } from "react-color";
import TextField from '@mui/material/TextField';
const QrView = () => {
    const [data,setData] = useState("hello")
    const [width,setWidth] = useState(100)
    const [height,setHeight] = useState(100)
    const [data1,setData1] = useState("hello")
    const [width1,setWidth1] = useState(100)
    const [height1,setHeight1] = useState(100)
    const [qr,setQr] = useState("")
    const [color, setColor] = useState('#9DDD72');
    const [displayColorPicker, setDisplayColorPicker] = useState(false);
    const [bgcolor, setBgColor] = useState('#9DDD72');
    const [bgdisplayColorPicker, setBgDisplayColorPicker] = useState(false);
    const [type,setType] = useState("")
    // context
    
    const handleChange = color => setColor(color.hex);
    const handleChange1 = bgcolor => setBgColor(bgcolor.hex)
  
    const getQR= ()=>{
        setColor(color.replace("#",""))
        setBgColor(bgcolor.replace("#",""))
        setData(data1)
        setWidth(parseInt(width1))
        setHeight(parseInt(height1))
    }
    useEffect(()=>{
        console.log("here",color)
        
        setQr(`https://api.qrserver.com/v1/create-qr-code/?size=${width}x${height}&data=${data}&color=${color}&bgcolor=${bgcolor}`)
    },[data,width,height,color,bgcolor])
  return (
   
    <div className='mainContainer'>
        <div className='leftContainer'>
            <TextField id="outlined-basic" label="data" variant="outlined"  onChange={(e)=>setData1(e.target.value)}/>
            <br/>
            <TextField id="outlined-basic" label="width" variant="outlined" onChange={(e)=>setWidth1(e.target.value)}/>
            <br/>
            <TextField id="outlined-basic" label="height" variant="outlined" onChange={(e)=>setHeight1(e.target.value)}/>
            <br/>
            <TextField id="outlined-basic" label="png/gif/jpeg/jpg/svg/eps" variant="outlined" onChange={(e)=>setType(e.target.value)}/>

        <div className='colors'>
            <div className='color'>
                <div>Color</div>
                <div style={{width:"20px",height:"20px"}}>
                    <div
                    onClick={() => setDisplayColorPicker(!displayColorPicker)}
                    // className="overflow"
                    style={{background: color ,width:"20px",height:"20px",cursor:"pointer",border:"2px solid"}}
                    ></div>
                    <span>{color}</span>
                </div>
                {
                    displayColorPicker && (
                    <div className="absolute mt-2 overflow">
                        <ChromePicker
                        color={color} onChange={handleChange}
                        />
                    </div>
                    )
                }
            </div>
            <div className='bgcolor'>
                    <div>bgColor</div>
                    <div style={{width:"20px",height:"20px"}}>
                        <div
                        onClick={() => setBgDisplayColorPicker(!bgdisplayColorPicker)}
                        // className="overflow"
                        style={{background: bgcolor ,width:"20px",height:"20px",cursor:"pointer",border:"2px solid"}}
                        ></div>
                        <span>{bgcolor}</span>
                    </div>
                    {
                        bgdisplayColorPicker && (
                        <div className="absolute mt-2 overflow">
                            <ChromePicker
                            color={bgcolor} onChange={handleChange1}
                            />
                        </div>
                        )
                    }
            </div>
        </div>
            <br/>
            <Button variant="contained" onClick={getQR}>Generate</Button>
        </div>
        <div className='rightContainer'>
            {qr!=""?<img src={qr} alt='qrcode'/>:null}
        </div>
    </div>
  )
}

export default QrView