import { createGlobalStyle } from "styled-components";

export const Global_style = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600&display=swap');
   :root{
      --color-black : black;
      --color-gray: rgba(248,249,250, 1);
      --color-gray-hover: rgb(199, 200, 201);
      --bg-primary: white;
      --bg-blue: #0099dc;
      --bg-orange: #0099dc
   }

   *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
   }

   *, button, input {
    border: 0;
    background: none;
    font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, Arial, sans-serif;
  }
   html, body{
      background: var(--bg-primary);
      font-family: 'Oswald', sans-serif;
   }
`