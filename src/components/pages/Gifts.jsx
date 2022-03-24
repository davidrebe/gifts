import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Dimmer, Loader } from 'semantic-ui-react';
import { doGiftProfileOpen, doGiftRequest } from '../../actions/gift-actions';
import { doUserAddFavorite, doUserDeleteFavorite } from '../../actions/user-actions';
import GridComponent from "../presentational/Grid";
import Profile from "./Profile";

const Gifts = () => {
  const isLoading = useSelector((state) => state.gift.gifts.loading);
  const giftById = useSelector((state) => state.gift.gifts.giftById);
  const pagination = useSelector((state) => state.gift.gifts.pagination);
  const pageLimit = useSelector((state) => state.user.pagination.pageLimit);
  const favoritesById = useSelector((state) => state.user.favoritesById);
  const dispatch = useDispatch();

  const addFavorite = (gift) => {
    dispatch(doUserAddFavorite(gift));
  }
  
  const deleteFavorite = (giftId) => {
    dispatch(doUserDeleteFavorite(giftId));
  }

  const openProfile = (giftId) => {
    dispatch(doGiftProfileOpen(giftId));
  }

  useEffect(() => {
    dispatch(doGiftRequest(pageLimit));
  }, []);

  return (
    <React.Fragment>
      <Dimmer active={isLoading} inverted>
        <Loader inverted/>
      </Dimmer>     
      <GridComponent giftById={giftById} favoritesById={favoritesById} addFavorite={addFavorite} deleteFavorite={deleteFavorite} openProfile={openProfile} pagination={pagination} />
      <Profile/>
    </React.Fragment>
  );
}

export default Gifts;
