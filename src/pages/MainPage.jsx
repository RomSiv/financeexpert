import React from 'react'
import BiuroRachunkowe from '../components/BiuroRachunkowe/BiuroRachunkowe'
import FinanceExpert from '../components/FinanceExpert/FinanceExpert'
import OfertaBiura from '../components/OfertaBiura/OfertaBiura'

export function MainPage() {
  return (
    <div>
      <BiuroRachunkowe />
      <FinanceExpert />
      <OfertaBiura />

    </div>
  )
}
