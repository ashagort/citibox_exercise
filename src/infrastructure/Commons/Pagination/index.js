import React from 'react'
import Pagination from '@material-ui/lab/Pagination'

export const PaginationContent = ({ num, onClick }) => {
  return (
        <div className={'pagination__content'}>
            <Pagination count={num} onChange={onClick} />
        </div>
  )
}
