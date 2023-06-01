interface ISettingReducer {
    lang: string,
    theme: string
}

enum Etheme {
    dark = "dark",
    light = "light",
}

enum Elang {
    fr = "fr",
    en = "en",
    ar = "ar"
}

interface IPageProps {
    children: React.ReactNode | null | undefined | JSX.Element
}
export {
    Etheme,
    Elang,
}

export type {
    IPageProps,
    ISettingReducer
}