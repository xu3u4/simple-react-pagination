import React from 'react';

import PagesContainer from 'js/components/pagination';

const MainContainer = () => {
  const paginate = {items_per_page: 5, total: 50}

  return (
    <div>
      <PagesContainer paginate={paginate} />
    </div>
  )
}

export default MainContainer
