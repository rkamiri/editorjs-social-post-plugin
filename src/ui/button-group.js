import createTwitterButton from './buttons/twitter-button.js'
import createFacebookButton from './buttons/facebook-button.js'
import createInstagramButton from './buttons/instagram-button.js'

/**
 * Creates button group and adds all the buttons.
 * @param {object} - Plugin object.
 * 
 * @returns {HTMLDivElement} - wrapper containing all social media buttons.
 */
export default function createButtonGroup(pluginObj) {
    try {
        const btngroup = document.createElement('div')
        btngroup.classList.add('btn-group')

        const twitterBtn = createTwitterButton(pluginObj)
        const facebookBtn = createFacebookButton(pluginObj)
        const instagramBtn = createInstagramButton(pluginObj)

        btngroup.appendChild(twitterBtn)
        btngroup.appendChild(facebookBtn)
        btngroup.appendChild(instagramBtn)

        return btngroup
    } catch (error) {
        console.error(error)
    }
}