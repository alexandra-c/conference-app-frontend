import { Grid } from '@material-ui/core'
import PropTypes from 'prop-types'
import React from 'react'
import MyConferenceItem from './MyConferenceItem'

const MyConferenceList = props => {
  const { conferences } = props

  return (
    <Grid container spacing={2}>
      {conferences.map(conference => (
        <Grid item xs={12} lg={4} key={conference.id}>
          <MyConferenceItem conference={conference} />
        </Grid>
      ))}
    </Grid>
  )
}

MyConferenceList.propTypes = {
  conferences: PropTypes.array
}

export default MyConferenceList
