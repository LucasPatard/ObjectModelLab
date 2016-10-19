
class Data{
    constructor(){
    }

}
class Datum extends Data{
    constructor(data){
        super();
        this.value = data.value
    }
    get value(){
        return this.value;
    }
    set value(val){
        this.value = val;
    }
}
class TimeSeries extends Data{
    constructor(data){
        super();
        this.values= data.values;
        this.label = data.label;
    }
    get values(){
        return this.values;
    }
    set values(val){
        this.values = val;
    }
    get label(){
        return this.label;
    }
    set label(val){
        this.label = val;
    }
}
class Sensor{
    constructor(data){
        this.id = data .id
        this.name = data.name
        this.data = new Data(data)

    }

}
