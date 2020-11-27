import Logo from '../assets/accutron-logo.svg'

const imgPath = 'https://static.highsnobiety.com/interactive-stories/2020-11-accutron/p/accutron-watch-history/static/media/'
export const resolveImage = img => `${imgPath}${img}`

export const fonts = {
  PlantinMTPro: resolveImage('PlantinMTProRg.34b9b026.ttf'),
  UniversLTProCondensed: resolveImage('UniversLTPro-Condensed.05362931.otf'),
}

// export const AccutronLogo = resolveImage('accutron-logo.svg')
export const AccutronLogo = Logo
