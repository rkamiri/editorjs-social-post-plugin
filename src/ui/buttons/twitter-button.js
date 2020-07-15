import TwitterIcon from './../../assets/twitter-icon.png';

/**
 * Returns Twitter button as HTMLButtonElement.
 * @param {object} - Plugin object.
 * 
 * @returns {HTMLButtonElement} - Twitter button.
 */
export default function createTwitterButton(pluginObj) {
    try {
        const twitterBtn = document.createElement('button')
        twitterBtn.id = 'twitter-btn'
        /**
         * Keeps this in default selected state.
         */
        twitterBtn.style.backgroundColor = '#efefef'

        /**
         * img element which represents the logo of the social media platform.
         */
        const twitterIcon = document.createElement('img')
        twitterIcon.classList.add('logo')
        twitterIcon.src = TwitterIcon
        twitterIcon.alt = 'Twitter Icon'

        const twitterName = document.createElement('div')
        twitterName.textContent = 'Twitter'
        twitterName.style = 'color: #808080;'

        twitterBtn.appendChild(twitterIcon)
        twitterBtn.appendChild(twitterName)

        /**
         * Highlights background of the recently clicked button and turns other buttons' backgrounds to transparent. 
         */
        twitterBtn.addEventListener('click', function () {
            pluginObj.selectedSocialMedia = 'Twitter'

            this.style.backgroundColor = '#efefef'
            document.getElementById('facebook-btn').style.backgroundColor = 'transparent'
            document.getElementById('instagram-btn').style.backgroundColor = 'transparent'
        })

        return twitterBtn
    } catch (error) {
        console.error(error)
    }
}