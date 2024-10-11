
# Starting the project

A simple website to demonstrate some data about the teams in the biggest championship in the world.


## Installation

First make sure to install the project dependencies
use the command 
  ```bash
	npm i
  ``` 
or 
  ```bash
	npm install
  ```
at the root of the project

With that done, let's initialize our database
use the command
```bash
	npm run json-server
```
After that, start the project
use the command
```bash
	npm start
```

Now have fun with this institutional website
    
## API Documentation

#### Returns one item

```http
  GET /teams/${id}
```

| Parameter   | Type       | Description                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `number` | **Mandatory**. The ID of the item you want |


## Color Documentation

| Color               | Hexadecimal                                                |
| ----------------- | ---------------------------------------------------------------- |
| Linear gradient Color      |  #000000, #222222, #000000 |
| Linear gradient Color       |  #DDD9CE, #FAF9F7, #DDD9CE |
| Alpine Color         | #0093CC  |
| Racing Bulls Color   | #6692FF  |
| Red Bull Color       | #3671C6  |
| Williams Color       | #64C4FF  |
| Haas Color          | #B6BABD  |
| Aston Martin Color  | #229971  |
| Sauber Color        | #3DC726  |
| Mercedes Color      | #27F4D2  |
| McLaren Color      | #FF8000  |
| Ferrari Color         | #E80020  |
| Ice White          | #DDD9CE  |
| Pure White         | #FAF9F7  |
| Black              | #000000  |
| Gray               | #222222  |
| White Gray         | #E4E8EA  |


