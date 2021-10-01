import { gql } from '@apollo/client'
import ConferenceFragments from 'features/conferences/gql/queries/fragments'
import CommonFragments from 'features/common/fragments'

export const CONFERENCE_QUERY = gql`
  query conferenceById($id: ID!) {
    conference(id: $id) {
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
  ${ConferenceFragments.conference}
  ${ConferenceFragments.location}
  ${ConferenceFragments.speaker}
  ${CommonFragments.type}
  ${CommonFragments.category}
  ${CommonFragments.country}
  ${CommonFragments.county}
  ${CommonFragments.city}
`
