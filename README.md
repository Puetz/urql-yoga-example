```
{
  user(id: "1"){

    id
    name
    age
    address {
      city
    }
  }
}
```

```
mutation {
  updateAge(input: {id: "2", age: 18}){
    id
    name
    age
  }
}
```
