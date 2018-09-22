const transposeSong = require('./transposeSong')
describe('transpose song', () => {
    it('song', () => {
        const song = `Ab [C] mong tur you na ja ta tur [Am] mai roo bang loey
Ab [C] song jai hai nid nid tae doo [Am] tur chang chei mei
Ao [F] la triem jai wai gon man [G] ja hua ja goi tong xiang gun [C]
Yeah [Am] e yeah e yeah`
        expect(transposeSong(song)).toBe(`Ab [D] mong tur you na ja ta tur [Bm] mai roo bang loey
Ab [D] song jai hai nid nid tae doo [Bm] tur chang chei mei
Ao [G] la triem jai wai gon man [A] ja hua ja goi tong xiang gun [D]
Yeah [Bm] e yeah e yeah`)
    });

    it('song', () => {
        const song = `it real sent your at amounted all shy set
why followed [G] declared repeated of endeavor mr position kindness
offering ignorant so up simplicity are
melancholy preference considered saw companions disposal
on [Em] outweigh do speedily [G] in on
him ham although thoughts entirely drawings acceptance [G] unreserved old
admiration projection nay [G] yet him lasted am [C] so
before [Em] on esteem vanity oh

she wholly fat who window extent either
formal removing welcomed civility or [F] hastened is justice elderly
but [Am] perhaps expense six her [G] are
another passage full her [F] ten open fond walk not down for request general express
unknown [Em] are he in just mr
door body held john [Em] down he so journey greatly
or garrets draw door kept do so [C] come on open mean estimating [Am]
stimulated how reasonably precaution diminution [Dm] she simplicity sir
but questions am [Em] sincerity zealously concluded consisted or no gentleman it

and produce say [Em] the [C] ten moments
parties simple innate summer [Dm] fat appear
basket his desire joy [C] outward clothes promise [C] at gravity do [G] excited [Am] sufficient particular impossible by reasonable
oh expression [F] is yet [Am] preference connection unpleasant
yet melancholy but end appearance and excellence partiality estimating
terminated [C] day everything

satisfied conveying an dependent contented he gentleman agreeable do be warrant private [F] blushes removed an in
equally totally if delivered [Am] dejection necessary objection do mr
[Em] prevailed mr feeling do chiefly cordial in [F] do water timed
folly right aware if oh truth
imprudence attachment him his for sympathize large above be to means [C] dashwood do provided
stronger is but discretion frequently sir the she [Dm] instrument unaffected
admiration everything

contented get distrusts certainty nay are
frankness [G] concealed [C] ham [C] on unaffected resolution
on considered of no [Dm] thought me husband or
colonel forming effects end sitting shewing who [Em] saw besides son musical adapted contrasted
interested eat [C] alteration pianoforte sympathize [C] [Am] was he families believed if no [Am] [Em] elegance
interest [Dm] surprise an it abode wrong miles an [Em] so delay plate
she relation own put outlived may
disposed

marianne or husbands if at stronger [Em] ye considered is as middletons
uncommonly promotion perfectly ye consisted so his
chatty dining for effect ladies [F] active [Em] [Am] equally journey
wishing not several behaved chapter [C] she two sir deficient procuring favourite extensive you two
yet diminution she impossible understood age

questions explained agreeable preferred strangers too [G] him her [Em] son set put
shyness offices his females him distant improve has [Dm] message besides [C] shy
himself cheered [F] however [C] how son [G] quick judge other leave ask
first chief [Em] her indeed or remark always silent seemed [F] narrow
be instantly can suffering pretended [C] neglected [Dm]
preferred [F] man [C] delivered perhaps fertile brandon do imagine to cordial cottage

gave read use way make spot
how nor in daughter goodness an likewise oh consider
at procured wandered songs [C] words [Dm] wrong by me hills
heard [Em] timed happy [G] eat may doors songs be ignorant so of suitable dissuade weddings
together least whole timed we is an smallness
deficient discourse do [Dm] newspaper be an eagerness continued mr my ready [C] guest
ye after short at
`
        expect(transposeSong(song)).toBe(`it real sent your at amounted all shy set
why followed [A] declared repeated of endeavor mr position kindness
offering ignorant so up simplicity are
melancholy preference considered saw companions disposal
on [F#m] outweigh do speedily [A] in on
him ham although thoughts entirely drawings acceptance [A] unreserved old
admiration projection nay [A] yet him lasted am [D] so
before [F#m] on esteem vanity oh

she wholly fat who window extent either
formal removing welcomed civility or [G] hastened is justice elderly
but [Bm] perhaps expense six her [A] are
another passage full her [G] ten open fond walk not down for request general express
unknown [F#m] are he in just mr
door body held john [F#m] down he so journey greatly
or garrets draw door kept do so [D] come on open mean estimating [Bm]
stimulated how reasonably precaution diminution [Em] she simplicity sir
but questions am [F#m] sincerity zealously concluded consisted or no gentleman it

and produce say [F#m] the [D] ten moments
parties simple innate summer [Em] fat appear
basket his desire joy [D] outward clothes promise [D] at gravity do [A] excited [Bm] sufficient particular impossible by reasonable
oh expression [G] is yet [Bm] preference connection unpleasant
yet melancholy but end appearance and excellence partiality estimating
terminated [D] day everything

satisfied conveying an dependent contented he gentleman agreeable do be warrant private [G] blushes removed an in
equally totally if delivered [Bm] dejection necessary objection do mr
[F#m] prevailed mr feeling do chiefly cordial in [G] do water timed
folly right aware if oh truth
imprudence attachment him his for sympathize large above be to means [D] dashwood do provided
stronger is but discretion frequently sir the she [Em] instrument unaffected
admiration everything

contented get distrusts certainty nay are
frankness [A] concealed [D] ham [D] on unaffected resolution
on considered of no [Em] thought me husband or
colonel forming effects end sitting shewing who [F#m] saw besides son musical adapted contrasted
interested eat [D] alteration pianoforte sympathize [D] [Bm] was he families believed if no [Bm] [F#m] elegance
interest [Em] surprise an it abode wrong miles an [F#m] so delay plate
she relation own put outlived may
disposed

marianne or husbands if at stronger [F#m] ye considered is as middletons
uncommonly promotion perfectly ye consisted so his
chatty dining for effect ladies [G] active [F#m] [Bm] equally journey
wishing not several behaved chapter [D] she two sir deficient procuring favourite extensive you two
yet diminution she impossible understood age

questions explained agreeable preferred strangers too [A] him her [F#m] son set put
shyness offices his females him distant improve has [Em] message besides [D] shy
himself cheered [G] however [D] how son [A] quick judge other leave ask
first chief [F#m] her indeed or remark always silent seemed [G] narrow
be instantly can suffering pretended [D] neglected [Em]
preferred [G] man [D] delivered perhaps fertile brandon do imagine to cordial cottage

gave read use way make spot
how nor in daughter goodness an likewise oh consider
at procured wandered songs [D] words [Em] wrong by me hills
heard [F#m] timed happy [A] eat may doors songs be ignorant so of suitable dissuade weddings
together least whole timed we is an smallness
deficient discourse do [Em] newspaper be an eagerness continued mr my ready [D] guest
ye after short at
`)
    });
});

