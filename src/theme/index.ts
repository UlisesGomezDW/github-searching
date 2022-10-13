export const DARK = "#1A1C1E"
export const SOLID = "#1890ff"

export const lightTheme = {
    color: {
        primary: "#fff",
        background: "#f0f2f5",
        input: "#f5f9fd",
        solid: SOLID,
        skeleton: {
            background: "#f1f4f8",
            color: "rgba(255, 255, 255, 0)",
            opacity: "rgba(255, 255, 255, 0.7)",
        },
    },
    font: {
        color: {
            primary: DARK,
            secondary: `${DARK}99`,
        },
    },
    border: {
        color: "#04172A1A",
    },
}

export const darkTheme = {
    color: {
        primary: "#2d333b",
        background: "rgb(21, 32, 43)",
        input: "rgb(32, 35, 39)",
        solid: SOLID,
        skeleton: {
            background: "#273340",
            color: "rgba(32, 35, 39, 0)",
            opacity: "rgba(32, 35, 39, 0.7)",
        },
    },
    font: {
        color: {
            primary: "#E7E9EA",
            secondary: `#ADBAC7`,
        },
    },
    border: {
        color: "#373e47",
    },
}

export const theme = {
    color: lightTheme.color,
    font: {
        color: lightTheme.font.color,
        size: {
            xxs: "1rem",
            xs: "1.2rem",
            sm: "1.4rem",
            md: "1.6rem",
            lg: "2rem",
            xlg: "2.4rem",
            xxlg: "2.6rem",
            xxxlg: "4.2rem",
        },
    },
    border: lightTheme.border,
    breakPoints: {
        xs: "400px",
        sm: "600px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        xxlg: "2000px",
    },
}
