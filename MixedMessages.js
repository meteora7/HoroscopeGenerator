console.log('This is your personal horoscope for 2022.')
console.log('Please enter your zodiac sign.')
const CapitalizeFirstLetter = str => {
    return str[0].toUpperCase() + str.slice(1);
};
//console.log(CapitalizeFirstLetter('olga'))
const userInput = input => {
    input = CapitalizeFirstLetter(input);
    if(input ===  'Aries' || input === 'Taurus' || input === 'Gemini' || input === 'Cancer' || input === 'Leo' || input === 'Virgo' || input === 'Libra' || input === 'Scorpio' || input === 'Sagittarius' || input === ' Capricorn' || input === 'Aquarius' || input === 'Pisces') {
    return input;
}   else {
        console.log('Please enter a valid zodiac sign.');
    }
   }; // user enters their zodiac sign, zodiac sign starts with a capital letter and check if the user entered a valid zodiac sign
//console.log(userInput('aries'))
//console.log(userInput('DRAGON'));

const HoroscopeGenerator = sign =>{
    sign = userInput(sign);
switch(sign) {
    case 'Aries': console.log('Leaving the comfort zone, exploring new paths');
    break;
    case 'Taurus': console.log('Embracing change, discovering your destiny');
    break;
    case 'Gemini': console.log(' Establishing authority, blazing trails');
    break;
    case 'Cancer': console.log('Nurturing yourself, exploring new passion');
    break;
    case 'Leo': console.log('Defining relationships, growing and sharing your expertise');
    break;
    case 'Virgo': console.log(' Enjoying poetic partnerships, sharing your message');
    break;
    case 'Libra': console.log('Finding passionate work, setting up life-enhancing routines');
    break;
    case 'Scorpio': console.log('Defining your personal path, rebalancing relationships');
    break;
    case 'Sagittarius': console.log('Feeling “at home” in your space and body, embracing fame');
    break;
    case 'Capricorn': console.log('Expanding your network, finding your flow');
    break;
    case 'Aquarius': console.log('Creating financial security, establishing a new identity');
    break;
    case 'Pisces': console.log('Starting fresh, building strong foundations');
    break;
    
}
};

//console.log(HoroscopeGenerator('sagittarius'));
