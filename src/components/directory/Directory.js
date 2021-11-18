import React from 'react';
import HomePageCard from '../HomePageCard/HomePageCard';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import './Directory.scss';

const Directory = ({ sections }) => {
    return (
        <div className='directory'>
            {sections.map(({ id, ...otherSectionProps }) => (
                <HomePageCard 
                    key={id}
                    {...otherSectionProps}
                />
            ))}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory)