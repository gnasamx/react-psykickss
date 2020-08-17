// @flow
const fontSizes = [12, 14, 16, 18, 20, 24, 28, 32, 36, 44, 52, 96]
const lineHeightDiffFour = 4
const lineHeightDiffEight = 8
const fontWeight = ['normal', 400, 500, 600, 700]

const typography = {}
fontSizes.forEach((size, i) => {
  fontWeight.forEach((weight, j) => {
    let font4name = `font${size}${weight}${size + lineHeightDiffFour}`
    typography[font4name] = {
      fontSize: `${size}px`,
      fontWeight: weight,
      lineHeight: `${size + lineHeightDiffFour}px`,
    }
    let font8name = `font${size}${weight}${size + lineHeightDiffEight}`
    typography[font8name] = {
      fontSize: `${size}px`,
      fontWeight: weight,
      lineHeight: `${size + lineHeightDiffEight}px`,
    }
  })
})

console.log('== typography: ', typography)

const types = {}
fontSizes.forEach((size, i) => {
  fontWeight.forEach((weight, j) => {
    let font4name = `font${size}${weight}${size + lineHeightDiffFour}`
    types[font4name] = 'FontT' // Remove string quotes and use as FontT
    let font8name = `font${size}${weight}${size + lineHeightDiffEight}`
    types[font8name] = 'FontT' // Remove string quotes and use as FontT
  })
})

console.log('== types: ', types)
