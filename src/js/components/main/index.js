import React from 'react'

import PagesContainer from 'js/components/pagination'

const MainContainer = () => {
  const paginate = {itemsPerPage: 5, total: 50}

  return (
    <div>
      <PagesContainer paginate={paginate} />
    </div>
  )
}

export default MainContainer
