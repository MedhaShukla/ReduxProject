import counter from './index';
import describe from 'react-native';

describe('reducer',()=>{
    describe('counter',()=>{
        it ('should provide the initial state',()=>{
            expect(counter(undefined,{})).toBe(0)
        })
        it ('should handle INCREMENT action',()=>{
            expect(counter(1,{type: 'INCREMENT'})).toBe(2)
        })
        it ('should handle DECREMENT action ',()=>{
            expect(counter(1,{TYPE: 'DECREMENT'})).toBe(0)
        })
        it ('should ignor unknown action ',()=>{
            expect(counter(1,{TYPE: 'unknown'})).toBe(1)
        })
    })
})