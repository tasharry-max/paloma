const size = {
    mobile: '576px',
    tablet: '768px',
    laptop: '1440px',
    desktop: '1760px'
  }
  
  export const device = {
    mobile: `(min-width: ${size.mobile})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    desktop: `(min-width: ${size.desktop})`
  };