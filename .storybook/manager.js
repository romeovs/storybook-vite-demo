import { addons } from "@storybook/addons"
import { create } from "@storybook/theming"

const theme = create({
  base: "light",
  brandTitle: "Amped UI",
})

addons.setConfig({
  theme,
})

const favicon = `
<?xml version="1.0" encoding="utf-8"?>
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="25" stroke-width="30" fill="none" stroke="black"/>
  <circle cx="50" cy="50" r="3" fill="black" />
</svg>
`

const link = document.createElement("link")
link.setAttribute("rel", "shortcut icon")
link.setAttribute("href", "data:image/svg+xml,".concat(favicon))
document.head.appendChild(link)
