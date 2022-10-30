
## Added!: Esm6 Support, Mongo DB Support, Performance Updates


## glazy.db - Json Tabanlı Gelişmiş Modül! 

## Website Using
```js

<script>
const Database = require("./Database.json")
Database.add("used", +1) //Example
</script>
```

## Esm6 Setup [BETA!];
```yaml
import { JsonDB, YamlDB, MongoDB } from 'glazy.db'
```


# Setup
## JsonDB;
```js
const Database = require("glazy.db");
const db = new Database.JsonDB("./database.json")
```

## YamlDB;
```yaml
const Database = require("glazy.db")
const db = new Database.YamlDB("./database.yaml")
```


## MongoDB;
```yaml
const Database = require("glazy.db")
const db = new Database.MongoDB("mongo urlniz")
```


# Tanımlama;

```js
// Json db için
db.on("connect",{ 
content: "VeriTabanı Aktifleştirildi! "
})
```

```js
 - Veriyi Türüne Göre Bulmak:
 db.has("value", "key")
 ```

```js
- Veriyi kaydetmek:
db.push("value", {Developer: "Klaus"})
 ```


```js
- Veriyi Eklemek:
db.set("value", "value");
```

```js
- Veriyi Aktarmak:
db.get("value");
```

```js
-Veriyi Kontrol Etmek:
db.fetch("value");
```

```js
- Veriye Miktar Ekleme:
db.add("value", 1); 
```

```js
- Veriyi Silme:
db.delete("value");
```


```js
- Tüm Veriyi Gösterme:
db.all(); 
``` 

```js
- Tüm Veriyi Silme:
db.deleteAll(); 
``` 
