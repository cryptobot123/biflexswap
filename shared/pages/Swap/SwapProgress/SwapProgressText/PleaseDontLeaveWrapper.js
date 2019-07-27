import React, { Fragment } from 'react'
import { FormattedMessage } from 'react-intl'
import CSSModules from 'react-css-modules'

import Tooltip from 'components/ui/Tooltip/Tooltip'
import styles from '../SwapProgress.scss'


const PleaseDontLeaveWrapper = (props) => {
  const { children, isBTC } = props
  return (
    <Fragment>
      {children}
      <span styleName="dontLeave">
        <FormattedMessage id="swapprogressDONTLEAVE" defaultMessage="Please do not leave this page " />
        <Tooltip
          id="swapjsdontleave"
          dontHideMobile
        >
          <p>
            <FormattedMessage
              id="swapjsdontleave"
              defaultMessage="The exchange requires signing with private keys that only your browser knows." />
          </p>
          {(isBTC) && (
            <p>
              <FormattedMessage
                id="swapjsdontleavesavesecret"
                defaultMessage="If you want to leave this page please save the secret." />
            </p>
          )}
        </Tooltip>
        <p>
          <FormattedMessage
            id="swapprogressDONTLEAVE22"
            defaultMessage="The swap was stuck? Try to reload page"
          />
        </p>
        {(isBTC) && (
          <strong styleName="saveSecretKey">
            <FormattedMessage id="swapprogressDONTLEAVEBTC" defaultMessage="Or save this information before you leave:" />
            <em>{isBTC}</em>
          </strong>
        )}
      </span>
    </Fragment>
  )
}

export default CSSModules(PleaseDontLeaveWrapper, styles, { allowMultiple: true })
