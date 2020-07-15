import FacebookIcon from './../../assets/facebook-icon.png';

/**
 * Returns Facebook button as HTMLButtonElement.
 * @param {object} - Plugin object.
 * 
 * @returns {HTMLButtonElement} - Facebook button.
 */
export default function createFacebookButton(pluginObj) {
    try {
        const facebookBtn = document.createElement('button')
        facebookBtn.id = 'facebook-btn'
        
        /**
         * img element which represents the logo of the social media platform.
         */
        const facebookIcon = document.createElement('img')
        facebookIcon.classList.add('logo')
        facebookIcon.src = FacebookIcon
        facebookIcon.alt = 'Facebook Icon'

        const facebookName = document.createElement('div')
        facebookName.textContent = 'Facebook'
        facebookName.style = 'color: #808080;'

        facebookBtn.appendChild(facebookIcon)
        facebookBtn.appendChild(facebookName)

        /**
         * Highlights background of the recently clicked button and turns other buttons' backgrounds to transparent. 
         */
        facebookBtn.addEventListener('click', function () {
            pluginObj.selectedSocialMedia = 'Facebook'

            document.getElementById('twitter-btn').style.backgroundColor = 'transparent'
            this.style.backgroundColor = '#efefef'
            document.getElementById('instagram-btn').style.backgroundColor = 'transparent'
        })

        return facebookBtn
    } catch (error) {
        console.error(error)
    }
}