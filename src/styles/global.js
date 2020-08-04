import "flickity/css/flickity.css";
import {
  createGlobalStyle
} from 'styled-components'
const GlobalStyle = createGlobalStyle `
@import url('http://fonts.googleapis.com/css?family=Ubuntu:regular,bold&subset=Latin');
html {
      box-sizing: border-box;
}
*, :after, :before {
    box-sizing: border-box;
}
body {
    margin: 0;
    padding: 0;
    font-family: Ubuntu, 'times new roman', times, roman, serif;
  }

.available {
  color: limegreen;
}

.borrowed {
  color: rgb(209, 89, 9);
}

.small_avatar {
  border-radius: 50%;
  display: inline-block;
  height: 3rem;
  width: 3rem;
  cursor: pointer;
}

.header{
  margin: 1rem 2.75rem;
  padding-bottom: 1rem;
  font-weight: 400;
  letter-spacing: 3px;
  border-bottom: solid rgb(231, 226, 226) 1px;
}

.d_flex {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.reverse {
  flex-direction: column;
}

.flickity-prev-next-button.previous {
  left: 0px;
  height: 100%;
  border-radius: 0%;
}

.flickity-prev-next-button.next {
  right: 0px;
  height: 100%;
  border-radius: 0%;
}

.flickity-page-dots .dot {
  background: limegreen;
}

@media (max-width: 576px) {
  .flickity-prev-next-button.previous,
  .flickity-prev-next-button.next {
    width: 2.25rem;
  }

  .header{ 
    margin: 1rem 2.25rem;
  }
}

@media (max-width: 375px) {
  .flickity-prev-next-button.previous,
  .flickity-prev-next-button.next {
    width: 1.85rem;
  }

  .header{ 
    margin: 1rem 1.85rem;
  }
}

@media (max-width: 320px) {
  .flickity-prev-next-button.previous,
  .flickity-prev-next-button.next {
    width: 1.35rem;
  }

  .header{ 
    margin: 1rem 1.35rem;
  }
}
`
export default GlobalStyle