## Shipper next assignment

Features:

- Show randomUser data from https://randomuser.me/api/?results=30 to List Card
- Save randomUser data after first fetch using redux persist and not be removed after refresh
- Previous / next page using slice to get 6 item from state randomUser data

Stack: 
- **Typescript**
- **NextJS**: using next api random-user.ts for request API
- **swr** : for fetching data
- **styled-component** : Styling
- **storageSession**: stored data will be removed if tab or browser is closed
- **typed-to-reducer**
- **reduxjs-toolkit**
