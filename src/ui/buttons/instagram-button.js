import InstagramIcon from './../../assets/instagram-icon.png';

/**
 * Returns Instagram button as HTMLButtonElement.
 * @param {object} - Plugin object.
 * 
 * @returns {HTMLButtonElement} - Instagram button.
 */
export default function createInstagramButton(pluginObj) {
    try {
        const instagramBtn = document.createElement('button')
        instagramBtn.id = 'instagram-btn'

        /**
         * img element which represents the logo of the social media platform.
         */
        const instagramIcon = document.createElement('img')
        instagramIcon.classList.add('logo')
        instagramIcon.src = InstagramIcon
        instagramIcon.alt = 'Instagram Icon'

        const instagramName = document.createElement('div')
        instagramName.textContent = 'Instagram'
        instagramName.style = 'color: #808080;'

        instagramBtn.appendChild(instagramIcon)
        instagramBtn.appendChild(instagramName)

        /**
         * Highlights background of the recently clicked button and turns other buttons' backgrounds to transparent. 
         */
        instagramBtn.addEventListener('click', function () {
            pluginObj.selectedSocialMedia = 'Instagram'

            document.getElementById('twitter-btn').style.backgroundColor = 'transparent'
            document.getElementById('facebook-btn').style.backgroundColor = 'transparent'
            this.style.backgroundColor = '#efefef'
        })

        return instagramBtn
    } catch (error) {
        console.error(error)
    }
}