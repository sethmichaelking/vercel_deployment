import { create } from 'zustand'

export const useTextCompareStore = create((set) => ({
  comparison: '',
  compareText: (text1, text2) => {
    const regex = /(<([^>]+)>)/gi;
    var text1 = text1.replace(regex, "");
    var text2 = text2.replace(regex, "");
    console.log(text1, text2)
  }
}))