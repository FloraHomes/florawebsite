
export const replaceSpaceWithHyphen = (text) => {
    return text.replace(/\s+/g, '-');
}

export const photoGridObj = (images) => {
    return images.map((image) => ({
        image,
        title: "",
        description: "",
      }));

  }

  export const amountFormat = (num) => {
    return num?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};