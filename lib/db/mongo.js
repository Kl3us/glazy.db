
const { Database } = require("quickmongo");


module.exports = class Mongo {

constructor(url) {
    if(!url || typeof url != "string" || !url.startsWith("mongodb")) throw new TypeError("Lütfen Bir MongoDB URL'si Giriniz.");
   this.db = new Database(url);
};
async set(key,value) {
    if(!key) throw new TypeError("You Not Entered a Key")
    if(!value) throw new TypeError("You Not Entered a Value")
    
    
    let data_set = await this.db.set(key,value)
    return data_set;
};
async add(key,count){
    if(!key) throw new TypeError("You Not Entered a Key")
    if(!count) throw new TypeError("You Not Entered a Count")
    
    
    let data_add = await this.db.add(key,count)
    return data_add;
};
async push(key,value){
    if(!key) throw new TypeError("You Not Entered a Key")
    if(!value) throw new TypeError("You Not Entered a Value")
    
    
    let data_push = await this.db.push(key,value)
    return data_push;
};
async get(key){
    if(!key) throw new TypeError("You Not Entered a Key")
    
    let data_get = await this.db.get(key)
    return data_get
};
async has(key){
    if(!key) throw new TypeError("You Not Entered a Key")
  let data_has = await this.db.has(key);
  return data_has;
 };
 async delete(key){
     if(!key) throw new TypeError("You Not Entered a Key")
  let data_delete = await this.db.delete(key);
  return data_delete;
 };

 async deleteAll(){
  let data_clearAll = await this.db.deleteAll();
  return data_clearAll;
 };
 async all(){
  let data_all = await this.db.all();
  return data_all;
 };
 async fromAll(){
  let data_all = await this.db.all();
  return data_all;
 };
 _get(){
const start = Date.now();
		this.db.get("glazy.db");
		return Date.now() - start;
}
_set(){
    const start = Date.now();
		this.db.set("glazy.db", "glazy.db");
		
		return Date.now() - start;
}
ping(){
    const read = this._get();
		const write = this._set();
		const average = (read + write) / 2;
		this.db.delete("glazy.db")
		return {
			read: `${read}ms`,
			write: `${write}ms`,
			average: `${average}ms`
		};
}
                    }