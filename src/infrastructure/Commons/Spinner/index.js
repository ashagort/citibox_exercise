import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'

import './style.css'

export const Spinner = () => {
  return (
        <div className={'spinner__container'}>
            <CircularProgress />
        </div>
  )
}
