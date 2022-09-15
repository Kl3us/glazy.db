const fs = require("fs");
module.exports = class database {

   
    constructor(filePath){

        this.jsonFilePath = filePath || "./Database.json";

    
        this.data = {};

        if(!fs.existsSync(this.jsonFilePath)){
            fs.writeFileSync(this.jsonFilePath, "{}", "utf-8");
        } else {
            this.findData();
        }
    }

   
    findData(){
        const savedData = JSON.parse(fs.readFileSync(this.jsonFilePath));
        if(typeof savedData === "object"){
            this.data = savedData;
        }
    }

   
    saveDataToFile(){
        fs.writeFileSync(this.jsonFilePath, JSON.stringify(this.data, null, 2), "utf-8");
    }
on(fonksiyon , config) {
        if(fonksiyon=="connect"){
        let content;
        if(config.content){
        content = config.content
        
        console.log(content)}
        
        else throw Error("Modül bağlanınca olan mesaj belirtilmedi! ")}

        if(fonksiyon=="addedData"){
        if(config.message){
        addmsg = config.message}
        else {
            throw Error("addedData Message İs Undefined")
        }
        }}
  
    get(key){
        if(!key) throw new TypeError("You Not Entered a Key")
        return this.data[key];
    }

   fetch(key){
       if(!key) throw new TypeError("You Not Entered a Key")
        return this.data[key];
    }

    has(key){
        if(!key) throw new TypeError("You Not Entered a Key")
        return Boolean(this.data[key]);
    }
    

    set(key, value){
        if(!key) throw new TypeError("You Not Entered a Key")
        if(!value) throw new TypeError("You Not Entered a Value")
        this.data[key] = value;
        this.saveDataToFile();
        return value;
    }

   
    delete(key){
        if(!key) throw new TypeError("You Not Entered a Key")
        delete this.data[key];
        this.saveDataToFile();
    }


    add(key, count){
        if(!key) throw new TypeError("You Not Entered a Key")
        if(!value) throw new TypeError("You Not Entered a Value")
        if(!this.data[key]) this.data[key] = 0;
        this.data[key] += count;
        this.saveDataToFile();
        return count;
    }


    subtract(key, count){
        if(!key) throw new TypeError("You Not Entered a Key")
        if(!count) throw new TypeError("You Not Entered a Count")
        if(!this.data[key]) this.data[key] = 0;
        this.data[key] -= count;
        this.saveDataToFile();
        return this.data[key];
    }

 
    push(key, element){
        if(!key) throw new TypeError("You Not Entered a Key")
        if(!element) throw new TypeError("You Not Entered an Element")
        if (!this.data[key]) this.data[key] = [];
        this.data[key].push(element);
        this.saveDataToFile();
        return element;
    }


    deleteAll(){

        return `glazy.db: Deleted All Files `
    
        setTimeout(function(){
            return `glazy.db: Deleted All Files. `
       this.data = {};
        this.saveDataToFile();
        }, 5000)
    
    } 
    
    

};