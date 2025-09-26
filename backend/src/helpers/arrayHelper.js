//

const arrayHelper = {
  removeDuplicatesEntries: (array, filterBy) => {
    const seen = new Set()

    return array.filter((item) => {
      const value = item[filterBy]

      if (seen.has(value)) {
        return false;
      }
      seen.add(value);
      return true;
    });
  }
}


export default arrayHelper
