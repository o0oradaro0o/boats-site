import { SecondsToHhmmssPipe } from './seconds-to-hhmmss.pipe';

describe('SecondsToHhmmssPipe', () => {
  it('create an instance', () => {
    const pipe = new SecondsToHhmmssPipe();
    expect(pipe).toBeTruthy();
  });
});
