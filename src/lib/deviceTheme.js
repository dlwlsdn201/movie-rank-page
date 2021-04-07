const size = {
    mobileM: "376px",
    mobileL: "426px",
    tabletS: "768px",
    tabletM: "1220px",
    tabletL: "1280px",
    laptop: "1440px",
    desktop: "1700px"
};

const theme = {
    mobileM: `(max-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileM}) and (max-width: ${size.mobileL})`,
    tabletS: `(max-width: ${size.tabletS})`,
    tabletM: `(max-width: ${size.tabletM})`,
    tabletL: `(max-width: ${size.tabletL})`,
    laptop: `(max-width: ${size.laptop})`,
    desktop: `(max-width: ${size.desktop})`
};

export default theme;