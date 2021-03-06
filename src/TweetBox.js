import React from 'react'
import "./TweetBox.css"
import { Avatar, Button } from "@material-ui/core"


function TweetBox() {
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox_input">
                    <Avatar src="https://lh3.googleusercontent.com/-BCowdqLe_vI/Xr-ApYmKRlI/AAAAAAAACJo/p8rju7ImUFU4nuu_N1JCBM_NFInVxFAZACEwYBhgLKtMDAL1OcqxgjKKL12lH9cJzZ-r56OXiUCA2LJdDBWcy18OOL-62NDocHJD5q2mKa6DYujhUCpqfgHBmt9P83FVjfzBW2Lvs4q-BtU-S52yVk7a-dvAmWuziSVlxgr0r5asz0dtsssJnwLaAN8ZjJY0BsoEcqAQPwOdG1CBkYDfdzk0FV2jNmVKkDM80PFLycZA_FhyaEV8xZudqJnokL-z9do8GZnQbfCaAoWhsF4ZvH-8JDhXgZd9xbQavfoc1xSYquybm00mfLc8wUT7jC970LlQXMIeyoHPnHO4KdsFTiv7o3HSFnsuTps5_ZDBs1_oEB3j3F7aWfyyt2fBTyKLt3I5h6aHk9G52SXxFtFZBi4xrMzgobbKUjjzKyfUIDibFCdHa2W0TXVbotCLNSHHaSJRksRJGkD-vhQtS4jd17tU6CAOvfo3Ii-qtvjKQYLQwZFPVzt938u_rrggrthK9y0FQkQKVqHt9Wjwr7cUBEt_YHcSmcfcKHffyRniY6Fgq83ErWiUzvNX7YPqc3wzC0TZyeRIOJoVWrCfM4Osw1Uvhv2US_Ds8g5WLAYewuD7dYa7WCBWfGMmJCrJa47uFN8FWe5mSa_t2tDmURnf3EwrKyM8w-uG6-QU/w139-h140-p/Screenshot_20191014-124519_Gallery.jpg"></Avatar>
                    <input placeholder="What's happening?" type="text" />
                </div>
                <input className="tweetBox_imageInput" placeholder="Optional: Enter image URL" type="text" />
                <Button className="tweetBox_tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
