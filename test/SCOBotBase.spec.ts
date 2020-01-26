import { SCOBotBase } from '../src';

describe('SCOBotBase', () => {
    let bot: SCOBotBase;

    beforeEach(() => {
        bot = new SCOBotBase();
    })

    it('should create a class instance', () => {
        expect(bot).toBeTruthy();
    });
});