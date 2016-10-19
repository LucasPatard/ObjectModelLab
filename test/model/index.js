import expect from 'expect';

import {Sensor,
        Data,
        Datum,
        TimeSeries,
        enumeration
}from '../../src/model';

import  { data }  from './sensors_data'
console.log(data.length);

console.log(typeof (enumeration))
describe('Test class Sensor ', () => {
     let s = new Sensor(data[0])
    it('Sensor doit posseder un id qui est un nombre', () => {
        expect(s.id).toBeA('number');
    });
    it('Sensor doit posseder un nom qui est une chaine', () => {
        expect(s.name).toBeA('string');
    });
    it('Sensor doit pointer sur un object de type Data', () => {
        expect(s.data).toBeA(Data);
    });
    it('Sensor doit avoir un type contenus dans enumeration', () => {
        expect(enumeration).toInclude(s.type);
    });
});

describe('Test heritage Data ', () => {
    let s = new Sensor(data[0])
    it('TimeSeries doit heriter de Data', () => {
        expect(s.data).toBeA(Data);
    });
    s = new Sensor(data[1])
    it('Datum doit heriter de Data', () => {
        expect(s.data).toBeA(Data) ;
    });

});

describe('Test class Datum ', () => {
    let s = new Sensor(data[1])
    it('Datum doit posseder une value qui est un nombre', () => {
        expect(s.data.value).toBeA('number');
    });
});

describe('Test class TimeSeries ', () => {
    let s = new Sensor(data[0])
    it('TimeSeries doit posseder values qui est un tableau d entiers', () => {
        expect(s.data.values).toBeA(Array) && s.data.values.every(value => expect(value).toBeA('number'));
    });

    it('TimeSeries doit posseder labels qui est un tableau de chaine', () => {
        expect(s.data.labels).toBeA(Array) && s.data.labels.every(value => expect(value).toBeA('string'));
    });

});




