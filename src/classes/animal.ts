export class Animals {
    public name: string
    public habitat: string
    readonly ageEstimated: number

    constructor (name:string, habitat: string, ageEstimated: number){
        this.name = name,
        this.habitat = habitat,
        this.ageEstimated = ageEstimated
    }
}

// inheritance
export class Mammals extends Animals {
    isMammals: boolean

    constructor (name:string, habitat: string, ageEstimated: number, isMammals:boolean, ){
        super(name, habitat, ageEstimated)
        this.isMammals = isMammals
    }

    confirm(){
        if (this.isMammals == true) {
            return (`${this.name} is a mammals`)
        }
    }
}
