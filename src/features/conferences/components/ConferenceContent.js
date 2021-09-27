import React from 'react'
import PropTypes from 'prop-types'
import attendeeStatus from 'constants/attendeeStatus'
import { useTranslation } from 'react-i18next'
import Typography from '@bit/totalsoft_oss.react-mui.typography'
import { Grid } from '@material-ui/core'
import Button from '@bit/totalsoft_oss.react-mui.button'

const ConferenceContent = props => {
  const { conference } = props
  const { status, startDate, endDate, type, category } = conference

  const { t } = useTranslation()
  const noStatusSet = t('Conferences.StatusNotSet')

  const showJoin = status.id === attendeeStatus.Attended
  const showWithdraw = status.id === attendeeStatus.Attended || status.id === attendeeStatus.Joined
  const showAttend = status.id === attendeeStatus.Withdrawn

  const startDateFormatted = t('DATE_FORMAT', { date: { value: startDate, format: 'DD-MM-YYYY HH:mm' } })
  const endDateFormatted = t('DATE_FORMAT', { date: { value: endDate, format: 'DD-MM-YYYY HH:mm' } })

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant='subtitle1' color='error'>
          {status?.name || noStatusSet}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>{`${startDateFormatted} - ${endDateFormatted}`}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>{`${type?.name}, ${category?.name}`}</Typography>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          {showJoin && (
            <Button right size='sm' color='success'>
              {t('Conferences.Join')}
            </Button>
          )}
          {showWithdraw && (
            <Button right size='sm' color='danger'>
              {t('Conferences.Withdraw')}
            </Button>
          )}
          {showAttend && (
            <Button right size='sm' color='info'>
              {t('Conferences.Attend')}
            </Button>
          )}
        </Grid>
      </Grid>
    </Grid>
  )
}

ConferenceContent.propTypes = {
  conference: PropTypes.object.isRequired
}

export default ConferenceContent
