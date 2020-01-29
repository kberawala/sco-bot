import { SCOBotUtil, SCOBot, SCOBotBase, SCOBot_API_1484_11 } from '../src';


describe('SCOBot', () => {
    let bot: SCOBot;

    beforeEach(() => {
        const scorm = new SCOBotBase({
            SCOBotUtil,
            SCOBot_API_1484_11
        });

        bot = new SCOBot({
            SCOBotUtil,
            scorm
        });
    })

    it('should create a class instance', () => {
        expect(bot).toBeTruthy();
    });
});
