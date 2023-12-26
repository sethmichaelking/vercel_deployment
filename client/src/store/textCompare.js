import { create } from 'zustand'
import axios from 'axios'
export const useTextCompareStore = create((set) => ({
  comparison: '',
  compareText: async (text1, text2) => {
    if (!text1 || !text2) {
        console.log('missing one')
    } else {
        let textInformation = {
            firstText: text1,
            secondText: text2
        }

        let response = await axios.post('http://localhost:5000/compareText', textInformation)
        let diff = response.data;
        set({ comparison: diff })
    }
  }
}))