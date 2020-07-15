import createButtonGroup from './button-group.js'
import createFormInput from './form-input.js'

/**
 * Creates main block container.
 * @returns {HTMLDivElement} - main wrapper element.
 */
export default function createMainBlock(pluginObj) {
    try {
        const btngroup = createButtonGroup(pluginObj)
        const formInput = createFormInput(pluginObj)

        const wrapper = document.createElement('div')
        wrapper.classList.add('wrapper')

        wrapper.appendChild(btngroup)
        wrapper.appendChild(formInput)

        return wrapper
    } catch (error) {
        console.error(error)
    }
}