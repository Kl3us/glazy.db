const fs = require("fs");
const YAML = require("yaml");

module.exports = class YamlDB {

constructor() {
this.data = {};
this.yaml =  "./database.yaml";
if(!fs.existsSync(this.yaml)){
    fs.writeFileSync(this.yaml, "", "utf-8");
} else {
    this.saveFolder();
};
};

saveFolder(){
    const savedData = YAML.parse(this.yaml);
    if(typeof savedData == "object"){
        this.data = savedData;
    };
};

saveDataToFile(){
    fs.writeFileSync(this.yaml, YAML.stringify(this.data, null, 4), "utf-8");
};


get(key){
    return this.data[key];
};

has(key){
    return Boolean(this.data[key]);
};


set(key, value){
    this.data[key] = value;
    this.saveDataToFile();
};


delete(key){
    delete this.data[key];
    this.saveDataToFile();
};


add(key, count){
    if(!this.data[key]) this.data[key] = 0;
    this.data[key] += count;
    this.saveDataToFile();
};



push(key, element){
    if (!this.data[key]) this.data[key] = [];
    this.data[key].push(element);
    this.saveDataToFile();
};


deleteAll(){
    this.data = {};
    this.saveDataToFile();
};


all(){
    return Object.keys(this.data).map((key) => {
        return {
            key,
            data: this.data[key]
        };
    });
};


fetchAll(){
    return Object.keys(this.data).map((key) => {
        return {
            key,
            data: this.data[key]
        };
    });
};


getAll(){
    return Object.keys(this.data).map((key) => {
        return {
            key,
            data: this.data[key]
        };
    });
};

};