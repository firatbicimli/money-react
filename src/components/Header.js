import React from 'react'

const Header = ({total, money}) => {
  return (
    <div>
        {total > 0 && money - total !== 0  && (
            <div>Harcayacak {money - total} $ paranız kaldı</div>
        )}
        {total === 0 && (
            <div>Harcamak için {money} $ paranız var</div>
        )}
        {money - total === 0 && (
            <div>Paranız bitti</div>
        )}
    </div>
  )
}

export default Header
