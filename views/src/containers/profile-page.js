import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as NavActionCreators from '../actions/nav_actions';
import * as FooterActionCreators from '../actions/footer_actions';
import * as QuestsActionCreators from '../actions/quests_actions';
import Nav from '../components/nav';
import Footer from '../components/footer';
import {Container } from 'semantic-ui-react';
import UserInfo from '../components/user-info';
import Quests from '../components/quests';

class ProfilePage extends Component {
    static propTypes = {
        profile: PropTypes.object.isRequired
    };
    render() {
        const { dispatch } = this.props;
        const clickMenuItem = bindActionCreators(NavActionCreators.clickMenuItem, dispatch);
        const updateUserInfo = bindActionCreators(NavActionCreators.updateUserInfo, dispatch);
        const setLoggedIn = bindActionCreators(NavActionCreators.setLoggedIn, dispatch);
        const signOut = bindActionCreators(NavActionCreators.signOut, dispatch);
        const loadMyQuests = bindActionCreators(QuestsActionCreators.loadMyQuests, dispatch);
        const clickFooterItem = bindActionCreators(FooterActionCreators.clickFooterItem, dispatch);
        return (
            <div>
                <Container className={'main-content'}>
                    <Nav
                        signOut={signOut}
                        clickMenuItem={clickMenuItem}
                        updateUserInfo={updateUserInfo}
                        setLoggedIn={setLoggedIn}>
                    </Nav>
                    <Container>
                        <h1>Profile</h1>
                        <UserInfo/>
                        <Quests loadMyQuests={loadMyQuests}/>
                    </Container>
                </Container>
                <Footer clickFooterItem={clickFooterItem}></Footer>
            </div>
        );
    }
}



const mapStateToProps = state => (
    {
        profile: state
    }
);

export default connect(mapStateToProps)(ProfilePage);