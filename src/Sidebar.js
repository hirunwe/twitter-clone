import React from 'react'
import "./Sidebar.css"
import TwitterIcon from "@material-ui/icons/Twitter"
import SidebarOption from "./SidebarOption"
import HomeIcon from "@material-ui/icons/Home"
import SearchIcon from '@material-ui/icons/Search'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone'
import MailOutlinedIcon from '@material-ui/icons/MailOutlined'
import BookOutlinedIcon from '@material-ui/icons/BookOutlined'
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined'
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined'
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import { Button } from "@material-ui/core"

function Sidebar() {
    return (
        <div className="sidebar">
            {/* Twitter Icon */}
            <TwitterIcon className="sidebar_twitterIcon" />

            <SidebarOption Icon={HomeIcon} active text="Home" />
            <SidebarOption Icon={SearchIcon} text="Explore" />
            <SidebarOption Icon={NotificationsNoneIcon} text="Notifications" />
            <SidebarOption Icon={MailOutlinedIcon} text="Messages" />
            <SidebarOption Icon={BookOutlinedIcon} text="Bookmarks" />
            <SidebarOption Icon={ListAltOutlinedIcon} text="Lists" />
            <SidebarOption Icon={PermIdentityOutlinedIcon} text="Profile" />
            <SidebarOption Icon={MoreHorizOutlinedIcon} text="More" />

            <Button variant="outlined" className="sidebar_tweet" fullWidth>Tweet</Button>

        </div>
    )
}

export default Sidebar
