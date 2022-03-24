import PropTypes from 'prop-types';
import React from 'react';
import { Button, Container, Grid, Image } from 'semantic-ui-react';
import { splitSameParts } from '../../utils/array-utils';
import PaginationComponent from '../functional/Pagination';

export default function GridComponet({ giftById, favoritesById, addFavorite, deleteFavorite, openProfile, pagination }) {
    return (
        <Container style={{ "marginTop": '5%' }}>
            <Grid columns={3}>
                {splitSameParts(Object.keys(giftById), 3).map((lineGifts) => (
                    <Grid.Row key={lineGifts.join()}>
                    {lineGifts.map((giftId) => (
                        <Grid.Column bordered="true" key={giftId} style={{ "height": "350px" }}>
                            <Container style={{ "height": "80%" }}>
                                <Image centered size="medium" verticalAlign="middle" src={giftById[giftId].images.original.url} style={{ "height": "100%", "width": "100%" }} />
                            </Container>
                            <Container style={{ "position": "absolute", "bottom": "0", "left": "0" }}>
                                {!Object.keys(favoritesById).includes(giftId) && (
                                    <Button color="green" content='Añadir a favoritos' onClick={() => addFavorite(giftById[giftId])} style={{ "margin": '5%' }}/>
                                )}
                                {Object.keys(favoritesById).includes(giftId) && (
                                    <Button color="red" content='Borrar de favoritos' onClick={() => deleteFavorite(giftId)} style={{ "margin": '5%' }}/>
                                )}
                                <Button color="blue" content='Ver detalle' onClick={() => openProfile(giftId)} style={{ "margin": '5%' }}/>
                            </Container>
                        </Grid.Column>
                    ))}
                    </Grid.Row>
                ))}
            </Grid>
            {Object.keys(pagination).length > 0 && (
                <PaginationComponent pagination={pagination} />
            )}
        </Container>
    )
}

GridComponet.defaultProps = {
    addFavorite: () => {},
    pagination: {}
}

GridComponet.propTypes = {
    giftById: PropTypes.object.isRequired,
    favoritesById: PropTypes.object.isRequired,
    addFavorite: PropTypes.func,
    deleteFavorite: PropTypes.func.isRequired,
    openProfile: PropTypes.func.isRequired,
    pagination: PropTypes.object,
}