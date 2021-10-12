import React from 'react';
import { Spinner } from 'react-bootstrap';
import { connect } from 'react-redux';
import './style.css'


const Loader = ({isLoading}) => (
    isLoading ? (
        <div className="enigma-loader">
            <div>
                <Spinner animation="grow" variant="primary"/>
                <Spinner animation="grow" variant="secondary"/>
                <Spinner animation="grow" variant="success"/>
                <Spinner animation="grow" variant="danger"/>
                <Spinner animation="grow" variant="warning"/>
                <Spinner animation="grow" variant="info"/>
                <Spinner animation="grow" variant="light"/>
                <Spinner animation="grow" variant="dark"/>
            </div>
        </div>
    ) : null
);

const mapStateToProps = (state) => ({
    isLoading: state.commonContent.isLoading,
});
export default (connect(mapStateToProps)(Loader));
