import React from 'react'

import Pagination from 'js/components/pagination'

const MainContainer = () => {
  const itemsPerPage = 5, totalItems = 100

  return (
    <div>
      <Pagination itemsPerPage={itemsPerPage} totalItems={totalItems} />
    </div>
  )
}

export default MainContainer
