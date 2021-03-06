import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

import {FaUsers as IconForum} from 'react-icons/fa';
import {FaAddressCard as IconUsers} from 'react-icons/fa';
import {FaComments as IconPosts} from 'react-icons/fa';
import {FaComment as IconThemes} from 'react-icons/fa';

import I18n from '../i18n';
import Utils from '../Utils';

const styles = theme => ({
    forumDiv: {
        width: 'calc(100% - 60px)',
        textAlign: 'center',
        padding: 30,
    },
    forumTitle: {
        fontSize: 20,
    },
    forumDivInfo: {
        width: '100%',
        maxWidth: 600,
        display: 'inline-block',
    },
    forumDivInfoBox: {
        width: '100%',
        display: 'flex',
        paddingTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    forumDivInfoCard: {
        width: 200,
        flex: 1,
    },
    forumIconMain: {
        display: 'inline-block',
        width: 64,
        height: 64,
    },
    forumDivInfoIcon: {
        width: 32,
        height: 32,
    },
    forumDivInfoText: {
        fontSize: 20
    },
    forumDivInfoValue: {
        fontSize: 32
    },
    forumDivInfoValueMobile: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    forumButton: {
        display: 'inline-block',
        color: '#FFFFFF',
        fontSize: 20,
        marginTop: 20,
    },
});

class ForumInfo extends Component {
    constructor(props) {
        super(props);
    }

    onGoToForum() {
        if (this.props.language === 'ru') {
            Utils.openLink('https://forum.iobroker.net/category/28/%D1%80%D1%83%D1%81%D1%81%D0%BA%D0%B8%D0%B9');
        } else if (this.props.language === 'zh-cn') {
            Utils.openLink('https://bbs.iobroker.cn/');
        } else if (this.props.language === 'de') {
            Utils.openLink('https://forum.iobroker.net/category/4/deutsch');
        }  else if (this.props.language === 'nl') {
            Utils.openLink('https://forum.iobroker.net/category/40/nederlands');
        } else {
            Utils.openLink('https://forum.iobroker.net/');
        }
    }

    render() {
        return (<div key="forum" className={this.props.classes.forumDiv + ' '  + (this.props.backClass || '')}>
            <IconForum className={this.props.classes.forumIconMain}/><br/>
            <span className={this.props.classes.forumTitle}>{I18n.t('forum-text')}</span><br/>
            <div className={this.props.classes.forumDivInfo}>
                <div className={this.props.classes.forumDivInfoBox}>
                    <div className={this.props.classes.forumDivInfoCard}>
                        <IconPosts className={this.props.classes.forumDivInfoIcon}/><br/>
                        <span className={this.props.classes.forumDivInfoText}>{I18n.t('Posts')}</span><br/>
                        <span className={this.props.classes.forumDivInfoValue + ' ' + (this.props.mobile ? this.props.classes.forumDivInfoValueMobile : '')} >245000+</span>
                    </div>
                    <div className={this.props.classes.forumDivInfoCard}>
                        <IconUsers className={this.props.classes.forumDivInfoIcon}/><br/>
                        <span className={this.props.classes.forumDivInfoText}>{I18n.t('Users')}</span><br/>
                        <span className={this.props.classes.forumDivInfoValue + ' ' + (this.props.mobile ? this.props.classes.forumDivInfoValueMobile : '')}>18400+</span>
                    </div>
                    <div className={this.props.classes.forumDivInfoCard}>
                        <IconThemes className={this.props.classes.forumDivInfoIcon}/><br/>
                        <span className={this.props.classes.forumDivInfoText}>{I18n.t('Themes')}</span><br/>
                        <span className={this.props.classes.forumDivInfoValue + ' ' + (this.props.mobile ? this.props.classes.forumDivInfoValueMobile : '')}>21000+</span>
                    </div>
                </div>
            </div><br/>
            <Button variant="contained" color="secondary" className={this.props.classes.forumButton} onClick={() => this.onGoToForum()}>
                {I18n.t('Join now')}
            </Button>
        </div>);
    }
}

ForumInfo.propTypes = {
    language: PropTypes.string,
    theme: PropTypes.string,
    mobile: PropTypes.bool,
    backClass: PropTypes.string,
};

export default withStyles(styles)(ForumInfo);
