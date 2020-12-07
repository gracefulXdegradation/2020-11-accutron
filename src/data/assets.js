const imgPath = 'https://static.highsnobiety.com/wp-content/uploads/2020/12/'
export const resolveImage = img => `${imgPath}${img}`

const assetsPath = 'https://static.highsnobiety.com/interactive-stories/2020-11-accutron/p/accutron-watch-history/static/media/'
export const resolveAsset = path => `${assetsPath}${path}`

export const fonts = {
  PlantinMTPro: resolveAsset('PlantinMTProRg.34b9b026.ttf'),
  UniversLTProCondensed: resolveAsset('UniversLTPro-Condensed.05362931.otf'),
}

export const AccutronLogo = resolveAsset('accutron-logo.svg')
