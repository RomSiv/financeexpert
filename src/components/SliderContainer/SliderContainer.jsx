import React from 'react'
import { slide_data } from '../../data/slide_data'
import OfertaBiura from '../OfertaBiura/OfertaBiura'

export default function SliderContainer() {
  return (
    <div>
{
    slide_data.map(e => <OfertaBiura key={e.id} {...e} />)
}
    </div>
  )
}
