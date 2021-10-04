import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import { Grid } from '@material-ui/core'
import Typography from '@bit/totalsoft_oss.react-mui.typography'
import qrCode from 'assets/img/qrCode.png'
import ConferenceItem from './ConferenceItem'
import { isEmpty } from 'ramda'

const ConferenceCodeModal = ({ code, suggestedConferences, onAttend, onWithdraw }) => {
  const { t } = useTranslation()
  return (
    <>
      <Grid container justifyContent='center'>
        <Grid item lg={12}>
          <img src={qrCode} style={{ maxHeight: '400px' }} alt='QR' />
        </Grid>
        <Grid item lg={12}>
          <Typography variant='subtitle1'> {t('Conferences.QRCodeMessage', { code })}</Typography>
        </Grid>
      </Grid>
      {!isEmpty(suggestedConferences) && (
        <Grid container>
          <Grid item lg={12}>
            <Typography>{t('General.SuggestedConferences')}</Typography>
          </Grid>
          {suggestedConferences.map(conference => (
            <Grid item key={conference?.id}>
              <ConferenceItem conference={conference} onAttend={onAttend} onWithdraw={onWithdraw} />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  )
}

ConferenceCodeModal.propTypes = {
  code: PropTypes.string,
  suggestedConferences: PropTypes.array,
  onAttend: PropTypes.func.isRequired,
  onWithdraw: PropTypes.func.isRequired
}

export default ConferenceCodeModal
