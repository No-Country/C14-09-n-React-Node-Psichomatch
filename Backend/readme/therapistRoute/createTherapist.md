# Create Therapist

**URL** : `/therapist/create`

**Method** : `POST`

**Auth required** : YES

**Description** : Add a therapist in DB.

## Required Dates
```
  Body parameter:
    - name -> String
    - lastname -> String
    - adress -> String

  Query parameter:
    - none
```


## Optional Dates
```
  Body parameter:
    - price -> Number<Float>
    - phone -> String
    - image -> Img-Format
    - description -> String
    - email -> email-format
    - password -> password-format

  Query parameter:
    - none
```

## Success Response

**Code** : `200 OK`

**Content example**

```json
{
  //Example of Success Response
  [         
    {
            "id": 12,
            "name": "José",
            "lastName": "López",
            "price": 300,
            "phone": "567890124",
            "adress": "Calle mayor 790",
            "image": "https://terapify.s3.amazonaws.com/1646441800780__Psic%C3%B3logo%20en%20linea-%20Jos%C3%A9%20Luis%20Herver%20Terapify-min.png",
            // this is a example img
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt quam ut quam ultricies, et vehicula quam scelerisque.",
            "isActive": true,
            "email": "test12@gmail.com",
            "password": "12346"
    },
    
    {
        ...
    },
  ],
  "totalPages": 4
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
