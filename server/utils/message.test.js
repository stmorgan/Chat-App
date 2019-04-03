let expect = require('expect');

var {generateMessage} = require('./message');

describe('Generate Message', () => {
    it("should generate correct message object", () => {
        let from = "WDJ", 
            text = "Some random test"
            message = generateMessage(from, text);

        expect(typeof message.createdAt).toBe('number');
        expect(message).toMatchObject({from, text});
    });
});

describe('Generate Location Message', ()=> {
    it('should generate correct location object', () => {
        let from = 'Claire', 
            lat = 15,
            lng = 56
            url = `https://www.google.com/maps?q=${lat}, ${lng}`
    })
})