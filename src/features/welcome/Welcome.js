import React, { useState, useCallback } from 'react'
import { Typography, Grid, InputAdornment } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import CustomTextField from '@bit/totalsoft_oss.react-mui.custom-text-field'
import IconButton from '@bit/totalsoft_oss.react-mui.icon-button'
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn'
import { useEmail } from 'hooks/useEmail'
import { validateEmail } from 'utils/functions'
import { emptyString } from 'utils/constants'

function Welcome() {
  const { t } = useTranslation()
  const [email, setEmail] = useEmail()
  const [isInputValid, setIsInputValid] = useState(true)
  const [inputValue, setInputValue] = useState(email)

  const handleInputChange = useCallback(e => setInputValue(e?.target?.value), [])
  const handleButtonClick = useCallback(() => {
    const isValid = validateEmail(inputValue)
    setEmail(isValid ? inputValue : emptyString)
    setIsInputValid(isValid)
  }, [inputValue, setEmail])
  const handleKeyDown = useCallback(e => e.keyCode === 13 && handleButtonClick(), [handleButtonClick])

  return (
    <Grid container direction='column' alignItems='center' spacing={10}>
      <Grid item>
        <Typography variant='h5'>{t('LandingPage.Title')}</Typography>
      </Grid>
      <Grid container item direction='column' alignItems='center'>
        <Grid item>
          <Typography variant='caption'>{t('LandingPage.Subtitle')}</Typography>
        </Grid>
        <Grid item>
          <CustomTextField
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            endAdornment={
              <InputAdornment position='end'>
                <IconButton size='small' color='theme' aria-label='go' onClick={handleButtonClick}>
                  <KeyboardReturnIcon fontSize='small' />
                </IconButton>
              </InputAdornment>
            }
            error={!isInputValid}
            helperText={!isInputValid && t('LandingPage.BadEmail')}
          />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Welcome
