import React from "react"
import Header from "./header"
import { css } from "@emotion/core"

import { rhythm } from "../utils/typography"

export default function Layout({ children }) {
  return (
    <div
      css={css`
        margin: 0 auto;
      `}
    >
      <div
        css={css`
          margin: auto;
          max-width: 1024px;
        `}
      >
        <Header />
      </div>
      <div
        css={css`
          margin: auto;
          max-width: 1024px;
          padding: ${rhythm(1.618)};
          padding-top: ${rhythm(1.0)};
        `}
      >
        {children}
      </div>
    </div>
  )
}
