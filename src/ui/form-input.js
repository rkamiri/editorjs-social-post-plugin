/**
 * Returns form wrapper which contains inputs for URL and Caption and Preview button.
 * @param {object} - Plugin object.
 * 
 * @returns {HTMLDivElement} - wrapper containing inputs and preview button.
 */
export default function createInputForm(pluginObj) {
    try {
        /**
         * Creates an input element for social media post URL.
         */
        const urlInput = document.createElement('input')
        urlInput.id = 'social-post-url-input'
        urlInput.placeholder = 'Post URL'
        urlInput.classList.add('cdx-input')
        urlInput.style = 'margin: 12px 0'
        urlInput.value = pluginObj.data && pluginObj.data.url ? pluginObj.data.url : ''

        /**
         * Creates an input element for caption 
         */
        const captionInput = document.createElement('input')
        captionInput.id = 'social-post-caption-input'
        captionInput.placeholder = 'Caption'
        captionInput.classList.add('cdx-input')
        captionInput.style = 'margin: 12px 0'
        captionInput.value = pluginObj.data && pluginObj.data.caption ? pluginObj.data.caption : ''

        /**
         * Creates a button which adds provides gives a preview of the social media post.
         */
        const previewBtn = document.createElement('button')
        previewBtn.innerHTML = 'Preview'
        previewBtn.classList.add('cdx-button')
        previewBtn.style = 'margin: 12px 0 20px 0;'

        /**
         * calls appropriate social media post creater based on selected social medial platform.
         */
        previewBtn.addEventListener('click', async function () {
            const url = document.getElementById('social-post-url-input').value
            const caption = document.getElementById('social-post-caption-input').value

            if (url && url != ''){
                if (pluginObj.selectedSocialMedia == 'Twitter') {
                    await pluginObj._createTwitterPost(url, caption)
                } else if (pluginObj.selectedSocialMedia == 'Facebook') {
                    await pluginObj._createFacebookPost(url, caption)
                } else {
                    await pluginObj._createInstagramPost(url, caption)
                }
            }
        })

        /**
         * Creates form wrapper.
         */
        const formWrapper = document.createElement('div')
        formWrapper.classList.add('form-wrapper')
        
        formWrapper.appendChild(urlInput)
        formWrapper.appendChild(captionInput)
        formWrapper.appendChild(previewBtn)

        return formWrapper
    } catch (error) {
        console.error(error)
    }
}