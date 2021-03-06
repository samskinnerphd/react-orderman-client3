/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 */


// Module Imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';


// Component Imports
import BackButton from '../buttons/BackButton';
import Navbar from '../nav/Navbar';
import PageTitle from '../titles/PageTitle';


/**
 * @class UnauthenticatedLayout
 * @description A reusable layout for your authenticated pages like Customers and Orders
 */
export default class AuthenticatedLayout extends Component {
  render() {
    const {
      children,
      showBackButton,
      pageTitle,
    } = this.props;

    return (
      <div>
        <Navbar />
        <div className="container-fluid">
          <div className="col-xs-12 col-md-10 col-md-offset-1">
            {(() => showBackButton && <BackButton />)()}
            <PageTitle
              showBackLink={showBackButton}
              title={pageTitle}
            />
          </div>
          <div className="col-xs-12 col-sm-12 col-md-10 col-md-offset-1">
            {children}
          </div>
        </div>
      </div>
    );
  }
}


AuthenticatedLayout.propTypes = {
  children: PropTypes.element.isRequired,
  pageTitle: PropTypes.string.isRequired,
  showBackButton: PropTypes.bool,
};


AuthenticatedLayout.defaultProps = {
  showBackButton: false,
};
