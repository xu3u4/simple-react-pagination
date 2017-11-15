import React from 'react'

import PagesContainer from 'js/components/pagination'

const MainContainer = () => {
  const itemsPerPage = 5, totalItems = 31

  return (
    <div>
      <PagesContainer itemsPerPage={itemsPerPage} totalItems={totalItems} />
    </div>
  )
}

export default MainContainer
