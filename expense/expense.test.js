const expense = require('./expense')
const expenseCat = require('./expenseCat')

xdescribe('Expense AVG', () => {
    it('avg. should be 185.71', () => {
        const list = `1 f20 t15 f40 m200 t15
2 f10 t15 f28 g40 f499 t15
3
4
5 f25 t15 f40 t15
6 t12 f79 g100 f21 t25
7 f71`
        expect(expense(list)).toBe(185.71)
    })

    it('avg. should be 211.87', () => {
        const list = `1 g20 f26 s15 f46 f43 f49 f19 t9
2 f68 f56 m180 f34 f67 f48
3 g20
4 f54
5 g100 m300 f23 f42 f76
6 t12 f79 g100 f21 t25
7 g20 f42
8
9 s7
10
11
12 g80 g20 f26 f44 f53 f65 m240 f85
13 t67 f44 f40 f57
14 f7
15 f67 t18 g80 f97 s32 s13 s29
16 s31 f10 t9
17 f37 g100
18
19 t9 f25 f35 f37
20 f65 f92 s26 f84 f22
21 t18 f46 m180
22 f41 f61 m260 s15 f90 s13 f16 s30
23 s5 t20 s39 g120
24 f35 f44
25 s44
26 f76 f20 g100 f57 f74
27 t9 s28 s5 t9 f88 f42
28 t40 f39 g140 m280 g120
29 f17 g100 g100 f99 t16 f98 f46
30 f37 f76 f92 m240 f27 t18
31 f51`
        expect(expense(list)).toBe(211.87)
    })
});

describe('Expense Cat', () => {
    it('seperate category sample data', () => {
        const list = `1 f20 t15 f40 m200 t15
2 f10 t15 f28 g40 f499 t15
3
4
5 f25 t15 f40 t15
6 t12 f79 g100 f21 t25
7 f71`
        expect(expenseCat(list)).toBe(`food 833
game 140
movie 200
stationery 0
transportation 127
TOTAL 1300`)
    })

    it('seperate category real data', () => {
        const list = `1 g20 f26 s15 f46 f43 f49 f19 t9
2 f68 f56 m180 f34 f67 f48
3 g20
4 f54
5 g100 m300 f23 f42 f76
6 t12 f79 g100 f21 t25
7 g20 f42
8
9 s7
10
11
12 g80 g20 f26 f44 f53 f65 m240 f85
13 t67 f44 f40 f57
14 f7
15 f67 t18 g80 f97 s32 s13 s29
16 s31 f10 t9
17 f37 g100
18
19 t9 f25 f35 f37
20 f65 f92 s26 f84 f22
21 t18 f46 m180
22 f41 f61 m260 s15 f90 s13 f16 s30
23 s5 t20 s39 g120
24 f35 f44
25 s44
26 f76 f20 g100 f57 f74
27 t9 s28 s5 t9 f88 f42
28 t40 f39 g140 m280 g120
29 f17 g100 g100 f99 t16 f98 f46
30 f37 f76 f92 m240 f27 t18
31 f51`
        expect(expenseCat(list)).toBe(`food 3057
game 1220
movie 1680
stationery 332
transportation 279
TOTAL 6568`)
    })
});