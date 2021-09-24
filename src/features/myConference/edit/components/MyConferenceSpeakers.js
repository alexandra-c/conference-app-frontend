import React from 'react'
import PropTypes from 'prop-types'
import tableStyles from 'assets/jss/components/tableStyle'
import { Grid, makeStyles } from '@material-ui/core'
import { Table, Tbody, Tr, Td, Th, Thead } from 'react-super-responsive-table'
import { useTranslation } from 'react-i18next'
import MyConferenceSpeakerData from './MyConferenceSpeakerData'

const useStyles = makeStyles(tableStyles)

const MyConferenceSpeakers = props => {
  const { speakers } = props
  const { t } = useTranslation()
  const classes = useStyles()

  return (
    <Grid className={classes.enableScrollX}>
      <Table className={classes.table}>
        <Thead>
          <Tr>
            <Th className={classes.tableHeader}>{t('Speaker.Name')}</Th>
            <Th className={classes.tableHeader}>{t('Speaker.Nationality')}</Th>
            <Th className={classes.tableHeader}>{t('Speaker.Rating')}</Th>
            <Th className={classes.tableHeader}>{t('Speaker.MainSpeaker')}</Th>
            <Th className={classes.tableHeader}></Th>
          </Tr>
        </Thead>
        <Tbody>
          {speakers.map(speaker => (
            <MyConferenceSpeakerData key={speaker?.id} speaker={speaker} />
          ))}
        </Tbody>
      </Table>
    </Grid>
  )
}

MyConferenceSpeakers.propTypes = {
  speakers: PropTypes.array
}

MyConferenceSpeakers.defaultProps = {
  speakers: [{}]
}

export default MyConferenceSpeakers
