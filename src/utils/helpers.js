export const dateFormat = (date) => {
  let month = (new Date(date).getMonth() + 1).toString();
  let year = (new Date(date).getFullYear()).toString()
  if( month.length <= 1) {
    month = `0${month}`;
  };
  return `${month}-${year}`;
};

export const subTitleFormatter = (text) => {
  const test = text.map((string, i) => {
    if(i+1 !== text.length && text[i+1].length > 0) {
      string = string + ', '
    }
    return string;
  });
  return test.join('');
};

export const stringToArray = (content) => {
  const arr = content.split('\n');
    let ulIndex = null;
    const reducedArr = arr.reduce((object, string, index) => {
      if(string.search(/<\/ul>/g) >= 0) {
        ulIndex = null;
        return object;
      }
      if(string.search(/^<[a-z]+>/) < 0) {
        return object;
      }
      const [tag] = string.match(/^<[a-z]+>/);
      if(tag === '<ul>') {
        ulIndex = index;
        object[index] = {
          tag,
          listItems: []
        }
        return object;
      }
      let value = null;
      let isBold = false;
      let isUnderline = false;
      let isCursive = false;

      if(string.search(/[^<>]+(?=<\/.+>)/g) >= 0) {
        [value] = string.match(/[^<>]+(?=<\/.+>)/g);
        if(value === '&nbsp;') {
          value = '';
        }
      }
      value = value.replace(/&oacute;/g, 'ó');
      value = value.replace(/&nbsp;/g, ' ');

      if(string.search(/style="text-decoration: underline;/g) >= 0){
        isUnderline = true;
      }

      if(string.search(/<strong>.*<\/strong>/g) >= 0 ){
        isBold = true;
      }

      if(string.search(/<em>.*<\/em>/g) >= 0 ) {
        isCursive = true;
      }
      if(tag === '<li>') {
        object[ulIndex].listItems.push({
          tag,
          value,
          isBold,
          isUnderline,
          isCursive
        });
        return object;
      }
      object[index] = {
        tag,
        value,
        isBold,
        isUnderline,
        isCursive
      }
      return object;
    }, {})
    let transformObject = [];
    for (const property in reducedArr) {
      transformObject.push(reducedArr[property]);
    }
    return transformObject;
}