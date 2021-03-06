import { toFirebaseTimestamp } from '../../utils/date-utils'
import FirebaseException from '../../utils/FirebaseException'

import WeightFirebase from './weightFirebase'

// FIXME 2 implem. why?
class WeightAPI {
  getAll = async () => {
    try {
      return await WeightFirebase.getAll()
    } catch(error) {
      throw new FirebaseException(error)
    }
  }

  getWeightListBtwDates = (uid, beginDate, endDate) => {
    const beginTimestamp = toFirebaseTimestamp(beginDate)
    const endTimestamp = toFirebaseTimestamp(endDate)

    return WeightFirebase.getWeightListBtwDates(uid, beginTimestamp, endTimestamp)
  }
}

export default new WeightAPI()