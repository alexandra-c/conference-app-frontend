import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import Typography from '@bit/totalsoft_oss.react-mui.typography'
import { Grid } from '@material-ui/core'
import Button from '@bit/totalsoft_oss.react-mui.button'
import { useHistory } from 'react-router'

const MyConferenceContent = props => {
  const { conference } = props
  const { id, startDate, endDate, type, category } = conference

  const history = useHistory()
  const { t } = useTranslation()

  const handleEditClick = useCallback(() => history.push(`myConferences/${id}`), [history, id])

  const startDateFormatted = t('DATE_FORMAT', { date: { value: startDate, format: 'DD-MM-YYYY HH:mm' } })
  const endDateFormatted = t('DATE_FORMAT', { date: { value: endDate, format: 'DD-MM-YYYY HH:mm' } })

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography>{`${startDateFormatted} - ${endDateFormatted}`}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>{`${type?.name}, ${category?.name}`}</Typography>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Button right size='sm' color='danger'>
            {t('MyConferences.Delete')}
          </Button>
          <Button right size='sm' color='info' onClick={handleEditClick}>
            {t('MyConferences.Edit')}
          </Button>
        </Grid>
      </Grid>
    </Grid>
  )
}

MyConferenceContent.propTypes = {
  conference: PropTypes.object.isRequired
}

export default MyConferenceContent
