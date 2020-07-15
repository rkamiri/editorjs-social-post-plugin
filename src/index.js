import './index.css';
import createMainBlock from './ui/index.js'
import PluginIcon from './assets/plugin-icon.svg'

import { createTwitterPost, createFacebookPost, createInstagramPost } from './posts/index.js'

export default class SocialPost {
  constructor({ data }) {
    this.data = data

    /**
     * container for the entire block
     */
    this.wrapper = null

    /**
     * URL of the social media post
     */
    this.url = ''
    this.selectedSocialMedia = 'Twitter'
  }

  static get toolbox() {
    return {
      icon: PluginIcon,
      title: 'Social Post'
    }
  }

  /**
   * Checks if url is empty or not.
   * Returns false if empty.
   * @param {boolean} savedData 
   */
  validate(savedData) {
    if (!savedData.url.trim()) {
      return false;
    }

    return true;
  }

  render() {
    try {
      this.wrapper = createMainBlock(this)

      return this.wrapper
    } catch (error) {
      console.log(error)
    }
  }

  async _createTwitterPost(url, caption) {
    await createTwitterPost(this, url, caption)
  }

  async _createFacebookPost(url, caption) {
    await createFacebookPost(this, url, caption)
  }

  async _createInstagramPost(url, caption) {
    await createInstagramPost(this, url, caption)
  }

  save(blockContent) {
    /**
     * Returns output as:
     * url - URL of the social media post.
     * caption - Caption provided by the user (giving more context about the post).
     */
    return {
      socialMediaPlatform: this.selectedSocialMedia,
      url: this.url,
      caption: blockContent.querySelector('#social-post-caption-input').value,
    }
  }
}
