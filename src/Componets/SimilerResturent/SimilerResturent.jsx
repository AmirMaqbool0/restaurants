import React from 'react'
import './style.css'
import { MessageCircle, ThumbsUp } from 'lucide-react'


const SimilerResturent = () => {
  return (
    <div className='similer-resturent-container'>
        <div className="similer-resturent-logo">
         <img src="https://s3-alpha-sig.figma.com/img/833e/fa4f/2671edd4e8b30fed619bbc3cf3d279c9?Expires=1703462400&Signature=LGUPzpOklNO~HkkL5ru7scrPlQVG3~PAiTK13BqyVkbeZXd4kjlTU17WbMZzSNoMlH~oWPRhVUBok~Xb7850gOHp9db362t2nOQJrfAJbpNnt-GygTts7bEXE9ZwdLo3eS4mHISFdj4jSR-vr6D~5TcyCLCLmmFKZNSanasOEZGixiB6GKtvOxfrDSfNIR7PKcNiIjBtRascoZBmT4E-GTl092OnMajjziolLpGuHPXQFLgTiofQ~GLHwbFuLAS8UkR7lB8kCnKgG9L0kICT8WlorAHXtdgDiVeLlYmlRrPzPozE9ACZoTwiYB4TApqrB78263786k-xKFUnreAEfg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
        </div>
        <div className="similer-resturent-text">
         <div className="similer-resturent-heading">
            <span>Restaurant 1</span>
         </div>
         <div className="similer-resturent-detail-text">
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo rem doloribus</span>
         </div>
        <div className="resturent-feedback">
            <span><ThumbsUp size={15} /> 10</span>
            <span><MessageCircle size={15} />12</span>
            <span>1 Hour Ago</span>
        </div>
       
        </div>
    </div>
  )
}

export default SimilerResturent