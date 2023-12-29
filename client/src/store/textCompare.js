import { create } from 'zustand'
import axios from 'axios'

export const TextCompareStore = create((set) => ({
  comparisonResult: '',
  comparisonOccured: false,
  compareText: async (text1, text2) => {
    if (!text1 || !text2) {
        console.log('missing one')
    } else {
        let textInformation = {
            firstText: text1,
            secondText: text2
        }
        let response = await axios.post('http://localhost:5000/compareText', textInformation);
        let diff = response.data;
        set({ 
            comparisonResult: diff,
            comparisonOccured: true
        })
    }
  }
}))