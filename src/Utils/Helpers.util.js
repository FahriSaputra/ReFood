const keyExtractor = (item, index) => index.toString();

const renderScreen = ({item}) => item();

export {keyExtractor, renderScreen};
