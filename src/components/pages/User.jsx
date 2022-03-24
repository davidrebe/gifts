import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Container, Label, Select } from 'semantic-ui-react';
import { doGiftProfileOpen } from '../../actions/gift-actions';
import { doUserChangePageLimit, doUserDeleteFavorite } from '../../actions/user-actions';
import GridComponent from "../presentational/Grid";
import Profile from "./Profile";

const paginationOptions = [
    { key: '6', value: '6', text: '6' },
    { key: '12', value: '12', text: '12' },
    { key: '18', value: '18', text: '18' },
    { key: '24', value: '24', text: '24' },
    { key: '32', value: '32', text: '32' }
];

const User = () => {
  const favoritesById = useSelector((state) => state.user.favoritesById);
  const pageLimit = useSelector((state) => state.user.pagination.pageLimit);
  const dispatch = useDispatch();

  const openProfile = (giftId) => {
    dispatch(doGiftProfileOpen(giftId));
  }

  const deleteFavorite = (giftId) => {
    dispatch(doUserDeleteFavorite(giftId));
  }

  const changePageLimit = (e, data) => {
    dispatch(doUserChangePageLimit(data.value));
  }

  return (
    <React.Fragment>
      <Container>
        <Label>Registros por página</Label>
        <Select placeholder='Registros por página' options={paginationOptions} value={pageLimit.toString()} onChange={changePageLimit} />
      </Container>
      <GridComponent giftById={favoritesById} favoritesById={favoritesById} deleteFavorite={deleteFavorite} openProfile={openProfile} />
      <Profile/>
    </React.Fragment>
  );
}

export default User;
