# Get all Patients

**URL** : `/patients`

**Method** : `GET`

**Auth required** : YES

## Success Response

**Code** : `200 OK`

**Content example**

```json
{
  //Example of Success Response
[
    {
        "id": 20,
        "name": "Julia",
        "lastName": "Apellido20",
        "phone": "809-565-4343",
        "email": "julia@example.com",
        "password": "password987"
    },
 {}... ]
}
```

## Error Response

**Condition** : If 'path route' is wrong.

**Code** : `404 BAD REQUEST`

**Content** :

```String
"Route not found"
```

- [Back](../../README.md) : `MainPage`
