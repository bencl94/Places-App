import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useForm } from '../../shared/hooks/form-hooks';
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/util/validators';
import './PlaceForm.css';
import { Link } from 'react-router-dom';

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Empire State Building',
        description: 'One of the most famous sky scrapers in the world',
        imageUrl: 'https://marvel-b1-cdn.bc0a.com/f00000000179470/www.esbnyc.com/sites/default/files/styles/small_feature/public/2019-10/home_banner-min.jpg?itok=uZt-03Vw',
        address: '20 W 34th St, New York, NY 10001, Vereinigte Staaten',
        location: {
            lat: 40.7484405,
            lng: -73.9878531
        },
        creator: 'u1'
    },
    {
        id: 'p2',
        title: 'Empire State Building',
        description: 'One of the most famous sky scrapers in the world',
        imageUrl: 'https://marvel-b1-cdn.bc0a.com/f00000000179470/www.esbnyc.com/sites/default/files/styles/small_feature/public/2019-10/home_banner-min.jpg?itok=uZt-03Vw',
        address: '20 W 34th St, New York, NY 10001, Vereinigte Staaten',
        location: {
            lat: 40.7484405,
            lng: -73.9878531
        },
        creator: 'u2'
    }
];

const UpdatePlace = props => {
    const placeId = useParams().placeId;


    const [formState, inputHandler, setFormData] = useForm(
        {
            title: {
                value: '',
                isValid: false
            },
            description: {
                value: '',
                isValid: false
            }
        },
        false
    );

    const identifiedPlace = DUMMY_PLACES.find(p => p.id === placeId);

    useEffect(() => {
        setFormData(
            {
                title: {
                    value: identifiedPlace.title,
                    isValid: true
                },
                description: {
                    value: identifiedPlace.description,
                    isValid: true
                }
            },
            true
        );
    }, [setFormData, identifiedPlace]);

    if (!identifiedPlace) {
        return (
            <div className='center'>
                <h2>Could not find place!</h2>
            </div>
        )
    }

    const placeSubmitHandler = event => {
        event.preventDefault();
        console.log(formState.inputs); //send this to the backend
    }

    if (!formState.input.title.value) {
        return (
            <div className='center'>
                <h2>Loading...</h2>
            </div>
        )
    }

    return (
        <form
            className='place-form'
            onSubmit={placeSubmitHandler}
        >
            <Input
                id='title'
                type="text"
                label='Title'
                element='input'
                validators={[VALIDATOR_REQUIRE()]}
                errorText='Please enter a valid title'
                onInput={inputHandler}
                value={formState.inputs.title.value}
                valid={formState.inputs.title.isValid}
            />
            <Input
                id='description'
                label='Description'
                element='textarea'
                validators={[VALIDATOR_MINLENGTH(5)]}
                errorText='Please enter a valid description (at least 5 characters)'
                onInput={inputHandler}
                value={formState.inputs.description.value}
                valid={formState.inputs.description.isValid}
            />
            <Link to={`/place/${props.userId}`} >
                <Button
                    type='submit'
                    disabled={!formState.isValid}
                >
                    UPDATE PLACE
                </Button>
            </Link>
        </form>

    );
};

export default UpdatePlace;