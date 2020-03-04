import reducer from './clock'

describe('clock reducer', () =>{
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({})
    })
    it('should handle UPDATE_TIME', () => {
        const time = new Date()
        expect(
            reducer({}, {
                type: "UPDATE_TIME",
                time
            })
        ).toEqual({
        time
        })
    })
})
