# Frontend

## General Idea

A web chat app, providing users with one-on-one chats, group chats and channels.

## Requirements

### User should be able to:

- Register
  - [ ] create an account
- Login
  - [ ] log into the existing account
  - [ ] verify their email
  - [ ] reset their password if they forgot it
- Manage their account
  - [ ] change their account information
- Connect to other users
  - [ ] send a connection request to another user
  - [ ] approve connection request
  - [ ] reject connection request
- Have a chat with their connections
  - [ ] select a chat
  - [ ] receive messages
  - [ ] see if there are unread messages in the chat
  - [ ] send text messages
  - [ ] send files

## Services

### RegistrationService
```js
  registerAccount(
    username: string,
    email: string,
    password: string,
  ) => void
```

### AuthService
```js
  login(
    email: string,
    password: string,
  ) => User

  verifyEmail(
    email: string,
  ) => void

  resetPassword(
    email: string,
  ) => void
```

### SettingsService 
```js
  getSettings() => Settings
  updateSettings(Partial<Settings>) => Settings
```

### ChatProviderService
```js
  getChats() => ChatList
```

### MessagingService
```js
  MessagingService(chatId: number); 

  sendMessage(message: Message) => void
```

### ConnectionService
```js
  ConnectionService();
```

### NotificationService 
```js
  NotificationService(chatId: number);
  subscribe() => 
```