import React from "react"

const themes = ["light", "dark"]

function withTheme(Story, context) {
  const { theme } = context.globals

  React.useEffect(
    function () {
      const bg = document.querySelector(".docs-story") ?? document.getElementsByTagName("body")[0]

      // clear all themes
      for (const theme of themes) {
        bg.classList.remove(theme)
      }

      // add the selected theme
      bg.classList.add(theme)
    },
    [theme],
  )

  return <Story />
}

export const decorators = [withTheme]

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "The Amped UI theme",
    defaultValue: "light",
    toolbar: {
      icon: "contrast",
      items: themes,
    },
  },
}
