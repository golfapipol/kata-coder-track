const add = require('./add')
const addDivide = require('./addDivide')
const addStack = require('./addStack')
describe('Add', () => {
    it('input 125 + 86', () => {
        const x = "125"
        const y = "86" 
        expect(add(x,y)).toBe("211")
    });

    it('input 111111 + 2222', () => {
        const x = "111111"
        const y = "2222" 
        expect(add(x,y)).toBe("113333")
    });

    it('input 1234567890 + 987654321', () => {
        const x =  "987654321"
        const y = "1234567890" 
        expect(add(x,y)).toBe("2222222211")
    });

    it('input 4154760092 + 41518870', () => {
        const x =  "4154760092"
        const y =    "41518870" 
        expect(add(x,y)).toBe("4196278962")
    });

    it('input 893880539957604781622135818781054154760092 + 458875111557430000227050141224806041518870', () => {
        const x =  "893880539957604781622135818781054154760092"
        const y =  "458875111557430000227050141224806041518870" 
        expect(add(x,y)).toBe("1352755651515034781849185960005860196278962")
    });
});

describe('Add Divide', () => {
    it('input 125 + 86', () => {
        const x = "125"
        const y = "86" 
        expect(addDivide(x,y)).toBe("211")
    });

    it('input 111111 + 2222', () => {
        const x = "111111"
        const y = "2222" 
        expect(addDivide(x,y)).toBe("113333")
    });

    it('input 1234567890 + 987654321', () => {
        const x =  "987654321"
        const y = "1234567890" 
        expect(addDivide(x,y)).toBe("2222222211")
    });

    it('input 4154760092 + 41518870', () => {
        const x =  "4154760092"
        const y =    "41518870" 
        expect(addDivide(x,y)).toBe("4196278962")
    });

    it('input 893880539957604781622135818781054154760092 + 458875111557430000227050141224806041518870', () => {
        const x =  "893880539957604781622135818781054154760092"
        const y =  "458875111557430000227050141224806041518870" 
        expect(addDivide(x,y)).toBe("1352755651515034781849185960005860196278962")
    });
});

describe('Add Stack', () => {
    it('input 125 + 86', () => {
        const x = "125"
        const y = "86" 
        expect(addStack(x,y)).toBe("211")
    });

    it('input 111111 + 2222', () => {
        const x = "111111"
        const y = "2222" 
        expect(addStack(x,y)).toBe("113333")
    });

    it('input 1234567890 + 987654321', () => {
        const x =  "987654321"
        const y = "1234567890" 
        expect(addStack(x,y)).toBe("2222222211")
    });

    it('input 4154760092 + 41518870', () => {
        const x =  "4154760092"
        const y =    "41518870" 
        expect(addStack(x,y)).toBe("4196278962")
    });

    it('input 893880539957604781622135818781054154760092 + 458875111557430000227050141224806041518870', () => {
        const x =  "893880539957604781622135818781054154760092"
        const y =  "458875111557430000227050141224806041518870" 
        expect(addStack(x,y)).toBe("1352755651515034781849185960005860196278962")
    });
});