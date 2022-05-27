import {useEffect, useState} from "react";

const ArrowsSvg = ()=>{
  const [total,setTotal] = useState([])
  const Total = 100
  const factor = 50
  for (let i=0; i<=Total-1; i++){
    total.push(i)
  }
  useEffect(()=>{
    console.log(total)
  },[])
  return(
    // <div className={'svg-container'}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1700 100" >
      {/*<polyline className="cls-1" points={`0 0 40 50 0 100`}/>*/}
      {/*<polyline className="cls-1" points={`40 0 80 50 40 100`}/>*/}
      {/*<polyline className="cls-1" points={`80 0 120 50 80 100`}/>*/}
      {
        total.map((el,i)=>(
          <polyline key={i} className="cls-1" points={`${i*factor} 0 ${(i+1)*factor} 50 ${i*factor} 100`}/>
        ))
      }
    </svg>
    // </div>
  )
}

export default ArrowsSvg
