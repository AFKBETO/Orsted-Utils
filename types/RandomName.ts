export class RandomName {
    private _maleNames: string[] = [];
    private _femaleNames: string[] = [];
    public constructor(maleNames: string[], femaleNames: string[]) {
        this._maleNames = maleNames;
        this._femaleNames = femaleNames;
    }
    public get(gender?: 'male' | 'female'): string {
        const isRandomGenderMale = gender === undefined &&
            Math.floor(Math.random() * 10) !== 0;
        if (isRandomGenderMale || gender === 'male') {
            return this._maleNames.randomItem();
        }
        return this._femaleNames.randomItem();
    }
}
