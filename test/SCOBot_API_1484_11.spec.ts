import { SCOBot_API_1484_11, SCOBotUtil } from '../src';


describe('SCOBotBase', () => {
    let bot: SCOBot_API_1484_11;

    beforeEach(() => {
        bot = new SCOBot_API_1484_11({ SCOBotUtil });
    })

    it('should create a class instance', () => {
        expect(bot).toBeTruthy();
    });
});