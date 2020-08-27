import course from './fakedata';

const fakeData = course;


const shuffle = arr => {
    for (let i = arr.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [arr[i - 1], arr[j]] = [arr[j], arr[i - 1]];
    }
}

shuffle(fakeData);

export default fakeData;