/**
 * Settings.
 * @exports lk-ui.settings
 * @type Object
 * @property {boolean} [disableAutoInit]
 *   Disables automatic instantiation of components.
 *   By default (`CarbonComponents.disableAutoInit` is `false`),
 *   carbon-components attempts to instantiate components automatically
 *   by searching for elements with `data-component-name` (e.g. `data-loading`) attribute
 *   or upon DOM events (e.g. clicking) on such elements.
 *   See each components' static `.init()` methods for details.
 * @property {string} [prefix=lk]
 *   Brand prefix. Should be in sync with `$prefix` Sass variable in carbon-components/src/globals/scss/_vars.scss.
 */
const settings = {
  prefix: 'lk',
};
//module.exports = settings;
export default settings;