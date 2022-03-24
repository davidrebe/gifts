import React from 'react';
import ReactJson from 'react-json-view';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Header, Image, Modal } from 'semantic-ui-react';
import { doGiftProfileClose } from '../../actions/gift-actions';

const Profile = () => {
    const isOpen = useSelector((state) => state.gift.profile.isOpen);
    const giftId = useSelector((state) => state.gift.profile.giftId);
    const gift = useSelector((state) => state.gift.gifts.giftById)[giftId];

    const dispatch = useDispatch();
    
    const closeProfile = () => {
        dispatch(doGiftProfileClose());
    }

    return (
        <React.Fragment>
            {gift && (
                <Modal  onClose={() => closeProfile()} open={isOpen} >
                    <Modal.Header>Detalle del gift</Modal.Header>
                    <Modal.Content image>
                        <Image centered size="large" verticalAlign="middle" src={gift.images.original.url} />
                    </Modal.Content>
                    <Modal.Description>
                        <Header>Datos</Header>
                        <ReactJson src={gift} />
                    </Modal.Description>
                    <Modal.Actions>
                        <Button color='black' onClick={() => closeProfile()}>
                            Cerrar detalle
                        </Button>
                    </Modal.Actions>
                </Modal>
            )}
        </React.Fragment>
    )
}

export default Profile;