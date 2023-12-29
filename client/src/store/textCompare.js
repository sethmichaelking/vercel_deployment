import { create } from 'zustand'
import axios from 'axios'

export const TextCompareStore = create((set) => ({
  comparisonResult: '',
  comparisonResult2: '',
  comparisonOccured: false,
  compareText: async (text1, text2) => {
    if (!text1 || !text2) {
        console.log('missing one')
    } else {
        let textInformation = {
            firstText: text1,
            secondText: text2
        }
        let textInformation2 = {
          firstText: text2,
          secondText: text1
      }
        let response = await axios.post('http://localhost:5000/compareText', textInformation);
        let response2 = await axios.post('http://localhost:5000/compareText', textInformation2)
        let diff2 = response2
        let diff = response.data;
        set({
          comparisonResult2: diff2,

        })
        set({ 
            comparisonResult: diff,
            comparisonOccured: true
        })
    }
  }
}))