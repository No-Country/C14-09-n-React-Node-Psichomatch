# Login Patient

**URL** : `/patient/login`

**Method** : `POST`

**Auth required** : No

**Data constraints**

```json
{
  "patientEmail": "Email",
  "password": "PASSWORD"
}
```

**Data example**

```json
{
  "patientEmail": "zeduard89@gmail.com",
  "password": "123456"
}
```

## Success Response

**Code** : `200 OK`

**Content example**

```json
{
  "message": "true"
}
```

## Success Response

**Code** : `400 NO`

**Content example**

```json
{
  "message": "false"
}
```

## Error Response

**Condition** : If 'email' don't exist.

**Code** : `500 BAD REQUEST`

- [Back](../../README.md) : `MainPage`
