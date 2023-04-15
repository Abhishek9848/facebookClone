import React from 'react'

export default function SettingAndPrivacy({ setVisible }) {
    return (
        <div className='absolute_wrap'>
            <div className='absolute_wrap_header'>
                <div className='circle hover1' style={{ width: "40px" }}>
                    <i className='arrow_back_icon' onClick={() => setVisible(0)}></i>
                </div>
                Settings & privacy
            </div>
            <div className='mmenu_item hover3'>
                <div className='small_circle'>
                    <i className='settings_filled_icon'></i>
                </div>
                <span>Settings</span>
            </div>
            <div className='mmenu_item hover3'>
                <div className='small_circle'>
                    <i className='privacy_checkup_icon'></i>
                </div>
                <span>Privacy Checkup</span>
            </div>
            <div className='mmenu_item hover3'>
                <div className='small_circle'>
                    <i className='privacy_shortcuts_icon'></i>
                </div>
                <span>Privacy Shortcuts</span>
            </div>
            <div className='mmenu_item hover3'>
                <div className='small_circle'>
                    <i className='activity_log_icon'></i>
                </div>
                <span>Activity Log</span>
            </div>
            <div className='mmenu_item hover3'>
                <div className='small_circle'>
                    <i className='news_icon'></i>
                </div>
                <span>News Feed Preferences</span>
            </div>
            <div className='mmenu_item hover3'>
                <div className='small_circle'>
                    <i className='language_icon'></i>
                </div>
                <span>Language</span>
            </div>
        </div>
    )
}