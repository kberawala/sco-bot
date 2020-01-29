import { SCOBotBase, SCOBotUtil, SCOBot_API_1484_11 } from '../src';


describe('SCOBotBase', () => {
    let bot: SCOBotBase;

    beforeEach(() => {
        bot = new SCOBotBase({
            SCOBotUtil,
            SCOBot_API_1484_11
        });
    })

    it('should create a class instance', () => {
        expect(bot).toBeTruthy();
    });
});