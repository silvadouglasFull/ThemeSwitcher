import 'styled-components'
// sobre escrever uma definição de tipos presentes dentro de styled-components
declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;
        colors: {
            primary: string;
            secondary: string;
            background: string;
            text: string
        }
    }
}