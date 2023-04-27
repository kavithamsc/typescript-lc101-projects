import { Cargo } from './Cargo';
import { Astronaut } from './Astronaut';
class Rocket {
    name : string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut [] = [];
    constructor(name: string , totalCapacityKg : number){
      this.name = name;
      this.totalCapacityKg= totalCapacityKg;
    }
}