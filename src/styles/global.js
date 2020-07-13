import {
  createGlobalStyle
} from 'styled-components'

const GlobalStyle = createGlobalStyle `
@import url('https://fonts.googleapis.com/css?family=Francois+One|Kanit');
html {
      box-sizing: border-box;
}
*, :after, :before {
    box-sizing: border-box;
}
body {
    margin: 0;
    padding: 0;
    background-color: #fafafa;
    color: #3c414d;
    font-family: Francois One, Helvetica, Arial, sans-serif !important;
  }

.small_avatar {
  border-radius: 50%;
  display: inline-block;
  height: 3rem;
  width: 3rem;
  cursor: pointer;
}

.d_flex {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.reverse {
  flex-direction: column;
}
`
export default GlobalStyle