import React from 'react'
import ExperienceCard from '../cards/Experience/ExperienceCard'
import WhatIOfferCard from '../cards/WhatIOfferCard'

const WhatIOffer = () => {
  return (
    <section id='what-i-offer-section'>
      <h1>WHAT I OFFER</h1>
      <div className='what-i-offer-content text-center d-flex align-items-center justify-content-center'>
        <WhatIOfferCard />
      </div>
    </section>
  )
}

export default WhatIOffer
