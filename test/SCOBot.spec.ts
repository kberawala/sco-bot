import { SCOBot } from '../src';

describe('SCOBot', () => {
    let bot: SCOBot;

    beforeEach(() => {
        bot = new SCOBot();
    })

    it('should create a class instance', () => {
        expect(bot).toBeTruthy();
    });
});
