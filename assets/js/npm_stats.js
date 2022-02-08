const PACKAGES = [
  'stimulus-animated-number',
  'stimulus-clipboard',
  'stimulus-password-visibility',
  'stimulus-rails-nested-form',
  'stimulus-scroll-reveal',
  'stimulus-carousel',
  'stimulus-content-loader',
  'stimulus-places-autocomplete',
  'stimulus-read-more',
  'stimulus-scroll-to',
  'stimulus-character-counter',
  'stimulus-dropdown',
  'stimulus-popover',
  'stimulus-remote-rails',
  'stimulus-sortable',
  'stimulus-chartjs',
  'stimulus-lightbox',
  'stimulus-prefetch',
  'stimulus-reveal-controller',
  'stimulus-textarea-autogrow',
  'stimulus-checkbox-select-all',
  'stimulus-notification',
  'stimulus-rails-autosave',
  'stimulus-scroll-progress',
  'stimulus-timeago'
]

const lastYear = new Date
lastYear.setFullYear(lastYear.getFullYear() - 1)

const from = lastYear.toISOString().substring(0, 10)
const until = (new Date).toISOString().substring(0, 10)

fetch(`https://api.npmjs.org/downloads/point/${from}:${until}/${PACKAGES.join(',')}`)
  .then(response => response.json())
  .then(data => {
    const count = Object.values(data).reduce((acc, { downloads }) => acc + downloads, 0)

    console.log({ count })
  });
