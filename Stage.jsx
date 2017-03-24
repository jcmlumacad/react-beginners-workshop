// @flow
/* eslint-disable max-len */

import React from 'react'

type Props = {
  stage: number
};

export default ({ stage }: Props) => {
  if (stage === 0) {
    return <span />
  }
  if (stage === 1) {
    return <span>|<br /> |<br /> |<br /> |<br /> |<br /> |<br /> |<br /></span>
  }
  if (stage === 2) {
    return <span>|---------<br /> |&nbsp;&nbsp;&nbsp;&nbsp;|<br /> |<br /> |<br /> |<br /> |<br /> |<br /></span>
  }
  if (stage === 3) {
    return <span>|---------<br /> |&nbsp;&nbsp;&nbsp;&nbsp;|<br /> |&nbsp;&nbsp;&nbsp;O<br /> |<br /> |<br /> |<br /> |<br /></span>
  }
  if (stage === 4) {
    return <span>|---------<br /> |&nbsp;&nbsp;&nbsp;&nbsp;|<br /> |&nbsp;&nbsp;&nbsp;O<br /> |&nbsp;&nbsp;&nbsp;&nbsp;|<br /> |<br /> |<br /> |<br /></span>
  }
  if (stage === 5) {
    return <span>|---------<br /> |&nbsp;&nbsp;&nbsp;&nbsp;|<br /> |&nbsp;&nbsp;&nbsp;O<br /> |&nbsp;&nbsp;&nbsp;&nbsp;|-<br /> |<br /> |<br /> |<br /></span>
  }
  if (stage === 6) {
    return <span>|---------<br /> |&nbsp;&nbsp;&nbsp;&nbsp;|<br /> |&nbsp;&nbsp;&nbsp;O<br /> |&nbsp;&nbsp;&nbsp;-|-<br /> |<br /> |<br /> |<br /></span>
  }
  if (stage === 7) {
    return <span>|---------<br /> |&nbsp;&nbsp;&nbsp;&nbsp;|<br /> |&nbsp;&nbsp;&nbsp;O<br /> |&nbsp;&nbsp;&nbsp;-|-<br /> |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\<br /> |<br /> |<br /></span>
  }
  if (stage === 8) {
    return <span>|---------<br /> |&nbsp;&nbsp;&nbsp;&nbsp;|<br /> |&nbsp;&nbsp;&nbsp;O<br /> |&nbsp;&nbsp;&nbsp;-|-<br /> |&nbsp;&nbsp;&nbsp;/&nbsp;\<br /> |<br /> |<br /></span>
  }

  return <span />
}
