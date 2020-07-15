const fetchJsonp = require('fetch-jsonp')

/**
 * Adds the post in the iframe.
 * 
 * @param {string} post - the srcdoc for iframe containing markup for the post.
 * @returns {string} twitterPostFrame.outerHTML - the markup for the iframe representing the post.
 */
function createTwitterPostFrame(post) {
    try {
        const twitterPostFrame = document.createElement('iframe')
        twitterPostFrame.id = '#twitter-post-frame'
        twitterPostFrame.classList.add('post-frame')
        twitterPostFrame.frameBorder = 0
        twitterPostFrame.srcdoc = post

        twitterPostFrame.addEventListener('load', function () {
            /**
             * Makes all the links in the inline-frame on click, to open in a new tab of the browser 
             * rather than inside the inline-frame itself.
             */
            const links = this.contentWindow.document.getElementsByTagName('a');

            for (let i = 0; i < links.length; i++) {
                links[i].setAttribute('target', '_blank');
            }
        })

        /**
         * returning the iframe markup which can be later appended in postWrapper.
         */
        return twitterPostFrame.outerHTML
    } catch (error) {
        console.error(error)
    }
}

/**
 * Fetches post data from Twitter API.
 * 
 * @param {string} url - twitter post URL.
 * @returns {string} post - post html content. 
 */
async function getTwitterPostFromURL(pluginObj, url) {
    try {
        /**
         * Fetches the response containing post metadata.
         */
        const response = await fetchJsonp('https://publish.twitter.com/oembed?url=' + url)

        if (response) {
            /**
             * Comverting response to JSON format.
             */
            const result = await response.json()

            if (result) {
                /**
                 * URL validated, hence can be returned in output data.
                 */
                pluginObj.url = url
                /**
                 * retrieving the html property of the reponse JSOn whihc contains the markup for the embedding the post.
                 */
                const post = await result.html

                /**
                 * Creates the iframe containing the post and returns its markup.
                 */
                return createTwitterPostFrame(post)
            } else {
                throw new Error('Response is not convertible to JSON')
            }
        } else {
            throw new Error('Response is undefined')
        }
    } catch (error) {
        console.error(error)

        /**
         * Clearing url
         */
        pluginObj.url = ''
        /**
         * Shows error message when error occurs.
         */
        const errorWrapper = document.createElement('div')
        errorWrapper.innerHTML = 'The URL provided does not refer to any valid <b>Twitter</b> post.'
        errorWrapper.classList.add('error-wrapper')

        document.getElementById('social-post-url-input').value = ''

        return errorWrapper.outerHTML
    }
}


/**
 * Adds or replaces social media post.
 * @param {string} url - URL of the social media post.
 * @param {string} caption - caption provided by the user.
 */
export default async function createTwitterPost(pluginObj, url, caption) {
    try {
        const postWrapper = document.querySelector('.post-wrapper')

        /**
         * If postWarpper does not already exist create one.
         */
        if (postWrapper == null) {
            const postWrapper = document.createElement('div')
            postWrapper.id = 'twitter-post-wrapper'
            postWrapper.classList.add('post-wrapper')

            /**
             * Returns the iframe representing the post.
             */
            postWrapper.innerHTML = await getTwitterPostFromURL(pluginObj, url)

            /**
             * Appending the user provided caption.
             */
            const captionContainer = document.createElement('div')
            captionContainer.id = 'caption-container'
            captionContainer.textContent = caption

            postWrapper.appendChild(captionContainer)

            /**
             * Appending the postWrapper to the main block if it does not already exist.
             */
            pluginObj.wrapper.appendChild(postWrapper)
        }
        /**
         * If postWrapper already exists, change its update its content i.e. post and caption.
         */
        else {
            postWrapper.id = 'twitter-post-wrapper'

            /**
             * Returns the iframe representing the post.
             */
            postWrapper.innerHTML = await getTwitterPostFromURL(pluginObj, url)

            /**
             * Appending the user provided caption.
             */
            const captionContainer = document.createElement('div')
            captionContainer.id = 'caption-container'
            captionContainer.textContent = caption

            postWrapper.appendChild(captionContainer)
        }
    } catch (error) {
        console.error(error)
    }
}