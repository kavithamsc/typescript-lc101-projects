import { Cargo } from "./Cargo";
import { Astronaut } from "./Astronaut";
import { Payload } from "./Payload";

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];

    constructor (name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }

    addCargo(cargo: Cargo) : boolean {
        if ( this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        }
        return false;
    }

    addAustranauts(astronaut: Astronaut) : boolean {
        if ( this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        }
        return false;
    }

    canAdd(item: Payload): boolean {
        return this.currentMassKg() + item.massKg <= this.totalCapacityKg
    }

    currentMassKg (): number {
        let cargoTotalWeight = this. sumMass(this.cargoItems)
        let astItemsTotal = this.sumMass(this.astronauts);
        return cargoTotalWeight + astItemsTotal;
    }

    sumMass(items: Payload[]): number {
        //return items.reduce((sum, item) => sum + item.massKg, 0);

        let totalWeight: number = 0;
        for (let i = 0; i < items.length; i++) {
            totalWeight += items[i].massKg;
        }

        return totalWeight;
      }

}