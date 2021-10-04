import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import { Grid } from '@material-ui/core'
import Typography from '@bit/totalsoft_oss.react-mui.typography'
import qrCode from 'assets/img/qrCode.png'

const ConferenceCodeModal = ({ code }) => {
  const { t } = useTranslation()
  return (
    <Grid container justifyContent='center'>
      <Grid item lg={12}>
        <img src={qrCode} style={{ maxHeight: '400px' }} alt='QR' />
      </Grid>
      <Grid item lg={12}>
        <Typography variant='subtitle1'> {t('Conferences.QRCodeMessage', { code })}</Typography>
      </Grid>
    </Grid>
  )
}

ConferenceCodeModal.propTypes = {
  code: PropTypes.string
}

export default ConferenceCodeModal
