import { EnumToArrayPipe } from "./enum-to-Array.pipe";

describe('enumToArray', () => {


    it('should return array from enum', () => {
        enum MockGenreTypes {
            Action = "action"
        }
        let pipe = new EnumToArrayPipe();
        expect(pipe.transform(MockGenreTypes)).toEqual(['Action'])
    });
})