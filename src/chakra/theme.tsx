import { ThemeConfig, extendTheme } from "@chakra-ui/react"

const config: ThemeConfig = {
    initialColorMode: "dark",
    useSystemColorMode: false,
}
export const theme = extendTheme({ config },
    {
        colors: {
            brand: {
                100: "#38B2AC",
            },
            style: {
                global: () => ({
                    body: {
                        bg: "red.900",
                    }
                })
            }
        },
    })