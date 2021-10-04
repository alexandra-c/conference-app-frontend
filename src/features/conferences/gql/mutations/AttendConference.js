import { gql } from '@apollo/client'
import ConferenceFragments from 'features/conferences/gql/queries/fragments'
import CommonFragments from 'features/common/fragments'

const ATTEND_CONFERENCE = gql`
  mutation attend($input: Attendee) {
    attend(input: $input) {
      code
      suggestedConferences {
        ...conference
        location {
          ...location
          country {
            ...country
          }
          county {
            ...county
          }
          city {
            ...city
          }
        }
        type {
          ...type
        }
        category {
          ...category
        }
        speakers {
          ...speaker
        }
      }
    }
  }
  ${ConferenceFragments.conference}
  ${ConferenceFragments.location}
  ${ConferenceFragments.speaker}
  ${CommonFragments.type}
  ${CommonFragments.category}
  ${CommonFragments.country}
  ${CommonFragments.county}
  ${CommonFragments.city}
`
export default ATTEND_CONFERENCE
