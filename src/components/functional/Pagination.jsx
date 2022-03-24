import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Pagination } from 'semantic-ui-react';
import { doGiftRequest } from '../../actions/gift-actions';

export default function PaginationComponent({ pagination }) {
  const totalPages = parseInt(pagination.total_count / pagination.count);
  const pageLimit = useSelector((state) => state.user.pagination.pageLimit);

  const dispatch = useDispatch();

  const onPageChange = (e, props) => {
    dispatch(doGiftRequest(pageLimit, (props.activePage * pageLimit) - pageLimit));
  }

  return (
    <Pagination defaultActivePage={1} totalPages={totalPages} onPageChange={onPageChange} />
  )
}
