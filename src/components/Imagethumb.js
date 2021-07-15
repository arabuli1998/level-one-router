import React from 'react'
import detail from './styles/detail.css'

export default function Imagethumb({ images, setIndex }) {
    return (
        <div className="firstcol">
        <div className="imagethumb">
            {
                images.map((img, index) => (
                    <img src={img} alt="" key={index}
                        onClick={() => setIndex(index)} />
                ))
            }
            </div>
            </div>
    )
}
